export interface ReportChapter {
  id: number;
  chapterNumber: string;
  title: string;
  englishTitle: string;
  description: string;
  subsections: {
    number: string;
    title: string;
    page: number;
  }[];
}

export interface TocItem {
  id: string;
  number?: string;
  title: string;
  englishTitle?: string;
  page: string;
  level: 'front' | 'chapter' | 'sub' | 'back';
  sectionId: string;
}

export interface TableItem {
  number: string;
  title: string;
  page: string;
  targetId: string;
}

export interface FigureItem {
  number: string;
  title: string;
  page: string;
  targetId: string;
}

export interface AppendixItem {
  letter: string;
  title: string;
  englishTitle: string;
  description: string;
  page: string;
  contentSummary: string[];
}

export const REPORT_METADATA = {
  projectTitleTh: 'โครงการการพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที',
  projectTitleEn: 'Development of Smart Wardrobe Scanning and Instant Ready-to-Wear Outfit Stylist System',
  courseCode: '20204-8501',
  courseName: 'โครงการ (Project)',
  curriculum: 'หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) พุทธศักราช 2567',
  degreeLevel: 'ประกาศนียบัตรวิชาชีพ (ปวช.)',
  studyCategory: 'ประเภทวิชาบริหารธุรกิจ / พาณิชยกรรม',
  faculty: 'สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล',
  majorJob: 'สาขางานธุรกิจดิจิทัล',
  department: 'แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล',
  institution: 'วิทยาลัยเทคโนโลยีหมู่บ้านครู',
  location: 'เขตหนองแขม กรุงเทพมหานคร',
  jurisdiction: 'สำนักงานคณะกรรมการการอาชีวศึกษา กระทรวงศึกษาธิการ',
  academicYear: '2568',
  semester: 'ภาคเรียนที่ 2',
  schoolLogoUrl: '/mbc-logo.svg',
  submissionStatementTh: 'โครงการนี้เป็นส่วนหนึ่งของการศึกษาตามหลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) พุทธศักราช 2567 สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู สังกัดสำนักงานคณะกรรมการการอาชีวศึกษา กระทรวงศึกษาธิการ ปีการศึกษา 2568',
  submissionStatementEn: 'A Project Submitted in Partial Fulfillment of the Requirements for the Vocational Certificate (V.C.) in Digital Business Technology, Mubankru Technological College, Office of the Vocational Education Commission, Ministry of Education, Academic Year 2025',
  authors: [
    { id: '1', name: 'นายภูวิศ วงศ์สิริโชค', studentId: '66209010001', role: 'หัวหน้าโครงงานวิจัย' },
    { id: '2', name: 'นางสาวกัญญารัตน์ สุขสวัสดิ์', studentId: '66209010014', role: 'นักวิจัยและออกแบบระบบ' },
    { id: '3', name: 'นายธนกฤต ประเสริฐชัย', studentId: '66209010025', role: 'นักวิจัยและวิเคราะห์ข้อมูล' }
  ],
  authorGroupText: 'นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 ห้อง 1 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล',
  advisors: [
    { name: 'อาจารย์ณัฐพล ภัทรเดชากุล', position: 'ครูชำนาญการ', role: 'อาจารย์ที่ปรึกษาหลัก' },
    { name: 'อาจารย์กัญญาพัชร สิทธิโชค', position: 'ครูพิเศษสอน', role: 'อาจารย์ที่ปรึกษาร่วม' }
  ],
  committee: [
    { name: 'ดร.สุภาพร ศิริวัฒนาภรณ์', role: 'ประธานกรรมการ (ผู้อำนวยการวิทยาลัยเทคโนโลยีหมู่บ้านครู)' },
    { name: 'อาจารย์ประจักษ์ เกียรติภิญโญ', role: 'รองประธานกรรมการ (รองผู้อำนวยการฝ่ายวิชาการ)' },
    { name: 'อาจารย์วันทนี บุญประสพ', role: 'กรรมการ (หัวหน้าแผนกวิชาเทคโนโลยีธุรกิจดิจิทัล)' },
    { name: 'อาจารย์พิชัย รัตนประสิทธิ์', role: 'กรรมการผู้ทรงคุณวุฒิ' },
    { name: 'อาจารย์ณัฐพล ภัทรเดชากุล', role: 'กรรมการและเลขานุการ (อาจารย์ที่ปรึกษาโครงการ)' }
  ],
  populationCount: 52,
  sampleCount: 30,
  samplingMethod: 'การเลือกกลุ่มตัวอย่างแบบเฉพาะเจาะจง (Purposive Sampling)',
  abstractTh: `การวิจัยและพัฒนาครั้งนี้มีวัตถุประสงค์เพื่อ 1) พัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที สำหรับนักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู 2) ประเมินประสิทธิภาพและความถูกต้องในการจำแนกประเภท แยกแยะสี และจับคู่ชุดเสื้อผ้า และ 3) ประเมินความพึงพอใจของกลุ่มตัวอย่างที่มีต่อการใช้งานระบบ ประชากรที่ใช้ในการวิจัย ได้แก่ นักเรียนระดับ ปวช. ชั้นปีที่ 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู ภาคเรียนที่ 2 ปีการศึกษา 2568 จำนวน 52 คน และกลุ่มตัวอย่างจำนวน 30 คน ได้มาจากการสุ่มแบบเฉพาะเจาะจง (Purposive Sampling) ตามเกณฑ์การลงทะเบียนและการใช้อุปกรณ์สมาร์ตโฟน เครื่องมือที่ใช้ในการวิจัย ได้แก่ 1) ระบบเว็บแอปพลิเคชันสแกนตู้เสื้อผ้าและจัดชุดอัจฉริยะ 2) แบบประเมินประสิทธิภาพระบบ 3) แบบสอบถามความพึงพอใจมาตราส่วนประมาณค่า 5 ระดับ ซึ่งผ่านการตรวจสอบความตรงตามเนื้อหา (Content Validity) ได้ค่าดัชนี IOC ระหว่าง 0.80 - 1.00 และมีค่าสัมประสิทธิ์แอลฟ่าของครอนบาค (Cronbach's Alpha) เท่ากับ 0.924 และ 4) แบบสัมภาษณ์กึ่งโครงสร้าง การวิเคราะห์ข้อมูลใช้สถิติร้อยละ ค่าเฉลี่ย (x̄) ส่วนเบี่ยงเบนมาตรฐาน (S.D.) และการทดสอบค่าที (Paired Samples t-test) ผลการวิจัยพบว่า 1) ระบบที่พัฒนาขึ้นประกอบด้วย 6 โมดูลหลัก ได้แก่ การสแกนเสื้อผ้า, การจัดหมวดหมู่อัตโนมัติ, คลังตู้เสื้อผ้าดิจิทัล, การวิเคราะห์และตรวจทาน, การจับคู่สไตล์และเสนอแนะชุด, และการลองชุดเสมือนจริง สามารถทำงานได้อย่างมีเสถียรภาพ 2) ประสิทธิภาพความถูกต้องในการแยกแยะประเภทและตรวจจับเฉดสีเฉลี่ย 98.2% และลดระยะเวลาในการตัดสินใจเลือกชุดในแต่ละวันลงจากเดิม 18.50 นาที เหลือเพียง 4.00 นาที อย่างมีนัยสำคัญทางสถิติที่ระดับ .01 (t = 14.82, p < .001) และ 3) ความพึงพอใจของกลุ่มตัวอย่างในภาพรวมอยู่ในระดับ "มากที่สุด" (x̄ = 4.67, S.D. = 0.44) ระบบสามารถช่วยเพิ่มความมั่นใจในการแต่งกายถูกต้องตามระเบียบของสถานศึกษาและลดปัญหาเสื้อผ้าถูกทิ้งค้างตู้ได้อย่างเป็นรูปธรรม`,
  abstractEn: `The objectives of this Research and Development (R&D) study were: 1) to develop a Smart Wardrobe Scanning and Instant Ready-to-Wear Outfit Stylist System for third-year Vocational Certificate (Por-Wor-Chor) students in Digital Business Technology at Mubankru Technological College, 2) to evaluate the system's performance and accuracy in garment classification, color extraction, and style matching, and 3) to assess user satisfaction among the sample group. The study population comprised 52 third-year students in the Digital Business Technology department during the second semester of the 2025-2026 academic year. A sample of 30 students was selected via Purposive Sampling based on academic enrollment and daily smartphone accessibility. Research instruments included: 1) the Smart Wardrobe Web Application, 2) system performance benchmark forms, 3) a 5-point Likert scale satisfaction questionnaire verified for content validity with an Item-Objective Congruence (IOC) index ranging from 0.80 to 1.00 and a Cronbach's Alpha reliability coefficient of 0.924, and 4) semi-structured interview protocols. Statistical data analysis involved percentage, mean (x̄), standard deviation (S.D.), and paired samples t-test. The findings revealed that: 1) the developed system successfully integrates six core automated modules—Scan Clothes, Auto Classification, Digital Wardrobe Database, Analysis & Verification, Style Matching & Recommendation, and Virtual Try-On—operating with high reliability; 2) classification and color extraction accuracy reached 98.2%, and daily outfit decision time was reduced from 18.50 minutes to 4.00 minutes, demonstrating statistical significance at the .01 level (t = 14.82, p < .001); and 3) overall user satisfaction was rated at the "Highest" level (x̄ = 4.67, S.D. = 0.44). The system significantly reinforces adherence to college uniform dress codes and curtails dormant wardrobe waste.`,
  acknowledgements: `รายงานโครงงานวิจัยฉบับสมบูรณ์นี้ สำเร็จลุล่วงไปได้ด้วยความกรุณาและความช่วยเหลืออย่างดียิ่งจาก อาจารย์ณัฐพล ภัทรเดชากุล อาจารย์ที่ปรึกษาหลัก และ อาจารย์กัญญาพัชร สิทธิโชค อาจารย์ที่ปรึกษาร่วม ที่ได้สละเวลาอันมีค่าให้คำปรึกษา แนะนำแนวคิด กรอบทฤษฎี ตรวจสอบความถูกต้องของระบบซอฟต์แวร์ ตลอดจนแก้ไขข้อบกพร่องต่าง ๆ ด้วยความเอาใจใส่และเมตตายิ่ง คณะผู้วิจัยขอกราบขอบพระคุณเป็นอย่างสูงไว้ ณ โอกาสนี้

ขอขอบพระคุณ ดร.สุภาพร ศิริวัฒนาภรณ์ ประธานกรรมการประเมินโครงการ, อาจารย์พิชัย รัตนประสิทธิ์ กรรมการผู้ทรงคุณวุฒิ, และ อาจารย์วันทนี บุญประสพ หัวหน้าสาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู ที่ได้กรุณาเป็นผู้เชี่ยวชาญตรวจสอบคุณภาพเครื่องมือวิจัย (IOC) และให้ข้อเสนอแนะเชิงวิชาการที่เป็นประโยชน์อย่างยิ่ง

ขอขอบคุณเพื่อนนักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 สาขาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู จำนวน 30 คน ที่ได้ให้ความร่วมมือในการทดลองใช้ระบบ ตอบแบบสอบถาม และให้ข้อมูลเชิงลึกผ่านการสัมภาษณ์อย่างดียิ่ง

สุดท้ายนี้ คณะผู้วิจัยขอกราบขอบพระคุณบิดา มารดา และครอบครัวทุกท่าน ผู้เป็นกำลังใจและสนับสนุนด้านทุนทรัพย์และการศึกษาด้วยดีเสมอมา คุณค่าและประโยชน์อันพึงมีจากโครงงานวิจัยนี้ คณะผู้วิจัยขอมอบเป็นเครื่องบูชาพระคุณแด่บูรพาจารย์และผู้มีพระคุณทุกท่าน`,
  keywordsTh: ['ระบบสแกนตู้เสื้อผ้า', 'จัดชุดอัตโนมัติ', 'คลังตู้เสื้อผ้าดิจิทัล', 'ลองชุดเสมือนจริง', 'ปัญญาประดิษฐ์ประมวลผลภาพ', 'เทคโนโลยีธุรกิจดิจิทัล', 'วิทยาลัยเทคโนโลยีหมู่บ้านครู'],
  keywordsEn: ['Smart Wardrobe', 'Automated Outfit Recommendation', 'Digital Wardrobe', 'Virtual Try-On', 'Computer Vision', 'Digital Business Technology', 'Mubankru Technological College']
};

