import React from 'react';
import { 
  ShieldCheck, Lock, Server, CheckCircle2, 
  AlertTriangle, Key, EyeOff, ShieldAlert, Cpu, PhoneCall, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config/config';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const SecurityCompliance = () => {
  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Bank-Grade Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
            Security & Compliance
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            How LoanZone protects your financial data, secures WhatsApp interactions, and complies with RBI Digital Lending Directives.
          </p>
        </div>

        {/* 6 Security Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#063B73] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">256-Bit TLS Encryption</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              All loan requests, PAN inputs, and documentation in transit and at rest are secured via TLS 1.3 cryptographic protocols.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">RBI DL Compliance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Strict alignment with Reserve Bank of India (RBI) Digital Lending guidelines for authorized Loan Service Providers (LSPs).
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Indian Cloud Data Centers</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Data localization compliant: all application logs and applicant details are hosted strictly inside Tier-4 Indian server regions.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Zero Token Exposure</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Meta WhatsApp Cloud API credentials and secret tokens are isolated on backend servers with zero exposure in client source code.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Role-Based Access</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Strict principle of least privilege: only certified credit fulfillment managers assigned to your loan file can access your application.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Fraud Detection Shield</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Automated algorithmic screening against duplicate loan applications, spoofed numbers, and unauthorized data scrapers.
            </p>
          </div>

        </div>

        {/* Detailed Sections Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">1.</span> RBI Digital Lending Directives & Compliance Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              As an authorized Lending Service Provider (LSP) and Direct Selling Agent (DSA), LoanZone strictly adheres to the regulatory framework laid down by the Reserve Bank of India:
            </p>
            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span><strong>Direct Bank Disbursals:</strong> Loan disbursals and repayments occur strictly between the borrower's bank account and the Regulated Entity (Lender Bank). No pass-through or pool accounts are used.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span><strong>Key Fact Statement (KFS):</strong> Borrowers receive standardized transparent breakdowns of all APR, interest rate, and processing charges directly from partner banks before loan acceptance.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span><strong>Need-Based Data Access:</strong> We do not access phone biometrics, mobile contacts, or device gallery. Only explicit applicant-submitted inputs are processed.</span>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">2.</span> Official WhatsApp Cloud API Security
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              LoanZone uses Meta's official WhatsApp Cloud API for automated notifications and application tracking.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside">
              <li>Messages are sent through verified enterprise phone channels.</li>
              <li>Authentication tokens and system secrets are isolated in protected environment vaults on backend servers.</li>
              <li>WhatsApp chats with our advisors feature Meta's official end-to-end signal encryption protocol.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3: Anti-Fraud & Borrower Advisory */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">3.</span> Anti-Fraud & Phishing Advisory for Borrowers
            </h2>
            <div className="p-5 bg-red-50/70 border border-red-200 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 font-bold text-red-900 text-sm">
                <ShieldAlert className="w-5 h-5 text-red-600" /> Crucial Safety Reminders:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Never Pay Advance Fees:</strong> LoanZone will NEVER ask you to deposit money into personal accounts, UPI IDs, or wallets to "approve" a loan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Never Share Bank Passwords or PINs:</strong> Our representatives will never request your Netbanking password, UPI PIN, ATM PIN, or debit card CVV.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  <span><strong>Verify Official Contacts:</strong> Only communicate via our official verified number: <strong>{CONFIG.supportPhone}</strong>.</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">4.</span> Vulnerability Reporting & Security Desk
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              If you discover a security vulnerability, suspect fraudulent communication claiming to represent LoanZone, or require immediate assistance regarding your account security, please reach out to our dedicated Cyber Security Response Team:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <strong>Security Response Desk:</strong> <a href={`mailto:${CONFIG.supportEmail}`} className="text-[#063B73] font-semibold underline">{CONFIG.supportEmail}</a> | <strong>Helpline:</strong> <a href={`tel:${CONFIG.supportPhoneRaw}`} className="text-[#063B73] font-semibold underline">{CONFIG.supportPhone}</a>
            </div>
          </section>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/apply-now"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for Secure Fast-Track Loan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppButton
              size="md"
              text="Report Security Query"
              message="Hi LoanZone Security Team, I would like to report an inquiry regarding compliance & safety."
            />
          </div>

        </div>

      </div>
    </div>
  );
};
