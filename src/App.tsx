import React, { useState } from 'react';
import { NavTab, ClothingItem, Outfit, AppSettings } from './types';
import { 
  INITIAL_CLOTHING_ITEMS, 
  INITIAL_OUTFITS, 
  DEFAULT_APP_SETTINGS, 
  RESEARCH_METADATA 
} from './data/mockData';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { WardrobeDashboardView } from './components/wardrobe/WardrobeDashboardView';
import { ScanClothesView } from './components/wardrobe/ScanClothesView';
import { AutoClassifyView } from './components/wardrobe/AutoClassifyView';
import { DigitalWardrobeView } from './components/wardrobe/DigitalWardrobeView';
import { WardrobeAnalysisView } from './components/wardrobe/WardrobeAnalysisView';
import { StyleMatchingView } from './components/wardrobe/StyleMatchingView';
import { VirtualTryOnView } from './components/wardrobe/VirtualTryOnView';
import { ResearchMethodologyView } from './components/wardrobe/ResearchMethodologyView';
import { ProjectReportView } from './components/ProjectReportView';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { REPORT_METADATA } from './data/reportData';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [wardrobeItems, setWardrobeItems] = useState<ClothingItem[]>(INITIAL_CLOTHING_ITEMS);
  const [outfits, setOutfits] = useState<Outfit[]>(INITIAL_OUTFITS);
  const [selectedTryOnOutfit, setSelectedTryOnOutfit] = useState<Outfit>(INITIAL_OUTFITS[0]);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_APP_SETTINGS);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Security Auth state for Academic Project Report (Passcode: 43210344)
  const [isReportUnlocked, setIsReportUnlocked] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('academic_report_auth') === 'unlocked';
    }
    return false;
  });

  const handleUnlockReport = () => {
    setIsReportUnlocked(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('academic_report_auth', 'unlocked');
    }
    showToast('ปลดล็อกรายงานวิจัยฉบับเต็มเรียบร้อยแล้ว (รหัส 43210344 ถูกต้อง)');
  };

  const handleLockReport = () => {
    setIsReportUnlocked(false);
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('academic_report_auth');
    }
    showToast('ล็อกเอกสารรายงานวิจัยเรียบร้อยแล้ว');
  };

  // Report controls states (lifted to top Header)
  const [reportFontSize, setReportFontSize] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-base');
  const [isReportExportModalOpen, setIsReportExportModalOpen] = useState(false);
  const [reportCopied, setReportCopied] = useState(false);

  const handleCopyReportAbstract = () => {
    const text = `# ${REPORT_METADATA.projectTitleTh}
## ${REPORT_METADATA.projectTitleEn}

สาขาวิชาเทคโนโลยีธุรกิจดิจิทัล วิทยาลัยเทคโนโลยีหมู่บ้านครู ปีการศึกษา ${REPORT_METADATA.academicYear}

### บทคัดย่อ (Abstract)
${REPORT_METADATA.abstractTh}

---
เอกสารรายงานโครงงานวิจัยฉบับสมบูรณ์ (5 บท) พร้อมปกและสารบัญ`;
    navigator.clipboard.writeText(text);
    setReportCopied(true);
    showToast('คัดลอกบทคัดย่อโครงงานวิจัยเรียบร้อยแล้ว');
    setTimeout(() => setReportCopied(false), 2500);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Wardrobe Operations
  const handleAddItem = (newItem: ClothingItem) => {
    setWardrobeItems(prev => [newItem, ...prev]);
    showToast(`เพิ่ม "${newItem.name}" ลงในคลังตู้เสื้อผ้าดิจิทัลสำเร็จ`);
  };

  const handleDeleteItem = (id: string) => {
    setWardrobeItems(prev => prev.filter(item => item.id !== id));
    showToast('ลบเสื้อผ้าออกจากคลังเรียบร้อยแล้ว');
  };

  const handleToggleFavoriteItem = (id: string) => {
    setWardrobeItems(prev => prev.map(item => 
      item.id === id ? { ...item, favorite: !item.favorite } : item
    ));
  };

  const handleToggleFavoriteOutfit = (id: string) => {
    setOutfits(prev => prev.map(o => 
      o.id === id ? { ...o, isFavorite: !o.isFavorite } : o
    ));
    showToast('อัปเดตสถานะชุดโปรดเรียบร้อย');
  };

  const handleScanCompleted = (newDetectedItems: ClothingItem[]) => {
    // Merge without duplicates
    setWardrobeItems(prev => {
      const existingIds = new Set(prev.map(i => i.id));
      const fresh = newDetectedItems.filter(i => !existingIds.has(i.id));
      return [...prev, ...fresh];
    });
    showToast(`สแกนสำเร็จ! สกัดเสื้อผ้าใหม่ ${newDetectedItems.length} ชิ้น`);
  };

  const handleSelectOutfitForTryOn = (outfit: Outfit) => {
    setSelectedTryOnOutfit(outfit);
    setActiveTab('tryon');
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans antialiased overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-2.5 text-xs font-medium animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={activeTab}
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        setActiveTab={(tab) => setActiveTab(tab)}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
        isReportUnlocked={isReportUnlocked}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header
          currentTab={activeTab}
          activeTab={activeTab}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onQuickScan={() => setActiveTab('scan')}
          onQuickOutfit={() => setActiveTab('recommendation')}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isReportUnlocked={isReportUnlocked}
          reportControls={{
            fontSizeClass: reportFontSize,
            setFontSizeClass: setReportFontSize,
            onCopyMarkdown: handleCopyReportAbstract,
            copied: reportCopied,
            onQuickExportWord: () => setIsReportExportModalOpen(true),
            onPrint: () => setIsReportExportModalOpen(true),
            isUnlocked: isReportUnlocked,
            onLock: handleLockReport,
          }}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && (
              <WardrobeDashboardView
                items={wardrobeItems}
                outfits={outfits}
                onNavigateToTab={(tab) => setActiveTab(tab)}
                onSelectOutfitForTryOn={handleSelectOutfitForTryOn}
              />
            )}

            {activeTab === 'scan' && (
              <ScanClothesView
                onScanComplete={handleScanCompleted}
                onNavigateToStep={(tab) => setActiveTab(tab as NavTab)}
              />
            )}

            {activeTab === 'classify' && (
              <AutoClassifyView
                items={wardrobeItems}
                onSaveToWardrobe={() => showToast('บันทึกเสื้อผ้าลงคลังเรียบร้อยแล้ว')}
                onNavigateToStep={(tab) => setActiveTab(tab as NavTab)}
              />
            )}

            {activeTab === 'wardrobe' && (
              <DigitalWardrobeView
                items={wardrobeItems}
                onAddItem={handleAddItem}
                onDeleteItem={handleDeleteItem}
                onToggleFavorite={handleToggleFavoriteItem}
                onNavigateToStep={(tab) => setActiveTab(tab as NavTab)}
              />
            )}

            {activeTab === 'analysis' && (
              <WardrobeAnalysisView
                items={wardrobeItems}
                onNavigateToStep={(tab) => setActiveTab(tab as NavTab)}
              />
            )}

            {activeTab === 'recommendation' && (
              <StyleMatchingView
                outfits={outfits}
                items={wardrobeItems}
                onSelectOutfitForTryOn={handleSelectOutfitForTryOn}
                onToggleFavoriteOutfit={handleToggleFavoriteOutfit}
                onNavigateToStep={(tab) => setActiveTab(tab as NavTab)}
              />
            )}

            {activeTab === 'tryon' && (
              <VirtualTryOnView
                currentOutfit={selectedTryOnOutfit}
                allOutfits={outfits}
                onSelectOutfit={setSelectedTryOnOutfit}
                onToggleFavoriteOutfit={handleToggleFavoriteOutfit}
                onNavigateToStep={(tab) => setActiveTab(tab as NavTab)}
              />
            )}

            {activeTab === 'research' && (
              <ResearchMethodologyView
                onNavigateToStep={(tab) => setActiveTab(tab as NavTab)}
              />
            )}

            {activeTab === 'report' && (
              <ProjectReportView
                fontSizeClass={reportFontSize}
                setFontSizeClass={setReportFontSize}
                isExportModalOpen={isReportExportModalOpen}
                setIsExportModalOpen={setIsReportExportModalOpen}
                isUnlocked={isReportUnlocked}
                onUnlock={handleUnlockReport}
                onLock={handleLockReport}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