export const TABLE_OF_CONTENTS: TocItem[] = [
  { id: 'front-cover', title: 'หน้าปก (Cover Page)', englishTitle: 'Cover Page', page: 'ก', level: 'front', sectionId: 'front-cover-section' },
  { id: 'front-abstract-th', title: 'บทคัดย่อภาษาไทย', englishTitle: 'Thai Abstract', page: 'ข', level: 'front', sectionId: 'front-abstract-th-section' },
  { id: 'front-abstract-en', title: 'Abstract (บทคัดย่อภาษาอังกฤษ)', englishTitle: 'English Abstract', page: 'ค', level: 'front', sectionId: 'front-abstract-en-section' },
  { id: 'front-ack', title: 'กิตติกรรมประกาศ', englishTitle: 'Acknowledgements', page: 'ง', level: 'front', sectionId: 'front-ack-section' },
  { id: 'front-toc', title: 'สารบัญ', englishTitle: 'Table of Contents', page: 'จ', level: 'front', sectionId: 'front-toc-section' },
  { id: 'front-lot', title: 'สารบัญตาราง', englishTitle: 'List of Tables', page: 'ฉ', level: 'front', sectionId: 'front-lot-section' },
  { id: 'front-lof', title: 'สารบัญภาพ', englishTitle: 'List of Figures', page: 'ช', level: 'front', sectionId: 'front-lof-section' },
  
  // บทที่ 1
  { id: 'ch-1', number: 'บทที่ 1', title: 'บทนำ', englishTitle: 'Introduction', page: '1', level: 'chapter', sectionId: 'chapter-1' },
  { id: 'sec-1-1', number: '1.1', title: 'ความเป็นมาและความสำคัญของปัญหา', englishTitle: 'Background & Significance', page: '1', level: 'sub', sectionId: 'section-1-1' },
  { id: 'sec-1-2', number: '1.2', title: 'วัตถุประสงค์ของการวิจัย', englishTitle: 'Research Objectives', page: '4', level: 'sub', sectionId: 'section-1-2' },
  { id: 'sec-1-3', number: '1.3', title: 'คำถามการวิจัย', englishTitle: 'Research Questions', page: '5', level: 'sub', sectionId: 'section-1-3' },
  { id: 'sec-1-4', number: '1.4', title: 'สมมติฐานการวิจัย', englishTitle: 'Research Hypotheses', page: '5', level: 'sub', sectionId: 'section-1-4' },
  { id: 'sec-1-5', number: '1.5', title: 'ขอบเขตของการวิจัย', englishTitle: 'Scope of Research', page: '6', level: 'sub', sectionId: 'section-1-5' },
  { id: 'sec-1-6', number: '1.6', title: 'นิยามศัพท์เฉพาะ', englishTitle: 'Operational Definitions', page: '8', level: 'sub', sectionId: 'section-1-6' },
  { id: 'sec-1-7', number: '1.7', title: 'ประโยชน์ที่คาดว่าจะได้รับ', englishTitle: 'Expected Benefits', page: '9', level: 'sub', sectionId: 'section-1-7' },
  
  // บทที่ 2
  { id: 'ch-2', number: 'บทที่ 2', title: 'เอกสารและงานวิจัยที่เกี่ยวข้อง', englishTitle: 'Literature Review', page: '11', level: 'chapter', sectionId: 'chapter-2' },
  { id: 'sec-2-1', number: '2.1', title: 'แนวคิดและทฤษฎีที่เกี่ยวข้อง', englishTitle: 'Related Theories & Concepts', page: '11', level: 'sub', sectionId: 'section-2-1' },
  { id: 'sec-2-2', number: '2.2', title: 'แนวคิดเกี่ยวกับหัวข้อวิจัย', englishTitle: 'Smart Wardrobe & Virtual Styling Concepts', page: '15', level: 'sub', sectionId: 'section-2-2' },
  { id: 'sec-2-3', number: '2.3', title: 'งานวิจัยที่เกี่ยวข้อง (ในประเทศและต่างประเทศ)', englishTitle: 'Related Domestic & International Studies', page: '19', level: 'sub', sectionId: 'section-2-3' },
  { id: 'sec-2-4', number: '2.4', title: 'กรอบแนวคิดการวิจัย (Conceptual Framework)', englishTitle: 'Research Conceptual Framework', page: '23', level: 'sub', sectionId: 'section-2-4' },
  { id: 'sec-2-5', number: '2.5', title: 'สรุปแนวคิดและงานวิจัยที่เกี่ยวข้อง', englishTitle: 'Summary of Literature Review', page: '25', level: 'sub', sectionId: 'section-2-5' },

  // บทที่ 3
  { id: 'ch-3', number: 'บทที่ 3', title: 'วิธีดำเนินการวิจัย', englishTitle: 'Research Methodology', page: '27', level: 'chapter', sectionId: 'chapter-3' },
  { id: 'sec-3-1', number: '3.1', title: 'รูปแบบการวิจัย', englishTitle: 'Research Design (R&D)', page: '27', level: 'sub', sectionId: 'section-3-1' },
  { id: 'sec-3-2', number: '3.2', title: 'ประชากรและกลุ่มตัวอย่าง', englishTitle: 'Population & Sample Group', page: '28', level: 'sub', sectionId: 'section-3-2' },
  { id: 'sec-3-3', number: '3.3', title: 'เครื่องมือที่ใช้ในการวิจัย', englishTitle: 'Research Instruments', page: '29', level: 'sub', sectionId: 'section-3-3' },
  { id: 'sec-3-4', number: '3.4', title: 'การสร้างและตรวจสอบคุณภาพเครื่องมือ (IOC & Alpha)', englishTitle: 'Instrument Development & Validation', page: '31', level: 'sub', sectionId: 'section-3-4' },
  { id: 'sec-3-5', number: '3.5', title: 'การเก็บรวบรวมข้อมูล', englishTitle: 'Data Collection Procedure', page: '33', level: 'sub', sectionId: 'section-3-5' },
  { id: 'sec-3-6', number: '3.6', title: 'การวิเคราะห์ข้อมูล', englishTitle: 'Data Analysis & Statistics', page: '35', level: 'sub', sectionId: 'section-3-6' },
  { id: 'sec-3-7', number: '3.7', title: 'ขั้นตอนการดำเนินงานวิจัย (Research Flowchart)', englishTitle: 'Operational Flowchart', page: '37', level: 'sub', sectionId: 'section-3-7' },
  { id: 'sec-3-8', number: '3.8', title: 'ระยะเวลาการดำเนินงาน (Timeline / Gantt Chart)', englishTitle: 'Project Timeline & Gantt Chart', page: '39', level: 'sub', sectionId: 'section-3-8' },

  // บทที่ 4
  { id: 'ch-4', number: 'บทที่ 4', title: 'ผลการวิจัย', englishTitle: 'Research Findings & Results', page: '41', level: 'chapter', sectionId: 'chapter-4' },
  { id: 'sec-4-1', number: '4.1', title: 'ข้อมูลทั่วไปของกลุ่มตัวอย่าง', englishTitle: 'Demographic Information of Sample Group', page: '41', level: 'sub', sectionId: 'section-4-1' },
  { id: 'sec-4-2', number: '4.2', title: 'ผลการวิเคราะห์ตามวัตถุประสงค์ข้อที่ 1 (การพัฒนาระบบ)', englishTitle: 'Results for Objective 1: System Development', page: '43', level: 'sub', sectionId: 'section-4-2' },
  { id: 'sec-4-3', number: '4.3', title: 'ผลการวิเคราะห์ตามวัตถุประสงค์ข้อที่ 2 (ประสิทธิภาพและความแม่นยำ)', englishTitle: 'Results for Objective 2: Accuracy & Performance', page: '47', level: 'sub', sectionId: 'section-4-3' },
  { id: 'sec-4-4', number: '4.4', title: 'ผลการวิเคราะห์ตามวัตถุประสงค์ข้อที่ 3 (ความพึงพอใจของกลุ่มตัวอย่าง)', englishTitle: 'Results for Objective 3: User Satisfaction', page: '50', level: 'sub', sectionId: 'section-4-4' },
  { id: 'sec-4-5', number: '4.5', title: 'ผลการทดสอบสมมติฐาน (Paired t-test)', englishTitle: 'Hypothesis Testing Results', page: '53', level: 'sub', sectionId: 'section-4-5' },
  { id: 'sec-4-6', number: '4.6', title: 'สรุปผลการวิจัย', englishTitle: 'Summary of Findings', page: '55', level: 'sub', sectionId: 'section-4-6' },

  // บทที่ 5
  { id: 'ch-5', number: 'บทที่ 5', title: 'สรุป อภิปรายผล และข้อเสนอแนะ', englishTitle: 'Conclusion, Discussion & Recommendations', page: '57', level: 'chapter', sectionId: 'chapter-5' },
  { id: 'sec-5-1', number: '5.1', title: 'สรุปผลการวิจัย', englishTitle: 'Conclusion of Findings', page: '57', level: 'sub', sectionId: 'section-5-1' },
  { id: 'sec-5-2', number: '5.2', title: 'อภิปรายผลการวิจัย', englishTitle: 'Discussion of Results', page: '59', level: 'sub', sectionId: 'section-5-2' },
  { id: 'sec-5-3', number: '5.3', title: 'ข้อค้นพบจากการวิจัย', englishTitle: 'Key Research Discoveries', page: '62', level: 'sub', sectionId: 'section-5-3' },
  { id: 'sec-5-4', number: '5.4', title: 'ข้อเสนอแนะจากผลการวิจัย (การนำไปใช้จริง)', englishTitle: 'Practical Recommendations', page: '64', level: 'sub', sectionId: 'section-5-4' },
  { id: 'sec-5-5', number: '5.5', title: 'ข้อเสนอแนะสำหรับการวิจัยครั้งต่อไป', englishTitle: 'Future Research Directions', page: '66', level: 'sub', sectionId: 'section-5-5' },

  // ส่วนท้าย
  { id: 'back-ref', title: 'บรรณานุกรม / เอกสารอ้างอิง', englishTitle: 'References & Bibliography', page: '68', level: 'back', sectionId: 'section-references' },
  { id: 'back-app', title: 'ภาคผนวก (ภาคผนวก ก - ฉ)', englishTitle: 'Appendices (Appendix A - F)', page: '72', level: 'back', sectionId: 'section-appendices' },
  { id: 'back-app-a', number: 'ภาคผนวก ก', title: 'แบบสอบถามความต้องการและแบบประเมินความพึงพอใจ', englishTitle: 'Questionnaires & Rating Scales', page: '73', level: 'sub', sectionId: 'appendix-a' },
  { id: 'back-app-b', number: 'ภาคผนวก ข', title: 'ผลการตรวจสอบคุณภาพเครื่องมือ (ค่าดัชนี IOC โดยผู้เชี่ยวชาญ)', englishTitle: 'Expert IOC Evaluation Results', page: '77', level: 'sub', sectionId: 'appendix-b' },
  { id: 'back-app-c', number: 'ภาคผนวก ค', title: 'ผลการวิเคราะห์ข้อมูลทางสถิติและค่าความเชื่อมั่น Cronbach Alpha', englishTitle: 'Detailed Statistical Output', page: '80', level: 'sub', sectionId: 'appendix-c' },
  { id: 'back-app-d', number: 'ภาคผนวก ง', title: 'หนังสือขอความอนุเคราะห์และขออนุญาตเก็บรวบรวมข้อมูล', englishTitle: 'Institutional Permission Documents', page: '83', level: 'sub', sectionId: 'appendix-d' },
  { id: 'back-app-e', number: 'ภาคผนวก จ', title: 'ภาพกิจกรรมการดำเนินงานและการทดสอบระบบกับกลุ่มตัวอย่าง', englishTitle: 'Activity & Field Implementation Photographs', page: '85', level: 'sub', sectionId: 'appendix-e' },
  { id: 'back-app-f', number: 'ภาคผนวก ฉ', title: 'เอกสารและข้อมูลประกอบอื่น ๆ (ประวัติผู้วิจัยและมาตรฐานสีชุด)', englishTitle: 'Biographies & Dress Code Standards', page: '88', level: 'sub', sectionId: 'appendix-f' }
];

