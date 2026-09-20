import { ClothingItem, Outfit, SurveyQuestion, InterviewRecord, AppSettings } from '../types';

export const RESEARCH_METADATA = {
  projectTitle: 'การพัฒนาโครงการ สแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที',
  englishTitle: 'Development of Smart Wardrobe Scanning and Instant Ready-to-Wear Outfit Stylist System',
  institution: 'วิทยาลัยเทคโนโลยีหมู่บ้านครู',
  department: 'สาขาเทคโนโลยีธุรกิจดิจิทัล',
  targetLevel: 'ระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3',
  populationCount: 52,
  sampleCount: 30,
  samplingMethod: 'การเลือกกลุ่มตัวอย่างแบบเฉพาะเจาะจง (Purposive Sampling)',
  academicYear: '2568 - 2569',
  satisfactionMean: 4.67,
  satisfactionSD: 0.44,
  satisfactionLevel: 'ระดับมากที่สุด'
};

export const FIGURES_META = {
  fig3_1: {
    number: '3.1',
    title: 'สแกนเสื้อผ้า (Scan Clothes)',
    path: '/assets/aistudio/wardrobe_scan_1789549386160.jpg',
    description: 'ผู้ใช้งานเปิดระบบและใช้กล้องสมาร์ทโฟนหรืออัปโหลดภาพตู้เสื้อผ้า ระบบแสดง Bounding Box และลำแสงเลเซอร์ตรวจจับเสื้อผ้า'
  },
  fig3_2: {
    number: '3.2',
    title: 'จัดหมวดหมู่อัตโนมัติ (Auto Classification)',
    path: '/assets/aistudio/wardrobe_classify_1789549400994.jpg',
    description: 'ระบบ AI ประมวลผลแยกแยะและจัดหมวดหมู่เสื้อผ้าเป็นเสื้อ กางเกง กระโปรง เดรส เสื้อคลุม พร้อมสกัดโทนสีและเนื้อผ้า'
  },
  fig3_3: {
    number: '3.3',
    title: 'สร้างคลังเก็บข้อมูลส่วนตัว (Digital Wardrobe Database)',
    path: '/assets/aistudio/wardrobe_database_1789549414303.jpg',
    description: 'จัดเก็บเสื้อผ้าที่สแกนแล้วลงในคลังตู้เสื้อผ้าดิจิทัลส่วนตัว สามารถค้นหา คัดกรอง และดูสถิติตู้เสื้อผ้าได้ทุกที่ทุกเวลา'
  },
  fig3_4: {
    number: '3.4',
    title: 'สรุปและประมวลผลตู้เสื้อผ้า (Analysis & Verification)',
    path: '/assets/aistudio/wardrobe_analysis_1789549449414.jpg',
    description: 'ระบบวิเคราะห์คลังเสื้อผ้าเสร็จสมบูรณ์ แสดงสัดส่วนเสื้อต่อกางเกง แผนภูมิวงล้อสี และประเมินความพร้อมในการจัดชุด'
  },
  fig3_5: {
    number: '3.5',
    title: 'ค้นหาสไตล์และเสนอแนะชุด (Style Matching & Outfit Recommendation)',
    path: '/assets/aistudio/style_matching_1789549427116.jpg',
    description: 'ระบบผสมผสานเสื้อผ้าตามโอกาส (ไปเรียน ปวช., พรีเซนต์งาน, ลำลอง) คำนวณคะแนนความเข้ากันได้ พร้อมปุ่มลองชุดเสมือนจริงและบันทึกชุดโปรด'
  },
  fig3_6: {
    number: '3.6',
    title: 'ลองชุดเสมือนจริงและพร้อมใช้งาน (Virtual Try-On & Ready to Wear)',
    path: '/assets/aistudio/virtual_tryon_1789549461734.jpg',
    description: 'จำลองการสวมใส่ชุดบนหุ่นโมเดลเสมือนจริงแบบเรียลไทม์ ผู้ใช้งานเห็นภาพตนเองก่อนแต่งตัวจริง พร้อมหยิบสวมใส่ได้ทันที'
  }
};

