import React from 'react';

// 3D Lightning / Flash Icon for Quick & Fast Processing
export const ThreeDFlash = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="flashBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFAE00" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="flashBolt" x1="20" y1="12" x2="44" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#FDE68A" />
      </linearGradient>
      <filter id="shadowFlash" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#D97706" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#flashBg)" filter="url(#shadowFlash)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.28" />
    <circle cx="16" cy="16" r="3" fill="#FFFFFF" fillOpacity="0.5" />
    <path d="M35 14 L21 34 L31 34 L27 50 L43 28 L33 28 L35 14 Z" fill="#B45309" transform="translate(0, 2)" />
    <path d="M35 14 L21 34 L31 34 L27 50 L43 28 L33 28 L35 14 Z" fill="url(#flashBolt)" />
    <path d="M35 14 L21 34 L31 34 L30 32 L24 32 L35 14 Z" fill="#FFFFFF" fillOpacity="0.8" />
  </svg>
);

// 3D Document / Minimal Paperwork Icon
export const ThreeDDocument = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="docBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="50%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <filter id="shadowDoc" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#1D4ED8" floodOpacity="0.38" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#docBg)" filter="url(#shadowDoc)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(16, 14)">
      <rect x="2" y="2" width="28" height="34" rx="4" fill="#1E40AF" />
      <rect x="0" y="0" width="28" height="34" rx="4" fill="#FFFFFF" />
      <path d="M20 0 L28 8 L20 8 Z" fill="#DBEAFE" />
      <rect x="5" y="8" width="10" height="3" rx="1.5" fill="#3B82F6" />
      <rect x="5" y="14" width="18" height="2.5" rx="1.25" fill="#93C5FD" />
      <rect x="5" y="19" width="18" height="2.5" rx="1.25" fill="#93C5FD" />
      <rect x="5" y="24" width="12" height="2.5" rx="1.25" fill="#93C5FD" />
      <circle cx="22" cy="27" r="6" fill="#10B981" />
      <path d="M19 27 L21 29 L25 25" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 3D Bank / Vault Building Icon
export const ThreeDBank = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bankBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="50%" stopColor="#3730A3" />
        <stop offset="100%" stopColor="#063B73" />
      </linearGradient>
      <filter id="shadowBank" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#063B73" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#bankBg)" filter="url(#shadowBank)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(15, 14)">
      <path d="M17 3 L32 11 L2 11 Z" fill="#E0E7FF" />
      <path d="M17 5 L30 11 L4 11 Z" fill="#FFFFFF" />
      <circle cx="17" cy="8.5" r="2" fill="#F59E0B" />
      <rect x="2" y="11" width="30" height="3" rx="1" fill="#C7D2FE" />
      <rect x="4" y="14" width="4" height="15" rx="1" fill="#FFFFFF" />
      <rect x="4" y="14" width="1.5" height="15" fill="#C7D2FE" />
      <rect x="11.5" y="14" width="4" height="15" rx="1" fill="#FFFFFF" />
      <rect x="11.5" y="14" width="1.5" height="15" fill="#C7D2FE" />
      <rect x="18.5" y="14" width="4" height="15" rx="1" fill="#FFFFFF" />
      <rect x="18.5" y="14" width="1.5" height="15" fill="#C7D2FE" />
      <rect x="26" y="14" width="4" height="15" rx="1" fill="#FFFFFF" />
      <rect x="26" y="14" width="1.5" height="15" fill="#C7D2FE" />
      <rect x="1" y="29" width="32" height="3" rx="1" fill="#E0E7FF" />
      <rect x="0" y="32" width="34" height="3" rx="1" fill="#C7D2FE" />
    </g>
  </svg>
);

