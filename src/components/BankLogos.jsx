import React from 'react';

const bankLogoMap = {
  HDFC: {
    src: '/images/banks/hdfc.svg',
    alt: 'HDFC Bank',
    sizeClass: 'h-[28px]', 
  },
  ICICI: {
    src: '/images/banks/icici.svg',
    alt: 'ICICI Bank',
    sizeClass: 'h-[28px]', 
  },
  AXIS: {
    src: '/images/banks/axis.svg',
    alt: 'Axis Bank',
    sizeClass: 'h-[30px]',
  },
  INDUS: {
    src: '/images/banks/indusind.svg',
    alt: 'IndusInd Bank',
    sizeClass: 'h-[18px]',
  },
  IDFC: {
    src: '/images/banks/idfc.svg',
    alt: 'IDFC FIRST Bank',
    sizeClass: 'h-[30px]',
  },
  BANDHAN: {
    src: '/images/banks/bandhan.svg',
    alt: 'Bandhan Bank',
    sizeClass: 'h-[28px]',
  },
  KOTAK: {
    src: '/images/banks/kotak.svg',
    alt: 'Kotak Mahindra Bank',
    sizeClass: 'h-[28px]',
  },
  SBI: {
    src: '/images/banks/sbi.svg',
    alt: 'State Bank of India',
    sizeClass: 'h-[28px]',
  },
};

export const BankLogo = ({ code, className = "" }) => {
  const bank = bankLogoMap[code] || bankLogoMap.SBI;

  return (
    <div className={`flex items-center justify-start h-10 ${className}`}>
      <img
        src={bank.src}
        alt={bank.alt}
        className={`w-auto max-w-[200px] object-contain object-left ${bank.sizeClass || 'h-[28px]'}`}
        loading="lazy"
      />
    </div>
  );
};

export { bankLogoMap };
