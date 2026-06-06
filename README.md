# Community Bridge Australia - Landing Page

A professional, bilingual landing page for Community Bridge Australia - immigration and job placement services for Latin Americans.

## Features

✅ **Bilingual Support** - English/Spanish toggle with persistent language preference
✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
✅ **Modern Design** - Warm, professional color scheme with clean typography
✅ **Form Validation** - Client-side form validation with error messages
✅ **All Sections Included**:
  - Hero section with CTA
  - About Stuart section
  - Services (Immigration & Job Placement)
  - How It Works (4-step process)
  - Free Assessment Form
  - Testimonials
  - FAQ (Accordion)
  - Footer with contact & social links

## Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Vercel** - Hosting & serverless functions

## Quick Start

### 1. Installation

```bash
# Install dependencies
npm install
```

### 2. Development

```bash
# Start development server
npm start
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
# Create optimized production build
npm run build
```

## Deployment to Vercel

### Option A: Direct Deployment (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect your React app and deploy it!

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# For production
vercel --prod
```

## Setting Up Email Submissions

The form is ready to handle submissions! You have several options to send emails:

### Option 1: Using Resend (Recommended) ⭐

**Best for: Vercel deployments, simple setup**

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Add environment variable to Vercel:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with your key
5. Uncomment the Resend code in `/api/submit-form.js`
6. Update the email domain if needed

### Option 2: Using SendGrid

**Best for: Reliable enterprise email service**

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key
3. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```
4. Add environment variable to Vercel:
   - Add `SENDGRID_API_KEY` with your key
5. Uncomment the SendGrid code in `/api/submit-form.js`

### Option 3: Using Nodemailer (Gmail, Outlook, Custom SMTP)

**Best for: Using existing email accounts**

1. Install Nodemailer:
   ```bash
   npm install nodemailer
   ```
2. Add environment variables to Vercel:
   - `EMAIL_USER` - Your email address
   - `EMAIL_PASSWORD` - Your email password (or app password for Gmail)
3. Uncomment the Nodemailer code in `/api/submit-form.js`
4. For Gmail, use [App Passwords](https://myaccount.google.com/apppasswords)

### Option 4: Store in Database

You can also store submissions in:
- **MongoDB** - See commented example in `/api/submit-form.js`
- **Vercel Postgres**
- **Firebase**
- **Supabase**

## File Structure

```
community-bridge/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with language toggle
│   │   ├── HeroSection.jsx     # Hero section
│   │   ├── AboutSection.jsx    # Stuart's story
│   │   ├── ServicesSection.jsx # Services cards
│   │   ├── HowItWorksSection.jsx # 4-step process
│   │   ├── FormSection.jsx     # Contact form
│   │   ├── TestimonialsSection.jsx # Testimonials
│   │   ├── FAQSection.jsx      # FAQ accordion
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main component
│   ├── index.jsx               # React entry point
│   ├── index.css               # Global styles
│   └── translations.js         # Bilingual content
├── api/
│   └── submit-form.js          # Form submission API route
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#C4622D',      // Orange/rust
  secondary: '#2C5282',    // Blue
  accent: '#D4A574',       // Gold
  light: '#F5F1E8',        // Cream
  dark: '#1A1A1A',         // Dark
}
```

### Change Fonts

Google Fonts are already imported. To use different fonts:

1. Update the font import in `public/index.html`
2. Update font families in `tailwind.config.js`:

```javascript
fontFamily: {
  heading: ['"Your Font"', 'serif'],
  body: ['"Your Font"', 'sans-serif'],
}
```

### Edit Content

All text content is in `src/translations.js`. This file has all English (en) and Spanish (es) text organized by section.

### Add/Remove Sections

Each section is a separate component in `src/components/`. To add a new section:

1. Create `src/components/YourSection.jsx`
2. Import it in `src/App.jsx`
3. Add it to the JSX in the render
4. Add your content to `src/translations.js`

## Environment Variables

Create a `.env.local` file for local development (optional):

```
# For email services (only needed if you implement email)
RESEND_API_KEY=your_key_here
SENDGRID_API_KEY=your_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
MONGODB_URI=your_mongodb_uri
```

For Vercel, set these in Project Settings → Environment Variables.

## Form Features

- **Client-side validation** - Real-time validation feedback
- **Error messages** - Clear error messages in both languages
- **Success state** - Shows success message after submission
- **Bilingual** - Error messages and confirmations in selected language
- **Mobile friendly** - Responsive form design

## Performance

- Optimized for Lighthouse scores
- Minimal dependencies (only React + Tailwind)
- Static assets served via Vercel CDN
- Automatic image optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## SEO

The page includes:
- Meta description in `public/index.html`
- Semantic HTML structure
- Mobile viewport settings
- Proper heading hierarchy

To improve SEO further:
1. Add Open Graph meta tags
2. Create sitemap.xml
3. Add robots.txt
4. Submit to Google Search Console

## Analytics (Optional)

To add Google Analytics:

1. Add to `public/index.html` (in head):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. Replace `GA_MEASUREMENT_ID` with your actual ID

## Troubleshooting

### Form submissions not working

1. Check browser console for errors (F12)
2. Make sure `/api/submit-form.js` is deployed to Vercel
3. Verify environment variables are set in Vercel
4. Check that email service (Resend, SendGrid, etc.) is configured

### Language toggle not persisting

The app uses localStorage. Make sure:
1. Cookies are allowed in browser
2. You're not in private/incognito mode
3. Check browser DevTools → Application → Storage

### Styling issues

1. Make sure Tailwind CSS is compiled:
   ```bash
   npm run build
   ```
2. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Check that `tailwind.config.js` is correct

## Need Help?

- **React Issues**: Check [React Documentation](https://react.dev)
- **Tailwind Issues**: Check [Tailwind Documentation](https://tailwindcss.com)
- **Vercel Issues**: Check [Vercel Documentation](https://vercel.com/docs)
- **Email Integration**: See `/api/submit-form.js` comments

## License

Created for Community Bridge Australia - 2024

## Next Steps

1. ✅ Customize content in `src/translations.js`
2. ✅ Update colors in `tailwind.config.js`
3. ✅ Update contact info in footer
4. ✅ Deploy to Vercel
5. ✅ Set up email service (Resend, SendGrid, etc.)
6. ✅ Add your custom domain
7. ✅ Set up analytics (optional)
8. ✅ Configure form to email address

Enjoy your new landing page! 🎉
