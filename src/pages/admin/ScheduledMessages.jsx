import React, { useState } from 'react';
import { 
  Calendar, Clock, Plus, Trash2, CheckCircle2, 
  AlertCircle, X, Send, Users 
} from 'lucide-react';
import { getStoredScheduled, saveStoredScheduled, getStoredTemplates } from '../../utils/storage';
import { useToast } from '../../context/ToastContext';

export const ScheduledMessages = () => {
  const { addToast } = useToast();
  const [scheduled, setScheduled] = useState(getStoredScheduled());
  const [templates] = useState(getStoredTemplates());
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    title: '',
    template: 'Follow Up',
    recipients: 150,
    scheduledDate: '2026-09-15',
    scheduledTime: '11:00 AM',
    audience: 'Pre-Approved Salaried Pool'
  });

  const handleDelete = (id, title) => {
    if (window.confirm(`Cancel scheduled broadcast "${title}"?`)) {
      const updated = scheduled.filter((s) => s.id !== id);
      setScheduled(updated);
      saveStoredScheduled(updated);
      addToast(`Scheduled message "${title}" cancelled.`, "info");
    }
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();
    if (!newSchedule.title) {
      addToast("Please provide schedule name.", "error");
      return;
    }

    const newEntry = {
      id: `sch-${Date.now()}`,
      title: newSchedule.title,
      template: newSchedule.template,
      recipients: Number(newSchedule.recipients) || 120,
      scheduledDate: newSchedule.scheduledDate,
      scheduledTime: newSchedule.scheduledTime,
      status: "Scheduled",
      audience: newSchedule.audience
    };

    const updated = [...scheduled, newEntry];
    setScheduled(updated);
    saveStoredScheduled(updated);
    setIsModalOpen(false);
    addToast(`Broadcast "${newSchedule.title}" scheduled for ${newSchedule.scheduledDate}!`, "success");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#063B73] tracking-tight">
            Scheduled WhatsApp Messages
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Automate upcoming EMI reminders, holiday campaigns, and follow-up drip sequences
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#063B73] hover:bg-[#0B5ED7] text-white text-xs font-bold shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" /> Schedule Broadcast
        </button>
      </div>

      {/* Scheduled Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Message / Campaign</th>
                <th className="py-3.5 px-4">Template</th>
                <th className="py-3.5 px-4">Target Audience</th>
                <th className="py-3.5 px-4">Recipients</th>
                <th className="py-3.5 px-4">Scheduled Date & Time</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {scheduled.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Title */}
                  <td className="py-4 px-4 font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                  </td>

                  {/* Template */}
                  <td className="py-4 px-4">
                    <span className="bg-blue-50 text-[#063B73] font-semibold text-[11px] px-2 py-0.5 rounded-md">
                      {item.template}
                    </span>
                  </td>

                  {/* Audience */}
                  <td className="py-4 px-4 text-slate-600">
                    {item.audience || 'All Contacts'}
                  </td>

                  {/* Recipients */}
                  <td className="py-4 px-4 font-semibold text-slate-800">
                    {item.recipients} leads
                  </td>

                  {/* Scheduled Date */}
                  <td className="py-4 px-4 text-slate-600">
                    <div className="font-semibold text-slate-800">{item.scheduledDate}</div>
                    <div className="text-[10px] text-slate-400">{item.scheduledTime}</div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => handleDelete(item.id, item.title)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Cancel Schedule"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-slide-up space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-lg">Schedule WhatsApp Broadcast</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSchedule} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Schedule Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. End of Month EMI Follow-up"
                  value={newSchedule.title}
                  onChange={(e) => setNewSchedule({ ...newSchedule, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Template
                </label>
                <select
                  value={newSchedule.template}
                  onChange={(e) => setNewSchedule({ ...newSchedule, template: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold"
                >
                  {templates.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={newSchedule.scheduledDate}
                    onChange={(e) => setNewSchedule({ ...newSchedule, scheduledDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Time
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="10:30 AM"
                    value={newSchedule.scheduledTime}
                    onChange={(e) => setNewSchedule({ ...newSchedule, scheduledTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Recipient Count
                </label>
                <input
                  type="number"
                  value={newSchedule.recipients}
                  onChange={(e) => setNewSchedule({ ...newSchedule, recipients: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#063B73] hover:bg-[#0B5ED7] text-white font-bold rounded-xl text-xs shadow-sm transition-all"
                >
                  Confirm Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
