import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { faqsData } from '../data/faqs';
import { WhatsAppButton } from './WhatsAppButton';

export const FAQAccordion = ({ allowMultiple = true, showSearch = false, defaultLimit }) => {
  const [openItems, setOpenItems] = useState([1]); // First FAQ open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const filteredFaqs = faqsData.filter((faq) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
  });

  const displayedFaqs = defaultLimit ? filteredFaqs.slice(0, defaultLimit) : filteredFaqs;

  return (
    <section className="py-20 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3.5 py-1 bg-blue-50 text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#063B73] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to know about loan sanctions, documentation, interest rates, and approval.
          </p>
        </div>

        {/* Optional Search */}
        {showSearch && (
          <div className="relative mb-8 max-w-lg mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search loan queries (e.g. CIBIL score, documents, interest)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#063B73] text-sm bg-slate-50/50"
            />
          </div>
        )}

        {/* Accordion Items */}
        <div className="space-y-4">
          {displayedFaqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-2xs hover:border-blue-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-base sm:text-lg focus:outline-none transition-colors hover:text-[#063B73]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#063B73] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer card */}
        <div className="mt-12 bg-blue-50/70 border border-blue-200/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#063B73] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Still have questions?</h4>
              <p className="text-xs text-slate-500">Our loan specialists are available on WhatsApp 7 days a week.</p>
            </div>
          </div>
          <WhatsAppButton
            size="sm"
            text="Ask on WhatsApp"
            message="Hi LoanZone, I have a specific question about personal loan approval."
          />
        </div>

      </div>
    </section>
  );
};