export const INITIAL_CLOTHING_ITEMS: ClothingItem[] = [
  {
    id: 'c-01',
    name: 'เสื้อเชิ้ตนักเรียน ปวช. สีขาวแขนสั้น',
    category: 'tops',
    subCategory: 'เสื้อเชิ้ตนักศึกษา/นักเรียน',
    color: 'ขาวบริสุทธิ์',
    colorHex: '#FFFFFF',
    pattern: 'สีพื้น',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'งานพิธีการ/ทางการ'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80',
    material: 'Oxford Cotton ผสม Cotton-Poly',
    wearCount: 42,
    lastWornDate: 'เมื่อวาน',
    addedAt: '2025-01-10',
    aiConfidence: 98.5,
    favorite: true,
    notes: 'รีดเรียบ ปักชื่อและตราสัญลักษณ์วิทยาลัยเทคโนโลยีหมู่บ้านครู'
  },
  {
    id: 'c-02',
    name: 'กางเกงสแล็คทรงกระบอกเล็ก สีกรมท่า',
    category: 'pants',
    subCategory: 'กางเกงสแล็คเครื่องแบบ',
    color: 'สีกรมท่าเข้ม (Navy)',
    colorHex: '#1E293B',
    pattern: 'สีพื้น',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'นำเสนอโครงการธุรกิจดิจิทัล', 'งานพิธีการ/ทางการ'],
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80',
    material: 'Polyester-Viscose ทรงสวย ยับยาก',
    wearCount: 38,
    lastWornDate: 'เมื่อวาน',
    addedAt: '2025-01-10',
    aiConfidence: 96.8,
    favorite: true
  },
  {
    id: 'c-03',
    name: 'กระโปรงพลีทจีบรอบ สีกรมท่าสุภาพ',
    category: 'skirts',
    subCategory: 'กระโปรงเครื่องแบบ',
    color: 'สีกรมท่า (Navy)',
    colorHex: '#1E3A8A',
    pattern: 'อัดพลีทจีบประณีต',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'งานพิธีการ/ทางการ'],
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=400&q=80',
    material: 'Polyester สวมใส่สบาย พริ้วสวย',
    wearCount: 32,
    lastWornDate: '3 วันก่อน',
    addedAt: '2025-01-12',
    aiConfidence: 97.4,
    favorite: true
  },
  {
    id: 'c-04',
    name: 'เสื้อโปโลวิทยาลัย สาขาเทคโนโลยีธุรกิจดิจิทัล',
    category: 'tops',
    subCategory: 'เสื้อโปโลสาขาวิชา',
    color: 'สีฟ้าคราม/ขาว',
    colorHex: '#0284C7',
    pattern: 'คอปกขลิบสีขาว',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'กิจกรรม/กีฬา'],
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=400&q=80',
    material: 'Dry-Tech ระบายเหงื่อยอดเยี่ยม',
    wearCount: 25,
    lastWornDate: 'วันจันทร์',
    addedAt: '2025-01-15',
    aiConfidence: 99.1,
    favorite: true
  },
  {
    id: 'c-05',
    name: 'เสื้อเบลเซอร์สูท สีเทาชาโคล สำหรับนำเสนองาน',
    category: 'outerwear',
    subCategory: 'เบลเซอร์สูททางการ',
    color: 'เทาชาโคล (Charcoal Grey)',
    colorHex: '#475569',
    pattern: 'สีพื้นเรียบหรู',
    season: 'ทุกฤดู',
    occasion: ['นำเสนอโครงการธุรกิจดิจิทัล', 'งานพิธีการ/ทางการ'],
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80',
    material: 'Blended Wool สวมทับชุดสุภาพ',
    wearCount: 14,
    lastWornDate: 'สัปดาห์ก่อน',
    addedAt: '2025-01-20',
    aiConfidence: 95.0,
    favorite: true
  },
  {
    id: 'c-06',
    name: 'เสื้อยืดมินิมอล Oversized สีเบจเอิร์ธโทน',
    category: 'tops',
    subCategory: 'เสื้อยืดลำลอง',
    color: 'เบจครีม (Warm Beige)',
    colorHex: '#D4B996',
    pattern: 'สีพื้น',
    season: 'ร้อน',
    occasion: ['ลำลอง/ไปเที่ยว'],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
    material: 'Heavy Cotton 100% เนื้อนุ่ม',
    wearCount: 29,
    lastWornDate: 'วันเสาร์',
    addedAt: '2025-01-22',
    aiConfidence: 97.2,
    favorite: false
  },
  {
    id: 'c-07',
    name: 'กางเกงยีนส์ทรงกระบอกตรง สีฟอกอ่อน',
    category: 'pants',
    subCategory: 'กางเกงยีนส์',
    color: 'เดนิมฟ้าคลาสสิก',
    colorHex: '#60A5FA',
    pattern: 'ยีนส์ฟอกนุ่ม',
    season: 'ทุกฤดู',
    occasion: ['ลำลอง/ไปเที่ยว'],
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80',
    material: 'Cotton Denim ทนทาน',
    wearCount: 35,
    lastWornDate: 'วันเสาร์',
    addedAt: '2025-01-22',
    aiConfidence: 98.0,
    favorite: true
  },
  {
    id: 'c-08',
    name: 'เสื้อคาร์ดิแกนไหมพรม สีน้ำตาลมอคค่า',
    category: 'outerwear',
    subCategory: 'เสื้อคลุมคาร์ดิแกน',
    color: 'น้ำตาลมอคค่า (Mocha Brown)',
    colorHex: '#78350F',
    pattern: 'ถักลายรังผึ้ง',
    season: 'หนาว',
    occasion: ['ชุดนักเรียน ปวช.', 'ลำลอง/ไปเที่ยว'],
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
    material: 'Soft Knit Acrylic ผ้านุ่มให้ความอบอุ่น',
    wearCount: 18,
    lastWornDate: 'สัปดาห์ที่แล้ว',
    addedAt: '2025-01-25',
    aiConfidence: 94.6,
    favorite: false
  },
  {
    id: 'c-09',
    name: 'รองเท้าผ้าใบสีขาวสะอาด มินิมอลทรงคลาสสิก',
    category: 'footwear',
    subCategory: 'รองเท้าผ้าใบสตรีท',
    color: 'ขาวล้วน (All White)',
    colorHex: '#F8FAFC',
    pattern: 'มินิมอล',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'ลำลอง/ไปเที่ยว', 'กิจกรรม/กีฬา'],
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80',
    material: 'หนัง PU กันละอองน้ำ ทำความสะอาดง่าย',
    wearCount: 52,
    lastWornDate: 'วันนี้',
    addedAt: '2025-01-10',
    aiConfidence: 99.3,
    favorite: true
  },
  {
    id: 'c-10',
    name: 'รองเท้าคัทชูหนังขัดมันสีดำ สุภาพ',
    category: 'footwear',
    subCategory: 'รองเท้าทางการ',
    color: 'ดำเงา (Glossy Black)',
    colorHex: '#0F172A',
    pattern: 'เรียบหรูทางการ',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'นำเสนอโครงการธุรกิจดิจิทัล', 'งานพิธีการ/ทางการ'],
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=400&q=80',
    material: 'หนังแท้คุณภาพสูง ส้นเตี้ยเดินสบาย',
    wearCount: 22,
    lastWornDate: '2 สัปดาห์ก่อน',
    addedAt: '2025-01-10',
    aiConfidence: 97.8,
    favorite: true
  },
  {
    id: 'c-11',
    name: 'นาฬิกาข้อมือสมาร์ทวอทช์ สายซิลิโคนดำ',
    category: 'accessories',
    subCategory: 'นาฬิกาข้อมือ',
    color: 'ดำแมตต์',
    colorHex: '#18181B',
    pattern: 'ดิจิทัลโมเดิร์น',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'นำเสนอโครงการธุรกิจดิจิทัล', 'ลำลอง/ไปเที่ยว', 'กิจกรรม/กีฬา'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    material: 'Silicone & Aluminum',
    wearCount: 60,
    lastWornDate: 'วันนี้',
    addedAt: '2025-01-08',
    aiConfidence: 96.0,
    favorite: true
  },
  {
    id: 'c-12',
    name: 'เข็มขัดหนังหัวเหลี่ยมสัญลักษณ์วิทยาลัย',
    category: 'accessories',
    subCategory: 'เข็มขัดเครื่องแบบ',
    color: 'ดำ/เงิน',
    colorHex: '#334155',
    pattern: 'ทางการ',
    season: 'ทุกฤดู',
    occasion: ['ชุดนักเรียน ปวช.', 'งานพิธีการ/ทางการ'],
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=400&q=80',
    material: 'หนังวัวแท้ หัวทองเหลืองชุบโครเมียม',
    wearCount: 45,
    lastWornDate: 'เมื่อวาน',
    addedAt: '2025-01-10',
    aiConfidence: 98.9,
    favorite: true
  }
];

