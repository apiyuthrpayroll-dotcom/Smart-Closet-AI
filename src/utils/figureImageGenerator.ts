/**
 * Realistic Canvas Image Generator for Academic Figures & UI Mockups
 * Generates ultra-crisp, high-definition PNG Data URLs with rich, realistic colors,
 * gradients, rounded shapes, and clean typography for Word & PDF export.
 */

export interface GeneratedFigureImage {
  dataUrl: string;
  base64: string;
  width: number;
  height: number;
  number: string;
  title: string;
}

// Helper to draw rounded rectangle
function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  radius: number,
  fillColor?: string | CanvasGradient,
  strokeColor?: string,
  strokeWidth = 1
) {
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, radius);
  if (fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fill();
  }
  if (strokeColor) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * 1. รูปที่ 2.1 Sales Conversion Funnel & Lead Flow (Funnel 5 ระดับ)
 */
export function generateFigure2_1(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 540);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#f1f5f9');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bgGrad, '#e2e8f0', 2);

  // Outer subtle header bar
  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#4338ca';
  ctx.fillText('SALES CONVERSION FUNNEL & LEAD QUALIFICATION FLOW', 48, 54);
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('กระบวนการคัดกรองและส่งต่อลูกค้าระบบ Smart Closer AI', 720, 54);

  // Funnel Stages
  const stages = [
    {
      pct: '100%',
      title: '1. Inbound Leads (Top of Funnel)',
      desc: 'รายชื่อติดต่อใหม่จาก LINE Official Account, Facebook Ads, TikTok, เว็บไซต์',
      colorStart: '#0f172a',
      colorEnd: '#1e293b',
      border: '#334155',
      w: 960,
    },
    {
      pct: '72%',
      title: '2. AI Qualification (BANT Filter / MQL)',
      desc: 'ระบบถามคัดกรองอัตโนมัติ: วิเคราะห์งบประมาณ (B), อำนาจตัดสินใจ (A), ความจำเป็น (N), เวลา (T)',
      colorStart: '#4338ca',
      colorEnd: '#3730a3',
      border: '#6366f1',
      w: 830,
    },
    {
      pct: '54%',
      title: '3. Predictive Lead Scoring (SQL Prioritization)',
      desc: 'คำนวณคะแนนถ่วงน้ำหนัก 0-100 คะแนน และจัดกลุ่ม Hot (≥80) / Warm (60-79) / Cold (<60)',
      colorStart: '#d97706',
      colorEnd: '#b45309',
      border: '#f59e0b',
      w: 700,
    },
    {
      pct: '38%',
      title: '4. AI Copilot & Objection Handling',
      desc: 'ระบบช่วยพนักงานขาย: รับมือข้อโต้แย้งราคา/เวลา, แนะนำส่วนลดตรงจุด, สรุปประเด็นสนทนา',
      colorStart: '#0284c7',
      colorEnd: '#0369a1',
      border: '#38bdf8',
      w: 570,
    },
    {
      pct: '24%',
      title: '5. Closing & Won Deals (Customer LTV)',
      desc: 'ออกใบเสนอราคา, ปิดการขายสำเร็จ, บันทึกประวัติคำสั่งซื้อ และคำนวณมูลค่าตลอดช่วงชีวิตลูกค้า',
      colorStart: '#059669',
      colorEnd: '#047857',
      border: '#10b981',
      w: 440,
    },
  ];

  let startY = 96;
  stages.forEach((st) => {
    const startX = 550 - st.w / 2;

    // Percentage badge on left
    drawRoundRect(ctx, 40, startY + 14, 64, 38, 10, '#ffffff', '#cbd5e1', 1.5);
    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = st.colorStart;
    ctx.textAlign = 'center';
    ctx.fillText(st.pct, 72, startY + 38);
    ctx.textAlign = 'left';

    // Funnel bar with realistic gradient and soft shadow
    ctx.save();
    ctx.shadowColor = 'rgba(15, 23, 42, 0.12)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;
    const barGrad = ctx.createLinearGradient(startX, startY, startX + st.w, startY);
    barGrad.addColorStop(0, st.colorStart);
    barGrad.addColorStop(1, st.colorEnd);
    drawRoundRect(ctx, startX, startY, st.w, 66, 16, barGrad, st.border, 2);
    ctx.restore();

    // Bar Content
    ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(st.title, startX + 24, startY + 28);

    ctx.font = '12.5px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText(st.desc, startX + 24, startY + 50);

    // Right Arrow or Indicator
    drawRoundRect(ctx, startX + st.w - 85, startY + 18, 70, 30, 8, 'rgba(255, 255, 255, 0.2)');
    ctx.font = 'bold 12px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(st.pct, startX + st.w - 50, startY + 38);
    ctx.textAlign = 'left';

    startY += 82;
  });

  return canvas.toDataURL('image/png');
}

/**
 * 2. Section 2.1.1: แผนภาพวิวัฒนาการของกระบวนการขายเชิงพาณิชย์ 3 ยุคสมัย
 */
export function generateFigure2_1_Evolution(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 460;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 460);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 460, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 24, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('วิวัฒนาการของกระบวนการขายเชิงพาณิชย์ (Evolution of Commercial Sales)', 50, 56);

  // 3 Cards
  const cards = [
    {
      era: 'ยุคที่ 1: Product-Centric',
      sub: 'การขายแบบชูจุดเด่นสินค้า',
      desc: 'เน้นการท่องจำฟังก์ชัน (Feature-dumping) การนำเสนอสเปกเชิงลึก และการใช้ส่วนลดทางราคาเพื่อเร่งการซื้อ ขาดการทำความเข้าใจบริบทเฉพาะตัวของลูกค้า',
      bg: '#ffffff',
      border: '#cbd5e1',
      headerBg: '#f1f5f9',
      headerColor: '#334155',
      badge: 'ยุคดั้งเดิม',
      badgeBg: '#e2e8f0',
      badgeColor: '#475569',
      highlight: false,
    },
    {
      era: 'ยุคที่ 2: Solution-Centric',
      sub: 'การขายเชิงแก้ไขปัญหา',
      desc: 'เริ่มนำทฤษฎีจิตวิทยามาวิเคราะห์ Pain Points ลูกค้า นำเสนอแพ็กเกจโซลูชันที่ปรับแต่งได้ อย่างไรก็ตาม กระบวนการยังต้องพึ่งพาทักษะเฉพาะตัวของยอดนักขาย (Top Performers) สูงมาก',
      bg: '#ffffff',
      border: '#cbd5e1',
      headerBg: '#f1f5f9',
      headerColor: '#334155',
      badge: 'ยุคที่ปรึกษา',
      badgeBg: '#e0e7ff',
      badgeColor: '#4338ca',
      highlight: false,
    },
    {
      era: 'ยุคที่ 3: Intelligence-Centric',
      sub: 'การขายขับเคลื่อนด้วย AI ปัญญาประดิษฐ์',
      desc: 'การประยุกต์ใช้โมเดลภาษาขนาดใหญ่ (LLMs) และอัลกอริทึมคาดการณ์ (Predictive Scoring) ในการวิเคราะห์ความตั้งใจซื้อแบบเรียลไทม์ และชี้นำสคริปต์ปิดการขายเฉพาะบุคคล (Next-Best Action)',
      bg: '#eef2ff',
      border: '#6366f1',
      headerBg: '#4338ca',
      headerColor: '#ffffff',
      badge: 'ระบบ Smart Closer AI',
      badgeBg: '#312e81',
      badgeColor: '#c7d2fe',
      highlight: true,
    },
  ];

  const cardW = 328;
  let curX = 40;
  cards.forEach((c) => {
    ctx.save();
    if (c.highlight) {
      ctx.shadowColor = 'rgba(79, 70, 229, 0.2)';
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 6;
    }
    drawRoundRect(ctx, curX, 100, cardW, 320, 18, c.bg, c.border, c.highlight ? 2.5 : 1.5);
    ctx.restore();

    // Header strip
    drawRoundRect(ctx, curX, 100, cardW, 64, 18, c.headerBg);
    // Cover bottom radius of header
    ctx.fillStyle = c.headerBg;
    ctx.fillRect(curX, 140, cardW, 24);

    ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = c.headerColor;
    ctx.fillText(c.era, curX + 18, 136);

    // Badge
    drawRoundRect(ctx, curX + cardW - 120, 114, 106, 26, 8, c.badgeBg);
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = c.badgeColor;
    ctx.textAlign = 'center';
    ctx.fillText(c.badge, curX + cardW - 67, 131);
    ctx.textAlign = 'left';

    // Subtitle
    ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = c.highlight ? '#3730a3' : '#4338ca';
    ctx.fillText(c.sub, curX + 18, 190);

    // Line divider
    ctx.strokeStyle = c.highlight ? '#c7d2fe' : '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(curX + 18, 204);
    ctx.lineTo(curX + cardW - 18, 204);
    ctx.stroke();

    // Description (multi-line wrap)
    ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = c.highlight ? '#1e1b4b' : '#475569';
    wrapText(ctx, c.desc, curX + 18, 230, cardW - 36, 22);

    curX += cardW + 28;
  });

  return canvas.toDataURL('image/png');
}

/**
 * 3. Section 2.2.1: แผนผังกรอบ BANT Framework 4 มิติทางธุรกิจ
 */
export function generateFigure2_2_BANT(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 500);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 500, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 24, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('กรอบการประเมินลูกค้าเชิงปริมาณ: BANT 4-Dimensional Qualification Heuristics', 50, 56);

  const items = [
    {
      code: 'B',
      name: '1. Budget (งบประมาณและกำลังซื้อ)',
      weight: 'น้ำหนัก: 25%',
      color: '#4338ca',
      bg: '#eef2ff',
      border: '#818cf8',
      desc: 'วิเคราะห์ว่าลูกค้ามีเงินทุนเพียงพอกับระดับราคาของผลิตภัณฑ์หรือไม่ ตรวจสอบว่างบประมาณได้รับการจัดสรรแล้วหรือต้องของบพิเศษ ระบบจะตรวจจับคำระบุงบ เช่น "ตั้งงบไว้ 50,000", "หลักพันหรือหลักหมื่น" เพื่อคำนวณคะแนน 0-100',
    },
    {
      code: 'A',
      name: '2. Authority (อำนาจตัดสินใจสั่งซื้อ)',
      weight: 'น้ำหนัก: 25%',
      color: '#0284c7',
      bg: '#f0f9ff',
      border: '#38bdf8',
      desc: 'การระบุสถานะของผู้สนทนาในกระบวนการจัดซื้อ: (1) ผู้มีอำนาจตัดสินใจคนเดียว (Sole Decision Maker เช่น เจ้าของกิจการ), (2) ผู้มีอิทธิพล/ผู้ใช้งานหลัก (Influencer/Champion), และ (3) ผู้ประสานงานสอบถามข้อมูล (Gatekeeper)',
    },
    {
      code: 'N',
      name: '3. Need (ความจำเป็นเร่งด่วนและระดับปัญหา)',
      weight: 'น้ำหนัก: 30% (สูงสุด)',
      color: '#d97706',
      bg: '#fffbeb',
      border: '#f59e0b',
      desc: 'การประเมินความรุนแรงของปัญหา (Pain Point Severity) โดยเปรียบเทียบระหว่าง "ปัญหาที่ส่งผลเสียต่อธุรกิจทันที" (Critical Burning Pain) กับ "ปัญหาทั่วไปที่มีก็ได้ไม่มีก็ได้" (Nice-to-have) หากสอดคล้องกับฟีเจอร์หลักจะให้คะแนนเต็ม',
    },
    {
      code: 'T',
      name: '4. Timeline (กรอบเวลาในการเริ่มใช้งาน)',
      weight: 'น้ำหนัก: 20%',
      color: '#e11d48',
      bg: '#fff1f2',
      border: '#fb7185',
      desc: 'ระยะเวลาที่ลูกค้าต้องการติดตั้งระบบหรือเริ่มใช้งานจริง: ด่วนที่สุด (< 7 วัน หรือพร้อมเริ่มทันที) จะจัดเป็น Hot Lead ทันที, ระยะสั้น (1-4 สัปดาห์), ระยะกลาง (1-3 เดือน) และไม่มีกำหนดเวลาชัดเจน (> 3 เดือนขึ้นไป)',
    },
  ];

  const colW = 505;
  const colH = 180;
  const coords = [
    { x: 35, y: 94 },
    { x: 560, y: 94 },
    { x: 35, y: 294 },
    { x: 560, y: 294 },
  ];

  items.forEach((item, i) => {
    const pos = coords[i];
    drawRoundRect(ctx, pos.x, pos.y, colW, colH, 16, item.bg, item.border, 1.8);

    // Letter badge circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(pos.x + 40, pos.y + 38, 22, 0, Math.PI * 2);
    ctx.fillStyle = item.color;
    ctx.fill();
    ctx.restore();

    ctx.font = 'bold 20px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(item.code, pos.x + 40, pos.y + 45);
    ctx.textAlign = 'left';

    // Title
    ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.fillText(item.name, pos.x + 72, pos.y + 34);

    // Weight Pill
    drawRoundRect(ctx, pos.x + colW - 120, pos.y + 18, 105, 24, 6, item.color);
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(item.weight, pos.x + colW - 68, pos.y + 34);
    ctx.textAlign = 'left';

    // Description
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#334155';
    wrapText(ctx, item.desc, pos.x + 20, pos.y + 76, colW - 40, 20);
  });

  return canvas.toDataURL('image/png');
}

