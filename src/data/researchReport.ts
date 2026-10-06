export const RESEARCH_AND_DESIGN_REPORT = {
  title: "BÁO CÁO NGHIÊN CỨU KHOA HỌC & ĐẶC TẢ HƯỚNG NGHIỆP ĐẠI HỌC TOÀN QUỐC",
  author: "Lead Product Analyst & Staff Software Engineer (10+ năm kinh nghiệm EdTech)",
  version: "2.0.0 (Nationwide Comprehensive Edition)",
  date: "Cập nhật Tuyển sinh & Thị trường 2026 – 2027",
  abstract: "Tài liệu nghiên cứu cơ sở lý luận khoa học và dữ liệu thực chứng phục vụ hướng nghiệp cho học sinh THPT toàn quốc. Báo cáo đối chiếu mô hình nhân cách - môi trường nghề nghiệp John Holland (RIASEC) với Danh mục mã ngành đào tạo cấp IV của Bộ GD&ĐT Việt Nam, kết hợp khảo sát lương và nhu cầu việc làm từ Navigos Group, TopCV và các trường đại học hàng đầu 3 miền Bắc – Trung – Nam.",

  partA: {
    title: "PHẦN A: CƠ SỞ KHOA HỌC & ĐỐI CHIẾU THỊ TRƯỜNG LAO ĐỘNG",
    section1: {
      title: "1. Phương pháp luận: Thuyết Tương thích Nhân cách - Môi trường (John Holland RIASEC)",
      hollandTheory: "Thuyết John L. Holland (1959-1997, Johns Hopkins University) được Bộ Lao động Hoa Kỳ (O*NET) và các tổ chức giáo dục toàn cầu công nhận là tiêu chuẩn vàng trong hướng nghiệp. Thay vì phân loại nhị phân cứng nhắc như MBTI, RIASEC xác định mỗi cá nhân sở hữu một Vector năng lực đa chiều gồm 6 nhóm:",
      dimensions: [
        { code: "R - Realistic (Thực tế, Thao tác)", desc: "Thích làm việc với máy móc, công cụ, vật liệu, cơ thể sống hoặc hoạt động ngoài trời. Phù hợp: Y đa khoa, Kỹ thuật phần mềm, Tự động hóa, Logistics." },
        { code: "I - Investigative (Nghiên cứu, Logic)", desc: "Thích quan sát, phân tích, trừu tượng hóa và giải quyết vấn đề bằng khoa học gốc rễ. Phù hợp: Trí tuệ nhân tạo (AI), Y khoa, Khoa học dữ liệu, Ngôn ngữ học." },
        { code: "A - Artistic (Nghệ thuật, Sáng tạo)", desc: "Thích tự do, giàu cảm xúc, tư duy thị giác, ghét sự gò bó rập khuôn. Phù hợp: Truyền thông đa phương tiện, Thiết kế mỹ thuật số, Biên kịch, Sáng tạo nội dung." },
        { code: "S - Social (Xã hội, Con người)", desc: "Thích giảng dạy, chữa lành, hỗ trợ, giao tiếp và kết nối cộng đồng. Phù hợp: Y tế, Tâm lý học, Sư phạm, Quan hệ công chúng." },
        { code: "E - Enterprising (Kinh doanh, Lãnh đạo)", desc: "Thích thuyết phục, đàm phán, chấp nhận rủi ro vì mục tiêu thương mại và lợi nhuận. Phù hợp: Marketing, Tài chính - Ngân hàng, Quản trị kinh doanh, Ngoại thương." },
        { code: "C - Conventional (Quy củ, Tổ chức)", desc: "Thích trật tự, dữ liệu, con số, quy trình chuẩn mực và độ chính xác cao. Phù hợp: Kiểm toán, Logistics, Fintech, Quản trị cơ sở dữ liệu." }
      ]
    },
    section2: {
      title: "2. Bản đồ Tuyển sinh & Điểm chuẩn 3 miền (Nguồn Bộ GD&ĐT 2025–2026)",
      d01Focus: "Hệ sinh thái tuyển sinh đại học Việt Nam phân hóa theo các khối thi chiến lược: A00, A01 (Kỹ thuật & Công nghệ), B00 (Khoa học Sức khỏe), D01, D07 (Kinh tế, Truyền thông & Dịch vụ), C00 (Khoa học Xã hội & Luật).",
      regions: [
        {
          name: "Miền Bắc (Hà Nội, Hải Phòng)",
          hubs: "ĐH Bách Khoa Hà Nội, ĐH Ngoại Thương, ĐH Kinh Tế Quốc Dân, ĐH Y Hà Nội, Học viện Báo chí & Tuyên truyền.",
          strengths: "Nền tảng học thuật hàn lâm vững chắc, các trường công lập đầu ngành giữ vai trò chuẩn mực quốc gia."
        },
        {
          name: "Miền Trung (Đà Nẵng, Huế)",
          hubs: "ĐH Bách Khoa Đà Nẵng, ĐH Kinh Tế Đà Nẵng, ĐH Y - Dược Huế.",
          strengths: "Chi phí sinh hoạt hợp lý, trung tâm cung cấp nhân lực kỹ thuật và y tế chất lượng cao cho dải miền Trung và Tây Nguyên."
        },
        {
          name: "Miền Nam (TP.HCM, Cần Thơ)",
          hubs: "ĐHQG TP.HCM (Bách Khoa, KHTN, USSH, UIT), ĐH Kinh Tế TP.HCM (UEH), ĐH Y Dược TP.HCM, ĐH RMIT Việt Nam.",
          strengths: "Thị trường năng động nhất cả nước, chiếm 70% thị phần Agency quảng cáo, Logistics cảng biển và doanh nghiệp FDI."
        }
      ]
    },
    section3: {
      title: "3. Khảo sát Lương & Tác động của AI (Nguồn Navigos Group & TopCV 2025–2026)",
      salaryInsights: [
        "Nhóm ngành Công nghệ thông tin & AI: Mức lương khởi điểm cao nhất (12–25 triệu VNĐ/tháng), cơ hội nhận lương ngoại tệ USD từ dự án nước ngoài.",
        "Nhóm ngành Kinh tế & Marketing: Thu nhập khởi điểm trung bình (10–16 triệu VNĐ), nhưng mức trần thu nhập sau 5 năm bứt phá nhanh nhất nhờ hoa hồng kinh doanh và vị trí quản lý (50–100+ triệu).",
        "Nhóm ngành Y đa khoa: Thời gian đào tạo dài nhất (6 năm + 18 tháng thực hành), thu nhập tăng trưởng theo tuổi nghề và uy tín tích lũy.",
        "Tác động của AI: Các công việc dịch thuật thô, gõ code mẫu, nhập liệu đang bị AI thay thế với tốc độ nhanh chóng. Cần đào tạo tư duy chiến lược, kiến trúc hệ thống và sự thấu cảm con người."
      ]
    }
  },

  partB: {
    title: "PHẦN B: ĐẶC TẢ TÍNH NĂNG & TRẢI NGHIỆM NGƯỜI DÙNG TOÀN QUỐC",
    section4: {
      title: "4. Cơ chế Tra cứu Đột phá: Tìm Ngành Ra Ngay Đặc Điểm Phù Hợp",
      featureDescription: "Khi một học sinh bất kỳ nhập từ khóa (ví dụ: 'Truyền thông', 'Công nghệ thông tin', 'Marketing', 'Y đa khoa'), hệ thống không trả về một định nghĩa khô cứng mà phân rã ngay thành 5 trường dữ liệu hành vi thực tế:",
      fields: [
        "1. Đặc tính nhân cách phù hợp (Personality Traits): Bạn có phải người nhạy bén thẩm mỹ, kiên trì gỡ lỗi hay thích nói chuyện trước đám đông?",
        "2. Ai RẤT PHÙ HỢP (Green flags): Các dấu hiệu tự nhiên ở trường cấp 3 cho thấy bạn sẽ thành công rực rỡ với ngành.",
        "3. Ai NÊN CÂN NHẮC KỸ (Red flags / Reality Check): Những cạm bẫy thực tế mà các bạn học sinh hay vỡ mộng sau năm nhất.",
        "4. Trường đào tạo theo 3 miền: Điểm chuẩn 2024, khối thi xét tuyển và mức học phí chi tiết từng năm.",
        "5. Mức lương 4 giai đoạn: Từ thực tập sinh ➔ mới tốt nghiệp ➔ 3-5 năm kinh nghiệm ➔ quản lý cấp cao."
      ]
    },
    section5: {
      title: "5. Thiết kế UX Mobile-First (Chuẩn Apple Human Interface Guidelines)",
      mobileGuidelines: [
        "Tối ưu cho ngón tay cái: Toàn bộ điều hướng chính nằm ở thanh Bottom Bar với diện tích chạm tối thiểu 44x44px.",
        "Tránh tuyệt đối lỗi che khuất (Zero-Clipping): Toàn bộ modal chi tiết và sheet lựa chọn được render thông qua React Portal gắn trực tiếp vào document.body với z-index [9999].",
        "Tương thích rãnh khuyết & Dynamic Island trên iPhone: Thiết lập CSS Safe Area Insets (env(safe-area-inset-bottom)) tránh bị nút ảo Home Bar che phủ.",
        "Phản hồi xúc giác & chuyển động tự nhiên: Hover êm dịu 150ms, click nảy cơ học (active:scale-[0.98]), màu nhấn Apple Blue (#0071e3) dứt khoát."
      ]
    }
  }
};
