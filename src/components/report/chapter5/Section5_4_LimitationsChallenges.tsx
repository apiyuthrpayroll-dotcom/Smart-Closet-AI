import React from 'react';
import { AlertTriangle, MicOff, WifiOff, PackageX, UserX, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const Section5_4_LimitationsChallenges: React.FC = () => {
  return (
    <div id="section-5-4" className="space-y-6 pt-4">
      <div className="border-b border-indigo-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            5.4
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-serif">
            ปัญหา อุปสรรค และข้อจำกัดของระบบ (Challenges &amp; System Limitations)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1 italic">
          Critical Reflection, Acoustic Boundaries, Hardware Dependency &amp; Edge-Case Analysis
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          ในการดำเนินงานวิจัยและพัฒนา แม้ว่าระบบ Smart Closer AI จะสามารถผ่านเกณฑ์การทดสอบเชิงฟังก์ชันและการทดลองภาคสนามได้อย่างน่าพึงพอใจ แต่คณะผู้วิจัยได้ตระหนักและค้นพบข้อจำกัดสำคัญทางเทคนิคและบริบทสภาพแวดล้อมจริง ซึ่งจำเป็นต้องได้รับการบันทึกไว้อย่างซื่อตรงทางวิชาการ เพื่อเป็นรากฐานในการปรับปรุงและพัฒนาในอนาคต ดังนี้:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          {/* ข้อจำกัดที่ 1 */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm sm:text-base">
              <MicOff className="w-5 h-5 text-amber-600 shrink-0" />
              <span>5.4.1 ข้อจำกัดด้านสัญญาณเสียงและเบราว์เซอร์ (Acoustic &amp; Web Speech Limits)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              การทำงานของระบบถอดความเสียงพูดภาษาไทย (Speech-to-Text) และสังเคราะห์เสียง (Text-to-Speech) ในปัจจุบันอาศัย Web Speech API ซึ่งเป็นมาตรฐานของเว็บเบราว์เซอร์ จึงพบข้อจำกัดเมื่อใช้งานในสภาพแวดล้อมที่มีเสียงรบกวนรอบข้าง (Ambient Background Noise) เช่น ในคอลเซ็นเตอร์ที่พนักงานนั่งติดกัน หรือการใช้งานบนเบราว์เซอร์บางตระกูล เช่น Safari บนระบบปฏิบัติการ iOS ซึ่งจำกัดการเข้าถึงไมโครโฟนอัตโนมัติ
            </p>
          </div>

          {/* ข้อจำกัดที่ 2 */}
          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-blue-900 text-sm sm:text-base">
              <WifiOff className="w-5 h-5 text-blue-600 shrink-0" />
              <span>5.4.2 ข้อจำกัดด้านการเชื่อมต่อเครือข่ายอินเทอร์เน็ต (Network Dependency &amp; Latency)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              เนื่องจากสถาปัตยกรรมหลักของระบบพึ่งพาการเรียกใช้โมเดล Google Gemini ผ่านระบบคลาวด์ แม้ว่าในสภาวะปกติเวลาตอบสนองจะอยู่ที่ 1.28 วินาที แต่หากพนักงานขายอยู่ในพื้นที่สัญญาณอินเทอร์เน็ตไม่เสถียร (High Jitter หรือ Packet Loss) เวลาตอบสนองอาจพุ่งสูงขึ้นเป็น 3-4 วินาที ซึ่งอาจทำให้พนักงานขายเสียจังหวะในการสนทนาสดได้
            </p>
          </div>

          {/* ข้อจำกัดที่ 3 */}
          <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-purple-900 text-sm sm:text-base">
              <PackageX className="w-5 h-5 text-purple-600 shrink-0" />
              <span>5.4.3 ข้อจำกัดด้านความซับซ้อนของโครงสร้างราคาสินค้า (Complex Pricing Matrix)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              ระบบแคตตาล็อกและ Guardrail ในปัจจุบันถูกออกแบบมาสำหรับโครงสร้างสินค้าที่มีราคาสมบูรณ์ในตัว (Unit-based หรือ Tiered Pricing) แต่ในธุรกิจ B2B ขนาดใหญ่ที่มีการคิดราคาแบบผันแปรตามปริมาณการใช้งาน (Usage-based Custom SOW) หรือมีเงื่อนไขสัญญาทางกฎหมายที่สลับซับซ้อนหลายชั้น ระบบยังจำเป็นต้องอาศัยการกำกับดูแลโดยผู้เชี่ยวชาญมนุษย์
            </p>
          </div>

          {/* ข้อจำกัดที่ 4 */}
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 space-y-2">
            <div className="flex items-center gap-2 font-bold text-rose-900 text-sm sm:text-base">
              <UserX className="w-5 h-5 text-rose-600 shrink-0" />
              <span>5.4.4 ข้อจำกัดด้านการรับรู้ภาษากายและอารมณ์ที่ซับซ้อน (Non-Verbal &amp; Micro-Cues)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              ระบบสามารถวิเคราะห์ได้เฉพาะข้อความและคำพูด แต่ไม่สามารถรับรู้ถึงภาษากาย (Body Language), สีหน้าท่าทาง (Facial Micro-expressions) หรือน้ำเสียงประชดประชัน (Sarcasm/Irony) ที่แฝงมากับเสียงพูดได้ ส่งผลให้ในบางครั้ง AI อาจตีความข้อโต้แย้งแบบตรงไปตรงมาจนเกินไป ทำให้พนักงานขายต้องใช้วิจารณญาณส่วนตัวประกอบด้วยเสมอ
            </p>
          </div>
        </div>

        <h4 className="text-base sm:text-lg font-bold text-slate-900 pt-3 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>ตารางที่ 5.2 การวิเคราะห์ข้อจำกัดและมาตรการป้องกันชั่วคราวที่ระบบประยุกต์ใช้ (Limitations &amp; Mitigations)</span>
        </h4>
        <p>
          เพื่อแก้ไขปัญหาและลดทอนผลกระทบจากข้อจำกัดข้างต้นในระหว่างการใช้งาน คณะผู้วิจัยได้ออกแบบและบรรจุกลไกป้องกัน (Built-in Safeguards &amp; Fallback Mechanisms) ไว้ในระบบตามตารางที่ 5.2:
        </p>

        {/* ตารางที่ 5.2 */}
        <div className="my-3 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 font-bold text-xs sm:text-sm text-slate-800">
            ตารางที่ 5.2 การวิเคราะห์ข้อจำกัดของระบบ Smart Closer AI และกลไกป้องกัน/บรรเทาผลกระทบที่ใช้งานจริง
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                  <th className="p-3 w-1/4">ประเด็นข้อจำกัด</th>
                  <th className="p-3 w-1/3">ผลกระทบที่อาจเกิดขึ้น</th>
                  <th className="p-3">กลไกป้องกันและทางออกสำรองที่ระบบประยุกต์ใช้</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">เสียงรบกวนรอบข้าง (Acoustic Noise)</td>
                  <td className="p-3 text-xs">ถอดข้อความผิดเพี้ยน หรือจับคำศัพท์การต่อรองไม่ครบถ้วน</td>
                  <td className="p-3 text-xs">
                    ออกแบบส่วนต่อประสานให้มีช่อง <strong>Quick Text Input</strong> และปุ่มลัดข้อโต้แย้งยอดนิยม (Quick Objection Pills: ราคา, ไม่มีเวลา, กลัวผลลัพธ์) ให้พนักงานกดเลือกได้ทันทีโดยไม่ต้องเปิดไมค์
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">อินเทอร์เน็ตหน่วงหรือหลุด (Network Latency)</td>
                  <td className="p-3 text-xs">รอการประมวลผลจากคลาวด์นานเกินไป พนักงานขายเสียจังหวะ</td>
                  <td className="p-3 text-xs">
                    ติดตั้งระบบ <strong>Rule-based Offline Rebuttal Cache</strong> ในเครื่องผู้ใช้ (Local Storage) หากระบบตรวจพบ Latency &gt; 2.5 วินาที จะดึงสคริปต์สำรองที่ผ่านการจัดเตรียมไว้แล้วมาแสดงทันที
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">พนักงานขายเผลอกดลดราคาเกินสิทธิ์ (Price Leakage)</td>
                  <td className="p-3 text-xs">กำไรของบริษัทเสียหาย ลูกค้าเคยชินกับการต่อรองขั้นรุนแรง</td>
                  <td className="p-3 text-xs">
                    วางโครงสร้าง <strong>Hard Cap Discount Guardrail</strong> ในระดับโค้ด โดยปุ่มข้อเสนอพิเศษจะถูกล็อคสีเทา และ AI จะปฏิเสธการคำนวณราคาต่ำกว่า Minimum Floor Price โดยเด็ดขาด
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">ความกำกวมของคำพูดลูกค้า (Semantic Ambiguity)</td>
                  <td className="p-3 text-xs">AI จำแนกประเภทข้อโต้แย้งผิดหมวด เช่น คิดว่าเป็นเรื่องราคาแต่จริงๆ กลัวความเสี่ยง</td>
                  <td className="p-3 text-xs">
                    ระบบสร้างสคริปต์ควบคู่กัน <strong>3 ทางเลือกเสมอ (3 Diverse Rebuttal Cards)</strong> ทำให้พนักงานขายสามารถเลือกการ์ดที่ตรงกับอารมณ์จริงของลูกค้าได้ด้วยสายตาใน 1 วินาที
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
