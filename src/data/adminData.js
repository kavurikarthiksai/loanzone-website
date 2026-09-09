// Initial Contacts for WhatsApp Automation (Mocking 1,250 contacts system)
export const initialContacts = [
  {
    id: "c-101",
    name: "Rahul Sharma",
    phone: "+91 98201 44521",
    email: "rahul.sharma@gmail.com",
    status: "Active",
    tags: ["Personal Loan", "High CIBIL"],
    loanAmount: "₹5,00,000",
    lastContacted: "2026-09-08 14:30",
    deliveryStatus: "Delivered"
  },
  {
    id: "c-102",
    name: "Priya Sundaram",
    phone: "+91 97410 88219",
    email: "priya.sundaram@outlook.com",
    status: "Active",
    tags: ["Top-Up", "Salaried"],
    loanAmount: "₹8,00,000",
    lastContacted: "2026-09-08 16:15",
    deliveryStatus: "Delivered"
  },
  {
    id: "c-103",
    name: "Amit Patel",
    phone: "+91 98980 12345",
    email: "amit.patel@yahoo.com",
    status: "Pending",
    tags: ["Business Loan", "Self-Employed"],
    loanAmount: "₹15,00,000",
    lastContacted: "2026-09-09 10:20",
    deliveryStatus: "Pending"
  },
  {
    id: "c-104",
    name: "Sneha Mukherjee",
    phone: "+91 98300 77651",
    email: "sneha.m@tcs.com",
    status: "Active",
    tags: ["Balance Transfer", "Corporate"],
    loanAmount: "₹12,00,000",
    lastContacted: "2026-09-07 11:45",
    deliveryStatus: "Delivered"
  },
  {
    id: "c-105",
    name: "Rohan Verma",
    phone: "+91 99112 33445",
    email: "rohan.verma@gmail.com",
    status: "Failed",
    tags: ["Credit Card BT"],
    loanAmount: "₹3,50,000",
    lastContacted: "2026-09-07 09:10",
    deliveryStatus: "Failed"
  },
  {
    id: "c-106",
    name: "Kavita Nair",
    phone: "+91 98450 66782",
    email: "kavita.nair@wipro.com",
    status: "Active",
    tags: ["Personal Loan", "Pre-Approved"],
    loanAmount: "₹6,00,000",
    lastContacted: "2026-09-08 18:00",
    deliveryStatus: "Delivered"
  },
  {
    id: "c-107",
    name: "Deepak Choudhury",
    phone: "+91 98101 99882",
    email: "deepak.c@gmail.com",
    status: "Active",
    tags: ["Home Loan", "High Value"],
    loanAmount: "₹45,00,000",
    lastContacted: "2026-09-06 15:30",
    deliveryStatus: "Delivered"
  },
  {
    id: "c-108",
    name: "Ananya Deshmukh",
    phone: "+91 98220 54321",
    email: "ananya.d@infy.com",
    status: "Active",
    tags: ["Personal Loan", "Instant Eligible"],
    loanAmount: "₹4,00,000",
    lastContacted: "2026-09-08 12:20",
    deliveryStatus: "Delivered"
  },
  {
    id: "c-109",
    name: "Manish Gupta",
    phone: "+91 94150 11223",
    email: "manish.gupta@bizcorp.in",
    status: "Pending",
    tags: ["Business Loan"],
    loanAmount: "₹20,00,000",
    lastContacted: "2026-09-09 08:50",
    deliveryStatus: "Pending"
  },
  {
    id: "c-110",
    name: "Pooja Reddy",
    phone: "+91 98850 44332",
    email: "pooja.reddy@gmail.com",
    status: "Active",
    tags: ["Education Loan"],
    loanAmount: "₹25,00,000",
    lastContacted: "2026-09-07 17:15",
    deliveryStatus: "Delivered"
  },
  {
    id: "c-111",
    name: "Vikram Joshi",
    phone: "+91 98260 99887",
    email: "vikram.j@gmail.com",
    status: "Failed",
    tags: ["Personal Loan"],
    loanAmount: "₹2,50,000",
    lastContacted: "2026-09-06 13:40",
    deliveryStatus: "Failed"
  },
  {
    id: "c-112",
    name: "Neha Aggarwal",
    phone: "+91 98110 55667",
    email: "neha.aggarwal@gmail.com",
    status: "Active",
    tags: ["Car Loan"],
    loanAmount: "₹9,50,000",
    lastContacted: "2026-09-08 19:10",
    deliveryStatus: "Delivered"
  }
];