// 3D Headset / Dedicated Support Icon
export const ThreeDSupport = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="supportBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="50%" stopColor="#059669" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <filter id="shadowSupport" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#047857" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#supportBg)" filter="url(#shadowSupport)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(14, 14)">
      <path
        d="M6 22 C6 10, 12 4, 18 4 C24 4, 30 10, 30 22"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M7 22 C7 11, 13 5.5, 18 5.5 C23 5.5, 29 11, 29 22"
        stroke="#A7F3D0"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="2" y="19" width="7" height="13" rx="3.5" fill="#064E3B" />
      <rect x="3" y="18" width="6" height="13" rx="3" fill="#FFFFFF" />
      <rect x="4" y="20" width="4" height="9" rx="2" fill="#34D399" />
      <rect x="27" y="19" width="7" height="13" rx="3.5" fill="#064E3B" />
      <rect x="27" y="18" width="6" height="13" rx="3" fill="#FFFFFF" />
      <rect x="28" y="20" width="4" height="9" rx="2" fill="#34D399" />
      <path d="M29 28 C29 35, 24 37, 18 37" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="37" r="3" fill="#F59E0B" />
      <circle cx="16" cy="37" r="1.5" fill="#FFFFFF" />
    </g>
  </svg>
);

// 3D Transparency / Clarity Eye Icon
export const ThreeDTransparency = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="transBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="50%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
      <filter id="shadowTrans" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0369A1" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#transBg)" filter="url(#shadowTrans)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(14, 16)">
      {/* 3D Glass Eye Outer Shell */}
      <path
        d="M2 16 C8 6, 28 6, 34 16 C28 26, 8 26, 2 16 Z"
        fill="#FFFFFF"
        stroke="#E0F2FE"
        strokeWidth="1.5"
      />
      {/* Eye Iris */}
      <circle cx="18" cy="16" r="7.5" fill="#0369A1" />
      <circle cx="18" cy="16" r="5" fill="#0284C7" />
      <circle cx="18" cy="16" r="3" fill="#0F172A" />
      <circle cx="16" cy="14" r="1.5" fill="#FFFFFF" />
      {/* Sparkle Glint */}
      <path d="M28 10 L30 13 L33 13 L30.5 15 L31.5 18 L29 16 L26.5 18 L27.5 15 L25 13 L28 13 Z" fill="#FDE047" />
    </g>
  </svg>
);

// 3D Multiple Banking Partners Network Hub Icon
export const ThreeDNetwork = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="netBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="50%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <filter id="shadowNet" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#6D28D9" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#netBg)" filter="url(#shadowNet)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(15, 14)">
      {/* Connecting 3D Network Lines */}
      <line x1="17" y1="9" x2="7" y2="27" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="9" x2="27" y2="27" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="7" y1="27" x2="27" y2="27" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      {/* Top Node */}
      <circle cx="17" cy="9" r="6" fill="#EDE9FE" />
      <circle cx="17" cy="9" r="4.5" fill="#FFFFFF" />
      <circle cx="17" cy="9" r="2.5" fill="#7C3AED" />
      {/* Bottom Left Node */}
      <circle cx="7" cy="27" r="5.5" fill="#EDE9FE" />
      <circle cx="7" cy="27" r="4" fill="#FFFFFF" />
      <circle cx="7" cy="27" r="2" fill="#F59E0B" />
      {/* Bottom Right Node */}
      <circle cx="27" cy="27" r="5.5" fill="#EDE9FE" />
      <circle cx="27" cy="27" r="4" fill="#FFFFFF" />
      <circle cx="27" cy="27" r="2" fill="#10B981" />
    </g>
  </svg>
);

// 3D Secure Application Process Shield Icon
export const ThreeDShield = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="50%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="goldShield" x1="18" y1="12" x2="46" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="shadowShield" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.4" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#shieldBg)" filter="url(#shadowShield)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.18" />
    {/* 3D Gold Security Shield */}
    <g transform="translate(17, 13)">
      <path
        d="M15 3 L27 8 C27 20, 21 28, 15 32 C9 28, 3 20, 3 8 Z"
        fill="#B45309"
        transform="translate(0, 2)"
      />
      <path
        d="M15 3 L27 8 C27 20, 21 28, 15 32 C9 28, 3 20, 3 8 Z"
        fill="url(#goldShield)"
      />
      {/* 3D Inner Lock / Check */}
      <circle cx="15" cy="15" r="4.5" fill="#FFFFFF" fillOpacity="0.9" />
      <path d="M12 18 L18 18 C19 18, 19.5 19, 19.5 20 L19.5 24 C19.5 25, 19 25.5, 18 25.5 L12 25.5 C11 25.5, 10.5 25, 10.5 24 L10.5 20 C10.5 19, 11 18, 12 18 Z" fill="#FFFFFF" />
      <circle cx="15" cy="21.5" r="1.5" fill="#B45309" />
    </g>
  </svg>
);

