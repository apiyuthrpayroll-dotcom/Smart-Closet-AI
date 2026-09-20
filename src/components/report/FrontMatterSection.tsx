import React, { useState } from 'react';
import { 
  REPORT_METADATA, 
  TABLE_OF_CONTENTS, 
  LIST_OF_TABLES, 
  LIST_OF_FIGURES,
  TocItem
} from '../../data/reportData';
import { SchoolLogo } from '../SchoolLogo';
import { 
  FileText, 
  BookOpen, 
  Bookmark, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  School, 
  Calendar, 
  Users, 
  Table, 
  Image as ImageIcon, 
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  Printer,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

interface FrontMatterSectionProps {
  onNavigateToSection?: (sectionId: string) => void;
}

export const FrontMatterSection: React.FC<FrontMatterSectionProps> = ({ onNavigateToSection }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'cover' | 'inner-cover' | 'approval' | 'abstract' | 'ack' | 'toc' | 'lot' | 'lof'>('all');
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleJump = (sectionId: string) => {
    if (onNavigateToSection) {
      onNavigateToSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCopyReadyToc = () => {
    const lines = [
      'สรุปเป็นสารบัญแบบพร้อมใช้ (ตามมาตรฐาน สอศ. กระทรวงศึกษาธิการ)',
      'ลำดับ\tรายการ\tหน้า',
      '-\tปกนอก (Outer Cover)\tก',
      '-\tปกใน (Inner Cover)\tข',
      '-\tใบรับรองโครงการ (Project Endorsement)\tค',
      '-\tบทคัดย่อภาษาไทย (Thai Abstract)\tง',
      '-\tAbstract (English Abstract)\tจ',
      '-\tกิตติกรรมประกาศ (Acknowledgements)\tฉ',
      '-\tสารบัญ (Table of Contents)\tช',
      '-\tสารบัญตาราง (List of Tables)\tซ',
      '-\tสารบัญภาพ (List of Figures)\tฌ',
      'บทที่ 1\tบทนำ\t1',
      '1.1\tความเป็นมาและความสำคัญของปัญหา\t1',
      '1.2\tวัตถุประสงค์ของโครงการ\t4',
      '1.3\tขอบเขตของโครงการ\t6',
      '1.4\tสมมติฐานของการศึกษา\t7',
      '1.5\tข้อจำกัดของโครงการ\t7',
      '1.6\tนิยามศัพท์เฉพาะ\t8',
      '1.7\tประโยชน์ที่คาดว่าจะได้รับ\t9',
      'บทที่ 2\tเอกสารและทฤษฎีที่เกี่ยวข้อง\t11',
      '2.1\tหลักการ ทฤษฎี และเทคโนโลยีที่ใช้ในการพัฒนา\t11',
      '2.2\tกฎระเบียบและมาตรฐานการแต่งกายนักเรียน ปวช.\t15',
      '2.3\tทฤษฎีจิตวิทยาการตัดสินใจและทฤษฎีสี\t17',
      '2.4\tงานวิจัยและโครงการวิชาชีพที่เกี่ยวข้อง\t19',
      '2.5\tกรอบแนวคิดในการจัดทำโครงการ\t23',
      'บทที่ 3\tวิธีการดำเนินงานโครงการ\t27',
      '3.1\tขั้นตอนการดำเนินงานโครงการ (PDCA/SDLC)\t27',
      '3.2\tประชากรและกลุ่มตัวอย่าง\t28',
      '3.3\tเครื่องมือที่ใช้ในการดำเนินงานโครงการ\t29',
      '3.4\tการสร้างและตรวจสอบคุณภาพเครื่องมือ (IOC & Cronbach)\t31',
      '3.5\tวิธีการเก็บรวบรวมข้อมูล\t33',
      '3.6\tการวิเคราะห์ข้อมูลและสถิติที่ใช้\t35',
      '3.7\tผังงานกระบวนการดำเนินงาน (Flowchart)\t37',
      '3.8\tแผนการปฏิบัติงาน (Gantt Chart)\t39',
      'บทที่ 4\tผลการดำเนินงานโครงการและการวิเคราะห์ข้อมูล\t41',
      '4.1\tผลการพัฒนาชิ้นงาน/ระบบ 6 โมดูลหลัก\t41',
      '4.2\tผลการทดสอบประสิทธิภาพของระบบ (ความแม่นยำ 98.2%)\t47',
      '4.3\tผลการประเมินความพึงพอใจของกลุ่มตัวอย่าง\t50',
      '4.4\tผลการทดสอบสมมติฐาน (Paired t-test t=14.82)\t53',
      '4.5\tสรุปผลการวิเคราะห์ข้อมูลโครงการ\t55',
      'บทที่ 5\tสรุปผล อภิปรายผล และข้อเสนอแนะ\t57',
      '5.1\tสรุปผลการดำเนินงานโครงการ\t57',
      '5.2\tอภิปรายผลการดำเนินงานโครงการ\t59',
      '5.3\tปัญหา อุปสรรค และแนวทางแก้ไข\t62',
      '5.4\tข้อเสนอแนะในการนำผลงานไปประยุกต์ใช้\t64',
      '5.5\tข้อเสนอแนะในการจัดทำโครงการครั้งต่อไป\t66',
      '-\tบรรณานุกรม (APA 7th Edition)\t68',
      '-\tภาคผนวก (ก - ฉ)\t72'
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <div id="front-matter-container" className="space-y-12">
      {/* Front Matter Quick Navigation Filter (Screen Only) */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 print:hidden space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-red-100 text-red-700 rounded-lg">
              <Bookmark className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              ส่วนต้นของเอกสารรายงานโครงการวิจัย (ตามมาตรฐานกระทรวงศึกษาธิการ / สอศ.)
            </span>
          </div>

          <button
            onClick={handleCopyReadyToc}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 shadow-2xs transition-colors"
            title="คัดลอกตารางสารบัญแบบพร้อมใช้เป็นข้อความ"
          >
            {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copiedSummary ? 'คัดลอกสารบัญแล้ว' : 'คัดลอกสารบัญแบบพร้อมใช้'}</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5 text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            แสดงทุกส่วนต้น
          </button>
          <button
            onClick={() => setActiveTab('cover')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'cover'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            ปกนอก (Outer Cover)
          </button>
          <button
            onClick={() => setActiveTab('inner-cover')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'inner-cover'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            ปกใน (Inner Cover)
          </button>
          <button
            onClick={() => setActiveTab('approval')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'approval'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            ใบรับรองโครงการ
          </button>
          <button
            onClick={() => setActiveTab('abstract')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'abstract'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            บทคัดย่อ (ไทย/En)
          </button>
          <button
            onClick={() => setActiveTab('ack')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'ack'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            กิตติกรรมประกาศ
          </button>
          <button
            onClick={() => setActiveTab('toc')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'toc'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            สารบัญ
          </button>
          <button
            onClick={() => setActiveTab('lot')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'lot'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            สารบัญตาราง
          </button>
          <button
            onClick={() => setActiveTab('lof')}
            className={`px-3 py-1 rounded-lg font-medium transition-colors ${
              activeTab === 'lof'
                ? 'bg-red-700 text-white shadow-2xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            สารบัญภาพ
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. ปกนอก (Outer Cover Page) ตามมาตรฐาน สอศ. กระทรวงศึกษาธิการ */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'cover') && (
        <section 
          id="front-cover-section" 
          className="academic-cover-page border-4 border-double border-slate-800 p-8 sm:p-14 rounded-2xl bg-white text-center space-y-7 relative overflow-hidden shadow-xs print:p-12 print:border-slate-800"
        >
          {/* Official School Logo - Diameter 2.5-3.0 inches (7.0 - 7.5 cm) */}
          <div className="pt-2">
            <SchoolLogo className="w-28 h-28 sm:w-32 sm:h-32 mx-auto drop-shadow-xs" />
          </div>

          {/* Institution Jurisdiction Header */}
          <div className="space-y-1">
            <div className="text-xs sm:text-sm font-serif font-bold text-slate-700 tracking-wider">
              {REPORT_METADATA.jurisdiction}
            </div>
            <div className="text-base sm:text-xl font-serif font-extrabold text-slate-900 tracking-wide">
              {REPORT_METADATA.institution}
            </div>
          </div>

          {/* Project Titles */}
          <div className="py-6 space-y-4 max-w-3xl mx-auto border-y-2 border-slate-800/20">
            <div className="text-xs uppercase font-bold tracking-widest text-red-700">
              รายงานโครงการวิจัยฉบับสมบูรณ์ (5 บท)
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif leading-snug">
              {REPORT_METADATA.projectTitleTh}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-serif italic max-w-2xl mx-auto leading-relaxed uppercase">
              {REPORT_METADATA.projectTitleEn}
            </p>
          </div>

          {/* Research Authors with Student IDs */}
          <div className="pt-4 pb-2 space-y-3 max-w-lg mx-auto text-center">
            <div className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
              ผู้จัดทำโครงการ
            </div>
            <div className="space-y-1 text-xs sm:text-sm font-serif text-slate-800">
              {REPORT_METADATA.authors.map((a, idx) => (
                <div key={a.id}>
                  {idx + 1}. {a.name} (รหัสประจำตัว {a.studentId})
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-600 font-medium pt-1">
              {REPORT_METADATA.authorGroupText}
            </div>
          </div>

          {/* Submission Statement according to Ministry of Education Standards */}
          <div className="pt-6 border-t border-slate-200 text-xs font-serif text-slate-700 max-w-2xl mx-auto space-y-1 leading-relaxed">
            <div>{REPORT_METADATA.submissionStatementTh}</div>
            <div className="font-bold text-slate-900 text-sm mt-2">ปีการศึกษา {REPORT_METADATA.academicYear}</div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 2. ปกใน (Inner Cover Page) ตามมาตรฐาน สอศ. กระทรวงศึกษาธิการ */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'inner-cover') && (
        <section 
          id="front-inner-cover-section" 
          className="academic-cover-page border-2 border-slate-300 p-8 sm:p-14 rounded-2xl bg-white text-center space-y-7 relative overflow-hidden shadow-xs print:p-12 print:border-slate-800"
        >
          <div className="text-right text-xs text-slate-400 font-mono">
            หน้า ข (ปกใน)
          </div>

          {/* School Logo */}
          <div>
            <SchoolLogo className="w-24 h-24 sm:w-28 sm:h-28 mx-auto opacity-95" />
          </div>

          {/* Titles */}
          <div className="py-4 space-y-3 max-w-3xl mx-auto">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              รหัสวิชา {REPORT_METADATA.courseCode} {REPORT_METADATA.courseName}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif leading-snug">
              {REPORT_METADATA.projectTitleTh}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-serif italic max-w-2xl mx-auto leading-relaxed uppercase">
              {REPORT_METADATA.projectTitleEn}
            </p>
          </div>

          {/* Authors */}
          <div className="pt-2 pb-2 space-y-2 max-w-lg mx-auto">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              ผู้จัดทำโครงการ
            </div>
            <div className="space-y-1 text-xs sm:text-sm font-serif text-slate-800">
              {REPORT_METADATA.authors.map((a, idx) => (
                <div key={a.id}>
                  {idx + 1}. {a.name} (รหัสประจำตัว {a.studentId})
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-500 font-serif pt-1">
              {REPORT_METADATA.authorGroupText}
            </div>
          </div>

          {/* Advisors Box */}
          <div className="pt-4 border-t border-slate-200 max-w-md mx-auto text-xs font-serif space-y-2">
            <div className="font-bold text-slate-900 flex items-center justify-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-red-700" />
              <span>ครูที่ปรึกษาโครงการ</span>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-slate-800 space-y-1">
              {REPORT_METADATA.advisors.map((adv, idx) => (
                <div key={idx} className="flex justify-between items-center px-2">
                  <span className="font-semibold">{adv.name}</span>
                  <span className="text-slate-500 text-xs">{adv.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Statement */}
          <div className="pt-4 text-xs font-serif text-slate-600 max-w-2xl mx-auto space-y-1">
            <div>{REPORT_METADATA.submissionStatementTh}</div>
            <div className="font-bold text-slate-800 mt-1">ปีการศึกษา {REPORT_METADATA.academicYear}</div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 3. ใบรับรองโครงการ (Project Endorsement / Approval Form) */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'approval') && (
        <section 
          id="front-approval-section" 
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-xs space-y-7 font-serif text-slate-800"
        >
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono border-b border-slate-100 pb-2">
            <span>แบบฟอร์ม บร-ค-01 (สอศ.)</span>
            <span>หน้า ค (ใบรับรองโครงการ)</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <SchoolLogo className="w-20 h-20 mx-auto mb-2" />
            <div className="text-sm font-bold text-slate-700">{REPORT_METADATA.institution}</div>
            <h2 className="text-2xl font-extrabold text-slate-900 underline underline-offset-8">
              ใบรับรองโครงการ
            </h2>
            <div className="text-xs text-slate-500">
              Certificate of Project Approval (สอศ. กระทรวงศึกษาธิการ)
            </div>
          </div>

          {/* Project Details Box */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm space-y-2 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900 sm:col-span-1">ชื่อโครงการ:</span>
              <span className="font-semibold text-slate-900 sm:col-span-3">{REPORT_METADATA.projectTitleTh}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-700 sm:col-span-1">ชื่อภาษาอังกฤษ:</span>
              <span className="italic text-slate-700 sm:col-span-3">{REPORT_METADATA.projectTitleEn}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 pt-1">
              <span className="font-bold text-slate-900 sm:col-span-1">ผู้จัดทำโครงการ:</span>
              <div className="sm:col-span-3 space-y-1">
                {REPORT_METADATA.authors.map((a, i) => (
                  <div key={a.id}>
                    {i + 1}. {a.name} &nbsp; <span className="text-slate-500 font-mono">(รหัสประจำตัว {a.studentId})</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1 pt-1">
              <span className="font-bold text-slate-900 sm:col-span-1">หลักสูตร:</span>
              <span className="sm:col-span-3">{REPORT_METADATA.curriculum}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900 sm:col-span-1">สาขาวิชา / แผนก:</span>
              <span className="sm:col-span-3">{REPORT_METADATA.faculty} &bull; {REPORT_METADATA.department}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900 sm:col-span-1">ปีการศึกษา:</span>
              <span className="sm:col-span-3">{REPORT_METADATA.academicYear}</span>
            </div>
          </div>

          {/* Endorsement Statement */}
          <div className="text-xs sm:text-sm text-justify leading-relaxed indent-8 pt-2">
            คณะกรรมการสอบและประเมินโครงการ ได้พิจารณาเอกสารรายงานและผลงานการพัฒนาระบบฉบับนี้แล้ว มีมติเห็นชอบให้
            <strong>อนุมัตินับเป็นส่วนหนึ่งของการศึกษาตามหลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) พุทธศักราช 2567</strong> ของ
            สำนักงานคณะกรรมการการอาชีวศึกษา กระทรวงศึกษาธิการ
          </div>

          {/* Signatures Table according to Ministry of Education Standard */}
          <div className="pt-4 space-y-6">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b border-slate-200 pb-1">
              คณะกรรมการสอบและประเมินโครงการ
            </div>

            {/* Advisory Signatures */}
            <div id="advisory-signatures-block" className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-xs">
              <div className="space-y-1">
                <div className="text-slate-400 font-mono tracking-widest text-xs pb-1 select-none">.....................................................</div>
                <div className="font-bold text-slate-900">(อาจารย์ณัฐพล ภัทรเดชากุล)</div>
                <div className="text-slate-600">ครูที่ปรึกษาโครงการ</div>
                <div className="text-slate-400 text-[11px]">วันที่ ..... เดือน ................ พ.ศ. 2568</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-mono tracking-widest text-xs pb-1 select-none">.....................................................</div>
                <div className="font-bold text-slate-900">(อาจารย์กัญญาพัชร สิทธิโชค)</div>
                <div className="text-slate-600">ครูที่ปรึกษาร่วม</div>
                <div className="text-slate-400 text-[11px]">วันที่ ..... เดือน ................ พ.ศ. 2568</div>
              </div>
            </div>

            {/* Committee Examination Board */}
            <div id="committee-signatures-block" className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <div className="text-slate-400 font-mono tracking-widest text-xs pb-1 select-none">.....................................................</div>
                <div className="font-bold text-slate-900">(อาจารย์พิชัย รัตนประสิทธิ์)</div>
                <div className="text-slate-600">กรรมการผู้ทรงคุณวุฒิ</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-mono tracking-widest text-xs pb-1 select-none">.....................................................</div>
                <div className="font-bold text-slate-900">(อาจารย์วันทนี บุญประสพ)</div>
                <div className="text-slate-600">หัวหน้าแผนกวิชาเทคโนโลยีธุรกิจดิจิทัล</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-400 font-mono tracking-widest text-xs pb-1 select-none">.....................................................</div>
                <div className="font-bold text-slate-900">(อาจารย์ประจักษ์ เกียรติภิญโญ)</div>
                <div className="text-slate-600">รองผู้อำนวยการฝ่ายวิชาการ</div>
              </div>
            </div>

            {/* Director Approval */}
            <div id="director-approval-block" className="text-center text-xs pt-4 border-t border-slate-200 space-y-1 max-w-sm mx-auto">
              <div className="text-slate-600 font-semibold mb-2">อนุมัติให้เป็นส่วนหนึ่งของหลักสูตร</div>
              <div className="text-slate-400 font-mono tracking-widest text-xs pb-1 select-none">.....................................................</div>
              <div className="font-bold text-slate-900 text-sm mt-1">(ดร.สุภาพร ศิริวัฒนานภรณ์)</div>
              <div className="text-slate-700 font-medium">ผู้อำนวยการวิทยาลัยเทคโนโลยีหมู่บ้านครู</div>
              <div className="text-slate-400 text-[11px]">วันที่ ..... เดือน ................ พ.ศ. 2568</div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 4. บทคัดย่อภาษาไทย (Thai Abstract) ตามมาตรฐาน สอศ. */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'abstract') && (
        <section id="front-abstract-th-section" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono border-b border-slate-100 pb-2">
            <span>บทคัดย่อภาษาไทย</span>
            <span>หน้า ง</span>
          </div>

          <div className="text-center space-y-2 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              บทคัดย่อ
            </h2>
            <div className="text-xs text-slate-500 font-serif">
              โครงการการพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที
            </div>
          </div>

          {/* Academic Header Table for Abstract according to MOE */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-serif space-y-1.5 leading-relaxed text-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">ชื่อโครงการ:</span>
              <span className="sm:col-span-3">{REPORT_METADATA.projectTitleTh}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">ผู้จัดทำโครงการ:</span>
              <span className="sm:col-span-3">1. นายภูวิศ วงศ์สิริโชค (66209010001) &nbsp; 2. นางสาวกัญญารัตน์ สุขสวัสดิ์ (66209010014) &nbsp; 3. นายธนกฤต ประเสริฐชัย (66209010025)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">ครูที่ปรึกษา:</span>
              <span className="sm:col-span-3">{REPORT_METADATA.advisors[0].name} (อาจารย์ที่ปรึกษาหลัก), {REPORT_METADATA.advisors[1].name} (อาจารย์ที่ปรึกษาร่วม)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">ระดับการศึกษา:</span>
              <span className="sm:col-span-3">{REPORT_METADATA.degreeLevel} สาขาวิชา{REPORT_METADATA.faculty}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">สถานศึกษา:</span>
              <span className="sm:col-span-3">{REPORT_METADATA.institution} สังกัด{REPORT_METADATA.jurisdiction} ปีการศึกษา {REPORT_METADATA.academicYear}</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8 space-y-3">
            <p>
              {REPORT_METADATA.abstractTh}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-800">คำสำคัญ:</span>
            {REPORT_METADATA.keywordsTh.map((kw, i) => (
              <span key={i} className="px-2.5 py-1 bg-red-50 text-red-900 border border-red-200 rounded-md font-medium">
                {kw}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 5. Abstract (ภาษาอังกฤษ) */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'abstract') && (
        <section id="front-abstract-en-section" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono border-b border-slate-100 pb-2">
            <span>English Abstract</span>
            <span>Page e (หน้า จ)</span>
          </div>

          <div className="text-center space-y-2 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              ABSTRACT
            </h2>
            <div className="text-xs text-slate-500 font-serif uppercase">
              {REPORT_METADATA.projectTitleEn}
            </div>
          </div>

          {/* Academic Header Table for English Abstract */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs font-serif space-y-1.5 leading-relaxed text-slate-800">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">Project Title:</span>
              <span className="sm:col-span-3 italic">{REPORT_METADATA.projectTitleEn}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">Researchers:</span>
              <span className="sm:col-span-3">1. Mr. Phuwit Wongsirichok &nbsp; 2. Ms. Kanyarat Suksawat &nbsp; 3. Mr. Thanakrit Prasertchai</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">Project Advisor:</span>
              <span className="sm:col-span-3">Mr. Natthapol Pattaradechakul (Major Advisor), Ms. Kanyapat Sitthichok (Co-Advisor)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">Degree & Major:</span>
              <span className="sm:col-span-3">Vocational Certificate (V.C.) in Digital Business Technology</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
              <span className="font-bold text-slate-900">Institution:</span>
              <span className="sm:col-span-3">Mubankru Technological College, Office of Vocational Education Commission, 2025</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8 space-y-3">
            <p>
              {REPORT_METADATA.abstractEn}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-800">Keywords:</span>
            {REPORT_METADATA.keywordsEn.map((kw, i) => (
              <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-800 border border-slate-200 rounded-md font-medium">
                {kw}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 6. กิตติกรรมประกาศ (Acknowledgements) */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'ack') && (
        <section id="front-ack-section" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex justify-between items-center text-xs text-slate-400 font-mono border-b border-slate-100 pb-2">
            <span>กิตติกรรมประกาศ</span>
            <span>หน้า ฉ</span>
          </div>

          <div className="text-center space-y-1 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              กิตติกรรมประกาศ
            </h2>
            <div className="text-xs text-slate-500 font-serif">
              Acknowledgements & Gratitude Statement
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif text-justify indent-8 space-y-4">
            {REPORT_METADATA.acknowledgements.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-8 text-right font-serif text-xs sm:text-sm text-slate-800 space-y-1">
            <div className="font-bold">คณะผู้จัดทำโครงการวิจัย</div>
            <div className="text-slate-600 text-xs">{REPORT_METADATA.authorGroupText}</div>
            <div className="text-slate-600 text-xs">{REPORT_METADATA.institution}</div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 7. สารบัญ (Table of Contents) */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'toc') && (
        <section id="front-toc-section" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 gap-2">
            <div>
              <div className="text-xs text-slate-400 font-mono">หน้า ช</div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-700" />
                <span>สารบัญ (Table of Contents)</span>
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-serif">
              คลิกที่ชื่อหัวข้อเพื่อกระโดดไปยังเนื้อหาทันที
            </div>
          </div>

          {/* TOC Header Row */}
          <div className="flex justify-between items-center text-xs font-bold text-slate-800 border-b-2 border-slate-800 pb-2">
            <span>รายการ / หัวข้อ</span>
            <span className="w-16 text-right">หน้า</span>
          </div>

          {/* TOC Items List */}
          <div className="divide-y divide-slate-100 text-xs sm:text-sm font-serif">
            {TABLE_OF_CONTENTS.map(item => {
              const isChapter = item.level === 'chapter';
              const isFrontOrBack = item.level === 'front' || item.level === 'back';
              const isSub = item.level === 'sub';

              return (
                <div
                  key={item.id}
                  onClick={() => handleJump(item.sectionId)}
                  className={`py-2 px-1.5 flex items-baseline justify-between gap-2 hover:bg-red-50/70 rounded-lg cursor-pointer transition-colors group ${
                    isChapter 
                      ? 'font-bold text-slate-900 pt-3 bg-slate-50/50' 
                      : isFrontOrBack 
                        ? 'font-semibold text-slate-800' 
                        : 'text-slate-600 pl-6 sm:pl-8'
                  }`}
                >
                  <div className="flex items-baseline gap-2 truncate">
                    {item.number && (
                      <span className={`font-mono text-xs shrink-0 ${isChapter ? 'text-red-700 font-bold' : 'text-slate-500'}`}>
                        {item.number}
                      </span>
                    )}
                    <span className="group-hover:text-red-700 transition-colors truncate">
                      {item.title}
                    </span>
                    <span className="hidden sm:inline text-slate-400 text-xs italic truncate">
                      {item.englishTitle ? `(${item.englishTitle})` : ''}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="border-b border-dotted border-slate-300 w-8 sm:w-16"></span>
                    <span className="font-mono text-xs font-semibold text-slate-700 w-8 text-right">
                      {item.page}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 8. สารบัญตาราง (List of Tables) */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'lot') && (
        <section id="front-lot-section" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 gap-2">
            <div>
              <div className="text-xs text-slate-400 font-mono">หน้า ซ</div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
                <Table className="w-5 h-5 text-red-700" />
                <span>สารบัญตาราง (List of Tables)</span>
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-serif">
              รวมตารางวิชาการ 9 ตาราง
            </div>
          </div>

          <div className="flex justify-between items-center text-xs font-bold text-slate-800 border-b-2 border-slate-800 pb-2">
            <span>ตารางที่ / ชื่อตาราง</span>
            <span className="w-16 text-right">หน้า</span>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm font-serif">
            {LIST_OF_TABLES.map(tab => (
              <div
                key={tab.number}
                onClick={() => handleJump(tab.targetId)}
                className="py-2.5 px-1.5 flex items-baseline justify-between gap-2 hover:bg-red-50/70 rounded-lg cursor-pointer transition-colors group"
              >
                <div className="flex items-baseline gap-2 truncate">
                  <span className="font-mono text-xs font-bold text-red-700 shrink-0">
                    {tab.number}
                  </span>
                  <span className="text-slate-800 group-hover:text-red-700 transition-colors truncate">
                    {tab.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="border-b border-dotted border-slate-300 w-8 sm:w-16"></span>
                  <span className="font-mono text-xs font-semibold text-slate-700 w-8 text-right">
                    {tab.page}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 9. สารบัญภาพ (List of Figures) */}
      {/* ========================================================= */}
      {(activeTab === 'all' || activeTab === 'lof') && (
        <section id="front-lof-section" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 gap-2">
            <div>
              <div className="text-xs text-slate-400 font-mono">หน้า ฌ</div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-red-700" />
                <span>สารบัญภาพ (List of Figures)</span>
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-serif">
              รวมภาพแผนภาพ สถาปัตยกรรม และหน้าจอระบบ 10 ภาพ
            </div>
          </div>

          <div className="flex justify-between items-center text-xs font-bold text-slate-800 border-b-2 border-slate-800 pb-2">
            <span>ภาพที่ / ชื่อภาพ</span>
            <span className="w-16 text-right">หน้า</span>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm font-serif">
            {LIST_OF_FIGURES.map(fig => (
              <div
                key={fig.number}
                onClick={() => handleJump(fig.targetId)}
                className="py-2.5 px-1.5 flex items-baseline justify-between gap-2 hover:bg-red-50/70 rounded-lg cursor-pointer transition-colors group"
              >
                <div className="flex items-baseline gap-2 truncate">
                  <span className="font-mono text-xs font-bold text-red-700 shrink-0">
                    {fig.number}
                  </span>
                  <span className="text-slate-800 group-hover:text-red-700 transition-colors truncate">
                    {fig.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="border-b border-dotted border-slate-300 w-8 sm:w-16"></span>
                  <span className="font-mono text-xs font-semibold text-slate-700 w-8 text-right">
                    {fig.page}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 10. สรุปเป็นสารบัญแบบพร้อมใช้ (Ready-to-use Table) */}
      {/* ========================================================= */}
      <section className="bg-gradient-to-br from-red-50/40 via-white to-slate-50 border-2 border-slate-300 rounded-2xl p-6 sm:p-8 space-y-5 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-red-100 text-red-900 rounded-full text-xs font-bold">
              <Sparkles className="w-3 h-3 text-red-600" />
              <span>สรุปเป็นสารบัญแบบพร้อมใช้ (ตามมาตรฐาน สอศ. กระทรวงศึกษาธิการ)</span>
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
              โครงสร้างเอกสารรายงานโครงการวิจัย 5 บท ครบถ้วนทุกกระบวนการ
            </h3>
          </div>

          <button
            onClick={handleCopyReadyToc}
            className="flex items-center gap-2 px-3.5 py-2 bg-red-700 hover:bg-red-800 active:bg-red-900 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            {copiedSummary ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedSummary ? 'คัดลอกลงคลิปบอร์ดแล้ว!' : 'คัดลอกตารางสารบัญนี้'}</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif">
          ตารางสรุปสารบัญตามมาตรฐานการจัดทำโครงการวิชาชีพ สำนักงานคณะกรรมการการอาชีวศึกษา (สอศ.) กระทรวงศึกษาธิการ แบ่งโครงสร้างเป็นส่วนต้น (ปกนอก ปกใน ใบรับรอง บทคัดย่อ กิตติกรรมประกาศ สารบัญ) เนื้อหาบทที่ 1-5 และส่วนท้าย (บรรณานุกรม ภาคผนวก ประวัติผู้จัดทำ):
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-xs sm:text-sm text-left font-serif">
            <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 w-28 text-center">ลำดับ</th>
                <th className="p-3">รายการ</th>
                <th className="p-3 w-24 text-center">หน้า</th>
                <th className="p-3 w-28 text-center">การนำทาง</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="bg-slate-50/50 hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">ปกนอก (Outer Cover Page)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ก</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-cover-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">ปกใน (Inner Cover Page)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ข</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-inner-cover-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">ใบรับรองโครงการ (Project Endorsement)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ค</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-approval-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">บทคัดย่อภาษาไทย (Thai Abstract)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ง</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-abstract-th-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">Abstract (English Abstract)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">จ</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-abstract-en-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">กิตติกรรมประกาศ (Acknowledgements)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ฉ</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-ack-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">สารบัญ (Table of Contents)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ช</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-toc-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">สารบัญตาราง (List of Tables)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ซ</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-lot-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>
              <tr className="hover:bg-red-50/50">
                <td className="p-2.5 text-center font-bold text-slate-500">-</td>
                <td className="p-2.5 font-semibold text-slate-800">สารบัญภาพ (List of Figures)</td>
                <td className="p-2.5 text-center font-mono text-slate-600">ฌ</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('front-lof-section')} className="text-red-700 hover:underline font-semibold text-xs">ไปยังส่วนนี้</button>
                </td>
              </tr>

              {/* บทที่ 1 */}
              <tr className="bg-red-50/40 font-bold text-slate-900">
                <td className="p-2.5 text-center font-mono text-red-900">บทที่ 1</td>
                <td className="p-2.5">บทนำ</td>
                <td className="p-2.5 text-center font-mono">1</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('chapter-1')} className="text-red-700 hover:underline font-bold text-xs">บทที่ 1</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">1.1</td><td className="p-2 pl-6">ความเป็นมาและความสำคัญของปัญหา</td><td className="p-2 text-center font-mono text-xs">1</td><td className="p-2 text-center"><button onClick={() => handleJump('section-1-1')} className="text-red-700 hover:underline text-xs">ไปยัง 1.1</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">1.2</td><td className="p-2 pl-6">วัตถุประสงค์ของการวิจัย/โครงการ</td><td className="p-2 text-center font-mono text-xs">4</td><td className="p-2 text-center"><button onClick={() => handleJump('section-1-2')} className="text-red-700 hover:underline text-xs">ไปยัง 1.2</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">1.3</td><td className="p-2 pl-6">คำถามการวิจัย</td><td className="p-2 text-center font-mono text-xs">5</td><td className="p-2 text-center"><button onClick={() => handleJump('section-1-3')} className="text-red-700 hover:underline text-xs">ไปยัง 1.3</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">1.4</td><td className="p-2 pl-6">สมมติฐานการวิจัย</td><td className="p-2 text-center font-mono text-xs">5</td><td className="p-2 text-center"><button onClick={() => handleJump('section-1-4')} className="text-red-700 hover:underline text-xs">ไปยัง 1.4</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">1.5</td><td className="p-2 pl-6">ขอบเขตของการวิจัย (เนื้อหา, ประชากร/กลุ่มตัวอย่าง, พื้นที่, เวลา, ตัวแปร)</td><td className="p-2 text-center font-mono text-xs">6</td><td className="p-2 text-center"><button onClick={() => handleJump('section-1-5')} className="text-red-700 hover:underline text-xs">ไปยัง 1.5</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">1.6</td><td className="p-2 pl-6">นิยามศัพท์เฉพาะ</td><td className="p-2 text-center font-mono text-xs">8</td><td className="p-2 text-center"><button onClick={() => handleJump('section-1-6')} className="text-red-700 hover:underline text-xs">ไปยัง 1.6</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">1.7</td><td className="p-2 pl-6">ประโยชน์ที่คาดว่าจะได้รับ</td><td className="p-2 text-center font-mono text-xs">9</td><td className="p-2 text-center"><button onClick={() => handleJump('section-1-7')} className="text-red-700 hover:underline text-xs">ไปยัง 1.7</button></td></tr>

              {/* บทที่ 2 */}
              <tr className="bg-red-50/40 font-bold text-slate-900">
                <td className="p-2.5 text-center font-mono text-red-900">บทที่ 2</td>
                <td className="p-2.5">เอกสารและงานวิจัยที่เกี่ยวข้อง</td>
                <td className="p-2.5 text-center font-mono">11</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('chapter-2')} className="text-red-700 hover:underline font-bold text-xs">บทที่ 2</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">2.1</td><td className="p-2 pl-6">แนวคิดและทฤษฎีที่เกี่ยวข้อง</td><td className="p-2 text-center font-mono text-xs">11</td><td className="p-2 text-center"><button onClick={() => handleJump('section-2-1')} className="text-red-700 hover:underline text-xs">ไปยัง 2.1</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">2.2</td><td className="p-2 pl-6">แนวคิดเกี่ยวกับหัวข้อวิจัยและระเบียบการแต่งกาย</td><td className="p-2 text-center font-mono text-xs">15</td><td className="p-2 text-center"><button onClick={() => handleJump('section-2-2')} className="text-red-700 hover:underline text-xs">ไปยัง 2.2</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">2.3</td><td className="p-2 pl-6">งานวิจัยที่เกี่ยวข้อง (ในประเทศ และ ต่างประเทศ)</td><td className="p-2 text-center font-mono text-xs">19</td><td className="p-2 text-center"><button onClick={() => handleJump('section-2-3')} className="text-red-700 hover:underline text-xs">ไปยัง 2.3</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">2.4</td><td className="p-2 pl-6">กรอบแนวคิดการวิจัย (ตัวแปรต้น → กระบวนการ → ตัวแปรตาม)</td><td className="p-2 text-center font-mono text-xs">23</td><td className="p-2 text-center"><button onClick={() => handleJump('section-2-4')} className="text-red-700 hover:underline text-xs">ไปยัง 2.4</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">2.5</td><td className="p-2 pl-6">สรุปเอกสารและงานวิจัยที่เกี่ยวข้อง</td><td className="p-2 text-center font-mono text-xs">25</td><td className="p-2 text-center"><button onClick={() => handleJump('section-2-5')} className="text-red-700 hover:underline text-xs">ไปยัง 2.5</button></td></tr>

              {/* บทที่ 3 */}
              <tr className="bg-red-50/40 font-bold text-slate-900">
                <td className="p-2.5 text-center font-mono text-red-900">บทที่ 3</td>
                <td className="p-2.5">วิธีดำเนินการวิจัยและพัฒนาโครงการ</td>
                <td className="p-2.5 text-center font-mono">27</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('chapter-3')} className="text-red-700 hover:underline font-bold text-xs">บทที่ 3</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.1</td><td className="p-2 pl-6">รูปแบบการวิจัย (การวิจัยและพัฒนา R&D)</td><td className="p-2 text-center font-mono text-xs">27</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-1')} className="text-red-700 hover:underline text-xs">ไปยัง 3.1</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.2</td><td className="p-2 pl-6">ประชากรและกลุ่มตัวอย่าง</td><td className="p-2 text-center font-mono text-xs">28</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-2')} className="text-red-700 hover:underline text-xs">ไปยัง 3.2</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.3</td><td className="p-2 pl-6">เครื่องมือที่ใช้ในการวิจัย</td><td className="p-2 text-center font-mono text-xs">29</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-3')} className="text-red-700 hover:underline text-xs">ไปยัง 3.3</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.4</td><td className="p-2 pl-6">การสร้างและตรวจสอบคุณภาพเครื่องมือ (IOC & Cronbach Alpha)</td><td className="p-2 text-center font-mono text-xs">31</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-4')} className="text-red-700 hover:underline text-xs">ไปยัง 3.4</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.5</td><td className="p-2 pl-6">การเก็บรวบรวมข้อมูล</td><td className="p-2 text-center font-mono text-xs">33</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-5')} className="text-red-700 hover:underline text-xs">ไปยัง 3.5</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.6</td><td className="p-2 pl-6">การวิเคราะห์ข้อมูล (ความถี่, ร้อยละ, x̄, S.D., t-test)</td><td className="p-2 text-center font-mono text-xs">35</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-6')} className="text-red-700 hover:underline text-xs">ไปยัง 3.6</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.7</td><td className="p-2 pl-6">ขั้นตอนการดำเนินงานวิจัย (Flowchart)</td><td className="p-2 text-center font-mono text-xs">37</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-7')} className="text-red-700 hover:underline text-xs">ไปยัง 3.7</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">3.8</td><td className="p-2 pl-6">ระยะเวลาการดำเนินงาน (ตาราง Timeline / Gantt Chart)</td><td className="p-2 text-center font-mono text-xs">39</td><td className="p-2 text-center"><button onClick={() => handleJump('section-3-8')} className="text-red-700 hover:underline text-xs">ไปยัง 3.8</button></td></tr>

              {/* บทที่ 4 */}
              <tr className="bg-red-50/40 font-bold text-slate-900">
                <td className="p-2.5 text-center font-mono text-red-900">บทที่ 4</td>
                <td className="p-2.5">ผลการวิจัยและการวิเคราะห์ข้อมูล</td>
                <td className="p-2.5 text-center font-mono">41</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('chapter-4')} className="text-red-700 hover:underline font-bold text-xs">บทที่ 4</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">4.1</td><td className="p-2 pl-6">ข้อมูลทั่วไปของกลุ่มตัวอย่าง</td><td className="p-2 text-center font-mono text-xs">41</td><td className="p-2 text-center"><button onClick={() => handleJump('section-4-1')} className="text-red-700 hover:underline text-xs">ไปยัง 4.1</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">4.2</td><td className="p-2 pl-6">ผลการวิจัยตามวัตถุประสงค์ข้อที่ 1 (การพัฒนาระบบ 6 โมดูล)</td><td className="p-2 text-center font-mono text-xs">43</td><td className="p-2 text-center"><button onClick={() => handleJump('section-4-2')} className="text-red-700 hover:underline text-xs">ไปยัง 4.2</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">4.3</td><td className="p-2 pl-6">ผลการวิจัยตามวัตถุประสงค์ข้อที่ 2 (ประสิทธิภาพและความแม่นยำ 98.2%)</td><td className="p-2 text-center font-mono text-xs">47</td><td className="p-2 text-center"><button onClick={() => handleJump('section-4-3')} className="text-red-700 hover:underline text-xs">ไปยัง 4.3</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">4.4</td><td className="p-2 pl-6">ผลการวิจัยตามวัตถุประสงค์ข้อที่ 3 (ความพึงพอใจของกลุ่มตัวอย่าง)</td><td className="p-2 text-center font-mono text-xs">50</td><td className="p-2 text-center"><button onClick={() => handleJump('section-4-4')} className="text-red-700 hover:underline text-xs">ไปยัง 4.4</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">4.5</td><td className="p-2 pl-6">ผลการทดสอบสมมติฐาน (Paired t-test t = 14.82, p &lt; .001)</td><td className="p-2 text-center font-mono text-xs">53</td><td className="p-2 text-center"><button onClick={() => handleJump('section-4-5')} className="text-red-700 hover:underline text-xs">ไปยัง 4.5</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">4.6</td><td className="p-2 pl-6">สรุปผลการวิจัย (ตาราง กราฟ แผนภูมิ ผลการวิเคราะห์สถิติ)</td><td className="p-2 text-center font-mono text-xs">55</td><td className="p-2 text-center"><button onClick={() => handleJump('section-4-6')} className="text-red-700 hover:underline text-xs">ไปยัง 4.6</button></td></tr>

              {/* บทที่ 5 */}
              <tr className="bg-red-50/40 font-bold text-slate-900">
                <td className="p-2.5 text-center font-mono text-red-900">บทที่ 5</td>
                <td className="p-2.5">สรุป อภิปรายผล และข้อเสนอแนะ</td>
                <td className="p-2.5 text-center font-mono">57</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('chapter-5')} className="text-red-700 hover:underline font-bold text-xs">บทที่ 5</button>
                </td>
              </tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">5.1</td><td className="p-2 pl-6">สรุปผลการวิจัย</td><td className="p-2 text-center font-mono text-xs">57</td><td className="p-2 text-center"><button onClick={() => handleJump('section-5-1')} className="text-red-700 hover:underline text-xs">ไปยัง 5.1</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">5.2</td><td className="p-2 pl-6">อภิปรายผล (เปรียบเทียบกับทฤษฎีและงานวิจัยที่ผ่านมา)</td><td className="p-2 text-center font-mono text-xs">59</td><td className="p-2 text-center"><button onClick={() => handleJump('section-5-2')} className="text-red-700 hover:underline text-xs">ไปยัง 5.2</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">5.3</td><td className="p-2 pl-6">ข้อค้นพบจากการวิจัย</td><td className="p-2 text-center font-mono text-xs">62</td><td className="p-2 text-center"><button onClick={() => handleJump('section-5-3')} className="text-red-700 hover:underline text-xs">ไปยัง 5.3</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">5.4</td><td className="p-2 pl-6">ข้อเสนอแนะจากผลการวิจัย (การนำไปใช้จริง)</td><td className="p-2 text-center font-mono text-xs">64</td><td className="p-2 text-center"><button onClick={() => handleJump('section-5-4')} className="text-red-700 hover:underline text-xs">ไปยัง 5.4</button></td></tr>
              <tr className="hover:bg-slate-50"><td className="p-2 text-center font-mono text-xs">5.5</td><td className="p-2 pl-6">ข้อเสนอแนะสำหรับการวิจัยครั้งต่อไป</td><td className="p-2 text-center font-mono text-xs">66</td><td className="p-2 text-center"><button onClick={() => handleJump('section-5-5')} className="text-red-700 hover:underline text-xs">ไปยัง 5.5</button></td></tr>

              {/* ส่วนท้าย */}
              <tr className="bg-slate-100 font-bold text-slate-900">
                <td className="p-2.5 text-center font-mono">-</td>
                <td className="p-2.5">บรรณานุกรม / เอกสารอ้างอิง (APA 7th Edition)</td>
                <td className="p-2.5 text-center font-mono">68</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('section-references')} className="text-red-700 hover:underline font-bold text-xs">บรรณานุกรม</button>
                </td>
              </tr>
              <tr className="bg-slate-100 font-bold text-slate-900">
                <td className="p-2.5 text-center font-mono">-</td>
                <td className="p-2.5">ภาคผนวก (ก - ฉ) พร้อมประวัติผู้จัดทำ</td>
                <td className="p-2.5 text-center font-mono">72</td>
                <td className="p-2.5 text-center">
                  <button onClick={() => handleJump('section-appendices')} className="text-red-700 hover:underline font-bold text-xs">ภาคผนวก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
