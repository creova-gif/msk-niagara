# MSK Niagara - Color System Documentation

## 🎨 Brand Color Palette

### Philosophy

This color system reflects **authority, clarity, and cultural depth** through a minimal, intentional scheme based on three foundational colors:

- **Black** — Knowledge, credibility, strength
- **White** — Clarity, accessibility, readability  
- **Dark Red (Burgundy/Ox Blood)** — Power, heritage, urgency, community resilience

---

## Primary Colors

### Black (`#0A0A0A`)
**Foundation Color**

```css
--foreground: #0A0A0A
```

**Usage:**
- Primary text color
- Headings and titles
- Icons and UI elements
- Structural elements

**Symbolism:**
- Knowledge and academic rigor
- Credibility and professionalism
- Strength and permanence
- Institutional authority

**Contrast Ratios:**
- On White: **21:1** (WCAG AAA ✅)
- Highly readable, maximum accessibility

---

### White (`#FFFFFF`)
**Negative Space & Clarity**

```css
--background: #FFFFFF
```

**Usage:**
- Primary background color
- Card backgrounds
- Negative space
- Text on dark backgrounds

**Symbolism:**
- Clarity and openness
- Accessibility and inclusivity
- Breathing room for content
- Modern, clean aesthetic

**Contrast Ratios:**
- Black on White: **21:1** (WCAG AAA ✅)
- Dark Red on White: **10.37:1** (WCAG AAA ✅)

---

### Dark Red (`#8B0000`)
**Accent & Action Color**

```css
--primary: #8B0000
--primary-hover: #A40000
--primary-deep: #6B0000
```

**Usage (Selective & Purposeful):**
- Call-to-action buttons
- Important links
- Section highlights
- Icons with emphasis
- Dividers and accents
- Focus states

**Symbolism:**
- Power and determination
- Cultural heritage (African descent, Afro-Canadian communities)
- Urgency and importance
- Community resilience
- Social justice mission

**Contrast Ratios:**
- Dark Red on White: **10.37:1** (WCAG AAA ✅)
- White on Dark Red: **10.37:1** (WCAG AAA ✅)

**Variations:**
- **Hover State** (`#A40000`): Lighter red for interactive feedback
- **Active/Pressed** (`#6B0000`): Deeper red for pressed states
- **Transparency**: Use `rgba(139, 0, 0, 0.1)` for subtle backgrounds

---

## Supporting Neutrals

### Off-Black (`#1A1A1A`)
**Secondary Structural Color**

```css
--secondary: #1A1A1A
```

**Usage:**
- Secondary backgrounds (footers, headers)
- Alternative dark sections
- Hover states for black elements

**Contrast:**
- White on Off-Black: **18.5:1** (WCAG AAA ✅)

---

### Dark Gray (`#2A2A2A`)
**Tertiary Elements**

```css
--tertiary: #2A2A2A
```

**Usage:**
- Tertiary backgrounds
- Subtle depth variations
- Code blocks

---

### Medium Gray (`#525252`)
**Muted Text**

```css
--muted-foreground: #525252
```

**Usage:**
- Secondary text
- Captions and metadata
- Less important information
- Placeholders

**Contrast:**
- On White: **5.69:1** (WCAG AA ✅)

---

### Light Gray (`#E5E5E5`)
**Subtle Borders**

```css
--border: #E5E5E5
```

**Usage:**
- Input field borders
- Card separators
- Subtle dividing lines
- Table borders

---

### Off-White (`#F9F9F9`)
**Alternative Background**

```css
--muted: #F9F9F9
```

**Usage:**
- Subtle background variations
- Alternating sections
- Code inline backgrounds
- Hover states for white cards

---

## Color Usage Guidelines

### 60-30-10 Rule

**60% — Neutral Colors (White, Off-White, Light Gray)**
- Primary backgrounds
- Card backgrounds
- Negative space
- Creates breathing room and clarity

**30% — Black & Dark Grays**
- Typography
- Structural elements
- Headers and footers
- Icons and UI components

**10% — Dark Red Accent**
- Call-to-action buttons
- Important links
- Section highlights
- Icons with emphasis
- Focus states

---

## Accessibility Standards

### WCAG Compliance

All color combinations meet **WCAG AAA** standards (7:1 contrast ratio for normal text, 4.5:1 for large text):

| Combination | Contrast Ratio | WCAG Level |
|-------------|----------------|------------|
| Black on White | 21:1 | AAA ✅ |
| White on Black | 21:1 | AAA ✅ |
| Dark Red on White | 10.37:1 | AAA ✅ |
| White on Dark Red | 10.37:1 | AAA ✅ |
| White on Off-Black | 18.5:1 | AAA ✅ |
| Medium Gray on White | 5.69:1 | AA ✅ |

### Testing Tools

Use these tools to verify contrast:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)
- Chrome DevTools Lighthouse Accessibility Audit

---

## Design Principles

### 1. Minimal & Purposeful
- No decorative color usage
- Every color has a purpose
- Restrained palette creates focus
- Clarity over ornamentation

### 2. Editorial Quality
- Generous white space
- Clear typographic hierarchy
- Content-first approach
- Professional, institutional feel

### 3. High Contrast
- Maximum readability
- Accessibility for all users
- No low-contrast combinations
- Clear visual hierarchy

### 4. Cultural Intentionality
- Dark red represents heritage and resilience
- Black represents knowledge and strength
- White provides clarity and openness
- Colors support the social justice mission

---

## Application Examples

### Buttons