export const INITIAL_OUTFITS: Outfit[] = [
  {
    id: 'outfit-01',
    title: 'ชุดนักเรียน ปวช. 3 ถูกระเบียบ (Smart College Day)',
    occasion: 'ชุดนักเรียน ปวช.',
    topItem: INITIAL_CLOTHING_ITEMS[0], // เสื้อเชิ้ตขาว
    bottomItem: INITIAL_CLOTHING_ITEMS[1], // สแล็คกรมท่า
    shoesItem: INITIAL_CLOTHING_ITEMS[8], // ผ้าใบขาว
    accessories: [INITIAL_CLOTHING_ITEMS[10], INITIAL_CLOTHING_ITEMS[11]],
    matchScore: 98,
    styleVibe: 'Smart Student & Formal College',
    colorHarmony: 'High Contrast (ขาว + กรมท่าเข้ม)',
    weatherFit: 'เหมาะกับทุกสภาพอากาศในห้องเรียนปรับอากาศ',
    aiStylingTip: 'สอดชายเสื้อเข้าในกางเกงให้เรียบร้อย คาดเข็มขัดวิทยาลัย เสริมความมั่นใจในวันสอบและวันเรียนปกติ',
    isFavorite: true,
    createdAt: '2025-02-01',
    wornDates: ['2025-02-10', '2025-02-17', '2025-02-24']
  },
  {
    id: 'outfit-02',
    title: 'ชุดนำเสนอโครงการธุรกิจดิจิทัลระดับมืออาชีพ (Digital Business Pitch)',
    occasion: 'นำเสนอโครงการธุรกิจดิจิทัล',
    topItem: INITIAL_CLOTHING_ITEMS[0], // เสื้อเชิ้ตขาว
    bottomItem: INITIAL_CLOTHING_ITEMS[1], // สแล็คกรมท่า
    outerwearItem: INITIAL_CLOTHING_ITEMS[4], // เบลเซอร์เทาชาโคล
    shoesItem: INITIAL_CLOTHING_ITEMS[9], // คัทชูดำ
    accessories: [INITIAL_CLOTHING_ITEMS[10]],
    matchScore: 96,
    styleVibe: 'Professional Tech Entrepreneur',
    colorHarmony: 'Monochrome Elegance (ขาว + เทาชาโคล + กรมท่า)',
    weatherFit: 'เหมาะสำหรับห้องบรรยายสัมมนาปรับอากาศ',
    aiStylingTip: 'การสวมเบลเซอร์ทับเสื้อเชิ้ตขาวช่วยเพิ่มบุคลิกภาพความน่าเชื่อถือระดับสากลต่อหน้าคณะกรรมการประเมินโครงการ',
    isFavorite: true,
    createdAt: '2025-02-05',
    wornDates: ['2025-02-12']
  },
  {
    id: 'outfit-03',
    title: 'ชุดลำลองวันเสาร์ มินิมอลคาเฟ่ (Earth Tone Weekend)',
    occasion: 'ลำลอง/ไปเที่ยว',
    topItem: INITIAL_CLOTHING_ITEMS[5], // เสื้อยืดโอเวอร์ไซส์เบจ
    bottomItem: INITIAL_CLOTHING_ITEMS[6], // ยีนส์ฟอก
    shoesItem: INITIAL_CLOTHING_ITEMS[8], // ผ้าใบขาว
    accessories: [INITIAL_CLOTHING_ITEMS[10]],
    matchScore: 94,
    styleVibe: 'Clean Korean Minimalist',
    colorHarmony: 'Analogous Warm (เบจ + ยีนส์ฟ้าอ่อน + ขาว)',
    weatherFit: 'โปร่งสบาย ถ่ายเทความร้อนดีเยี่ยม เหมาะกับแดดช่วงบ่าย',
    aiStylingTip: 'พับขากางเกงยีนส์ขึ้นเล็กน้อยเผยข้อเท้า โชว์รองเท้าผ้าใบสีขาว ให้ความรู้สึกคล่องตัว ทันสมัย',
    isFavorite: false,
    createdAt: '2025-02-15'
  },
  {
    id: 'outfit-04',
    title: 'ชุดกิจกรรมสาขาวิชาเทคโนโลยีธุรกิจดิจิทัล (Active Department Day)',
    occasion: 'กิจกรรม/กีฬา',
    topItem: INITIAL_CLOTHING_ITEMS[3], // เสื้อโปโลวิทยาลัย
    bottomItem: INITIAL_CLOTHING_ITEMS[6], // ยีนส์
    shoesItem: INITIAL_CLOTHING_ITEMS[8], // ผ้าใบขาว
    accessories: [INITIAL_CLOTHING_ITEMS[10]],
    matchScore: 92,
    styleVibe: 'Sporty & Youthful',
    colorHarmony: 'Tonal Blue (ฟ้าคราม + ยีนส์ฟ้า + ขาว)',
    weatherFit: 'แห้งไว ระบายเหงื่อ คล่องตัวสูง',
    aiStylingTip: 'เสื้อโปโลเนื้อผ้า Dry-Tech ให้ความยืดหยุ่น เหมาะสำหรับวันจัดกิจกรรมแนะแนวหรือร่วมงานนิทรรศการนอกสถานที่',
    isFavorite: true,
    createdAt: '2025-02-20'
  }
];

