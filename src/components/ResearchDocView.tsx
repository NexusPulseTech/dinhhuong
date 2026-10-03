import React, { useState } from 'react';
import { Copy, Check, BookOpen, Layers, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { RESEARCH_AND_DESIGN_REPORT } from '../data/researchReport';

export const ResearchDocView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = () => {
    const text = `# ${RESEARCH_AND_DESIGN_REPORT.title}
Tác giả: ${RESEARCH_AND_DESIGN_REPORT.author}
Phiên bản: ${RESEARCH_AND_DESIGN_REPORT.version} - ${RESEARCH_AND_DESIGN_REPORT.date}

${RESEARCH_AND_DESIGN_REPORT.abstract}

---
## ${RESEARCH_AND_DESIGN_REPORT.partA.title}
### ${RESEARCH_AND_DESIGN_REPORT.partA.section1.title}
${RESEARCH_AND_DESIGN_REPORT.partA.section1.hollandTheory}
${RESEARCH_AND_DESIGN_REPORT.partA.section1.dimensions.map(d => `- **${d.code}**: ${d.desc}`).join('\n')}

### ${RESEARCH_AND_DESIGN_REPORT.partA.section2.title}
${RESEARCH_AND_DESIGN_REPORT.partA.section2.d01Focus}
${RESEARCH_AND_DESIGN_REPORT.partA.section2.regions.map(r => `#### ${r.name}\n- Trung tâm: ${r.hubs}\n- Thế mạnh: ${r.strengths}`).join('\n\n')}

### ${RESEARCH_AND_DESIGN_REPORT.partA.section3.title}
${RESEARCH_AND_DESIGN_REPORT.partA.section3.salaryInsights.map(s => `- ${s}`).join('\n')}

---
## ${RESEARCH_AND_DESIGN_REPORT.partB.title}
### ${RESEARCH_AND_DESIGN_REPORT.partB.section4.title}
${RESEARCH_AND_DESIGN_REPORT.partB.section4.featureDescription}
${RESEARCH_AND_DESIGN_REPORT.partB.section4.fields.map(f => `- ${f}`).join('\n')}

### ${RESEARCH_AND_DESIGN_REPORT.partB.section5.title}
${RESEARCH_AND_DESIGN_REPORT.partB.section5.mobileGuidelines.map(m => `- ${m}`).join('\n')}
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8">
      {/* Document Header */}
      <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs mb-5 space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#0071e3] border border-slate-200/60 dark:border-slate-700/60">
              Tài liệu nghiên cứu khoa học
            </span>
            <h1 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {RESEARCH_AND_DESIGN_REPORT.title}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {RESEARCH_AND_DESIGN_REPORT.author} • {RESEARCH_AND_DESIGN_REPORT.version} ({RESEARCH_AND_DESIGN_REPORT.date})
            </p>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium cursor-pointer transition-colors duration-150 active:scale-[0.98] shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2} /> : <Copy className="w-3.5 h-3.5" strokeWidth={1.75} />}
            <span>{copied ? 'Đã sao chép Markdown' : 'Sao chép tài liệu'}</span>
          </button>
        </div>

        <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
          "{RESEARCH_AND_DESIGN_REPORT.abstract}"
        </div>
      </div>

      {/* Part A */}
      <div className="space-y-4 mb-6">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-[#0071e3]" strokeWidth={1.75} />
          {RESEARCH_AND_DESIGN_REPORT.partA.title}
        </h2>

        {/* Section 1: Holland */}
        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-3">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-100">
            {RESEARCH_AND_DESIGN_REPORT.partA.section1.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {RESEARCH_AND_DESIGN_REPORT.partA.section1.hollandTheory}
          </p>

          <div className="grid gap-2">
            {RESEARCH_AND_DESIGN_REPORT.partA.section1.dimensions.map((dim, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-0.5 text-xs">
                <div className="font-semibold text-slate-900 dark:text-slate-200">{dim.code}</div>
                <div className="text-slate-600 dark:text-slate-400">{dim.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 3 Regions */}
        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-3">
          <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-100">
            {RESEARCH_AND_DESIGN_REPORT.partA.section2.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {RESEARCH_AND_DESIGN_REPORT.partA.section2.d01Focus}
          </p>

          <div className="grid gap-2">
            {RESEARCH_AND_DESIGN_REPORT.partA.section2.regions.map((reg, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 space-y-1 text-xs">
                <div className="font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0071e3]" /> {reg.name}
                </div>
                <div className="text-slate-600 dark:text-slate-300"><strong className="text-slate-800 dark:text-slate-200">Trường trọng điểm: </strong>{reg.hubs}</div>
                <div className="text-slate-500 dark:text-slate-400">{reg.strengths}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Salary */}
        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-2.5 text-xs">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            {RESEARCH_AND_DESIGN_REPORT.partA.section3.title}
          </h3>
          <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
            {RESEARCH_AND_DESIGN_REPORT.partA.section3.salaryInsights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#0071e3] mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Part B */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-[#0071e3]" strokeWidth={1.75} />
          {RESEARCH_AND_DESIGN_REPORT.partB.title}
        </h2>

        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-3 text-xs">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            {RESEARCH_AND_DESIGN_REPORT.partB.section4.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {RESEARCH_AND_DESIGN_REPORT.partB.section4.featureDescription}
          </p>

          <div className="space-y-1.5">
            {RESEARCH_AND_DESIGN_REPORT.partB.section4.fields.map((f, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0d1117] border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300">
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#161b22] border border-slate-200/80 dark:border-slate-800/80 shadow-xs space-y-2.5 text-xs">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            {RESEARCH_AND_DESIGN_REPORT.partB.section5.title}
          </h3>
          <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
            {RESEARCH_AND_DESIGN_REPORT.partB.section5.mobileGuidelines.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
