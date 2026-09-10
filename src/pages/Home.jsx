import React from 'react';
import { Hero } from '../components/Hero';
import { FeatureHighlights } from '../components/FeatureHighlights';
import { BankingPartners } from '../components/BankingPartners';
import { SpecialOffers } from '../components/SpecialOffers';
import { LoanOptions } from '../components/LoanOptions';
import { WhyLoanZone } from '../components/WhyLoanZone';
import { HowItWorks } from '../components/HowItWorks';
import { LoanCalculator } from '../components/LoanCalculator';
import { EligibilityChecker } from '../components/EligibilityChecker';
import { FAQAccordion } from '../components/FAQAccordion';
import { FinalCTA } from '../components/FinalCTA';

export const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureHighlights />
      <BankingPartners />
      <SpecialOffers />
      <LoanOptions />
      <WhyLoanZone />
      <HowItWorks />
      <LoanCalculator />
      <EligibilityChecker />
      <FAQAccordion defaultLimit={6} />
      <FinalCTA />
    </div>
  );
};
