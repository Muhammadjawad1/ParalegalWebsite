// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and set up a service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Customer name
//    - {{from_email}} - Customer email
//    - {{appointment_date}} - Selected date
//    - {{message}} - Additional message
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the placeholder values below

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_service_id', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_your_template_id', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key', // Replace with your EmailJS public key
  TO_EMAIL: 'your-email@domain.com' // Replace with your email address
};

// Example EmailJS template variables:
// Subject: New Appointment Booking Request
// Body:
// Name: {{from_name}}
// Email: {{from_email}}
// Appointment Date: {{appointment_date}}
// Message: {{message}}
