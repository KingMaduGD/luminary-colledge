# Luminary College — Website Project Plan
> Designed & Developed by **King Tech Foundation** · [kingtech.com.ng](https://kingtech.com.ng)

---

## 🏫 The School

### Luminary College
**Location:** Abuja, Nigeria
**Tagline:** *"Illuminating Futures, Shaping Greatness"*

**Brand Rationale:**
"Luminary" signals academic brilliance, a beacon institution, and leadership — fitting for a multi-award winning secondary school. It is internationally resonant yet dignified in a Nigerian context. The name carries weight without being generic.

---

## 🏢 The Agency

**King Tech Foundation**
Website: [kingtech.com.ng](https://kingtech.com.ng)
Footer Attribution: *"Designed & Developed by King Tech Foundation"*

---

## 📋 Site Architecture — 7 Core Pages

| Route | Page | Priority |
|---|---|---|
| `/` | Home | P0 |
| `/about` | About Us | P0 |
| `/academics` | Academics | P1 |
| `/admissions` | Admissions | P1 |
| `/gallery` | Gallery | P2 |
| `/news` | News & Events | P2 |
| `/contact` | Contact | P0 |

---

## 📄 Page-by-Page Breakdown

### `/` — Home
- Cinematic Hero: School name, tagline, dual CTA ("Apply Now" / "Explore School")
- Live Stats Bar: Founded year, student count, staff count, award count
- About Snapshot: 3-sentence mission + link to `/about`
- Awards Showcase: Trophy/badge carousel — real named awards
- Academic Highlights: 3 department cards (Sciences, Arts, Commercial)
- Principal's Message: Quote card with photo
- Testimonials: Student & Parent quotes (3–4)
- News Preview: Latest 3 posts from `/news`
- Admissions CTA Banner: "Admissions Open — Session 2025/2026"
- Footer

### `/about` — About Us
- School history timeline (founding to present)
- Mission, Vision, Core Values grid
- Leadership team cards (Principal, Vice Principal, HODs)
- Awards & Recognitions wall (named, dated, with badge icons)
- Accreditations / Affiliations (WAEC, NECO, etc.)

### `/academics` — Academics
- Department overview (Sciences, Arts, Commercial)
- Subjects offered per department
- Co-curricular activities (Debate club, Science quiz, Sports, etc.)
- Academic calendar (Session dates, exam timetable)
- Results/WAEC performance highlight (e.g., "98% pass rate, 2024")

### `/admissions` — Admissions
- Eligibility & requirements
- Application steps (numbered flow)
- School fees structure (session breakdown)
- Downloadable admission form (PDF link)
- FAQs accordion
- Enquiry form

### `/gallery` — Gallery
- Masonry/grid photo gallery
- Filterable categories: Academics, Sports, Events, Facilities
- Lightbox on click

### `/news` — News & Events
- News & events listing (card grid)
- Individual post page: `/news/[slug]`
- Categories: School News, Events, Achievements

### `/contact` — Contact
- School address + Google Maps embed
- Phone, Email, Social links
- Contact form (Name, Email, Subject, Message)
- Office hours

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0B2545` | Deep Navy — authority, trust |
| Accent | `#C9962C` | Warm Gold — excellence, prestige |
| Surface | `#F8F5EF` | Warm Ivory — academic, clean |
| Text | `#1A1A2E` | Near Black — body copy |
| Muted | `#6B7280` | Slate Gray — captions, labels |
| White | `#FFFFFF` | Backgrounds, cards |

### Typography

| Role | Font | Style |
|---|---|---|
| Display / Headings | Cormorant Garamond | Serif — editorial, prestigious |
| Body / UI | Plus Jakarta Sans | Modern, highly readable |
| Accent / Labels | Montserrat | Caps, small — institutional |

### Design Aesthetic
**Editorial-Academic** — think *The Economist* meets a world-class institution.
Clean grids, generous whitespace, gold rule lines, dignified motion.
Not flashy — *distinguished.*

---

## ⚙️ Tech Stack & Architecture

```
Framework:     Next.js 15 (App Router)
Language:      TypeScript (strict mode)
Styling:       Tailwind CSS v4
Fonts:         next/font (Google Fonts)
Images:        next/image (optimized)
Icons:         Lucide React
Animation:     Framer Motion (selective — hero, counters, scroll reveals)
Forms:         React Hook Form + Zod validation
Data:          Local TypeScript data files (prototype)
Email:         Resend (contact form delivery)
Deployment:    Vercel
```

---

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                  ← Home
│   │   ├── about/page.tsx
│   │   ├── academics/page.tsx
│   │   ├── admissions/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/                     ← Page-specific sections
│   └── ui/                           ← Reusable primitives (Button, Card, Badge)
├── data/                             ← JSON/TS prototype data
│   ├── awards.ts
│   ├── staff.ts
│   ├── news.ts
│   └── gallery.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

---

## 🧩 Key Components

| Component | Description |
|---|---|
| `<Navbar />` | Sticky, transparent-to-solid on scroll, mobile hamburger menu |
| `<HeroSection />` | Full-bleed, animated text reveal, school crest |
| `<StatsCounter />` | Animated count-up on scroll (Framer Motion) |
| `<AwardsCarousel />` | Embla carousel, gold badge style |
| `<PrincipalCard />` | Quote + signature + portrait |
| `<NewsCard />` | Date, category badge, title, excerpt |
| `<GalleryGrid />` | Masonry layout, filterable, lightbox |
| `<ContactForm />` | React Hook Form + Zod + Resend integration |
| `<Footer />` | 4-column layout, social links, agency credit |

---

## 📦 Prototype Data to Populate

| Data File | Content |
|---|---|
| `awards.ts` | 8–10 named awards (e.g., *"Best Secondary School, FCT — 2023"*) |
| `staff.ts` | Principal + 6 HODs with titles, subjects, and photos |
| `news.ts` | 6 articles with slugs, dates, categories |
| `gallery.ts` | 24 image entries across 4 categories |
| Testimonials | 4 entries: 2 students, 2 parents |

---

## 🚦 Non-Functional Requirements

- **Performance:** 90+ Lighthouse score — no heavy libraries, lazy-loaded images
- **SEO:** Next.js Metadata API, Open Graph tags, `sitemap.xml`, `robots.txt`
- **Accessibility:** WCAG AA — semantic HTML, proper contrast ratios, focus states
- **Responsive:** Mobile-first, tested at 375px · 768px · 1280px · 1440px
- **Scalability:** Flat TypeScript data files now; drop-in ready for Sanity or Contentful CMS later

---

## 🗓️ Build Phases

### Phase 1 — Foundation
- [ ] Project scaffold (Next.js 15 + TypeScript + Tailwind)
- [ ] Design tokens (colors, fonts, spacing)
- [ ] `<Navbar />` + `<Footer />`
- [ ] All data files (`awards.ts`, `staff.ts`, `news.ts`, `gallery.ts`)

### Phase 2 — Core Pages
- [ ] Home page (all sections)
- [ ] About page
- [ ] Contact page

### Phase 3 — Content Pages
- [ ] Academics page
- [ ] Admissions page
- [ ] News listing + `[slug]` detail page
- [ ] Gallery page

### Phase 4 — Polish & QA
- [ ] Framer Motion animations (hero reveal, stat counters, scroll-triggered)
- [ ] SEO metadata per page
- [ ] Full mobile QA
- [ ] Lighthouse audit & performance tuning
- [ ] Vercel deployment & domain configuration

---

## 📌 Notes

- This is a **prototype** build — real content structure, no live database required.
- Data files are structured to be CMS-compatible for a future Sanity/Contentful migration.
- The contact form uses **Resend** for email delivery — requires a Resend API key in `.env.local`.
- All images should be optimised WebP, served via `next/image` for automatic resizing.
- School crest/logo to be provided by client or designed separately.

---

*Document prepared by King Tech Foundation · [kingtech.com.ng](https://kingtech.com.ng)*
*Project: Luminary College Website · Version 1.0*
