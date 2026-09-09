import React, { useState } from 'react';
import { 
  Building2, MessageCircle, Bell, UserCheck, 
  Shield, Key, Save, CheckCircle2 
} from 'lucide-react';
import { CONFIG } from '../../config/config';
import { useToast } from '../../context/ToastContext';

export const Settings = () => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('whatsapp');

  // WhatsApp Config UI state
  const [waConfig, setWaConfig] = useState({
    phoneNumberId: '109283746501928',
    wabaId: '382910485720193',
    senderNumber: '+91 98765 43210',
    webhookUrl: 'https://api.loanzone.com/v1/whatsapp/webhook',
    verifyToken: 'lz_prod_webhook_token_9921',
    dailyLimit: '5,000 Messages / 24 hrs'
  });

  // Business info state
  const [bizInfo, setBizInfo] = useState({
    companyName: 'LoanZone Financial Technologies Pvt Ltd',
    supportEmail: CONFIG.supportEmail,
    supportPhone: CONFIG.supportPhone,
    address: CONFIG.officeAddress,
    dsaRegistration: 'RBI-DSA-MH-2024-884102'
  });

  const handleSave = (e) => {
    e.preventDefault();
    addToast("Settings successfully saved and synchronized.", "success");
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#063B73] tracking-tight">
          System & WhatsApp Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Configure business metadata, Meta WhatsApp Cloud API credentials, and notification rules
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1 text-xs sm:text-sm font-bold">
        {[
          { id: 'whatsapp', label: 'WhatsApp Cloud API', icon: MessageCircle },
          { id: 'business', label: 'Business Profile', icon: Building2 },
          { id: 'notifications', label: 'Notifications', icon: Bell },
          { id: 'security', label: 'Security & Access', icon: Shield },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#063B73] text-[#063B73] bg-white font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: WhatsApp Configuration UI */}
      {activeTab === 'whatsapp' && (
        <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6 animate-slide-up">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">WhatsApp Business API Settings</h3>
              <p className="text-xs text-slate-400">Meta Cloud API credentials (UI Demonstration)</p>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
              Connected & Verified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Phone Number ID
              </label>
              <input
                type="text"
                value={waConfig.phoneNumberId}
                onChange={(e) => setWaConfig({ ...waConfig, phoneNumberId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#063B73]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                WhatsApp Business Account (WABA) ID
              </label>
              <input
                type="text"
                value={waConfig.wabaId}
                onChange={(e) => setWaConfig({ ...waConfig, wabaId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#063B73]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Sender WhatsApp Phone Number
              </label>
              <input
                type="text"
                value={waConfig.senderNumber}
                onChange={(e) => setWaConfig({ ...waConfig, senderNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Tier Sending Limit
              </label>
              <input
                type="text"
                disabled
                value={waConfig.dailyLimit}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 text-xs sm:text-sm cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Webhook Callback URL
            </label>
            <input
              type="text"
              value={waConfig.webhookUrl}
              onChange={(e) => setWaConfig({ ...waConfig, webhookUrl: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#063B73]"
            />
          </div>

          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save WhatsApp Config
            </button>
          </div>
        </form>
      )}

      {/* Tab 2: Business Profile */}
      {activeTab === 'business' && (
        <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6 animate-slide-up">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-extrabold text-slate-900 text-lg">Business & Organization Profile</h3>
            <p className="text-xs text-slate-400">Public entity details displayed on loan application agreements</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Registered Company Name
              </label>
              <input
                type="text"
                value={bizInfo.companyName}
                onChange={(e) => setBizInfo({ ...bizInfo, companyName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Support Email
                </label>
                <input
                  type="email"
                  value={bizInfo.supportEmail}
                  onChange={(e) => setBizInfo({ ...bizInfo, supportEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Support Phone
                </label>
                <input
                  type="text"
                  value={bizInfo.supportPhone}
                  onChange={(e) => setBizInfo({ ...bizInfo, supportPhone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Physical Office Address
              </label>
              <textarea
                rows={2}
                value={bizInfo.address}
                onChange={(e) => setBizInfo({ ...bizInfo, address: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
              ></textarea>
            </div>
          </div>

          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Business Info
            </button>
          </div>
        </form>
      )}

      {/* Tab 3: Notifications */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6 animate-slide-up">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-extrabold text-slate-900 text-lg">Alert & Notification Preferences</h3>
            <p className="text-xs text-slate-400">Choose when the operations team is alerted</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {[
              { title: "New Loan Lead Alert", desc: "Send immediate internal WhatsApp ping when high CIBIL applicant applies" },
              { title: "Campaign Failure Rate Threshold", desc: "Notify admin if failure rate exceeds 5% on any single broadcast" },
              { title: "Daily Delivery Summary", desc: "Receive an evening digest of messages sent, delivered, and replied" }
            ].map((item, idx) => (
              <label key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 cursor-pointer">
                <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-[#063B73] rounded" />
                <div>
                  <span className="font-bold text-slate-800 block">{item.title}</span>
                  <span className="text-slate-500 text-xs">{item.desc}</span>
                </div>
              </label>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => addToast("Notification preferences updated.", "success")}
              className="px-6 py-2.5 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md"
            >
              Update Preferences
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Security */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6 animate-slide-up">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-extrabold text-slate-900 text-lg">Security & Authentication</h3>
            <p className="text-xs text-slate-400">Manage administrator access controls and session security</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
              <span className="font-bold text-[#063B73] block mb-1">Two-Factor Authentication (2FA)</span>
              <p className="text-slate-600 text-xs">Mandatory OTP challenge sent via WhatsApp for admin account sign-in.</p>
              <span className="inline-block mt-2 px-2.5 py-1 bg-white text-xs font-bold text-emerald-600 rounded-md border border-blue-200">
                Active & Enforced
              </span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <span className="font-bold text-slate-800 block mb-1">Session Inactivity Timeout</span>
              <p className="text-slate-500 text-xs">Automatically signs out admin dashboard after 60 minutes of inactivity.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