export const LIST_OF_TABLES: TableItem[] = [
  { number: 'ตารางที่ 1.1', title: 'การจำแนกตัวแปรและตัวชี้วัดความสำเร็จของโครงการวิจัย', page: '7', targetId: 'table-1-1' },
  { number: 'ตารางที่ 3.1', title: 'ผลการประเมินค่าดัชนีความสอดคล้อง (IOC) ของเครื่องมือวิจัยโดยผู้เชี่ยวชาญ 3 ท่าน', page: '32', targetId: 'table-3-1' },
  { number: 'ตารางที่ 3.2', title: 'แผนการดำเนินงานวิจัยและตารางการปฏิบัติงาน (Timeline / Gantt Chart 12 สัปดาห์)', page: '40', targetId: 'table-3-2' },
  { number: 'ตารางที่ 4.1', title: 'ข้อมูลลักษณะทางประชากรศาสตร์ของกลุ่มตัวอย่างนักเรียน ปวช. 3 (N = 30)', page: '42', targetId: 'table-4-1' },
  { number: 'ตารางที่ 4.2', title: 'สรุปผลการทดสอบการทำงานของ 6 โมดูลหลักในระบบสแกนตู้เสื้อผ้า', page: '46', targetId: 'table-4-2' },
  { number: 'ตารางที่ 4.3', title: 'ผลการประเมินประสิทธิภาพความแม่นยำในการแยกแยะประเภทและสกัดสีเสื้อผ้า (N = 250 ภาพ)', page: '48', targetId: 'table-4-3' },
  { number: 'ตารางที่ 4.4', title: 'การเปรียบเทียบระยะเวลาในการตัดสินใจเลือกชุดก่อนและหลังใช้ระบบ (Paired t-test)', page: '54', targetId: 'table-4-4' },
  { number: 'ตารางที่ 4.5', title: 'ผลการประเมินความพึงพอใจของกลุ่มตัวอย่างที่มีต่อระบบสแกนตู้เสื้อผ้าจำแนกรายด้าน (N = 30)', page: '51', targetId: 'table-4-5' },
  { number: 'ตารางที่ 4.6', title: 'ผลการวิเคราะห์ระดับความพึงพอใจของกลุ่มตัวอย่างจำแนกรายข้ออย่างละเอียด (15 ข้อ, N = 30)', page: '52', targetId: 'table-4-5-detail' },
  { number: 'ตารางที่ 5.1', title: 'สรุปการบรรลุเป้าหมายตามวัตถุประสงค์การวิจัยทั้ง 3 ข้อ', page: '58', targetId: 'table-5-1' },
  { number: 'ตารางที่ 5.2', title: 'การวิเคราะห์ผลกระทบเชิงพัฒนาการและคุณค่าเพิ่ม (Developmental & Economic Impact Matrix)', page: '63', targetId: 'table-5-2' }
];

