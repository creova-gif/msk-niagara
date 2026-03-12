You are a senior UI engineer, CMS data integrity auditor, and accessibility specialist.

Your task is to perform a complete audit of the Member Bios section to ensure all profiles display correctly, including profile images, text visibility, alignment, and consistent layout across all member cards.

The goal is to fix missing images, alignment problems, and text overflow issues.

STEP 1 — Audit Profile Images

Scan every member bio card and verify:

A profile image is present

The image is correctly connected to the CMS data field

The image loads properly (no broken links)

The image is not hidden by styling or layout issues

The image has accessible alt text

If an image is missing:

Apply fallback placeholder:

Profile Image Placeholder

Ensure placeholder styling matches existing member cards.

STEP 2 — Verify CMS Data Binding

Check that each member card is correctly connected to dynamic fields:

Name → member.name
Role → member.role
Bio → member.bio
Profile Image → member.image

Ensure no static placeholders override dynamic data.

STEP 3 — Fix Image Display

Standardize profile images:

shape: circle
aspect-ratio: 1:1
object-fit: cover
size: consistent across cards

Example:

width: 96px
height: 96px
border-radius: 50%

Ensure images are centered and not stretched.

STEP 4 — Fix Text Alignment

All text elements inside the member card must align consistently.

Layout should follow:

[Profile Image]
[Full Name]
[Role / Title]
[Tags]
[Bio]
[Contact Button]

Apply:

text-align: left
consistent padding
equal spacing

Spacing example:

image → name = 12px
name → role = 4px
role → tags = 8px
tags → bio = 8px
bio → button = 12px
STEP 5 — Fix Card Layout Consistency

Ensure all cards share the same structure:

card-width: equal
card-height: auto
padding: consistent
margin: consistent

Prevent issues like:

• Text overflowing outside card
• Uneven card heights
• Misaligned buttons
• Floating role tags

STEP 6 — Fix Invisible Text Issues

Check typography:

Name

color: #111111
font-weight: 600

Role

color: #444444

Bio

color: #555555
line-height: 1.5

Ensure contrast ratio ≥ 4.5:1

STEP 7 — Responsive Layout Check

Verify layout works on:

• Desktop
• Tablet
• Mobile

Ensure:

• Images scale properly
• Text does not overflow
• Cards remain aligned in grid

STEP 8 — Accessibility Validation

Confirm:

• Alt text exists for all profile images
• Proper heading hierarchy
• Keyboard navigation works
• Screen readers can identify names and roles

STEP 9 — Final Layout Standard

Each member card must display:

Profile Image
Name
Role / Title
Tags (Professor, Project Leader, etc.)
Short Bio
Contact Button

Everything must be aligned inside the card container with no overlapping elements.

REQUIRED OUTPUT

Return:

• Number of member profiles scanned
• Number of profiles missing images
• Profiles with broken image links
• Alignment issues detected
• Fixes applied