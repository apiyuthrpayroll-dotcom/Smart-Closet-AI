import React from 'react';
import { 
  Menu, 
  Search, 
  Sparkles, 
  Scan, 
  Shirt, 
  CheckCircle2, 
  HelpCircle,
  GraduationCap,
  BookOpen,
  Copy,
  Check,
  FileText,
  FileDown,
  Lock,
  Unlock
} from 'lucide-react';
import { NavTab } from '../types';
import { RESEARCH_METADATA } from '../data/mockData';
import { REPORT_METADATA } from '../data/reportData';

export interface ReportControls {
  fontSizeClass: 'text-sm' | 'text-base' | 'text-lg';
  setFontSizeClass: (size: 'text-sm' | 'text-base' | 'text-lg') => void;
  onCopyMarkdown: () => void;
  copied: boolean;
  onQuickExportWord: () => void;
  onPrint: () => void;
  isUnlocked?: boolean;
  onLock?: () => void;
}

interface HeaderProps {
  currentTab?: NavTab;
  activeTab?: NavTab;
  onOpenMobileMenu?: () => void;
  onQuickScan?: () => void;
  onQuickOutfit?: () => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  reportControls?: ReportControls;
  isReportUnlocked?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  activeTab,
  onOpenMobileMenu = () => {},
  onQuickScan = () => {},
  onQuickOutfit = () => {},
  searchQuery = '',
  onSearchChange = (_query: string) => {},
  reportControls,
  isReportUnlocked = false,
}) => {
  const tabKey = (currentTab || activeTab || 'dashboard') as NavTab;

  const titles: Record<NavTab, { title: string; subtitle: string }> = {
    dashboard: { 
      title: 'แดชบอร์ดระบบสแกนตู้เสื้อผ้า', 
      subtitle: 'ภาพรวมตู้เสื้อผ้านักเรียน ปวช. 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู' 
    },
    scan: { 
      title: 'ขั้นตอน 1: สแกนเสื้อผ้า (Scan Clothes)', 
      subtitle: 'ภาพประกอบที่ 3.1 • ตรวจจับเสื้อผ้าด้วย AI Computer Vision พร้อมสกัด Bounding Box' 
    },
    classify: { 
      title: 'ขั้นตอน 2: จัดหมวดหมู่อัตโนมัติ (Auto Classification)', 
      subtitle: 'ภาพประกอบที่ 3.2 • จำแนกประเภทเสื้อผ้า สกัดโทนสี เนื้อผ้า และโอกาสการใช้งาน' 
    },
    wardrobe: { 
      title: 'ขั้นตอน 3: สร้างคลังเก็บข้อมูลส่วนตัว (Digital Wardrobe Database)', 
      subtitle: 'ภาพประกอบที่ 3.3 • ฐานข้อมูลคลังเสื้อผ้าส่วนตัว ค้นหา กรอง และจัดหมวดหมู่' 
    },
    analysis: { 
      title: 'ขั้นตอน 4: สรุปและประมวลผลตู้เสื้อผ้า (Analysis & Verification)', 
      subtitle: 'ภาพประกอบที่ 3.4 • วิเคราะห์ความสมดุล สัดส่วนเสื้อผ้า วงล้อสี และประเมินความพร้อม' 
    },
    recommendation: { 
      title: 'ขั้นตอน 5: ค้นหาสไตล์และเสนอแนะชุด (Style Matching)', 
      subtitle: 'ภาพประกอบที่ 3.5 • ผสมผสานชุดตามโอกาส คำนวณ Match Score พร้อมข้อแนะนำ' 
    },
    tryon: { 
      title: 'ขั้นตอน 6: ลองชุดเสมือนจริงและพร้อมใช้งาน (Virtual Try-On)', 
      subtitle: 'ภาพประกอบที่ 3.6 • จำลองการสวมใส่ชุดบนหุ่นโมเดลเสมือนจริงแบบเรียลไทม์' 
    },
    research: { 
      title: 'ระเบียบวิธีวิจัยและผลการประเมิน (3.1 - 3.5)', 
      subtitle: 'ประชากร 52 คน, กลุ่มตัวอย่าง 30 คน (Purposive Sampling), เครื่องมือ, การเก็บข้อมูล และสถิติ' 
    },
    report: { 
      title: 'เอกสารรายงานโครงการวิจัยฉบับสมบูรณ์ (5 บท)', 
      subtitle: 'การพัฒนาโครงการ สแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที วิทยาลัยเทคโนโลยีหมู่บ้านครู' 
    },
  };

  const currentInfo = titles[tabKey] || titles.dashboard;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Mobile Toggle + Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="เปิดเมนูนำทาง"
          >
            <Menu className="w-5 h-5" />
          </button>

          {tabKey === 'report' ? (
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-xl hidden sm:flex shrink-0 ${
                isReportUnlocked ? 'bg-indigo-50 text-indigo-700' : 'bg-amber-50 text-amber-700'
              }`}>
                {isReportUnlocked ? <BookOpen className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>รายงานโครงการวิจัยฉบับสมบูรณ์ (5 บท)</span>
                  {isReportUnlocked ? (
                    <span className="hidden sm:inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full flex items-center gap-1">
                      <Unlock className="w-3 h-3 text-emerald-600" />
                      <span>ปลดล็อกแล้ว</span>
                    </span>
                  ) : (
                    <span className="hidden sm:inline-block px-2 py-0.5 bg-amber-100 text-amber-900 text-[11px] font-bold rounded-full flex items-center gap-1">
                      <Lock className="w-3 h-3 text-amber-700" />
                      <span>รหัสล็อก: 43210344</span>
                    </span>
                  )}
                </h1>
                <p className="text-xs text-slate-500 hidden sm:block truncate max-w-sm md:max-w-md lg:max-w-lg">
                  {REPORT_METADATA.projectTitleTh} • {REPORT_METADATA.institution}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span>{currentInfo.title}</span>
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">
                {currentInfo.subtitle}
              </p>
            </div>
          )}
        </div>

        {/* Right: Quick Action Controls & Badges */}
        {tabKey === 'report' && reportControls ? (
          <div className="flex items-center flex-wrap gap-2">
            {/* Font scale buttons */}
            <div className="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-xs font-semibold">
              <button 
                type="button"
                onClick={() => reportControls.setFontSizeClass('text-sm')} 
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  reportControls.fontSizeClass === 'text-sm' ? 'bg-white shadow-xs text-indigo-700 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="ขนาดตัวอักษรเล็ก"
              >
                A-
              </button>
              <button 
                type="button"
                onClick={() => reportControls.setFontSizeClass('text-base')} 
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  reportControls.fontSizeClass === 'text-base' ? 'bg-white shadow-xs text-indigo-700 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="ขนาดตัวอักษรปกติ"
              >
                A
              </button>
              <button 
                type="button"
                onClick={() => reportControls.setFontSizeClass('text-lg')} 
                className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                  reportControls.fontSizeClass === 'text-lg' ? 'bg-white shadow-xs text-indigo-700 font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="ขนาดตัวอักษรใหญ่"
              >
                A+
              </button>
            </div>

            <button
              type="button"
              onClick={reportControls.onCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
              title="คัดลอกบทคัดย่อโครงงาน"
            >
              {reportControls.copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{reportControls.copied ? 'คัดลอกแล้ว!' : 'คัดลอกบทคัดย่อ'}</span>
              <span className="md:hidden">บทคัดย่อ</span>
            </button>

            {/* Quick Word (.doc) download button */}
            <button
              type="button"
              onClick={reportControls.onQuickExportWord}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50/90 hover:bg-blue-100 text-blue-800 text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
              title="ดาวน์โหลดเป็นไฟล์ Microsoft Word (.doc) พร้อมปก สารบัญ และ 5 บท"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Word (.doc)</span>
            </button>

            {/* Main Print / Export PDF Button that opens the modal */}
            <button
              type="button"
              onClick={reportControls.onPrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold transition-colors shadow-xs cursor-pointer"
              title="ส่งออกเอกสารรายงานโครงการวิจัยเป็น Word และ PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">พิมพ์ / Export PDF</span>
              <span className="sm:hidden">พิมพ์/PDF</span>
            </button>

            {/* Lock / Logout Report button */}
            {reportControls.onLock && (
              <button
                type="button"
                onClick={reportControls.onLock}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 text-xs font-medium transition-colors shadow-2xs cursor-pointer"
                title="ล็อกเอกสารรายงานวิจัยอีกครั้ง (ต้องใส่รหัส 43210344 ใหม่)"
              >
                <Lock className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">ล็อกเอกสาร</span>
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            {/* Institution mini tag */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-700">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-medium">{RESEARCH_METADATA.department}</span>
            </div>

            <button
              onClick={onQuickScan}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Scan className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">สแกนตู้เสื้อผ้า</span>
            </button>

            <button
              onClick={onQuickOutfit}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>จัดชุดทันที</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
