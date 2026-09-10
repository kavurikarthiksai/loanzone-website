import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import { PublicLayout } from './layouts/PublicLayout';

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


      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
