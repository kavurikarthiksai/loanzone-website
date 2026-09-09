import React, { useState } from 'react';
import { 
  MessageSquareText, Plus, Edit2, Trash2, Check, 
  Sparkles, X, CheckCheck, Tag 
} from 'lucide-react';
import { getStoredTemplates, saveStoredTemplates } from '../../utils/storage';
import { useToast } from '../../context/ToastContext';

export const Templates = () => {
  const { addToast } = useToast();
  const [templates, setTemplates] = useState(getStoredTemplates());
  
  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Promotional',
    content: ''
  });

  const openAddModal = () => {
    setEditingTemplate(null);
    setFormData({
      title: '',
      category: 'Promotional',
      content: 'Hi {name},\n\nGet your loan of {loan_amount} at {interest_rate}!\n\nReply YES.'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (t) => {
    setEditingTemplate(t);
    setFormData({
      title: t.title,
      category: t.category,
      content: t.content
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Delete template "${title}"?`)) {
      const updated = templates.filter((t) => t.id !== id);
      setTemplates(updated);
      saveStoredTemplates(updated);
      addToast(`Template "${title}" deleted.`, "info");
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      addToast("Please provide template title and message content.", "error");
      return;
    }

    if (editingTemplate) {
      const updated = templates.map((t) =>
        t.id === editingTemplate.id
          ? { ...t, title: formData.title, category: formData.category, content: formData.content }
          : t
      );
      setTemplates(updated);
      saveStoredTemplates(updated);
      addToast(`Template "${formData.title}" updated.`, "success");
    } else {
      const newTemplate = {
        id: `tpl-${Date.now()}`,
        title: formData.title,
        category: formData.category,
        language: "English",
        content: formData.content,
        variables: ["name", "loan_amount", "interest_rate"],
        usageCount: 0,
        status: "Approved"
      };
      const updated = [newTemplate, ...templates];
      setTemplates(updated);
      saveStoredTemplates(updated);
      addToast(`Template "${formData.title}" submitted & approved.`, "success");
    }

    setIsModalOpen(false);
  };

  const insertVariable = (varName) => {
    setFormData((prev) => ({
      ...prev,
      content: `${prev.content} {${varName}}`
    }));
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#063B73] tracking-tight">
            WhatsApp Message Templates
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pre-approved Meta HSM message templates with dynamic contact merge tags
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#063B73] hover:bg-[#0B5ED7] text-white text-xs font-bold shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" /> Create Template
        </button>
      </div>

      {/* Variables Tag Helper Bar */}
      <div className="bg-blue-50/80 border border-blue-200/60 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-[#063B73] font-bold">
          <Sparkles className="w-4 h-4 text-[#F97316]" />
          <span>Supported Dynamic Variables:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['{name}', '{loan_amount}', '{interest_rate}'].map((v) => (
            <span key={v} className="bg-white border border-blue-200 px-2.5 py-1 rounded-lg font-mono font-bold text-[#063B73]">
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* Template Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    {tpl.category} • {tpl.language || 'English'}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {tpl.title}
                  </h3>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCheck className="w-3 h-3 text-[#16A34A]" /> {tpl.status || 'Approved'}
                </span>
              </div>

              {/* Chat Bubble Simulation */}
              <div className="bg-[#EFEAE2] p-4 rounded-2xl border border-[#DAD2C7] mb-5">
                <div className="bg-white p-3.5 rounded-xl text-xs text-slate-800 shadow-2xs whitespace-pre-line leading-relaxed border-l-4 border-[#16A34A]">
                  {tpl.content}
                </div>
              </div>

              {/* Variables Used */}
              <div className="flex items-center gap-1.5 flex-wrap mb-4">
                <span className="text-[11px] text-slate-400 font-semibold">Variables:</span>
                {(tpl.variables || ['name']).map((v) => (
                  <span key={v} className="bg-slate-100 text-slate-600 text-[10px] font-mono font-semibold px-2 py-0.5 rounded">
                    {`{${v}}`}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">
                Used in <strong>{tpl.usageCount || 24}</strong> campaign broadcasts
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openEditModal(tpl)}
                  className="p-1.5 text-slate-400 hover:text-[#063B73] hover:bg-slate-100 rounded-lg transition-colors"
                  title="Edit Template"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(tpl.id, tpl.title)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Delete Template"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl animate-slide-up space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-lg">
                {editingTemplate ? 'Edit Message Template' : 'Create Message Template'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Template Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pre-Approved Sanction Alert"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold"
                >
                  <option value="Promotional">Promotional</option>
                  <option value="Offers">Special Offers</option>
                  <option value="Reminder">Follow-Up & Reminder</option>
                  <option value="Onboarding">Onboarding & Welcome</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    Template Content *
                  </label>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-slate-400">Click to insert:</span>
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
                <textarea
                  rows={5}
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#063B73] leading-relaxed"
                ></textarea>
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
                  Save Template
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