// Initial Message Templates
export const initialTemplates = [
  {
    id: "tpl-1",
    title: "Personal Loan Offer",
    category: "Promotional",
    language: "English",
    content: "Hi {name},\n\nGet your Personal Loan of up to {loan_amount} with easy process and quick approval.\n\nInterest rates starting from {interest_rate}.\n\nReply YES to know more.",
    variables: ["name", "loan_amount", "interest_rate"],
    usageCount: 48,
    status: "Approved"
  },
  {
    id: "tpl-2",
    title: "Festival Offer",
    category: "Offers",
    language: "English",
    content: "Greetings {name}! 🎉\n\nCelebrate this festive season with LoanZone's Special Personal Loan offer starting at {interest_rate} with 50% waiver on processing fees!\n\nDisbursal directly in 24 hours.\n\nType APPLY to get started instantly.",
    variables: ["name", "interest_rate"],
    usageCount: 32,
    status: "Approved"
  },
  {
    id: "tpl-3",
    title: "Follow Up",
    category: "Reminder",
    language: "English",
    content: "Hello {name},\n\nWe noticed you checked your loan eligibility for {loan_amount} yesterday.\n\nYour pre-approved sanction at {interest_rate} is reserved for the next 48 hours.\n\nWould you like our loan specialist to call you today? Reply YES or CALL.",
    variables: ["name", "loan_amount", "interest_rate"],
    usageCount: 19,
    status: "Approved"
  },
  {
    id: "tpl-4",
    title: "New Lead Welcome",
    category: "Onboarding",
    language: "English",
    content: "Welcome to LoanZone, {name}!\n\nThank you for choosing us as your trusted loan partner. We have received your inquiry for {loan_amount}.\n\nOur certified loan advisor is reviewing top bank offers for you right now.",
    variables: ["name", "loan_amount"],
    usageCount: 14,
    status: "Approved"
  }
];

// Initial Campaigns
export const initialCampaigns = [
  {
    id: "cmp-101",
    name: "Personal Loan Offer",
    template: "Personal Loan Offer",
    recipients: 500,
    delivered: 442,
    pending: 32,
    failed: 26,
    status: "Completed",
    date: "2026-09-05",
    time: "11:30 AM"
  },
  {
    id: "cmp-102",
    name: "Festival Offer",
    template: "Festival Offer",
    recipients: 320,
    delivered: 284,
    pending: 18,
    failed: 18,
    status: "Completed",
    date: "2026-09-06",
    time: "03:45 PM"
  },
  {
    id: "cmp-103",
    name: "Follow Up",
    template: "Follow Up",
    recipients: 200,
    delivered: 160,
    pending: 28,
    failed: 12,
    status: "In Progress",
    date: "2026-09-08",
    time: "10:15 AM"
  },
  {
    id: "cmp-104",
    name: "New Leads",
    template: "New Lead Welcome",
    recipients: 180,
    delivered: 162,
    pending: 8,
    failed: 10,
    status: "Completed",
    date: "2026-09-08",
    time: "06:20 PM"
  }
];

// Initial Scheduled Messages
export const initialScheduledMessages = [
  {
    id: "sch-1",
    title: "Weekly EMI Reminder Campaign",
    template: "Follow Up",
    recipients: 145,
    scheduledDate: "2026-09-12",
    scheduledTime: "10:00 AM",
    status: "Scheduled",
    audience: "High Intent Leads"
  },
  {
    id: "sch-2",
    title: "Mid-Month Top-Up Promotion",
    template: "Festival Offer",
    recipients: 290,
    scheduledDate: "2026-09-15",
    scheduledTime: "02:30 PM",
    status: "Scheduled",
    audience: "Existing Salaried Borrowers"
  },
  {
    id: "sch-3",
    title: "Balance Transfer Special Blast",
    template: "Personal Loan Offer",
    recipients: 380,
    scheduledDate: "2026-09-18",
    scheduledTime: "11:15 AM",
    status: "Pending Review",
    audience: "Credit Card Debt Pool"
  }
];
