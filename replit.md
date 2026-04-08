# MSK Niagara Research Partnership

## Overview
A React + Vite web application for the MSK (Mobilizing Subjugated Knowledges) Niagara Research Partnership — a transnational university-community partnership committed to fostering social justice through collaborative research.

## Tech Stack
- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`)
- **UI Components**: Radix UI primitives + shadcn/ui components, MUI
- **Routing**: React Router v7
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure
```
src/
  app/
    App.tsx           - Root app component
    components/       - Shared UI components (Footer, Nav, etc.)
    contexts/         - React context providers (LanguageContext, etc.)
    pages/            - Page components (Home, Community, MemberBios, etc.)
    utils/            - Utility functions including security helpers
  assets/             - Static assets
  imports/            - Shared imports/types
  styles/             - Global styles
  main.tsx            - Entry point
public/               - Static files served at root (images by hash name)
```

## Running the App
The app runs via the "Start application" workflow:
```
npm run dev
```
Runs on port 5000, host 0.0.0.0 (required for Replit preview pane).

## Replit Migration Notes
- Migrated from Vercel/Figma Make to Replit
- `figma:asset/HASH.png` imports replaced with `/HASH.png` public path references (images already present in `public/`)
- Vite config updated with `server.port: 5000`, `server.host: '0.0.0.0'`, `server.allowedHosts: true`
- SPA rewrites handled by Vite dev server in development (vercel.json rewrites are Vercel-only)

## Key Features
- Bilingual (English/French) via LanguageContext
- Research hubs, member bios, community partners pages
- Partnership and timeline pages
- Privacy policy, help/FAQ pages

## Design System
**Brand palette**: Black `#0A0A0A`, White `#FFFFFF`, Crimson `#8B0000`
**Hub colors**: Childhood `#089EA5` (teal), Health Literacy `#C97B2E` (amber), Identity/Belonging `#7B5EA7` (purple)
**Fonts**: Plus Jakarta Sans (headings, `var(--font-heading)`) + Inter (body) via Google Fonts
**Dot-grid motif**: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)` / `32px` size — used in dark hero sections

**Hero pattern**: All interior page heroes use a consistent design —
- Solid crimson (`bg-[#8B0000]`) background (no gradient)
- Dot-grid motif at 6% opacity
- Diagonal cut bottom edge via `clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'` on a white div
- Left-aligned OR centered headlines per page
- No wave SVGs (removed in design audit)

**Completed design audit** (7 pages):
- `Header.tsx` — three-bar rising logo, dark/frosted-glass scroll transition, crimson CTA
- `Home.tsx` — video hero, dark Land Acknowledgment strip, Mission strip, hub color cards, goals grid
- `MemberBios.tsx` — dark split hero ("The People Behind the Research"), stat cards grid
- `Media.tsx` — crimson hero, sticky tab nav, masonry gallery, cinematic video section, annual reports
- `Partnership.tsx` — left-aligned editorial hero with overline + diagonal edge
- `Timeline.tsx` — pill-style event nodes (✓ for past, → for upcoming), styled event cards
- `Community.tsx` — org accent bars + service tags use each org's own brand color
- `ResearchProjects.tsx` — project icon containers use each hub's gradient color
