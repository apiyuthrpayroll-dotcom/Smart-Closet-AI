import html2canvas from 'html2canvas';
import { REPORT_METADATA } from '../data/reportData';

export interface ExportProgress {
  current: number;
  total: number;
  status: string;
}

export interface ExportOptions {
  scope: 'all' | 'front' | 1 | 2 | 3 | 4 | 5 | 'back';
  filename?: string;
  onProgress?: (progress: ExportProgress) => void;
}

export interface CapturedImageInfo {
  filename: string;
  base64: string;
  dataUrl: string;
  number: string;
  title: string;
  desc: string;
  width: number;
  height: number;
}

/**
 * Render the school logo vector (/mbc-logo.svg) to a crisp high-res PNG canvas and return base64
 */
export async function getSchoolLogoPng(): Promise<CapturedImageInfo | null> {
  return new Promise(async (resolve) => {
    try {
      let svgDataUrl = '/mbc-logo.svg';
      try {
        const res = await fetch('/mbc-logo.svg');
        if (res.ok) {
          const svgText = await res.text();
          svgDataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgText);
        }
      } catch (e) {
        console.warn('Direct fetch of logo svg failed, using path fallback', e);
      }

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }
        ctx.clearRect(0, 0, 400, 400);
        ctx.drawImage(img, 0, 0, 400, 400);
        const dataUrl = canvas.toDataURL('image/png');
        const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
        resolve({
          filename: 'school_logo.png',
          base64,
          dataUrl,
          number: 'LOGO',
          title: 'ตราสัญลักษณ์วิทยาลัยเทคโนโลยีหมู่บ้านครู',
          desc: 'School Emblem',
          width: 120,
          height: 120,
        });
      };
      img.onerror = () => resolve(null);
      img.src = svgDataUrl;
    } catch {
      resolve(null);
    }
  });
}

/**
 * Capture all figures (diagrams and UI mockups) within an element as PNG images
 */
export async function captureFiguresAsImages(
  sourceEl: HTMLElement,
  onProgress?: (progress: ExportProgress) => void
): Promise<Map<string, CapturedImageInfo>> {
  const imagesMap = new Map<string, CapturedImageInfo>();

  // 1. Capture School Logo first
  onProgress?.({
    current: 1,
    total: 10,
    status: 'กำลังแปลงตราสัญลักษณ์สถานศึกษาเป็นรูปภาพความละเอียดสูง...'
  });

  const schoolLogo = await getSchoolLogoPng();
  if (schoolLogo) {
    imagesMap.set('school_logo.png', schoolLogo);
  }

  // 2. Capture all <figure> elements in DOM
  const figures = Array.from(sourceEl.querySelectorAll('figure')) as HTMLElement[];
  const totalTasks = figures.length + 1;

  for (let i = 0; i < figures.length; i++) {
    const fig = figures[i];
    const number = fig.getAttribute('data-figure-number') || 
                   fig.querySelector('figcaption span')?.textContent?.trim() || 
                   `รูปที่ ${i + 1}`;
    const title = fig.getAttribute('data-figure-title') || 
                  fig.querySelector('figcaption')?.textContent?.replace(number, '').trim() || 
                  '';
    const desc = fig.getAttribute('data-figure-desc') || 
                 fig.querySelector('figcaption p')?.textContent?.trim() || 
                 '';

    onProgress?.({
      current: i + 2,
      total: totalTasks,
      status: `กำลังประมวลผลรูปภาพและ Mockup (${i + 1}/${figures.length}): ${number}`
    });

    const graphicEl = (fig.querySelector('.academic-figure-graphic') || 
                       fig.querySelector('.academic-figure-content') || 
                       fig) as HTMLElement;

    // Check if the figure contains a realistic photo <img>
    const imgEl = graphicEl.querySelector('img') as HTMLImageElement | null;
    if (imgEl && imgEl.src) {
      try {
        const directCanvas = document.createElement('canvas');
        const ctx = directCanvas.getContext('2d');
        const tempImg = new Image();
        tempImg.crossOrigin = 'anonymous';
        await new Promise((resolve, reject) => {
          tempImg.onload = resolve;
          tempImg.onerror = reject;
          tempImg.src = imgEl.src;
        });

        directCanvas.width = tempImg.naturalWidth || 800;
        directCanvas.height = tempImg.naturalHeight || 600;
        ctx?.drawImage(tempImg, 0, 0);

        const dataUrl = directCanvas.toDataURL('image/jpeg', 0.92);
        const base64 = dataUrl.replace(/^data:image\/jpeg;base64,/, '');
        const filename = `fig_${i + 1}.jpg`;

        imagesMap.set(filename, {
          filename,
          base64,
          dataUrl,
          number,
          title,
          desc,
          width: Math.min(Math.round(directCanvas.width), 560),
          height: Math.round((directCanvas.height / directCanvas.width) * Math.min(Math.round(directCanvas.width), 560)),
        });
        continue;
      } catch (err) {
        console.warn(`Direct image conversion fallback to html2canvas for ${number}:`, err);
      }
    }

    try {
      const canvas = await html2canvas(graphicEl, {
        scale: 2.0, // High quality 2x resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        imageTimeout: 15000,
      });

      const dataUrl = canvas.toDataURL('image/png');
      const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
      const filename = `fig_${i + 1}.png`;

      imagesMap.set(filename, {
        filename,
        base64,
        dataUrl,
        number,
        title,
        desc,
        width: Math.min(Math.round(canvas.width / 2.0), 600),
        height: Math.round(canvas.height / 2.0),
      });
    } catch (err) {
      console.warn(`Could not render figure ${number} with html2canvas:`, err);
    }
  }

  return imagesMap;
}

/**
 * Clean and prepare DOM element for Word export, inserting embedded image tags & academic styling
 */
