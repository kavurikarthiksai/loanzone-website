import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  ThreeDOnlineApply,
  ThreeDUploadDocs,
  ThreeDOffers,
  ThreeDDisbursal
} from './ThreeDIcons';

export const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      iconComponent: ThreeDOnlineApply,
      title: "Apply Online",
      desc: "Fill in basic personal and employment details in under 2 minutes through our secure digital form."
    },
    {
      num: "02",
      iconComponent: ThreeDUploadDocs,
      title: "Share Required Details",
      desc: "Upload basic KYC and salary slips or bank statements for automated instantaneous profile evaluation."
    },
    {
      num: "03",
      iconComponent: ThreeDOffers,
      title: "Get Loan Offers",
      desc: "Receive pre-qualified quotes from multiple lending partners with transparent interest rates and fees."
    },
    {
      num: "04",
      iconComponent: ThreeDDisbursal,
      title: "Instant Disbursal",
      desc: "Sign your digital loan sanction agreement and have funds wired directly into your active bank account."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3 border border-blue-100">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.iconComponent;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 shadow-soft border border-slate-100 hover:border-blue-300 hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between relative group"
                >
                  <div>
                    {/* Step Icon & Number Badge */}
                    <div className="flex items-center justify-between w-full mb-5">
                      <div className="transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-300 drop-shadow-md">
                        <IconComp className="w-14 h-14" />
                      </div>
                      <span className="text-3xl font-black text-slate-200 group-hover:text-blue-300 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-lg mb-2 group-hover:text-[#063B73] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
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
