import React from 'react';
import { 
  Zap, Eye, Network, Headphones, FileCheck2, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export const WhyLoanZone = () => {
  const points = [
    {
      icon: Zap,
      title: "Fast Processing",
      desc: "Get initial approval within minutes and funds credited to your bank account within 24 to 48 hours."
    },
    {
      icon: Eye,
      title: "Transparent Process",
      desc: "Zero hidden charges, explicit processing fees, and 100% upfront clarity on terms and interest calculations."
    },
    {
      icon: Network,
      title: "Multiple Banking Partners",
      desc: "Compare offers across 15+ top private, public, and retail lenders to secure the lowest possible APR."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "An assigned loan manager walks you through each step, coordinates document pickup, and handles follow-ups."
    },
    {
      icon: FileCheck2,
      title: "Simple Documentation",
      desc: "Digital e-KYC and paperless verification with minimal paperwork needed for salaried or business profiles."
    },
    {
      icon: ShieldCheck,
      title: "Secure Application Process",
      desc: "Bank-grade 256-bit encryption safeguards your personal data, never shared with unverified parties."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-emerald-50 text-[#16A34A] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
            Why Thousands Trust LoanZone
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We simplify borrowing by putting your interests first, cutting through red tape and matching you with optimal lenders.
          </p>
        </div>

        {/* 6 Feature Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-white hover:border-blue-200 hover:shadow-soft transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-[#063B73] flex items-center justify-center mb-5 group-hover:bg-[#063B73] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#063B73] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
