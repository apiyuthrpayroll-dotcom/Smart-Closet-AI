import React from 'react';
import { Figure2_6_LeadScoringFlow, Figure2_7_VoiceAgentPipeline } from '../ReportFigures';
import { Flame, Calculator, Code, Mic, Volume2, Activity, Zap, CheckCircle2 } from 'lucide-react';

export const Section2_5_LeadScoring_Voice: React.FC = () => {
  return (
    <div id="section-2-5" className="space-y-5 pt-6 border-t border-slate-200">
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif">
        <span className="text-indigo-600 font-mono">2.5</span>
        <span>ขั้นตอนวิธี Predictive Lead Scoring และระบบสื่อสารด้วยเสียง (Scoring & Voice AI)</span>
      </h3>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อยกระดับจากการคาดเดาความน่าจะเป็นในการขายด้วยสัญชาตญาณ (Intuitive Guessing) 
          สู่การตัดสินใจบนฐานข้อมูลเชิงปริมาณ (Data-Driven Decision Making) 
          ระบบได้คิดค้นและประยุกต์ใช้ <strong>อัลกอริทึมการจัดคะแนนลูกค้ามุ่งหวังแบบคาดการณ์ (Predictive Lead Scoring Algorithm)</strong> 
          ซึ่งผสมผสานปัจจัย BANT แบบถ่วงน้ำหนักร่วมกับดัชนีพฤติกรรมการมีส่วนร่วมของลูกค้า
        </p>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.5.1 การกำหนดสูตรคณิตศาสตร์ถ่วงน้ำหนักหลายเกณฑ์ (Multi-Criteria Weighted Formulation)
        </h4>
        <p>
          คะแนนรวมของลูกค้ามุ่งหวังแต่ละราย (S_Lead) มีค่าอยู่ระหว่าง 0 ถึง 100 คะแนน คำนวณได้จากสมการต่อไปนี้:
        </p>

        {/* Math Formula Box */}
        <div className="p-4 bg-slate-900 text-emerald-400 rounded-xl font-mono text-xs sm:text-sm text-center shadow-inner overflow-x-auto my-3 border border-slate-800">
          S_Lead = (w_B × S_Budget) + (w_A × S_Authority) + (w_N × S_Need) + (w_T × S_Timeline) + B_Behavior
        </div>

        <p className="text-xs text-slate-600">
          โดยกำหนดค่าน้ำหนักตามผลการวิเคราะห์สัมประสิทธิ์ความสัมพันธ์ (Correlation Coefficients) กับอัตราการปิดการขายสำเร็จ:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
          <li><strong>w_B = 0.25:</strong> น้ำหนักด้านงบประมาณ (Budget) 25%</li>
          <li><strong>w_A = 0.25:</strong> น้ำหนักด้านอำนาจตัดสินใจ (Authority) 25%</li>
          <li><strong>w_N = 0.30:</strong> น้ำหนักด้านความจำเป็นเร่งด่วน (Need) 30% (ปัจจัยที่มีผลต่อการตัดสินใจสูงสุด)</li>
          <li><strong>w_T = 0.20:</strong> น้ำหนักด้านกรอบเวลา (Timeline) 20%</li>
          <li><strong>B_Behavior:</strong> คะแนนโบนัสพฤติกรรม (0 - 10 คะแนน) เช่น การตอบกลับแชทอย่างรวดเร็ว หรือการคลิกดูใบเสนอราคา</li>
        </ul>

        {/* ตารางที่ 2.1 */}
        <div className="my-5 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs text-slate-800 flex items-center justify-between">
            <span>ตารางที่ 2.1 เมทริกซ์เกณฑ์การให้คะแนน Lead Scoring และข้อกำหนดระดับบริการ (SLA Matrix)</span>
            <span className="text-[10px] text-slate-500 font-normal">เกณฑ์อ้างอิงโครงการ Smart Closer AI</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-3">ระดับ (Tier)</th>
                  <th className="p-3">ช่วงคะแนน</th>
                  <th className="p-3">คุณลักษณะพฤติกรรมของลูกค้า</th>
                  <th className="p-3">มาตรการการเข้าถึง (Next-Best Action)</th>
                  <th className="p-3">SLA การตอบกลับ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="bg-amber-50/40">
                  <td className="p-3 font-bold text-amber-900 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    <span>HOT</span>
                  </td>
                  <td className="p-3 font-mono font-bold text-amber-700">80 - 100</td>
                  <td className="p-3">มีงบพร้อม, เป็นผู้มีอำนาจตัดสินใจ, ต้องการใช้ทันที</td>
                  <td className="p-3 font-semibold text-slate-900">โทรติดต่อด่วน / ส่งใบเสนอราคาพร้อมส่วนลดพิเศษ</td>
                  <td className="p-3 font-mono text-emerald-700 font-bold">&lt; 10 นาที</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-sky-900">WARM</td>
                  <td className="p-3 font-mono font-bold text-sky-700">60 - 79</td>
                  <td className="p-3">มีความต้องการชัดเจน แต่อยู่ระหว่างเทียบราคา หรือรอบอร์ด</td>
                  <td className="p-3">ส่งเอกสารเปรียบเทียบสเปก และตั้งเวลาติดตามผล (Follow-up)</td>
                  <td className="p-3 font-mono text-slate-600">ภายใน 24 ชม.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700">COLD</td>
                  <td className="p-3 font-mono font-bold text-slate-500">&lt; 60</td>
                  <td className="p-3">สอบถามข้อมูลเบื้องต้น ยังไม่มีกำหนดการจัดซื้อ หรือไม่มีงบ</td>
                  <td className="p-3">นำเข้าสู่ระบบส่งคอนเทนต์ให้ความรู้อัตโนมัติ (Automated Nurturing)</td>
                  <td className="p-3 font-mono text-slate-600">ระบบอัตโนมัติ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-5">
          2.5.2 รหัสเทียม (Pseudocode) ของขั้นตอนวิธีคำนวณ Lead Score
        </h4>
        
        {/* Pseudocode Box */}
        <div className="p-4 bg-slate-950 text-slate-200 rounded-xl font-mono text-xs border border-slate-800 space-y-1">
          <div className="text-indigo-400 font-bold mb-1">// ALGORITHM: CalculateLeadScoreAndTier</div>
          <div><span className="text-pink-400">function</span> <span className="text-sky-300">evaluateLead</span>(leadData, bantMetrics):</div>
          <div className="pl-4 text-slate-400">// คำนวณคะแนนถ่วงน้ำหนักตามสูตร</div>
          <div className="pl-4">weightedScore = (0.25 * bantMetrics.budget) + (0.25 * bantMetrics.authority) + (0.30 * bantMetrics.need) + (0.20 * bantMetrics.timeline)</div>
          <div className="pl-4"><span className="text-pink-400">if</span> (leadData.repliedWithinFiveMinutes) weightedScore += 5;</div>
          <div className="pl-4"><span className="text-pink-400">if</span> (leadData.requestedQuote) weightedScore += 5;</div>
          <div className="pl-4">finalScore = Math.min(100, Math.round(weightedScore));</div>
          <div className="pl-4 text-slate-400">// จัดกลุ่ม Tier</div>
          <div className="pl-4"><span className="text-pink-400">if</span> (finalScore &gt;= 80) tier = 'HOT';</div>
          <div className="pl-4"><span className="text-pink-400">else if</span> (finalScore &gt;= 60) tier = 'WARM';</div>
          <div className="pl-4"><span className="text-pink-400">else</span> tier = 'COLD';</div>
          <div className="pl-4"><span className="text-pink-400">return</span> &#123; score: finalScore, tier: tier &#125;;</div>
        </div>
      </div>

      {/* แทรกรูปที่ 2.6 */}
      <Figure2_6_LeadScoringFlow />

      {/* 2.5.3 ระบบสื่อสารด้วยเสียง Real-time Voice Closer */}
      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify mt-5">
        <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-4">
          2.5.3 เทคโนโลยีการสื่อสารด้วยเสียงและตัวแทนเสมือนแบบสองทิศทาง (Real-time Voice AI)
        </h4>
        <p>
          สำหรับการเจรจาการขายที่มีมูลค่าสูง (High-Ticket Deals) ช่องทางเสียงทางโทรศัพท์ยังคงเป็นสื่อกลางที่มีอัตราความสำเร็จสูงสุด 
          ระบบ Smart Closer AI จึงได้ผสานระบบจำลองการสนทนาด้วยเสียง (Voice Agent Simulator) 
          โดยใช้เทคโนโลยี <strong>Web Audio API</strong> และ <strong>Web Speech API</strong> 
          ทำงานประสานกับโมเดลภาษาขนาดใหญ่ เพื่อจำลองการโทรศัพท์แบบ Full-Duplex 
          โดยรองรับการถอดเสียงพูดภาษาไทย (Speech-to-Text), การประมวลผลคำตอบเชิงกลยุทธ์, 
          และการสังเคราะห์เสียงโต้ตอบ (Text-to-Speech) ที่มีความเป็นธรรมชาติ
        </p>
      </div>

      {/* แทรกรูปที่ 2.7 */}
      <Figure2_7_VoiceAgentPipeline />
    </div>
  );
};
