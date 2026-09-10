import React from 'react';
import { 
  FileText, ShieldCheck, Scale, AlertCircle, 
  CheckCircle2, Building, Phone, Mail, ArrowRight, UserCheck, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config/config';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const TermsAndConditions = () => {
  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F97316] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Legal Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Last Revised: September 2026 | Effective for all LoanZone website users & loan applicants
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before using the LoanZone platform or submitting a loan application. By browsing our website or applying for credit facilities, you agree to be bound by these terms.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
            <div className="p-2 bg-blue-50 text-[#063B73] rounded-xl shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Authorized DSA Partner</span>
              <span className="text-[11px] text-slate-500">Authorized intermediary connecting borrowers to scheduled banks.</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
            <div className="p-2 bg-emerald-50 text-[#16A34A] rounded-xl shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Zero Upfront Fees</span>
              <span className="text-[11px] text-slate-500">We never charge borrowers any advance fees or commission.</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-start gap-3">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Transparent Disbursal</span>
              <span className="text-[11px] text-slate-500">Loan sanction and rates are solely determined by lending banks.</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">1.</span> Nature of Service & Intermediary Role
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              LoanZone operates as a digital credit facilitator, Direct Selling Agent (DSA), and authorized corporate partner for scheduled commercial banks and Non-Banking Financial Companies (NBFCs) in India.
            </p>
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs sm:text-sm text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Important Regulatory Notice:</strong> LoanZone is not a bank, deposit-taking institution, or direct lender. We do not issue loans directly; all credit decisions, underwriting, interest rates, and loan disbursements are executed exclusively by our partner RBI-regulated lending institutions.
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">2.</span> Applicant Eligibility & Representations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              By using our platform and submitting a loan request, you represent and warrant that:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
              <li>You are an Indian citizen or legal resident aged 21 years or older.</li>
              <li>All information provided (Full Name, Phone, Email, PAN, Monthly Salary, City, and Employment data) is true, accurate, current, and complete.</li>
              <li>You are not barred by any court or law from entering into legally binding loan contracts.</li>
              <li>You will not submit duplicate, fraudulent, or impersonated loan applications.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">3.</span> Loan Approval, Interest Rates & Tenures
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Interest rates (e.g., starting from 9.99%* p.a.), loan tenure limits (1 to 5 years), and maximum eligible amounts displayed across LoanZone calculators and comparison tables are illustrative and subject to:
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
              <li>Lender's credit assessment and internal risk algorithms.</li>
              <li>Your CIBIL/Experian credit score, repayment track record, and debt-to-income ratio.</li>
              <li>Document verification (PAN, Aadhaar e-KYC, Salary Slips, Bank Statements).</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">4.</span> Zero Advance Fee Guarantee
            </h2>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-900 space-y-1.5">
              <div className="font-bold flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Free Borrowing Assistance
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                LoanZone does NOT charge any upfront processing fees, file charges, or advance payments from applicants. Bank processing fees (if applicable) will be deducted directly by the lending bank from the sanctioned loan disbursal amount as per the Key Fact Statement (KFS).
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">5.</span> Consent for Electronic Communications & WhatsApp
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              When applying for a loan on our website, you expressly authorize LoanZone and its fulfillment representatives to contact you via WhatsApp messages, SMS, and Phone calls to coordinate documentation, provide sanction quotes, and assist in disbursal. This consent overrides any National Do Not Call (NDNC) registry preferences for the purpose of loan processing.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">6.</span> Limitation of Liability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              To the maximum extent permitted under applicable laws, LoanZone shall not be liable for any loan application rejection, delays in bank processing, changes in bank interest rates, or indirect/consequential damages resulting from third-party lending decisions.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">7.</span> Governing Law & Jurisdiction
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>

          {/* Help Box */}
          <div className="p-6 bg-slate-100/80 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Need clarification regarding our terms?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Contact our legal & customer assistance desk anytime.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/faqs"
                className="px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-all shadow-xs"
              >
                View FAQs
              </Link>
              <WhatsAppButton
                size="sm"
                text="Speak with Advisor"
                message="Hi LoanZone, I would like to clarify a question regarding your terms of service."
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
