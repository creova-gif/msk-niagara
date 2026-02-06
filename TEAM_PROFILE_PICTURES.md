# MSK Niagara Team Profile Pictures Reference
## Updated January 2026

---

## Hub #1: Childhood & Growing Up

### Erika Alegria
- **Position:** PhD Student, Brock University
- **Email:** ea21pd@brocku.ca
- **Profile Picture:** `figma:asset/3e4d676df1e0c0b2f8fad10ba1c0d258f1036b17.png`
- **Usage Example:**
```tsx
import erikaAlegria from "figma:asset/3e4d676df1e0c0b2f8fad10ba1c0d258f1036b17.png";

<img src={erikaAlegria} alt="Erika Alegria" />
```

### Dr. Diane Farmer
- **Position:** Professor, University of Toronto
- **Email:** diane.farmer@utoronto.ca
- **Profile Picture:** `figma:asset/32627da26e09b9d3161271077350a5b2704ea170.png`
- **Usage Example:**
```tsx
import dianeFarmer from "figma:asset/32627da26e09b9d3161271077350a5b2704ea170.png";

<img src={dianeFarmer} alt="Dr. Diane Farmer" />
```

### Frederick Oppong
- **Position:** PhD Student, Brock University (Implementation Council Student Rep)
- **Email:** Zw23la@brocku.ca
- **Profile Picture:** `figma:asset/b32291fe73e7b1c05a02de213dc4e2a0df92a803.png`
- **Usage Example:**
```tsx
import frederickOppong from "figma:asset/b32291fe73e7b1c05a02de213dc4e2a0df92a803.png";

<img src={frederickOppong} alt="Frederick Oppong" />
```

---

## Image Details

### Erika Alegria Photo
- **Description:** Professional portrait with long brown hair, gray top, natural outdoor background
- **Style:** Professional, warm, outdoor setting
- **Orientation:** Portrait (vertical)

### Dr. Diane Farmer Photo
- **Description:** Casual outdoor portrait with gray hair, orange-framed glasses, red/burgundy jacket
- **Style:** Casual, approachable, outdoor setting (dock/waterfront)
- **Orientation:** Portrait (vertical)

### Frederick Oppong Photo
- **Description:** Professional portrait in tan/beige blazer, white shirt, office setting with bookshelves
- **Style:** Formal, professional, indoor office setting
- **Orientation:** Portrait (vertical)

---

## Implementation Notes

### For Website Integration

**MemberBios Page:**
```tsx
import erikaAlegria from "figma:asset/3e4d676df1e0c0b2f8fad10ba1c0d258f1036b17.png";
import dianeFarmer from "figma:asset/32627da26e09b9d3161271077350a5b2704ea170.png";
import frederickOppong from "figma:asset/b32291fe73e7b1c05a02de213dc4e2a0df92a803.png";

const hub1Team = [
  {
    name: "Erika Alegria",
    title: "PhD Student",
    organization: "Brock University",
    email: "ea21pd@brocku.ca",
    photo: erikaAlegria,
    hub: "Childhood & Growing Up"
  },
  {
    name: "Dr. Diane Farmer",
    title: "Professor",
    organization: "University of Toronto",
    email: "diane.farmer@utoronto.ca",
    photo: dianeFarmer,
    hub: "Childhood & Growing Up"
  },
  {
    name: "Frederick Oppong",
    title: "PhD Student, Implementation Council Student Rep",
    organization: "Brock University",
    email: "Zw23la@brocku.ca",
    photo: frederickOppong,
    hub: "Childhood & Growing Up"
  }
];
```

**Team Card Component Example:**
```tsx
<div className="bg-white rounded-lg overflow-hidden shadow-md">
  <img 
    src={member.photo} 
    alt={member.name}
    className="w-full h-64 object-cover"
  />
  <div className="p-6">
    <h3 className="font-bold text-xl text-primary">{member.name}</h3>
    <p className="text-gray-600">{member.title}</p>
    <p className="text-sm text-gray-500">{member.organization}</p>
    <a href={`mailto:${member.email}`} className="text-dark-red hover:underline">
      {member.email}
    </a>
  </div>
</div>
```

---

## Design Consistency

### Photo Styles Observed

**Professional Formal:**
- Frederick Oppong (office setting, blazer)

**Professional Casual:**
- Dr. Diane Farmer (outdoor, casual professional)
- Erika Alegria (outdoor, professional but relaxed)

### Recommendations for Additional Photos
- **Portrait orientation** preferred for team grids
- **Natural lighting** works well (2 of 3 are outdoor)
- **Mix of formal/casual** creates approachable yet professional feel
- **Clear face visibility** - all photos show subject clearly
- **Minimal backgrounds** or blurred backgrounds work well

---

## File Management

