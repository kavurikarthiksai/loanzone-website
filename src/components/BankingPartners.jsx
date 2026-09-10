import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, Award, Check, X } from 'lucide-react';
import { bankingPartners, partnerChecklist } from '../data/bankingPartners';
import { BankLogo, bankLogoMap } from './BankLogos';
import { Link } from 'react-router-dom';

export const BankingPartners = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  const closeModal = () => setSelectedBank(null);

  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/60" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3 border border-slate-200 shadow-2xs">
            <Award className="w-4 h-4 text-[#0B5ED7]" />
            <span>Authorized Banking Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B73] tracking-tight">
            Our Banking Partners
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Compare personalized loan terms across India's premier private, PSU, and retail lenders.
          </p>
        </div>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 8 Bank Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bankingPartners.map((bank, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedBank(bank)}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-soft hover:shadow-premium hover:border-[#0B5ED7] transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center group-hover:scale-105 transition-transform origin-left">
                      <BankLogo code={bank.code} />
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">Starting</span>
                      <span className="text-xs font-black text-[#16A34A] bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md inline-block mt-0.5">
                        {bank.rate}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-3">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 font-medium leading-snug">
                      {bank.highlight}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs mt-auto">
                  <span className="text-[11px] text-slate-500 font-semibold">
                    {bank.maxAmount} • {bank.tenure}
                  </span>
                  <div className="inline-flex items-center gap-1 font-bold text-[#063B73] group-hover:text-[#F97316] transition-colors">
                    <span>View Offers</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Special Lending Benefits Checklist */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#063B73] via-[#084B91] to-[#04244B] rounded-3xl p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-orange-300 mb-4 backdrop-blur-xs border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Special Approval Criteria</span>
              </div>
              
              <h3 className="text-2xl font-black mb-3 leading-tight tracking-tight">
                Loans Tailored for Every Situation
              </h3>
              
              <p className="text-blue-100/80 text-xs sm:text-sm mb-6 leading-relaxed">
                Even if local bank branches rejected your application, our automated lender network matches lenient underwriting rules for non-standard profiles.
              </p>

              <div className="space-y-2.5">
                {partnerChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 border border-white/15 py-2.5 px-3.5 rounded-xl backdrop-blur-xs">
                    <div className="w-5 h-5 rounded-full bg-[#16A34A] flex items-center justify-center shrink-0 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                to="/eligibility"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold rounded-xl text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 group"
              >
                <span>Check Your Lender Eligibility</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Brochure Modal */}
      {selectedBank && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="absolute inset-0" 
            onClick={closeModal}
          ></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] animate-slide-up z-10">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex-1 overflow-y-auto">
              <div className="bg-gradient-to-b from-blue-50 to-white w-full h-full min-h-[500px] flex flex-col">
                {/* Brochure Header */}
                <div className="px-8 py-10 text-center bg-white border-b border-blue-100 flex flex-col items-center justify-center">
                  <BankLogo code={selectedBank.code} className="h-12 scale-150 mx-auto mb-6 transform origin-center" />
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 font-bold text-[10px] uppercase tracking-widest rounded-sm mb-2">
                    Exclusive Partner Offer
                  </span>
                  <h2 className="text-3xl font-black text-[#063B73] leading-tight">
                    {selectedBank.name} Personal Loan
                  </h2>
                </div>
                
                {/* Brochure Body */}
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <div className="bg-[#063B73] text-white rounded-2xl p-6 text-center shadow-lg relative overflow-hidden mb-6">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                    <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-1 relative z-10">Special Interest Rate</p>
                    <div className="text-5xl font-black text-orange-400 relative z-10">{selectedBank.rate}</div>
                    <p className="text-blue-200 text-xs mt-2 relative z-10">*Terms & Conditions apply</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-semibold">{selectedBank.highlight}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-semibold">Maximum Amount: <span className="text-[#063B73]">{selectedBank.maxAmount}</span></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-semibold">Flexible Repayment: <span className="text-[#063B73]">{selectedBank.tenure}</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 bg-white shrink-0">
              <Link
                to={`/apply-now?bank=${encodeURIComponent(selectedBank.name)}`}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-black text-lg rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                <span>Apply For {selectedBank.name} Loan</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
};
