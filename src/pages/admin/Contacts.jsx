import React, { useState } from 'react';
import { 
  Users, Search, Filter, Plus, Trash2, Edit2, 
  Upload, Download, X, Check, Phone, Mail, Tag, AlertCircle 
} from 'lucide-react';
import { getStoredContacts, saveStoredContacts } from '../../utils/storage';
import { useToast } from '../../context/ToastContext';

export const Contacts = () => {
  const { addToast } = useToast();
  const [contacts, setContacts] = useState(getStoredContacts());
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  // Form State for Add / Edit
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    status: 'Active',
    tags: 'Personal Loan',
    loanAmount: '₹5,00,000'
  });

  // Filter contacts
  const filtered = contacts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const paginatedContacts = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openAddModal = () => {
    setEditingContact(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      status: 'Active',
      tags: 'Personal Loan',
      loanAmount: '₹5,00,000'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (contact) => {
    setEditingContact(contact);
    setFormData({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      status: contact.status,
      tags: Array.isArray(contact.tags) ? contact.tags.join(', ') : contact.tags,
      loanAmount: contact.loanAmount || '₹5,00,000'
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete lead "${name}"?`)) {
      const updated = contacts.filter((c) => c.id !== id);
      setContacts(updated);
      saveStoredContacts(updated);
      addToast(`Contact "${name}" deleted successfully.`, "info");
    }
  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      addToast("Please provide both name and phone number.", "error");
      return;
    }

    const tagArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingContact) {
      const updated = contacts.map((c) =>
        c.id === editingContact.id
          ? {
              ...c,
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              status: formData.status,
              tags: tagArray,
              loanAmount: formData.loanAmount
            }
          : c
      );
      setContacts(updated);
      saveStoredContacts(updated);
      addToast(`Updated contact details for "${formData.name}".`, "success");
    } else {
      const newContact = {
        id: `c-${Date.now()}`,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        status: formData.status,
        tags: tagArray,
        loanAmount: formData.loanAmount,
        lastContacted: "Just now",
        deliveryStatus: "Delivered"
      };
      const updated = [newContact, ...contacts];
      setContacts(updated);
      saveStoredContacts(updated);
      addToast(`New contact "${formData.name}" added to WhatsApp list!`, "success");
    }

    setIsModalOpen(false);
  };

  const handleSimulateCSVImport = () => {
    const importedSample = [
      {
        id: `c-imp-1`,
        name: "Suresh Raina",
        phone: "+91 98765 99001",
        email: "suresh.r@gmail.com",
        status: "Active",
        tags: ["CSV Import", "Pre-Approved"],
        loanAmount: "₹10,00,000",
        lastContacted: "2026-09-09",
        deliveryStatus: "Delivered"
      },
      {
        id: `c-imp-2`,
        name: "Meera Krishnan",
        phone: "+91 98450 11002",
        email: "meera.k@tcs.com",
        status: "Active",
        tags: ["CSV Import", "Salaried"],
        loanAmount: "₹6,50,000",
        lastContacted: "2026-09-09",
        deliveryStatus: "Delivered"
      }
    ];

    const updated = [...importedSample, ...contacts];
    setContacts(updated);
    saveStoredContacts(updated);
    setIsImportOpen(false);
    addToast("Successfully imported 2 sample contacts from CSV!", "success");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#063B73] tracking-tight">
            Contacts & Lead Database
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your verified WhatsApp borrowers, application leads, and subscribers (1,250 Active Audience)
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsImportOpen(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 shadow-2xs transition-colors"
          >
            <Upload className="w-3.5 h-3.5" /> Import CSV/Excel
          </button>
          <button
            onClick={openAddModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#063B73] hover:bg-[#0B5ED7] text-white text-xs font-bold shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" /> Add Lead
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, phone or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#063B73]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Status:
          </span>
          {['All', 'Active', 'Pending', 'Failed'].map((status) => (
            <button
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setCurrentPage(1);
              }}
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

      {/* Contacts Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Contact Name</th>
                <th className="py-3.5 px-4">Phone Number</th>
                <th className="py-3.5 px-4">Email</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Tags / Loan Need</th>
                <th className="py-3.5 px-4">Last Contacted</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
              {paginatedContacts.length > 0 ? (
                paginatedContacts.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                    
                    {/* Name */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#063B73] flex items-center justify-center font-bold text-xs shrink-0">
                          {c.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 block">{c.name}</span>
                          <span className="text-[10px] text-slate-400">{c.loanAmount}</span>
                        </div>
                      </div>
                    </td>

                    {/* Phone */}
                    <td className="py-3.5 px-4 font-mono text-slate-800">
                      {c.phone}
                    </td>

                    {/* Email */}
                    <td className="py-3.5 px-4 text-slate-500">
                      {c.email || '—'}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          c.status === 'Active'
                            ? 'bg-emerald-100 text-emerald-800'
                            : c.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>

                    {/* Tags */}
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {(Array.isArray(c.tags) ? c.tags : [c.tags]).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Last Contacted */}
                    <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                      {c.lastContacted}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openEditModal(c)}
                          className="p-1.5 text-slate-400 hover:text-[#063B73] hover:bg-slate-100 rounded-lg transition-colors"
                          title="Edit Contact"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(c.id, c.name)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          title="Delete Contact"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400">
                    No contacts found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} leads
          </span>
          <div className="flex items-center gap-1">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 rounded-lg border border-slate-200 disabled:opacity-40 hover:bg-slate-50 font-bold"
            >
              Previous
            </button>
            <span className="px-3 py-1 font-bold text-slate-800">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 rounded-lg border border-slate-200 disabled:opacity-40 hover:bg-slate-50 font-bold"
            >
              Next
            </button>
          </div>
        </div>

      </div>

      {/* Add / Edit Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-slide-up space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-lg">
                {editingContact ? 'Edit Contact Lead' : 'Add New Contact'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveContact} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Chandra"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ramesh@example.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#063B73]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold"
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Loan Amount
                  </label>
                  <input
                    type="text"
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    placeholder="₹5,00,000"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Tags (Comma separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="Personal Loan, Salaried, High CIBIL"
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
                  {editingContact ? 'Save Changes' : 'Create Contact'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Import CSV Simulation Modal */}
      {isImportOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-slide-up space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-lg">Import Contacts (.CSV / .XLSX)</h3>
              <button
                onClick={() => setIsImportOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Upload contact list containing headers: <code>Name, Phone, Email, Loan_Amount, Tags</code>. Phone numbers should be formatted with <code>+91</code> country code for WhatsApp automation.
            </p>

            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center bg-slate-50/70 hover:bg-slate-50 transition-colors">
              <Upload className="w-8 h-8 text-[#063B73] mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-700">Drag & Drop loan leads file here</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Supports CSV, XLS, XLSX up to 10MB</p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsImportOpen(false)}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSimulateCSVImport}
                className="px-5 py-2.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold rounded-xl text-xs shadow-sm transition-all"
              >
                Simulate Import (2 Leads)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
