import React, { useState, useEffect } from 'react';
import { Loader2, RefreshCw, AlertTriangle, Layers, Image as ImageIcon } from 'lucide-react';

interface ReportImageProps {
  src: string;
  alt: string;
  className?: string;
  figureNumber?: string;
  title?: string;
  description?: string;
  aspectRatio?: string;
}

export const ReportImage: React.FC<ReportImageProps> = ({
  src,
  alt,
  className = '',
  figureNumber,
  title,
  description,
  aspectRatio
}) => {
  // Normalize path to prefer /assets/aistudio/
  const normalizeSrc = (path: string): string => {
    if (!path) return '';
    if (path.startsWith('/assets/aistudio/')) return path;
    if (path.startsWith('/images/')) {
      const filename = path.replace('/images/', '');
      return `/assets/aistudio/${filename}`;
    }
    if (path.startsWith('images/')) {
      const filename = path.replace('images/', '');
      return `/assets/aistudio/${filename}`;
    }
    return path;
  };

  const initialPath = normalizeSrc(src);
  const [currentSrc, setCurrentSrc] = useState<string>(initialPath);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    const nextPath = normalizeSrc(src);
    setCurrentSrc(nextPath);
    setIsLoading(true);
    setHasError(false);
  }, [src, retryCount]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    // If the /assets/aistudio/ path failed, try /images/ as a fallback before giving up
    if (currentSrc.startsWith('/assets/aistudio/')) {
      const filename = currentSrc.replace('/assets/aistudio/', '');
      setCurrentSrc(`/images/${filename}`);
      return;
    }
    
    // Both failed, show descriptive academic placeholder
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setRetryCount(prev => prev + 1);
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-200 ${aspectRatio || ''}`}>
      {/* Loading Spinner & Skeleton State */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-100/90 backdrop-blur-xs p-6 text-center space-y-3 animate-pulse">
          <div className="p-3 bg-white rounded-full shadow-xs border border-slate-200">
            <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-700 font-serif">
              {figureNumber ? `${figureNumber}: ` : ''}กำลังโหลดภาพประกอบและ Mockup...
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              {currentSrc.split('/').pop()}
            </div>
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
          crossOrigin="anonymous"
          loading="lazy"
        />
      ) : (
        /* Descriptive Academic Fallback Card when Image Fails to Load */
        <div className="w-full min-h-64 p-6 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100 flex flex-col justify-between items-center text-center space-y-4 border border-slate-300/80 rounded-xl">
          <div className="flex items-center justify-between w-full border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg">
                <ImageIcon className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold font-serif text-slate-800">
                {figureNumber || 'ภาพประกอบโครงงาน'}
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-mono font-semibold">
              Research Mockup
            </span>
          </div>

          <div className="space-y-2 max-w-lg my-auto py-2">
            <h4 className="font-bold text-sm text-slate-900 font-serif leading-snug">
              {title || alt}
            </h4>
            {description ? (
              <p className="text-xs text-slate-600 font-serif leading-relaxed line-clamp-3">
                {description}
              </p>
            ) : (
              <p className="text-xs text-slate-500 font-serif leading-relaxed">
                ภาพจำลองระบบสแกนตู้เสื้อผ้าอัจฉริยะและการจัดชุดตามระเบียบ วิทยาลัยเทคโนโลยีหมู่บ้านครู
              </p>
            )}
          </div>

          <div className="w-full pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span className="truncate max-w-[200px]">{currentSrc}</span>
            </div>
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white hover:bg-slate-50 text-indigo-700 font-bold border border-indigo-200 shadow-xs transition-colors cursor-pointer text-xs"
            >
              <RefreshCw className="w-3 h-3" />
              <span>โหลดใหม่</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
