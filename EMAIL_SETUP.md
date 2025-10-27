# Email Setup Instructions

## EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Appointment Booking Request

**Body:**
```
Hello,

You have received a new appointment booking request:

Name: {{from_name}}
Email: {{from_email}}
Appointment Date: {{appointment_date}}
Message: {{message}}

Please contact the client to confirm the appointment.

Best regards,
ParaLegal System
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (also called User ID)

### Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'service_xxxxxxxxx', // Your actual service ID
     TEMPLATE_ID: 'template_xxxxxxxxx', // Your actual template ID
     PUBLIC_KEY: 'your_actual_public_key', // Your actual public key
     TO_EMAIL: 'your-email@domain.com' // Your email address
   };
   ```

### Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Fill out the appointment form
3. Submit the form
4. Check your email for the appointment request

## Alternative: Backend Email Service

If you prefer to use a backend service instead of EmailJS:

### Option 1: Node.js with Nodemailer
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

app.post('/api/book-appointment', async (req, res) => {
  const { name, email, date, message } = req.body;
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'New Appointment Booking Request',
    text: `
      Name: ${name}
      Email: ${email}
      Date: ${date}
      Message: ${message || 'No additional message'}
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});
```

### Option 2: Netlify Functions
Create `netlify/functions/send-email.js`:
```javascript
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  
  const { name, email, date, message } = JSON.parse(event.body);
  
  // Email sending logic here
  
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
```

## Troubleshooting

### Common Issues:
1. **CORS Error**: Make sure your EmailJS service is properly configured
2. **Template Variables**: Ensure template variables match exactly (case-sensitive)
3. **Service Not Found**: Double-check your Service ID
4. **Invalid Template**: Verify your Template ID is correct

### Testing:
1. Check browser console for error messages
2. Verify EmailJS configuration in dashboard
3. Test with a simple email first
4. Check spam folder for test emails

## Security Notes:
- Never commit your EmailJS credentials to version control
- Use environment variables for production
- Consider rate limiting for form submissions
- Validate email addresses on both client and server side
