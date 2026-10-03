import { Major } from '../types';

export const ADDITIONAL_MAJORS: Major[] = [
  // ==========================================
  // KHOA HỌC DỮ LIỆU & TRÍ TUỆ NHÂN TẠO
  // ==========================================
  {
    id: 'khoa-hoc-du-lieu-ai',
    code: '7480109',
    name: 'Khoa học dữ liệu & Trí tuệ nhân tạo (Data Science & AI)',
    tagline: 'Khai phá giá trị từ dữ liệu lớn và kiến tạo các mô hình trí tuệ nhân tạo tương lai',
    sector: 'Công nghệ thông tin & AI',
    category: 'Công nghệ thông tin & AI',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['I', 'R', 'C'],
    riasecScore: { R: 60, I: 95, A: 35, S: 25, E: 45, C: 85 },
    summary: 'Ngành học kết hợp toán học ứng dụng, thống kê, lập trình thuật toán và học máy (Machine Learning) để phân tích tập dữ liệu khổng lồ, đưa ra dự báo kinh doanh và xây dựng hệ thống tự hành thông minh.',
    personalityTraits: [
      'Tư duy phân tích định lượng và trực giác toán học xuất sắc',
      'Kiên trì bền bỉ khi làm việc với dữ liệu nhiễu và bài toán hóc búa',
      'Đam mê công nghệ mới, thích tự động hóa quy trình',
      'Cẩn trọng và tôn trọng tính chính xác tuyệt đối của dữ liệu'
    ],
    suitableFor: [
      'Học sinh giỏi Toán (đặc biệt Đại số và Xác suất thống kê), thích tìm quy luật ẩn sau các con số',
      'Thích lập trình Python, tò mò về cơ chế vận hành của ChatGPT, xe tự hành, thuật toán gợi ý TikTok',
      'Thích làm việc độc lập chuyên sâu kết hợp trình bày insight giá trị cho ban giám đốc'
    ],
    unsuitableFor: [
      'Sợ toán cao cấp, sợ thống kê, ngại ngồi hàng giờ kiểm thử mô hình và sửa lỗi thuật toán',
      'Chỉ thích giao tiếp nói chuyện đơn thuần mà không muốn đào sâu cơ sở kỹ thuật định lượng'
    ],
    skills: {
      hardSkills: [
        'Học máy & Học sâu (Machine Learning, Deep Learning, LLMs)',
        'Xác suất thống kê suy diễn & Đại số tuyến tính tính toán',
        'Xử lý dữ liệu lớn (ETL, Data Wrangling, Feature Engineering)',
        'Thị giác máy tính (Computer Vision) & Xử lý ngôn ngữ tự nhiên (NLP)'
      ],
      softSkills: [
        'Data Storytelling (Trình bày câu chuyện dữ liệu trực quan cho người không làm kỹ thuật)',
        'Tư duy giải quyết vấn đề bằng logic định lượng',
        'Làm việc nhóm liên chức năng (Cross-functional collaboration)',
        'Đạo đức trí tuệ nhân tạo và bảo vệ quyền riêng tư dữ liệu'
      ],
      toolsAndSoftware: [
        'Python (Pandas, NumPy, Scikit-Learn, PyTorch, TensorFlow)',
        'SQL (PostgreSQL, BigQuery)',
        'Tableau / Microsoft Power BI',
        'Apache Spark / Docker',
        'Git & MLOps cơ bản'
      ],
      futureSkills2026: [
        'Fine-tuning & Prompt Engineering các mô hình ngôn ngữ lớn (LLM Agents)',
        'AI Governance & Bảo mật mô hình học máy (Adversarial AI)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Toán học (Đặc biệt Giải tích & Xác suất)', 'Tin học (Tư duy thuật toán)', 'Tiếng Anh (Đọc tài liệu ArXiv)'],
      coreUniversitySubjects: [
        'Đại số tuyến tính & Tối ưu hóa',
        'Xác suất thống kê ứng dụng',
        'Cấu trúc dữ liệu và giải thuật',
        'Khai phá dữ liệu (Data Mining)',
        'Học máy (Machine Learning)',
        'Hệ thống cơ sở dữ liệu phân tán'
      ],
      specializedElectives: ['Xử lý ngôn ngữ tự nhiên nâng cao', 'Thị giác máy tính ứng dụng', 'AI trong Tài chính & Y tế']
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Junior Data Analyst (Chuyên viên phân tích dữ liệu)',
          averageSalary: '13 - 18 triệu VNĐ/tháng',
          primaryResponsibilities: ['Viết truy vấn SQL trích xuất dữ liệu', 'Xây dựng dashboard chỉ số kinh doanh trên Power BI', 'Báo cáo xu hướng hành vi người dùng'],
          typicalEmployers: ['Shopee, Grab, VNG, các ngân hàng Techcombank, MB Bank, VNPT']
        },
        {
          title: 'Associate Machine Learning Engineer',
          averageSalary: '16 - 22 triệu VNĐ/tháng',
          primaryResponsibilities: ['Làm sạch và gán nhãn tập dữ liệu huấn luyện', 'Triển khai mô hình AI thử nghiệm', 'Đo lường độ chính xác của model'],
          typicalEmployers: ['FPT Software, VinAI, Viettel AI, Zalo Group']
        }
      ],
      midSenior: [
        {
          title: 'Senior Data Scientist',
          averageSalary: '28 - 45 triệu VNĐ/tháng',
          primaryResponsibilities: ['Thiết kế thuật toán gợi ý sản phẩm và dự báo churn rate', 'Tối ưu hóa phễu tăng trưởng bằng mô hình A/B testing', 'Cố vấn chiến lược dữ liệu cho C-level'],
          typicalEmployers: ['Các tập đoàn công nghệ đa quốc gia, Fintech, EdTech, E-commerce']
        }
      ],
      leadership: [
        {
          title: 'Head of Data / Chief Data Officer (CDO)',
          averageSalary: '60 - 110 triệu VNĐ/tháng',
          primaryResponsibilities: ['Hoạch định kiến trúc dữ liệu toàn diện của doanh nghiệp', 'Dẫn dắt đội ngũ kỹ sư AI & Data Scientists', 'Chịu trách nhiệm về ROI của các dự án AI'],
          typicalEmployers: ['Ngân hàng thương mại, tập đoàn viễn thông, kỳ lân công nghệ']
        }
      ],
      alternativePaths: ['AI Product Manager', 'Data Journalist', 'Business Intelligence Consultant', 'Nghiên cứu sinh tiến sĩ tại nước ngoài']
    },
    salaryRanges: {
      internship: '5 - 9 triệu VNĐ/tháng',
      entryLevel0to2Years: '14 - 22 triệu VNĐ/tháng',
      midSenior3to5Years: '28 - 48 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '55 - 100+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '$2,500 - $6,000 USD/tháng',
      reportSources: ['Navigos Search Tech Report 2025', 'TopCV Vietnam Tech Labor Report 2025', 'Adecco Vietnam 2025']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'Là ngành sáng tạo và định hình AI. Không bị AI thay thế mà được khuếch đại năng suất mạnh mẽ.',
      keyGrowthDrivers: ['Chuyển đổi số toàn diện các ngân hàng và bán lẻ', 'Bùng nổ ứng dụng AI tạo sinh (GenAI)', 'Nhu cầu tối ưu hóa chi phí dựa trên dữ liệu'],
      risksAndChallenges: ['Yêu cầu kiến thức toán học rất sâu', 'Mô hình liên tục lỗi thời, đòi hỏi học hỏi bài báo khoa học mới mỗi tuần']
    },
    whatYouStudy: {
      coreFoundations: ['Giải tích & Đại số tuyến tính nâng cao', 'Xác suất & Thống kê suy diễn', 'Lập trình Python chuyên sâu', 'Cơ sở dữ liệu SQL & NoSQL'],
      specializedSubjects: ['Machine Learning cơ bản & nâng cao', 'Deep Learning & Neural Networks', 'Xử lý ngôn ngữ tự nhiên (NLP)', 'Trực quan hóa dữ liệu'],
      practicalSkills: ['Viết pipeline xử lý dữ liệu tự động', 'Triển khai mô hình lên Cloud (AWS/GCP)', 'Tối ưu hóa độ trễ suy luận AI'],
      exampleProjects: ['Hệ thống phát hiện giao dịch thẻ tín dụng gian lận', 'Chatbot tư vấn tuyển sinh thông minh tích hợp RAG']
    },
    whatYouDo: {
      entryRoles: ['Data Analyst', 'Junior Data Engineer', 'Junior AI/ML Engineer'],
      seniorRoles: ['Lead Data Scientist', 'AI Research Scientist', 'Head of Analytics'],
      workEnvironments: ['Các công ty công nghệ lớn, Ngân hàng số, Sàn thương mại điện tử, Viện nghiên cứu AI']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Bách Khoa Hà Nội (HUST)',
        code: 'BKA',
        location: 'Hà Nội',
        cutoff2024: 28.53,
        targetBlock: 'A00, A01',
        tuitionPerYear: '35 - 45 triệu VNĐ/năm',
        strengths: 'Chương trình Khoa học dữ liệu & Trí tuệ nhân tạo (IT-E10) danh tiếng nhất miền Bắc, hợp tác sâu rộng với VinAI và viện nghiên cứu quốc tế.',
        accreditation: 'HCERES & AUN-QA'
      },
      {
        region: 'Bắc',
        name: 'Đại học Công nghệ - ĐHQGHN (UET)',
        code: 'QHI',
        location: 'Hà Nội',
        cutoff2024: 27.85,
        targetBlock: 'A00, A01',
        tuitionPerYear: '38 - 42 triệu VNĐ/năm',
        strengths: 'Nền tảng toán học và thuật toán cực kỳ hàn lâm, sinh viên đoạt nhiều giải Olympic Tin học quốc gia & quốc tế.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Trung',
        name: 'Trường Đại học Bách Khoa - ĐH Đà Nẵng (DUT)',
        code: 'DDK',
        location: 'Đà Nẵng',
        cutoff2024: 26.2,
        targetBlock: 'A00, A01',
        tuitionPerYear: '28 - 34 triệu VNĐ/năm',
        strengths: 'Trung tâm đào tạo kỹ thuật công nghệ trọng điểm miền Trung, liên kết mạnh với các doanh nghiệp CNTT tại Đà Nẵng.',
        accreditation: 'HCERES'
      },
      {
        region: 'Nam',
        name: 'Trường ĐH Khoa học Tự nhiên - ĐHQG TP.HCM (HCMUS)',
        code: 'QST',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 27.7,
        targetBlock: 'A00, A01',
        tuitionPerYear: '32 - 40 triệu VNĐ/năm',
        strengths: 'Cái nôi nghiên cứu toán học ứng dụng và trí tuệ nhân tạo hàng đầu miền Nam với phòng thí nghiệm AI hiện đại.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Đại học Bách Khoa - ĐHQG TP.HCM (HCMUT)',
        code: 'QSB',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 'Đánh giá năng lực: 870/1200',
        targetBlock: 'A00, A01',
        tuitionPerYear: '36 - 48 triệu VNĐ/năm',
        strengths: 'Chương trình đào tạo chuẩn quốc tế ABET, sinh viên có tư duy hệ thống và năng lực kỹ thuật thực chiến cao.',
        accreditation: 'ABET'
      }
    ],
    salaryBands: {
      internship: '5 - 9 triệu VNĐ/tháng',
      freshGrad: '14 - 22 triệu VNĐ/tháng',
      midLevel: '28 - 48 triệu VNĐ/tháng',
      management: '55 - 100+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Khai phá dữ liệu định lượng và phát triển thuật toán trí tuệ nhân tạo tự động hóa.',
      aiImpact: 'Ngành sinh ra AI. Kỹ sư giỏi hưởng lợi tối đa, gia tăng năng suất và thu nhập.',
      englishRole: 'Tối quan trọng. 100% tài liệu thuật toán, thư viện mã nguồn và hội nghị khoa học đều bằng tiếng Anh.',
      freelancePotential: 'Cao trên thị trường quốc tế (Upwork, Toptal) với đơn giá theo giờ tính bằng USD.',
      agencyOrBusiness: 'Làm việc trực tiếp tại doanh nghiệp sản phẩm công nghệ (Product) hoặc trung tâm nghiên cứu chuyên sâu.',
      creativeFreedom: 'Sáng tạo trong giải thuật và cách tiếp cận mô hình hóa thế giới thực.',
      marketDemand2025_2030: 'Rất cao, thiếu hụt trầm trọng nhân sự có năng lực giải toán và triển khai thực tế.',
      stability: 'Cao vì dữ liệu là tài sản cốt lõi của mọi tổ chức.',
      pressureLevel: 'Áp lực kỹ thuật cao khi mô hình gặp lỗi hoặc không đạt độ chính xác trong sản xuất.',
      personalityFit: 'Người thích suy luận logic, yêu thích toán học, kiên nhẫn và đam mê công nghệ.'
    },
    biasDebunking: {
      myth: 'Học ngành này chỉ cần học vài khóa công cụ kéo thả là làm được Data Scientist.',
      reality: 'Công cụ kéo thả chỉ là bề nổi. Muốn tiến xa bắt buộc phải vững toán thống kê, đại số và hiểu thấu cơ chế hoạt động bên trong của thuật toán.',
      emotionalTrap: 'Thấy ngành này "hot" và lương cao nên lao vào dù bản thân sợ toán và ghét nhìn màn hình số liệu.'
    },
    roadmap: {
      grade12Prep: 'Ôn tập chắc chắn môn Toán (Đại số, Xác suất). Tự học căn bản cú pháp lập trình Python trên mạng.',
      year1_2: 'Nắm vững Giải tích, Đại số tuyến tính, Cấu trúc dữ liệu và cơ sở dữ liệu SQL.',
      year3_4: 'Tham gia các cuộc thi phân tích dữ liệu trên Kaggle, thực tập tại bộ phận Data/AI của doanh nghiệp.',
      postGrad: 'Xây dựng portfolio giải pháp AI thực tế, chuẩn bị tiếng Anh để làm việc cho các tập đoàn toàn cầu.'
    }
  },

  // ==========================================
  // TÀI CHÍNH - NGÂN HÀNG & FINTECH
  // ==========================================
  {
    id: 'tai-chinh-ngan-hang',
    code: '7340201',
    name: 'Tài chính - Ngân hàng & Công nghệ tài chính (Fintech)',
    tagline: 'Quản trị dòng vốn, đầu tư thông minh và dẫn dắt cuộc cách mạng tài chính số',
    sector: 'Tài chính & Ngân hàng',
    category: 'Tài chính & Ngân hàng',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['C', 'E', 'I'],
    riasecScore: { R: 20, I: 75, A: 30, S: 45, E: 85, C: 90 },
    summary: 'Khoa học về quản trị tiền tệ, định giá tài sản, quản trị rủi ro tài chính doanh nghiệp, đầu tư chứng khoán và các nền tảng công nghệ tài chính hiện đại (Fintech, Blockchain, Mobile Banking).',
    personalityTraits: [
      'Cẩn trọng, nhạy bén với các con số và biến động của thị trường vốn',
      'Tư duy phân tích logic, định lượng và quản trị rủi ro chặt chẽ',
      'Đạo đức nghề nghiệp trung thực, tuân thủ nguyên tắc bảo mật khắt khe',
      'Khả năng chịu áp lực cao khi đưa ra các quyết định phân bổ dòng tiền lớn'
    ],
    suitableFor: [
      'Thích theo dõi tin tức kinh tế, thị trường chứng khoán, tiền tệ và các thương vụ mua bán sáp nhập (M&A)',
      'Thích lập bảng tính Excel chi tiết, phân tích báo cáo tài chính của các tập đoàn',
      'Muốn làm việc trong môi trường tài chính chuyên nghiệp: Ngân hàng đầu tư, Quỹ đầu tư, Công ty chứng khoán'
    ],
    unsuitableFor: [
      'Cẩu thả, hay nhầm lẫn số liệu, không thể ngồi lâu kiểm tra báo cáo tài chính',
      'Ngại rủi ro, sợ trách nhiệm pháp lý khi kiểm duyệt hồ sơ tín dụng'
    ],
    skills: {
      hardSkills: [
        'Phân tích báo cáo tài chính doanh nghiệp (CFA Foundation)',
        'Mô hình hóa tài chính & Định giá tài sản (DCF, Multiples)',
        'Thẩm định tín dụng và quản trị rủi ro tài chính',
        'Phân tích kỹ thuật và cơ bản thị trường chứng khoán'
      ],
      softSkills: [
        'Kỹ năng đàm phán hợp đồng tín dụng và huy động vốn',
        'Tư duy phản biện và đánh giá mức độ tin cậy của số liệu',
        'Giao tiếp chuyên nghiệp với khách hàng doanh nghiệp lớn',
        'Quản lý căng thẳng trước biến động thị trường'
      ],
      toolsAndSoftware: [
        'Microsoft Excel chuyên sâu (VBA, Power Query, Financial Modeling)',
        'Bloomberg Terminal / FiinPro',
        'SQL & Python cho phân tích tài chính định lượng',
        'Phần mềm lõi ngân hàng (Core Banking)'
      ],
      futureSkills2026: [
        'Ứng dụng AI thẩm định hồ sơ tín dụng tự động (Credit Scoring)',
        'Thấu hiểu tài chính phi tập trung (DeFi) và an toàn thanh toán số'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Toán học (Nền tảng số học & Logic)', 'Tiếng Anh (Thuật ngữ tài chính quốc tế)', 'Ngữ văn (Soạn thảo hồ sơ thẩm định)'],
      coreUniversitySubjects: [
        'Kinh tế vi mô & vĩ mô',
        'Tài chính doanh nghiệp (Corporate Finance)',
        'Thị trường tài chính & các định chế tài chính',
        'Lý thuyết tiền tệ và ngân hàng trung ương',
        'Thẩm định dự án đầu tư',
        'Kế toán tài chính'
      ],
      specializedElectives: ['Đầu tư tài chính quốc tế', 'Quản trị ngân hàng thương mại', 'Công nghệ tài chính Fintech']
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Chuyên viên Quản lý khách hàng doanh nghiệp (Corporate RM)',
          averageSalary: '12 - 20 triệu VNĐ/tháng + Thưởng chỉ tiêu',
          primaryResponsibilities: ['Tìm kiếm và tư vấn gói tín dụng cho doanh nghiệp', 'Thẩm định phương án vay vốn và khả năng trả nợ', 'Quản lý danh mục nợ vay an toàn'],
          typicalEmployers: ['Vietcombank, BIDV, Techcombank, MB Bank, ACB']
        },
        {
          title: 'Chuyên viên phân tích đầu tư (Junior Equity Analyst)',
          averageSalary: '14 - 20 triệu VNĐ/tháng',
          primaryResponsibilities: ['Cập nhật dữ liệu tài chính ngành và doanh nghiệp niêm yết', 'Xây dựng mô hình định giá cổ phiếu', 'Viết báo cáo khuyến nghị đầu tư'],
          typicalEmployers: ['SSI, VNDIRECT, HSC, VPS Securities']
        }
      ],
      midSenior: [
        {
          title: 'Senior Portfolio Manager (Quản lý danh mục đầu tư)',
          averageSalary: '30 - 55 triệu VNĐ/tháng + Thưởng hiệu quả danh mục',
          primaryResponsibilities: ['Hoạch định chiến lược phân bổ vốn', 'Tối ưu hóa lợi nhuận danh mục cổ phiếu/trái phiếu', 'Báo cáo hiệu quả trước ủy ban đầu tư'],
          typicalEmployers: ['Dragon Capital, VinaCapital, SSIAM, Manulife Asset Management']
        }
      ],
      leadership: [
        {
          title: 'Chief Financial Officer (CFO - Giám đốc tài chính)',
          averageSalary: '70 - 150 triệu VNĐ/tháng',
          primaryResponsibilities: ['Hoạch định toàn bộ chiến lược tài chính của tập đoàn', 'Chỉ đạo huy động vốn IPO, trái phiếu quốc tế', 'Tối ưu hóa chi phí vốn và kiểm soát rủi ro pháp lý'],
          typicalEmployers: ['Các tập đoàn niêm yết, công ty đa quốc gia, ngân hàng']
        }
      ],
      alternativePaths: ['Cố vấn tài chính cá nhân độc lập', 'Chuyên viên kiểm toán nội bộ', 'Product Owner sản phẩm ví điện tử (Fintech)']
    },
    salaryRanges: {
      internship: '4 - 7 triệu VNĐ/tháng',
      entryLevel0to2Years: '12 - 18 triệu VNĐ/tháng (chưa gồm thưởng KPI)',
      midSenior3to5Years: '25 - 45 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '60 - 120+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '$2,000 - $5,000 USD/tháng',
      reportSources: ['Navigos Banking & Financial Services Salary Survey 2025', 'TopCV Vietnam 2025']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng cao',
      aiImpactAssessment: 'AI tự động hóa các tác vụ nhập liệu, đối soát và tính điểm tín dụng. Nhân sự phân tích chiến lược và quan hệ khách hàng cấp cao được săn đón.',
      keyGrowthDrivers: ['Việt Nam phát triển trung tâm tài chính quốc tế TP.HCM và Đà Nẵng', 'Bùng nổ thanh toán không tiền mặt và ngân hàng số', 'Sự phát triển mạnh mẽ của thị trường chứng khoán'],
      risksAndChallenges: ['Áp lực chỉ tiêu doanh số (KPI) rất lớn tại ngân hàng bán lẻ', 'Rủi ro nợ xấu và pháp lý tín dụng']
    },
    whatYouStudy: {
      coreFoundations: ['Kinh tế học vĩ mô & vi mô', 'Nguyên lý kế toán & tài chính', 'Toán tài chính & thống kê', 'Pháp luật tài chính ngân hàng'],
      specializedSubjects: ['Phân tích báo cáo tài chính', 'Định giá doanh nghiệp', 'Thị trường chứng khoán', 'Quản trị rủi ro tín dụng'],
      practicalSkills: ['Lập mô hình tài chính trên Excel', 'Phân tích dòng tiền chiết khấu (DCF)', 'Thuyết trình phương án đầu tư'],
      exampleProjects: ['Báo cáo định giá cổ phiếu Vinamilk (VNM)', 'Đề án thẩm định cấp hạn mức tín dụng 50 tỷ VNĐ cho doanh nghiệp dệt may']
    },
    whatYouDo: {
      entryRoles: ['Chuyên viên tín dụng ngân hàng', 'Chuyên viên môi giới chứng khoán', 'Trợ lý phân tích tài chính'],
      seniorRoles: ['Giám đốc chi nhánh ngân hàng', 'Trưởng phòng phân tích đầu tư', 'Giám đốc tài chính (CFO)'],
      workEnvironments: ['Ngân hàng thương mại, Công ty chứng khoán, Quỹ đầu tư, Bộ phận tài chính doanh nghiệp lớn']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Học viện Tài chính (AOF)',
        code: 'HTC',
        location: 'Hà Nội',
        cutoff2024: 26.5,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '24 - 32 triệu VNĐ/năm',
        strengths: 'Thương hiệu lâu đời nhất miền Bắc về đào tạo tài chính công, kế toán kiểm toán và ngân hàng.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Bắc',
        name: 'Đại học Kinh tế Quốc dân (NEU)',
        code: 'KHA',
        location: 'Hà Nội',
        cutoff2024: 27.4,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '26 - 38 triệu VNĐ/năm',
        strengths: 'Chương trình chuẩn quốc tế, mạng lưới cựu sinh viên nắm giữ nhiều vị trí chủ chốt trong ngành tài chính.',
        accreditation: 'FIBAA'
      },
      {
        region: 'Trung',
        name: 'Trường Đại học Kinh tế - ĐH Đà Nẵng (DUE)',
        code: 'DDQ',
        location: 'Đà Nẵng',
        cutoff2024: 24.8,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '22 - 28 triệu VNĐ/năm',
        strengths: 'Cơ sở đào tạo tài chính ngân hàng uy tín hàng đầu miền Trung - Tây Nguyên.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        code: 'KSA',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 26.8,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '32 - 45 triệu VNĐ/năm',
        strengths: 'Đại học đa ngành top đầu miền Nam, có chương trình Fintech và Tài chính quốc tế kiểm định FIBAA.',
        accreditation: 'FIBAA'
      },
      {
        region: 'Nam',
        name: 'Trường Đại học Ngân hàng TP.HCM (HUB)',
        code: 'NHS',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 25.6,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '26 - 36 triệu VNĐ/năm',
        strengths: 'Chuyên sâu bậc nhất về nghiệp vụ ngân hàng thương mại và thanh toán số tại khu vực phía Nam.',
        accreditation: 'AUN-QA'
      }
    ],
    salaryBands: {
      internship: '4 - 7 triệu VNĐ/tháng',
      freshGrad: '12 - 18 triệu VNĐ/tháng',
      midLevel: '25 - 45 triệu VNĐ/tháng',
      management: '60 - 120+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Quản trị và tối ưu hóa dòng tiền, định giá và kiểm soát rủi ro thị trường vốn.',
      aiImpact: 'AI thay thế nghiệp vụ giấy tờ kiểm toán và chấm điểm tự động. Nhu cầu nhân sự phân tích đầu tư chiến lược tăng cao.',
      englishRole: 'Rất quan trọng, đặc biệt khi làm việc với chuẩn mực kế toán tài chính quốc tế IFRS hoặc thi chứng chỉ CFA.',
      freelancePotential: 'Trung bình, chủ yếu thông qua tư vấn tài chính cá nhân độc lập.',
      agencyOrBusiness: 'Làm việc tại các định chế tài chính (Financial Institutions) hoặc bộ phận tài chính doanh nghiệp.',
      creativeFreedom: 'Thấp đến trung bình, ưu tiên tính quy chuẩn, tuân thủ pháp luật và an toàn vốn.',
      marketDemand2025_2030: 'Ổn định và có xu hướng dịch chuyển mạnh sang Fintech và định lượng.',
      stability: 'Cao tại các ngân hàng lớn và quỹ đầu tư uy tín.',
      pressureLevel: 'Áp lực cao về mặt chỉ tiêu huy động vốn, giải ngân tín dụng và biến động tỷ giá.',
      personalityFit: 'Người cẩn thận, yêu thích số liệu, có kỷ luật tài chính và tư duy logic định lượng.'
    },
    biasDebunking: {
      myth: 'Làm ngân hàng là nghề "đếm tiền nhàn hạ, máy lạnh mát mẻ".',
      reality: 'Thực tế công việc áp lực chỉ tiêu doanh số (KPI) rất nặng nề, phải đi tìm khách hàng ngoài thị trường và chịu trách nhiệm pháp lý cao.',
      emotionalTrap: 'Thấy bạn bè khoe tiền thưởng Tết ngân hàng cao mà không lường trước được áp lực doanh số và trách nhiệm thu hồi nợ.'
    },
    roadmap: {
      grade12Prep: 'Rèn luyện môn Toán và tiếng Anh thật tốt. Tìm hiểu cấu trúc hệ thống ngân hàng Việt Nam.',
      year1_2: 'Học chắc nguyên lý tài chính và kế toán doanh nghiệp. Rèn luyện kỹ năng Excel chuyên sâu.',
      year3_4: 'Tham gia kỳ thi CFA Level 1, đi thực tập tại chi nhánh ngân hàng hoặc công ty chứng khoán.',
      postGrad: 'Tích lũy kinh nghiệm thẩm định dự án, hoàn thành CFA/FRM để thăng tiến lên cấp quản lý danh mục.'
    }
  },

  // ==========================================
  // LUẬT KINH TẾ & PHÁP LÝ DOANH NGHIỆP
  // ==========================================
  {
    id: 'luat-kinh-te',
    code: '7380107',
    name: 'Luật kinh tế & Pháp lý doanh nghiệp',
    tagline: 'Lá chắn pháp lý vững chắc bảo vệ quyền lợi thương mại và giải quyết tranh chấp',
    sector: 'Luật & Pháp lý',
    category: 'Luật & Pháp lý',
    admissionBlocks: ['A00', 'A01', 'C00', 'D01'],
    riasecPrimary: ['E', 'C', 'I'],
    riasecScore: { R: 10, I: 80, A: 25, S: 50, E: 85, C: 90 },
    summary: 'Nghiên cứu hệ thống pháp luật điều chỉnh quan hệ kinh tế, hợp đồng thương mại, sở hữu trí tuệ, cạnh tranh và phá sản, bảo vệ tài sản doanh nghiệp và đại diện tranh tụng tại trọng tài.',
    personalityTraits: [
      'Tư duy phản biện sắc bén, lập luận chặt chẽ và logic câu từ chuẩn xác',
      'Đọc hiểu tài liệu kiên nhẫn, khả năng bóc tách từng điều khoản luật định',
      'Bản lĩnh chính trực, giữ bí mật thông tin kinh doanh của khách hàng',
      'Kỹ năng hùng biện, thương lượng và bảo vệ quan điểm trước áp lực'
    ],
    suitableFor: [
      'Thích đọc sách luật, tìm hiểu các vụ án kinh tế hoặc tranh chấp thương mại nổi tiếng',
      'Có khả năng diễn đạt ngôn từ mạch lạc, không chấp nhận sự mập mờ, đa nghĩa',
      'Muốn trở thành luật sư doanh nghiệp, chuyên viên pháp chế nội bộ (In-house Legal)'
    ],
    unsuitableFor: [
      'Ngại đọc văn bản pháp quy dài hàng chục trang, trí nhớ kém về điều khoản quy định',
      'Thiếu tính kiên nhẫn, cảm tính và hay suy diễn chủ quan'
    ],
    skills: {
      hardSkills: [
        'Soạn thảo và rà soát hợp đồng thương mại đa phương diện',
        'Tư vấn thủ tục đầu tư nước ngoài (FDI) và mua bán sáp nhập (M&A)',
        'Thẩm định pháp lý tài sản và quyền sở hữu trí tuệ',
        'Kỹ năng tranh tụng tại tòa án và trọng tài thương mại (VIAC)'
      ],
      softSkills: [
        'Kỹ năng đàm phán giải quyết xung đột lợi ích',
        'Tư duy phòng ngừa rủi ro pháp lý từ xa (Preventive Legal Mindset)',
        'Giao tiếp chuẩn mực với cơ quan quản lý nhà nước',
        'Bảo mật và ứng xử đạo đức nghề luật'
      ],
      toolsAndSoftware: [
        'Cơ sở dữ liệu văn bản pháp luật (Thư Viện Pháp Luật, LuatVietnam)',
        'Hệ thống quản lý hợp đồng số (Contract Lifecycle Management)',
        'Phần mềm tra cứu sở hữu trí tuệ (WIPO, IP VietNam)'
      ],
      futureSkills2026: [
        'Hiểu biết pháp lý về AI, an toàn dữ liệu cá nhân (Nghị định 13) và thương mại xuyên biên giới'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Ngữ văn (Ngôn từ & Lập luận)', 'Lịch sử (Tư duy thể chế)', 'Tiếng Anh (Hợp đồng thương mại quốc tế)'],
      coreUniversitySubjects: [
        'Lý luận chung về nhà nước và pháp luật',
        'Luật Doanh nghiệp & Luật Đầu tư',
        'Luật Hợp đồng và bồi thường thiệt hại',
        'Luật Thương mại quốc tế & WTO',
        'Pháp luật về Sở hữu trí tuệ',
        'Pháp luật cạnh tranh và chống độc quyền'
      ],
      specializedElectives: ['Pháp chế M&A chuyên sâu', 'Trọng tài thương mại quốc tế', 'Luật Tài chính Ngân hàng']
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Legal Executive (Chuyên viên Pháp chế nội bộ)',
          averageSalary: '11 - 16 triệu VNĐ/tháng',
          primaryResponsibilities: ['Rà soát hợp đồng mua bán, thuê mướn tài sản', 'Thực hiện thủ tục đăng ký kinh doanh và thay đổi giấy phép', 'Cập nhật các văn bản luật mới ảnh hưởng đến công ty'],
          typicalEmployers: ['Vingroup, Masan, Sun Group, Thế Giới Di Động, các công ty sản xuất']
        },
        {
          title: 'Associate Lawyer (Trợ lý luật sư tại hãng luật)',
          averageSalary: '10 - 15 triệu VNĐ/tháng',
          primaryResponsibilities: ['Nghiên cứu án lệ và quy định pháp lý chuyên sâu', 'Dự thảo bản ý kiến pháp lý (Legal Opinion)', 'Hỗ trợ luật sư chính trong các phiên tranh tụng'],
          typicalEmployers: ['VILAF, YKVN, Baker McKenzie, LNT & Partners']
        }
      ],
      midSenior: [
        {
          title: 'Senior Legal Counsel (Luật sư tư vấn cao cấp)',
          averageSalary: '25 - 45 triệu VNĐ/tháng',
          primaryResponsibilities: ['Chủ trì thẩm định pháp lý các thương vụ M&A quy mô lớn', 'Đại diện đàm phán hợp đồng quốc tế', 'Xử lý các tranh chấp thương mại phức tạp'],
          typicalEmployers: ['Các tập đoàn đa quốc gia, công ty niêm yết, hãng luật quốc tế']
        }
      ],
      leadership: [
        {
          title: 'General Counsel / Legal Director (Giám đốc Khối Pháp chế)',
          averageSalary: '60 - 120+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Cố vấn pháp lý trực tiếp cho Hội đồng quản trị', 'Xây dựng khung quản trị rủi ro pháp lý toàn diện', 'Đại diện pháp lý cao nhất của doanh nghiệp'],
          typicalEmployers: ['Tập đoàn kinh tế lớn, ngân hàng thương mại']
        }
      ],
      alternativePaths: ['Công chứng viên', 'Trọng tài viên thương mại', 'Giảng viên đại học', 'Cán bộ cơ quan tư pháp']
    },
    salaryRanges: {
      internship: '3.5 - 6 triệu VNĐ/tháng',
      entryLevel0to2Years: '10 - 16 triệu VNĐ/tháng',
      midSenior3to5Years: '22 - 40 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '50 - 100+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '$1,800 - $4,500 USD/tháng',
      reportSources: ['Navigos Legal Salary Index 2025', 'TopCV Vietnam 2025']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng cao',
      aiImpactAssessment: 'AI hỗ trợ tra cứu văn bản và soạn thảo mẫu hợp đồng sơ bộ. Khả năng đàm phán, tư duy chiến lược và tranh tụng thực chiến của luật sư là không thể thay thế.',
      keyGrowthDrivers: ['Làn sóng vốn đầu tư trực tiếp nước ngoài (FDI) vào Việt Nam', 'Nhu cầu tuân thủ chuẩn mực quản trị quốc tế (ESG, bảo vệ dữ liệu)', 'Các tranh chấp hợp đồng kinh tế gia tăng'],
      risksAndChallenges: ['Cần thời gian học thêm lớp đào tạo luật sư tại Học viện Tư pháp và tập sự 12 tháng để có thẻ luật sư']
    },
    whatYouStudy: {
      coreFoundations: ['Hệ thống pháp luật Việt Nam', 'Pháp luật hợp đồng', 'Luật doanh nghiệp', 'Luật dân sự & tố tụng'],
      specializedSubjects: ['Luật đầu tư quốc tế', 'Pháp luật sở hữu trí tuệ', 'Kỹ năng soạn thảo văn bản pháp lý', 'Kỹ năng tranh tụng thương mại'],
      practicalSkills: ['Soạn thảo hợp đồng song ngữ Anh - Việt', 'Bóc tách điều khoản rủi ro trong hợp đồng', 'Thuyết trình bảo vệ lập luận'],
      exampleProjects: ['Soạn thảo hợp đồng nhượng quyền thương hiệu F&B', 'Mô phỏng phiên tòa tranh chấp vi phạm bản quyền phần mềm']
    },
    whatYouDo: {
      entryRoles: ['Trợ lý pháp lý', 'Chuyên viên pháp chế', 'Thư ký tòa án'],
      seniorRoles: ['Luật sư tranh tụng', 'Giám đốc pháp chế', 'Trọng tài viên thương mại'],
      workEnvironments: ['Hãng luật danh tiếng, Phòng pháp chế doanh nghiệp lớn, Tòa án, Viện kiểm sát']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Trường Đại học Luật Hà Nội (HLU)',
        code: 'LPH',
        location: 'Hà Nội',
        cutoff2024: 26.85,
        targetBlock: 'A00, A01, C00, D01',
        tuitionPerYear: '26 - 32 triệu VNĐ/năm',
        strengths: 'Đơn vị đào tạo cán bộ pháp luật trọng điểm quốc gia hàng đầu tại miền Bắc.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Bắc',
        name: 'Trường Đại học Luật - ĐHQGHN (VNU-UL)',
        code: 'QHL',
        location: 'Hà Nội',
        cutoff2024: 26.2,
        targetBlock: 'A00, C00, D01',
        tuitionPerYear: '24 - 30 triệu VNĐ/năm',
        strengths: 'Thế mạnh nghiên cứu lý luận pháp luật hiện đại và pháp luật thương mại quốc tế.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Trung',
        name: 'Trường Đại học Luật - Đại học Huế (HUL)',
        code: 'DHA',
        location: 'Huế',
        cutoff2024: 21.5,
        targetBlock: 'A00, C00, D01',
        tuitionPerYear: '18 - 24 triệu VNĐ/năm',
        strengths: 'Trung tâm đào tạo luật học lớn và có bề dày lịch sử tại miền Trung.',
        accreditation: 'Kiểm định MOET'
      },
      {
        region: 'Nam',
        name: 'Trường Đại học Luật TP.HCM (ULAW)',
        code: 'LPS',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 26.4,
        targetBlock: 'A00, A01, C00, D01',
        tuitionPerYear: '35 - 45 triệu VNĐ/năm',
        strengths: 'Trường đào tạo luật uy tín số 1 miền Nam, sinh viên được các hãng luật lớn săn đón ngay từ năm 4.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Trường ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
        code: 'QSK',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 26.6,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '28 - 36 triệu VNĐ/năm',
        strengths: 'Mô hình kết hợp độc đáo giữa Kinh tế và Luật, sinh viên nắm vững cả nghiệp vụ tài chính lẫn pháp lý doanh nghiệp.',
        accreditation: 'AUN-QA'
      }
    ],
    salaryBands: {
      internship: '3.5 - 6 triệu VNĐ/tháng',
      freshGrad: '10 - 16 triệu VNĐ/tháng',
      midLevel: '22 - 40 triệu VNĐ/tháng',
      management: '50 - 100+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Nghiên cứu thể chế pháp lý, thiết lập quy chuẩn hợp đồng và bảo vệ quyền lợi doanh nghiệp.',
      aiImpact: 'AI xử lý việc rà soát mẫu biểu cơ bản. Tư duy chiến lược và nghệ thuật đàm phán con người là cốt lõi.',
      englishRole: 'Đặc biệt quan trọng với mảng Luật kinh doanh quốc tế và các hãng luật đa quốc gia.',
      freelancePotential: 'Cao khi đã có chứng chỉ hành nghề luật sư và danh tiếng cá nhân.',
      agencyOrBusiness: 'Làm việc tại công ty luật (Law Firm) hoặc phòng pháp chế doanh nghiệp (In-house).',
      creativeFreedom: 'Thấp trong quy tắc, nhưng rất cao trong việc tìm ra giải pháp pháp lý hợp lệ tối ưu cho khách hàng.',
      marketDemand2025_2030: 'Tăng trưởng ổn định song hành cùng sự mở rộng của nền kinh tế thị trường.',
      stability: 'Rất cao, nghề nghiệp càng tích lũy tuổi đời và kinh nghiệm thì càng có giá trị.',
      pressureLevel: 'Áp lực cao về tính chính xác, deadline hoàn thiện hồ sơ và trách nhiệm bồi thường nếu sơ suất.',
      personalityFit: 'Người có óc suy xét logic, thích tranh luận, kiên định và tôn trọng công lý.'
    },
    biasDebunking: {
      myth: 'Học luật là phải học thuộc lòng từng điều luật một cách máy móc.',
      reality: 'Điều luật tra cứu trong vài giây trên mạng. Điểm mấu chốt của người học luật là thấu hiểu tinh thần của luật, phương pháp tư duy và áp dụng linh hoạt vào thực tế.',
      emotionalTrap: 'Xem phim truyền hình thấy luật sư ra tòa tranh luận hào nhoáng mà không biết rằng 90% thời gian là ngồi nghiền ngẫm văn bản và rà soát từng dấu phẩy của hợp đồng.'
    },
    roadmap: {
      grade12Prep: 'Rèn luyện khả năng đọc hiểu nhanh và viết văn nghị luận chặt chẽ. Cải thiện tiếng Anh đọc hiểu.',
      year1_2: 'Học chắc Lý luận nhà nước và pháp luật, Luật dân sự. Tập thói quen theo dõi báo chí pháp đình.',
      year3_4: 'Tham gia các cuộc thi diễn án (Moot Court), đi tập sự tại văn phòng luật sư hoặc phòng pháp chế.',
      postGrad: 'Học lớp đào tạo nghề luật sư tại Học viện Tư pháp, thi lấy thẻ luật sư để hành nghề độc lập.'
    }
  },

  // ==========================================
  // THIẾT KẾ ĐỒ HỌA & TRẢI NGHIỆM SỐ (UI/UX)
  // ==========================================
  {
    id: 'thiet-ke-do-hoa',
    code: '7210403',
    name: 'Thiết kế đồ họa & Trải nghiệm số (Graphic & UI/UX Design)',
    tagline: 'Biến ý tưởng vô hình thành ngôn ngữ thị giác đầy cảm xúc và tối ưu trải nghiệm người dùng',
    sector: 'Thiết kế & Nghệ thuật số',
    category: 'Thiết kế & Nghệ thuật số',
    admissionBlocks: ['H00', 'V00', 'D01', 'A01'],
    riasecPrimary: ['A', 'R', 'I'],
    riasecScore: { R: 60, I: 55, A: 95, S: 40, E: 50, C: 45 },
    summary: 'Nghệ thuật ứng dụng kết hợp giữa mỹ thuật thị giác, tâm lý học nhận thức và công nghệ số để tạo ra các sản phẩm nhận diện thương hiệu, ấn phẩm truyền thông và giao diện người dùng ứng dụng di động/web (UI/UX).',
    personalityTraits: [
      'Trực giác thẩm mỹ nhạy bén, đam mê màu sắc, bố cục và phông chữ (Typography)',
      'Tư duy sáng tạo không ngừng nghỉ, luôn tìm kiếm góc nhìn mới lạ',
      'Đồng cảm sâu sắc với trải nghiệm của người sử dụng',
      'Kiên nhẫn với các phiên bản chỉnh sửa (Revision) và lắng nghe góp ý'
    ],
    suitableFor: [
      'Thích vẽ, chụp ảnh, tự học các phần mềm đồ họa từ sớm',
      'Khó chịu khi thấy một trang web hoặc ứng dụng điện thoại khó dùng, bố cục lộn xộn',
      'Muốn nhìn thấy tác phẩm của mình xuất hiện trên bảng quảng cáo đường phố hoặc trên màn hình hàng triệu người dùng'
    ],
    unsuitableFor: [
      'Cái tôi quá cao, không chịu được sự phản biện hoặc yêu cầu sửa đổi của khách hàng',
      'Thiếu tính kỷ luật thời gian, dễ nản lòng khi cạn kiệt ý tưởng'
    ],
    skills: {
      hardSkills: [
        'Nguyên lý thị giác: Bố cục, Màu sắc, Typography và Hệ thống lưới (Grid System)',
        'Thiết kế giao diện người dùng (UI Design) & Hệ sinh thái Design System',
        'Nghiên cứu trải nghiệm người dùng (UX Research: User Persona, Wireframe, Usability Testing)',
        'Đồ họa động cơ bản (Motion Graphics & Micro-interactions)'
      ],
      softSkills: [
        'Kỹ năng bảo vệ ý tưởng thiết kế (Design Presentation)',
        'Lắng nghe và chuyển hóa yêu cầu trừu tượng thành sản phẩm thị giác',
        'Phối hợp nhịp nhàng với đội ngũ lập trình viên Front-end',
        'Quản lý thời gian dự án đa nhiệm'
      ],
      toolsAndSoftware: [
        'Figma / FigJam (Công cụ chuẩn mực số 1 cho UI/UX)',
        'Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects)',
        'Blender cơ bản (Thiết kế 3D)',
        'Protopie / Principle (Tạo tương tác chuyển động cao cấp)'
      ],
      futureSkills2026: [
        'Tận dụng AI tạo sinh (Midjourney, Stable Diffusion) để lên concept và moodboard siêu tốc'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Mỹ thuật / Vẽ hình họa', 'Ngữ văn (Cảm thụ ý niệm)', 'Tiếng Anh (Tham khảo xu hướng Behance/Dribbble)'],
      coreUniversitySubjects: [
        'Lịch sử mỹ thuật và văn hóa thị giác',
        'Hình họa và giải phẫu tạo hình',
        'Nghệ thuật chữ (Typography)',
        'Thiết kế nhận diện thương hiệu (Branding Identity)',
        'Tương tác người - máy (HCI & UX Design)',
        'Thiết kế ấn phẩm xuất bản'
      ],
      specializedElectives: ['Thiết kế trải nghiệm 3D', 'Animation 2D chuyên nghiệp', 'Thiết kế bao bì thương mại']
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Junior UI/UX Designer',
          averageSalary: '12 - 17 triệu VNĐ/tháng',
          primaryResponsibilities: ['Thiết kế màn hình ứng dụng theo Design System có sẵn', 'Tham gia thử nghiệm giao diện với người dùng thực tế', 'Bàn giao tài nguyên thiết kế cho lập trình viên'],
          typicalEmployers: ['MoMo, VNG, Zalo, Viettel Digital, các công ty phần mềm Outsourcing']
        },
        {
          title: 'Graphic Designer (Chuyên viên thiết kế đồ họa)',
          averageSalary: '10 - 15 triệu VNĐ/tháng',
          primaryResponsibilities: ['Thiết kế banner mạng xã hội, poster sự kiện, catalog', 'Thiết kế bộ nhận diện thương hiệu cho nhãn hàng', 'Chỉnh sửa hình ảnh sản phẩm bán hàng'],
          typicalEmployers: ['Agency quảng cáo, phòng Marketing doanh nghiệp, tòa soạn báo']
        }
      ],
      midSenior: [
        {
          title: 'Senior Product Designer',
          averageSalary: '25 - 42 triệu VNĐ/tháng',
          primaryResponsibilities: ['Lãnh đạo trải nghiệm toàn diện cho một tính năng lớn của sản phẩm', 'Xây dựng và duy trì Design System toàn công ty', 'Phối hợp với Product Manager xác định mục tiêu kinh doanh'],
          typicalEmployers: ['Kỳ lân công nghệ, công ty công nghệ quốc tế']
        }
      ],
      leadership: [
        {
          title: 'Creative Director / Head of Design',
          averageSalary: '50 - 90 triệu VNĐ/tháng',
          primaryResponsibilities: ['Định hướng ngôn ngữ thị giác và phong cách sáng tạo tối thượng', 'Xây dựng đội ngũ thiết kế, phân bổ ngân sách sáng tạo', 'Cố vấn thương hiệu cho Ban điều hành'],
          typicalEmployers: ['Tập đoàn lớn, Agency quảng cáo hàng đầu thế giới (Ogilvy, Dentsu)']
        }
      ],
      alternativePaths: ['Freelance Illustrator', 'Game UI Artist', 'Chuyên gia thiết kế phông chữ (Type Designer)', 'Nhiếp ảnh gia thương mại']
    },
    salaryRanges: {
      internship: '4 - 7 triệu VNĐ/tháng',
      entryLevel0to2Years: '11 - 17 triệu VNĐ/tháng',
      midSenior3to5Years: '22 - 38 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '45 - 85+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '$1,800 - $4,200 USD/tháng',
      reportSources: ['Vietnam Creative Industry Report 2025', 'TopCV Vietnam 2025']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng cao',
      aiImpactAssessment: 'AI thay thế các thao tác cắt ảnh, vẽ minh họa cơ bản. Kỹ sư UX thấu hiểu hành vi con người và tư duy thẩm mỹ cao cấp có giá trị tăng vọt.',
      keyGrowthDrivers: ['Mọi doanh nghiệp đều cần số hóa trải nghiệm khách hàng trên điện thoại', 'Thương mại điện tử cạnh tranh bằng sự thuận tiện của giao diện', 'Nhu cầu xây dựng nhận diện thương hiệu cao cấp'],
      risksAndChallenges: ['Cạnh tranh khốc liệt nếu chỉ biết kỹ năng đồ họa 2D cơ bản mà không mở rộng sang UI/UX và tư duy sản phẩm']
    },
    whatYouStudy: {
      coreFoundations: ['Mỹ thuật tạo hình', 'Màu sắc & ánh sáng', 'Nghệ thuật chữ Typography', 'Tư duy bố cục thị giác'],
      specializedSubjects: ['Thiết kế giao diện UI', 'Nghiên cứu trải nghiệm UX', 'Motion Graphic cơ bản', 'Design System'],
      practicalSkills: ['Sử dụng thành thạo bộ công cụ Figma', 'Thực hiện bài kiểm tra khả năng sử dụng (Usability test)', 'Xây dựng portfolio thiết kế ấn tượng'],
      exampleProjects: ['Thiết kế lại ứng dụng gọi đồ ăn phục vụ người cao tuổi', 'Xây dựng bộ nhận diện thương hiệu cho chuỗi cà phê di sản']
    },
    whatYouDo: {
      entryRoles: ['Graphic Designer', 'Junior UI Designer', 'UX Researcher'],
      seniorRoles: ['Senior Product Designer', 'Design Lead', 'Giám đốc nghệ thuật (Art Director)'],
      workEnvironments: ['Công ty công nghệ, Agency sáng tạo, Hãng thời trang, Doanh nghiệp truyền thông']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Trường Đại học Mỹ thuật Công nghiệp Hà Nội',
        code: 'MTC',
        location: 'Hà Nội',
        cutoff2024: 'Thi năng khiếu: 23.5',
        targetBlock: 'H00',
        tuitionPerYear: '18 - 22 triệu VNĐ/năm',
        strengths: 'Cái nôi đào tạo mỹ thuật ứng dụng danh tiếng và lâu đời nhất miền Bắc.',
        accreditation: 'Kiểm định BGDĐT'
      },
      {
        region: 'Bắc',
        name: 'Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
        code: 'BVH',
        location: 'Hà Nội',
        cutoff2024: 25.8,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '24 - 30 triệu VNĐ/năm',
        strengths: 'Chương trình Thiết kế đa phương tiện kết hợp rất mạnh với nền tảng công nghệ số và phần mềm.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Trung',
        name: 'Trường Đại học Nghệ thuật - Đại học Huế',
        code: 'DHN',
        location: 'Huế',
        cutoff2024: 'Thi năng khiếu: 21.0',
        targetBlock: 'H00, V00',
        tuitionPerYear: '16 - 20 triệu VNĐ/năm',
        strengths: 'Đào tạo mỹ thuật chuyên sâu, gìn giữ nét văn hóa cung đình và ứng dụng vào thiết kế đương đại.',
        accreditation: 'Kiểm định MOET'
      },
      {
        region: 'Nam',
        name: 'Trường Đại học Kiến trúc TP.HCM (UAH)',
        code: 'KTS',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 'Thi năng khiếu: 24.8',
        targetBlock: 'H00',
        tuitionPerYear: '26 - 34 triệu VNĐ/năm',
        strengths: 'Đỉnh cao đào tạo thiết kế đồ họa tại miền Nam, sinh viên có gu thẩm mỹ và phong cách sáng tạo đột phá.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Đại học RMIT Việt Nam (Cơ sở Nam Sài Gòn)',
        code: 'RMIT',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 'Xét tuyển học bạ & IELTS 6.5',
        targetBlock: 'Xét học bạ',
        tuitionPerYear: '320 - 350 triệu VNĐ/năm',
        strengths: 'Cơ sở vật chất chuẩn quốc tế của Úc, studio thiết kế tối tân, cơ hội việc làm toàn cầu.',
        accreditation: 'TEQSA Australia'
      }
    ],
    salaryBands: {
      internship: '4 - 7 triệu VNĐ/tháng',
      freshGrad: '11 - 17 triệu VNĐ/tháng',
      midLevel: '22 - 38 triệu VNĐ/tháng',
      management: '45 - 85+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Ứng dụng mỹ thuật thị giác và tư duy trải nghiệm để giải quyết bài toán giao tiếp con người.',
      aiImpact: 'AI tăng tốc tạo asset. Nhưng tư duy sắp xếp trải nghiệm, thấu cảm người dùng và bản sắc thương hiệu cần con người.',
      englishRole: 'Cần thiết để nghiên cứu tài nguyên quốc tế, tham gia cộng đồng thiết kế toàn cầu.',
      freelancePotential: 'Rất cao, khả năng nhận dự án thiết kế từ khách hàng nước ngoài với thu nhập tốt.',
      agencyOrBusiness: 'Làm việc linh hoạt tại Agency, Product Company hoặc Freelance toàn thời gian.',
      creativeFreedom: 'Rất cao, tự do biểu đạt phong cách thẩm mỹ cá nhân.',
      marketDemand2025_2030: 'Rất cao trong mảng UI/UX sản phẩm số; cạnh tranh vừa phải ở mảng in ấn truyền thống.',
      stability: 'Tùy thuộc vào năng lực sáng tạo và độ nhạy bén với công nghệ mới.',
      pressureLevel: 'Áp lực về deadline và những vòng sửa đổi (Feedback) liên tục từ khách hàng.',
      personalityFit: 'Người giàu cảm xúc, có mắt thẩm mỹ, tò mò về công nghệ và thích biến ý tưởng thành hình ảnh.'
    },
    biasDebunking: {
      myth: 'Thiết kế đồ họa chỉ là người "vẽ thuê", khách bảo vẽ gì thì vẽ nấy.',
      reality: 'Designer thực thụ là người giải quyết vấn đề kinh doanh thông qua ngôn ngữ thị giác. Thiết kế tốt giúp tăng chuyển đổi đơn hàng và định vị đẳng cấp thương hiệu.',
      emotionalTrap: 'Tự ái khi bị chê sản phẩm thiết kế mà không hiểu rằng thiết kế thương mại phục vụ số đông người dùng chứ không phải triển lãm nghệ thuật cá nhân.'
    },
    roadmap: {
      grade12Prep: 'Học vẽ cơ bản (hình họa chì, hòa sắc). Tìm hiểu và thực hành làm quen với Figma hoặc Photoshop.',
      year1_2: 'Rèn luyện mỹ thuật cơ bản, Typography và lý thuyết màu. Xây dựng tài khoản Behance/Dribbble.',
      year3_4: 'Làm các dự án Redesign giao diện thực tế, đi thực tập tại công ty công nghệ hoặc Agency.',
      postGrad: 'Hoàn thiện Portfolio chất lượng cao, định hình phong cách cá nhân và trau dồi thêm kỹ năng chuyển động (Motion).'
    }
  }
];
