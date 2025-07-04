# Contact Form Setup Guide

The contact form is implemented using Resend for email delivery. Follow these steps to complete the setup:

## 1. Sign up for Resend
1. Go to [Resend](https://resend.com) and create an account
2. Navigate to the DNS Settings section

## 2. Domain Verification
Add the following DNS records to your Zoho DNS settings:

1. Go to your Zoho Domain Management
2. Add the DNS records provided by Resend
3. Wait for domain verification (usually takes 24-48 hours)

## 3. API Configuration
1. Get your API key from Resend dashboard
2. Update the `.env` file with your API key:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

## 4. Update Email Addresses
In `app/api/contact/route.ts`, update the following variables:
```typescript
const FROM_EMAIL = 'contact@yourdomain.com'; // Your verified domain email
const TO_EMAIL = 'your@email.com'; // Your Zoho email address
```

## Testing
1. Fill out the contact form on your website
2. Check both the recipient email and the sender's email for:
   - Confirmation email to the user
   - Notification email to the admin

## Troubleshooting
If emails are not being sent:
1. Verify your API key is correct
2. Ensure your domain is verified in Resend
3. Check the server logs for any error messages
4. Verify the FROM_EMAIL matches your verified domain

## Rate Limits
- Free tier: 100 emails/day
- Monitor your usage in the Resend dashboard

## Security Notes
- Never commit your .env file to version control
- Use environment variables in production
- Consider implementing rate limiting on the API route