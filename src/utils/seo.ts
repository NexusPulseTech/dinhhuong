/**
 * Evergreen SEO & Dynamic Admissions Cycle Engine
 * Tự động tính toán chu kỳ tuyển sinh theo thời gian thực (Real-time Year Calculation),
 * đảm bảo website và thẻ SEO không bao giờ lỗi thời (Evergreen SEO),
 * tự động chuyển năm (2026 -> 2027 -> 2028...) mà không cần sửa code thủ công.
 */

import { Major } from '../types';

export interface AdmissionsCycle {
  currentYear: number;
  admissionsYear: number;
  referenceCycle: string;
  forecastCycle: string;
}

export function getAdmissionsCycle(): AdmissionsCycle {
  const now = new Date();
  const currentYear = now.getFullYear();
  // Từ tháng 9 trở đi, học sinh lớp 12 đã bắt đầu bước vào chu kỳ tuyển sinh năm kế tiếp
  const admissionsYear = now.getMonth() >= 8 ? currentYear + 1 : currentYear;
  const referenceCycle = `${admissionsYear - 1}–${admissionsYear}`;
  const forecastCycle = `${admissionsYear}–${admissionsYear + 5}`;

  return {
    currentYear,
    admissionsYear,
    referenceCycle,
    forecastCycle,
  };
}

/**
 * Cập nhật động toàn bộ thẻ Title, Meta Description, OpenGraph và Schema.org
 * theo đúng năm thực tế của người dùng khi truy cập website
 */
export function applyEvergreenSEO(): AdmissionsCycle {
  const cycle = getAdmissionsCycle();

  if (typeof document === 'undefined') return cycle;

  const dynamicTitle = `Định Hướng Tuyển Sinh & Nghề Nghiệp Đại Học ${cycle.admissionsYear} | NexusPulse`;
  const dynamicDesc = `Cổng định hướng tuyển sinh & hướng nghiệp đại học toàn quốc năm ${cycle.admissionsYear}. Tra cứu 23+ ngành học, trắc nghiệm Holland RIASEC, điểm chuẩn ${cycle.referenceCycle}, học phí và lộ trình việc làm giai đoạn ${cycle.forecastCycle}.`;

  // Update Page Title
  document.title = dynamicTitle;

  // Update Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dynamicDesc);

  // Update Meta Title
  const metaTitle = document.querySelector('meta[name="title"]');
  if (metaTitle) metaTitle.setAttribute('content', dynamicTitle);

  // Update OpenGraph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', dynamicTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', dynamicDesc);

  // Update Twitter Cards
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', dynamicTitle);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', dynamicDesc);

  // Update Schema.org JSON-LD dynamically
  try {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => {
      try {
        const json = JSON.parse(script.textContent || '{}');
        if (json['@type'] === 'WebSite' || json['@type'] === 'WebApplication') {
          json.name = `NexusPulse - Định Hướng Tuyển Sinh & Hướng Nghiệp ${cycle.admissionsYear}`;
          json.dateModified = new Date().toISOString().split('T')[0];
          script.textContent = JSON.stringify(json, null, 2);
        }
      } catch {
        // Skip unparseable scripts
      }
    });
  } catch (err) {
    console.debug('Schema update notice:', err);
  }

  return cycle;
}

/**
 * Cập nhật SEO chi tiết khi người dùng xem một chuyên ngành cụ thể (Deep-link SEO)
 */
export function applyMajorDetailSEO(major: Major) {
  const cycle = getAdmissionsCycle();
  if (typeof document === 'undefined') return;

  const title = `Ngành ${major.name} (Mã ${major.code}): Điểm Chuẩn, Học Phí & Lương | NexusPulse`;
  const desc = `Thông tin tuyển sinh năm ${cycle.admissionsYear} ngành ${major.name}. Khối thi ${major.admissionBlocks.join(', ')}, lương mới ra trường ${major.salaryBands.freshGrad}, các trường đào tạo hàng đầu 3 miền và tác động AI.`;

  document.title = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', desc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', desc);

  // Thêm hoặc cập nhật BreadcrumbList Schema.org
  try {
    let breadcrumbScript = document.getElementById('schema-breadcrumb');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'schema-breadcrumb';
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(breadcrumbScript);
    }

    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Trang chủ',
          item: 'https://dinhhuong.nexuspulsetech.xyz/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Khám phá chuyên ngành',
          item: 'https://dinhhuong.nexuspulsetech.xyz/#/kham-pha',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: major.name,
          item: `https://dinhhuong.nexuspulsetech.xyz/#/nganh/${major.id}`,
        },
      ],
    };

    breadcrumbScript.textContent = JSON.stringify(breadcrumbData, null, 2);
  } catch (e) {
    console.debug('Breadcrumb schema error:', e);
  }
}
