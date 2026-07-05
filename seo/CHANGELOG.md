# SEO Implementation Changelog

All changes target the goal of **10k qualified visitors/month + more leads** for the
ICP of **funded AI founders who want to look like the category leader**.

> Framer edits live in the project and go live only after you click **Publish** in Framer.

## Phase 2 — 2026-07-05 (this update, PR #1)

### Live in the Framer project
- **3 more AI-commercial blog posts published** (5 total this engagement), filling the
  AI-startup commercial-intent gap and directly targeting lead-generating queries:
  - `/blog/ai-saas-website-design-cost` — "How Much Does It Cost to Design an AI SaaS Website in 2026?"
    (pricing queries convert hard and dominate AI answer engines)
  - `/blog/ai-startup-website-design-guide` — "AI Startup Website Design: The Complete Guide for 2026"
    (pillar / head-term page)
  - `/blog/branding-for-ai-startups` — "Branding for AI Startups: How to Build a Category-Leading Brand"
  - Each ~700–900 words, on-brand, with 5 AEO-optimised FAQ Q&As in the CMS `FAQs` field.
- **`StructuredDataArticle.tsx` created** (code file `o57xbyg`) — a DOM-reading
  `BlogPosting` (+ optional `FAQPage`) JSON-LD component for the blog template.

### Owner: place the Article schema (2-minute manual step)
The Framer MCP cannot edit CMS collection templates, so this one placement is manual:
1. In Framer, open the **`/blog/:slug`** page (the blog CMS template).
2. From Assets → Code, drag **StructuredDataArticle** onto the page, under the Desktop
   breakpoint (anywhere; it's invisible, 0×0).
3. Leave `FAQ selector` blank for now (BlogPosting only, always safe). Once you know the
   CSS class of the FAQ section container, paste it in to also emit `FAQPage` schema.
4. Publish. All ~77 posts get BlogPosting structured data at once.
5. Validate a post URL in Google's Rich Results Test.

## Phase 1 — 2026-07-05 (PR #1, initial)

### Live in the Framer project
- **Homepage structured data** — `StructuredDataHome.tsx` (code file `heEHi2i`), placed on
  the homepage (instance `PRdHljgvF`): Organization/ProfessionalService + WebSite +
  Service list + FAQPage.
- **2 AI-commercial blog posts:** `/blog/how-to-look-like-a-category-leader-ai-startup`,
  `/blog/design-agency-for-ai-startups`.

### Committed to the repo
- `seo/SEO-AUDIT-2026-07.md`, `seo/recommended-metadata.md`,
  `seo/StructuredDataHome.tsx`, `seo/StructuredDataArticle.tsx`.

### Prepared, not yet applied (Framer went read-only mid-session)
- **Internal linking** to form the topic cluster (pillar + supporting). Ready-to-paste
  blocks are in `seo/internal-linking-plan.md`. Re-enable edit access in Framer (open the
  project as editor with the MCP plugin running) and I can apply these automatically.

## Still owner-only (highest remaining impact)
1. **Publish** the Framer project so all of the above goes live.
2. Apply **meta titles/descriptions** from `seo/recommended-metadata.md` (can't be set via MCP).
3. Place the **Article schema** component (steps above).
4. Ensure **one semantic `<h1>`** per page (hero headline is an animated SVG).
5. **Google Search Console:** submit `sitemap.xml`, request indexing for the 5 new posts.

## New posts index (this engagement)
| Slug | Intent |
|---|---|
| how-to-look-like-a-category-leader-ai-startup | Bottom-funnel, brand/positioning |
| design-agency-for-ai-startups | Commercial — hiring intent |
| ai-saas-website-design-cost | Commercial — pricing intent |
| ai-startup-website-design-guide | Pillar / head term |
| branding-for-ai-startups | Mid-funnel — branding |
