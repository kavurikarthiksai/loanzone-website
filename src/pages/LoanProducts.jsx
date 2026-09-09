import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, PlusCircle, ArrowRightLeft, CreditCard, 
  Briefcase, GraduationCap, Car, Home, ArrowRight, Check, Sparkles 
} from 'lucide-react';
import { loanProducts } from '../data/loanProducts';
import { WhatsAppButton } from '../components/WhatsAppButton';

const iconMap = {
  Wallet,
  PlusCircle,
  ArrowRightLeft,
  CreditCard,
  Briefcase,
  GraduationCap,
  Car,
  Home
};

export const LoanProducts = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = loanProducts.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'personal') return ['personal-loan', 'top-up-loan', 'balance-transfer', 'credit-card-bt'].includes(p.id);
    if (filter === 'business') return ['business-loan'].includes(p.id);
    if (filter === 'asset') return ['car-loan', 'home-loan', 'education-loan'].includes(p.id);
    return true;
  });

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Our Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
            Comprehensive Loan Offerings
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Choose from a wide spectrum of retail and enterprise financing products with instant pre-approval and competitive interest rates.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Loans (8)' },
              { id: 'personal', label: 'Personal & Transfer' },
              { id: 'business', label: 'Business Financing' },
              { id: 'asset', label: 'Home, Car & Education' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  filter === tab.id
                    ? 'bg-[#063B73] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((p) => {
            const IconComponent = iconMap[p.icon] || Wallet;
            return (
              <div
                key={p.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#063B73] flex items-center justify-center shrink-0">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                          {p.title}
                        </h2>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                    {p.popular && (
                      <span className="flex items-center gap-1 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                        <Sparkles className="w-3 h-3" /> Popular
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Highlight Specs */}
                  <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl mb-6 text-center border border-slate-100">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Rate Starting</span>
                      <span className="text-sm sm:text-base font-black text-[#16A34A]">{p.interestRate}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Max Amount</span>
                      <span className="text-sm sm:text-base font-black text-[#063B73]">{p.maxAmount}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase">Max Tenure</span>
                      <span className="text-sm sm:text-base font-black text-slate-800">{p.tenure}</span>
                    </div>
                  </div>

                  {/* Features Bullet List */}
                  <ul className="space-y-2 mb-8">
                    {p.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    to={`/apply-now?product=${p.id}`}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl text-sm transition-all active:scale-95 shadow-sm"
                  >
                    <span>Apply Online</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <WhatsAppButton
                    text="Inquire via WhatsApp"
                    message={`Hi LoanZone, I am interested in exploring terms for ${p.title}.`}
                    variant="outline"
                    size="md"
                    className="w-full sm:w-1/2"
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