/**
 * 4. Figure 2.2 Qualification Framework Comparison (BANT vs MEDDIC vs SPIN)
 */
export function generateFigure2_2_Comparison(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 480;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 480);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 480, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 20, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('แผนภาพเปรียบเทียบกรอบการคัดกรองคุณสมบัติลูกค้า (Qualification Framework Comparison)', 50, 52);

  const cardW = 328;
  const startY = 88;

  // 1. BANT Card (Highlight)
  ctx.save();
  ctx.shadowColor = 'rgba(79, 70, 229, 0.2)';
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 6;
  drawRoundRect(ctx, 40, startY, cardW, 360, 18, '#eef2ff', '#6366f1', 2.5);
  ctx.restore();

  drawRoundRect(ctx, 40, startY, cardW, 56, 18, '#4338ca');
  ctx.fillStyle = '#4338ca';
  ctx.fillRect(40, startY + 36, cardW, 20);
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('BANT (IBM Origin)', 58, startY + 35);
  drawRoundRect(ctx, 40 + cardW - 105, startY + 14, 90, 26, 8, '#312e81');
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#c7d2fe';
  ctx.textAlign = 'center';
  ctx.fillText('ระบบนำมาใช้', 40 + cardW - 60, startY + 31);
  ctx.textAlign = 'left';

  const bantItems = [
    'B - Budget (งบประมาณ)',
    'A - Authority (อำนาจตัดสินใจ)',
    'N - Need (ความจำเป็นเร่งด่วน)',
    'T - Timeline (กรอบเวลาซื้อ)',
  ];
  let bY = startY + 84;
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  bantItems.forEach((it) => {
    drawRoundRect(ctx, 58, bY - 14, 290, 32, 8, '#ffffff', '#c7d2fe', 1);
    ctx.fillStyle = '#4338ca';
    ctx.fillText(it[0], 70, bY + 8);
    ctx.fillStyle = '#1e1b4b';
    ctx.fillText(it.substring(1), 84, bY + 8);
    bY += 40;
  });

  drawRoundRect(ctx, 58, startY + 258, 290, 72, 10, '#ffffff', '#c7d2fe', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#4338ca';
  ctx.fillText('จุดเด่นทางวิศวกรรม:', 68, startY + 278);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  wrapText(ctx, 'ประเมินได้เร็ว คัดกรองผ่านแชทสั้นๆ ได้ เหมาะกับการปิดการขายออนไลน์และระบบอัตโนมัติ', 68, startY + 296, 270, 18);

  // 2. MEDDIC Card
  drawRoundRect(ctx, 40 + cardW + 28, startY, cardW, 360, 18, '#ffffff', '#cbd5e1', 1.5);
  drawRoundRect(ctx, 40 + cardW + 28, startY, cardW, 56, 18, '#f1f5f9');
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(40 + cardW + 28, startY + 36, cardW, 20);
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.fillText('MEDDIC (Enterprise)', 40 + cardW + 48, startY + 35);

  const meddicItems = [
    'M - Metrics (ตัวชี้วัด ROI)',
    'E - Economic Buyer',
    'D - Decision Criteria',
    'D - Decision Process',
    'I - Identify Pain',
    'C - Champion',
  ];
  let mY = startY + 76;
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  meddicItems.forEach((it) => {
    ctx.fillText('• ' + it, 40 + cardW + 48, mY);
    mY += 28;
  });

  drawRoundRect(ctx, 40 + cardW + 48, startY + 258, 288, 72, 10, '#f8fafc', '#e2e8f0', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('จุดเด่น:', 40 + cardW + 58, startY + 278);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  wrapText(ctx, 'ละเอียดสูง เหมาะกับการขายระดับองค์กรขนาดใหญ่ วงจรการขายยาว 6-12 เดือน', 40 + cardW + 58, startY + 296, 268, 18);

  // 3. SPIN Card
  const sX = 40 + (cardW + 28) * 2;
  drawRoundRect(ctx, sX, startY, cardW, 360, 18, '#ffffff', '#cbd5e1', 1.5);
  drawRoundRect(ctx, sX, startY, cardW, 56, 18, '#f1f5f9');
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(sX, startY + 36, cardW, 20);
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.fillText('SPIN (Neil Rackham)', sX + 20, startY + 35);

  const spinItems = [
    'S - Situation Questions (คำถามสถานการณ์)',
    'P - Problem Questions (คำถามปัญหา)',
    'I - Implication Questions (คำถามผลกระทบ)',
    'N - Need-Payoff (คำถามคุณค่าความคุ้มทุน)',
  ];
  let spY = startY + 84;
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  spinItems.forEach((it) => {
    ctx.fillText('• ' + it, sX + 20, spY);
    spY += 34;
  });

  drawRoundRect(ctx, sX + 20, startY + 258, 288, 72, 10, '#f8fafc', '#e2e8f0', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('จุดเด่น:', sX + 30, startY + 278);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  wrapText(ctx, 'เน้นคำถามนำเพื่อให้ลูกค้าตระหนักถึงมูลค่าความเสียหายหากไม่ซื้อ ใช้ในการสนทนาเชิงลึก', sX + 30, startY + 296, 268, 18);

  return canvas.toDataURL('image/png');
}

/**
 * 5. Figure 2.5: สถาปัตยกรรม Context Injection และ RAG สำหรับการขาย
 */
export function generateFigure2_5_RAG(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 460;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 460);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 460, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 20, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('สถาปัตยกรรม Context Injection และ Retrieval-Augmented Generation (RAG) สำหรับงานขาย', 50, 52);

  const colW = 310;
  const startY = 90;

  // Column 1: Dynamic Data Store
  drawRoundRect(ctx, 40, startY, colW, 330, 16, '#ffffff', '#cbd5e1', 1.5);
  drawRoundRect(ctx, 40, startY, colW, 50, 16, '#f0fdf4');
  ctx.fillStyle = '#f0fdf4';
  ctx.fillRect(40, startY + 30, colW, 20);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#166534';
  ctx.fillText('1. Dynamic Data Store', 58, startY + 32);

  // Pills in Col 1
  const pills = [
    { text: '• แคตตาล็อกสินค้า & สเปกทางการ', bg: '#dcfce7', border: '#86efac', color: '#14532d' },
    { text: '• โควตาส่วนลดสูงสุด (5% - 15%)', bg: '#fef3c7', border: '#fde047', color: '#713f12' },
    { text: '• ประวัติการซื้อ & Customer LTV', bg: '#dbeafe', border: '#93c5fd', color: '#1e3a8a' },
  ];
  let pY = startY + 70;
  pills.forEach((p) => {
    drawRoundRect(ctx, 56, pY, colW - 32, 54, 10, p.bg, p.border, 1.2);
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = p.color;
    ctx.fillText(p.text, 68, pY + 32);
    pY += 66;
  });

  // Connector Arrow 1 -> 2
  drawArrow(ctx, 360, startY + 165, 385, startY + 165, '#6366f1');

  // Column 2: Context Injection Engine (Dark Purple Card)
  ctx.save();
  ctx.shadowColor = 'rgba(49, 46, 129, 0.25)';
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 6;
  drawRoundRect(ctx, 395, startY, colW, 330, 16, '#1e1b4b', '#4338ca', 2);
  ctx.restore();

  drawRoundRect(ctx, 395, startY, colW, 50, 16, '#312e81');
  ctx.fillStyle = '#312e81';
  ctx.fillRect(395, startY + 30, colW, 20);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#e0e7ff';
  ctx.fillText('2. Context Injection Engine', 415, startY + 32);

  const engineBlocks = [
    'สกัดความต้องการจากแชทล่าสุด',
    'คัดกรองสินค้าที่ตรงกับงบประมาณ',
    'แนบกฎเหล็ก System Prompt ควบคุม',
  ];
  let eY = startY + 70;
  engineBlocks.forEach((b) => {
    drawRoundRect(ctx, 412, eY, colW - 34, 54, 10, '#3730a3', '#4f46e5', 1);
    ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('⚡ ' + b, 424, eY + 32);
    eY += 66;
  });

  // Connector Arrow 2 -> 3
  drawArrow(ctx, 715, startY + 165, 740, startY + 165, '#6366f1');

  // Column 3: Grounded Generation
  drawRoundRect(ctx, 750, startY, colW, 330, 16, '#ffffff', '#cbd5e1', 1.5);
  drawRoundRect(ctx, 750, startY, colW, 50, 16, '#f0f9ff');
  ctx.fillStyle = '#f0f9ff';
  ctx.fillRect(750, startY + 30, colW, 20);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#0369a1';
  ctx.fillText('3. Grounded Generation', 768, startY + 32);

  const outBlocks = [
    { text: '✔ ราคาถูกต้องตรงระบบ 100%', sub: 'ไม่เกิดปัญหา Hallucination' },
    { text: '✔ ไม่เสนอส่วนลดเกินอำนาจ', sub: 'ควบคุมกำไรตามเกณฑ์บริษัท' },
    { text: '✔ มี Call-to-Action ปิดการขาย', sub: 'เร่งการนัดหมายและโอนเงิน' },
  ];
  let oY = startY + 70;
  outBlocks.forEach((o) => {
    drawRoundRect(ctx, 766, oY, colW - 32, 54, 10, '#f8fafc', '#e2e8f0', 1);
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.fillText(o.text, 780, oY + 24);
    ctx.font = '11.5px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(o.sub, 796, oY + 44);
    oY += 66;
  });

  return canvas.toDataURL('image/png');
}

/**
 * 6. Figure 2.6: แผนภาพกระแสการตัดสินใจคัดกรองและแบ่งระดับลูกค้ามุ่งหวัง (Decision Flow)
 */
export function generateFigure2_6_DecisionFlow(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 540);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 20, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('แผนภาพกระแสการตัดสินใจคัดกรองและแบ่งระดับลูกค้ามุ่งหวัง (Predictive Lead Scoring Decision Flow)', 50, 52);

  // Top Box: Inbound Lead
  ctx.save();
  ctx.shadowColor = 'rgba(15, 23, 42, 0.15)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  drawRoundRect(ctx, 350, 88, 400, 48, 14, '#0f172a', '#334155', 1.5);
  ctx.restore();
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('ลูกค้าใหม่ติดต่อเข้ามา (Inbound Lead จาก LINE / Ads)', 550, 118);

  // Arrow Down
  drawArrow(ctx, 550, 138, 550, 168, '#64748b');

  // Middle Box: BANT Evaluation
  drawRoundRect(ctx, 250, 172, 600, 54, 14, '#eef2ff', '#818cf8', 2);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#312e81';
  ctx.fillText('ประเมินคะแนน BANT (Budget 25% + Authority 25% + Need 30% + Timeline 20%)', 550, 204);
  ctx.textAlign = 'left';

  // Branch Arrows Down
  drawArrow(ctx, 550, 228, 550, 258, '#64748b');
  drawArrow(ctx, 380, 258, 200, 280, '#64748b');
  drawArrow(ctx, 550, 258, 550, 280, '#64748b');
  drawArrow(ctx, 720, 258, 900, 280, '#64748b');

  // 3 Outcome Boxes
  const cardW = 310;
  const startY = 285;

  // Box 1: HOT
  ctx.save();
  ctx.shadowColor = 'rgba(217, 119, 6, 0.15)';
  ctx.shadowBlur = 10;
  drawRoundRect(ctx, 50, startY, cardW, 210, 16, '#fffbeb', '#f59e0b', 2);
  ctx.restore();

  drawRoundRect(ctx, 115, startY + 16, 180, 32, 10, '#d97706');
  ctx.font = 'bold 14px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('Score ≥ 80 : HOT', 205, startY + 38);

  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#92400e';
  ctx.fillText('ต้องการซื้อด่วน / มีงบชัดเจน', 205, startY + 80);

  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#78350f';
  wrapText(ctx, 'ลูกค้าอยู่ในช่วงตัดสินใจ มีงบและอำนาจพร้อม จัดสรรพนักงานขายระดับท็อปเข้าดูแลทันที', 70, startY + 106, 270, 18);

  drawRoundRect(ctx, 70, startY + 154, 270, 38, 8, '#ffffff', '#d97706', 1.5);
  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#b45309';
  ctx.textAlign = 'center';
  ctx.fillText('📞 โทรติดต่อภายใน 10 นาที (SLA Urgent)', 205, startY + 178);

  // Box 2: WARM
  ctx.save();
  ctx.shadowColor = 'rgba(2, 132, 199, 0.15)';
  ctx.shadowBlur = 10;
  drawRoundRect(ctx, 395, startY, cardW, 210, 16, '#f0f9ff', '#38bdf8', 2);
  ctx.restore();

  drawRoundRect(ctx, 460, startY + 16, 180, 32, 10, '#0284c7');
  ctx.font = 'bold 14px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('Score 60-79 : WARM', 550, startY + 38);

  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#0369a1';
  ctx.fillText('สนใจ แต่เปรียบเทียบราคา/ขอเวลา', 550, startY + 80);

  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#0c4a6e';
  wrapText(ctx, 'มีปัญหาตรงกับโซลูชัน แต่อยู่ระหว่างพิจารณาคู่แข่งหรือรอรอบงบประมาณประจำไตรมาส', 415, startY + 106, 270, 18);

  drawRoundRect(ctx, 415, startY + 154, 270, 38, 8, '#ffffff', '#0284c7', 1.5);
  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#0369a1';
  ctx.textAlign = 'center';
  ctx.fillText('📄 ส่งสเปก + Follow-up ใน 24 ชม.', 550, startY + 178);

  // Box 3: COLD
  ctx.save();
  ctx.shadowColor = 'rgba(100, 116, 139, 0.15)';
  ctx.shadowBlur = 10;
  drawRoundRect(ctx, 740, startY, cardW, 210, 16, '#f8fafc', '#cbd5e1', 2);
  ctx.restore();

  drawRoundRect(ctx, 805, startY + 16, 180, 32, 10, '#64748b');
  ctx.font = 'bold 14px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('Score < 60 : COLD', 895, startY + 38);

  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('สอบถามข้อมูลทั่วไป / ยังไม่มีงบ', 895, startY + 80);

  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  wrapText(ctx, 'ติดต่อเข้ามาศึกษาเบื้องต้น ยังไม่มีกำหนดวันซื้อแน่นอน หรือไม่มีงบประมาณที่ตรงกับแพ็กเกจ', 760, startY + 106, 270, 18);

  drawRoundRect(ctx, 760, startY + 154, 270, 38, 8, '#ffffff', '#64748b', 1.5);
  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  ctx.textAlign = 'center';
  ctx.fillText('🤖 เข้าคอร์ส Nurturing อัตโนมัติ', 895, startY + 178);
  ctx.textAlign = 'left';

  return canvas.toDataURL('image/png');
}

