import React from 'react';
import { Laptop, FileSpreadsheet, Gift, Banknote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      icon: Laptop,
      title: "Apply Online",
      desc: "Fill in basic personal and employment details in under 2 minutes through our secure digital form."
    },
    {
      num: "02",
      icon: FileSpreadsheet,
      title: "Share Required Details",
      desc: "Upload basic KYC and salary slips or bank statements for automated instantaneous profile evaluation."
    },
    {
      num: "03",
      icon: Gift,
      title: "Get Loan Offers",
      desc: "Receive pre-qualified quotes from multiple lending partners with transparent interest rates and fees."
    },
    {
      num: "04",
      icon: Banknote,
      title: "Complete & Disbursal",
      desc: "Sign your digital loan sanction agreement and have funds wired directly into your active bank account."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Simple 4-Step Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
            How LoanZone Works
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            From initial application to instant bank credit, experience a frictionless borrowing process.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline / Mobile: Vertical Timeline */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-blue-200 via-orange-300 to-emerald-400 -translate-y-6 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 shadow-soft border border-slate-100 hover:border-blue-300 transition-all duration-300 flex flex-col items-start relative group"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between w-full mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#063B73] text-white flex items-center justify-center group-hover:bg-[#F97316] transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-orange-200 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#063B73] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <Link
            to="/apply-now"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            <span>Start Your Online Application</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