export const SURVEY_QUESTIONS: SurveyQuestion[] = [
  // 1. ด้านความถูกต้องแม่นยำในการแยกแยะและจัดหมวดหมู่ (Accuracy & Classification)
  {
    id: 'acc-1',
    category: 'accuracy',
    text: 'ระบบ AI สามารถสแกนและแยกประเภทเสื้อผ้า (เสื้อ กางเกง กระโปรง รองเท้า) ได้ถูกต้อง',
    mean: 4.63,
    sd: 0.49,
    level: 'มากที่สุด'
  },
  {
    id: 'acc-2',
    category: 'accuracy',
    text: 'การสกัดและวิเคราะห์โทนสี ลวดลาย และเนื้อผ้ามีความเที่ยงตรงตรงกับเสื้อผ้าจริง',
    mean: 4.57,
    sd: 0.50,
    level: 'มากที่สุด'
  },
  {
    id: 'acc-3',
    category: 'accuracy',
    text: 'การเสนอแนะชุดมีความเหมาะสม ถูกกาลเทศะ และตรงตามระเบียบของวิทยาลัยเทคโนโลยีหมู่บ้านครู',
    mean: 4.70,
    sd: 0.47,
    level: 'มากที่สุด'
  },
  // 2. ด้านประสิทธิภาพการทำงานและความสะดวก (Efficiency & Usability)
  {
    id: 'eff-1',
    category: 'efficiency',
    text: 'ระบบสแกนและประมวลผลจัดชุดทำงานได้อย่างรวดเร็ว ไม่กระตุกหรือล่าช้า (ภายใน 1.5 วินาที)',
    mean: 4.73,
    sd: 0.45,
    level: 'มากที่สุด'
  },
  {
    id: 'eff-2',
    category: 'efficiency',
    text: 'ฟังก์ชันลองชุดเสมือนจริง (Virtual Try-On) ช่วยให้เห็นภาพรวมก่อนการสวมใส่จริงได้ชัดเจน',
    mean: 4.67,
    sd: 0.48,
    level: 'มากที่สุด'
  },
  {
    id: 'eff-3',
    category: 'efficiency',
    text: 'หน้าจอและการจัดวางเมนู (UI/UX) ใช้งานง่าย ไม่ซับซ้อน เหมาะสำหรับนักเรียน ปวช.',
    mean: 4.77,
    sd: 0.43,
    level: 'มากที่สุด'
  },
  // 3. ด้านความพึงพอใจโดยรวมและประโยชน์ที่ได้รับ (User Satisfaction)
  {
    id: 'sat-1',
    category: 'satisfaction',
    text: 'ระบบช่วยประหยัดเวลาในการคิดและเลือกชุดในแต่ละวันก่อนเดินทางมาวิทยาลัยได้อย่างมาก',
    mean: 4.80,
    sd: 0.41,
    level: 'มากที่สุด'
  },
  {
    id: 'sat-2',
    category: 'satisfaction',
    text: 'ระบบช่วยให้ผู้ใช้งานเกิดความมั่นใจในบุคลิกภาพและการแต่งตัวเพิ่มขึ้น',
    mean: 4.70,
    sd: 0.47,
    level: 'มากที่สุด'
  },
  {
    id: 'sat-3',
    category: 'satisfaction',
    text: 'ความพึงพอใจในภาพรวมต่อการนำระบบไปประยุกต์ใช้งานในชีวิตประจำวันของนักศึกษา',
    mean: 4.73,
    sd: 0.45,
    level: 'มากที่สุด'
  },
  // 4. ด้านความต้องการในการแต่งตัว (User Needs)
  {
    id: 'need-1',
    category: 'needs',
    text: 'ความต้องการระบบช่วยแนะนำการ Mix & Match เสื้อผ้าที่มีอยู่ในตู้โดยไม่ต้องซื้อใหม่',
    mean: 4.83,
    sd: 0.38,
    level: 'มากที่สุด'
  }
];

