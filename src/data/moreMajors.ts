import { Major } from '../types';

export const MORE_MAJORS: Major[] = [
  // ==========================================
  // KINH DOANH QUỐC TẾ & NGOẠI THƯƠNG
  // ==========================================
  {
    id: 'kinh-doanh-quoc-te',
    code: '7340120',
    name: 'Kinh doanh quốc tế & Ngoại thương (International Business)',
    tagline: 'Vươn tầm thế giới, đàm phán thương mại và quản trị doanh nghiệp toàn cầu',
    sector: 'Kinh tế & Chuỗi cung ứng',
    category: 'Kinh tế & Quản trị',
    admissionBlocks: ['A00', 'A01', 'D01', 'D07'],
    riasecPrimary: ['E', 'S', 'C'],
    riasecScore: { R: 25, I: 60, A: 45, S: 70, E: 95, C: 75 },
    summary: 'Chuyên ngành nghiên cứu các hoạt động thương mại xuyên biên giới, thâm nhập thị trường quốc tế, đầu tư trực tiếp (FDI), đàm phán hợp đồng xuất nhập khẩu và quản trị văn hóa đa quốc gia.',
    personalityTraits: [
      'Năng động, tự tin, khả năng thích ứng cao với môi trường đa văn hóa',
      'Kỹ năng giao tiếp và đàm phán thương thuyết lôi cuốn',
      'Tư duy chiến lược toàn cầu và nhạy cảm với địa chính trị kinh tế',
      'Yêu thích di chuyển, giao lưu quốc tế và thử thách bản thân'
    ],
    suitableFor: [
      'Có thế mạnh vượt trội về ngoại ngữ (Tiếng Anh, Tiếng Trung, Tiếng Hàn...)',
      'Thích khám phá văn hóa các quốc gia, thích tìm hiểu cách các tập đoàn như Apple, Samsung, Unilever vận hành toàn cầu',
      'Muốn làm việc trong các công ty đa quốc gia (MNCs) hoặc các hiệp định thương mại tự do (FTA)'
    ],
    unsuitableFor: [
      'Rụt rè, sợ tiếp xúc với người lạ hoặc người nước ngoài',
      'Ngại học ngoại ngữ và ngại thay đổi thích nghi với môi trường mới'
    ],
    skills: {
      hardSkills: [
        'Nghiệp vụ xuất nhập khẩu & Thanh toán quốc tế (L/C, T/T)',
        'Chiến lược thâm nhập thị trường toàn cầu (Global Market Entry)',
        'Đàm phán thương mại quốc tế và Incoterms 2020',
        'Quản trị tài chính và tỷ giá hối đoái đa quốc gia'
      ],
      softSkills: [
        'Trí tuệ văn hóa (Cultural Intelligence - CQ)',
        'Năng lực lãnh đạo đội ngũ đa quốc gia',
        'Kỹ năng giải quyết xung đột thương mại',
        'Kỹ năng thuyết trình chuẩn doanh nghiệp quốc tế'
      ],
      toolsAndSoftware: [
        'Hệ thống khai báo hải quan điện tử (VNACCS/VCIS)',
        'Phần mềm ERP quốc tế (SAP, Oracle)',
        'Cơ sở dữ liệu thị trường quốc tế (ITC Trade Map, World Bank Data)'
      ],
      futureSkills2026: [
        'Thương mại số xuyên biên giới (Cross-border E-commerce trên Amazon, Alibaba)',
        'Quản trị chuỗi cung ứng bền vững theo chuẩn mực ESG toàn cầu'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Tiếng Anh (Công cụ giao tiếp cốt lõi)', 'Toán học (Tư duy số liệu)', 'Địa lý / Lịch sử (Hiểu biết thế giới)'],
      coreUniversitySubjects: [
        'Kinh tế quốc tế & Thương mại thế giới',
        'Thanh toán quốc tế và tín dụng chứng từ',
        'Luật thương mại quốc tế & Tranh chấp thương mại',
        'Quản trị chuỗi cung ứng toàn cầu',
        'Marketing quốc tế'
      ],
      specializedElectives: ['Kinh doanh trên sàn thương mại điện tử quốc tế', 'Đầu tư trực tiếp nước ngoài', 'Quản trị rủi ro tỷ giá']
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'International Sales / Account Executive',
          averageSalary: '13 - 20 triệu VNĐ/tháng + Hoa hồng xuất khẩu',
          primaryResponsibilities: ['Tìm kiếm đối tác nhập khẩu quốc tế qua hội chợ thương mại và Alibaba', 'Báo giá và đàm phán hợp đồng mua bán ngoại thương', 'Theo dõi tiến độ giao hàng và thanh toán'],
          typicalEmployers: ['Các tập đoàn xuất khẩu nông sản, dệt may, đồ gỗ, thủy sản, đồ gia dụng']
        },
        {
          title: 'Purchasing / Procurement Officer (Chuyên viên mua hàng quốc tế)',
          averageSalary: '12 - 18 triệu VNĐ/tháng',
          primaryResponsibilities: ['Tìm kiếm nhà cung cấp nguyên vật liệu từ Trung Quốc, Hàn Quốc, Nhật Bản', 'Đàm phán giá cả và điều khoản bảo hành', 'Theo dõi hợp đồng hải quan'],
          typicalEmployers: ['Samsung Vietnam, LG, VinFast, các chuỗi bán lẻ quốc tế']
        }
      ],
      midSenior: [
        {
          title: 'Country Manager / Export Director',
          averageSalary: '35 - 65 triệu VNĐ/tháng',
          primaryResponsibilities: ['Phụ trách toàn bộ thị trường xuất khẩu khu vực (Châu Âu/Mỹ/Đông Nam Á)', 'Thiết lập mạng lưới đại lý phân phối độc quyền', 'Chịu trách nhiệm doanh số thị trường nước ngoài'],
          typicalEmployers: ['Vinamilk, Trung Nguyên Legend, Hòa Phát, Vĩnh Hoàn']
        }
      ],
      leadership: [
        {
          title: 'Managing Director / VP of Global Operations',
          averageSalary: '70 - 140+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Hoạch định chiến lược mở rộng quy mô toàn cầu', 'Đại diện đàm phán các thương vụ liên doanh quốc tế'],
          typicalEmployers: ['Tập đoàn đa quốc gia MNCs, tập đoàn công nghiệp xuất khẩu']
        }
      ],
      alternativePaths: ['Tùy viên thương mại tại đại sứ quán', 'Chuyên gia tư vấn xúc tiến thương mại', 'Sáng lập doanh nghiệp xuất nhập khẩu']
    },
    salaryRanges: {
      internship: '4.5 - 7.5 triệu VNĐ/tháng',
      entryLevel0to2Years: '12 - 20 triệu VNĐ/tháng',
      midSenior3to5Years: '26 - 50 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '60 - 120+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '$2,000 - $5,500 USD/tháng',
      reportSources: ['Navigos International Trade Salary Report 2025', 'Adecco Vietnam 2025']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng rất cao',
      aiImpactAssessment: 'AI hỗ trợ dịch thuật hợp đồng và tối ưu lộ trình logistics. Nhưng nghệ thuật ngoại giao, tạo dựng niềm tin và đàm phán văn hóa con người hoàn toàn không thể thay thế.',
      keyGrowthDrivers: ['Việt Nam là mắt xích quan trọng trong chuỗi cung ứng thế giới', 'Hưởng lợi từ 16 Hiệp định Thương mại tự do (EVFTA, CPTPP, RCEP)', 'Làn sóng dịch chuyển chuỗi sản xuất quốc tế'],
      risksAndChallenges: ['Biến động địa chính trị, chiến tranh thương mại và rủi ro gián đoạn hàng hải toàn cầu']
    },
    whatYouStudy: {
      coreFoundations: ['Kinh tế vi mô & vĩ mô', 'Luật thương mại quốc tế', 'Thanh toán quốc tế', 'Logistics ngoại thương'],
      specializedSubjects: ['Marketing quốc tế', 'Đàm phán ngoại thương', 'Incoterms & Vận tải biển', 'Hải quan điện tử'],
      practicalSkills: ['Lập bộ chứng từ xuất nhập khẩu (Invoice, Packing List, B/L, C/O)', 'Giao tiếp tiếng Anh thương mại lưu loát', 'Thuyết phục khách hàng nước ngoài'],
      exampleProjects: ['Kế hoạch xuất khẩu cà phê hữu cơ Việt Nam sang thị trường Đức theo hiệp định EVFTA', 'Quy trình giải quyết tranh chấp hợp đồng mua bán thép quốc tế']
    },
    whatYouDo: {
      entryRoles: ['Nhân viên chứng từ xuất nhập khẩu', 'Chuyên viên Sales quốc tế', 'Chuyên viên mua hàng nhập khẩu'],
      seniorRoles: ['Trưởng phòng xuất nhập khẩu', 'Giám đốc thương mại quốc tế', 'Giám đốc chuỗi cung ứng toàn cầu'],
      workEnvironments: ['Công ty đa quốc gia (MNCs), Doanh nghiệp xuất nhập khẩu, Hãng tàu biển quốc tế, Cơ quan xúc tiến thương mại']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Trường Đại học Ngoại thương (FTU Hà Nội)',
        code: 'NTH',
        location: 'Hà Nội',
        cutoff2024: 28.1,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '26 - 45 triệu VNĐ/năm',
        strengths: 'Ngôi trường danh giá số 1 Việt Nam về kinh tế đối ngoại và ngoại thương, sinh viên năng động xuất sắc toàn diện.',
        accreditation: 'AUN-QA & FIBAA'
      },
      {
        region: 'Bắc',
        name: 'Đại học Kinh tế Quốc dân (NEU)',
        code: 'KHA',
        location: 'Hà Nội',
        cutoff2024: 27.8,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '26 - 38 triệu VNĐ/năm',
        strengths: 'Chương trình đào tạo đạt kiểm định quốc tế FIBAA, gắn kết chặt chẽ với các tập đoàn đa quốc gia.',
        accreditation: 'FIBAA'
      },
      {
        region: 'Trung',
        name: 'Trường Đại học Kinh tế - ĐH Đà Nẵng (DUE)',
        code: 'DDQ',
        location: 'Đà Nẵng',
        cutoff2024: 25.5,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '22 - 30 triệu VNĐ/năm',
        strengths: 'Đi đầu miền Trung trong đào tạo thương mại quốc tế và logistics ngoại thương.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Đại học Ngoại thương - Cơ sở 2 TP.HCM (FTU2)',
        code: 'NTS',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 27.9,
        targetBlock: 'A00, A01, D01',
        tuitionPerYear: '26 - 45 triệu VNĐ/năm',
        strengths: 'Tỷ lệ sinh viên có việc làm tại các tập đoàn nước ngoài thuộc top cao nhất cả nước.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Đại học Kinh tế TP.HCM (UEH)',
        code: 'KSA',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 27.2,
        targetBlock: 'A00, A01, D01, D07',
        tuitionPerYear: '32 - 45 triệu VNĐ/năm',
        strengths: 'Trường trọng điểm quốc gia, chương trình Kinh doanh quốc tế chuẩn quốc tế giảng dạy 100% bằng tiếng Anh.',
        accreditation: 'FIBAA'
      }
    ],
    salaryBands: {
      internship: '4.5 - 7.5 triệu VNĐ/tháng',
      freshGrad: '12 - 20 triệu VNĐ/tháng',
      midLevel: '26 - 50 triệu VNĐ/tháng',
      management: '60 - 120+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Khai thác thị trường quốc tế, lưu thông hàng hóa và đàm phán quan hệ thương mại song phương.',
      aiImpact: 'AI hỗ trợ tự động hóa thủ tục giấy tờ. Năng lực quan hệ ngoại giao, thấu cảm văn hóa và đàm phán hợp đồng là chìa khóa.',
      englishRole: 'Cực kỳ bắt buộc. Tiếng Anh là ngôn ngữ làm việc hàng ngày, biết thêm ngoại ngữ thứ 2 là lợi thế vượt trội.',
      freelancePotential: 'Trung bình, chủ yếu làm chuyên viên môi giới thương mại hoặc tư vấn xuất nhập khẩu.',
      agencyOrBusiness: 'Làm việc trực tiếp tại các doanh nghiệp sản xuất xuất nhập khẩu hoặc tập đoàn thương mại.',
      creativeFreedom: 'Cao trong chiến lược thâm nhập thị trường và nghệ thuật đàm phán.',
      marketDemand2025_2030: 'Rất cao do vị thế xuất siêu và thu hút FDI liên tục của Việt Nam.',
      stability: 'Cao tại các tập đoàn lớn, nhưng cần linh hoạt thích ứng khi thị trường quốc tế biến động.',
      pressureLevel: 'Áp lực về lệch múi giờ khi làm việc với đối tác Mỹ/Châu Âu, áp lực tiến độ tàu chạy và chỉ tiêu bán hàng.',
      personalityFit: 'Người năng động, hoạt ngôn, tự tin, yêu thích ngoại ngữ và khám phá thế giới.'
    },
    biasDebunking: {
      myth: 'Học kinh doanh quốc tế là sẽ được công ty đài thọ đi du lịch nước ngoài liên tục.',
      reality: 'Để được đi công tác nước ngoài, bạn phải chứng minh năng lực mang lại doanh thu hàng triệu đô cho công ty. Thời gian đầu chủ yếu ngồi văn phòng kiểm tra chứng từ hải quan và gửi email chào hàng.',
      emotionalTrap: 'Thấy cái tên "quốc tế" nghe sang chảnh nên đăng ký mà không đánh giá đúng trình độ tiếng Anh và khả năng chịu áp lực giao dịch của bản thân.'
    },
    roadmap: {
      grade12Prep: 'Nâng cao trình độ tiếng Anh giao tiếp và viết luận. Theo dõi tin tức kinh tế quốc tế thường xuyên.',
      year1_2: 'Học chắc kinh tế vi mô, vĩ mô và tiếng Anh thương mại. Luyện tập khả năng thuyết trình trước đám đông.',
      year3_4: 'Học sâu nghiệp vụ Incoterms, thanh toán quốc tế. Thực tập tại bộ phận Xuất nhập khẩu hoặc Logistics quốc tế.',
      postGrad: 'Tích lũy kinh nghiệm chốt hợp đồng ngoại thương, mở rộng mạng lưới đối tác toàn cầu.'
    }
  },

  // ==========================================
  // DƯỢC HỌC & NGHIÊN CỨU DƯỢC LÂM SÀNG
  // ==========================================
  {
    id: 'duoc-hoc',
    code: '7720201',
    name: 'Dược học & Nghiên cứu dược lâm sàng (Pharmacy)',
    tagline: 'Khoa học về thuốc, điều chế dược phẩm và đồng hành chăm sóc sức khỏe cộng đồng',
    sector: 'Y Dược & Sức khỏe',
    category: 'Y Dược & Sức khỏe',
    admissionBlocks: ['A00', 'B00', 'D07'],
    riasecPrimary: ['I', 'R', 'C'],
    riasecScore: { R: 65, I: 95, A: 20, S: 70, E: 50, C: 90 },
    summary: 'Ngành khoa học sức khỏe chuyên sâu về nguồn gốc, cơ chế tác dụng, bào chế, kiểm nghiệm, phân phối thuốc và tư vấn sử dụng thuốc an toàn, hợp lý trong điều trị lâm sàng tại bệnh viện.',
    personalityTraits: [
      'Tỉ mỉ, cẩn trọng tuyệt đối với từng công thức hóa học và liều lượng thuốc',
      'Tư duy khoa học phân tích logic, trí nhớ tốt về các hoạt chất và phản ứng sinh hóa',
      'Đạo đức lương y, tôn trọng tính mạng con người và quy chuẩn y tế nghiêm ngặt',
      'Kiên trì bền bỉ trong môi trường phòng thí nghiệm thí nghiệm hoặc nhà thuốc'
    ],
    suitableFor: [
      'Học sinh xuất sắc môn Hóa học và Sinh học, thích làm việc với công thức và phân tử',
      'Thích khám phá cơ chế chữa lành bệnh tật của các loại thảo dược và tân dược',
      'Mong muốn làm chủ nhà thuốc tư nhân, làm việc tại viện kiểm nghiệm hoặc tập đoàn dược phẩm quốc tế'
    ],
    unsuitableFor: [
      'Cẩu thả, đãng trí, xem nhẹ sự chính xác về liều lượng (sai một ly có thể gây nguy hiểm tính mạng)',
      'Sợ môn Hóa học hữu cơ, Hóa phân tích và Dược lý học'
    ],
    skills: {
      hardSkills: [
        'Dược lý học & Cơ chế tương tác thuốc (Pharmacology)',
        'Kỹ thuật bào chế & Công nghệ sản xuất dược phẩm (GMP-WHO)',
        'Kiểm nghiệm chất lượng thuốc (HPLC, quang phổ UV-Vis)',
        'Dược lâm sàng: Tư vấn phác đồ dùng thuốc an toàn tại bệnh viện'
      ],
      softSkills: [
        'Kỹ năng tư vấn sức khỏe tận tình cho bệnh nhân',
        'Giao tiếp chuyên môn với bác sĩ điều trị',
        'Tuân thủ đạo đức ngành y tế',
        'Quản lý tồn kho dược phẩm và bảo quản thuốc'
      ],
      toolsAndSoftware: [
        'Máy sắc ký lỏng hiệu năng cao (HPLC)',
        'Phần mềm quản trị nhà thuốc (PharmaPOS, GPP Software)',
        'Cơ sở dữ liệu dược thư quốc gia (Drugs.com, MIMS, Micromedex)'
      ],
      futureSkills2026: [
        'Ứng dụng AI dự đoán cấu trúc phân tử thuốc mới (AI in Drug Discovery)',
        'Dược học cá thể hóa dựa trên hệ gen (Pharmacogenomics)'
      ]
    },
    requiredSubjects: {
      highSchoolSubjects: ['Hóa học (Cốt lõi tuyệt đối)', 'Sinh học (Cơ thể & Bệnh học)', 'Toán học (Tính toán liều lượng)'],
      coreUniversitySubjects: [
        'Hóa phân tích & Hóa hữu cơ nâng cao',
        'Giải phẫu - Sinh lý người & Bệnh học',
        'Dược lý học (Cơ chế tác động của thuốc)',
        'Hóa dược & Dược liệu học',
        'Bào chế và sinh dược học',
        'Dược lâm sàng & Điều trị học'
      ],
      specializedElectives: ['Đăng ký và quản lý chất lượng thuốc', 'Dược kinh tế', 'Công nghệ sinh học dược phẩm']
    },
    careerPaths: {
      entryLevel: [
        {
          title: 'Dược sĩ bệnh viện / Dược lâm sàng',
          averageSalary: '10 - 15 triệu VNĐ/tháng',
          primaryResponsibilities: ['Kiểm duyệt đơn thuốc từ bác sĩ để phòng ngừa tương tác có hại', 'Hướng dẫn bệnh nhân cách dùng thuốc đúng phác đồ', 'Quản lý kho dược bệnh viện theo chuẩn GSP'],
          typicalEmployers: ['Bệnh viện Bạch Mai, Chợ Rẫy, Vinmec, Đại học Y Dược']
        },
        {
          title: 'Medical Representative (Trình dược viên ETC/OTC)',
          averageSalary: '14 - 25 triệu VNĐ/tháng (Lương cứng + Thưởng doanh số)',
          primaryResponsibilities: ['Giới thiệu nghiên cứu lâm sàng của thuốc tới bác sĩ chuyên khoa', 'Tổ chức hội thảo khoa học cập nhật phác đồ điều trị mới', 'Phát triển doanh số thuốc kê đơn'],
          typicalEmployers: ['AstraZeneca, Novartis, Sanofi, Pfizer, Dược Hậu Giang']
        }
      ],
      midSenior: [
        {
          title: 'QA/QC Manager (Trưởng phòng Quản lý chất lượng dược)',
          averageSalary: '25 - 45 triệu VNĐ/tháng',
          primaryResponsibilities: ['Kiểm soát quy trình sản xuất theo tiêu chuẩn GMP EU/WHO', 'Thẩm định hồ sơ đăng ký thuốc mới với Cục Quản lý Dược', 'Chịu trách nhiệm về chất lượng từng lô thuốc xuất xưởng'],
          typicalEmployers: ['Traphaco, Imexpharm, Domesco, DHG Pharma']
        }
      ],
      leadership: [
        {
          title: 'Giám đốc Nhà máy Dược / Chuỗi bán lẻ Dược phẩm',
          averageSalary: '50 - 100+ triệu VNĐ/tháng',
          primaryResponsibilities: ['Vận hành toàn bộ chuỗi cung ứng sản xuất dược phẩm', 'Hoạch định chiến lược thuốc độc quyền và nghiên cứu tương đương sinh học'],
          typicalEmployers: ['Các tập đoàn dược phẩm lớn, chuỗi Pharmacity, Long Châu']
        }
      ],
      alternativePaths: ['Chủ chuỗi nhà thuốc đạt chuẩn GPP', 'Chuyên viên kiểm nghiệm tại Viện Kiểm nghiệm thuốc Trung ương', 'Nghiên cứu sinh dược học']
    },
    salaryRanges: {
      internship: '3.5 - 6 triệu VNĐ/tháng',
      entryLevel0to2Years: '11 - 18 triệu VNĐ/tháng',
      midSenior3to5Years: '22 - 40 triệu VNĐ/tháng',
      leadExecutive5PlusYears: '45 - 90+ triệu VNĐ/tháng',
      globalRemotePotentialUSD: '$1,500 - $4,000 USD/tháng',
      reportSources: ['Vietnam Healthcare & Pharma Salary Report 2025', 'TopCV 2025']
    },
    marketOutlook: {
      hiringDemandTrend: 'Tăng trưởng cao',
      aiImpactAssessment: 'AI hỗ trợ mô phỏng thử nghiệm thuốc nhanh chóng. Tuy nhiên, trách nhiệm pháp lý kiểm định và bàn tay trực tiếp của Dược sĩ là cốt lõi bất di bất dịch.',
      keyGrowthDrivers: ['Già hóa dân số và nhu cầu chăm sóc sức khỏe gia tăng mạnh mẽ', 'Sự bùng nổ của các chuỗi bán lẻ dược phẩm hiện đại (Long Châu, An Khang)', 'Chính sách nội địa hóa sản xuất thuốc của chính phủ'],
      risksAndChallenges: ['Thời gian đào tạo đại học kéo dài 5 năm, yêu cầu thi cấp chứng chỉ hành nghề Dược khắt khe']
    },
    whatYouStudy: {
      coreFoundations: ['Hóa đại cương, vô cơ & hữu cơ', 'Sinh học phân tử', 'Giải phẫu người', 'Dược lý học'],
      specializedSubjects: ['Bào chế thuốc viên, thuốc tiêm', 'Kiểm nghiệm dược phẩm', 'Dược lâm sàng', 'Quản trị kinh doanh dược'],
      practicalSkills: ['Thao tác pha chế trong phòng sạch', 'Vận hành máy đo quang phổ và HPLC', 'Tư vấn tương tác thuốc trên đơn bệnh'],
      exampleProjects: ['Nghiên cứu công thức bào chế viên nén giải phóng kéo dài từ thảo dược Việt Nam', 'Đánh giá tương tác thuốc trên 500 bệnh nhân đái tháo đường']
    },
    whatYouDo: {
      entryRoles: ['Dược sĩ bán thuốc', 'Dược sĩ nghiên cứu R&D', 'Kiểm nghiệm viên dược phẩm'],
      seniorRoles: ['Dược sĩ lâm sàng chính', 'Trưởng phòng đăng ký thuốc', 'Giám đốc nghiên cứu & phát triển (R&D)'],
      workEnvironments: ['Bệnh viện, Nhà máy sản xuất dược phẩm đạt chuẩn GMP, Viện kiểm nghiệm, Chuỗi nhà thuốc hiện đại']
    },
    universities: [
      {
        region: 'Bắc',
        name: 'Trường Đại học Dược Hà Nội (HUP)',
        code: 'DKH',
        location: 'Hà Nội',
        cutoff2024: 25.5,
        targetBlock: 'A00',
        tuitionPerYear: '24 - 30 triệu VNĐ/năm',
        strengths: 'Cái nôi đào tạo dược học danh giá số 1 toàn quốc, cái tên bảo chứng uy tín cho mọi thế hệ dược sĩ.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Bắc',
        name: 'Đại học Y Hà Nội (HMU)',
        code: 'YHB',
        location: 'Hà Nội',
        cutoff2024: 25.8,
        targetBlock: 'A00, B00',
        tuitionPerYear: '27 - 35 triệu VNĐ/năm',
        strengths: 'Môi trường đào tạo y dược lâm sàng gắn liền với các bệnh viện tuyến trung ương.',
        accreditation: 'Kiểm định BGDĐT'
      },
      {
        region: 'Trung',
        name: 'Trường Đại học Y - Dược, Đại học Huế',
        code: 'DHY',
        location: 'Huế',
        cutoff2024: 24.2,
        targetBlock: 'A00, B00',
        tuitionPerYear: '28 - 36 triệu VNĐ/năm',
        strengths: 'Trung tâm đào tạo y dược trọng điểm lớn nhất miền Trung với bệnh viện thực hành hiện đại.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Đại học Y Dược TP.HCM (UMP)',
        code: 'YDS',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 25.6,
        targetBlock: 'A00, B00',
        tuitionPerYear: '55 - 65 triệu VNĐ/năm',
        strengths: 'Đỉnh cao đào tạo dược học miền Nam, liên kết nghiên cứu với các hãng dược phẩm quốc tế hàng đầu.',
        accreditation: 'AUN-QA'
      },
      {
        region: 'Nam',
        name: 'Khoa Y - ĐHQG TP.HCM',
        code: 'QSY',
        location: 'TP. Hồ Chí Minh',
        cutoff2024: 24.8,
        targetBlock: 'A00, B00',
        tuitionPerYear: '45 - 55 triệu VNĐ/năm',
        strengths: 'Mô hình viện - trường gắn bó chặt chẽ, phòng thí nghiệm hiện đại chuẩn quốc tế.',
        accreditation: 'AUN-QA'
      }
    ],
    salaryBands: {
      internship: '3.5 - 6 triệu VNĐ/tháng',
      freshGrad: '11 - 18 triệu VNĐ/tháng',
      midLevel: '22 - 40 triệu VNĐ/tháng',
      management: '45 - 90+ triệu VNĐ/tháng'
    },
    comparisonCriteria: {
      coreNature: 'Nghiên cứu, kiểm nghiệm, bào chế thuốc và cố vấn sử dụng dược phẩm an toàn.',
      aiImpact: 'AI tăng tốc phát minh hoạt chất. Nhưng thử nghiệm lâm sàng và đạo đức cung cấp thuốc cần con người.',
      englishRole: 'Rất cần thiết để đọc tài liệu dược điển Mỹ (USP), dược điển Anh (BP) và các nghiên cứu khoa học y tế.',
      freelancePotential: 'Rất cao nếu mở nhà thuốc tư nhân (sau khi đủ 2 năm kinh nghiệm thực hành lâm sàng để xin giấy phép GPP).',
      agencyOrBusiness: 'Làm việc tại Bệnh viện, Nhà máy Dược phẩm hoặc Nhà thuốc.',
      creativeFreedom: 'Thấp trong quy tắc bào chế và liều lượng (phải tuân thủ nghiêm ngặt), cao trong nghiên cứu công thức mới.',
      marketDemand2025_2030: 'Bền vững vượt thời gian vì thuốc là nhu cầu sinh mạng thiết yếu của xã hội.',
      stability: 'Cực kỳ cao, ít chịu rủi ro khủng hoảng kinh tế hơn so với các ngành dịch vụ.',
      pressureLevel: 'Áp lực cao về mặt độ chính xác, không được phép xảy ra sai sót nhầm lẫn liều lượng.',
      personalityFit: 'Người cẩn thận, yêu thích hóa sinh, có trách nhiệm với sức khỏe con người.'
    },
    biasDebunking: {
      myth: 'Học dược ra trường chỉ để "bán thuốc tây dạo" ở quầy thuốc.',
      reality: 'Bán thuốc ở quầy chỉ là 1 trong rất nhiều hướng đi. Dược sĩ đại học có thể làm nghiên cứu bào chế thuốc mới (R&D), chuyên viên kiểm nghiệm, dược sĩ lâm sàng tư vấn phác đồ tại bệnh viện, hoặc quản lý đăng ký thuốc.',
      emotionalTrap: 'Nghĩ rằng học dược nhàn hạ hơn học y mà không biết chương trình học chứa đầy các môn Hóa học hóc búa và khối lượng lý thuyết khổng lồ.'
    },
    roadmap: {
      grade12Prep: 'Học chắc Hóa học và Sinh học cấp 3. Rèn luyện tính cẩn thận, chính xác trong tính toán số liệu.',
      year1_2: 'Hoàn thành các môn cơ sở: Hóa phân tích, Hóa hữu cơ, Giải phẫu sinh lý người.',
      year3_4: 'Học chuyên ngành: Dược lý, Bào chế, Kiểm nghiệm. Thực tập tại phòng thí nghiệm hoặc nhà máy GMP.',
      postGrad: 'Đi thực hành tại bệnh viện hoặc nhà thuốc đủ 2 năm để được cấp Chứng chỉ hành nghề Dược theo Luật Dược.'
    }
  }
];
