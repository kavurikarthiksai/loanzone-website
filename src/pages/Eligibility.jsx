import React from 'react';
import { EligibilityChecker } from '../components/EligibilityChecker';
import { LoanCalculator } from '../components/LoanCalculator';
import { ShieldCheck, CheckCircle2, FileCheck, Building, HelpCircle } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const Eligibility = () => {
  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Pre-Qualification
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
            Check Your Loan Eligibility
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Understand standard bank acceptance criteria, calculate your disposable borrowing power, and verify prerequisites.
          </p>
        </div>
      </div>

      {/* Interactive Tool */}
      <EligibilityChecker showHeader={false} />

      {/* Educational Guidelines Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#063B73] flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">CIBIL Score Criteria</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>750+:</strong> Instant pre-approval at lowest interest rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>650 - 749:</strong> Approved with standard documents.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>600 - 649:</strong> Special NBFC lending partner consideration.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center mb-5">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Key Documents</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>PAN Card & Aadhaar Card (KYC)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Latest 3 Months Salary Slips or Form 16</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Last 6 Months Bank Statement (salary account)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center mb-5">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Employment Rules</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Minimum age 21 years up to 60 years at maturity</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Minimum net monthly salary of ₹15,000</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Minimum 6 months in current employment or 1 yr total</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <LoanCalculator />
    </div>
  );
};