/**
 * 7. Figure 2.9 (Mockup 1): Sales Executive Dashboard UI Mockup
 */
export function generateFigure2_9_MockupDashboard(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 620;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Dark Mockup Window Background
  drawRoundRect(ctx, 0, 0, 1100, 620, 20, '#090d16', '#1e293b', 2);

  // Top Window Header Bar with dots
  drawRoundRect(ctx, 0, 0, 1100, 48, 20, '#0f172a');
  ctx.fillRect(0, 30, 1100, 18); // Square bottom
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 48);
  ctx.lineTo(1100, 48);
  ctx.stroke();

  // Dots
  drawCircle(ctx, 24, 24, 6, '#ef4444');
  drawCircle(ctx, 42, 24, 6, '#f59e0b');
  drawCircle(ctx, 60, 24, 6, '#10b981');

  ctx.font = '12px monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Smart Closer AI - Executive Dashboard v2.0', 84, 28);

  drawRoundRect(ctx, 920, 12, 150, 24, 6, '#1e1b4b', '#4338ca');
  ctx.font = 'bold 10px monospace';
  ctx.fillStyle = '#a5b4fc';
  ctx.textAlign = 'center';
  ctx.fillText('● LIVE DASHBOARD', 995, 28);
  ctx.textAlign = 'left';

  // Urgent Alert Banner
  const alertGrad = ctx.createLinearGradient(20, 64, 1080, 64);
  alertGrad.addColorStop(0, '#451a03');
  alertGrad.addColorStop(1, '#1e1b4b');
  drawRoundRect(ctx, 24, 64, 1052, 48, 12, alertGrad, '#b45309', 1.5);

  drawRoundRect(ctx, 36, 74, 52, 28, 6, '#f59e0b');
  ctx.font = 'black 11px sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.textAlign = 'center';
  ctx.fillText('HOT', 62, 93);
  ctx.textAlign = 'left';

  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#fef3c7';
  ctx.fillText('พบ 3 ลูกค้ามุ่งหวังคะแนนเกิน 85 คะแนน ที่ยังไม่ได้รับการติดต่อเกิน 5 นาที!', 100, 94);

  drawRoundRect(ctx, 920, 74, 140, 28, 6, '#d97706');
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('โทรทันที (Auto-Dial)', 990, 92);
  ctx.textAlign = 'left';

  // 4 KPI Cards
  const kpis = [
    { label: 'ยอดขายปิดสำเร็จ (Won)', val: '฿ 1,248,500', trend: '+24.5% จากเดือนก่อน', color: '#10b981' },
    { label: 'อัตรา Conversion Rate', val: '32.8 %', trend: 'สูงกว่าค่าเฉลี่ย 11.2%', color: '#6366f1' },
    { label: 'ลูกค้าใน Pipeline', val: '42 ราย', trend: 'มูลค่ารวม ฿ 3.8M', color: '#f59e0b' },
    { label: 'ระยะเวลาตอบกลับเฉลี่ย', val: '2.4 นาที', trend: 'เร็วกว่าเกณฑ์ 76%', color: '#38bdf8' },
  ];

  const kpiW = 248;
  let kX = 24;
  kpis.forEach((k) => {
    drawRoundRect(ctx, kX, 124, kpiW, 90, 14, '#0f172a', '#1e293b', 1.5);
    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(k.label, kX + 16, 148);

    ctx.font = 'bold 22px monospace';
    ctx.fillStyle = k.color;
    ctx.fillText(k.val, kX + 16, 178);

    ctx.font = '10px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(k.trend, kX + 16, 198);

    kX += kpiW + 20;
  });

  // Funnel chart container (Left)
  drawRoundRect(ctx, 24, 230, 680, 366, 16, '#0f172a', '#1e293b', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('ท่อการขายและอัตราการแปลง (Pipeline Conversion Funnel)', 44, 260);

  const bars = [
    { label: 'Leads ใหม่ (184 ราย)', pct: 100, color: '#6366f1' },
    { label: 'คัดกรองผ่านเกณฑ์ BANT (132 ราย)', pct: 72, color: '#818cf8' },
    { label: 'จัดกลุ่ม Hot & Warm Deals (98 ราย)', pct: 53, color: '#d97706' },
    { label: 'เจรจาต่อรอง & แก้ข้อโต้แย้ง (64 ราย)', pct: 35, color: '#0284c7' },
    { label: 'ปิดการขายสำเร็จ (Won Deals - 44 ราย)', pct: 24, color: '#10b981' },
  ];
  let bY = 286;
  bars.forEach((b) => {
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText(b.label, 44, bY + 14);
    ctx.font = 'bold 12px monospace';
    ctx.fillStyle = b.color;
    ctx.textAlign = 'right';
    ctx.fillText(b.pct + '%', 680, bY + 14);
    ctx.textAlign = 'left';

    drawRoundRect(ctx, 44, bY + 22, 640, 16, 8, '#1e293b');
    drawRoundRect(ctx, 44, bY + 22, (640 * b.pct) / 100, 16, 8, b.color);
    bY += 56;
  });

  // Live Activity Queue (Right)
  drawRoundRect(ctx, 720, 230, 356, 366, 16, '#0f172a', '#1e293b', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('คิว Hot Leads ล่าสุด', 740, 260);

  const queue = [
    { name: 'คุณสมชาย (บจก. เคมีคอลไทย)', score: 94, budget: '฿120k', tag: 'HOT', time: '1 นาทีที่แล้ว' },
    { name: 'คุณพิมพ์ใจ (คลินิกความงาม)', score: 88, budget: '฿65k', tag: 'HOT', time: '3 นาทีที่แล้ว' },
    { name: 'คุณกฤษณะ (ค้าส่งอุปกรณ์)', score: 82, budget: '฿45k', tag: 'HOT', time: '5 นาทีที่แล้ว' },
    { name: 'คุณวิชัย (ร้านอาหารพรีเมียม)', score: 74, budget: '฿25k', tag: 'WARM', time: '12 นาทีที่แล้ว' },
  ];
  let qY = 280;
  queue.forEach((q) => {
    drawRoundRect(ctx, 736, qY, 324, 68, 10, '#1e293b', '#334155', 1);
    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#f1f5f9';
    ctx.fillText(q.name, 748, qY + 24);

    drawRoundRect(ctx, 990, qY + 10, 58, 20, 4, q.tag === 'HOT' ? '#d97706' : '#0284c7');
    ctx.font = 'bold 10px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(q.score + ' pts', 1019, qY + 24);
    ctx.textAlign = 'left';

    ctx.font = '11px monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('งบ: ' + q.budget + ' • ' + q.time, 748, qY + 48);
    qY += 76;
  });

  return canvas.toDataURL('image/png');
}

/**
 * 8. Figure 2.10 (Mockup 2): AI Copilot Interface Mockup
 */
export function generateFigure2_10_MockupCopilot(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 620;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  drawRoundRect(ctx, 0, 0, 1100, 620, 20, '#090d16', '#1e293b', 2);

  // Top Window Bar
  drawRoundRect(ctx, 0, 0, 1100, 48, 20, '#0f172a');
  ctx.fillRect(0, 30, 1100, 18);
  drawCircle(ctx, 24, 24, 6, '#ef4444');
  drawCircle(ctx, 42, 24, 6, '#f59e0b');
  drawCircle(ctx, 60, 24, 6, '#10b981');
  ctx.font = '12px monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Smart Closer AI - Real-time Copilot & Objection Rebuttal', 84, 28);

  // Left Chat Window (Width: 620)
  drawRoundRect(ctx, 24, 64, 620, 532, 16, '#0f172a', '#1e293b', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('บทสนทนาแชท (LINE OA): คุณภัทรพร (คลินิกทันตกรรมสไมล์)', 44, 96);

  // Message 1 (Customer)
  drawRoundRect(ctx, 44, 120, 420, 72, 14, '#1e293b', '#334155');
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('ลูกค้า • 10:24 น.', 58, 140);
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#f1f5f9';
  wrapText(ctx, 'สนใจโปรแกรมนะคะ แต่ราคา 49,000 ต่อปีแพงไปหน่อย คลินิกเปิดใหม่งบยังจำกัด มีส่วนลดพิเศษไหมคะ?', 58, 160, 390, 18);

  // AI Sentiment analysis bar
  drawRoundRect(ctx, 44, 204, 580, 42, 8, '#451a03', '#b45309');
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('⚠ ตรวจพบข้อโต้แย้ง: ราคาแพง (Price Objection) • ความตั้งใจซื้อ: 82% (High Intent)', 58, 230);

  // Message 2 (Sales Rep Copilot Recommended Reply)
  drawRoundRect(ctx, 160, 260, 464, 130, 14, '#312e81', '#6366f1');
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#c7d2fe';
  ctx.fillText('สคริปต์ที่ AI แนะนำ (คลิกเพื่อส่งทันที) • 10:25 น.', 176, 282);
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  wrapText(ctx, 'เข้าใจความกังวลเรื่องงบช่วงเริ่มต้นเลยค่ะคุณหมอ ปกติคลินิกสมาชิกใหม่จะเลือกแผนผ่อนชำระ 0% 10 เดือน ตกเพียงวันละ 160 บาท ซึ่งเทียบเท่ากับคนไข้มาตรวจเพิ่มแค่ 1 เคสก็คุ้มทุนแล้วค่ะ พิเศษถ้าคอนเฟิร์มภายในวันนี้ หนูสามารถขออนุมัติโมดูล SMS เตือนนัดมูลค่า 8,500 บาทให้ฟรีด้วยค่ะ สะดวกให้ส่งร่างใบเสนอราคาให้ดูเบื้องต้นไหมคะ?', 176, 304, 432, 20);

  // Quick Action Buttons
  drawRoundRect(ctx, 160, 404, 180, 36, 8, '#4338ca');
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('✓ ส่งข้อความนี้ทันที', 250, 427);

  drawRoundRect(ctx, 354, 404, 160, 36, 8, '#1e293b', '#475569');
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText('แก้ไขสคริปต์ก่อนส่ง', 434, 427);
  ctx.textAlign = 'left';

  // Right Side: Copilot Live Intelligence Panel (Width: 410)
  drawRoundRect(ctx, 660, 64, 416, 532, 16, '#0f172a', '#1e293b', 1.5);
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('AI Copilot Live Intelligence', 682, 96);

  // BANT Radar meters
  const bants = [
    { label: 'Budget Score (งบประมาณ)', score: 75, color: '#f59e0b' },
    { label: 'Authority Score (อำนาจหมอเจ้าของ)', score: 95, color: '#10b981' },
    { label: 'Need Score (ความจำเป็นลดงานแอดมิน)', score: 88, color: '#6366f1' },
    { label: 'Timeline Score (เริ่มใช้ใน 2 สัปดาห์)', score: 80, color: '#38bdf8' },
  ];
  let btY = 120;
  bants.forEach((bt) => {
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText(bt.label, 682, btY + 14);
    ctx.font = 'bold 12px monospace';
    ctx.fillStyle = bt.color;
    ctx.textAlign = 'right';
    ctx.fillText(bt.score + '/100', 1056, btY + 14);
    ctx.textAlign = 'left';

    drawRoundRect(ctx, 682, btY + 22, 374, 10, 5, '#1e293b');
    drawRoundRect(ctx, 682, btY + 22, (374 * bt.score) / 100, 10, 5, bt.color);
    btY += 46;
  });

  // Guardrails checklist
  drawRoundRect(ctx, 682, 320, 374, 140, 12, '#1e1b4b', '#4338ca');
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#c7d2fe';
  ctx.fillText('Grounded Guardrails (RAG Compliance):', 696, 344);

  const checks = [
    '✓ ส่วนลดอยู่ในเพดานโควตา (Max 15%)',
    '✓ แถมโมดูล SMS ตามสิทธิ์โปรโมชันเดือนนี้',
    '✓ ปิดท้ายด้วย Call-to-Action ขอส่งใบเสนอราคา',
  ];
  let chY = 372;
  checks.forEach((c) => {
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(c, 696, chY);
    chY += 26;
  });

  return canvas.toDataURL('image/png');
}

/**
 * 9. Figure 2.11 (Mockup 3): Kanban Pipeline Mockup
 */
export function generateFigure2_11_MockupKanban(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 620;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  drawRoundRect(ctx, 0, 0, 1100, 620, 20, '#090d16', '#1e293b', 2);

  // Header Bar
  drawRoundRect(ctx, 0, 0, 1100, 48, 20, '#0f172a');
  ctx.fillRect(0, 30, 1100, 18);
  drawCircle(ctx, 24, 24, 6, '#ef4444');
  drawCircle(ctx, 42, 24, 6, '#f59e0b');
  drawCircle(ctx, 60, 24, 6, '#10b981');
  ctx.font = '12px monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Smart Closer AI - Predictive Kanban Pipeline & Lead Prioritization', 84, 28);

  const cols = [
    {
      title: 'Leads เข้าใหม่ (New)',
      count: '6 ราย',
      color: '#6366f1',
      cards: [
        { name: 'คุณนันทนา (เอเจนซี่การตลาด)', value: '฿ 55,000', score: 'HOT 86', scoreColor: '#d97706' },
        { name: 'คุณเกรียงไกร (ร้านวัสดุก่อสร้าง)', value: '฿ 38,000', score: 'WARM 72', scoreColor: '#0284c7' },
      ],
    },
    {
      title: 'คัดกรอง BANT แล้ว (Qualified)',
      count: '8 ราย',
      color: '#0284c7',
      cards: [
        { name: 'คุณพัชรี (โรงเรียนกวดวิชา)', value: '฿ 85,000', score: 'HOT 92', scoreColor: '#d97706' },
        { name: 'คุณธีรพงศ์ (ศูนย์ซ่อมรถยนต์)', value: '฿ 42,000', score: 'WARM 68', scoreColor: '#0284c7' },
      ],
    },
    {
      title: 'แก้ข้อโต้แย้ง / เสนอราคา (Negotiating)',
      count: '5 ราย',
      color: '#d97706',
      cards: [
        { name: 'บจก. สยามโลจิสติกส์ (คุณเอก)', value: '฿ 180,000', score: 'HOT 94', scoreColor: '#d97706' },
        { name: 'คลินิกทันตกรรมสไมล์ (คุณหมอ)', value: '฿ 49,000', score: 'HOT 88', scoreColor: '#d97706' },
      ],
    },
    {
      title: 'ปิดการขายสำเร็จ (Won Deals)',
      count: '12 ราย',
      color: '#10b981',
      cards: [
        { name: 'บจก. เอเปกซ์ อินเตอร์เนชั่นแนล', value: '฿ 240,000', score: 'WON 100', scoreColor: '#10b981' },
        { name: 'คุณกัญญา (แบรนด์เครื่องสำอาง)', value: '฿ 75,000', score: 'WON 100', scoreColor: '#10b981' },
      ],
    },
  ];

  const colW = 246;
  let cX = 24;
  cols.forEach((c) => {
    drawRoundRect(ctx, cX, 64, colW, 532, 14, '#0f172a', '#1e293b', 1.5);

    // Column Header
    drawRoundRect(ctx, cX + 12, 76, colW - 24, 38, 8, '#1e293b');
    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(c.title, cX + 22, 100);

    drawRoundRect(ctx, cX + colW - 68, 84, 46, 22, 6, c.color);
    ctx.font = 'bold 10px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(c.count, cX + colW - 45, 99);
    ctx.textAlign = 'left';

    // Cards in Col
    let cdY = 126;
    c.cards.forEach((cd) => {
      drawRoundRect(ctx, cX + 12, cdY, colW - 24, 110, 10, '#1e1b4b', '#312e81', 1);

      ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
      ctx.fillStyle = '#f8fafc';
      ctx.fillText(cd.name, cX + 22, cdY + 28);

      ctx.font = 'bold 15px monospace';
      ctx.fillStyle = '#34d399';
      ctx.fillText(cd.value, cX + 22, cdY + 56);

      drawRoundRect(ctx, cX + colW - 98, cdY + 40, 76, 22, 6, cd.scoreColor);
      ctx.font = 'bold 10px monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(cd.score, cX + colW - 60, cdY + 55);
      ctx.textAlign = 'left';

      drawRoundRect(ctx, cX + 22, cdY + 74, colW - 44, 24, 6, '#0f172a');
      ctx.font = '10px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('⚡ แนะนำ: นัดโทรสาธิตระบบ', cX + 32, cdY + 90);

      cdY += 124;
    });

    cX += colW + 20;
  });

  return canvas.toDataURL('image/png');
}

