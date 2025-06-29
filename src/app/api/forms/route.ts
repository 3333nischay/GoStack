import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { to, subject, text, formData } = await request.json();
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',  
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log('Attempting to send email from:', process.env.EMAIL_USER);
    console.log('Sending to:', to);
    
    const formAction = formData.buttonSource || 'Contact form';
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html: `
        <h2>Hey Admin,</h2>
        <p><strong>${formData.fullName}</strong> just submitted a ${formData.formType || 'form'} on your website.</p>
        
        <h3>Here are the details:</h3>
        <ul>
          <li><strong>Full Name:</strong> ${formData.fullName}</li>
          <li><strong>Designation:</strong> ${formData.designation}</li>
          <li><strong>Company Name:</strong> ${formData.companyName}</li>
          <li><strong>Contact Number:</strong> ${formData.contactNumber}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>What they are looking for:</strong> ${formData.requirement}</li>
        </ul>
        
        <p>This e-mail was sent from ${formData.pageUrl || 'Unknown location'}</p>
        <p>Form opened via: ${formData.buttonSource || 'Unknown button'}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error details:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}