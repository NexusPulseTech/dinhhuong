import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Lightbulb,
  ExternalLink,
  Printer,
  FileDown,
  Loader2,
  Sparkles,
  BookOpen,
  Target,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { COMPREHENSIVE_QUESTIONS, ASSESSMENT_MODULES } from '../data/assessment/riasecBank';
import { evaluateAssessment } from '../data/assessment/scoringEngine';
import { MAJORS_DATA } from '../data/majors';
import { RIASECScore, UserAssessmentState } from '../types';
import { exportReportToPdf } from '../utils/pdfExport';

interface MentorChatProps {
  userState: UserAssessmentState;
  setUserState: React.Dispatch<React.SetStateAction<UserAssessmentState>>;
  onSelectMajor: (majorId: string) => void;
  onNavigateToCompare: () => void;
}

export const MentorChat: React.FC<MentorChatProps> = ({
  userState,
  setUserState,
  onSelectMajor,
  onNavigateToCompare,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [pdfSuccessMessage, setPdfSuccessMessage] = useState<string | null>(null);

  const totalQuestions = COMPREHENSIVE_QUESTIONS.length;
  const question = COMPREHENSIVE_QUESTIONS[currentStep];

  // Active module calculation
  const currentModule = ASSESSMENT_MODULES.find(m => m.questionIds.includes(question.id)) || ASSESSMENT_MODULES[0];

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setShowExplanation(true);
  };

  const handleConfirmNext = () => {
    if (selectedOption === null) return;

    const opt = question.options[selectedOption];
    const newScores: RIASECScore = { ...userState.riasecScore };

    // Apply delta
    if (opt.riasecDelta) {
      Object.entries(opt.riasecDelta).forEach(([key, val]) => {
        const k = key as keyof RIASECScore;
        newScores[k] = (newScores[k] || 0) + (val || 0);
      });
    }

    const updatedAnswers = { ...userState.answers, [question.id]: selectedOption };
    const isLast = currentStep === totalQuestions - 1;

    setUserState(prev => ({
      ...prev,
      answers: updatedAnswers,
      riasecScore: newScores,
      completed: isLast ? true : prev.completed
    }));

    if (isLast) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setUserState(prev => ({
      ...prev,
      answers: {},
      riasecScore: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },
      completed: false
    }));
    setCurrentStep(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  // Evaluate assessment results with psychometric scoring engine
  const evaluation = evaluateAssessment(userState.riasecScore, MAJORS_DATA, userState.targetBlock);
  const { archetype, topMatches } = evaluation;

  // Direct PDF Download Handler
  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    setPdfSuccessMessage(null);
    try {
      const studentClean = (userState.userName || 'HocSinh').trim().replace(/\s+/g, '_');
      const fileName = `BaoCao_HuongNghiep_${studentClean}_NexusPulse.pdf`;
      const success = await exportReportToPdf('printable-results', fileName);
      if (success) {
        setPdfSuccessMessage('Đã tải tệp PDF về máy thành công!');
        setTimeout(() => setPdfSuccessMessage(null), 4000);
      }
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Direct Word (.doc) Download Handler
  const handleDownloadWord = () => {
    const currentDate = new Date().toLocaleDateString('vi-VN');
    const studentName = userState.userName || 'Học sinh';
    const targetBlock = userState.targetBlock || 'Toàn quốc';

    const wordHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>NexusPulse - Báo Cáo Hướng Nghiệp</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1e293b; padding: 24px; }
    h1 { color: #0071e3; font-size: 20pt; margin-bottom: 2px; }
    .subtitle { color: #64748b; font-size: 11pt; margin-bottom: 18px; }
    .table-info { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .table-info td { padding: 8px 12px; border: 1px solid #cbd5e1; background: #f8fafc; font-size: 10pt; }
    .archetype-box { background: #f0f7ff; border-left: 5px solid #0071e3; padding: 14px 18px; margin-bottom: 20px; }
    .archetype-title { font-size: 15pt; font-weight: bold; color: #0071e3; margin-bottom: 4px; }
    .section-title { font-size: 13pt; font-weight: bold; color: #0f172a; border-bottom: 1.5px solid #e2e8f0; padding-bottom: 4px; margin-top: 22px; margin-bottom: 10px; }
    .grid-box { background: #ffffff; border: 1px solid #e2e8f0; padding: 10px 14px; margin-bottom: 10px; border-radius: 6px; }
    .major-card { border: 1px solid #cbd5e1; padding: 12px 16px; margin-bottom: 12px; border-radius: 6px; background: #ffffff; }
    .major-name { font-size: 12pt; font-weight: bold; color: #0f172a; }
    .badge { background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 9pt; font-weight: bold; }
    .score-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    .score-table th { background: #0071e3; color: white; padding: 6px 10px; font-size: 9.5pt; text-align: left; }
    .score-table td { padding: 6px 10px; border: 1px solid #e2e8f0; font-size: 9.5pt; }
  </style>
</head>
<body>
  <h1>NexusPulse - BÁO CÁO ĐỊNH HƯỚNG NGHỀ NGHIỆP THPT</h1>
  <div class="subtitle">Nền tảng hướng nghiệp & phân tích tính cách chuẩn khoa học O*NET • Ngày lập: ${currentDate}</div>

  <table class="table-info">
    <tr>
      <td><strong>Họ và tên học sinh:</strong> ${studentName}</td>
      <td><strong>Khối thi mục tiêu:</strong> ${targetBlock}</td>
    </tr>
  </table>

  <div class="archetype-box">
    <div class="archetype-title">${archetype.title}</div>
    <div style="font-style: italic; color: #334155; margin-bottom: 8px;">${archetype.tagline}</div>
    <p style="font-size: 10.5pt; color: #1e293b;">${archetype.description}</p>
  </div>

  <div class="section-title">1. BẢN ĐỒ TÍNH CÁCH & NĂNG LỰC CỐT LÕI</div>
  <div class="grid-box">
    <strong>⚡ 4 Thế mạnh bẩm sinh:</strong>
    <ul>
      ${archetype.strengths.map(s => `<li>${s}</li>`).join('')}
    </ul>
  </div>
  <div class="grid-box">
    <strong>🌱 Môi trường làm việc lý tưởng:</strong>
    <p>${archetype.idealEnvironment}</p>
  </div>
  <div class="grid-box">
    <strong>⚠️ Cạm bẫy nghề nghiệp cần tránh:</strong>
    <p>${archetype.blindspot}</p>
  </div>
  <div class="grid-box">
    <strong>🎯 Chiến lược phát triển thành công:</strong>
    <p>${archetype.successStrategy}</p>
  </div>

  <div class="section-title">2. THƯỚC ĐO NĂNG LỰC RIASEC (JOHN HOLLAND)</div>
  <table class="score-table">
    <tr>
      <th>Nhóm tính cách</th>
      <th>Điểm số</th>
      <th>Đặc trưng nghề nghiệp</th>
    </tr>
    <tr><td>A - Artistic (Sáng tạo)</td><td>+${userState.riasecScore.A}</td><td>Thiết kế, Truyền thông số, Quảng cáo, Nghệ thuật</td></tr>
    <tr><td>E - Enterprising (Kinh doanh)</td><td>+${userState.riasecScore.E}</td><td>Marketing, Tài chính, Thương mại quốc tế, Lãnh đạo</td></tr>
    <tr><td>I - Investigative (Nghiên cứu)</td><td>+${userState.riasecScore.I}</td><td>Khoa học dữ liệu, AI, Kỹ thuật phần mềm, Y khoa</td></tr>
    <tr><td>S - Social (Xã hội)</td><td>+${userState.riasecScore.S}</td><td>Y tế, Dược học, Quan hệ công chúng, Giáo dục</td></tr>
    <tr><td>C - Conventional (Quy củ)</td><td>+${userState.riasecScore.C}</td><td>Logistics, Kiểm toán, Quản trị hệ thống, Pháp lý</td></tr>
    <tr><td>R - Realistic (Thực tế)</td><td>+${userState.riasecScore.R}</td><td>Kỹ thuật thao tác, Chế tạo, Chuỗi cung ứng vận hành</td></tr>
  </table>

  <div class="section-title">3. TOP 5 CHUYÊN NGÀNH ĐẠI HỌC TƯƠNG THÍCH NHẤT</div>
  ${topMatches.slice(0, 5).map((m, idx) => `
    <div class="major-card">
      <div class="major-name">#${idx + 1}. ${m.major.name} <span class="badge">Độ khớp: ${m.score}%</span></div>
      <p style="margin: 4px 0; font-size: 10pt; color: #475569;">
        <strong>Mã ngành:</strong> ${m.major.code} | <strong>Khối xét tuyển:</strong> ${m.major.admissionBlocks.join(', ')} | <strong>Lương khởi điểm:</strong> ${m.major.salaryBands.freshGrad}
      </p>
      <p style="margin: 4px 0; font-size: 10pt; color: #1e293b;">
        <strong>Lý do phù hợp:</strong> ${m.reason}
      </p>
      <p style="margin: 4px 0; font-size: 9.5pt; color: #64748b;">
        <strong>Trường đào tạo tiêu biểu:</strong> ${m.major.universities.map(u => u.name).slice(0, 3).join(', ')}
      </p>
    </div>
  `).join('')}

  <p style="text-align: center; font-size: 9pt; color: #94a3b8; margin-top: 30px;">
    Tài liệu tạo tự động bởi NexusPulse - Định Hướng • Báo cáo có giá trị tham khảo lưu hành nội bộ
  </p>
</body>
</html>
    `;

    const blob = new Blob(['\ufeff' + wordHtml], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BaoCao_HuongNghiep_${studentName.replace(/\s+/g, '_')}_NexusPulse.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
      {/* Header Info */}
      <div className="mb-5 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#0071e3] border border-blue-200/60 dark:border-blue-800/50 whitespace-nowrap">
                O*NET & Holland RIASEC
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">Định hướng THPT toàn quốc</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 break-words">
              Trắc nghiệm định hướng năng lực nghề nghiệp
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Hệ thống 16 tình huống khoa học bóc tách 3 vector độc lập: Bản năng tự nhiên, Năng lực nhận thức và Mỏ neo nghề nghiệp.
            </p>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-[#0d1117] border border-slate-200/80 dark:border-slate-800/80 rounded-xl text-xs space-y-1.5 shrink-0 min-w-[210px] w-full sm:w-auto">
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">Họ và tên:</span>
              <input
                type="text"
                value={userState.userName}
                onChange={(e) => setUserState(prev => ({ ...prev, userName: e.target.value }))}
                placeholder="Nhập tên bạn..."
                className="text-right font-semibold text-slate-900 dark:text-slate-100 bg-transparent border-b border-dashed border-slate-300 dark:border-slate-700 focus:outline-none focus:border-[#0071e3] text-xs py-0.5 w-28"
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">Khối mục tiêu:</span>
              <select
                value={userState.targetBlock}
                onChange={(e) => setUserState(prev => ({ ...prev, targetBlock: e.target.value }))}
                className="text-right text-[#0071e3] font-semibold bg-transparent border-none cursor-pointer focus:outline-none text-xs"
              >
                <option value="Toàn quốc">Toàn quốc</option>
                <option value="D01">Khối D01</option>
                <option value="A00">Khối A00</option>
                <option value="A01">Khối A01</option>
                <option value="B00">Khối B00</option>
                <option value="C00">Khối C00</option>
                <option value="D07">Khối D07</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {!userState.completed ? (
        /* Quiz Interface */
        <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
          {/* Module Indicator Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 text-[11px]">
            {ASSESSMENT_MODULES.map((mod, idx) => {
              const isCurrentModule = mod.id === currentModule.id;
              const isPassed = question.id > mod.questionIds[mod.questionIds.length - 1];
              return (
                <div
                  key={mod.id}
                  className={`px-2 py-1.5 rounded-lg flex items-center gap-1.5 transition-all truncate ${
                    isCurrentModule
                      ? 'bg-white dark:bg-slate-800 text-[#0071e3] font-bold shadow-2xs'
                      : isPassed
                      ? 'text-emerald-600 dark:text-emerald-400 font-medium'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full text-[9px] flex items-center justify-center shrink-0 ${
                    isCurrentModule
                      ? 'bg-[#0071e3] text-white'
                      : isPassed
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {isPassed ? '✓' : idx + 1}
                  </span>
                  <span className="truncate whitespace-nowrap">M{idx + 1}</span>
                </div>
              );
            })}
          </div>

          {/* Progress Bar & Indicators */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-[11px] whitespace-nowrap">
                  {currentModule.name}
                </span>
                <span>• Câu <strong className="text-slate-900 dark:text-slate-100">{currentStep + 1}</strong>/{totalQuestions}</span>
              </span>
              <span className="font-semibold text-[#0071e3]">{Math.round(((currentStep + 1) / totalQuestions) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#0071e3] h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Prompt */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug break-words">
              {question.mentorPrompt}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {question.subNote}
            </p>
          </div>

          {/* Options (Minimum 44px touch targets, stable layout) */}
          <div className="space-y-2.5">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-150 cursor-pointer active:scale-[0.99] flex flex-col gap-1.5 min-h-[52px] ${
                    isSelected
                      ? 'border-[#0071e3] bg-blue-50/50 dark:bg-blue-950/20 shadow-xs'
                      : 'border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-[#161b22] hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-[#0071e3] bg-blue-50 dark:bg-blue-900/40 px-2.5 py-0.5 rounded-full inline-flex items-center shrink-0 whitespace-nowrap">
                      {opt.badge}
                    </span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#0071e3] bg-[#0071e3]' : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal break-words">
                    {opt.text}
                  </p>

                  {isSelected && opt.insightNote && (
                    <div className="mt-1 p-2.5 rounded-lg bg-white/80 dark:bg-[#0d1117] border border-blue-200/50 dark:border-blue-800/40 text-[11.5px] text-slate-600 dark:text-slate-300 flex items-start gap-1.5 animate-fadeIn">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{opt.insightNote}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Bar */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer flex items-center gap-1 min-h-[44px] px-2"
            >
              <RotateCcw className="w-3.5 h-3.5" /> <span className="whitespace-nowrap">Bắt đầu lại</span>
            </button>

            <button
              disabled={selectedOption === null}
              onClick={handleConfirmNext}
              className={`flex items-center gap-1.5 h-11 px-6 rounded-full text-xs font-semibold transition-all duration-150 active:scale-[0.97] whitespace-nowrap min-w-[120px] justify-center ${
                selectedOption !== null
                  ? 'bg-[#0071e3] hover:bg-[#0077ed] text-white cursor-pointer shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200/60 dark:border-slate-800'
              }`}
            >
              <span>{currentStep === totalQuestions - 1 ? 'Xem kết quả đánh giá' : 'Tiếp tục'}</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      ) : (
        /* Results View (Bản đồ nhận diện bản thân 1 lần test biết mình là ai) */
        <div id="printable-results" className="space-y-6">
          {/* Main Persona Archetype Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="space-y-1.5 min-w-0">
                <div className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-bold whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.2} />
                  KẾT QUẢ ĐỊNH HƯỚNG NGHỀ NGHIỆP NEXUSPULSE
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight break-words">
                  {archetype.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  {archetype.tagline}
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[11px] font-medium">
                  <Compass className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>Mỏ neo nghề nghiệp: <strong>{archetype.careerAnchors}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 no-print">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 h-9 px-4 rounded-full border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" strokeWidth={2} />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>

            {/* Psychological Overview */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-slate-100">Bản chất nhận thức: </strong>
              {archetype.description}
            </div>

            {/* 4 Key Dimensions: Strengths, Ideal Environment, Blindspot, Strategy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/70 dark:border-slate-800/70 space-y-1.5">
                <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" strokeWidth={2} />
                  <span>4 Thế mạnh bẩm sinh:</span>
                </div>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-[11.5px]">
                  {archetype.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-[#0071e3] font-bold">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/70 dark:border-slate-800/70 space-y-1.5">
                <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 whitespace-nowrap">
                  <Target className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" strokeWidth={2} />
                  <span>Môi trường làm việc lý tưởng:</span>
                </div>
                <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {archetype.idealEnvironment}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/70 dark:border-slate-800/70 space-y-1.5">
                <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 whitespace-nowrap">
                  <ShieldAlert className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" strokeWidth={2} />
                  <span>Cạm bẫy nghề nghiệp cần tránh:</span>
                </div>
                <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {archetype.blindspot}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/70 dark:border-slate-800/70 space-y-1.5">
                <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 whitespace-nowrap">
                  <BookOpen className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" strokeWidth={2} />
                  <span>Chiến lược phát triển:</span>
                </div>
                <p className="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {archetype.successStrategy}
                </p>
              </div>
            </div>

            {/* Visual RIASEC Progress Bar Grid (Clean, consistent monochrome styling) */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Thước đo phân bổ năng lực RIASEC (Chuẩn O*NET Hoa Kỳ):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { code: 'A', name: 'Artistic (Sáng tạo)', val: userState.riasecScore.A },
                  { code: 'E', name: 'Enterprising (Kinh doanh)', val: userState.riasecScore.E },
                  { code: 'I', name: 'Investigative (Nghiên cứu)', val: userState.riasecScore.I },
                  { code: 'S', name: 'Social (Xã hội & Con người)', val: userState.riasecScore.S },
                  { code: 'C', name: 'Conventional (Quy củ & Số liệu)', val: userState.riasecScore.C },
                  { code: 'R', name: 'Realistic (Kỹ thuật & Thao tác)', val: userState.riasecScore.R },
                ].map((item) => (
                  <div key={item.code} className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-1">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-medium text-slate-700 dark:text-slate-300 truncate">{item.name}</span>
                      <strong className="text-slate-900 dark:text-slate-100">+{item.val}</strong>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#0071e3]"
                        style={{ width: `${Math.min(100, Math.max(10, (item.val / 30) * 100))}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Export Action Bar (Instant PDF & Word Download) */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 dark:bg-[#0d1117]/60 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/60 no-print">
              <div className="text-xs text-slate-600 dark:text-slate-300 text-center sm:text-left space-y-0.5">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">Tải về hồ sơ hướng nghiệp:</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Xuất trực tiếp tệp PDF hoặc Word (.doc) về máy để lưu trữ và xem lại.</span>
                {pdfSuccessMessage && (
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold block text-[11px] animate-fadeIn">
                    ✓ {pdfSuccessMessage}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  disabled={isGeneratingPdf}
                  onClick={handleDownloadPdf}
                  className="flex-1 sm:flex-none h-11 px-5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 cursor-pointer transition-all duration-150 active:scale-[0.97] flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
                >
                  {isGeneratingPdf ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang tạo PDF...</span>
                    </>
                  ) : (
                    <>
                      <Printer className="w-4 h-4" strokeWidth={2} />
                      <span>Tải file PDF</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleDownloadWord}
                  className="flex-1 sm:flex-none h-11 px-5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold cursor-pointer transition-all duration-150 active:scale-[0.97] flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
                >
                  <FileDown className="w-4 h-4" strokeWidth={2} />
                  <span>Tải file Word (.doc)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Top 5 Recommended Majors */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Top 5 chuyên ngành có độ tương thích cao nhất
              </h3>
              <button
                onClick={onNavigateToCompare}
                className="text-xs font-medium text-[#0071e3] hover:underline flex items-center gap-1 cursor-pointer no-print whitespace-nowrap"
              >
                So sánh 10 tiêu chí <ExternalLink className="w-3 h-3" strokeWidth={1.75} />
              </button>
            </div>

            <div className="grid gap-3">
              {topMatches.slice(0, 5).map((match, rank) => (
                <div
                  key={match.major.id}
                  className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 whitespace-nowrap">
                          #{rank + 1}
                        </span>
                        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 whitespace-nowrap">
                          Mã: {match.major.code}
                        </span>
                        <span className="text-[11px] text-[#0071e3] font-semibold whitespace-nowrap">
                          Khối: {match.major.admissionBlocks.join(', ')}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 break-words">
                        {match.major.name}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {match.reason}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0">
                      <div className="text-right">
                        <span className="text-[11px] text-slate-400 whitespace-nowrap">Độ tương thích:</span>
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{match.score}%</div>
                      </div>
                      <button
                        onClick={() => onSelectMajor(match.major.id)}
                        className="h-9 px-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold cursor-pointer transition-colors duration-150 active:scale-[0.98] shadow-2xs no-print whitespace-nowrap"
                      >
                        Chi tiết môn & trường
                      </button>
                    </div>
                  </div>

                  {/* Alignment Breakdown Chips */}
                  <div className="pt-1 flex items-center gap-2 flex-wrap text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md text-slate-700 dark:text-slate-300">
                      {match.alignmentBreakdown.primaryFit}
                    </span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md text-slate-700 dark:text-slate-300">
                      {match.alignmentBreakdown.cognitiveStrength}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {match.alignmentBreakdown.careerUpside}
                    </span>
                  </div>

                  {/* Bias Debunking Alert */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800 text-xs flex items-start gap-2">
                    <span className="text-rose-500 font-semibold shrink-0 whitespace-nowrap">Lưu ý định kiến:</span>
                    <span className="text-slate-600 dark:text-slate-300 text-[11.5px] leading-relaxed">
                      {match.major.biasDebunking.myth} ➔ <strong className="text-slate-900 dark:text-slate-100">{match.major.biasDebunking.reality}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action To Compare */}
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800 text-center space-y-2 no-print">
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Phân vân giữa các lựa chọn ngành nghề? Đặt lên bàn cân để phân tích ngay:
            </p>
            <button
              onClick={onNavigateToCompare}
              className="h-10 px-5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold cursor-pointer transition-colors duration-150 active:scale-[0.98] inline-flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
            >
              <span>Mở bàn cân so sánh 10 tiêu chí</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