/**
 * 10. Figure 2.12 (Mockup 4): Voice Closer Simulator Mockup
 */
export function generateFigure2_12_MockupVoice(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 620;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  drawRoundRect(ctx, 0, 0, 1100, 620, 20, '#090d16', '#1e293b', 2);

  // Top Bar
  drawRoundRect(ctx, 0, 0, 1100, 48, 20, '#0f172a');
  ctx.fillRect(0, 30, 1100, 18);
  drawCircle(ctx, 24, 24, 6, '#ef4444');
  drawCircle(ctx, 42, 24, 6, '#f59e0b');
  drawCircle(ctx, 60, 24, 6, '#10b981');
  ctx.font = '12px monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Smart Closer AI - Thai Conversational Voice Agent Simulator', 84, 28);

  // Active Call Status Center Box
  drawRoundRect(ctx, 350, 64, 400, 90, 16, '#1e1b4b', '#4338ca', 2);
  drawCircle(ctx, 380, 108, 12, '#10b981');
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('กำลังสนทนาสายสด: คุณวิศรุต (บจก. โมเดิร์นซัพพลาย)', 406, 102);
  ctx.font = '13px monospace';
  ctx.fillStyle = '#34d399';
  ctx.fillText('02:45 นาที • คุณภาพสัญญาณยอดเยี่ยม (Latency: 280ms)', 406, 124);

  // Waveform Visualizer
  drawRoundRect(ctx, 44, 168, 1012, 90, 14, '#0f172a', '#1e293b', 1.5);
  ctx.font = '11px monospace';
  ctx.fillStyle = '#64748b';
  ctx.fillText('AUDIO STREAM VISUALIZER (FULL-DUPLEX THAI STT / TTS)', 64, 192);

  // Draw audio wave bars
  let wX = 64;
  for (let i = 0; i < 60; i++) {
    const barH = 15 + Math.sin(i * 0.4) * 25 + Math.cos(i * 0.7) * 15;
    const grad = ctx.createLinearGradient(wX, 220 - barH / 2, wX, 220 + barH / 2);
    grad.addColorStop(0, '#818cf8');
    grad.addColorStop(1, '#4338ca');
    drawRoundRect(ctx, wX, 220 - barH / 2, 10, barH, 4, grad);
    wX += 16;
  }

  // Live Transcript Split View
  drawRoundRect(ctx, 44, 274, 490, 320, 14, '#0f172a', '#1e293b', 1.5);
  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText('ถอดเสียงสด (Customer Speech-to-Text):', 64, 302);
  drawRoundRect(ctx, 64, 318, 450, 80, 10, '#1e293b');
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#f1f5f9';
  wrapText(ctx, '"เราสนใจแพ็กเกจ Enterprise แต่ถ้าเกิดพนักงานใช้งานไม่เป็น ทางคุณมีอบรมให้ไหม หรือต้องจ่ายเพิ่ม?"', 78, 344, 420, 20);

  drawRoundRect(ctx, 566, 274, 490, 320, 14, '#0f172a', '#1e293b', 1.5);
  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('AI Voice Response (Text-to-Speech Output):', 586, 302);
  drawRoundRect(ctx, 586, 318, 450, 120, 10, '#1e1b4b', '#4338ca');
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  wrapText(ctx, '"สำหรับแพ็กเกจ Enterprise ทางเรามีบริการ Onboarding และอบรมทีมงานฟรีไม่มีค่าใช้จ่ายเพิ่มครับ พร้อมมี Dedicated Customer Success คอยดูแลตลอด 1 ปีเต็ม เพื่อให้ทีมงานใช้งานได้คล่องตัวที่สุดครับ"', 600, 344, 420, 22);

  return canvas.toDataURL('image/png');
}

/**
 * 11. Figure 2.3: แผนผังต้นไม้การวินิจฉัยและขจัดข้อโต้แย้ง (Cognitive Objection Resolution Tree)
 */