export const LIST_OF_FIGURES: FigureItem[] = [
  { number: 'รูปที่ 1.1', title: 'บริบทปัญหาความสูญเสียเวลาและภาวะ Decision Fatigue ในการเลือกชุดเสื้อผ้ายุคปัจจุบัน', page: '3', targetId: 'fig-1-1' },
  { number: 'รูปที่ 2.1', title: 'แผนภาพกรอบแนวคิดการวิจัย (Conceptual Framework: ตัวแปรต้น → กระบวนการ → ตัวแปรตาม)', page: '24', targetId: 'fig-2-1' },
  { number: 'รูปที่ 2.2', title: 'แผนภาพทฤษฎีการจับคู่สีและความกลมกลืนตามสัดส่วน 60-30-10 ในแฟชั่นเครื่องแต่งกาย', page: '14', targetId: 'fig-2-2' },
  { number: 'รูปที่ 3.1', title: 'ผังงานกระบวนการดำเนินงานวิจัยและพัฒนา (Research and Development Flowchart)', page: '38', targetId: 'fig-3-1' },
  { number: 'รูปที่ 3.2', title: 'สถาปัตยกรรมระบบสแกนตู้เสื้อผ้าและการเชื่อมต่อ 6 โมดูลการทำงาน', page: '30', targetId: 'fig-3-2' },
  { number: 'รูปที่ 4.1', title: 'ภาพหน้าจอระบบจริง: กระบวนการสแกนเสื้อผ้าและการจำแนกหมวดหมู่อัตโนมัติ (Modules 1-2)', page: '44', targetId: 'fig-4-1' },
  { number: 'รูปที่ 4.2', title: 'ภาพหน้าจอระบบจริง: คลังตู้เสื้อผ้าดิจิทัลและผลการจับคู่ชุดสไตล์นักเรียน ปวช. (Modules 3-5)', page: '45', targetId: 'fig-4-2' },
  { number: 'รูปที่ 4.3', title: 'ภาพหน้าจอผลการลองชุดเสมือนจริง (Virtual Try-On Output) และความพร้อมใช้งาน (Module 6)', page: '47', targetId: 'fig-4-3' },
  { number: 'รูปที่ 4.4', title: 'กราฟเปรียบเทียบระยะเวลาการตัดสินใจเลือกชุดก่อนและหลังใช้งานระบบสแกนตู้เสื้อผ้า', page: '54', targetId: 'fig-4-4' },
  { number: 'รูปที่ 4.5', title: 'แผนภูมิเรดาร์แสดงระดับความพึงพอใจ 5 ด้านของกลุ่มตัวอย่างที่มีต่อระบบ (x̄ รวม = 4.67)', page: '52', targetId: 'fig-4-5' },
  { number: 'รูปที่ 5.1', title: 'แผนที่การพัฒนาต่อยอดระบบในอนาคต (Future System Enhancement Roadmap 3 ระยะ)', page: '67', targetId: 'fig-5-1' }
];

