export type RIASECCode = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RIASECScore {
  R: number; // Realistic - Kỹ thuật, thực tế, thao tác
  I: number; // Investigative - Nghiên cứu, tư duy logic, khoa học
  A: number; // Artistic - Sáng tạo, nghệ thuật, tự do, thị giác
  S: number; // Social - Xã hội, con người, giao tiếp, giúp đỡ
  E: number; // Enterprising - Kinh doanh, thuyết phục, lãnh đạo
  C: number; // Conventional - Quy củ, tổ chức, chi tiết, số liệu
}

export interface UniversityInfo {
  region: 'Bắc' | 'Nam' | 'Trung';
  name: string;
  code: string;
  location: string;
  cutoff2024: number | string;
  targetBlock: string; // e.g. 'D01' | 'A00' | 'A01' | 'B00' | 'C00'
  tuitionPerYear: string;
  strengths: string;
  accreditation?: string; // Kiểm định chất lượng (AUN-QA, ABET, HCERES...)
}

export type IndustrySector =
  | 'Marketing & Tiếp thị'
  | 'Truyền thông & Báo chí'
  | 'Ngôn ngữ & Ngôn ngữ học'
  | 'Công nghệ thông tin & AI'
  | 'Kỹ thuật & Công nghệ'
  | 'Y Dược & Sức khỏe'
  | 'Kinh tế & Chuỗi cung ứng'
  | 'Tài chính & Ngân hàng'
  | 'Luật & Pháp lý'
  | 'Thiết kế & Nghệ thuật số'
  | 'Kiến trúc & Xây dựng'
  | 'Dịch vụ & Du lịch'
  | 'Khoa học Xã hội & Nhân văn'
  | 'Tâm lý & Khoa học hành vi'
  | (string & {});

// Backward compatibility alias for UI components
export type MajorCategory =
  | 'Marketing & Tiếp thị'
  | 'Truyền thông & Báo chí'
  | 'Ngôn ngữ & Ngôn ngữ học'
  | 'Công nghệ & Kỹ thuật'
  | 'Công nghệ thông tin & AI'
  | 'Kỹ thuật & Công nghệ'
  | 'Kinh tế & Quản trị'
  | 'Kinh tế & Chuỗi cung ứng'
  | 'Tài chính & Ngân hàng'
  | 'Y Dược & Sức khỏe'
  | 'Truyền thông & Thiết kế'
  | 'Thiết kế & Nghệ thuật số'
  | 'Kiến trúc & Xây dựng'
  | 'Dịch vụ & Du lịch'
  | 'Khoa học Xã hội & Ngôn ngữ'
  | 'Khoa học Xã hội & Nhân văn'
  | 'Tâm lý & Khoa học hành vi'
  | 'Luật & Pháp lý'
  | 'Luật & Dịch vụ'
  | (string & {});

export interface CareerRole {
  title: string;
  averageSalary: string;
  primaryResponsibilities: string[];
  typicalEmployers: string[];
}

export interface StructuredSkills {
  hardSkills: string[];
  softSkills: string[];
  toolsAndSoftware: string[];
  futureSkills2026: string[];
}

export interface RequiredSubjects {
  highSchoolSubjects: string[];
  coreUniversitySubjects: string[];
  specializedElectives?: string[];
}

export interface CareerPaths {
  entryLevel: CareerRole[];
  midSenior: CareerRole[];
  leadership: CareerRole[];
  alternativePaths: string[];
}

export interface SalaryRanges {
  internship: string;
  entryLevel0to2Years: string;
  midSenior3to5Years: string;
  leadExecutive5PlusYears: string;
  globalRemotePotentialUSD?: string;
  reportSources: string[];
}

export interface MarketOutlook2025_2026 {
  hiringDemandTrend: 'Tăng trưởng rất cao' | 'Tăng trưởng cao' | 'Ổn định' | 'Cạnh tranh gắt gao';
  aiImpactAssessment: string;
  keyGrowthDrivers: string[];
  risksAndChallenges: string[];
}

export interface Major {
  id: string;
  code: string; // Mã ngành Bộ GD&ĐT (e.g., 7340115, 7320104, 7220201, 7480201)
  name: string;
  tagline: string;
  sector: IndustrySector; // Industry-standard sector mapping
  category: MajorCategory; // UI category
  admissionBlocks: string[]; // D01, A00, A01, B00, C00, D07...
  riasecPrimary: RIASECCode[];
  riasecScore: RIASECScore;
  summary: string;

  // Nghiên cứu tính cách & con người phù hợp
  personalityTraits: string[];
  suitableFor: string[];
  unsuitableFor: string[];

  // Structured Data Profiles
  skills: StructuredSkills;
  requiredSubjects: RequiredSubjects;
  subjects?: RequiredSubjects; // Direct alias for prompt specification
  careerPaths?: CareerPaths;
  salaryRanges?: SalaryRanges;
  marketOutlook?: MarketOutlook2025_2026;
  topUniversities?: UniversityInfo[]; // Direct alias for prompt specification

  // Backward compatible properties for existing components
  whatYouStudy: {
    coreFoundations: string[];
    specializedSubjects?: string[];
    practicalSkills: string[];
    exampleProjects?: string[];
  };

  whatYouDo: {
    entryRoles: string[];
    seniorRoles?: string[];
    longTermRoles?: string[];
    workEnvironments?: string[];
  };

  universities: UniversityInfo[];

  salaryBands: {
    internship?: string;
    freshGrad: string;
    midLevel?: string;
    experienced?: string;
    management: string;
  };

  comparisonCriteria: {
    coreNature: string;
    aiImpact: string;
    englishRole: string;
    freelancePotential: string;
    agencyOrBusiness: string;
    creativeFreedom: string;
    marketDemand2025_2030: string;
    stability: string;
    pressureLevel: string;
    personalityFit: string;
  };

  biasDebunking: {
    myth: string;
    reality: string;
    emotionalTrap: string;
  };

  roadmap: {
    grade12Prep: string;
    year1_2: string;
    year3_4: string;
    postGrad: string;
  };
}

export type MajorProfile = Major;

export interface QuizOption {
  text: string;
  badge?: string;
  riasecDelta: Partial<RIASECScore>;
  preferredMajors?: string[];
  insightNote: string;
}

export interface QuizQuestion {
  id: number;
  phase?: string;
  mentorPrompt: string;
  subNote?: string;
  options: QuizOption[];
}

export interface UserAssessmentState {
  userName: string;
  targetBlock: string;
  targetRegion: 'Toàn quốc' | 'Miền Bắc' | 'Miền Nam' | 'Miền Trung';
  interests: string[];
  emotionalFocus?: string;
  answers: Record<number, number>;
  riasecScore: RIASECScore;
  completed: boolean;
  savedMajorIds: string[];
  notes: string;
}

export interface ChatMessage {
  id: string;
  sender: 'mentor' | 'student';
  content: string;
  timestamp: string;
  groundingSources?: { title: string; url: string }[];
}
