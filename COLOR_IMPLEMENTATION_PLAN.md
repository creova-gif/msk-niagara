# MSK Niagara - Color Redesign Implementation Plan

## 🎯 Objective
Transform the entire website to use a minimal, authoritative color palette of **Black, White, and Dark Red** that reflects institutional quality, cultural intentionality, and community resilience.

---

## 📋 Implementation Checklist

### Phase 1: Core System ✅ COMPLETE
- [x] Update `/src/styles/theme.css` with new color variables
- [x] Create comprehensive color documentation
- [x] Define accessibility standards
- [x] Establish 60-30-10 usage rules

### Phase 2: Components (Priority Order)
- [ ] Header.tsx - Navigation, logo, language toggle
- [ ] Footer.tsx - Background, links, social icons
- [ ] Breadcrumbs.tsx - Navigation trail colors
- [ ] Chatbot.tsx - ✅ COMPLETE (Already updated)

### Phase 3: Main Pages
- [ ] Home.tsx - Hero, sections, CTAs
- [ ] Partnership.tsx - About section
- [ ] ResearchHubs.tsx - Hub cards
- [ ] HubDetail.tsx - Individual hub pages
- [ ] MemberBios.tsx - Team member cards
- [ ] ResearchProjects.tsx - Project listings
- [ ] KnowledgeDissemination.tsx - Publications
- [ ] Community.tsx - Partner cards
- [ ] Timeline.tsx - Events timeline

### Phase 4: Quality Assurance
- [ ] Accessibility audit (WCAG AA/AAA)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness check
- [ ] Print styles verification
- [ ] High contrast mode testing
- [ ] Color blind simulation testing

---

## 🎨 Color Replacement Matrix

### Global Find & Replace

| Old Color | New Color | Usage |
|-----------|-----------|-------|
| `#F20014` | `#8B0000` | Bright red → Dark red |
| `#C8180F` | `#A40000` | Hover red → Hover dark red |
| `#191A3F` | `#0A0A0A` | Dark blue → Black |
| `bg-blue-*` | `bg-black` or `bg-red-900` | Blue backgrounds |
| `text-blue-*` | `text-black` or `text-red-900` | Blue text |
| `border-blue-*` | `border-red-900` or `border-black` | Blue borders |

### CSS Variable Replacements

```css
/* Old */
--primary: #F20014;
--foreground: #191A3F;

/* New */
--primary: #8B0000;
--foreground: #0A0A0A;
```

---

## 🎯 Design Rules by Component Type

### Headers & Navigation
```css
Background: White (#FFFFFF) or Black (#0A0A0A)
Text: Black (#0A0A0A) or White (#FFFFFF)
Links: Dark Red (#8B0000)
Hover: Lighter Red (#A40000)
Active: Deep Red (#6B0000)
Border: Light Gray (#E5E5E5) or Black (#0A0A0A)
```

### Hero Sections
```css
Background: Black (#0A0A0A)
Text: White (#FFFFFF)
Accent Lines: Dark Red (#8B0000)
CTA Primary: Dark Red (#8B0000) bg, White text
CTA Secondary: Transparent bg, White (#FFFFFF) border, White text
Hover Effects: Lighter Red (#A40000)
```

### Content Sections
```css
Background (Default): White (#FFFFFF)
Background (Alternate): Off-White (#F9F9F9)
Text: Black (#0A0A0A)
Headings: Black (#0A0A0A)
Links: Dark Red (#8B0000)
Borders: Light Gray (#E5E5E5)
Accent Borders: Dark Red (#8B0000)
```

### Cards
```css
Background: White (#FFFFFF)
Border: Light Gray (#E5E5E5) or Dark Red (#8B0000) accent
Text: Black (#0A0A0A)
Icons: Dark Red (#8B0000)
Hover: Subtle shadow, scale, or red accent
```

### Buttons (Priority Hierarchy)
```css
/* Primary CTA - Dark Red */
background: #8B0000
color: #FFFFFF
hover: #A40000
active: #6B0000

/* Secondary - Black Outline */
background: transparent
color: #0A0A0A
border: 2px solid #0A0A0A
hover: background #0A0A0A, color #FFFFFF

/* Tertiary - Red Outline */
background: transparent
color: #8B0000
border: 2px solid #8B0000
hover: background #8B0000, color #FFFFFF
```

### Icons
```css
Default: Medium Gray (#525252)
Emphasis: Dark Red (#8B0000)
Navigation: Black (#0A0A0A)
On Dark Backgrounds: White (#FFFFFF)
Hover: Lighter Red (#A40000)
```

