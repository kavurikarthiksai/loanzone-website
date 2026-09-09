import React from 'react';
import {
  ThreeDFlash,
  ThreeDTransparency,
  ThreeDNetwork,
  ThreeDSupport,
  ThreeDDocument,
  ThreeDShield
} from './ThreeDIcons';

export const WhyLoanZone = () => {
  const points = [
    {
      iconComponent: ThreeDFlash,
      title: "Fast Processing",
      desc: "Get initial approval within minutes and funds credited to your bank account within 24 to 48 hours."
    },
    {
      iconComponent: ThreeDTransparency,
      title: "Transparent Process",
      desc: "Zero hidden charges, explicit processing fees, and 100% upfront clarity on terms and interest calculations."
    },
    {
      iconComponent: ThreeDNetwork,
      title: "Multiple Banking Partners",
      desc: "Compare offers across 15+ top private, public, and retail lenders to secure the lowest possible APR."
    },
    {
      iconComponent: ThreeDSupport,
      title: "Dedicated Support",
      desc: "An assigned loan manager walks you through each step, coordinates document pickup, and handles follow-ups."
    },
    {
      iconComponent: ThreeDDocument,
      title: "Simple Documentation",
      desc: "Digital e-KYC and paperless verification with minimal paperwork needed for salaried or business profiles."
    },
    {
      iconComponent: ThreeDShield,
      title: "Secure Application Process",
      desc: "Bank-grade 256-bit encryption safeguards your personal data, never shared with unverified parties."
    }
  ];

  return (
    <section className="py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-emerald-50 text-[#16A34A] font-bold text-xs uppercase tracking-wider rounded-full mb-3 border border-emerald-100">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
            Why Thousands Trust LoanZone
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We simplify borrowing by putting your interests first, cutting through red tape and matching you with optimal lenders.
          </p>
        </div>

        {/* 6 Feature Trust Cards with 3D Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((item, idx) => {
            const IconComp = item.iconComponent;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300 drop-shadow-md">
                    <IconComp className="w-14 h-14" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#063B73] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
