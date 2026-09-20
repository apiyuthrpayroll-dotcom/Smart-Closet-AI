import React from 'react';
import { Compass, Cpu, Share2, Mic, Database, ShieldCheck, UserCheck, Calendar, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const Section5_5_FutureRecommendations: React.FC = () => {
  return (
    <div id="section-5-5" className="space-y-6 pt-4">
      <div className="border-b border-indigo-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            5.5
          </span>
          <h3 className="text-xl font-bold text-slate-900 font-serif">
            ข้อเสนอแนะในการวิจัยและพัฒนาต่อยอด (Future Recommendations &amp; Strategic Roadmap)
          </h3>
        </div>
        <p className="text-xs text-slate-500 mt-1 italic">
          Technological Roadmap, Omnichannel Expansion, Edge AI Architecture &amp; Responsible AI Governance
        </p>
      </div>

      <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          เพื่อยกระดับระบบ Smart Closer AI จากต้นแบบแพลตฟอร์มผู้ช่วยการขายอัจฉริยะไปสู่โซลูชันระดับองค์กรขนาดใหญ่ (Enterprise-Grade Conversational Sales Platform) คณะผู้วิจัยขอเสนอแนะแนวทางการวิจัยและพัฒนาต่อยอดออกเป็น 2 มิติหลัก ได้แก่ มิติด้านเทคโนโลยีและสถาปัตยกรรมซอฟต์แวร์ และมิติด้านการประยุกต์ใช้ในองค์กรและจริยธรรมปัญญาประดิษฐ์ ดังนี้:
        </p>

        {/* 5.5.1 ข้อเสนอแนะเชิงเทคโนโลยี */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>5.5.1 ข้อเสนอแนะด้านเทคโนโลยีและสถาปัตยกรรมระบบ (Technological &amp; Architectural Roadmap)</span>
          </h4>
          
          <div className="space-y-3 text-xs sm:text-sm pl-2">
            <div className="flex items-start gap-2.5">
              <Share2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900">1. การขยายช่องทางเชื่อมต่อแบบ Omnichannel Webhook Gateway:</strong>
                <p className="text-slate-600 mt-0.5">
                  พัฒนา Webhook Adapter เพื่อเชื่อมต่อกับระบบแชทธุรกิจยอดนิยมในประเทศไทยและเอเชียตะวันออกเฉียงใต้ ได้แก่ <strong>LINE Official Account (LINE OA Messaging API), Meta Messenger, WhatsApp Business Platform และ TikTok Shop Chat</strong> ทำให้ AI สามารถดักจับบทสนทนาของลูกค้าในทุกช่องทาง และส่งสคริปต์แนะนำให้แก่แอดมินหรือพนักงานขายในหน้าต่างเดียวแบบ Unified Inbox
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mic className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900">2. การสังเคราะห์เสียงพูดเฉพาะบุคคลแบบตรวจจับอารมณ์ (Emotion-Aware Voice Cloning):</strong>
                <p className="text-slate-600 mt-0.5">
                  พัฒนาต่อยอดจาก Web Speech API ไปสู่โมเดล <strong>Speech-to-Speech AI (เช่น Gemini Multimodal Live API)</strong> ที่สามารถตรวจจับอุณหภูมิทางอารมณ์ของลูกค้าจากน้ำเสียง (Vocal Pitch, Cadence, Tremor) และสามารถโคลนนิ่งโทนเสียงที่เป็นมิตรและน่าเชื่อถือของพนักงานขาย เพื่อการโทรคุยสายอัตโนมัติหรือการโทรฟอลโลว์อัพเบื้องต้นได้อย่างแนบเนียน
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Database className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900">3. การเชื่อมโยงข้อมูลสองทิศทางกับระบบ CRM ชั้นนำ (Enterprise Bi-directional CRM Sync):</strong>
                <p className="text-slate-600 mt-0.5">
                  พัฒนาตัวเชื่อมต่อ Native Connectors เข้ากับ <strong>Salesforce, HubSpot, Microsoft Dynamics 365 และ Zoho CRM</strong> เพื่อให้การอัปเดตคะแนน BANT Score, บันทึกสรุปข้อโต้แย้ง และสถานะไปป์ไลน์ถูกบันทึกลงในฐานข้อมูลหลักขององค์กรโดยอัตโนมัติ ช่วยขจัดปัญหาการป้อนข้อมูลซ้ำซ้อน (Zero Manual Data Entry)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900">4. สถาปัตยกรรมแบบประมวลผลในเครื่องปลายทาง (On-Device Edge AI Architecture):</strong>
                <p className="text-slate-600 mt-0.5">
                  วิจัยการนำ Small Language Models (SLMs) เช่น <strong>Gemma-2B หรือ Llama-3-8B</strong> ที่ผ่านการทำ Quantization มาประมวลผลบนเบราว์เซอร์ของผู้ใช้ผ่าน WebAssembly หรือ WebGPU เพื่อให้ระบบสามารถสกัดข้อโต้แย้งและสร้างสคริปต์ได้โดยสมบูรณ์แม้ไม่มีสัญญาณอินเทอร์เน็ต (True Offline Resilience) และลดค่าใช้จ่ายด้าน Cloud API ในระยะยาว
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5.5.2 ข้อเสนอแนะเชิงองค์กรและจริยธรรม */}
        <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white space-y-3 shadow-xs">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>5.5.2 ข้อเสนอแนะด้านการประยุกต์ใช้ในองค์กรและจริยธรรมปัญญาประดิษฐ์ (Responsible AI)</span>
          </h4>
          
          <div className="space-y-3 text-xs sm:text-sm pl-2">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900">1. การเคารพสิทธิความเป็นส่วนตัวตามกฎหมาย PDPA (Privacy by Design):</strong>
                <p className="text-slate-600 mt-0.5">
                  เนื่องจากระบบมีการประมวลผลข้อมูลการสนทนาและเบอร์โทรศัพท์ของลูกค้า องค์กรผู้ใช้งานต้องจัดให้มีนโยบายความยินยอม (Consent Policy) และใช้กลไก <strong>Data Anonymization</strong> เพื่อปิดบังข้อมูลระบุตัวตน (Personally Identifiable Information - PII) เช่น เลขบัตรประชาชน หรือเลขบัญชีธนาคาร ก่อนส่งข้อมูลไปยังโมเดลภาษาขนาดใหญ่บนคลาวด์
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Compass className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
              <div>
                <strong className="text-slate-900">2. ยุทธศาสตร์การพัฒนาทักษะพนักงานและการบริหารการเปลี่ยนแปลง (Sales AI Upskilling):</strong>
                <p className="text-slate-600 mt-0.5">
                  องค์กรไม่ควรนำ AI มาใช้เพื่อลดทอนคุณค่าของพนักงาน แต่ควรวางหลักสูตร <em>"Human-Centric AI Sales Training"</em> เพื่อสอนให้พนักงานขายเข้าใจวิธีป้อนข้อมูลข้อโต้แย้งอย่างรวดเร็ว วิธีอ่านวิเคราะห์ BANT Score และการใช้สัญชาตญาณมนุษย์ในการปรับคำพูดของ AI ให้เข้ากับความรู้สึกของลูกค้า ณ ขณะนั้น
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* แผนภาพ แผนที่การพัฒนาต่อยอด 4 ระยะ (Roadmap Timeline Card) */}
        <div className="my-4 border border-indigo-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div className="bg-indigo-900 text-white p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-300" />
              <h5 className="font-bold text-sm sm:text-base font-serif">
                รูปที่ 5.1 แผนที่ยุทธศาสตร์การพัฒนาต่อยอดระบบ Smart Closer AI (4-Phase Technology Roadmap)
              </h5>
            </div>
            <span className="text-xs bg-indigo-800 text-indigo-200 px-2 py-0.5 rounded font-mono">2026 - 2027</span>
          </div>

          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Phase 1 */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 font-mono">PHASE 1 (Q1-Q2)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="font-bold text-slate-900 text-sm">Omnichannel Webhook</div>
              <ul className="text-slate-600 space-y-1 list-disc pl-4">
                <li>เชื่อมต่อ LINE Official Account</li>
                <li>เชื่อมต่อ Facebook Messenger</li>
                <li>หน้าต่าง Unified Multi-channel Inbox</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 font-mono">PHASE 2 (Q3)</span>
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              </div>
              <div className="font-bold text-slate-900 text-sm">Voice Cloning &amp; Prosody</div>
              <ul className="text-slate-600 space-y-1 list-disc pl-4">
                <li>โมเดลสังเคราะห์เสียงโคลนนิ่งตัวแทน</li>
                <li>วิเคราะห์น้ำเสียงและอุณหภูมิอารมณ์</li>
                <li>ระบบโทรศัพท์ติดตามผลอัตโนมัติ</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 font-mono">PHASE 3 (Q4)</span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
              <div className="font-bold text-slate-900 text-sm">Bi-directional CRM Sync</div>
              <ul className="text-slate-600 space-y-1 list-disc pl-4">
                <li>เชื่อมโยงข้อมูลกับ Salesforce &amp; HubSpot</li>
                <li>อัปเดตสถานะไปป์ไลน์และ BANT อัตโนมัติ</li>
                <li>ระบบสรุปรายงานการประชุมผู้บริหาร</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-700 font-mono">PHASE 4 (2027)</span>
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              </div>
              <div className="font-bold text-slate-900 text-sm">Edge AI &amp; SLM Offline</div>
              <ul className="text-slate-600 space-y-1 list-disc pl-4">
                <li>ติดตั้ง On-Device Gemma SLM</li>
                <li>ทำงานได้ 100% แม้ไร้อินเทอร์เน็ต</li>
                <li>ความหน่วงต่ำกว่า 500 มิลลิวินาที</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
