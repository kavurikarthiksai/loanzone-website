import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';

// Public Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { LoanProducts } from './pages/LoanProducts';
import { Eligibility } from './pages/Eligibility';
import { FAQs } from './pages/FAQs';
import { Contact } from './pages/Contact';
import { ApplyNow } from './pages/ApplyNow';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { SecurityCompliance } from './pages/SecurityCompliance';

// Admin Pages
import { AdminLogin } from './pages/admin/AdminLogin';
import { Dashboard } from './pages/admin/Dashboard';
import { Contacts } from './pages/admin/Contacts';
import { Campaigns } from './pages/admin/Campaigns';
import { Templates } from './pages/admin/Templates';
import { ScheduledMessages } from './pages/admin/ScheduledMessages';
import { Reports } from './pages/admin/Reports';
import { Settings } from './pages/admin/Settings';

export default function App() {
  return (
    <Routes>
      {/* PART 1: Public Website Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loan-products" element={<LoanProducts />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/security-compliance" element={<SecurityCompliance />} />
      </Route>

      {/* Admin Authentication */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* PART 2: WhatsApp Automation Admin Dashboard */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="templates" element={<Templates />} />
        <Route path="scheduled" element={<ScheduledMessages />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
