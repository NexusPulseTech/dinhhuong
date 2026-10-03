import { QuizQuestion } from '../../types';

export interface AssessmentModule {
  id: string;
  name: string;
  description: string;
  questionIds: number[];
}

export const ASSESSMENT_MODULES: AssessmentModule[] = [
  {
    id: 'module-1',
    name: 'Module 1: Bản Năng & Thiên Hướng Tự Nhiên',
    description: 'Bóc tách các hoạt động thường nhật và niềm say mê bộc phát tự nhiên của bạn.',
    questionIds: [1, 2, 3, 4]
  },
  {
    id: 'module-2',
    name: 'Module 2: Năng Lực Nhận Thức & Tư Duy Giải Quyết',
    description: 'Đo lường bán cầu não ưu thế, tư duy định lượng, khả năng trực giác và công nghệ.',
    questionIds: [5, 6, 7, 8]
  },
  {
    id: 'module-3',
    name: 'Module 3: Ngưỡng Chịu Áp Lực & Động Lực Làm Việc',
    description: 'Xác định loại áp lực xứng đáng và môi trường vật lý giúp bạn thăng hoa năng lượng.',
    questionIds: [9, 10, 11, 12]
  },
  {
    id: 'module-4',
    name: 'Module 4: Mỏ Neo Nghề Nghiệp & Giá Trị Dài Hạn',
    description: 'Định hình mục tiêu 10 năm tới: Tự do, Tài chính, Lãnh đạo, Chuyên môn hay Phụng sự.',
    questionIds: [13, 14, 15, 16]
  }
];

