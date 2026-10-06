import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App runtime error caught by boundary:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('nexuspulse_user_profile_v3');
    } catch {
      // Ignore
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#0d1117] p-4 text-slate-800 dark:text-slate-100 font-sans">
          <div className="max-w-md w-full bg-white dark:bg-[#161b22] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Hệ thống tự động phục hồi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Ứng dụng phát hiện dữ liệu cần làm mới để đảm bảo trải nghiệm tuyển sinh mượt mà nhất.
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold shadow-sm transition-all duration-150 cursor-pointer active:scale-95 w-full"
            >
              <RefreshCw className="w-4 h-4" />
              Làm mới hệ thống ngay
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
