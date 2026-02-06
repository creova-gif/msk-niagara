# MSK Chat - Visual Design Guide

## 🎨 Visual Overview

This document provides a visual description of the MSK Chat interface using the new black, white, and dark red color scheme.

---

## 1. 💬 Chat Button (Closed State)

```
┌─────────────────────────────────────────┐
│                                    ┌───┐│
│                                    │ ● ││  ← Pulsing white indicator
│                                    │   ││
│                                    │ 🗨 ││  ← Dark red (#8B0000) circle
│                                    │   ││     White message icon
│                                    └───┘│     Glowing shadow on hover
│                                         │
└─────────────────────────────────────────┘
                                     ↑
                              Bottom-right corner
```

**Properties:**
- Background: Dark Red (#8B0000)
- Icon: White MessageCircle
- Size: 56×56px (with padding)
- Shadow: Elevated, glows on hover
- Hover: Scale 110%, lighter red (#A40000)
- Indicator: Pulsing white dot (online status)

---

## 2. 🗨️ Chat Window (Open State)

### Full Window Layout

```
┌──────────────────────────────────────────────┐
│ ╔══════════════════════════════════════════╗ │
│ ║  [✨] MSK Chat  [AI]                     ║ │ ← Dark red gradient header
│ ║  ● Online • Ready to help                ║ │
│ ╚══════════════════════════════════════════╝ │
│ ┌──────────────────────────────────────────┐ │
│ │                                          │ │
│ │  [✨]  👋 Welcome to MSK Chat!          │ │ ← Bot message (white bg)
│ │        I'm your intelligent...          │ │
│ │        10:30 AM                          │ │
│ │                                          │ │
│ │                  [👤] Hi, what can      │ │ ← User message (dark red bg)
│ │                       you help with?     │ │   white text
│ │                       10:31 AM           │ │
│ │                                          │ │
│ │  [✨]  🔬 I CAN HELP WITH:              │ │ ← Bot response
│ │        • Research Hubs...                │ │
│ │        10:31 AM                          │ │
│ │                                          │ │
│ └──────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────┐ │
│ │ 💡 Quick topics:                         │ │ ← Quick replies
│ │ [Research Hubs] [Our Mission]            │ │   (after welcome only)
│ │ [Get Involved] [Team & Partners]         │ │
│ └──────────────────────────────────────────┘ │
│ ┌──────────────────────────────────────────┐ │
│ │ [Ask me anything...        ] [↗ Send]   │ │ ← Input section
│ │ Powered by MSK AI • Bilingual Support    │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

**Dimensions:**
- Width: 384px (responsive on mobile)
- Height: 600px max
- Border: 2px dark red (#8B0000) with 20% opacity
- Shadow: Elevated shadow (2xl)
- Border Radius: 16px (rounded)

---

## 3. 🎯 Header Section

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║  ┌───┐  MSK Chat  [AI]                          ║
║  │ ✨ │  ● Online • Ready to help                ║
║  └───┘                                           ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

**Color Details:**
- Background: Dark red gradient
  - From: #8B0000
  - To: #6B0000
- Text: White (#FFFFFF)
- Avatar Circle: White 20% opacity + backdrop blur
- AI Badge: White 20% opacity, rounded-full
- Status Dot: Green (#4ADE80) pulsing

**Elements:**
1. Bot Avatar (left): Sparkles icon in semi-transparent white circle
2. Title: "MSK Chat" in bold white
3. AI Badge: Small rounded badge
4. Status: Green dot + "Online • Ready to help"

---

## 4. 💬 Message Area

### Bot Message

```
┌────────────────────────────────────────┐
│                                        │
│  ┌───┐  ┌──────────────────────────┐  │
│  │ ✨ │  │ 🎯 OUR MISSION:         │  │
│  └───┘  │                          │  │
│         │ Mobilizing Subjugated... │  │
│         │                          │  │
│         │ • Give voice to...       │  │
│         │ • Develop culturally...  │  │
│         │                          │  │
│         │ 💡 We mobilize voices!   │  │
│         │                          │  │
│         │ 10:30 AM                 │  │
│         └──────────────────────────┘  │
│                                        │
└────────────────────────────────────────┘
```

**Bot Message Style:**
- Avatar: Dark red gradient circle with Sparkles icon
- Bubble Background: White (#FFFFFF)
- Text Color: Black (#0A0A0A)
- Border: 1px dark red (#8B0000) 10% opacity
- Shadow: Subtle (sm)
- Timestamp: Gray text
- Max Width: 75% of container

### User Message

```
┌────────────────────────────────────────┐
│                                        │
│  ┌──────────────────────────┐  ┌───┐  │
│  │ Tell me about your       │  │ 👤 │  │
│  │ research hubs            │  └───┘  │
│  │                          │         │
│  │ 10:31 AM                 │         │
│  └──────────────────────────┘         │
│                                        │
└────────────────────────────────────────┘
```

**User Message Style:**
- Avatar: Black gradient circle with User icon
- Bubble Background: Dark red gradient
  - From: #8B0000
  - To: #6B0000
- Text Color: White (#FFFFFF)
- Shadow: Medium (md)
- Timestamp: White 70% opacity
- Max Width: 75% of container
- Aligned: Right side

### Typing Indicator

```
┌────────────────────────────────────────┐
│                                        │
│  ┌───┐  ┌──────────────┐              │
│  │ ✨ │  │  ● ● ●      │              │
│  └───┘  └──────────────┘              │
│         ^bouncing dots                │
│                                        │
└────────────────────────────────────────┘
```

**Typing Indicator:**
- 3 dark red dots (#8B0000)
- Animated bounce effect
- Different delays: 0ms, 150ms, 300ms
- White background bubble
- Same avatar as bot messages

---

## 5. 🎯 Quick Replies Section

```
┌─────────────────────────────────────────────┐
│ 💡 Quick topics:                            │
│                                             │
│ ┌─────────────┐ ┌─────────────┐           │
│ │Research Hubs│ │ Our Mission │           │
│ └─────────────┘ └─────────────┘           │
│                                             │
│ ┌─────────────┐ ┌──────────────────┐      │
│ │Get Involved │ │Team & Partners  │      │
│ └─────────────┘ └──────────────────┘      │
│                                             │
└─────────────────────────────────────────────┘
```

**Quick Reply Buttons:**
- Background: Dark red (#8B0000) 10% opacity
- Text Color: Dark red (#8B0000)
- Border: 1px dark red 20% opacity
- Border Radius: Full (rounded-full)
- Padding: 12px horizontal, 6px vertical
- Hover: 20% opacity background, scale 105%
- Font: Small (12px), medium weight

**Display Logic:**
- Only shows after welcome message
- Hidden after user sends first message
- 4 buttons in flex-wrap layout
- 8px gap between buttons

---

## 6. ⌨️ Input Section

```
┌──────────────────────────────────────────────┐
│ ┌────────────────────────────────┐  ┌────┐  │
│ │ Ask me anything...             │  │ ↗  │  │
│ └────────────────────────────────┘  └────┘  │
│                                              │
│ Powered by MSK AI • Bilingual Support        │
└──────────────────────────────────────────────┘
```

**Input Field:**
- Border: 2px solid gray (#E5E7EB)
- Border Radius: Full (rounded-full)
- Padding: 16px horizontal, 10px vertical
- Focus Ring: 2px dark red (#8B0000)
- Placeholder: Gray text
- Font Size: 14px

**Send Button:**
- Background: Dark red gradient
  - From: #8B0000
  - To: #6B0000
- Icon: White Send icon (Lucide)
- Shape: Circle (rounded-full)
- Size: 40×40px
- Hover: Lighter gradient (#A40000 to #8B0000), scale 105%
- Disabled: 50% opacity, no interaction
- Shadow: Medium, increases on hover

**Footer Text:**
- Font Size: 12px
- Color: Gray (#9CA3AF)
- Text: "Powered by MSK AI • Bilingual Support"
- Alignment: Center

---

## 7. 🎨 Color Palette Reference

### Primary Colors

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│         │  │         │  │         │
│ #8B0000 │  │ #A40000 │  │ #6B0000 │
│  Dark   │  │ Lighter │  │ Darker  │
│  Red    │  │  Red    │  │  Red    │
│         │  │         │  │         │
└─────────┘  └─────────┘  └─────────┘
 Primary     Hover State  Gradient End
```

### Neutral Colors

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│         │  │         │  │         │
│ #0A0A0A │  │ #FFFFFF │  │ #F5F5F5 │
│  Black  │  │  White  │  │  Light  │
│         │  │         │  │  Gray   │
└─────────┘  └─────────┘  └─────────┘
 Text/Dark   Backgrounds  Subtle BG
```

### Accent Colors

```
┌─────────┐  ┌─────────┐
│         │  │         │
│ #1A1A1A │  │ #9CA3AF │
│  Dark   │  │  Medium │
│  Gray   │  │  Gray   │
└─────────┘  └─────────┘
 Secondary    Muted Text
```

---

## 8. 📐 Spacing & Sizing

### Component Sizes

```
Chat Button:          56×56px (including padding)
Chat Window:          384×600px
Header Height:        Auto (64px typical)
Avatar Size:          32×32px (8×8 grid units)
Message Padding:      16px all sides
Input Height:         40px (with padding)
Send Button:          40×40px
Border Radius:        16px (window), Full (buttons)
```

### Spacing

```
Section Padding:      16px
Message Gap:          16px
Quick Reply Gap:      8px
Input to Window:      0px (flush)
Window Border:        2px
Message Border:       1px
```

---

## 9. ✨ Interactive States

### Chat Button States

```
Default:  Dark red (#8B0000) circle
Hover:    Lighter red (#A40000), scale 110%, glow
Active:   Original color, scale 100%
Open:     Same as default but with X icon
```

### Quick Reply Button States

```
Default:  10% red background, red text, red border
Hover:    20% red background, scale 105%
Active:   Sends message, button disappears
```

### Send Button States

```
Default:  Dark red gradient, white icon
Hover:    Lighter gradient, scale 105%, larger shadow
Disabled: 50% opacity, gray appearance, no hover
Active:   Sends message, returns to default
```

### Input Field States

```
Default:  Gray border, white background
Focus:    Dark red ring, dark red border
Typing:   Active state maintained
Empty:    Send button disabled
```

---

## 10. 🎭 Animation Effects

### Entrance Animations

```
Chat Button:     Fade in + scale from bottom-right
Chat Window:     Slide up + fade in (300ms)
Messages:        Fade in individually (200ms each)
Typing Dots:     Bounce with staggered delays
```

### Hover Animations

```
Chat Button:     Scale 110%, shadow glow (300ms)
Quick Replies:   Scale 105%, opacity change (200ms)
Send Button:     Scale 105%, shadow grow (200ms)
```

### Active Animations

```
Online Dot:      Pulse continuously (2s loop)
Typing Dots:     Bounce continuously (1.5s loop)
Messages:        Slide in from left/right
```

---

## 11. 📱 Responsive Behavior

### Desktop (>768px)

```
┌──────────────────────────────────────┐
│                                 ┌───┐│
│                                 │ 🗨 ││
│                                 └───┘│
│                                      │
│                           [Chat     │
│                            Window]  │
│                                      │
└──────────────────────────────────────┘

Width: 384px fixed
Height: 600px max
Position: Bottom-right (24px margins)
```

### Mobile (<768px)

```
┌──────────────────────────────────────┐
│                                 ┌───┐│
│                                 │ 🗨 ││
│                                 └───┘│
│                                      │
│ ┌──────────────��─────────────────┐  │
│ │                                │  │
│ │     [Full-width Chat Window]   │  │
│ │                                │  │
│ └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘

Width: calc(100vw - 48px)
Height: calc(100vh - 128px)
Margins: 24px all sides
```

---

## 12. 🎨 Message Content Formatting

### Emoji Usage

```
Headers:        🎯 🔬 👥 🤝 📚 ℹ️ ⚖️ 💰 🌍 🏙️
Bullets:        ✅ • ➕ ✓
Sections:       Numbers (1️⃣ 2️⃣ 3️⃣)
Highlights:     💡 (tips), 🌟 (important)
```

### Text Structure

```
Header:         UPPERCASE with emoji
Body:           Bullet points, paragraphs
Lists:          Numbered or bulleted
Highlights:     Bold for emphasis
Tips:           💡 prefix
```

### Example Formatted Response

```
┌──────────────────────────────────────┐
│ 🎯 OUR MISSION:                      │
│                                      │
│ Mobilizing Subjugated Knowledges... │
│                                      │
│ 📋 OUR GOALS:                        │
│ • Give voice to marginalized...      │
│ • Develop culturally responsive...   │
│ • Conduct multilingual research...   │
│ • Train student researchers...       │
│ • Foster social justice...           │
│                                      │
│ 💡 We mobilize voices for change!    │
└──────────────────────────────────────┘
```

---

## 13. 🌐 Bilingual Consistency

### Language Switching

```
User selects language in header → MSK Chat responds in that language
English selected → All responses in English
French selected → All responses in French
```

### Visual Consistency Across Languages

```
EN:  Research Hubs  →  [Same Button Style]  →  FR: Pôles de recherche
EN:  Our Mission    →  [Same Button Style]  →  FR: Notre mission
EN:  Get Involved   →  [Same Button Style]  →  FR: Participer
EN:  Team & Partners → [Same Button Style]  →  FR: Équipe & Partenaires
```

All visual elements remain identical:
- Colors
- Sizes
- Spacing
- Icons
- Animations

Only text content changes!

---

## 14. 🎯 Key Visual Principles

### 1. **High Contrast**
- Black text on white backgrounds
- White text on dark red backgrounds
- Always WCAG AAA compliant

### 2. **Visual Hierarchy**
- Headers in uppercase with emojis
- Body text in sentence case
- Tips highlighted with 💡
- Structured formatting (bullets, numbers)

### 3. **Professional Polish**
- Gradient effects for depth
- Subtle shadows for elevation
- Smooth animations (not jarring)
- Consistent spacing

### 4. **Brand Alignment**
- Dark red as primary accent
- Black for authority
- White for clarity
- Matches website theme perfectly

### 5. **User-Friendly**
- Large touch targets (44×44px min)
- Clear button states
- Obvious interactions
- Helpful visual feedback

---

## 15. 🎨 Complete Color Usage Map

### Header
- Background: `linear-gradient(to right, #8B0000, #6B0000)`
- Text: `#FFFFFF`
- Avatar Circle: `rgba(255, 255, 255, 0.2)`
- AI Badge: `rgba(255, 255, 255, 0.2)`
- Status Dot: `#4ADE80`

### Messages Area
- Background: `linear-gradient(to bottom, #F9FAFB, #FFFFFF)`
- Bot Avatar: `linear-gradient(to bottom right, #8B0000, #6B0000)`
- User Avatar: `linear-gradient(to bottom right, #0A0A0A, #1A1A1A)`
- Bot Bubble: `#FFFFFF` with `border: 1px solid rgba(139, 0, 0, 0.1)`
- User Bubble: `linear-gradient(to bottom right, #8B0000, #6B0000)`

### Quick Replies
- Background: `rgba(139, 0, 0, 0.1)`
- Text: `#8B0000`
- Border: `1px solid rgba(139, 0, 0, 0.2)`
- Hover BG: `rgba(139, 0, 0, 0.2)`

### Input Section
- Border (top): `2px solid rgba(139, 0, 0, 0.1)`
- Input Border: `2px solid #E5E7EB`
- Input Focus Ring: `2px solid #8B0000`
- Send Button: `linear-gradient(to bottom right, #8B0000, #6B0000)`
- Send Hover: `linear-gradient(to bottom right, #A40000, #8B0000)`
- Footer Text: `#9CA3AF`

---

**This visual guide provides a complete reference for the MSK Chat design system!** 🎨✨

Use this as a reference when:
- Implementing the design
- Making design decisions
- Training team members
- Documenting features
- Ensuring consistency

---

**MSK Chat Version**: 3.0  
**Design System**: Black, White & Dark Red  
**Status**: Production Ready ✅
