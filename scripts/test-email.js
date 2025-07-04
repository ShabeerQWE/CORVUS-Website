const { Resend } = require('resend');

// Initialize Resend with your API key
const resend = new Resend('re_LVDiKoFz_F7cHcfo1yRGHVvPZESbZpqw4');

async function sendTestEmail() {
  try {
    // Send a test email to the authorized test email address
    const testEmail = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'labs.corvus@gmail.com', // Only allowed recipient during testing
      subject: 'Test Email from Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the contact form functionality.</p>
        <p>Once domain verification is complete, emails will be sent:</p>
        <ul>
          <li>From: contact@corvusbpo.com</li>
          <li>To: hello@corvusbpo.com</li>
        </ul>
      `
    });
    
    console.log('Test email sent successfully:', testEmail);
  } catch (error) {
    console.error('Error:', error);
  }
}

sendTestEmail();