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
