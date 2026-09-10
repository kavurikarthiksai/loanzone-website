// LoanZone Central Configuration
export const CONFIG = {
  brandName: "LoanZone",
  tagline: "Trusted Loan Partner",
  subTagline: "Personal Loans for a Better Tomorrow",
  supportPhone: "+91 85229 23635",
  supportPhoneRaw: import.meta.env.VITE_OWNER_WHATSAPP_NUMBER || "918522923635",
  whatsappPhone: import.meta.env.VITE_OWNER_WHATSAPP_NUMBER || "918522923635",
  whatsappDefaultMsg: "Hi LoanZone Team, I am interested in applying for a Personal Loan. Please assist me.",
  supportEmail: "support@loanzone.com",
  officeAddress: "Unit 402, Signature Tower, BKC, Bandra East, Mumbai, Maharashtra 400051",
  disclaimer: "Loan approval, interest rates, eligibility and terms are subject to lender policies and applicant eligibility. The information shown on this website is for illustrative purposes only. LoanZone acts as an authorized loan distributor/DSA partner and is not a scheduled commercial bank.",
  demoAdmin: {
    email: "admin@loanzone.com",
    password: "Admin@123",
    name: "Vikram Malhotra",
    role: "Senior Operations Lead"
  }
};

export const getWhatsAppLink = (customMsg) => {
  const msg = encodeURIComponent(customMsg || CONFIG.whatsappDefaultMsg);
  return `https://wa.me/${CONFIG.whatsappPhone}?text=${msg}`;
};
