import React from 'react';
import { 
  ShieldCheck, Lock, Eye, FileText, CheckCircle2, 
  HelpCircle, Mail, Phone, MapPin, ArrowRight, Database, UserCheck, AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONFIG } from '../config/config';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const PrivacyPolicy = () => {
  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            DPDP & RBI Aligned
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Last Updated: September 2026 | Effective Date: Immediate
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
            At LoanZone ("we", "us", "our"), protecting your personal and financial information is our highest priority. This policy details how we collect, safeguard, and process your data in compliance with Indian IT laws and Digital Personal Data Protection (DPDP) Act standards.
          </p>
        </div>

        {/* Highlight Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#063B73] flex items-center justify-center mb-2">
              <Lock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-900">256-Bit SSL</span>
            <span className="text-[11px] text-slate-500">Bank-Grade Encryption</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-900">Zero Selling</span>
            <span className="text-[11px] text-slate-500">No Unauthorized Sharing</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center mb-2">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-900">Verified Lenders</span>
            <span className="text-[11px] text-slate-500">RBI Regulated Banks</span>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
              <Eye className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-900">Full Control</span>
            <span className="text-[11px] text-slate-500">Consent-Driven Usage</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">1.</span> Introduction & Scope
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              LoanZone operates as an authorized loan distributor and Direct Selling Agent (DSA) partner facilitating loan matching and application processing between borrowers and RBI-regulated commercial banks and NBFCs. This Privacy Policy applies to all information collected via our website, mobile interface, loan application portal, and authorized WhatsApp communication channels.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">2.</span> Information We Collect
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              To evaluate your loan eligibility, compute indicative interest rates, and process applications with lending partners, we may collect the following categories of information:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <span className="font-bold text-[#063B73] block">👤 Identity & Contact Data</span>
                <p className="text-slate-600 text-xs">
                  Full name, mobile phone number, email address, residential address, city, and state.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <span className="font-bold text-[#063B73] block">💳 Financial & Income Details</span>
                <p className="text-slate-600 text-xs">
                  Employment type (Salaried / Self-employed), net monthly take-home salary, employer name, existing EMIs, and requested loan amount.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <span className="font-bold text-[#063B73] block">📄 Verification & KYC Documents</span>
                <p className="text-slate-600 text-xs">
                  PAN number, Aadhaar reference (for paperless verification), bank statements, and salary slips submitted for loan sanction.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-1.5">
                <span className="font-bold text-[#063B73] block">📱 Communication & WhatsApp Logs</span>
                <p className="text-slate-600 text-xs">
                  Applicant messages, timestamp records, loan requirements, and customer service interaction logs.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">3.</span> How We Use Your Information
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside">
              <li>Assessing preliminary eligibility across our 15+ partner banking institutions.</li>
              <li>Pre-filling and submitting authorized loan applications to the specific bank selected by you.</li>
              <li>Dispatching instant loan updates, sanction notifications, and document requests via WhatsApp, SMS, or Phone.</li>
              <li>Preventing fraudulent applications, identity theft, and duplicate submissions.</li>
              <li>Enhancing our website performance and user experience.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">4.</span> Authorized Data Sharing & Third Parties
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              <strong className="text-slate-900">We do NOT sell, rent, or trade your personal data to unauthorized third parties or telemarketers.</strong> Your details are shared strictly with:
            </p>
            <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-200/70 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="font-bold text-[#063B73] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" /> RBI-Regulated Lending Banks & Financial Partners
              </div>
              <p className="text-xs text-slate-600">
                Authorized scheduled banks (including HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, IndusInd Bank, IDFC FIRST Bank, Kotak Mahindra Bank, Bandhan Bank) only for the purpose of underwriting, credit evaluation, and disbursal.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">5.</span> WhatsApp Notifications & Communication Consent
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              By submitting your mobile number and clicking "Submit Application", you explicitly authorize LoanZone and its loan fulfillment officers to communicate with you over WhatsApp, SMS, and Voice Calls regarding your loan status. You can opt out at any time by replying <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs">STOP</code> or contacting support.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">6.</span> Data Security & Storage
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We employ bank-grade 256-bit SSL encryption for data in transit and at rest. Access to applicant records is strictly restricted to authorized credit managers through multi-factor authentication. All servers are located in secure Indian data center facilities complying with local regulatory mandates.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-black text-[#063B73] flex items-center gap-2">
              <span className="text-[#F97316]">7.</span> Your Rights & Grievance Redressal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Under the Digital Personal Data Protection Act, you have the right to review, update, or request the deletion of your personal records from our system once your loan processing is concluded.
            </p>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mt-3 text-xs sm:text-sm space-y-2">
              <span className="font-bold text-slate-900 block">Grievance Redressal Officer:</span>
              <p className="text-slate-600 text-xs">
                Vikram Malhotra — Compliance & Privacy Lead<br />
                <strong>Email:</strong> <a href={`mailto:${CONFIG.supportEmail}`} className="text-[#063B73] underline">{CONFIG.supportEmail}</a><br />
                <strong>Phone:</strong> <a href={`tel:${CONFIG.supportPhoneRaw}`} className="text-[#063B73] underline">{CONFIG.supportPhone}</a><br />
                <strong>Office:</strong> {CONFIG.officeAddress}
              </p>
            </div>
          </section>

          {/* CTA Box */}
          <div className="p-6 bg-gradient-to-r from-[#063B73] to-[#0B5ED7] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h4 className="font-bold text-base">Have privacy questions or need loan assistance?</h4>
              <p className="text-xs text-blue-100 mt-0.5">Our dedicated support team is available Mon-Sat, 9:30 AM to 7:00 PM.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-4 py-2.5 bg-white text-[#063B73] hover:bg-slate-100 font-bold rounded-xl text-xs transition-all shadow-sm"
              >
                Contact Support
              </Link>
              <WhatsAppButton
                size="sm"
                text="Chat on WhatsApp"
                message="Hi LoanZone team, I have a query regarding privacy & data security."
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
