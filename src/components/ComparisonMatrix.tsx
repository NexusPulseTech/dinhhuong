import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { MAJORS_DATA } from '../data/majors';
import { Major } from '../types';

interface ComparisonMatrixProps {
  onSelectMajor: (id: string) => void;
  onNavigateToExplorer: () => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ onSelectMajor, onNavigateToExplorer }) => {
  const [selectedMajorIds, setSelectedMajorIds] = useState<string[]>([
    'cong-nghe-thong-tin',
    'marketing',
    'truyen-thong-da-phuong-tien'
  ]);

  const activeMajors = selectedMajorIds
    .map(id => MAJORS_DATA.find(m => m.id === id))
    .filter(Boolean) as Major[];

  const handleSelectSlot = (slotIdx: number, newId: string) => {
    const updated = [...selectedMajorIds];
    updated[slotIdx] = newId;
    setSelectedMajorIds(updated);
  };

  const comparisonRows = [
    {
      label: '1. Bản chất cốt lõi',
      desc: 'Môn học & đối tượng nghiên cứu chính',
      getValue: (m: Major) => m.comparisonCriteria.coreNature,
      highlight: true
    },
    {
      label: '2. Đặc điểm & Tính cách',
      desc: 'Hợp với người như thế nào',
      getValue: (m: Major) => m.personalityTraits.join(', '),
      highlight: true
    },
    {
      label: '3. Công việc khi mới ra trường',
      desc: 'Chức danh vị trí tuyển dụng thực tế',
      getValue: (m: Major) => m.whatYouDo.entryRoles.slice(0, 3).join(', ')
    },
    {
      label: '4. Lương mới tốt nghiệp (0–2 năm)',
      desc: 'Khảo sát TopCV & Navigos 2025–2026',
      getValue: (m: Major) => m.salaryBands.freshGrad,
      highlight: true
    },
    {
      label: '5. Thu nhập sau 5+ năm',
      desc: 'Vị trí Lead / Giám đốc / Làm chủ',
      getValue: (m: Major) => m.salaryBands.management
    },
    {
      label: '6. Tác động của Trí tuệ Nhân tạo (AI)',
      desc: 'Mức độ bị AI thay thế hoặc tự động hóa',
      getValue: (m: Major) => m.comparisonCriteria.aiImpact,
      highlight: true
    },
    {
      label: '7. Khả năng làm Freelance / Remote',
      desc: 'Nhận dự án tự do, làm việc từ xa',
      getValue: (m: Major) => m.comparisonCriteria.freelancePotential
    },
    {
      label: '8. Tự khởi nghiệp / Mở Agency',
      desc: 'Cơ hội tự làm chủ sau 3–5 năm',
      getValue: (m: Major) => m.comparisonCriteria.agencyOrBusiness
    },
    {
      label: '9. Áp lực công việc thực tế',
      desc: 'KPI doanh số vs Deadline thức khuya',
      getValue: (m: Major) => m.comparisonCriteria.pressureLevel
    },
    {
      label: '10. Triển vọng thị trường 2026–2030',
      desc: 'Nhu cầu tuyển dụng 5 năm tới',
      getValue: (m: Major) => m.comparisonCriteria.marketDemand2025_2030,
      highlight: true
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-5 space-y-1">
        <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Bàn cân so sánh chuyên ngành
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Tùy chọn 3 ngành bất kỳ trong hệ thống để đối chiếu 10 tiêu chí thực tế về tính cách, cơ hội việc làm và mức lương.
        </p>
      </div>

      {/* Selectors for 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
        {selectedMajorIds.map((currentId, slotIdx) => (
          <div key={slotIdx} className="p-3 bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 rounded-xl space-y-1 shadow-2xs">
            <span className="text-[11px] text-slate-400 font-medium">Ngành {slotIdx + 1}:</span>
            <select
              value={currentId}
              onChange={(e) => handleSelectSlot(slotIdx, e.target.value)}
              className="w-full bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0071e3] font-medium cursor-pointer"
            >
              {MAJORS_DATA.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.code})
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* High-density Comparison Table */}
      <div className="bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-2xs mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#0d1117] border-b border-slate-200/80 dark:border-slate-800/80">
                <th className="p-3.5 sm:p-4 w-1/4 min-w-[160px] text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Tiêu chí đối chiếu
                </th>
                {activeMajors.map((major) => (
                  <th key={major.id} className="p-3.5 sm:p-4 w-1/4 min-w-[200px] border-l border-slate-200/80 dark:border-slate-800/80">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {major.code}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{major.name}</h3>
                      <button
                        onClick={() => onSelectMajor(major.id)}
                        className="text-[11px] text-[#0071e3] hover:underline font-medium cursor-pointer"
                      >
                        Chi tiết môn học ➔
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.highlight ? 'bg-slate-50/50 dark:bg-[#0d1117]/40' : ''
                  }`}
                >
                  <td className="p-3.5 sm:p-4 align-top">
                    <div className="font-medium text-slate-900 dark:text-slate-100">{row.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{row.desc}</div>
                  </td>

                  {activeMajors.map((major) => (
                    <td key={major.id} className="p-3.5 sm:p-4 align-top border-l border-slate-200/80 dark:border-slate-800/80 leading-relaxed text-slate-600 dark:text-slate-300">
                      <div className={row.highlight ? 'font-medium text-slate-900 dark:text-slate-200' : ''}>
                        {row.getValue(major)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dynamic Summary Cards for the 3 selected majors */}
      <div className="p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Tóm tắt nhanh 3 ngành đang đối chiếu
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {activeMajors.map((major, idx) => (
            <div key={major.id} className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
              <h4 className="font-semibold text-slate-900 dark:text-slate-200">
                {idx + 1}. {major.name}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {major.summary}
              </p>
              <div className="text-[11px] text-[#0071e3] font-medium pt-1">
                Lương mới tốt nghiệp: {major.salaryBands.freshGrad}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-1">
          <button
            onClick={onNavigateToExplorer}
            className="h-8 px-4 rounded-lg bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-xs cursor-pointer transition-colors duration-150 active:scale-[0.98] shadow-2xs flex items-center gap-1.5"
          >
            <span>Khám phá danh sách các trường đào tạo</span>
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  );
};
