import React from 'react';
import { 
  Users, 
  PhoneCall, 
  Sparkles, 
  Flame, 
  Kanban, 
  CheckCircle2, 
  Cpu, 
  Database, 
  Bot, 
  ArrowRight, 
  ArrowDown, 
  Shield, 
  Activity, 
  Mic, 
  Volume2, 
  Target,
  BarChart3,
  MessageSquare,
  Clock,
  DollarSign,
  Layers,
  Send,
  Sliders,
  Check,
  Zap,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

interface FigureProps {
  number: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const AcademicFigure: React.FC<FigureProps> = ({ number, title, description, children }) => {
  return (
    <figure 
      className="academic-figure my-8 border border-slate-200 rounded-2xl bg-white p-4 sm:p-6 shadow-xs overflow-hidden print:my-4 print:p-3 print:border-slate-300"
      data-figure-number={number}
      data-figure-title={title}
      data-figure-desc={description || ''}
    >
      <div className="academic-figure-graphic bg-slate-50/80 p-3 sm:p-5 rounded-xl border border-slate-100 flex items-center justify-center print:bg-white print:p-2">
        {children}
      </div>
      <figcaption className="academic-figure-caption mt-4 text-center print:mt-2">
        <div className="font-bold text-slate-800 text-xs sm:text-sm">
          <span className="text-indigo-700 font-semibold">{number}</span> {title}
        </div>
        {description && (
          <p className="text-xs text-slate-500 mt-1 max-w-2xl mx-auto leading-relaxed print:text-slate-600">
            {description}
          </p>
        )}
      </figcaption>
    </figure>
  );
};

// รูปที่ 2.1-ก วิวัฒนาการกระบวนการขายเชิงพาณิชย์ 3 ยุคสมัย (Section 2.1.1)
export const Figure2_1A_SalesEvolution: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.1-ก" 
      title="แผนภาพวิวัฒนาการกระบวนการขายเชิงพาณิชย์ 3 ยุคสมัย (Evolution of Commercial Sales Methodologies)"
      description="การเปลี่ยนผ่านจากการขายแบบมุ่งเน้นสเปกผลิตภัณฑ์ (Product-Centric) สู่การมุ่งเน้นแก้ปัญหา (Solution-Centric) จนถึงยุคขับเคลื่อนด้วยปัญญาประดิษฐ์อัจฉริยะ (Intelligence-Centric)"
    >
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3.5 py-2">
        {/* ยุคที่ 1 */}
        <div className="p-4 bg-gradient-to-b from-white to-slate-50 rounded-2xl border border-slate-300 shadow-xs space-y-2 text-left" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-900 text-sm">ยุคที่ 1: Product-Centric</span>
            <span className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full text-[10px] font-bold">ยุคดั้งเดิม</span>
          </div>
          <div className="text-xs text-indigo-700 font-bold font-mono">การขายแบบชูจุดเด่นสินค้า</div>
          <p className="text-xs text-slate-600 leading-relaxed">
            เน้นการท่องจำฟังก์ชัน (Feature-dumping) การนำเสนอสเปกเชิงลึก และการใช้ส่วนลดทางราคาเพื่อเร่งการซื้อ ขาดการทำความเข้าใจบริบทเฉพาะตัวของลูกค้า
          </p>
        </div>

        {/* ยุคที่ 2 */}
        <div className="p-4 bg-gradient-to-b from-white to-sky-50/50 rounded-2xl border border-sky-200 shadow-xs space-y-2 text-left" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex items-center justify-between border-b border-sky-100 pb-2">
            <span className="font-bold text-slate-900 text-sm">ยุคที่ 2: Solution-Centric</span>
            <span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded-full text-[10px] font-bold">ยุคที่ปรึกษา</span>
          </div>
          <div className="text-xs text-sky-700 font-bold font-mono">การขายเชิงแก้ไขปัญหา</div>
          <p className="text-xs text-slate-600 leading-relaxed">
            เริ่มนำทฤษฎีจิตวิทยามาวิเคราะห์ Pain Points ลูกค้า นำเสนอแพ็กเกจโซลูชันที่ปรับแต่งได้ อย่างไรก็ตาม กระบวนการยังต้องพึ่งพาทักษะเฉพาะตัวของยอดนักขายสูงมาก
          </p>
        </div>

        {/* ยุคที่ 3 */}
        <div className="p-4 bg-gradient-to-b from-indigo-50/90 via-indigo-50/50 to-white rounded-2xl border-2 border-indigo-600 shadow-md ring-2 ring-indigo-500/20 space-y-2 text-left" style={{ backgroundColor: '#eef2ff' }}>
          <div className="flex items-center justify-between border-b border-indigo-200 pb-2">
            <span className="font-bold text-indigo-950 text-sm">ยุคที่ 3: Intelligence-Centric</span>
            <span className="px-2 py-0.5 bg-indigo-600 text-white rounded-full text-[10px] font-bold shadow-xs">Smart Closer AI</span>
          </div>
          <div className="text-xs text-indigo-700 font-bold font-mono">การขายขับเคลื่อนด้วย AI ปัญญาประดิษฐ์</div>
          <p className="text-xs text-indigo-950/80 leading-relaxed">
            ประยุกต์ใช้โมเดลภาษาขนาดใหญ่ (LLMs) และอัลกอริทึมคาดการณ์ (Predictive Scoring) ในการวิเคราะห์ความตั้งใจซื้อเรียลไทม์ และชี้นำสคริปต์ปิดการขายเฉพาะบุคคล (Next-Best Action)
          </p>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.1 Sales Conversion Funnel & Lead Flow
export const Figure2_1_SalesFunnel: React.FC = () => {
  const stages = [
    { 
      name: '1. Inbound Leads Acquisition', 
      volume: '100%', 
      count: 'Leads จาก LINE / Facebook Ads / TikTok / Web (Top of Funnel)', 
      gradient: 'from-slate-900 via-slate-800 to-slate-900', 
      border: 'border-slate-700',
      bgHex: '#0f172a',
      width: 'w-full' 
    },
    { 
      name: '2. AI Qualification (BANT Filter / MQL)', 
      volume: '72%', 
      count: 'คัดกรองงบประมาณ อำนาจ ความจำเป็น และกรอบเวลาอัตโนมัติ', 
      gradient: 'from-indigo-700 via-indigo-600 to-indigo-700', 
      border: 'border-indigo-500',
      bgHex: '#4338ca',
      width: 'w-11/12 sm:w-5/6' 
    },
    { 
      name: '3. Predictive Lead Scoring (SQL Prioritization)', 
      volume: '54%', 
      count: 'คำนวณคะแนน 0-100 & แบ่งกลุ่ม Hot (≥80), Warm (60-79), Cold (<60)', 
      gradient: 'from-amber-600 via-amber-500 to-amber-600', 
      border: 'border-amber-400',
      bgHex: '#d97706',
      width: 'w-5/6 sm:w-4/6' 
    },
    { 
      name: '4. AI Copilot & Objection Handling', 
      volume: '38%', 
      count: 'ช่วยพนักงานขายรับมือข้อโต้แย้งราคา/เวลา แนะนำส่วนลดตรงจุด', 
      gradient: 'from-sky-600 via-sky-500 to-sky-600', 
      border: 'border-sky-400',
      bgHex: '#0284c7',
      width: 'w-4/6 sm:w-3/6' 
    },
    { 
      name: '5. Closing & Won Deals (Customer LTV)', 
      volume: '24%', 
      count: 'ออกใบเสนอราคา ปิดการขายสำเร็จ และบันทึกประวัติมูลค่าตลอดช่วงชีวิตลูกค้า', 
      gradient: 'from-emerald-600 via-emerald-500 to-emerald-600', 
      border: 'border-emerald-400',
      bgHex: '#059669',
      width: 'w-3/6 sm:w-2/6' 
    },
  ];

  return (
    <AcademicFigure 
      number="รูปที่ 2.1" 
      title="แผนภูมิวงจรกระบวนการขายและการคัดกรองลูกค้ามุ่งหวัง (Sales Conversion Funnel & Lead Flow)"
      description="แสดงการเปลี่ยนสถานะของ Lead ตั้งแต่การรับข้อมูลจากช่องทางออนไลน์ ผ่านการประเมินเกณฑ์ BANT, การคำนวณคะแนน Lead Scoring จนถึงขั้นตอนการปิดการขาย"
    >
      <div className="w-full max-w-2xl space-y-2.5 py-2">
        {stages.map((st, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-14 text-right font-mono text-xs font-bold text-slate-600">{st.volume}</div>
            <div className="flex-1 flex justify-center">
              <div 
                style={{ backgroundColor: st.bgHex }}
                className={`${st.width} bg-gradient-to-r ${st.gradient} ${st.border} border py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-between text-white`}
              >
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold tracking-wide drop-shadow-xs">{st.name}</div>
                  <div className="text-[11px] opacity-90 hidden sm:block mt-0.5">{st.count}</div>
                </div>
                <div className="px-2 py-1 bg-black/25 rounded-lg text-[11px] font-mono font-bold ml-2 shrink-0 border border-white/20">
                  {st.volume}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.2-ก แผนผังกรอบ BANT Framework 4 มิติทางธุรกิจ (Section 2.2.1)
export const Figure2_2A_BANTDimensions: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 2.2-ก"
      title="แผนผังกรอบ BANT Framework เจาะลึก 4 มิติเชิงปริมาณ (BANT 4-Dimensional Qualification Heuristics)"
      description="การแปลงกรอบการคัดกรองคุณสมบัติของ IBM สู่เกณฑ์คำนวณคะแนนเชิงปริมาณ 4 ด้าน: งบประมาณ (25%), อำนาจตัดสินใจ (25%), ความจำเป็น (30%), และกรอบเวลา (20%)"
    >
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
        {/* Budget */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-white border border-indigo-200 shadow-xs space-y-2 text-left" style={{ backgroundColor: '#f5f7ff' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                B
              </div>
              <span>1. Budget (งบประมาณและกำลังซื้อ)</span>
            </div>
            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded-full text-[10px] font-mono font-bold border border-indigo-200">
              น้ำหนัก 25%
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            วิเคราะห์ระดับเงินทุน ตรวจสอบว่างบประมาณได้รับการจัดสรรแล้วหรือต้องของบพิเศษ ระบบตรวจจับคำระบุงบในแชทเพื่อประเมินความสอดคล้องของราคาสินค้า
          </p>
        </div>

        {/* Authority */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50/80 via-white to-white border border-sky-200 shadow-xs space-y-2 text-left" style={{ backgroundColor: '#f0f9ff' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sky-950 font-bold text-sm">
              <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                A
              </div>
              <span>2. Authority (อำนาจตัดสินใจสั่งซื้อ)</span>
            </div>
            <span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded-full text-[10px] font-mono font-bold border border-sky-200">
              น้ำหนัก 25%
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            การระบุสถานะของผู้สนทนา จำแนกผู้มีอำนาจคนเดียว (Sole Decision Maker), ผู้มีอิทธิพล (Influencer), หรือผู้ประสานงาน (Gatekeeper) เพื่อวางแผนการเข้าถึง
          </p>
        </div>

        {/* Need */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-white border border-amber-300 shadow-xs space-y-2 text-left" style={{ backgroundColor: '#fffdf5' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                N
              </div>
              <span>3. Need (ความจำเป็นเร่งด่วนและปัญหา)</span>
            </div>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-[10px] font-mono font-bold">
              น้ำหนัก 30% (สูงสุด)
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            ประเมินความรุนแรงของปัญหา (Pain Point Severity) แยกปัญหาที่สร้างความเสียหายต่อธุรกิจทันที (Critical Burning Pain) กับปัญหาทั่วไป (Nice-to-have)
          </p>
        </div>

        {/* Timeline */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-50/80 via-white to-white border border-rose-200 shadow-xs space-y-2 text-left" style={{ backgroundColor: '#fff5f5' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-950 font-bold text-sm">
              <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                T
              </div>
              <span>4. Timeline (กรอบเวลาในการเริ่มใช้)</span>
            </div>
            <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded-full text-[10px] font-mono font-bold border border-rose-200">
              น้ำหนัก 20%
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            ระยะเวลาที่ต้องการติดตั้งใช้งาน: ด่วนที่สุด (&lt; 7 วัน) ปรับเป็น Hot Lead ทันที, ระยะสั้น (1-4 สัปดาห์), ระยะกลาง (1-3 เดือน), และไม่มีกำหนดชัดเจน
          </p>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.2 Qualification Framework Comparison (BANT vs MEDDIC vs SPIN)
export const Figure2_2_FrameworkComparison: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.2" 
      title="แผนภาพเปรียบเทียบกรอบการคัดกรองคุณสมบัติลูกค้า (BANT vs MEDDIC vs SPIN Selling)"
      description="เปรียบเทียบมิติการวิเคราะห์ของ 3 กรอบการทำงานหลัก โดยระบบ Smart Closer AI มุ่งเน้น BANT เป็นแกนหลักเพราะตอบโจทย์ความรวดเร็วสำหรับ Inbound Leads"
    >
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3.5 py-2">
        {/* BANT */}
        <div className="p-4 bg-gradient-to-b from-indigo-50/90 to-white border-2 border-indigo-600 rounded-2xl shadow-md space-y-2 text-left" style={{ backgroundColor: '#eef2ff' }}>
          <div className="text-xs font-bold text-indigo-950 border-b border-indigo-200 pb-1.5 flex items-center justify-between">
            <span>BANT (IBM Origin)</span>
            <span className="px-2 py-0.5 bg-indigo-600 text-white rounded-full text-[10px] font-bold shadow-xs">ระบบนำมาใช้</span>
          </div>
          <ul className="text-xs space-y-1.5 text-indigo-950 font-medium">
            <li className="flex items-center gap-1.5"><strong className="text-indigo-700">B</strong> - Budget (งบประมาณและกำลังซื้อ)</li>
            <li className="flex items-center gap-1.5"><strong className="text-indigo-700">A</strong> - Authority (อำนาจตัดสินใจสั่งซื้อ)</li>
            <li className="flex items-center gap-1.5"><strong className="text-indigo-700">N</strong> - Need (ความจำเป็นเร่งด่วน)</li>
            <li className="flex items-center gap-1.5"><strong className="text-indigo-700">T</strong> - Timeline (กรอบเวลาจัดซื้อ)</li>
          </ul>
          <p className="text-[11px] text-indigo-800/90 pt-1 border-t border-indigo-200/60 font-medium">
            จุดเด่น: ประเมินได้เร็ว คัดกรองผ่านแชทสั้นๆ ได้ เหมาะกับการปิดการขายออนไลน์
          </p>
        </div>

        {/* MEDDIC */}
        <div className="p-4 bg-white border border-slate-300 rounded-2xl shadow-xs space-y-2 text-left">
          <div className="text-xs font-bold text-slate-800 border-b border-slate-200 pb-1.5">
            <span>MEDDIC (Enterprise)</span>
          </div>
          <ul className="text-xs space-y-1 text-slate-600">
            <li><strong>M</strong> - Metrics (ตัวชี้วัด ROI)</li>
            <li><strong>E</strong> - Economic Buyer</li>
            <li><strong>D</strong> - Decision Criteria</li>
            <li><strong>D</strong> - Decision Process</li>
            <li><strong>I</strong> - Identify Pain</li>
            <li><strong>C</strong> - Champion</li>
          </ul>
          <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
            จุดเด่น: ละเอียดสูง เหมาะกับการขายระดับองค์กรขนาดใหญ่ วงจรการขาย 6-12 เดือน
          </p>
        </div>

        {/* SPIN */}
        <div className="p-4 bg-white border border-slate-300 rounded-2xl shadow-xs space-y-2 text-left">
          <div className="text-xs font-bold text-slate-800 border-b border-slate-200 pb-1.5">
            <span>SPIN (Neil Rackham)</span>
          </div>
          <ul className="text-xs space-y-1.5 text-slate-600">
            <li><strong>S</strong> - Situation Questions</li>
            <li><strong>P</strong> - Problem Questions</li>
            <li><strong>I</strong> - Implication Questions</li>
            <li><strong>N</strong> - Need-Payoff Questions</li>
          </ul>
          <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
            จุดเด่น: เน้นคำถามนำเพื่อให้ลูกค้าตระหนักถึงมูลค่าความเสียหายหากไม่ซื้อ
          </p>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.3 Cognitive Objection Resolution Tree
export const Figure2_3_ObjectionTree: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.3" 
      title="แผนผังต้นไม้การวินิจฉัยและขจัดข้อโต้แย้งของลูกค้าเชิงจิตวิทยา (Cognitive Objection Resolution Tree)"
      description="ขั้นตอนการระบุรากเหง้าของข้อโต้แย้ง (Root Cause Diagnosis) การเลือกกลยุทธ์จิตวิทยา และการสังเคราะห์ข้อความตอบกลับโดย AI"
    >
      <div className="w-full max-w-4xl space-y-3 py-2 text-xs">
        <div className="p-3.5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl text-center font-bold shadow-md border border-slate-700" style={{ backgroundColor: '#0f172a' }}>
          <div className="text-xs uppercase tracking-wider text-indigo-300">TRIGGER EVENT</div>
          <div className="text-sm text-white mt-0.5">ตรวจจับข้อความโต้แย้งของลูกค้า (Customer Objection Detected)</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Path 1: Price */}
          <div className="p-4 bg-gradient-to-b from-rose-50/90 to-white border-2 border-rose-400 rounded-2xl space-y-2.5 shadow-sm text-left" style={{ backgroundColor: '#fff1f2' }}>
            <div className="font-bold text-rose-950 flex items-center justify-between border-b border-rose-200 pb-2">
              <span className="flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>1. ข้อโต้แย้งเรื่องราคา (Price)</span>
              </span>
              <span className="px-2 py-0.5 bg-rose-600 text-white rounded-full text-[10px] font-bold">พบบ่อย 42%</span>
            </div>
            <p className="text-[11px] text-slate-700 italic bg-rose-100/50 p-1.5 rounded-lg border border-rose-200">
              "ราคาแพงเกินไป", "งบไม่พอ", "เจ้าอื่นถูกกว่าครึ่งหนึ่ง"
            </p>
            <div className="bg-white p-2.5 rounded-xl border border-rose-200 text-[11px] space-y-1.5 shadow-2xs">
              <div className="font-bold text-rose-900">กลยุทธ์ AI Copilot:</div>
              <div className="text-slate-700">• ย้อนถาม ROI & คำนวณ Cost of Inaction</div>
              <div className="text-slate-700">• แตกราคาเป็นค่าบริการรายวัน (De-framing)</div>
              <div className="text-slate-700 font-semibold text-rose-700">• เสนอ Bundle สิทธิประโยชน์ Fast-Decision</div>
            </div>
          </div>

          {/* Path 2: Timing / Delay */}
          <div className="p-4 bg-gradient-to-b from-amber-50/90 to-white border-2 border-amber-400 rounded-2xl space-y-2.5 shadow-sm text-left" style={{ backgroundColor: '#fffbeb' }}>
            <div className="font-bold text-amber-950 flex items-center justify-between border-b border-amber-200 pb-2">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>2. ข้อโต้แย้งเรื่องเวลา (Delay)</span>
              </span>
              <span className="px-2 py-0.5 bg-amber-500 text-slate-950 rounded-full text-[10px] font-bold">พบบ่อย 35%</span>
            </div>
            <p className="text-[11px] text-slate-700 italic bg-amber-100/50 p-1.5 rounded-lg border border-amber-200">
              "ขอคิดดูก่อนนะ", "ขอดูเดือนหน้า", "ตอนนี้ยังไม่รีบ"
            </p>
            <div className="bg-white p-2.5 rounded-xl border border-amber-200 text-[11px] space-y-1.5 shadow-2xs">
              <div className="font-bold text-amber-900">กลยุทธ์ AI Copilot:</div>
              <div className="text-slate-700">• Feel-Felt-Found Empathy แสดงความเข้าใจ</div>
              <div className="text-slate-700 font-semibold text-amber-800">• ขีดเส้นตายโควตาสิทธิพิเศษ (Scarcity Lock)</div>
              <div className="text-slate-700">• นัดหมายเวลา Follow-up เฉพาะเจาะจงในปฏิทิน</div>
            </div>
          </div>

          {/* Path 3: Trust / Authority */}
          <div className="p-4 bg-gradient-to-b from-sky-50/90 to-white border-2 border-sky-400 rounded-2xl space-y-2.5 shadow-sm text-left" style={{ backgroundColor: '#f0f9ff' }}>
            <div className="font-bold text-sky-950 flex items-center justify-between border-b border-sky-200 pb-2">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-sky-600" />
                <span>3. ความเชื่อมั่น / อำนาจ (Trust)</span>
              </span>
              <span className="px-2 py-0.5 bg-sky-600 text-white rounded-full text-[10px] font-bold">พบบ่อย 23%</span>
            </div>
            <p className="text-[11px] text-slate-700 italic bg-sky-100/50 p-1.5 rounded-lg border border-sky-200">
              "ต้องถามผู้บริหารก่อน", "จะคุ้มไหม", "กลัวใช้งานยาก"
            </p>
            <div className="bg-white p-2.5 rounded-xl border border-sky-200 text-[11px] space-y-1.5 shadow-2xs">
              <div className="font-bold text-sky-900">กลยุทธ์ AI Copilot:</div>
              <div className="text-slate-700">• ส่ง One-Page Executive Summary เสนอหัวหน้า</div>
              <div className="text-slate-700">• อ้างอิง Case Study ธุรกิจกลุ่มเดียวกันที่สำเร็จ</div>
              <div className="text-slate-700 font-semibold text-sky-700">• การันตีรับประกันความพอใจ & ทดลองใช้งานจริง</div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.4 Transformer & Multi-Head Attention Inference Flow
export const Figure2_4_TransformerFlow: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.4" 
      title="สถาปัตยกรรม Transformer และโฟลว์การอนุมานคำตอบของ Large Language Models (LLMs)"
      description="ผังการแปลงข้อความคำถามของลูกค้าผ่านกระบวนการ Tokenization, Multi-Head Self-Attention, Feed-Forward Network จนได้ข้อความปิดการขายที่ตอบโจทย์"
    >
      <div className="w-full max-w-4xl py-2 space-y-3 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
          <div className="p-3.5 bg-gradient-to-b from-white to-slate-100 border-2 border-slate-300 rounded-2xl shadow-xs" style={{ backgroundColor: '#f8fafc' }}>
            <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2 shadow-xs">1</div>
            <div className="font-bold text-slate-900 text-sm">Input Tokens</div>
            <p className="text-[11px] text-slate-600 mt-1">ข้อความแชท + System Persona + บริบทสินค้า</p>
            <div className="mt-2 text-[10px] px-2 py-0.5 bg-slate-200 text-slate-700 rounded-md font-mono">Tokenized Vectors</div>
          </div>

          <div className="p-3.5 bg-gradient-to-b from-indigo-50 to-white border-2 border-indigo-400 rounded-2xl shadow-xs" style={{ backgroundColor: '#eef2ff' }}>
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2 shadow-xs">2</div>
            <div className="font-bold text-indigo-950 text-sm">Self-Attention</div>
            <p className="text-[11px] text-slate-600 mt-1">คำนวณ Correlation ระหว่างงบประมาณกับสเปก</p>
            <div className="mt-2 text-[10px] px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded-md font-mono">Q × K^T / √d_k</div>
          </div>

          <div className="p-3.5 bg-gradient-to-b from-indigo-950 to-slate-900 border-2 border-indigo-500 text-white rounded-2xl shadow-md" style={{ backgroundColor: '#1e1b4b' }}>
            <div className="w-8 h-8 rounded-full bg-indigo-400 text-indigo-950 flex items-center justify-center font-bold text-xs mx-auto mb-2 shadow-xs">3</div>
            <div className="font-bold text-indigo-100 text-sm">Feedforward Core</div>
            <p className="text-[11px] text-indigo-200 mt-1">ดึงคลังองค์ความรู้ด้านจิตวิทยาการปิดการขาย</p>
            <div className="mt-2 text-[10px] px-2 py-0.5 bg-indigo-800/80 text-indigo-200 rounded-md font-mono">Gemini 2.5 Flash</div>
          </div>

          <div className="p-3.5 bg-gradient-to-b from-emerald-50 to-white border-2 border-emerald-400 rounded-2xl shadow-xs" style={{ backgroundColor: '#ecfdf5' }}>
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2 shadow-xs">4</div>
            <div className="font-bold text-emerald-950 text-sm">Decoding & Pitch</div>
            <p className="text-[11px] text-slate-600 mt-1">สร้างประโยคตอบกลับที่สุภาพ จูงใจ และปิดการขาย</p>
            <div className="mt-2 text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-md font-mono">Top-p / Temp 0.3</div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.5 Context Injection & Dynamic RAG Pipeline
export const Figure2_5_RAGArchitecture: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.5" 
      title="สถาปัตยกรรม Context Injection และ Retrieval-Augmented Generation (RAG) สำหรับการขาย"
      description="การดึงข้อมูลแคตตาล็อกสินค้า, โควตาส่วนลด, และประวัติลูกค้า เข้ามารวมกับข้อความถามของลูกค้าเพื่อเป็น Grounded Context ป้องกันปัญหา AI Hallucination"
    >
      <div className="w-full max-w-4xl py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
          {/* 1. External Domain Knowledge */}
          <div className="p-4 bg-gradient-to-b from-emerald-50/80 to-white rounded-2xl border-2 border-emerald-300 shadow-sm space-y-2.5 text-left" style={{ backgroundColor: '#ecfdf5' }}>
            <div className="font-bold text-emerald-950 flex items-center justify-between border-b border-emerald-200 pb-2">
              <span className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-emerald-600" />
                <span>1. Dynamic Data Store</span>
              </span>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-bold">คลังข้อมูล</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-2.5 bg-white rounded-xl border border-emerald-200 text-emerald-950 shadow-2xs font-medium">
                • แคตตาล็อกสินค้า & สเปกทางการ
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-emerald-200 text-amber-950 shadow-2xs font-medium">
                • โควตาส่วนลดสูงสุด (5% - 15%)
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-emerald-200 text-indigo-950 shadow-2xs font-medium">
                • ประวัติการซื้อ & Customer LTV
              </div>
            </div>
          </div>

          {/* 2. Orchestration & Injection */}
          <div className="p-4 bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-2xl border-2 border-indigo-500 shadow-md space-y-2.5 text-left" style={{ backgroundColor: '#1e1b4b' }}>
            <div className="font-bold flex items-center justify-between border-b border-indigo-700 pb-2 text-indigo-100">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-300" />
                <span>2. Context Injection</span>
              </span>
              <span className="px-2 py-0.5 bg-indigo-700 text-white rounded-full text-[10px] font-bold">Orchestrator</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-2 bg-indigo-900/90 rounded-xl border border-indigo-700 text-indigo-100 shadow-2xs">
                สกัดความต้องการจากแชทล่าสุด
              </div>
              <div className="p-2 bg-indigo-900/90 rounded-xl border border-indigo-700 text-indigo-100 shadow-2xs">
                คัดกรองสินค้าที่ตรงกับงบประมาณ
              </div>
              <div className="p-2 bg-indigo-900/90 rounded-xl border border-indigo-700 text-indigo-100 shadow-2xs">
                แนบกฎเหล็ก System Prompt ควบคุม
              </div>
            </div>
          </div>

          {/* 3. Output Generation */}
          <div className="p-4 bg-gradient-to-b from-sky-50/80 to-white rounded-2xl border-2 border-sky-300 shadow-sm space-y-2.5 text-left" style={{ backgroundColor: '#f0f9ff' }}>
            <div className="font-bold text-sky-950 flex items-center justify-between border-b border-sky-200 pb-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>3. Grounded Generation</span>
              </span>
              <span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded-full text-[10px] font-bold">แม่นยำ 100%</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-2.5 bg-white rounded-xl border border-sky-200 text-slate-800 shadow-2xs">
                ✓ ราคาและสต็อกตรงกับระบบจริง
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-sky-200 text-slate-800 shadow-2xs">
                ✓ ไม่เสนอส่วนลดเกินอำนาจอนุมัติ
              </div>
              <div className="p-2.5 bg-sky-100 rounded-xl border border-sky-300 text-sky-950 font-bold shadow-2xs">
                ✓ Call-to-Action ชัดเจน ปิดการขายทันที
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.6 Decision Flow for Lead Scoring
export const Figure2_6_LeadScoringFlow: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.6" 
      title="แผนภาพกระแสการตัดสินใจคัดกรองและแบ่งระดับลูกค้ามุ่งหวัง (Predictive Lead Scoring Decision Flow)"
      description="ผังขั้นตอนการวิเคราะห์ค่าตัวแปร BANT ร่วมกับความเร่งด่วนเพื่อจัดสรรกลุ่ม Hot, Warm, Cold และกำหนดการเข้าถึงของพนักงานขาย"
    >
      <div className="w-full max-w-3xl py-2 space-y-3">
        <div className="flex flex-col items-center">
          <div className="px-5 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl text-xs sm:text-sm font-bold shadow-md border border-slate-700" style={{ backgroundColor: '#0f172a' }}>
            ลูกค้าใหม่ติดต่อเข้ามา (Inbound Lead จาก LINE / Ads / Web)
          </div>
          <ArrowDown className="w-4 h-4 text-indigo-500 my-1.5" />
          <div className="px-5 py-2.5 bg-indigo-50 border-2 border-indigo-300 text-indigo-950 rounded-2xl text-xs sm:text-sm font-bold text-center max-w-lg shadow-xs" style={{ backgroundColor: '#eef2ff' }}>
            ประเมินคะแนน BANT (Budget 25% + Authority 25% + Need 30% + Timeline 20%)
          </div>
          <ArrowDown className="w-4 h-4 text-indigo-500 my-1.5" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
            {/* HOT */}
            <div className="p-4 bg-gradient-to-b from-amber-50 to-white border-2 border-amber-500 rounded-2xl text-center shadow-md space-y-2" style={{ backgroundColor: '#fffbeb' }}>
              <span className="px-3 py-1 bg-amber-500 text-slate-950 rounded-full font-bold text-xs shadow-xs">
                Score ≥ 80: HOT 🔥
              </span>
              <p className="text-xs text-slate-800 font-medium">
                ต้องการซื้อด่วน / มีงบชัดเจน / ผู้มีอำนาจ
              </p>
              <div className="text-[11px] text-amber-950 bg-amber-100/80 p-2 rounded-xl border border-amber-300 font-bold">
                ⚡ โทรปิดการขายทันทีใน 10 นาที
              </div>
            </div>

            {/* WARM */}
            <div className="p-4 bg-gradient-to-b from-sky-50 to-white border-2 border-sky-500 rounded-2xl text-center shadow-md space-y-2" style={{ backgroundColor: '#f0f9ff' }}>
              <span className="px-3 py-1 bg-sky-500 text-white rounded-full font-bold text-xs shadow-xs">
                Score 60-79: WARM ⛅
              </span>
              <p className="text-xs text-slate-800 font-medium">
                มีความสนใจ เปรียบเทียบราคา / รอพิจารณา
              </p>
              <div className="text-[11px] text-sky-950 bg-sky-100/80 p-2 rounded-xl border border-sky-300 font-bold">
                📋 ส่งสเปก + นัด Follow-up ใน 24 ชม.
              </div>
            </div>

            {/* COLD */}
            <div className="p-4 bg-gradient-to-b from-slate-100 to-white border-2 border-slate-300 rounded-2xl text-center shadow-md space-y-2" style={{ backgroundColor: '#f8fafc' }}>
              <span className="px-3 py-1 bg-slate-600 text-white rounded-full font-bold text-xs shadow-xs">
                Score &lt; 60: COLD ❄️
              </span>
              <p className="text-xs text-slate-800 font-medium">
                สอบถามข้อมูลทั่วไป / ยังไม่มีงบชัดเจน
              </p>
              <div className="text-[11px] text-slate-800 bg-slate-200/80 p-2 rounded-xl border border-slate-300 font-bold">
                ✉️ เข้าแคมเปญ Drip Nurture อัตโนมัติ
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.7 Voice Closer AI Pipeline
export const Figure2_7_VoiceAgentPipeline: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.7" 
      title="สถาปัตยกรรมระบบการสนทนาโต้ตอบด้วยเสียงแบบสองทิศทาง (Bi-directional Voice Closer Pipeline)"
      description="วงจรการประมวลผลเสียงแบบเรียลไทม์ ตั้งแต่การรับเสียงพูดของผู้ใช้ ผ่านการแปลงเสียง (STT), การประมวลผลคำตอบเชิงกลยุทธ์, และการสังเคราะห์เสียงโต้ตอบ (TTS)"
    >
      <div className="w-full max-w-2xl py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <div className="p-3 bg-white border border-slate-200 rounded-xl flex-1 w-full shadow-2xs">
            <Mic className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-slate-900">1. Audio Capture</div>
            <p className="text-[10px] text-slate-500 mt-0.5">Web Audio API / 16kHz Stream</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 sm:rotate-0" />
          <div className="p-3 bg-white border border-slate-200 rounded-xl flex-1 w-full shadow-2xs">
            <Activity className="w-5 h-5 text-sky-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-slate-900">2. Speech-to-Text</div>
            <p className="text-[10px] text-slate-500 mt-0.5">NLP Thai Transcription</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 sm:rotate-0" />
          <div className="p-3 bg-indigo-900 text-white rounded-xl flex-1 w-full shadow-xs">
            <Bot className="w-5 h-5 text-indigo-300 mx-auto mb-1" />
            <div className="text-xs font-bold">3. LLM Reasoning</div>
            <p className="text-[10px] text-indigo-200 mt-0.5">Strategic Pitching</p>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 rotate-90 sm:rotate-0" />
          <div className="p-3 bg-white border border-slate-200 rounded-xl flex-1 w-full shadow-2xs">
            <Volume2 className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-slate-900">4. Speech Synthesis</div>
            <p className="text-[10px] text-slate-500 mt-0.5">Natural Thai Voice TTS</p>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.8 System Overall Architecture
export const Figure2_8_SystemArchitecture: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.8" 
      title="แผนภาพสถาปัตยกรรมเทคโนโลยีระบบ Smart Closer AI (Overall System Architecture)"
      description="แสดงความสัมพันธ์ระหว่างส่วนติดต่อผู้ใช้งาน (React + Vite Client), เซิร์ฟเวอร์พร็อกซี (Express.js), โมเดลปัญญาประดิษฐ์ (Google Gemini API) และชั้นการจัดเก็บข้อมูล"
    >
      <div className="w-full max-w-3xl py-2 space-y-3">
        <div className="p-3.5 bg-slate-900 text-white rounded-xl text-center">
          <div className="text-xs font-bold tracking-wide text-indigo-200">CLIENT LAYER (Frontend SPA - React 19 + TypeScript + Tailwind)</div>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div className="p-2 bg-slate-800 rounded border border-slate-700">Dashboard & Metrics</div>
            <div className="p-2 bg-slate-800 rounded border border-slate-700">AI Assistant / Copilot</div>
            <div className="p-2 bg-slate-800 rounded border border-slate-700">Pipeline Kanban View</div>
            <div className="p-2 bg-slate-800 rounded border border-slate-700">Voice Closer Simulator</div>
          </div>
        </div>
        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </div>
        <div className="p-3.5 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
          <div className="text-xs font-bold tracking-wide text-indigo-950">BACKEND GATEWAY (Node.js & Express / Port 3000)</div>
          <p className="text-[11px] text-indigo-800 mt-1">API Key Encapsulation • Lead Scoring Algorithm • Rate Limiting & Secure Proxy</p>
        </div>
        <div className="flex justify-center">
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 bg-white border border-slate-200 rounded-xl text-center shadow-2xs">
            <Cpu className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-slate-900">AI Intelligence Core</div>
            <p className="text-[10px] text-slate-500 mt-1">Google Gemini API / Reasoning & Rebuttal Generation</p>
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-xl text-center shadow-2xs">
            <Database className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
            <div className="text-xs font-bold text-slate-900">Data Store & State Management</div>
            <p className="text-[10px] text-slate-500 mt-1">Leads, Pipeline Deals, Customer LTV, Catalog Schemas</p>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ==========================================
// UI MOCKUP FIGURES (รูปภาพ Mockup จำลองหน้าจอ)
// ==========================================

// รูปที่ 2.9 (Mockup 1): Dashboard UI Mockup
export const MockupFigure2_9_Dashboard: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.9 (MOCKUP)" 
      title="ภาพจำลองส่วนต่อประสานผู้ใช้: แดชบอร์ดภาพรวมการขายและตัวชี้วัดประสิทธิภาพ (Sales Executive Dashboard UI)"
      description="แสดงผลการจัดวางตัวชี้วัดสำคัญ (KPI Cards), แถบแจ้งเตือน Hot Leads เร่งด่วน, อัตรา Conversion Rate และแผนภูมิกระแสรายได้"
    >
      <div className="w-full max-w-4xl bg-slate-950 rounded-2xl p-4 sm:p-5 text-white border border-slate-800 shadow-xl overflow-hidden font-sans">
        {/* Mockup Window Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-mono text-slate-400 ml-2">Smart Closer AI - Executive Dashboard v2.0</span>
          </div>
          <div className="text-[10px] px-2 py-0.5 bg-indigo-900/60 border border-indigo-700 text-indigo-300 rounded font-mono">
            LIVE SIMULATION MOCKUP
          </div>
        </div>

        {/* Mockup Urgent Hot Leads Bar */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-amber-950/80 to-slate-900 border border-amber-600/40 mb-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-amber-500 text-slate-950 rounded-lg font-black text-[10px]">HOT</span>
            <span className="text-amber-200 font-semibold">พบ 3 ลูกค้ามุ่งหวังคะแนนเกิน 85 คะแนนที่ยังไม่ได้รับการติดต่อเกิน 5 นาที!</span>
          </div>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-lg font-bold">
            โทรทันที (Auto-Dial)
          </span>
        </div>

        {/* Mockup 4 KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-medium">ยอดขายปิดสำเร็จ (Won)</div>
            <div className="text-base font-bold text-emerald-400 mt-1">฿ 1,248,500</div>
            <div className="text-[10px] text-emerald-500 font-mono mt-0.5">+24.5% จากเดือนก่อน</div>
          </div>
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-medium">อัตรา Conversion Rate</div>
            <div className="text-base font-bold text-indigo-400 mt-1">32.8 %</div>
            <div className="text-[10px] text-indigo-300 font-mono mt-0.5">สูงกว่าค่าเฉลี่ย 11.2%</div>
          </div>
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-medium">ลูกค้าใน Pipeline</div>
            <div className="text-base font-bold text-amber-400 mt-1">42 ราย</div>
            <div className="text-[10px] text-amber-300 font-mono mt-0.5">มูลค่า ฿ 3.8M</div>
          </div>
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400 font-medium">ระยะเวลาตอบกลับเฉลี่ย</div>
            <div className="text-base font-bold text-sky-400 mt-1">2.4 นาที</div>
            <div className="text-[10px] text-sky-300 font-mono mt-0.5">เร็วกว่าเกณฑ์ 76%</div>
          </div>
        </div>

        {/* Mockup Charts & Quick Table */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span>ท่อการขายและอัตราการแปลง (Pipeline Conversion Funnel)</span>
              <span className="text-[10px] text-slate-500 font-mono">30 วันล่าสุด</span>
            </div>
            {/* Mini Bars */}
            <div className="space-y-1.5 pt-1 text-[11px]">
              <div className="flex items-center justify-between text-slate-400">
                <span>Leads ใหม่ (184 ราย)</span>
                <span className="font-mono">100%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-indigo-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between text-slate-400">
                <span>คัดกรองผ่านเกณฑ์ BANT (128 ราย)</span>
                <span className="font-mono">69.5%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[69.5%] h-full bg-sky-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between text-slate-400">
                <span>ยื่นใบเสนอราคา / Demo (74 ราย)</span>
                <span className="font-mono">40.2%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[40.2%] h-full bg-amber-500 rounded-full"></div>
              </div>

              <div className="flex items-center justify-between text-slate-400">
                <span>ปิดการขายสำเร็จ Won Deals (46 ราย)</span>
                <span className="font-mono text-emerald-400 font-bold">25.0%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[25%] h-full bg-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-slate-300">AI Closer Insights</div>
            <div className="space-y-2 text-[10px]">
              <div className="p-2 rounded bg-indigo-950/60 border border-indigo-800/60 text-indigo-200">
                💡 ข้อโต้แย้งยอดฮิต: "ขอส่วนลดเพิ่ม 10%" (พบ 38%) แนะนำยื่นของแถมขยายประกันแทนการลดเงินสด
              </div>
              <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-200">
                📈 ช่วงเวลาที่ปิดการขายได้สูงสุด: 14:00 - 16:30 น. (อัตราตอบรับ 41%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.10 (Mockup 2): AI Sales Copilot UI Mockup
export const MockupFigure2_10_Copilot: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.10 (MOCKUP)" 
      title="ภาพจำลองส่วนต่อประสานผู้ใช้: ระบบ AI Sales Copilot สำหรับรับมือข้อโต้แย้งและคัดกรอง BANT (AI Copilot UI)"
      description="แสดงหน้าต่างสนทนาด้านซ้าย และพาเนลข้อเสนอแนะปัญญาประดิษฐ์ด้านขวา พร้อมการประเมินมิเตอร์ BANT แบบเรียลไทม์ และสคริปต์ปิดการขายคลิกเดียว"
    >
      <div className="w-full max-w-4xl bg-slate-900 rounded-2xl p-4 sm:p-5 text-slate-100 border border-slate-800 shadow-xl overflow-hidden font-sans">
        {/* Mockup Window Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-mono text-slate-300 ml-2">Smart Closer AI - Copilot Assistant Workspace</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] text-emerald-300 font-mono">Gemini 2.5 Flash Connected</span>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Left Column: Customer Chat (3 cols) */}
          <div className="md:col-span-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs">
                    สม
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">คุณสมชาย (บริษัท สยามโลจิสติกส์)</div>
                    <div className="text-[10px] text-slate-400">สนใจแพ็กเกจ Enterprise CRM (10 Users)</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Lead Score: 88 (HOT)
                </span>
              </div>

              {/* Chat Messages */}
              <div className="space-y-2.5 py-1 text-xs">
                <div className="p-2.5 bg-slate-900 rounded-xl rounded-tl-xs max-w-[85%] border border-slate-800">
                  <div className="text-[10px] text-slate-400 mb-0.5">ลูกค้า (คุณสมชาย) • 14:22 น.</div>
                  <p className="text-slate-200">
                    "ระบบน่าสนใจดีครับ แต่ราคา 89,000 บาท/ปี ค่อนข้างสูงเกินงบที่ตั้งไว้ พอจะลดเหลือ 65,000 ได้ไหม ถ้าไม่ได้คงต้องดูเจ้าอื่นก่อนครับ"
                  </p>
                </div>
              </div>
            </div>

            {/* Input Bar */}
            <div className="pt-2 border-t border-slate-800 flex gap-2">
              <input 
                type="text" 
                readOnly 
                value="[ใส่สคริปต์ที่ AI แนะนำโดยคลิกปุ่ม 'นำไปใช้']" 
                className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-400"
              />
              <button className="px-3 py-1.5 bg-indigo-600 rounded-lg text-xs font-bold text-white flex items-center gap-1">
                <Send className="w-3.5 h-3.5" />
                <span>ส่ง</span>
              </button>
            </div>
          </div>

          {/* Right Column: AI Suggestions & BANT Meter (2 cols) */}
          <div className="md:col-span-2 space-y-2.5">
            {/* BANT Breakdown Card */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-slate-200 text-[11px] flex items-center justify-between">
                <span>การประเมินเกณฑ์ BANT</span>
                <span className="text-emerald-400 font-mono">88 / 100</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400">Budget:</span> <span className="font-bold text-amber-300">฿65k-89k</span>
                </div>
                <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400">Authority:</span> <span className="font-bold text-emerald-300">กรรมการผู้จัดการ</span>
                </div>
                <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400">Need:</span> <span className="font-bold text-emerald-300">ต้องการแก้ปัญหา Lead ตกหล่น</span>
                </div>
                <div className="p-1.5 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400">Timeline:</span> <span className="font-bold text-emerald-300">เริ่มเดือนหน้า</span>
                </div>
              </div>
            </div>

            {/* AI Generated Rebuttal Recommendation */}
            <div className="p-3 bg-indigo-950/70 border border-indigo-700/60 rounded-xl space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-indigo-200 text-[11px] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>คำแนะนำแก้ข้อโต้แย้ง (AI Rebuttal)</span>
                </span>
                <span className="text-[9px] bg-indigo-800 px-1.5 py-0.5 rounded text-indigo-300">กลยุทธ์ ROI & Value Pivot</span>
              </div>
              <p className="text-[11px] text-indigo-100/90 leading-relaxed bg-indigo-900/50 p-2.5 rounded-lg border border-indigo-800/80">
                "เข้าใจเลยครับคุณสมชาย หากดูเฉพาะตัวเลข 89,000 อาจดูสูง แต่เมื่อเทียบกับเคสที่ Lead หายไปเดือนละ 5 ราย มูลค่าสูญเสียกว่า 300,000 บาทแล้ว ระบบนี้จะคืนทุนได้ในเดือนแรกครับ! พิเศษเพื่อช่วยให้เริ่มได้ทันที ผมขอมอบส่วนลด 10% เหลือ 80,100 พร้อมฟรี Onboarding มูลค่า 15,000 บาท หากตัดสินใจภายในสัปดาห์นี้ครับ"
              </p>
              <div className="flex gap-2 pt-1">
                <button className="flex-1 py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-[10px] font-bold text-white transition-colors">
                  คัดลอกข้อความ
                </button>
                <button className="flex-1 py-1 bg-white text-indigo-950 font-bold rounded text-[10px] hover:bg-slate-100 transition-colors">
                  ส่งแทนทันที
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.11 (Mockup 3): Kanban Pipeline Deals Mockup
export const MockupFigure2_11_Kanban: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.11 (MOCKUP)" 
      title="ภาพจำลองส่วนต่อประสานผู้ใช้: กระดานบริหารท่อการขายและสถานะข้อตกลง (Kanban Pipeline Deal Flow UI)"
      description="แสดงการลากวาง (Drag-and-Drop) การ์ดลูกค้าตาม 5 ขั้นตอนหลัก พร้อมการคำนวณมูลค่ายอดขายรวมในแต่ละขั้นตอนและสัญลักษณ์เตือนความเร่งด่วน"
    >
      <div className="w-full max-w-4xl bg-slate-950 rounded-2xl p-4 sm:p-5 text-white border border-slate-800 shadow-xl overflow-hidden font-sans">
        {/* Mockup Window Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-mono text-slate-300 ml-2">Smart Closer AI - Deal Pipeline Kanban Board</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono">
            Total Pipeline: <strong className="text-emerald-400">฿ 3,840,000</strong> (42 Deals)
          </div>
        </div>

        {/* Kanban Columns (4 shown for mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 text-xs">
          {/* Column 1: Leads เข้าใหม่ */}
          <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-300 font-bold border-b border-slate-800 pb-1.5">
              <span>1. นำเข้าใหม่</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-slate-800 rounded font-mono">8 ราย</span>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800/80 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200 text-[11px]">
                <span>คลินิกทันตกรรมสไมล์</span>
                <span className="text-amber-400 text-[10px]">Hot (85)</span>
              </div>
              <div className="text-[10px] text-slate-400">฿ 45,000 • LINE OA</div>
            </div>
          </div>

          {/* Column 2: คัดกรอง BANT */}
          <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-indigo-300 font-bold border-b border-slate-800 pb-1.5">
              <span>2. กำลังคัดกรอง BANT</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-indigo-900/60 rounded font-mono">14 ราย</span>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-indigo-900/50 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200 text-[11px]">
                <span>บจก. เคมีภัณฑ์ไทย</span>
                <span className="text-amber-400 text-[10px]">Hot (91)</span>
              </div>
              <div className="text-[10px] text-slate-400">฿ 180,000 • บอร์ดประชุมศุกร์นี้</div>
            </div>
          </div>

          {/* Column 3: ยื่นข้อเสนอ */}
          <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-amber-300 font-bold border-b border-slate-800 pb-1.5">
              <span>3. ยื่นข้อเสนอ & ต่อรอง</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-amber-900/60 rounded font-mono">12 ราย</span>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-amber-900/50 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200 text-[11px]">
                <span>บริษัท สยามโลจิสติกส์</span>
                <span className="text-amber-400 text-[10px]">Hot (88)</span>
              </div>
              <div className="text-[10px] text-slate-400">฿ 80,100 • รอเซ็นสัญญา</div>
            </div>
          </div>

          {/* Column 4: ปิดการขายสำเร็จ */}
          <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-emerald-300 font-bold border-b border-slate-800 pb-1.5">
              <span>4. ปิดสำเร็จ (Won)</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-emerald-900/60 rounded font-mono">8 ราย</span>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-emerald-900/50 space-y-1">
              <div className="flex justify-between font-semibold text-slate-200 text-[11px]">
                <span>เอเชีย โกลบอล เทรด</span>
                <span className="text-emerald-400 text-[10px]">ชำระแล้ว</span>
              </div>
              <div className="text-[10px] text-emerald-300 font-bold">฿ 320,000 • สัญญา 1 ปี</div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 2.12 (Mockup 4): Voice Closer Simulation Mockup
export const MockupFigure2_12_VoiceCloser: React.FC = () => {
  return (
    <AcademicFigure 
      number="รูปที่ 2.12 (MOCKUP)" 
      title="ภาพจำลองส่วนต่อประสานผู้ใช้: ระบบจำลองการสนทนาโต้ตอบเสียงแบบสองทิศทาง (Real-time Voice Closer Simulation UI)"
      description="แสดงหน้าจอการโทรแบบ Interactive พร้อมคลื่นเสียง (Waveform Visualizer), การถอดเสียงพูดภาษาไทยสด และบทวิเคราะห์ความรู้สึกของผู้ซื้อ (Buyer Sentiment)"
    >
      <div className="w-full max-w-4xl bg-slate-950 rounded-2xl p-4 sm:p-5 text-white border border-slate-800 shadow-xl overflow-hidden font-sans">
        {/* Mockup Window Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-[11px] font-mono text-slate-300 ml-2">Smart Closer AI - Voice Agent Simulator</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] px-2 py-0.5 bg-emerald-900/80 text-emerald-300 border border-emerald-700 rounded-full font-mono">
              CALL IN PROGRESS • 02:45
            </span>
          </div>
        </div>

        {/* Voice Visualizer Center Banner */}
        <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-xl text-center space-y-3">
          <div className="text-xs text-slate-400">กำลังจำลองการสนทนากับลูกค้า: <strong className="text-white">คุณพิมลดา (เจ้าของธุรกิจแฟชั่น)</strong></div>
          {/* Animated waveform bars simulation */}
          <div className="flex items-center justify-center gap-1 h-10">
            <div className="w-1 bg-indigo-500 h-4 rounded-full animate-pulse"></div>
            <div className="w-1 bg-indigo-400 h-7 rounded-full animate-pulse"></div>
            <div className="w-1 bg-indigo-300 h-10 rounded-full animate-pulse"></div>
            <div className="w-1 bg-emerald-400 h-8 rounded-full animate-pulse"></div>
            <div className="w-1 bg-emerald-300 h-5 rounded-full animate-pulse"></div>
            <div className="w-1 bg-indigo-400 h-9 rounded-full animate-pulse"></div>
            <div className="w-1 bg-indigo-500 h-4 rounded-full animate-pulse"></div>
          </div>
          <div className="text-[11px] font-mono text-indigo-300">
            AI Voice Output: "สวัสดีค่ะคุณพิมลดา ขออนุญาตให้ข้อมูลเพิ่มเติมเรื่องการเชื่อมสต็อก TikTok Shop ที่สอบถามไว้เมื่อเช้านะคะ..."
          </div>
        </div>

        {/* Live Audio Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3 text-xs">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400">ระดับความสนใจ (Intent)</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">High (89%)</div>
            <p className="text-[10px] text-slate-500 mt-1">น้ำเสียงมีความตื่นเต้นกับฟีเจอร์ Live Stream Auto-Tag</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400">ข้อโต้แย้งที่ดักจับได้</div>
            <div className="text-sm font-bold text-amber-400 mt-0.5">ความง่ายในการใช้งาน</div>
            <p className="text-[10px] text-slate-500 mt-1">กังวลว่าแอดมินสูงอายุจะไม่ถนัดเทคโนโลยี</p>
          </div>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
            <div className="text-[10px] text-slate-400">Next Action ที่แนะนำ</div>
            <div className="text-sm font-bold text-indigo-400 mt-0.5">ส่งวิดีโอ 2 นาที</div>
            <p className="text-[10px] text-slate-500 mt-1">เสนอจัดเทรนนิ่งออนไลน์ 1 ชั่วโมงให้ฟรี</p>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// Export alias for Chapter 3
export const Figure3_1_SystemArchitecture = Figure2_8_SystemArchitecture;

// ==========================================
// CHAPTER 1 FIGURES
// ==========================================

// รูปที่ 1.1: บริบทของปัญหาและความจำเป็นในการพัฒนาระบบปัญญาประดิษฐ์
export const Figure1_1_ProblemContext: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 1.1"
      title="แผนภาพแสดงบริบทปัญหา อุปสรรคในกระบวนการทำงาน และแนวทางการแก้ปัญหาด้วยระบบอัจฉริยะ (Problem Domain & AI-Driven Solution Framework)"
      description="แสดงความเชื่อมโยงระหว่างปัญหาคอขวดในกระบวนการเดิม (Legacy Workflow Bottlenecks) สู่การผสานเทคโนโลยีปัญญาประดิษฐ์เพื่อยกระดับประสิทธิภาพและความแม่นยำ"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ปัญหาเดิม */}
          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-xs sm:text-sm border-b border-rose-200 pb-2">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>สภาพปัญหาเดิม (Current Pain Points & Manual Bottlenecks)</span>
            </div>
            <ul className="space-y-2 text-xs text-rose-950">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>การจัดเก็บและจำแนกข้อมูลด้วยมือ (Manual Processing):</strong> ต้องใช้เวลาและแรงงานมนุษย์สูง มีอัตราความผิดพลาด (Human Error) จากความเมื่อยล้า</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>การสูญหายและการเข้าถึงข้อมูลที่ล่าช้า:</strong> ขาดการจัดหมวดหมู่ที่มีโครงสร้างมาตรฐาน ทำให้ค้นหาข้อมูลเดิมได้ยากลำบากและใช้เวลานาน</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span><strong>การตัดสินใจที่ขาดการวิเคราะห์เชิงลึก:</strong> ขาดระบบแนะนำอัจฉริยะ (Intelligent Recommendation) ที่ประมวลผลข้อมูลตามบริบทและความต้องการเฉพาะบุคคล</span>
              </li>
            </ul>
          </div>

          {/* แนวทางแก้ปัญหาด้วย AI */}
          <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-3">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs sm:text-sm border-b border-indigo-200 pb-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>แนวทางแก้ไขด้วยระบบอัจฉริยะ (AI-Powered Solution Architecture)</span>
            </div>
            <ul className="space-y-2 text-xs text-indigo-950">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                <span><strong>ระบบประมวลผลและสแกนอัตโนมัติ (Automated Vision/Data Ingestion):</strong> ประมวลผลภาพและข้อมูลนำเข้าได้ทันที ลดเวลาทำงานจากหลักนาทีเหลือเพียงไม่กี่วินาที</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                <span><strong>การจัดหมวดหมู่และลงรหัสมาตรฐาน (Smart Categorization & Tagging):</strong> จำแนกคุณลักษณะ (Features) ละเอียดระดับ Multi-label ด้วยความแม่นยำสูง</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                <span><strong>อัลกอริทึมค้นหาและแนะนำเชิงบริบท (Context-Aware Recommendation Engine):</strong> สร้างผลลัพธ์ที่สอดคล้องกับปัจจัยแวดล้อม พฤติกรรม และเงื่อนไขการใช้งาน</span>
              </li>
            </ul>
          </div>
        </div>

        {/* แถบผลลัพธ์เชิงเปรียบเทียบ */}
        <div className="p-3.5 bg-slate-900 text-white rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-slate-200">เป้าหมายเชิงปริมาณของโครงงาน:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 text-emerald-300">
              ⏱️ ลดเวลาประมวลผล &gt; 70%
            </span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 text-indigo-300">
              🎯 ความแม่นยำการจำแนก &gt; 90%
            </span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 text-amber-300">
              ⭐ ความพึงพอใจผู้ใช้ระดับ "มากที่สุด" (&gt; 4.50)
            </span>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// รูปที่ 1.2: แผนภาพแกนต์ชาร์ต (Gantt Chart)
export const Figure1_2_GanttChart: React.FC = () => {
  const tasks = [
    { id: 1, name: '1. ศึกษาความเป็นไปได้และรวบรวมความต้องการ (Feasibility & Requirements)', start: 1, span: 2, phase: 'Phase 1' },
    { id: 2, name: '2. ศึกษาทฤษฎี วรรณกรรม และงานวิจัยที่เกี่ยวข้อง (Literature Review)', start: 1, span: 3, phase: 'Phase 1' },
    { id: 3, name: '3. การออกแบบสถาปัตยกรรมระบบ ฐานข้อมูล และ UI/UX (System & UI Design)', start: 3, span: 2, phase: 'Phase 2' },
    { id: 4, name: '4. จัดเตรียมชุดข้อมูล การทำ Data Preprocessing & Augmentation', start: 4, span: 2, phase: 'Phase 2' },
    { id: 5, name: '5. การพัฒนาระบบ AI และอัลกอริทึมการประมวลผล (AI Core Development)', start: 5, span: 3, phase: 'Phase 3' },
    { id: 6, name: '6. การพัฒนาส่วนหน้า Web/Mobile Application และ API Integration', start: 6, span: 3, phase: 'Phase 3' },
    { id: 7, name: '7. การทดสอบระบบ ฟังก์ชันงาน และการประเมิน UAT (Testing & Evaluation)', start: 8, span: 2, phase: 'Phase 4' },
    { id: 8, name: '8. สรุปผลการวิจัย อภิปรายผล และจัดทำรูปเล่มรายงานวิจัยฉบับสมบูรณ์', start: 9, span: 2, phase: 'Phase 4' },
  ];

  const months = ['เดือน 1', 'เดือน 2', 'เดือน 3', 'เดือน 4', 'เดือน 5', 'เดือน 6', 'เดือน 7', 'เดือน 8', 'เดือน 9', 'เดือน 10'];

  return (
    <AcademicFigure
      number="รูปที่ 1.2"
      title="แผนผังแสดงกำหนดการดำเนินงานวิจัยและพัฒนาโครงงาน (Project Gantt Chart Timeline)"
      description="แสดงกิจกรรมหลัก 8 ขั้นตอนตลอดระยะเวลาดำเนินโครงงาน 10 เดือน (2 ภาคการศึกษา) ตั้งแต่การศึกษาเบื้องต้นจนถึงการสรุปผลและส่งมอบรูปเล่มฉบับสมบูรณ์"
    >
      <div className="w-full max-w-4xl overflow-x-auto py-2 font-sans">
        <div className="min-w-[650px] border border-slate-200 rounded-xl bg-white overflow-hidden text-xs">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-slate-100 border-b border-slate-200 font-bold text-slate-700 text-center py-2.5">
            <div className="col-span-5 text-left pl-3">กิจกรรมการดำเนินงาน (Activities)</div>
            <div className="col-span-1 text-[11px]">M1</div>
            <div className="col-span-1 text-[11px]">M2</div>
            <div className="col-span-1 text-[11px]">M3</div>
            <div className="col-span-1 text-[11px]">M4</div>
            <div className="col-span-1 text-[11px]">M5</div>
            <div className="col-span-1 text-[11px]">M6</div>
            <div className="col-span-1 text-[11px]">M7</div>
          </div>

          {/* Gantt Rows */}
          <div className="divide-y divide-slate-100 text-[11px]">
            {tasks.map((task) => (
              <div key={task.id} className="grid grid-cols-12 items-center py-2 hover:bg-slate-50">
                <div className="col-span-5 pl-3 font-medium text-slate-800 pr-2 truncate" title={task.name}>
                  {task.name}
                </div>
                {/* 7 visible columns in preview representation */}
                {[1, 2, 3, 4, 5, 6, 7].map((colIndex) => {
                  const isActive = colIndex >= task.start && colIndex < task.start + task.span;
                  return (
                    <div key={colIndex} className="col-span-1 px-1 flex justify-center">
                      {isActive ? (
                        <div className="w-full h-5 rounded bg-indigo-600 shadow-2xs flex items-center justify-center text-[9px] text-white font-bold">
                          ✓
                        </div>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="bg-slate-50 p-2 text-center text-[10px] text-slate-500 border-t border-slate-200">
            หมายเหตุ: M1 - M5 ดำเนินการในภาคการศึกษาที่ 1 • M6 - M10 ดำเนินการในภาคการศึกษาที่ 2 (เสร็จสิ้นสมบูรณ์ตามเป้าหมาย)
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ==========================================
// CHAPTER 3 FIGURES: SYSTEM WORKFLOW & ARCHITECTURE
// ==========================================

// ภาพประกอบที่ 3.1: สแกนและรับเข้าข้อมูลลูกค้า/บทสนทนา (Lead & Conversation Ingestion / Scan)
export const Figure3_1_ScanLead: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.1"
      title="การสแกนและนำเข้าข้อมูลลูกค้าและข้อความบทสนทนา (Lead & Conversation Ingestion / Scan)"
      description="แสดงขั้นตอนการรับเข้าข้อมูลลูกค้าใหม่ การเชื่อมต่อแชทจาก LINE OA, Facebook Messenger หรือเสียงสนทนาสด พร้อมสแกนสกัดข้อมูลโปรไฟล์และความต้องการเข้าสู่ระบบแบบเรียลไทม์"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        {/* Mockup Frame */}
        <div className="rounded-2xl border-2 border-indigo-200 bg-slate-900 text-white overflow-hidden shadow-lg">
          {/* Header Bar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="ml-2 font-mono text-xs text-indigo-400 font-bold">SMART CLOSER AI : OMNICHANNEL INGESTION SCANNER</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-medium border border-emerald-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Listener Active</span>
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Left Column: Ingestion Stream */}
              <div className="md:col-span-7 bg-slate-800/80 rounded-xl p-4 border border-slate-700 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-700 pb-2">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>แชทสดขาเข้าจาก LINE Official Account</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">14:28:12 น.</span>
                </div>

                {/* Customer Chat Bubble */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                    นภ
                  </div>
                  <div className="space-y-1 max-w-[85%]">
                    <div className="text-[11px] text-slate-400">คุณนภัสสร (ผู้จัดการฝ่ายจัดซื้อ บจก.สยามคอมเพล็กซ์)</div>
                    <div className="p-3 bg-slate-700 text-slate-100 rounded-2xl rounded-tl-xs text-xs leading-relaxed border border-slate-600">
                      "สวัสดีค่ะ สนใจระบบ Smart Closer AI สำหรับทีมเซลส์ 15 คน แต่ดูราคาแพ็กเกจ Enterprise ฿49,000 แล้วรู้สึกว่าค่อนข้างสูงกว่าเจ้าอื่น อยากทราบว่าคุ้มค่าและมีส่วนลดอะไรบ้างไหมคะ?"
                    </div>
                  </div>
                </div>

                {/* Real-time Scanning Badge */}
                <div className="p-2.5 bg-indigo-950/60 border border-indigo-500/40 rounded-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-indigo-300">
                    <Zap className="w-4 h-4 text-amber-400 animate-bounce" />
                    <span>กำลังสแกนวิเคราะห์ข้อความและเอนทิตี (Entity Extraction in 18ms)...</span>
                  </div>
                  <span className="text-[10px] font-mono bg-indigo-600 text-white px-2 py-0.5 rounded">Token: 68</span>
                </div>
              </div>

              {/* Right Column: Extracted Profile & Entities */}
              <div className="md:col-span-5 bg-slate-800/80 rounded-xl p-4 border border-slate-700 space-y-3 text-xs">
                <div className="font-bold text-slate-300 border-b border-slate-700 pb-2 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-indigo-400" />
                  <span>ผลลัพธ์การสกัดข้อมูลโปรไฟล์ (Extracted Profile)</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between p-2 bg-slate-900/60 rounded border border-slate-700/60">
                    <span className="text-slate-400">ชื่อลูกค้า:</span>
                    <span className="font-semibold text-white">คุณนภัสสร</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-900/60 rounded border border-slate-700/60">
                    <span className="text-slate-400">กลุ่มธุรกิจ:</span>
                    <span className="font-semibold text-indigo-300">B2B Wholesale & Trading</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-900/60 rounded border border-slate-700/60">
                    <span className="text-slate-400">ขนาดทีมขาย:</span>
                    <span className="font-semibold text-white">15 ผู้ใช้งาน (User Seats)</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-900/60 rounded border border-slate-700/60">
                    <span className="text-slate-400">แพ็กเกจเป้าหมาย:</span>
                    <span className="font-semibold text-amber-400">Enterprise Edition (฿49,000)</span>
                  </div>
                  <div className="flex justify-between p-2 bg-slate-900/60 rounded border border-slate-700/60">
                    <span className="text-slate-400">ระดับความสำคัญ:</span>
                    <span className="font-bold text-rose-400">High Priority (Hot Lead Candidate)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.2: จัดหมวดหมู่อัตโนมัติ (Auto Classification)
export const Figure3_2_AutoClassification: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.2"
      title="การจัดหมวดหมู่เจตนาและจำแนกข้อโต้แย้งอัตโนมัติ (Auto Intent & Objection Classification)"
      description="แสดงขั้นตอนที่โมเดล NLP / LLM จำแนกข้อความของลูกค้าออกเป็นประเภทข้อโต้แย้ง 3 มิติหลัก (ราคา, เวลา/ความเร่งด่วน, ความเชื่อมั่น) พร้อมสกัดอารมณ์และระดับความมั่นใจ"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        <div className="p-5 bg-white rounded-2xl border-2 border-indigo-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-indigo-100 text-indigo-700 font-bold text-xs">
                AI Cognitive Classifier
              </span>
              <span className="text-xs font-bold text-slate-800">
                ผลการจำแนกเจตนาและจัดหมวดหมู่ข้อโต้แย้ง (Multi-label Classification)
              </span>
            </div>
            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">
              ความเชื่อมั่นเฉลี่ย 96.4%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Card 1: Primary Objection Category */}
            <div className="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/50 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-rose-900 flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-rose-600" />
                  <span>1. ข้อโต้แย้งราคา (Price)</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-rose-600 text-white rounded font-mono">
                  Primary 98%
                </span>
              </div>
              <p className="text-xs text-rose-950 font-medium">
                ตรวจพบคำสำคัญ: "ราคาสูงกว่าเจ้าอื่น", "ค่อนข้างแพง", "มีส่วนลดไหม"
              </p>
              <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-rose-200">
                <strong>การวินิจฉัยเชิงจิตวิทยา:</strong> ลูกค้ากังวลเรื่อง ROI และการคืนทุน จำเป็นต้องใช้เทคนิค De-framing แตกราคาเป็นรายวัน
              </div>
            </div>

            {/* Card 2: Competitor Comparison */}
            <div className="p-4 rounded-xl border-2 border-amber-200 bg-amber-50/50 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-900 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                  <span>2. การเปรียบเทียบคู่แข่ง</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-600 text-white rounded font-mono">
                  Secondary 88%
                </span>
              </div>
              <p className="text-xs text-amber-950 font-medium">
                ตรวจพบคำสำคัญ: "เทียบกับเจ้าอื่น", "สเปกฟีเจอร์ที่ต่าง"
              </p>
              <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-amber-200">
                <strong>การวินิจฉัยเชิงจิตวิทยา:</strong> ลูกค้าต้องการข้อมูลสนับสนุนเพื่อนำไปชี้แจงบอร์ดผู้บริหาร ต้องส่งตาราง Feature Matrix
              </div>
            </div>

            {/* Card 3: Emotional & Urgency State */}
            <div className="p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50/50 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-indigo-900 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  <span>3. อารมณ์และความเร่งด่วน</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-indigo-600 text-white rounded font-mono">
                  Confidence 93%
                </span>
              </div>
              <p className="text-xs text-indigo-950 font-medium">
                ระดับอารมณ์: สุภาพ ลังเล แต่เปิดรับการเจรจา (High Receptivity)
              </p>
              <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-indigo-200">
                <strong>การวินิจฉัยเชิงจิตวิทยา:</strong> เป็นจังหวะทองของการปิดการขาย (Closing Window) หากตอบกลับภายใน 10 นาทีมีโอกาสปิดสำเร็จสูงมาก
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.3: สร้างคลังเก็บข้อมูลส่วนตัว (Digital Wardrobe / Sales Knowledge Base)
export const Figure3_3_KnowledgeVault: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.3"
      title="คลังความรู้และฐานข้อมูลลูกค้าแบบไดนามิก (Dynamic Sales Knowledge & Lead Vault)"
      description="แสดงโครงสร้างคลังความรู้สำหรับปิดการขาย ประกอบด้วยแคตตาล็อกสินค้า โปรโมชั่น โควตาส่วนลดที่อนุมัติล่วงหน้า และประวัติความสนใจของลูกค้า ที่ระบบดึงมาใช้อนุมานคำตอบ (RAG Context Store)"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        <div className="p-5 bg-white rounded-2xl border-2 border-indigo-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-bold text-slate-900">Dynamic Knowledge Store & Product Catalog Vault</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Synced: Just now (150 Items)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Box 1: Product Specs */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-indigo-950 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-600" />
                <span>1. สเปกสินค้า & โควตา</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                • Enterprise 15 Seats<br/>
                • Real-time Voice & Chat Copilot<br/>
                • API Integration LINE & CRM<br/>
                • สัญญาบริการ 12 เดือน
              </p>
            </div>

            {/* Box 2: Pricing & Discount Rules */}
            <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-700" />
                <span>2. กฎส่วนลดที่อนุมัติ</span>
              </div>
              <p className="text-[11px] text-emerald-900/90 leading-relaxed">
                • ราคาเต็ม: ฿49,000 / ปี<br/>
                • ส่วนลดเซลส์สูงสุด: 15% (฿41,650)<br/>
                • ของแถม: ฟรี Onboarding VIP<br/>
                • รับประกันคืนเงินใน 30 วัน
              </p>
            </div>

            {/* Box 3: Objection Rebuttal Scripts */}
            <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200 space-y-2">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-700" />
                <span>3. สคริปต์แก้เกม & ROI</span>
              </div>
              <p className="text-[11px] text-amber-900/90 leading-relaxed">
                • สูตร ROI เทียบวันละ 114 บ.<br/>
                • สคริปต์ Feel-Felt-Found<br/>
                • เอกสาร One-Page เสนอบอร์ด<br/>
                • Case Study สยามค้าส่ง
              </p>
            </div>

            {/* Box 4: Fast-Decision Perks */}
            <div className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-200 space-y-2">
              <div className="font-bold text-purple-950 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-700" />
                <span>4. ข้อเสนอเร่งปิดดีล</span>
              </div>
              <p className="text-[11px] text-purple-900/90 leading-relaxed">
                • Scarcity: เหลือ 2 สิทธิ์สุดท้าย<br/>
                • อัปเกรด Cloud Storage 100GB<br/>
                • ขยายเวลา Support 24/7<br/>
                • ล็อกราคานี้ถึง 17:00 น. วันนี้
              </p>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.4: สรุปและประมวลผลตู้เสื้อผ้า / การวินิจฉัยคะแนนลูกค้า (Predictive Scoring & Verification)
export const Figure3_4_ScoringVerification: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.4"
      title="การสรุปและประเมินระดับคะแนนความพร้อมของลูกค้า (Predictive Lead Scoring & Verification)"
      description="แสดงหน้าจอการประมวลผลรวมคะแนนความพร้อมของลูกค้าตามกรอบ BANT Framework โดยคำนวณคะแนนเต็ม 100 และจัดกลุ่มเกรดลูกค้าเป็น Hot Lead เพื่อแนะนำจังหวะปิดการขายทันที"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        <div className="p-5 bg-white rounded-2xl border-2 border-indigo-200 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Left Score Gauge */}
            <div className="md:col-span-4 p-5 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl text-center space-y-2 shadow-md">
              <div className="text-[11px] font-semibold text-indigo-300 uppercase tracking-wider">
                COMPOSITE BANT SCORE
              </div>
              <div className="text-5xl font-black text-amber-400 font-mono tracking-tight">
                88<span className="text-2xl text-slate-400">/100</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full shadow-xs">
                <Flame className="w-4 h-4 animate-pulse" />
                <span>HOT LEAD (โอกาสปิดสำเร็จ 82%)</span>
              </div>
              <p className="text-[10px] text-slate-300 pt-1">
                ระบบแนะนำ: นำเสนอสคริปต์ Value De-framing และปิดดีลภายในวันนี้
              </p>
            </div>

            {/* Right BANT Breakdown */}
            <div className="md:col-span-8 space-y-2.5">
              <div className="text-xs font-bold text-slate-800 border-b border-slate-100 pb-1.5">
                ผลการประเมิน 4 มิติสำคัญ (BANT Dimension Breakdown)
              </div>

              {/* B */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-700">Budget (งบประมาณ): มีงบประมาณรองรับ แต่ต้องการเห็นความคุ้มทุน</span>
                  <span className="font-mono font-bold text-indigo-600">85/100</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              {/* A */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-700">Authority (อำนาจตัดสินใจ): เป็นผู้จัดการฝ่ายจัดซื้อ มีอำนาจคัดเลือกและเสนออนุมัติ</span>
                  <span className="font-mono font-bold text-emerald-600">92/100</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              {/* N */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-700">Need (ความต้องการ): ต้องการเครื่องมือช่วยทีมขาย 15 คน ปิดการขายเร็วขึ้น</span>
                  <span className="font-mono font-bold text-purple-600">95/100</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              {/* T */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-700">Timeline (กรอบเวลา): ต้องการเริ่มทดลองใช้งานภายในสัปดาห์หน้า</span>
                  <span className="font-mono font-bold text-amber-600">80/100</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-600 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.5: ค้นหาสไตล์และเสนอแนะชุด / สคริปต์ปิดการขาย (Cognitive Pitch Recommendation)
export const Figure3_5_PitchRecommendation: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.5"
      title="การค้นหากลยุทธ์จิตวิทยาและเสนอแนะสคริปต์ปิดการขาย (Cognitive Strategy & Pitch Recommendation)"
      description="แสดงขั้นตอนที่โมเดลปัญญาประดิษฐ์ประมวลผลกลยุทธ์จิตวิทยาโน้มน้าวใจ และสังเคราะห์ตัวเลือกสคริปต์ 3 สไตล์ ให้พนักงานขายเลือกกดคัดลอกหรือปรับแต่งส่งต่อให้ลูกค้าได้ทันที"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        <div className="p-5 bg-white rounded-2xl border-2 border-indigo-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-bold text-slate-900">
                AI Next-Best Action & Tailored Closing Pitches
              </span>
            </div>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-2.5 py-1 rounded-full font-bold">
              3 AI Strategies Generated
            </span>
          </div>

          <div className="space-y-3">
            {/* Strategy 1: Recommended Pitch */}
            <div className="p-4 rounded-xl border-2 border-emerald-400 bg-emerald-50/40 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-emerald-600 text-white rounded text-[11px] font-bold">
                    แนะนำสูงสุด (Best Match 94%)
                  </span>
                  <span className="font-bold text-xs text-emerald-950">
                    กลยุทธ์: Value & ROI De-framing (แตกราคาเป็นรายวัน + รับประกันคืนทุน)
                  </span>
                </div>
                <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-xs">
                  คัดลอกสคริปต์นี้ ➜
                </button>
              </div>
              <div className="p-3 bg-white rounded-lg border border-emerald-200 text-xs text-slate-800 leading-relaxed font-sans">
                "เข้าใจเลยค่ะคุณนภัสสร หากมองภาพรวมยอด ฿49,000 อาจดูเป็นเงินก้อน แต่หากเฉลี่ยสำหรับทีมขาย 15 คน จะตกเพียงคนละ <strong>9 บาทต่อวัน</strong> เท่านั้นค่ะ ซึ่งหากระบบช่วยให้ทีมปิดดีลเพิ่มได้เพียงแค่ 1 ดีลต่อเดือน ก็สามารถคืนทุนค่าระบบได้ทั้งหมดในเดือนแรกแล้วค่ะ พิเศษสำหรับวันนี้เรามีแถมฟรี VIP Onboarding มูลค่า ฿15,000 ให้ด้วยนะคะ สะดวกให้เปิดใช้งานสิทธิ์นี้เลยไหมคะ?"
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800">
                  ตัวเลือกที่ 2: Feel-Felt-Found Empathy (แสดงความเข้าใจ + อ้างอิงเคสธุรกิจคล้ายกัน)
                </span>
                <button className="px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-medium transition">
                  คัดลอกสคริปต์
                </button>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                "หลายบริษัทในกลุ่มค้าส่งตอนแรกก็กังวลเรื่องงบประมาณเหมือนคุณนภัสสรเลยค่ะ แต่หลังจากเริ่มทดลองใช้เพียง 3 สัปดาห์ อัตราการตอบกลับและการปิดดีลเร็วขึ้นถึง 65% ทำให้ยอดขายเติบโตเกินงบระบบไปหลายเท่าค่ะ ทางเรามีเคสสรุป 1 หน้าให้คุณนภัสสรส่งให้ผู้บริหารดูด้วยนะคะ"
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-800">
                  ตัวเลือกที่ 3: Scarcity & Fast-Decision Discount (ล็อกสิทธิ์โควตาส่วนลดด่วน)
                </span>
                <button className="px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-medium transition">
                  คัดลอกสคริปต์
                </button>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed">
                "ถ้าคุณนภัสสรสามารถยืนยันภายในวันนี้ ทางผู้บริหารอนุมัติส่วนลดพิเศษให้ 15% ทันที เหลือเพียง ฿41,650 พร้อมสิทธิ์ใช้งานล่วงหน้า 14 วันก่อนตัดรอบบิลค่ะ โควตานี้เหลือ 2 สิทธิ์สุดท้ายของเดือนนี้แล้วค่ะ ให้ทางทีมออกใบเสนอราคาสรุปเลยนะคะ?"
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.6: ลองชุดเสมือนจริงและพร้อมใช้งาน / ปิดการขายจริง (Closing Execution & Deal Conversion)
export const Figure3_6_DealConversion: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.6"
      title="การนำสคริปต์ไปใช้ปิดการขายจริงและบันทึกผลสำเร็จ (Closing Execution & Deal Conversion)"
      description="แสดงขั้นตอนการส่งสคริปต์ปิดการขาย ลูกค้าตกลงสั่งซื้อ ระบบสร้างใบเสนอราคาและลิงก์ชำระเงินอัตโนมัติ พร้อมอัปเดตสถานะเป็น Deal Closed Won ในระบบ CRM แบบทันที"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        <div className="rounded-2xl border-2 border-emerald-400 bg-gradient-to-br from-emerald-950 via-slate-900 to-indigo-950 text-white p-6 shadow-xl space-y-5">
          {/* Header Success Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider font-mono">
                  DEAL CONVERSION SUCCESSFUL
                </span>
                <h4 className="text-xl font-bold text-white">ปิดการขายสำเร็จ (Status: Closed Won 🎉)</h4>
              </div>
            </div>

            <div className="text-right font-mono">
              <div className="text-xs text-slate-400">มูลค่าคำสั่งซื้อที่เกิดขึ้น</div>
              <div className="text-2xl font-black text-emerald-300">฿41,650.00</div>
            </div>
          </div>

          {/* Body Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
            {/* Box 1 */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-emerald-500/30 space-y-2">
              <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>ระยะเวลาการสนทนาปิดดีล</span>
              </div>
              <div className="text-2xl font-bold font-mono text-white">12 นาที 40 วิ</div>
              <p className="text-[11px] text-slate-400">
                ⚡ เร็วกว่าค่าเฉลี่ยปกติของทีมขายถึง <strong>65%</strong> (จากเดิมเฉลี่ย 48 ชั่วโมง)
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-emerald-500/30 space-y-2">
              <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                <Send className="w-4 h-4 text-emerald-400" />
                <span>สคริปต์ที่ใช้สำเร็จ</span>
              </div>
              <div className="text-sm font-semibold text-white">Value De-framing + Onboarding Perk</div>
              <p className="text-[11px] text-slate-400">
                ลูกค้าตอบรับทันทีหลังส่งข้อความพร้อมเปิดใบเสนอราคาและชำระเงิน
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-emerald-500/30 space-y-2">
              <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>การซิงค์ข้อมูลอัตโนมัติ</span>
              </div>
              <div className="text-sm font-semibold text-emerald-400">CRM & ERP Synced 100%</div>
              <p className="text-[11px] text-slate-400">
                ออกใบแจ้งหนี้อัตโนมัติ พร้อมส่งตารางนัดหมาย Kick-off ทางอีเมลและปฏิทินทันที
              </p>
            </div>
          </div>

          {/* Feedback & Satisfaction Score Footer */}
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-300">
              ⭐️ <strong>คะแนนความพึงพอใจของพนักงานขาย (User Rating):</strong> 5/5 ("สคริปต์ตรงจุดมาก ตอบโต้ข้อโต้แย้งราคาได้เนียน ไม่รู้สึกถูกยัดเยียด")
            </span>
            <span className="font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/40">
              Audit ID: SC-WIN-202609-882
            </span>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.7: สถาปัตยกรรมระบบโดยรวม 4 ชั้น
export const Figure3_7_SystemArchitectureExtended: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.7"
      title="แผนภาพสถาปัตยกรรมระบบโดยรวมแบบ 4 ชั้น (4-Tier Full-Stack System Architecture Diagram)"
      description="แสดงโครงสร้างทางเทคโนโลยี การแบ่งความรับผิดชอบของแต่ละชั้น (Presentation, Gateway/Controller, AI Processing Engine, และ Data Persistence Layer)"
    >
      <div className="w-full max-w-4xl space-y-3 py-2 font-sans">
        {/* Tier 1: Presentation */}
        <div className="p-3 bg-white rounded-xl border-2 border-indigo-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between border-b border-indigo-100 pb-1.5 text-xs font-bold text-indigo-900">
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-md font-mono text-[10px]">Tier 1</span>
              <span>Presentation Layer (ส่วนต่อประสานผู้ใช้ Web & Mobile Responsive)</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Client-Side Runtime</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium text-slate-700">
              React 18 + TypeScript
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium text-slate-700">
              Tailwind CSS + Headless UI
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium text-slate-700">
              State & Cache Manager
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center font-medium text-slate-700">
              Audio Waveform Visualizer
            </div>
          </div>
        </div>

        {/* Direction Arrow */}
        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-5 h-5 text-indigo-500" />
        </div>

        {/* Tier 2: Backend & Gateway */}
        <div className="p-3 bg-white rounded-xl border-2 border-emerald-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between border-b border-emerald-100 pb-1.5 text-xs font-bold text-emerald-900">
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md font-mono text-[10px]">Tier 2</span>
              <span>Application Service & API Gateway (ส่วนควบคุมธุรกิจและช่องทางเชื่อมต่อ)</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Node.js / Express Server</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200 text-center font-medium text-emerald-900">
              RESTful Endpoints (/api/*)
            </div>
            <div className="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200 text-center font-medium text-emerald-900">
              JWT & Security Middleware
            </div>
            <div className="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200 text-center font-medium text-emerald-900">
              Validation & Guardrails
            </div>
            <div className="p-2 bg-emerald-50/60 rounded-lg border border-emerald-200 text-center font-medium text-emerald-900">
              SSE Stream Proxy
            </div>
          </div>
        </div>

        {/* Direction Arrow */}
        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-5 h-5 text-emerald-500" />
        </div>

        {/* Tier 3: AI Inference & Recommendation */}
        <div className="p-3 bg-white rounded-xl border-2 border-purple-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between border-b border-purple-100 pb-1.5 text-xs font-bold text-purple-900">
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-md font-mono text-[10px]">Tier 3</span>
              <span>AI Inference & Analytics Engine (เครื่องมือประมวลผลปัญญาประดิษฐ์)</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Gemini 2.5 Flash & NLP Core</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-purple-50/60 rounded-lg border border-purple-200 text-center font-medium text-purple-900">
              Thai Semantic NLP & Classifier
            </div>
            <div className="p-2 bg-purple-50/60 rounded-lg border border-purple-200 text-center font-medium text-purple-900">
              BANT Scoring Algorithm
            </div>
            <div className="p-2 bg-purple-50/60 rounded-lg border border-purple-200 text-center font-medium text-purple-900">
              Cognitive Objection Tree Engine
            </div>
          </div>
        </div>

        {/* Direction Arrow */}
        <div className="flex justify-center text-slate-400">
          <ArrowDown className="w-5 h-5 text-purple-500" />
        </div>

        {/* Tier 4: Data & Persistence */}
        <div className="p-3 bg-white rounded-xl border-2 border-amber-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between border-b border-amber-100 pb-1.5 text-xs font-bold text-amber-900">
            <span className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-md font-mono text-[10px]">Tier 4</span>
              <span>Data Persistence & Storage Layer (ส่วนจัดเก็บข้อมูลและประวัติการทำงาน)</span>
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Secure Cloud Database</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-amber-50/60 rounded-lg border border-amber-200 text-center font-medium text-amber-900">
              Relational CRM / Firestore
            </div>
            <div className="p-2 bg-amber-50/60 rounded-lg border border-amber-200 text-center font-medium text-amber-900">
              Dynamic RAG Knowledge Store
            </div>
            <div className="p-2 bg-amber-50/60 rounded-lg border border-amber-200 text-center font-medium text-amber-900">
              Transcripts & Audit Logs
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.8: ไดอะแกรมกระแสข้อมูล (Data Flow Diagram - DFD)
export const Figure3_8_DataFlowDiagram: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.8"
      title="แผนภาพกระแสข้อมูล (Data Flow Diagram: DFD Level 0 & Level 1 Context Diagram)"
      description="แสดงการไหลเวียนของข้อมูลระหว่างผู้ใช้งาน (User), กระบวนการประมวลผลของระบบ (Processes), แหล่งจัดเก็บข้อมูล (Data Stores), และระบบภายนอก (External AI Services)"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        {/* DFD Level 0 Context Diagram Box */}
        <div className="p-4 bg-slate-900 text-white rounded-xl space-y-3">
          <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>DFD Level 0: System Context Diagram</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 bg-slate-950 rounded-lg border border-slate-800">
            {/* Entity: User */}
            <div className="w-full md:w-1/4 p-3 bg-indigo-950 border border-indigo-700 rounded-xl text-center space-y-1">
              <Users className="w-5 h-5 mx-auto text-indigo-400" />
              <div className="font-bold text-xs text-white">ผู้ใช้งานระบบ (User / Sales Rep)</div>
              <div className="text-[10px] text-indigo-300">นำเข้าข้อมูลลูกค้า / รับสคริปต์</div>
            </div>

            {/* Flows to Center */}
            <div className="text-center text-slate-400 text-[11px] font-mono">
              <span className="text-indigo-300">Lead & Chat Text ➜</span><br/>
              <span className="text-emerald-400">⬅ AI Closing Pitches</span>
            </div>

            {/* Center Process */}
            <div className="w-full md:w-1/3 p-4 bg-indigo-600 text-white rounded-2xl text-center shadow-lg space-y-1">
              <Cpu className="w-6 h-6 mx-auto text-white animate-pulse" />
              <div className="font-bold text-xs">Process 0: Smart Closer AI Core</div>
              <div className="text-[10px] text-indigo-100">วินิจฉัยข้อโต้แย้ง คำนวณ BANT และสร้างสคริปต์</div>
            </div>

            {/* Flows to External */}
            <div className="text-center text-slate-400 text-[11px] font-mono">
              <span className="text-purple-300">Context & Prompts ➜</span><br/>
              <span className="text-amber-300">⬅ Inference Answers</span>
            </div>

            {/* Entity: External AI / Cloud */}
            <div className="w-full md:w-1/4 p-3 bg-purple-950 border border-purple-700 rounded-xl text-center space-y-1">
              <Bot className="w-5 h-5 mx-auto text-purple-400" />
              <div className="font-bold text-xs text-white">Gemini 2.5 Flash Engine</div>
              <div className="text-[10px] text-purple-300">Generative Sales Intelligence</div>
            </div>
          </div>
        </div>

        {/* DFD Level 1 Sub-Processes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-indigo-900">
              <span className="w-5 h-5 rounded bg-indigo-100 text-indigo-700 flex items-center justify-center font-mono text-[10px]">1.0</span>
              <span>Lead & Conversation Ingestion</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              รับข้อมูลแชทหรือเสียงสด ตรวจสอบความถูกต้อง สกัดข้อความ และเข้าคิวประมวลผล
            </p>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-purple-900">
              <span className="w-5 h-5 rounded bg-purple-100 text-purple-700 flex items-center justify-center font-mono text-[10px]">2.0</span>
              <span>Objection & BANT Analytics</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              จำแนกข้อโต้แย้ง 3 มิติ คำนวณคะแนน BANT Score และระบุโอกาสปิดการขาย
            </p>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900">
              <span className="w-5 h-5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-mono text-[10px]">3.0</span>
              <span>Script Synthesis & Conversion</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              สร้าง 3 สคริปต์ปิดการขายตามกลยุทธ์จิตวิทยา พร้อมบันทึกผลการปิดดีลลงในระบบ
            </p>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.9: แผนภาพกรณีการใช้งาน (Use Case Diagram)
export const Figure3_9_UseCaseDiagram: React.FC = () => {
  const useCases = [
    { id: 'UC-01', name: 'ลงทะเบียนและเข้าสู่ระบบด้วย Role-based Access (Sales/Admin)', actor: 'ผู้ใช้งาน', type: 'core' },
    { id: 'UC-02', name: 'นำเข้าข้อมูลลูกค้าและแชทสนทนา (Lead Ingestion & Scan)', actor: 'พนักงานขาย', type: 'core' },
    { id: 'UC-03', name: 'ตรวจจับและวินิจฉัยข้อโต้แย้งอัตโนมัติ (Objection Diagnosis)', actor: 'พนักงานขาย', type: 'ai' },
    { id: 'UC-04', name: 'คำนวณและดูคะแนนความพร้อม BANT Score (Lead Scoring)', actor: 'พนักงานขาย', type: 'ai' },
    { id: 'UC-05', name: 'ขอรับสคริปต์ปิดการขายและปรับแต่งข้อความ (Pitch Generation)', actor: 'พนักงานขาย', type: 'ai' },
    { id: 'UC-06', name: 'บันทึกผลลัพธ์การปิดดีลและการชำระเงิน (Deal Conversion & Log)', actor: 'พนักงานขาย', type: 'core' },
    { id: 'UC-07', name: 'จัดการแคตตาล็อกสินค้า กฎส่วนลด และรายงานผลผู้บริหาร', actor: 'ผู้ดูแลระบบ', type: 'admin' },
  ];

  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.9"
      title="แผนภาพกรณีการใช้งานของระบบ (UML Use Case Diagram)"
      description="แสดงความสัมพันธ์ระหว่างตัวแสดงหลัก (Actors: พนักงานขาย และผู้ดูแลระบบ) กับกรณีการใช้งานทั้ง 7 รายการของระบบ Smart Closer AI"
    >
      <div className="w-full max-w-4xl space-y-4 py-2 font-sans">
        <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Actor Left: Sales Rep */}
            <div className="md:col-span-3 text-center p-4 bg-indigo-50 border border-indigo-200 rounded-xl space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <div className="font-bold text-xs text-indigo-950">พนักงานขาย (Sales Representative)</div>
              <p className="text-[10px] text-slate-500">นักเรียน ปวช.3 / พนักงานขายสินค้าออนไลน์</p>
            </div>

            {/* Use Case System Boundary */}
            <div className="md:col-span-6 p-4 rounded-xl border-2 border-dashed border-indigo-300 bg-slate-50/70 space-y-2">
              <div className="text-[11px] font-bold text-center text-slate-700 border-b border-slate-200 pb-1 font-mono">
                [System Boundary: Smart Closer AI Platform]
              </div>
              <div className="space-y-1.5">
                {useCases.map((uc) => (
                  <div 
                    key={uc.id} 
                    className="p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                        {uc.id}
                      </span>
                      <span className="text-slate-800 text-[11px] font-medium">{uc.name}</span>
                    </div>
                    {uc.type === 'ai' && (
                      <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-[9px] font-bold">
                        AI Enabled
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actor Right: Admin / AI Core */}
            <div className="md:col-span-3 text-center p-4 bg-purple-50 border border-purple-200 rounded-xl space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xs">
                <Bot className="w-6 h-6" />
              </div>
              <div className="font-bold text-xs text-purple-950">AI Subsystem & Admin</div>
              <p className="text-[10px] text-slate-500">โมเดล Gemini และผู้ดูแลระบบ</p>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

// ภาพประกอบที่ 3.10: แบบจำลองความสัมพันธ์ของข้อมูล (Entity-Relationship Diagram - ERD)
export const Figure3_10_DatabaseERD: React.FC = () => {
  return (
    <AcademicFigure
      number="ภาพประกอบที่ 3.10"
      title="แบบจำลองความสัมพันธ์ของข้อมูลในระบบ (Entity-Relationship Diagram: ERD)"
      description="แสดงโครงสร้างตารางข้อมูล คีย์หลัก (Primary Key - PK) คีย์นอก (Foreign Key - FK) และอัตราความสัมพันธ์ของระบบ Smart Closer AI"
    >
      <div className="w-full max-w-4xl space-y-3 py-2 font-sans text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Entity: Users */}
          <div className="bg-white border-2 border-indigo-200 rounded-xl overflow-hidden shadow-xs">
            <div className="bg-indigo-600 text-white px-3 py-2 font-bold flex items-center justify-between text-xs">
              <span>USERS</span>
              <span className="text-[10px] opacity-80">ผู้ใช้งาน/พนักงานขาย</span>
            </div>
            <div className="p-3 space-y-1.5 font-mono text-[11px] divide-y divide-slate-100">
              <div className="text-indigo-700 font-bold">PK  user_id: UUID</div>
              <div className="text-slate-700 pt-1">username: VARCHAR(50)</div>
              <div className="text-slate-700 pt-1">email: VARCHAR(100) UNIQUE</div>
              <div className="text-slate-700 pt-1">role: ENUM(Admin, SalesRep)</div>
              <div className="text-slate-500 pt-1 text-[10px]">created_at: TIMESTAMP</div>
            </div>
          </div>

          {/* Entity: Leads & Conversations */}
          <div className="bg-white border-2 border-purple-200 rounded-xl overflow-hidden shadow-xs">
            <div className="bg-purple-600 text-white px-3 py-2 font-bold flex items-center justify-between text-xs">
              <span>LEADS_CONVERSATIONS</span>
              <span className="text-[10px] opacity-80">ลูกค้า & บทสนทนา</span>
            </div>
            <div className="p-3 space-y-1.5 font-mono text-[11px] divide-y divide-slate-100">
              <div className="text-purple-700 font-bold">PK  lead_id: UUID</div>
              <div className="text-indigo-600 font-semibold pt-1">FK  assigned_rep_id: UUID (Ref: USERS)</div>
              <div className="text-slate-700 pt-1">customer_name: VARCHAR(100)</div>
              <div className="text-slate-700 pt-1">bant_score: INT (0-100)</div>
              <div className="text-slate-700 pt-1">objection_type: VARCHAR(50)</div>
              <div className="text-slate-500 pt-1 text-[10px]">status: ENUM(New, Hot, Won)</div>
            </div>
          </div>

          {/* Entity: Deals & Pitches */}
          <div className="bg-white border-2 border-emerald-200 rounded-xl overflow-hidden shadow-xs">
            <div className="bg-emerald-600 text-white px-3 py-2 font-bold flex items-center justify-between text-xs">
              <span>DEALS_PITCHES</span>
              <span className="text-[10px] opacity-80">สคริปต์ & การปิดดีล</span>
            </div>
            <div className="p-3 space-y-1.5 font-mono text-[11px] divide-y divide-slate-100">
              <div className="text-emerald-700 font-bold">PK  deal_id: UUID</div>
              <div className="text-indigo-600 font-semibold pt-1">FK  lead_id: UUID (Ref: LEADS)</div>
              <div className="text-slate-700 pt-1">deal_value: DECIMAL(10,2)</div>
              <div className="text-slate-700 pt-1">winning_script: TEXT</div>
              <div className="text-slate-700 pt-1">conversion_status: VARCHAR(30)</div>
              <div className="text-slate-500 pt-1 text-[10px]">closed_at: TIMESTAMP</div>
            </div>
          </div>
        </div>

        {/* Cardinality Note */}
        <div className="p-2.5 bg-slate-100 rounded-lg text-slate-600 text-[11px] text-center font-mono">
          ความสัมพันธ์: USERS (1) ──── (N) LEADS_CONVERSATIONS | LEADS_CONVERSATIONS (1) ──── (1) DEALS_PITCHES
        </div>
      </div>
    </AcademicFigure>
  );
};

// Export aliases for compatibility
export const Figure3_1_SystemArchitectureExtended = Figure3_7_SystemArchitectureExtended;
export const Figure3_2_DataFlowDiagram = Figure3_8_DataFlowDiagram;
export const Figure3_3_UseCaseDiagram = Figure3_9_UseCaseDiagram;
export const Figure3_4_DatabaseERD = Figure3_10_DatabaseERD;

// ==========================================
// CHAPTER 4: IMPLEMENTATION & EVALUATION FIGURES
// ==========================================

/**
 * รูปที่ 4.1 ส่วนต่อประสานหน้าจอแดชบอร์ดบริหารยอดขายและตัวชี้วัด BANT
 */
export const Figure4_1_DashboardInterface: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 4.1"
      title="ส่วนต่อประสานหน้าจอแดชบอร์ดบริหารยอดขายและตัวชี้วัด BANT (Executive Sales Dashboard)"
      description="แสดงผลการทำงานจริงของหน้าจอแดชบอร์ด ประกอบด้วยตัวชี้วัดมูลค่าไปป์ไลน์รวม อัตราความสำเร็จ (Win Rate), เวลากลางในการปิดดีล, และการกระจายตัวของ Lead ตามระดับคะแนน BANT"
    >
      <div className="w-full max-w-4xl bg-slate-900 text-white rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-xl space-y-4">
        {/* App Topbar */}
        <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="ml-2 font-mono text-xs text-indigo-400 font-bold">Smart Closer AI — Executive Command Center</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800/80 rounded-full text-[10px] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Pipeline Active
            </span>
            <span className="text-slate-400 text-xs font-mono">Q3 FY2026</span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
            <div className="text-[11px] text-slate-400">Total Pipeline Value</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-0.5">฿2,450,000</div>
            <div className="text-[10px] text-emerald-500 font-medium flex items-center gap-0.5 mt-1">
              <TrendingUp className="w-3 h-3" /> +28.4% vs เดือนก่อน
            </div>
          </div>
          <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
            <div className="text-[11px] text-slate-400">Closing Win Rate</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-indigo-400 mt-0.5">44.2%</div>
            <div className="text-[10px] text-indigo-400 font-medium flex items-center gap-0.5 mt-1">
              <Sparkles className="w-3 h-3" /> เพิ่มขึ้นจาก 26.5%
            </div>
          </div>
          <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
            <div className="text-[11px] text-slate-400">Avg. Response Time</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-sky-400 mt-0.5">3.8 วินาที</div>
            <div className="text-[10px] text-sky-400 font-medium flex items-center gap-0.5 mt-1">
              <Clock className="w-3 h-3" /> เร็วกว่าเดิม 74%
            </div>
          </div>
          <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
            <div className="text-[11px] text-slate-400">Active Hot Leads</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-amber-400 mt-0.5">18 ราย</div>
            <div className="text-[10px] text-amber-400 font-medium flex items-center gap-0.5 mt-1">
              <Flame className="w-3 h-3" /> โอกาสปิดดีล 85%+
            </div>
          </div>
        </div>

        {/* Dashboard Split Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Lead Qualification by BANT Tier */}
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/80 space-y-2.5">
            <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
              <span>การจำแนกสถานะ Leads (BANT)</span>
              <span className="text-[10px] font-mono text-slate-400">รวม 42 ราย</span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                  <span className="flex items-center gap-1 text-emerald-400"><Flame className="w-3 h-3" /> Hot Leads (Score 80-100)</span>
                  <span className="font-mono">18 (42.8%)</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '42.8%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                  <span className="flex items-center gap-1 text-indigo-400"><Activity className="w-3 h-3" /> Qualified (Score 50-79)</span>
                  <span className="font-mono">16 (38.1%)</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '38.1%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                  <span className="flex items-center gap-1 text-slate-400"><AlertCircle className="w-3 h-3" /> Cold / Discovery (&lt;50)</span>
                  <span className="font-mono">8 (19.1%)</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full" style={{ width: '19.1%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Objection Distribution */}
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/80 space-y-2.5">
            <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
              <span>ข้อโต้แย้งหลักที่ตรวจจับ (Objections)</span>
              <span className="text-[10px] font-mono text-indigo-400">AI Analyzed</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between p-1.5 bg-slate-700/50 rounded-lg">
                <span className="text-rose-300 text-[11px]">1. ขอส่วนลด / งบจำกัด</span>
                <span className="font-mono font-bold text-rose-400">46%</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-slate-700/50 rounded-lg">
                <span className="text-amber-300 text-[11px]">2. ขอคิดดูก่อน / รอปรึกษาหุ้นส่วน</span>
                <span className="font-mono font-bold text-amber-400">28%</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-slate-700/50 rounded-lg">
                <span className="text-sky-300 text-[11px]">3. เปรียบเทียบกับคู่แข่ง</span>
                <span className="font-mono font-bold text-sky-400">18%</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-slate-700/50 rounded-lg">
                <span className="text-slate-300 text-[11px]">4. กังวลความยุ่งยากในการติดตั้ง</span>
                <span className="font-mono font-bold text-slate-400">8%</span>
              </div>
            </div>
          </div>

          {/* AI Urgent Recommendations */}
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/80 space-y-2">
            <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Next-Best Action แนะนำด่วน</span>
            </div>
            <div className="p-2 bg-indigo-950/60 border border-indigo-800/60 rounded-lg space-y-1">
              <div className="text-[11px] font-bold text-indigo-300">บจก. สยามเทค (Hot Lead - 92/100)</div>
              <p className="text-[10px] text-slate-300 leading-snug">
                ส่งสคริปต์ Scarcity Closing พร้อมสิทธิ์ส่วนลด 8% สิ้นสุด 18:00 น. วันนี้ เพื่อเร่งตัดสินใจ
              </p>
            </div>
            <div className="p-2 bg-amber-950/40 border border-amber-800/60 rounded-lg space-y-1">
              <div className="text-[11px] font-bold text-amber-300">คลินิกทันตกรรมสไมล์ (Follow-up)</div>
              <p className="text-[10px] text-slate-300 leading-snug">
                เงียบไป 48 ชม. ให้ส่งข้อความ Value Re-framing เน้นฟังก์ชันลดงานเอกสาร 3 ชม./วัน
              </p>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

/**
 * รูปที่ 4.2 ส่วนต่อประสานระบบ AI Sales Copilot ขณะจำลองการเจรจาขจัดข้อโต้แย้งและสคริปต์ปิดการขาย
 */
export const Figure4_2_SalesCopilotInterface: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 4.2"
      title="ส่วนต่อประสานระบบ AI Sales Copilot ขณะจำลองการเจรจาขจัดข้อโต้แย้ง (Interactive Sales Copilot)"
      description="แสดงการทำงานแบบ Dual-Pane: ด้านซ้ายคือการสนทนากับลูกค้าผ่านแชท/เสียงสด ด้านขวาคือ Copilot Drawer ที่วิเคราะห์ข้อโต้แย้งแบบเรียลไทม์ พร้อมสังเคราะห์สคริปต์ 3 กลยุทธ์ให้คลิกคัดลอกส่งได้ทันที"
    >
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-lg">
        {/* Browser Topbar */}
        <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-bold text-indigo-900">AI Sales Copilot Workspace</span>
            <span className="text-slate-400">|</span>
            <span className="font-mono text-[11px] text-slate-500">Live Client: คุณสมชาย (ผู้จัดการฝ่ายไอที บจก. สยามเทค)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-emerald-700 font-semibold text-[11px]">Realtime Voice & Chat Active</span>
          </div>
        </div>

        {/* Workspace Dual Pane */}
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 min-h-[380px]">
          {/* Left Pane: Customer Chat / Live Call */}
          <div className="md:col-span-7 p-4 bg-slate-50/50 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Message 1 from Rep */}
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  REP
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 text-xs text-slate-800 shadow-2xs">
                  สวัสดีครับคุณสมชาย จากที่ได้สาธิตระบบ Enterprise เมื่อวาน ทางทีมมีความเห็นอย่างไรกับโซลูชันนี้บ้างครับ?
                </div>
              </div>

              {/* Message 2 from Customer (Objection) */}
              <div className="flex items-start gap-2 max-w-[90%] ml-auto flex-row-reverse">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  CUST
                </div>
                <div className="bg-amber-50 p-3 rounded-2xl rounded-tr-xs border border-amber-200 text-xs text-slate-900 shadow-2xs space-y-1">
                  <div className="font-bold text-amber-900 text-[11px] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-rose-500" />
                    ข้อโต้แย้งจากลูกค้า (Customer Objection):
                  </div>
                  <p>
                    "ระบบดูครบครันดีครับ แต่ราคา <strong>45,000 บาท/ปี</strong> รู้สึกว่าสูงเกินงบแผนกที่ตั้งไว้ 
                    และเทียบกับเจ้าเดิมที่ใช้ ราคาต่างกันพอสมควร คงต้องขอคิดดูก่อนครับ"
                  </p>
                </div>
              </div>
            </div>

            {/* Input Bar */}
            <div className="pt-2 border-t border-slate-200 flex items-center gap-2">
              <div className="p-2 bg-indigo-50 text-indigo-700 rounded-lg">
                <Mic className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                readOnly 
                value="[คลิกสคริปต์ที่ต้องการทางขวาเพื่อแทรกข้อความตอบกลับทันที...]"
                className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-400 italic"
              />
              <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
                <Send className="w-3 h-3" /> ส่ง
              </button>
            </div>
          </div>

          {/* Right Pane: AI Copilot Recommendations */}
          <div className="md:col-span-5 p-4 bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-950">
                <Bot className="w-4 h-4 text-indigo-600" />
                <span>AI Objection Diagnosis & Scripts</span>
              </div>
              <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded text-[10px] font-bold">
                ตรวจพบ: ข้อโต้แย้งด้านราคา (Price Objection)
              </span>
            </div>

            {/* Lead Status Capsule */}
            <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-[11px]">
              <div>
                <span className="text-slate-500">BANT Score: </span>
                <span className="font-mono font-bold text-emerald-700">88/100 (Hot Lead)</span>
              </div>
              <div>
                <span className="text-slate-500">Max Discount: </span>
                <span className="font-mono font-bold text-indigo-700">10% (Guardrail)</span>
              </div>
            </div>

            {/* Script 1: Value De-framing (Recommended) */}
            <div className="p-2.5 bg-indigo-50/70 border-2 border-indigo-400 rounded-xl space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-indigo-900 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                  กลยุทธ์ที่ 1: Value Re-framing (แนะนำสูงสุด)
                </span>
                <span className="text-[9px] bg-indigo-200 text-indigo-800 px-1.5 py-0.2 rounded font-bold">Win 89%</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic bg-white p-2 rounded-lg border border-indigo-100">
                "เข้าใจเลยครับคุณสมชาย หากมองที่ตัวเลขก้อนแรกอาจดูสูง แต่ถ้าเฉลี่ยอยู่ที่ <strong>วันละ 123 บาท</strong> เท่านั้น 
                ซึ่งลูกค้าที่เปลี่ยนมาใช้สามารถประหยัดเวลาทำงานฝ่ายไอทีได้ถึง 15 ชั่วโมง/สัปดาห์ คืนทุนได้ตั้งแต่เดือนที่ 2 ครับ"
              </p>
              <div className="flex justify-end">
                <button className="text-[10px] bg-indigo-600 hover:bg-indigo-700 text-white px-2.5 py-1 rounded font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" /> คัดลอกไปใช้
                </button>
              </div>
            </div>

            {/* Script 2: Feel-Felt-Found + Scarcity */}
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-800">
                  กลยุทธ์ที่ 2: Feel-Felt-Found + Scarcity
                </span>
                <span className="text-[9px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-bold">Win 78%</span>
              </div>
              <p className="text-[11px] text-slate-600 line-clamp-2">
                "ลูกค้าหลายท่านตอนแรกก็กังวลเรื่องงบเช่นกันครับ แต่หลังจากเริ่มทดลองใช้จริง พบว่าลดต้นทุนซอฟต์แวร์ซ้ำซ้อนได้ทันที..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

/**
 * รูปที่ 4.3 ส่วนต่อประสานกระดานไปป์ไลน์การขายแบบ Kanban พร้อมตัวบ่งชี้ความเร่งด่วน
 */
export const Figure4_3_PipelineKanbanInterface: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 4.3"
      title="ส่วนต่อประสานกระดานไปป์ไลน์การขายแบบ Kanban (Visual Sales Pipeline Kanban Board)"
      description="แสดงมุมมองกระดานไปป์ไลน์ 4 ขั้นตอนหลัก (Discovery, Qualified BANT, In Negotiation, Closed Won) พร้อมการ์ดแสดงคะแนน BANT, มูลค่าดีล, ป้ายเตือนความเร่งด่วน (Urgency Badge), และการลากวางเปลี่ยนสถานะ"
    >
      <div className="w-full max-w-4xl bg-slate-100 p-4 rounded-2xl border border-slate-300 shadow-md space-y-3">
        {/* Kanban Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Kanban className="w-4 h-4 text-indigo-700" />
            <span className="font-bold text-xs sm:text-sm text-slate-800">Sales Pipeline Management Board</span>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-bold">14 Active Deals</span>
          </div>
          <div className="text-xs font-mono text-slate-600">
            Total Won: <span className="font-bold text-emerald-700">฿890,000</span> (This Month)
          </div>
        </div>

        {/* Kanban Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Col 1: Discovery */}
          <div className="bg-slate-200/60 p-2.5 rounded-xl border border-slate-300/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 pb-1 border-b border-slate-300">
              <span>1. Discovery & Lead</span>
              <span className="bg-slate-300 text-slate-800 px-1.5 rounded text-[10px]">3</span>
            </div>
            {/* Card */}
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-900">ร้านกาแฟ คราฟต์บีนส์</span>
                <span className="text-[9px] bg-slate-100 text-slate-600 px-1 rounded font-mono">BANT 42</span>
              </div>
              <div className="text-[10px] text-slate-500">สอบถามราคาเครื่อง POS</div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100 text-[10px]">
                <span className="font-mono font-bold text-slate-700">฿18,500</span>
                <span className="text-slate-400">เมื่อ 1 ชม. ที่แล้ว</span>
              </div>
            </div>
          </div>

          {/* Col 2: Qualified (BANT Passed) */}
          <div className="bg-indigo-50/70 p-2.5 rounded-xl border border-indigo-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-indigo-950 pb-1 border-b border-indigo-200">
              <span>2. Qualified BANT</span>
              <span className="bg-indigo-200 text-indigo-900 px-1.5 rounded text-[10px]">4</span>
            </div>
            {/* Card */}
            <div className="bg-white p-2.5 rounded-lg border border-indigo-200 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-900">คลินิกผิวพรรณ ดร.มนตรี</span>
                <span className="text-[9px] bg-indigo-100 text-indigo-800 px-1 rounded font-bold font-mono">BANT 76</span>
              </div>
              <div className="text-[10px] text-slate-600">มีงบ 4 หมื่น รอประชุมแพทย์เสาร์นี้</div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100 text-[10px]">
                <span className="font-mono font-bold text-indigo-700">฿45,000</span>
                <span className="text-indigo-600 font-medium">Warm Tier</span>
              </div>
            </div>
          </div>

          {/* Col 3: Pitching & Objection Handling */}
          <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-amber-950 pb-1 border-b border-amber-200">
              <span>3. In Negotiation</span>
              <span className="bg-amber-200 text-amber-900 px-1.5 rounded text-[10px]">4</span>
            </div>
            {/* Card */}
            <div className="bg-white p-2.5 rounded-lg border-2 border-amber-300 shadow-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-900">บจก. สยามเทค อินโนเวชั่น</span>
                <span className="text-[9px] bg-rose-100 text-rose-800 px-1 rounded font-bold font-mono">BANT 88</span>
              </div>
              <div className="text-[10px] text-rose-700 font-semibold flex items-center gap-1">
                <Flame className="w-3 h-3" /> ติดข้อโต้แย้งเรื่องราคา (AI Scripting)
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100 text-[10px]">
                <span className="font-mono font-bold text-amber-700">฿125,000</span>
                <span className="text-amber-800 font-bold">Hot Tier</span>
              </div>
            </div>
          </div>

          {/* Col 4: Closed Won */}
          <div className="bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-950 pb-1 border-b border-emerald-200">
              <span>4. Closed Won</span>
              <span className="bg-emerald-200 text-emerald-900 px-1.5 rounded text-[10px]">3</span>
            </div>
            {/* Card */}
            <div className="bg-white p-2.5 rounded-lg border border-emerald-300 shadow-2xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-900">โรงพยาบาลกรุงเทพเมดิคอล</span>
                <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1 rounded font-bold">WON</span>
              </div>
              <div className="text-[10px] text-slate-600">เซ็นสัญญา Enterprise 2 ปี</div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-100 text-[10px]">
                <span className="font-mono font-bold text-emerald-700">฿380,000</span>
                <span className="text-emerald-600 font-bold">สำเร็จ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

/**
 * รูปที่ 4.4 ส่วนต่อประสานระบบตรวจจับลูกค้าที่เงียบหายและการสร้างข้อความ Follow-up อัตโนมัติ
 */
export const Figure4_4_FollowUpQueueInterface: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 4.4"
      title="ส่วนต่อประสานระบบติดตามลูกค้าที่เงียบหายและการสร้างข้อความ Follow-up (Smart Follow-up Queue)"
      description="แสดงการตรวจจับลูกค้าที่ขาดการติดต่อเกินกว่าเกณฑ์ที่กำหนด (Dormant Lead Detection) พร้อมระบบสร้างข้อความทวงถามเฉพาะบุคคล (Personalized Re-engagement) และปุ่มกดส่งข้อความผ่าน LINE / Email ได้ในคลิกเดียว"
    >
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-md space-y-3 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span className="font-bold text-xs sm:text-sm text-slate-800">Automated Follow-up Re-engagement Queue</span>
          </div>
          <span className="text-[11px] bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full font-bold">
            พบ Lead เงียบหาย 5 ราย (Dormant Triggered)
          </span>
        </div>

        {/* Task 1 */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
              <span className="font-bold text-xs text-slate-900">คุณอรทัย (บจก. เอเปกซ์ ซัพพลาย)</span>
              <span className="text-[10px] bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded font-mono font-bold">ขาดการติดต่อ 72 ชม.</span>
            </div>
            <div className="text-xs font-mono text-slate-500">มูลค่าดีล: ฿65,000</div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
            <div className="text-[11px] font-bold text-indigo-900 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              ข้อความติดตามผลที่ AI สังเคราะห์อัตโนมัติ (AI Re-engagement Draft):
            </div>
            <p className="italic text-slate-600 leading-relaxed">
              "สวัสดีค่ะคุณอรทัย ทางทีมขออนุญาตสอบถามความคืบหน้าเรื่องใบเสนอราคาแพ็กเกจ Pro เมื่อวันอังคารค่ะ 
              พอดีสัปดาห์นี้มีสิทธิ์ส่วนลดพิเศษ 5% สำหรับลูกค้าที่ยืนยันก่อนสิ้นเดือน หากคุณอรทัยติดปัญหาเรื่องงบประมาณหรือต้องการปรับฟังก์ชันตรงไหน 
              สามารถบอกได้เลยนะคะ ทางเรายินดีช่วยดูแลค่ะ"
            </p>
          </div>
          <div className="flex flex-wrap justify-between items-center pt-1 text-[11px]">
            <span className="text-slate-500">ช่องทางแนะนำ: LINE Official / WhatsApp</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg font-semibold">
                แก้ไขข้อความ
              </button>
              <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold flex items-center gap-1">
                <Send className="w-3 h-3" /> ยืนยันส่งข้อความ
              </button>
            </div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

/**
 * รูปที่ 4.5 เมทริกซ์ความสับสน (Confusion Matrix) การจำแนกประเภทข้อโต้แย้ง 4 หมวดหมู่ของโมเดล AI
 */
export const Figure4_5_ConfusionMatrix: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 4.5"
      title="เมทริกซ์ความสับสน (Confusion Matrix) การจำแนกประเภทข้อโต้แย้ง 4 หมวดหมู่ของโมเดล AI (N=200)"
      description="แสดงผลการทดสอบการจำแนกข้อโต้แย้งของลูกค้า 200 ตัวอย่าง เปรียบเทียบระหว่างประเภทที่แท้จริง (Actual Class) และประเภทที่แบบจำลองทำนาย (Predicted Class) ประกอบด้วยหมวดหมู่ราคา, เวลา/ความเร่งด่วน, ความน่าเชื่อถือ/ความเสี่ยง, และฟังก์ชันผลิตภัณฑ์"
    >
      <div className="w-full max-w-2xl bg-white border border-slate-200 p-4 sm:p-5 rounded-2xl shadow-xs space-y-4">
        <div className="text-center">
          <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Confusion Matrix: Objection Classification (200 Test Samples)</div>
          <div className="text-[11px] text-slate-500 mt-0.5">รวมความแม่นยำเฉลี่ย Overall Accuracy = 94.0% (188/200 ตัวอย่าง)</div>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-center text-xs border-collapse">
            <thead>
              <tr>
                <th colSpan={2} rowSpan={2} className="p-2 border border-slate-200 bg-slate-50 text-slate-500 font-medium">
                  Actual \ Predicted
                </th>
                <th colSpan={4} className="p-2 border border-slate-200 bg-indigo-50 font-bold text-indigo-900">
                  Predicted Class (ทำนายโดย AI)
                </th>
              </tr>
              <tr className="bg-slate-50 text-slate-700 text-[11px]">
                <th className="p-2 border border-slate-200">1. ราคา (Price)</th>
                <th className="p-2 border border-slate-200">2. เวลา (Timing)</th>
                <th className="p-2 border border-slate-200">3. ความเสี่ยง (Trust)</th>
                <th className="p-2 border border-slate-200">4. สเปก (Feature)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono">
              <tr>
                <td rowSpan={4} className="p-2 border border-slate-200 bg-indigo-50 font-bold text-indigo-900 text-[11px] [writing-mode:vertical-lr] rotate-180">
                  Actual Class
                </td>
                <td className="p-2 border border-slate-200 bg-slate-50 font-bold text-slate-800 text-left text-[11px]">1. ราคา (N=75)</td>
                <td className="p-3 border border-slate-200 bg-emerald-100 font-bold text-emerald-900 text-sm">72 (TP)</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">2</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-400">0</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 bg-slate-50 font-bold text-slate-800 text-left text-[11px]">2. เวลา (N=45)</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">2</td>
                <td className="p-3 border border-slate-200 bg-emerald-100 font-bold text-emerald-900 text-sm">41 (TP)</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 bg-slate-50 font-bold text-slate-800 text-left text-[11px]">3. ความเสี่ยง (N=40)</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
                <td className="p-3 border border-slate-200 bg-emerald-100 font-bold text-emerald-900 text-sm">37 (TP)</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
              </tr>
              <tr>
                <td className="p-2 border border-slate-200 bg-slate-50 font-bold text-slate-800 text-left text-[11px]">4. สเปก (N=40)</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-400">0</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
                <td className="p-3 border border-slate-200 bg-slate-50 text-slate-500">1</td>
                <td className="p-3 border border-slate-200 bg-emerald-100 font-bold text-emerald-900 text-sm">38 (TP)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Matrix Metrics Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 text-center">
          <div className="p-2 bg-slate-50 rounded-lg">
            <span className="text-[10px] text-slate-500 block">Overall Accuracy</span>
            <span className="font-mono font-bold text-xs text-indigo-700">94.0%</span>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg">
            <span className="text-[10px] text-slate-500 block">Avg. Precision</span>
            <span className="font-mono font-bold text-xs text-indigo-700">93.8%</span>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg">
            <span className="text-[10px] text-slate-500 block">Avg. Recall</span>
            <span className="font-mono font-bold text-xs text-indigo-700">94.1%</span>
          </div>
          <div className="p-2 bg-slate-50 rounded-lg">
            <span className="text-[10px] text-slate-500 block">Macro F1-Score</span>
            <span className="font-mono font-bold text-xs text-emerald-700">93.9%</span>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

/**
 * รูปที่ 4.6 กราฟเปรียบเทียบระยะเวลาในการตอบสนอง (Response Latency)
 */
export const Figure4_6_ResponseLatencyChart: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 4.6"
      title="แผนภูมิเปรียบเทียบระยะเวลาในการตอบสนองข้อโต้แย้ง (Response Latency Comparison)"
      description="แสดงการเปรียบเทียบระยะเวลาเฉลี่ย (หน่วย: วินาที) ในการค้นหาข้อมูลแคตตาล็อกและพิมพ์ตอบข้อโต้แย้งของลูกค้า ระหว่างพนักงานขายมนุษย์ทั่วไป (Manual Process) กับการใช้ Smart Closer AI ช่วยงาน"
    >
      <div className="w-full max-w-xl bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="text-center">
          <div className="text-xs font-bold text-slate-800">เวลาในการตอบข้อโต้แย้งลูกค้าเฉลี่ยต่อคำถาม (หน่วย: วินาที)</div>
          <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">ลดระยะเวลาลง 96.5% (จาก 7 นาที เหลือ 3.8 วินาที)</div>
        </div>

        {/* Horizontal Bar Chart */}
        <div className="space-y-4 pt-2">
          {/* Manual Sales Rep */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-700">
              <span>พนักงานขายทั่วไป (Manual Rep Response)</span>
              <span className="font-mono text-rose-600">420 วินาที (7.0 นาที)</span>
            </div>
            <div className="w-full h-8 bg-slate-100 rounded-lg overflow-hidden flex items-center px-3 border border-slate-200">
              <div className="h-5 bg-gradient-to-r from-rose-500 to-rose-600 rounded text-white text-[11px] font-mono font-bold flex items-center px-2" style={{ width: '100%' }}>
                420s
              </div>
            </div>
            <div className="text-[10px] text-slate-400 pl-1">ต้องเปิดดูแคตตาล็อก, คำนวณส่วนลด, ขออนุมัติหัวหน้า, และพิมพ์ข้อความ</div>
          </div>

          {/* AI Sales Copilot */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-indigo-950">
              <span>Smart Closer AI (Copilot Automated Recommendation)</span>
              <span className="font-mono text-emerald-600 font-bold">3.8 วินาที</span>
            </div>
            <div className="w-full h-8 bg-slate-100 rounded-lg overflow-hidden flex items-center px-3 border border-slate-200">
              <div className="h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded text-white text-[10px] font-mono font-bold flex items-center px-2" style={{ width: '4%' }}>
                3.8s
              </div>
            </div>
            <div className="text-[10px] text-emerald-700 font-medium pl-1">ตรวจจับเสียง/ข้อความ, ตรวจสอบ Guardrail ส่วนลด, และสังเคราะห์สคริปต์เสร็จสิ้นใน 3.8 วินาที</div>
          </div>
        </div>

        {/* Latency Breakdown Table */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <div className="text-[10px] text-slate-500">Speech-to-Text</div>
            <div className="font-mono font-bold text-slate-800">0.8s</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500">Gemini LLM Inference</div>
            <div className="font-mono font-bold text-indigo-700">2.2s</div>
          </div>
          <div>
            <div className="text-[10px] text-slate-500">UI Render & Guardrail</div>
            <div className="font-mono font-bold text-slate-800">0.8s</div>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

/**
 * รูปที่ 4.7 กราฟเปรียบเทียบผลสัมฤทธิ์ก่อนและหลังการใช้งานระบบ
 */
export const Figure4_7_ConversionComparisonChart: React.FC = () => {
  return (
    <AcademicFigure
      number="รูปที่ 4.7"
      title="แผนภูมิเปรียบเทียบตัวชี้วัดความสำเร็จทางธุรกิจก่อนและหลังนำระบบไปใช้ (Business Conversion Impact)"
      description="แสดงการเปรียบเทียบตัวชี้วัดหลัก 3 ประการ จากการทดลองใช้ในธุรกิจจริงเป็นเวลา 4 สัปดาห์: อัตราการปิดการขาย (Win Rate), อัตราการสูญเสียลูกค้า (Lead Drop-off Rate), และมูลค่าคำสั่งซื้อเฉลี่ยต่อดีล (Average Deal Size)"
    >
      <div className="w-full max-w-2xl bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <div className="text-center">
          <div className="text-xs font-bold text-slate-800">ผลสัมฤทธิ์การทดลองใช้งานระบบกับกลุ่มตัวอย่างพนักงานขาย 30 คน (4 สัปดาห์)</div>
        </div>

        {/* 3 Metric Progress Comparisons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Win Rate */}
          <div className="p-3 bg-indigo-50/60 border border-indigo-200 rounded-xl text-center space-y-2">
            <div className="text-xs font-bold text-indigo-900">Closing Win Rate</div>
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-sm font-mono text-slate-400 line-through">26.5%</span>
              <span className="text-2xl font-bold font-mono text-indigo-700">44.2%</span>
            </div>
            <div className="text-[11px] font-bold text-emerald-700 bg-emerald-100 py-0.5 rounded">
              +31.5% Relative Uplift
            </div>
            <p className="text-[10px] text-slate-500">อัตราการปิดการขายสำเร็จเพิ่มขึ้นชัดเจน</p>
          </div>

          {/* Lead Drop-off */}
          <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-center space-y-2">
            <div className="text-xs font-bold text-emerald-900">Lead Lost / Dormant</div>
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-sm font-mono text-slate-400 line-through">48.0%</span>
              <span className="text-2xl font-bold font-mono text-emerald-700">19.5%</span>
            </div>
            <div className="text-[11px] font-bold text-emerald-700 bg-emerald-100 py-0.5 rounded">
              -59.4% Lead Decay
            </div>
            <p className="text-[10px] text-slate-500">ลดปัญหาสูญเสียลูกค้าจากการตามงานไม่ทัน</p>
          </div>

          {/* Deal Size */}
          <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl text-center space-y-2">
            <div className="text-xs font-bold text-amber-900">Avg. Deal Value</div>
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-xs font-mono text-slate-400 line-through">฿34,500</span>
              <span className="text-xl font-bold font-mono text-amber-700">฿42,800</span>
            </div>
            <div className="text-[11px] font-bold text-emerald-700 bg-emerald-100 py-0.5 rounded">
              +24.0% Value Growth
            </div>
            <p className="text-[10px] text-slate-500">AI แนะนำการขายเพิ่ม (Cross-sell/Up-sell)</p>
          </div>
        </div>
      </div>
    </AcademicFigure>
  );
};

/**
 * รูปที่ 4.8 แผนภูมิแสดงผลคะแนนการประเมินความพึงพอใจของผู้ใช้งาน UAT 5 มิติ
 */
export const Figure4_8_UatSatisfactionRadar: React.FC = () => {
  const dimensions = [
    { label: '1. ความง่ายและเป็นมิตรของส่วนต่อประสาน (UI/UX)', mean: 4.84, sd: 0.37, pct: 96.8 },
    { label: '2. ความแม่นยำของ AI ในการตอบและขจัดข้อโต้แย้ง', mean: 4.72, sd: 0.45, pct: 94.4 },
    { label: '3. ความมีประโยชน์ของเกณฑ์คะแนน BANT Lead Scoring', mean: 4.80, sd: 0.40, pct: 96.0 },
    { label: '4. ระบบตรวจจับและสร้างข้อความ Follow-up อัตโนมัติ', mean: 4.76, sd: 0.43, pct: 95.2 },
    { label: '5. ความคุ้มค่าในการนำไปใช้ในธุรกิจจริง (Commercial Value)', mean: 4.86, sd: 0.35, pct: 97.2 },
  ];

  return (
    <AcademicFigure
      number="รูปที่ 4.8"
      title="แผนภูมิแท่งคะแนนความพึงพอใจของผู้ใช้งานจริง (UAT Evaluation Across 5 Dimensions, N=30)"
      description="แสดงผลคะแนนเฉลี่ยความพึงพอใจจากกลุ่มตัวอย่างพนักงานขายและผู้ประกอบการ 30 คน ครอบคลุม 5 มิติหลัก โดยได้คะแนนเฉลี่ยรวมทุกด้าน 4.80 จาก 5.00 คะแนน (ระดับความพึงพอใจมากที่สุด)"
    >
      <div className="w-full max-w-2xl bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold text-slate-800">ผลการประเมินความพึงพอใจตามมาตราส่วน Likert Scale 5 ระดับ</div>
            <div className="text-[11px] text-slate-500">กลุ่มตัวอย่าง: ผู้เชี่ยวชาญด้านงานขายและผู้ประกอบการ (N=30)</div>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400">คะแนนเฉลี่ยรวม: </span>
            <span className="font-mono font-bold text-sm text-indigo-700">4.80 ± 0.40</span>
            <span className="ml-1 text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">มากที่สุด</span>
          </div>
        </div>

        {/* 5 Bars */}
        <div className="space-y-3">
          {dimensions.map((dim, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-xs text-slate-700">
                <span className="font-medium">{dim.label}</span>
                <span className="font-mono font-bold text-indigo-700">{dim.mean.toFixed(2)} / 5.00</span>
              </div>
              <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex items-center p-0.5 border border-slate-200">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-end pr-1.5 text-[9px] text-white font-mono font-bold"
                  style={{ width: `${dim.pct}%` }}
                >
                  {dim.pct}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Scale Note */}
        <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>เกณฑ์การแปลผล: 4.51 - 5.00 = มากที่สุด (Highest) | 3.51 - 4.50 = มาก (High)</span>
          <span className="font-semibold text-emerald-700">ทุกด้านอยู่ในระดับ "มากที่สุด"</span>
        </div>
      </div>
    </AcademicFigure>
  );
};



