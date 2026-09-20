import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  X, 
  Check, 
  FileDown, 
  Sparkles, 
  Info,
  Layers,
  BookOpen,
  Image as ImageIcon,
  CheckCircle2,
  Monitor
} from 'lucide-react';
import { generateWordDocument, downloadFigureAsPng, ExportProgress } from '../utils/exportDocument';
import { REPORT_METADATA } from '../data/reportData';

interface ExportDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeChapterFilter: 'all' | 'front' | 1 | 2 | 3 | 4 | 5 | 'back';
  onSelectAllChapters: () => void;
  targetElementId: string;
}

export const ExportDocumentModal: React.FC<ExportDocumentModalProps> = ({
  isOpen,
  onClose,
  activeChapterFilter,
  onSelectAllChapters,
  targetElementId,
}) => {
  const [selectedScope, setSelectedScope] = useState<'all' | 'current'>(
    activeChapterFilter === 'all' ? 'all' : 'current'
  );
  const [isExportingWord, setIsExportingWord] = useState(false);
  const [exportProgress, setExportProgress] = useState<ExportProgress | null>(null);
  const [wordSuccess, setWordSuccess] = useState(false);
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [downloadingMockup, setDownloadingMockup] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentChapterNum = activeChapterFilter === 'all' ? 2 : activeChapterFilter;

  const currentChapterLabel = activeChapterFilter === 'front'
    ? 'ส่วนต้น (หน้าปก, บทคัดย่อ, กิตติกรรมประกาศ, สารบัญ)'
    : activeChapterFilter === 'back'
    ? 'ส่วนท้าย (บรรณานุกรม, ภาคผนวก ก-ฉ)'
    : `บทที่ ${activeChapterFilter}`;

  const handleExportWord = async () => {
    setIsExportingWord(true);
    setExportProgress({ current: 0, total: 100, status: 'กำลังเตรียมโครงสร้างเอกสารและค้นหารูปภาพ...' });

    // If exporting all, ensure all chapters are shown
    if (selectedScope === 'all' && activeChapterFilter !== 'all') {
      onSelectAllChapters();
      // Allow React time to render all chapters in the DOM
      await new Promise(r => setTimeout(r, 450));
    }

    try {
      const success = await generateWordDocument(targetElementId, {
        scope: selectedScope === 'all' ? 'all' : currentChapterNum,
        filename: selectedScope === 'all'
          ? `รายงานโครงงาน_${REPORT_METADATA.projectTitleTh.replace(/\s+/g, '_')}_ฉบับสมบูรณ์_5บท.doc`
          : `รายงานโครงงาน_${REPORT_METADATA.projectTitleTh.replace(/\s+/g, '_')}_บทที่_${currentChapterNum}.doc`,
        onProgress: (prog) => {
          setExportProgress(prog);
        }
      });

      if (success) {
        setWordSuccess(true);
        setTimeout(() => setWordSuccess(false), 4000);
      }
    } catch (err) {
      console.error('Word export error:', err);
    } finally {
      setIsExportingWord(false);
      setExportProgress(null);
    }
  };

  const handleExportPdf = async () => {
    setIsExportingPdf(true);

    // If exporting all, ensure all chapters are rendered first
    if (selectedScope === 'all' && activeChapterFilter !== 'all') {
      onSelectAllChapters();
      await new Promise(r => setTimeout(r, 350));
    }

    setTimeout(() => {
      setIsExportingPdf(false);
      window.print();
    }, 250);
  };

  const handleDownloadSpecificMockup = async (mockupKeyword: string, filename: string) => {
    setDownloadingMockup(mockupKeyword);
    try {
      // Find figure by keyword
      const figures = Array.from(document.querySelectorAll('figure')) as HTMLElement[];
      const targetFig = figures.find(f => {
        const text = (f.getAttribute('data-figure-title') || '') + (f.textContent || '');
        return text.toLowerCase().includes(mockupKeyword.toLowerCase());
      });

      if (targetFig) {
        await downloadFigureAsPng(targetFig, filename);
      } else {
        alert('กรุณาเปิดเนื้อหาบทที่ 2 ก่อนดาวน์โหลดภาพ Mockup ตัวอย่าง');
      }
    } finally {
      setDownloadingMockup(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-xs text-white">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">ส่งออกเอกสารโครงงาน (Word & PDF)</h2>
              <p className="text-xs text-indigo-200">
                พร้อมรูปภาพไดอะแกรมและ Mockup ตัวอย่างหน้าจอระบบครบสมบูรณ์
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-indigo-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="ปิดหน้าต่าง"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Scope Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-600" />
              <span>เลือกขอบเขตเนื้อหาที่ต้องการสร้างไฟล์:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedScope('all')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedScope === 'all'
                    ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    ครบทั้งฉบับสมบูรณ์ (5 บท)
                  </span>
                  {selectedScope === 'all' && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  )}
                </div>
                <p className="text-xs text-slate-500">
                  รวมบทที่ 1 - 5, บทคัดย่อ TH/EN, สารบัญ, ตารางเปรียบเทียบ, ไดอะแกรม และบรรณานุกรม
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedScope('current')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedScope === 'current'
                    ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-200 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs sm:text-sm text-slate-900">
                    เฉพาะบทที่กำลังดู (บทที่ {currentChapterNum})
                  </span>
                  {selectedScope === 'current' && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  )}
                </div>
                <p className="text-xs text-slate-500">
                  {currentChapterNum === 2 
                    ? 'บทที่ 2 ทฤษฎีและงานวิจัยที่เกี่ยวข้อง (ฉบับเน้นพิเศษเชิงลึก 8 หัวข้อย่อย + 4 Mockup UI)' 
                    : `เฉพาะเนื้อหาของบทที่ ${currentChapterNum}`}
                </p>
              </button>
            </div>
          </div>

          {/* Export Options Cards */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>เลือกรูปแบบไฟล์ที่ต้องการ:</span>
            </label>

            {/* Option 1: Microsoft Word (.doc) with embedded images */}
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40 hover:bg-blue-50/70 transition-all flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-xs mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-sm">
                        สร้างไฟล์ Microsoft Word (.doc)
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-800 rounded-md">
                        มีรูปภาพ & Mockup ในตัว
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      ฟอนต์ TH Sarabun New 16pt มาตรฐานวิชาการ แปลงไดอะแกรมและ Mockup หน้าจอเป็นรูปภาพฝังในไฟล์อัตโนมัติ เปิดแก้ไขต่อได้ใน MS Word, Google Docs, WPS
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleExportWord}
                  disabled={isExportingWord}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  {wordSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-200" />
                      <span>ดาวน์โหลดแล้ว!</span>
                    </>
                  ) : isExportingWord ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>กำลังประมวลผล...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>ดาวน์โหลด Word (.doc)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Progress Bar when exporting Word */}
              {isExportingWord && exportProgress && (
                <div className="mt-1 p-3 bg-white rounded-lg border border-blue-200 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-blue-900 font-semibold mb-1.5">
                    <span>{exportProgress.status}</span>
                    <span>{exportProgress.current} / {exportProgress.total}</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${Math.max(10, Math.round((exportProgress.current / Math.max(1, exportProgress.total)) * 100))}%` 
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Option 2: PDF Document (.pdf) */}
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 hover:bg-rose-50/70 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-rose-600 text-white rounded-xl shadow-xs mt-0.5">
                  <Printer className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 text-sm">
                      สร้างไฟล์ PDF / พิมพ์เอกสาร (Print to PDF)
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-rose-100 text-rose-800 rounded-md">
                      คมชัดระดับ Vector (A4)
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    พิมพ์จัดหน้ากระดาษ A4 รูปแบบวิชาการ แสดงผลกรอบ Mockup และกราฟิกสีสันสดใสครบถ้วน บันทึกเป็น PDF ผ่านหน้าต่างพิมพ์ได้ทันที
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleExportPdf}
                disabled={isExportingPdf}
                className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs disabled:opacity-50 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>บันทึกเป็น PDF / พิมพ์</span>
              </button>
            </div>
          </div>

          {/* Feature Highlight: Mockup Images Included */}
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-indigo-600" />
                <span>รูปภาพตัวอย่าง Mockup ในระบบที่รวมอยู่ในการส่งออก:</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                พร้อมรูปภาพจริงในเอกสาร
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px]">
              <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 flex flex-col justify-between">
                <div>
                  <span className="font-bold text-indigo-600 block">รูปที่ 2.9</span>
                  <span className="line-clamp-1">Dashboard UI</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownloadSpecificMockup('Dashboard', 'Mockup_Figure2_9_Dashboard')}
                  disabled={downloadingMockup !== null}
                  className="mt-1 text-[10px] text-indigo-600 hover:text-indigo-800 font-semibold underline flex items-center gap-0.5"
                >
                  <Download className="w-2.5 h-2.5" /> PNG
                </button>
              </div>

              <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 flex flex-col justify-between">
                <div>
                  <span className="font-bold text-indigo-600 block">รูปที่ 2.10</span>
                  <span className="line-clamp-1">AI Copilot UI</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownloadSpecificMockup('Copilot', 'Mockup_Figure2_10_AICopilot')}
                  disabled={downloadingMockup !== null}
                  className="mt-1 text-[10px] text-indigo-600 hover:text-indigo-800 font-semibold underline flex items-center gap-0.5"
                >
                  <Download className="w-2.5 h-2.5" /> PNG
                </button>
              </div>

              <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 flex flex-col justify-between">
                <div>
                  <span className="font-bold text-indigo-600 block">รูปที่ 2.11</span>
                  <span className="line-clamp-1">Kanban Pipeline</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownloadSpecificMockup('Kanban', 'Mockup_Figure2_11_PipelineKanban')}
                  disabled={downloadingMockup !== null}
                  className="mt-1 text-[10px] text-indigo-600 hover:text-indigo-800 font-semibold underline flex items-center gap-0.5"
                >
                  <Download className="w-2.5 h-2.5" /> PNG
                </button>
              </div>

              <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 flex flex-col justify-between">
                <div>
                  <span className="font-bold text-indigo-600 block">รูปที่ 2.12</span>
                  <span className="line-clamp-1">Voice Simulator</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownloadSpecificMockup('Voice', 'Mockup_Figure2_12_VoiceAgentSimulator')}
                  disabled={downloadingMockup !== null}
                  className="mt-1 text-[10px] text-indigo-600 hover:text-indigo-800 font-semibold underline flex items-center gap-0.5"
                >
                  <Download className="w-2.5 h-2.5" /> PNG
                </button>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-normal">
              💡 เมื่อเปิดเอกสารใน Word รูปภาพทั้งหมดจะถูกวางไว้กลางหน้ากระดาษพร้อมเลขกำกับรูปและคำอธิบายใต้รูปตามระเบียบสารบรรณวิชาการ
            </p>
          </div>

          {/* Practical Tips Box */}
          <div className="p-3.5 bg-indigo-50/50 border border-indigo-100 rounded-xl text-xs text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-indigo-600" />
              <span>คำแนะนำในการพิมพ์ / บันทึกเป็นไฟล์ PDF:</span>
            </div>
            <p className="pl-5 text-slate-500 leading-relaxed text-[11px]">
              เมื่อหน้าต่างพิมพ์ของเบราว์เซอร์เปิดขึ้น ให้เลือกเครื่องพิมพ์ปลายทางเป็น <strong>&quot;บันทึกเป็น PDF&quot; (Save as PDF)</strong>, ตรวจสอบว่าขนาดกระดาษตั้งค่าเป็น <strong>A4</strong> และทำเครื่องหมายที่ <strong>&quot;กราฟิกพื้นหลัง&quot; (Background graphics)</strong> เพื่อให้รูปภาพและกรอบ Mockup แสดงสีสันครบถ้วน
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>Smart Closer AI Academic Report System</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium transition-colors cursor-pointer"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
};

