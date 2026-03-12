AI DEBUGGING PROMPT — PROFILE IMAGES NOT UPDATING

You are a senior frontend engineer and CMS debugging specialist.

Profile images are being updated in the CMS, but the website is not reflecting the changes.

Your task is to diagnose and permanently fix the issue.

🔍 STEP 1 — Diagnose Root Cause

Investigate the following possible causes:

1️⃣ Caching Issues

Browser cache

CDN cache (Cloudflare, Vercel, Netlify, etc.)

Server-side cache

Image optimization cache

Static site generation cache

2️⃣ Image Path Issues

Confirm images are linked dynamically from CMS

Confirm correct file path is used

Check for hardcoded image URLs

Ensure image field mapping is correct

3️⃣ Build / Deployment Issues

If using static generation (Next.js, Gatsby, etc.), confirm:

Rebuild triggered after image upload

ISR (Incremental Static Regeneration) settings

Cache invalidation configured properly

4️⃣ CMS Binding Issues

Confirm profile image field is properly connected

Ensure no fallback image overrides dynamic field

Confirm no default placeholder is forced in component

5️⃣ Database Sync Issues

Confirm image file is successfully stored

Confirm image ID matches profile record

Confirm correct environment (staging vs production)

🛠 STEP 2 — Implement Fix

Based on diagnosis, implement:

If Caching:

Invalidate CDN cache

Add cache-busting query parameter (?v=timestamp)

Reduce image cache TTL if necessary

If Static Site:

Trigger full rebuild

Ensure image URLs are dynamic

Configure ISR properly

If CMS Binding:

Rebind image component to dynamic image field

Remove fallback override logic

If Image Optimization:

Ensure image loader supports dynamic updates

Disable aggressive optimization if blocking updates

🧪 STEP 3 — Validation Checklist

After fix:

Upload new test image

Confirm it updates immediately

Test in:

Incognito window

Different browser

Mobile

Confirm no broken image links

Confirm accessibility:

Alt text present

Proper sizing

No layout shift

🔒 PREVENT FUTURE ISSUES

Implement:

Automatic cache invalidation on image upload

Dynamic image versioning

Clear fallback logic

Deployment webhook trigger if needed

📋 OUTPUT REQUIRED

Return:

Root cause identified

Fix applied

Whether cache invalidation was required

Whether rebuild was required

Confirmation image updates now reflect instantly