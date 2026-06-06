/**
 * Community Bridge Form Submission API
 * 
 * This is a Vercel serverless function that handles form submissions.
 * 
 * To send emails, you have several options:
 * 
 * Option 1: Use Resend (recommended for Vercel)
 * - Install: npm install resend
 * - Get API key from https://resend.com
 * - Set RESEND_API_KEY environment variable
 * 
 * Option 2: Use SendGrid
 * - Install: npm install @sendgrid/mail
 * - Get API key from https://sendgrid.com
 * - Set SENDGRID_API_KEY environment variable
 * 
 * Option 3: Use nodemailer with your email service
 * - Install: npm install nodemailer
 * - Configure with your SMTP settings
 * 
 * For now, this API route receives the form data and logs it.
 * Uncomment the email sending code once you've chosen your service.
 */

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, interest, language, timestamp } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !interest) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    console.log('Form submission received:', {
      name,
      email,
      phone,
      interest,
      language,
      timestamp,
    });

    // ========================================
    // OPTION 1: USING RESEND (Recommended)
    // ========================================
    // Uncomment this section and install: npm install resend
    /*
    import { Resend } from 'resend';

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailContent = language === 'en' 
      ? `New form submission from Community Bridge website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Interest: ${interest}
Time: ${new Date(timestamp).toLocaleString()}
`
      : `Nueva solicitud del formulario de Community Bridge:

Nombre: ${name}
Correo: ${email}
Teléfono: ${phone}
Interés: ${interest}
Hora: ${new Date(timestamp).toLocaleString('es-ES')}
`;

    const { data, error } = await resend.emails.send({
      from: 'form@communitybridge.au',
      to: 'contact@communitybridge.au',
      subject: language === 'en' 
        ? 'New Community Bridge Form Submission' 
        : 'Nueva Solicitud del Formulario Community Bridge',
      text: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Email send error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    */

    // ========================================
    // OPTION 2: USING SENDGRID
    // ========================================
    // Uncomment this section and install: npm install @sendgrid/mail
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const emailContent = language === 'en'
      ? `New form submission from Community Bridge website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\nTime: ${new Date(timestamp).toLocaleString()}`
      : `Nueva solicitud del formulario de Community Bridge:\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nInterés: ${interest}\nHora: ${new Date(timestamp).toLocaleString('es-ES')}`;

    const msg = {
      to: 'contact@communitybridge.au',
      from: 'noreply@communitybridge.au',
      subject: language === 'en'
        ? 'New Community Bridge Form Submission'
        : 'Nueva Solicitud del Formulario Community Bridge',
      text: emailContent,
      replyTo: email,
    };

    await sgMail.send(msg);
    */

    // ========================================
    // OPTION 3: USING NODEMAILER
    // ========================================
    // Uncomment this section and install: npm install nodemailer
    // Configure with your email service (Gmail, Outlook, custom SMTP, etc.)
    /*
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailContent = language === 'en'
      ? `New form submission from Community Bridge website:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\nTime: ${new Date(timestamp).toLocaleString()}`
      : `Nueva solicitud del formulario de Community Bridge:\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nInterés: ${interest}\nHora: ${new Date(timestamp).toLocaleString('es-ES')}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@communitybridge.au',
      subject: language === 'en'
        ? 'New Community Bridge Form Submission'
        : 'Nueva Solicitud del Formulario Community Bridge',
      text: emailContent,
      replyTo: email,
    });
    */

    // ========================================
    // For testing/development: Store in a database
    // ========================================
    // You could also store submissions in a database like Vercel Postgres, Firebase, etc.
    // Example with MongoDB:
    /*
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.MONGODB_URI);

    await client.connect();
    const db = client.db('communitybridge');
    const collection = db.collection('form_submissions');

    await collection.insertOne({
      name,
      email,
      phone,
      interest,
      language,
      timestamp,
      status: 'new',
    });

    await client.close();
    */

    // Success response
    res.status(200).json({
      success: true,
      message: language === 'en'
        ? 'Thank you! We will contact you soon.'
        : 'Gracias! Nos pondremos en contacto pronto.',
    });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
}