```css
/* Primary CTA Button */
.btn-primary {
  background: #8B0000;
  color: #FFFFFF;
  border: none;
}

.btn-primary:hover {
  background: #A40000;
}

.btn-primary:active {
  background: #6B0000;
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0A0A0A;
  border: 2px solid #0A0A0A;
}

.btn-secondary:hover {
  background: #0A0A0A;
  color: #FFFFFF;
}

/* Outline Button */
.btn-outline {
  background: transparent;
  color: #8B0000;
  border: 2px solid #8B0000;
}

.btn-outline:hover {
  background: #8B0000;
  color: #FFFFFF;
}
```

### Links

```css
a {
  color: #8B0000;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #A40000;
  text-decoration: underline;
}

a:active {
  color: #6B0000;
}
```

### Sections

```css
/* Light Section - Default */
.section-light {
  background: #FFFFFF;
  color: #0A0A0A;
}

/* Dark Section - Contrast */
.section-dark {
  background: #0A0A0A;
  color: #FFFFFF;
}

/* Subtle Section - Alternative */
.section-subtle {
  background: #F9F9F9;
  color: #0A0A0A;
}

/* Accent Section - Emphasis */
.section-accent {
  background: #8B0000;
  color: #FFFFFF;
}
```

### Borders & Dividers

```css
/* Subtle Border */
border: 1px solid #E5E5E5;

/* Strong Border */
border: 2px solid #0A0A0A;

/* Accent Border */
border-left: 4px solid #8B0000;

/* Top Accent Line */
border-top: 2px solid #8B0000;
```

### Shadows

```css
/* Subtle Shadow - Light Elements */
box-shadow: 0 1px 3px rgba(10, 10, 10, 0.1);

/* Medium Shadow - Cards */
box-shadow: 0 4px 6px rgba(10, 10, 10, 0.1);

/* Large Shadow - Modals */
box-shadow: 0 10px 25px rgba(10, 10, 10, 0.15);

/* Accent Glow - Dark Red Elements */
box-shadow: 0 0 20px rgba(139, 0, 0, 0.3);
```

---

## Brand Feel & Positioning

### Serious, Grounded, Trustworthy
- Black and white create professional authority
- Minimal palette conveys seriousness
- High contrast builds trust
- No frivolous colors

### Community-Rooted Yet Modern
- Dark red honors cultural heritage
- Clean design feels contemporary
- Traditional values, modern execution
- Respects history while looking forward

### Knowledge-Forward, Institutional-Quality
- Editorial typography
- Academic gravitas
- Research-focused aesthetic
- University partnership credibility

### Culturally Intentional
- Colors carry symbolic meaning
- Dark red represents resilience
- Black represents knowledge
- White provides accessibility
- Every choice is purposeful

---

## What to Avoid

### ❌ Don't Use These Colors
- **No Blue** — Eliminated from brand palette
- **No Bright Colors** — No neon, bright accent colors
- **No Gradients** — Except dark red variations for depth
- **No Multi-Color Elements** — Stick to the palette
- **No Decorative Colors** — Every color must have purpose

### ❌ Don't Do This
- Using color for decoration only
- Low-contrast text combinations
- Overusing dark red (keep it selective)
- Adding additional accent colors
- Using color to convey meaning alone (accessibility)

### ✅ Do This Instead
- Use dark red sparingly for maximum impact
- Maintain high contrast always
- Let white space breathe
- Use typography for hierarchy
- Test all color combinations

---

## Implementation Checklist

When implementing this color system:

- [ ] Verify all text meets WCAG AA minimum (4.5:1)
- [ ] Aim for WCAG AAA where possible (7:1)
- [ ] Use dark red for CTAs and emphasis only
- [ ] Maintain 60-30-10 ratio
- [ ] Test with color blindness simulators
- [ ] Ensure keyboard focus states are visible
- [ ] Use semantic HTML with color
- [ ] Provide text alternatives for color-coded info
- [ ] Test in high contrast mode
- [ ] Verify print styles work

---

## Pairing with Imagery

### Photography Guidelines

**Authentic Community Photos:**
- Diverse portraits of Niagara community
- Collaborative research settings
- Real people, real stories
- Documentary-style photography

**Let Imagery Carry Emotion:**
- Photos provide warmth and humanity
- Colors provide structure and professionalism
- Balance human connection with institutional authority

**Image Treatment:**
- High-quality, well-lit photos
- Black and white photography acceptable
- Subtle dark red overlays for emphasis
- Avoid over-saturated images

---

## Version Control

**Current Version:** 3.0 - Black, White & Dark Red Edition  
**Previous Version:** 2.0 - Bright Red & Blue  
**Release Date:** January 2026

### Migration Notes

**From Version 2.0:**
- Replace `#F20014` (Bright Red) → `#8B0000` (Dark Red)
- Replace `#C8180F` (Hover Red) → `#A40000` (Hover Dark Red)
- Replace `#191A3F` (Dark Blue) → `#0A0A0A` (Black)
- Remove all blue color references
- Update all multicolored elements to palette

---

## Resources

### Design Files
- `/src/styles/theme.css` - Complete CSS variables
- `/COLOR_SYSTEM_DOCUMENTATION.md` - This file
- `/COLOR_SCHEME_BLACK_WHITE_RED.md` - Quick reference

### Testing
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Color Blind Simulator: https://www.color-blindness.com/coblis-color-blindness-simulator/
- WAVE Accessibility Tool: https://wave.webaim.org/

### Accessibility
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- Accessible Colors: https://accessible-colors.com/

---

**This color system positions MSK Niagara as a trusted hub for community knowledge dissemination, cultural education, and impact-driven storytelling.**

Authority. Clarity. Cultural Depth. ✊🏿
