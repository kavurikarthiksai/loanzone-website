import React, { useState } from 'react';
import { 
  Send, Search, Filter, Plus, Copy, Trash2, Eye, 
  CheckCircle2, Clock, AlertTriangle, Calendar, X 
} from 'lucide-react';
import { getStoredCampaigns, saveStoredCampaigns, getStoredTemplates } from '../../utils/storage';
import { useToast } from '../../context/ToastContext';

export const Campaigns = () => {
  const { addToast } = useToast();
  const [campaigns, setCampaigns] = useState(getStoredCampaigns());
  const [templates] = useState(getStoredTemplates());
  
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modals
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [selectedViewCampaign, setSelectedViewCampaign] = useState(null);

  // New Campaign Form
  const [newCampaignData, setNewCampaignData] = useState({
    name: '',
    template: 'Personal Loan Offer',
    audience: 'All Contacts (1,250)',
    scheduleType: 'Immediate'
  });

  const filtered = campaigns.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                          c.template.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateCampaign = (e) => {
    e.preventDefault();
    if (!newCampaignData.name) {
      addToast("Please provide a name for this campaign.", "error");
      return;
    }

    const recipients = newCampaignData.audience.includes('1,250') ? 1250 : 350;
    const newEntry = {
      id: `cmp-${Date.now()}`,
      name: newCampaignData.name,
      template: newCampaignData.template,
      recipients: recipients,
      delivered: Math.round(recipients * 0.87),
      pending: Math.round(recipients * 0.08),
      failed: Math.round(recipients * 0.05),
      status: newCampaignData.scheduleType === 'Immediate' ? 'Completed' : 'In Progress',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newEntry, ...campaigns];
    setCampaigns(updated);
    saveStoredCampaigns(updated);
    setIsNewModalOpen(false);
    addToast(`Campaign "${newCampaignData.name}" launched successfully!`, "success");
  };

  const handleDuplicate = (campaign) => {
    const duplicated = {
      ...campaign,
      id: `cmp-${Date.now()}`,
      name: `${campaign.name} (Copy)`,
      status: "Completed",
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    const updated = [duplicated, ...campaigns];
    setCampaigns(updated);
    saveStoredCampaigns(updated);
    addToast(`Duplicated campaign: "${duplicated.name}".`, "info");
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete campaign "${name}"?`)) {
      const updated = campaigns.filter((c) => c.id !== id);
      setCampaigns(updated);
      saveStoredCampaigns(updated);
      addToast(`Campaign "${name}" removed.`, "info");
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#063B73] tracking-tight">
            WhatsApp Campaigns
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Create, broadcast, and monitor delivery analytics for promotional loan campaigns
          </p>
        </div>
        <button
          onClick={() => {
            setNewCampaignData({
              name: '',
              template: 'Personal Loan Offer',
              audience: 'All Contacts (1,250)',
              scheduleType: 'Immediate'
            });
            setIsNewModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" /> New Campaign
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search campaigns or templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063B73]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Status:
          </span>
          {['All', 'Completed', 'In Progress'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === status
                  ? 'bg-[#063B73] text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Campaign Name</th>
                <th className="py-3.5 px-4">Template</th>
                <th className="py-3.5 px-4">Recipients</th>
                <th className="py-3.5 px-4">Delivery Breakdown</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {filtered.map((c) => {
                const deliveryRate = Math.round((c.delivered / c.recipients) * 100);
                return (
                  <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* Name */}
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-900 block">{c.name}</span>
                      <span className="text-[10px] text-slate-400">ID: {c.id}</span>
                    </td>

                    {/* Template */}
                    <td className="py-3.5 px-4">
                      <span className="bg-blue-50 text-[#063B73] font-semibold text-[11px] px-2 py-0.5 rounded-md">
                        {c.template}
                      </span>
                    </td>

                    {/* Recipients */}
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {c.recipients.toLocaleString('en-IN')}
                    </td>

                    {/* Delivery Breakdown */}
                    <td className="py-3.5 px-4">
                      <div className="space-y-1 w-36">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-emerald-700 font-bold">{deliveryRate}% Delivered</span>
                          <span className="text-slate-400">{c.delivered}/{c.recipients}</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex">
                          <div
                            className="bg-[#16A34A] h-full"
                            style={{ width: `${deliveryRate}%` }}
                          ></div>
                          <div
                            className="bg-rose-400 h-full"
                            style={{ width: `${Math.round((c.failed / c.recipients) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          c.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                      {c.date} {c.time && `• ${c.time}`}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelectedViewCampaign(c)}
                          className="p-1.5 text-slate-400 hover:text-[#063B73] hover:bg-slate-100 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDuplicate(c)}
                          className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          title="Duplicate Campaign"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(c.id, c.name)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Delete Campaign"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Campaign Modal */}
      {isNewModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-slide-up space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-lg">Launch New WhatsApp Campaign</h3>
              <button
                onClick={() => setIsNewModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCampaign} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Campaign Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Diwali Festive Loan Blast"
                  value={newCampaignData.name}
                  onChange={(e) => setNewCampaignData({ ...newCampaignData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Message Template
                </label>
                <select
                  value={newCampaignData.template}
                  onChange={(e) => setNewCampaignData({ ...newCampaignData, template: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold"
                >
                  {templates.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Target Audience
                </label>
                <select
                  value={newCampaignData.audience}
                  onChange={(e) => setNewCampaignData({ ...newCampaignData, audience: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold"
                >
                  <option value="All Contacts (1,250)">All Contacts (1,250)</option>
                  <option value="Salaried Leads (850)">Salaried Leads (850)</option>
                  <option value="Pre-Approved High CIBIL (320)">Pre-Approved High CIBIL (320)</option>
                  <option value="Follow-Up Pool (200)">Follow-Up Pool (200)</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold rounded-xl text-xs shadow-sm transition-all"
                >
                  Broadcast Campaign
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Campaign Modal */}
      {selectedViewCampaign && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-slide-up space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">{selectedViewCampaign.name}</h3>
                <p className="text-xs text-slate-400">Template: {selectedViewCampaign.template}</p>
              </div>
              <button
                onClick={() => setSelectedViewCampaign(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center py-2">
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                <span className="text-[10px] uppercase font-bold text-emerald-700">Delivered</span>
                <div className="text-xl font-black text-emerald-800">{selectedViewCampaign.delivered}</div>
              </div>
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-100">
                <span className="text-[10px] uppercase font-bold text-amber-700">Pending</span>
                <div className="text-xl font-black text-amber-800">{selectedViewCampaign.pending}</div>
              </div>
              <div className="bg-rose-50 p-3 rounded-xl border border-rose-100">
                <span className="text-[10px] uppercase font-bold text-rose-700">Failed</span>
                <div className="text-xl font-black text-rose-800">{selectedViewCampaign.failed}</div>
              </div>
            </div>

            <div className="text-xs text-slate-500 space-y-1">
              <p><strong>Total Dispatched:</strong> {selectedViewCampaign.recipients} verified contacts</p>
              <p><strong>Timestamp:</strong> {selectedViewCampaign.date} at {selectedViewCampaign.time || '10:00 AM'}</p>
              <p><strong>Status:</strong> {selectedViewCampaign.status}</p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedViewCampaign(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
