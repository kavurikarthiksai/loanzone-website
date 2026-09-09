import React, { useState } from 'react';
import { 
  Users, Send, CheckCircle2, Clock, AlertTriangle, 
  Paperclip, Smile, Sparkles, Check, ArrowRight, Play, RefreshCw 
} from 'lucide-react';
import { initialCampaigns, initialTemplates } from '../../data/adminData';
import { getStoredCampaigns, saveStoredCampaigns } from '../../utils/storage';
import { useToast } from '../../context/ToastContext';
import { WhatsAppIcon } from '../../components/WhatsAppIcon';

export const Dashboard = () => {
  const { addToast } = useToast();
  const [campaigns, setCampaigns] = useState(getStoredCampaigns());
  
  // Campaign Form State
  const [selectedAudience, setSelectedAudience] = useState('All Contacts (1,250)');
  const [selectedTemplate, setSelectedTemplate] = useState('Personal Loan Offer');
  const [messageBody, setMessageBody] = useState(
`Hi {name},

Get your Personal Loan with easy process and quick approval.

Interest rates starting from 9.99%.

Reply YES to know more.`
  );
  const [isSending, setIsSending] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);

  // Template switch handler
  const handleTemplateChange = (e) => {
    const title = e.target.value;
    setSelectedTemplate(title);
    const found = initialTemplates.find((t) => t.title === title);
    if (found) {
      setMessageBody(found.content);
    }
  };

  // Dispatch campaign simulation
  const handleSendCampaign = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendProgress(15);

    const interval = setInterval(() => {
      setSendProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setIsSending(false);
      setSendProgress(0);

      // Create new campaign entry
      const count = selectedAudience.includes('1,250') ? 1250 : 350;
      const newCmp = {
        id: `cmp-${Date.now()}`,
        name: selectedTemplate,
        template: selectedTemplate,
        recipients: count,
        delivered: Math.round(count * 0.88),
        pending: Math.round(count * 0.07),
        failed: Math.round(count * 0.05),
        status: "Completed",
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const updated = [newCmp, ...campaigns];
      setCampaigns(updated);
      saveStoredCampaigns(updated);

      addToast(`WhatsApp Campaign "${selectedTemplate}" dispatched successfully to ${selectedAudience}!`, "success");
    }, 1800);
  };

  const insertVariable = (variable) => {
    setMessageBody((prev) => `${prev} {${variable}}`);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Top Banner / Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#063B73] tracking-tight">
            WhatsApp Automation Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Monitor real-time campaign dispatches, delivery statuses, and lead engagements.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 shadow-2xs">
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Cloud API: Active</span>
          </span>
        </div>
      </div>

      {/* DASHBOARD STATISTICS: 5 Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        
        {/* Total Contacts */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Contacts</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#063B73] flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">1,250</div>
          <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">
            +14% this month
          </span>
        </div>

        {/* Messages Sent */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Messages Sent</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#0B5ED7] flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">980</div>
          <span className="text-[11px] font-semibold text-blue-600 mt-1 block">
            Last 7 days volume
          </span>
        </div>

        {/* Delivered */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Delivered</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600">840</div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mt-1">
            86% success rate
          </span>
        </div>

        {/* Pending */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Pending</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600">72</div>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md inline-block mt-1">
            7% in queue
          </span>
        </div>

        {/* Failed */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Failed</span>
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-rose-600">68</div>
          <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md inline-block mt-1">
            7% invalid/blocked
          </span>
        </div>

      </div>

      {/* Main Row: Send WhatsApp Campaign (Left) & Delivery Status + Features (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Send WhatsApp Campaign Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#16A34A] flex items-center justify-center font-black">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900">Send WhatsApp Campaign</h2>
                  <p className="text-xs text-slate-400">Dispatch targeted loan promotions and reminders</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Direct Dispatch
              </span>
            </div>

            <form onSubmit={handleSendCampaign} className="space-y-5">
              
              {/* Step 1: Select Contacts */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>Step 1: Select Target Contacts</span>
                  <span className="text-[#0B5ED7] font-semibold text-[11px] cursor-pointer">1,250 Total Leads</span>
                </label>
                <select
                  value={selectedAudience}
                  onChange={(e) => setSelectedAudience(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                >
                  <option value="All Contacts (1,250)">All Contacts (1,250)</option>
                  <option value="Salaried Inquiries (850)">Salaried Inquiries (850)</option>
                  <option value="High CIBIL 750+ Pre-Approved (320)">High CIBIL 750+ Pre-Approved (320)</option>
                  <option value="Follow-Up Leads (200)">Follow-Up Leads (200)</option>
                  <option value="Balance Transfer Candidates (180)">Balance Transfer Candidates (180)</option>
                </select>
              </div>

              {/* Step 2: Choose Template */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>Step 2: Choose Template</span>
                  <span className="text-slate-400 text-[11px]">Approved WhatsApp Meta Template</span>
                </label>
                <select
                  value={selectedTemplate}
                  onChange={handleTemplateChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                >
                  {initialTemplates.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Message Preview & Editor */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Step 3: Message Preview
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-slate-400 font-semibold mr-1">Insert:</span>
                    {['name', 'loan_amount', 'interest_rate'].map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => insertVariable(v)}
                        className="text-[10px] font-mono font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded"
                      >
                        +{`{${v}}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* WhatsApp simulated chat bubble */}
                <div className="bg-[#EFEAE2] p-4 rounded-2xl border border-[#DAD2C7] shadow-inner relative">
                  <div className="max-w-md bg-white rounded-2xl p-4 shadow-sm text-xs sm:text-sm text-slate-800 space-y-2 border-l-4 border-[#25D366] whitespace-pre-line leading-relaxed font-sans">
                    {messageBody}
                    <div className="text-[10px] text-slate-400 text-right flex items-center justify-end gap-1 pt-1">
                      <span>11:30 AM</span>
                      <Check className="w-3 h-3 text-[#25D366]" />
                    </div>
                  </div>
                </div>

                {/* Auxiliary buttons: Emoji, Attachment */}
                <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setMessageBody((p) => p + " 🎉")}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      <Smile className="w-3.5 h-3.5 text-amber-500" /> Add Emoji
                    </button>
                    <button
                      type="button"
                      onClick={() => addToast("PDF Loan Flyer attached to message payload.", "info")}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium"
                    >
                      <Paperclip className="w-3.5 h-3.5 text-slate-500" /> Attachment
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-400">Meta Tier-1 Approved</span>
                </div>
              </div>

              {/* Progress bar if sending */}
              {isSending && (
                <div className="space-y-1.5 animate-slide-up">
                  <div className="flex justify-between text-xs font-bold text-emerald-700">
                    <span>Transmitting WhatsApp API packets...</span>
                    <span>{sendProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#25D366] transition-all duration-300"
                      style={{ width: `${sendProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Main CTA: Send Campaign in WhatsApp green */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {isSending ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Sending Campaign to {selectedAudience}...</span>
                  </>
                ) : (
                  <>
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send WhatsApp Campaign ({selectedAudience})</span>
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

        {/* Right Column: Delivery Donut Chart & Green Automation Features Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* MESSAGE DELIVERY STATUS CARD: SVG Donut Chart */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-slate-900 text-base">Message Delivery Status</h3>
              <span className="text-xs font-bold text-slate-400">980 Total</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              
              {/* SVG Donut Chart */}
              <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#F1F5F9"
                    strokeWidth="12"
                    fill="transparent"
                  />
                  {/* Delivered: 86% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#25D366"
                    strokeWidth="12"
                    strokeDasharray="216 251.2"
                    strokeDashoffset="0"
                    fill="transparent"
                    className="transition-all duration-1000"
                  />
                  {/* Pending: 7% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#F59E0B"
                    strokeWidth="12"
                    strokeDasharray="18 251.2"
                    strokeDashoffset="-216"
                    fill="transparent"
                  />
                  {/* Failed: 7% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#EF4444"
                    strokeWidth="12"
                    strokeDasharray="18 251.2"
                    strokeDashoffset="-234"
                    fill="transparent"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-black text-slate-900 leading-none">980</span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                    Sent
                  </span>
                </div>
              </div>

              {/* Legend & Percentages */}
              <div className="space-y-3 flex-1 w-full text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <span className="flex items-center gap-2 font-bold text-slate-700">
                    <span className="w-3 h-3 rounded-full bg-[#25D366]"></span> Delivered
                  </span>
                  <span className="font-extrabold text-[#15803D]">840 (86%)</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="flex items-center gap-2 font-bold text-slate-700">
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]"></span> Pending
                  </span>
                  <span className="font-extrabold text-amber-600">72 (7%)</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-rose-50/70 border border-rose-100">
                  <span className="flex items-center gap-2 font-bold text-slate-700">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]"></span> Failed
                  </span>
                  <span className="font-extrabold text-rose-600">68 (7%)</span>
                </div>
              </div>

            </div>
          </div>

          {/* GREEN INFORMATION CARD: Grow Your Business with WhatsApp Automation */}
          <div className="bg-gradient-to-br from-[#1EBE5D] via-[#16A34A] to-[#15803D] rounded-3xl p-7 text-white shadow-lg relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                High Conversion Engine
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black mb-2 leading-tight">
              Grow Your Business <br />with WhatsApp Automation
            </h3>
            <p className="text-xs text-emerald-100 mb-5 leading-relaxed">
              Achieve 98% open rates and 5x faster loan closures compared to traditional SMS & cold calls.
            </p>

            <ul className="space-y-2.5 text-xs font-semibold text-emerald-50">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200 shrink-0 font-bold" />
                <span>Send bulk messages from your own number</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200 shrink-0 font-bold" />
                <span>Use your contact list (Excel/CSV)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200 shrink-0 font-bold" />
                <span>Personalized messages</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200 shrink-0 font-bold" />
                <span>Schedule campaigns</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200 shrink-0 font-bold" />
                <span>Track delivery status</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200 shrink-0 font-bold" />
                <span>Simple and easy to use</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* RECENT CAMPAIGNS TABLE */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Recent Campaigns</h3>
            <p className="text-xs text-slate-400">Live delivery statistics of executed marketing blasts</p>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl">
            {campaigns.length} Campaigns Logged
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="pb-3 px-3">Campaign Name</th>
                <th className="pb-3 px-3">Recipients</th>
                <th className="pb-3 px-3">Status</th>
                <th className="pb-3 px-3">Dispatched Date</th>
                <th className="pb-3 px-3 text-right">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {campaigns.slice(0, 6).map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-3 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#25D366]"></div>
                      <span>{c.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-3">
                    <span className="font-semibold text-slate-800">Sent to {c.recipients} contacts</span>
                  </td>
                  <td className="py-4 px-3">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        c.status === 'Completed'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-slate-500">
                    {c.date} {c.time && `at ${c.time}`}
                  </td>
                  <td className="py-4 px-3 text-right">
                    <span className="text-emerald-600 font-bold">
                      {Math.round((c.delivered / c.recipients) * 100)}% Delivered
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
