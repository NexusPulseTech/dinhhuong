import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Search, Building2, Bookmark, BookmarkCheck, ArrowRight, X, BookOpen, GraduationCap, CheckCircle2, AlertTriangle, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { MAJORS_DATA } from '../data/majors';
import { Major, MajorCategory } from '../types';

interface MajorExplorerProps {
  selectedMajorId: string | null;
  onSelectMajor: (id: string | null) => void;
  savedMajorIds: string[];
  onToggleSaveMajor: (id: string) => void;
  onCompareWith: (majorId: string) => void;
}

export const MajorExplorer: React.FC<MajorExplorerProps> = ({
  selectedMajorId,
  onSelectMajor,
  savedMajorIds,
  onToggleSaveMajor,
  onCompareWith
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlock, setSelectedBlock] = useState<string>('Tất cả');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [selectedRegion, setSelectedRegion] = useState<'Tất cả' | 'Bắc' | 'Trung' | 'Nam'>('Tất cả');
  const [activeModalTab, setActiveModalTab] = useState<'traits' | 'schools' | 'curriculum' | 'salary'>('traits');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const ITEMS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  // Reset pagination when search or filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchQuery, selectedBlock, selectedCategory]);

  const admissionBlocks = ['Tất cả', 'D01', 'A00', 'A01', 'B00', 'C00', 'D07'];
  const categories = [
    'Tất cả',
    'Marketing & Tiếp thị',
    'Truyền thông & Báo chí',
    'Công nghệ thông tin & AI',
    'Kinh tế & Chuỗi cung ứng',
    'Tài chính & Ngân hàng',
    'Ngôn ngữ & Ngôn ngữ học',
    'Luật & Pháp lý',
    'Y Dược & Sức khỏe',
    'Thiết kế & Nghệ thuật số'
  ];

  const popularSearches = [
    'Truyền thông',
    'Marketing',
    'Công nghệ thông tin',
    'Khoa học dữ liệu & AI',
    'Kinh doanh quốc tế',
    'Tài chính - Ngân hàng',
    'Y đa khoa',
    'Dược học',
    'Luật kinh tế',
    'Thiết kế đồ họa',
    'Ngôn ngữ Anh'
  ];

  // Keyboard shortcut: Press "/" to focus search; Press "Escape" to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && selectedMajorId) {
        onSelectMajor(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMajorId, onSelectMajor]);

  const filteredMajors = MAJORS_DATA.filter(major => {
    const matchesSearch = major.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      major.code.includes(searchQuery) ||
      major.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      major.personalityTraits.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      major.universities.some(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesBlock = selectedBlock === 'Tất cả' || major.admissionBlocks.includes(selectedBlock);
    const matchesCategory = selectedCategory === 'Tất cả' || major.category === selectedCategory || major.sector === selectedCategory;

    return matchesSearch && matchesBlock && matchesCategory;
  });

  const activeMajor = MAJORS_DATA.find(m => m.id === selectedMajorId);

  // Compute Search Insights when searching or filtering
  const searchInsights = React.useMemo(() => {
    if (!searchQuery.trim() && selectedCategory === 'Tất cả') return null;
    if (filteredMajors.length === 0) return null;

    const matchedTraits = Array.from(new Set(filteredMajors.flatMap(m => m.personalityTraits))).slice(0, 5);
    const matchedSectors = Array.from(new Set(filteredMajors.map(m => m.sector)));
    const matchedBlocks = Array.from(new Set(filteredMajors.flatMap(m => m.admissionBlocks)));
    const allUnis = filteredMajors.flatMap(m => m.universities);
    const topUnisBắc = allUnis.filter(u => u.region === 'Bắc').slice(0, 3);
    const topUnisNam = allUnis.filter(u => u.region === 'Nam').slice(0, 3);
    const topUnisTrung = allUnis.filter(u => u.region === 'Trung').slice(0, 2);

    return {
      query: searchQuery.trim() || selectedCategory,
      count: filteredMajors.length,
      traits: matchedTraits,
      sectors: matchedSectors,
      blocks: matchedBlocks,
      topUnisBắc,
      topUnisNam,
      topUnisTrung,
      firstMajor: filteredMajors[0]
    };
  }, [searchQuery, selectedCategory, filteredMajors]);

  // Filter universities inside modal by selectedRegion
  const modalUniversities = activeMajor?.universities.filter(u =>
    selectedRegion === 'Tất cả' || u.region === selectedRegion
  ) || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8">
      {/* Search Header for Mobile & Desktop */}
      <div className="mb-4 sm:mb-6 space-y-1">
        <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Tra cứu chuyên ngành toàn quốc
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Tìm kiếm theo tên ngành, mã số Bộ GD&ĐT, khối thi (D01, A00, A01, B00...) hoặc tính cách phù hợp.
        </p>
      </div>

      {/* iOS Styled Search Field */}
      <div className="space-y-3 mb-5">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm 'truyền thông', 'công nghệ thông tin', 'y đa khoa', '7340115'..."
            className="w-full pl-9 pr-9 py-2.5 bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#0071e3] transition-colors shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills 1: Admission Blocks (Tự động trượt ngang chậm sang trái, dừng khi hover) */}
        <div className="relative w-full max-w-full min-w-0 overflow-hidden py-0.5">
          {/* Subtle edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#fbfbfd] dark:from-[#0d1117] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#fbfbfd] dark:from-[#0d1117] to-transparent" />

          <div className="animate-marquee-left flex items-center gap-1.5 py-0.5 text-xs">
            <span className="text-[11px] font-semibold text-slate-400 shrink-0 whitespace-nowrap px-1">Khối thi:</span>
            {[...admissionBlocks, ...admissionBlocks, ...admissionBlocks, ...admissionBlocks].map((blk, idx) => (
              <button
                key={`${blk}-${idx}`}
                onClick={() => setSelectedBlock(blk)}
                className={`h-7 px-3 rounded-full text-xs font-medium cursor-pointer transition-all duration-150 shrink-0 whitespace-nowrap active:scale-[0.96] ${
                  selectedBlock === blk
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-xs'
                    : 'bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {blk}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Pills 2: Categories (Tự động trượt ngang chậm so le sang phải, dừng khi hover) */}
        <div className="relative w-full max-w-full min-w-0 overflow-hidden py-0.5">
          {/* Subtle edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#fbfbfd] dark:from-[#0d1117] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#fbfbfd] dark:from-[#0d1117] to-transparent" />

          <div className="animate-marquee-right flex items-center gap-1.5 py-0.5 text-xs">
            <span className="text-[11px] font-semibold text-slate-400 shrink-0 whitespace-nowrap px-1">Nhóm ngành:</span>
            {[...categories, ...categories, ...categories].map((cat, idx) => (
              <button
                key={`${cat}-${idx}`}
                onClick={() => setSelectedCategory(cat)}
                className={`h-7 px-3 rounded-full text-xs font-medium cursor-pointer transition-all duration-150 shrink-0 whitespace-nowrap active:scale-[0.96] ${
                  selectedCategory === cat
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-xs'
                    : 'bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Suggestion Tags (Tự động trượt ngang chậm sang trái so le, dừng khi hover) */}
        <div className="relative w-full max-w-full min-w-0 overflow-hidden py-0.5">
          {/* Subtle edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#fbfbfd] dark:from-[#0d1117] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#fbfbfd] dark:from-[#0d1117] to-transparent" />

          <div className="animate-marquee-left flex items-center gap-1.5 py-0.5 text-[11px]">
            <span className="text-slate-400 shrink-0 font-medium whitespace-nowrap px-1">Gợi ý:</span>
            {[...popularSearches, ...popularSearches, ...popularSearches, ...popularSearches].map((term, idx) => (
              <button
                key={`${term}-${idx}`}
                onClick={() => {
                  setSearchQuery(term);
                  setSelectedCategory('Tất cả');
                }}
                className="h-6 px-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 cursor-pointer shrink-0 whitespace-nowrap active:scale-95 transition-all"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Search Insights Box (Clean Linear-style card, no clashing gradient or childish icons) */}
      {searchInsights && (
        <div className="mb-5 p-4 rounded-xl bg-slate-50 dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-2xs space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100">
              <Search className="w-3.5 h-3.5 text-[#0071e3]" strokeWidth={2} />
              <span>Phân tích định hướng: &quot;{searchInsights.query}&quot;</span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {searchInsights.count} chuyên ngành
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Cột 1: Tố chất & Tính cách phù hợp */}
            <div className="space-y-1.5 p-3 rounded-lg bg-white dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60">
              <div className="font-semibold text-slate-900 dark:text-slate-100">
                Đặc điểm & Tố chất:
              </div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-[11.5px]">
                {searchInsights.traits.map((trait, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#0071e3] font-bold">•</span>
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                Khối xét tuyển: <strong className="text-slate-700 dark:text-slate-200">{searchInsights.blocks.join(', ')}</strong>
              </div>
            </div>

            {/* Cột 2: Trường đại học đào tạo tiêu biểu */}
            <div className="space-y-1.5 p-3 rounded-lg bg-white dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60">
              <div className="font-semibold text-slate-900 dark:text-slate-100">
                Cơ sở đào tạo tiêu biểu:
              </div>
              <div className="space-y-1 text-[11.5px] text-slate-600 dark:text-slate-300">
                {searchInsights.topUnisBắc.length > 0 && (
                  <div>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Miền Bắc:</span> {searchInsights.topUnisBắc.map(u => u.name.split('(')[1]?.replace(')', '') || u.name).slice(0, 3).join(', ')}
                  </div>
                )}
                {searchInsights.topUnisTrung.length > 0 && (
                  <div>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Miền Trung:</span> {searchInsights.topUnisTrung.map(u => u.name.split('(')[1]?.replace(')', '') || u.name).slice(0, 2).join(', ')}
                  </div>
                )}
                {searchInsights.topUnisNam.length > 0 && (
                  <div>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Miền Nam:</span> {searchInsights.topUnisNam.map(u => u.name.split('(')[1]?.replace(')', '') || u.name).slice(0, 3).join(', ')}
                  </div>
                )}
              </div>
              <div className="pt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                Lương khởi điểm: {searchInsights.firstMajor.salaryBands.freshGrad}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-3 px-1">
        <span>
          Đang hiển thị <strong className="text-slate-900 dark:text-slate-200">{Math.min(visibleCount, filteredMajors.length)}</strong> trên tổng số <strong className="text-slate-900 dark:text-slate-200">{filteredMajors.length}</strong> chuyên ngành
        </span>
      </div>

      {/* Major Cards List (Optimized for Mobile Touch) */}
      <div className="space-y-3">
        {filteredMajors.slice(0, visibleCount).map((major) => {
          const isSaved = savedMajorIds.includes(major.id);
          return (
            <div
              key={major.id}
              onClick={() => onSelectMajor(major.id)}
              className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-150 cursor-pointer space-y-3 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 whitespace-nowrap">
                      Mã: {major.code}
                    </span>
                    <span className="text-[11px] text-[#0071e3] font-semibold whitespace-nowrap">
                      Khối: {major.admissionBlocks.join(', ')}
                    </span>
                    <span className="text-[11px] text-slate-400 hidden sm:inline whitespace-nowrap">
                      • {major.category}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 group-hover:text-[#0071e3] transition-colors break-words">
                    {major.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {major.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSaveMajor(major.id);
                    }}
                    title={isSaved ? 'Bỏ lưu' : 'Lưu vào danh sách'}
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer transition-colors"
                  >
                    {isSaved ? (
                      <BookmarkCheck className="w-4 h-4 text-[#0071e3]" strokeWidth={2} />
                    ) : (
                      <Bookmark className="w-4 h-4" strokeWidth={1.5} />
                    )}
                  </button>
                  <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                </div>
              </div>

              {/* Personality Traits Chips (Đặc điểm phù hợp) */}
              <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                <span className="text-[10px] uppercase font-bold text-slate-400 mr-0.5 whitespace-nowrap">Hợp với:</span>
                {major.personalityTraits.slice(0, 3).map((trait, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 whitespace-nowrap"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              {/* Quick Info Bar - Truncate long salary and clean click action */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2 min-w-0">
                <div className="flex items-center gap-1.5 min-w-0 flex-1 overflow-hidden" title={`Lương khởi điểm: ${major.salaryBands.freshGrad}`}>
                  <span className="shrink-0 text-slate-400 text-[11px] whitespace-nowrap">Lương khởi điểm:</span>
                  <strong className="text-slate-900 dark:text-slate-200 truncate font-semibold block min-w-0">
                    {major.salaryBands.freshGrad}
                  </strong>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectMajor(major.id);
                  }}
                  className="text-[11px] text-[#0071e3] font-semibold shrink-0 whitespace-nowrap group-hover:underline cursor-pointer flex items-center gap-0.5"
                >
                  Xem chi tiết ➔
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination / Load More Controls (Giới hạn trang khi dài quá) */}
      {filteredMajors.length > ITEMS_PER_PAGE && (
        <div className="pt-5 pb-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            Hiển thị <strong>{Math.min(visibleCount, filteredMajors.length)}</strong> / <strong>{filteredMajors.length}</strong> chuyên ngành
          </span>

          <div className="flex items-center gap-2">
            {visibleCount < filteredMajors.length && (
              <button
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
                className="h-9 px-4 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium cursor-pointer transition-colors shadow-2xs active:scale-[0.98]"
              >
                Xem thêm 6 ngành nữa ({filteredMajors.length - visibleCount} còn lại)
              </button>
            )}

            {visibleCount > ITEMS_PER_PAGE && (
              <button
                onClick={() => {
                  setVisibleCount(ITEMS_PER_PAGE);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-9 px-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#161b22] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer transition-colors active:scale-[0.98]"
              >
                Thu gọn về đầu trang
              </button>
            )}
          </div>
        </div>
      )}

      {/* iOS-Style Modal Sheet Rendered via React Portal */}
      {activeMajor && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4 bg-slate-950/60 dark:bg-black/80 backdrop-blur-xs">
          <div className="bg-white dark:bg-[#161b22] border-t sm:border border-slate-200 dark:border-slate-800 rounded-t-3xl sm:rounded-2xl w-full max-w-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col pb-[calc(env(safe-area-inset-bottom,16px)+16px)] sm:pb-0">
            {/* iOS Pull Indicator for Mobile */}
            <div className="w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mt-2.5 mb-1 sm:hidden shrink-0" />

            {/* Modal Header */}
            <div className="sticky top-0 z-10 px-5 pt-3 pb-3 bg-white/95 dark:bg-[#161b22]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#0071e3] border border-slate-200/60 dark:border-slate-700/60">
                    Mã Bộ: {activeMajor.code}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Khối: {activeMajor.admissionBlocks.join(', ')}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {activeMajor.name}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{activeMajor.tagline}</p>
              </div>

              <button
                onClick={() => onSelectMajor(null)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </div>

            {/* Modal Segmented Navigation Bar */}
            <div className="px-5 pt-2 border-b border-slate-200/80 dark:border-slate-800/80 flex gap-3 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveModalTab('traits')}
                className={`pb-2 px-1 text-xs font-medium border-b-2 cursor-pointer whitespace-nowrap transition-colors ${
                  activeModalTab === 'traits'
                    ? 'border-[#0071e3] text-[#0071e3] font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Đặc điểm & Tính cách
              </button>
              <button
                onClick={() => setActiveModalTab('schools')}
                className={`pb-2 px-1 text-xs font-medium border-b-2 cursor-pointer whitespace-nowrap transition-colors ${
                  activeModalTab === 'schools'
                    ? 'border-[#0071e3] text-[#0071e3] font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Trường & Điểm chuẩn
              </button>
              <button
                onClick={() => setActiveModalTab('curriculum')}
                className={`pb-2 px-1 text-xs font-medium border-b-2 cursor-pointer whitespace-nowrap transition-colors ${
                  activeModalTab === 'curriculum'
                    ? 'border-[#0071e3] text-[#0071e3] font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Học gì & Việc làm
              </button>
              <button
                onClick={() => setActiveModalTab('salary')}
                className={`pb-2 px-1 text-xs font-medium border-b-2 cursor-pointer whitespace-nowrap transition-colors ${
                  activeModalTab === 'salary'
                    ? 'border-[#0071e3] text-[#0071e3] font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Mức lương & Lộ trình
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4 flex-1 text-xs">
              {activeModalTab === 'traits' && (
                <div className="space-y-4">
                  {/* Summary */}
                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                    <span className="font-semibold text-slate-900 dark:text-slate-200">Bản chất nghề nghiệp:</span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{activeMajor.summary}</p>
                  </div>

                  {/* Suitable For (Ai hợp) */}
                  <div className="p-3.5 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-500/30 space-y-2">
                    <span className="font-semibold text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" strokeWidth={2} /> Bạn RẤT PHÙ HỢP nếu có các đặc điểm:
                    </span>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                      {activeMajor.suitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Unsuitable For (Cân nhắc kỹ) */}
                  <div className="p-3.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-500/30 space-y-2">
                    <span className="font-semibold text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" strokeWidth={2} /> CÂN NHẮC KỸ TRƯỚC KHI CHỌN NẾU:
                    </span>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                      {activeMajor.unsuitableFor.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-600 dark:text-amber-400 mt-0.5">!</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bias Debunking */}
                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-1.5 text-xs">
                    <div>
                      <span className="font-semibold text-slate-500 dark:text-slate-400">Quan niệm sai lầm: </span>
                      <span className="text-slate-700 dark:text-slate-300">{activeMajor.biasDebunking.myth}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Thực tế tuyển dụng: </span>
                      <span className="text-slate-700 dark:text-slate-300">{activeMajor.biasDebunking.reality}</span>
                    </div>
                  </div>

                  {/* AI Impact */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60">
                    <div className="text-slate-400 text-[11px]">Tác động của Trí tuệ nhân tạo (AI):</div>
                    <div className="text-slate-900 dark:text-slate-200 font-medium mt-0.5 leading-relaxed">{activeMajor.comparisonCriteria.aiImpact}</div>
                  </div>
                </div>
              )}

              {activeModalTab === 'schools' && (
                <div className="space-y-3">
                  {/* Region Filter */}
                  <div className="flex items-center gap-1.5 pb-1">
                    <span className="text-slate-400 text-[11px]">Khu vực:</span>
                    {(['Tất cả', 'Bắc', 'Trung', 'Nam'] as const).map(reg => (
                      <button
                        key={reg}
                        onClick={() => setSelectedRegion(reg)}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium cursor-pointer transition-colors ${
                          selectedRegion === reg
                            ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {reg}
                      </button>
                    ))}
                  </div>

                  {/* University Cards */}
                  <div className="space-y-2">
                    {modalUniversities.map((uni, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {uni.region}
                            </span>
                            <strong className="text-slate-900 dark:text-slate-100 font-medium">{uni.name}</strong>
                          </div>
                          <span className="font-semibold text-slate-900 dark:text-slate-200 shrink-0">
                            {uni.cutoff2024}
                          </span>
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 flex items-center justify-between text-[11px]">
                          <span>Học phí: {uni.tuitionPerYear}</span>
                          <span className="truncate max-w-[280px]">{uni.strengths}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeModalTab === 'curriculum' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#0071e3]" /> Môn học cốt lõi
                    </h4>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      {activeMajor.whatYouStudy.coreFoundations.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#0071e3]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Vị trí công việc thực tế
                    </h4>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      {activeMajor.whatYouDo.entryRoles.map((role, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 dark:text-emerald-400">✓</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeModalTab === 'salary' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60">
                      <div className="text-[10px] text-slate-400">Thực tập sinh</div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{activeMajor.salaryBands.internship}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Mới tốt nghiệp</div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{activeMajor.salaryBands.freshGrad}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60">
                      <div className="text-[10px] text-slate-400">3–5 năm</div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{activeMajor.salaryBands.midLevel}</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60">
                      <div className="text-[10px] text-slate-400">5+ năm / Lead</div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 mt-0.5">{activeMajor.salaryBands.management}</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-1.5 text-xs">
                    <span className="font-semibold text-slate-900 dark:text-slate-200">Lộ trình hành động chuẩn:</span>
                    <div><strong className="text-slate-900 dark:text-slate-100">Lớp 12: </strong>{activeMajor.roadmap.grade12Prep}</div>
                    <div><strong className="text-slate-900 dark:text-slate-100">Đại học: </strong>{activeMajor.roadmap.year1_2}</div>
                    <div><strong className="text-slate-900 dark:text-slate-100">Ra trường: </strong>{activeMajor.roadmap.postGrad}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between pb-[calc(env(safe-area-inset-bottom,8px)+12px)] sm:pb-4">
              <button
                onClick={() => onToggleSaveMajor(activeMajor.id)}
                className="h-8 px-3 rounded-lg border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-[#161b22] text-slate-700 dark:text-slate-300 text-xs font-medium cursor-pointer"
              >
                {savedMajorIds.includes(activeMajor.id) ? 'Đã lưu' : 'Lưu ngành'}
              </button>

              <button
                onClick={() => {
                  onCompareWith(activeMajor.id);
                  onSelectMajor(null);
                }}
                className="h-8 px-4 rounded-lg bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium cursor-pointer shadow-2xs flex items-center gap-1.5"
              >
                <span>Đưa vào bàn cân so sánh</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
