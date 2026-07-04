# MSK Niagara Research Partnership Website

> **Hosting note:** this repository is hosted under the creova-gif GitHub account because Justin Mafie contributes to this project as a research assistant. This is MSK Niagara Research Partnership's project, not CREOVA-owned software — see LICENSE.


> **Hosting note:** this repository is hosted under the creova-gif GitHub account because Justin Mafie contributes to this project as a research assistant. This is MSK Niagara Research Partnership's project, not CREOVA-owned software — see LICENSE.


**Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara**

A comprehensive bilingual (English/French) website for a transnational university-community research partnership committed to fostering social justice through collaborative research.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Key Components](#key-components)
- [Pages](#pages)
- [Styling & Design](#styling--design)
- [Bilingual Support](#bilingual-support)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

The MSK Niagara website serves as the digital hub for a research partnership funded by the Social Sciences and Humanities Research Council (SSHRC). The partnership brings together:

- **Academic Institutions**: Brock University, University of Toronto (OISE), York University, University at Buffalo
- **Community Organizations**: 22+ partners including YWCA Niagara, Migrant Farmworkers Project, and more
- **Research Teams**: 45+ team members across 3 research hubs
- **Research Focus**: Community health, youth development, newcomer experiences, and social well-being

---

## ✨ Features

### Core Features
- ✅ **Fully Bilingual**: Complete English/French translation support
- ✅ **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ✅ **8 Main Pages**: Home, Partnership, Research Hubs, Members, Projects, Knowledge, Community, Timeline
- ✅ **Interactive Chatbot**: AI-powered assistant for visitor questions
- ✅ **Dynamic Navigation**: Dropdown menus with smooth animations
- ✅ **Search & Filter**: Advanced filtering for community partners and research projects
- ✅ **Accessibility**: WCAG AA+ compliant with semantic HTML and ARIA labels

### Design Features
- 🎨 **Consistent Color Scheme**: Primary Red (#F20014) throughout
- 🎭 **Smooth Animations**: Fade-in, slide-in effects using Tailwind CSS
- 📱 **Mobile-First**: Hamburger menu, touch-friendly interface
- 🔝 **Scroll-to-Top**: Automatic navigation to page top
- 🌊 **Decorative Elements**: SVG waves, gradient backgrounds

---

## 🛠 Technology Stack

### Frontend Framework
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **React Router v6** - Client-side routing

### Styling
- **Tailwind CSS v4.0** - Utility-first CSS framework
- **Custom CSS** - Theme variables and animations
- **Shadcn/ui** - Accessible component library

### Icons & Assets
- **Lucide React** - Modern icon library
- **Figma Assets** - Imported logos and images via `figma:asset` scheme

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 📁 Project Structure

```
msk-niagara/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Header.tsx       # Main navigation with language toggle
│   │   │   ├── Footer.tsx       # Footer with links and land acknowledgment
│   │   │   ├── Breadcrumbs.tsx  # Navigation breadcrumbs
│   │   │   ├── Chatbot.tsx      # Interactive Q&A chatbot
│   │   │   └── ui/              # Shadcn UI components (Card, Button, Badge, etc.)
│   │   │
│   │   ├── contexts/            # React Context providers
│   │   │   └── LanguageContext.tsx  # Bilingual support (EN/FR)
│   │   │
│   │   ├── pages/               # Main page components
│   │   │   ├── Home.tsx         # Landing page with overview
│   │   │   ├── Partnership.tsx  # Partnership details and governance
│   │   │   ├── ResearchHubs.tsx # Research hub listings
│   │   │   ├── HubDetail.tsx    # Individual hub details (dynamic route)
│   │   │   ├── MemberBios.tsx   # 45 team member profiles
│   │   │   ├── ResearchProjects.tsx    # Research project listings
│   │   │   ├── KnowledgeDissemination.tsx  # Publications and outputs
│   │   │   ├── Community.tsx    # 22 community partner profiles
│   │   │   └── Timeline.tsx     # Events timeline
│   │   │
│   │   └── App.tsx              # Root component with routing
│   │
│   ├── styles/
│   │   ├── theme.css            # Global theme variables
│   │   ├── fonts.css            # Font imports
│   │   └── index.css            # Tailwind directives
│   │
│   ├── imports/                 # Imported assets (logos, images)
│   │
│   └── index.tsx                # Application entry point
│
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16.x or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/msk-niagara.git
   cd msk-niagara
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🧩 Key Components

### Header Component
**File**: `src/app/components/Header.tsx`

- Sticky navigation bar with scroll effects
- Bilingual language toggle (EN/FR)
- Dropdown menus for About and Research sections
- Mobile hamburger menu
- Automatic scroll-to-top on navigation

### Footer Component
**File**: `src/app/components/Footer.tsx`

- Brand information and contact details
- Quick links to all main pages
- Land acknowledgment (Haudenosaunee and Anishinaabe peoples)
- Scroll-to-top button
- Social and accessibility information

### Chatbot Component
**File**: `src/app/components/Chatbot.tsx`

- Floating chat button in bottom-right corner
- AI-powered responses to common questions
- Quick reply buttons for easy navigation
- Typing indicators and message timestamps
- Bilingual support (EN/FR)

**Example Questions**:
- "Tell me about your research hubs"
- "Who are your team members?"
- "How can I contact you?"

### Language Context
**File**: `src/app/contexts/LanguageContext.tsx`

- Global state management for language preference
- Translation function `t()` for all UI text
- Supports English (en) and French (fr)

**Usage**:
```typescript
import { useLanguage } from '../contexts/LanguageContext';

const { language, setLanguage, t } = useLanguage();
const title = t('nav.home'); // Returns 'Home' or 'Accueil'
```

---

## 📄 Pages

### 1. Home Page (`/`)
- Hero banner with project overview
- Land acknowledgment section
- Research objectives and goals
- Overview of 3 research hubs
- Governance structure
- Co-directors profiles
- Quick navigation cards

### 2. Partnership Page (`/about/partnership`)
- Detailed partnership overview
- Research objectives and approach
- Governance and leadership structure
- Funding information (SSHRC)
- Community-based participatory research methodology

### 3. Research Hubs Page (`/about/hubs`)
- Listing of 3 main research hubs:
  - **Childhood and Growing Up Hub**: Newcomer children's experiences
  - **Health Literacy Hub**: Immigrant and refugee health literacy
  - **Identity, Connections and Belonging Hub**: Afro-descendants, LGBTQ+ newcomers, migrant farmworkers
- Member counts and project numbers
- Links to individual hub details

### 4. Hub Detail Page (`/about/hubs/:hubId`)
- Dynamic page for each research hub
- Research objectives and focus areas
- Team members with photos and roles
- Research projects and activities
- Community partner information
- University affiliations

### 5. Member Bios Page (`/about/members`)
- 45 team member profiles
- Filter by role (Academic, Community, Student)
- Filter by hub affiliation
- Contact information and expertise
- University/organization affiliations

### 6. Research Projects Page (`/research/projects`)
- Active and completed research projects
- Project descriptions and objectives
- Research teams and collaborators
- Timeline and status updates

### 7. Knowledge Dissemination Page (`/research/knowledge`)
- Publications and research outputs
- Conference presentations
- Community reports
- Policy briefs
- Media coverage

### 8. Community Page (`/community`)
- 22 community partner profiles with logos
- Search and filter by category:
  - Health Services
  - Newcomer Services
  - Youth Services
  - Social Services
  - Cultural Organizations
  - Education
  - Research Institutions
  - Government
  - International Partners
- Contact information and website links
- Services and programs offered

### 9. Timeline Page (`/timeline`)
- Interactive timeline of key events
- Partnership milestones
- Research hub formations
- Community engagement workshops
- Upcoming events

---

## 🎨 Styling & Design

### Color Scheme
- **Primary Color**: `#F20014` (Vibrant Red)
  - Used for: Buttons, links, accents, headers, icons
- **Text Colors**: 
  - Primary: `#191A3F` (Dark blue-gray)
  - Secondary: `#191A3F/80` (80% opacity)
- **Background Colors**:
  - White: `#FFFFFF`
  - Light gray: `#F0F4F8`
  - Gradients for hero sections

### Typography
- **Headings**: Bold, large sizes with tracking
- **Body**: Regular weight, comfortable line-height
- **Font Stack**: System fonts for performance

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Animation Classes
```css
.animate-fade-in-up       /* Fade in with upward motion */
.animate-slide-in-left    /* Slide in from left */
.animate-delay-100        /* 100ms animation delay */
.animate-delay-200        /* 200ms animation delay */
```

---

## 🌐 Bilingual Support

### Language Toggle
- Globe icon button in header
- Switches between EN (English) and FR (French)
- Persists across page navigation
- All content translated

### Translation Keys
Located in `src/app/contexts/LanguageContext.tsx`

**Example**:
```typescript
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    // ... more translations
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    // ... more translations
  },
};
```

### Adding New Translations
1. Add English key-value pair to `translations.en`
2. Add French translation to `translations.fr`
3. Use in components: `{t('your.key')}`

---

## ♿ Accessibility

### WCAG AA+ Compliance
- ✅ Semantic HTML5 elements
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ High contrast colors (Red #F20014 on white)
- ✅ Focus indicators on all interactive elements
- ✅ Alt text for all images
- ✅ Screen reader friendly

### Keyboard Navigation
- `Tab` - Navigate through interactive elements
- `Enter` - Activate links and buttons
- `Esc` - Close mobile menu or chatbot

### Screen Reader Support
- Proper heading hierarchy (h1, h2, h3)
- Descriptive link text
- ARIA labels for icons
- Skip to main content link

---

## 🌍 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules
- Use functional components with hooks
- Keep components small and reusable
- Add comments for complex logic

### Naming Conventions
- **Components**: PascalCase (e.g., `Header.tsx`)
- **Functions**: camelCase (e.g., `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `PRIMARY_COLOR`)

### Git Workflow
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and commit: `git commit -m "Add new feature"`
3. Push to branch: `git push origin feature/new-feature`
4. Create Pull Request

---

## 📝 License

Copyright © 2025 MSK Niagara Research Partnership

All rights reserved. This website is proprietary software developed for the Mobilizing Subjugated Knowledges for a Just and Inclusive Niagara research partnership.

---

## 📞 Contact

**Project Coordinators**:
- Dr. Livianna Tossutti (Co-Director, Brock University)
- Dr. Jean Ntakirutimana (Co-Director, Brock University)

**Email**: contact@msk-niagara.ca  
**Phone**: +1 (905) 688-5550  
**Location**: Brock University, 1812 Sir Isaac Brock Way, St. Catharines, ON L2S 3A1

---

## 🙏 Acknowledgments

### Land Acknowledgment
Brock University is situated on the traditional territory of the Haudenosaunee and Anishinaabe peoples, many of whom continue to live and work here today. This territory is covered by the Upper Canada Treaties and is within the land protected by the Dish with One Spoon Wampum Agreement.

### Funding
This project is funded by the Social Sciences and Humanities Research Council (SSHRC) of Canada.

### Partners
We are grateful to our 22+ community partners, 4 university partners, and 45+ team members who make this research possible.

---

## 📚 Documentation

For detailed API documentation and component specifications, see:
- [Component Documentation](./docs/components.md)
- [API Reference](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)

---

**Version**: 2.0  
**Last Updated**: January 2026  
**Built with**: ❤️ by the MSK Development Team