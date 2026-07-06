# SEO Implementation Changelog

All changes target the goal of **10k qualified visitors/month + more leads** for the
ICP of **funded AI founders who want to look like the category leader**.

> Framer edits live in the project and go live only after you click **Publish** in Framer.

## Phase 3 — 2026-07-06 (PR #1)

### Live in the Framer project
- **3 more AI-commercial posts published** (8 total this engagement), each with FAQs and
  cluster internal links baked in:
  - `/blog/ai-saas-landing-page-design` — "AI SaaS Landing Page Design: Best Practices That Convert"
    (conversion / landing-page intent)
  - `/blog/website-design-after-raising-seed-series-a` — "Website Design After Raising a Seed or
    Series A" (captures funded founders at the exact moment they invest in design)
  - `/blog/agentic-ux-design-guide` — "Agentic UX: How to Design Interfaces for AI Agents"
    (product-design intent; links into the existing AI-UX cluster)
- **Authority links added** from two existing high-traffic posts into the new commercial cluster,
  passing ranking power toward pages that convert:
  - `ai-product-ux-design-guide` → agentic-ux, pillar, category-leader
  - `ux-design-agency-for-tech-companies` → design-agency-for-ai-startups, pillar, /work

### Not changed (documented)
- **Homepage visible FAQ**: rendered by an opaque `FaqAccordion` code component whose items
  aren't editable via MCP. The homepage FAQ **schema** (accurate, category-leader Q&As) still
  ships via `StructuredDataHome` and benefits AEO/GEO. To also earn Google FAQ rich results,
  align the visible homepage FAQ text to those questions in the Framer UI.

## Phase 2 — 2026-07-05 (PR #1)

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

### Internal linking — APPLIED ✅ (after edit access was restored)
- All 5 new posts now carry a **"Related reading"** block, forming the topic cluster:
  `ai-startup-website-design-guide` (pillar) links down to the other four; each supporting
  post links up to the pillar and to a sibling; the two hiring/pricing posts also link to
  `/work`. Reference blocks remain in `seo/internal-linking-plan.md`.
- Note: updating a post via the API re-validates the `Category` enum, so updates must
  resend `Category` as its case **ID** (`W5XP7wrYY`), not the display name.

## Still owner-only (highest remaining impact)
1. **Publish** the Framer project so all of the above goes live.
2. Apply **meta titles/descriptions** from `seo/recommended-metadata.md` (can't be set via MCP).
3. Place the **Article schema** component (steps above).
4. Ensure **one semantic `<h1>`** per page (hero headline is an animated SVG).
5. **Google Search Console:** submit `sitemap.xml`, request indexing for the 5 new posts.

## New posts index (this engagement — 8 posts)
| Slug | Intent |
|---|---|
| ai-startup-website-design-guide | **Pillar** / head term |
| how-to-look-like-a-category-leader-ai-startup | Bottom-funnel, brand/positioning |
| design-agency-for-ai-startups | Commercial — hiring intent |
| ai-saas-website-design-cost | Commercial — pricing intent |
| branding-for-ai-startups | Mid-funnel — branding |
| ai-saas-landing-page-design | Conversion — landing pages |
| website-design-after-raising-seed-series-a | Commercial — post-raise trigger |
| agentic-ux-design-guide | Product design — agentic UX |

All eight are internally linked as a cluster around the pillar; two established posts
(`ai-product-ux-design-guide`, `ux-design-agency-for-tech-companies`) now link in as well.
