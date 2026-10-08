# Krefzo Automation

Premium single-page marketing site for Krefzo Automation, built with Next.js, TypeScript, Tailwind CSS, and lightweight client-side interactions.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

The contact form posts to the local `/api/contact` route, which forwards enquiries to `ashishtring@gmail.com` through FormSubmit. This keeps visitors on the site and avoids browser CORS/redirect issues. The first submission requires confirming the activation email from FormSubmit. Replace placeholder case studies, metrics, and testimonials with verified customer proof before launch.
