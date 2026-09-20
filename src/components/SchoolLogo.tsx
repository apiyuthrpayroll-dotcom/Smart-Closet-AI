import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({ 
  className = 'w-24 h-24', 
  size,
  showText = false
}) => {
  const sizeStyle = size ? { width: size, height: size } : undefined;
  const [logoSrc, setLogoSrc] = React.useState('/assets/aistudio/mbc-logo.svg');

  return (
    <div className={`inline-flex flex-col items-center justify-center ${showText ? 'space-y-2' : ''}`}>
      <img
        src={logoSrc}
        alt="ตราสัญลักษณ์วิทยาลัยเทคโนโลยีหมู่บ้านครู"
        className={`object-contain select-none drop-shadow-xs transition-transform ${className}`}
        style={sizeStyle}
        loading="eager"
        onError={() => {
          if (logoSrc !== '/mbc-logo.svg') {
            setLogoSrc('/mbc-logo.svg');
          }
        }}
      />
      {showText && (
        <div className="text-center font-serif">
          <div className="text-xs font-bold text-slate-800 tracking-wide">
            วิทยาลัยเทคโนโลยีหมู่บ้านครู
          </div>
          <div className="text-[10px] text-slate-500">
            เขตหนองแขม กรุงเทพมหานคร
          </div>
        </div>
      )}
    </div>
  );
};
