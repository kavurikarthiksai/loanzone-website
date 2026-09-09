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
      setIsScrolled(window.scrollY > 20);
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
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#063B73] to-[#0B5ED7] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              LZ
            </div>
            <div>
              <div className="flex items-center tracking-tight font-extrabold text-2xl text-[#063B73]">
                Loan<span className="text-[#F97316]">Zone</span>
              </div>
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase -mt-1 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#16A34A]" /> Trusted Loan Partner
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#063B73] bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-[#063B73] hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Talk to Expert / Phone */}
            <a
              href={`tel:${CONFIG.supportPhoneRaw}`}
              className="flex items-center gap-2 text-left group pr-2"
              title="Call an expert"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 text-[#063B73] flex items-center justify-center group-hover:bg-[#063B73] group-hover:text-white transition-colors">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[11px] text-slate-400 font-medium uppercase tracking-wide">
                  Talk to an Expert
                </span>
                <span className="text-xs font-bold text-slate-800 group-hover:text-[#0B5ED7] transition-colors">
                  {CONFIG.supportPhone}
                </span>
              </div>
            </a>

            {/* WhatsApp CTA */}
            <WhatsAppButton
              size="sm"
              text="WhatsApp"
              message="Hello LoanZone, I would like to consult with an advisor regarding a loan offer."
            />

            {/* Apply Now Orange Button */}
            <Link
              to="/apply-now"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Admin Portal Shortcut Badge */}
            <Link
              to="/admin/login"
              className="p-2 text-slate-400 hover:text-[#063B73] hover:bg-slate-100 rounded-lg transition-colors"
              title="WhatsApp Admin Dashboard"
            >
              <LayoutDashboard className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button & Mobile WhatsApp */}
          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppButton
              size="sm"
              text=""
              message="Hi LoanZone! Please guide me on loan eligibility."
              className="!px-2.5 !py-2"
            />
            <Link
              to="/apply-now"
              className="px-3 py-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Apply
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3 animate-slide-up">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
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
                <span className="text-xs text-slate-500 block">Talk to an Expert</span>
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
