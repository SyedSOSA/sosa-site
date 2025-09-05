
# SOSA Hybrid Site

A stable, production-ready Next.js 14 + TailwindCSS website combining features of both previous builds.

## Features
- Multi-page site: Home, About, Services, Recruiters, Business Setup, Contact, 404
- TailwindCSS styling
- Clean header/footer layout
- Contact form powered by Formspree
- Pure JavaScript (no TypeScript, no Supabase/Auth)
- Deploy-ready on Vercel

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Deploy on Vercel
1. Push this project to GitHub
2. Import repo in Vercel (Framework: Next.js)
3. Build command: `npm run build`
4. Output dir: `.next`
