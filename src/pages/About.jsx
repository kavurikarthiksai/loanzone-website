import React from 'react';
import { ShieldCheck, Users, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { BankingPartners } from '../components/BankingPartners';

export const About = () => {
  const stats = [
    { label: "Loan Disbursals Assisted", value: "₹450+ Cr" },
    { label: "Satisfied Borrowers", value: "35,000+" },
    { label: "Banking & NBFC Partners", value: "15+" },
    { label: "Average Approval Time", value: "24 Hours" },
  ];

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section of About */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            About LoanZone
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
            Democratizing Access to Affordable Credit Across India
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Founded with a singular mission: to make personal, business, and balance transfer loans completely transparent, rapid, and accessible to every deserving applicant.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 text-center shadow-soft">
              <div className="text-3xl sm:text-4xl font-black text-[#063B73] mb-1">{s.value}</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Story & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-[#F97316] text-xs font-bold rounded-full uppercase">
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bridging the Gap Between Borrowers and India's Top Lenders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Navigating multiple bank branches, understanding convoluted interest rate structures, and enduring weeks of manual paperwork used to be the only way to get a personal loan. LoanZone reimagined this journey from the ground up.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              By combining proprietary algorithmic eligibility matching with dedicated human loan specialists, we ensure borrowers get the highest possible loan amounts at the lowest market rates, backed by WhatsApp-first updates.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/apply-now"
                className="px-6 py-3 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-sm transition-all"
              >
                Apply for Loan
              </Link>
              <WhatsAppButton
                text="Speak with an Advisor"
                size="md"
                variant="outline"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#063B73] to-[#04244B] p-8 sm:p-10 rounded-3xl text-white shadow-xl space-y-6">
            <h3 className="text-2xl font-bold">Our Core Commitments</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Unbiased Recommendations:</strong> We match you with whichever partner bank offers the lowest total cost of borrowing, not higher commissions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Complete Transparency:</strong> Zero upfront advisory fees from borrowers, no undisclosed processing margins.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Data Privacy First:</strong> 256-bit SSL encryption. We never sell customer details to cold-calling telemarketers.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <BankingPartners />
    </div>
  );
};