export const INTERVIEW_RECORDS: InterviewRecord[] = [
  {
    id: 'int-01',
    code: 'กลุ่มตัวอย่างคนที่ 4 (ปวช. 3/1)',
    topic: 'การลดเวลาตัดสินใจตอนเช้า',
    quote: 'ปกติทุกเช้าจะเสียเวลา 15-20 นาทีในการยืนเลือกชุด พอมีระบบสแกนตู้เสื้อผ้าแล้วกดให้ระบบจัดชุดให้ รู้สึกว่าประหยัดเวลามาก และได้ชุดที่เข้ากันดีกว่าที่คิดเอง',
    insight: 'ลดความเหนื่อยล้าในการตัดสินใจ (Decision Fatigue) ช่วงเวลาเร่งด่วนก่อนมาเรียน',
    sentiment: 'positive'
  },
  {
    id: 'int-02',
    code: 'กลุ่มตัวอย่างคนที่ 12 (ปวช. 3/2)',
    topic: 'ความมั่นใจในวันนำเสนอโครงการ',
    quote: 'ฟังก์ชันแนะนำชุดสำหรับงานนำเสนอผลงานช่วยได้เยอะมาก แนะนำให้เอาเบลเซอร์มาแมตช์กับเชิ้ตขาว ทำให้ดูมืออาชีพและอาจารย์ชมเรื่องการแต่งกายสุภาพ',
    insight: 'สร้างความพร้อมทางจิตวิทยาและบุคลิกภาพสำหรับการฝึกงานและสัมภาษณ์งาน',
    sentiment: 'positive'
  },
  {
    id: 'int-03',
    code: 'กลุ่มตัวอย่างคนที่ 19 (ปวช. 3/1)',
    topic: 'Virtual Try-On ลองชุดเสมือนจริง',
    quote: 'ชอบตรงที่พอกดลองชุดเสมือนจริงแล้วเห็นโมเดลใส่เสื้อผ้าที่เราเลือกทันที ไม่ต้องหยิบมาสวมจริงๆ ดูโทนสีว่าตัดกันเกินไปไหมก่อนตัดสินใจ',
    insight: 'ฟังก์ชันเสมือนจริงเพิ่มความมั่นใจในการเห็น Visual Preview ล่วงหน้า',
    sentiment: 'positive'
  },
  {
    id: 'int-04',
    code: 'กลุ่มตัวอย่างคนที่ 27 (ปวช. 3/2)',
    topic: 'ข้อเสนอแนะเพิ่มเติม',
    quote: 'อยากให้เพิ่มฟีเจอร์พยากรณ์สภาพอากาศ เช่น วันไหนฝนจะตก ให้แนะนำชุดที่ไม่เลอะง่าย หรือมีเสื้อกันหนาวถ้าเรียนห้องแล็บแอร์เย็น',
    insight: 'โอกาสพัฒนาต่อยอดเป็น Context-Aware Weather Fashion Recommender',
    sentiment: 'constructive'
  }
];

export const DEFAULT_APP_SETTINGS: AppSettings = {
  userName: 'นักศึกษา ปวช. 3 เทคโนโลยีธุรกิจดิจิทัล',
  collegeName: 'วิทยาลัยเทคโนโลยีหมู่บ้านครู',
  department: 'สาขาเทคโนโลยีธุรกิจดิจิทัล',
  targetAudience: 'นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.)',
  preferredStyle: 'Smart Student & Modern Minimal',
  bodyType: 'standard',
  avatarGender: 'female',
  autoMatchWithWeather: true,
  themeColor: 'indigo'
};
