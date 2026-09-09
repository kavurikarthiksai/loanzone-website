import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, HeartHandshake } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#F8FAFC] pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-orange-100/40 blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Supporting text, Description, CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-blue-100 text-xs font-bold text-[#063B73]">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping"></span>
              <span>India’s Most Trusted Loan Aggregator</span>
            </div>

            {/* Main Headline: Dark navy + LoanZone Orange for important words */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#063B73] tracking-tight leading-[1.15]">
              Personal Loans <br className="hidden sm:inline" />
              for a <span className="text-[#F97316] relative inline-block">
                Better Tomorrow
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#F97316]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting text */}
            <div className="inline-block py-1.5 px-3 bg-blue-50/80 rounded-lg text-[#063B73] font-bold text-sm sm:text-base tracking-wide border border-blue-100">
              Quick Approval <span className="text-orange-400 font-normal">|</span> Low Interest Rates <span className="text-orange-400 font-normal">|</span> Easy Process
            </div>

            {/* Additional description */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We help you get the best personal loan offers from trusted banks with minimal paperwork, customized repayments, and zero hidden charges.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/apply-now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-base font-bold rounded-xl shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <WhatsAppButton
                size="lg"
                text="Chat on WhatsApp"
                message="Hi LoanZone, I would like to check personal loan offers starting from 9.99%."
                className="w-full sm:w-auto"
              />
            </div>

            {/* Trust Highlights under CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> 100% Paperless Process
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> Disbursal in 24 Hours
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> 15+ Partner Banks
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual, Floating Interest Rate Card, Handwritten note (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Decorative Rings */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-200/50 to-orange-100/50 -z-0 scale-105"></div>
            
            {/* Main Advisor Photo Card */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="/images/advisor.jpg"
                alt="LoanZone Certified Financial Advisor"
                className="w-full h-auto object-cover object-center max-h-[460px] transform hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
              
              {/* Bottom Advisor Info Strip */}
              <div className="p-4 bg-white/95 backdrop-blur-xs flex items-center justify-between border-t border-slate-100">
                <div>
                  <h4 className="text-sm font-extrabold text-[#063B73]">Dedicated Loan Specialist</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Doorstep & Online Advisory</p>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md text-amber-700 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5</span>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Interest Rates Starting From 9.99%* */}
            <div className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-floating border border-blue-100/80 animate-float">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Interest Rates
              </span>
              <span className="text-xs text-slate-600 font-medium block">
                Starting From
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#F97316] leading-none mt-1">
                9.99%*
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                *T&C apply. Per annum
              </span>
            </div>

            {/* Floating Card 2: Handwritten Message "Your Financial Goals Our Support" */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl px-5 py-3 shadow-floating transform rotate-2 animate-subtle-pulse">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-white shrink-0" />
                <div className="font-handwritten text-lg sm:text-xl font-bold tracking-wide leading-tight">
                  Your Financial Goals <br /> Our Support
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