function cleanElementForWord(
  sourceEl: HTMLElement, 
  imagesMap: Map<string, CapturedImageInfo>
): HTMLElement {
  const clone = sourceEl.cloneNode(true) as HTMLElement;

  // 1. Remove all elements marked as print:hidden or interactive UI
  const removeSelectors = [
    '.print\\:hidden',
    'button',
    'nav',
    'input',
    'textarea',
    'select',
    '[role="button"]',
    '[aria-hidden="true"].sr-only',
    '.quick-nav-bar'
  ];

  removeSelectors.forEach(selector => {
    clone.querySelectorAll(selector).forEach(el => el.remove());
  });

  // 2. Replace School Logo instances with embedded school_logo.png
  const logoImgs = Array.from(clone.querySelectorAll('img[src*="mbc-logo"], .school-logo-img, #school-cover-logo')) as HTMLElement[];
  logoImgs.forEach(el => {
    const parent = el.parentElement;
    const logoWrapper = document.createElement('div');
    logoWrapper.setAttribute('align', 'center');
    logoWrapper.setAttribute('style', 'text-align: center; margin: 14pt auto 18pt auto; display: block;');
    logoWrapper.innerHTML = `
      <p align="center" style="text-align: center; margin: 12pt auto 16pt auto;">
        <img src="school_logo.png" width="115" height="115" style="display: block; margin: 0 auto; width: 115px; height: 115px;" alt="ตราสัญลักษณ์วิทยาลัยเทคโนโลยีหมู่บ้านครู" />
      </p>
    `;
    if (parent) {
      parent.replaceChild(logoWrapper, el);
    }
  });

  // 3. Replace figures with clean Word-compatible image tables
  const clonedFigures = Array.from(clone.querySelectorAll('figure')) as HTMLElement[];
  clonedFigures.forEach((fig, i) => {
    const jpgFilename = `fig_${i + 1}.jpg`;
    const pngFilename = `fig_${i + 1}.png`;
    const imgInfo = imagesMap.get(jpgFilename) || imagesMap.get(pngFilename);
    if (imgInfo) {
      const figureWrapper = document.createElement('div');
      figureWrapper.setAttribute('align', 'center');
      figureWrapper.setAttribute('style', 'text-align: center; margin: 16pt auto 22pt auto; page-break-inside: avoid;');
      figureWrapper.innerHTML = `
        <table align="center" border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto; border: none; text-align: center; width: 100%; max-width: 600px;">
          <tr>
            <td align="center" style="border: 1pt solid #cbd5e1; padding: 6pt; background-color: #ffffff; text-align: center;">
              <p align="center" style="margin: 0; text-align: center;">
                <img src="${imgInfo.filename}" 
                     width="${imgInfo.width}" 
                     style="max-width: 100%; height: auto; display: block; margin: 0 auto;" 
                     alt="${imgInfo.number} ${imgInfo.title}" />
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" style="border: none; padding-top: 8pt; text-align: center;">
              <p align="center" style="font-family: 'TH Sarabun New', Sarabun, sans-serif; font-size: 14pt; font-weight: bold; color: #1e293b; line-height: 1.3; margin: 4pt 0 0 0;">
                <span style="color: #4338ca;">${imgInfo.number}</span> ${imgInfo.title}
              </p>
              ${imgInfo.desc ? `<p align="center" style="font-family: 'TH Sarabun New', Sarabun, sans-serif; font-size: 12pt; color: #64748b; margin-top: 2pt; margin-bottom: 0; line-height: 1.3;">${imgInfo.desc}</p>` : ''}
            </td>
          </tr>
        </table>
      `;
      fig.parentNode?.replaceChild(figureWrapper, fig);
    }
  });

  // 4. Clean loose SVGs
  clone.querySelectorAll('svg').forEach(svg => {
    svg.remove();
  });

  // 4.1 Transform Outer Cover (#front-cover-section) specifically for Microsoft Word
  const frontCover = clone.querySelector('#front-cover-section') as HTMLElement;
  if (frontCover) {
    frontCover.innerHTML = `
      <table align="center" border="0" cellpadding="20" cellspacing="0" width="100%" style="border: 4.5pt double #0f172a; margin: 0 auto; text-align: center; border-collapse: collapse;">
        <tr>
          <td align="center" style="border: none; text-align: center; padding: 24pt 16pt;">
            <p align="center" style="text-align: center; margin: 0 auto 12pt auto;">
              <img src="school_logo.png" width="120" height="120" style="display: block; margin: 0 auto; width: 120px; height: 120px;" alt="ตราสัญลักษณ์วิทยาลัยเทคโนโลยีหมู่บ้านครู" />
            </p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; font-weight: bold; color: #475569; margin: 0; text-align: center; text-indent: 0pt;">
              สำนักงานคณะกรรมการการอาชีวศึกษา กระทรวงศึกษาธิการ
            </p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 18pt; font-weight: bold; color: #0f172a; margin: 4pt 0 16pt 0; text-align: center; text-indent: 0pt;">
              วิทยาลัยเทคโนโลยีหมู่บ้านครู
            </p>

            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1.5pt solid #cbd5e1; border-bottom: 1.5pt solid #cbd5e1; margin: 16pt 0 20pt 0; border-collapse: collapse;">
              <tr>
                <td align="center" style="border: none; padding: 14pt 8pt; text-align: center;">
                  <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; font-weight: bold; color: #b91c1c; margin: 0 0 6pt 0; text-align: center; text-indent: 0pt;">
                    รายงานโครงการวิจัยฉบับสมบูรณ์ (5 บท)
                  </p>
                  <h1 align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 24pt; font-weight: bold; color: #0f172a; margin: 6pt 0 8pt 0; text-align: center; line-height: 1.3;">
                    การพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที
                  </h1>
                  <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; font-style: italic; color: #334155; margin: 4pt 0 0 0; text-align: center; text-indent: 0pt; text-transform: uppercase;">
                    DEVELOPMENT OF SMART WARDROBE SCANNING AND INSTANT READY-TO-WEAR OUTFIT STYLIST SYSTEM
                  </p>
                </td>
              </tr>
            </table>

            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; font-weight: bold; color: #1e293b; margin: 18pt 0 6pt 0; text-align: center; text-indent: 0pt;">
              ผู้จัดทำโครงการ
            </p>
            <table align="center" border="0" cellpadding="2" cellspacing="0" style="margin: 0 auto; text-align: center; border: none; border-collapse: collapse;">
              <tr><td align="center" style="border: none; padding: 2pt 8pt; font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; color: #0f172a; text-align: center;">1. นายภูวิศ วงศ์สิริโชค (รหัสประจำตัว 66209010001)</td></tr>
              <tr><td align="center" style="border: none; padding: 2pt 8pt; font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; color: #0f172a; text-align: center;">2. นางสาวกัญญารัตน์ สุขสวัสดิ์ (รหัสประจำตัว 66209010014)</td></tr>
              <tr><td align="center" style="border: none; padding: 2pt 8pt; font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; color: #0f172a; text-align: center;">3. นายธนกฤต ประเสริฐชัย (รหัสประจำตัว 66209010025)</td></tr>
            </table>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #475569; margin: 6pt 0 0 0; text-align: center; text-indent: 0pt;">
              นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 ห้อง 1 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล
            </p>

            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #334155; margin: 28pt 0 0 0; line-height: 1.5; text-align: center; text-indent: 0pt;">
              รายงานนี้เป็นส่วนหนึ่งของวิชาโครงงาน (รหัสวิชา 20204-8501)<br/>
              หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) พุทธศักราช 2567<br/>
              สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู<br/>
              <strong style="font-size: 15pt; color: #0f172a;">ปีการศึกษา 2568</strong>
            </p>
          </td>
        </tr>
      </table>
    `;
  }

  // 4.2 Transform Inner Cover (#front-inner-cover-section) specifically for Microsoft Word
  const innerCover = clone.querySelector('#front-inner-cover-section') as HTMLElement;
  if (innerCover) {
    innerCover.innerHTML = `
      <table align="center" border="0" cellpadding="10" cellspacing="0" width="100%" style="border: 1.5pt solid #94a3b8; margin: 0 auto; text-align: center; border-collapse: collapse;">
        <tr>
          <td align="center" style="border: none; text-align: center; padding: 18pt 16pt;">
            <p align="right" style="font-family: 'TH Sarabun New', sans-serif; font-size: 13pt; color: #64748b; margin: 0 0 10pt 0; text-align: right; text-indent: 0pt;">
              หน้า ข (ปกใน)
            </p>
            <p align="center" style="text-align: center; margin: 0 auto 12pt auto;">
              <img src="school_logo.png" width="110" height="110" style="display: block; margin: 0 auto; width: 110px; height: 110px;" alt="ตราสัญลักษณ์วิทยาลัยเทคโนโลยีหมู่บ้านครู" />
            </p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; font-weight: bold; color: #475569; margin: 0 0 10pt 0; text-align: center; text-indent: 0pt;">
              รหัสวิชา 20204-8501 โครงงาน (Project)
            </p>
            <h2 align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 22pt; font-weight: bold; color: #0f172a; margin: 4pt 0 6pt 0; text-align: center; line-height: 1.3;">
              การพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที
            </h2>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; font-style: italic; color: #334155; margin: 0 0 18pt 0; text-align: center; text-indent: 0pt; text-transform: uppercase;">
              DEVELOPMENT OF SMART WARDROBE SCANNING AND INSTANT READY-TO-WEAR OUTFIT STYLIST SYSTEM
            </p>

            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; font-weight: bold; color: #1e293b; margin: 16pt 0 6pt 0; text-align: center; text-indent: 0pt;">
              ผู้จัดทำโครงการ
            </p>
            <table align="center" border="0" cellpadding="2" cellspacing="0" style="margin: 0 auto; text-align: center; border: none; border-collapse: collapse;">
              <tr><td align="center" style="border: none; padding: 2pt 8pt; font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; color: #0f172a; text-align: center;">1. นายภูวิศ วงศ์สิริโชค (รหัสประจำตัว 66209010001)</td></tr>
              <tr><td align="center" style="border: none; padding: 2pt 8pt; font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; color: #0f172a; text-align: center;">2. นางสาวกัญญารัตน์ สุขสวัสดิ์ (รหัสประจำตัว 66209010014)</td></tr>
              <tr><td align="center" style="border: none; padding: 2pt 8pt; font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; color: #0f172a; text-align: center;">3. นายธนกฤต ประเสริฐชัย (รหัสประจำตัว 66209010025)</td></tr>
            </table>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #475569; margin: 4pt 0 0 0; text-align: center; text-indent: 0pt;">
              นักเรียนระดับประกาศนียบัตรวิชาชีพ (ปวช.) ชั้นปีที่ 3 ห้อง 1 แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล
            </p>

            <table align="center" border="0" cellpadding="2" cellspacing="0" style="margin: 16pt auto; text-align: center; border-top: 1pt solid #cbd5e1; border-bottom: 1pt solid #cbd5e1; border-collapse: collapse;">
              <tr>
                <td align="center" style="border: none; padding: 8pt 20pt; text-align: center;">
                  <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; color: #0f172a; margin: 0 0 4pt 0; text-align: center; text-indent: 0pt;">
                    ครูที่ปรึกษาโครงการ
                  </p>
                  <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; color: #1e293b; margin: 2pt 0; text-align: center; text-indent: 0pt;">
                    อาจารย์ณัฐพล ภัทรเดชากุล (ครูที่ปรึกษาหลัก)
                  </p>
                  <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; color: #1e293b; margin: 2pt 0; text-align: center; text-indent: 0pt;">
                    อาจารย์กัญญาพัชร สิทธิโชค (ครูที่ปรึกษาร่วม)
                  </p>
                </td>
              </tr>
            </table>

            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #334155; margin: 18pt 0 0 0; line-height: 1.5; text-align: center; text-indent: 0pt;">
              รายงานนี้เป็นส่วนหนึ่งของวิชาโครงงาน (รหัสวิชา 20204-8501)<br/>
              หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) พุทธศักราช 2567<br/>
              สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู<br/>
              <strong style="font-size: 15pt; color: #0f172a;">ปีการศึกษา 2568</strong>
            </p>
          </td>
        </tr>
      </table>
    `;
  }

  // 4.3 Transform Approval Section (#front-approval-section) with EXACT 2-col, 3-col, and 1-col signature tables
  const approvalSec = clone.querySelector('#front-approval-section') as HTMLElement;
  if (approvalSec) {
    approvalSec.innerHTML = `
      <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border: none; margin-bottom: 8pt; border-collapse: collapse;">
        <tr>
          <td align="left" style="border: none; font-family: 'TH Sarabun New', sans-serif; font-size: 12pt; color: #64748b;">แบบฟอร์ม บร-ค-01 (สอศ.)</td>
          <td align="right" style="border: none; font-family: 'TH Sarabun New', sans-serif; font-size: 12pt; color: #64748b;">หน้า ค (ใบรับรองโครงการ)</td>
        </tr>
      </table>

      <p align="center" style="text-align: center; margin: 0 auto 8pt auto;">
        <img src="school_logo.png" width="90" height="90" style="display: block; margin: 0 auto; width: 90px; height: 90px;" alt="ตราสัญลักษณ์วิทยาลัยเทคโนโลยีหมู่บ้านครู" />
      </p>
      <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 17pt; font-weight: bold; color: #0f172a; margin: 2pt 0; text-align: center; text-indent: 0pt;">
        วิทยาลัยเทคโนโลยีหมู่บ้านครู
      </p>
      <h2 align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 22pt; font-weight: bold; color: #0f172a; margin: 4pt 0 2pt 0; text-align: center; text-decoration: underline;">
        ใบรับรองโครงการ
      </h2>
      <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 13pt; color: #64748b; margin: 0 0 12pt 0; text-align: center; text-indent: 0pt;">
        Certificate of Project Approval (สอศ. กระทรวงศึกษาธิการ)
      </p>

      <table border="1" cellpadding="6" cellspacing="0" width="100%" style="border-collapse: collapse; margin: 10pt 0; border: 1pt solid #94a3b8; font-family: 'TH Sarabun New', sans-serif;">
        <tr>
          <td width="25%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">ชื่อโครงการ:</td>
          <td style="border: 1pt solid #cbd5e1; padding: 5pt 8pt; font-size: 15pt; font-weight: bold; color: #0f172a;">การพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที</td>
        </tr>
        <tr>
          <td width="25%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 5pt 8pt; font-size: 15pt; color: #334155;">ชื่อภาษาอังกฤษ:</td>
          <td style="border: 1pt solid #cbd5e1; padding: 5pt 8pt; font-size: 15pt; font-style: italic; color: #334155;">DEVELOPMENT OF SMART WARDROBE SCANNING AND INSTANT READY-TO-WEAR OUTFIT STYLIST SYSTEM</td>
        </tr>
        <tr>
          <td width="25%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 5pt 8pt; font-size: 15pt; vertical-align: top; color: #0f172a;">ผู้จัดทำโครงการ:</td>
          <td style="border: 1pt solid #cbd5e1; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">
            1. นายภูวิศ วงศ์สิริโชค (รหัสประจำตัว 66209010001)<br/>
            2. นางสาวกัญญารัตน์ สุขสวัสดิ์ (รหัสประจำตัว 66209010014)<br/>
            3. นายธนกฤต ประเสริฐชัย (รหัสประจำตัว 66209010025)
          </td>
        </tr>
        <tr>
          <td width="25%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">หลักสูตร:</td>
          <td style="border: 1pt solid #cbd5e1; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">ประกาศนียบัตรวิชาชีพ (ปวช.) พุทธศักราช 2567</td>
        </tr>
        <tr>
          <td width="25%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">สาขาวิชา / แผนก:</td>
          <td style="border: 1pt solid #cbd5e1; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">พาณิชยกรรม &bull; แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล</td>
        </tr>
        <tr>
          <td width="25%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">ปีการศึกษา:</td>
          <td style="border: 1pt solid #cbd5e1; padding: 5pt 8pt; font-size: 15pt; color: #0f172a;">2568</td>
        </tr>
      </table>

      <p style="font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; text-indent: 1.25cm; text-align: justify; margin: 10pt 0 14pt 0; line-height: 1.5; color: #1e293b;">
        คณะกรรมการสอบและประเมินโครงการ ได้พิจารณาเอกสารรายงานและผลงานการพัฒนาระบบฉบับนี้แล้ว มีมติเห็นชอบให้ <strong>อนุมัตินับเป็นส่วนหนึ่งของการศึกษาตามหลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) พุทธศักราช 2567</strong> ของ สำนักงานคณะกรรมการการอาชีวศึกษา กระทรวงศึกษาธิการ
      </p>

      <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; font-weight: bold; color: #0f172a; margin: 14pt 0 10pt 0; border-bottom: 1.5pt solid #475569; padding-bottom: 3pt; text-align: center; text-indent: 0pt;">
        คณะกรรมการสอบและประเมินโครงการ
      </p>

      <!-- Row 1: 2 Advisory Signatures (Exact Match to Image 1) -->
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: none; margin: 10pt 0 14pt 0; border-collapse: collapse;">
        <tr>
          <td align="center" width="50%" valign="top" style="border: none; text-align: center; padding: 4pt 10pt;">
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #64748b; margin: 0; line-height: 1; letter-spacing: 2px; text-align: center; text-indent: 0pt;">.....................................................</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; font-weight: bold; color: #0f172a; margin: 4pt 0 1pt 0; text-align: center; text-indent: 0pt;">(อาจารย์ณัฐพล ภัทรเดชากุล)</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; color: #334155; margin: 1pt 0; text-align: center; text-indent: 0pt;">ครูที่ปรึกษาโครงการ</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 13pt; color: #64748b; margin: 1pt 0 0 0; text-align: center; text-indent: 0pt;">วันที่ ..... เดือน ................ พ.ศ. 2568</p>
          </td>
          <td align="center" width="50%" valign="top" style="border: none; text-align: center; padding: 4pt 10pt;">
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #64748b; margin: 0; line-height: 1; letter-spacing: 2px; text-align: center; text-indent: 0pt;">.....................................................</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 16pt; font-weight: bold; color: #0f172a; margin: 4pt 0 1pt 0; text-align: center; text-indent: 0pt;">(อาจารย์กัญญาพัชร สิทธิโชค)</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; color: #334155; margin: 1pt 0; text-align: center; text-indent: 0pt;">ครูที่ปรึกษาร่วม</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 13pt; color: #64748b; margin: 1pt 0 0 0; text-align: center; text-indent: 0pt;">วันที่ ..... เดือน ................ พ.ศ. 2568</p>
          </td>
        </tr>
      </table>

      <!-- Row 2: 3 Examination Committee Signatures (Exact Match to Image 1) -->
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: none; margin: 12pt 0 10pt 0; border-collapse: collapse; border-top: 1pt solid #cbd5e1; padding-top: 10pt;">
        <tr>
          <td align="center" width="33.33%" valign="top" style="border: none; text-align: center; padding: 4pt 4pt;">
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #64748b; margin: 0; line-height: 1; letter-spacing: 1px; text-align: center; text-indent: 0pt;">.....................................................</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; color: #0f172a; margin: 4pt 0 1pt 0; text-align: center; text-indent: 0pt;">(อาจารย์พิชัย รัตนประสิทธิ์)</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #334155; margin: 1pt 0 0 0; text-align: center; text-indent: 0pt;">กรรมการผู้ทรงคุณวุฒิ</p>
          </td>
          <td align="center" width="33.33%" valign="top" style="border: none; text-align: center; padding: 4pt 4pt;">
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #64748b; margin: 0; line-height: 1; letter-spacing: 1px; text-align: center; text-indent: 0pt;">.....................................................</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; color: #0f172a; margin: 4pt 0 1pt 0; text-align: center; text-indent: 0pt;">(อาจารย์วันทนี บุญประสพ)</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #334155; margin: 1pt 0 0 0; text-align: center; text-indent: 0pt;">หัวหน้าแผนกวิชาเทคโนโลยีธุรกิจดิจิทัล</p>
          </td>
          <td align="center" width="33.33%" valign="top" style="border: none; text-align: center; padding: 4pt 4pt;">
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #64748b; margin: 0; line-height: 1; letter-spacing: 1px; text-align: center; text-indent: 0pt;">.....................................................</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; color: #0f172a; margin: 4pt 0 1pt 0; text-align: center; text-indent: 0pt;">(อาจารย์ประจักษ์ เกียรติภิญโญ)</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #334155; margin: 1pt 0 0 0; text-align: center; text-indent: 0pt;">รองผู้อำนวยการฝ่ายวิชาการ</p>
          </td>
        </tr>
      </table>

      <!-- Row 3 & 4: Director Approval (Exact Match to Image 1) -->
      <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; color: #1e293b; margin: 16pt 0 6pt 0; text-align: center; text-indent: 0pt;">
        อนุมัติให้เป็นส่วนหนึ่งของหลักสูตร
      </p>
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: none; margin: 2pt auto 0 auto; border-collapse: collapse;">
        <tr>
          <td align="center" style="border: none; text-align: center; padding: 4pt;">
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #64748b; margin: 0; line-height: 1; letter-spacing: 2px; text-align: center; text-indent: 0pt;">.....................................................</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 17pt; font-weight: bold; color: #0f172a; margin: 4pt 0 1pt 0; text-align: center; text-indent: 0pt;">(ดร.สุภาพร ศิริวัฒนานภรณ์)</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; color: #334155; margin: 1pt 0; text-align: center; text-indent: 0pt;">ผู้อำนวยการวิทยาลัยเทคโนโลยีหมู่บ้านครู</p>
            <p align="center" style="font-family: 'TH Sarabun New', sans-serif; font-size: 13pt; color: #64748b; margin: 1pt 0 0 0; text-align: center; text-indent: 0pt;">วันที่ ..... เดือน ................ พ.ศ. 2568</p>
          </td>
        </tr>
      </table>
    `;
  }

  // 4.4 Transform Thai & English Abstract headers for Word
  const abstractTh = clone.querySelector('#front-abstract-th-section');
  if (abstractTh) {
    const headerBox = abstractTh.querySelector('.bg-slate-50');
    if (headerBox) {
      headerBox.outerHTML = `
        <table border="1" cellpadding="5" cellspacing="0" width="100%" style="border-collapse: collapse; margin: 10pt 0 14pt 0; border: 1pt solid #cbd5e1; font-family: 'TH Sarabun New', sans-serif;">
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">ชื่อโครงการ:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt; font-weight: bold;">การพัฒนาระบบสแกนตู้เสื้อผ้าแล้วจัดชุดที่ใช้ได้ทันที</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt; vertical-align: top;">ผู้จัดทำโครงการ:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">1. นายภูวิศ วงศ์สิริโชค (66209010001) &nbsp; 2. นางสาวกัญญารัตน์ สุขสวัสดิ์ (66209010014) &nbsp; 3. นายธนกฤต ประเสริฐชัย (66209010025)</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">ครูที่ปรึกษา:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">อาจารย์ณัฐพล ภัทรเดชากุล (อาจารย์ที่ปรึกษาหลัก), อาจารย์กัญญาพัชร สิทธิโชค (อาจารย์ที่ปรึกษาร่วม)</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">ระดับการศึกษา:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">ประกาศนียบัตรวิชาชีพ (ปวช.) สาขาวิชาพาณิชยกรรม แผนกวิชาเทคโนโลยีธุรกิจดิจิทัล</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">สถานศึกษา:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">วิทยาลัยเทคโนโลยีหมู่บ้านครู สังกัดสำนักงานคณะกรรมการการอาชีวศึกษา ปีการศึกษา 2568</td>
          </tr>
        </table>
      `;
    }
  }

  const abstractEn = clone.querySelector('#front-abstract-en-section');
  if (abstractEn) {
    const headerBoxEn = abstractEn.querySelector('.bg-slate-50');
    if (headerBoxEn) {
      headerBoxEn.outerHTML = `
        <table border="1" cellpadding="5" cellspacing="0" width="100%" style="border-collapse: collapse; margin: 10pt 0 14pt 0; border: 1pt solid #cbd5e1; font-family: 'TH Sarabun New', sans-serif;">
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">Project Title:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt; font-weight: bold;">DEVELOPMENT OF SMART WARDROBE SCANNING AND INSTANT READY-TO-WEAR OUTFIT STYLIST SYSTEM</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt; vertical-align: top;">Authors:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">1. Mr. Phuwis Wongsirichok &nbsp; 2. Ms. Kanyarat Suksawat &nbsp; 3. Mr. Thanakrit Prasertchai</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">Advisors:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">Mr. Nattapon Patradechakun (Principal), Ms. Kanyapat Sittichok (Co-Advisor)</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">Degree & Major:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">Vocational Certificate (Voc. Cert.), Digital Business Technology</td>
          </tr>
          <tr>
            <td width="24%" style="border: 1pt solid #cbd5e1; background-color: #f8fafc; font-weight: bold; padding: 4pt 8pt; font-size: 15pt;">Institution:</td>
            <td style="border: 1pt solid #cbd5e1; padding: 4pt 8pt; font-size: 15pt;">Muban Chombueng / Mubankru Technological College, Academic Year 2025</td>
          </tr>
        </table>
      `;
    }
  }

  // 4.5 Transform Table of Contents, List of Tables, List of Figures into aligned 2-column Word tables
  const tocSections = [
    clone.querySelector('#front-toc-section'),
    clone.querySelector('#front-lot-section'),
    clone.querySelector('#front-lof-section')
  ];

  tocSections.forEach(sec => {
    if (!sec) return;
    const items = sec.querySelectorAll('.divide-y > div');
    if (items.length > 0) {
      const tocTable = document.createElement('table');
      tocTable.setAttribute('border', '0');
      tocTable.setAttribute('cellpadding', '2');
      tocTable.setAttribute('cellspacing', '0');
      tocTable.setAttribute('width', '100%');
      tocTable.style.borderCollapse = 'collapse';
      tocTable.style.margin = '10pt 0';

      items.forEach(item => {
        const textEl = item.querySelector('.truncate');
        const pageEl = item.querySelector('.font-mono.text-xs.font-semibold') || item.querySelector('.text-right');
        const numberEl = item.querySelector('.font-mono.text-xs:not(.text-right)');

        const numText = numberEl?.textContent?.trim() || '';
        const titleText = textEl?.textContent?.trim() || item.textContent?.trim() || '';
        const pageText = pageEl?.textContent?.trim() || '';

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td align="left" style="border: none; padding: 3pt 4pt; font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; color: #1e293b;">
            ${numText ? `<strong>${numText}</strong> &nbsp;` : ''}${titleText}
          </td>
          <td align="right" width="60" style="border: none; padding: 3pt 4pt; font-family: 'TH Sarabun New', sans-serif; font-size: 15pt; font-weight: bold; color: #334155; white-space: nowrap; text-align: right;">
            ${pageText}
          </td>
        `;
        tocTable.appendChild(tr);
      });

      const container = sec.querySelector('.divide-y');
      if (container) {
        container.parentNode?.replaceChild(tocTable, container);
      }
    }
  });

  // 5. Ensure all academic data tables have proper Word borders, cell padding, and alignment
  clone.querySelectorAll('table').forEach(table => {
    // If it's a figure table or signature layout table or cover table, skip data table borders override
    if (table.getAttribute('border') === '0') return;

    table.setAttribute('border', '1');
    table.setAttribute('cellspacing', '0');
    table.setAttribute('cellpadding', '6');
    table.setAttribute('width', '100%');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    table.style.margin = '12pt 0 16pt 0';
    table.style.borderTop = '1.5pt solid #0f172a';
    table.style.borderBottom = '1.5pt solid #0f172a';
    table.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
  });

  // 6. Style all th and td cells for authentic Thai thesis / project report rendering
  clone.querySelectorAll('th').forEach(th => {
    const el = th as HTMLElement;
    el.style.backgroundColor = '#f8fafc';
    el.style.color = '#0f172a';
    el.style.fontWeight = 'bold';
    el.style.borderTop = '1.5pt solid #0f172a';
    el.style.borderBottom = '1pt solid #0f172a';
    el.style.borderLeft = '0.5pt solid #cbd5e1';
    el.style.borderRight = '0.5pt solid #cbd5e1';
    el.style.padding = '6pt 8pt';
    el.style.fontSize = '14pt';
    el.style.textAlign = 'center';
    el.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
  });

  clone.querySelectorAll('td').forEach(td => {
    if (td.closest('table')?.getAttribute('border') === '0') return;

    const el = td as HTMLElement;
    el.style.borderBottom = '0.5pt solid #cbd5e1';
    el.style.borderLeft = '0.5pt solid #cbd5e1';
    el.style.borderRight = '0.5pt solid #cbd5e1';
    el.style.padding = '5pt 8pt';
    el.style.fontSize = '14pt';
    el.style.verticalAlign = 'top';
    el.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
  });

  // 7. Format Chapter Title blocks to center and bold in Word
  clone.querySelectorAll('h2').forEach(h2 => {
    const text = h2.textContent || '';
    if (text.includes('บทที่') || text.includes('ปก') || text.includes('บทคัดย่อ') || text.includes('สารบัญ') || text.includes('กิตติกรรม') || text.includes('บรรณานุกรม') || text.includes('ภาคผนวก')) {
      h2.style.textAlign = 'center';
      h2.setAttribute('align', 'center');
      h2.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
      h2.style.fontSize = '22pt';
      h2.style.fontWeight = 'bold';
      h2.style.marginTop = '18pt';
      h2.style.marginBottom = '12pt';
    }
  });

  // 8. Style Headings 1.1, 1.2, 2.1... to be left-aligned and bold 18pt
  clone.querySelectorAll('h3').forEach(h3 => {
    h3.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
    h3.style.fontSize = '18pt';
    h3.style.fontWeight = 'bold';
    h3.style.marginTop = '14pt';
    h3.style.marginBottom = '6pt';
    h3.style.textAlign = 'left';
    h3.style.pageBreakAfter = 'avoid';
  });

  // 9. Style Sub-headings (h4) to be 16pt bold
  clone.querySelectorAll('h4').forEach(h4 => {
    h4.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
    h4.style.fontSize = '16pt';
    h4.style.fontWeight = 'bold';
    h4.style.marginTop = '10pt';
    h4.style.marginBottom = '4pt';
    h4.style.textAlign = 'left';
    h4.style.pageBreakAfter = 'avoid';
  });

  // 10. Format paragraphs with standard Thai academic indent (1.25 cm / 36pt) and justified text
  clone.querySelectorAll('p').forEach(p => {
    // If paragraph is inside center table, skip indent
    if (p.closest('table[border="0"]') || p.getAttribute('align') === 'center') {
      p.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
      return;
    }
    p.style.fontFamily = "'TH Sarabun New', Sarabun, sans-serif";
    p.style.fontSize = '16pt';
    p.style.lineHeight = '1.5';
    p.style.textIndent = '1.25cm';
    p.style.textAlign = 'justify';
    p.style.marginTop = '0pt';
    p.style.marginBottom = '6pt';
  });

  // 11. Add hard page break markers before chapters, front sections, and appendices
  const breakSelectors = [
    '#front-inner-cover-section',
    '#front-approval-section',
    '#front-abstract-th-section',
    '#front-abstract-en-section',
    '#front-ack-section',
    '#front-toc-section',
    '#front-lot-section',
    '#front-lof-section',
    '#chapter-1',
    '#section-1-2',
    '#section-1-5',
    '#section-1-6',
    '#chapter-2',
    '#section-2-2',
    '#section-2-3',
    '#section-2-4',
    '#chapter-3',
    '#section-3-2',
    '#section-3-4',
    '#section-3-5',
    '#section-3-7',
    '#section-3-8',
    '#chapter-4',
    '#section-4-2',
    '#section-4-3',
    '#section-4-4',
    '#section-4-5',
    '#chapter-5',
    '#section-5-2',
    '#section-5-4',
    '#section-references',
    '#back-matter-references',
    '#section-appendices',
    '#appendix-a',
    '#appendix-a-section',
    '#appendix-b',
    '#appendix-b-section',
    '#appendix-c',
    '#appendix-c-section',
    '#appendix-d',
    '#appendix-d-section',
    '#appendix-e',
    '#appendix-e-section',
    '#appendix-f',
    '#appendix-f-section',
  ];

  breakSelectors.forEach(sel => {
    const el = clone.querySelector(sel);
    if (el) {
      const pageBreak = document.createElement('div');
      pageBreak.className = 'word-page-break';
      pageBreak.style.cssText = 'page-break-before: always; mso-break-type: page-break; height: 1px; clear: both; margin: 0; padding: 0;';
      el.parentNode?.insertBefore(pageBreak, el);
    }
  });

  return clone;
}

/**
 * Generate a complete Microsoft Word (.doc) document with embedded images via MHTML
 */
export async function generateWordDocument(
  elementId: string, 
  options: ExportOptions
): Promise<boolean> {
  const sourceEl = document.getElementById(elementId);
  if (!sourceEl) {
    console.error(`Element with id "${elementId}" not found for Word export.`);
    return false;
  }

  // 1. Capture all diagrams, UI mockups, and school logo as PNG images
  const imagesMap = await captureFiguresAsImages(sourceEl, options.onProgress);

  options.onProgress?.({
    current: imagesMap.size,
    total: imagesMap.size,
    status: 'กำลังจัดรูปแบบเอกสารและสร้างไฟล์ Word (ตามมาตรฐาน สอศ.)...'
  });

  // 2. Clean element and insert image references & academic formatting
  const cleanedEl = cleanElementForWord(sourceEl, imagesMap);
  const contentHtml = cleanedEl.innerHTML;

  const scopeLabel = options.scope === 'all'
    ? 'ฉบับสมบูรณ์ 5 บท พร้อมปกและสารบัญ'
    : options.scope === 'front'
    ? 'ส่วนต้น (ปก บทคัดย่อ สารบัญ)'
    : options.scope === 'back'
    ? 'ส่วนท้าย (บรรณานุกรม ภาคผนวก)'
    : `บทที่ ${options.scope}`;

  const defaultTitle = `${REPORT_METADATA.projectTitleTh} (${scopeLabel})`;

  const filename = options.filename || (
    options.scope === 'all'
      ? `รายงานโครงงาน_${REPORT_METADATA.projectTitleTh.replace(/\s+/g, '_')}_ฉบับสมบูรณ์5บท_พร้อมปกสารบัญ_มาตรฐานสอศ.doc`
      : `รายงานโครงงาน_${REPORT_METADATA.projectTitleTh.replace(/\s+/g, '_')}_${options.scope}.doc`
  );

  const wordDocumentHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office'
      xmlns:w='urn:schemas-microsoft-com:office:word'
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>${defaultTitle}</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
@page {
  size: 21.0cm 29.7cm;
  margin: 3.81cm 2.54cm 2.54cm 3.81cm; /* Standard Thai Thesis Margin: Top 1.5 in, Right 1.0 in, Bottom 1.0 in, Left 1.5 in */
  mso-page-orientation: portrait;
}
@page Section1 {
  size: 21.0cm 29.7cm;
  margin: 3.81cm 2.54cm 2.54cm 3.81cm;
  mso-header-margin: 36.0pt;
  mso-footer-margin: 36.0pt;
  mso-paper-source: 0;
}
div.Section1 {
  page: Section1;
}
body {
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', 'Cordia New', 'Angsana New', sans-serif;
  font-size: 16pt;
  line-height: 1.5;
  color: #1a1a1a;
  background-color: #ffffff;
}
h1 {
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
  font-size: 22pt;
  font-weight: bold;
  text-align: center;
  margin-top: 24pt;
  margin-bottom: 12pt;
  color: #0f172a;
  line-height: 1.3;
}
h2 {
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
  font-size: 20pt;
  font-weight: bold;
  text-align: center;
  margin-top: 20pt;
  margin-bottom: 10pt;
  color: #0f172a;
  page-break-after: avoid;
}
h3 {
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
  font-size: 18pt;
  font-weight: bold;
  margin-top: 16pt;
  margin-bottom: 6pt;
  color: #1e293b;
  text-align: left;
  page-break-after: avoid;
}
h4 {
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
  font-size: 16pt;
  font-weight: bold;
  margin-top: 10pt;
  margin-bottom: 4pt;
  color: #1e293b;
  text-align: left;
  page-break-after: avoid;
}
p {
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
  font-size: 16pt;
  text-indent: 1.25cm;
  margin-top: 0pt;
  margin-bottom: 6pt;
  text-align: justify;
  text-justify: inter-cluster;
  line-height: 1.5;
}
p[align="center"], div[align="center"] p, td p, table p, .text-center, .no-indent {
  text-indent: 0pt !important;
}
p[align="center"] {
  text-align: center !important;
}
p[align="right"] {
  text-align: right !important;
  text-indent: 0pt !important;
}
ul, ol {
  margin-top: 4pt;
  margin-bottom: 8pt;
  padding-left: 28pt;
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
  font-size: 16pt;
}
li {
  margin-bottom: 4pt;
  line-height: 1.5;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 12pt 0 16pt 0;
  mso-yfti-tbllook: 1184;
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
}
th, td {
  border: 1pt solid #64748b;
  padding: 6pt 8pt;
  font-size: 14pt;
  vertical-align: top;
  font-family: 'TH Sarabun New', 'TH SarabunPSK', 'Sarabun', sans-serif;
}
th {
  background-color: #f8fafc;
  font-weight: bold;
  text-align: center;
  border-top: 1.5pt solid #0f172a;
  border-bottom: 1pt solid #0f172a;
}
.word-page-break {
  page-break-before: always;
  mso-break-type: page-break;
  clear: both;
  height: 1px;
}
.callout-box {
  border: 1pt solid #cbd5e1;
  background-color: #f8fafc;
  padding: 10pt 14pt;
  margin: 10pt 0;
}
.center-block {
  text-align: center;
  margin: 0 auto;
}
p.MsoFooter, li.MsoFooter, div.MsoFooter {
  margin: 0in;
  margin-bottom: .0001pt;
  mso-pagination: widow-orphan;
  font-size: 14.0pt;
  font-family: 'TH Sarabun New', 'Sarabun', sans-serif;
  text-align: right;
  color: #475569;
}
</style>
</head>
<body>
<div class="Section1">
${contentHtml}
<div style="mso-element:footer" id="f1">
  <p class="MsoFooter" align="right" style="text-align: right; margin: 0; padding: 0;">
    <span style="font-family: 'TH Sarabun New', sans-serif; font-size: 14pt; color: #475569;">หน้า <!--[if supportFields]><span style="mso-element:field-begin"></span>PAGE<span style="mso-element:field-separator"></span><![endif]--><span style="mso-no-proof:yes"></span><!--[if supportFields]><span style="mso-element:field-end"></span><![endif]--></span>
  </p>
</div>
</div>
</body>
</html>
`;

  try {
    let finalDocContent: BlobPart[];
    let mimeType = 'application/msword;charset=utf-8';

    if (imagesMap.size > 0) {
      // Use standard MHTML multipart format to embed images inside the Word document
      const boundary = '----=_NextPart_MSWORD_DOC_' + Date.now().toString(16) + Math.random().toString(36).substring(2);
      
      let mhtml = `MIME-Version: 1.0\r\n`;
      mhtml += `Content-Type: multipart/related; boundary="${boundary}"; type="text/html"\r\n\r\n`;

      // Main HTML Document Part
      mhtml += `--${boundary}\r\n`;
      mhtml += `Content-Type: text/html; charset="utf-8"\r\n`;
      mhtml += `Content-Transfer-Encoding: 8bit\r\n\r\n`;
      mhtml += wordDocumentHtml;
      mhtml += `\r\n\r\n`;

      // Embedded PNG Image Parts
      imagesMap.forEach((img) => {
        mhtml += `--${boundary}\r\n`;
        mhtml += `Content-Location: ${img.filename}\r\n`;
        mhtml += `Content-ID: <${img.filename}>\r\n`;
        mhtml += `Content-Transfer-Encoding: base64\r\n`;
        mhtml += `Content-Type: image/png\r\n\r\n`;
        mhtml += img.base64;
        mhtml += `\r\n\r\n`;
      });

      mhtml += `--${boundary}--\r\n`;

      finalDocContent = ['\ufeff' + mhtml];
      mimeType = 'multipart/related;charset=utf-8';
    } else {
      // Standard Word HTML format
      finalDocContent = ['\ufeff' + wordDocumentHtml];
    }

    const blob = new Blob(finalDocContent, { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch (err) {
    console.error('Failed to export Word document:', err);
    return false;
  }
}

/**
 * Helper to download an individual captured mockup/figure as PNG
 */
export async function downloadFigureAsPng(
  figureElement: HTMLElement, 
  filename: string
): Promise<boolean> {
  try {
    const graphicEl = (figureElement.querySelector('.academic-figure-graphic') || 
                       figureElement.querySelector('.academic-figure-content') || 
                       figureElement) as HTMLElement;

    const canvas = await html2canvas(graphicEl, {
      scale: 2.5, // ultra high resolution for presentation/papers
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename.endsWith('.png') ? filename : `${filename}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return true;
  } catch (err) {
    console.error('Failed to download figure image:', err);
    return false;
  }
}
