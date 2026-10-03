# NexusPulse - Định Hướng 🎯

> **Cổng Hướng Nghiệp & Tra Cứu Chuyên Ngành Đại Học THPT Toàn Quốc**  
> Ứng dụng khoa học đánh giá tâm lý hướng nghiệp chuẩn quốc tế (O*NET Interest Profiler & Holland Codes RIASEC) kết hợp dữ liệu tuyển sinh Bộ Giáo dục & Đào tạo.

---

## 🌟 Tính Năng Nổi Bật

1. **Tra Cứu Chuyên Ngành Toàn Quốc (Major Explorer)**:
   - Hệ thống dữ liệu chi tiết các chuyên ngành trọng điểm (Mã ngành Bộ GD&ĐT, khối xét tuyển D01, A00, A01, B00, C00, D07...).
   - Danh sách trường đại học tiêu biểu phân bổ 3 miền Bắc - Trung - Nam, điểm chuẩn tham chiếu 2024-2025, học phí trung bình và chương trình đào tạo.
   - Bóc tách định kiến sai lầm vs thực tế tuyển dụng của từng ngành.

2. **Trắc Nghiệm Định Hướng 16 Tình Huống Khoa Học**:
   - Dựa trên mô hình **Holland RIASEC 6 chiều** kết hợp học thuyết **Career Anchors của Edgar Schein**.
   - Cấu trúc 4 Module: Bản năng tự nhiên, Năng lực nhận thức, Ngưỡng chịu áp lực và Mỏ neo nghề nghiệp dài hạn.
   - Thuật toán định vị vector không gian (Cosine Similarity) tính toán xác suất độ tương thích chính xác (62% – 98%).
   - Nhận diện 12 chân dung nghề nghiệp chuyên sâu (Creative Strategist, Systems Architect, Clinical Healer, Quantitative Analyst...).

3. **Bàn Cân So Sánh Đối Chiếu 10 Tiêu Chí**:
   - Cho phép đặt 3 chuyên ngành bất kỳ lên bàn cân để đối chiếu trực tiếp: Bản chất cốt lõi, Lương khởi điểm, Thu nhập sau 5 năm, Tác động của AI, Tiềm năng Freelance/Remote, Cơ hội mở Agency/Khởi nghiệp và Triển vọng 2026–2030.

4. **Xuất Hồ Sơ & Báo Cáo Chuyên Nghiệp (PDF & Word)**:
   - **Tải file PDF (.pdf)**: Cơ chế kết xuất trực tiếp bằng `jspdf` & `html2canvas` độ nét cao (Retina 2x), lưu trực tiếp vào máy.
   - **Tải file Word (.doc)**: Tự động tạo file Microsoft Word chuẩn hóa bảng biểu, tiêu đề, có thể xem lại và chỉnh sửa dễ dàng.

5. **Giao Diện Chuẩn Tối Giản (Linear / Apple HIG)**:
   - Khóa cứng layout biên ngang, 100% không cuộn ngang.
   - Hỗ trợ chế độ Sáng / Tối (Light / Dark mode) mượt mà với Tailwind CSS v4.

---

## 🛠 Công Nghệ Sử Dụng (Tech Stack)

- **Frontend Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";`), Apple Human Interface Guidelines (44px touch targets)
- **Icons**: Lucide React (Đơn sắc, chuẩn kích thước)
- **PDF Generation**: `jspdf`, `html2canvas`
- **Animation & Effects**: Canvas Confetti

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ (Local Setup)

### Yêu cầu hệ thống
- **Node.js**: Phiên bản 18 trở lên
- **npm** hoặc **yarn** / **pnpm**

### Các bước cài đặt:

```bash
# 1. Clone repository về máy
git clone https://github.com/<your-username>/<repo-name>.git

# 2. Di chuyển vào thư mục dự án
cd <repo-name>

# 3. Cài đặt các thư viện phụ thuộc
npm install

# 4. Khởi chạy server phát triển (Development Mode)
npm run dev
```

Mở trình duyệt và truy cập: `http://localhost:3000`

### Build đóng gói sản phẩm (Production Build):

```bash
npm run build
```

---

## 📂 Cấu Trúc Dự Án (Project Structure)

```text
├── src/
│   ├── components/            # Các thành phần giao diện chính
│   │   ├── Navbar.tsx         # Thanh điều hướng trên cùng & chuyển đổi Theme
│   │   ├── MajorExplorer.tsx  # Trang tra cứu chuyên ngành đại học
│   │   ├── MentorChat.tsx     # Bộ trắc nghiệm 16 tình huống & kết quả
│   │   ├── ComparisonMatrix.tsx # Bàn cân so sánh 10 tiêu chí
│   │   └── ResearchDocView.tsx# Dữ liệu nghiên cứu thực chứng
│   ├── data/
│   │   ├── assessment/        # Hệ thống đánh giá hướng nghiệp khoa học
│   │   │   ├── archetypes.ts  # 12 chân dung tính cách nghề nghiệp
│   │   │   ├── riasecBank.ts  # Ngân hàng 16 câu hỏi theo 4 module
│   │   │   └── scoringEngine.ts # Thuật toán tính toán vector xác suất
│   │   └── majors.ts          # Dữ liệu chuyên ngành chuẩn Bộ GD&ĐT
│   ├── hooks/
│   │   └── useTheme.ts        # Quản lý giao diện Sáng / Tối
│   ├── utils/
│   │   └── pdfExport.ts       # Module kết xuất tệp PDF trực tiếp
│   ├── App.tsx                # Ứng dụng chính & layout container
│   ├── main.tsx               # Điểm nhập React DOM
│   └── index.css              # Tailwind CSS v4 & khóa cứng layout
├── package.json
└── README.md
```

---

## 📄 Bản Quyền & Giấy Phép

Phát triển bởi đội ngũ kỹ sư **NexusPulse**.  
Giấy phép: **Apache-2.0**
