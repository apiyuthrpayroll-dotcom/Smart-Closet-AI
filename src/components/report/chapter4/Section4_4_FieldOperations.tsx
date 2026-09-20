import React from 'react';
import { Figure4_7_ConversionComparisonChart } from '../ReportFigures';
import { TrendingUp, Clock, ShieldCheck, DollarSign, Users, Award, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const Section4_4_FieldOperations: React.FC = () => {
  return (
    <div id="section-4-4" className="space-y-6">
      <div className="border-b border-indigo-200 pb-3">
        <h3 className="text-xl font-bold text-indigo-950 font-serif flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-700" />
          <span>4.4 ผลการทดลองใช้งานจริงในกระบวนการขายและผลกระทบทางธุรกิจ (Field Operational Trials &amp; Business Impact)</span>
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Comparative Empirical Study (A/B Field Trial, 30 Days, 600 Qualified Leads)
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อวัดผลสัมฤทธิ์ในเชิงพาณิชย์และผลกระทบต่อกระบวนการขายจริง (Business Impact) ผู้วิจัยได้ดำเนินการทดลองภาคสนาม 
          ในรูปแบบ <strong>Controlled A/B Field Trial</strong> ร่วมกับสถานประกอบการธุรกิจบริการและซอฟต์แวร์ B2B/B2C เป็นระยะเวลา 30 วัน 
          โดยแบ่งพนักงานขายที่มีประสบการณ์ใกล้เคียงกันออกเป็น 2 กลุ่มอย่างเท่าเทียมกัน:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
              <span>กลุ่มควบคุม (Control Group - พนักงาน 15 คน):</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              พนักงานขายใช้กระบวนการขายแบบดั้งเดิม (Manual Selling) ทำการเจรจา จดโน้ต และนึกสคริปต์ตอบคำถามตามทักษะส่วนบุคคล 
              โดยได้รับการกระจายรายชื่อลูกค้ามุ่งหวัง (Inbound Qualified Leads) จำนวน 300 ราย
            </p>
          </div>

          <div className="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-1.5">
            <div className="font-bold text-indigo-950 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              <span>กลุ่มทดลอง (Treatment Group - พนักงาน 15 คน):</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              พนักงานขายได้รับระบบ <strong>Smart Closer AI</strong> เป็นผู้ช่วยขณะเจรจา ทั้งในโหมดคำแนะนำข้อโต้แย้งแบบเรียลไทม์, 
              การจัดลำดับ BANT Leads, และการสร้างข้อความ Follow-up อัตโนมัติ โดยได้รับการกระจายรายชื่อลูกค้า 300 รายในเงื่อนไขเดียวกัน
            </p>
          </div>
        </div>

        {/* 4.4.2 Closing Win Rate */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">1</span>
            <span>4.4.2 การวิเคราะห์เปรียบเทียบอัตราการปิดการขาย (Closing Win Rate Comparison)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            เมื่อสิ้นสุดระยะเวลาทดลอง 30 วัน ได้ทำการรวบรวมข้อมูลสถานะดีล พบว่ากลุ่มทดลองที่ใช้ระบบ Smart Closer AI 
            สามารถปิดการขายสำเร็จ (Closed Won) ได้ <strong>104 ดีล จาก 300 ดีล (คิดเป็น Win Rate 34.8%)</strong> 
            ในขณะที่กลุ่มควบคุมสามารถปิดการขายได้เพียง <strong>55 ดีล จาก 300 ดีล (คิดเป็น Win Rate 18.4%)</strong> 
            ซึ่งแสดงให้เห็นว่าระบบช่วยเพิ่มอัตราความสำเร็จในการปิดการขายขึ้นอย่างมีนัยสำคัญทางสถิติถึง <strong>+89.1%</strong> (p &lt; 0.01) ดังแสดงในรูปที่ 4.7:
          </p>

          <Figure4_7_ConversionComparisonChart />
        </div>

        {/* 4.4.3 Sales Cycle Duration */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">2</span>
            <span>4.4.3 ระยะเวลาเฉลี่ยในวงจรการขาย (Sales Cycle Duration Reduction)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            การวัดระยะเวลาเฉลี่ยตั้งแต่เริ่มติดต่อลูกค้ารายใหม่ จนกระทั่งมีการชำระเงินหรือเซ็นสัญญาสำเร็จ (Time to Close):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="text-slate-500 mb-1">กลุ่มเดิม (Manual)</div>
              <div className="text-xl font-bold font-mono text-slate-700">14.2 วัน</div>
              <div className="text-[11px] text-slate-400 mt-1">เฉลี่ย 4-6 ครั้งในการติดต่อ</div>
            </div>
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl">
              <div className="text-indigo-600 font-bold mb-1">กลุ่มใช้ Smart Closer AI</div>
              <div className="text-xl font-bold font-mono text-indigo-700">8.1 วัน</div>
              <div className="text-[11px] text-emerald-600 font-bold mt-1">เฉลี่ย 2-3 ครั้งในการติดต่อ</div>
            </div>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <div className="text-emerald-700 font-bold mb-1">ระยะเวลาที่ประหยัดได้</div>
              <div className="text-xl font-bold font-mono text-emerald-700">-42.9%</div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-1">ปิดดีลได้เร็วกว่าเดิมเกือบ 1 เท่าตัว</div>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            เหตุผลที่วงจรการขายสั้นลง เนื่องจากพนักงานขายสามารถขจัดข้อโต้แย้งได้ทันทีในการคุยรอบแรก ไม่ต้องเสียเวลานัดหมายใหม่เพื่อสอบถามข้อมูลทางเทคนิค 
            และระบบ BANT Scoring ช่วยคัดกรองให้ทีมขายทุ่มเทเวลากับลูกค้าที่มีงบประมาณและอำนาจตัดสินใจจริง
          </p>
        </div>

        {/* 4.4.4 Follow-up Recovery */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">3</span>
            <span>4.4.4 อัตราการกู้คืนลูกค้าที่เงียบหาย (Lead Re-engagement Recovery Rate)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ในกระบวนการขายทั่วไป ดีลกว่า 60% มักสูญเสียไปเพราะลูกค้าอ่านแล้วไม่ตอบ (Ghosting) และพนักงานขายไม่กล้าทวงถามซ้ำ 
            จากการทดลองในส่วนโมดูล Automated Follow-up Queue พบผลลัพธ์ดังตารางที่ 4.3:
          </p>

          <div className="my-2 border border-slate-200 rounded-xl overflow-hidden bg-white">
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 font-bold text-xs text-slate-800">
              ตารางที่ 4.3 สถิติการกู้คืนลูกค้าที่เงียบหายเกิน 48 ชั่วโมง (Lead Re-engagement Metric)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <th className="p-2.5 font-bold">กลุ่มการทดสอบ</th>
                    <th className="p-2.5 text-center font-bold">จำนวนลูกค้าที่เงียบหาย</th>
                    <th className="p-2.5 text-center font-bold">ตอบกลับหลังทวงถาม</th>
                    <th className="p-2.5 text-center font-bold">เปลี่ยนเป็นดีลสำเร็จ</th>
                    <th className="p-2.5 text-center font-bold">Re-engagement Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                  <tr>
                    <td className="p-2.5 font-sans font-medium text-slate-800">กลุ่มควบคุม (Manual Follow-up)</td>
                    <td className="p-2.5 text-center">145 ราย</td>
                    <td className="p-2.5 text-center text-slate-600">9 ราย</td>
                    <td className="p-2.5 text-center text-slate-600">3 ราย</td>
                    <td className="p-2.5 text-center text-slate-600 font-bold">6.2%</td>
                  </tr>
                  <tr className="bg-indigo-50/50">
                    <td className="p-2.5 font-sans font-bold text-indigo-950">กลุ่มทดลอง (Smart Closer AI Follow-up)</td>
                    <td className="p-2.5 text-center">140 ราย</td>
                    <td className="p-2.5 text-center text-indigo-700 font-bold">52 ราย</td>
                    <td className="p-2.5 text-center text-emerald-700 font-bold">24 ราย</td>
                    <td className="p-2.5 text-center text-indigo-900 font-bold">37.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            ข้อความติดตามงานที่สังเคราะห์โดย AI มีความเฉพาะเจาะจง (Personalized) อ้างอิงประเด็นเดิมที่ลูกค้ากังวล 
            และใช้น้ำเสียงที่เป็นมิตรทำให้ลูกค้ารู้สึกว่าได้รับการใส่ใจ ไม่รู้สึกเหมือนถูกตื๊อขายของ จึงมีอัตราการตอบกลับสูงขึ้นถึง <strong>5.9 เท่า</strong>
          </p>
        </div>

        {/* 4.4.5 Gross Margin Protection */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">4</span>
            <span>4.4.5 การรักษาระดับกำไรขั้นต้นด้วยขอบเขตความปลอดภัย (Gross Margin Protection by Guardrails)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ปัญหาสำคัญของทีมขายเดิมคือ เมื่อเผชิญข้อโต้แย้งเรื่องราคา พนักงานขายมักยอมตัดลดราคาเกินอำนาจจนบริษัทขาดทุน 
            แต่ในระบบ Smart Closer AI กลไก <em>Max Discount Guardrail</em> ได้บังคับใช้กฎ 100% 
            ส่งผลให้อัตรากำไรขั้นต้นเฉลี่ย (Average Gross Margin) ของดีลในกลุ่มทดลองอยู่ที่ <strong>41.2%</strong> 
            เปรียบเทียบกับกลุ่มควบคุมที่มีอัตรากำไรเฉลี่ยเพียง <strong>33.8%</strong> 
            นั่นหมายความว่าระบบไม่เพียงแต่ช่วยเพิ่มยอดขาย แต่ยังช่วยรักษาผลกำไรสุทธิของกิจการได้อย่างมีประสิทธิภาพ
          </p>
        </div>
      </div>
    </div>
  );
};
