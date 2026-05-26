# CLAUDE.md — Project Context for Perfect Innovative Computers Pvt. Ltd (PICL)

## Business Overview

- **Company:** Perfect Innovative Computers Pvt. Ltd (PICL)
- **Industry:** B2B IT Systems Integration & Enterprise Technology Solutions
- **Founded:** 1995 (30+ years in business)
- **Location:** AJ-20A, Shalimar Bagh, Delhi-110088, India
- **Contact:** Phone: +91 9810299525 | Email: ajay@picl.co.in
- **Credentials:** ISO 9001-2008 Certified
- **Scale:** 30,000+ users, 52+ trained professionals, 90% Pan-India coverage
- **Clients:** Government, Defence, PSUs, Corporates

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.5.7 (App Router) |
| Runtime | React 19.2.0 + TypeScript 5.x |
| Styling | Tailwind CSS v4 + @tailwindcss/postcss |
| Animation | Framer Motion 12.23.24 |
| UI Components | Radix UI (accordion, dialog, dropdown, navigation-menu, popover, select, etc.) |
| Icons | Lucide React |
| Forms | React Hook Form + @hookform/resolvers + Zod |
| Carousel | Embla Carousel |
| Charts | Recharts |
| Toasts | Sonner |
| Fonts | Geist (from Vercel) |
| Dev Server | Next.js Turbopack |
| Linting | ESLint 9 with Next.js config |
| Images | Next.js Image component (Unsplash remote patterns configured) |

### Custom CSS Utilities (globals.css)
- `.liquid-glass` — glassmorphism base effect
- `.liquid-glass-strong` — stronger glassmorphism
- `.liquid-glass-dark` — dark glassmorphism
- `.liquid-glass-subtle` — subtle glassmorphism
- Shimmer animation on hover
- Refraction top-edge highlight
- Custom scrollbar styling

---

## Project Structure

```
D:/coding/orchids-perfect-innovative-it-solutions-main/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Root homepage — assembles all section components
│   │   ├── layout.tsx        # Root layout with metadata (title, description, fonts)
│   │   └── globals.css       # Global styles + glassmorphism utility classes
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky glassmorphic nav with mobile menu
│   │   ├── Hero.tsx          # Full-screen landing with canvas particle animation
│   │   ├── About.tsx         # Company overview, strengths, gallery
│   │   ├── Stats.tsx         # 6 KPI metrics with gradient background
│   │   ├── Services.tsx      # 7 service category cards
│   │   ├── Products.tsx      # 7 product category cards
│   │   ├── Clients.tsx       # Government/corporate clients + partner logos
│   │   ├── Contact.tsx       # Contact form (mailto) + contact info cards
│   │   ├── Footer.tsx        # Dark footer with links, certifications
│   │   └── ui/               # Radix UI component library wrappers (shadcn-style)
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions (cn, etc.)
├── public/                   # Static assets
├── next.config.ts            # Unsplash remote image patterns configured
├── components.json           # shadcn/ui config
├── package.json
├── tsconfig.json
└── postcss.config.mjs
```

---

## Page Sections (in order)

### 1. Navbar (`Navbar.tsx`)
- Sticky top navigation with glassmorphism + backdrop blur
- Logo with company branding
- Desktop nav links + mobile hamburger menu with animations
- Smooth scroll to sections
- "Get In Touch" CTA button

### 2. Hero (`Hero.tsx`)
- Full-screen landing section
- Canvas-based animated particle network background
- Floating badge overlays: ISO Certified, 30,000+ Users, etc.
- CTA buttons: "Explore Services" & "Contact Us"
- Partner logos carousel: DELL, Cisco, IBM, Microsoft, etc.
- Responsive image showcases (Networking, Drone Solutions)

### 3. About (`About.tsx`)
- Company description for Perfect Innovative Computer Pvt. Ltd
- 6 key strengths listed with checkmark icons
- 3 highlights: ISO Certified, Expert Team (52+ technicians), Pan India Coverage
- Gallery images (team, data centre, networking)
- Office address and registration details