export function generateFigure2_3_ObjectionTree(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 490;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 490);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 490, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 20, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('แผนผังต้นไม้การวินิจฉัยและขจัดข้อโต้แย้งของลูกค้าเชิงจิตวิทยา (Cognitive Objection Resolution Tree)', 50, 52);

  // Trigger Box
  drawRoundRect(ctx, 250, 88, 600, 46, 12, '#0f172a', '#334155', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('TRIGGER EVENT: ตรวจจับข้อความโต้แย้งของลูกค้า (Customer Objection Detected)', 550, 117);
  ctx.textAlign = 'left';

  // Connector Arrows
  drawArrow(ctx, 550, 134, 550, 154, '#64748b');
  drawArrow(ctx, 400, 154, 200, 175, '#e11d48');
  drawArrow(ctx, 550, 154, 550, 175, '#d97706');
  drawArrow(ctx, 700, 154, 900, 175, '#0284c7');

  const cardW = 320;
  const startY = 180;

  // 1. Price Objection (Rose)
  ctx.save();
  ctx.shadowColor = 'rgba(225, 29, 72, 0.15)';
  ctx.shadowBlur = 10;
  drawRoundRect(ctx, 40, startY, cardW, 280, 16, '#fff1f2', '#fb7185', 2);
  ctx.restore();
  drawRoundRect(ctx, 40, startY, cardW, 46, 16, '#ffe4e6');
  ctx.fillStyle = '#ffe4e6';
  ctx.fillRect(40, startY + 26, cardW, 20);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#881337';
  ctx.fillText('1. ข้อโต้แย้งราคา (Price)', 56, startY + 30);
  drawRoundRect(ctx, 40 + cardW - 95, startY + 10, 80, 24, 6, '#e11d48');
  ctx.font = 'bold 10px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('พบบ่อย 42%', 40 + cardW - 55, startY + 26);
  ctx.textAlign = 'left';

  drawRoundRect(ctx, 56, startY + 58, cardW - 32, 48, 8, '#ffffff', '#fecdd3');
  ctx.font = 'italic 11.5px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('"ราคาแพงเกินไป", "งบไม่พอ", "เจ้าอื่นถูกกว่า"', 68, startY + 86);

  drawRoundRect(ctx, 56, startY + 116, cardW - 32, 148, 10, '#ffffff', '#fb7185', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#be123c';
  ctx.fillText('กลยุทธ์ AI Copilot:', 68, startY + 138);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('• ย้อนถาม ROI & Cost of Inaction', 68, startY + 162);
  ctx.fillText('• แตกราคาเป็นรายวัน (De-framing)', 68, startY + 188);
  ctx.fillText('• เสนอ Bundle สิทธิพิเศษ Fast-Decision', 68, startY + 214);
  ctx.fillText('• ชูผลลัพธ์คุ้มทุนใน 30 วัน', 68, startY + 240);

  // 2. Timing Objection (Amber)
  ctx.save();
  ctx.shadowColor = 'rgba(217, 119, 6, 0.15)';
  ctx.shadowBlur = 10;
  drawRoundRect(ctx, 390, startY, cardW, 280, 16, '#fffbeb', '#f59e0b', 2);
  ctx.restore();
  drawRoundRect(ctx, 390, startY, cardW, 46, 16, '#fef3c7');
  ctx.fillStyle = '#fef3c7';
  ctx.fillRect(390, startY + 26, cardW, 20);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#78350f';
  ctx.fillText('2. ข้อโต้แย้งเวลา (Delay)', 406, startY + 30);
  drawRoundRect(ctx, 390 + cardW - 95, startY + 10, 80, 24, 6, '#d97706');
  ctx.font = 'bold 10px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('พบบ่อย 35%', 390 + cardW - 55, startY + 26);
  ctx.textAlign = 'left';

  drawRoundRect(ctx, 406, startY + 58, cardW - 32, 48, 8, '#ffffff', '#fde68a');
  ctx.font = 'italic 11.5px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('"ขอคิดดูก่อนนะ", "ขอดูเดือนหน้า", "ยังไม่รีบ"', 418, startY + 86);

  drawRoundRect(ctx, 406, startY + 116, cardW - 32, 148, 10, '#ffffff', '#f59e0b', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#b45309';
  ctx.fillText('กลยุทธ์ AI Copilot:', 418, startY + 138);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('• Feel-Felt-Found Empathy แสดงความเข้าใจ', 418, startY + 162);
  ctx.fillText('• ขีดเส้นตายโควตาสิทธิพิเศษ (Scarcity Lock)', 418, startY + 188);
  ctx.fillText('• นัดเวลา Follow-up เฉพาะเจาะจงในปฏิทิน', 418, startY + 214);
  ctx.fillText('• ส่ง Case Study ผลลัพธ์คู่แข่งที่เริ่มก่อน', 418, startY + 240);

  // 3. Trust Objection (Sky)
  ctx.save();
  ctx.shadowColor = 'rgba(2, 132, 199, 0.15)';
  ctx.shadowBlur = 10;
  drawRoundRect(ctx, 740, startY, cardW, 280, 16, '#f0f9ff', '#38bdf8', 2);
  ctx.restore();
  drawRoundRect(ctx, 740, startY, cardW, 46, 16, '#e0f2fe');
  ctx.fillStyle = '#e0f2fe';
  ctx.fillRect(740, startY + 26, cardW, 20);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#0c4a6e';
  ctx.fillText('3. ความเชื่อมั่น/อำนาจ (Trust)', 756, startY + 30);
  drawRoundRect(ctx, 740 + cardW - 95, startY + 10, 80, 24, 6, '#0284c7');
  ctx.font = 'bold 10px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('พบบ่อย 23%', 740 + cardW - 55, startY + 26);
  ctx.textAlign = 'left';

  drawRoundRect(ctx, 756, startY + 58, cardW - 32, 48, 8, '#ffffff', '#bae6fd');
  ctx.font = 'italic 11.5px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('"ต้องถามผู้บริหารก่อน", "จะคุ้มไหม", "กลัวใช้ยาก"', 768, startY + 86);

  drawRoundRect(ctx, 756, startY + 116, cardW - 32, 148, 10, '#ffffff', '#38bdf8', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#0369a1';
  ctx.fillText('กลยุทธ์ AI Copilot:', 768, startY + 138);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('• ส่ง One-Page Summary เสนอหัวหน้า', 768, startY + 162);
  ctx.fillText('• อ้างอิง Case Study ธุรกิจกลุ่มเดียวกัน', 768, startY + 188);
  ctx.fillText('• รับประกันความพอใจ & ทดลองใช้ฟรี', 768, startY + 214);
  ctx.fillText('• ให้คำปรึกษาประกบคู่ Onboarding ฟรี', 768, startY + 240);

  return canvas.toDataURL('image/png');
}

/**
 * 12. Figure 2.4: สถาปัตยกรรม Transformer และ Inference Flow
 */
export function generateFigure2_4_TransformerFlow(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 430;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 430);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 430, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 20, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('สถาปัตยกรรม Transformer และโฟลว์การอนุมานคำตอบของ Large Language Models (LLMs)', 50, 52);

  const steps = [
    {
      num: '1',
      title: 'Input Tokens',
      desc: 'ข้อความแชทลูกค้า + Persona สคริปต์ปิดการขาย + บริบทสินค้า',
      tag: 'Tokenized Vectors',
      bg: '#f8fafc',
      border: '#cbd5e1',
      color: '#0f172a',
      badgeBg: '#334155',
    },
    {
      num: '2',
      title: 'Self-Attention',
      desc: 'คำนวณ Correlation ระหว่างงบประมาณ สเปก และความเร่งด่วน',
      tag: 'Q × K^T / √d_k',
      bg: '#eef2ff',
      border: '#818cf8',
      color: '#312e81',
      badgeBg: '#4338ca',
    },
    {
      num: '3',
      title: 'Feedforward Core',
      desc: 'ดึงคลังองค์ความรู้ด้านจิตวิทยาการเจรจาต่อรองและการปิดการขาย',
      tag: 'Gemini 2.5 Flash',
      bg: '#1e1b4b',
      border: '#6366f1',
      color: '#ffffff',
      badgeBg: '#4f46e5',
      dark: true,
    },
    {
      num: '4',
      title: 'Decoding & Pitch',
      desc: 'สังเคราะห์ข้อความตอบกลับที่สุภาพ จูงใจ และมี Call-to-Action ชัดเจน',
      tag: 'Top-p / Temp 0.3',
      bg: '#ecfdf5',
      border: '#34d399',
      color: '#064e3b',
      badgeBg: '#059669',
    },
  ];

  const colW = 232;
  const startY = 94;
  let sX = 40;

  steps.forEach((st, i) => {
    drawRoundRect(ctx, sX, startY, colW, 280, 16, st.bg, st.border, 2);

    // Number Badge
    drawCircle(ctx, sX + colW / 2, startY + 44, 20, st.badgeBg);
    ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(st.num, sX + colW / 2, startY + 50);

    // Title
    ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = st.color;
    ctx.fillText(st.title, sX + colW / 2, startY + 95);

    // Desc
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = st.dark ? '#c7d2fe' : '#475569';
    wrapText(ctx, st.desc, sX + 16, startY + 126, colW - 32, 20);

    // Tag
    drawRoundRect(ctx, sX + 24, startY + 224, colW - 48, 28, 8, st.dark ? '#312e81' : '#ffffff', st.border, 1);
    ctx.font = 'bold 11px monospace';
    ctx.fillStyle = st.dark ? '#a5b4fc' : '#334155';
    ctx.textAlign = 'center';
    ctx.fillText(st.tag, sX + colW / 2, startY + 242);
    ctx.textAlign = 'left';

    // Connector Arrow
    if (i < 3) {
      drawArrow(ctx, sX + colW + 6, startY + 140, sX + colW + 28, startY + 140, '#6366f1');
    }

    sX += colW + 36;
  });

  return canvas.toDataURL('image/png');
}

/**
 * 13. Figure 2.7: Voice Closer AI Pipeline
 */
export function generateFigure2_7_VoiceAgentPipeline(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 460;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 460);
  bgGrad.addColorStop(0, '#090d16');
  bgGrad.addColorStop(1, '#0f172a');
  drawRoundRect(ctx, 0, 0, 1100, 460, 24, bgGrad, '#1e293b', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 20, 1040, 50, 12, '#1e293b', '#334155', 1);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('สถาปัตยกรรมไปป์ไลน์ AI สนทนาเสียงภาษาไทยแบบเรียลไทม์ (Voice Closer AI Pipeline)', 50, 52);

  const nodes = [
    { title: '1. เสียงลูกค้าสด', sub: 'Microphone / WebRTC (Opus 48kHz)', color: '#38bdf8', bg: '#082f49', border: '#0284c7' },
    { title: '2. ตรวจจับเสียงพูด (VAD)', sub: 'Silero Voice Activity Detector (<30ms)', color: '#f59e0b', bg: '#451a03', border: '#d97706' },
    { title: '3. แปลงเสียงเป็นข้อความ (STT)', sub: 'Fast-Conformer Thai Acoustic Model', color: '#818cf8', bg: '#1e1b4b', border: '#6366f1' },
    { title: '4. สมองกลปิดการขาย (LLM)', sub: 'Gemini 2.5 Flash + BANT Context', color: '#34d399', bg: '#064e3b', border: '#10b981' },
    { title: '5. สังเคราะห์เสียงพูด (TTS)', sub: 'Natural Thai Neural Voice Generator', color: '#f472b6', bg: '#500724', border: '#db2777' },
    { title: '6. ลำโพง / ปลายสาย', sub: 'Ultra-low Latency Playback (<300ms)', color: '#a78bfa', bg: '#2e1065', border: '#8b5cf6' },
  ];

  const colW = 150;
  const startY = 100;
  let nX = 35;

  nodes.forEach((n, idx) => {
    drawRoundRect(ctx, nX, startY, colW, 280, 14, n.bg, n.border, 1.8);

    drawCircle(ctx, nX + colW / 2, startY + 40, 18, n.border);
    ctx.font = 'bold 14px monospace';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText((idx + 1).toString(), nX + colW / 2, startY + 45);

    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = n.color;
    ctx.fillText(n.title, nX + colW / 2, startY + 86);

    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#cbd5e1';
    wrapText(ctx, n.sub, nX + 12, startY + 120, colW - 24, 18);
    ctx.textAlign = 'left';

    if (idx < 5) {
      drawArrow(ctx, nX + colW + 4, startY + 140, nX + colW + 24, startY + 140, '#818cf8');
    }

    nX += colW + 28;
  });

  // Footer SLA Banner
  drawRoundRect(ctx, 35, 396, 1030, 44, 10, '#1e1b4b', '#4338ca', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('⚡ Total End-to-End Latency Target: < 300 - 500 Milliseconds (สนทนาต่อเนื่องเป็นธรรมชาติ ไม่เกิดจังหวะเดดแอร์)', 60, 424);

  return canvas.toDataURL('image/png');
}

/**
 * 14. Figure 2.8: Smart Closer AI Full-Stack Architecture
 */
export function generateFigure2_8_SystemArchitecture(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 1100, 540);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#ffffff');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bgGrad, '#e2e8f0', 2);

  // Title Bar
  drawRoundRect(ctx, 30, 20, 1040, 50, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('สถาปัตยกรรมระบบรวม Smart Closer AI Platform (End-to-End Full-Stack Architecture)', 50, 52);

  const layers = [
    {
      title: 'Presentation & UI Layer',
      sub: 'React 18 + Vite + Tailwind CSS + Lucide Icons + Web Speech Audio Visualizer',
      bg: '#eef2ff',
      border: '#818cf8',
      color: '#312e81',
      items: ['Executive Dashboard', 'AI Copilot Chat Dock', 'Predictive Kanban Board', 'Voice Call Simulator'],
    },
    {
      title: 'API & Orchestration Layer',
      sub: 'Node.js Express Server + Full-Duplex WebSockets + Server-Sent Events (SSE) + Security Guardrails',
      bg: '#f0f9ff',
      border: '#38bdf8',
      color: '#0369a1',
      items: ['Real-time Audio Stream Proxy', 'Lead Ingestion Gateway', 'Session & State Orchestrator', 'MHTML Document Exporter'],
    },
    {
      title: 'Intelligence & Core Model Layer',
      sub: 'Gemini 2.5 Flash Engine + Dynamic RAG Context Store + Thai Semantic NLP Parser',
      bg: '#1e1b4b',
      border: '#6366f1',
      color: '#ffffff',
      dark: true,
      items: ['BANT Weighted Scoring Model', 'Cognitive Objection Rebuttal Tree', 'Discount Guardrails Verifier', 'Next-Best Action Recommender'],
    },
    {
      title: 'Persistence & Enterprise Data Layer',
      sub: 'Cloud Relational Database / Firestore + High-Speed Redis Cache + Encrypted Audit Vault',
      bg: '#ecfdf5',
      border: '#34d399',
      color: '#064e3b',
      items: ['Product & Promotion Catalog', 'Lead CRM & Deal Pipeline Store', 'Call Transcripts & Audio Recordings', 'Sales Rep Performance Metrics'],
    },
  ];

  let lY = 86;
  layers.forEach((l, idx) => {
    drawRoundRect(ctx, 40, lY, 1020, 94, 14, l.bg, l.border, 1.8);

    // Left info
    ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = l.color;
    ctx.fillText(l.title, 56, lY + 28);
    ctx.font = '11.5px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = l.dark ? '#c7d2fe' : '#475569';
    ctx.fillText(l.sub, 56, lY + 48);

    // Right component blocks
    let bX = 400;
    l.items.forEach((item) => {
      drawRoundRect(ctx, bX, lY + 20, 145, 54, 8, l.dark ? '#312e81' : '#ffffff', l.border, 1);
      ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
      ctx.fillStyle = l.dark ? '#ffffff' : '#1e293b';
      wrapText(ctx, item, bX + 8, lY + 42, 130, 15);
      bX += 155;
    });

    if (idx < 3) {
      drawArrow(ctx, 550, lY + 94, 550, lY + 106, '#6366f1');
    }

    lY += 108;
  });

  return canvas.toDataURL('image/png');
}

// ==========================================
// CHAPTER 3 GENERATORS: SYSTEM WORKFLOW & ARCHITECTURE
// ==========================================

/**
 * ภาพประกอบที่ 3.1: สแกนและรับเข้าข้อมูลลูกค้า/บทสนทนา (Lead & Conversation Ingestion / Scan)
 */
export function generateFigure3_1_ScanLead(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#0f172a');
  bg.addColorStop(1, '#090d16');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#1e293b', 2);

  // App Window Header
  drawRoundRect(ctx, 24, 20, 1052, 44, 12, '#1e293b', '#334155', 1);
  drawCircle(ctx, 44, 42, 6, '#f43f5e');
  drawCircle(ctx, 62, 42, 6, '#f59e0b');
  drawCircle(ctx, 80, 42, 6, '#10b981');

  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#818cf8';
  ctx.fillText('SMART CLOSER AI : OMNICHANNEL INGESTION & CONVERSATION SCANNER', 105, 47);

  // Live Pill
  drawRoundRect(ctx, 920, 28, 140, 28, 14, 'rgba(16, 185, 129, 0.15)', '#10b981', 1);
  drawCircle(ctx, 936, 42, 4, '#10b981');
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#34d399';
  ctx.fillText('Live Ingestion Active', 948, 46);

  // Left Panel: Incoming Chat Stream
  drawRoundRect(ctx, 24, 80, 620, 430, 16, '#1e293b', '#334155', 1.5);
  
  // Left Panel Header
  drawRoundRect(ctx, 40, 96, 588, 36, 8, '#0f172a');
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#10b981';
  ctx.fillText('💬 LINE Official Account • แชทสดลูกค้าขาเข้า (Inbound Message)', 54, 118);
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('14:28:12 น.', 550, 118);

  // Customer Avatar & Chat Bubble
  drawCircle(ctx, 64, 170, 20, '#4f46e5');
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('นภ', 58, 174);

  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('คุณนภัสสร • ผู้จัดการฝ่ายจัดซื้อ บจก.สยามคอมเพล็กซ์', 96, 158);

  drawRoundRect(ctx, 96, 170, 500, 110, 14, '#334155', '#475569', 1);
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('"สวัสดีค่ะ สนใจระบบ Smart Closer AI สำหรับทีมเซลส์ 15 คนค่ะ', 116, 202);
  ctx.fillText('แต่ดูราคาแพ็กเกจ Enterprise ฿49,000 แล้วรู้สึกว่าค่อนข้างสูงกว่าเจ้าอื่น', 116, 226);
  ctx.fillText('อยากทราบว่าระบบคุ้มค่าอย่างไร และมีส่วนลดพิเศษอะไรบ้างไหมคะ?"', 116, 250);

  // Scanning Indicator Box
  drawRoundRect(ctx, 40, 305, 588, 85, 12, 'rgba(79, 70, 229, 0.2)', '#6366f1', 1.5);
  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('⚡ AI Real-time Scan & Semantic Parser (Token Latency: 18ms)', 58, 335);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#c7d2fe';
  ctx.fillText('ระบบกำลังตรวจจับ: คำถามราคา, จำนวนสิทธิ์ใช้งาน (Seats), ความกังวลเรื่อง ROI, และตัวเปรียบเทียบคู่แข่ง', 58, 362);

  // Status Bar
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Security: TLS 1.3 Encrypted • Source IP: Verified LINE Webhook Gateway', 40, 490);

  // Right Panel: Extracted Profile & Entities
  drawRoundRect(ctx, 660, 80, 416, 430, 16, '#1e293b', '#334155', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.fillText('🎯 ผลลัพธ์การสกัดข้อมูลโปรไฟล์ (Extracted Profile)', 680, 115);

  const entities = [
    { label: 'ชื่อลูกค้า', val: 'คุณนภัสสร', color: '#ffffff' },
    { label: 'ตำแหน่ง / บทบาท', val: 'ผู้จัดการฝ่ายจัดซื้อ (Decision Maker)', color: '#38bdf8' },
    { label: 'ประเภทธุรกิจ', val: 'B2B Wholesale & Distribution', color: '#e2e8f0' },
    { label: 'ขนาดทีมขาย', val: '15 ผู้ใช้งาน (15 Seats)', color: '#a78bfa' },
    { label: 'แพ็กเกจที่สนใจ', val: 'Enterprise Edition (฿49,000/ปี)', color: '#fbbf24' },
    { label: 'ประเภทข้อโต้แย้ง', val: 'Price Constraint (เทียบกับคู่แข่ง)', color: '#f43f5e' },
    { label: 'ระดับความสำคัญ', val: '🔥 High Priority (Hot Lead Candidate)', color: '#f43f5e' },
  ];

  entities.forEach((item, idx) => {
    const y = 145 + idx * 46;
    drawRoundRect(ctx, 680, y, 376, 38, 8, '#0f172a', '#334155', 1);
    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(item.label, 696, y + 23);
    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = item.color;
    ctx.fillText(item.val, 795, y + 23);
  });

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.2: จัดหมวดหมู่อัตโนมัติ (Auto Classification)
 */
export function generateFigure3_2_AutoClassification(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#f8fafc');
  bg.addColorStop(1, '#eef2ff');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#cbd5e1', 2);

  // Header Bar
  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#3730a3';
  ctx.fillText('AI COGNITIVE CLASSIFIER & MULTI-DIMENSIONAL INTENT DIAGNOSIS', 48, 54);

  drawRoundRect(ctx, 880, 32, 174, 32, 16, '#dcfce7', '#86efac', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#15803d';
  ctx.fillText('Confidence: 96.4%', 915, 52);

  // 3 Diagnostic Columns
  const cols = [
    {
      title: '1. ข้อโต้แย้งหลัก (Primary Objection)',
      badge: 'Price / Budget 98%',
      badgeBg: '#ffe4e6',
      badgeColor: '#e11d48',
      keywords: 'ตรวจพบคำ: "ราคาสูงกว่าเจ้าอื่น", "ค่อนข้างแพง", "มีส่วนลดไหม"',
      action: 'วินิจฉัยเชิงจิตวิทยา:',
      actionDesc: 'ลูกค้าไม่ได้ปฏิเสธสินค้า แต่กำลังทดสอบว่าราคาสมเหตุสมผลหรือไม่ และมีความกังวลเรื่องการแบกรับต้นทุนของทีม',
      remedy: 'กลยุทธ์แก้เกม: ใช้เทคนิค ROI De-framing แตกราคาเป็นรายวันต่อคน (คนละ 9 บาท/วัน)',
      color: '#e11d48',
      cardBg: '#fff1f2',
      border: '#fecdd3',
    },
    {
      title: '2. ข้อโต้แย้งรอง (Secondary Concern)',
      badge: 'Competitor Compare 88%',
      badgeBg: '#fef3c7',
      badgeColor: '#b45309',
      keywords: 'ตรวจพบคำ: "เทียบกับเจ้าอื่น", "สเปกฟีเจอร์", "ความคุ้มค่า"',
      action: 'วินิจฉัยเชิงจิตวิทยา:',
      actionDesc: 'ลูกค้ามีคู่แข่งในใจอยู่แล้ว และต้องการข้อมูลเชิงเปรียบเทียบที่มีน้ำหนัก เพื่อนำไปตอบคำถามเจ้านายหรือฝ่ายบัญชี',
      remedy: 'กลยุทธ์แก้เกม: นำเสนอตาราง Feature Matrix จุดแข็งที่คู่แข่งทำไม่ได้ พร้อมส่งเอกสารสรุป 1 หน้า',
      color: '#d97706',
      cardBg: '#fffbeb',
      border: '#fde68a',
    },
    {
      title: '3. อารมณ์และความพร้อม (State & Tone)',
      badge: 'Hesitant / High Interest 93%',
      badgeBg: '#e0e7ff',
      badgeColor: '#4338ca',
      keywords: 'ระดับอารมณ์: สุภาพ ลังเล แต่เปิดรับการเจรจา (High Receptivity)',
      action: 'วินิจฉัยเชิงจิตวิทยา:',
      actionDesc: 'ลูกค้าทักเข้ามาด้วยความกระตือรือร้น อยู่ใน "หน้าต่างแห่งโอกาส (Closing Window)" หากตอบกลับเร็วจะได้เปรียบ',
      remedy: 'กลยุทธ์แก้เกม: ต้องตอบกลับภายใน 10 นาทีเพื่อล็อกอารมณ์ พร้อมเสนอของแถม VIP Onboarding',
      color: '#4f46e5',
      cardBg: '#eef2ff',
      border: '#c7d2fe',
    }
  ];

  cols.forEach((col, idx) => {
    const x = 30 + idx * 356;
    drawRoundRect(ctx, x, 92, 330, 420, 16, '#ffffff', col.border, 2);

    // Col Header
    drawRoundRect(ctx, x + 12, 106, 306, 68, 12, col.cardBg, col.border, 1);
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = col.color;
    ctx.fillText(col.title, x + 24, 132);

    drawRoundRect(ctx, x + 24, 142, 180, 24, 12, col.badgeBg, col.border, 1);
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = col.badgeColor;
    ctx.fillText(col.badge, x + 36, 158);

    // Keywords
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.fillText('คำสำคัญที่สกัดได้:', x + 20, 200);
    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#475569';
    wrapText(ctx, col.keywords, x + 20, 218, 290, 18);

    // Action
    drawRoundRect(ctx, x + 16, 260, 298, 100, 10, '#f8fafc', '#e2e8f0', 1);
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText(col.action, x + 26, 280);
    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#64748b';
    wrapText(ctx, col.actionDesc, x + 26, 298, 276, 17);

    // Remedy Box
    drawRoundRect(ctx, x + 16, 375, 298, 115, 10, col.cardBg, col.border, 1);
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = col.color;
    ctx.fillText('แนวทางปฏิบัติตามทฤษฎีจิตวิทยา:', x + 26, 396);
    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#334155';
    wrapText(ctx, col.remedy, x + 26, 416, 276, 17);
  });

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.3: คลังความรู้และฐานข้อมูลลูกค้าแบบไดนามิก (Dynamic Sales Knowledge & Lead Vault)
 */
export function generateFigure3_3_KnowledgeVault(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#f8fafc');
  bg.addColorStop(1, '#f1f5f9');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#cbd5e1', 2);

  // Header Bar
  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('DYNAMIC SALES KNOWLEDGE REPOSITORY & PRODUCT CATALOG VAULT', 48, 54);

  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Active Knowledge Vectors: 150 Items • Synchronized Real-time', 670, 54);

  // 4 Vault Cards
  const cards = [
    {
      title: '1. แคตตาล็อกและสเปกสินค้า',
      sub: 'Product Catalog & Tier Specs',
      color: '#4f46e5',
      items: [
        '• Enterprise Edition (15 Seats)',
        '• Real-time Voice & Chat Copilot',
        '• API Integration LINE OA / CRM',
        '• Unlimited Audio Call Analysis',
        '• สัญญาการใช้งานรายปี (12 Months)'
      ],
      tag: 'Tier Spec'
    },
    {
      title: '2. กฎราคาและส่วนลดที่อนุมัติ',
      sub: 'Discount Matrix & Authority Limit',
      color: '#059669',
      items: [
        '• ราคาปกติ: ฿49,000 ต่อปี',
        '• ส่วนลดที่เซลส์อนุมัติได้เอง: สูงสุด 15%',
        '• ราคาหลังหักส่วนลด: ฿41,650',
        '• ของแถม: ฟรี VIP Onboarding ฿15,000',
        '• เงื่อนไข: ยืนยันภายในวันนี้'
      ],
      tag: 'Pricing Rules'
    },
    {
      title: '3. สคริปต์แก้เกม & ข้อมูล ROI',
      sub: 'Objection Playbook & Case Studies',
      color: '#d97706',
      items: [
        '• สูตรคำนวณ ROI: แตกเหลือ 9 บ./วัน/คน',
        '• เทคนิค Feel-Felt-Found เพื่อสร้างความเข้าใจ',
        '• Case Study: สยามค้าส่ง ยอดพุ่ง 65%',
        '• One-Page Proposal สำหรับเสนอบอร์ด',
        '• ตารางเปรียบเทียบ Feature Matrix'
      ],
      tag: 'Objection Rebuttal'
    },
    {
      title: '4. ข้อเสนอเร่งการตัดสินใจ',
      sub: 'Scarcity & Urgency Triggers',
      color: '#9333ea',
      items: [
        '• โควตาส่วนลดจำกัด 2 สิทธิ์สุดท้าย',
        '• อัปเกรด Cloud Storage ฟรี 100GB',
        '• ขยายการดูแลระดับ VIP ตลอด 24/7',
        '• ทดลองใช้งานฟรี 14 วันแรก',
        '• การันตีความพึงพอใจ คืนเงินใน 30 วัน'
      ],
      tag: 'Urgency Deal'
    }
  ];

  cards.forEach((card, idx) => {
    const x = 30 + idx * 266;
    drawRoundRect(ctx, x, 92, 246, 420, 16, '#ffffff', '#e2e8f0', 1.5);

    // Top Accent
    drawRoundRect(ctx, x, 92, 246, 6, 3, card.color);

    // Title
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = card.color;
    ctx.fillText(card.title, x + 16, 126);

    ctx.font = '10px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(card.sub, x + 16, 144);

    // Tag
    drawRoundRect(ctx, x + 16, 156, 110, 22, 6, '#f1f5f9', '#e2e8f0', 1);
    ctx.font = 'bold 10px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#475569';
    ctx.fillText(card.tag, x + 24, 171);

    // Item list
    card.items.forEach((it, i) => {
      const y = 205 + i * 54;
      drawRoundRect(ctx, x + 12, y, 222, 46, 8, '#f8fafc', '#e2e8f0', 1);
      ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
      ctx.fillStyle = '#334155';
      wrapText(ctx, it, x + 20, y + 20, 204, 16);
    });
  });

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.4: สรุปและประเมินระดับคะแนนความพร้อมของลูกค้า (Predictive Lead Scoring & Verification)
 */
export function generateFigure3_4_ScoringVerification(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#0f172a');
  bg.addColorStop(1, '#1e1b4b');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#334155', 2);

  // Header Bar
  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#1e293b', '#334155', 1);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('PREDICTIVE LEAD SCORING & BANT VERIFICATION DASHBOARD', 48, 54);

  // Left Big Score Card
  drawRoundRect(ctx, 30, 92, 340, 420, 20, '#1e293b', '#4338ca', 2);
  
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#818cf8';
  ctx.fillText('COMPOSITE BANT SCORE', 115, 130);

  // Score Number
  ctx.font = 'bold 78px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('88', 110, 220);

  ctx.font = '24px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('/100', 215, 205);

  // Status Badge
  drawRoundRect(ctx, 70, 250, 260, 40, 20, '#f43f5e', '#fda4af', 1);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('🔥 HOT LEAD (โอกาสปิด 82%)', 96, 275);

  // Recommendation Text
  drawRoundRect(ctx, 50, 315, 300, 160, 12, '#0f172a', '#334155', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText('ข้อเสนอแนะของระบบ AI:', 66, 342);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText('• ลูกค้ามีงบประมาณและอำนาจตัดสินใจชัดเจน', 66, 370);
  ctx.fillText('• แนะนำให้เสนอสคริปต์ Value De-framing ทันที', 66, 396);
  ctx.fillText('• มอบส่วนลดพิเศษ 15% พร้อมสิทธิ์ VIP Onboarding', 66, 422);
  ctx.fillText('• ควรโทรหรือตอบกลับภายใน 10 นาทีนี้', 66, 448);

  // Right BANT Details Panel
  drawRoundRect(ctx, 390, 92, 680, 420, 20, '#1e293b', '#334155', 1.5);
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText('การประเมิน 4 มิติสำคัญ (BANT Framework Breakdown)', 414, 126);

  const bantItems = [
    {
      dim: 'B - Budget (งบประมาณ)',
      score: '85/100',
      pct: 0.85,
      color: '#6366f1',
      desc: 'มีงบประมาณระดับ Enterprise แต่ต้องการเห็นผลตอบแทน ROI และความคุ้มค่าที่ชัดเจน'
    },
    {
      dim: 'A - Authority (อำนาจตัดสินใจ)',
      score: '92/100',
      pct: 0.92,
      color: '#10b981',
      desc: 'เป็นผู้จัดการฝ่ายจัดซื้อ มีอำนาจคัดเลือกและนำเสนอตรงต่อกรรมการผู้จัดการ'
    },
    {
      dim: 'N - Need (ความต้องการเร่งด่วน)',
      score: '95/100',
      pct: 0.95,
      color: '#a855f7',
      desc: 'ต้องการเครื่องมือช่วยทีมขาย 15 คน ปิดการขายเร็วขึ้น และแก้ปัญหาลูกค้าถามราคาแล้วเงียบหาย'
    },
    {
      dim: 'T - Timeline (กรอบเวลาการใช้งาน)',
      score: '80/100',
      pct: 0.80,
      color: '#f59e0b',
      desc: 'ต้องการนำระบบมาเริ่มทดลองใช้งานและ Onboarding ให้ทีมขายภายใน 1-2 สัปดาห์นี้'
    }
  ];

  bantItems.forEach((b, idx) => {
    const y = 150 + idx * 86;
    drawRoundRect(ctx, 414, y, 632, 72, 12, '#0f172a', '#334155', 1);

    // Title & Score
    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(b.dim, 432, y + 26);

    ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = b.color;
    ctx.fillText(b.score, 970, y + 26);

    // Progress bar
    drawRoundRect(ctx, 432, y + 36, 594, 8, 4, '#1e293b');
    drawRoundRect(ctx, 432, y + 36, 594 * b.pct, 8, 4, b.color);

    // Description
    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(b.desc, 432, y + 60);
  });

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.5: ค้นหากลยุทธ์จิตวิทยาและเสนอแนะสคริปต์ปิดการขาย (Cognitive Strategy & Pitch Recommendation)
 */
export function generateFigure3_5_PitchRecommendation(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#f8fafc');
  bg.addColorStop(1, '#eef2ff');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#cbd5e1', 2);

  // Header Bar
  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#3730a3';
  ctx.fillText('AI NEXT-BEST ACTION & PSYCHOLOGY-BACKED CLOSING PITCHES', 48, 54);

  drawRoundRect(ctx, 880, 32, 174, 32, 16, '#e0e7ff', '#c7d2fe', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#4338ca';
  ctx.fillText('3 Strategies Generated', 905, 52);

  // 1. Recommended Best Pitch Card (Big)
  drawRoundRect(ctx, 30, 88, 1040, 175, 16, '#ecfdf5', '#10b981', 2);
  
  // Tag
  drawRoundRect(ctx, 48, 104, 190, 26, 13, '#10b981');
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('★ แนะนำสูงสุด (Best Match 94%)', 58, 121);

  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#065f46';
  ctx.fillText('กลยุทธ์: Value & ROI De-framing (แตกราคาเป็นรายวัน + รับประกันคืนทุน)', 255, 122);

  // Copy button
  drawRoundRect(ctx, 920, 104, 130, 32, 8, '#10b981');
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('คัดลอกสคริปต์ ➜', 940, 125);

  // Script text box
  drawRoundRect(ctx, 48, 142, 1002, 105, 12, '#ffffff', '#a7f3d0', 1);
  ctx.font = '13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.fillText('"เข้าใจเลยค่ะคุณนภัสสร หากมองภาพรวมยอด ฿49,000 อาจดูเป็นเงินก้อน แต่หากเฉลี่ยสำหรับทีมขาย 15 คน จะตกเพียงคนละ 9 บาทต่อวัน เท่านั้นค่ะ', 68, 172);
  ctx.fillText('ซึ่งหากระบบช่วยให้ทีมปิดดีลเพิ่มได้เพียงแค่ 1 ดีลต่อเดือน ก็สามารถคืนทุนค่าระบบได้ทั้งหมดในเดือนแรกแล้วค่ะ', 68, 198);
  ctx.fillText('พิเศษสำหรับวันนี้ เรามีแถมฟรี VIP Onboarding มูลค่า ฿15,000 ให้ด้วยนะคะ สะดวกให้เปิดใช้งานสิทธิ์นี้เลยไหมคะ?"', 68, 224);

  // 2. Option 2: Feel-Felt-Found
  drawRoundRect(ctx, 30, 275, 1040, 110, 14, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.fillText('ตัวเลือกที่ 2: Feel-Felt-Found Empathy (แสดงความเข้าใจ + อ้างอิงเคสธุรกิจคล้ายกัน)', 48, 302);

  drawRoundRect(ctx, 930, 287, 120, 28, 6, '#f1f5f9', '#cbd5e1', 1);
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('คัดลอกสคริปต์', 955, 305);

  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('"หลายบริษัทในกลุ่มค้าส่งตอนแรกก็กังวลเรื่องงบประมาณเหมือนคุณนภัสสรเลยค่ะ แต่หลังจากเริ่มทดลองใช้เพียง 3 สัปดาห์ อัตราการปิดดีลเร็วขึ้นถึง 65%', 48, 335);
  ctx.fillText('ทำให้ยอดขายเติบโตเกินงบระบบไปหลายเท่าค่ะ ทางเรามีเคสสรุป 1 หน้าให้คุณนภัสสรส่งให้ผู้บริหารดูด้วยนะคะ"', 48, 360);

  // 3. Option 3: Scarcity & Fast-Decision
  drawRoundRect(ctx, 30, 398, 1040, 110, 14, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e293b';
  ctx.fillText('ตัวเลือกที่ 3: Scarcity & Fast-Decision Discount (ล็อกสิทธิ์โควตาส่วนลดด่วน)', 48, 425);

  drawRoundRect(ctx, 930, 410, 120, 28, 6, '#f1f5f9', '#cbd5e1', 1);
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('คัดลอกสคริปต์', 955, 428);

  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('"ถ้าคุณนภัสสรสามารถยืนยันภายในวันนี้ ทางผู้บริหารอนุมัติส่วนลดพิเศษให้ 15% ทันที เหลือเพียง ฿41,650 พร้อมสิทธิ์ใช้งานล่วงหน้า 14 วันก่อนตัดรอบบิลค่ะ', 48, 458);
  ctx.fillText('โควตานี้เหลือ 2 สิทธิ์สุดท้ายของเดือนนี้แล้วค่ะ ให้ทางทีมออกใบเสนอราคาสรุปเลยนะคะ?"', 48, 483);

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.6: นำสคริปต์ไปใช้ปิดการขายจริงและบันทึกผลสำเร็จ (Closing Execution & Deal Conversion)
 */
export function generateFigure3_6_DealConversion(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#064e3b');
  bg.addColorStop(0.5, '#0f172a');
  bg.addColorStop(1, '#1e1b4b');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#10b981', 2);

  // Ribbon Header
  drawRoundRect(ctx, 30, 24, 1040, 90, 16, 'rgba(16, 185, 129, 0.15)', '#10b981', 1.5);
  
  // Big Check Icon Circle
  drawCircle(ctx, 80, 69, 28, '#10b981');
  ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('✓', 68, 79);

  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#34d399';
  ctx.fillText('DEAL CONVERSION SUCCESSFUL • STATUS: CLOSED WON 🎉', 125, 54);

  ctx.font = 'bold 22px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('ปิดการขายสำเร็จ! คุณนภัสสร ยืนยันสั่งซื้อแพ็กเกจ Enterprise Edition', 125, 84);

  // Right Total Box
  drawRoundRect(ctx, 840, 36, 210, 66, 12, '#064e3b', '#34d399', 1);
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a7f3d0';
  ctx.fillText('มูลค่าคำสั่งซื้อที่เกิดขึ้น', 860, 58);
  ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#6ee7b7';
  ctx.fillText('฿41,650.00', 860, 88);

  // 3 Detail Cards
  const cards = [
    {
      title: '⏱ ระยะเวลาปิดดีลรวดเร็ว',
      metric: '12 นาที 40 วิ',
      sub: 'เร็วขึ้นกว่าเดิม 65%',
      desc: 'ลดระยะเวลาจากการตัดสินใจแบบเดิมเฉลี่ย 48 ชั่วโมง เหลือเพียง 12 นาทีด้วยสคริปต์สลายข้อโต้แย้งทันที'
    },
    {
      title: '🎯 สคริปต์ที่ใช้สำเร็จ',
      metric: 'Value De-framing',
      sub: 'ROI Per-Day Breakdown',
      desc: 'ลูกค้าตอบรับหลังได้ยินการแตกราคาเฉลี่ยวันละ 9 บาท และโควตาของแถม VIP Onboarding'
    },
    {
      title: '🔄 ซิงค์ข้อมูลอัตโนมัติ',
      metric: '100% Synced',
      sub: 'CRM & Accounting Live',
      desc: 'ออกใบแจ้งหนี้อัตโนมัติ ซิงค์เข้าฐานข้อมูล CRM และสร้างตารางนัดหมาย Kick-off ทางปฏิทินทันที'
    }
  ];

  cards.forEach((c, idx) => {
    const x = 30 + idx * 356;
    drawRoundRect(ctx, x, 130, 330, 260, 16, '#0f172a', '#334155', 1.5);

    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#34d399';
    ctx.fillText(c.title, x + 20, 165);

    ctx.font = 'bold 30px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(c.metric, x + 20, 215);

    drawRoundRect(ctx, x + 20, 230, 180, 24, 12, 'rgba(16, 185, 129, 0.2)', '#10b981', 1);
    ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#6ee7b7';
    ctx.fillText(c.sub, x + 30, 246);

    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#94a3b8';
    wrapText(ctx, c.desc, x + 20, 280, 290, 18);
  });

  // Footer User Feedback
  drawRoundRect(ctx, 30, 410, 1040, 95, 14, '#1e293b', '#334155', 1);
  ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('⭐️ ความพึงพอใจของพนักงานขาย (Rep Rating: 5/5):', 50, 442);
  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.fillText('"สคริปต์ของ Smart Closer AI แนะนำคำพูดได้ตรงจุดมาก ลูกค้าไม่รู้สึกว่ากำลังถูกกดดัน แต่รู้สึกว่าได้รับข้อเสนอที่คุ้มค่าจริงๆ"', 50, 470);

  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Audit Ref: SC-DEAL-2026-884 • Verified by Smart Closer Sales Engine', 620, 442);

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.7: สถาปัตยกรรมระบบ 4 ชั้น
 */
export const generateFigure3_7_SystemArchitecture = generateFigure2_8_SystemArchitecture;

/**
 * ภาพประกอบที่ 3.8: DFD Diagram
 */
export function generateFigure3_8_DataFlowDiagram(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#0f172a');
  bg.addColorStop(1, '#1e293b');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#334155', 2);

  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#1e293b', '#334155', 1);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#818cf8';
  ctx.fillText('DATA FLOW DIAGRAM (DFD LEVEL 0 & LEVEL 1 CONTEXT DIAGRAM)', 48, 54);

  // Entities
  // 1. Sales Rep
  drawRoundRect(ctx, 50, 160, 200, 140, 16, '#1e1b4b', '#6366f1', 2);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('ผู้ใช้งาน / พนักงานขาย', 78, 200);
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('(Sales Representative)', 88, 225);
  ctx.fillText('นำเข้าข้อมูล / ใช้งานสคริปต์', 75, 255);

  // 2. Center System
  drawRoundRect(ctx, 420, 130, 260, 200, 24, '#4338ca', '#818cf8', 2);
  ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('PROCESS 0', 495, 175);
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#fef08a';
  ctx.fillText('Smart Closer AI Core', 465, 210);
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#e0e7ff';
  ctx.fillText('วิเคราะห์ข้อโต้แย้ง, BANT Scoring', 460, 245);
  ctx.fillText('& สังเคราะห์สคริปต์ปิดการขาย', 468, 270);

  // 3. External AI Engine
  drawRoundRect(ctx, 850, 160, 200, 140, 16, '#3b0764', '#a855f7', 2);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('โมเดลปัญญาประดิษฐ์', 890, 200);
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#e9d5ff';
  ctx.fillText('(Gemini 2.5 Flash)', 900, 225);
  ctx.fillText('Generative Sales AI API', 885, 255);

  // Arrows
  drawArrow(ctx, 250, 210, 420, 210, '#818cf8');
  ctx.font = 'bold 11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('แชท/เสียง/ข้อมูลลูกค้า ➜', 270, 195);

  drawArrow(ctx, 420, 250, 250, 250, '#34d399');
  ctx.fillStyle = '#6ee7b7';
  ctx.fillText('⬅ สคริปต์ปิดการขาย & BANT', 260, 275);

  drawArrow(ctx, 680, 210, 850, 210, '#c084fc');
  ctx.fillStyle = '#e9d5ff';
  ctx.fillText('RAG Context & Prompts ➜', 690, 195);

  drawArrow(ctx, 850, 250, 680, 250, '#fbbf24');
  ctx.fillStyle = '#fde047';
  ctx.fillText('⬅ ผลลัพธ์การอนุมานคำตอบ', 695, 275);

  // 3 Sub-Processes at bottom
  const subs = [
    { num: '1.0', name: 'Lead Ingestion & Scan', desc: 'รับข้อมูลแชท/เสียง คัดกรองและสกัดเอนทิตี' },
    { num: '2.0', name: 'Objection & BANT Engine', desc: 'จำแนกข้อโต้แย้ง 3 มิติ และคำนวณคะแนน' },
    { num: '3.0', name: 'Pitch Synthesis & Close', desc: 'สังเคราะห์สคริปต์ตามหลักจิตวิทยาและปิดดีล' }
  ];

  subs.forEach((s, idx) => {
    const x = 50 + idx * 346;
    drawRoundRect(ctx, x, 370, 310, 120, 14, '#1e293b', '#334155', 1);
    drawRoundRect(ctx, x + 16, 386, 36, 24, 6, '#4f46e5');
    ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(s.num, x + 24, 403);

    ctx.font = 'bold 13px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#f8fafc';
    ctx.fillText(s.name, x + 62, 403);

    ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = '#94a3b8';
    wrapText(ctx, s.desc, x + 16, 435, 278, 18);
  });

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.9: Use Case Diagram
 */
export function generateFigure3_9_UseCaseDiagram(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#f8fafc');
  bg.addColorStop(1, '#f1f5f9');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#cbd5e1', 2);

  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('UML USE CASE DIAGRAM : SMART CLOSER AI ACTORS & SYSTEM BOUNDARY', 48, 54);

  // Left Actor: Sales Rep
  drawRoundRect(ctx, 50, 140, 180, 280, 16, '#e0e7ff', '#6366f1', 2);
  drawCircle(ctx, 140, 190, 26, '#4f46e5');
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Rep', 128, 195);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('พนักงานขาย', 105, 245);
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#4338ca';
  ctx.fillText('(Sales Representative)', 80, 270);
  ctx.fillText('นักเรียน ปวช.3 ธุรกิจดิจิทัล', 76, 300);

  // Right Actor: Admin / AI
  drawRoundRect(ctx, 870, 140, 180, 280, 16, '#f3e8ff', '#a855f7', 2);
  drawCircle(ctx, 960, 190, 26, '#7e22ce');
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('AI', 952, 195);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#581c87';
  ctx.fillText('ผู้ดูแล / AI Engine', 915, 245);
  ctx.font = '11px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#6b21a8';
  ctx.fillText('(System Admin & Gemini)', 885, 270);
  ctx.fillText('จัดการระบบและฐานความรู้', 895, 300);

  // Center Boundary
  drawRoundRect(ctx, 260, 95, 580, 410, 16, '#ffffff', '#cbd5e1', 2);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('[SYSTEM BOUNDARY: SMART CLOSER AI PLATFORM]', 380, 122);

  const ucs = [
    'UC-01: เข้าสู่ระบบตามบทบาทผู้ใช้ (Role Authentication)',
    'UC-02: รับเข้าข้อมูลลูกค้าและแชทสนทนา (Lead Ingestion & Scan)',
    'UC-03: ตรวจจับและวินิจฉัยข้อโต้แย้งอัตโนมัติ (Objection Diagnosis)',
    'UC-04: คำนวณและดูคะแนนความพร้อม BANT Score (Lead Scoring)',
    'UC-05: ขอรับสคริปต์ปิดการขายและปรับแต่งข้อความ (Pitch Generation)',
    'UC-06: บันทึกผลลัพธ์การปิดดีลและการชำระเงิน (Deal Conversion & Log)',
    'UC-07: จัดการแคตตาล็อกสินค้า กฎส่วนลด และรายงานผล (Admin Management)'
  ];

  ucs.forEach((u, idx) => {
    const y = 140 + idx * 50;
    drawRoundRect(ctx, 280, y, 540, 38, 19, idx === 6 ? '#faf5ff' : '#f8fafc', idx === 6 ? '#d8b4fe' : '#e2e8f0', 1);
    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
    ctx.fillStyle = idx === 6 ? '#6b21a8' : '#1e293b';
    ctx.fillText(u, 300, y + 24);
  });

  return canvas.toDataURL('image/png');
}

/**
 * ภาพประกอบที่ 3.10: Database ERD
 */
export function generateFigure3_10_DatabaseERD(): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1100;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const bg = ctx.createLinearGradient(0, 0, 1100, 540);
  bg.addColorStop(0, '#f8fafc');
  bg.addColorStop(1, '#f1f5f9');
  drawRoundRect(ctx, 0, 0, 1100, 540, 24, bg, '#cbd5e1', 2);

  drawRoundRect(ctx, 30, 24, 1040, 48, 12, '#ffffff', '#e2e8f0', 1.5);
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#1e1b4b';
  ctx.fillText('ENTITY-RELATIONSHIP DIAGRAM (ERD) & DATA ARCHITECTURE', 48, 54);

  // 3 Tables
  // 1. Users Table
  drawRoundRect(ctx, 30, 95, 320, 360, 14, '#ffffff', '#6366f1', 2);
  drawRoundRect(ctx, 30, 95, 320, 40, 12, '#4f46e5');
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('USERS (ผู้ใช้งาน / พนักงานขาย)', 50, 122);

  const uFields = [
    'PK  user_id : UUID',
    '    username : VARCHAR(50)',
    '    email : VARCHAR(100) UNIQUE',
    '    role : ENUM(Admin, SalesRep)',
    '    max_discount_limit : INT (15%)',
    '    created_at : TIMESTAMP'
  ];
  uFields.forEach((f, i) => {
    ctx.font = (i === 0) ? 'bold 11px monospace' : '11px monospace';
    ctx.fillStyle = (i === 0) ? '#4f46e5' : '#334155';
    ctx.fillText(f, 50, 165 + i * 40);
  });

  // 2. Leads & Conversations Table
  drawRoundRect(ctx, 390, 95, 320, 360, 14, '#ffffff', '#a855f7', 2);
  drawRoundRect(ctx, 390, 95, 320, 40, 12, '#9333ea');
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('LEADS_CONVERSATIONS (บทสนทนา)', 410, 122);

  const lFields = [
    'PK  lead_id : UUID',
    'FK  assigned_rep_id : UUID (Users)',
    '    customer_name : VARCHAR(100)',
    '    source_channel : VARCHAR(30)',
    '    bant_score : INT (0-100)',
    '    primary_objection : VARCHAR(50)',
    '    lead_grade : ENUM(Hot,Warm,Cold)',
    '    created_at : TIMESTAMP'
  ];
  lFields.forEach((f, i) => {
    ctx.font = (i === 0 || i === 1) ? 'bold 11px monospace' : '11px monospace';
    ctx.fillStyle = (i === 0) ? '#9333ea' : (i === 1 ? '#4f46e5' : '#334155');
    ctx.fillText(f, 410, 160 + i * 35);
  });

  // 3. Deals & Conversions Table
  drawRoundRect(ctx, 750, 95, 320, 360, 14, '#ffffff', '#10b981', 2);
  drawRoundRect(ctx, 750, 95, 320, 40, 12, '#059669');
  ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('DEALS_CONVERSIONS (การปิดการขาย)', 770, 122);

  const dFields = [
    'PK  deal_id : UUID',
    'FK  lead_id : UUID (Leads)',
    '    package_name : VARCHAR(100)',
    '    deal_value : DECIMAL(10,2)',
    '    discount_applied : DECIMAL(5,2)',
    '    winning_script : TEXT',
    '    status : ENUM(ClosedWon, Lost)',
    '    closed_at : TIMESTAMP'
  ];
  dFields.forEach((f, i) => {
    ctx.font = (i === 0 || i === 1) ? 'bold 11px monospace' : '11px monospace';
    ctx.fillStyle = (i === 0) ? '#059669' : (i === 1 ? '#9333ea' : '#334155');
    ctx.fillText(f, 770, 160 + i * 35);
  });

  // Cardinality Note
  drawRoundRect(ctx, 30, 475, 1040, 45, 10, '#ffffff', '#cbd5e1', 1);
  ctx.font = 'bold 12px -apple-system, BlinkMacSystemFont, "Sarabun", sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('ความสัมพันธ์เชิงข้อมูล: USERS (1) ──── (N) LEADS_CONVERSATIONS (1) ──── (1) DEALS_CONVERSIONS', 250, 503);

  return canvas.toDataURL('image/png');
}

/**
 * Universal Image Generator by Figure Number
 */
export function getGeneratedFigureImage(figureNumberOrId: string): string | null {
  const norm = figureNumberOrId.toLowerCase().trim();

  // Figure 2.1 Sales Funnel
  if (norm.includes('2.1') && !norm.includes('2.1-ก') && !norm.includes('2.1.1') && !norm.includes('2.11') && !norm.includes('2.12') && !norm.includes('2.10')) {
    return generateFigure2_1();
  }

  // Section 2.1.1 Evolution (2.1-ก)
  if (norm.includes('2.1-ก') || norm.includes('2.1.1') || norm.includes('evolution')) {
    return generateFigure2_1_Evolution();
  }

  // Section 2.2.1 BANT 4 Dimensions (2.2-ก)
  if (norm.includes('2.2-ก') || norm.includes('2.2.1') || norm.includes('bant')) {
    return generateFigure2_2_BANT();
  }

  // Figure 2.2 Framework Comparison
  if (norm.includes('2.2') && !norm.includes('2.2-ก') && !norm.includes('2.2.1') && !norm.includes('2.12')) {
    return generateFigure2_2_Comparison();
  }

  // Figure 2.3 Objection Tree
  if (norm.includes('2.3')) {
    return generateFigure2_3_ObjectionTree();
  }

  // Figure 2.4 Transformer Flow
  if (norm.includes('2.4')) {
    return generateFigure2_4_TransformerFlow();
  }

  // Figure 2.5 RAG
  if (norm.includes('2.5')) {
    return generateFigure2_5_RAG();
  }

  // Figure 2.6 Decision Flow
  if (norm.includes('2.6')) {
    return generateFigure2_6_DecisionFlow();
  }

  // Figure 2.7 Voice Closer Pipeline
  if (norm.includes('2.7')) {
    return generateFigure2_7_VoiceAgentPipeline();
  }

  // Figure 2.8 System Architecture
  if (norm.includes('2.8')) {
    return generateFigure2_8_SystemArchitecture();
  }

  // Figure 2.9 Mockup 1: Dashboard
  if (norm.includes('2.9')) {
    return generateFigure2_9_MockupDashboard();
  }

  // Figure 2.10 Mockup 2: Copilot
  if (norm.includes('2.10')) {
    return generateFigure2_10_MockupCopilot();
  }

  // Figure 2.11 Mockup 3: Kanban
  if (norm.includes('2.11')) {
    return generateFigure2_11_MockupKanban();
  }

  // Figure 2.12 Mockup 4: Voice
  if (norm.includes('2.12')) {
    return generateFigure2_12_MockupVoice();
  }

  // Figure 3.1: Ingestion & Scan
  if (norm.includes('3.1') || norm.includes('สแกนเสื้อผ้า') || norm.includes('สแกน') || norm.includes('scan')) {
    return generateFigure3_1_ScanLead();
  }

  // Figure 3.2: Auto Classification
  if (norm.includes('3.2') || norm.includes('จัดหมวดหมู่อัตโนมัติ') || norm.includes('จัดหมวดหมู่') || norm.includes('classification')) {
    return generateFigure3_2_AutoClassification();
  }

  // Figure 3.3: Digital Wardrobe / Knowledge Base
  if (norm.includes('3.3') || norm.includes('สร้างคลังเก็บข้อมูล') || norm.includes('คลังเก็บข้อมูล') || norm.includes('knowledge')) {
    return generateFigure3_3_KnowledgeVault();
  }

  // Figure 3.4: Analysis & Verification / Scoring
  if (norm.includes('3.4') || norm.includes('สรุปและประมวลผล') || norm.includes('วิเคราะห์ตู้เสื้อผ้า') || norm.includes('scoring')) {
    return generateFigure3_4_ScoringVerification();
  }

  // Figure 3.5: Style Matching / Pitch Recommendation
  if (norm.includes('3.5') || norm.includes('ค้นหาสไตล์') || norm.includes('เสนอแนะชุด') || norm.includes('สคริปต์') || norm.includes('pitch')) {
    return generateFigure3_5_PitchRecommendation();
  }

  // Figure 3.6: Virtual Try-on / Closing Execution
  if (norm.includes('3.6') || norm.includes('ลองชุดเสมือนจริง') || norm.includes('ปิดการขายจริง') || norm.includes('closed won') || norm.includes('deal')) {
    return generateFigure3_6_DealConversion();
  }

  // Figure 3.7: Architecture
  if (norm.includes('3.7')) {
    return generateFigure3_7_SystemArchitecture();
  }

  // Figure 3.8: DFD
  if (norm.includes('3.8') || norm.includes('dfd') || norm.includes('กระแสข้อมูล')) {
    return generateFigure3_8_DataFlowDiagram();
  }

  // Figure 3.9: Use Case
  if (norm.includes('3.9') || norm.includes('use case') || norm.includes('ยูสเคส')) {
    return generateFigure3_9_UseCaseDiagram();
  }

  // Figure 3.10: Database ERD
  if (norm.includes('3.10') || norm.includes('erd') || norm.includes('ฐานข้อมูล')) {
    return generateFigure3_10_DatabaseERD();
  }

  return null;
}

// Helpers
function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawArrow(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number, color: string) {
  const headlen = 10;
  const dx = toX - fromX;
  const dy = toY - fromY;
  const angle = Math.atan2(dy, dx);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(toX, toY);
  ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(' ');
  let line = '';
  let curY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, curY);
      line = words[n] + ' ';
      curY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, curY);
}
