import React, { useState } from 'react';
import { 
  BookOpen, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Bookmark, 
  Sparkles,
  FileDown,
  Layers,
  GraduationCap,
  ListOrdered
} from 'lucide-react';
import { REPORT_METADATA } from '../data/reportData';
import { FrontMatterSection } from './report/FrontMatterSection';
import { Chapter1Content } from './report/Chapter1Content';
import { Chapter2Content } from './report/Chapter2Content';
import { Chapter3Content } from './report/Chapter3Content';
import { Chapter4Content } from './report/Chapter4Content';
import { Chapter5Content } from './report/Chapter5Content';
import { BackMatterSection } from './report/BackMatterSection';
import { ExportDocumentModal } from './ExportDocumentModal';
import { ReportLoginLock } from './report/ReportLoginLock';
import { Lock, Unlock } from 'lucide-react';

interface ProjectReportViewProps {
  fontSizeClass?: 'text-sm' | 'text-base' | 'text-lg';
  setFontSizeClass?: (size: 'text-sm' | 'text-base' | 'text-lg') => void;
  isExportModalOpen?: boolean;
  setIsExportModalOpen?: (open: boolean) => void;
  isUnlocked?: boolean;
  onUnlock?: () => void;
  onLock?: () => void;
}

export const ProjectReportView: React.FC<ProjectReportViewProps> = ({
  fontSizeClass: propFontSize,
  setFontSizeClass: propSetFontSize,
  isExportModalOpen: propIsExportModalOpen,
  setIsExportModalOpen: propSetIsExportModalOpen,
  isUnlocked: propIsUnlocked,
  onUnlock: propOnUnlock,
  onLock: propOnLock,
}) => {
  const [localIsUnlocked, setLocalIsUnlocked] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('academic_report_auth') === 'unlocked';
    }
    return false;
  });

  const isUnlocked = propIsUnlocked ?? localIsUnlocked;
  const handleUnlock = () => {
    setLocalIsUnlocked(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('academic_report_auth', 'unlocked');
    }
    if (propOnUnlock) {
      propOnUnlock();
    }
  };

  const handleLock = () => {
    setLocalIsUnlocked(false);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('academic_report_auth');
    }
    if (propOnLock) {
      propOnLock();
    }
  };

  const [activeChapterFilter, setActiveChapterFilter] = useState<'all' | 'front' | 1 | 2 | 3 | 4 | 5 | 'back'>('all');
  const [localFontSize, setLocalFontSize] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-base');
  const [localExportModalOpen, setLocalExportModalOpen] = useState(false);

  const fontSizeClass = propFontSize ?? localFontSize;
  const isExportModalOpen = propIsExportModalOpen ?? localExportModalOpen;
  const setIsExportModalOpen = propSetIsExportModalOpen ?? setLocalExportModalOpen;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isUnlocked) {
    return <ReportLoginLock onUnlock={handleUnlock} />;
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* Quick Chapter Selector Bar (Non-sticky & clean, never covers or blocks document text) */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-1.5 overflow-x-auto print:hidden text-xs">
        <span className="font-bold text-slate-500 mr-1 pl-1 whitespace-nowrap flex items-center gap-1">
          <Bookmark className="w-3.5 h-3.5 text-indigo-600" />
          <span>เลือกแสดงส่วน:</span>
        </span>
        
        <button
          type="button"
          onClick={() => setActiveChapterFilter('all')}
          className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
            activeChapterFilter === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
          }`}
        >
          ทั้งหมด (ฉบับสมบูรณ์ พร้อมปก & สารบัญ)
        </button>

        <button
          type="button"
          onClick={() => setActiveChapterFilter('front')}
          className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors cursor-pointer ${
            activeChapterFilter === 'front'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-indigo-50/80 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
          }`}
        >
          ส่วนต้น (ปก, บทคัดย่อ, สารบัญ)
        </button>

        <button
          onClick={() => setActiveChapterFilter(1)}
          className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
            activeChapterFilter === 1
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          บทที่ 1: บทนำ
        </button>

        <button
          onClick={() => setActiveChapterFilter(2)}
          className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            activeChapterFilter === 2
              ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200'
              : 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>บทที่ 2: เอกสาร & กรอบแนวคิด</span>
        </button>

        <button
          onClick={() => setActiveChapterFilter(3)}
          className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
            activeChapterFilter === 3
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          บทที่ 3: วิธีดำเนินการวิจัย
        </button>

        <button
          onClick={() => setActiveChapterFilter(4)}
          className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
            activeChapterFilter === 4
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          บทที่ 4: ผลการวิจัย
        </button>

        <button
          onClick={() => setActiveChapterFilter(5)}
          className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
            activeChapterFilter === 5
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          บทที่ 5: สรุป & ข้อเสนอแนะ
        </button>

        <button
          onClick={() => setActiveChapterFilter('back')}
          className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors ${
            activeChapterFilter === 'back'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-indigo-50/80 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
          }`}
        >
          ส่วนท้าย (บรรณานุกรม & ภาคผนวก ก-ฉ)
        </button>

        <div className="ml-auto pl-2 border-l border-slate-200 shrink-0">
          <button
            type="button"
            onClick={handleLock}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-red-700 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
            title="ล็อกเอกสารรายงานวิจัยอีกครั้ง (ต้องระบุรหัส 43210344 ใหม่)"
          >
            <Lock className="w-3.5 h-3.5 text-slate-500 hover:text-red-600" />
            <span>ล็อกเอกสาร</span>
          </button>
        </div>
      </div>

      {/* Table of Contents Box (Quick Jump) */}
      <section className="p-5 border border-slate-200 rounded-2xl bg-indigo-50/40 print:hidden space-y-3">
        <div className="font-bold text-xs sm:text-sm text-indigo-950 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-indigo-700" />
            <span>สารบัญนำทางด่วนโครงงานวิจัย (Quick Roadmap Navigator)</span>
          </span>
          <span className="text-[11px] text-indigo-600 font-normal">คลิกเพื่อข้ามไปยังส่วนที่ต้องการ</span>
        </div>

        <div className="space-y-2 text-xs">
          {/* ส่วนต้น */}
          <div className="font-semibold text-slate-700 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>ส่วนต้น (Front Matter: ปก สารบัญ บทคัดย่อ)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-2">
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-cover-page'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">ปก</span> หน้าปกรายงานทางการ
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-abstract-th'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">บทคัดย่อ</span> ไทย & Abstract
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-table-of-contents'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">สารบัญ</span> สารบัญเนื้อหา/ตาราง/ภาพ
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-ready-toc'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-indigo-300 text-indigo-950 font-semibold">
              <span className="font-bold text-indigo-600">ตาราง</span> สารบัญแบบพร้อมใช้
            </button>
          </div>

          {/* บทที่ 1 */}
          <div className="font-semibold text-slate-700 flex items-center gap-1.5 pt-1 border-t border-indigo-200/50">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>บทที่ 1: บทนำ (Introduction)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-2">
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-1-1'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">1.1</span> ความเป็นมา & ปัญหา
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-1-2'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">1.2</span> วัตถุประสงค์ (3 ข้อ)
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-1-5'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">1.5</span> ขอบเขต & ตัวแปร
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-1-6'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">1.6</span> นิยามศัพท์เฉพาะ
            </button>
          </div>

          {/* บทที่ 2 */}
          <div className="font-semibold text-slate-700 flex items-center gap-1.5 pt-1 border-t border-indigo-200/50">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>บทที่ 2: เอกสารและงานวิจัยที่เกี่ยวข้อง (Literature Review & Framework)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-2">
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-2-1'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-indigo-200 text-indigo-900 font-semibold">
              <span className="font-bold text-indigo-600">2.1</span> Computer Vision & ทฤษฎีสี
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-2-2'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-indigo-200 text-indigo-900 font-semibold">
              <span className="font-bold text-indigo-600">2.2</span> Smart Wardrobe & ระเบียบ
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-2-3'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-indigo-200 text-indigo-900 font-semibold">
              <span className="font-bold text-indigo-600">2.3</span> วิจัยในและต่างประเทศ
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('fig-2-1'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-indigo-300 text-indigo-950 font-bold shadow-2xs">
              <span className="font-bold text-indigo-600">2.4</span> กรอบแนวคิดการวิจัย
            </button>
          </div>

          {/* บทที่ 3 */}
          <div className="font-semibold text-slate-700 flex items-center gap-1.5 pt-1 border-t border-indigo-200/50">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>บทที่ 3: วิธีดำเนินการวิจัย (Research Methodology & 6 Modules)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-2">
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-3-2'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">3.2</span> ปวช.3 หมู่บ้านครู 52/30 คน
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-3-3'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">3.3</span> เครื่องมือวิจัย 4 ด้าน
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-3-4'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-indigo-300 text-indigo-950 font-semibold">
              <span className="font-bold text-indigo-600">3.4</span> IOC = 0.933, Alpha = 0.924
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-3-5'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">3.5</span> การเก็บรวบรวม 6 ขั้นตอน
            </button>
          </div>

          {/* บทที่ 4 */}
          <div className="font-semibold text-slate-700 flex items-center gap-1.5 pt-1 border-t border-indigo-200/50">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>บทที่ 4: ผลการวิจัย (Research Findings & Testing)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-2">
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-4-1'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">4.1</span> ข้อมูลกลุ่มตัวอย่าง N=30
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-4-3'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-indigo-300 text-indigo-950 font-semibold">
              <span className="font-bold text-indigo-600">4.3</span> ความแม่นยำ 98.20% (250 ภาพ)
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-4-4'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">4.4</span> ความพึงพอใจ x̄ = 4.67
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-4-5'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">4.5</span> Paired t-test (t = 14.82*)
            </button>
          </div>

          {/* บทที่ 5 & ส่วนท้าย */}
          <div className="font-semibold text-slate-700 flex items-center gap-1.5 pt-1 border-t border-indigo-200/50">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            <span>บทที่ 5 และส่วนท้าย (Conclusion, References & Appendices)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pb-2">
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-5-1'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">5.1</span> สรุปผลการวิจัย 3 ข้อ
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-5-3'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">5.3</span> ข้อค้นพบ 4 ประเด็น
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('section-references'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">บรรณานุกรม</span> มาตรฐาน APA 7th
            </button>
            <button onClick={() => { setActiveChapterFilter('all'); scrollToSection('appendix-A'); }} className="text-left p-1.5 rounded bg-white hover:bg-indigo-50 border border-slate-200 text-slate-700">
              <span className="font-bold text-indigo-700">ภาคผนวก</span> ภาคผนวก ก - ฉ
            </button>
          </div>
        </div>
      </section>

      {/* Main Document Body (Academic Paper Style) */}
      <article id="project-report-article" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 lg:p-14 shadow-sm space-y-16">
        
        {/* ========================================================= */}
        {/* ส่วนต้น (Front Matter: ปก, ใบรับรอง, บทคัดย่อ, สารบัญ) */}
        {/* ========================================================= */}
        {(activeChapterFilter === 'all' || activeChapterFilter === 'front') && (
          <div className="front-matter-wrapper chapter-page-break">
            <FrontMatterSection onNavigateToSection={scrollToSection} />
          </div>
        )}

        {/* ========================================================= */}
        {/* บทที่ 1: บทนำ */}
        {/* ========================================================= */}
        {(activeChapterFilter === 'all' || activeChapterFilter === 1) && (
          <div className="chapter-wrapper chapter-page-break">
            <Chapter1Content />
          </div>
        )}

        {/* ========================================================= */}
        {/* บทที่ 2: เอกสารและงานวิจัยที่เกี่ยวข้อง (กรอบแนวคิดวิจัย) */}
        {/* ========================================================= */}
        {(activeChapterFilter === 'all' || activeChapterFilter === 2) && (
          <div className="chapter-wrapper chapter-page-break">
            <Chapter2Content />
          </div>
        )}

        {/* ========================================================= */}
        {/* บทที่ 3: วิธีดำเนินการวิจัย (ปวช. 3 วิทยาลัยเทคโนโลยีหมู่บ้านครู) */}
        {/* ========================================================= */}
        {(activeChapterFilter === 'all' || activeChapterFilter === 3) && (
          <div className="chapter-wrapper chapter-page-break">
            <Chapter3Content />
          </div>
        )}

        {/* ========================================================= */}
        {/* บทที่ 4: ผลการวิจัย */}
        {/* ========================================================= */}
        {(activeChapterFilter === 'all' || activeChapterFilter === 4) && (
          <div className="chapter-wrapper chapter-page-break">
            <Chapter4Content />
          </div>
        )}

        {/* ========================================================= */}
        {/* บทที่ 5: สรุป อภิปรายผล และข้อเสนอแนะ */}
        {/* ========================================================= */}
        {(activeChapterFilter === 'all' || activeChapterFilter === 5) && (
          <div className="chapter-wrapper chapter-page-break">
            <Chapter5Content />
          </div>
        )}

        {/* ========================================================= */}
        {/* ส่วนท้าย (Back Matter: บรรณานุกรม APA 7th & ภาคผนวก ก - ฉ) */}
        {/* ========================================================= */}
        {(activeChapterFilter === 'all' || activeChapterFilter === 'back') && (
          <div className="back-matter-wrapper chapter-page-break">
            <BackMatterSection />
          </div>
        )}

      </article>

      {/* Export Word & PDF Modal Dialog */}
      <ExportDocumentModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        activeChapterFilter={activeChapterFilter}
        onSelectAllChapters={() => setActiveChapterFilter('all')}
        targetElementId="project-report-article"
      />
    </div>
  );
};
