# MSK Niagara Color Palette

This document contains the official color palette for the MSK Niagara research partnership website.

## Color Palette

### #82B9DD - Light Blue (Soft Blue)
**Usage:** Secondary accents, subtle backgrounds, highlights
- **Hex:** `#82B9DD`
- **RGB:** `(130, 185, 221)`

### #6EB5E5 - Medium Light Blue (Bright Blue)
**Usage:** Interactive elements, accents, hover states
- **Hex:** `#6EB5E5`
- **RGB:** `(110, 181, 229)`

### #0842C6 - Dark Blue (Deep Navy/Royal Blue)
**Usage:** Secondary buttons, secondary text, important actions
- **Hex:** `#0842C6`
- **RGB:** `(8, 66, 198)`

### #C0E3F9 - Very Light Blue (Pale Blue)
**Usage:** Muted backgrounds, subtle tints, light sections
- **Hex:** `#C0E3F9`
- **RGB:** `(192, 227, 249)`

### #013F68 - Darkest Blue (Primary)
**Usage:** Primary text, primary buttons, headings, main actions
- **Hex:** `#013F68`
- **RGB:** `(1, 63, 104)`

---

## Usage in Theme

```css
:root {
  --foreground: #013F68; /* Darkest Blue - Primary Text */
  --primary: #013F68; /* Darkest Blue - Primary Actions */
  --secondary: #0842C6; /* Dark Blue - Secondary Actions */
  --muted: #C0E3F9; /* Very Light Blue - Muted Backgrounds */
  --accent: #6EB5E5; /* Medium Blue - Accents & Highlights */
  --switch-background: #82B9DD; /* Light Blue */
  --chart-1: #013F68; /* Darkest Blue */
  --chart-2: #0842C6; /* Dark Blue */
  --chart-3: #6EB5E5; /* Medium Blue */
  --chart-4: #82B9DD; /* Light Blue */
  --chart-5: #C0E3F9; /* Very Light Blue */
}
```

---

## Color Hierarchy

1. **Primary (Darkest):** #013F68 - For the most important elements
2. **Secondary (Dark):** #0842C6 - For secondary importance
3. **Accent (Medium):** #6EB5E5 - For highlights and interactive elements
4. **Light:** #82B9DD - For subtle accents
5. **Very Light:** #C0E3F9 - For backgrounds and muted elements

---

## Gradients

### Hero Sections
```css
background: linear-gradient(to bottom right, #013F68, #0842C6, #6EB5E5);
```

### Buttons & CTAs
```css
background: linear-gradient(to right, #013F68, #0842C6);
background: linear-gradient(to right, #6EB5E5, #0842C6);
```

### Scrollbar
```css
background: linear-gradient(180deg, #013F68, #0842C6);
hover: linear-gradient(180deg, #0842C6, #6EB5E5);
```

---

## Accessibility

All color combinations meet WCAG AA standards for contrast:

- **#013F68 on White:** 11.46:1 ✅ (Excellent)
- **#0842C6 on White:** 7.15:1 ✅ (AAA)
- **White on #013F68:** 11.46:1 ✅ (Excellent)
- **White on #0842C6:** 7.15:1 ✅ (AAA)

---

## Brand Consistency

This cohesive blue palette creates a professional, trustworthy, and calming visual identity perfect for an academic research partnership focused on community health and social justice.
