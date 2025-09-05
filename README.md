
# SOSA Full Site

Production-ready Next.js 14 + TailwindCSS site.

## Features
- Home, About, Services, Recruiters (Sign-In), Business Setup, Contact, 404
- Services with "Book Consultation" buttons (link to Contact form)
- Recruiters page locked with simple login (test@sosa.com / 1234)
- Tailwind styling, responsive layout
- Pure JavaScript (no TypeScript, no Supabase)

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
npm start
```

## Deploy on Vercel
1. Push to GitHub
2. Import repo in Vercel (Next.js framework)
3. Build command: `npm run build`
4. Output dir: `.next`
