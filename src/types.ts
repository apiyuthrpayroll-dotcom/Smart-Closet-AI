export type NavTab = 
  | 'dashboard' 
  | 'scan' 
  | 'classify' 
  | 'wardrobe' 
  | 'analysis' 
  | 'recommendation' 
  | 'tryon' 
  | 'research' 
  | 'report';

export type ClothingCategory = 
  | 'tops' 
  | 'pants' 
  | 'skirts' 
  | 'dresses' 
  | 'outerwear' 
  | 'footwear' 
  | 'accessories';

export type OccasionType = 
  | 'ชุดนักเรียน ปวช.' 
  | 'นำเสนอโครงการธุรกิจดิจิทัล' 
  | 'ลำลอง/ไปเที่ยว' 
  | 'กิจกรรม/กีฬา' 
  | 'งานพิธีการ/ทางการ';

export interface ClothingItem {
  id: string;
  name: string;
  category: ClothingCategory;
  subCategory: string;
  color: string;
  colorHex: string;
  pattern: string;
  season: 'ทุกฤดู' | 'ร้อน' | 'ฝน' | 'หนาว';
  occasion: OccasionType[];
  image: string;
  material: string;
  wearCount: number;
  lastWornDate: string;
  addedAt: string;
  aiConfidence: number; // 0-100%
  favorite?: boolean;
  notes?: string;
}

export interface Outfit {
  id: string;
  title: string;
  occasion: OccasionType;
  topItem: ClothingItem;
  bottomItem: ClothingItem;
  outerwearItem?: ClothingItem;
  shoesItem?: ClothingItem;
  accessories?: ClothingItem[];
  matchScore: number; // 0-100%
  styleVibe: string;
  colorHarmony: string;
  weatherFit: string;
  aiStylingTip: string;
  isFavorite: boolean;
  createdAt: string;
  wornDates?: string[];
}

export interface ScanSession {
  id: string;
  source: 'camera' | 'upload' | 'preset';
  previewImage: string;
  status: 'idle' | 'scanning' | 'classifying' | 'completed';
  detectedItems: ClothingItem[];
  timestamp: string;
}

export interface SurveyResponse {
  id: string;
  respondentCode: string; // e.g., 'STU-01' to 'STU-30'
  gender: 'ชาย' | 'หญิง' | 'ไม่ระบุ';
  major: 'เทคโนโลยีธุรกิจดิจิทัล';
  year: 'ปวช. 3';
  ratings: {
    [questionId: string]: number; // 1 to 5
  };
  comments?: string;
}

export interface SurveyQuestion {
  id: string;
  category: 'accuracy' | 'efficiency' | 'satisfaction' | 'needs';
  text: string;
  subText?: string;
  mean: number;
  sd: number;
  level: string; // 'มากที่สุด' | 'มาก' | 'ปานกลาง'
}

export interface InterviewRecord {
  id: string;
  code: string;
  topic: string;
  quote: string;
  insight: string;
  sentiment: 'positive' | 'neutral' | 'constructive';
}

export interface AppSettings {
  userName: string;
  collegeName: string;
  department: string;
  targetAudience: string;
  preferredStyle: string;
  bodyType: 'slim' | 'standard' | 'athletic' | 'plus';
  avatarGender: 'female' | 'male';
  autoMatchWithWeather: boolean;
  themeColor: string;
}
