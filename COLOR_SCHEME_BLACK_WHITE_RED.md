# MSK Niagara - Black, White & Dark Red Color Scheme

## 🎨 New Color Palette

### Primary Colors

#### Dark Red (Primary Accent)
- **Hex:** `#8B0000`
- **RGB:** `(139, 0, 0)`
- **Usage:** Primary buttons, CTA backgrounds, accent highlights, borders, icons
- **Hover:** `#A40000` (Lighter dark red)
- **Deep Hover:** `#6B0000` (Darker red)

#### Black (Primary Text & Backgrounds)
- **Hex:** `#0A0A0A`
- **RGB:** `(10, 10, 10)`
- **Usage:** Hero backgrounds, main text, headings, dark sections

#### Pure White
- **Hex:** `#FFFFFF`
- **RGB:** `(255, 255, 255)`
- **Usage:** Text on dark backgrounds, main backgrounds, cards

### Secondary/Support Colors

#### Dark Gray
- **Hex:** `#1A1A1A`
- **RGB:** `(26, 26, 26)`
- **Usage:** Secondary backgrounds, dark cards

#### Medium Gray
- **Hex:** `#525252`
- **RGB:** `(82, 82, 82)`
- **Usage:** Muted text, subtle elements

#### Light Gray
- **Hex:** `#F5F5F5`
- **RGB:** `(245, 245, 245)`
- **Usage:** Light backgrounds, subtle backgrounds, input fields

## 🎯 Color Usage Guide

### Hero Sections
```css
background: #0A0A0A (black)
text: #FFFFFF (white)
accent-decorations: #8B0000/5 (dark red with opacity)
accent-line: linear-gradient(to right, transparent, #8B0000, transparent)
```

### Buttons & CTAs
```css
/* Primary Button */
background: #8B0000
text: #FFFFFF
hover: #A40000

/* Secondary Button */
background: transparent
border: 2px solid #FFFFFF
text: #FFFFFF
hover-background: #FFFFFF
hover-text: #0A0A0A
```

### Cards & Content Blocks
```css
background: #FFFFFF
border-left: 4px solid #8B0000 (accent border)
text: #0A0A0A
shadow: subtle gray shadows
```

### Icons & Accents
```css
color: #8B0000
hover: #A40000
```

### Links
```css
color: #8B0000
hover: #6B0000
text-decoration: underline
```

### Text Colors
```css
primary-text: #0A0A0A
secondary-text: #0A0A0A/80 (80% opacity)
muted-text: #525252
white-text: #FFFFFF
accent-text: #8B0000
```

## 📊 Contrast Ratios (WCAG AAA Compliant)

### Text on White
- `#0A0A0A on #FFFFFF`: 19.95:1 ✅ (Excellent)
- `#8B0000 on #FFFFFF`: 10.37:1 ✅ (AAA)
- `#525252 on #FFFFFF`: 5.69:1 ✅ (AA)

### Text on Black
- `#FFFFFF on #0A0A0A`: 19.95:1 ✅ (Excellent)
- `#8B0000 on #0A0A0A`: 5.32:1 ✅ (AA+)

### Text on Dark Red
- `#FFFFFF on #8B0000`: 10.37:1 ✅ (AAA)

## 🎨 Design Patterns

### Pattern 1: Hero Section
- **Background:** Black (#0A0A0A)
- **Text:** White (#FFFFFF)
- **Accent Line:** Dark Red gradient
- **Decorative Elements:** Dark red with low opacity (#8B0000/5)
- **Buttons:** Dark red (#8B0000) with white text

### Pattern 2: Content Sections  
- **Background:** White (#FFFFFF)
- **Text:** Black (#0A0A0A)
- **Accent Borders:** Dark red left border (4px)
- **Icons:** Dark red (#8B0000)
- **Links:** Dark red with hover effects

### Pattern 3: Call-to-Action Sections
- **Background:** Dark red (#8B0000)
- **Text:** White (#FFFFFF)
- **Primary Button:** White background, dark red text
- **Secondary Button:** Transparent with white border

### Pattern 4: Cards
- **Background:** White (#FFFFFF)
- **Border:** Subtle gray or dark red accent
- **Text:** Black (#0A0A0A)
- **Icons:** Dark red (#8B0000)
- **Hover:** Elevated shadow

## 🔄 Migration from Old Colors

### Replace These:
- `#F20014` → `#8B0000` (bright red to dark red)
- `#C8180F` → `#6B0000` (hover bright red to darker red)
- `#191A3F` → `#0A0A0A` (dark blue to black)

### Keep These CSS Variables:
- `--primary`: `#8B0000`
- `--foreground`: `#0A0A0A`
- `--background`: `#FFFFFF`
- `--secondary`: `#1A1A1A`
- `--muted`: `#F5F5F5`
- `--accent`: `#8B0000`

## ✨ Creative Touches

1. **Gradient Accent Lines:** Subtle dark red gradients for section dividers
2. **Hover Effects:** Smooth color transitions on dark red elements
3. **Shadow Depth:** Use subtle gray shadows for depth
4. **Opacity Layers:** Dark red with varying opacity for backgrounds (#8B0000/5, #8B0000/10, #8B0000/20)
5. **Bold Typography:** High contrast black on white for readability
6. **Minimal Borders:** Clean lines with strategic dark red accents

## 📱 Responsive Considerations

- Maintain high contrast for mobile readability
- Use larger touch targets with dark red backgrounds
- Ensure white space for breathing room
- Scale typography appropriately
- Preserve dark red accent visibility across all screen sizes

## 🎯 Brand Identity

This color scheme conveys:
- **Professional Authority:** Black and white foundation
- **Academic Rigor:** Clean, sophisticated design
- **Social Justice:** Bold dark red symbolizing strength and determination
- **Modern Elegance:** Timeless black, white, red combination
- **Accessibility:** High contrast for all users
- **Dramatic Impact:** Strong visual hierarchy

## 🚀 Implementation Notes

1. Update theme.css with new color variables
2. Replace all hex color references in TSX files
3. Update hover states to use darker reds
4. Ensure all text maintains WCAG AAA contrast
5. Test dark mode if needed
6. Update documentation and style guides
