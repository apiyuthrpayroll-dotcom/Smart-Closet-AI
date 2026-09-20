import React, { useState } from 'react';
import { RESEARCH_METADATA, SURVEY_QUESTIONS, INTERVIEW_RECORDS, FIGURES_META } from '../../data/mockData';
import { ReportImage } from '../report/ReportImage';
import { 
  Users, 
  FileText, 
  BarChart2, 
  CheckCircle2, 
  MessageSquare, 
  GraduationCap, 
  HelpCircle, 
  Download, 
  ExternalLink,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface ResearchMethodologyViewProps {
  onNavigateToStep: (tab: string) => void;
}

export const ResearchMethodologyView: React.FC<ResearchMethodologyViewProps> = ({
  onNavigateToStep
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'3.1' | '3.2' | '3.3' | '3.4' | '3.5'>('3.1');

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-semibold uppercase tracking-wider border border-indigo-400/30">
                เอกสารวิธีดำเนินการวิจัย (Chapter 3)
              </span>
              <span className="text-xs text-slate-300">
                {RESEARCH_METADATA.department} {RESEARCH_METADATA.institution}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">
              ระเบียบวิธีวิจัยและผลการประเมิน (Research Methodology & Analysis)
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              โครงสร้างระเบียบวิธีวิจัย 5 ขั้นตอนหลัก (3.1 - 3.5) ตามข้อกำหนดวิชาการของโครงการสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => onNavigateToStep('report')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>อ่านเล่มรายงานวิจัยฉบับเต็ม (5 บท)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Chapter 3 Sub-Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { id: '3.1', label: '3.1 ประชากรและกลุ่มตัวอย่าง (52/30 คน)' },
          { id: '3.2', label: '3.2 เครื่องมือในการวิจัย (แบบสอบถาม & สัมภาษณ์)' },
          { id: '3.3', label: '3.3 การเก็บรวบรวมข้อมูล' },
          { id: '3.4', label: '3.4 การวิเคราะห์ข้อมูล (สถิติ x̄ & S.D.)' },
          { id: '3.5', label: '3.5 การออกแบบระบบ (ภาพประกอบ 3.1 - 3.6)' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === tab.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Section: 3.1 ประชากรและกลุ่มตัวอย่าง */}
      {activeSubTab === '3.1' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">หัวข้อย่อย 3.1</span>
              <h2 className="text-xl font-bold text-slate-900 font-serif mt-1">
                3.1 ประชากรและกลุ่มตัวอย่าง (Population and Sample)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Population Card */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">ประชากร (Population)</span>
                  <span className="text-2xl font-black text-slate-900">52 คน</span>
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ประชากรที่ใช้ในการวิจัยครั้งนี้ ได้แก่ นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู ทั้งหมดจำนวน 52 คน
                </p>
              </div>

              {/* Sample Card */}
              <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">กลุ่มตัวอย่าง (Sample)</span>
                  <span className="text-2xl font-black text-indigo-700">30 คน</span>
                </div>
                <h3 className="font-bold text-sm text-indigo-950">
                  กลุ่มตัวอย่างแบบเฉพาะเจาะจง (Purposive Sampling)
                </h3>
                <p className="text-xs text-indigo-900 leading-relaxed">
                  กลุ่มตัวอย่างที่ใช้ในการวิจัยครั้งนี้ ได้แก่ นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน 30 คน ซึ่งได้มาจากการเลือกกลุ่มตัวอย่างแบบเฉพาะเจาะจง (Purposive Sampling) โดยผู้วิจัยกำหนดเกณฑ์ในการคัดเลือกให้เป็นนักเรียนที่กำลังศึกษาในระดับ ปวช. ชั้นปีที่ 3 และมีคุณสมบัติตรงตามวัตถุประสงค์ของการวิจัย
                </p>
              </div>
            </div>

            {/* Selection Criteria Box */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs space-y-2">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>เกณฑ์การคัดเลือกกลุ่มตัวอย่าง (Inclusion Criteria):</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-950 text-[11px] leading-relaxed">
                <li>กำลังศึกษาอยู่ในระดับชั้น ปวช. 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู ประจำปีการศึกษา 2568</li>
                <li>มีความจำเป็นในการแต่งกายทั้งชุดเครื่องแบบนักเรียน ปวช. ชุดสูทเบลเซอร์สำหรับนำเสนอโครงการ และชุดลำลองกิจกรรม</li>
                <li>มีอุปกรณ์สมาร์ทโฟนที่รองรับการใช้งานเว็บแอปพลิเคชันและกล้องถ่ายภาพ</li>
                <li>มีความยินยอมและพร้อมเข้าร่วมการทดลองใช้งานระบบและตอบแบบประเมินความพึงพอใจ</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Content Section: 3.2 เครื่องมือในการวิจัย */}
      {activeSubTab === '3.2' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">หัวข้อย่อย 3.2</span>
              <h2 className="text-xl font-bold text-slate-900 font-serif mt-1">
                3.2 เครื่องมือในการวิจัยและการตรวจสอบคุณภาพเครื่องมือ
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 3.2.1 แบบสอบถามความต้องการ */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                    3.2.1
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">1) แบบสอบถามความต้องการของผู้ใช้</h3>
                    <p className="text-[11px] text-slate-500">User Needs Questionnaire (แบบมาตราส่วนประมาณค่า 5 ระดับ)</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  แบบสอบถามความต้องการของผู้ใช้และแบบประเมินความพึงพอใจ แบ่งออกเป็น 4 ตอน ได้แก่ ข้อมูลทั่วไป, ความต้องการในการแต่งตัว, ประสิทธิภาพของระบบ และความพึงพอใจภาพรวม
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <div className="text-[11px] font-bold text-slate-700">เกณฑ์การแปลผลคะแนนเฉลี่ย (Likert Scale):</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="p-2 rounded bg-emerald-50 text-emerald-800 font-medium">4.51 - 5.00: มากที่สุด</div>
                    <div className="p-2 rounded bg-blue-50 text-blue-800 font-medium">3.51 - 4.50: มาก</div>
                    <div className="p-2 rounded bg-amber-50 text-amber-800 font-medium">2.51 - 3.50: ปานกลาง</div>
                    <div className="p-2 rounded bg-rose-50 text-rose-800 font-medium">1.00 - 2.50: น้อย/น้อยที่สุด</div>
                  </div>
                </div>
              </div>

              {/* 3.2.2 แบบสัมภาษณ์ผู้ใช้ */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-xs">
                    3.2.2
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">2) แบบสัมภาษณ์ผู้ใช้</h3>
                    <p className="text-[11px] text-slate-500">User Interview Form (Semi-structured Interview)</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  แบบสัมภาษณ์แบบกึ่งโครงสร้าง ใช้สัมภาษณ์เชิงลึกกับกลุ่มตัวอย่าง เพื่อเจาะลึกปัญหาในการเลือกเสื้อผ้าในแต่ละวัน ประสบการณ์ระหว่างการใช้งานจริง และข้อเสนอแนะในการปรับปรุงระบบ
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <div className="text-[11px] font-bold text-slate-700">หัวข้อประเด็นการสัมภาษณ์หลัก:</div>
                  <ul className="text-[11px] space-y-1 text-slate-600 list-disc list-inside">
                    <li>ระยะเวลาที่ใช้ในการตัดสินใจเลือกชุดก่อนและหลังมีระบบ</li>
                    <li>ความมั่นใจในความถูกระเบียบวิทยาลัยและกาลเทศะ</li>
                    <li>ความพึงพอใจต่อฟังก์ชันลองชุดเสมือนจริง (Virtual Try-On)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Interview Sample Records */}
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                <span>ตัวอย่างบันทึกผลการสัมภาษณ์กลุ่มตัวอย่างจริง (Key Interview Insights)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {INTERVIEW_RECORDS.map((record) => (
                  <div key={record.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-900 text-[11px]">{record.code}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white border border-slate-200 font-medium text-slate-600">
                        {record.topic}
                      </span>
                    </div>
                    <blockquote className="italic text-slate-700 text-[11px] border-l-2 border-indigo-400 pl-2">
                      "{record.quote}"
                    </blockquote>
                    <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>สาระสำคัญ: {record.insight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section: 3.3 การเก็บรวบรวมข้อมูล */}
      {activeSubTab === '3.3' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">หัวข้อย่อย 3.3</span>
              <h2 className="text-xl font-bold text-slate-900 font-serif mt-1">
                3.3 การเก็บรวบรวมข้อมูล (Data Collection)
              </h2>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs leading-relaxed text-slate-700 space-y-3">
              <p className="font-medium text-sm text-slate-900">
                "การเก็บรวบรวมข้อมูล ผู้วิจัยเก็บข้อมูลจากแบบสอบถามและการทดลองใช้ระบบ โดยรวบรวมข้อมูลเกี่ยวกับความต้องการในการแต่งตัว ภาพเสื้อผ้า และผลการจัดชุดจากระบบ จากนั้นให้ผู้ใช้งานประเมินความพึงพอใจ และนำข้อมูลที่ได้มาวิเคราะห์และสรุปผลคำอธิบาย"
              </p>
              <p>
                ผู้วิจัยได้ดำเนินการเก็บรวบรวมข้อมูลตามลำดับขั้นตอนที่มีการควบคุมคุณภาพอย่างเคร่งครัด ดังนี้:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                  1
                </div>
                <div className="font-bold text-xs text-slate-900">ขั้นตอนก่อนการทดลอง (Pre-Trial)</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  แจกแบบสอบถามสำรวจพฤติกรรมและปัญหาการเลือกชุดในชีวิตประจำวันของนักเรียน ปวช. 3 จำนวน 30 คน
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                  2
                </div>
                <div className="font-bold text-xs text-slate-900">ขั้นตอนการทดลองใช้ระบบ (Trial Phase)</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  ให้กลุ่มตัวอย่างถ่ายภาพตู้เสื้อผ้าจริง อัปโหลดเข้าสู่ระบบ ทำการสแกน จัดหมวดหมู่ และทดลองจัดชุดและ Virtual Try-On
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs">
                  3
                </div>
                <div className="font-bold text-xs text-slate-900">ขั้นตอนการประเมินผล (Post-Evaluation)</div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  ทำแบบประเมินความพึงพอใจ 3 ด้าน (ความถูกต้อง, ประสิทธิภาพ, ความพึงพอใจ) และสัมภาษณ์ผู้ใช้เพื่อสรุปผลคำอธิบาย
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section: 3.4 การวิเคราะห์ข้อมูล */}
      {activeSubTab === '3.4' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">หัวข้อย่อย 3.4</span>
              <h2 className="text-xl font-bold text-slate-900 font-serif mt-1">
                3.4 การวิเคราะห์ข้อมูล (Data Analysis & Statistical Evaluation)
              </h2>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <p className="font-medium text-slate-900">
                "การวิเคราะห์ข้อมูล ผู้วิจัยนำข้อมูลที่ได้จากแบบสอบถามและการทดลองใช้ระบบมาวิเคราะห์ โดยใช้ค่าความถี่ ร้อยละ ค่าเฉลี่ย (x̄) และส่วนเบี่ยงเบนมาตรฐาน (S.D.) เพื่อประเมินความถูกต้อง ประสิทธิภาพ และความพึงพอใจของผู้ใช้งานต่อระบบสแกนตู้เสื้อผ้าและจัดชุดเสื้อผ้า"
              </p>
            </div>

            {/* Grand Summary Stats Card */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="bg-indigo-900 text-white p-4 rounded-xl shadow-xs">
                <div className="text-[11px] text-indigo-300">กลุ่มตัวอย่าง (N)</div>
                <div className="text-2xl font-black mt-1">30 คน</div>
                <div className="text-[10px] text-indigo-200 mt-0.5">นักเรียน ปวช. 3 เทคโนโลยีธุรกิจดิจิทัล</div>
              </div>

              <div className="bg-emerald-900 text-white p-4 rounded-xl shadow-xs">
                <div className="text-[11px] text-emerald-300">คะแนนเฉลี่ยรวม (x̄)</div>
                <div className="text-2xl font-black mt-1">4.67</div>
                <div className="text-[10px] text-emerald-200 mt-0.5">ระดับ "มากที่สุด"</div>
              </div>

              <div className="bg-blue-900 text-white p-4 rounded-xl shadow-xs">
                <div className="text-[11px] text-blue-300">ส่วนเบี่ยงเบนมาตรฐาน (S.D.)</div>
                <div className="text-2xl font-black mt-1">0.44</div>
                <div className="text-[10px] text-blue-200 mt-0.5">ความสอดคล้องระดับสูง</div>
              </div>

              <div className="bg-purple-900 text-white p-4 rounded-xl shadow-xs">
                <div className="text-[11px] text-purple-300">ระดับความพึงพอใจ</div>
                <div className="text-xl font-bold mt-1.5">มากที่สุด</div>
                <div className="text-[10px] text-purple-200 mt-0.5">Highest Level Satisfaction</div>
              </div>
            </div>

            {/* Detailed Table of Survey Results */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4 text-indigo-600" />
                  <span>ตารางแสดงค่าเฉลี่ยและส่วนเบี่ยงเบนมาตรฐานจำแนกตามรายข้อ (N=30)</span>
                </h3>
                <span className="text-[11px] text-slate-400">มาตรวัด 5 ระดับ</span>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">รายการประเมิน</th>
                      <th className="p-3 text-center w-24">ค่าเฉลี่ย (x̄)</th>
                      <th className="p-3 text-center w-24">S.D.</th>
                      <th className="p-3 text-center w-28">ระดับความคิดเห็น</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {SURVEY_QUESTIONS.map((q) => (
                      <tr key={q.id} className="hover:bg-slate-50/50">
                        <td className="p-3 text-slate-800">
                          <div>{q.text}</div>
                          <span className="text-[10px] text-indigo-600 font-medium">
                            {q.category === 'accuracy' ? '• ด้านความถูกต้องแม่นยำ' : q.category === 'efficiency' ? '• ด้านประสิทธิภาพการทำงาน' : q.category === 'satisfaction' ? '• ด้านความพึงพอใจโดยรวม' : '• ด้านความต้องการ'}
                          </span>
                        </td>
                        <td className="p-3 text-center font-mono font-bold text-slate-900">{q.mean.toFixed(2)}</td>
                        <td className="p-3 text-center font-mono text-slate-600">{q.sd.toFixed(2)}</td>
                        <td className="p-3 text-center">
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full">
                            {q.level}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section: 3.5 การออกแบบ */}
      {activeSubTab === '3.5' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">หัวข้อย่อย 3.5</span>
              <h2 className="text-xl font-bold text-slate-900 font-serif mt-1">
                3.5 การออกแบบ (System Design & Illustrations 3.1 - 3.6)
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                ภาพประกอบทั้ง 6 ภาพตามเอกสารโครงงานวิจัย พร้อมการเชื่อมโยงระบบสู่การใช้งานจริง
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Object.entries(FIGURES_META).map(([key, fig]) => (
                <div 
                  key={key}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col hover:border-indigo-300"
                >
                  <div className="aspect-4/3 overflow-hidden bg-slate-100 relative">
                    <ReportImage
                      src={fig.path}
                      alt={fig.title}
                      figureNumber={`ภาพประกอบที่ ${fig.number}`}
                      title={fig.title}
                      description={fig.description}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold rounded pointer-events-none z-10">
                      ภาพประกอบที่ {fig.number}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2 text-xs">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{fig.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{fig.description}</p>
                    </div>

                    <button
                      onClick={() => {
                        if (fig.number === '3.1') onNavigateToStep('scan');
                        else if (fig.number === '3.2') onNavigateToStep('classify');
                        else if (fig.number === '3.3') onNavigateToStep('wardrobe');
                        else if (fig.number === '3.4') onNavigateToStep('analysis');
                        else if (fig.number === '3.5') onNavigateToStep('recommendation');
                        else if (fig.number === '3.6') onNavigateToStep('tryon');
                      }}
                      className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                    >
                      <span>เปิดหน้าระบบจริง ({fig.title.split(' ')[0]})</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