export const COMPREHENSIVE_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // MODULE 1: BẢN NĂNG & THIÊN HƯỚNG TỰ NHIÊN
  // ==========================================
  {
    id: 1,
    phase: 'Bản năng tự nhiên',
    mentorPrompt: 'Nếu sáng mai thức dậy và được trải nghiệm trọn vẹn 1 ngày đi làm thực tế, bạn muốn mình ở trong bối cảnh nào nhất?',
    subNote: 'Hãy chọn theo cảm xúc tự nhiên của bạn, đây là thước đo thiên hướng nghề nghiệp ban đầu.',
    options: [
      {
        text: 'Ngồi trước dàn màn hình hiện đại, viết mã nguồn, gỡ lỗi thuật toán hoặc huấn luyện một mô hình AI mới.',
        badge: 'Công nghệ & Thuật toán',
        riasecDelta: { I: 5, R: 3, C: 2 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai'],
        insightNote: 'Bạn có tư duy logic mạnh mẽ (Investigative), thích tìm tòi nguyên lý hoạt động của máy tính và hệ thống số.'
      },
      {
        text: 'Khoác áo blouse trắng tại bệnh viện: trực tiếp thăm khám, giải thích bệnh và chữa lành nỗi đau cho bệnh nhân.',
        badge: 'Y tế & Cứu chữa',
        riasecDelta: { S: 5, I: 4, R: 3 },
        preferredMajors: ['y-da-khoa', 'duoc-hoc'],
        insightNote: 'Bạn mang sứ mệnh vì con người (Social) kết hợp với năng lực khoa học y sinh (Investigative).'
      },
      {
        text: 'Ở trong studio sáng tạo náo nhiệt: quay phim, chụp ảnh, dựng video, sáng tạo kịch bản bắt trend mạng xã hội.',
        badge: 'Sáng tạo & Nghệ thuật',
        riasecDelta: { A: 5, E: 3 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa', 'quan-he-cong-chung'],
        insightNote: 'Thiên hướng Nghệ thuật (Artistic) vượt trội, thích tự do biểu đạt cảm xúc và ghét sự gò bó rập khuôn.'
      },
      {
        text: 'Cùng ban giám đốc lên chiến lược kinh doanh: đàm phán hợp đồng, phân tích thị trường và theo dõi chỉ số doanh số.',
        badge: 'Kinh doanh & Lãnh đạo',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['marketing', 'tai-chinh-ngan-hang', 'kinh-doanh-quoc-te'],
        insightNote: 'Thiên hướng Dám nghĩ dám làm (Enterprising), nhạy cảm với cơ hội thương mại và thuyết phục người khác.'
      },
      {
        text: 'Điều phối dòng chảy hàng hóa tại cảng biển quốc tế: tối ưu hóa chi phí vận chuyển container và kiểm soát chuỗi cung ứng.',
        badge: 'Vận hành & Chuỗi cung ứng',
        riasecDelta: { C: 4, R: 4, E: 3 },
        preferredMajors: ['logistics', 'kinh-doanh-quoc-te'],
        insightNote: 'Tư duy tổ chức quy trình (Conventional & Realistic), giỏi sắp xếp tối ưu và xử lý tình huống thực tế.'
      }
    ]
  },
  {
    id: 2,
    phase: 'Bản năng tự nhiên',
    mentorPrompt: 'Vào một ngày cuối tuần rảnh rỗi không bài tập, hoạt động nào tự nhiên cuốn hút bạn dành hàng giờ liên tục?',
    subNote: 'Sở thích tự phát là bằng chứng rõ nhất về năng lượng nội sinh của não bộ.',
    options: [
      {
        text: 'Mày mò cài đặt phần mềm mới, xem video phân tích công nghệ, vọc vạch tính năng mới của các mô hình AI hoặc chơi game chiến thuật.',
        badge: 'Khám phá Công nghệ',
        riasecDelta: { I: 5, R: 3 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai'],
        insightNote: 'Bộ não của bạn bị kích thích bởi hệ thống kỹ thuật và tư duy phân tích chiều sâu.'
      },
      {
        text: 'Dựng một video ngắn trên TikTok/CapCut, vẽ tranh minh họa, chụp ảnh chỉnh màu hoặc viết bài chia sẻ cảm xúc lên mạng xã hội.',
        badge: 'Sáng tác Nghệ thuật',
        riasecDelta: { A: 5, E: 2 },
        preferredMajors: ['thiet-ke-do-hoa', 'truyen-thong-da-phuong-tien'],
        insightNote: 'Nhu cầu biểu đạt thẩm mỹ và thị giác của bạn rất cao, không thể chịu được sự nhàm chán lặp lại.'
      },
      {
        text: 'Hẹn hò bạn bè cà phê, tâm sự lắng nghe nỗi niềm của người khác hoặc tham gia một hoạt động thiện nguyện, câu lạc bộ.',
        badge: 'Kết nối Con người',
        riasecDelta: { S: 5, E: 2 },
        preferredMajors: ['quan-he-cong-chung', 'ngon-ngu-anh', 'y-da-khoa'],
        insightNote: 'Bạn nạp lại năng lượng thông qua sự tương tác và sẻ chia với con người xung quanh.'
      },
      {
        text: 'Lướt xem bảng giá cổ phiếu, tiền số, tin tức thời sự kinh tế thế giới hoặc lập kế hoạch kinh doanh nhỏ.',
        badge: 'Thương mại & Tài chính',
        riasecDelta: { E: 5, C: 4 },
        preferredMajors: ['tai-chinh-ngan-hang', 'marketing', 'kinh-doanh-quoc-te'],
        insightNote: 'Bản năng tài chính và kinh doanh thương mại thức tỉnh từ rất sớm.'
      }
    ]
  },
  {
    id: 3,
    phase: 'Bản năng tự nhiên',
    mentorPrompt: 'Khi nhìn vào bảng điểm và sở thích học tập ở trường cấp 3, môn học nào mang lại cho bạn cảm giác thỏa mãn nhất khi đạt điểm cao?',
    subNote: 'Cảm giác thỏa mãn phản ánh sự tương thích giữa năng khiếu bẩm sinh và môn học.',
    options: [
      {
        text: 'Toán học hoặc Tin học: Cảm giác sung sướng tột độ khi tìm ra lời giải sau khi bế tắc trước một bài toán hóc búa.',
        badge: 'Logic & Định lượng',
        riasecDelta: { I: 5, C: 3 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai', 'tai-chinh-ngan-hang'],
        insightNote: 'Tư duy logic hình thức vững chãi, nền móng vàng cho ngành Công nghệ và Tài chính định lượng.'
      },
      {
        text: 'Sinh học hoặc Hóa học: Thích thú khi hiểu được cấu trúc tế bào, cơ chế của thuốc và các phản ứng sinh hóa của cơ thể.',
        badge: 'Khoa học Sự sống',
        riasecDelta: { I: 5, S: 3, R: 2 },
        preferredMajors: ['y-da-khoa', 'duoc-hoc'],
        insightNote: 'Sự say mê với khoa học sự sống, phẩm chất tiên quyết của người làm Y Dược.'
      },
      {
        text: 'Ngữ văn, Lịch sử hoặc Ngoại ngữ: Thích viết những bài văn có chiều sâu, cảm thụ câu từ mượt mà và thuyết trình lôi cuốn.',
        badge: 'Ngôn từ & Xã hội',
        riasecDelta: { A: 4, S: 4, I: 2 },
        preferredMajors: ['ngon-ngu-anh', 'truyen-thong-da-phuong-tien', 'luat-kinh-te'],
        insightNote: 'Trí tuệ ngôn ngữ và cảm xúc (EQ) cao, phù hợp Truyền thông, Ngoại ngữ và Pháp lý.'
      },
      {
        text: 'Địa lý kinh tế hoặc Giáo dục kinh tế & pháp luật: Thích phân tích các chính sách tiền tệ, thị trường việc làm và chuỗi xuất nhập khẩu.',
        badge: 'Kinh tế & Pháp luật',
        riasecDelta: { E: 4, C: 4, I: 2 },
        preferredMajors: ['kinh-doanh-quoc-te', 'logistics', 'luat-kinh-te'],
        insightNote: 'Sự nhạy cảm với cơ chế vận hành kinh tế xã hội và thương mại quốc tế.'
      }
    ]
  },
  {
    id: 4,
    phase: 'Bản năng tự nhiên',
    mentorPrompt: 'Khi cần tìm hiểu một kiến thức hoàn toàn mới (ví dụ: cách đầu tư, cách làm video, cách lập trình...), bạn học hiệu quả nhất qua kênh nào?',
    subNote: 'Phương thức tiếp nhận thông tin phản ánh kênh nhận thức chính của bạn.',
    options: [
      {
        text: 'Tự đọc tài liệu hướng dẫn kỹ thuật, xem sơ đồ kiến trúc, đọc sách chuyên khảo để hiểu rõ bản chất trước khi làm.',
        badge: 'Tư duy Lý thuyết Sâu',
        riasecDelta: { I: 5, C: 2 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai', 'luat-kinh-te'],
        insightNote: 'Tư duy hàn lâm nghiêm túc, thích làm việc dựa trên tài liệu chuẩn chỉ.'
      },
      {
        text: 'Mở ứng dụng ra bấm thử ngay lập tức, vừa làm vừa mò mẫm, xem video ngắn minh họa trực quan sinh động.',
        badge: 'Thực nghiệm Trực quan',
        riasecDelta: { A: 4, R: 4 },
        preferredMajors: ['thiet-ke-do-hoa', 'truyen-thong-da-phuong-tien'],
        insightNote: 'Trực giác không gian và xúc giác mạnh mẽ, thích học qua hành động và sản phẩm cụ thể.'
      },
      {
        text: 'Hỏi han bạn bè, tham gia nhóm trao đổi, nghe người có kinh nghiệm kể chuyện thực chiến và thảo luận tương tác.',
        badge: 'Học qua Tương tác',
        riasecDelta: { S: 5, E: 3 },
        preferredMajors: ['quan-he-cong-chung', 'marketing', 'ngon-ngu-anh'],
        insightNote: 'Trí tuệ xã hội giúp bạn hấp thu tri thức nhanh nhất qua các cuộc hội thoại con người.'
      },
      {
        text: 'Lập dàn ý (Outline), vẽ sơ đồ tư duy (Mindmap), phân chia các bước 1-2-3 rõ ràng có checklist kiểm tra.',
        badge: 'Hệ thống hóa Quy trình',
        riasecDelta: { C: 5, E: 2 },
        preferredMajors: ['logistics', 'tai-chinh-ngan-hang'],
        insightNote: 'Tư duy cấu trúc và ngăn nắp, bảo đảm tính hoàn thiện và chính xác cao.'
      }
    ]
  },

  // ==========================================
  // MODULE 2: NĂNG LỰC NHẬN THỨC & TƯ DUY
  // ==========================================
  {
    id: 5,
    phase: 'Năng lực nhận thức',
    mentorPrompt: 'Khi được giao làm một bài tập dự án nhóm ở lớp, vai trò bạn thường xung phong nhận đầu tiên là gì?',
    subNote: 'Vai trò trong nhóm phản ánh rõ nhất vị trí bạn sẽ tỏa sáng trong doanh nghiệp sau này.',
    options: [
      {
        text: 'Nghiên cứu tài liệu chuyên sâu, tìm kiếm số liệu kiểm chứng và đảm bảo bài làm chuẩn xác về mặt nội dung kiến thức.',
        badge: 'Chuyên gia Phân tích (Analyst)',
        riasecDelta: { I: 5, C: 2 },
        preferredMajors: ['khoa-hoc-du-lieu-ai', 'cong-nghe-thong-tin', 'tai-chinh-ngan-hang', 'luat-kinh-te'],
        insightNote: 'Tư duy nghiên cứu nghiêm túc, thích làm việc dựa trên dữ liệu và sự thật khách quan.'
      },
      {
        text: 'Thiết kế slide PowerPoint, cắt ghép video minh họa, chọn hiệu ứng âm thanh và bố cục đẹp mắt.',
        badge: 'Nhà sản xuất Thị giác (Visual Creator)',
        riasecDelta: { A: 5, R: 2 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa'],
        insightNote: 'Tư duy thẩm mỹ trực quan, rất hợp với ngành Truyền thông số, Thiết kế mỹ thuật đa phương tiện.'
      },
      {
        text: 'Lên ý tưởng cốt lõi, tìm thông điệp giật tít và trực tiếp đứng lên bục thuyết trình thuyết phục cả lớp.',
        badge: 'Người Thuyết phục (Pitcher / Speaker)',
        riasecDelta: { E: 5, A: 2 },
        preferredMajors: ['marketing', 'quan-he-cong-chung', 'ngon-ngu-anh'],
        insightNote: 'Tố chất của người làm tiếp thị, quan hệ công chúng hoặc quản lý kinh doanh.'
      },
      {
        text: 'Lập danh sách việc cần làm, nhắc nhở deadline, giải quyết mâu thuẫn giữa các thành viên và hỗ trợ người gặp khó khăn.',
        badge: 'Người Điều phối & Kết nối (Leader / Support)',
        riasecDelta: { S: 4, E: 3, C: 3 },
        preferredMajors: ['logistics', 'y-da-khoa', 'kinh-doanh-quoc-te'],
        insightNote: 'Khả năng quản trị vận hành và chăm sóc con người tuyệt vời.'
      }
    ]
  },
  {
    id: 6,
    phase: 'Năng lực nhận thức',
    mentorPrompt: 'Khi đối mặt với một vấn đề hoàn toàn mới hoặc gặp ngõ cụt, phản xạ đầu tiên của bạn là gì?',
    subNote: 'Cách giải quyết vấn đề (Problem-Solving Style) phản ánh phương pháp tư duy chủ đạo của bạn.',
    options: [
      {
        text: 'Tự mình tra cứu tài liệu, đọc các nghiên cứu khoa học, bóc tách cấu trúc để hiểu nguyên lý gốc rễ trước.',
        badge: 'Đào sâu Nguyên lý (First-Principle Thinking)',
        riasecDelta: { I: 5, R: 2 },
        preferredMajors: ['khoa-hoc-du-lieu-ai', 'cong-nghe-thong-tin', 'duoc-hoc'],
        insightNote: 'Tư duy khoa học hàn lâm, rất phù hợp với nghiên cứu công nghệ lõi và dược lâm sàng.'
      },
      {
        text: 'Hỏi han bạn bè, tìm người có kinh nghiệm để lắng nghe chia sẻ và cùng thảo luận tìm phương án tối ưu.',
        badge: 'Tương tác & Lắng nghe (Collaborative Mindset)',
        riasecDelta: { S: 5, E: 2 },
        preferredMajors: ['quan-he-cong-chung', 'y-da-khoa', 'ngon-ngu-anh'],
        insightNote: 'Trí tuệ xã hội xuất sắc, dễ dàng tạo dựng niềm tin và xây dựng mạng lưới quan hệ.'
      },
      {
        text: 'Thử nghiệm ngay nhiều cách làm mới lạ, vẽ sơ đồ tư duy, chấp nhận sai sót để tìm ra góc nhìn đột phá.',
        badge: 'Thử nghiệm Đột phá (Creative Prototyping)',
        riasecDelta: { A: 5, E: 2 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa', 'marketing'],
        insightNote: 'Trực giác sáng tạo tự do, thích học hỏi qua hành động và sản phẩm thị giác thực tế.'
      },
      {
        text: 'Thiết lập danh mục kiểm tra (Checklist), sắp xếp quy trình từng bước rõ ràng để giải quyết có thứ tự.',
        badge: 'Hệ thống hóa Quy trình (Process-Driven)',
        riasecDelta: { C: 5, E: 2 },
        preferredMajors: ['logistics', 'tai-chinh-ngan-hang', 'luat-kinh-te'],
        insightNote: 'Kỷ luật và trật tự cao, nền tảng của nhà quản lý tài chính và chuỗi cung ứng.'
      }
    ]
  },
  {
    id: 7,
    phase: 'Năng lực nhận thức',
    mentorPrompt: 'Khi nghe đến các công cụ Trí tuệ nhân tạo (AI) như ChatGPT, Midjourney hay Robot tự hành, thái độ của bạn là gì?',
    subNote: 'Cách bạn nhìn nhận công nghệ mới quyết định mức độ sẵn sàng thích ứng tương lai.',
    options: [
      {
        text: 'Tò mò tột độ về cách thuật toán hoạt động, muốn tự tay lập trình huấn luyện hoặc làm chủ công nghệ lõi.',
        badge: 'Kiến tạo Công nghệ (AI Creator)',
        riasecDelta: { I: 5, R: 4 },
        preferredMajors: ['khoa-hoc-du-lieu-ai', 'cong-nghe-thong-tin'],
        insightNote: 'Tư duy kỹ thuật số tiên phong, có tiềm năng lớn trở thành kỹ sư AI hoặc nhà khoa học máy tính.'
      },
      {
        text: 'Sử dụng AI như trợ lý đắc lực để tạo nội dung, sinh hình ảnh, viết kịch bản và tối ưu hóa năng suất sáng tạo.',
        badge: 'Ứng dụng Sáng tạo (AI Augmented Artist)',
        riasecDelta: { A: 5, E: 3 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa', 'marketing'],
        insightNote: 'Khả năng đón đầu xu thế và tận dụng công nghệ để gia tăng giá trị nghệ thuật cá nhân.'
      },
      {
        text: 'Nhìn nhận cơ hội thương mại hóa: AI sẽ giúp doanh nghiệp tiết kiệm chi phí, mở ra các mô hình kinh doanh mới ra sao.',
        badge: 'Chiến lược Kinh doanh (Business Enabler)',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['marketing', 'kinh-doanh-quoc-te', 'tai-chinh-ngan-hang'],
        insightNote: 'Nhạy bén với việc chuyển hóa công nghệ thành doanh thu và lợi thế cạnh tranh.'
      },
      {
        text: 'Quan tâm đến các vấn đề đạo đức, quyền riêng tư, rủi ro pháp lý và tác động của AI đến con người xã hội.',
        badge: 'Đạo đức & Pháp lý (Ethics & Governance)',
        riasecDelta: { S: 4, C: 4, I: 2 },
        preferredMajors: ['luat-kinh-te', 'ngon-ngu-anh'],
        insightNote: 'Tư duy xã hội và pháp luật sâu sắc, phù hợp vai trò thẩm định chính sách công nghệ.'
      }
    ]
  },
  {
    id: 8,
    phase: 'Năng lực nhận thức',
    mentorPrompt: 'Khi nhìn vào một bảng tính Excel dày đặc những con số tài chính và công thức tính toán, cảm giác của bạn là gì?',
    subNote: 'Mức độ nhạy bén và sự kiên nhẫn với dữ liệu số.',
    options: [
      {
        text: 'Thấy thích thú: Thích xây dựng công thức tự động, liên kết dữ liệu, tìm ra tỷ suất sinh lời và điểm hòa vốn.',
        badge: 'Tư duy Tài chính & Định lượng',
        riasecDelta: { C: 5, I: 4, E: 3 },
        preferredMajors: ['tai-chinh-ngan-hang', 'khoa-hoc-du-lieu-ai', 'logistics'],
        insightNote: 'Bản năng quản trị tiền tệ và số liệu, nền tảng của nhà phân tích tài chính xuất sắc.'
      },
      {
        text: 'Cảm thấy ngột ngạt: Thích nhìn vào các bức ảnh đẹp, video ấn tượng, thông điệp truyền cảm hứng hơn là các con số khô cứng.',
        badge: 'Trực giác Thị giác & Cảm xúc',
        riasecDelta: { A: 5, S: 3 },
        preferredMajors: ['thiet-ke-do-hoa', 'truyen-thong-da-phuong-tien'],
        insightNote: 'Thiên hướng bán cầu não phải (sáng tạo, thẩm mỹ) vượt trội so với tư duy định lượng.'
      },
      {
        text: 'Chấp nhận xem số liệu khi cần, nhưng mục tiêu là để hiểu xu hướng hành vi khách hàng nhằm bán được hàng.',
        badge: 'Số liệu Phục vụ Kinh doanh',
        riasecDelta: { E: 5, A: 3 },
        preferredMajors: ['marketing', 'kinh-doanh-quoc-te'],
        insightNote: 'Sự kết hợp cân bằng giữa óc sáng tạo thông điệp và kỷ luật kiểm soát số liệu ROI.'
      },
      {
        text: 'Quan tâm đến tính chính xác và tuân thủ pháp lý: Từng con số phải có hóa đơn, chứng từ hợp lệ bảo vệ công ty.',
        badge: 'Kiểm soát Tuân thủ & Luật pháp',
        riasecDelta: { C: 5, I: 3 },
        preferredMajors: ['luat-kinh-te', 'tai-chinh-ngan-hang'],
        insightNote: 'Tư duy phòng ngừa rủi ro và tuân thủ quy chuẩn pháp luật nghiêm ngặt.'
      }
    ]
  },

  // ==========================================
  // MODULE 3: NGƯỠNG CHỊU ÁP LỰC & ĐỘNG LỰC
  // ==========================================
  {
    id: 9,
    phase: 'Áp lực & Môi trường',
    mentorPrompt: 'Khi đi làm sau này, loại áp lực công việc nào bạn cảm thấy mình "sẵn sàng chấp nhận và vượt qua" nhất?',
    subNote: 'Không có ngành nào nhẹ nhàng. Chọn đúng nghề là chọn được loại áp lực xứng đáng để bạn rèn luyện.',
    options: [
      {
        text: 'Áp lực về số liệu & doanh thu: Chiến dịch bán hàng tháng này thế nào, lãi lỗ ra sao, có đạt chỉ tiêu KPI không.',
        badge: 'Áp lực Doanh số (Marketing / Tài chính)',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['marketing', 'tai-chinh-ngan-hang', 'kinh-doanh-quoc-te'],
        insightNote: 'Bạn chịu được áp lực đo lường thực tế; bù lại thu nhập và hoa hồng không có trần giới hạn.'
      },
      {
        text: 'Áp lực về lỗi hệ thống & bảo mật: Đoạn code bị lỗi, hệ thống bị nghẽn mạng cần tìm ra nguyên nhân và sửa ngay.',
        badge: 'Áp lực Kỹ thuật (Công nghệ / Kỹ thuật)',
        riasecDelta: { I: 4, R: 4, C: 3 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai'],
        insightNote: 'Bạn không ngại bế tắc tư duy, chỉ cần tìm ra giải pháp là cảm thấy vô cùng thỏa mãn.'
      },
      {
        text: 'Áp lực sinh mệnh & thời gian chính xác: Một quyết định sai lầm có thể ảnh hưởng trực tiếp đến sức khỏe của bệnh nhân.',
        badge: 'Áp lực Sinh mạng (Y khoa / Dược học)',
        riasecDelta: { S: 5, I: 4 },
        preferredMajors: ['y-da-khoa', 'duoc-hoc'],
        insightNote: 'Bạn có thần kinh thép, sự cẩn trọng và tinh thần trách nhiệm cao cả của người thầy thuốc.'
      },
      {
        text: 'Áp lực đổi mới sáng tạo liên tục: Sợ ý tưởng bị cũ kỹ, sợ khán giả chê nhàm chán, thức đêm chạy deadline sự kiện.',
        badge: 'Áp lực Đổi mới (Truyền thông / Sáng tạo)',
        riasecDelta: { A: 5, E: 2 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa'],
        insightNote: 'Bạn coi sự vất vả là gia vị cần thiết để tạo ra những tác phẩm có dấu ấn riêng.'
      },
      {
        text: 'Áp lực về quy chế & pháp lý: Rà soát từng điều khoản hợp đồng hàng chục trang để bảo đảm không bị kiện cáo.',
        badge: 'Áp lực Pháp chế (Luật / Kiểm soát)',
        riasecDelta: { C: 5, I: 4, E: 2 },
        preferredMajors: ['luat-kinh-te'],
        insightNote: 'Bạn có sự kiên trì và tư duy phòng ngừa rủi ro vượt trội.'
      }
    ]
  },
  {
    id: 10,
    phase: 'Áp lực & Môi trường',
    mentorPrompt: 'Trong một buổi hội thảo hoặc sự kiện đông người, bạn cảm thấy mình thoải mái nhất khi làm gì?',
    subNote: 'Phong cách giao tiếp xã hội phản ánh năng lượng hướng nội / hướng ngoại của bạn.',
    options: [
      {
        text: 'Chủ động bắt chuyện, làm quen với diễn giả và các đối tác mới để mở rộng mối quan hệ hợp tác.',
        badge: 'Kết nối Ngoại giao (Networking)',
        riasecDelta: { E: 5, S: 4 },
        preferredMajors: ['quan-he-cong-chung', 'kinh-doanh-quoc-te', 'marketing'],
        insightNote: 'Kỹ năng đối ngoại và mở rộng quan hệ xuất sắc, rất thuận lợi cho con đường thương mại.'
      },
      {
        text: 'Lắng nghe chăm chú nội dung chuyên môn, ghi chép cẩn thận các tài liệu nghiên cứu mới để về tìm hiểu sâu.',
        badge: 'Hấp thu Tri thức (Knowledge Absorber)',
        riasecDelta: { I: 5, C: 3 },
        preferredMajors: ['khoa-hoc-du-lieu-ai', 'duoc-hoc', 'luat-kinh-te'],
        insightNote: 'Nghiêm túc với chuyên môn, hướng đến việc trở thành chuyên gia đầu ngành trong lĩnh vực.'
      },
      {
        text: 'Quan sát cách ban tổ chức dàn dựng sân khấu, ánh sáng, kịch bản chương trình và trải nghiệm người tham dự.',
        badge: 'Quan sát Trải nghiệm (Event & Experience)',
        riasecDelta: { A: 4, R: 3, E: 2 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa'],
        insightNote: 'Cảm quan sự kiện và không gian trực quan tốt, phù hợp mảng tổ chức sự kiện và truyền thông.'
      },
      {
        text: 'Đứng phía sau hỗ trợ khâu hậu cần, kiểm tra danh sách khách mời, đảm bảo âm thanh ánh sáng vận hành trơn tru.',
        badge: 'Hậu cần & Vận hành (Operations Master)',
        riasecDelta: { C: 5, R: 3 },
        preferredMajors: ['logistics', 'tai-chinh-ngan-hang'],
        insightNote: 'Tố chất người gác đền tin cậy, không cần nổi bật nhưng là mắt xích không thể thiếu.'
      }
    ]
  },
  {
    id: 11,
    phase: 'Áp lực & Môi trường',
    mentorPrompt: 'Khi xảy ra một sự cố khẩn cấp (chuyến hàng bị kẹt, máy tính bị lỗi, bệnh nhân chuyển biến xấu...), phản ứng tâm lý đầu tiên của bạn là gì?',
    subNote: 'Phản xạ khủng hoảng là thước đo chính xác về bản lĩnh cảm xúc và nghề nghiệp phù hợp.',
    options: [
      {
        text: 'Lập tức cách ly sự cố, truy tìm nguyên nhân cốt lõi trên nhật ký hệ thống (log) và thử nghiệm phương án vá lỗi.',
        badge: 'Phân tích Kỹ thuật Điềm tĩnh',
        riasecDelta: { I: 5, R: 3, C: 2 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai'],
        insightNote: 'Khả năng giữ cái đầu lạnh và tư duy giải quyết sự cố mạch lạc.'
      },
      {
        text: 'Nhanh chóng trấn an người xung quanh, lắng nghe tâm tư và ưu tiên bảo đảm an toàn tinh thần cho mọi người.',
        badge: 'Xoa dịu & Chăm sóc Con người',
        riasecDelta: { S: 5, I: 3 },
        preferredMajors: ['y-da-khoa', 'quan-he-cong-chung'],
        insightNote: 'Trí tuệ cảm xúc và bản năng bảo bọc, nền tảng cứu sinh cao quý.'
      },
      {
        text: 'Nhấc điện thoại gọi ngay cho các bên liên quan, đàm phán phương án thay thế, điều phối người xử lý tức thì.',
        badge: 'Quyết đoán & Điều hành Khủng hoảng',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['logistics', 'kinh-doanh-quoc-te', 'marketing'],
        insightNote: 'Tố chất chỉ huy trong tình huống tác chiến thương trường khẩn cấp.'
      },
      {
        text: 'Kiểm tra ngay lại các điều khoản quy định, biên bản trách nhiệm để xác định giới hạn pháp lý và phòng ngừa kiện cáo.',
        badge: 'Pháp chế & Bảo vệ Rủi ro',
        riasecDelta: { C: 5, I: 3 },
        preferredMajors: ['luat-kinh-te', 'tai-chinh-ngan-hang'],
        insightNote: 'Tư duy phòng thủ chặt chẽ, bảo vệ an toàn cho tổ chức.'
      }
    ]
  },
  {
    id: 12,
    phase: 'Áp lực & Môi trường',
    mentorPrompt: 'Khi thấy một sản phẩm quảng cáo hoặc một video viral trên mạng, suy nghĩ xuất hiện trong đầu bạn là gì?',
    subNote: 'Trực giác tiếp thị và truyền thông số.',
    options: [
      {
        text: 'Tự hỏi: "Kịch bản này đánh trúng insight tâm lý nào của người xem? Ý tưởng quay góc máy này lấy cảm hứng từ đâu?"',
        badge: 'Phân tích Ý niệm Sáng tạo',
        riasecDelta: { A: 5, E: 3 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa'],
        insightNote: 'Tư duy nhà sáng tạo nội dung truyền thông chuyên nghiệp.'
      },
      {
        text: 'Tự hỏi: "Doanh nghiệp này thu được bao nhiêu đơn hàng từ video này? Chi phí chạy ads của họ là bao nhiêu để sinh lời?"',
        badge: 'Phân tích Hiệu quả Thương mại',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['marketing', 'kinh-doanh-quoc-te'],
        insightNote: 'Tư duy nhà làm tiếp thị số (Performance Marketer) nhắm tới doanh số.'
      },
      {
        text: 'Tò mò về thuật toán phân phối nội dung của nền tảng (TikTok/YouTube) và cách dữ liệu người dùng được lưu trữ.',
        badge: 'Thuật toán Nền tảng số',
        riasecDelta: { I: 5, C: 3 },
        preferredMajors: ['khoa-hoc-du-lieu-ai', 'cong-nghe-thong-tin'],
        insightNote: 'Tư duy kỹ thuật công nghệ phân tích cơ chế phân phối số liệu.'
      },
      {
        text: 'Đánh giá xem thông điệp này có vi phạm thuần phong mỹ tục, pháp luật bảo vệ người tiêu dùng hoặc đạo đức quảng cáo không.',
        badge: 'Đạo đức & Pháp lý Quảng cáo',
        riasecDelta: { C: 4, S: 4 },
        preferredMajors: ['luat-kinh-te', 'quan-he-cong-chung'],
        insightNote: 'Tư duy pháp chế và bảo vệ uy tín thương hiệu cộng đồng.'
      }
    ]
  },

  // ==========================================
  // MODULE 4: MỎ NEO NGHỀ NGHIỆP & GIÁ TRỊ DÀI HẠN
  // ==========================================
  {
    id: 13,
    phase: 'Giá trị cốt lõi',
    mentorPrompt: 'Khi được tiếp xúc với ngoại ngữ (tiếng Anh, tiếng Trung...), cảm giác lớn nhất của bạn là gì?',
    subNote: 'Vai trò của ngôn ngữ trong sự nghiệp tương lai của bạn.',
    options: [
      {
        text: 'Ngôn ngữ là công cụ đàm phán hợp đồng, giao dịch thương mại và mở rộng buôn bán với khách hàng nước ngoài.',
        badge: 'Thương mại Quốc tế',
        riasecDelta: { E: 5, S: 3 },
        preferredMajors: ['kinh-doanh-quoc-te', 'marketing', 'logistics'],
        insightNote: 'Ngoại ngữ thương mại thực chiến giúp bạn kiếm tiền và mở rộng thị trường toàn cầu.'
      },
      {
        text: 'Say mê khám phá cấu trúc ngữ pháp, ngữ nghĩa học, dịch thuật văn học và truyền tải vẻ đẹp văn hóa.',
        badge: 'Ngôn ngữ & Văn hóa học',
        riasecDelta: { A: 5, I: 4, S: 3 },
        preferredMajors: ['ngon-ngu-anh', 'quan-he-cong-chung'],
        insightNote: 'Năng khiếu ngôn ngữ học chiều sâu, phù hợp biên phiên dịch cao cấp và nghiên cứu ngôn ngữ.'
      },
      {
        text: 'Dùng tiếng Anh để đọc tài liệu kỹ thuật, nghiên cứu thuật toán, làm việc trong nhóm lập trình quốc tế.',
        badge: 'Ngôn ngữ Kỹ thuật số',
        riasecDelta: { I: 5, R: 3 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai'],
        insightNote: 'Cầu nối tiếp cận tri thức công nghệ tiên tiến nhất của nhân loại.'
      },
      {
        text: 'Thích giảng dạy, hướng dẫn người khác phát âm chuẩn và tự tin giao tiếp ngoại ngữ.',
        badge: 'Sư phạm & Đào tạo',
        riasecDelta: { S: 5, A: 3 },
        preferredMajors: ['ngon-ngu-anh'],
        insightNote: 'Sứ mệnh nhà giáo, lan tỏa kỹ năng ngôn ngữ cho thế hệ tương lai.'
      }
    ]
  },
  {
    id: 14,
    phase: 'Giá trị cốt lõi',
    mentorPrompt: 'Hãy tưởng tượng bạn sau 5 năm tốt nghiệp: Phong cách sống (Lifestyle) nào bạn mong muốn nhất?',
    subNote: 'Nghề nghiệp định hình 70% thời gian thức mỗi ngày của bạn trong suốt 30 năm.',
    options: [
      {
        text: 'Làm việc linh hoạt hoặc Remote: Xách laptop làm việc tại quán cafe, nhận dự án từ xa cho khách hàng toàn cầu, tự do thời gian.',
        badge: 'Linh hoạt & Tự do',
        riasecDelta: { I: 4, A: 4 },
        preferredMajors: ['cong-nghe-thong-tin', 'truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa'],
        insightNote: 'Công nghệ thông tin và Thiết kế/Truyền thông số là các lĩnh vực hỗ trợ làm việc từ xa tốt nhất hiện nay.'
      },
      {
        text: 'Làm việc tại các tòa nhà trung tâm tài chính lớn: Môi trường chuyên nghiệp, thăng tiến rõ ràng, kết nối giới kinh doanh thượng lưu.',
        badge: 'Chuyên nghiệp & Bản lĩnh thương trường',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['tai-chinh-ngan-hang', 'marketing', 'kinh-doanh-quoc-te'],
        insightNote: 'Môi trường ngân hàng thương mại, tập đoàn đa quốc gia sẽ phù hợp với hoài bão của bạn.'
      },
      {
        text: 'Làm việc tại bệnh viện hoặc viện nghiên cứu: Môi trường học thuật uy tín, được xã hội tôn kính, tích lũy giá trị bền vững theo tuổi nghề.',
        badge: 'Cống hiến & Vững bền theo thời gian',
        riasecDelta: { S: 5, I: 4 },
        preferredMajors: ['y-da-khoa', 'duoc-hoc', 'ngon-ngu-anh'],
        insightNote: 'Nghề y và giáo dục học thuật mang lại sự bình an nội tâm và giá trị nhân văn sâu sắc.'
      },
      {
        text: 'Thường xuyên di chuyển, công tác trong và ngoài nước, tiếp xúc đối tác đa quốc gia và tham gia các hội chợ thương mại lớn.',
        badge: 'Toàn cầu hóa & Khám phá thế giới',
        riasecDelta: { E: 4, S: 4, R: 2 },
        preferredMajors: ['kinh-doanh-quoc-te', 'logistics', 'quan-he-cong-chung'],
        insightNote: 'Kinh doanh quốc tế và ngoại thương sẽ là bệ phóng hoàn hảo cho khát vọng toàn cầu.'
      }
    ]
  },
  {
    id: 15,
    phase: 'Giá trị cốt lõi',
    mentorPrompt: 'Động lực sâu xa nhất thôi thúc bạn nỗ lực mỗi ngày trong sự nghiệp tương lai là gì?',
    subNote: 'Giá trị nội tại (Core Driver) giúp bạn duy trì năng lượng bền bỉ khi gặp giai đoạn khó khăn.',
    options: [
      {
        text: 'Thu nhập cao không giới hạn và sự tự chủ tài chính sớm cho bản thân và gia đình.',
        badge: 'Tài chính & Độc lập',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['tai-chinh-ngan-hang', 'marketing', 'kinh-doanh-quoc-te'],
        insightNote: 'Động lực kinh doanh mạnh mẽ, rất hợp với các ngành có tỷ lệ hoa hồng và thưởng KPI cao.'
      },
      {
        text: 'Tạo ra những sản phẩm công nghệ hoặc thuật toán thay đổi cuộc sống của hàng triệu người.',
        badge: 'Kiến tạo Công nghệ',
        riasecDelta: { I: 5, R: 4 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai'],
        insightNote: 'Khát khao để lại di sản kỹ thuật số cho nhân loại.'
      },
      {
        text: 'Trực tiếp chữa bệnh, giúp đỡ người yếu thế và mang lại nụ cười bình an cho cộng đồng.',
        badge: 'Phụng sự Nhân sinh',
        riasecDelta: { S: 5, I: 3 },
        preferredMajors: ['y-da-khoa', 'duoc-hoc'],
        insightNote: 'Lòng trắc ẩn cao đẹp, nền tảng cốt tử của người làm y đức.'
      },
      {
        text: 'Được tự do sáng tạo, kể những câu chuyện chạm đến trái tim khán giả và được công chúng đón nhận.',
        badge: 'Dấu ấn Nghệ thuật',
        riasecDelta: { A: 5, S: 2 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa', 'quan-he-cong-chung'],
        insightNote: 'Nhu cầu biểu đạt nghệ thuật cá nhân và cảm xúc chân thật.'
      }
    ]
  },
  {
    id: 16,
    phase: 'Giá trị cốt lõi',
    mentorPrompt: 'Sau 30 năm nhìn lại sự nghiệp của mình, điều gì sẽ khiến bạn cảm thấy tự hào và mãn nguyện nhất?',
    subNote: 'Bức tranh di sản cuộc đời (Life Legacy) định hướng ngọn hải đăng cho mọi quyết định chọn trường.',
    options: [
      {
        text: 'Xây dựng được một doanh nghiệp vững mạnh, tạo ra việc làm và mang lại sự phồn vinh cho hàng nghìn gia đình.',
        badge: 'Kiến tạo Doanh nghiệp & Kinh tế',
        riasecDelta: { E: 5, C: 3 },
        preferredMajors: ['marketing', 'kinh-doanh-quoc-te', 'tai-chinh-ngan-hang'],
        insightNote: 'Di sản của một nhà lãnh đạo thương mại có tầm vóc và trách nhiệm xã hội.'
      },
      {
        text: 'Được tôn vinh là một chuyên gia kỹ thuật / công nghệ hàng đầu, để lại các phát minh hoặc giải pháp thuật toán kinh điển.',
        badge: 'Di sản Phát minh & Khoa học',
        riasecDelta: { I: 5, R: 4 },
        preferredMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai'],
        insightNote: 'Di sản trí tuệ thuần khiết làm thay đổi tiến trình văn minh nhân loại.'
      },
      {
        text: 'Cứu sống và chữa lành cho hàng vạn bệnh nhân, được người đời nhắc đến với lòng biết ơn và sự tôn kính sâu sắc.',
        badge: 'Lương y & Tấm lòng Nhân ái',
        riasecDelta: { S: 5, I: 4 },
        preferredMajors: ['y-da-khoa', 'duoc-hoc'],
        insightNote: 'Phúc đức và giá trị nhân đạo cao quý lưu truyền mãi với thời gian.'
      },
      {
        text: 'Tác phẩm nghệ thuật, thước phim hay chiến dịch truyền thông của mình đã truyền cảm hứng và thay đổi nhận thức của một thế hệ.',
        badge: 'Tác phẩm Văn hóa & Nghệ thuật',
        riasecDelta: { A: 5, S: 3 },
        preferredMajors: ['truyen-thong-da-phuong-tien', 'thiet-ke-do-hoa', 'quan-he-cong-chung'],
        insightNote: 'Dấu ấn tinh thần bất tử vượt qua giới hạn của thời gian.'
      }
    ]
  }
];