### Current Status
- ✅ 3 profile pictures uploaded and documented
- ✅ Hub #1 team members (partial roster)
- ⏳ Additional Hub #1 team photos pending (35 more members)
- ⏳ Hub #2 team photos (20 members)
- ⏳ Hub #3 team photos (23 members)

### Image Asset Pattern
All images use the `figma:asset/[hash].png` format:
- This is a virtual module scheme, NOT a file path
- Never prefix with `./`, `../`, or any directory path
- Correct: `import img from "figma:asset/abc123.png"`
- Incorrect: `import img from "../imports/figma:asset/abc123.png"`

---

## Accessibility Considerations

### Alt Text Guidelines
- Use full name: `alt="Erika Alegria"`
- For screen readers, include title if helpful: `alt="Dr. Diane Farmer, Professor at University of Toronto"`
- Avoid redundant "photo of" or "picture of" - screen readers announce it's an image

### Image Optimization
- Ensure photos are web-optimized (compressed but high quality)
- Consider lazy loading for team pages with many members
- Provide loading states for better UX

---

## Color Scheme Integration

When displaying these photos on the website, use the new MSK color palette:

**Container Backgrounds:**
- White (`#FFFFFF`) for clean, professional look
- Light gray (`#F8F9FA`) for subtle contrast
- Black (`#0A0A0A`) for dramatic, modern presentations

**Text Colors:**
- Black (`#0A0A0A`) for names (primary text)
- Dark gray (`#4A4A4A`) for titles/organizations (secondary text)
- Dark red (`#8B0000`) for links and accents

**Example Card with New Color Scheme:**
```tsx
<div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
  <img 
    src={member.photo} 
    alt={member.name}
    className="w-full h-64 object-cover"
  />
  <div className="p-6 border-t-4 border-dark-red">
    <h3 className="text-primary text-xl mb-2">{member.name}</h3>
    <p className="text-secondary mb-1">{member.title}</p>
    <p className="text-muted text-sm mb-3">{member.organization}</p>
    <a 
      href={`mailto:${member.email}`} 
      className="text-dark-red hover:text-dark-red/80 transition-colors text-sm"
    >
      Contact →
    </a>
  </div>
</div>
```

---

## Hub #2 & Hub #3 Photos

**Status:** Pending upload

**Hub #2 (Health Literacy) - 20 Members:**
- Dr. Livianna Tossutti
- Dr. Joanne Crawford (Hub Co-Leader)
- Mariam Khayinza (Hub Co-Leader)
- Marie Mouradikian (Bridges Niagara)
- Dr. Farah Ahmad (York University)
- Ijeoma Michael (Future Black Female)
- Mary Wiley (Community Potential)
- Nyarai Kapisavanhu (TOES Niagara)
- Dr. Wooksoo Kim (University at Buffalo)
- Plus 11 additional team members

**Hub #3 (Identity, Connections & Belonging) - 23 Members:**
- Dr. Jean Ntakirutimana (Hub Leader)
- Dr. Julie Ham (Project #2 Leader)
- Dr. Dane Di Cesare (Project #3 Leader)
- Emmanuel Mompongo (SOFIFRAN)
- Janet Madume (Welland Heritage Council)
- Reverend Dr. Daniel Tatarnic
- Plus 17 additional team members

---

## Data Integration Checklist

**For MemberBios.tsx:**
- [x] Hub #1: 3 photos added (Alegria, Farmer, Oppong)
- [ ] Hub #1: 7 additional documented members need photos
- [ ] Hub #1: 35 undocumented members need data + photos
- [ ] Hub #2: 20 members need photos
- [ ] Hub #3: 23 members need photos

**For Chatbot Enhancement:**
- [ ] Can reference team member photos in responses
- [ ] Visual gallery suggestions when discussing teams
- [ ] "Meet the Team" prompts with photo galleries

---

## Usage in Components

### Team Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {teamMembers.map((member) => (
    <TeamMemberCard key={member.email} member={member} />
  ))}
</div>
```

### Team Member Modal/Detail View
```tsx
<div className="flex gap-6">
  <img 
    src={member.photo} 
    alt={member.name}
    className="w-48 h-48 rounded-full object-cover"
  />
  <div>
    <h2 className="text-3xl font-bold text-primary mb-2">{member.name}</h2>
    <p className="text-xl text-secondary mb-4">{member.title}</p>
    {/* Additional details */}
  </div>
</div>
```

### Hub Leadership Showcase
```tsx
<section className="bg-gray-50 py-16">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Hub Leadership</h2>
    <div className="flex justify-center gap-12">
      {hubLeaders.map((leader) => (
        <div key={leader.email} className="text-center">
          <img 
            src={leader.photo} 
            alt={leader.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-dark-red"
          />
          <h3 className="font-bold">{leader.name}</h3>
          <p className="text-sm text-muted">{leader.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

**Last Updated:** January 2026  
**Status:** Active Documentation  
**Photos Available:** 3 of 88 total team members (~3%)  
**Next Update:** Additional team member photos
