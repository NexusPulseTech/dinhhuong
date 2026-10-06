/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { MentorChat } from './components/MentorChat';
import { MajorExplorer } from './components/MajorExplorer';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ResearchDocView } from './components/ResearchDocView';
import { UserAssessmentState } from './types';
import { useTheme } from './hooks/useTheme';
import { Compass, Mail, Linkedin } from 'lucide-react';
import { applyEvergreenSEO } from './utils/seo';

const LOCAL_STORAGE_KEY = 'nexuspulse_user_profile_v3';

const DEFAULT_USER_STATE: UserAssessmentState = {
  userName: 'Học sinh',
  targetBlock: 'Toàn quốc',
  targetRegion: 'Toàn quốc',
  interests: ['Công nghệ', 'Kinh tế', 'Truyền thông', 'Y Dược'],
  answers: {},
  riasecScore: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },
  completed: false,
  savedMajorIds: ['cong-nghe-thong-tin', 'marketing', 'truyen-thong-da-phuong-tien'],
  notes: 'Đang tìm kiếm chuyên ngành phù hợp với năng khiếu và tính cách.'
};

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabType>('explorer');
  const [selectedMajorForModal, setSelectedMajorForModal] = useState<string | null>(null);

  const [userState, setUserState] = useState<UserAssessmentState>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load profile from storage:', e);
    }
    return DEFAULT_USER_STATE;
  });

  // Evergreen SEO: Tự động cập nhật tiêu đề, chu kỳ tuyển sinh và schema theo thời gian thực
  useEffect(() => {
    applyEvergreenSEO();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userState));
    } catch (e) {
      console.error('Failed to save profile to storage:', e);
    }
  }, [userState]);

  const handleToggleSaveMajor = (majorId: string) => {
    setUserState(prev => {
      const exists = prev.savedMajorIds.includes(majorId);
      const updated = exists
        ? prev.savedMajorIds.filter(id => id !== majorId)
        : [...prev.savedMajorIds, majorId];
      return { ...prev, savedMajorIds: updated };
    });
  };

  const handleSelectMajorFromAnywhere = (majorId: string | null) => {
    setSelectedMajorForModal(majorId);
    if (majorId) {
      setActiveTab('explorer');
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden bg-[#fbfbfd] text-slate-900 dark:bg-[#0d1117] dark:text-slate-100 transition-colors duration-150">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Workspace Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6 overflow-x-hidden">
        {activeTab === 'explorer' && (
          <MajorExplorer
            selectedMajorId={selectedMajorForModal}
            onSelectMajor={setSelectedMajorForModal}
            savedMajorIds={userState.savedMajorIds}
            onToggleSaveMajor={handleToggleSaveMajor}
            onCompareWith={() => setActiveTab('comparison')}
          />
        )}

        {activeTab === 'chat' && (
          <MentorChat
            userState={userState}
            setUserState={setUserState}
            onSelectMajor={handleSelectMajorFromAnywhere}
            onNavigateToCompare={() => setActiveTab('comparison')}
          />
        )}

        {activeTab === 'comparison' && (
          <ComparisonMatrix
            onSelectMajor={handleSelectMajorFromAnywhere}
            onNavigateToExplorer={() => setActiveTab('explorer')}
          />
        )}

        {activeTab === 'report' && (
          <ResearchDocView />
        )}
      </main>

      {/* Clean Contact & Info Footer (Safe from mobile navbar) */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#0d1117]/80 py-6 px-4 text-xs text-slate-500 dark:text-slate-400 mb-[calc(env(safe-area-inset-bottom,16px)+68px)] md:mb-0">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <div className="w-6 h-6 rounded-md bg-[#0071e3] text-white flex items-center justify-center shrink-0">
              <Compass className="w-3.5 h-3.5" strokeWidth={2.2} />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100">NexusPulse - Định Hướng</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex items-center gap-3 text-[11px] flex-wrap justify-center">
            <a
              href="mailto:nguyenhoangphuc7077@gmail.com"
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-[#0071e3] dark:hover:text-[#0071e3] transition-colors bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60"
              title="Gửi email liên hệ"
            >
              <Mail className="w-3.5 h-3.5 text-[#0071e3]" strokeWidth={1.75} />
              <span className="font-medium">nguyenhoangphuc7077@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/william-nguyen-arch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-[#0071e3] dark:hover:text-[#0071e3] transition-colors bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0071e3]" strokeWidth={1.75} />
              <span className="font-medium">William Nguyen</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
