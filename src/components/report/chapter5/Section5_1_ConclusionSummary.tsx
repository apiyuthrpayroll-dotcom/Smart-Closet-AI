import React from 'react';
import { CheckCircle2, Target, Award, TrendingUp, Sparkles, Clock, ShieldCheck, Star } from 'lucide-react';

export const Section5_1_ConclusionSummary: React.FC = () => {
  return (
    <div id="section-5-1" className="space-y-6 pt-4">
      <div className="border-b border-indigo-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            5.1
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-serif">
            สรุปผลการดำเนินงานวิจัยและพัฒนาระบบ (Summary of Research &amp; Implementation)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1 italic">
          Synthesis of Core Deliverables, Objective Realization &amp; Empirical Performance Summary
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>5.1.1 สรุปภาพรวมและการบรรลุวัตถุประสงค์ของโครงงาน (Achievement of Objectives)</span>
        </h4>
        <p>
          โครงงานวิจัยและพัฒนานวัตกรรม <strong>ระบบผู้ช่วยปัญญาประดิษฐ์สำหรับการขายและปิดการขาย (Smart Closer AI: An Intelligent Conversational &amp; Predictive Sales Closing Assistant Platform)</strong> มีเป้าหมายหลักในการแก้ไขปัญหาความล้มเหลวเชิงโครงสร้างในกระบวนการขายทางธุรกิจยุคดิจิทัล อันได้แก่ การตอบสนองลูกค้าที่ล่าช้า (Lead Decay), การคัดกรองลูกค้าที่ไร้ทิศทางและสูญเสียเวลาของพนักงานขายไปกับลีดที่ไม่มีกำลังซื้อ (Unqualified Leads), การขาดแคลนทักษะในการเจรจาขจัดข้อโต้แย้งเฉพาะราย (Objection Handling Deficit), ตลอดจนปัญหาการปล่อยให้ลูกค้าหลุดมือเนื่องจากขาดระบบติดตามงานอย่างต่อเนื่อง (Follow-up Neglect)
        </p>
        <p>
          จากการดำเนินงานวิจัยและพัฒนาตามระเบียบวิธีที่กำหนดไว้ในบทที่ 3 และผ่านการทดสอบอย่างเข้มงวดในบทที่ 4 คณะผู้วิจัยสามารถสรุปการบรรลุวัตถุประสงค์ของโครงงานได้ครบถ้วนทั้ง 3 ประการ ดังนี้:
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/40 space-y-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-indigo-950 text-sm sm:text-base">วัตถุประสงค์ข้อที่ 1: การออกแบบและพัฒนาระบบผู้ช่วยปัญญาประดิษฐ์สำหรับการขายแบบมัลติโมดูล</strong>
                <p className="text-xs sm:text-sm text-slate-700 mt-1">
                  <strong>ผลสำเร็จ:</strong> ระบบได้รับการพัฒนาเสร็จสมบูรณ์ 100% ครอบคลุม 8 โมดูลการทำงานหลัก ได้แก่ Executive Sales Dashboard, AI Sales Copilot Workspace (Text &amp; Voice), BANT Lead Qualification Engine, Customer 360 &amp; LTV Directory, Smart Product Catalog &amp; Discount Guardrails, Sales Pipeline Kanban Board, Automated Dormant Follow-up Generator และ Post-Call AI Sales Coach &amp; Analytics พร้อมสถาปัตยกรรมการเชื่อมต่อความปลอดภัยสูงผ่าน Express Gateway และ Google Gemini API
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/40 space-y-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-950 text-sm sm:text-base">วัตถุประสงค์ข้อที่ 2: การพัฒนาระบบคัดกรองและประเมินคะแนนลูกค้าเชิงทำนาย (Predictive BANT Lead Scoring)</strong>
                <p className="text-xs sm:text-sm text-slate-700 mt-1">
                  <strong>ผลสำเร็จ:</strong> ได้พัฒนาแบบจำลองการให้คะแนน BANT Score 100 คะแนนเต็ม พร้อมระบบถ่วงน้ำหนักตามพฤติกรรมลูกค้า สามารถจำแนกลูกค้าออกเป็น 3 ระดับคุณภาพ (Tier A: Hot, Tier B: Warm, Tier C: Cold) ได้อย่างแม่นยำ พร้อมระบบวิเคราะห์ความเร่งด่วนในการติดตามงาน (Urgency SLA) ช่วยให้ทีมขายจัดสรรเวลาและทรัพยากรได้อย่างมีประสิทธิผลสูงสุด
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-100 bg-amber-50/40 space-y-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-950 text-sm sm:text-base">วัตถุประสงค์ข้อที่ 3: การทดสอบประสิทธิภาพเชิงปริมาณ คุณภาพสคริปต์ และความพึงพอใจของผู้ใช้งาน</strong>
                <p className="text-xs sm:text-sm text-slate-700 mt-1">
                  <strong>ผลสำเร็จ:</strong> ระบบผ่านการทดสอบกรณีทดสอบเชิงหน้าที่ (Black-box Test Cases) ครบ 10/10 กรณี (ผ่าน 100%), อัลกอริทึมจำแนกข้อโต้แย้งมีความแม่นยำรวม 94.2% (Macro F1-Score 0.944), ระยะเวลาตอบสนองรวมเฉลี่ย 1.28 วินาที, การทดลองขายจริงภาคสนาม A/B Test ชี้ว่าระบบช่วยเพิ่มอัตราการปิดการขาย (Win Rate) ได้ถึง +89.1%, ลดรอบเวลาการขายลง -42.9% และได้รับคะแนนความพึงพอใจการยอมรับของผู้ใช้ (UAT) ระดับมากที่สุดที่ 4.80 จาก 5.00 คะแนน
                </p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-slate-900 pt-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>5.1.2 ตารางสรุปเปรียบเทียบตัวชี้วัดเป้าหมายและผลลัพธ์จริงที่ทำได้ (Target vs. Actual Matrix)</span>
        </h4>
        <p>
          เพื่อแสดงให้เห็นถึงประสิทธิผลของการวิจัยอย่างชัดเจน ตารางที่ 5.1 สรุปเปรียบเทียบค่าเป้าหมายที่ตั้งไว้ในข้อเสนอโครงงาน (Initial Proposed Targets) เทียบกับผลสัมฤทธิ์จริงที่ได้จากการวัดผลเชิงประจักษ์ (Empirical Results Achieved) ในการทดลองดำเนินงาน:
        </p>

        {/* ตารางที่ 5.1 */}
        <div className="my-4 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 font-bold text-xs sm:text-sm text-slate-800 flex items-center justify-between">
            <span>ตารางที่ 5.1 การเปรียบเทียบตัวชี้วัดเป้าหมายของโครงงานกับผลสัมฤทธิ์จริง (Target vs. Actual Empirical Results)</span>
            <span className="text-emerald-700 font-mono text-xs font-semibold">บรรลุเป้าหมาย 100%</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="p-3 w-1/4">ตัวชี้วัดความสำเร็จ (KPI)</th>
                  <th className="p-3 text-center w-1/5">เกณฑ์เป้าหมายเดิม</th>
                  <th className="p-3 text-center w-1/5">ผลการทดสอบจริง</th>
                  <th className="p-3 text-center w-1/6">สถานะสัมฤทธิผล</th>
                  <th className="p-3">ข้อสรุปผลลัพธ์สำคัญ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">1. อัตราความสำเร็จการทำงานของระบบ (Functional Pass Rate)</td>
                  <td className="p-3 text-center font-mono">≥ 90.0%</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-700">100.0% (10/10)</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">ผ่านเกณฑ์</span></td>
                  <td className="p-3 text-xs">ทำงานถูกต้องครบทั้ง 8 โมดูลโดยไม่มีข้อผิดพลาดร้ายแรง</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">2. ความแม่นยำในการจำแนกข้อโต้แย้ง (Objection Classification Accuracy)</td>
                  <td className="p-3 text-center font-mono">≥ 85.0%</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-700">94.2%</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">สูงกว่าเป้าหมาย</span></td>
                  <td className="p-3 text-xs">จำแนก Price, Authority, Need, Trust ได้อย่างถูกต้องแม่นยำสูง</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">3. เวลาตอบสนองรวมของระบบ (End-to-End Latency)</td>
                  <td className="p-3 text-center font-mono">≤ 2.50 วินาที</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-700">1.28 วินาที</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">เร็วกว่าเป้าหมาย</span></td>
                  <td className="p-3 text-xs">เร็วกว่าเกณฑ์มาตรฐานการสนทนาสดถึง 48.8% พนักงานขายใช้งานทันทีขณะคุยโทรศัพท์</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">4. อัตราการปิดการขายสำเร็จ (Sales Conversion Rate)</td>
                  <td className="p-3 text-center font-mono">เพิ่มขึ้น ≥ +20.0%</td>
                  <td className="p-3 text-center font-mono font-bold text-indigo-700">+89.1% (34.8% vs 18.4%)</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">สูงกว่าเป้าหมาย 4.4 เท่า</span></td>
                  <td className="p-3 text-xs">เพิ่มโอกาสปิดการขายขึ้นอย่างก้าวกระโดดในการทดลองขายจริง 30 วัน</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">5. ระยะเวลาในรอบการขายเฉลี่ย (Sales Cycle Duration)</td>
                  <td className="p-3 text-center font-mono">ลดลง ≥ -20.0%</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-700">-42.9% (8.1 วัน vs 14.2 วัน)</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">ลดลงอย่างมีนัยสำคัญ</span></td>
                  <td className="p-3 text-xs">ลดเวลาค้างในกระบวนการขายลงได้เกือบครึ่งหนึ่ง ช่วยเพิ่มรอบการหมุนของเงินทุน</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">6. อัตราการกู้คืนลูกค้าที่เงียบหาย (Dormant Lead Re-engagement)</td>
                  <td className="p-3 text-center font-mono">≥ 15.0%</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-700">37.1% (5.9 เท่า)</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">สูงกว่าเป้าหมาย 2.4 เท่า</span></td>
                  <td className="p-3 text-xs">ข้อความติดตามงานแบบเฉพาะเจาะจงกระตุ้นให้ลูกค้ากลับมาเจรจาต่อ</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">7. การรักษาอัตรากำไรขั้นต้น (Gross Profit Margin Protection)</td>
                  <td className="p-3 text-center font-mono">≥ 35.0%</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-700">41.2%</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">ผ่านเกณฑ์ยอดเยี่ยม</span></td>
                  <td className="p-3 text-xs">ระบบ Discount Guardrail ป้องกันพนักงานตัดราคาเกินกรอบ องค์กรไม่เสียกำไร</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">8. คะแนนประเมินความพึงพอใจของผู้ใช้งาน (UAT Overall Mean)</td>
                  <td className="p-3 text-center font-mono">≥ 4.00 / 5.00</td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-700">4.80 / 5.00 (S.D. 0.40)</td>
                  <td className="p-3 text-center"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-xs">ระดับมากที่สุด</span></td>
                  <td className="p-3 text-xs">ผู้ใช้งานกลุ่มตัวอย่าง 30 คนยอมรับในความง่าย ความแม่นยำ และคุณค่าเชิงธุรกิจ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 italic">
          หมายเหตุ: ข้อมูลตัวเลขและผลสัมฤทธิ์ทั้งหมดในตารางที่ 5.1 ได้รับการประมวลผลจากการทดลองจริงภาคสนามและการคำนวณทางสถิติตามรายละเอียดที่แสดงไว้ในบทที่ 4 หัวข้อ 4.2 ถึง 4.5
        </p>
      </div>
    </div>
  );
};
