import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, content, isClientEmail } = await request.json();
    
    console.log("Received email request:", { to, subject, contentLength: content?.length, isClientEmail });

    // Validate required fields
    if (!to || !subject || (!content && !isClientEmail)) {
      console.log("Validation failed:", {
        hasTo: !!to,
        hasSubject: !!subject,
        hasContent: !!content
      });
      return NextResponse.json(
        { error: 'Missing required fields: to, subject, and content are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      console.log("Invalid email format:", to);
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // .
  

    // Configure email transporter (update wit¬¬¬h your email service details)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    if (isClientEmail) {
      // Send welcome email to client
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || '',
        to: to,
        subject: "Thank you for sharing your vision with us!",
        text: `Thank you for sharing your vision with us! 
        
We're excited about your idea and look forward to exploring how we can bring it to life together.

Our team will reach out to you within the next 2 business days to discuss your project in detail. We can't wait to collaborate with you!

Best regards,
OnCode AI Agent
`
      });
    } else {
      // Send notification email to admin
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL || '',
        to: to,
        subject: subject,
        text: content,
      });
    }

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}