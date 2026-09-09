import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ShieldCheck, ArrowRight, LayoutDashboard } from 'lucide-react';
import { CONFIG } from '../config/config';
import { WhatsAppButton } from './WhatsAppButton';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Loan Products', path: '/loan-products' },
    { name: 'Eligibility', path: '/eligibility' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#063B73] to-[#0B5ED7] flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              LZ
            </div>
            <div className="flex flex-col">
              <div className="tracking-tight font-extrabold text-xl sm:text-2xl text-[#063B73] leading-tight">
                Loan<span className="text-[#F97316]">Zone</span>
              </div>
              <div className="text-[9.5px] sm:text-[10px] text-slate-400 font-bold tracking-wider uppercase flex items-center gap-1 leading-none mt-0.5 whitespace-nowrap">
                <ShieldCheck className="w-3 h-3 text-[#16A34A] shrink-0" />
                <span>Trusted Loan Partner</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5 shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#063B73] bg-blue-50 font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-[#063B73] hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Area: Expert Phone + WhatsApp + Apply Now + Admin Portal */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            
            {/* Talk to Expert / Phone CTA */}
            <a
              href={`tel:${CONFIG.supportPhoneRaw}`}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl hover:bg-slate-50 transition-colors group"
              title="Call a certified loan specialist"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#063B73] flex items-center justify-center group-hover:bg-[#063B73] group-hover:text-white transition-colors shrink-0">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <div className="text-left whitespace-nowrap">
                <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                  Talk to an Expert
                </span>
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#0B5ED7] transition-colors leading-tight mt-0.5 block">
                  {CONFIG.supportPhone}
                </span>
              </div>
            </a>

            {/* Subtle Vertical Divider */}
            <div className="h-6 w-[1px] bg-slate-200 shrink-0"></div>

            {/* WhatsApp CTA Button */}
            <WhatsAppButton
              size="sm"
              text="WhatsApp"
              message="Hello LoanZone, I would like to consult with an advisor regarding a loan offer."
              className="!py-2 !px-3.5 !text-xs !font-bold"
            />

            {/* Apply Now Orange Button */}
            <Link
              to="/apply-now"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Admin Portal Shortcut Button */}
            <Link
              to="/admin/login"
              className="p-2 text-slate-400 hover:text-[#063B73] hover:bg-slate-100 rounded-xl transition-colors shrink-0"
              title="WhatsApp Automation Admin Portal"
            >
              <LayoutDashboard className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile & Tablet Right Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            <WhatsAppButton
              size="sm"
              text=""
              message="Hi LoanZone! Please guide me on loan eligibility."
              className="!px-2.5 !py-2 shrink-0"
            />
            <Link
              to="/apply-now"
              className="px-3 py-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg shadow-sm whitespace-nowrap"
            >
              Apply
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Slide-down Navigation Drawer */}
      {isOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3 animate-slide-up">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'text-[#063B73] bg-blue-50 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            {/* Call support */}
            <a
              href={`tel:${CONFIG.supportPhoneRaw}`}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-slate-800 font-semibold text-sm"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 text-[#063B73] flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-500 block font-medium">Talk to an Expert</span>
                <span className="text-sm font-bold text-[#063B73]">{CONFIG.supportPhone}</span>
              </div>
            </a>

            {/* WhatsApp Full Width Button */}
            <WhatsAppButton
              size="md"
              text="Chat on WhatsApp"
              className="w-full justify-center"
            />

            {/* Apply Now Full Width */}
            <Link
              to="/apply-now"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#F97316] text-white font-bold rounded-xl shadow-md text-sm"
            >
              <span>Apply for Personal Loan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Admin Dashboard shortcut */}
            <Link
              to="/admin/login"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-500 hover:text-[#063B73]"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Admin WhatsApp Automation Portal</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
