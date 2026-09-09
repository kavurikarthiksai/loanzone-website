import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, User, Phone, Mail, IndianRupee, 
  Building2, FileText, CheckCircle2, ArrowRight, ArrowLeft, Sparkles 
} from 'lucide-react';
import { loanProducts } from '../data/loanProducts';
import { bankingPartners } from '../data/bankingPartners';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useToast } from '../context/ToastContext';

export const ApplyNow = () => {
  const [searchParams] = useSearchParams();
  const { addToast } = useToast();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    panNumber: '',
    employmentType: 'Salaried',
    monthlySalary: '',
    loanProduct: searchParams.get('product') || 'personal-loan',
    loanAmount: searchParams.get('amount') || '500000',
    preferredBank: 'HDFC Bank',
    purpose: 'Personal / Debt Consolidation',
    agreeTerms: true
  });

  const [applicationId, setApplicationId] = useState('');

  useEffect(() => {
    const prod = searchParams.get('product');
    const amt = searchParams.get('amount');
    if (prod) setFormData((prev) => ({ ...prev, loanProduct: prod }));
    if (amt) setFormData((prev) => ({ ...prev, loanAmount: amt }));
  }, [searchParams]);

  const handleStep1 = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.monthlySalary) {
      addToast("Please fill in all mandatory applicant details.", "error");
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      addToast("Please accept the terms and loan disclaimer.", "error");
      return;
    }

    const appRef = 'LZ-' + Math.floor(100000 + Math.random() * 900000);
    setApplicationId(appRef);
    setStep(3);
    addToast(`Application #${appRef} received! In-principle sanction initialized.`, "success");
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F97316] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Fast Track Application
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#063B73] tracking-tight">
            Apply for Your Personal Loan
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Instant paperless pre-approval in 3 minutes across 15+ partner banks.
          </p>
        </div>

        {/* Multi-step progress bar */}
        {step < 3 && (
          <div className="max-w-md mx-auto mb-8 flex items-center justify-between relative">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            <div
              className="absolute top-1/2 left-4 h-0.5 bg-[#063B73] -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: step === 1 ? '0%' : '100%' }}
            ></div>

            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  step >= 1 ? 'bg-[#063B73] text-white shadow-md' : 'bg-slate-200 text-slate-500'
                }`}
              >
                1
              </div>
              <span className="text-[11px] font-bold mt-1 text-slate-700">Applicant Details</span>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  step >= 2 ? 'bg-[#063B73] text-white shadow-md' : 'bg-slate-200 text-slate-500'
                }`}
              >
                2
              </div>
              <span className="text-[11px] font-bold mt-1 text-slate-700">Loan & Bank Choice</span>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs bg-slate-200 text-slate-500">
                3
              </div>
              <span className="text-[11px] font-bold mt-1 text-slate-400">Sanction Quote</span>
            </div>
          </div>
        )}

        {/* Card Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
          
          {/* STEP 1: Applicant Details */}
          {step === 1 && (
            <form onSubmit={handleStep1} className="space-y-6 animate-slide-up">
              <h2 className="text-xl font-extrabold text-[#063B73] flex items-center gap-2">
                <User className="w-5 h-5 text-[#F97316]" /> Step 1: Personal & Income Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Full Name (As per PAN) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sundaram"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Mobile Number (WhatsApp linked) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="priya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    City of Residence
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Bengaluru, Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Employment Type
                  </label>
                  <select
                    value={formData.employmentType}
                    onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-semibold"
                  >
                    <option value="Salaried">Salaried (Private / MNC / Govt)</option>
                    <option value="Self-Employed">Self-Employed Professional</option>
                    <option value="Business Owner">Business Owner / Trader</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Net Monthly Take-Home (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 65000"
                    value={formData.monthlySalary}
                    onChange={(e) => setFormData({ ...formData, monthlySalary: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Loan Preferences</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Loan & Bank Preferences */}
          {step === 2 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6 animate-slide-up">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-[#063B73] flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-[#F97316]" /> Step 2: Loan Amount & Lenders
                </h2>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Select Loan Category
                  </label>
                  <select
                    value={formData.loanProduct}
                    onChange={(e) => setFormData({ ...formData, loanProduct: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-semibold"
                  >
                    {loanProducts.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} (From {p.interestRate})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Desired Loan Amount (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 500000"
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Preferred Partner Bank
                  </label>
                  <select
                    value={formData.preferredBank}
                    onChange={(e) => setFormData({ ...formData, preferredBank: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  >
                    <option value="Best Matching Bank">Let LoanZone Choose (Lowest Rate)</option>
                    {bankingPartners.map((b) => (
                      <option key={b.code} value={b.name}>
                        {b.name} ({b.rate})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Purpose of Loan
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  >
                    <option value="Personal / Debt Consolidation">Debt Consolidation & EMI Relief</option>
                    <option value="Home Renovation">Home Renovation / Interior</option>
                    <option value="Medical Emergency">Medical Emergency</option>
                    <option value="Wedding / Family Event">Wedding / Family Function</option>
                    <option value="Travel / Vacation">Travel & Education</option>
                    <option value="Business Expansion">Business Growth & Working Capital</option>
                  </select>
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600 leading-relaxed">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-[#063B73] focus:ring-[#063B73]"
                  />
                  <span>
                    I authorize LoanZone and its RBI-regulated partner lending institutions to evaluate my credit report and contact me via Phone, SMS, or WhatsApp regarding loan offers.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3.5 px-6 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Application for Instant Sanction</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Instant Success Sanction Confirmation */}
          {step === 3 && (
            <div className="py-8 text-center space-y-6 animate-slide-up">
              <div className="w-20 h-20 bg-emerald-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-emerald-600 tracking-wider">Application Received</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  Congratulations, {formData.fullName}!
                </h2>
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                  Your loan application has been registered with reference ID:
                </p>
                <div className="inline-block my-3 px-4 py-2 bg-blue-50 border border-blue-200 rounded-xl font-mono text-lg font-black text-[#063B73]">
                  {applicationId}
                </div>
              </div>

              {/* Sanction Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left max-w-lg mx-auto space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Requested Amount:</span>
                  <span className="font-extrabold text-slate-900">₹{Number(formData.loanAmount).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Product:</span>
                  <span className="font-bold text-[#063B73]">{formData.loanProduct.toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Matched Lending Bank:</span>
                  <span className="font-bold text-slate-800">{formData.preferredBank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Indicative Rate:</span>
                  <span className="font-bold text-[#16A34A]">9.99% - 10.50% P.A.</span>
                </div>
              </div>

              {/* WhatsApp instant coordination CTA */}
              <div className="pt-2 max-w-md mx-auto space-y-3">
                <WhatsAppButton
                  text="Speed Up Approval via WhatsApp"
                  message={`Hi LoanZone team, I just applied for a personal loan with Application ID: ${applicationId} for ₹${formData.loanAmount}. Please share document verification link.`}
                  size="lg"
                  className="w-full justify-center shadow-lg"
                />

                <Link
                  to="/"
                  className="block text-xs font-bold text-slate-500 hover:text-[#063B73] pt-2"
                >
                  Return to LoanZone Home
                </Link>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
