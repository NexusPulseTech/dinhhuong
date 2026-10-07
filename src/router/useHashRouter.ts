/**
 * Client-Side Hash Router Hook
 * Quản lý định tuyến Deep-linking chuẩn công nghiệp cho SPA (GitHub Pages):
 * Hỗ trợ các route:
 * - `#/` hoặc `#/kham-pha`: Trang khám phá chuyên ngành
 * - `#/nganh/:id`: Trang chi tiết / Modal chuyên ngành độc lập (phục vụ SEO & Share)
 * - `#/tu-van`: Trang AI Mentor & Trắc nghiệm Holland RIASEC
 * - `#/so-sanh`: Trang ma trận so sánh 10 tiêu chí
 * - `#/bao-cao`: Trang báo cáo nghiên cứu khoa học
 *
 * Hỗ trợ nút Back/Forward của trình duyệt và cập nhật URL sạch sẽ không reload trang.
 */

import { useState, useEffect, useCallback } from 'react';
import { TabType } from '../components/Navbar';
import { majorService } from '../services/majorService';
import { applyEvergreenSEO, applyMajorDetailSEO } from '../utils/seo';

export interface RouteState {
  tab: TabType;
  majorId: string | null;
}

function parseHash(hash: string): RouteState {
  const cleanHash = hash.replace(/^#\/?/, '').trim();

  if (!cleanHash || cleanHash === 'kham-pha') {
    return { tab: 'explorer', majorId: null };
  }

  if (cleanHash.startsWith('nganh/')) {
    const majorId = cleanHash.replace('nganh/', '').trim();
    return { tab: 'explorer', majorId: majorId || null };
  }

  if (cleanHash === 'tu-van' || cleanHash === 'chat') {
    return { tab: 'chat', majorId: null };
  }

  if (cleanHash === 'so-sanh' || cleanHash === 'comparison') {
    return { tab: 'comparison', majorId: null };
  }

  if (cleanHash === 'bao-cao' || cleanHash === 'report') {
    return { tab: 'report', majorId: null };
  }

  return { tab: 'explorer', majorId: null };
}

export function useHashRouter() {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window === 'undefined') return { tab: 'explorer', majorId: null };
    return parseHash(window.location.hash);
  });

  // Đồng bộ trạng thái khi người dùng bấm Back / Forward trên trình duyệt
  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash(window.location.hash);
      setRoute(newRoute);

      if (newRoute.majorId) {
        const major = majorService.getById(newRoute.majorId);
        if (major) {
          applyMajorDetailSEO(major);
        } else {
          applyEvergreenSEO();
        }
      } else {
        applyEvergreenSEO();
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Chạy lần đầu khi load trang
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Chuyển hướng router
  const navigate = useCallback((tab: TabType, majorId: string | null = null) => {
    let targetHash = '';
    if (majorId) {
      targetHash = `#/nganh/${majorId}`;
    } else {
      switch (tab) {
        case 'explorer':
          targetHash = '#/kham-pha';
          break;
        case 'chat':
          targetHash = '#/tu-van';
          break;
        case 'comparison':
          targetHash = '#/so-sanh';
          break;
        case 'report':
          targetHash = '#/bao-cao';
          break;
      }
    }

    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    setRoute({ tab, majorId });
  }, []);

  return {
    tab: route.tab,
    majorId: route.majorId,
    navigate,
  };
}
