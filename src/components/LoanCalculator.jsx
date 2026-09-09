import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, Calendar, Percent, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LoanCalculator = () => {
  const [amount, setAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenureYears, setTenureYears] = useState(3);

  // Calculate EMI
  const calculations = useMemo(() => {
    const P = parseFloat(amount) || 0;
    const annualRate = parseFloat(interestRate) || 0;
    const N = (parseInt(tenureYears, 10) || 1) * 12; // total months
    
    if (P <= 0 || annualRate <= 0 || N <= 0) {
      return { emi: 0, totalInterest: 0, totalPayable: 0, principalPercent: 100, interestPercent: 0 };
    }

    const monthlyRate = annualRate / 12 / 100;
    const emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1);
    const totalPayable = emi * N;
    const totalInterest = totalPayable - P;

    const principalPercent = Math.round((P / totalPayable) * 100);
    const interestPercent = 100 - principalPercent;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable),
      principalPercent,
      interestPercent
    };
  }, [amount, interestRate, tenureYears]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-20 bg-white" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 bg-orange-100 text-[#F97316] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Financial Planning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
            Personal Loan EMI Calculator
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Estimate your monthly installments and customize repayment schedule to match your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Input Controls (7 cols on lg) */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between">
            
            <div className="space-y-8">
              
              {/* Slider 1: Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <IndianRupee className="w-4 h-4 text-[#063B73]" />
                    Loan Amount
                  </label>
                  <div className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-extrabold text-[#063B73] text-base shadow-2xs">
                    {formatCurrency(amount)}
                  </div>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="4000000"
                  step="25000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#063B73]"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1.5 font-medium">
                  <span>₹50,000</span>
                  <span>₹20 Lakhs</span>
                  <span>₹40 Lakhs</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-[#F97316]" />
                    Interest Rate (% P.A.)
                  </label>
                  <div className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-extrabold text-[#F97316] text-base shadow-2xs">
                    {interestRate}%
                  </div>
                </div>
                <input
                  type="range"
                  min="8.5"
                  max="24"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1.5 font-medium">
                  <span>8.5% (Best Bank Offer)</span>
                  <span>16%</span>
                  <span>24%</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#16A34A]" />
                    Tenure (Years)
                  </label>
                  <div className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl font-extrabold text-[#16A34A] text-base shadow-2xs">
                    {tenureYears} {tenureYears === 1 ? 'Year' : 'Years'} ({tenureYears * 12} Months)
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#16A34A]"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1.5 font-medium">
                  <span>1 Year</span>
                  <span>3 Years</span>
                  <span>5 Years</span>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-5 border-t border-slate-200/70 text-xs text-slate-500">
              * Indicative calculations based on reducing balance method. Processing charges and loan taxes are determined by partner banks.
            </div>

          </div>

          {/* Right: Results Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#063B73] via-[#084B91] to-[#04244B] text-white p-7 sm:p-9 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background blur */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between border-b border-blue-400/20 pb-4 mb-6">
                <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Your Estimated EMI</span>
                <span className="text-xs px-2.5 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full font-bold">
                  Instant Quote
                </span>
              </div>

              {/* Huge Monthly EMI Display */}
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-baseline gap-1">
                  <span>{formatCurrency(calculations.emi)}</span>
                  <span className="text-sm font-normal text-blue-200">/month</span>
                </div>
                <p className="text-xs text-blue-200/80 mt-1">
                  Monthly installment for {tenureYears * 12} consecutive months
                </p>
              </div>

              {/* Progress Breakdown Bar */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-blue-100 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span> Principal ({calculations.principalPercent}%)
                  </span>
                  <span className="text-orange-200 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span> Total Interest ({calculations.interestPercent}%)
                  </span>
                </div>
                <div className="w-full h-3 bg-white/15 rounded-full overflow-hidden flex">
                  <div
                    className="bg-blue-300 h-full transition-all duration-300"
                    style={{ width: `${calculations.principalPercent}%` }}
                  ></div>
                  <div
                    className="bg-[#F97316] h-full transition-all duration-300"
                    style={{ width: `${calculations.interestPercent}%` }}
                  ></div>
                </div>
              </div>

              {/* Detailed Summary Stats */}
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-xs space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-xs">Principal Loan Amount</span>
                  <span className="font-bold text-white">{formatCurrency(amount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100 text-xs">Total Interest Payable</span>
                  <span className="font-bold text-orange-300">{formatCurrency(calculations.totalInterest)}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between items-center text-base">
                  <span className="font-semibold text-white">Total Amount Payable</span>
                  <span className="font-extrabold text-white">{formatCurrency(calculations.totalPayable)}</span>
                </div>
              </div>

            </div>

            {/* Apply Action Button */}
            <div className="pt-8">
              <Link
                to={`/apply-now?amount=${amount}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 text-sm"
              >
                <span>Apply with these Terms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
