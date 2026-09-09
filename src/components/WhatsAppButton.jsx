import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONFIG, getWhatsAppLink } from '../config/config';

export const WhatsAppButton = ({
  message,
  text = "Chat on WhatsApp",
  variant = "primary", // primary, outline, iconOnly, floating
  size = "md",
  className = ""
}) => {
  const href = getWhatsAppLink(message);

  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap";
  
  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
    floating: "p-3.5 text-base rounded-full shadow-floating"
  };

  const variantStyles = {
    primary: "bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md shadow-emerald-600/25",
    outline: "bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md shadow-emerald-600/25",
    floating: "bg-[#25D366] hover:bg-[#1EBE5D] text-white fixed bottom-6 right-6 z-40 shadow-xl hover:scale-105"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className={`${size === 'lg' ? 'w-5 h-5' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} shrink-0`} />
      {variant !== 'floating' && <span>{text}</span>}
    </a>
  );
};