// 3D Laptop / Online Application Icon
export const ThreeDOnlineApply = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="applyBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <filter id="shadowApply" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#1D4ED8" floodOpacity="0.35" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#applyBg)" filter="url(#shadowApply)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(14, 16)">
      <rect x="5" y="4" width="26" height="18" rx="2" fill="#0F172A" />
      <rect x="7" y="6" width="22" height="14" rx="1" fill="#60A5FA" />
      <circle cx="18" cy="13" r="3" fill="#FFFFFF" />
      <path d="M0 24 L36 24 C36 26, 34 27, 32 27 L4 27 C2 27, 0 26, 0 24 Z" fill="#E2E8F0" />
      <rect x="14" y="24.5" width="8" height="1.5" rx="0.75" fill="#94A3B8" />
    </g>
  </svg>
);

// 3D Folder / KYC Upload Icon
export const ThreeDUploadDocs = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="folderBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="shadowFolder" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#D97706" floodOpacity="0.35" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#folderBg)" filter="url(#shadowFolder)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(15, 17)">
      <path d="M2 6 C2 4.5, 3.5 3.5, 5 3.5 L12 3.5 L15 6.5 L29 6.5 C30.5 6.5, 32 7.5, 32 9 L32 24 C32 25.5, 30.5 26.5, 29 26.5 L5 26.5 C3.5 26.5, 2 25.5, 2 24 Z" fill="#78350F" />
      <path d="M2 9 C2 7.5, 3.5 6.5, 5 6.5 L29 6.5 C30.5 6.5, 32 7.5, 32 9 L32 24 C32 25.5, 30.5 26.5, 29 26.5 L5 26.5 C3.5 26.5, 2 25.5, 2 24 Z" fill="#FEF3C7" />
      <circle cx="17" cy="16.5" r="7" fill="#F59E0B" />
      <path d="M17 12 L17 21 M13 16 L17 12 L21 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 3D Gift / Best Offer Selection Icon
export const ThreeDOffers = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="offerBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#BE185D" />
      </linearGradient>
      <filter id="shadowOffer" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#BE185D" floodOpacity="0.35" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#offerBg)" filter="url(#shadowOffer)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(16, 15)">
      <rect x="3" y="10" width="26" height="20" rx="3" fill="#FCE7F3" />
      <rect x="1" y="8" width="30" height="5" rx="2" fill="#F472B6" />
      <rect x="14" y="8" width="4" height="22" fill="#BE185D" />
      <circle cx="12" cy="5" r="3.5" stroke="#FDE047" strokeWidth="2" fill="none" />
      <circle cx="20" cy="5" r="3.5" stroke="#FDE047" strokeWidth="2" fill="none" />
      <circle cx="16" cy="6" r="2" fill="#F59E0B" />
    </g>
  </svg>
);

// 3D Money / Instant Bank Disbursal Icon
export const ThreeDDisbursal = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="disbursalBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <filter id="shadowDisbursal" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#047857" floodOpacity="0.35" />
      </filter>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#disbursalBg)" filter="url(#shadowDisbursal)" />
    <path d="M6 22 C6 13.163 13.163 6 22 6 L42 6 C50.837 6 58 13.163 58 22 C42 28 22 28 6 22 Z" fill="#FFFFFF" fillOpacity="0.25" />
    <g transform="translate(15, 16)">
      <rect x="2" y="5" width="30" height="19" rx="3" fill="#D1FAE5" />
      <circle cx="17" cy="14.5" r="5" fill="#10B981" />
      <text x="17" y="18" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="system-ui">₹</text>
      <rect x="5" y="26" width="24" height="4" rx="2" fill="#FDE047" />
    </g>
  </svg>
);

