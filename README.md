# AIFlow — AI-Powered Data Automation Platform

A production-ready, premium SaaS landing page built for a frontend engineering hackathon.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Native CSS animations** (no animation libraries)

## Features

- 🎨 Dark-mode premium design (Linear/Stripe quality)
- ✨ Glassmorphism cards with glow effects
- 🖱️ Mouse parallax hero section
- 🔲 Responsive Bento Grid → Accordion (state-preserved across breakpoints)
- 💰 Dynamic pricing (Monthly/Annual × USD/INR/EUR) — zero unnecessary re-renders
- 🎭 Auto-scrolling dual-row testimonials
- 🔽 Animated FAQ accordion
- 🎯 Full SEO (OpenGraph, Twitter Card, JSON-LD, robots)
- ♿ Accessible (aria-labels, keyboard nav, semantic HTML)
- ⚡ Optimized (next/image, next/font, no layout shifts)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).

## Project Structure

```
aiflow/
├── app/
│   ├── globals.css       # Global styles + CSS variables + animations
│   ├── layout.tsx        # Root layout with metadata + SEO
│   └── page.tsx          # Main page composition
├── components/
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── TrustedCompanies.tsx
│       ├── Features.tsx       # Bento Grid + Accordion
│       ├── Workflow.tsx
│       ├── Pricing.tsx        # Dynamic pricing matrix
│       ├── Testimonials.tsx   # Auto-scroll dual rows
│       ├── FAQ.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
├── hooks/
│   └── index.ts          # useMouseParallax, useIntersectionObserver, useMediaQuery, useScrolled
├── lib/
│   ├── data.ts            # Testimonials, companies, FAQ data
│   └── pricing.ts         # Pricing matrix + helpers
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Design Decisions

- **Pricing matrix**: Never hardcoded — driven by `PLANS` object in `lib/pricing.ts`
- **Annual = Monthly × 12 × 0.8** (20% discount)
- **Bento → Accordion sync**: `activeId` state shared; hovering a bento card on resize auto-opens matching accordion
- **No animation libraries**: All animations use pure CSS keyframes + Tailwind
- **Performance**: `memo()` on `PlanCard` and `PricingControls` prevents unnecessary re-renders on currency/billing switch
