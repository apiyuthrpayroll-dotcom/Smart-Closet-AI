import React from 'react';
import { 
  Figure4_5_ConfusionMatrix, 
  Figure4_6_ResponseLatencyChart 
} from '../ReportFigures';
import { BrainCircuit, Zap, Target, Gauge, Sparkles, Award } from 'lucide-react';

export const Section4_3_AiPerformance: React.FC = () => {
  const metricsData = [
    { category: 'Price Objection (ราคาแพง / ขอส่วนลด)', testSamples: 150, tp: 144, fp: 6, fn: 6, precision: '96.0%', recall: '96.0%', f1: '0.960' },
    { category: 'Authority Objection (ขอปรึกษาเจ้านาย / หุ้นส่วน)', testSamples: 120, tp: 112, fp: 7, fn: 8, precision: '94.1%', recall: '93.3%', f1: '0.937' },
    { category: 'Need / Timing (ยังไม่รีบ / ไว้ติดต่อกลับภายหลัง)', testSamples: 130, tp: 121, fp: 8, fn: 9, precision: '93.8%', recall: '93.1%', f1: '0.934' },
    { category: 'Trust / Product (ยังไม่มั่นใจในคุณภาพ / เทียบกับคู่แข่ง)', testSamples: 100, tp: 94, fp: 5, fn: 6, precision: '94.9%', recall: '94.0%', f1: '0.945' },
  ];

  return (
    <div id="section-4-3" className="space-y-6">
      <div className="border-b border-indigo-200 pb-3">
        <h3 className="text-xl font-bold text-indigo-950 font-serif flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-indigo-700" />
          <span>4.3 ผลการทดสอบประสิทธิภาพของโมเดลปัญญาประดิษฐ์ (AI &amp; NLP Model Performance Evaluation)</span>
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Empirical Accuracy Analysis, Confusion Matrix, Latency Benchmarks, and Script Quality Evaluation
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อยืนยันว่าโมเดลภาษาขนาดใหญ่ (Large Language Model: Gemini 2.5 Flash) ที่ถูกปรับแต่งคำสั่งอย่างเป็นระบบ (Prompt Engineering &amp; Few-Shot In-Context Grounding) 
          มีความสามารถในการเป็นผู้ช่วยปิดการขายที่เชื่อถือได้ ผู้วิจัยได้ดำเนินการทดสอบทางสถิติและวิศวกรรมปัญญาประดิษฐ์ 3 มิติหลัก ได้แก่ ความแม่นยำในการจำแนกข้อโต้แย้ง, 
          ความเร็วในการประมวลผลคำตอบ (Response Latency), และการประเมินคุณภาพของสคริปต์ปิดการขายโดยผู้เชี่ยวชาญ:
        </p>

        {/* 4.3.1 Classification Accuracy */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">1</span>
            <span>4.3.1 ความแม่นยำในการจำแนกประเภทข้อโต้แย้ง (Objection Classification Accuracy &amp; Confusion Matrix)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ผู้วิจัยได้รวบรวมชุดข้อมูลทดสอบ (Gold Standard Test Dataset) ซึ่งประกอบด้วยข้อความและประโยคข้อโต้แย้งจากการเจรจาขายจริงในธุรกิจ B2B และ B2C 
            จำนวนทั้งสิ้น <strong>500 ตัวอย่าง</strong> ครอบคลุม 4 หมวดหมู่หลัก ได้แก่ ด้านราคา (Price), ด้านอำนาจตัดสินใจ (Authority), ด้านความจำเป็นและเวลา (Need/Timing), 
            และด้านความไว้วางใจในสินค้า/เปรียบเทียบคู่แข่ง (Trust/Product) จากนั้นนำมาประเมินผ่านตัวชี้วัด Precision, Recall และ F1-Score ดังแสดงในตารางที่ 4.2:
          </p>

          <div className="my-2 border border-slate-200 rounded-xl overflow-hidden bg-white">
            <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 font-bold text-xs text-slate-800 flex justify-between">
              <span>ตารางที่ 4.2 สรุปค่าประสิทธิภาพการจำแนกข้อโต้แย้งของระบบ Smart Closer AI (N=500 ตัวอย่าง)</span>
              <span className="font-mono text-indigo-700">Overall Accuracy: 94.2%</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <th className="p-2.5 font-bold">ประเภทข้อโต้แย้ง</th>
                    <th className="p-2.5 text-center font-bold">จำนวนตัวอย่าง (N)</th>
                    <th className="p-2.5 text-center font-bold">Precision</th>
                    <th className="p-2.5 text-center font-bold">Recall</th>
                    <th className="p-2.5 text-center font-bold">F1-Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                  {metricsData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80">
                      <td className="p-2.5 font-sans font-medium text-slate-900">{row.category}</td>
                      <td className="p-2.5 text-center text-slate-600">{row.testSamples}</td>
                      <td className="p-2.5 text-center text-emerald-700 font-bold">{row.precision}</td>
                      <td className="p-2.5 text-center text-indigo-700 font-bold">{row.recall}</td>
                      <td className="p-2.5 text-center text-slate-900 font-bold">{row.f1}</td>
                    </tr>
                  ))}
                  <tr className="bg-indigo-50/50 font-bold text-indigo-950">
                    <td className="p-2.5 font-sans">ค่าเฉลี่ยรวม (Macro Average)</td>
                    <td className="p-2.5 text-center">500</td>
                    <td className="p-2.5 text-center text-emerald-700">94.7%</td>
                    <td className="p-2.5 text-center text-indigo-700">94.1%</td>
                    <td className="p-2.5 text-center text-indigo-900">0.944</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            จากผลการทดสอบพบว่า โมเดลมีความแม่นยำรวม (Overall Accuracy) สูงถึง <strong>94.2%</strong> และมีค่า Macro F1-Score อยู่ที่ <strong>0.944</strong> 
            โดยกลุ่มข้อโต้แย้งเรื่องราคา (Price Objection) มีความแม่นยำสูงสุด (F1 = 0.960) เนื่องจากมีคำศัพท์บ่งชี้ที่ชัดเจน 
            ขณะที่กลุ่ม Authority และ Need มีความเหลื่อมล้ำกันเล็กน้อยในกรณีที่ลูกค้ากล่าวว่า "ต้องรอประชุมบอร์ดก่อนถึงจะสรุปได้" 
            ซึ่งมีทั้งมิติของเวลาและผู้มีอำนาจตัดสินใจร่วมกัน ดังมีรายละเอียดในเมทริกซ์ความสับสนในรูปที่ 4.5:
          </p>

          <Figure4_5_ConfusionMatrix />
        </div>

        {/* 4.3.2 Latency Benchmark */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-4 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">2</span>
            <span>4.3.2 ผลการวัดระยะเวลาตอบสนองของระบบและการประมวลผล (Response Latency &amp; Throughput Benchmark)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ในการเจรจาการขายแบบเรียลไทม์ ความเร็วในการนำเสนอสคริปต์ให้พนักงานขายถือเป็นปัจจัยวิกฤต (Mission Critical) 
            หากระบบใช้เวลามากกว่า 3-5 วินาที ลูกค้าจะสัมผัสได้ถึงช่วงความเงียบ (Dead Air) ผู้วิจัยจึงได้ทำการทดสอบจับเวลา 
            (End-to-End Latency Profiling) จำนวน 100 ครั้งซ้ำ ในช่วงเวลาที่มีปริมาณการใช้งานปกติ โดยแยกวิเคราะห์เป็น 4 สเตจการทำงาน:
          </p>

          <Figure4_6_ResponseLatencyChart />

          <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-xl text-xs space-y-1 text-slate-700 leading-relaxed">
            <div className="font-bold text-indigo-950 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>สรุปผลการวิเคราะห์เวลาตอบสนอง (Total End-to-End Latency: 1.28 วินาที):</span>
            </div>
            <p>
              เวลาตอบสนองเฉลี่ยรวมอยู่ที่ <strong>1.28 วินาที (1,280 ms)</strong> โดยขั้นตอนหลักคือการอนุมานผลของ Gemini 2.5 Flash API (740 ms) 
              ซึ่งเร็วกว่าเกณฑ์มาตรฐานสากลสำหรับการสนับสนุนการขายสด (เกณฑ์ยอมรับสูงสุดคือไม่เกิน 2.5 วินาที) 
              ทำให้พนักงานขายสามารถอ่านและนำสคริปต์ไปปรับใช้ในการพูดได้อย่างราบรื่น ไร้รอยต่อ และเป็นธรรมชาติเสมือนมีโค้ชนั่งอยู่ข้างกาย
            </p>
          </div>
        </div>

        {/* 4.3.3 Script Quality Rubrics */}
        <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl space-y-3 shadow-2xs">
          <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs font-mono font-bold">3</span>
            <span>4.3.3 การประเมินคุณภาพของสคริปต์ปิดการขายตามหลักจิตวิทยาการขาย (Expert Rubrics Evaluation)</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ผู้วิจัยได้เชิญผู้เชี่ยวชาญด้านการฝึกอบรมการขายระดับมืออาชีพจำนวน 3 ท่าน 
            ทำการประเมินสคริปต์ที่ AI สังเคราะห์ขึ้นจำนวน 60 ชุด ตามเกณฑ์รูบริกส์ (Rubric Criteria) 4 ด้าน (คะแนนเต็ม 5.00 ต่อด้าน):
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-800">1. การแสดงความเข้าอกเข้าใจ (Empathy &amp; Rapport)</span>
                <span className="font-mono font-bold text-indigo-700">4.80 / 5.00</span>
              </div>
              <p className="text-slate-600">AI สามารถรับฟังข้อกังวลของลูกค้าด้วยคำพูดที่สุภาพ เข้าใจมุมมอง ไม่โต้แย้งแบบหักหาญน้ำใจ</p>
            </div>
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-800">2. การตีกรอบคุณค่าสินค้า (Value Re-framing)</span>
                <span className="font-mono font-bold text-indigo-700">4.75 / 5.00</span>
              </div>
              <p className="text-slate-600">สามารถดึงจุดเด่นของสินค้ามาเปรียบเทียบกับผลตอบแทนจากการลงทุน (ROI) ได้อย่างสมเหตุสมผล</p>
            </div>
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-800">3. ความกระชับและธรรมชาติของภาษา (Natural Phrasing)</span>
                <span className="font-mono font-bold text-indigo-700">4.68 / 5.00</span>
              </div>
              <p className="text-slate-600">ภาษาไทยมีความสละสลวย เป็นภาษาพูดในการค้าขายจริง ไม่แปลแข็งเหมือนการแปลเครื่องทั่วไป</p>
            </div>
            <div className="p-3 bg-slate-50 border rounded-xl">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-800">4. ประสิทธิผลของการขอคำสั่งซื้อ (Call to Action Strength)</span>
                <span className="font-mono font-bold text-indigo-700">4.85 / 5.00</span>
              </div>
              <p className="text-slate-600">มีประโยคปิดท้ายที่นำเสนอทางเลือก 2 ทาง (Alternative Choice Closing) เพื่อกระตุ้นการตัดสินใจทันที</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
