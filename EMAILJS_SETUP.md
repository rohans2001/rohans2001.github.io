# EmailJS Setup Instructions

To enable real email sending from the contact form, follow these steps:

## 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID**

## 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name (recipient)

Example template:
```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

## 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## 5. Update Contact.tsx
Open `src/components/Contact.tsx` and replace the placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## 6. Test the Form
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox for the message

## Current Status
The form is currently in **demo mode** and will show a success message without actually sending emails. Once you configure EmailJS with your credentials, it will send real emails.

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio website

## Security Note
The public key is safe to expose in client-side code. EmailJS handles the actual email sending securely on their servers.
