import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CONFIG } from '../config/config';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { useToast } from '../context/ToastContext';

export const Contact = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: 'Personal Loan',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      addToast("Please fill in your name and contact phone number.", "error");
      return;
    }

    setSubmitted(true);
    addToast("Inquiry received! A LoanZone advisor will connect with you shortly.", "success");
  };

  return (
    <div className="py-12 lg:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063B73] tracking-tight">
            We’re Here to Help You
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Have questions about loan sanctioning or interest rates? Reach out to our team online or visit our office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft space-y-6">
              <h3 className="text-xl font-extrabold text-[#063B73]">Corporate Headquarters</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#063B73] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Office Address</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{CONFIG.officeAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Phone Support</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href={`tel:${CONFIG.supportPhoneRaw}`} className="text-[#063B73] font-bold hover:underline">
                        {CONFIG.supportPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#0B5ED7] flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Email Inquiries</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      <a href={`mailto:${CONFIG.supportEmail}`} className="text-[#063B73] font-semibold hover:underline">
                        {CONFIG.supportEmail}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F97316] flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Working Hours</h4>
                    <p className="text-xs text-slate-500 mt-1">Monday – Saturday: 9:30 AM to 7:00 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp card */}
              <div className="pt-4 border-t border-slate-100">
                <WhatsAppButton
                  text="Instant WhatsApp Chat"
                  size="md"
                  className="w-full justify-center"
                />
              </div>

            </div>

            {/* Quick Reassurance */}
            <div className="bg-gradient-to-br from-[#063B73] to-[#04244B] text-white p-6 rounded-3xl">
              <h4 className="font-bold text-base mb-1">Fast Response Guarantee</h4>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                All submitted inquiries are assigned to a certified advisor within 15 minutes during standard working hours.
              </p>
            </div>

          </div>

          {/* Right: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-soft">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-slide-up">
                <div className="w-16 h-16 bg-emerald-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Inquiry Submitted Successfully!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. One of our senior loan advisors will call you on <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', loanType: 'Personal Loan', message: '' });
                    }}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-[#063B73] mb-2">Send Us a Direct Message</h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Product of Interest
                  </label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm font-medium"
                  >
                    <option value="Personal Loan">Personal Loan (Starting 9.99%)</option>
                    <option value="Top-Up Loan">Top-Up Loan (Starting 9.25%)</option>
                    <option value="Balance Transfer">Balance Transfer (BT)</option>
                    <option value="Credit Card BT">Credit Card Balance Transfer</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Car Loan">Car Loan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Message / Loan Requirement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us desired loan amount, current city, and salary bracket..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Loan Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
