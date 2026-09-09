import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#063B73] via-[#04244B] to-[#031730] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-orange-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-xs border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
          Trusted. Simple. Faster.
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 text-white">
          Need a Personal Loan?
        </h2>

        {/* Supporting subheadline */}
        <p className="text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let our experts help you find the best offer with minimal documentation and instant pre-approval.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            to="/apply-now"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl text-base shadow-xl transition-all active:scale-95 group"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <WhatsAppButton
            size="lg"
            text="Chat on WhatsApp"
            message="Hi LoanZone team! I need urgent personal loan assistance."
            className="w-full sm:w-auto"
          />
        </div>

        {/* Reassurance text */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-blue-200/70 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> Zero Upfront Fees
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> 256-Bit SSL Encrypted
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> 15+ Partner Banks
          </span>
        </div>

      </div>
    </section>
  );
};
