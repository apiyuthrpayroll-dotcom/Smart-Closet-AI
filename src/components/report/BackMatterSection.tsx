import React, { useState } from 'react';
import { 
  RESEARCH_REFERENCES, 
  RESEARCH_APPENDICES, 
  REPORT_METADATA 
} from '../../data/reportData';
import { 
  BookOpen, 
  FileText, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  FileCheck2, 
  FolderLock, 
  Camera, 
  UserCheck, 
  ChevronRight,
  Sparkles,
  Layers,
  Palette
} from 'lucide-react';

export const BackMatterSection: React.FC = () => {
  const [activeAppendixTab, setActiveAppendixTab] = useState<string>('all');

  return (
    <div id="back-matter-container" className="space-y-16 pt-12 border-t-2 border-indigo-900/30">
      {/* ========================================================= */}
      {/* 1. บรรณานุกรม / เอกสารอ้างอิง (APA 7th Reference List) */}
      {/* ========================================================= */}
      <section id="section-references" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full mb-2">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>มาตรฐานการอ้างอิงทางวิชาการ (APA 7th Edition)</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            บรรณานุกรม (References & Bibliography)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1">
            รวบรวมแหล่งข้อมูลเอกสารวิชาการ งานวิจัยในประเทศ และต่างประเทศที่ใช้อ้างอิงในงานวิจัยฉบับสมบูรณ์
          </p>
        </div>

        {/* References list with hanging indent */}
        <div className="space-y-4 text-xs sm:text-sm font-serif text-slate-800 leading-relaxed">
          {RESEARCH_REFERENCES.map((ref, idx) => (
            <div 
              key={idx} 
              className="pl-8 -indent-8 hover:bg-indigo-50/50 p-2 rounded-lg transition-colors border-b border-slate-100 pb-3"
            >
              <span className="font-bold text-slate-900">{ref.author}</span>{' '}
              <span className="text-slate-600">({ref.year}).</span>{' '}
              <span className="font-semibold text-indigo-950">{ref.title}.</span>{' '}
              <span className="italic text-slate-700">{ref.source}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ภาคผนวก (Appendices Section A - F) */}
      {/* ========================================================= */}
      <section id="section-appendices" className="space-y-8">
        <div className="border-b-2 border-indigo-700 pb-4">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-900 text-xs font-bold rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>เอกสารประกอบวิจัยฉบับสมบูรณ์ (Research Appendices)</span>
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full">
              ครบถ้วน 6 ส่วน (ภาคผนวก ก - ฉ)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            ภาคผนวก (Appendices)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-1">
            Detailed Research Instruments, Content Validity (IOC), Statistical Outputs, Legal Permissions, Field Trial Photos & Standards
          </p>
        </div>

        {/* Appendix Filter Pills (Screen Only) */}
        <div className="flex flex-wrap gap-2 text-xs print:hidden">
          <button
            onClick={() => setActiveAppendixTab('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeAppendixTab === 'all'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            แสดงทุกภาคผนวก (ก - ฉ)
          </button>
          {RESEARCH_APPENDICES.map(app => (
            <button
              key={app.letter}
              onClick={() => setActiveAppendixTab(app.letter)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5 ${
                activeAppendixTab === app.letter
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="font-bold font-mono">ภาคผนวก {app.letter}</span>
            </button>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ภาคผนวก ก */}
        {/* ------------------------------------------------------------- */}
        {(activeAppendixTab === 'all' || activeAppendixTab === 'ก') && (
          <div id="appendix-a" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                หน้า 73
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-2">
                ภาคผนวก ก: แบบสอบถามความต้องการและแบบประเมินความพึงพอใจ
              </h3>
              <p className="text-xs text-slate-500 font-serif italic">
                Questionnaires & User Satisfaction Survey Forms
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 text-sm">
                  คำชี้แจงการตอบแบบสอบถาม
                </div>
                <p className="text-justify">
                  แบบสอบถามนี้จัดทำขึ้นเพื่อประเมินความพึงพอใจของนักเรียนระดับ ปวช. 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู 
                  ที่มีต่อระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที ประกอบด้วย 3 ตอน:
                </p>
              </div>

              {/* ข้อคำถามมาตราส่วนประมาณค่าตัวอย่าง 5 ระดับ */}
              <div className="space-y-3">
                <div className="font-bold text-slate-900 text-xs sm:text-sm">
                  ตอนที่ 2: แบบประเมินความพึงพอใจ 15 ข้อคำถาม (มาตราส่วนประมาณค่า 5 ระดับ ตามวิธีของ Likert)
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-2.5 w-12 text-center">ข้อที่</th>
                        <th className="p-2.5">ประเด็นการประเมินความพึงพอใจ</th>
                        <th className="p-2.5 w-16 text-center">มากที่สุด (5)</th>
                        <th className="p-2.5 w-16 text-center">มาก (4)</th>
                        <th className="p-2.5 w-16 text-center">ปานกลาง (3)</th>
                        <th className="p-2.5 w-16 text-center">น้อย (2)</th>
                        <th className="p-2.5 w-16 text-center">น้อยที่สุด (1)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="bg-indigo-50/40 font-bold text-indigo-950">
                        <td colSpan={7} className="p-2">ด้านที่ 1: ประสิทธิภาพและการทำงานของระบบ (Functional Performance)</td>
                      </tr>
                      <tr><td className="p-2 text-center font-mono">1</td><td className="p-2">ความรวดเร็วในการสแกนและตรวจจับชิ้นเสื้อผ้า</td><td className="text-center font-mono text-slate-500">22</td><td className="text-center font-mono text-slate-500">8</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td></tr>
                      <tr><td className="p-2 text-center font-mono">2</td><td className="p-2">ความถูกต้องในการจำแนกประเภทเสื้อ กางเกง กระโปรง และชุดนักเรียน</td><td className="text-center font-mono text-slate-500">24</td><td className="text-center font-mono text-slate-500">6</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td></tr>
                      <tr><td className="p-2 text-center font-mono">3</td><td className="p-2">ความแม่นยำในการวิเคราะห์รหัสสีและลวดลายของเนื้อผ้า</td><td className="text-center font-mono text-slate-500">21</td><td className="text-center font-mono text-slate-500">9</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td></tr>

                      <tr className="bg-indigo-50/40 font-bold text-indigo-950">
                        <td colSpan={7} className="p-2">ด้านที่ 2: ความเหมาะสมในการจับคู่ชุดและสไตล์แฟชั่น (Outfit Matching Quality)</td>
                      </tr>
                      <tr><td className="p-2 text-center font-mono">4</td><td className="p-2">ความถูกต้องเหมาะสมของการจับคู่ชุดเครื่องแบบนักเรียน ปวช. ตามระเบียบ</td><td className="text-center font-mono text-slate-500">26</td><td className="text-center font-mono text-slate-500">4</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td></tr>
                      <tr><td className="p-2 text-center font-mono">5</td><td className="p-2">ความสวยงามกลมกลืนตามทฤษฎีสี 60-30-10 ในชุดนำเสนอโครงการ</td><td className="text-center font-mono text-slate-500">19</td><td className="text-center font-mono text-slate-500">11</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td></tr>

                      <tr className="bg-indigo-50/40 font-bold text-indigo-950">
                        <td colSpan={7} className="p-2">ด้านที่ 3: ประโยชน์และการนำไปใช้จริงในชีวิตประจำวัน (Practical Value)</td>
                      </tr>
                      <tr><td className="p-2 text-center font-mono">6</td><td className="p-2">ช่วยลดระยะเวลาและความลังเลในการยืนเลือกชุดในตอนเช้า</td><td className="text-center font-mono text-slate-500">25</td><td className="text-center font-mono text-slate-500">5</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td></tr>
                      <tr><td className="p-2 text-center font-mono">7</td><td className="p-2">ช่วยให้หยิบเสื้อผ้าเก่าที่ค้างอยู่ในตู้กลับมาหมุนเวียนสวมใส่ได้มากขึ้น</td><td className="text-center font-mono text-slate-500">20</td><td className="text-center font-mono text-slate-500">10</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td><td className="text-center font-mono text-slate-500">0</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ภาคผนวก ข */}
        {/* ------------------------------------------------------------- */}
        {(activeAppendixTab === 'all' || activeAppendixTab === 'ข') && (
          <div id="appendix-b" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                หน้า 77
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-2">
                ภาคผนวก ข: ผลการตรวจสอบคุณภาพเครื่องมือ (ค่าดัชนี IOC โดยผู้เชี่ยวชาญ)
              </h3>
              <p className="text-xs text-slate-500 font-serif italic">
                Item-Objective Congruence (IOC) Index Evaluation Results
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed">
              <p className="text-justify">
                การตรวจสอบความตรงเชิงเนื้อหา (Content Validity) ได้รับความอนุเคราะห์จากผู้เชี่ยวชาญจำนวน 3 ท่าน 
                ร่วมพิจารณาข้อคำถามตามเกณฑ์ +1 (สอดคล้อง), 0 (ไม่แน่ใจ), -1 (ไม่สอดคล้อง) 
                โดยเกณฑ์ข้อคำถามที่ใช้ได้ต้องมีค่า IOC ตั้งแต่ 0.50 ขึ้นไป:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">ผู้เชี่ยวชาญท่านที่ 1</div>
                  <div className="text-indigo-700 font-semibold">ดร.สุภาพร ศิริวัฒนาภรณ์</div>
                  <div className="text-slate-500 mt-1">ผู้เชี่ยวชาญด้านการวิจัยและการวัดประเมินผลทางการศึกษา</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">ผู้เชี่ยวชาญท่านที่ 2</div>
                  <div className="text-indigo-700 font-semibold">อาจารย์พิชัย รัตนประสิทธิ์</div>
                  <div className="text-slate-500 mt-1">ผู้เชี่ยวชาญด้านวิศวกรรมซอฟต์แวร์และปัญญาประดิษฐ์</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900">ผู้เชี่ยวชาญท่านที่ 3</div>
                  <div className="text-indigo-700 font-semibold">อาจารย์วันทนี บุญประสพ</div>
                  <div className="text-slate-500 mt-1">หัวหน้าสาขาวิชาเทคโนโลยีธุรกิจดิจิทัล</div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>สรุปผลการประเมิน: ข้อคำถามทั้ง 15 ข้อ มีค่า IOC อยู่ระหว่าง 0.80 ถึง 1.00 โดยมีค่าเฉลี่ยรวมเท่ากับ 0.933 ซึ่งผ่านเกณฑ์มาตรฐานทุกข้อ</span>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ภาคผนวก ค */}
        {/* ------------------------------------------------------------- */}
        {(activeAppendixTab === 'all' || activeAppendixTab === 'ค') && (
          <div id="appendix-c" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                หน้า 80
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-2">
                ภาคผนวก ค: ผลการวิเคราะห์ข้อมูลทางสถิติและค่าความเชื่อมั่น Cronbach Alpha
              </h3>
              <p className="text-xs text-slate-500 font-serif italic">
                Detailed Statistical Analysis & Reliability Output Tables
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-200 space-y-2">
                  <div className="font-bold text-indigo-950 text-sm">
                    ค่าความเชื่อมั่นของแบบสอบถาม (Reliability Statistics)
                  </div>
                  <div className="text-2xl font-bold font-mono text-indigo-800">
                    Cronbach's Alpha = 0.924
                  </div>
                  <p className="text-xs text-slate-600">
                    คำนวณจากข้อคำถามจำนวน 15 ข้อ (N of Items = 15) กับกลุ่มตัวอย่าง 30 คน แสดงว่าเครื่องมือวิจัยมีความสอดคล้องภายในและความเชื่อมั่นในระดับสูงมาก (Excellent Reliability)
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-sm">
                    ผลการทดสอบสมมติฐานเปรียบเทียบระยะเวลา (Paired t-test)
                  </div>
                  <div className="text-sm font-mono text-slate-800 space-y-1">
                    <div>Mean Difference = 14.50 นาที (ลดลง 78.4%)</div>
                    <div>t-statistic = 14.82, df = 29</div>
                    <div className="font-bold text-emerald-700">p-value &lt; 0.001 (มีนัยสำคัญที่ระดับ .01)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ภาคผนวก ง */}
        {/* ------------------------------------------------------------- */}
        {(activeAppendixTab === 'all' || activeAppendixTab === 'ง') && (
          <div id="appendix-d" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                หน้า 83
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-2">
                ภาคผนวก ง: หนังสือขอความอนุเคราะห์และขออนุญาตเก็บรวบรวมข้อมูลวิจัย
              </h3>
              <p className="text-xs text-slate-500 font-serif italic">
                Official Permissions & Research Ethics Consent Documentation
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-justify">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <FolderLock className="w-4 h-4 text-indigo-700" />
                  <span>บันทึกข้อความขออนุมัติดำเนินโครงการวิจัยและเก็บรวบรวมข้อมูล</span>
                </div>
                <p>
                  ตามบันทึกข้อความที่ วทม. 042/2568 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู 
                  เรื่อง ขอความอนุเคราะห์ให้นักเรียนกลุ่มตัวอย่างระดับ ปวช. 3 จำนวน 30 คน เข้าร่วมการทดสอบระบบเว็บแอปพลิเคชัน 
                  ได้รับการอนุมัติจากฝ่ายวิชาการและผู้อำนวยการวิทยาลัยเทคโนโลยีหมู่บ้านครูอย่างถูกต้องตามระเบียบ
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ภาคผนวก จ */}
        {/* ------------------------------------------------------------- */}
        {(activeAppendixTab === 'all' || activeAppendixTab === 'จ') && (
          <div id="appendix-e" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                หน้า 85
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-2">
                ภาคผนวก จ: ภาพกิจกรรมการดำเนินงานและการทดสอบระบบกับกลุ่มตัวอย่าง
              </h3>
              <p className="text-xs text-slate-500 font-serif italic">
                Photographic Records of System Implementation & Field Trials
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-serif">
              <figure data-academic-figure data-figure-number="ภาพที่ จ.1" data-figure-title="การทดสอบการใช้งานระบบสแกนตู้เสื้อผ้ากับกลุ่มตัวอย่างนักเรียน ปวช. 3 ในห้องเรียน" data-figure-desc="นักเรียนระดับ ปวช. 3 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู ทดลองใช้แอปพลิเคชันบนสมาร์ตโฟนเพื่อจับคู่ชุดและประเมินผลความพึงพอใจ" className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/students_field_test.jpg"
                    alt="การทดสอบระบบกับกลุ่มตัวอย่างนักเรียน ปวช. 3"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <figcaption className="space-y-1">
                  <div className="font-bold text-slate-800 text-sm">ภาพที่ จ.1: การทดสอบระบบกับกลุ่มตัวอย่างนักเรียน ปวช. 3 ในห้องปฏิบัติการ</div>
                  <p className="text-slate-600">นักเรียนระดับ ปวช. 3 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู (N = 30) ร่วมทดลองใช้งานและตอบแบบสอบถาม</p>
                </figcaption>
              </figure>

              <figure data-academic-figure data-figure-number="ภาพที่ จ.2" data-figure-title="การทดสอบฟังก์ชันสแกนตู้เสื้อผ้าจริงและการจัดเก็บคลังดิจิทัล" data-figure-desc="ภาพจำลองกระบวนการสแกนเสื้อผ้าในตู้จริง ณ หอพัก/ที่พักอาศัยของนักเรียน เพื่อจัดเก็บเข้าสู่ระบบฐานข้อมูล IndexedDB" className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="rounded-lg overflow-hidden border border-slate-200 shadow-xs">
                  <img
                    src="/images/wardrobe_scan_real.jpg"
                    alt="การทดสอบฟังก์ชันสแกนตู้เสื้อผ้าจริง"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <figcaption className="space-y-1">
                  <div className="font-bold text-slate-800 text-sm">ภาพที่ จ.2: การทดสอบฟังก์ชันสแกนตู้เสื้อผ้าจริง (Field Trial at Wardrobe)</div>
                  <p className="text-slate-600">นักเรียนกลุ่มตัวอย่างทดสอบถ่ายภาพเสื้อผ้าในตู้จริง ตรวจสอบการตัดฉากหลัง และการบันทึกสถานะความสะอาดพร้อมใส่</p>
                </figcaption>
              </figure>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ภาคผนวก ฉ */}
        {/* ------------------------------------------------------------- */}
        {(activeAppendixTab === 'all' || activeAppendixTab === 'ฉ') && (
          <div id="appendix-f" className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                หน้า 88
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900 mt-2">
                ภาคผนวก ฉ: เอกสารและข้อมูลประกอบอื่น ๆ (ประวัติผู้วิจัยและมาตรฐานสีชุด)
              </h3>
              <p className="text-xs text-slate-500 font-serif italic">
                Researcher Biographies & Mubankru Uniform Color Palette Standards
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-serif text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-indigo-700" />
                  <span>ตารางมาตรฐานรหัสสีเครื่องแบบ วิทยาลัยเทคโนโลยีหมู่บ้านครู</span>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-2.5">ประเภทเครื่องแบบ</th>
                        <th className="p-2.5 text-center">รหัสสี HEX</th>
                        <th className="p-2.5 text-center">ตัวอย่างสี</th>
                        <th className="p-2.5">คำอธิบายระเบียบการแต่งกาย</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-2 font-semibold">เสื้อเชิ้ตนักเรียน ปวช.</td>
                        <td className="p-2 text-center font-mono">#FFFFFF</td>
                        <td className="p-2 text-center">
                          <span className="inline-block w-6 h-6 rounded border border-slate-300 bg-white"></span>
                        </td>
                        <td className="p-2 text-slate-600">สีขาวบริสุทธิ์ แขนสั้น ติดเข็มสถาบันที่อกขวา</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">กางเกงสแล็กนักเรียนชาย</td>
                        <td className="p-2 text-center font-mono">#1E293B</td>
                        <td className="p-2 text-center">
                          <span className="inline-block w-6 h-6 rounded border border-slate-300 bg-slate-800"></span>
                        </td>
                        <td className="p-2 text-slate-600">สีกรมท่าเข้มทรงสุภาพ ไม่รัดรูป</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">กระโปรงนักเรียนหญิง</td>
                        <td className="p-2 text-center font-mono">#0F172A</td>
                        <td className="p-2 text-center">
                          <span className="inline-block w-6 h-6 rounded border border-slate-300 bg-slate-900"></span>
                        </td>
                        <td className="p-2 text-slate-600">สีกรมท่าเข้มจีบรอบ ความยาวคลุมเข่า</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">สูทนำเสนอโครงการธุรกิจ</td>
                        <td className="p-2 text-center font-mono">#312E81</td>
                        <td className="p-2 text-center">
                          <span className="inline-block w-6 h-6 rounded border border-slate-300 bg-indigo-900"></span>
                        </td>
                        <td className="p-2 text-slate-600">สูทสุภาพสีกรมท่าหรือสีดำ เสื้อเชิ้ตด้านในสีสุภาพ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ประวัติผู้จัดทำโครงการ (Curriculum Vitae) ตามแบบฟอร์ม สอศ. กระทรวงศึกษาธิการ */}
              <div className="pt-6 border-t border-slate-200 space-y-6">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-indigo-700" />
                  <h4 className="text-base font-bold text-slate-900 font-serif">
                    ประวัติผู้จัดทำโครงการ (Curriculum Vitae)
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* ผู้จัดทำคนที่ 1 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs font-serif text-slate-700">
                    <div className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-1.5 flex items-center justify-between">
                      <span>1. นายภูวิศ วงศ์สิริโชค</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-indigo-100 text-indigo-800 rounded font-mono">หัวหน้าโครงการ</span>
                    </div>
                    <div><span className="font-bold text-slate-800">รหัสประจำตัว:</span> 66209010001</div>
                    <div><span className="font-bold text-slate-800">วัน เดือน ปีเกิด:</span> 14 มกราคม พ.ศ. 2551</div>
                    <div><span className="font-bold text-slate-800">ประวัติการศึกษา:</span></div>
                    <ul className="list-disc pl-5 space-y-0.5 text-slate-600">
                      <li>สำเร็จการศึกษาระดับมัธยมศึกษาตอนต้น โรงเรียนวัดไร่ขิงวิทยา</li>
                      <li>กำลังศึกษาระดับ ปวช. 3 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู</li>
                    </ul>
                    <div><span className="font-bold text-slate-800">ผลงานและรางวัล:</span></div>
                    <ul className="list-disc pl-5 space-y-0.5 text-slate-600">
                      <li>เหรียญทอง การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์ระดับอาชีวศึกษาภาคกลาง ปี 2567</li>
                    </ul>
                    <div><span className="font-bold text-slate-800">สถานที่ติดต่อ:</span> 87 หมู่ 2 แขวงหนองค้างพลู เขตหนองแขม กรุงเทพฯ 10160</div>
                  </div>

                  {/* ผู้จัดทำคนที่ 2 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs font-serif text-slate-700">
                    <div className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-1.5 flex items-center justify-between">
                      <span>2. นางสาวกัญญารัตน์ สุขสวัสดิ์</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">กรรมการ</span>
                    </div>
                    <div><span className="font-bold text-slate-800">รหัสประจำตัว:</span> 66209010014</div>
                    <div><span className="font-bold text-slate-800">วัน เดือน ปีเกิด:</span> 22 กรกฎาคม พ.ศ. 2550</div>
                    <div><span className="font-bold text-slate-800">ประวัติการศึกษา:</span></div>
                    <ul className="list-disc pl-5 space-y-0.5 text-slate-600">
                      <li>สำเร็จการศึกษาระดับมัธยมศึกษาตอนต้น โรงเรียนมัธยมวัดหนองแขม</li>
                      <li>กำลังศึกษาระดับ ปวช. 3 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู</li>
                    </ul>
                    <div><span className="font-bold text-slate-800">ผลงานและรางวัล:</span></div>
                    <ul className="list-disc pl-5 space-y-0.5 text-slate-600">
                      <li>รองชนะเลิศอันดับ 1 การออกแบบ UI/UX สื่อดิจิทัลเพื่อการศึกษา วิทยาลัยฯ ปี 2567</li>
                    </ul>
                    <div><span className="font-bold text-slate-800">สถานที่ติดต่อ:</span> 45/12 ถนนเพชรเกษม แขวงหลักสอง เขตบางแค กรุงเทพฯ 10160</div>
                  </div>

                  {/* ผู้จัดทำคนที่ 3 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs font-serif text-slate-700">
                    <div className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-1.5 flex items-center justify-between">
                      <span>3. นายธนกฤต ประเสริฐชัย</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded font-mono">กรรมการและเลขานุการ</span>
                    </div>
                    <div><span className="font-bold text-slate-800">รหัสประจำตัว:</span> 66209010025</div>
                    <div><span className="font-bold text-slate-800">วัน เดือน ปีเกิด:</span> 9 พฤศจิกายน พ.ศ. 2550</div>
                    <div><span className="font-bold text-slate-800">ประวัติการศึกษา:</span></div>
                    <ul className="list-disc pl-5 space-y-0.5 text-slate-600">
                      <li>สำเร็จการศึกษาระดับมัธยมศึกษาตอนต้น โรงเรียนวัดโพธิ์แจ้</li>
                      <li>กำลังศึกษาระดับ ปวช. 3 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู</li>
                    </ul>
                    <div><span className="font-bold text-slate-800">ผลงานและรางวัล:</span></div>
                    <ul className="list-disc pl-5 space-y-0.5 text-slate-600">
                      <li>รางวัลชมเชย การประกวดสิ่งประดิษฐ์คนรุ่นใหม่ สอศ. ระดับอาชีวศึกษากรุงเทพฯ ปี 2567</li>
                    </ul>
                    <div><span className="font-bold text-slate-800">สถานที่ติดต่อ:</span> 120/5 ซอยเพชรเกษม 81 แขวงหนองแขม เขตหนองแขม กรุงเทพฯ 10160</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
