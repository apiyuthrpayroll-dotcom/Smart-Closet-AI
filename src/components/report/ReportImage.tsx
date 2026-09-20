import React, { useState, useEffect, useMemo } from 'react';
import { Loader2, RefreshCw, AlertTriangle, Layers, Image as ImageIcon } from 'lucide-react';

interface ReportImageProps {
  src: string;
  alt: string;
  className?: string;
  figureNumber?: string;
  title?: string;
  description?: string;
  aspectRatio?: string;
  fallbackSrc?: string;
}

export const ReportImage: React.FC<ReportImageProps> = ({
  src,
  alt,
  className = '',
  figureNumber,
  title,
  description,
  aspectRatio,
  fallbackSrc
}) => {
  // Generate list of fallback URLs based on the filename
  const candidateUrls = useMemo<string[]>(() => {
    if (!src) return [];
    const list: string[] = [];
    const raw = src.trim();

    // Primary path: ensure /assets/aistudio/
    let baseFilename = raw.split('/').pop() || '';
    if (raw.startsWith('/assets/aistudio/')) {
      list.push(raw);
      list.push(`/images/${baseFilename}`);
    } else if (raw.startsWith('/images/')) {
      list.push(`/assets/aistudio/${baseFilename}`);
      list.push(raw);
    } else if (raw.startsWith('http')) {
      list.push(raw);
    } else {
      list.push(`/assets/aistudio/${baseFilename}`);
      list.push(`/images/${baseFilename}`);
      list.push(raw.startsWith('/') ? raw : `/${raw}`);
    }

    // Secondary known fallbacks for research figures
    if (baseFilename.includes('scan')) {
      list.push('/assets/aistudio/ui_scan.jpg', '/assets/aistudio/wardrobe_scan_real.jpg', '/images/ui_scan.jpg');
    } else if (baseFilename.includes('classify')) {
      list.push('/assets/aistudio/ui_classify.jpg', '/images/ui_classify.jpg');
    } else if (baseFilename.includes('database')) {
      list.push('/assets/aistudio/ui_database.jpg', '/images/ui_database.jpg');
    } else if (baseFilename.includes('analysis')) {
      list.push('/assets/aistudio/ui_analysis.jpg', '/images/ui_analysis.jpg');
    } else if (baseFilename.includes('match') || baseFilename.includes('style')) {
      list.push('/assets/aistudio/ui_style_match.jpg', '/assets/aistudio/outfit_student_match.jpg', '/images/ui_style_match.jpg');
    } else if (baseFilename.includes('tryon') || baseFilename.includes('try_on')) {
      list.push('/assets/aistudio/ui_tryon.jpg', '/assets/aistudio/virtual_tryon_preview.jpg', '/images/ui_tryon.jpg');
    }

    if (fallbackSrc && !list.includes(fallbackSrc)) {
      list.push(fallbackSrc);
    }

    // Deduplicate
    return Array.from(new Set(list));
  }, [src, fallbackSrc]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    setCurrentIndex(0);
    setIsLoading(true);
    setHasError(false);
  }, [src, retryCount]);

  const currentSrc = candidateUrls[currentIndex] || src;

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    if (currentIndex + 1 < candidateUrls.length) {
      // Try next fallback candidate URL
      setCurrentIndex(prev => prev + 1);
    } else {
      // All candidates exhausted, show descriptive academic fallback
      setIsLoading(false);
      setHasError(true);
    }
  };

  const handleRetry = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    setHasError(false);
    setCurrentIndex(0);
    setRetryCount(prev => prev + 1);
  };

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-100 ${aspectRatio || ''}`}>
      {/* Loading Spinner & Skeleton State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-100/90 backdrop-blur-xs p-4 text-center space-y-2 animate-pulse pointer-events-none">
          <Loader2 className="w-5 h-5 text-indigo-600 animate-spin" />
          <div className="text-[11px] font-medium text-slate-600 font-serif">
            {figureNumber ? `${figureNumber}: ` : ''}กำลังโหลดรูปภาพ...
          </div>
        </div>
      )}

      {/* Actual Image */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt || title || 'Academic Report Figure'}
          className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      ) : (
        /* Descriptive Academic Fallback Card when Image Fails to Load */
        <div className="w-full h-full min-h-48 p-4 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-slate-100 flex flex-col justify-between items-center text-center space-y-2 border border-slate-200">
          <div className="flex items-center justify-between w-full border-b border-slate-200/80 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="p-1 bg-indigo-100 text-indigo-700 rounded">
                <ImageIcon className="w-3.5 h-3.5" />
              </span>
              <span className="text-[11px] font-bold font-serif text-slate-800">
                {figureNumber || 'ภาพจำลองระบบ'}
              </span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-indigo-100/80 text-indigo-800 text-[9px] font-mono font-bold">
              MBC Tech
            </span>
          </div>

          <div className="space-y-1 my-auto py-1 px-2">
            <h4 className="font-bold text-xs text-slate-900 font-serif leading-snug">
              {title || alt}
            </h4>
            {description && (
              <p className="text-[10px] text-slate-600 font-serif leading-relaxed line-clamp-2">
                {description}
              </p>
            )}
          </div>

          <div className="w-full pt-1.5 border-t border-slate-200/80 flex items-center justify-between gap-1 text-[10px]">
            <span className="text-slate-400 font-mono truncate max-w-[130px]">
              {currentSrc.split('/').pop()}
            </span>
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white hover:bg-slate-50 text-indigo-700 font-bold border border-indigo-200 shadow-2xs transition-colors cursor-pointer text-[10px]"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>โหลดใหม่</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
