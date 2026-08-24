import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, storeUrl, message } = body;

    // Basic Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and Email are required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'hello@convertiqx.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'ConvertiqX <onboarding@resend.dev>';

    // Fallback if API key is not yet configured by the user
    if (!apiKey || apiKey.trim() === '' || apiKey === 're_your_api_key_here') {
      console.warn(
        '⚠️ [Resend] RESEND_API_KEY is not configured. Received inquiry:',
        { name, phone, email, storeUrl, message }
      );

      return NextResponse.json({
        success: true,
        mock: true,
        message: 'Inquiry received in development mode (RESEND_API_KEY pending).',
      });
    }

    const resend = new Resend(apiKey);

    const emailSubject = `New Project Inquiry from ${name} (${storeUrl || 'No store URL provided'})`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px;">
        <div style="margin-bottom: 24px; border-bottom: 1px solid #f3f4f6; padding-bottom: 16px;">
          <h1 style="font-size: 20px; font-weight: 800; color: #11100F; margin: 0;">New Quick Project Inquiry</h1>
          <p style="font-size: 13px; color: #6b7280; margin: 4px 0 0 0;">Received from ConvertiqX website form</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 0; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase; width: 140px;">Name</td>
            <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #11100F;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase;">Email</td>
            <td style="padding: 8px 0; font-size: 15px; color: #11100F;"><a href="mailto:${email}" style="color: #FF707C; text-decoration: none; font-weight: 600;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase;">Phone</td>
            <td style="padding: 8px 0; font-size: 15px; color: #11100F;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; font-weight: 700; color: #6b7280; text-transform: uppercase;">Store URL</td>
            <td style="padding: 8px 0; font-size: 15px; color: #11100F;">${storeUrl ? `<a href="${storeUrl.startsWith('http') ? storeUrl : `https://${storeUrl}`}" target="_blank" style="color: #FF707C; text-decoration: none; font-weight: 600;">${storeUrl}</a>` : 'Not provided'}</td>
          </tr>
        </table>

        ${
          message
            ? `
          <div style="background-color: #f9fafb; border-radius: 12px; padding: 16px; margin-bottom: 24px; border: 1px solid #f3f4f6;">
            <div style="font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; margin-bottom: 8px;">Message</div>
            <div style="font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</div>
          </div>
        `
            : ''
        }

        <div style="font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #f3f4f6; padding-top: 16px;">
          ConvertiqX Lead Notification • ${new Date().toLocaleString()}
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
      text: `New Inquiry from ${name}\n\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nStore URL: ${storeUrl || 'N/A'}\n\nMessage:\n${message || 'No message provided'}`,
    });

    if (error) {
      console.error('[Resend Error]:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email via Resend' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error('API send-inquiry error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
