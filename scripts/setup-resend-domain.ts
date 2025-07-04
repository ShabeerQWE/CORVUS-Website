import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend('re_LVDiKoFz_F7cHcfo1yRGHVvPZESbZpqw4');

async function setupDomain() {
  try {
    // Add the domain
    const domain = await resend.domains.create({ name: 'corvusbpo.com' });
    console.log('Domain added successfully:', domain);

    // Send a test email
    const testEmail = await resend.emails.send({
      from: 'onboarding@resend.dev', // Using Resend's test domain initially
      to: 'hello@corvusbpo.com',
      subject: 'Test Email from Contact Form',
      html: '<p>This is a test email to verify the contact form functionality.</p>'
    });
    
    console.log('Test email sent successfully:', testEmail);
  } catch (error) {
    console.error('Error:', error);
  }
}

setupDomain();