### 4. Stats (`Stats.tsx`)
- Gradient background (blue to cyan)
- 6 KPI metrics:
  - 30+ Years in Business
  - 30,000+ Users Across India
  - 52+ Strong Workforce
  - 90% India Coverage
  - ISO 9001-2008 Certified
  - 14+ Major Government Clients

### 5. Services (`Services.tsx`)
7 service cards with image, description, and brand/tech tags:
1. **Cyber Security** — Fortinet, Checkpoint, Force-Point, Sophos
2. **Networking & Communication** — Cisco, structured cabling, Wi-Fi, VoIP
3. **Desktops & Laptops** — Dell, HP, IBM, custom builds
4. **Software Solutions** — Microsoft, IBM, Red Hat, VMware
5. **Display & Video Conferencing** — Samsung, LG, Cisco, Polycom, People Link
6. **Peripherals & Consumables** — HP, Canon, Epson, Kingston, SSD, printers
7. **Drone Services** — Aerial surveying, inspections, photography, mapping

### 6. Products (`Products.tsx`)
7 product category cards with brand tags:
1. **Software Products** — Microsoft, IBM, Red Hat, VMware
2. **Security Hardware & Software** — Fortinet, Checkpoint, Force-Point, Sophos
3. **Display Panels** — Samsung, LG, Aaztech, Barco, Delta
4. **Video Conferencing** — People Link, Cisco Telepresence, Polycom
5. **Printers & Consumables** — HP, Canon, Epson, Xerox, Samsung
6. **IT Peripherals** — SSD, storage, keyboards, mice, scanners, speakers
7. **Drones & Components** — Commercial drones, propellers, gimbal systems, batteries

### 7. Clients (`Clients.tsx`)
- Client categories with badges:
  - **Defence:** Indian Air Force, Indian Army, Air Force Stations
  - **Government:** Border Roads Organisation, Election Commission of India
  - **PSU:** Indian Railways, Delhi Transport Corporation
  - **Education:** Delhi University
  - **Corporate:** ESSL India
- Pan India presence banner (30,000+ users)
- 17 authorized brand partner logos

### 8. Contact (`Contact.tsx`)
- Contact info cards: Phone, Email, Office Address
- Contact form fields: Name, Email, Company, Message
- Form validated via React Hook Form + Zod
- Submission opens mailto client

### 9. Footer (`Footer.tsx`)
- Dark theme background (#050810)
- Company branding + description
- Nav links: About, Services, Products, Clients
- Solutions links: Cyber Security, Networking, Software, Hardware
- Certifications list
- Contact info
- Back to Top button
- Copyright notice

---

## Design Patterns

- **Glassmorphism** — Custom `.liquid-glass*` CSS utilities with backdrop-filter blur throughout
- **Scroll-triggered animations** — Framer Motion `useInView` on every section
- **Canvas particle network** — Animated particle background in Hero section
- **Gradient color scheme** — Blue-to-cyan throughout (text, backgrounds, borders)
- **Gradient text effects** — CSS gradient clipping on headings
- **Mobile-first responsive** — Tailwind breakpoints: sm / md / lg / xl
- **Image overlays** — Gradient masks over Next.js Image components
- **Color-coded badges** — Category labels (Defence, Government, PSU, etc.)

---

## Authorized Technology Partners (17+)
DELL, Cisco, IBM, Microsoft, HP, Fortinet, Checkpoint, Force-Point, Sophos,
Samsung, LG, Polycom, People Link, VMware, Red Hat, Canon, Epson

---

## Development Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Key Configuration Notes

- `next.config.ts` — Remote image patterns for `unsplash.com` are configured; add new domains here if needed
- `components.json` — shadcn/ui configuration for component generation
- All images currently use Unsplash URLs; replace with real company assets for production
- Contact form uses `mailto:` — no backend API; consider adding a form API (e.g., Resend, Formspree) for production
- No database or authentication — purely static/presentational website
