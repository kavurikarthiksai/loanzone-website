import React from 'react';

export const BankLogo = ({ code, className = "w-8 h-8" }) => {
  switch (code) {
    case 'HDFC':
      return (
        <div className={`${className} rounded-lg bg-[#004C8F] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#004C8F" />
            <rect x="5" y="5" width="26" height="26" fill="white" />
            <rect x="8" y="8" width="20" height="20" fill="#004C8F" />
            <rect x="14" y="5" width="8" height="26" fill="#ED232A" />
            <rect x="5" y="14" width="26" height="8" fill="#ED232A" />
            <rect x="14" y="14" width="8" height="8" fill="#004C8F" />
          </svg>
        </div>
      );

    case 'ICICI':
      return (
        <div className={`${className} rounded-lg bg-gradient-to-br from-[#9C252D] to-[#F58220] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#9C252D" />
            <circle cx="18" cy="11" r="3.5" fill="#F58220" />
            <path d="M12 28 C12 20, 15 16, 24 16 C22 21, 18 22, 18 28 Z" fill="#FFFFFF" />
            <path d="M18 18 C23 18, 25 21, 25 28 L21 28 C21 23, 19 21, 18 18 Z" fill="#F58220" />
          </svg>
        </div>
      );

    case 'AXIS':
      return (
        <div className={`${className} rounded-lg bg-[#97144D] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#97144D" />
            <path d="M18 6 L29 27 L22 27 L18 18 L14 27 L7 27 Z" fill="#FFFFFF" />
            <polygon points="18,12 24,24 20,24 18,19 16,24 12,24" fill="#97144D" />
          </svg>
        </div>
      );

    case 'INDUS':
      return (
        <div className={`${className} rounded-lg bg-[#8B1B1D] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#8B1B1D" />
            <path d="M10 24 C10 18, 14 12, 26 12 C24 15, 23 18, 24 24 Z" fill="#FFC72C" />
            <path d="M15 13 C12 16, 12 21, 17 25 L14 25 C10 21, 10 16, 15 13 Z" fill="#FFFFFF" />
            <circle cx="21" cy="18" r="2" fill="#8B1B1D" />
          </svg>
        </div>
      );

    case 'IDFC':
      return (
        <div className={`${className} rounded-lg bg-[#9E1B32] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#9E1B32" />
            <rect x="8" y="8" width="8" height="20" fill="#FFFFFF" rx="1" />
            <rect x="20" y="8" width="8" height="8" fill="#F39200" rx="1" />
            <rect x="20" y="20" width="8" height="8" fill="#FFFFFF" rx="1" />
          </svg>
        </div>
      );

    case 'BANDHAN':
      return (
        <div className={`${className} rounded-lg bg-[#002F6C] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#002F6C" />
            <path d="M18 7 C14 14, 11 18, 11 22 C11 26, 14 29, 18 29 C22 29, 25 26, 25 22 C25 18, 22 14, 18 7 Z" fill="#E4002B" />
            <path d="M18 13 C16 17, 14 20, 14 23 C14 26, 16 27, 18 27 C20 27, 22 26, 22 23 C22 20, 20 17, 18 13 Z" fill="#FFB81C" />
          </svg>
        </div>
      );

    case 'KOTAK':
      return (
        <div className={`${className} rounded-lg bg-[#ED1C24] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#ED1C24" />
            <path d="M11 9 L16 9 L16 27 L11 27 Z" fill="#FFFFFF" />
            <path d="M25 9 L18 17 L25 27 L20 27 L15 19 L15 15 L20 9 Z" fill="#003366" />
            <path d="M22 9 L17 16 L22 23 L20 23 L16 17 L16 15 L20 9 Z" fill="#FFFFFF" />
          </svg>
        </div>
      );

    case 'SBI':
    default:
      return (
        <div className={`${className} rounded-lg bg-[#00B5EF] p-1 flex items-center justify-center shadow-xs shrink-0`}>
          <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
            <rect width="36" height="36" rx="4" fill="#00B5EF" />
            <circle cx="18" cy="18" r="11" fill="#280071" />
            <circle cx="18" cy="18" r="4.5" fill="#FFFFFF" />
            <rect x="16.5" y="18" width="3" height="11" fill="#FFFFFF" />
          </svg>
        </div>
      );
  }
};
