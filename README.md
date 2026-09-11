# BlueBrains Software — Landing Page

React 19 + Vite + Tailwind CSS website with a dark hero section (floating code card, “What We Do” panel, typewriter subtitle) matching the design reference.

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Configure EmailJS (contact form)
cp .env.example .env
# Edit .env with your EmailJS service/template/public key

# 3. Run the development server
npm run dev
```

Open **http://localhost:5173**

## Scripts

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start Vite dev server          |
| `npm run build` | Type-check + production build  |
| `npm run preview` | Preview the production build |

## Project structure

```
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .env.example
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── vite-env.d.ts
│   ├── components/     # Hero, Navbar, Services, Contact, etc.
│   ├── hooks/
│   ├── styles/
│   └── assets/
└── bluebrains-hero-mockup.html   # Static design reference (optional)
```

## Contact form

Uses [EmailJS](https://www.emailjs.com/). Set these in `.env`:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_TO_EMAIL`

## Notes

- All “Start a Project” / “Start Your Project” buttons link to `#contact`.
- Dark navy theme with electric blue accents, Inter + JetBrains Mono fonts.
- No backend required for the static site + EmailJS form.