### Badges & Tags
```css
Background: Off-White (#F9F9F9) or Light Red (rgba(139, 0, 0, 0.1))
Text: Black (#0A0A0A) or Dark Red (#8B0000)
Border: Light Gray (#E5E5E5) or Dark Red (#8B0000)
```

### Forms & Inputs
```css
Background: White (#FFFFFF)
Border: Light Gray (#E5E5E5)
Text: Black (#0A0A0A)
Placeholder: Medium Gray (#525252)
Focus Ring: Dark Red (#8B0000)
Error: Dark Red (#8B0000)
```

---

## 📐 60-30-10 Application by Page

### Home Page
**60% White/Off-White:**
- Main backgrounds
- Card backgrounds
- Content areas

**30% Black:**
- Hero background
- Typography
- Footer
- Icons

**10% Dark Red:**
- CTA buttons (2-3)
- Key links
- Section accent borders
- Important icons

### About/Partnership Pages
**60% White:**
- Page background
- Content cards
- Text areas

**30% Black:**
- Headings
- Body text
- Navigation

**10% Dark Red:**
- Section highlights
- "Learn More" links
- Dividers

### Research Pages
**60% White:**
- Hub cards background
- Project listings
- Publication cards

**30% Black:**
- Hub titles
- Project descriptions
- Author names

**10% Dark Red:**
- Hub icons
- CTA links
- Category badges
- "Read More" buttons

### Community Pages
**60% White:**
- Partner card backgrounds
- Main content area

**30% Black:**
- Partner names
- Descriptions
- Contact info

**10% Dark Red:**
- Partner website links
- "Get Involved" buttons
- Partnership icons

---

## 🔍 Accessibility Checklist

### Contrast Requirements Met
- [ ] All body text: Minimum 4.5:1 (WCAG AA)
- [ ] All headings: Minimum 4.5:1 (WCAG AA)
- [ ] Large text (18pt+): Minimum 3:1 (WCAG AA)
- [ ] UI components: Minimum 3:1 (WCAG AA)
- [ ] Aim for 7:1 or higher (WCAG AAA)

### Color Usage
- [ ] Color never sole means of conveying information
- [ ] Links distinguishable without color (underline)
- [ ] Buttons have text labels, not just color
- [ ] Form errors have text, not just red color
- [ ] Charts have patterns + color

