import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, PlusCircle, ArrowRightLeft, CreditCard, 
  Briefcase, GraduationCap, Car, Home, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { loanProducts } from '../data/loanProducts';

// Icon mapper helper with individual 3D styling gradients
const iconStyles = {
  'personal-loan': { icon: Wallet, bg: 'from-[#004C8F] to-[#0B5ED7]', shadow: 'shadow-blue-500/25' },
  'top-up-loan': { icon: PlusCircle, bg: 'from-[#F59E0B] to-[#D97706]', shadow: 'shadow-amber-500/25' },
  'balance-transfer': { icon: ArrowRightLeft, bg: 'from-[#10B981] to-[#059669]', shadow: 'shadow-emerald-500/25' },
  'credit-card-bt': { icon: CreditCard, bg: 'from-[#8B5CF6] to-[#6D28D9]', shadow: 'shadow-purple-500/25' },
  'business-loan': { icon: Briefcase, bg: 'from-[#063B73] to-[#04244B]', shadow: 'shadow-navy-500/25' },
  'education-loan': { icon: GraduationCap, bg: 'from-[#0284C7] to-[#0369A1]', shadow: 'shadow-sky-500/25' },
  'car-loan': { icon: Car, bg: 'from-[#EC4899] to-[#BE185D]', shadow: 'shadow-pink-500/25' },
  'home-loan': { icon: Home, bg: 'from-[#F97316] to-[#EA580C]', shadow: 'shadow-orange-500/25' },
};

export const LoanOptions = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60" id="loan-options">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F97316] font-bold text-xs uppercase tracking-wider rounded-full mb-3 shadow-2xs">
            Comprehensive Financing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#063B73] tracking-tight">
            Loan Options
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore customized borrowing solutions with flexible tenures, competitive interest rates, and transparent terms.
          </p>
        </div>

        {/* 8 Icon-Based Cards Grid (2-columns on mobile as required) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {loanProducts.map((product) => {
            const style = iconStyles[product.id] || { icon: Wallet, bg: 'from-[#004C8F] to-[#0B5ED7]', shadow: 'shadow-blue-500/25' };
            const IconComponent = style.icon;
            
            return (
              <Link
                key={product.id}
                to={`/apply-now?product=${product.id}`}
                className="group relative bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-400 hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    <Sparkles className="w-2.5 h-2.5" /> Popular
                  </div>
                )}

                <div>
                  {/* 3D Gradient Icon Container */}
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${style.bg} text-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-108 group-hover:-rotate-3 shadow-lg ${style.shadow} relative overflow-hidden`}>
                    {/* Top glass sheen */}
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 rounded-t-2xl pointer-events-none"></div>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1 group-hover:text-[#063B73] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed font-medium">
                    {product.tagline}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase">Rates From</span>
                    <span className="text-xs sm:text-sm font-black text-[#16A34A]">{product.interestRate}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

        {/* Centered Bottom CTA link */}
        <div className="mt-12 text-center">
          <Link
            to="/loan-products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#063B73] border border-slate-200 hover:border-blue-300 font-bold text-sm shadow-soft transition-all"
          >
            <span>Explore All 8 Loan Products in Detail</span>
            <ArrowUpRight className="w-4 h-4 text-[#F97316]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
