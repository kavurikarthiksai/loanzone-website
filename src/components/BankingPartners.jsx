import React from 'react';
import { CheckCircle2, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { bankingPartners, partnerChecklist } from '../data/bankingPartners';
import { Link } from 'react-router-dom';

export const BankingPartners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Trusted Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
            Our Banking Partners
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We have official tie-ups with India’s leading private, public, and retail institutions to guarantee you the most competitive interest rates.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Partners Grid + Side Checklist Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Grid: Partner Cards (8 cols on lg) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {bankingPartners.map((bank, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-blue-300 hover:shadow-soft transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#063B73] font-black text-xs shadow-2xs group-hover:scale-105 transition-transform">
                    {bank.code.substring(0, 3)}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {bank.rate}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#063B73] transition-colors leading-tight">
                    {bank.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    {bank.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Special Lending Benefits Checklist (4 cols on lg) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#063B73] to-[#04244B] rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl"></div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-orange-300 mb-4 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
                Special Approval Criteria
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black mb-3 leading-tight">
                Loans Tailored for Every Situation
              </h3>
              
              <p className="text-blue-100/80 text-xs sm:text-sm mb-6 leading-relaxed">
                Even if high-street branches turned down your application, our curated lender network evaluates unique profiles with leniency.
              </p>

              {/* Side Checklist */}
              <div className="space-y-3.5">
                {partnerChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A]/20 border border-[#16A34A] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <Link
                to="/eligibility"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <span>Check Your Lender Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