### Focus Indicators
- [ ] All interactive elements have visible focus
- [ ] Focus ring uses dark red (#8B0000)
- [ ] Focus visible for keyboard users
- [ ] 2px minimum focus indicator

### Testing
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Test keyboard navigation
- [ ] Test in high contrast mode
- [ ] Color blindness simulation
- [ ] Lighthouse accessibility score 95+

---

## 🖼️ Imagery Guidelines

### Photo Selection
- Authentic Niagara community photos
- Diverse, real people
- Documentary-style photography
- Collaborative research settings
- Natural lighting, not over-processed

### Image Treatment
- No color filters (maintain authenticity)
- Subtle dark red overlays for emphasis (10-20% opacity)
- Black and white photography acceptable
- High quality, high resolution
- Proper alt text always

### Avoid
- Stock photos that look generic
- Over-saturated colors
- Heavy filters
- Decorative images without purpose

---

## 📊 Component-by-Component Guide

### Header Component
```tsx
<header className="bg-white border-b border-gray-200">
  <nav className="text-black">
    <Link className="text-red-900 hover:text-red-800">
      Navigation Item
    </Link>
  </nav>
</header>
```

**Colors:**
- Background: `bg-white`
- Border: `border-gray-200` (#E5E5E5)
- Text: `text-black`
- Links: `text-red-900` (#8B0000)
- Hover: `hover:text-red-800` (#A40000)

### Hero Section
```tsx
<section className="bg-black text-white">
  <h1 className="text-white">
    Mobilizing Subjugated Knowledges
  </h1>
  <button className="bg-red-900 text-white hover:bg-red-800">
    Learn More
  </button>
</section>
```

**Colors:**
- Background: `bg-black` (#0A0A0A)
- Text: `text-white` (#FFFFFF)
- Button BG: `bg-red-900` (#8B0000)
- Button Hover: `hover:bg-red-800` (#A40000)

### Content Card
```tsx
<div className="bg-white border border-gray-200 hover:shadow-lg">
  <h3 className="text-black">Card Title</h3>
  <p className="text-black">Content text</p>
  <a className="text-red-900 hover:text-red-800">
    Read More →
  </a>
</div>
```

**Colors:**
- Background: `bg-white`
- Border: `border-gray-200`
- Title: `text-black`
- Text: `text-black`
- Link: `text-red-900`
- Link Hover: `hover:text-red-800`

### Accent Card
```tsx
<div className="bg-white border-l-4 border-red-900">
  <div className="text-red-900">
    <Icon />
  </div>
  <h4 className="text-black">Highlighted Content</h4>
</div>
```

**Colors:**
- Background: `bg-white`
- Accent Border: `border-red-900` (#8B0000)
- Icon: `text-red-900`
- Text: `text-black`

### Footer
```tsx
<footer className="bg-black text-white">
  <a className="text-white hover:text-red-400">
    Footer Link
  </a>
  <p className="text-gray-400">
    © 2026 MSK Niagara
  </p>
</footer>
```

**Colors:**
- Background: `bg-black`
- Text: `text-white`
- Links: `text-white hover:text-red-400`
- Muted Text: `text-gray-400`

---

## 🎨 Tailwind Class Mapping

### Backgrounds
```
Old: bg-blue-600, bg-red-600, bg-[#F20014]
New: bg-black, bg-white, bg-red-900, bg-gray-50
```

### Text Colors
```
Old: text-blue-600, text-[#F20014], text-[#191A3F]
New: text-black, text-white, text-red-900, text-gray-500
```

### Borders
```
Old: border-blue-500, border-[#F20014]
New: border-black, border-red-900, border-gray-200
```

### Hover States
```
Old: hover:bg-blue-700, hover:bg-[#C8180F]
New: hover:bg-red-800, hover:text-red-800
```

---

## 🚀 Implementation Priority

### Critical (Do First)
1. **theme.css** ✅ Complete
2. **Header.tsx** - Most visible component
3. **Home.tsx** - Landing page, highest traffic
4. **Footer.tsx** - On every page

### High Priority (Do Second)
5. **Chatbot.tsx** ✅ Complete
6. **Breadcrumbs.tsx** - Navigation consistency
7. **Partnership.tsx** - Key about page
8. **ResearchHubs.tsx** - Core content

### Medium Priority (Do Third)
9. **MemberBios.tsx** - Team showcase
10. **Community.tsx** - Partner highlight
11. **Timeline.tsx** - Events

### Lower Priority (Do Last)
12. **ResearchProjects.tsx**
13. **HubDetail.tsx**
14. **KnowledgeDissemination.tsx**

---

## ✅ Quality Assurance Process

### For Each Component/Page:
1. **Visual Inspection**
   - No blue colors remaining
   - Dark red used selectively (10% rule)
   - High contrast maintained
   - Clean, editorial look

2. **Accessibility Check**
   - Run Lighthouse audit
   - Check contrast ratios
   - Test keyboard navigation
   - Verify focus indicators

3. **Responsive Testing**
   - Desktop (1920px, 1440px, 1024px)
   - Tablet (768px)
   - Mobile (375px, 428px)

4. **Cross-Browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

5. **Special Modes**
   - High contrast mode
   - Dark mode (if applicable)
   - Print preview
   - Reduced motion

---

## 📝 Documentation Updates

As you implement, update:
- [ ] Component prop types (if color props exist)
- [ ] Storybook stories (if using)
- [ ] README files
- [ ] Style guide documentation
- [ ] Handoff documentation
- [ ] This implementation plan (mark completed)

---

## 🎯 Success Criteria

Implementation is complete when:
- [ ] Zero instances of old colors (blue, bright red)
- [ ] All components use new palette exclusively
- [ ] WCAG AA minimum on all text
- [ ] 60-30-10 ratio maintained
- [ ] Lighthouse accessibility score 95+
- [ ] Design feels minimal, editorial, authoritative
- [ ] Cultural intentionality evident
- [ ] Team/client approval received

---

## 📞 Support & Questions

**Reference Documents:**
- `/src/styles/theme.css` - CSS variables
- `/COLOR_SYSTEM_DOCUMENTATION.md` - Full color specs
- `/COLOR_SCHEME_BLACK_WHITE_RED.md` - Quick reference

**Testing Tools:**
- WebAIM Contrast Checker
- Chrome DevTools Lighthouse
- WAVE Browser Extension
- Color Oracle (color blindness simulator)

---

**Let's build something exceptional.** ✊🏿

Authority. Clarity. Cultural Depth.
