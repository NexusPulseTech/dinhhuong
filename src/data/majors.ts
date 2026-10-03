import { Major, MajorProfile } from '../types';
import { ADDITIONAL_MAJORS } from './additionalMajors';
import { MORE_MAJORS } from './moreMajors';
import { EXTRA_MAJORS } from './extraMajors';

export type { MajorProfile };

const BASE_MAJORS: MajorProfile[] = [
  // ==========================================
  // SECTOR 1: MARKETING & TIẾP THỊ
  // ==========================================
  {
    id: 'marketing',
    code: '7340115',
    name: 'Marketing & Quản trị thương hiệu',
    tagline: 'Giao thoa giữa tâm lý người tiêu dùng, tư duy kinh doanh và dữ liệu số',
    sector: 'Marketing & Tiếp thị',
    category: 'Marketing & Tiếp thị',
    admissionBlocks: ['D01', 'A00', 'A01', 'D07'],
    riasecPrimary: ['E', 'A', 'C'],
    riasecScore: { R: 15, I: 60, A: 75, S: 65, E: 90, C: 60 },
    summary: 'Khoa học và nghệ thuật nghiên cứu thị trường, thấu hiểu insight người tiêu dùng, định giá, truyền thông và phân phối nhằm tạo ra giá trị khác biệt giúp doanh nghiệp tăng trưởng doanh thu bền vững.',
    personalityTraits: [
      'Nhạy bén với cơ hội thị trường và tâm lý con người',
      'Tư duy kết hợp giữa óc sáng tạo và phân tích số liệu tài chính',
      'Khả năng thuyết phục, trình bày ý tưởng lôi cuốn',
      'Chịu được áp lực chỉ tiêu doanh số và biến động thị trường'
    ],
    suitableFor: [
      'Thích quan sát hành vi mua sắm, tìm hiểu nguyên nhân thành công của các thương hiệu lớn',
      'Thích nhìn thấy ý tưởng sáng tạo biến thành doanh số và khách hàng trung thành',
      'Năng nổ, thích làm việc nhóm, giỏi ăn nói và lập luận logic'
    ],
    unsuitableFor: [
      'Sợ con số, ghét việc phải chịu trách nhiệm về chỉ tiêu doanh số bán hàng (KPI/ROI)',
      'Thích công việc lặp đi lặp lại an toàn, ngại thích ứng với các thuật toán quảng cáo thay đổi liên tục'
    ],
    skills: {
      hardSkills: [
        'Lập kế hoạch truyền thông tích hợp (IMC Plan)',
        'Nghiên cứu thị trường & Phân tích định lượng (SPSS, SurveyMonkey)',
        'Quản trị quảng cáo đa kênh (Meta Ads, Google Ads, TikTok Shop Ads)',
        'Định giá sản phẩm và tính toán điểm hòa vốn tài chính (ROI/CAC/LTV)'
      ],
      softSkills: [
        'Kỹ năng Pitching bảo vệ ý tưởng trước khách hàng và ban giám đốc',
        'Thấu cảm người dùng (Consumer Empathy)',
        'Lãnh đạo đội ngũ liên phòng ban (Cross-functional Leadership)',
        'Đàm phán thương mại và quản lý đối tác (Vendor Management)'
      ],
      toolsAndSoftware: [
        'Google Analytics 4 (GA4)',
        'Meta Business Suite',
        'Canva & Adobe Photoshop căn bản',
        'SEMrush / Ahrefs',
        'Tableau / Power BI cơ bản'
      ],
      futureSkills2026: [
        'Ứng dụng AI tạo sinh (Midjourney, ChatGPT) để xây dựng nội dung A/B testing quy mô lớn',
        'Omnichannel Marketing & Tiếp thị trải nghiệm cá nhân hóa bằng dữ liệu lớn'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Toán học (Logic số liệu)', 'Ngữ văn (Ngôn từ & Thấu cảm)', 'Tiếng Anh (Tài liệu toàn cầu)'],
      coreUniversitySubjects: [
        'Kinh tế học vi mô & vĩ mô',
        'Nguyên lý Marketing & Chiến lược 4P/7P',
        'Hành vi người tiêu dùng (Consumer Behavior)',
        'Quản trị thương hiệu (Brand Management)'
      ],
      specializedElectives: [
        'Digital Marketing & Social Commerce',
        'Trade Marketing & Tiếp thị tại điểm bán',
        'Marketing Dược phẩm / Dịch vụ B2B',
        'Phân tích dữ liệu tiếp thị (Marketing Analytics)'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Marketing Executive / Digital Specialist',
          averageSalary: '10 - 16 triệu VNĐ/tháng',
          primaryResponsibilities: ['Triển khai chiến dịch quảng cáo', 'Sản xuất nội dung mạng xã hội', 'Theo dõi số liệu báo cáo tuần'],
          typicalEmployers: ['Tập đoàn FMCG (Vinamilk, Masan)', 'Công ty công nghệ', 'Doanh nghiệp bán lẻ']
        },
        {
          title: 'Account Executive tại Marketing Agency',
          averageSalary: '9 - 14 triệu VNĐ/tháng',
          primaryResponsibilities: ['Làm việc với nhãn hàng client', 'Viết brief cho đội ngũ sáng tạo', 'Kiểm soát tiến độ dự án'],
          typicalEmployers: ['Ogilvy', 'Dentsu', 'Hakuhodo', 'Local Digital Agencies']
        }
      ],
      midSenior: [
        {
          title: 'Brand Manager (Quản lý nhãn hàng)',
          averageSalary: '25 - 45 triệu VNĐ/tháng',
          primaryResponsibilities: ['Chịu trách nhiệm P&L nhãn hàng', 'Định vị chiến lược thương hiệu 1-3 năm', 'Quản lý ngân sách hàng chục tỷ'],
          typicalEmployers: ['Unilever', 'P&G', 'Nestle', 'Samsung Vietnam']
        },
        {
          title: 'Growth / Performance Marketing Lead',
          averageSalary: '30 - 55 triệu VNĐ/tháng',
          primaryResponsibilities: ['Tối ưu hóa phễu chuyển đổi số', 'Quản lý ngân sách quảng cáo tự động', 'Tăng trưởng người dùng mới'],
          typicalEmployers: ['Shopee', 'Lazada', 'TikTok Shop', 'Tech Startups']
        }
      ],
      leadership: [
        {
          title: 'Chief Marketing Officer (CMO) / Marketing Director',
          averageSalary: '60 - 130+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Hoạch định chiến lược tăng trưởng toàn doanh nghiệp', 'Xây dựng văn hóa thương hiệu', 'Báo cáo trực tiếp cho CEO'],
          typicalEmployers: ['Tập đoàn đa quốc gia', 'Tập đoàn tài chính', 'Doanh nghiệp niêm yết']
        }
      ],
      alternativePaths: [
        'Chủ sở hữu Digital Agency độc lập',
        'Chuyên gia Tư vấn Thương hiệu cá nhân',
        'Khởi nghiệp thương hiệu E-commerce D2C'
      ]
    },
    salaryRanges: {
      internship: '3 - 6 triệu VNĐ/tháng',
      entryLevel0to2Years: '10 - 16 triệu VNĐ/tháng (+ thưởng KPI doanh số)',
      midSenior3to5Years: '22 - 45 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '55 - 120+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '1,500$ - 3,500$/tháng (khi làm cho các agency quốc tế)',
      reportSources: ['Navigos Group Salary Report 2024-2025', 'TopCV Vietnam Labor Market 2024-2025', 'Adecco Vietnam']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'Trung bình: AI hỗ trợ viết content và tạo hình ảnh thử nghiệm nhanh chóng, nhưng tư duy chiến lược thương hiệu và sự thấu cảm văn hóa địa phương vẫn do con người chỉ huy.',
      keyGrowthDrivers: ['Bùng nổ Social Commerce và bán hàng trực tiếp trên TikTok Shop', 'Chuyển dịch ngân sách từ quảng cáo truyền thống sang tiếp thị số dựa trên dữ liệu'],
      risksAndChallenges: ['Cạnh tranh khốc liệt giữa các ứng viên', 'Áp lực đo lường doanh số sát sao từ ban giám đốc']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Kinh tế Quốc dân (NEU)',
        code: 'KHA',
        location: 'Hà Nội',
        cutoff2024: 27.6,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '28 - 48 triệu VNĐ/năm',
        accreditation: 'ACBSP Hoa Kỳ',
        strengths: 'Khoa Marketing đầu tiên tại VN, chương trình đào tạo chuẩn mực, mạng lưới cựu sinh viên giữ vị trí chủ chốt khắp các tập đoàn'
      },
      {
        region: 'Bắc',
        name: 'Đại học Ngoại thương (FTU Hà Nội)',
        code: 'NTH',
        location: 'Hà Nội',
        cutoff2024: 27.8,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '26 - 55 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Sinh viên năng động xuất sắc, tiếng Anh thượng thừa, tư duy giải case study đỉnh cao'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        code: 'KSA',
        location: 'TP.HCM',
        cutoff2024: 26.8,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '34 - 58 triệu VNĐ/năm',
        accreditation: 'FIBAA Thụy Sĩ',
        strengths: 'Hệ sinh thái kết nối doanh nghiệp số 1 miền Nam, đào tạo cả Marketing số và Quản trị thương hiệu'
      },
      {
        region: 'Nam',
        name: 'Đại học Tài chính - Marketing (UFM)',
        code: 'DMS',
        location: 'TP.HCM',
        cutoff2024: 25.1,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '28 - 45 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Trường chuyên biệt sâu về Marketing, tính ứng dụng thực chiến cao, sinh viên năng động'
      },
      {
        region: 'Nam',
        name: 'Đại học Quốc tế RMIT Việt Nam',
        code: 'RMIT',
        location: 'TP.HCM / Hà Nội',
        cutoff2024: 'Xét học bạ & IELTS 6.5+',
        targetBlock: 'D01/A01',
        tuitionPerYear: '320 - 360 triệu VNĐ/năm',
        accreditation: 'Úc / AACSB',
        strengths: 'Môi trường quốc tế 100%, kết nối thẳng vào các tập đoàn đa quốc gia và agency toàn cầu'
      }
    ],
    whatYouStudy: {
      coreFoundations: [
        'Nguyên lý Marketing & Chiến lược 4P/7P',
        'Hành vi người tiêu dùng (Consumer Behavior)',
        'Nghiên cứu thị trường & Phân tích định lượng (SPSS)',
        'Quản trị thương hiệu & Định vị sản phẩm'
      ],
      specializedSubjects: [
        'Digital Marketing & Quảng cáo đa kênh (Meta, Google, TikTok Ads)',
        'Phân tích dữ liệu Marketing (Marketing Analytics, GA4, SQL cơ bản)',
        'Content Marketing & Nghệ thuật viết quảng cáo thương mại',
        'Trade Marketing & Tiếp thị tại điểm bán (Shopper Marketing)'
      ],
      practicalSkills: [
        'Lập kế hoạch chiến dịch truyền thông tích hợp (IMC Plan)',
        'Đo lường chỉ số hoàn vốn quảng cáo (ROAS, CAC, LTV)',
        'Thuyết trình bảo vệ ý tưởng trước khách hàng (Pitching)'
      ],
      exampleProjects: [
        'Lập kế hoạch ra mắt dòng sản phẩm đồ uống đóng chai cho Gen Z',
        'Tối ưu chiến dịch Performance Marketing trên TikTok Shop mang lại doanh số 500 triệu'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Marketing Executive / Digital Specialist',
        'Account Executive tại Marketing Agency',
        'Content Writer / Copywriter thương mại',
        'Performance / Media Buying Executive'
      ],
      seniorRoles: [
        'Brand Manager (Quản lý nhãn hàng cấp cao)',
        'Chief Marketing Officer (CMO) / Giám đốc Tiếp thị',
        'Chủ sở hữu Digital Agency hoặc chuỗi thương hiệu bán lẻ',
        'Chuyên gia Tư vấn Tăng trưởng (Growth Strategist)'
      ],
      workEnvironments: [
        'Tập đoàn FMCG (Unilever, P&G, Vinamilk), ngân hàng, hãng xe',
        'Agency quảng cáo (Ogilvy, Dentsu, Hakuhodo) và local agencies',
        'Startup công nghệ, sàn thương mại điện tử (Shopee, Lazada, TikTok Shop)'
      ]
    },
    salaryBands: {
      internship: '3 - 6 triệu VNĐ/tháng',
      freshGrad: '10 - 16 triệu VNĐ/tháng (+ hoa hồng KPI)',
      midLevel: '22 - 45 triệu VNĐ/tháng',
      management: '55 - 120+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Kinh doanh, tìm kiếm insight khách hàng, thúc đẩy doanh số và phát triển thương hiệu.',
      aiImpact: 'TRUNG BÌNH: AI viết bài và phân tích dữ liệu nhanh, nhưng sự thấu cảm con người và chiến lược thương hiệu là không thể thay thế.',
      englishRole: 'ĐÒN BẨY QUYẾT ĐỊNH: Tiếng Anh giúp nhân đôi mức lương khi ứng tuyển vào các tập đoàn đa quốc gia.',
      freelancePotential: 'Rất cao (Chạy quảng cáo, tư vấn SEO, thiết kế phễu bán hàng).',
      agencyOrBusiness: 'CỰC KỲ CAO: Rất nhiều người học Marketing sau 3-5 năm tự mở công ty kinh doanh riêng.',
      creativeFreedom: 'Cao, nhưng luôn phải gắn với kết quả kinh doanh và chỉ số ROI.',
      marketDemand2025_2030: 'Mọi doanh nghiệp muốn tồn tại đều bắt buộc phải có đội ngũ Marketing giỏi.',
      stability: 'Trung bình: Đào thải nhanh nếu không đạt KPI, nhưng cơ hội bứt phá thu nhập cao nhất.',
      pressureLevel: 'Áp lực về số liệu, chi phí quảng cáo và cam kết doanh số hàng tháng.',
      personalityFit: 'Nhạy bén, thích quan sát tâm lý, yêu thích con số kết hợp hình ảnh, chịu áp lực tốt.'
    },
    biasDebunking: {
      myth: '"Marketing chỉ là làm quảng cáo giải trí vui vẻ trên Facebook hay quay clip TikTok nhảy nhót."',
      reality: 'Marketing thực chất là KINH DOANH. Bạn phải ngồi nhìn bảng tính Excel hàng giờ, phân tích chi phí từng cú click chuột, tính điểm hòa vốn và giải trình tại sao chiến dịch lỗ vốn.',
      emotionalTrap: 'Chỉ nhìn thấy phần nổi lấp lánh của các clip viral mà quên mất bản chất khắc nghiệt của bài toán tài chính doanh nghiệp.'
    },
    roadmap: {
      grade12Prep: 'Rèn luyện tư duy toán học logic và khả năng diễn đạt ngôn từ; Trau dồi tiếng Anh.',
      year1_2: 'Nắm chắc kiến thức kinh tế học vi mô/vĩ mô; Tập dùng Google Sheets, Canva; Tham gia các cuộc thi giải case Marketing.',
      year3_4: 'Đi thực tập tại Agency; Học sâu về phân tích dữ liệu quảng cáo; Xây dựng Portfolio chiến dịch thực tế.',
      postGrad: 'Định hình nhánh chuyên môn: Quản trị nhãn hàng (Brand Manager) hay Tiếp thị số (Performance/Growth).'
    }
  },
  {
    id: 'thuong-mai-dien-tu',
    code: '7340122',
    name: 'Thương mại điện tử & Kinh tế số',
    tagline: 'Vận hành sàn số, tối ưu trải nghiệm mua sắm và quản trị chuỗi bán lẻ đa kênh',
    sector: 'Marketing & Tiếp thị',
    category: 'Marketing & Tiếp thị',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['E', 'C', 'I'],
    riasecScore: { R: 25, I: 70, A: 45, S: 45, E: 90, C: 80 },
    summary: 'Chuyên ngành giao thoa giữa kinh doanh, công nghệ số và vận hành bán lẻ trực tuyến, đào tạo năng lực quản lý gian hàng sàn TMĐT, thanh toán số, quản trị dữ liệu khách hàng và tiếp thị liên kết.',
    personalityTraits: [
      'Nhanh nhạy với công nghệ và thói quen mua sắm trực tuyến',
      'Tư duy phân tích dữ liệu lưu lượng truy cập và tỷ lệ chuyển đổi',
      'Khả năng quản lý vận hành kho vận kết hợp tiếp thị',
      'Linh hoạt xử lý khiếu nại và tối ưu đánh giá gian hàng'
    ],
    suitableFor: [
      'Thích kinh doanh online, thường xuyên theo dõi các xu hướng mua sắm Shopee, TikTok Shop',
      'Thích làm việc với dữ liệu số liệu chuyển đổi (Conversion Rate, Traffic, GMV)'
    ],
    unsuitableFor: [
      'Ngại cập nhật các thuật toán sàn thương mại thay đổi hàng tháng',
      'Không chịu được áp lực mùa siêu sale (thức đêm canh giá và vận hành đơn hàng)'
    ],
    skills: {
      hardSkills: [
        'Vận hành gian hàng Shopee, Lazada, TikTok Shop chuyên sâu',
        'Tối ưu hóa công cụ tìm kiếm trên sàn TMĐT (In-app SEO)',
        'Livestream bán hàng và thiết kế kịch bản kích hoạt mua sắm',
        'Quản trị kho vận tích hợp (Fulfillment by Merchant/Platform)'
      ],
      softSkills: [
        'Chăm sóc khách hàng số và xử lý khủng hoảng review xấu',
        'Đàm phán với ngành hàng (Key Account Management)',
        'Quản lý đội ngũ đóng gói và cộng tác viên'
      ],
      toolsAndSoftware: [
        'TikTok Shop Seller Center & Shopee Seller Centre',
        'Phần mềm quản lý bán hàng (KiotViet, Sapo, Haravan)',
        'Google Data Studio / Looker Studio',
        'CapCut và phần mềm thiết kế banner gian hàng'
      ],
      futureSkills2026: [
        'Tích hợp trợ lý AI tự động phản hồi tin nhắn khách hàng 24/7',
        'Phân tích dự báo tồn kho bằng học máy'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Toán học', 'Tiếng Anh', 'Tin học'],
      coreUniversitySubjects: [
        'Kinh tế số & Nguyên lý Thương mại điện tử',
        'Hệ thống thông tin quản lý (MIS)',
        'Hành vi mua sắm trực tuyến',
        'Thanh toán điện tử và an toàn giao dịch'
      ],
      specializedElectives: [
        'Quản trị sàn thương mại điện tử chuyên sâu',
        'Tiếp thị liên kết (Affiliate Marketing)',
        'Pháp luật kinh doanh trên không gian mạng',
        'Quản trị logistics chặng cuối (Last-mile Delivery)'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'E-commerce Operation Executive',
          averageSalary: '9 - 15 triệu VNĐ/tháng (+ thưởng doanh số sàn)',
          primaryResponsibilities: ['Quản lý giá và tồn kho', 'Đăng tải sản phẩm chuẩn SEO sàn', 'Tham gia các gói flash sale'],
          typicalEmployers: ['Thương hiệu bán lẻ D2C', 'Các nhãn hàng tiêu dùng', 'Đại lý vận hành sàn (E-commerce Enablers)']
        }
      ],
      midSenior: [
        {
          title: 'E-commerce Channel Manager / Category Lead',
          averageSalary: '25 - 45 triệu VNĐ/tháng',
          primaryResponsibilities: ['Chịu trách nhiệm tổng doanh số GMV trên sàn', 'Đàm phán chiến dịch độc quyền với Shopee/TikTok', 'Tối ưu chi phí hoa hồng sàn'],
          typicalEmployers: ['Unilever E-commerce', 'L’Oréal Online Division', 'Samsung E-store']
        }
      ],
      leadership: [
        {
          title: 'Head of E-Commerce / Giám đốc Kênh Số',
          averageSalary: '50 - 100+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Xây dựng toàn bộ hệ thống bán lẻ trực tuyến', 'Định hướng tích hợp đa kênh Omnichannel'],
          typicalEmployers: ['Tập đoàn bán lẻ', 'Chuỗi siêu thị', 'Unicorns công nghệ']
        }
      ],
      alternativePaths: ['Tự làm chủ chuỗi gian hàng Shopee/TikTok Shop mang lại doanh số tiền tỷ/tháng']
    },
    salaryRanges: {
      internship: '3 - 5 triệu VNĐ/tháng',
      entryLevel0to2Years: '9 - 15 triệu VNĐ/tháng (+ thưởng % doanh số)',
      midSenior3to5Years: '22 - 45 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '50 - 110+ triệu VNĐ/tháng',
      reportSources: ['Vietnam E-commerce White Book 2024-2025', 'TopCV Salary Report']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'Thấp đến Trung bình: AI hỗ trợ tạo ảnh mẫu và kịch bản, nhưng tư duy đàm phán hợp đồng ngành hàng và quản trị đơn hàng thực tế vẫn do nhân sự điều phối.',
      keyGrowthDrivers: ['Việt Nam lọt top 3 thị trường TMĐT tăng trưởng nhanh nhất Đông Nam Á', 'Sự thống trị của mô hình Shoppertainment (Mua sắm kết hợp giải trí Livestream)'],
      risksAndChallenges: ['Chính sách sàn thay đổi liên tục, phí sàn tăng cao']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Thương mại (TMU)',
        code: 'TMA',
        location: 'Hà Nội',
        cutoff2024: 26.5,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '24 - 36 triệu VNĐ/năm',
        strengths: 'Trường tiên phong đào tạo Thương mại điện tử bài bản đầu tiên tại miền Bắc'
      },
      {
        region: 'Nam',
        name: 'ĐH Kinh tế - Luật - ĐHQG TP.HCM (UEL)',
        code: 'QSK',
        location: 'TP.HCM',
        cutoff2024: 26.7,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '28 - 42 triệu VNĐ/năm',
        strengths: 'Khoa Hệ thống thông tin đào tạo TMĐT gắn liền với công nghệ số và pháp lý kinh tế số'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        code: 'KSA',
        location: 'TP.HCM',
        cutoff2024: 26.6,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '34 - 55 triệu VNĐ/năm',
        strengths: 'Chương trình chuẩn quốc tế, gắn kết với các sàn TMĐT lớn nhất VN'
      }
    ],
    whatYouStudy: {
      coreFoundations: ['Kinh tế số & Nguyên lý TMĐT', 'Hệ thống thông tin quản lý', 'Hành vi mua sắm trực tuyến', 'Thanh toán điện tử'],
      specializedSubjects: ['Quản trị sàn TMĐT', 'Tiếp thị liên kết (Affiliate)', 'Pháp luật không gian mạng', 'Logistics chặng cuối'],
      practicalSkills: ['Vận hành gian hàng Shopee, TikTok Shop', 'Chạy quảng cáo nội sàn', 'Phân tích dữ liệu tỷ lệ chuyển đổi'],
      exampleProjects: ['Xây dựng gian hàng bán lẻ thời trang đạt doanh số 100 triệu trong 1 tháng']
    },
    whatYouDo: {
      entryRoles: ['E-commerce Specialist', 'Shop Operation Executive', 'Livestream Coordinator'],
      seniorRoles: ['E-commerce Lead', 'Head of Online Business', 'Chủ gian hàng triệu đô'],
      workEnvironments: ['Các sàn Shopee, TikTok Shop', 'Nhãn hàng thời trang, mỹ phẩm, công nghệ', 'Doanh nghiệp xuất nhập khẩu số']
    },
    salaryBands: {
      internship: '3 - 5 triệu VNĐ/tháng',
      freshGrad: '9 - 15 triệu VNĐ/tháng',
      midLevel: '22 - 45 triệu VNĐ/tháng',
      management: '50 - 110+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Kinh doanh bán lẻ trực tuyến, tối ưu hóa gian hàng trên sàn và quản trị chuỗi cung ứng số.',
      aiImpact: 'TRUNG BÌNH: AI hỗ trợ viết mô tả sản phẩm và chatbox tự động, nhưng tư duy chiến lược bán hàng vẫn do người quyết định.',
      englishRole: 'ĐÒN BẨY: Cần thiết khi làm việc với đối tác sàn quốc tế hoặc làm thương mại điện tử xuyên biên giới (Amazon, Etsy).',
      freelancePotential: 'Rất cao (Làm dịch vụ setup gian hàng, chạy ads sàn, tư vấn bán hàng online).',
      agencyOrBusiness: 'CỰC KỲ CAO: Hầu hết sinh viên TMĐT sau khi tốt nghiệp đều tự kinh doanh gian hàng riêng.',
      creativeFreedom: 'Cao trong việc thiết kế concept livestream và chương trình khuyến mãi.',
      marketDemand2025_2030: 'Nhu cầu khổng lồ do thương mại số hóa 100%.',
      stability: 'Trung bình: Biến động theo sự thay đổi thuật toán và quy định của các nền tảng.',
      pressureLevel: 'Áp lực vận hành mùa cao điểm siêu sale (11.11, 12.12, Tết).',
      personalityFit: 'Nhanh nhẹn, thực tế, thích công nghệ bán hàng, thích nhìn thấy dòng tiền lưu thông.'
    },
    biasDebunking: {
      myth: '"Học Thương mại điện tử chỉ là học cách livestream và đóng gói hàng."',
      reality: 'Đó chỉ là công việc tay chân. Cử nhân TMĐT học về phân tích dữ liệu lớn, quản trị rủi ro thanh toán số, đàm phán hợp đồng nền tảng và tối ưu hóa hệ thống ERP.',
      emotionalTrap: 'Nghĩ rằng bán hàng online thì không cần học đại học.'
    },
    roadmap: {
      grade12Prep: 'Học chắc Toán và Tiếng Anh; Thử mở một tài khoản bán hàng nhỏ để hiểu cách tính phí sàn.',
      year1_2: 'Nắm chắc kiến thức kinh tế học và thương mại; Tự học các công cụ phân tích dữ liệu Looker Studio.',
      year3_4: 'Thực tập tại các Enablers hoặc phòng E-com của các nhãn hàng; Làm chủ quảng cáo nội sàn.',
      postGrad: 'Phát triển chuyên môn E-commerce xuyên biên giới (Cross-border E-com) hoặc tự xây dựng thương hiệu riêng.'
    }
  },

  // ==========================================
  // SECTOR 2: TRUYỀN THÔNG & BÁO CHÍ (COMMUNICATION)
  // ==========================================
  {
    id: 'truyen-thong-da-phuong-tien',
    code: '7320104',
    name: 'Truyền thông đa phương tiện & Công nghệ số',
    tagline: 'Kể chuyện bằng hình ảnh, công nghệ, âm thanh và kết nối cộng đồng',
    sector: 'Truyền thông & Báo chí',
    category: 'Truyền thông & Thiết kế',
    admissionBlocks: ['D01', 'A01', 'C00', 'D14'],
    riasecPrimary: ['A', 'E', 'S'],
    riasecScore: { R: 30, I: 40, A: 95, S: 70, E: 75, C: 45 },
    summary: 'Sự kết hợp giữa nghệ thuật thị giác, công nghệ kỹ thuật số và khoa học truyền thông nhằm sáng tạo các sản phẩm video, phim ảnh, mạng xã hội, podcast và sự kiện tác động sâu sắc đến nhận thức cộng đồng.',
    personalityTraits: [
      'Tư duy thẩm mỹ hiện đại, nhạy bén với xu hướng thời đại',
      'Thích giao tiếp, kết nối, không ngại xuất hiện trước đám đông',
      'Tâm hồn tự do, giàu cảm xúc, ghét sự rập khuôn gò bó',
      'Khả năng chịu áp lực chạy deadline xuyên đêm'
    ],
    suitableFor: [
      'Thích quay video ngắn, chụp ảnh, tự mày mò dựng clip trên CapCut/Premiere',
      'Thích tham gia hoạt động đoàn thể, tổ chức sự kiện tại trường cấp 3',
      'Có khả năng diễn đạt thông điệp cuốn hút qua cả hình ảnh và ngôn từ'
    ],
    unsuitableFor: [
      'Thích sự ổn định 8 tiếng/ngày, ngại thức khuya chạy dự án',
      'Khép kín, ngại tiếp xúc mạng xã hội hoặc sợ bị người khác nhận xét, chê bai'
    ],
    skills: {
      hardSkills: [
        'Kỹ thuật quay phim, ánh sáng trường quay và ghi âm chuyên nghiệp',
        'Hậu kỳ kỹ xảo hình ảnh và âm thanh (Premiere, After Effects, DaVinci Resolve)',
        'Kịch bản phân cảnh (Storyboarding) & Sáng tác kịch bản TVC',
        'Tổ chức và điều phối sự kiện truyền thông quy mô lớn'
      ],
      softSkills: [
        'Tư duy kể chuyện chạm cảm xúc (Emotional Storytelling)',
        'Giao tiếp thuyết phục và làm việc nhóm dưới áp lực cao',
        'Xử lý khủng hoảng truyền thông sơ cấp trên mạng xã hội'
      ],
      toolsAndSoftware: [
        'Adobe Creative Cloud (Premiere, After Effects, Photoshop, Illustrator)',
        'DaVinci Resolve',
        'CapCut Pro & Figma',
        'Generative AI tools (Midjourney, Runway Gen-3, Sora)'
      ],
      futureSkills2026: [
        'Đạo diễn ý tưởng bằng AI (AI Prompt Directing & Synthesis)',
        'Sản xuất nội dung không gian 3D và thực tế ảo (VR/AR Content)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Ngữ văn (Kịch bản & Cảm xúc)', 'Tiếng Anh (Tiếp cận công nghệ)', 'Toán hoặc Mỹ thuật'],
      coreUniversitySubjects: [
        'Lý thuyết truyền thông đại chúng & Dư luận xã hội',
        'Tư duy thị giác & Bố cục nghệ thuật nhiếp ảnh',
        'Kỹ thuật quay phim & Dựng video số',
        'Mỹ thuật truyền thông và thiết kế đồ họa 2D'
      ],
      specializedElectives: [
        'Sản xuất phim ngắn & Quảng cáo truyền hình (TVC)',
        'Quản trị truyền thông mạng xã hội nâng cao',
        'Tổ chức sự kiện & Kích hoạt thương hiệu',
        'Kỹ xảo hình ảnh chuyển động (Motion Graphics)'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Video Producer / Content Video Specialist',
          averageSalary: '9 - 15 triệu VNĐ/tháng',
          primaryResponsibilities: ['Lên kịch bản video', 'Trực tiếp quay và dựng hoàn thiện video ngắn', 'Theo dõi tương tác MXH'],
          typicalEmployers: ['Tòa soạn báo điện tử', 'Kênh truyền hình', 'Agency truyền thông', 'Doanh nghiệp có kênh TikTok mạnh']
        }
      ],
      midSenior: [
        {
          title: 'Creative Lead / Senior Video Producer',
          averageSalary: '20 - 38 triệu VNĐ/tháng',
          primaryResponsibilities: ['Định hướng phong cách nghệ thuật cho toàn bộ dự án', 'Chỉ đạo ekip quay dựng 10+ người', 'Làm việc trực tiếp với đạo diễn'],
          typicalEmployers: ['Production Houses lớn (Alien Media, May Production)', 'Hãng phim', 'Tập đoàn truyền thông']
        }
      ],
      leadership: [
        {
          title: 'Creative Director (Giám đốc sáng tạo) / Head of Media',
          averageSalary: '45 - 90+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Chịu trách nhiệm về toàn bộ dấu ấn sáng tạo và chiến lược nội dung của tổ chức'],
          typicalEmployers: ['Tập đoàn giải trí', 'Đài truyền hình quốc gia', 'Agency toàn cầu']
        }
      ],
      alternativePaths: ['Trở thành Content Creator / KOL độc lập', 'Mở Studio quay dựng ảnh cưới / sự kiện cao cấp riêng']
    },
    salaryRanges: {
      internship: '3 - 6 triệu VNĐ/tháng (kèm cơ hội nhận dự án quay ngoài)',
      entryLevel0to2Years: '9 - 15 triệu VNĐ/tháng (nhận thêm freelance: 18 - 25 triệu)',
      midSenior3to5Years: '20 - 40 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '45 - 95+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '1,200$ - 3,000$/tháng (khi dựng video freelance cho YouTuber nước ngoài)',
      reportSources: ['Navigos Salary Guide 2024-2025', 'TopCV Vietnam']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'Trung bình cao: AI tạo video và hình ảnh cực nhanh, nhưng khả năng thấu cảm con người, góc quay cảm xúc và nghệ thuật kể chuyện độc bản vẫn do con người quyết định.',
      keyGrowthDrivers: ['Bùng nổ video ngắn (Shorts/Reels/TikTok) trên mọi lĩnh vực', 'Mọi doanh nghiệp đều cần phòng media in-house'],
      risksAndChallenges: ['Cạn kiệt ý tưởng, áp lực tiến độ gấp gáp']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Học viện Báo chí và Tuyên truyền (AJC)',
        code: 'HBT',
        location: 'Hà Nội',
        cutoff2024: 27.25,
        targetBlock: 'D01/C00',
        tuitionPerYear: '22 - 40 triệu VNĐ/năm',
        accreditation: 'Bộ GD&ĐT',
        strengths: 'Cái nôi báo chí truyền thông hàng đầu cả nước, quan hệ truyền hình và báo giới sâu rộng'
      },
      {
        region: 'Bắc',
        name: 'Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
        code: 'BVH',
        location: 'Hà Nội',
        cutoff2024: 26.3,
        targetBlock: 'D01/A01',
        tuitionPerYear: '26 - 38 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Cực mạnh về mảng kỹ thuật số, công nghệ đa phương tiện, đồ họa máy tính và hiệu ứng'
      },
      {
        region: 'Nam',
        name: 'ĐH Khoa học Xã hội & Nhân văn - ĐHQG TP.HCM (USSH)',
        code: 'QSX',
        location: 'TP.HCM',
        cutoff2024: 27.2,
        targetBlock: 'D01/C00',
        tuitionPerYear: '28 - 45 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Khoa Báo chí & Truyền thông uy tín bậc nhất miền Nam, tư duy nền tảng nhân văn xuất sắc'
      },
      {
        region: 'Nam',
        name: 'Đại học FPT TP.HCM',
        code: 'FPT',
        location: 'TP.HCM',
        cutoff2024: 21.0,
        targetBlock: 'D01/A01',
        tuitionPerYear: '60 - 90 triệu VNĐ/năm',
        accreditation: 'ACBSP',
        strengths: 'Studio trường quay hiện đại, trang bị máy quay máy dựng tiêu chuẩn công nghiệp'
      }
    ],
    whatYouStudy: {
      coreFoundations: [
        'Lý thuyết truyền thông đại chúng & Dư luận xã hội',
        'Tư duy thị giác & Bố cục nghệ thuật nhiếp ảnh',
        'Kịch bản phân cảnh & Kể chuyện (Storytelling)',
        'Mỹ thuật truyền thông và thiết kế đồ họa 2D'
      ],
      specializedSubjects: [
        'Kỹ thuật quay phim, ánh sáng và sản xuất video số',
        'Hậu kỳ kỹ xảo âm thanh và hình ảnh (Premiere, After Effects)',
        'Quản trị truyền thông mạng xã hội (TikTok, Facebook, YouTube)',
        'Tổ chức sự kiện & Kích hoạt thương hiệu (Event Management)'
      ],
      practicalSkills: [
        'Sản xuất trọn gói video ngắn triệu view',
        'Lên concept chiến dịch truyền thông cộng đồng',
        'Sử dụng công cụ AI sáng tạo hình ảnh, video'
      ],
      exampleProjects: [
        'Sản xuất phim ngắn hoặc TVC quảng cáo 60 giây cho nhãn hàng thời trang',
        'Lên kế hoạch và điều phối triển lãm nghệ thuật kết hợp âm nhạc 500 khách'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Content Creator / Video Producer',
        'Chuyên viên quản trị mạng xã hội',
        'Video Editor / Motion Graphic Designer',
        'Trợ lý sản xuất sự kiện & quan hệ báo chí'
      ],
      seniorRoles: [
        'Creative Director (Giám đốc sáng tạo)',
        'Head of Communications / Giám đốc Truyền thông',
        'Chủ sở hữu Studio sản xuất nội dung (Production House)',
        'KOL / Content Creator độc lập với lượng theo dõi lớn'
      ],
      workEnvironments: [
        'Đài truyền hình, cơ quan báo chí điện tử, hãng phim',
        'Bộ phận truyền thông nội bộ và đối ngoại của các tập đoàn',
        'Agency quảng cáo, công ty giải trí và quản lý nghệ sĩ',
        'Làm việc tự do (Freelancer) bất kỳ quán cafe nào'
      ]
    },
    salaryBands: {
      internship: '3 - 6 triệu VNĐ/tháng',
      freshGrad: '9 - 15 triệu VNĐ/tháng',
      midLevel: '18 - 35 triệu VNĐ/tháng',
      management: '45 - 90+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Kể chuyện sáng tạo, sản xuất nội dung nghe nhìn, định hướng dư luận xã hội.',
      aiImpact: 'TRUNG BÌNH CAO: AI tạo video và ảnh phát triển mạnh, đòi hỏi nhân sự phải nâng tầm tư duy ý tưởng và cảm xúc.',
      englishRole: 'ĐÒN BẨY: Giúp tiếp cận trào lưu toàn cầu và hợp tác sản xuất với đối tác nước ngoài.',
      freelancePotential: 'CỰC KỲ CAO: Nhận làm video, chụp ảnh, quản lý fanpage tự do ở bất kỳ đâu.',
      agencyOrBusiness: 'RẤT CAO: Rất dễ lập nhóm bạn mở Media Studio, Production House riêng.',
      creativeFreedom: 'RẤT CAO: Được thỏa sức thể hiện cái tôi nghệ thuật và góc nhìn độc đáo.',
      marketDemand2025_2030: 'Mọi doanh nghiệp từ lớn đến nhỏ đều cần đội ngũ sản xuất nội dung video.',
      stability: 'Trung bình: Giờ giấc linh hoạt theo dự án, không theo chuẩn 8h-17h truyền thống.',
      pressureLevel: 'Áp lực về deadline và nỗi sợ cạn kiệt ý tưởng sáng tạo.',
      personalityFit: 'Năng động, giàu cảm xúc, thích khám phá, đam mê cái đẹp và công nghệ.'
    },
    biasDebunking: {
      myth: '"Học truyền thông chỉ là đi chơi, quay video vui vẻ trên TikTok là xong."',
      reality: 'Thực tế là bạn phải thức đến 3h sáng tại phim trường, vác chân máy nặng trịch, chỉnh sửa từng khung hình và chịu áp lực khách hàng bắt sửa lại 10 lần.',
      emotionalTrap: 'Bị hào quang của showbiz và các video lung linh trên mạng dẫn dắt.'
    },
    roadmap: {
      grade12Prep: 'Rèn luyện khả năng quan sát đời sống; Tự tập dựng clip CapCut; Giữ điểm Văn và Anh tốt.',
      year1_2: 'Làm chủ các phần mềm đồ họa và dựng phim Adobe; Tham gia ban truyền thông các CLB sinh viên.',
      year3_4: 'Đi thực tập tại Agency hoặc đài truyền hình; Xây dựng trang Portfolio cá nhân chuyên nghiệp.',
      postGrad: 'Xác định rõ thế mạnh: Biên kịch, Quay dựng (Production), hay Chiến lược nội dung (Creative Planner).'
    }
  },
  {
    id: 'quan-he-cong-chung',
    code: '7320108',
    name: 'Quan hệ công chúng (PR) & Quản trị danh tiếng',
    tagline: 'Kiến tạo niềm tin, quản trị rủi ro danh tiếng và kết nối đa phương',
    sector: 'Truyền thông & Báo chí',
    category: 'Truyền thông & Thiết kế',
    admissionBlocks: ['D01', 'C00', 'A01', 'D14'],
    riasecPrimary: ['E', 'S', 'A'],
    riasecScore: { R: 10, I: 55, A: 75, S: 85, E: 90, C: 50 },
    summary: 'Nghệ thuật xây dựng, duy trì và bảo vệ hình ảnh tích cực, mối quan hệ đôi bên cùng có lợi giữa doanh nghiệp/tổ chức với báo giới, chính phủ, đối tác và cộng đồng thông qua các thông điệp chiến lược.',
    personalityTraits: [
      'Giao tiếp khéo léo, tinh tế trong từng lời ăn tiếng nói',
      'Tâm lý điềm tĩnh, bản lĩnh trước các cuộc khủng hoảng truyền thông',
      'Kỹ năng viết thông cáo báo chí khúc chiết, chuẩn mực pháp lý',
      'Khả năng xây dựng và nuôi dưỡng mạng lưới quan hệ (Networking)'
    ],
    suitableFor: [
      'Thích kết nối người với người, tự tin đàm phán và thuyết phục',
      'Nhạy bén với các thông tin thời sự, chính trị, pháp luật xã hội',
      'Muốn trở thành người phát ngôn đại diện cho các tổ chức lớn'
    ],
    unsuitableFor: [
      'Nóng tính, dễ mất bình tĩnh khi bị công chúng hoặc báo chí chỉ trích',
      'Ngại xã giao, không thích tham gia các sự kiện ngoại giao đông người'
    ],
    skills: {
      hardSkills: [
        'Kỹ năng viết thông cáo báo chí (Press Release) và bài phát biểu lãnh đạo',
        'Kế hoạch quản trị khủng hoảng truyền thông (Crisis Management Plan)',
        'Tổ chức họp báo và quản lý phóng viên báo đài',
        'Đo lường chỉ số nhận diện báo chí (Share of Voice - SOV)'
      ],
      softSkills: [
        'Ngoại giao tinh tế & Xử lý tình huống nhạy cảm',
        'Xây dựng mối quan hệ tin cậy dài hạn với KOLs/nhà báo',
        'Thuyết trình trước công chúng và trả lời phỏng vấn trực tiếp'
      ],
      toolsAndSoftware: [
        'Công cụ lắng nghe mạng xã hội (Social Listening: Younet Media, Kompa)',
        'Cơ sở dữ liệu danh bạ báo chí chuyên nghiệp',
        'Canva / Slide presentation cao cấp'
      ],
      futureSkills2026: [
        'Quản trị rủi ro thông tin sai lệch do AI tạo ra (Deepfake & AI Crisis Control)',
        'Truyền thông phát triển bền vững và Trách nhiệm xã hội (ESG/CSR Communication)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Ngữ văn', 'Tiếng Anh', 'Lịch sử hoặc Giáo dục công dân'],
      coreUniversitySubjects: [
        'Lý thuyết quan hệ công chúng hiện đại',
        'Kỹ năng viết cho PR & Báo chí',
        'Quản trị khủng hoảng truyền thông',
        'Quan hệ báo chí & Dư luận xã hội'
      ],
      specializedElectives: [
        'Trách nhiệm xã hội của doanh nghiệp (CSR)',
        'Xây dựng thương hiệu cá nhân cho lãnh đạo (Executive Branding)',
        'Tổ chức họp báo & Sự kiện ngoại giao',
        'PR nội bộ và gắn kết nhân viên'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'PR Executive / Media Relations Specialist',
          averageSalary: '9 - 15 triệu VNĐ/tháng',
          primaryResponsibilities: ['Soạn thông cáo báo chí', 'Gửi bài và duy trì liên lạc với nhà báo', 'Lập báo cáo tổng hợp tin bài'],
          typicalEmployers: ['Tập đoàn lớn', 'PR Agency (Edelman, T&A Ogilvy, EloQ)', 'Tổ chức phi chính phủ NGO']
        }
      ],
      midSenior: [
        {
          title: 'PR Manager / Trưởng ban Đối ngoại',
          averageSalary: '25 - 45 triệu VNĐ/tháng',
          primaryResponsibilities: ['Quản lý quan hệ với cơ quan chức năng và báo chí', 'Xử lý khủng hoảng truyền thông', 'Duy trì chiến dịch CSR'],
          typicalEmployers: ['Ngân hàng', 'Tập đoàn bất động sản', 'Hãng hàng không', 'Công ty công nghệ']
        }
      ],
      leadership: [
        {
          title: 'Corporate Affairs Director / Giám đốc Đối ngoại',
          averageSalary: '60 - 120+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Cố vấn chính sách truyền thông cho Hội đồng quản trị', 'Bảo vệ uy tín thương hiệu ở tầm vĩ mô'],
          typicalEmployers: ['Tập đoàn đa quốc gia', 'Tập đoàn kinh tế lớn']
        }
      ],
      alternativePaths: ['Chuyên gia tư vấn xử lý khủng hoảng độc lập', 'Đại diện truyền thông cho nghệ sĩ, nhân vật nổi tiếng']
    },
    salaryRanges: {
      internship: '3 - 6 triệu VNĐ/tháng',
      entryLevel0to2Years: '9 - 15 triệu VNĐ/tháng',
      midSenior3to5Years: '22 - 45 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '55 - 120+ triệu VNĐ/tháng',
      reportSources: ['Navigos Salary Survey', 'Adecco Vietnam']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng cao',
      aiImpactAssessment: 'Thấp đến Trung bình: AI viết văn bản nhanh, nhưng lòng tin con người, nghệ thuật ngoại giao và xử lý khủng hoảng nhạy cảm hoàn toàn phụ thuộc vào bản lĩnh nhân sự.',
      keyGrowthDrivers: ['Mạng xã hội bùng nổ khiến doanh nghiệp đối mặt với rủi ro bị tẩy chay bất cứ lúc nào', 'Xu hướng phát triển bền vững ESG bắt buộc doanh nghiệp minh bạch thông tin'],
      risksAndChallenges: ['Áp lực tinh thần cực lớn khi phát sinh khủng hoảng truyền thông lúc nửa đêm']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Học viện Báo chí và Tuyên truyền (AJC)',
        code: 'HBT',
        location: 'Hà Nội',
        cutoff2024: 27.5,
        targetBlock: 'D01/C00',
        tuitionPerYear: '22 - 40 triệu VNĐ/năm',
        strengths: 'Khoa PR đầu tiên tại miền Bắc, mạng lưới quan hệ cơ quan truyền thông mạnh mẽ'
      },
      {
        region: 'Nam',
        name: 'Đại học Khoa học Xã hội & Nhân văn TP.HCM (USSH)',
        code: 'QSX',
        location: 'TP.HCM',
        cutoff2024: 26.5,
        targetBlock: 'D01/C00',
        tuitionPerYear: '28 - 45 triệu VNĐ/năm',
        strengths: 'Nền tảng báo chí học thuật và đạo đức truyền thông mẫu mực'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế - Tài chính TP.HCM (UEF)',
        code: 'UEF',
        location: 'TP.HCM',
        cutoff2024: 20.0,
        targetBlock: 'D01/A01',
        tuitionPerYear: '70 - 85 triệu VNĐ/năm',
        strengths: 'Môi trường song ngữ, nhiều hoạt động kết nối doanh nghiệp thực tế'
      }
    ],
    whatYouStudy: {
      coreFoundations: ['Lý thuyết quan hệ công chúng', 'Kỹ năng viết cho PR', 'Quản trị khủng hoảng', 'Dư luận xã hội'],
      specializedSubjects: ['Tổ chức họp báo', 'Trách nhiệm xã hội (CSR)', 'Xây dựng thương hiệu lãnh đạo', 'Quan hệ báo chí'],
      practicalSkills: ['Viết thông cáo báo chí chuẩn mực', 'Phỏng vấn và trả lời trước máy quay', 'Xử lý bão dư luận trên mạng'],
      exampleProjects: ['Thiết kế kế hoạch xử lý khủng hoảng ngộ độc thực phẩm cho chuỗi nhà hàng']
    },
    whatYouDo: {
      entryRoles: ['PR Executive', 'Media Relations Officer', 'Event Coordinator'],
      seniorRoles: ['PR Manager', 'Corporate Affairs Director', 'Phát ngôn viên tổ chức'],
      workEnvironments: ['Tập đoàn lớn', 'PR Agency', 'Cơ quan ngoại giao và tổ chức phi chính phủ']
    },
    salaryBands: {
      internship: '3 - 6 triệu VNĐ/tháng',
      freshGrad: '9 - 15 triệu VNĐ/tháng',
      midLevel: '22 - 45 triệu VNĐ/tháng',
      management: '55 - 120+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Xây dựng lòng tin, bảo vệ uy tín, kết nối báo chí và công chúng.',
      aiImpact: 'TRUNG BÌNH: AI viết thông cáo báo chí nhanh, nhưng không thể kết nối tình cảm con người hay xử lý khủng hoảng nhạy cảm.',
      englishRole: 'RẤT CAO: Giao tiếp với báo chí quốc tế và xử lý các tập đoàn FDI.',
      freelancePotential: 'Trung bình khá (Tư vấn truyền thông cá nhân, booking báo chí).',
      agencyOrBusiness: 'Cao: Mở công ty PR Agency, Booking Agency.',
      creativeFreedom: 'Trung bình: Phải thận trọng, luôn bám sát pháp lý và văn hóa tổ chức.',
      marketDemand2025_2030: 'Nhu cầu cao vì bất kỳ doanh nghiệp nào cũng sợ bị "tẩy chay" trên mạng xã hội.',
      stability: 'Khá cao trong khối doanh nghiệp vừa và lớn.',
      pressureLevel: 'Rất cao khi phát sinh khủng hoảng ngoài ý muốn.',
      personalityFit: 'Khéo léo, tinh tế trong lời ăn tiếng nói, biết lắng nghe, điềm tĩnh trước bão dư luận.'
    },
    biasDebunking: {
      myth: '"Làm PR là đi nhậu nhẹt, tặng quà và nịnh nọt nhà báo để viết bài khen."',
      reality: 'PR là môn khoa học quản trị thông điệp và niềm tin. Một kế hoạch PR chuẩn mực đòi hỏi nghiên cứu dữ liệu công chúng cực kỳ công phu và tuân thủ chuẩn mực đạo đức nghề nghiệp.',
      emotionalTrap: 'Nghĩ rằng PR chỉ cần có ngoại hình đẹp và tài ăn nói lanh lợi.'
    },
    roadmap: {
      grade12Prep: 'Rèn luyện khả năng viết cô đọng, khúc chiết; Đọc nhiều tin tức thời sự kinh tế xã hội; Trau dồi tiếng Anh giao tiếp lưu loát.',
      year1_2: 'Học sâu về tâm lý đám đông, xã hội học; Tham gia ban đối ngoại các sự kiện trường; Tích cực kết nối các anh chị tiền bối trong ngành.',
      year3_4: 'Thực tập tại các phòng truyền thông hoặc PR Agency; Tập soạn thảo tài liệu báo chí thực tế; Làm quen với giới phóng viên trẻ.',
      postGrad: 'Nâng cao năng lực quản trị rủi ro truyền thông và cố vấn chính sách cho ban lãnh đạo.'
    }
  },

  // ==========================================
  // SECTOR 3: NGÔN NGỮ & NGÔN NGỮ HỌC (LINGUISTICS)
  // ==========================================
  {
    id: 'ngon-ngu-anh',
    code: '7220201',
    name: 'Ngôn ngữ Anh & Biên phiên dịch chuyên nghiệp',
    tagline: 'Làm chủ ngôn ngữ, văn hóa học thuật và nghệ thuật chuyển ngữ toàn cầu',
    sector: 'Ngôn ngữ & Ngôn ngữ học',
    category: 'Khoa học Xã hội & Ngôn ngữ',
    admissionBlocks: ['D01', 'A01', 'D14', 'D09'],
    riasecPrimary: ['S', 'A', 'I'],
    riasecScore: { R: 10, I: 60, A: 70, S: 80, E: 35, C: 50 },
    summary: 'Chương trình đào tạo chuyên sâu về cấu trúc ngữ âm, cú pháp, ngữ nghĩa học, văn học các nước nói tiếng Anh, cùng kỹ năng biên phiên dịch cấp cao (dịch nối tiếp, dịch cabin) và tiếng Anh thương mại quốc tế.',
    personalityTraits: [
      'Tình yêu sâu sắc với ngôn từ, ngữ pháp và sắc thái biểu cảm',
      'Tính cách tỉ mỉ, kiên nhẫn tra cứu từng thuật ngữ chính xác',
      'Khả năng đọc hiểu văn bản học thuật chuyên sâu',
      'Tư duy liên văn hóa và nhạy cảm ngôn ngữ'
    ],
    suitableFor: [
      'Đam mê đọc sách, dịch thuật tài liệu, thích nghiên cứu từ nguyên học',
      'Định hướng trở thành giảng viên, giáo viên luyện thi chứng chỉ quốc tế (IELTS, SAT)',
      'Muốn làm phiên dịch viên cabin tại các hội nghị thượng đỉnh quốc tế'
    ],
    unsuitableFor: [
      'Chỉ muốn học tiếng Anh để giao tiếp thương mại thông thường (nên học Kinh tế hoặc Marketing)',
      'Ghét các môn ngữ pháp cổ, lịch sử biến đổi ngôn ngữ và tác phẩm văn học kinh điển'
    ],
    skills: {
      hardSkills: [
        'Kỹ năng Biên dịch tài liệu chuyên ngành (Tài chính, Y tế, Luật pháp, Công nghệ)',
        'Kỹ năng Phiên dịch nối tiếp và Phiên dịch cabin (Simultaneous Interpreting)',
        'Phương pháp giảng dạy tiếng Anh quốc tế (TESOL/CELTA Methodology)',
        'Năng lực đọc hiểu và viết học thuật đạt trình độ C1–C2 (IELTS 8.0+)'
      ],
      softSkills: [
        'Giao tiếp liên văn hóa (Cross-cultural communication)',
        'Khả năng ghi nhớ ngắn hạn xuất sắc phục vụ phiên dịch',
        'Sự kiên nhẫn, điềm tĩnh và phong thái đĩnh đạc khi chuyển ngữ'
      ],
      toolsAndSoftware: [
        'Phần mềm hỗ trợ dịch thuật CAT Tools (Trados, memoQ)',
        'Bộ công cụ kiểm tra ngữ pháp nâng cao',
        'Nền tảng giảng dạy trực tuyến (LMS, Canvas, Zoom Education)'
      ],
      futureSkills2026: [
        'Kỹ năng hậu biên tập bản dịch AI (Machine Translation Post-Editing - MTPE)',
        'Bản địa hóa trải nghiệm người dùng đa văn hóa trong kỷ nguyên số'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Tiếng Anh (Môn mũi nhọn)', 'Ngữ văn (Vốn từ tiếng Việt phong phú)', 'Toán hoặc Lịch sử'],
      coreUniversitySubjects: [
        'Ngữ âm học & Âm vị học tiếng Anh (Phonetics & Phonology)',
        'Hình thái học & Cú pháp học nâng cao (Syntax & Morphology)',
        'Ngữ nghĩa học & Ngữ dụng học (Semantics & Pragmatics)',
        'Văn minh & Văn học các nước nói tiếng Anh'
      ],
      specializedElectives: [
        'Lý thuyết & Thực hành Biên dịch chuyên ngành',
        'Phiên dịch cabin hội nghị quốc tế',
        'Phương pháp giảng dạy tiếng Anh hiện đại (ELT/TESOL)',
        'Tiếng Anh thương mại & Soạn thảo hợp đồng quốc tế'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Biên dịch viên / Chuyên viên bản địa hóa nội dung',
          averageSalary: '8 - 14 triệu VNĐ/tháng',
          primaryResponsibilities: ['Dịch tài liệu kỹ thuật, pháp lý, y tế', 'Hiệu đính bản dịch máy', 'Bản địa hóa game và phần mềm'],
          typicalEmployers: ['Nhà xuất bản', 'Công ty dịch thuật quốc tế', 'Tập đoàn công nghệ nước ngoài']
        },
        {
          title: 'Giáo viên tiếng Anh / Gia sư IELTS, TOEIC',
          averageSalary: '12 - 25 triệu VNĐ/tháng',
          primaryResponsibilities: ['Giảng dạy các lớp chứng chỉ', 'Soạn giáo án và chấm bài thi viết/nói', 'Kèm cặp học viên'],
          typicalEmployers: ['Hệ thống trung tâm Anh ngữ lớn (VUS, ILA, The IELTS Workshop)', 'Trường song ngữ']
        }
      ],
      midSenior: [
        {
          title: 'Phiên dịch viên Cabin tự do (Freelance Conference Interpreter)',
          averageSalary: '30 - 60+ triệu VNĐ/tháng (Thù lao tính 200$ - 500$/buổi)',
          primaryResponsibilities: ['Dịch đồng thời trong buồng cabin tại các diễn đàn kinh tế, hội nghị quốc tế'],
          typicalEmployers: ['Các tổ chức Liên Hợp Quốc', 'Đại sứ quán', 'Doanh nghiệp đa quốc gia']
        },
        {
          title: 'Academic Manager / Giám đốc Học vụ',
          averageSalary: '28 - 45 triệu VNĐ/tháng',
          primaryResponsibilities: ['Quản lý chất lượng đào tạo', 'Thiết kế chương trình giảng dạy', 'Tuyển dụng và đào tạo giáo viên'],
          typicalEmployers: ['Tập đoàn giáo dục', 'Học viện khảo thí quốc tế']
        }
      ],
      leadership: [
        {
          title: 'Chủ sáng lập Học viện Ngoại ngữ / Trung tâm khảo thí',
          averageSalary: '60 - 150+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Điều hành toàn bộ hệ thống đào tạo ngoại ngữ và luyện thi chứng chỉ'],
          typicalEmployers: ['Doanh nghiệp giáo dục của bản thân']
        }
      ],
      alternativePaths: ['Chuyên viên đối ngoại ngoại giao', 'Biên tập viên nhà xuất bản quốc tế']
    },
    salaryRanges: {
      internship: '3 - 6 triệu VNĐ/tháng (Gia sư IELTS: 300k - 600k/buổi)',
      entryLevel0to2Years: '8 - 14 triệu VNĐ/tháng (Giảng dạy giỏi: 18 - 28 triệu)',
      midSenior3to5Years: '20 - 45 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '45 - 90+ triệu VNĐ/tháng',
      reportSources: ['Navigos Salary Report 2024-2025', 'Khảo sát việc làm ULIS & HANU']
    },
    marketOutlook: {
      hiringDemandTrend: 'Cạnh tranh gắt gao',
      aiImpactAssessment: 'RẤT CAO: AI dịch thuật (DeepL, Gemini, GPT-4o) đã làm biến mất các công việc dịch thuật văn bản cơ bản. Thị trường chuyển dịch mạnh sang nhân sự giảng dạy chứng chỉ chuyên sâu và phiên dịch cabin thời gian thực.',
      keyGrowthDrivers: ['Nhu cầu luyện thi chứng chỉ quốc tế (IELTS, SAT) để xét tuyển đại học và du học tiếp tục tăng cao'],
      risksAndChallenges: ['Bão hòa ở nhóm sinh viên chỉ có khả năng dịch chữ thô mà thiếu kỹ năng chuyên ngành kép']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Ngoại ngữ - ĐHQG Hà Nội (ULIS)',
        code: 'QHF',
        location: 'Hà Nội',
        cutoff2024: '35.8 (Tiếng Anh x2)',
        targetBlock: 'D01',
        tuitionPerYear: '22 - 35 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Chuẩn học thuật số 1 miền Bắc về sư phạm và nghiên cứu ngôn ngữ học'
      },
      {
        region: 'Bắc',
        name: 'Đại học Hà Nội (HANU)',
        code: 'NHF',
        location: 'Hà Nội',
        cutoff2024: '34.2 (Tiếng Anh x2)',
        targetBlock: 'D01',
        tuitionPerYear: '24 - 38 triệu VNĐ/năm',
        accreditation: 'Bộ GD&ĐT',
        strengths: 'Môi trường 100% tiếng Anh, đào tạo biên phiên dịch thực chiến nhất miền Bắc'
      },
      {
        region: 'Bắc',
        name: 'Đại học Ngoại thương (FTU Hà Nội)',
        code: 'NTH',
        location: 'Hà Nội',
        cutoff2024: 27.5,
        targetBlock: 'D01',
        tuitionPerYear: '25 - 45 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Chuyên sâu tiếng Anh thương mại, sinh viên cực kỳ năng động'
      },
      {
        region: 'Nam',
        name: 'ĐH Khoa học Xã hội & Nhân văn - ĐHQG TP.HCM (USSH)',
        code: 'QSX',
        location: 'TP.HCM',
        cutoff2024: 26.2,
        targetBlock: 'D01',
        tuitionPerYear: '28 - 42 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Khoa Ngữ văn Anh lâu đời nhất miền Nam, nền tảng văn hóa văn học cực sâu'
      },
      {
        region: 'Nam',
        name: 'Đại học Sư phạm TP.HCM (HCMUE)',
        code: 'SPS',
        location: 'TP.HCM',
        cutoff2024: 25.75,
        targetBlock: 'D01',
        tuitionPerYear: '20 - 30 triệu VNĐ/năm',
        accreditation: 'Bộ GD&ĐT',
        strengths: 'Cái nôi đào tạo giáo viên tiếng Anh hàng đầu phía Nam'
      }
    ],
    whatYouStudy: {
      coreFoundations: [
        'Ngữ âm học & Âm vị học tiếng Anh',
        'Hình thái học & Cú pháp học nâng cao',
        'Ngữ nghĩa học & Ngữ dụng học (Semantics & Pragmatics)',
        'Văn minh & Văn học các nước nói tiếng Anh'
      ],
      specializedSubjects: [
        'Lý thuyết biên dịch & Bản địa hóa nội dung số',
        'Phiên dịch nối tiếp & Phiên dịch đồng thời (Cabin)',
        'Phương pháp giảng dạy tiếng Anh chuẩn quốc tế (TESOL/ELT)',
        'Tiếng Anh học thuật & Đàm phán thương mại'
      ],
      practicalSkills: [
        'Năng lực đọc hiểu và viết luận đạt trình độ C1–C2',
        'Kỹ năng chọn lọc từ ngữ chính xác, bản địa hóa thông điệp',
        'Thuyết trình song ngữ trước hội nghị lớn'
      ],
      exampleProjects: [
        'Biên dịch và hiệu đính một cuốn sách phi hư cấu 200 trang',
        'Thiết kế giáo án giảng dạy tiếng Anh tương tác cho trung tâm ngoại ngữ'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Biên dịch viên / Chuyên viên bản địa hóa nội dung',
        'Giáo viên tiếng Anh / Gia sư luyện thi IELTS, TOEIC',
        'Chuyên viên đối ngoại / Thư ký giám đốc tại các tập đoàn FDI',
        'Điều phối viên dự án quốc tế / Tổ chức phi chính phủ (NGO)'
      ],
      seniorRoles: [
        'Phiên dịch viên cabin cấp cao tại các hội nghị quốc tế',
        'Chủ sáng lập học viện ngoại ngữ / Trung tâm khảo thí',
        'Trưởng phòng Quan hệ Quốc tế / Giám đốc học vụ',
        'Giám đốc Bản địa hóa (Localization Lead) tập đoàn công nghệ'
      ],
      workEnvironments: [
        'Hệ thống trường học quốc tế, học viện, trung tâm ngoại ngữ',
        'Nhà xuất bản, công ty phát hành phim ảnh và bản địa hóa game',
        'Tập đoàn đa quốc gia cần nhân sự làm cầu nối văn hóa ngôn ngữ',
        'Làm việc tự do (Freelance Translator) nhận thù lao theo giờ/dự án'
      ]
    },
    salaryBands: {
      internship: '3 - 6 triệu VNĐ/tháng',
      freshGrad: '8 - 14 triệu VNĐ/tháng',
      midLevel: '16 - 32 triệu VNĐ/tháng',
      management: '35 - 75+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Cấu trúc ngôn ngữ, ngữ âm, ngữ nghĩa, văn hóa văn học và biên phiên dịch.',
      aiImpact: 'RẤT CAO: AI dịch thuật (DeepL, Gemini, GPT) đã làm biến mất các công việc dịch văn bản thô. Cần kỹ năng giảng dạy hoặc bản địa hóa chuyên ngành sâu.',
      englishRole: 'CỐT LÕI: Bản thân ngôn ngữ chính là đối tượng nghiên cứu và sản phẩm tạo ra tiền.',
      freelancePotential: 'Cao: Dạy học online, chấm bài thi, dịch sách, biên tập tài liệu.',
      agencyOrBusiness: 'Trung bình: Thường mở trung tâm tiếng Anh hoặc công ty dịch thuật.',
      creativeFreedom: 'Trung bình: Phải bám sát cấu trúc ngữ pháp và tinh thần nguyên bản của tài liệu.',
      marketDemand2025_2030: 'Bão hòa ở phân khúc dịch thô; Cực kỳ khát nhân lực giỏi giảng dạy chứng chỉ chuyên sâu.',
      stability: 'Cao trong ngành giáo dục và nghiên cứu.',
      pressureLevel: 'Áp lực về độ chính xác tỉ mỉ và tính kiên nhẫn.',
      personalityFit: 'Thích tĩnh lặng, đọc nhiều sách, tỉ mỉ từng con chữ, kiên trì, đam mê phân tích sắc thái biểu đạt.'
    },
    biasDebunking: {
      myth: '"Thích học môn tiếng Anh ở trường cấp 3 thì vào đại học nên chọn Ngôn ngữ Anh để nói tiếng Anh lưu loát hơn."',
      reality: 'Ở đại học bạn không học nghe-nói giao tiếp vui nhộn như ở trung tâm, mà học cấu tạo vòm họng, lịch sử ngôn ngữ, ngữ pháp cổ và dịch thuật tài chính khô khan. Nếu chỉ muốn dùng tiếng Anh tốt cho công việc, học Kinh tế hay Truyền thông hiệu quả hơn nhiều.',
      emotionalTrap: 'Đánh đồng "sở thích học môn tiếng Anh" với "làm nghề ngôn ngữ cả đời".'
    },
    roadmap: {
      grade12Prep: 'Ôn chắc D01 tiếng Anh đạt 9.0+; Thi chứng chỉ IELTS sớm (7.0+) để xét tuyển thẳng.',
      year1_2: 'Xây dựng vốn từ vựng học thuật C1-C2; Tham gia câu lạc bộ tranh biện tiếng Anh.',
      year3_4: 'Chọn chuyên ngành hẹp (Biên phiên dịch / Sư phạm / Thương mại); Học thêm văn bằng 2 hoặc chứng chỉ nghiệp vụ (Marketing/Xuất nhập khẩu).',
      postGrad: 'Lấy chứng chỉ quốc tế (CELTA, DELTA nếu dạy học) hoặc Thạc sĩ Quản lý Giáo dục.'
    }
  },
  {
    id: 'su-pham-tieng-anh',
    code: '7140231',
    name: 'Sư phạm Tiếng Anh',
    tagline: 'Truyền cảm hứng ngôn ngữ, phương pháp giáo dục hiện đại và sứ mệnh trồng người',
    sector: 'Ngôn ngữ & Ngôn ngữ học',
    category: 'Khoa học Xã hội & Ngôn ngữ',
    admissionBlocks: ['D01', 'A01'],
    riasecPrimary: ['S', 'A', 'I'],
    riasecScore: { R: 10, I: 55, A: 60, S: 95, E: 45, C: 60 },
    summary: 'Ngành học đào tạo giáo viên tiếng Anh chuẩn mực từ bậc phổ thông đến đại học, kết hợp giữa năng lực tiếng Anh C1-C2 và phương pháp sư phạm tâm lý giáo dục hiện đại.',
    personalityTraits: [
      'Lòng yêu nghề, yêu trẻ, kiên nhẫn và giàu lòng trắc ẩn',
      'Kỹ năng truyền đạt khúc chiết, truyền cảm hứng học tập',
      'Phong thái mô phạm, đạo đức nhà giáo mẫu mực',
      'Khả năng quản lý lớp học và thấu hiểu tâm sinh lý học sinh'
    ],
    suitableFor: [
      'Thích giảng giải bài tập cho bạn bè, thích đứng trên bục giảng',
      'Muốn công việc ổn định, được xã hội tôn kính, thời gian linh hoạt hơn doanh nghiệp'
    ],
    unsuitableFor: [
      'Thiếu kiên nhẫn với học sinh chậm hiểu, dễ nổi nóng',
      'Thích môi trường cạnh tranh khốc liệt thương trường'
    ],
    skills: {
      hardSkills: [
        'Thiết kế giáo án chuẩn khung chương trình Bộ GD&ĐT và Cambridge',
        'Ứng dụng phương pháp giảng dạy tương tác (CLIL, Task-based Learning)',
        'Kỹ thuật kiểm tra đánh giá năng lực ngoại ngữ học sinh'
      ],
      softSkills: ['Quản lý lớp học', 'Truyền cảm hứng', 'Lắng nghe và tư vấn tâm lý học sinh'],
      toolsAndSoftware: ['PowerPoint/Canva bài giảng', 'Kahoot, Quizizz, Padlet', 'Hệ thống LMS'],
      futureSkills2026: ['Ứng dụng AI cá nhân hóa lộ trình học cho từng học sinh']
    },
    requiredSubjects: {
      highSchoolSubjects: ['Tiếng Anh', 'Ngữ văn', 'Toán'],
      coreUniversitySubjects: ['Tâm lý học lứa tuổi & Giáo dục học', 'Phương pháp giảng dạy tiếng Anh', 'Ngữ âm & Cú pháp học'],
      specializedElectives: ['Giảng dạy tiếng Anh cho trẻ em (TEYL)', 'Kiểm tra đánh giá ngoại ngữ', 'Thiết kế học liệu số']
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Giáo viên Tiếng Anh trường công lập / trường tư thục / trường quốc tế',
          averageSalary: '10 - 22 triệu VNĐ/tháng (Trường quốc tế: 18 - 35 triệu)',
          primaryResponsibilities: ['Giảng dạy theo thời khóa biểu', 'Chủ nhiệm lớp', 'Họp phụ huynh'],
          typicalEmployers: ['Trường THPT công lập', 'Hệ thống Vinschool, Marie Curie', 'Trường Quốc tế']
        }
      ],
      midSenior: [
        {
          title: 'Tổ trưởng chuyên môn / Chuyên viên Sở GD&ĐT',
          averageSalary: '20 - 35 triệu VNĐ/tháng',
          primaryResponsibilities: ['Chỉ đạo chuyên môn', 'Ra đề thi học sinh giỏi', 'Tập huấn giáo viên'],
          typicalEmployers: ['Các trường chuyên, Sở Giáo dục']
        }
      ],
      leadership: [
        {
          title: 'Hiệu trưởng / Giám đốc Học viện Giáo dục',
          averageSalary: '40 - 80+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Điều hành toàn bộ hoạt động trường học'],
          typicalEmployers: ['Hệ thống trường liên cấp tư thục']
        }
      ],
      alternativePaths: ['Mở lớp dạy thêm tại nhà hoặc trung tâm luyện thi riêng có thu nhập rất cao']
    },
    salaryRanges: {
      internship: 'Thực tập sư phạm tại trường phổ thông (có hỗ trợ sinh hoạt phí theo Nghị định 116)',
      entryLevel0to2Years: '10 - 20 triệu VNĐ/tháng',
      midSenior3to5Years: '20 - 40 triệu VNĐ/tháng (kết hợp dạy thêm/luyện thi)',
      leadExecutive5PlusYears: '35 - 70+ triệu VNĐ/tháng',
      reportSources: ['Chính sách lương giáo viên mới 2024-2025', 'Khảo sát ĐH Sư phạm']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng cao',
      aiImpactAssessment: 'Thấp: Dạy học là truyền cảm hứng và bồi dưỡng nhân cách, AI không thể thay thế trái tim và sự động viên của người thầy.',
      keyGrowthDrivers: ['Chương trình GDPT mới tăng cường thời lượng tiếng Anh', 'Các trường tư thục và song ngữ mở rộng liên tục'],
      risksAndChallenges: ['Áp lực từ phía phụ huynh và sự kỳ vọng điểm số thi cử']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Trường ĐH Ngoại ngữ - ĐHQG Hà Nội (ULIS)',
        code: 'QHF',
        location: 'Hà Nội',
        cutoff2024: '36.5 (Tiếng Anh x2)',
        targetBlock: 'D01',
        tuitionPerYear: 'Miễn học phí theo Nghị định 116',
        strengths: 'Đỉnh cao đào tạo sư phạm tiếng Anh miền Bắc, tuyển chọn đầu vào gắt gao'
      },
      {
        region: 'Bắc',
        name: 'Đại học Sư phạm Hà Nội (HNUE)',
        code: 'SPH',
        location: 'Hà Nội',
        cutoff2024: 27.5,
        targetBlock: 'D01',
        tuitionPerYear: 'Miễn học phí + Trợ cấp sinh hoạt phí',
        strengths: 'Cái nôi sư phạm truyền thống số 1 Việt Nam'
      },
      {
        region: 'Nam',
        name: 'Đại học Sư phạm TP.HCM (HCMUE)',
        code: 'SPS',
        location: 'TP.HCM',
        cutoff2024: 26.8,
        targetBlock: 'D01',
        tuitionPerYear: 'Miễn học phí + Trợ cấp sinh hoạt phí',
        strengths: 'Thương hiệu sư phạm danh giá nhất miền Nam'
      }
    ],
    whatYouStudy: {
      coreFoundations: ['Tâm lý học lứa tuổi & Giáo dục học', 'Phương pháp giảng dạy tiếng Anh', 'Ngữ âm & Cú pháp học'],
      specializedSubjects: ['Kiểm tra đánh giá ngoại ngữ', 'Thiết kế bài giảng điện tử', 'Quản lý lớp học'],
      practicalSkills: ['Soạn giáo án chuẩn', 'Thuyết trình sư phạm', 'Tạo trò chơi học tập tương tác'],
      exampleProjects: ['Thiết kế trọn vẹn chuyên đề bài giảng tiếng Anh lớp 10 theo phương pháp mới']
    },
    whatYouDo: {
      entryRoles: ['Giáo viên tiếng Anh trường công / tư / quốc tế', 'Gia sư luyện thi'],
      seniorRoles: ['Tổ trưởng chuyên môn', 'Chuyên viên Sở GD&ĐT', 'Hiệu trưởng'],
      workEnvironments: ['Trường học các cấp', 'Trung tâm giáo dục', 'Học viện khảo thí']
    },
    salaryBands: {
      internship: 'Thực tập sư phạm (nhận sinh hoạt phí)',
      freshGrad: '10 - 20 triệu VNĐ/tháng',
      midLevel: '20 - 40 triệu VNĐ/tháng',
      management: '35 - 70+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Phương pháp sư phạm, tâm lý giáo dục và làm chủ ngoại ngữ học thuật.',
      aiImpact: 'THẤP: AI không thể thay thế sự động viên tình cảm, cái ôm và sự uốn nắn nhân cách của người thầy.',
      englishRole: 'CỐT LÕI: Kiến thức tiếng Anh là môn học giảng dạy chính.',
      freelancePotential: 'Rất cao (Dạy kèm online, soạn học liệu bán trên mạng).',
      agencyOrBusiness: 'Khá cao: Tự mở lớp học tại gia hoặc trung tâm bồi dưỡng văn hóa.',
      creativeFreedom: 'Khá cao trong việc thiết kế trò chơi và cách thức truyền đạt bài giảng.',
      marketDemand2025_2030: 'Luôn luôn khát giáo viên tiếng Anh giỏi tại mọi địa phương.',
      stability: 'CỰC KỲ CAO: Nghề giáo viên có tính ổn định và ít bị sa thải đột ngột.',
      pressureLevel: 'Áp lực về thành tích học sinh và kỳ vọng của phụ huynh.',
      personalityFit: 'Kiên nhẫn, mẫu mực, yêu trẻ, truyền cảm hứng, lắng nghe tốt.'
    },
    biasDebunking: {
      myth: '"Học sư phạm lương ba cọc ba đồng, nghèo lắm."',
      reality: 'Lương cơ sở trường công vừa được điều chỉnh tăng mạnh; đặc biệt giáo viên tiếng Anh dạy tại các trường tư thục, quốc tế hoặc dạy thêm luyện thi có thu nhập 30-50 triệu/tháng là rất phổ biến.',
      emotionalTrap: 'Sợ gò bó trong môi trường trường học mà bỏ qua cơ hội dạy học tại các trường quốc tế năng động.'
    },
    roadmap: {
      grade12Prep: 'Ôn chắc khối D01 đạt 26.5+; Rèn luyện khả năng nói lưu loát, phát âm chuẩn.',
      year1_2: 'Hoàn thiện chứng chỉ C1/IELTS 7.5+; Đi làm trợ giảng tại các trung tâm để cọ xát lớp học thật.',
      year3_4: 'Đi kiến tập và thực tập sư phạm; Soạn giáo án mẫu; Thi đỗ viên chức hoặc apply trường quốc tế.',
      postGrad: 'Học thạc sĩ Phương pháp Giảng dạy (MA TESOL) để thăng tiến lên tổ trưởng hoặc giảng viên.'
    }
  },

  // ==========================================
  // SECTOR 4: CÔNG NGHỆ THÔNG TIN & TRÍ TUỆ NHÂN TẠO
  // ==========================================
  {
    id: 'cong-nghe-thong-tin',
    code: '7480201',
    name: 'Công nghệ thông tin & Kỹ thuật phần mềm',
    tagline: 'Xây dựng phần mềm, kiến trúc hệ thống và giải pháp số chuyển đổi toàn cầu',
    sector: 'Công nghệ thông tin & AI',
    category: 'Công nghệ & Kỹ thuật',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['I', 'R', 'C'],
    riasecScore: { R: 60, I: 95, A: 40, S: 25, E: 45, C: 85 },
    summary: 'Ngành học nghiên cứu về thuật toán, cấu trúc dữ liệu, kiến trúc phần mềm, bảo mật, và phát triển các ứng dụng di động, web, điện toán đám mây cho doanh nghiệp toàn cầu.',
    personalityTraits: [
      'Tư duy logic & giải quyết vấn đề bằng nguyên lý gốc',
      'Tính kiên nhẫn cao, không nản lòng khi debug lỗi',
      'Khả năng tự học công nghệ mới liên tục (Lifelong learning)',
      'Tập trung sâu nhiều giờ trước màn hình máy tính'
    ],
    suitableFor: [
      'Thích mày mò máy tính, chơi game muốn hiểu cơ chế hoạt động đằng sau',
      'Học khá môn Toán (đặc biệt đại số, logic, xác suất thống kê)',
      'Thích cảm giác tự tay tạo ra sản phẩm chạy được cho hàng nghìn người dùng',
      'Muốn có cơ hội làm việc Remote cho công ty nước ngoài nhận lương USD'
    ],
    unsuitableFor: [
      'Ngại ngồi một chỗ lâu, thích di chuyển gặp gỡ giao tiếp liên tục',
      'Chỉ muốn học 4 năm xong bằng là xong, ngại việc công nghệ lỗi thời sau mỗi 2 năm',
      'Sợ toán, ghét tư duy phân tích cú pháp và quy tắc logic khắt khe'
    ],
    skills: {
      hardSkills: [
        'Toán rời rạc & Đại số tuyến tính',
        'Cấu trúc dữ liệu & Giải thuật nâng cao',
        'Nguyên lý Hệ điều hành & Kiến trúc máy tính',
        'Lập trình hướng đối tượng (OOP với Java, C++, Python)'
      ],
      softSkills: [
        'Tư duy phản biện (Critical Thinking)',
        'Giao tiếp kỹ thuật (Technical Communication)',
        'Làm việc nhóm theo mô hình Agile/Scrum'
      ],
      toolsAndSoftware: [
        'Git & GitHub',
        'Docker & Kubernetes',
        'VS Code / IntelliJ IDEA',
        'PostgreSQL / MongoDB',
        'AWS / GCP Cloud'
      ],
      futureSkills2026: [
        'Lập trình cùng trợ lý AI (AI-Assisted Engineering với Cursor, Copilot)',
        'Kiến trúc đám mây không máy chủ (Serverless & Microservices)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Toán học (Logic & Đại số)', 'Vật lý (Tư duy mạch & máy móc)', 'Tiếng Anh'],
      coreUniversitySubjects: [
        'Cấu trúc dữ liệu & Giải thuật',
        'Kiến trúc máy tính & Mạng máy tính',
        'Cơ sở dữ liệu quan hệ & NoSQL',
        'Kỹ thuật phần mềm'
      ],
      specializedElectives: [
        'Phát triển ứng dụng Web Fullstack',
        'Lập trình di động iOS/Android',
        'Điện toán đám mây & DevOps',
        'An toàn và bảo mật hệ thống thông tin'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Junior Software Engineer (Frontend / Backend / Fullstack)',
          averageSalary: '12 - 20 triệu VNĐ/tháng',
          primaryResponsibilities: ['Phát triển tính năng phần mềm theo yêu cầu', 'Viết unit test', 'Sửa lỗi hệ thống'],
          typicalEmployers: ['FPT Software', 'Viettel', 'VNG', 'One Mount', 'Shopee']
        }
      ],
      midSenior: [
        {
          title: 'Senior Developer / Tech Lead',
          averageSalary: '30 - 55 triệu VNĐ/tháng (1,500$ - 2,500$)',
          primaryResponsibilities: ['Thiết kế kiến trúc module', 'Review code cho đàn em', 'Tối ưu hiệu năng hệ thống chịu tải cao'],
          typicalEmployers: ['Tập đoàn công nghệ nước ngoài', 'Ngân hàng số', 'Unicorns']
        }
      ],
      leadership: [
        {
          title: 'Software Architect / Chief Technology Officer (CTO)',
          averageSalary: '70 - 150+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Quyết định toàn bộ hạ tầng kỹ thuật và công nghệ của công ty'],
          typicalEmployers: ['Tech Enterprises', 'Startups giai đoạn Series A/B']
        }
      ],
      alternativePaths: ['Làm việc Remote toàn thời gian nhận lương USD cho các công ty Mỹ/Châu Âu (2,000$ - 5,000$)']
    },
    salaryRanges: {
      internship: '4 - 8 triệu VNĐ/tháng',
      entryLevel0to2Years: '12 - 22 triệu VNĐ/tháng (xuất sắc có thể đạt 25 - 35 triệu)',
      midSenior3to5Years: '28 - 55 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '65 - 150+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '2,000$ - 5,000$/tháng',
      reportSources: ['ITviec Vietnam Developer Salary Report 2024', 'TopDev Market Report']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'TRUNG BÌNH CAO: AI có thể tự sinh code cơ bản rất nhanh. Doanh nghiệp cắt giảm lập trình viên học việc (Fresher thụ động) và săn đón kỹ sư có tư duy kiến trúc và kiểm thử chất lượng cao.',
      keyGrowthDrivers: ['Chuyển đổi số quốc gia và nhu cầu bảo mật thông tin gia tăng'],
      risksAndChallenges: ['Kiến thức công nghệ đào thải rất nhanh sau mỗi 2 năm']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Bách Khoa Hà Nội (HUST)',
        code: 'BKA',
        location: 'Hà Nội',
        cutoff2024: 28.29,
        targetBlock: 'A00/A01',
        tuitionPerYear: '28 - 45 triệu VNĐ/năm',
        accreditation: 'HCERES Pháp / ABET',
        strengths: 'Chất lượng đào tạo kỹ thuật số 1 Việt Nam'
      },
      {
        region: 'Bắc',
        name: 'Trường ĐH Công nghệ - ĐHQG Hà Nội (UET)',
        code: 'QHI',
        location: 'Hà Nội',
        cutoff2024: 27.85,
        targetBlock: 'A00/A01',
        tuitionPerYear: '32 - 42 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Chuẩn học thuật viện hàn lâm, thế mạnh thuật toán và nghiên cứu quốc tế'
      },
      {
        region: 'Nam',
        name: 'ĐH Khoa học Tự nhiên - ĐHQG TP.HCM (HCMUS)',
        code: 'QST',
        location: 'TP.HCM',
        cutoff2024: 28.1,
        targetBlock: 'A00/A01',
        tuitionPerYear: '27 - 48 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Nền tảng khoa học máy tính mạnh nhất phía Nam'
      },
      {
        region: 'Nam',
        name: 'Đại học Bách Khoa - ĐHQG TP.HCM (HCMUT)',
        code: 'QSB',
        location: 'TP.HCM',
        cutoff2024: 'Theo điểm thi ĐGNL & TN THPT',
        targetBlock: 'A00/A01',
        tuitionPerYear: '30 - 55 triệu VNĐ/năm',
        accreditation: 'ABET Hoa Kỳ',
        strengths: 'Chương trình đào tạo đạt kiểm định ABET danh giá của Mỹ'
      }
    ],
    whatYouStudy: {
      coreFoundations: [
        'Toán rời rạc & Đại số tuyến tính',
        'Cấu trúc dữ liệu & Giải thuật nâng cao',
        'Nguyên lý Hệ điều hành & Kiến trúc máy tính',
        'Lập trình hướng đối tượng (OOP với Java, C++, Python)'
      ],
      specializedSubjects: [
        'Kỹ thuật phần mềm & Quy trình Agile/Scrum',
        'Cơ sở dữ liệu quan hệ (PostgreSQL) & NoSQL (MongoDB)',
        'Phát triển ứng dụng Web/Mobile đa nền tảng',
        'Điện toán đám mây (AWS/GCP) & DevOps CI/CD'
      ],
      practicalSkills: [
        'Viết mã nguồn sạch, tối ưu hiệu năng',
        'Sử dụng Git, Docker trong môi trường làm việc nhóm',
        'Đọc hiểu tài liệu kỹ thuật tiếng Anh thuần thục'
      ],
      exampleProjects: [
        'Xây dựng hệ thống thương mại điện tử chịu tải 10,000 người dùng đồng thời',
        'Phát triển ứng dụng di động quản lý tài chính cá nhân'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Junior Frontend / Backend / Fullstack Developer',
        'Kỹ sư đảm bảo chất lượng phần mềm (QA / Automation Tester)',
        'Mobile App Developer (Flutter / React Native / Swift / Kotlin)'
      ],
      seniorRoles: [
        'Software Architect (Kiến trúc sư phần mềm cấp cao)',
        'Engineering Manager / Tech Lead',
        'Giám đốc Công nghệ (CTO)'
      ],
      workEnvironments: [
        'Các tập đoàn công nghệ lớn: FPT Software, Viettel, VNG',
        'Các công ty Product nước ngoài: Shopee, Grab, Axon',
        'Làm việc Remote cho khách hàng quốc tế'
      ]
    },
    salaryBands: {
      internship: '4 - 8 triệu VNĐ/tháng',
      freshGrad: '12 - 22 triệu VNĐ/tháng',
      midLevel: '28 - 55 triệu VNĐ/tháng',
      management: '60 - 150+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Thuật toán, logic, kỹ thuật phần mềm và kiến trúc điện toán đám mây.',
      aiImpact: 'TRUNG BÌNH CAO: AI tự sinh code rất nhanh, đòi hỏi kỹ sư phải nâng cấp lên tư duy kiến trúc và kiểm soát chất lượng.',
      englishRole: 'BẮT BUỘC: Toàn bộ tài liệu, công cụ và cơ hội việc làm lương cao đều dùng tiếng Anh.',
      freelancePotential: 'CỰC KỲ CAO: Nhận dự án toàn cầu qua Upwork, Toptal hoặc làm nhân viên từ xa nhận USD.',
      agencyOrBusiness: 'Rất cao: Dễ thành lập công ty phần mềm, dịch vụ SaaS hoặc Outsource.',
      creativeFreedom: 'Khá cao trong việc thiết kế giải pháp kỹ thuật và tối ưu trải nghiệm.',
      marketDemand2025_2030: 'Nhu cầu nhân sự chất lượng cao (Mid-Senior) vẫn rất lớn; bão hòa ở nhóm mới học việc thụ động.',
      stability: 'Cao với người có năng lực tự học; đào thải nhanh nếu dừng trau dồi.',
      pressureLevel: 'Áp lực về deadline dự án, hệ thống gặp sự cố (bug/downtime) vào ban đêm.',
      personalityFit: 'Tư duy logic, thích giải đố, cẩn trọng, kiên trì, đam mê công nghệ mới.'
    },
    biasDebunking: {
      myth: '"Học CNTT chỉ cần biết gõ code là tự khắc lương nghìn USD ngay khi mới ra trường."',
      reality: 'Thị trường 2025–2026 đã thanh lọc khốc liệt nhóm sinh viên chỉ biết code cơ bản theo bài mẫu. Muốn có thu nhập cao phải có tư duy hệ thống vững, tiếng Anh trôi chảy và làm chủ công cụ AI.',
      emotionalTrap: 'Thấy mọi người bảo ngành IT hot nên thi theo phong trào dù bản thân rất sợ Toán và ghét ngồi máy tính.'
    },
    roadmap: {
      grade12Prep: 'Ôn chắc Toán và tiếng Anh; Tự học trước ngôn ngữ Python hoặc C++ căn bản qua YouTube/LeetCode.',
      year1_2: 'Cày nát cấu trúc dữ liệu và giải thuật; Đạt IELTS 6.5+; Tham gia các dự án mã nguồn mở trên GitHub.',
      year3_4: 'Đi thực tập từ cuối năm 2; Làm đồ án thực tế; Học thêm kiến thức hệ thống Cloud (AWS Certified Cloud Practitioner).',
      postGrad: 'Đi sâu vào một nhánh chuyên môn (Fullstack / Cloud / Big Data / Security); Xây dựng thương hiệu cá nhân trên LinkedIn.'
    }
  },

  // ==========================================
  // SECTOR 5: Y DƯỢC & SỨC KHỎE
  // ==========================================
  {
    id: 'y-da-khoa',
    code: '7720101',
    name: 'Y khoa (Bác sĩ Đa khoa)',
    tagline: 'Trị bệnh cứu người, sứ mệnh y đức cao cả và nền tảng y sinh học chuyên sâu',
    sector: 'Y Dược & Sức khỏe',
    category: 'Y Dược & Sức khỏe',
    admissionBlocks: ['B00', 'A00'],
    riasecPrimary: ['I', 'S', 'R'],
    riasecScore: { R: 70, I: 95, A: 20, S: 90, E: 30, C: 80 },
    summary: 'Chương trình đào tạo 6 năm đào tạo Bác sĩ Đa khoa có kiến thức sâu rộng về giải phẫu, sinh lý, bệnh học, dược lý và kỹ năng chẩn đoán, điều trị bệnh cho nhân dân.',
    personalityTraits: [
      'Lòng trắc ẩn, sự thấu cảm nỗi đau của người bệnh',
      'Trí nhớ siêu phàm và sức bền học tập bền bỉ qua năm tháng',
      'Đôi bàn tay khéo léo, cẩn trọng, tỉ mỉ tuyệt đối',
      'Thần kinh vững vàng trước máu me, ca cấp cứu và áp lực sinh tử'
    ],
    suitableFor: [
      'Học rất giỏi khối B00 (Toán – Hóa – Sinh), điểm thi thử luôn đạt 27–29 điểm',
      'Có khao khát cống hiến cứu người, giàu lòng nhân ái',
      'Sẵn sàng học liên tục 6 năm đại học + 18 tháng thực hành chứng chỉ hành nghề + học Bác sĩ nội trú/Chuyên khoa'
    ],
    unsuitableFor: [
      'Mong muốn kiếm tiền nhanh ngay khi ra trường lúc 22 tuổi',
      'Sợ máu, sợ tiếp xúc với bệnh nhân, sợ trực đêm tại bệnh viện',
      'Thiếu tính kiên nhẫn, học vẹt, ngại đọc khối lượng sách y khoa đồ sộ'
    ],
    skills: {
      hardSkills: [
        'Khám lâm sàng toàn diện (Nhìn, sờ, gõ, nghe)',
        'Chẩn đoán và xây dựng phác đồ điều trị bệnh nội/ngoại khoa',
        'Kỹ thuật thủ thuật ngoại khoa cơ bản và cấp cứu hồi sức',
        'Đọc chẩn đoán hình ảnh (X-quang, CT, Siêu âm)'
      ],
      softSkills: [
        'Giao tiếp y khoa & Thông báo tin xấu cho thân nhân',
        'Quản lý áp lực tâm lý trong ca mổ',
        'Làm việc nhóm liên chuyên khoa (Hội chẩn)'
      ],
      toolsAndSoftware: [
        'Hệ thống bệnh án điện tử (EMR/HIS)',
        'Phần mềm tra cứu tương tác thuốc (UpToDate, Medscape)',
        'Thiết bị theo dõi sinh hiệu'
      ],
      futureSkills2026: [
        'Sử dụng công nghệ AI hỗ trợ sàng lọc ung thư và tổn thương phổi',
        'Khám chữa bệnh từ xa (Telemedicine)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Sinh học (Cốt lõi)', 'Hóa học (Dược lý & Chuyển hóa)', 'Toán học'],
      coreUniversitySubjects: [
        'Giải phẫu học người & Mô phôi thai',
        'Sinh lý học & Hóa sinh y học',
        'Dược lý học & Giải phẫu bệnh',
        'Nội bệnh lý & Ngoại bệnh lý'
      ],
      specializedElectives: [
        'Hồi sức cấp cứu & Chống độc',
        'Nhi khoa & Sản phụ khoa',
        'Chẩn đoán hình ảnh & Y học hạt nhân',
        'Y học cổ truyền kết hợp hiện đại'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Bác sĩ điều trị / Bác sĩ nội trú',
          averageSalary: '8 - 14 triệu VNĐ/tháng (+ phụ cấp trực đêm)',
          primaryResponsibilities: ['Khám và theo dõi bệnh nhân nội trú', 'Tham gia ca mổ và trực cấp cứu', 'Kê đơn thuốc'],
          typicalEmployers: ['Bệnh viện công lập tuyến tỉnh/trung ương', 'Bệnh viện tư nhân']
        }
      ],
      midSenior: [
        {
          title: 'Bác sĩ chuyên khoa I / Phẫu thuật viên chính',
          averageSalary: '25 - 55 triệu VNĐ/tháng',
          primaryResponsibilities: ['Chủ trì các ca phẫu thuật chuyên khoa', 'Hội chẩn bệnh án khó', 'Khám thêm phòng khám ngoài giờ'],
          typicalEmployers: ['Bệnh viện Bạch Mai, Chợ Rẫy, Vinmec, Tâm Anh']
        }
      ],
      leadership: [
        {
          title: 'Trưởng khoa / Giám đốc Bệnh viện / Thầy thuốc ưu tú',
          averageSalary: '60 - 150+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Quản lý chất lượng điều trị và định hướng phát triển chuyên môn bệnh viện'],
          typicalEmployers: ['Hệ thống bệnh viện lớn']
        }
      ],
      alternativePaths: ['Mở phòng khám chuyên khoa tư nhân sau khi có chứng chỉ hành nghề']
    },
    salaryRanges: {
      internship: 'Không có lương trong 6 năm học đại học',
      entryLevel0to2Years: '8 - 14 triệu VNĐ/tháng',
      midSenior3to5Years: '25 - 50 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '60 - 150+ triệu VNĐ/tháng',
      reportSources: ['Báo cáo Lương Bệnh viện Công & Tư 2024', 'Navigos Group']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'Thấp: AI chẩn đoán hình ảnh rất tốt, nhưng trách nhiệm chẩn đoán, phẫu thuật và chăm sóc tình cảm bệnh nhân là bất khả thay thế.',
      keyGrowthDrivers: ['Dân số Việt Nam đang già hóa nhanh chóng', 'Nhu cầu chăm sóc sức khỏe chất lượng cao bùng nổ'],
      risksAndChallenges: ['Thời gian học quá dài, áp lực trực đêm vất vả']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Y Hà Nội (HMU)',
        code: 'YHB',
        location: 'Hà Nội',
        cutoff2024: 28.27,
        targetBlock: 'B00',
        tuitionPerYear: '55 - 65 triệu VNĐ/năm',
        strengths: 'Ngọn cờ đầu ngành y của cả nước, bề dày hơn 120 năm lịch sử'
      },
      {
        region: 'Trung',
        name: 'Trường ĐH Y - Dược - ĐH Huế (HMP)',
        code: 'DHY',
        location: 'Thừa Thiên Huế',
        cutoff2024: 26.5,
        targetBlock: 'B00',
        tuitionPerYear: '45 - 55 triệu VNĐ/năm',
        strengths: 'Cái nôi y học miền Trung, bệnh viện trường quy mô 1,000 giường hiện đại'
      },
      {
        region: 'Nam',
        name: 'Đại học Y Dược TP.HCM (UMP)',
        code: 'YDS',
        location: 'TP.HCM',
        cutoff2024: 27.8,
        targetBlock: 'B00',
        tuitionPerYear: '75 - 85 triệu VNĐ/năm',
        strengths: 'Trung tâm đào tạo y khoa danh giá nhất phía Nam'
      }
    ],
    whatYouStudy: {
      coreFoundations: [
        'Giải phẫu học người & Mô phôi thai học',
        'Sinh lý học & Hóa sinh y học',
        'Vi sinh ký sinh trùng & Miễn dịch học',
        'Dược lý học & Giải phẫu bệnh'
      ],
      specializedSubjects: [
        'Nội bệnh lý (Tim mạch, Hô hấp, Tiêu hóa, Thận học)',
        'Ngoại bệnh lý & Kỹ thuật mổ can thiệp',
        'Sản phụ khoa & Nhi khoa',
        'Hồi sức cấp cứu, Chẩn đoán hình ảnh (X-quang, CT, MRI)'
      ],
      practicalSkills: [
        'Thăm khám lâm sàng, gõ, sờ, nghe tim phổi chuẩn xác',
        'Kỹ thuật cấp cứu ngừng tuần hoàn hô hấp, đặt nội khí quản',
        'Đọc kết quả xét nghiệm máu, điện tâm đồ, sinh thiết'
      ],
      exampleProjects: [
        'Trực cấp cứu tại Bệnh viện Bạch Mai hoặc Chợ Rẫy',
        'Nghiên cứu lâm sàng về tỷ lệ đáp ứng thuốc hạ áp trên bệnh nhân cao tuổi'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Bác sĩ điều trị tại bệnh viện (sau 18 tháng thực hành)',
        'Bác sĩ nội trú tại các bệnh viện tuyến trung ương',
        'Chuyên viên nghiên cứu lâm sàng tại các tập đoàn dược'
      ],
      seniorRoles: [
        'Trưởng khoa / Giám đốc Bệnh viện',
        'Chuyên gia Phẫu thuật đầu ngành',
        'Giảng viên cao cấp Đại học Y Dược'
      ],
      workEnvironments: [
        'Bệnh viện công lập tuyến đầu: Bạch Mai, Việt Đức, Chợ Rẫy, Từ Dũ',
        'Bệnh viện tư nhân & quốc tế: Vinmec, FV Hospital, Tâm Anh',
        'Phòng khám tư nhân độc lập'
      ]
    },
    salaryBands: {
      internship: 'Không có lương (ăn học 6 năm)',
      freshGrad: '8 - 14 triệu VNĐ/tháng',
      midLevel: '25 - 50 triệu VNĐ/tháng',
      management: '60 - 150+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Khoa học y sinh, giải phẫu, bệnh học và chăm sóc cứu chữa con người.',
      aiImpact: 'THẤP: AI hỗ trợ chẩn đoán hình ảnh, nhưng việc phẫu thuật và trách nhiệm sinh tử luôn do bác sĩ chịu trách nhiệm.',
      englishRole: 'RẤT CAO: Mọi sách giáo khoa y học kinh điển và hướng dẫn điều trị thế giới đều bằng tiếng Anh.',
      freelancePotential: 'Thấp: Bắt buộc gắn liền với cơ sở y tế và trang thiết bị chuyên biệt.',
      agencyOrBusiness: 'Khá cao sau tuổi 35: Mở phòng khám tư hoặc trung tâm thẩm mỹ.',
      creativeFreedom: 'Thấp đến Vừa phải: Bắt buộc tuân thủ phác đồ điều trị nghiêm ngặt.',
      marketDemand2025_2030: 'Luôn luôn thiếu bác sĩ giỏi ở mọi thời đại.',
      stability: 'CỰC KỲ CAO: Càng lớn tuổi càng có nhiều kinh nghiệm và bệnh nhân tin cậy.',
      pressureLevel: 'RẤT KHẮC NGHIỆT: Áp lực trực đêm và trách nhiệm sinh mạng con người.',
      personalityFit: 'Tận tụy, kiên cường, giàu lòng nhân ái, chịu khó, cẩn thận từng chi tiết nhỏ.'
    },
    biasDebunking: {
      myth: '"Làm bác sĩ sướng lắm, ra trường là giàu có ngay."',
      reality: 'Bạn phải học ròng rã 6 năm + 18 tháng thực hành + trực đêm ròng rã với mức phụ cấp vài chục nghìn đồng. Bác sĩ chỉ thực sự bắt đầu có thu nhập tốt và vững vàng sau tuổi 30–32.',
      emotionalTrap: 'Gia đình ép học vì muốn có "ông bác sĩ trong nhà" dù bản thân nhìn thấy máu là ngất xỉu.'
    },
    roadmap: {
      grade12Prep: 'Luyện đề Toán - Hóa - Sinh đạt mục tiêu 27.5+; Rèn luyện thể lực bền bỉ và bản lĩnh phòng thi.',
      year1_2: 'Vượt qua các môn Giải phẫu, Sinh lý; Thực tập tại phòng thí nghiệm.',
      year3_4: 'Bắt đầu đi lâm sàng tại bệnh viện; Đi trực đêm từ 18h tối đến 6h sáng hôm sau.',
      postGrad: 'Thi Bác sĩ nội trú hoặc hoàn thành 18 tháng chứng chỉ hành nghề tại bệnh viện đa khoa.'
    }
  },

  // ==========================================
  // SECTOR 6: KINH TẾ & CHUỖI CUNG ỨNG
  // ==========================================
  {
    id: 'logistics',
    code: '7510605',
    name: 'Logistics & Quản lý chuỗi cung ứng',
    tagline: 'Mạch máu của thương mại toàn cầu, tối ưu hóa dòng chảy hàng hóa và thông tin',
    sector: 'Kinh tế & Chuỗi cung ứng',
    category: 'Kinh tế & Quản trị',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['E', 'C', 'R'],
    riasecScore: { R: 60, I: 60, A: 20, S: 40, E: 80, C: 85 },
    summary: 'Quản trị toàn bộ quy trình từ thu mua nguyên vật liệu, sản xuất, lưu kho, vận tải đường biển/hàng không/đường bộ cho đến phân phối hàng hóa đến tay người tiêu dùng toàn cầu với chi phí tối ưu nhất.',
    personalityTraits: [
      'Tư duy tổ chức, sắp xếp công việc khoa học, ngăn nắp',
      'Khả năng điều phối và giải quyết sự cố phát sinh nhanh nhạy',
      'Chịu được áp lực thời gian giao hàng (On-time delivery)',
      'Kỹ năng đàm phán thương mại và xử lý chứng từ quốc tế'
    ],
    suitableFor: [
      'Thích nhìn ngắm các bến cảng, sân bay, kho hàng quy mô lớn',
      'Giỏi tính toán, tối ưu chi phí, thích sắp xếp lộ trình thông minh',
      'Thích giao tiếp quốc tế, xử lý các thủ tục hải quan và hợp đồng ngoại thương'
    ],
    unsuitableFor: [
      'Cẩu thả, hay quên chi tiết, làm việc tùy hứng',
      'Ngại tiếng Anh, sợ làm việc với giấy tờ chứng từ xuất nhập khẩu phức tạp'
    ],
    skills: {
      hardSkills: [
        'Nghiệp vụ chứng từ xuất nhập khẩu (B/L, L/C, C/O, Packing List)',
        'Quy tắc thương mại quốc tế Incoterms 2020',
        'Khai báo hải quan điện tử qua hệ thống VNACCS/VCIS',
        'Quản trị kho bãi và tính toán tối ưu thể tích container'
      ],
      softSkills: [
        'Đàm phán giá cước vận tải biển và hàng không',
        'Xử lý tình huống tắc biên hoặc hàng hóa bị giữ kiểm tra',
        'Điều phối đội xe và công nhân bốc dỡ'
      ],
      toolsAndSoftware: [
        'Hệ thống ERP / SAP Supply Chain',
        'Phần mềm khai hải quan điện tử ECUS',
        'Excel nâng cao & Power BI phân tích tồn kho'
      ],
      futureSkills2026: [
        'Ứng dụng AI tối ưu hóa lộ trình xe tự hành và robot phân loại kho hàng',
        'Chuỗi cung ứng xanh bền vững (Green Logistics / ESG)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Toán học (Tối ưu chi phí)', 'Tiếng Anh (Giao dịch quốc tế)', 'Địa lý (Tuyến đường vận tải)'],
      coreUniversitySubjects: [
        'Kinh tế vận tải & Địa lý thương mại quốc tế',
        'Quản trị mua hàng & Tìm nguồn cung ứng (Procurement)',
        'Quản trị kho hàng & Hàng tồn kho (Warehouse & Inventory)',
        'Giao nhận vận tải đa phương thức'
      ],
      specializedElectives: [
        'Bảo hiểm hàng hải & Luật vận tải quốc tế',
        'Thủ tục hải quan & Thuế xuất nhập khẩu',
        'Chuỗi cung ứng số (Digital Supply Chain)',
        'Quản trị chuỗi cung ứng lạnh (Cold Chain)'
      ]
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Nhân viên Chứng từ XNK / Forwarder Executive',
          averageSalary: '10 - 16 triệu VNĐ/tháng',
          primaryResponsibilities: ['Làm việc với hãng tàu đặt chỗ (booking)', 'Phát hành vận đơn B/L', 'Khai báo tờ khai hải quan'],
          typicalEmployers: ['DHL', 'FedEx', 'Kuehne+Nagel', 'Schenker', 'Hãng tàu Maersk, MSC']
        }
      ],
      midSenior: [
        {
          title: 'Supply Chain Planner / Logistics Lead',
          averageSalary: '22 - 42 triệu VNĐ/tháng',
          primaryResponsibilities: ['Lập kế hoạch nhu cầu sản xuất', 'Quản lý tồn kho toàn quốc', 'Đàm phán hợp đồng 3PL'],
          typicalEmployers: ['Samsung', 'VinFast', 'Apple Suppliers (Foxconn, Luxshare)', 'Nestle']
        }
      ],
      leadership: [
        {
          title: 'Supply Chain Director / Giám đốc Chuỗi cung ứng',
          averageSalary: '60 - 130+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Điều hành toàn bộ mạng lưới cung ứng và chuỗi cung ứng toàn cầu'],
          typicalEmployers: ['Tập đoàn sản xuất lớn', 'Tập đoàn bán lẻ']
        }
      ],
      alternativePaths: ['Mở công ty dịch vụ giao nhận vận tải Freight Forwarder riêng']
    },
    salaryRanges: {
      internship: '3 - 6 triệu VNĐ/tháng',
      entryLevel0to2Years: '10 - 16 triệu VNĐ/tháng',
      midSenior3to5Years: '22 - 45 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '55 - 125+ triệu VNĐ/tháng',
      reportSources: ['Vietnam Logistics Report 2024-2025', 'Navigos Group']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'Trung bình: AI tối ưu hóa lộ trình xe và robot phân loại hàng, nhưng kỹ năng đàm phán giá cước và xử lý khủng hoảng hải quan vẫn do nhân sự điều hành.',
      keyGrowthDrivers: ['Việt Nam trở thành công xưởng sản xuất mới của thế giới', 'Hàng loạt cảng nước sâu và sân bay Long Thành đưa vào vận hành'],
      risksAndChallenges: ['Biến động giá cước tàu biển quốc tế do xung đột địa chính trị']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Đại học Ngoại thương (FTU Hà Nội)',
        code: 'NTH',
        location: 'Hà Nội',
        cutoff2024: 28.1,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '26 - 55 triệu VNĐ/năm',
        accreditation: 'AUN-QA',
        strengths: 'Chuyên ngành Kinh tế đối ngoại và Logistics danh tiếng số 1'
      },
      {
        region: 'Bắc',
        name: 'Đại học Hàng hải Việt Nam (VMU)',
        code: 'HHA',
        location: 'Hải Phòng',
        cutoff2024: 25.5,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '20 - 32 triệu VNĐ/năm',
        strengths: 'Nằm tại thành phố cảng lớn nhất miền Bắc, đào tạo thực chiến về hàng hải và vận tải biển'
      },
      {
        region: 'Nam',
        name: 'Đại học Giao thông Vận tải TP.HCM (UTH)',
        code: 'GTS',
        location: 'TP.HCM',
        cutoff2024: 25.6,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '22 - 38 triệu VNĐ/năm',
        strengths: 'Trường đào tạo số lượng kỹ sư Logistics và Logistics biển lớn nhất miền Nam'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        code: 'KSA',
        location: 'TP.HCM',
        cutoff2024: 27.0,
        targetBlock: 'A00/A01/D01',
        tuitionPerYear: '34 - 58 triệu VNĐ/năm',
        strengths: 'Chương trình định hướng chuỗi cung ứng số và quản trị chiến lược quốc tế'
      }
    ],
    whatYouStudy: {
      coreFoundations: [
        'Kinh tế vận tải & Địa lý thương mại quốc tế',
        'Quản trị mua hàng & Tìm nguồn cung ứng (Procurement)',
        'Quản trị kho hàng & Hàng tồn kho (Inventory)',
        'Giao nhận vận tải đa phương thức'
      ],
      specializedSubjects: [
        'Bảo hiểm hàng hải & Luật vận tải quốc tế',
        'Thủ tục hải quan & Hệ thống thông quan điện tử',
        'Quản trị chuỗi cung ứng số (SAP/ERP)',
        'Chuỗi cung ứng lạnh (Cold Chain)'
      ],
      practicalSkills: [
        'Soạn thảo hợp đồng ngoại thương Incoterms',
        'Phát hành vận đơn B/L và mở thư tín dụng L/C',
        'Tối ưu hóa thể tích container và chi phí lưu kho'
      ],
      exampleProjects: [
        'Thiết kế chuỗi cung ứng xuất khẩu nông sản tươi Việt Nam sang Châu Âu',
        'Tối ưu hóa tuyến giao nhận chặng cuối cho Shopee Express'
      ]
    },
    whatYouDo: {
      entryRoles: [
        'Nhân viên Chứng từ XNK (Docs Executive)',
        'Nhân viên Hiện trường hải quan (Field Ops)',
        'Nhân viên Mua cước tàu (Forwarder Pricing)',
        'Điều phối viên kho vận (Warehouse Dispatcher)'
      ],
      seniorRoles: [
        'Supply Chain Director',
        'Procurement Manager (Trưởng phòng Mua hàng)',
        'Giám đốc Chi nhánh Hãng tàu biển quốc tế'
      ],
      workEnvironments: [
        'Các hãng tàu biển quốc tế (Maersk, MSC, ONE)',
        'Công ty Logistics (DHL, FedEx, Kuehne+Nagel)',
        'Tập đoàn sản xuất lớn (Samsung, Apple, VinFast)'
      ]
    },
    salaryBands: {
      internship: '3 - 6 triệu VNĐ/tháng',
      freshGrad: '10 - 16 triệu VNĐ/tháng',
      midLevel: '22 - 42 triệu VNĐ/tháng',
      management: '55 - 120+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Vận tải, kho vận, chứng từ hải quan và tối ưu chi phí phân phối hàng hóa quốc tế.',
      aiImpact: 'TRUNG BÌNH: AI tối ưu hóa lộ trình xe và robot quản lý kho, nhưng kỹ năng đàm phán giá cước và xử lý sự cố hải quan vẫn do con người.',
      englishRole: 'BẮT BUỘC: Toàn bộ chứng từ vận đơn, email trao đổi với hãng tàu và cảng biển đều bằng tiếng Anh.',
      freelancePotential: 'Trung bình: Thường gắn liền với hệ sinh thái xuất nhập khẩu của doanh nghiệp.',
      agencyOrBusiness: 'Rất cao: Rất nhiều chuyên gia sau 5 năm kinh nghiệm tự mở công ty Forwarder hoặc đại lý hải quan.',
      creativeFreedom: 'Trung bình: Phải tuân thủ luật hàng hải quốc tế và quy trình thủ tục pháp lý nghiêm ngặt.',
      marketDemand2025_2030: 'Việt Nam là trung tâm sản xuất và cảng biển mới của thế giới, nhu cầu nhân lực logistics cực kỳ lớn.',
      stability: 'Cao: Hàng hóa luôn cần phải lưu thông dù trong bất kỳ hoàn cảnh kinh tế nào.',
      pressureLevel: 'Áp lực về tắc biên, trễ tàu, phạt phí lưu container tại cảng (Demurrage/Detention).',
      personalityFit: 'Chính xác, cẩn thận, chịu khó, giỏi giao tiếp đối ngoại, xử lý tình huống linh hoạt.'
    },
    biasDebunking: {
      myth: '"Học logistics là làm phụ kho bê vác hàng hóa hoặc chạy xe giao hàng ngoài đường."',
      reality: 'Đó là lao động phổ thông. Cử nhân Logistics làm việc tại văn phòng máy lạnh, quản lý hệ thống dữ liệu hàng triệu USD, điều phối tàu container hàng nghìn tấn và tối ưu dòng tiền.',
      emotionalTrap: 'Nghe tên tiếng Anh sang chảnh nhưng không tìm hiểu kỹ sự vất vả của các đợt kiểm hóa tại cảng dưới trời nắng.'
    },
    roadmap: {
      grade12Prep: 'Học tốt Toán, Anh và Địa lý; Tìm hiểu các điều kiện Incoterms cơ bản.',
      year1_2: 'Nắm vững luật thương mại quốc tế; Trau dồi tiếng Anh thương mại đạt TOEIC 750+ hoặc IELTS 6.5+.',
      year3_4: 'Thực tập tại các công ty Forwarder hoặc hãng tàu; Học sử dụng phần mềm khai báo hải quan điện tử.',
      postGrad: 'Thi lấy các chứng chỉ quốc tế uy tín (FIATA, CSCP của APICS) để bước vào các tập đoàn đa quốc gia.'
    }
  }
];

