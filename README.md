# Cổng Định Hướng Tuyển Sinh & Nghề Nghiệp Quốc Gia 🎯
### NexusPulse - Định Hướng (Enterprise Edition)

[![Production Website](https://img.shields.io/badge/Production-dinhhuong.nexuspulsetech.xyz-0071e3?style=for-the-badge&logo=google-chrome&logoColor=white)](https://dinhhuong.nexuspulsetech.xyz/)
[![GitHub Pages](https://img.shields.io/badge/Mirror-GitHub%20Pages-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://nexuspulsetech.github.io/dinhhuong/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions%20Automated-blue?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/NexusPulseTech/dinhhuong/actions)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-orange?style=for-the-badge)](LICENSE)

> **Cổng Tra Cứu Chuyên Ngành Đại Học Toàn Quốc & Hệ Thống Đánh Giá Hướng Nghiệp Chuẩn Quốc Tế**  
> Ứng dụng khoa học đánh giá tâm lý hướng nghiệp O*NET Interest Profiler & Holland Codes (RIASEC) 6 chiều, kết hợp dữ liệu tuyển sinh Bộ Giáo dục & Đào tạo, đối chiếu lương thực tế từ Navigos Group & TopCV.

---

## 🌐 Tên Miền Hoạt Động (Live Deployments)

- 🚀 **Tên miền chính thức (Production)**: [https://dinhhuong.nexuspulsetech.xyz/](https://dinhhuong.nexuspulsetech.xyz/)
- 🔗 **Tên miền phụ (Fallback)**: [https://nexuspulsetech.github.io/dinhhuong/](https://nexuspulsetech.github.io/dinhhuong/)

---

## 🏛️ Kiến Trúc Hệ Thống Chuẩn Doanh Nghiệp (Clean Architecture)

```
dinhhuong/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD tự động build & deploy GitHub Pages + Cron hàng tuần
├── public/
│   ├── CNAME                   # Tên miền tùy chỉnh dinhhuong.nexuspulsetech.xyz
│   ├── og-image.svg            # Vector Social Share Card cho Zalo, Facebook, LinkedIn
│   ├── robots.txt              # Chỉ dẫn bọ tìm kiếm Googlebot, Bingbot
│   └── sitemap.xml             # Sơ đồ trang web chứa toàn bộ 28+ deep-links
├── src/
│   ├── components/             # Tầng trình diễn (Presentation Layer)
│   │   ├── ComparisonMatrix.tsx# Bàn cân đối chiếu 10 tiêu chí thực tế
│   │   ├── ErrorBoundary.tsx   # Bộ tự phục hồi lỗi 24/7 (Zero White-Screen)
│   │   ├── MajorExplorer.tsx   # Trình tra cứu 23+ chuyên ngành đại học
│   │   ├── MentorChat.tsx      # AI Mentor & Trắc nghiệm Holland RIASEC
│   │   ├── Navbar.tsx          # Thanh điều hướng tối giản chuẩn Apple HIG
│   │   └── ResearchDocView.tsx # Báo cáo nghiên cứu khoa học & đặc tả
│   ├── data/                   # Tầng dữ liệu nghiệp vụ (Data Layer)
│   │   ├── assessment/         # Ngân hàng câu hỏi & thuật toán tính RIASEC
│   │   └── majors.ts           # Dữ liệu 23+ chuyên ngành Bộ GD&ĐT
│   ├── router/                 # Tầng điều hướng (Routing Layer)
│   │   └── useHashRouter.ts    # Deep-linking URL chuẩn SPA & SEO
│   ├── services/               # Tầng dịch vụ (Service Layer)
│   │   └── majorService.ts     # Truy vấn, lọc, tìm kiếm chuyên ngành
│   ├── utils/                  # Tiện ích hệ thống (Utilities)
│   │   ├── pdfExport.ts        # Xuất hồ sơ hướng nghiệp PDF & Word
│   │   └── seo.ts              # Evergreen SEO Engine (Dynamic Real-Time Year)
│   ├── App.tsx                 # Root Component
│   ├── index.css               # Tailwind CSS v4 design tokens
│   └── main.tsx                # Application Entry Point
├── index.html                  # HTML5 Entry Point, Schema.org FAQPage & Rich Snippets
├── package.json                # Dependencies (React 19, Vite 8, Tailwind v4)
└── vite.config.ts              # Bundler config với base: './'
```

---

## 🌟 Tính Năng Nổi Bật (Core Features)

1. **Tra Cứu 23+ Chuyên Ngành Toàn Quốc (Major Explorer)**:
   - Dữ liệu chi tiết mã ngành chuẩn Bộ GD&ĐT, khối xét tuyển (D01, A00, A01, B00, C00, D07...).
   - Bảng điểm chuẩn 3 miền (Bắc - Trung - Nam), học phí trung bình từng kỳ, chương trình học 4 năm.
   - Bóc tách định kiến sai lầm vs thực tế tuyển dụng của từng ngành.

2. **Deep-linking & Chia Sẻ Trực Tiếp (URL Direct Navigation)**:
   - Hỗ trợ URL trực tiếp cho từng chuyên ngành:  
     Ví dụ: `/#/nganh/cong-nghe-thong-tin`, `/#/nganh/marketing`, `/#/so-sanh`...
   - Tự động thay đổi tiêu đề trang và cập nhật Breadcrumb Schema.org tương ứng.

3. **Trắc Nghiệm Holland RIASEC 6 Chiều**:
   - Dựa trên mô hình O*NET & John Holland (Realistic, Investigative, Artistic, Social, Enterprising, Conventional).
   - Thuật toán định vị vector không gian (Cosine Similarity) tính toán độ tương thích chính xác (62% – 98%).
   - 12 chân dung nghề nghiệp chuyên sâu.

4. **Bàn Cân So Sánh Đối Chiếu 10 Tiêu Chí**:
   - So sánh trực tiếp 3 chuyên ngành bất kỳ về: Mức lương khởi điểm, Thu nhập 5 năm, Áp lực công việc, Tiềm năng Freelance, Nguy cơ bị AI thay thế, và Triển vọng 5 năm tới.

5. **Xuất Báo Cáo Chuyên Nghiệp (PDF & Word)**:
   - Xuất file PDF sắc nét Retina 2x lưu trực tiếp vào máy tính.
   - Xuất file Word (.doc) chuẩn hóa bảng biểu, tiêu đề để học sinh nộp giáo viên hoặc lưu trữ.

6. **Kiến Trúc Evergreen SEO (Không Bao Giờ Lỗi Thời)**:
   - Tự động cập nhật tiêu đề, mô tả và năm tuyển sinh theo thời gian thực (2026 -> 2027 -> 2028...).
   - Tự động re-deploy hàng tuần vào 00:00 Chủ Nhật thông qua GitHub Actions cron schedule.

---

## 🚀 Hướng Dẫn Chạy Cục Bộ (Local Development)

```bash
# 1. Cài đặt dependencies
npm install

# 2. Chạy kiểm thử TypeScript
npm run lint

# 3. Chạy môi trường Dev Server
npm run dev

# 4. Biên dịch bản Production
npm run build
```

---

## 📄 Bản Quyền & Giấy Phép
Dự án được phát triển và vận hành bởi **NexusPulseTech** theo giấy phép [Apache License 2.0](LICENSE).
Mọi thắc mắc hoặc đề xuất hợp tác tuyển sinh, vui lòng liên hệ: `nguyenhoangphuc7077@gmail.com`.
