import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, AlertCircle, ArrowRight, UserCheck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsAppButton';

export const EligibilityChecker = ({ showHeader = true }) => {
  const [formData, setFormData] = useState({
    employmentType: 'Salaried',
    monthlyIncome: '',
    age: '',
    desiredAmount: '',
    existingEmi: '0'
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.monthlyIncome || Number(formData.monthlyIncome) <= 0) {
      errs.monthlyIncome = "Please enter valid net monthly income";
    }
    if (!formData.age || Number(formData.age) < 21 || Number(formData.age) > 65) {
      errs.age = "Applicant age must be between 21 and 65 years";
    }
    if (!formData.desiredAmount || Number(formData.desiredAmount) <= 0) {
      errs.desiredAmount = "Please enter required loan amount";
    }
    if (formData.existingEmi === '' || Number(formData.existingEmi) < 0) {
      errs.existingEmi = "Please enter current EMI (or 0 if none)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCheck = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const income = Number(formData.monthlyIncome);
    const existing = Number(formData.existingEmi);
    const desired = Number(formData.desiredAmount);

    // Standard FOIR (Fixed Obligation to Income Ratio) ~50%
    const maxDisposableEmi = Math.max(0, (income * 0.5) - existing);
    
    // Indicative maximum loan calculation for 48 months tenure at ~10.5% rate (factor ~26.5 per 1,000)
    const factor = 0.0256; 
    const maxEligibleAmount = Math.round(maxDisposableEmi / factor);

    let status = 'High';
    let message = 'Excellent Profile! You qualify for our premier interest rate slab starting from 9.99%.';
    let badgeColor = 'text-emerald-700 bg-emerald-100 border-emerald-300';

    if (maxDisposableEmi <= 5000 || maxEligibleAmount < desired * 0.4) {
      status = 'Moderate';
      message = 'Your existing obligations are high. Consider adding a co-applicant or extending tenure to qualify for full amount.';
      badgeColor = 'text-amber-700 bg-amber-100 border-amber-300';
    } else if (income < 18000) {
      status = 'Low';
      message = 'Your monthly income is below standard bank limits. A select few NBFC partners may still consider your profile.';
      badgeColor = 'text-rose-700 bg-rose-100 border-rose-300';
    }

    setResult({
      status,
      message,
      badgeColor,
      maxEligibleAmount: Math.max(50000, maxEligibleAmount),
      recommendedEmi: Math.round(maxDisposableEmi),
      desiredAmount: desired
    });
  };

  const handleReset = () => {
    setResult(null);
    setFormData({
      employmentType: 'Salaried',
      monthlyIncome: '',
      age: '',
      desiredAmount: '',
      existingEmi: '0'
    });
    setErrors({});
  };

  return (
    <section className={`${showHeader ? 'py-20 border-t border-slate-200/70' : 'pb-12'} bg-slate-50`} id="eligibility">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - shown only when showHeader is true */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3 border border-blue-100">
              Instant Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
              Check Loan Eligibility in 60 Seconds
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Find out your maximum borrowing capacity and matched lender criteria without affecting your credit score.
            </p>
          </div>
        )}

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-soft border border-slate-200/80">
          
          {!result ? (
            <form onSubmit={handleCheck} className="space-y-6">
              
              {/* Field 1: Employment Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Employment Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Salaried', 'Self-Employed / Business'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, employmentType: type })}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all border text-center ${
                        formData.employmentType === type
                          ? 'bg-[#063B73] text-white border-[#063B73] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 2 & 3: Income & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Net Monthly Income (₹) *
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 55000"
                    value={formData.monthlyIncome}
                    onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.monthlyIncome ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    } focus:outline-none focus:ring-2 focus:ring-[#063B73] font-medium text-slate-800 text-sm`}
                  />
                  {errors.monthlyIncome && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.monthlyIncome}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Age (21 - 65 Years) *
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 29"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.age ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    } focus:outline-none focus:ring-2 focus:ring-[#063B73] font-medium text-slate-800 text-sm`}
                  />
                  {errors.age && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.age}
                    </p>
                  )}
                </div>
              </div>

              {/* Field 4 & 5: Desired Loan Amount & Existing EMI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Desired Loan Amount (₹) *
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 400000"
                    value={formData.desiredAmount}
                    onChange={(e) => setFormData({ ...formData, desiredAmount: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.desiredAmount ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    } focus:outline-none focus:ring-2 focus:ring-[#063B73] font-medium text-slate-800 text-sm`}
                  />
                  {errors.desiredAmount && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.desiredAmount}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Existing Monthly EMI (₹)
                  </label>
                  <input
                    type="number"
                    placeholder="0 if no active loan"
                    value={formData.existingEmi}
                    onChange={(e) => setFormData({ ...formData, existingEmi: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.existingEmi ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                    } focus:outline-none focus:ring-2 focus:ring-[#063B73] font-medium text-slate-800 text-sm`}
                  />
                  {errors.existingEmi && (
                    <p className="text-rose-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.existingEmi}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <UserCheck className="w-5 h-5" />
                  <span>Check Eligibility</span>
                </button>
              </div>

            </form>
          ) : (
            /* Friendly Result Card */
            <div className="space-y-6 animate-slide-up">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#16A34A] flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Eligibility Result</h3>
                    <p className="text-xs text-slate-500">Based on your entered income and liabilities</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${result.badgeColor}`}>
                  {result.status} Approval Probability
                </span>
              </div>

              {/* Big amount card */}
              <div className="bg-blue-50/80 border border-blue-200/70 p-6 rounded-2xl text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#063B73]">
                  Indicative Max Eligible Amount
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#063B73] my-2">
                  ₹{result.maxEligibleAmount.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  {result.message}
                </p>
              </div>

              {/* Important Demo Disclaimer Callout */}
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block">DEMO CALCULATION ONLY:</strong>
                  This is an indicative mathematical estimate based on standard banking FOIR guidelines. It does not constitute a formal loan sanction or approval. Final loan approval and interest rates depend upon verified credit score and lender policies.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Link
                  to={`/apply-now?amount=${Math.min(result.maxEligibleAmount, result.desiredAmount)}`}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Proceed with Application</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <WhatsAppButton
                  text="Verify with Advisor"
                  message={`Hi LoanZone, I ran an eligibility check for ₹${result.desiredAmount}. My indicative eligibility was ₹${result.maxEligibleAmount}. Please assist me with bank offers.`}
                  variant="primary"
                  size="md"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold inline-flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Recalculate with different values
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