export const MAJORS_DATA: Major[] = [
  ...BASE_MAJORS,
  ...ADDITIONAL_MAJORS,
  ...MORE_MAJORS,
  ...EXTRA_MAJORS
];

export const KHỐI_THI_ALL = {
  D01: {
    name: 'Khối D01',
    subjects: 'Toán – Ngữ văn – Tiếng Anh',
    description: 'Khối thi có số lượng nguyện vọng và ngành nghề xét tuyển lớn nhất cả nước, bao phủ Kinh tế, Truyền thông, Ngôn ngữ, Luật và Công nghệ số.'
  },
  A00: {
    name: 'Khối A00',
    subjects: 'Toán – Vật lý – Hóa học',
    description: 'Khối thi kinh điển cho khối Kỹ thuật, Công nghệ thông tin, Xây dựng và Kinh tế định lượng.'
  },
  A01: {
    name: 'Khối A01',
    subjects: 'Toán – Vật lý – Tiếng Anh',
    description: 'Khối thi vàng của thời đại số: Rất mạnh về IT, Trí tuệ nhân tạo, Tự động hóa và Kinh tế đối ngoại.'
  },
  B00: {
    name: 'Khối B00',
    subjects: 'Toán – Hóa học – Sinh học',
    description: 'Khối thi đặc thù dành riêng cho Y khoa, Răng Hàm Mặt, Dược học, Công nghệ sinh học và Môi trường.'
  },
  C00: {
    name: 'Khối C00',
    subjects: 'Ngữ văn – Lịch sử – Địa lý',
    description: 'Khối thi nhân văn truyền thống: Báo chí, Luật học, Khoa học xã hội, Sư phạm và Lực lượng vũ trang.'
  },
  D07: {
    name: 'Khối D07',
    subjects: 'Toán – Hóa học – Tiếng Anh',
    description: 'Cực kỳ phổ biến cho khối ngành Hóa dược, Kỹ thuật công nghệ, Fintech và Quản trị kinh doanh.'
  }
};
