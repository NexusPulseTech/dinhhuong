import { Major } from '../types';

export const EXTRA_MAJORS: Major[] = [
  // ==========================================
  // 1. TÂM LÝ HỌC (PSYCHOLOGY)
  // ==========================================
  {
    id: 'tam-ly-hoc',
    code: '7310401',
    name: 'Tâm lý học & Khoa học hành vi (Psychology)',
    tagline: 'Khoa học thấu hiểu động cơ nội tâm, cảm xúc và hành vi con người',
    sector: 'Khoa học Xã hội & Nhân văn',
    category: 'Khoa học Xã hội & Nhân văn',
    admissionBlocks: ['C00', 'D01', 'B00', 'D14'],
    riasecPrimary: ['S', 'I', 'A'],
    riasecScore: { R: 10, I: 85, A: 65, S: 95, E: 45, C: 40 },
    summary: 'Chuyên ngành nghiên cứu các quy luật tâm lý, cơ chế nhận thức, biến đổi cảm xúc và hành vi của con người trong các bối cảnh gia đình, học đường, tổ chức doanh nghiệp và trị liệu sức khỏe tâm thần.',
    personalityTraits: [
      'Khả năng lắng nghe sâu sắc, không phán xét, đồng cảm tự nhiên',
      'Tư duy quan sát tinh tế, tò mò về động cơ ẩn sâu sau mỗi hành vi',
      'Khả năng tự điều tiết cảm xúc cá nhân, giữ ranh giới tâm lý tốt',
      'Kiên nhẫn, thích giúp đỡ và tháo gỡ bế tắc tinh thần cho người khác'
    ],
    suitableFor: [
      'Thường được bạn bè tìm đến tâm sự mỗi khi gặp khó khăn tâm lý',
      'Yêu thích đọc sách về tâm lý học hành vi, phân tâm học, tâm lý học thần kinh',
      'Muốn trở thành Chuyên viên tham vấn tâm lý, Chuyên gia Nhân sự (HR), hoặc Trị liệu viên'
    ],
    unsuitableFor: [
      'Thiếu kiên nhẫn, dễ áp đặt góc nhìn cá nhân lên vấn đề của người khác',
      'Dễ bị lây nhiễm năng lượng tiêu cực, tâm lý không vững vàng trước tổn thương'
    ],
    skills: {
      hardSkills: [
        'Kỹ thuật tham vấn tâm lý cá nhân và gia đình',
        'Sử dụng các trắc nghiệm & thang đo tâm lý chuẩn quốc tế (WAIS, MMPI, DASS-21)',
        'Thiết kế chương trình phát triển tâm lý học đường & sức khỏe tinh thần',
        'Phân tích hành vi tổ chức & Quản trị nhân sự định lượng'
      ],
      softSkills: [
        'Lắng nghe tích cực (Active Listening) và phản hồi thấu cảm',
        'Kỹ năng đặt câu hỏi gợi mở phi định kiến',
        'Bảo mật thông tin thân chủ tuyệt đối',
        'Kiểm soát chuyển dịch cảm xúc (Transference Management)'
      ],
      toolsAndSoftware: [
        'SPSS (Xử lý số liệu nghiên cứu tâm lý học)',
        'Mindmeister / Miro (Sơ đồ hóa quá trình tham vấn)',
        'Phần mềm khảo sát Qualtrics'
      ],
      futureSkills2026: [
        'Tham vấn tâm lý kỹ thuật số (Tele-mental Health & AI Therapy Tools)',
        'Tâm lý học hành vi người tiêu dùng trên môi trường số (Behavioral Analytics)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Ngữ văn (Thấu cảm ngôn ngữ)', 'Sinh học (Cơ sở sinh học thần kinh)', 'Tiếng Anh (Tiếp cận tài liệu quốc tế)'],
      coreUniversitySubjects: [
        'Tâm lý học đại cương & Tâm lý học phát triển',
        'Sinh lý học hoạt động thần kinh cấp cao',
        'Tâm lý học xã hội & Tâm lý học nhân cách',
        'Kỹ năng tham vấn & Đạo đức nghề nghiệp tâm lý'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Cấu trúc não bộ, chất dẫn truyền thần kinh và cơ chế hình thành cảm xúc',
        'Các giai đoạn phát triển tâm lý từ sơ sinh đến tuổi già',
        'Các rối loạn tâm lý phổ biến (Trầm cảm, Rối loạn lo âu, ADHD, PTSD)'
      ],
      practicalSkills: [
        'Thực hành đóng vai tham vấn tâm lý có giám sát chuyên môn (Supervision)',
        'Đánh giá và chẩn đoán mức độ căng thẳng của học sinh/nhân viên',
        'Thiết kế workshop trị liệu nghệ thuật (Art Therapy) và chánh niệm (Mindfulness)'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Chuyên viên tâm lý học đường tại các trường liên cấp / quốc tế',
        'Chuyên viên tuyển dụng & Đào tạo nhân sự (HR Talent Acquisition / L&D)',
        'Trợ lý tham vấn tâm lý tại các phòng khám và trung tâm tâm lý trị liệu',
        'Chuyên viên nghiên cứu thị trường & Insight khách hàng'
      ],
      longTermRoles: [
        'Chuyên gia tâm lý lâm sàng độc lập (Clinical Psychologist)',
        'Giám đốc Nhân sự & Trải nghiệm nhân viên (CHRO)',
        'Chuyên gia cố vấn văn hóa doanh nghiệp & Sức khỏe tinh thần'
      ]
    },
    salaryBands: {
      freshGrad: '9 – 15 triệu VNĐ/tháng',
      experienced: '18 – 35 triệu VNĐ/tháng (Tham vấn 500k – 1.5tr/giờ)',
      management: '40 – 70 triệu VNĐ/tháng (Mở trung tâm tham vấn riêng)'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Khoa học Xã hội và Nhân văn - ĐHQG Hà Nội (USSH VNU)',
        code: 'QHX',
        location: 'Hà Nội',
        cutoff2024: 26.85,
        targetBlock: 'C00, D01',
        tuitionPerYear: '16 – 22 triệu/năm',
        strengths: 'Cái nôi đào tạo tâm lý học hàn lâm hàng đầu miền Bắc, đội ngũ giáo sư đầu ngành.'
      },
      {
        region: 'Bắc',
        name: 'Đại học Sư phạm Hà Nội (HNUE)',
        code: 'SPH',
        location: 'Hà Nội',
        cutoff2024: 26.25,
        targetBlock: 'C00, D01',
        tuitionPerYear: '14 – 18 triệu/năm (Miễn học phí sư phạm)',
        strengths: 'Rất mạnh về Tâm lý học giáo dục và Tâm lý học lứa tuổi học sinh.'
      },
      {
        region: 'Nam',
        name: 'Đại học Khoa học Xã hội và Nhân văn - ĐHQG TP.HCM (USSH HCM)',
        code: 'QSX',
        location: 'TP.HCM',
        cutoff2024: 27.00,
        targetBlock: 'C00, D01, D14',
        tuitionPerYear: '24 – 30 triệu/năm',
        strengths: 'Trung tâm đào tạo tâm lý học ứng dụng và tham vấn năng động nhất miền Nam.'
      },
      {
        region: 'Nam',
        name: 'Đại học Sư phạm TP.HCM (HCMUE)',
        code: 'SPS',
        location: 'TP.HCM',
        cutoff2024: 26.10,
        targetBlock: 'C00, D01, B00',
        tuitionPerYear: '15 – 20 triệu/năm',
        strengths: 'Chương trình đào tạo thực tế, cơ hội thực hành lâm sàng đa dạng.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Nghiên cứu thế giới nội tâm, động cơ tiềm thức và quy luật hành vi con người.',
      aiImpact: 'THẤP: AI không thể thay thế sự thấu cảm, nhạy bén trực giác và khả năng kết nối cảm xúc chân thực của con người.',
      englishRole: 'CAO: Tài liệu nghiên cứu lâm sàng và các thang đo tâm lý mới đều bằng tiếng Anh.',
      freelancePotential: 'Rất cao: Làm việc độc lập, nhận lịch tham vấn theo giờ hoặc cố vấn doanh nghiệp từ xa.',
      agencyOrBusiness: 'Cao: Mở trung tâm trị liệu, phòng khám tâm lý hoặc công ty đào tạo kỹ năng.',
      creativeFreedom: 'Cao: Mỗi thân chủ là một câu chuyện riêng biệt, phương pháp trị liệu linh hoạt.',
      marketDemand2025_2030: 'Rất cao: Nhận thức về sức khỏe tinh thần tại Việt Nam đang tăng đột biến sau đại dịch.',
      stability: 'Rất cao: Áp lực cuộc sống hiện đại càng lớn, nhu cầu hỗ trợ tâm lý càng tăng.',
      pressureLevel: 'Áp lực chịu tải cảm xúc (Burnout) nếu không biết xả năng lượng tiêu cực.',
      personalityFit: 'Đồng cảm, nhạy bén, biết lắng nghe, kiên nhẫn, điềm đạm, kín đáo.'
    },
    biasDebunking: {
      myth: '"Học tâm lý học ra để đọc suy nghĩ người khác hoặc chỉ chữa bệnh cho người tâm thần."',
      reality: 'Tâm lý học là khoa học hành vi thực nghiệm. Phần lớn cử nhân làm việc trong phát triển nhân sự, giáo dục, xây dựng văn hóa công ty và chăm sóc sức khỏe tinh thần cho người bình thường.',
      emotionalTrap: 'Nghĩ rằng vào học để tự chữa lành vết thương của bản thân mà không chuẩn bị năng lực chịu áp lực học thuật.'
    },
    roadmap: {
      grade12Prep: 'Rèn luyện khả năng đọc sách dài, tham gia hoạt động xã hội tình nguyện lắng nghe.',
      year1_2: 'Nắm chắc kiến thức sinh lý thần kinh, tâm lý học nhận thức và phương pháp nghiên cứu định lượng.',
      year3_4: 'Đi thực tập tại trường học hoặc phòng khám; tham gia các ca tham vấn có người giám sát chuyên môn.',
      postGrad: 'Học lên Thạc sĩ tâm lý lâm sàng để đủ điều kiện cấp chứng chỉ hành nghề độc lập theo luật mới.'
    }
  },

  // ==========================================
  // 2. KỸ THUẬT CƠ ĐIỆN TỬ & ROBOT (MECHATRONICS)
  // ==========================================
  {
    id: 'co-dien-tu-robot',
    code: '7520114',
    name: 'Kỹ thuật Cơ điện tử & Robot (Mechatronics & Robotics)',
    tagline: 'Trái tim của cuộc cách mạng công nghiệp 4.0 và tự động hóa nhà máy thông minh',
    sector: 'Kỹ thuật & Công nghệ',
    category: 'Kỹ thuật & Công nghệ',
    admissionBlocks: ['A00', 'A01', 'D07'],
    riasecPrimary: ['R', 'I', 'E'],
    riasecScore: { R: 95, I: 90, A: 30, S: 25, E: 60, C: 65 },
    summary: 'Chuyên ngành giao thoa đỉnh cao giữa Cơ khí chính xác, Điện tử thông minh và Lập trình điều khiển máy tính nhằm thiết kế các hệ thống tự động, cánh tay robot công nghiệp và dây chuyền sản xuất tự hành.',
    personalityTraits: [
      'Đam mê máy móc, bo mạch, thiết bị cơ khí và robot tự động',
      'Tư duy logic kỹ thuật xuất sắc, thích tháo lắp và sáng chế thiết bị',
      'Kiên trì bền bỉ khi dò lỗi phần cứng và gỡ lỗi (debug) mã nguồn',
      'Khả năng chịu áp lực cao trong môi trường dự án sản xuất thực tế'
    ],
    suitableFor: [
      'Rất giỏi các môn Vật lý và Toán học, thích tham gia cuộc thi Robocon / STEM',
      'Thích lập trình vi điều khiển (Arduino, STM32, PLC) kết hợp cơ khí',
      'Muốn làm việc trong các tập đoàn công nghệ lớn: Samsung, Intel, Foxconn, VinFast'
    ],
    unsuitableFor: [
      'Ngại động tay chân vào dầu mỡ cơ khí, sợ đo đạc mạch điện',
      'Chỉ thích ngồi một chỗ viết code thuần túy mà ghét phần cứng vật lý'
    ],
    skills: {
      hardSkills: [
        'Thiết kế mô hình 3D cơ khí (SolidWorks, AutoCAD, Inventor)',
        'Lập trình vi điều khiển & Hệ thống nhúng (C/C++, ROS - Robot Operating System)',
        'Lập trình điều khiển PLC công nghiệp (Siemens, Mitsubishi)',
        'Thiết kế mạch in PCB (Altium Designer)'
      ],
      softSkills: [
        'Làm việc nhóm liên ngành (Cơ khí - Điện tử - Phần mềm)',
        'Tư duy giải quyết sự cố kỹ thuật theo phương pháp 5 Whys',
        'Kỹ năng đọc hiểu tài liệu datasheet linh kiện tiếng Anh'
      ],
      toolsAndSoftware: [
        'SolidWorks & AutoCAD Mechanical',
        'MATLAB / Simulink',
        'TIA Portal (Siemens PLC)',
        'Altium Designer & Proteus'
      ],
      futureSkills2026: [
        'Thị giác máy tính ứng dụng trong Robot công nghiệp (Computer Vision)',
        'Digital Twin & Nhà máy thông minh kết nối vạn vật công nghiệp (IIoT)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Vật lý (Kiến thức cốt lõi về cơ và điện)', 'Toán học (Đại số & Giải tích)', 'Tiếng Anh kỹ thuật'],
      coreUniversitySubjects: [
        'Cơ học máy & Chi tiết máy',
        'Điện tử tương tự và kỹ thuật số',
        'Lý thuyết điều khiển tự động',
        'Kỹ thuật robot và điều khiển chuyển động'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Nguyên lý hoạt động của động cơ bước, servo, cảm biến tiệm cận và khí nén',
        'Toán học điều khiển cánh tay robot đa bậc tự do (Kinematics & Dynamics)',
        'Hệ thống mạng truyền thông công nghiệp (Modbus, Profinet, CAN)'
      ],
      practicalSkills: [
        'Gia công chế tạo chi tiết cơ khí trên máy phay CNC và in 3D',
        'Lắp ráp tủ điện điều khiển và lập trình tự động hóa chu trình đóng gói',
        'Lập trình điều khiển xe tự hành AGV trong kho thông minh'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Kỹ sư lập trình PLC & Tự động hóa nhà máy',
        'Kỹ sư thiết kế cơ khí 3D thiết bị tự động',
        'Kỹ sư bảo trì và vận hành robot công nghiệp',
        'Kỹ sư phần cứng hệ thống nhúng (Embedded Engineer)'
      ],
      longTermRoles: [
        'Trưởng phòng Kỹ thuật / Giám đốc Tự động hóa (Automation Director)',
        'Kiến trúc sư hệ thống nhà máy thông minh (Smart Factory Architect)',
        'Chủ doanh nghiệp cung cấp giải pháp máy tự động & Robot'
      ]
    },
    salaryBands: {
      freshGrad: '12 – 20 triệu VNĐ/tháng',
      experienced: '25 – 45 triệu VNĐ/tháng',
      management: '50 – 90 triệu VNĐ/tháng'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Bách khoa Hà Nội (HUST)',
        code: 'BKA',
        location: 'Hà Nội',
        cutoff2024: 27.50,
        targetBlock: 'A00, A01',
        tuitionPerYear: '28 – 35 triệu/năm',
        strengths: 'Thương hiệu kỹ thuật số 1 Việt Nam, xưởng thực hành hiện đại, liên kết Intel, Samsung.'
      },
      {
        region: 'Nam',
        name: 'Đại học Bách khoa - ĐHQG TP.HCM (HCMUT)',
        code: 'QSB',
        location: 'TP.HCM',
        cutoff2024: 26.80,
        targetBlock: 'A00, A01',
        tuitionPerYear: '30 – 38 triệu/năm',
        strengths: 'Chương trình kiểm định ABET Hoa Kỳ, tỷ lệ sinh viên có việc làm trước tốt nghiệp gần 100%.'
      },
      {
        region: 'Nam',
        name: 'Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)',
        code: 'SPK',
        location: 'TP.HCM',
        cutoff2024: 25.90,
        targetBlock: 'A00, A01',
        tuitionPerYear: '26 – 32 triệu/năm',
        strengths: 'Nổi tiếng cả nước về đào tạo thực chiến tay nghề cơ điện tử và robocon.'
      },
      {
        region: 'Trung',
        name: 'Đại học Bách khoa - Đại học Đà Nẵng (DUT)',
        code: 'DDK',
        location: 'Đà Nẵng',
        cutoff2024: 24.50,
        targetBlock: 'A00, A01',
        tuitionPerYear: '22 – 28 triệu/năm',
        strengths: 'Trung tâm đào tạo kỹ sư tự động hóa lớn nhất miền Trung.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Tích hợp Cơ khí chính xác, Vi mạch điện tử và Lập trình điều khiển tự động.',
      aiImpact: 'TÍCH CỰC CỰC KỲ CAO: AI giúp robot học cách nhận diện vật thể và tự động tối ưu đường đi.',
      englishRole: 'CAO: Tài liệu kỹ thuật, tiêu chuẩn IEC và phần mềm điều khiển đều bằng tiếng Anh.',
      freelancePotential: 'Trung bình: Thường cần phòng lab và thiết bị phần cứng để kiểm thử.',
      agencyOrBusiness: 'Rất cao: Việt Nam đang chuyển dịch sản xuất, nhu cầu chế tạo máy tự động theo yêu cầu rất lớn.',
      creativeFreedom: 'Cao: Sáng chế ra các giải pháp cơ điện thông minh thay thế sức người.',
      marketDemand2025_2030: 'Rất cao: Làn sóng dịch chuyển chuỗi cung ứng vi mạch và công nghiệp điện tử vào Việt Nam.',
      stability: 'Rất cao: Bất kỳ nhà máy hiện đại nào cũng cần kỹ sư bảo trì và tự động hóa.',
      pressureLevel: 'Áp lực tiến độ dây chuyền sản xuất; sự cố dừng máy tính bằng nghìn USD/giờ.',
      personalityFit: 'Thực tế, logic, kiên trì, đam mê công nghệ, khéo tay, cẩn thận.'
    },
    biasDebunking: {
      myth: '"Học cơ điện tử là làm thợ sửa điện hoặc công nhân đứng máy xưởng."',
      reality: 'Kỹ sư Cơ điện tử là người lập trình đầu não, thiết kế hệ thống và làm chủ dây chuyền robot tự động trị giá hàng triệu USD.',
      emotionalTrap: 'Thấy robot hào nhoáng nhưng nản lòng khi phải học lượng lớn kiến thức tích hợp cả Cơ - Điện - Lập trình.'
    },
    roadmap: {
      grade12Prep: 'Luyện chắc Toán, Lý; Học lập trình C căn bản hoặc thử nghiệm board Arduino.',
      year1_2: 'Làm chủ hình học họa hình, thiết kế 3D SolidWorks và kỹ thuật vi xử lý.',
      year3_4: 'Tham gia nghiên cứu lab, dự án chế tạo robot thực tế, thực tập tại các nhà máy FDI.',
      postGrad: 'Đi sâu vào AI Robotics, ROS2 hoặc kỹ thuật điều khiển tự hành nâng cao.'
    }
  },

  // ==========================================
  // 3. KẾ TOÁN - KIỂM TOÁN (ACCOUNTING & AUDITING)
  // ==========================================
  {
    id: 'ke-toan-kiem-toan',
    code: '7340301',
    name: 'Kế toán - Kiểm toán & Phân tích tài chính (Accounting & Auditing)',
    tagline: 'Ngôn ngữ của kinh doanh, bảo vệ tính minh bạch tài chính của mọi tổ chức',
    sector: 'Tài chính & Ngân hàng',
    category: 'Tài chính & Ngân hàng',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['C', 'E', 'I'],
    riasecScore: { R: 20, I: 75, A: 20, S: 40, E: 80, C: 95 },
    summary: 'Chuyên ngành nghiên cứu việc ghi nhận, phân loại, tổng hợp và thẩm định tính trung thực, hợp pháp của các báo cáo tài chính doanh nghiệp, tuân thủ chuẩn mực kế toán VAS/IFRS và pháp luật thuế.',
    personalityTraits: [
      'Cực kỳ cẩn trọng, tỉ mỉ, kiên nhẫn với các con số và văn bản pháp lý',
      'Đạo đức nghề nghiệp liêm chính, tôn trọng nguyên tắc bảo mật và sự thật',
      'Tư duy tổ chức dữ liệu ngăn nắp, có hệ thống và tính kỷ luật cao',
      'Chịu được áp lực cao vào các mùa quyết toán thuế và lập báo cáo tài chính cuối năm'
    ],
    suitableFor: [
      'Rất cẩn thận, không bao giờ để sót chi tiết nhỏ, thích sự rõ ràng sòng phẳng',
      'Thích làm việc với bảng tính Excel, hóa đơn, chứng từ và phân tích số liệu kinh doanh',
      'Mục tiêu chinh phục các chứng chỉ nghề nghiệp danh giá quốc tế (ACCA, CPA, CMA)'
    ],
    unsuitableFor: [
      'Tính cẩu thả, đãng trí, ghét việc phải ngồi kiểm tra đối chiếu từng con số',
      'Thích sự tự do bay bổng, không chịu được các quy tắc và chuẩn mực kế toán gò bó'
    ],
    skills: {
      hardSkills: [
        'Lập và phân tích Báo cáo tài chính (Bảng cân đối, Báo cáo kết quả kinh doanh, Lưu chuyển tiền tệ)',
        'Quyết toán thuế doanh nghiệp (Thuế TNDN, TNCN, GTGT, Thuế nhà thầu)',
        'Quy trình kiểm toán độc lập theo chuẩn mực kiểm toán Việt Nam & Quốc tế',
        'Chuyển đổi báo cáo tài chính sang chuẩn mực quốc tế IFRS'
      ],
      softSkills: [
        'Kỹ năng phỏng vấn thu thập bằng chứng kiểm toán',
        'Tư duy hoài nghi nghề nghiệp (Professional Skepticism)',
        'Kỹ năng quản lý thời gian cao điểm mùa bận (Busy Season)',
        'Giao tiếp giải thích số liệu tài chính cho lãnh đạo phi tài chính'
      ],
      toolsAndSoftware: [
        'Microsoft Excel nâng cao (VBA, Power Query, XLOOKUP)',
        'Phần mềm kế toán doanh nghiệp (MISA SME, FAST, SAP ERP)',
        'Phần mềm phân tích dữ liệu kiểm toán (IDEA, ACL)'
      ],
      futureSkills2026: [
        'Ứng dụng tự động hóa quy trình kế toán (RPA - Robotic Process Automation)',
        'Kiểm toán dữ liệu lớn và an toàn thông tin tài chính số'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Toán học (Logic số liệu chính xác)', 'Tiếng Anh (Tiếp cận chuẩn mực quốc tế)', 'Giáo dục kinh tế & Pháp luật'],
      coreUniversitySubjects: [
        'Nguyên lý kế toán & Kế toán tài chính doanh nghiệp',
        'Kế toán quản trị & Dự toán ngân sách',
        'Kiểm toán căn bản & Kiểm toán tài chính',
        'Thuế và kế hoạch thuế doanh nghiệp'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Nguyên tắc ghi sổ kép (Nợ/Có), hạch toán doanh thu, chi phí và tài sản',
        'Quy chế pháp lý về kế toán, luật doanh nghiệp và chuẩn mực đạo đức',
        'Phương pháp phát hiện gian lận và sai sót trọng yếu trên báo cáo tài chính'
      ],
      practicalSkills: [
        'Thực hành kê khai thuế qua mạng trên phần mềm HTKK của Tổng cục Thuế',
        'Soát xét chứng từ hóa đơn điện tử thực tế của doanh nghiệp',
        'Thực hiện thủ tục kiểm kê kho hàng và gửi thư xác nhận công nợ ngân hàng'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Trợ lý kiểm toán viên tại các hãng kiểm toán Big 4 (PwC, Deloitte, EY, KPMG) hoặc Non-Big',
        'Kế toán viên thanh toán / Kế toán kho / Kế toán thuế tại doanh nghiệp',
        'Chuyên viên đối soát dữ liệu tài chính tại các ngân hàng thương mại'
      ],
      longTermRoles: [
        'Kế toán trưởng (Chief Accountant)',
        'Giám đốc tài chính (CFO)',
        'Chủ nhiệm kiểm toán (Audit Partner) tại công ty kiểm toán quốc tế'
      ]
    },
    salaryBands: {
      freshGrad: '9 – 16 triệu VNĐ/tháng',
      experienced: '20 – 40 triệu VNĐ/tháng (Big 4 Senior)',
      management: '50 – 100+ triệu VNĐ/tháng (CFO/Partner)'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Kinh tế Quốc dân (NEU)',
        code: 'KHA',
        location: 'Hà Nội',
        cutoff2024: 27.20,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '22 – 28 triệu/năm',
        strengths: 'Khoa Kế toán lâu đời nhất Việt Nam, chương trình tích hợp chứng chỉ quốc tế ICAEW/ACCA.'
      },
      {
        region: 'Bắc',
        name: 'Học viện Tài chính (AOF)',
        code: 'HTC',
        location: 'Hà Nội',
        cutoff2024: 26.50,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '20 – 25 triệu/năm',
        strengths: 'Thương hiệu hàng đầu về đào tạo kế toán - kiểm toán và tài chính công.'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        code: 'KSA',
        location: 'TP.HCM',
        cutoff2024: 26.90,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '28 – 34 triệu/năm',
        strengths: 'Tỷ lệ sinh viên vào Big 4 và các tập đoàn đa quốc gia cao nhất miền Nam.'
      },
      {
        region: 'Trung',
        name: 'Đại học Kinh tế - Đại học Đà Nẵng (DUE)',
        code: 'DDQ',
        location: 'Đà Nẵng',
        cutoff2024: 24.80,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '20 – 26 triệu/năm',
        strengths: 'Chất lượng đào tạo uy tín số 1 khu vực miền Trung - Tây Nguyên.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Minh bạch hóa dòng tiền, hạch toán doanh thu chi phí và thẩm định báo cáo tài chính.',
      aiImpact: 'CAO: AI nhập liệu hóa đơn tự động, nhưng phán đoán nghề nghiệp và tư vấn thuế chiến lược vẫn do con người.',
      englishRole: 'CAO: Đặc biệt bắt buộc nếu muốn làm việc tại các hãng kiểm toán quốc tế Big 4.',
      freelancePotential: 'Rất cao: Làm dịch vụ báo cáo thuế, kế toán dịch vụ cho hàng trăm doanh nghiệp vừa và nhỏ.',
      agencyOrBusiness: 'Cao: Mở công ty đại lý thuế hoặc công ty dịch vụ kế toán kiểm toán.',
      creativeFreedom: 'Thấp: Phải tuân thủ tuyệt đối theo chuẩn mực kế toán và các thông tư của Bộ Tài chính.',
      marketDemand2025_2030: 'Ổn định rất cao: Bất kỳ công ty nào được thành lập đều bắt buộc phải có kế toán.',
      stability: 'Cực kỳ cao: Nghề có độ bền vững và tuổi thọ nghề nghiệp dài bậc nhất xã hội.',
      pressureLevel: 'Áp lực cực lớn vào các tháng 1, 2, 3 (mùa nộp báo cáo tài chính và quyết toán thuế năm).',
      personalityFit: 'Tỉ mỉ, cẩn thận, trung thực, kỷ luật, yêu thích con số, chịu khó.'
    },
    biasDebunking: {
      myth: '"Nghề kế toán sắp biến mất vì phần mềm và AI tự làm hết rồi."',
      reality: 'AI chỉ thay thế khâu nhập liệu cơ học. Các vị trí phân tích số liệu, tối ưu chi phí thuế, kiểm soát rủi ro gian lận và tư vấn tài chính cho ban giám đốc ngày càng khan hiếm người giỏi.',
      emotionalTrap: 'Chỉ học thuộc vẹt các định khoản Nợ/Có mà không rèn luyện tư duy phân tích bản chất kinh doanh.'
    },
    roadmap: {
      grade12Prep: 'Rèn tính cẩn thận, học tốt môn Toán và đầu tư mạnh cho tiếng Anh giao tiếp.',
      year1_2: 'Nắm vững nguyên lý kế toán, làm chủ Excel và bắt đầu học các môn nền tảng của ACCA/CMA.',
      year3_4: 'Ứng tuyển các chương trình Internship tại Big 4 hoặc công ty kiểm toán uy tín; ôn thi lấy chứng chỉ.',
      postGrad: 'Tích lũy đủ số năm kinh nghiệm để thi chứng chỉ Kiểm toán viên quốc gia (CPA Việt Nam).'
    }
  },

  // ==========================================
  // 4. AN TOÀN THÔNG TIN & AN NINH MẠNG (CYBERSECURITY)
  // ==========================================
  {
    id: 'an-toan-thong-tin',
    code: '7480202',
    name: 'An toàn thông tin & An ninh mạng (Cybersecurity)',
    tagline: 'Lá chắn số bảo vệ hạ tầng công nghệ, tài chính và bí mật quốc gia',
    sector: 'Công nghệ thông tin & AI',
    category: 'Công nghệ thông tin & AI',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['I', 'R', 'C'],
    riasecScore: { R: 85, I: 95, A: 25, S: 25, E: 55, C: 85 },
    summary: 'Chuyên ngành nghiên cứu các phương pháp bảo vệ hệ thống mạng máy tính, máy chủ, ứng dụng đám mây và dữ liệu số trước các cuộc tấn công mạng, mã độc tống tiền (Ransomware), gián điệp mạng và rò rỉ dữ liệu bí mật.',
    personalityTraits: [
      'Tư duy phòng thủ phản gián nhạy bén, luôn hoài nghi và tìm lỗ hổng bảo mật',
      'Đam mê khám phá cách thức vận hành sâu bên dưới của hệ điều hành và mạng máy tính',
      'Đạo đức số chính trực tuyệt đối (White Hat Hacker - Hacker Mũ Trắng)',
      'Khả năng tập trung cao độ, kiên nhẫn phân tích hàng triệu dòng nhật ký hệ thống (Logs)'
    ],
    suitableFor: [
      'Thích tìm hiểu cách hacker thâm nhập hệ thống và cách thức ngăn chặn',
      'Thích tham gia các cuộc thi bảo mật Capture The Flag (CTF)',
      'Muốn làm việc trong các ngân hàng, trung tâm an ninh mạng quốc gia, tập đoàn viễn thông'
    ],
    unsuitableFor: [
      'Thiếu bản lĩnh đạo đức, dễ bị cám dỗ vào các hành vi tấn công phá hoại phi pháp',
      'Lười cập nhật công nghệ mới (các biến thể virus và lỗ hổng Zero-day xuất hiện từng ngày)'
    ],
    skills: {
      hardSkills: [
        'Kiểm thử thâm nhập hệ thống (Penetration Testing / Ethical Hacking)',
        'Phân tích mã độc (Malware Analysis) & Dò tìm nguồn gốc tấn công số (Digital Forensics)',
        'Quản trị trung tâm điều hành an ninh mạng (SOC - Security Operations Center)',
        'Mã hóa dữ liệu & Bảo mật kiến trúc đám mây (Cloud Security AWS/Azure)'
      ],
      softSkills: [
        'Ứng phó sự cố khẩn cấp (Incident Response) dưới áp lực cao',
        'Tư duy phản biện và phán đoán động cơ của tin tặc',
        'Kỹ năng viết báo cáo kiểm định an ninh cho cấp lãnh đạo'
      ],
      toolsAndSoftware: [
        'Kali Linux, Wireshark, Burp Suite Pro, Metasploit',
        'Hệ thống giám sát SIEM (Splunk, IBM QRadar)',
        'Phần mềm dịch ngược mã (IDA Pro, Ghidra)'
      ],
      futureSkills2026: [
        'Bảo mật các mô hình Trí tuệ nhân tạo (Securing AI/LLM Systems)',
        'Mô hình bảo mật không tin cậy (Zero Trust Architecture)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Tin học (Lập trình căn bản)', 'Toán học (Lý thuyết số & Giải tích)', 'Tiếng Anh chuyên ngành'],
      coreUniversitySubjects: [
        'Mạng máy tính & Giao thức truyền thông nâng cao',
        'Hệ điều hành mã nguồn mở Linux',
        'Mật mã học cơ sở & Ứng dụng',
        'Kỹ thuật dịch ngược & An toàn mạng ứng dụng'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Cơ chế mã hóa đối xứng và bất đối xứng (AES, RSA, ECC, Blockchain)',
        'Cơ chế hoạt động của các lỗ hổng web kinh điển (OWASP Top 10)',
        'Quy định pháp lý về Luật An ninh mạng Việt Nam và tiêu chuẩn ISO 27001'
      ],
      practicalSkills: [
        'Tấn công giả lập vào các máy chủ ảo hóa để tìm lỗ hổng bảo mật',
        'Bóc tách mã độc trong môi trường cô lập Sandbox',
        'Cấu hình tường lửa thế hệ mới (Next-Gen Firewall) và phòng chống tấn công DDoS'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Chuyên viên phân tích giám sát an ninh mạng (SOC Analyst Tier 1/2)',
        'Chuyên viên kiểm thử xâm nhập (Penetration Tester / Junior Pentester)',
        'Kỹ sư an toàn mạng và hệ thống (Network Security Engineer)'
      ],
      longTermRoles: [
        'Giám đốc An toàn thông tin (CISO - Chief Information Security Officer)',
        'Chuyên gia ứng cứu sự cố không gian mạng cấp quốc gia',
        'Chuyên gia săn tiền thưởng bảo mật độc lập (Top Bug Bounty Hunter)'
      ]
    },
    salaryBands: {
      freshGrad: '14 – 24 triệu VNĐ/tháng',
      experienced: '30 – 60 triệu VNĐ/tháng (Chứng chỉ OSCP/CISSP)',
      management: '70 – 150+ triệu VNĐ/tháng'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Học viện Kỹ thuật Mật mã (ACT)',
        code: 'KMA',
        location: 'Hà Nội',
        cutoff2024: 26.20,
        targetBlock: 'A00, A01',
        tuitionPerYear: '18 – 24 triệu/năm',
        strengths: 'Đơn vị chuyên sâu số 1 quốc gia về mật mã học và bảo mật thông tin bí mật nhà nước.'
      },
      {
        region: 'Bắc',
        name: 'Đại học Bách khoa Hà Nội (HUST)',
        code: 'BKA',
        location: 'Hà Nội',
        cutoff2024: 27.65,
        targetBlock: 'A00, A01',
        tuitionPerYear: '28 – 35 triệu/năm',
        strengths: 'Đào tạo kỹ sư an toàn thông tin chuyên môn sâu, đội ngũ sinh viên liên tục vô địch CTF quốc tế.'
      },
      {
        region: 'Nam',
        name: 'Đại học Công nghệ Thông tin - ĐHQG TP.HCM (UIT)',
        code: 'QSC',
        location: 'TP.HCM',
        cutoff2024: 27.10,
        targetBlock: 'A00, A01',
        tuitionPerYear: '32 – 40 triệu/năm',
        strengths: 'Phòng Lab an toàn thông tin hiện đại, kết nối thực tập chặt chẽ với các ngân hàng lớn.'
      },
      {
        region: 'Trung',
        name: 'Học viện Công nghệ Bưu chính Viễn thông (Cơ sở TP.HCM & Hà Nội)',
        code: 'PTIT',
        location: 'Hà Nội & TP.HCM',
        cutoff2024: 26.00,
        targetBlock: 'A00, A01',
        tuitionPerYear: '24 – 30 triệu/năm',
        strengths: 'Rất mạnh về an ninh mạng viễn thông và bảo mật ứng dụng.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Bảo vệ hạ tầng số, săn lỗ hổng bảo mật và phòng thủ chống xâm nhập mạng trái phép.',
      aiImpact: 'HAI CHIỀU: AI tạo ra các cuộc tấn công mạng tinh vi hơn, đòi hỏi chuyên gia an ninh mạng phải có trình độ cao hơn.',
      englishRole: 'BẮT BUỘC: Toàn bộ thông báo lỗ hổng CVE, tài liệu công cụ và chứng chỉ đều bằng tiếng Anh.',
      freelancePotential: 'Rất cao: Săn lỗi nhận thưởng (Bug Bounty) từ các tập đoàn công nghệ toàn cầu (Google, Apple, Meta).',
      agencyOrBusiness: 'Cao: Mở công ty tư vấn an toàn thông tin, dịch vụ đánh giá bảo mật (PenTest as a Service).',
      creativeFreedom: 'Cao: Tư duy tấn công và phòng thủ giống như một ván cờ chiến lược không ngừng nghỉ.',
      marketDemand2025_2030: 'Cực kỳ khan hiếm: Chiến tranh không gian mạng và chuyển đổi số khiến nhân sự an ninh mạng đắt giá nhất thị trường IT.',
      stability: 'Rất cao: Rủi ro rò rỉ dữ liệu là mối đe dọa sống còn của các ngân hàng và tập đoàn.',
      pressureLevel: 'Áp lực đột xuất: Có thể bị gọi dậy lúc nửa đêm nếu hệ thống phát hiện có đợt tấn công từ nước ngoài.',
      personalityFit: 'Cẩn mật, tư duy logic phản biện, kiên trì, đam mê công nghệ ngầm, đạo đức thép.'
    },
    biasDebunking: {
      myth: '"Học an toàn thông tin là học làm hacker đi hack Facebook người khác hoặc phá hoại."',
      reality: 'Đó là tội phạm mạng. Kỹ sư an toàn thông tin là lực lượng phòng thủ chính danh, bảo vệ tài khoản ngân hàng và thông tin cá nhân của hàng triệu người dân.',
      emotionalTrap: 'Chỉ thích dùng các công cụ có sẵn (Script Kiddie) mà lười học sâu về nguyên lý mạng và hệ điều hành.'
    },
    roadmap: {
      grade12Prep: 'Luyện chắc môn Toán, tự học cài đặt và sử dụng Linux, tìm hiểu mô hình mạng OSI.',
      year1_2: 'Thành thạo lập trình Python, C/C++, cấu trúc mạng máy tính và tham gia giải các bài CTF dễ.',
      year3_4: 'Luyện thi chứng chỉ quốc tế nền tảng (CompTIA Security+, CEH, sau đó là OSCP); đi thực tập SOC.',
      postGrad: 'Đi sâu vào bảo mật ứng dụng đám mây (Cloud Security) hoặc quản trị rủi ro an ninh cấp cao.'
    }
  },

  // ==========================================
  // 5. KIẾN TRÚC & NỘI THẤT (ARCHITECTURE)
  // ==========================================
  {
    id: 'kien-truc-noi-that',
    code: '7580101',
    name: 'Kiến trúc công trình & Thiết kế không gian (Architecture)',
    tagline: 'Sự giao thoa diệu kỳ giữa nghệ thuật thị giác và khoa học kỹ thuật xây dựng',
    sector: 'Thiết kế & Nghệ thuật số',
    category: 'Kiến trúc & Xây dựng',
    admissionBlocks: ['V00', 'H00', 'A01', 'D01'],
    riasecPrimary: ['A', 'R', 'I'],
    riasecScore: { R: 80, I: 75, A: 95, S: 35, E: 65, C: 60 },
    summary: 'Chuyên ngành nghệ thuật và kỹ thuật thiết kế không gian sống, công trình nhà ở, tòa nhà cao tầng, khu nghỉ dưỡng và quy hoạch đô thị, đảm bảo tính thẩm mỹ, công năng sử dụng và độ an toàn kết cấu bền vững.',
    personalityTraits: [
      'Tư duy không gian 3 chiều và cảm nhận thẩm mỹ hình khối xuất sắc',
      'Đam mê sáng tạo, yêu thích cái đẹp, đam mê nghệ thuật và văn hóa',
      'Kiên nhẫn làm việc tỉ mỉ với từng bản vẽ và mô hình thu nhỏ',
      'Khả năng chịu đựng áp lực thức đêm chạy đồ án thiết kế'
    ],
    suitableFor: [
      'Có năng khiếu vẽ mỹ thuật, thích phác thảo các tòa nhà, không gian nội thất',
      'Thích ngắm nhìn các công trình kiến trúc nổi tiếng, tò mò về kết cấu xây dựng',
      'Muốn để lại dấu ấn cá nhân qua các công trình thế kỷ ngoài đời thực'
    ],
    unsuitableFor: [
      'Không có cảm giác về không gian và tỷ lệ thị giác',
      'Thiếu tính kiên trì, nản lòng khi phải sửa bản vẽ theo ý khách hàng nhiều lần'
    ],
    skills: {
      hardSkills: [
        'Kỹ thuật phác thảo tay mỹ thuật (Freehand Sketching)',
        'Mô hình hóa thông tin công trình (BIM - Revit Architecture)',
        'Dựng hình và diễn họa 3D kiến trúc (AutoCAD, 3ds Max, SketchUp, Lumion, Enscape)',
        'Hiểu biết sâu sắc về kết cấu xây dựng và vật liệu mới'
      ],
      softSkills: [
        'Kỹ năng bảo vệ đồ án và thuyết phục chủ đầu tư (Design Pitching)',
        'Quản lý tiến độ thi công công trường',
        'Tư duy thẩm mỹ thích ứng với ngân sách thực tế'
      ],
      toolsAndSoftware: [
        'Autodesk Revit & AutoCAD',
        'SketchUp & 3ds Max',
        'Lumion, Enscape, Corona Renderer',
        'Adobe Photoshop (Hậu kỳ phối cảnh)'
      ],
      futureSkills2026: [
        'Ứng dụng AI tạo sinh trong dựng ý tưởng không gian (Midjourney Architecture)',
        'Kiến trúc xanh tiết kiệm năng lượng và giảm phát thải carbon (Net-Zero Buildings)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Vẽ mỹ thuật (Môn năng khiếu)', 'Toán học (Tư duy hình học không gian)', 'Vật lý (Kiến thức cơ học công trình)'],
      coreUniversitySubjects: [
        'Hình họa & Vẽ kỹ thuật kiến trúc',
        'Lịch sử kiến trúc thế giới và Việt Nam',
        'Nguyên lý thiết kế công trình dân dụng và công nghiệp',
        'Đồ án thiết kế kiến trúc các cấp độ'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Nhân trắc học (Ergonomics) và tiêu chuẩn kích thước không gian sống',
        'Quy chuẩn phòng cháy chữa cháy, chiếu sáng tự nhiên và thông gió công trình',
        'Nguyên lý lựa chọn vật liệu hoàn thiện (Kính, đá, bê tông, gỗ công nghiệp)'
      ],
      practicalSkills: [
        'Làm mô hình thu nhỏ bằng bìa format, gỗ balsa và máy cắt laser',
        'Đi thực địa công trường xây dựng để đối chiếu bản vẽ với thực tế',
        'Triển khai hồ sơ bản vẽ kỹ thuật thi công hoàn chỉnh (Shop Drawing)'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Kiến trúc sư thiết kế ý tưởng (Concept Architect)',
        'Chuyên viên triển khai bản vẽ kỹ thuật 2D/3D (Technical Drafter)',
        'Chuyên viên diễn họa phối cảnh 3D (3D Architectural Visualizer)',
        'Nhà thiết kế nội thất căn hộ & Không gian thương mại'
      ],
      longTermRoles: [
        'Kiến trúc sư chủ trì (Lead Architect)',
        'Giám đốc Thiết kế (Design Director) công ty tư vấn kiến trúc',
        'Chủ công ty tư vấn thiết kế và thi công nội thất riêng'
      ]
    },
    salaryBands: {
      freshGrad: '10 – 18 triệu VNĐ/tháng',
      experienced: '25 – 50 triệu VNĐ/tháng (Kèm % hoa hồng công trình)',
      management: '60 – 120+ triệu VNĐ/tháng'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Kiến trúc Hà Nội (HAU)',
        code: 'KTA',
        location: 'Hà Nội',
        cutoff2024: 25.50,
        targetBlock: 'V00, H00',
        tuitionPerYear: '20 – 26 triệu/năm',
        strengths: 'Cái nôi đào tạo kiến trúc sư hàng đầu miền Bắc, bề dày lịch sử và mạng lưới cựu sinh viên lớn.'
      },
      {
        region: 'Bắc',
        name: 'Đại học Xây dựng Hà Nội (HUCE)',
        code: 'XDA',
        location: 'Hà Nội',
        cutoff2024: 24.80,
        targetBlock: 'V00, A01',
        tuitionPerYear: '18 – 24 triệu/năm',
        strengths: 'Rất mạnh về tính thực tế kết cấu kỹ thuật công trình.'
      },
      {
        region: 'Nam',
        name: 'Đại học Kiến trúc TP.HCM (UAH)',
        code: 'KTS',
        location: 'TP.HCM',
        cutoff2024: 26.15,
        targetBlock: 'V00, V01, H01',
        tuitionPerYear: '24 – 32 triệu/năm',
        strengths: 'Trung tâm sáng tạo kiến trúc năng động nhất phương Nam, sinh viên đạt nhiều giải thưởng quốc tế.'
      },
      {
        region: 'Trung',
        name: 'Đại học Bách khoa - Đại học Đà Nẵng (DUT)',
        code: 'DDK',
        location: 'Đà Nẵng',
        cutoff2024: 23.50,
        targetBlock: 'V00, V01',
        tuitionPerYear: '20 – 25 triệu/năm',
        strengths: 'Đào tạo kiến trúc sư uy tín hàng đầu cho dải đất miền Trung.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Kiến tạo không gian sống, hòa trộn mỹ thuật thẩm mỹ với kỹ thuật kết cấu công trình.',
      aiImpact: 'TRUNG BÌNH: AI hỗ trợ tạo ý tưởng phối cảnh cực nhanh, nhưng bản vẽ kỹ thuật chi tiết và sự thấu hiểu văn hóa gia chủ vẫn do con người.',
      englishRole: 'CAO: Cần thiết để tham gia các dự án với các tập đoàn thiết kế nước ngoài.',
      freelancePotential: 'Rất cao: Nhận thiết kế nhà phố, quán cafe, biệt thự và căn hộ độc lập ngoài giờ.',
      agencyOrBusiness: 'Rất cao: Phần lớn kiến trúc sư có năng lực sau 5 năm đều mở văn phòng thiết kế riêng.',
      creativeFreedom: 'Cực kỳ cao: Tự do thể hiện cá tính nghệ thuật qua từng đường nét công trình.',
      marketDemand2025_2030: 'Cao: Tốc độ đô thị hóa và nhu cầu cải tạo không gian sống tiện nghi ngày càng tăng.',
      stability: 'Khá cao, gắn liền với chu kỳ phát triển của thị trường bất động sản.',
      pressureLevel: 'Áp lực thức đêm chạy đồ án và áp lực sửa bản vẽ theo yêu cầu khắt khe của khách hàng.',
      personalityFit: 'Sáng tạo, nhạy cảm thẩm mỹ, kiên trì, đam mê không gian, chịu khó học hỏi.'
    },
    biasDebunking: {
      myth: '"Học kiến trúc chỉ cần vẽ đẹp là thành công."',
      reality: 'Vẽ chỉ là công cụ biểu đạt. Kiến trúc sư thành công cần kiến thức vững về kết cấu chịu lực, vật liệu, luật xây dựng và đặc biệt là kỹ năng thuyết phục khách hàng.',
      emotionalTrap: 'Thần tượng hóa kiến trúc như nghệ thuật thuần túy mà quên mất ràng buộc về ngân sách tài chính của chủ nhà.'
    },
    roadmap: {
      grade12Prep: 'Luyện thi môn Vẽ mỹ thuật (V00) tại các lớp vẽ chuyên sâu; rèn tư duy hình học không gian.',
      year1_2: 'Làm chủ các công cụ đồ họa 2D/3D (CAD, SketchUp), tích lũy kiến thức lịch sử kiến trúc.',
      year3_4: 'Thực chiến đồ án công trình công cộng; đi làm bán thời gian tại các văn phòng kiến trúc để cọ xát bản vẽ thực tế.',
      postGrad: 'Tích lũy 3 năm hành nghề để thi sát hạch Chứng chỉ hành nghề kiến trúc sư quốc gia.'
    }
  },

  // ==========================================
  // 6. CÔNG NGHỆ SINH HỌC & Y SINH (BIOTECHNOLOGY)
  // ==========================================
  {
    id: 'cong-nghe-sinh-hoc',
    code: '7420201',
    name: 'Công nghệ Sinh học & Y sinh học (Biotechnology)',
    tagline: 'Mở khóa bí ẩn của sự sống, điều chế vắc-xin và nông nghiệp công nghệ cao',
    sector: 'Y Dược & Sức khỏe',
    category: 'Y Dược & Sức khỏe',
    admissionBlocks: ['B00', 'A00', 'D07'],
    riasecPrimary: ['I', 'R', 'S'],
    riasecScore: { R: 85, I: 95, A: 25, S: 60, E: 45, C: 75 },
    summary: 'Chuyên ngành nghiên cứu ứng dụng công nghệ trên các hệ thống sinh vật sống, tế bào, ADN và protein để tạo ra các sản phẩm y dược (vắc-xin, thuốc sinh học), giống cây trồng kháng biến đổi khí hậu và chế phẩm sinh học bảo vệ môi trường.',
    personalityTraits: [
      'Đam mê khoa học tự nhiên, tò mò về thế giới vi mô, tế bào và di truyền',
      'Tính kiên nhẫn cực cao, chịu khó làm việc tỉ mỉ trong phòng thí nghiệm (Lab)',
      'Tư duy logic thực nghiệm, tôn trọng số liệu khoa học chính xác',
      'Đạo đức sinh học (Bioethics) chuẩn mực, tôn trọng sự sống'
    ],
    suitableFor: [
      'Học rất giỏi môn Sinh học và Hóa học, thích làm việc với kính hiển vi',
      'Thích nghiên cứu về liệu pháp gen, nuôi cấy mô tế bào, công nghệ lên men',
      'Muốn làm việc trong các viện nghiên cứu, công ty dược phẩm sinh học, phòng kiểm nghiệm chất lượng'
    ],
    unsuitableFor: [
      'Nóng vội muốn thấy kết quả ngay lập tức (thí nghiệm sinh học có thể mất vài tháng)',
      'Sợ mùi hóa chất, ngại tuân thủ các quy tắc an toàn sinh học vô trùng nghiêm ngặt'
    ],
    skills: {
      hardSkills: [
        'Kỹ thuật sinh học phân tử (Tách chiết ADN, phản ứng PCR, điện di gel)',
        'Nuôi cấy mô và tế bào thực vật / động vật trong môi trường vô trùng',
        'Vận hành hệ thống lên men sinh học quy mô phòng thí nghiệm và công nghiệp',
        'Phân tích vi sinh và kiểm soát chất lượng thực phẩm / dược phẩm (QC/QA)'
      ],
      softSkills: [
        'Ghi chép nhật ký thí nghiệm chuẩn mực khoa học (Lab Notebook)',
        'Tư duy giải thích số liệu bất thường trong thực nghiệm',
        'Kỹ năng viết báo cáo khoa học bằng tiếng Anh'
      ],
      toolsAndSoftware: [
        'Máy PCR thời gian thực (Real-time PCR), Máy ly tâm lạnh',
        'Kính hiển vi huỳnh quang & Máy quang phổ hấp thụ UV-Vis',
        'Phần mềm phân tích dữ liệu sinh tin học (Bioinformatics - BLAST, PyMOL)'
      ],
      futureSkills2026: [
        'Công nghệ chỉnh sửa bộ gen CRISPR-Cas9',
        'Sinh học tổng hợp (Synthetic Biology) và Ứng dụng AI trong dự đoán cấu trúc protein'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Sinh học (Bản chất sự sống)', 'Hóa học (Cơ chế chuyển hóa chất)', 'Tiếng Anh nghiên cứu'],
      coreUniversitySubjects: [
        'Hóa sinh học & Sinh học tế bào',
        'Di truyền học phân tử & Kỹ thuật di truyền',
        'Vi sinh vật học ứng dụng',
        'Kỹ thuật nuôi cấy mô và công nghệ enzyme'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Cấu trúc và chức năng của axit nucleic (ADN, ARN) và protein',
        'Cơ chế di truyền đột biến và công nghệ tái tổ hợp ADN',
        'Quy trình sản xuất các chất có hoạt tính sinh học từ vi sinh vật'
      ],
      practicalSkills: [
        'Thao tác chuẩn xác với pipet tự động vi thể (Micropipette)',
        'Nuôi cấy nhân giống phong lan và cây giống sạch bệnh bằng mô tế bào',
        'Phát hiện vi khuẩn gây bệnh trong mẫu thực phẩm bằng kỹ thuật Elisa'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Kỹ thuật viên phòng thí nghiệm vi sinh / sinh học phân tử',
        'Chuyên viên kiểm tra chất lượng (QC/QA) tại các nhà máy bia, sữa, thực phẩm',
        'Kỹ thuật viên tại các trung tâm xét nghiệm y khoa và di truyền học',
        'Nghiên cứu viên tại các viện nông nghiệp công nghệ cao'
      ],
      longTermRoles: [
        'Trưởng phòng R&D (Nghiên cứu & Phát triển sản phẩm) tập đoàn dược phẩm',
        'Chuyên gia Sinh tin học (Bioinformatician) phân tích dữ liệu bộ gen',
        'Giám đốc nhà máy sản xuất vắc-xin và chế phẩm sinh học'
      ]
    },
    salaryBands: {
      freshGrad: '10 – 17 triệu VNĐ/tháng',
      experienced: '22 – 40 triệu VNĐ/tháng',
      management: '50 – 90+ triệu VNĐ/tháng (Nhiều cơ hội học bổng Thạc sĩ/Tiến sĩ tại nước ngoài)'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Khoa học Tự nhiên - ĐHQG Hà Nội (HUS VNU)',
        code: 'QHT',
        location: 'Hà Nội',
        cutoff2024: 25.80,
        targetBlock: 'B00, A00, D07',
        tuitionPerYear: '16 – 22 triệu/năm',
        strengths: 'Đơn vị nghiên cứu sinh học cơ bản và ứng dụng danh giá nhất Việt Nam, nhiều học bổng quốc tế.'
      },
      {
        region: 'Bắc',
        name: 'Học viện Nông nghiệp Việt Nam (VNUA)',
        code: 'HVN',
        location: 'Hà Nội',
        cutoff2024: 23.00,
        targetBlock: 'B00, A00',
        tuitionPerYear: '16 – 20 triệu/năm',
        strengths: 'Rất mạnh về công nghệ sinh học nông nghiệp, cây trồng và vi sinh.'
      },
      {
        region: 'Nam',
        name: 'Đại học Khoa học Tự nhiên - ĐHQG TP.HCM (HCMUS)',
        code: 'QST',
        location: 'TP.HCM',
        cutoff2024: 26.20,
        targetBlock: 'B00, A00, D07',
        tuitionPerYear: '24 – 32 triệu/năm',
        strengths: 'Trung tâm đào tạo công nghệ sinh học và y sinh học hiện đại số 1 miền Nam.'
      },
      {
        region: 'Nam',
        name: 'Đại học Quốc tế - ĐHQG TP.HCM (IU VNU-HCM)',
        code: 'QSG',
        location: 'TP.HCM',
        cutoff2024: 24.50,
        targetBlock: 'B00, A00, D07',
        tuitionPerYear: '45 – 55 triệu/năm (Giảng dạy 100% tiếng Anh)',
        strengths: 'Chương trình chuẩn quốc tế, cơ hội chuyển tiếp đi Mỹ, Anh, Úc rất dễ dàng.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Ứng dụng vi sinh vật, tế bào và công nghệ gen vào sản xuất thuốc, thực phẩm và nông nghiệp.',
      aiImpact: 'RẤT TÍCH CỰC: AI đột phá trong mô phỏng gấp cuộn protein (AlphaFold), thúc đẩy tốc độ phát triển dược phẩm.',
      englishRole: 'BẮT BUỘC: Đa số tài liệu nghiên cứu và công trình khoa học đều viết bằng tiếng Anh.',
      freelancePotential: 'Thấp: Hoàn toàn phụ thuộc vào cơ sở hạ tầng phòng thí nghiệm và trang thiết bị hiện đại.',
      agencyOrBusiness: 'Cao: Mở trang trại nông nghiệp công nghệ cao, sản xuất nấm đông trùng hạ thảo, chế phẩm vi sinh.',
      creativeFreedom: 'Trung bình: Sáng tạo dựa trên các giả thuyết khoa học nghiêm ngặt.',
      marketDemand2025_2030: 'Rất cao: Định hướng chiến lược của chính phủ phát triển công nghệ sinh học thành ngành kinh tế kỹ thuật mũi nhọn.',
      stability: 'Cao: Nhu cầu về thuốc men, an toàn thực phẩm và giải pháp môi trường là bất biến.',
      pressureLevel: 'Áp lực rủi ro thí nghiệm thất bại (nhiễm khuẩn, mẫu hỏng phải làm lại từ đầu).',
      personalityFit: 'Kiên nhẫn, đam mê khám phá, tỉ mỉ, tôn trọng sự thật khách quan, chịu khó.'
    },
    biasDebunking: {
      myth: '"Học công nghệ sinh học ra chỉ làm nông nghiệp cấy ghép cây hoặc khó xin việc."',
      reality: 'Công nghệ sinh học hiện đại là công nghệ cao (High-Tech). Sinh viên làm việc tại các nhà máy dược phẩm chuẩn GMP, trung tâm xét nghiệm di truyền, viện nghiên cứu vắc-xin với thu nhập rất cao.',
      emotionalTrap: 'Tưởng tượng làm việc với các thí nghiệm hào nhoáng như trên phim mà nản chí trước các bài học lý thuyết hóa sinh nặng nề.'
    },
    roadmap: {
      grade12Prep: 'Học thật giỏi Sinh học và Hóa học, trau dồi vốn từ vựng tiếng Anh học thuật.',
      year1_2: 'Làm quen thao tác phòng thí nghiệm cơ bản, học chắc hóa hữu cơ và sinh học phân tử.',
      year3_4: 'Tham gia các đề tài nghiên cứu cấp trường; thực tập tại các viện nghiên cứu hoặc công ty dược phẩm.',
      postGrad: 'Ứng tuyển học bổng Thạc sĩ/Tiến sĩ toàn phần tại các nước phát triển (Nhật Bản, Hàn Quốc, Châu Âu).'
    }
  },

  // ==========================================
  // 7. QUẢN TRỊ KHÁCH SẠN & DU LỊCH (HOSPITALITY)
  // ==========================================
  {
    id: 'quan-tri-khach-san',
    code: '7810201',
    name: 'Quản trị Khách sạn & Du lịch quốc tế (Hospitality Management)',
    tagline: 'Nghệ thuật hiếu khách, quản trị dịch vụ thượng lưu và trải nghiệm khách hàng',
    sector: 'Dịch vụ & Du lịch',
    category: 'Dịch vụ & Du lịch',
    admissionBlocks: ['D01', 'A00', 'C00', 'D07'],
    riasecPrimary: ['E', 'S', 'A'],
    riasecScore: { R: 25, I: 40, A: 70, S: 90, E: 95, C: 65 },
    summary: 'Chuyên ngành nghệ thuật và khoa học quản lý vận hành khách sạn 5 sao, khu nghỉ dưỡng (Resort) cao cấp, ẩm thực (F&B), sự kiện quốc tế và tối ưu hóa trải nghiệm khách hàng theo tiêu chuẩn phục vụ toàn cầu.',
    personalityTraits: [
      'Giao tiếp hoạt ngôn, phong thái lịch thiệp, nụ cười thân thiện tự nhiên',
      'Chỉ số thông minh cảm xúc (EQ) cao, tinh tế nhận biết nhu cầu của người khác',
      'Khả năng thích ứng nhanh, xử lý tình huống phát sinh khéo léo, bình tĩnh',
      'Tác phong chỉn chu, yêu thích sự sang trọng, văn hóa ẩm thực và dịch vụ'
    ],
    suitableFor: [
      'Yêu thích môi trường làm việc quốc tế năng động, gặp gỡ nhiều người từ khắp năm châu',
      'Có khả năng ngoại ngữ tốt, thích di chuyển và khám phá các nền văn hóa ẩm thực',
      'Muốn làm việc tại các chuỗi khách sạn toàn cầu: Marriott, Hilton, Accor, InterContinental'
    ],
    unsuitableFor: [
      'Khép kín, ngại tiếp xúc đám đông, khó kiềm chế cơn nóng giận khi bị phàn nàn',
      'Ngại làm việc vào các dịp Lễ, Tết hoặc theo ca kíp dịch vụ'
    ],
    skills: {
      hardSkills: [
        'Vận hành nghiệp vụ Tiền sảnh (Front Office) & Buồng phòng (Housekeeping)',
        'Quản trị nhà hàng và dịch vụ ẩm thực (F&B Operations)',
        'Quản trị doanh thu khách sạn (Revenue Management & Room Yield)',
        'Tổ chức sự kiện hội nghị quốc tế (MICE - Meetings, Incentives, Conferences, Exhibitions)'
      ],
      softSkills: [
        'Nghệ thuật xử lý khiếu nại của khách hàng (Service Recovery)',
        'Kỹ năng đàm phán và thuyết phục đối tác lữ hành',
        'Năng lực truyền cảm hứng và quản lý đội ngũ nhân viên dịch vụ',
        'Nghi thức ngoại giao và phong thái quốc tế'
      ],
      toolsAndSoftware: [
        'Hệ thống quản lý khách sạn PMS (Opera, Fidelio, Smile)',
        'Phần mềm quản lý bán phòng trực tuyến (Channel Manager & OTA - Agoda, Booking.com)'
      ],
      futureSkills2026: [
        'Cá nhân hóa trải nghiệm khách hàng bằng dữ liệu lớn (AI Guest Experience)',
        'Du lịch bền vững và khách sạn xanh bảo vệ môi trường (Sustainable Hospitality)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Tiếng Anh (Công cụ giao tiếp tối thượng)', 'Ngữ văn (Khả năng biểu đạt)', 'Địa lý (Hiểu biết điểm đến)'],
      coreUniversitySubjects: [
        'Tổng quan du lịch & Nghệ thuật giao tiếp trong kinh doanh dịch vụ',
        'Quản trị tiền sảnh và buồng phòng chuyên nghiệp',
        'Quản trị dịch vụ ẩm thực và đồ uống',
        'Tiếp thị du lịch - khách sạn và quản trị doanh thu'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Văn hóa ẩm thực và phong tục tập quán của các thị trường khách du lịch lớn',
        'Tiêu chuẩn xếp hạng khách sạn quốc tế 5 sao',
        'Luật du lịch và quy chuẩn vệ sinh an toàn thực phẩm quốc tế HACCP'
      ],
      practicalSkills: [
        'Thực hành pha chế đồ uống (Bartender/Barista) và nếm rượu vang (Sommelier)',
        'Thực hành check-in/check-out và giải quyết tình huống khách VIP trên hệ thống Opera PMS',
        'Setup bàn tiệc chuẩn phong cách Âu/Á cho các bữa tiệc nguyên thủ quốc gia'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Nhân viên Lễ tân khách sạn 4–5 sao (Front Desk Agent / Guest Relations Officer)',
        'Nhân viên Giám sát nhà hàng / Quản lý ca F&B (F&B Supervisor)',
        'Chuyên viên điều hành tour & Quản lý sản phẩm du lịch',
        'Chuyên viên tổ chức sự kiện & Tiệc cưới cao cấp (Event Executive)'
      ],
      longTermRoles: [
        'Tổng Giám đốc Khách sạn (General Manager - GM)',
        'Giám đốc Ẩm thực (Director of F&B)',
        'Giám đốc Kinh doanh & Tiếp thị Khách sạn (Director of Sales & Marketing)'
      ]
    },
    salaryBands: {
      freshGrad: '9 – 15 triệu VNĐ/tháng (Chưa tính Service Charge & Tips)',
      experienced: '20 – 45 triệu VNĐ/tháng',
      management: '60 – 120+ triệu VNĐ/tháng (GM các khách sạn 5 sao)'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Kinh tế Quốc dân (NEU)',
        code: 'KHA',
        location: 'Hà Nội',
        cutoff2024: 26.60,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '22 – 28 triệu/năm',
        strengths: 'Khoa Du lịch & Khách sạn đào tạo cấp quản lý uy tín số 1 miền Bắc.'
      },
      {
        region: 'Bắc',
        name: 'Trường Du lịch - Đại học Hà Nội (HANU)',
        code: 'NHF',
        location: 'Hà Nội',
        cutoff2024: 25.50,
        targetBlock: 'D01',
        tuitionPerYear: '24 – 30 triệu/năm (Giảng dạy bằng tiếng Anh)',
        strengths: 'Thế mạnh ngoại ngữ vượt trội, sinh viên phản xạ tiếng Anh cực tốt.'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        code: 'KSA',
        location: 'TP.HCM',
        cutoff2024: 26.00,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '28 – 34 triệu/năm',
        strengths: 'Đào tạo tư duy kinh doanh và tài chính sắc bén trong ngành khách sạn.'
      },
      {
        region: 'Trung',
        name: 'Trường Du lịch - Đại học Huế (HUT)',
        code: 'DHD',
        location: 'Huế & Đà Nẵng',
        cutoff2024: 22.00,
        targetBlock: 'D01, C00',
        tuitionPerYear: '16 – 20 triệu/năm',
        strengths: 'Nằm tại thủ phủ du lịch miền Trung, cơ hội thực tập tại các resort đẳng cấp thế giới.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Nghệ thuật hiếu khách, điều hành dịch vụ lưu trú, ẩm thực và trải nghiệm du lịch cao cấp.',
      aiImpact: 'THẤP: Khách sạn có thể dùng robot check-in, nhưng sự ấm áp, tinh tế và lòng mến khách con người là không thể thay thế.',
      englishRole: 'BẮT BUỘC: Làm việc trong khách sạn 5 sao quốc tế, 80% khách hàng và đồng nghiệp giao tiếp bằng tiếng Anh.',
      freelancePotential: 'Khá cao: Tổ chức sự kiện độc lập, tư vấn setup nhà hàng quán cafe, làm Travel Blogger.',
      agencyOrBusiness: 'Rất cao: Tự mở homestay, chuỗi nhà hàng, công ty du lịch lữ hành.',
      creativeFreedom: 'Cao: Sáng tạo thực đơn, trang trí không gian tiệc và tạo ra những trải nghiệm bất ngờ cho khách.',
      marketDemand2025_2030: 'Rất cao: Việt Nam đang là điểm đến hàng đầu châu Á, các thương hiệu khách sạn quốc tế ồ ạt đổ bộ.',
      stability: 'Cao: Ngành công nghiệp không khói luôn là trụ cột kinh tế trọng yếu.',
      pressureLevel: 'Áp lực làm hài lòng các khách hàng khó tính; thời gian làm việc lệch khung giờ thông thường.',
      personalityFit: 'Hoạt bát, khéo léo, yêu thích giao tiếp, nụ cười sáng, chu đáo, chịu được áp lực dịch vụ.'
    },
    biasDebunking: {
      myth: '"Học quản trị khách sạn ra chỉ làm bồi bàn, dọn phòng hoặc lễ tân trực quầy."',
      reality: 'Đó là những vị trí thực tập rèn luyện nghiệp vụ ban đầu. Người được đào tạo cử nhân bài bản sẽ nhanh chóng thăng tiến lên Trưởng bộ phận, Giám đốc khối và Tổng giám đốc khách sạn 5 sao.',
      emotionalTrap: 'Thích hào nhoáng của các khu resort nhưng nản lòng khi phải đứng nhiều giờ và học kỹ năng từ những việc nhỏ nhất.'
    },
    roadmap: {
      grade12Prep: 'Rèn luyện giao tiếp tiếng Anh trôi chảy, trau dồi phong thái tự tin và kỹ năng biểu cảm gương mặt.',
      year1_2: 'Đi làm thêm thực tế tại các nhà hàng, quán cafe cao cấp để hiểu văn hóa dịch vụ.',
      year3_4: 'Thực tập toàn thời gian (Internship) tại khách sạn 5 sao; nắm vững phần mềm quản lý phòng Opera.',
      postGrad: 'Ứng tuyển các chương trình đào tạo quản trị viên tập sự (Management Trainee) của các tập đoàn khách sạn quốc tế.'
    }
  },

  // ==========================================
  // 8. KỸ THUẬT Ô TÔ & XE ĐIỆN (AUTOMOTIVE & EV)
  // ==========================================
  {
    id: 'ky-thuat-o-to',
    code: '7520130',
    name: 'Kỹ thuật Ô tô & Phương tiện thông minh (Automotive & EV)',
    tagline: 'Chinh phục công nghệ xe điện, tự hành và ngành công nghiệp sản xuất nghìn tỷ USD',
    sector: 'Kỹ thuật & Công nghệ',
    category: 'Kỹ thuật & Công nghệ',
    admissionBlocks: ['A00', 'A01', 'D07'],
    riasecPrimary: ['R', 'I', 'E'],
    riasecScore: { R: 95, I: 85, A: 25, S: 25, E: 65, C: 60 },
    summary: 'Chuyên ngành nghiên cứu cấu tạo, nguyên lý hoạt động, thiết kế, sản xuất, chẩn đoán hư hỏng và bảo dưỡng các phương tiện giao thông đường bộ, với trọng tâm chuyển dịch mạnh mẽ sang Xe điện thông minh (EV), công nghệ pin và hệ thống lái tự động.',
    personalityTraits: [
      'Đam mê xe cộ, động cơ, hệ thống truyền động và công nghệ ô tô thông minh',
      'Tư duy logic kỹ thuật, thích mày mò tìm nguyên nhân và khắc phục sự cố',
      'Sức khỏe thể chất tốt, không ngại môi trường xưởng dịch vụ và kỹ thuật',
      'Kỷ luật, cẩn trọng tuyệt đối vì liên quan trực tiếp đến an toàn tính mạng con người'
    ],
    suitableFor: [
      'Có niềm đam mê cuồng nhiệt với các dòng xe hơi (VinFast, Toyota, Porsche, Tesla)',
      'Học giỏi các môn Toán, Vật lý, thích tìm hiểu sơ đồ mạch điện và hệ thống phanh, lái',
      'Muốn trở thành Kỹ sư nghiên cứu phát triển xe (R&D) hoặc Cố vấn dịch vụ ô tô cao cấp'
    ],
    unsuitableFor: [
      'Sợ bẩn tay chân, sợ mùi xăng dầu, hóa chất bảo dưỡng',
      'Làm việc cẩu thả, không tuân thủ quy trình kiểm định an toàn kỹ thuật'
    ],
    skills: {
      hardSkills: [
        'Chẩn đoán lỗi hệ thống điều khiển điện tử ô tô (OBD-II, CAN Bus)',
        'Công nghệ pin xe điện (BMS - Battery Management System) và động cơ điện',
        'Thiết kế và mô phỏng động lực học ô tô (CATIA, MATLAB/Simulink)',
        'Quy trình bảo dưỡng, đại tu động cơ, hộp số và khung gầm'
      ],
      softSkills: [
        'Kỹ năng tư vấn kỹ thuật và chăm sóc khách hàng (Service Advisor Skills)',
        'Quản lý xưởng dịch vụ ô tô (Workshop Management)',
        'Làm việc nhóm giải quyết sự cố kỹ thuật phức tạp'
      ],
      toolsAndSoftware: [
        'Máy chẩn đoán chuyên dụng (G-Scan, Launch, Autel)',
        'Phần mềm tra cứu phụ tùng & mạch điện (AllData, Mitchell OnDemand)',
        'CATIA & SolidWorks Automotive Design'
      ],
      futureSkills2026: [
        'Hệ thống hỗ trợ lái nâng cao (ADAS - Advanced Driver Assistance Systems)',
        'Công nghệ sạc siêu nhanh và tái chế pin xe điện an toàn'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Vật lý (Cơ học và Điện từ trường)', 'Toán học (Đại số & Giải tích)', 'Tiếng Anh kỹ thuật'],
      coreUniversitySubjects: [
        'Cấu tạo động cơ đốt trong và hệ thống truyền lực',
        'Điện tử & Điều khiển tự động trên ô tô hiện đại',
        'Công nghệ ô tô điện và xe lai Hybrid (EV/HEV)',
        'Chẩn đoán kỹ thuật ô tô và an toàn xe hơi'
      ]
    },
    whatYouStudy: {
      coreFoundations: [
        'Nguyên lý hoạt động của hệ thống phun xăng điện tử, phanh ABS, cân bằng ESP',
        'Cơ chế chuyển hóa điện năng thành cơ năng trên động cơ đồng bộ nam châm vĩnh cửu',
        'Tiêu chuẩn khí thải Euro 5/6 và an toàn va chạm quốc tế'
      ],
      practicalSkills: [
        'Tháo lắp, đo kiểm chi tiết trục khuỷu, piston, xupap tại xưởng thực hành',
        'Sử dụng máy đo xung điện tử để bắt tín hiệu cảm biến góc quay trục cơ',
        'Quy trình tháo dỡ và bảo dưỡng cụm pin cao áp xe điện an toàn'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Kỹ sư chẩn đoán và sửa chữa điện - điện tử ô tô tại các đại lý 3S/4S chính hãng',
        'Cố vấn dịch vụ ô tô (Service Advisor)',
        'Kỹ sư giám sát chất lượng tại các nhà máy lắp ráp xe (VinFast, Thaco, Hyundai, Toyota)',
        'Kỹ sư kiểm định an toàn tại các trung tâm đăng kiểm xe cơ giới'
      ],
      longTermRoles: [
        'Giám đốc dịch vụ xưởng ô tô (Service Manager)',
        'Kỹ sư trưởng dự án phát triển xe mới (Vehicle Chief Engineer)',
        'Chủ gara ô tô công nghệ cao hoặc chuỗi chăm sóc xe chuyên nghiệp'
      ]
    },
    salaryBands: {
      freshGrad: '11 – 18 triệu VNĐ/tháng',
      experienced: '22 – 40 triệu VNĐ/tháng',
      management: '50 – 90+ triệu VNĐ/tháng'
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Bách khoa Hà Nội (HUST)',
        code: 'BKA',
        location: 'Hà Nội',
        cutoff2024: 26.80,
        targetBlock: 'A00, A01',
        tuitionPerYear: '28 – 35 triệu/năm',
        strengths: 'Chương trình đào tạo kỹ thuật ô tô hàng đầu Việt Nam, hợp tác sâu rộng với các viện nghiên cứu quốc tế.'
      },
      {
        region: 'Bắc',
        name: 'Đại học Giao thông Vận tải (UTC)',
        code: 'GHA',
        location: 'Hà Nội',
        cutoff2024: 25.20,
        targetBlock: 'A00, A01',
        tuitionPerYear: '18 – 24 triệu/năm',
        strengths: 'Truyền thống lâu đời về đào tạo kỹ sư ô tô và đầu máy xe lửa.'
      },
      {
        region: 'Nam',
        name: 'Đại học Bách khoa - ĐHQG TP.HCM (HCMUT)',
        code: 'QSB',
        location: 'TP.HCM',
        cutoff2024: 26.30,
        targetBlock: 'A00, A01',
        tuitionPerYear: '30 – 38 triệu/năm',
        strengths: 'Cơ sở vật chất hiện đại, nghiên cứu mạnh về xe điện và tự hành.'
      },
      {
        region: 'Nam',
        name: 'Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)',
        code: 'SPK',
        location: 'TP.HCM',
        cutoff2024: 25.75,
        targetBlock: 'A00, A01',
        tuitionPerYear: '26 – 32 triệu/năm',
        strengths: 'Hệ thống xưởng thực hành ô tô lớn nhất miền Nam, sinh viên tay nghề cực kỳ xuất sắc.'
      }
    ],
    comparisonCriteria: {
      coreNature: 'Thiết kế, chế tạo, chẩn đoán hư hỏng và làm chủ công nghệ ô tô động cơ đốt trong và xe điện.',
      aiImpact: 'RẤT CAO: AI là bộ não của xe tự hành (Autonomous Driving), mở ra tương lai giao thông thông minh.',
      englishRole: 'CAO: Tài liệu sửa chữa chính hãng và mã lỗi kỹ thuật đều bằng tiếng Anh.',
      freelancePotential: 'Trung bình: Thường gắn liền với xưởng dịch vụ hoặc phòng lab.',
      agencyOrBusiness: 'Rất cao: Mở gara ô tô, trung tâm chăm sóc xe (Detailing) hoặc đại lý phân phối phụ tùng.',
      creativeFreedom: 'Khá cao trong khâu độ xe, tối ưu hóa công suất và thiết kế phương tiện mới.',
      marketDemand2025_2030: 'Rất cao: Tỷ lệ sở hữu xe hơi tại Việt Nam tăng trưởng nhanh nhất Đông Nam Á, cùng với làn sóng xe điện VinFast.',
      stability: 'Cực kỳ cao: Xe hơi ngày càng nhiều, nhu cầu bảo dưỡng sửa chữa là vĩnh viễn.',
      pressureLevel: 'Áp lực chẩn đoán đúng bệnh của xe; môi trường làm việc có tiếng ồn và khói xe.',
      personalityFit: 'Thực tế, đam mê máy móc, chịu khó, logic, có sức khỏe tốt, tỉ mỉ.'
    },
    biasDebunking: {
      myth: '"Học kỹ thuật ô tô ra làm thợ rửa xe hoặc sửa xe máy vỉa hè."',
      reality: 'Ô tô ngày nay là một cỗ máy tính di động với hơn 100 hộp vi xử lý (ECU). Kỹ sư ô tô làm việc với phần mềm chẩn đoán công nghệ cao, quản lý dây chuyền sản xuất tự động hàng triệu USD.',
      emotionalTrap: 'Thích vẻ ngoài của siêu xe nhưng ngại học các môn Cơ học lý thuyết và Điện tử cơ bản.'
    },
    roadmap: {
      grade12Prep: 'Luyện thật chắc Toán, Lý; tìm hiểu các nguyên lý động cơ 4 kỳ và mạch điện xe hơi cơ bản.',
      year1_2: 'Làm chủ môn Cơ lý thuyết, Sức bền vật liệu và Kỹ thuật đo điện tử.',
      year3_4: 'Thực tập tại các xưởng dịch vụ đại lý 3S chính hãng; thực hành dùng máy chẩn đoán lỗi OBD-II.',
      postGrad: 'Đi sâu vào công nghệ xe điện (EV/BMS) hoặc thiết kế khí động học ô tô.'
    }
  }
];
