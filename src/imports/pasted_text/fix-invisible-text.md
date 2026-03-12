Fix Invisible Text Content

You are a frontend UI engineer and accessibility specialist.

The profile cards on the Members page display images and role tags, but the text content (names, titles, bios) is not visible.

The content exists but appears invisible due to font color and background contrast issues.

Step 1 — Diagnose Styling

Inspect the member card component and verify:

Text color

Background color

Theme inheritance

Global typography variables

Dark/light mode conflicts

Likely issue:

text-color: white
background: white or light gray
Step 2 — Apply Fix

Update typography styles to ensure readable contrast.

Member Card Text Colors

Set:

Name:
color: #111111

Title / Role:
color: #444444

Bio:
color: #555555
Background
card-background: #ffffff

Ensure minimum WCAG contrast ratio ≥ 4.5:1.

Step 3 — Check Global Typography Tokens

Verify global tokens such as:

--text-primary
--text-secondary
--text-muted

Ensure they are not set to white on light backgrounds.

Step 4 — Fix Theme Conflict

If dark mode tokens are applied incorrectly:

Ensure light mode uses:

--text-primary: #111
--text-secondary: #555

and not:

--text-primary: #ffffff
Step 5 — Validate Rendering

After applying the fix:

Confirm names are visible

Confirm titles and bios render

Test on:

desktop

mobile

dark mode

Ensure accessibility contrast compliance

Expected Result

Member cards should display:

[Profile Image]
Name
Title
Role Tags
Bio
Contact button

with fully visible readable text.

⚡ Quick Manual Fix (Try This Immediately)

In Figma Make:

Click the invisible text area

Check Text Color

Change it to:

#111111

or

#222222

It should instantly appear.

💡 One more thing I noticed in your screenshot

Your member card spacing is correct but the name field may be empty or hidden behind the image layer.

If the text still doesn't appear after color fix, the issue could be:

z-index / layer overlap

container height clipping

overflow hidden