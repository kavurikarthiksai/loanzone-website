import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CONFIG } from '../config/config';
import { WhatsAppButton } from './WhatsAppButton';

export const Footer = () => {
  return (
    <footer className="bg-[#031730] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#063B73] to-[#0B5ED7] flex items-center justify-center text-white font-black text-xl shadow-md">
                LZ
              </div>
              <div className="flex items-center tracking-tight font-extrabold text-2xl text-white">
                Loan<span className="text-[#F97316]">Zone</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              LoanZone is your trusted digital loan partner, connecting salaried and self-employed borrowers with India’s leading private and public sector banking institutions for quick, transparent, and low-interest loan sanctions.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                size="sm"
                text="Chat with Loan Advisor"
                message="Hi, I would like to consult regarding a personal loan via LoanZone."
              />
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/loan-products" className="text-slate-400 hover:text-white transition-colors">Loan Products</Link></li>
              <li><Link to="/eligibility" className="text-slate-400 hover:text-white transition-colors">Check Eligibility</Link></li>
              <li><Link to="/faqs" className="text-slate-400 hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link to="/apply-now" className="text-[#F97316] font-semibold hover:underline">Apply for Loan →</Link></li>
            </ul>
          </div>

          {/* Col 4: Loan Offerings */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Loan Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/loan-products" className="text-slate-400 hover:text-white transition-colors">Personal Loan</Link></li>
              <li><Link to="/loan-products" className="text-slate-400 hover:text-white transition-colors">Top-Up Loan</Link></li>
              <li><Link to="/loan-products" className="text-slate-400 hover:text-white transition-colors">Balance Transfer (BT)</Link></li>
              <li><Link to="/loan-products" className="text-slate-400 hover:text-white transition-colors">Credit Card BT</Link></li>
              <li><Link to="/loan-products" className="text-slate-400 hover:text-white transition-colors">Business Loan</Link></li>
              <li><Link to="/loan-products" className="text-slate-400 hover:text-white transition-colors">Home & Car Loans</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span className="text-slate-400">{CONFIG.officeAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16A34A] shrink-0" />
                <a href={`tel:${CONFIG.supportPhoneRaw}`} className="text-slate-300 hover:text-white font-semibold">
                  {CONFIG.supportPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                <a href={`mailto:${CONFIG.supportEmail}`} className="text-slate-300 hover:text-white">
                  {CONFIG.supportEmail}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/admin/login"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 underline"
                >
                  Admin Portal Login <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Area */}
        <div className="py-6 border-b border-slate-800/80 text-xs text-slate-400 leading-relaxed bg-slate-950/40 p-4 rounded-xl mt-6">
          <p className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" /> Regulatory & Financial Disclaimer:
          </p>
          <p>
            {CONFIG.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 LoanZone. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-300 cursor-pointer">Security & Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
