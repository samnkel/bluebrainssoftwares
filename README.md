# BlueBrains Software Website

Vue 3 + Vite website with a redesigned hero section matching the provided reference image (dark hero, floating code card, "What We Do" panel, typewriter subtitle).

## Setup

```bash
npm install
cp .env.example .env   # fill in your EmailJS credentials for the contact form
npm run dev
```

Build for production:

```bash
npm run build
```

## What changed

- **`src/components/HeroCarousel.vue`** (new) — the dark gradient hero with dotted-grid background, animated badge, gradient headline, typewriter subtitle, code snippet card, floating tech chips, and "What We Do" panel — built to match the reference screenshot.
- **`src/components/Navbar.vue`** (new) — floating pill navbar with Home / Services / Portfolio / About / Contact links and the gradient "Start a Project" button.
- **`src/components/Footer.vue`**, **`SectionTitle.vue`**, **`ServiceCard.vue`** (new) — supporting components referenced by the existing views.
- **`src/views/HomeView.vue`** — updated to render `<HeroCarousel />` directly (removed the duplicate wrapping `.hero` section).
- All other views (`AboutView`, `ServicesView`, `ContactView`, `ResumeView`) are unchanged from what you provided.

## Notes

- The contact form uses `emailjs-com`; add your EmailJS service/template/public key to `.env` for it to send mail.
- Everything is plain Vue SFCs with scoped CSS — no Tailwind or UI kit dependency.
