import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key (if available)
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Email configuration
const FROM_EMAIL = 'contact@corvusbpo.com';
const TO_EMAIL = 'hello@corvusbpo.com';

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { name, email, company, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Check if Resend is properly initialized
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please add a valid RESEND_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    // Send notification email to admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting Corvus Labs',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and will get back to you within 24 business hours.</p>
        <p>Best regards,<br>Corvus Labs Team</p>
      `,
    });

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}