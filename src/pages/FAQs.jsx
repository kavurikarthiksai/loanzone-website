import React from 'react';
import { FAQAccordion } from '../components/FAQAccordion';
import { HelpCircle, PhoneCall, Mail } from 'lucide-react';
import { CONFIG } from '../config/config';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const FAQs = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
          Help Center & FAQs
        </h1>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Clear answers to common questions on interest calculation, eligibility guidelines, documentation, and lender disbursal.
        </p>
      </div>

      <FAQAccordion allowMultiple={true} showSearch={true} />

      {/* Support Contact Strip */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Need personal assistance?</h3>
            <p className="text-slate-500 text-sm mt-1">Our certified loan advisors are available for direct 1-on-1 consultations.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <WhatsAppButton
              size="md"
              text="WhatsApp Advisor"
            />
            <a
              href={`tel:${CONFIG.supportPhoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{CONFIG.supportPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
