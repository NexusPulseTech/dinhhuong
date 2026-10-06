import React from 'react';
import { Compass, Search, Scale, FileText, Sun, Moon } from 'lucide-react';
import { Theme } from '../hooks/useTheme';

export type TabType = 'explorer' | 'chat' | 'comparison' | 'report';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  theme,
  onToggleTheme,
}) => {
  const navItems = [
    { id: 'explorer' as const, label: 'Tra cứu ngành', icon: Search },
    { id: 'chat' as const, label: 'Trắc nghiệm', icon: Compass },
    { id: 'comparison' as const, label: 'So sánh ngành', icon: Scale },
    { id: 'report' as const, label: 'Dữ liệu nghiên cứu', icon: FileText },
  ];

  return (
    <>
      {/* Top Navbar for Desktop and iPad */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 dark:bg-[#0d1117]/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-150">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                onClick={() => setActiveTab('explorer')}
                className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0071e3] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-95 transition-transform duration-150">
                  <Compass className="w-4 h-4 text-white" strokeWidth={2.2} />
                </div>
                <div className="min-w-0 flex items-center gap-2">
                  <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100">
                    NexusPulse <span className="text-[#0071e3] font-semibold">- Định Hướng</span>
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1 rounded-xl border border-slate-200/70 dark:border-slate-800/70">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-150 active:scale-[0.98] ${
                      isActive
                        ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-2xs font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0071e3]' : 'text-slate-400'}`} strokeWidth={isActive ? 2 : 1.5} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Tools: Theme Toggle Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleTheme}
                title={theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối'}
                className="h-8 px-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#161b22] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 flex items-center gap-1.5 cursor-pointer transition-colors duration-150 active:scale-[0.97] shadow-2xs text-xs"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
                    <span className="hidden sm:inline font-medium text-slate-300">Sáng</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-600" strokeWidth={2} />
                    <span className="hidden sm:inline font-medium text-slate-700">Tối</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (iOS iPhone Native Style with Safe Area Padding) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#161b22]/95 backdrop-blur-xl border-t border-slate-200/70 dark:border-slate-800/80 px-2 pt-1.5 pb-[calc(env(safe-area-inset-bottom,8px)+8px)] flex items-center justify-around shadow-[0_-1px_3px_rgba(0,0,0,0.03)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center min-w-[64px] min-h-[44px] px-1 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.92] ${
                isActive
                  ? 'text-[#0071e3] font-semibold'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" strokeWidth={isActive ? 2.25 : 1.75} />
              <span className="text-[10.5px] tracking-tight">{item.label}</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-[#0071e3] mt-0.5" />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};
