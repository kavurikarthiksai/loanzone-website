import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to format WhatsApp message as requested
export const formatLoanApplicationMessage = ({
  fullName,
  mobile,
  email,
  city,
  loanType,
  loanAmount,
  employmentType,
  monthlyIncome,
  message
}) => {
  const formattedAmount = Number(loanAmount || 0).toLocaleString('en-IN');
  const formattedIncome = Number(monthlyIncome || 0).toLocaleString('en-IN');
  const userMessage = message && message.trim() ? message.trim() : 'Application submitted via LoanZone Fast Track portal.';

  return `🔔 NEW LOAN APPLICATION

Applicant Details:

👤 Name: ${fullName}
📱 Mobile: ${mobile}
📧 Email: ${email || 'Not provided'}
🏙️ City: ${city || 'Not specified'}

Loan Details:

💰 Loan Type: ${loanType}
💵 Required Amount: ₹${formattedAmount}
💼 Employment Type: ${employmentType}
💰 Monthly Income: ₹${formattedIncome}

📝 Message:
${userMessage}

Please contact the applicant as soon as possible.`;
};

// Format phone number to international E.164 (without '+' or leading 0)
const sanitizePhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.toString().replace(/\D/g, '');
  // If 10 digits (standard Indian mobile), prepend 91
  if (cleaned.length === 10) {
    return `91${cleaned}`;
  }
  // If starts with 0 and has 11 digits
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `91${cleaned.slice(1)}`;
  }
  return cleaned;
};

// Email validation helper
const isValidEmail = (email) => {
  if (!email) return true; // email is optional on some steps, but if provided must be valid
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
};

// Indian/International Mobile validation helper
const isValidMobile = (phone) => {
  if (!phone) return false;
  const digits = phone.toString().replace(/\D/g, '');
  // Must be at least 10 digits
  return digits.length >= 10 && digits.length <= 15;
};

// API Status & Configuration Endpoint
app.get('/api/health', (req, res) => {
  const ownerNumber = process.env.OWNER_WHATSAPP_NUMBER || '918522923635';
  const hasCloudApi = !!(process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID);

  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    ownerNumberConfigured: !!ownerNumber,
    ownerNumberMasked: ownerNumber ? `${ownerNumber.slice(0, 4)}****${ownerNumber.slice(-3)}` : null,
    whatsappCloudApiReady: hasCloudApi
  });
});

// Loan Application Submission & WhatsApp Dispatch
app.post('/api/apply', async (req, res) => {
  try {
    const {
      fullName,
      mobile,
      email,
      city,
      loanType,
      loanAmount,
      employmentType,
      monthlyIncome,
      message,
      preferredBank,
      purpose
    } = req.body;

    // 1. Validation
    const errors = [];

    if (!fullName || fullName.trim().length < 2) {
      errors.push('Full Name is required (minimum 2 characters).');
    }

    if (!mobile || !isValidMobile(mobile)) {
      errors.push('A valid 10-digit mobile number is required.');
    }

    if (email && !isValidEmail(email)) {
      errors.push('Please provide a valid email address.');
    }

    if (!city || city.trim().length < 2) {
      errors.push('City of residence is required.');
    }

    if (!loanType) {
      errors.push('Loan type selection is required.');
    }

    if (!loanAmount || isNaN(Number(loanAmount)) || Number(loanAmount) <= 0) {
      errors.push('Valid required loan amount is mandatory.');
    }

    if (!employmentType) {
      errors.push('Employment type is required.');
    }

    if (!monthlyIncome || isNaN(Number(monthlyIncome)) || Number(monthlyIncome) <= 0) {
      errors.push('Valid monthly income is required.');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: errors.join(' ')
      });
    }

    const sanitizedApplicantPhone = sanitizePhoneNumber(mobile);
    const ownerNumber = sanitizePhoneNumber(process.env.OWNER_WHATSAPP_NUMBER || '918522923635');
    const applicationId = 'LZ-' + Math.floor(100000 + Math.random() * 900000);

    // Format WhatsApp message
    const formattedMsg = formatLoanApplicationMessage({
      fullName: fullName.trim(),
      mobile: mobile.trim(),
      email: email ? email.trim() : '',
      city: city.trim(),
      loanType: loanType.trim(),
      loanAmount: Number(loanAmount),
      employmentType: employmentType.trim(),
      monthlyIncome: Number(monthlyIncome),
      message: message || purpose || 'Fast Track Instant Application'
    });

    const fallbackUrl = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(formattedMsg)}`;

    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

    // If Meta Cloud API credentials are provided, send directly via Official Cloud API
    if (accessToken && phoneNumberId) {
      try {
        const response = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: ownerNumber,
            type: 'text',
            text: {
              preview_url: false,
              body: formattedMsg
            }
          })
        });

        const data = await response.json();

        if (!response.ok) {
          console.error('[WhatsApp Cloud API Error]:', data);
          return res.status(502).json({
            success: false,
            deliveryMode: 'api_failed',
            applicationId,
            error: data?.error?.message || 'WhatsApp notification service failed to deliver message.',
            fallbackUrl
          });
        }

        return res.json({
          success: true,
          deliveryMode: 'automatic_cloud_api',
          applicationId,
          message: 'Thank you! Your loan application has been submitted successfully. Our team will contact you shortly.',
          messageId: data?.messages?.[0]?.id || null
        });
      } catch (apiErr) {
        console.error('[WhatsApp Network Error]:', apiErr);
        return res.status(500).json({
          success: false,
          deliveryMode: 'api_failed',
          applicationId,
          error: 'Network connection error while contacting WhatsApp API.',
          fallbackUrl
        });
      }
    }

    // Fallback mode for development/demo when Cloud API credentials are not yet set
    // Informs the frontend clearly that API credentials are not configured,
    // and supplies the pre-filled WhatsApp direct link.
    return res.json({
      success: true,
      deliveryMode: 'fallback_direct_link',
      applicationId,
      message: 'Thank you! Your loan application has been submitted successfully. Our team will contact you shortly.',
      fallbackUrl,
      formattedMessage: formattedMsg
    });

  } catch (err) {
    console.error('[Server Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'An unexpected internal server error occurred. Please try again.'
    });
  }
});

// Start Express server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`LoanZone Backend API Server running on port ${PORT}`);
    console.log(`Health endpoint: http://localhost:${PORT}/api/health`);
  });
}

export default app;
