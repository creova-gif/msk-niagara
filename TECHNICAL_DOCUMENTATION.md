# Technical Documentation - MSK Niagara Website

**Version 2.0** | **Last Updated**: January 2026

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Component Documentation](#component-documentation)
3. [State Management](#state-management)
4. [Routing Structure](#routing-structure)
5. [Styling System](#styling-system)
6. [Asset Management](#asset-management)
7. [Performance Optimization](#performance-optimization)
8. [Deployment Guide](#deployment-guide)
9. [Troubleshooting](#troubleshooting)

---

## 🏗 Architecture Overview

### Tech Stack Summary

```
Frontend Framework:  React 18.2 + TypeScript 5.0
Build Tool:          Vite 4.0
Styling:             Tailwind CSS 4.0 + Custom CSS
Routing:             React Router v6
State Management:    React Context API
UI Components:       Shadcn/ui + Custom Components
Icons:               Lucide React
```

### Application Flow

```
User Request
    ↓
Router (React Router v6)
    ↓
Language Provider (Context)
    ↓
Page Component
    ↓
Child Components
    ↓
Render UI
```

---

## 🧩 Component Documentation

### 1. App.tsx (Root Component)

**Purpose**: Main application entry point that sets up routing and global providers.

**Key Features**:
- Router configuration
- Language context provider wrapper
- Global layout structure (Header, Footer, Chatbot)
- Route definitions

**Code Structure**:
```typescript
<Router>
  <LanguageProvider>
    <Header />
    <Breadcrumbs />
    <main>
      <Routes>
        {/* All page routes */}
      </Routes>
    </main>
    <Footer />
    <Chatbot />
  </LanguageProvider>
</Router>
```

---

### 2. Header.tsx

**Purpose**: Main navigation bar with language toggle and dropdown menus.

**Props**: None (uses hooks)

**State**:
- `mobileMenuOpen: boolean` - Controls mobile menu visibility
- `scrolled: boolean` - Tracks scroll position for shadow effect

**Key Functions**:
```typescript
handleNavClick()     // Closes menu and scrolls to top
toggleLanguage()     // Switches between EN/FR
```

**Styling**:
- Sticky positioning (`sticky top-0`)
- Conditional shadow on scroll
- Responsive mobile menu
- Dropdown animations with group hover

**Color Scheme**:
- Primary: `#F20014` (Red)
- Hover effects: `#F20014/5` (5% opacity background)

---

### 3. Footer.tsx

**Purpose**: Site footer with links, contact info, and land acknowledgment.

**Sections**:
1. **Brand Section**: Logo, title, description, contact info
2. **Quick Links**: About and Research menu items
3. **Land Acknowledgment**: Indigenous territory recognition
4. **Bottom Bar**: Copyright, scroll-to-top button

**Key Functions**:
```typescript
scrollToTop()  // Smooth scroll to page top
```

**Styling**:
- Full-width red background (`bg-[#F20014]`)
- Grid layout for responsive design
- Hover animations on links

---

### 4. Chatbot.tsx

**Purpose**: Interactive chatbot for visitor questions.

**State**:
- `isOpen: boolean` - Chat window visibility
- `messages: Message[]` - Chat message history
- `inputValue: string` - Current input text
- `isTyping: boolean` - Bot typing indicator

**Message Interface**:
```typescript
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
```

**Key Functions**:
```typescript
getBotResponse(userMessage: string): string
  // Pattern matching for common questions
  // Returns appropriate response in current language

handleSendMessage(text?: string): void
  // Adds user message, triggers bot response
  
handleQuickReply(action: string): void
  // Handles quick reply button clicks
```

**Response Categories**:
- Greetings
- Research hubs
- Team members
- Community partners
- Projects
- Contact information
- Timeline/events

**Styling**:
- Floating button (bottom-right)
- Chat window: 96px width, 600px max height
- Animated message bubbles
- Typing indicator with animated dots

---

### 5. Breadcrumbs.tsx

**Purpose**: Navigation breadcrumb trail for better UX.

**Features**:
- Shows current page hierarchy
- Clickable ancestor links
- Home icon for root
- Bilingual path names

**Path Mapping**:
```typescript
const breadcrumbMap = {
  'about': { en: 'About', fr: 'À propos' },
  'partnership': { en: 'Partnership', fr: 'Partenariat' },
  'hubs': { en: 'Research Hubs', fr: 'Pôles de recherche' },
  // ... more mappings
};
```

---

### 6. LanguageContext.tsx

**Purpose**: Global language state management.

**Context Interface**:
```typescript
interface LanguageContextType {
  language: Language;              // 'en' | 'fr'
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;      // Translation function
}
```

**Translation Structure**:
```typescript
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    // ... 50+ translations
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    // ... 50+ translations
  },
};
```

**Usage Example**:
```typescript
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <button onClick={() => setLanguage('fr')}>
        Switch to French
      </button>
    </div>
  );
};
```

---

## 📄 Page Components

### Home.tsx

**Structure**:
1. Hero Banner (Red background, white text)
2. Land Acknowledgment Section
3. Main Introduction (project overview, objectives)
4. Research Hubs Overview
5. Governance Structure
6. Co-Directors Profiles
7. Quick Links Cards
8. Call-to-Action Section

**Data**:
- Co-directors array (static)
- Research objectives (bilingual)
- Hub summaries (static)

**Animations**:
- `animate-fade-in-up` - Hero elements
- `animate-slide-in-left` - Objective cards
- Staggered delays (100ms, 200ms, 300ms)

---

### Community.tsx

**Features**:
- Search functionality
- Category filtering (10 categories)
- Organization cards with logos
- Color-coded accent bars
- Contact buttons (email, website)

**Organization Interface**:
```typescript
interface Organization {
  name: string;
  nameFr: string;
  description: string;
  descriptionFr: string;
  services: string[];
  servicesFr: string[];
  website: string;
  contact: string;
  category: string;
  location: string;
  logo?: string;
  color: string;  // Accent color (Red or Dark Blue)
}
```

**Filtering Logic**:
```typescript
const filteredOrganizations = organizations.filter(org => {
  const matchesCategory = selectedCategory === 'all' || 
                          org.category === selectedCategory;
  const matchesSearch = searchTerm === '' || 
    org.name.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesCategory && matchesSearch;
});
```

---

### MemberBios.tsx

**Features**:
- 45 team member profiles
- Filter by role (Academic, Community, Student)
- Filter by hub affiliation
- Search by name
- Avatar images or initials
- Contact information

**Member Interface**:
```typescript
interface Member {
  name: string;
  role: string;
  hub: string;
  affiliation: string;
  expertise: string[];
  email?: string;
  website?: string;
  image?: string;
}
```

---

### ResearchHubs.tsx

**Hub Data Structure**:
```typescript
interface Hub {
  id: string;
  name: string;
  nameFr: string;
  description: string;
  descriptionFr: string;
  members: number;
  projects: number;
  universities: Array<{
    name: string;
    logo: string;
  }>;
  topics: string[];
  topicsFr: string[];
  partners: Partner[];
}
```

**Hubs**:
1. Childhood and Growing Up Hub
2. Health Literacy Hub
3. Identity, Connections and Belonging Hub

---

## 🎨 Styling System

### Tailwind Configuration

**Custom Colors** (in `tailwind.config.js`):
```javascript
colors: {
  primary: '#F20014',     // Main red color
  secondary: '#191A3F',   // Dark text color
}
```

**Custom Animations** (in `theme.css`):
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

### Color Usage Guide

| Element | Color Code | Tailwind Class |
|---------|-----------|----------------|
| Primary buttons | `#F20014` | `bg-[#F20014]` |
| Hover backgrounds | `rgba(242, 0, 20, 0.05)` | `bg-[#F20014]/5` |
| Text links | `#F20014` | `text-[#F20014]` |
| Borders | `rgba(242, 0, 20, 0.1)` | `border-[#F20014]/10` |
| Main text | `#191A3F` | `text-[#191A3F]` |
| Secondary text | `rgba(25, 26, 63, 0.8)` | `text-[#191A3F]/80` |

---

## 🗂 Asset Management

### Image Import Methods

**1. Figma Assets** (for imported logos):
```typescript
import logo from 'figma:asset/[hash].png';

<img src={logo} alt="Logo" />
```

**2. Static Images** (for new images):
```typescript
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src="https://example.com/image.jpg"
  alt="Description"
/>
```

**3. SVG Icons**:
```typescript
import { Home, Users, Calendar } from 'lucide-react';

<Home className="w-6 h-6 text-[#F20014]" />
```

### Logo Files

All community partner logos are imported via `figma:asset`:
- YWCA Niagara: `figma:asset/af7a99d39d035b273d4e3d0f598d3a6831ad42e6.png`
- Migrant Farmworkers: `figma:asset/c51299cab84d0db41025a7b6acc2f91dad241f19.png`
- ... (20+ more)

---

## 🚀 Performance Optimization

### Code Splitting

**Automatic Route-Based Splitting**:
React Router automatically splits code by route. Each page is loaded only when accessed.

### Image Optimization

1. **Lazy Loading**: Images load as they enter viewport
2. **Responsive Images**: Serve appropriate sizes for device
3. **Compression**: All logos optimized for web

### Bundle Size

Current production bundle:
- Main JS: ~180 KB (gzipped)
- CSS: ~25 KB (gzipped)
- Total: ~205 KB

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

---

## 📦 Deployment Guide

### Build Process

**1. Install Dependencies**:
```bash
npm install
```

**2. Build for Production**:
```bash
npm run build
```
Generates optimized files in `dist/` directory.

**3. Preview Build**:
```bash
npm run preview
```

### Environment Variables

Create `.env` file for environment-specific config:
```
VITE_API_URL=https://api.example.com
VITE_SITE_URL=https://msk-niagara.ca
```

### Hosting Options

**Recommended Platforms**:
1. **Vercel** (Recommended)
   - Automatic deployments from Git
   - CDN edge caching
   - Free SSL certificates

2. **Netlify**
   - Continuous deployment
   - Built-in forms
   - Split testing

3. **AWS S3 + CloudFront**
   - Full control
   - Scalable
   - Cost-effective

### Deployment Steps (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

---

## 🐛 Troubleshooting

### Common Issues

**1. Images Not Loading**
- Check `figma:asset` import paths
- Verify file exists in imports directory
- Ensure correct file extension

**2. Language Toggle Not Working**
- Check LanguageContext is wrapping app
- Verify translation keys match
- Clear browser cache

**3. Routing Issues**
- Ensure React Router `<Router>` wraps app
- Check route paths match navigation links
- Verify route component is imported

**4. Styling Not Applied**
- Run `npm run build` to regenerate CSS
- Check Tailwind class names are correct
- Verify custom classes in `theme.css`

### Debug Mode

Enable React DevTools:
```typescript
// In development, use React DevTools browser extension
// Inspect component tree, props, state, and context
```

---

## 📞 Support

### Development Team Contact
- **Email**: dev-team@msk-niagara.ca
- **Issue Tracker**: GitHub Issues
- **Documentation**: This file + README.md

### Code Review Guidelines
- All PRs require review
- Pass ESLint checks
- Test on mobile devices
- Verify bilingual content
- Check accessibility

---

## 📚 Additional Resources

### External Documentation
- [React Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

### Internal Documentation
- Component API Reference (coming soon)
- Design System Guide (coming soon)
- Content Management Guide (coming soon)

---

**Document Version**: 2.0  
**Last Updated**: January 2026  
**Maintained By**: MSK Development Team
