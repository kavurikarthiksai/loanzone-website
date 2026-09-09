import { initialContacts, initialCampaigns, initialTemplates, initialScheduledMessages } from '../data/adminData';

const KEYS = {
  CONTACTS: 'loanzone_contacts',
  CAMPAIGNS: 'loanzone_campaigns',
  TEMPLATES: 'loanzone_templates',
  SCHEDULED: 'loanzone_scheduled',
  AUTH: 'loanzone_auth_user',
  SETTINGS: 'loanzone_settings'
};

export const getStoredContacts = () => {
  try {
    const data = localStorage.getItem(KEYS.CONTACTS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return initialContacts;
};

export const saveStoredContacts = (contacts) => {
  localStorage.setItem(KEYS.CONTACTS, JSON.stringify(contacts));
};

export const getStoredCampaigns = () => {
  try {
    const data = localStorage.getItem(KEYS.CAMPAIGNS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return initialCampaigns;
};

export const saveStoredCampaigns = (campaigns) => {
  localStorage.setItem(KEYS.CAMPAIGNS, JSON.stringify(campaigns));
};

export const getStoredTemplates = () => {
  try {
    const data = localStorage.getItem(KEYS.TEMPLATES);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return initialTemplates;
};

export const saveStoredTemplates = (templates) => {
  localStorage.setItem(KEYS.TEMPLATES, JSON.stringify(templates));
};

export const getStoredScheduled = () => {
  try {
    const data = localStorage.getItem(KEYS.SCHEDULED);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return initialScheduledMessages;
};

export const saveStoredScheduled = (scheduled) => {
  localStorage.setItem(KEYS.SCHEDULED, JSON.stringify(scheduled));
};

export const getAuthUser = () => {
  try {
    const data = localStorage.getItem(KEYS.AUTH);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return null;
};

export const setAuthUser = (user) => {
  if (user) {
    localStorage.setItem(KEYS.AUTH, JSON.stringify(user));
  } else {
    localStorage.removeItem(KEYS.AUTH);
  }
};