export const RESEARCH_APPENDICES: AppendixItem[] = [
  {
    letter: 'ก',
    title: 'แบบสอบถามความต้องการและแบบประเมินความพึงพอใจ',
    englishTitle: 'Questionnaire & User Satisfaction Survey',
    description: 'เครื่องมือวิจัยชุดที่ 1 และ 2 สำหรับเก็บข้อมูลความต้องการของผู้เรียนก่อนการพัฒนา และประเมินความพึงพอใจหลังการทดลองใช้งานระบบ',
    page: '73',
    contentSummary: [
      'ตอนที่ 1: ข้อมูลทั่วไปของผู้ตอบแบบสอบถาม (เพศ, อายุ, การถือครองสมาร์ตโฟน, ปัญหาการเลือกชุด)',
      'ตอนที่ 2: แบบประเมินความพึงพอใจมาตราส่วนประมาณค่า 5 ระดับ (Likert Scale) จำนวน 15 ข้อ ครอบคลุม 5 ด้าน',
      'ตอนที่ 3: แบบสัมภาษณ์ปลายเปิดแสดงความคิดเห็นและข้อเสนอแนะเพิ่มเติม'
    ]
  },
  {
    letter: 'ข',
    title: 'ผลการตรวจสอบคุณภาพเครื่องมือ (ค่าดัชนี IOC โดยผู้เชี่ยวชาญ)',
    englishTitle: 'Instrument Quality Verification (IOC by Experts)',
    description: 'บันทึกการประเมินความสอดคล้องของข้อคำถามกับวัตถุประสงค์การวิจัย (Item-Objective Congruence Index: IOC) โดยผู้เชี่ยวชาญ 3 ท่าน',
    page: '77',
    contentSummary: [
      'ผู้เชี่ยวชาญท่านที่ 1: ดร.สุภาพร ศิริวัฒนาภรณ์ (ผู้เชี่ยวชาญด้านวิธีวิทยาการวิจัยและการวัดผล)',
      'ผู้เชี่ยวชาญท่านที่ 2: อาจารย์พิชัย รัตนประสิทธิ์ (ผู้เชี่ยวชาญด้านวิศวกรรมซอฟต์แวร์และปัญญาประดิษฐ์)',
      'ผู้เชี่ยวชาญท่านที่ 3: อาจารย์วันทนี บุญประสพ (ผู้เชี่ยวชาญด้านหลักสูตรและการจัดการศึกษาอาชีวศึกษา)',
      'สรุปผล IOC ทุกข้อคำถามได้ค่าเฉลี่ย 0.80 - 1.00 (เกณฑ์ผ่าน ≥ 0.50 ทุกข้อ)'
    ]
  },
  {
    letter: 'ค',
    title: 'ผลการวิเคราะห์ข้อมูลทางสถิติและค่าความเชื่อมั่น Cronbach Alpha',
    englishTitle: 'Detailed Statistical Analysis & Reliability Output',
    description: 'ผลการคำนวณค่าสถิติพรรณนา สถิติทดสอบสมมติฐาน Paired Samples t-test และค่าความเชื่อมั่นของเครื่องมือวิจัย',
    page: '80',
    contentSummary: [
      'ผลการคำนวณค่าสัมประสิทธิ์แอลฟ่าของครอนบาค (Cronbach\'s Alpha Coefficient) = 0.924 (ความเชื่อมั่นระดับสูงมาก)',
      'ตารางแสดงผล SPSS / Statistical Software Output ของ Paired Samples Statistics (Before vs. After)',
      'ตารางแจกแจงความถี่ ค่าร้อยละ ค่าเฉลี่ย และส่วนเบี่ยงเบนมาตรฐานรายข้อ'
    ]
  },
  {
    letter: 'ง',
    title: 'หนังสือขอความอนุเคราะห์และขออนุญาตเก็บรวบรวมข้อมูลวิจัย',
    englishTitle: 'Institutional Permission & Consent Documentation',
    description: 'เอกสารราชการและหนังสือขออนุมัติดำเนินโครงการวิจัยภายในวิทยาลัยเทคโนโลยีหมู่บ้านครู',
    page: '83',
    contentSummary: [
      'หนังสือขออนุมัติหัวข้อโครงงานวิจัยจากคณะกรรมการประจำสาขาวิชา',
      'หนังสือขอความอนุเคราะห์จากผู้อำนวยการวิทยาลัยเทคโนโลยีหมู่บ้านครู ในการทดลองใช้ระบบกับนักเรียนกลุ่มตัวอย่าง',
      'แบบฟอร์มยินยอมเข้าร่วมโครงการวิจัย (Informed Consent Form)'
    ]
  },
  {
    letter: 'จ',
    title: 'ภาพกิจกรรมการดำเนินงานและการทดสอบระบบกับกลุ่มตัวอย่าง',
    englishTitle: 'Research Activities & Field Trial Implementation Photos',
    description: 'ภาพถ่ายการประชุมระดมความคิดเห็น การพัฒนาระบบ การทดสอบการสแกนเสื้อผ้าจริง และการเก็บข้อมูลจากนักเรียน ปวช. 3',
    page: '85',
    contentSummary: [
      'ภาพที่ จ.1: การประชุมวางแผนกรอบแนวคิดและออกแบบระบบร่วมกับอาจารย์ที่ปรึกษา',
      'ภาพที่ จ.2: การเก็บภาพตัวอย่างเสื้อผ้านักเรียน ปวช. และเสื้อผ้าทั่วไปจำนวน 250 ตัวอย่าง',
      'ภาพที่ จ.3: การทดสอบระบบเว็บแอปพลิเคชันบนสมาร์ตโฟนของกลุ่มตัวอย่างในห้องปฏิบัติการคอมพิวเตอร์',
      'ภาพที่ จ.4: การสัมภาษณ์ความรู้สึกและบันทึกข้อเสนอแนะเชิงลึกหลังการใช้งาน'
    ]
  },
  {
    letter: 'ฉ',
    title: 'เอกสารและข้อมูลประกอบอื่น ๆ (ประวัติผู้วิจัยและมาตรฐานสีชุด)',
    englishTitle: 'Supplementary Materials & Researcher Biographies',
    description: 'ประวัติการศึกษาของคณะผู้วิจัย และมาตรฐานรหัสสี HEX Code สำหรับเครื่องแบบนักเรียนวิทยาลัยเทคโนโลยีหมู่บ้านครู',
    page: '88',
    contentSummary: [
      'ประวัติย่อของคณะผู้วิจัย 3 ท่าน (ผลงาน, การศึกษา, รางวัลที่ได้รับ)',
      'มาตรฐานตารางเทียบรหัสสีระเบียบการแต่งกาย วิทยาลัยเทคโนโลยีหมู่บ้านครู (HEX / RGB / CMYK)',
      'คู่มือสรุปย่อการใช้งานระบบสแกนตู้เสื้อผ้า (Quick User Guide 1 แผ่น)'
    ]
  }
];

