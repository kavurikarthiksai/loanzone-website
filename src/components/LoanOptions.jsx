import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wallet, PlusCircle, ArrowRightLeft, CreditCard, 
  Briefcase, GraduationCap, Car, Home, ArrowUpRight, Sparkles 
} from 'lucide-react';
import { loanProducts } from '../data/loanProducts';

// Icon mapper helper
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

export const LoanOptions = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F97316] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
              Comprehensive Financing
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
              Loan Options
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-xl">
              Explore customized borrowing solutions with flexible tenures, competitive interest rates, and transparent terms.
            </p>
          </div>
          <Link
            to="/loan-products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#063B73] hover:text-[#F97316] transition-colors"
          >
            <span>View All Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Icon-Based Cards Grid (2-columns on mobile as required!) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {loanProducts.map((product) => {
            const IconComponent = iconMap[product.icon] || Wallet;
            return (
              <Link
                key={product.id}
                to={`/apply-now?product=${product.id}`}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-400 hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    <Sparkles className="w-2.5 h-2.5" /> Popular
                  </div>
                )}

                <div>
                  {/* Icon with hover pulse/animation */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-50/80 text-[#063B73] group-hover:bg-[#063B73] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 shadow-2xs">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:rotate-6" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1 group-hover:text-[#063B73] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase">Rates From</span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#16A34A]">{product.interestRate}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
