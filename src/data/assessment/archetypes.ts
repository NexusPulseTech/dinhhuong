export interface ArchetypeProfile {
  code: string; // e.g., 'AE', 'IR', 'IC', 'SI', 'SE', 'EC', 'EA', 'RI', 'CI', 'IS', 'ES', 'CE'
  title: string;
  tagline: string;
  description: string;
  strengths: string[];
  idealEnvironment: string;
  blindspot: string;
  careerAnchors: string;
  suitableMajors: string[];
  successStrategy: string;
}

export const ARCHETYPES: Record<string, ArchetypeProfile> = {
  AE: {
    code: 'AE',
    title: 'Nhà Sáng Tạo Chiến Lược (Creative Strategist)',
    tagline: 'Sự hòa quyện giữa trực giác thẩm mỹ tự do và tư duy thương mại sắc bén.',
    description: 'Bạn thuộc nhóm người hiếm hoi có thể vừa bay bổng với các ý tưởng nghệ thuật, vừa giữ vững mục tiêu kinh doanh thực tế. Bạn không sáng tạo chỉ để ngắm, mà sáng tạo để lay động cảm xúc và dẫn dắt hành vi của đám đông.',
    strengths: [
      'Kể chuyện (Storytelling) và truyền cảm hứng thuyết phục người khác',
      'Nhạy cảm đặc biệt với xu hướng thị giác, thẩm mỹ và tâm lý công chúng',
      'Dám thử nghiệm những concept táo bạo mà đối thủ chưa dám làm',
      'Khả năng biến ý tưởng trừu tượng thành sản phẩm truyền thông cụ thể'
    ],
    idealEnvironment: 'Studio sáng tạo, Agency quảng cáo đa quốc gia, phòng Brand Marketing tập đoàn lớn, không gian mở năng động.',
    blindspot: 'Dễ nản lòng với các quy trình nhập liệu hoặc bảng biểu kế toán khô khan lặp đi lặp lại. Cần học cách kiên trì với giai đoạn đo lường số liệu.',
    careerAnchors: 'Sáng tạo Khởi nghiệp & Tự do Độc lập (Entrepreneurial Creativity & Autonomy)',
    suitableMajors: ['truyen-thong-da-phuong-tien', 'marketing', 'thiet-ke-do-hoa', 'kien-truc-noi-that', 'quan-he-cong-chung'],
    successStrategy: 'Tập trung rèn luyện tư duy dữ liệu (Data-driven Creative) để bổ trợ cho trực giác nghệ thuật, bạn sẽ trở thành Giám đốc sáng tạo không thể thay thế.'
  },
  EA: {
    code: 'EA',
    title: 'Nhà Tiếp Thị & Khởi Nghiệp Đột Phá (Visionary Marketer)',
    tagline: 'Bản lĩnh thương trường kết hợp cùng óc sáng tạo không giới hạn để tạo ra doanh số.',
    description: 'Bạn sinh ra để nhìn thấy cơ hội kinh doanh ở những nơi người khác chỉ thấy khó khăn. Bạn có khả năng đàm phán, kết nối nguồn lực và xây dựng chiến lược tăng trưởng doanh số với tốc độ cao.',
    strengths: [
      'Nhạy bén với cơ hội kiếm tiền và tâm lý người tiêu dùng',
      'Kỹ năng đàm phán thương thuyết lôi cuốn, tạo dựng niềm tin nhanh chóng',
      'Khả năng dẫn dắt dự án từ ý tưởng đến lợi nhuận thực tế',
      'Tư duy cạnh tranh lành mạnh, thích thử thách và vượt chỉ tiêu KPI'
    ],
    idealEnvironment: 'Môi trường kinh doanh năng động, sàn thương mại điện tử, công ty khởi nghiệp tăng trưởng nhanh, tập đoàn đa quốc gia.',
    blindspot: 'Có xu hướng phóng đại kỳ vọng và dễ mất kiên nhẫn khi phải hoàn thiện các khâu chi tiết, kiểm toán văn bản.',
    careerAnchors: 'Năng lực Quản trị Chung & Thử thách Thuần túy (General Management & Pure Challenge)',
    suitableMajors: ['marketing', 'kinh-doanh-quoc-te', 'quan-tri-khach-san', 'quan-he-cong-chung', 'thuong-mai-dien-tu'],
    successStrategy: 'Cộng tác chặt chẽ với những người có thế mạnh vận hành chi tiết (nhóm C) để biến tầm nhìn của bạn thành hệ thống bền vững.'
  },
  IR: {
    code: 'IR',
    title: 'Kỹ Sư Công Nghệ & Thuật Toán (Tech & Systems Architect)',
    tagline: 'Tư duy logic chiều sâu, giải mã nguyên lý máy tính và kiến tạo hệ thống bền vững.',
    description: 'Bạn là người đi tìm bản chất gốc rễ của vạn vật thông qua lăng kính toán học và kỹ thuật. Bạn yêu thích việc viết code, tối ưu thuật toán, xây dựng kiến trúc phần mềm hoặc huấn luyện mô hình trí tuệ nhân tạo.',
    strengths: [
      'Tư duy trừu tượng, giải quyết bài toán phức tạp bằng cấu trúc logic',
      'Khả năng tập trung cao độ độc lập hàng giờ liền mà không bị xao nhãng',
      'Tôn trọng sự thật khách quan, kiểm chứng bằng thực nghiệm và dữ liệu',
      'Tự học công nghệ mới cực nhanh từ các tài liệu kỹ thuật quốc tế'
    ],
    idealEnvironment: 'Phòng thí nghiệm AI, công ty công nghệ sản phẩm (Product), trung tâm dữ liệu hiện đại, môi trường làm việc từ xa linh hoạt.',
    blindspot: 'Ngại giao tiếp xã giao và không thích những công việc đòi hỏi phải làm hài lòng người khác bằng cảm xúc thiếu tính logic.',
    careerAnchors: 'Năng lực Kỹ thuật / Chuyên môn Sâu (Technical & Functional Competence)',
    suitableMajors: ['cong-nghe-thong-tin', 'khoa-hoc-du-lieu-ai', 'an-toan-thong-tin', 'co-dien-tu-robot'],
    successStrategy: 'Nâng cao kỹ năng giao tiếp tiếng Anh và diễn đạt kỹ thuật bằng ngôn ngữ kinh doanh để thăng tiến lên vai trò Tech Lead hoặc CTO.'
  },
  RI: {
    code: 'RI',
    title: 'Kỹ Sư Cơ Điện Tử & Tự Động Hóa (Automation & Robotics Specialist)',
    tagline: 'Bàn tay khéo léo kết hợp khối óc khoa học để chế tạo máy móc thông minh.',
    description: 'Bạn thích làm việc với cả phần cứng lẫn phần mềm. Bạn thích nhìn thấy sản phẩm của mình vận hành ngoài đời thực: robot chuyển động, dây chuyền tự động, thiết bị IoT kết nối vạn vật.',
    strengths: [
      'Năng khiếu thao tác máy móc, công cụ kỹ thuật và mạch điện tử',
      'Tư duy không gian và cấu trúc vật lý xuất sắc',
      'Kiên trì kiểm thử, gỡ lỗi cơ điện và sửa chữa hỏng hóc',
      'Kỷ luật an toàn lao động và độ tin cậy cơ khí cao'
    ],
    idealEnvironment: 'Nhà máy thông minh, phòng chế tạo robot, trung tâm R&D phần cứng, khu công nghệ cao.',
    blindspot: 'Dễ xa rời các khía cạnh thị trường và trải nghiệm người dùng nếu chỉ tập trung hoàn thiện phần cứng.',
    careerAnchors: 'Năng lực Kỹ thuật Thực thi (Technical Competence)',
    suitableMajors: ['co-dien-tu-robot', 'ky-thuat-o-to', 'cong-nghe-thong-tin', 'logistics', 'kien-truc-noi-that'],
    successStrategy: 'Kết hợp kỹ năng IoT với phân tích dữ liệu đám mây để dẫn đầu làn sóng công nghiệp 4.0.'
  },
  IC: {
    code: 'IC',
    title: 'Chuyên Gia Dữ Liệu & Tài Chính Định Lượng (Quantitative Data Analyst)',
    tagline: 'Khai phá trật tự từ dữ liệu hỗn độn, nhìn thấy quy luật mà người khác bỏ sót.',
    description: 'Bạn là bậc thầy của những con số, bảng tính và mô hình thống kê. Bạn không đưa ra quyết định dựa trên cảm tính, mọi luận điểm của bạn đều có số liệu kiểm chứng và mô hình dự báo rủi ro.',
    strengths: [
      'Tư duy định lượng, toán học ứng dụng, thống kê và xác suất',
      'Tính cẩn trọng, kỷ luật và chính xác tuyệt đối trong từng phép tính',
      'Khả năng phát hiện sai số và bất thường trong các tập dữ liệu khổng lồ',
      'Tư duy quản trị rủi ro và phòng ngừa khủng hoảng tài chính'
    ],
    idealEnvironment: 'Bộ phận Khoa học dữ liệu, Quỹ đầu tư mạo hiểm, Ngân hàng thương mại, Viện nghiên cứu kinh tế.',
    blindspot: 'Có xu hướng cầu toàn quá mức (Analysis Paralysis), đôi khi chần chừ đưa ra quyết định khi chưa có đủ 100% dữ liệu.',
    careerAnchors: 'Sự Ổn định & Chuyên môn Sâu (Security & Technical Competence)',
    suitableMajors: ['khoa-hoc-du-lieu-ai', 'ke-toan-kiem-toan', 'tai-chinh-ngan-hang', 'an-toan-thong-tin', 'luat-kinh-te'],
    successStrategy: 'Rèn luyện kỹ năng trực quan hóa dữ liệu (Data Visualization) để biến các con số phức tạp thành báo cáo dễ hiểu cho ban điều hành.'
  },
  CI: {
    code: 'CI',
    title: 'Kiểm Toán Viên & Pháp Chế Hệ Thống (Compliance & Legal Auditor)',
    tagline: 'Bức tường thành bảo vệ trật tự pháp lý, tính minh bạch và chuẩn mực đạo đức.',
    description: 'Bạn tôn trọng luật lệ, quy chuẩn và tính trung thực. Bạn có con mắt sắc bén để rà soát từng điều khoản hợp đồng, chính sách bảo mật và báo cáo tài chính nhằm bảo vệ tổ chức trước mọi rủi ro kiện cáo.',
    strengths: [
      'Tính tỉ mỉ, kiên nhẫn đọc hiểu hàng trăm trang tài liệu pháp lý phức tạp',
      'Tư duy logic hình thức, lập luận chặt chẽ không có kẽ hở',
      'Đạo đức nghề nghiệp liêm chính, tôn trọng nguyên tắc và luật định',
      'Kỹ năng lập hồ sơ, lưu trữ chứng từ có hệ thống khoa học'
    ],
    idealEnvironment: 'Công ty kiểm toán quốc tế (Big 4), cơ quan pháp chế tập đoàn, ngân hàng nhà nước, văn phòng luật sư.',
    blindspot: 'Có thể bị xem là quá nguyên tắc hoặc cứng nhắc nếu không linh hoạt tìm kiếm các giải pháp hợp pháp thay thế cho doanh nghiệp.',
    careerAnchors: 'An toàn & Ổn định Hệ thống (Security & Stability)',
    suitableMajors: ['ke-toan-kiem-toan', 'luat-kinh-te', 'tai-chinh-ngan-hang', 'an-toan-thong-tin'],
    successStrategy: 'Trang bị thêm kiến thức về luật thương mại quốc tế và luật công nghệ số (AI Governance, An ninh mạng) để đón đầu xu thế.'
  },
  SI: {
    code: 'SI',
    title: 'Bác Sĩ & Chuyên Gia Y Sinh (Clinical & Biotech Healer)',
    tagline: 'Trái tim trắc ẩn vì con người kết hợp với sự sắc bén của tư duy khoa học sự sống.',
    description: 'Bạn mang trong mình thiên chức chữa lành và phụng sự nhân sinh. Bạn muốn dùng kiến thức y dược khoa học để giảm bớt nỗi đau của người bệnh, tìm ra phương pháp điều trị mới và kéo dài sự sống.',
    strengths: [
      'Lòng trắc ẩn, sự đồng cảm sâu sắc và phong thái lắng nghe tận tụy',
      'Trí nhớ khoa học y sinh xuất sắc, khả năng chịu áp lực sinh mạng',
      'Đạo đức nghề nghiệp cao quý, tinh thần trách nhiệm trước sinh mệnh con người',
      'Khả năng giải thích các phác đồ y khoa phức tạp bằng ngôn từ ấm áp, dễ hiểu'
    ],
    idealEnvironment: 'Bệnh viện tuyến trung ương, viện nghiên cứu dược học lâm sàng, trung tâm chăm sóc sức khỏe chất lượng cao.',
    blindspot: 'Dễ bị kiệt sức cảm xúc (Compassion Fatigue / Emotional Burnout) nếu không biết cách thiết lập ranh giới tâm lý lành mạnh với ca bệnh.',
    careerAnchors: 'Phụng sự & Cống hiến vì một Mục tiêu Lớn (Service & Dedication to a Cause)',
    suitableMajors: ['y-da-khoa', 'tam-ly-hoc', 'cong-nghe-sinh-hoc', 'duoc-hoc', 'su-pham-tieng-anh'],
    successStrategy: 'Rèn luyện thể lực bền bỉ và học cách thiền định / cân bằng tinh thần để duy trì ngọn lửa nhiệt huyết suốt đời với nghề y.'
  },
  IS: {
    code: 'IS',
    title: 'Nhà Nghiên Cứu Y Dược & Khoa Học Sức Khỏe (Biomedical Researcher)',
    tagline: 'Khám phá cơ chế phân tử và bào chế các loại dược phẩm cứu sống nhân loại.',
    description: 'Bạn say mê nghiên cứu trong phòng lab: nghiên cứu vi sinh vật, giải trình tự gen, phát triển thuốc mới hoặc vắc-xin. Mục tiêu của bạn là tạo ra những bước tiến khoa học có tầm ảnh hưởng đến sức khỏe hàng triệu người.',
    strengths: [
      'Tư duy nghiên cứu học thuật chuẩn mực, cẩn trọng trong từng giọt hóa chất',
      'Khả năng đọc và viết các báo cáo khoa học quốc tế',
      'Kiên trì bền bỉ với các thí nghiệm kéo dài hàng tháng, hàng năm',
      'Động lực cống hiến vì tri thức nhân loại hơn là danh lợi trước mắt'
    ],
    idealEnvironment: 'Viện nghiên cứu sinh học phân tử, phòng lab công nghệ dược phẩm quốc tế, trường đại học y dược.',
    blindspot: 'Đôi khi quá chìm đắm trong thế giới lý thuyết mà ít quan tâm đến việc ứng dụng thương mại hóa ra thị trường.',
    careerAnchors: 'Chuyên môn Thuần khiết & Phụng sự (Pure Technical Mastery & Cause)',
    suitableMajors: ['cong-nghe-sinh-hoc', 'duoc-hoc', 'y-da-khoa', 'tam-ly-hoc'],
    successStrategy: 'Xây dựng mối liên kết với các quỹ đầu tư công nghệ sinh học (Biotech VCs) để đưa các công trình nghiên cứu sớm ra thị trường thực tiễn.'
  },
  SE: {
    code: 'SE',
    title: 'Nhà Ngoại Giao & Phát Triển Quan Hệ (Social Diplomat)',
    tagline: 'Bậc thầy kết nối con người, kiến tạo niềm tin và mở rộng mạng lưới hợp tác toàn cầu.',
    description: 'Bạn có trí tuệ cảm xúc (EQ) vượt trội và khả năng thấu hiểu tâm tư người khác chỉ sau vài phút trò chuyện. Bạn xuất sắc trong vai trò đại diện phát ngôn, hòa giải mâu thuẫn và xây dựng mối quan hệ đối tác bền vững.',
    strengths: [
      'Trí tuệ cảm xúc (EQ) xuất sắc, khả năng lắng nghe và đồng cảm chân thành',
      'Năng lượng tích cực, kỹ năng tạo thiện cảm và xóa tan bầu không khí căng thẳng',
      'Tư duy đàm phán cùng thắng (Win-Win) và tài ngoại giao nhã nhặn',
      'Khả năng xây dựng và nuôi dưỡng mạng lưới quan hệ rộng khắp'
    ],
    idealEnvironment: 'Phòng Đối ngoại & Quan hệ công chúng (PR), Tổ chức phi chính phủ quốc tế (NGO), cơ quan ngoại giao, phòng Nhân sự cấp cao.',
    blindspot: 'Đôi khi quá chú trọng việc làm vui lòng tất cả mọi người mà e ngại đưa ra các quyết định kỷ luật hoặc cứng rắn cần thiết.',
    careerAnchors: 'Phụng sự Xã hội & Quản trị Con người (Service & People Management)',
    suitableMajors: ['tam-ly-hoc', 'quan-tri-khach-san', 'quan-he-cong-chung', 'ngon-ngu-anh', 'kinh-doanh-quoc-te'],
    successStrategy: 'Bổ sung kỹ năng quản trị khủng hoảng truyền thông (Crisis Management) để trở thành chuyên gia tư vấn chiến lược hình ảnh hàng đầu.'
  },
  ES: {
    code: 'ES',
    title: 'Nhà Lãnh Đạo Đội Ngũ & Phát Triển Con Người (People-Centric Leader)',
    tagline: 'Dẫn dắt tổ chức bằng sự thấu hiểu, truyền cảm hứng và đánh thức tiềm năng nhân tài.',
    description: 'Bạn tin rằng tài sản lớn nhất của mọi doanh nghiệp chính là con người. Bạn vừa có tầm nhìn kinh doanh chiến lược, vừa có khả năng lắng nghe, đào tạo và xây dựng văn hóa doanh nghiệp gắn kết.',
    strengths: [
      'Kỹ năng truyền lửa, khích lệ tinh thần đồng đội vượt qua giai đoạn khó khăn',
      'Khả năng nhìn ra điểm mạnh tiềm ẩn của từng cá nhân và sắp xếp đúng vị trí',
      'Tư duy quản trị nhân tài và xây dựng môi trường làm việc hạnh phúc',
      'Khả năng giải quyết xung đột nội bộ một cách công bằng, văn minh'
    ],
    idealEnvironment: 'Tập đoàn đa quốc gia có văn hóa phát triển con người, công ty công nghệ lớn, tổ chức giáo dục đào tạo.',
    blindspot: 'Có thể bị cảm xúc chi phối khi cần phải tinh giản biên chế hoặc sa thải nhân sự không đạt yêu cầu.',
    careerAnchors: 'Quản trị Chung & Phát triển Xã hội (General Management & Human Growth)',
    suitableMajors: ['quan-tri-khach-san', 'marketing', 'kinh-doanh-quoc-te', 'su-pham-tieng-anh', 'quan-he-cong-chung'],
    successStrategy: 'Kết hợp triết lý lãnh đạo phục vụ (Servant Leadership) với các chỉ số đo lường hiệu suất rõ ràng (OKRs/KPIs).'
  },
  EC: {
    code: 'EC',
    title: 'Nhà Quản Trị Vận Hành & Chuỗi Cung Ứng (Operations & Logistics Director)',
    tagline: 'Ý chí kinh doanh quyết đoán kết hợp cùng kỷ luật tổ chức quy trình chặt chẽ.',
    description: 'Bạn là người kiểm soát dòng chảy: dòng chảy hàng hóa, dòng tiền, thông tin và nhân lực. Bạn ghét sự lãng phí và lộn xộn. Bạn luôn tìm cách tối ưu hóa chi phí, rút ngắn thời gian giao hàng và nâng cao năng suất hoạt động.',
    strengths: [
      'Tư duy quy trình (Process-driven), tối ưu hóa luồng công việc khoa học',
      'Khả năng xử lý khủng hoảng tiến độ và điều phối nhiều mắt xích cùng lúc',
      'Nhạy bén với chi phí, ngân sách và đàm phán giá cước vận chuyển',
      'Bình tĩnh và quyết đoán dưới áp lực thời gian giao hàng gấp rút'
    ],
    idealEnvironment: 'Tập đoàn Logistics toàn cầu, cảng biển quốc tế, hãng hàng không, chuỗi bán lẻ quy mô lớn.',
    blindspot: 'Có xu hướng quá tập trung vào quy trình mà thiếu đi sự linh hoạt khi đối mặt với các tình huống cần sáng tạo phá cách.',
    careerAnchors: 'Năng lực Quản trị Vận hành & Thử thách (Operations Management & Pure Challenge)',
    suitableMajors: ['logistics', 'ke-toan-kiem-toan', 'kinh-doanh-quoc-te', 'tai-chinh-ngan-hang', 'ky-thuat-o-to'],
    successStrategy: 'Làm chủ các công cụ chuyển đổi số chuỗi cung ứng (ERP, SAP, WMS, Big Data Logistics) để quản trị các mạng lưới toàn cầu.'
  },
  CE: {
    code: 'CE',
    title: 'Giám Đốc Tài Chính & Quản Trị Rủi Ro (Chief Financial Controller)',
    tagline: 'Kỷ luật ngân sách thép và khả năng bảo toàn vốn vững chắc cho doanh nghiệp.',
    description: 'Bạn hiểu rằng tiền là mạch máu của doanh nghiệp. Bạn xây dựng hệ thống kiểm soát nội bộ chặt chẽ, tối ưu hóa cơ cấu vốn và bảo đảm doanh nghiệp luôn an toàn về mặt thanh khoản trước mọi biến động thị trường.',
    strengths: [
      'Khả năng phân tích báo cáo tài chính, dòng tiền và bảng cân đối kế toán chuyên sâu',
      'Tính kỷ luật cao, không thỏa hiệp với các sai phạm tài chính',
      'Tư duy chiến lược về cơ cấu vốn, đòn bẩy tài chính và thuế',
      'Kỹ năng bảo vệ tài sản doanh nghiệp trước các rủi ro pháp lý và thị trường'
    ],
    idealEnvironment: 'Hội đồng quản trị tập đoàn lớn, ngân hàng đầu tư, công ty chứng khoán, cơ quan kiểm toán nhà nước.',
    blindspot: 'Đôi khi quá thận trọng, kiểm soát chi tiêu quá chặt chẽ khiến doanh nghiệp bỏ lỡ các cơ hội đầu tư bứt phá.',
    careerAnchors: 'Sự Ổn định & An toàn Tài chính (Security & Financial Mastery)',
    suitableMajors: ['ke-toan-kiem-toan', 'tai-chinh-ngan-hang', 'luat-kinh-te', 'logistics'],
    successStrategy: 'Kết hợp tư duy kiểm soát rủi ro với tư duy đồng hành kinh doanh (Business Partnering) để cùng CEO tạo ra tăng trưởng bền vững.'
  }
};