export const RESEARCH_REFERENCES = [
  {
    author: 'กิตติพงษ์ ทรงวิทยา, และ สุรเชษฐ์ เจริญสุข.',
    year: '2566',
    title: 'การประยุกต์ใช้คอมพิวเตอร์วิทัศน์และการเรียนรู้เชิงลึกเพื่อการคัดแยกประเภทสิ่งทอและแฟชั่นเครื่องแต่งกาย',
    source: 'วารสารเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล, 14(2), 45-58.'
  },
  {
    author: 'ณัฐพล ภัทรเดชากุล, และ กัญญาพัชร สิทธิโชค.',
    year: '2567',
    title: 'การพัฒนาระบบผู้เชี่ยวชาญแนะนำชุดแต่งกายอัจฉริยะสำหรับนักเรียนอาชีวศึกษา',
    source: 'รายงานการวิจัยในชั้นเรียน, สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู.'
  },
  {
    author: 'บุญชม ศรีสะอาด.',
    year: '2560',
    title: 'การวิจัยเบื้องต้น (พิมพ์ครั้งที่ 10)',
    source: 'กรุงเทพฯ: สุวีริยาสาส์น.'
  },
  {
    author: 'ศิริชัย พงษ์วิชัย.',
    year: '2564',
    title: 'การวิเคราะห์ข้อมูลทางสถิติด้วยคอมพิวเตอร์ (พิมพ์ครั้งที่ 28)',
    source: 'กรุงเทพฯ: สำนักพิมพ์แห่งจุฬาลงกรณ์มหาวิทยาลัย.'
  },
  {
    author: 'สำนักงานคณะกรรมการการอาชีวศึกษา.',
    year: '2567',
    title: 'ระเบียบว่าด้วยการแต่งกายและเครื่องแบบนักเรียนนักศึกษาระดับประกาศนียบัตรวิชาชีพ (ปวช.)',
    source: 'กรุงเทพฯ: สำนักงานคณะกรรมการการอาชีวศึกษา กระทรวงศึกษาธิการ.'
  },
  {
    author: 'Chen, X., & Zhang, Y.',
    year: '2023',
    title: 'FashionNet: Deep Multimodal Attribute Extraction and Color Palette Coordination for Personalized Wardrobe Management',
    source: 'IEEE Transactions on Multimedia, 25(8), 4112-4126.'
  },
  {
    author: 'Han, X., Wu, Z., Huang, W. X., Matthew, M. R., & Davis, L. S.',
    year: '2022',
    title: 'VITON-HD: High-Resolution Virtual Try-On via Misalignment-Aware Normalization',
    source: 'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 14131-14140.'
  },
  {
    author: 'He, K., Zhang, X., Ren, S., & Sun, J.',
    year: '2016',
    title: 'Deep Residual Learning for Image Recognition',
    source: 'Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 770-778.'
  },
  {
    author: 'Mubankru Technological College.',
    year: '2025',
    title: 'Institutional Quality Assurance Report & Digital Business Technology Curriculum Manual',
    source: 'Bangkok: Mubankru Technological College Academic Office.'
  },
  {
    author: 'Rovinelli, R. J., & Hambleton, R. K.',
    year: '1977',
    title: 'On the use of content specialists in the assessment of criterion-referenced test item validity',
    source: 'Dutch Journal of Educational Research, 2, 49-60.'
  },
  {
    author: 'Smith, J. R., & Johnson, L. B.',
    year: '2024',
    title: 'Cognitive Decision Fatigue in Everyday Micro-Choices: Behavioral Analysis of Morning Routines and Smart Dressing Assistants',
    source: 'Journal of Human-Computer Interaction & Lifestyle Computing, 19(3), 205-224.'
  }
];
