import React from 'react';

export const BankLogo = ({ code, className = "h-9 w-auto" }) => {
  switch (code) {
    case 'HDFC':
      return (
        <svg viewBox="0 0 200 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* HDFC Geometric Icon */}
          <rect x="4" y="4" width="40" height="40" rx="6" fill="#004C8F" />
          <rect x="10" y="10" width="28" height="28" fill="#FFFFFF" />
          <rect x="16" y="16" width="16" height="16" fill="#004C8F" />
          <rect x="21" y="4" width="6" height="40" fill="#ED232A" />
          <rect x="4" y="21" width="40" height="6" fill="#ED232A" />
          <rect x="21" y="21" width="6" height="6" fill="#004C8F" />
          {/* HDFC BANK Official Text */}
          <text x="54" y="31" fill="#004C8F" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" letterSpacing="-0.5">
            HDFC BANK
          </text>
        </svg>
      );

    case 'ICICI':
      return (
        <svg viewBox="0 0 200 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* ICICI Icon */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#9C252D" />
          <circle cx="24" cy="15" r="4.5" fill="#F58220" />
          <path d="M16 35 C16 25, 21 20, 31 20 C29 26, 24 28, 24 35 Z" fill="#FFFFFF" />
          <path d="M24 23 C30 23, 32 27, 32 35 L28 35 C28 28, 25 26, 24 23 Z" fill="#F58220" />
          {/* ICICI Bank Text */}
          <text x="54" y="31" fill="#9C252D" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" letterSpacing="-0.5">
            ICICI <tspan fill="#F58220" fontWeight="800">Bank</tspan>
          </text>
        </svg>
      );

    case 'AXIS':
      return (
        <svg viewBox="0 0 200 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Axis Bank Icon */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#97144D" />
          <path d="M24 10 L36 36 L28 36 L24 26 L20 36 L12 36 Z" fill="#FFFFFF" />
          <polygon points="24,16 30,32 25,32 24,27 23,32 18,32" fill="#97144D" />
          {/* Axis Bank Text */}
          <text x="54" y="31" fill="#97144D" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" letterSpacing="-0.5">
            AXIS BANK
          </text>
        </svg>
      );

    case 'INDUS':
      return (
        <svg viewBox="0 0 215 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* IndusInd Icon */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#8B1B1D" />
          <path d="M12 32 C12 24, 18 16, 35 16 C32 20, 30 24, 31 32 Z" fill="#FFC72C" />
          <path d="M19 18 C15 22, 15 28, 22 34 L18 34 C13 29, 13 22, 19 18 Z" fill="#FFFFFF" />
          <circle cx="28" cy="24" r="2.5" fill="#8B1B1D" />
          {/* IndusInd Bank Text */}
          <text x="54" y="31" fill="#8B1B1D" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.3">
            IndusInd <tspan fill="#C59B27" fontWeight="700">Bank</tspan>
          </text>
        </svg>
      );

    case 'IDFC':
      return (
        <svg viewBox="0 0 225 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* IDFC FIRST Icon */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#9E1B32" />
          <rect x="12" y="12" width="9" height="24" rx="2" fill="#FFFFFF" />
          <rect x="25" y="12" width="10" height="10" rx="2" fill="#F39200" />
          <rect x="25" y="26" width="10" height="10" rx="2" fill="#FFFFFF" />
          {/* IDFC FIRST Bank Text */}
          <text x="54" y="31" fill="#9E1B32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" letterSpacing="-0.3">
            IDFC FIRST <tspan fill="#475569" fontWeight="600" fontSize="14">Bank</tspan>
          </text>
        </svg>
      );

    case 'BANDHAN':
      return (
        <svg viewBox="0 0 215 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Bandhan Bank Icon */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#002F6C" />
          <path d="M24 9 C18 17, 15 22, 15 28 C15 34, 18 38, 24 38 C30 38, 33 34, 33 28 C33 22, 30 17, 24 9 Z" fill="#E4002B" />
          <path d="M24 16 C21 21, 19 25, 19 29 C19 33, 21 35, 24 35 C27 35, 29 33, 29 29 C29 25, 27 21, 24 16 Z" fill="#FFB81C" />
          {/* Bandhan Bank Text */}
          <text x="54" y="31" fill="#002F6C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.3">
            Bandhan <tspan fill="#E4002B" fontWeight="800">Bank</tspan>
          </text>
        </svg>
      );

    case 'KOTAK':
      return (
        <svg viewBox="0 0 200 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Kotak Icon */}
          <rect x="4" y="4" width="40" height="40" rx="10" fill="#ED1C24" />
          <path d="M14 12 L20 12 L20 36 L14 36 Z" fill="#FFFFFF" />
          <path d="M33 12 L23 24 L33 36 L27 36 L19 26 L19 21 L27 12 Z" fill="#003366" />
          <path d="M29 12 L22 22 L29 33 L26 33 L20 25 L20 21 L26 12 Z" fill="#FFFFFF" />
          {/* Kotak Text */}
          <text x="54" y="31" fill="#ED1C24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" letterSpacing="-0.5">
            kotak <tspan fill="#003366" fontWeight="700">Bank</tspan>
          </text>
        </svg>
      );

    case 'SBI':
    default:
      return (
        <svg viewBox="0 0 220 48" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* SBI Icon */}
          <circle cx="24" cy="24" r="20" fill="#00B5EF" />
          <circle cx="24" cy="24" r="14" fill="#280071" />
          <circle cx="24" cy="24" r="6" fill="#FFFFFF" />
          <rect x="22" y="24" width="4" height="14" fill="#FFFFFF" />
          {/* SBI Text */}
          <text x="54" y="31" fill="#280071" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" letterSpacing="-0.3">
            State Bank <tspan fill="#00B5EF" fontWeight="800">of India</tspan>
          </text>
        </svg>
      );
  }
};
