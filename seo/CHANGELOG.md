# SEO Implementation Changelog

All changes target the goal of **10k qualified visitors/month + more leads** for the
ICP of **funded AI founders who want to look like the category leader**.

> Framer edits live in the project and go live only after you click **Publish** in Framer.

## Phase 11 — 2026-07-06 (PR #1) — Tribe-native content cluster (positioning-informed)

Owner supplied the **Positioning Master** doc. Key strategic shift: the existing cluster targets
generic "AI SaaS website design" terms, but the tribe searches in **its own confirmed native
language** — which is both unclaimed keyword space *and* what makes traffic qualified. Distilled the
doc into `seo/icp-positioning-brief.md` (tribe, enemy, native phrasing, triggers, offer ladder, avoid
list) as the lens for all future content.

Shipped **5 new blog posts** written from inside the tribe's 11pm thoughts, each funneling to
`/services/ai-website-design` + cal.com and cross-linked to the existing AI cluster:
- **why-your-ai-startup-looks-generic** — the enemy head-on ("we look like the 15th Claude clone")
- **vibe-coded-website-vs-designed** — "I can tell it looks like I vibe-coded it"
- **taste-is-the-moat-ai-startups** — the brand POV ("good enough isn't good enough in 2026")
- **launch-ready-website-ai-startup** — the canonical trigger ("four weeks until we go live") + the wedge
- **make-ai-startup-look-like-yc-company** — the aspiration ("million-dollar design team" look)

Language is drawn from CONFIRMED tribe phrasing; deliberately avoids agency-speak/pitch language
the tribe is allergic to. Blog count now ~85.

Future: weave established pillar/category-leader posts → these 5 (round 2 authority routing);
build the remaining trigger-driven topics listed in the brief (competitor-launch, pre-raise rebrand,
Framer-vs-Webflow-for-launch, design-partner-vs-hire).

## Phase 10 — 2026-07-06 (PR #1) — Route existing authority into AI money pages

Discovery: the site already has **80 blog posts** (a mature content engine) and **5
finished "score-yourself-out-of-20 → book a call" lead tools** (Checklist collection)
sitting in `draft` with nothing linking to them. Per direction, this phase routes link
equity from established, already-indexed posts into the new AI service money pages
(fastest ranking lever, no publishing needed). Added contextual in-body links (in the
closing CTA, alongside the existing cal.com link) — and a Related-reading link where one
existed — to:

- **→ /services/ai-product-design**: `ai-product-ux-design-guide` (+Related reading),
  `designing-for-ai-agents-ux`, `ai-saas-product-design-trends`
- **→ /services/ai-website-design**: `saas-hero-section-design`,
  `saas-landing-page-best-practices-2026`, `what-makes-a-good-saas-website`
- **→ /services/design-retainer**: `web-design-retainer-for-tech-companies`

Method: extracted each post's live HTML, inserted the link via scripted string-replace
(no hand-editing of live content), verified, and re-pushed. Body copy otherwise unchanged.

Future rounds (not yet done): migration posts → /services/webflow-website; more
Product-Design posts (designing-for-ai-errors, ai-onboarding-ux, conversational-ui,
generative-ui, ai-personalisation, ai-audit-interfaces) → /services/ai-product-design.

### Open lead-gen opportunity (needs owner action)
The 5 scorecard lead tools (onboarding, saas-landing-page, saas-homepage-audit,
saas-case-study-page, ai-tool-landing-page) are built and wired to cal.com but are in
`draft`. Publishing them + linking the matching posts into each is the single biggest
lead lever available and is a one-toggle owner decision.

## Phase 9 — 2026-07-06 (PR #1) — Copy-length fix (responsiveness)

The new service pages were wordier than the originals, so text overflowed the
template's fixed-size containers (H1, hero line, section headings, qualify bullets,
"Also included" chips, service-card paragraphs) — looking odd and breaking
responsiveness. Measured every field against the max length used by the four
original service pages (ai-mvp-cleanup, product-design, framer-website, web-design)
and trimmed all new pages to within those limits:
- **ai-website-design** (worst offender): H1 74→48, hero 140→98, section head 45→31,
  two qualify bullets, two service paragraphs, one chip — all now within caps.
- **design-retainer**: hero 141→116; five "Also included" chips rewritten from full
  sentences (34–36 chars) to tag-style labels (~20–24) matching the originals.
- **ai-product-design**: H1 57→43, section head 45→31, qualify bullet, two service
  paragraphs — all within caps.
- **webflow-website**: already within limits; unchanged.
- **/agencies** page: card description 207 chars (shorter than existing 281-char
  card); body is article-flow, no fixed container — unchanged.
Verified: every fixed-container field on all new pages is now ≤ the originals' max.

## Phase 8 — 2026-07-06 (PR #1)

### Funnel complete
All 8 new blog posts now link into a service money page (in-body + Related reading):
- Website-intent posts → `/services/ai-website-design`
- Pricing/agency posts → `/services/ai-website-design` + `/services/design-retainer`
- Agentic-UX post → `/services/ai-product-design`
Full path: homepage (schema) → blog cluster (8 interlinked posts) → 4 service pages
(`ai-website-design`, `design-retainer`, `webflow-website`, `ai-product-design`) + `/agencies`
commercial page → `/work` → book a call.

## Phase 7 — 2026-07-06 (PR #1)

### Live in the Framer project
- **`/services/ai-product-design`** — AI-specific product/UI-UX design money page (the existing
  product-design page is generic "tech companies"; this targets AI-product intent: trust patterns,
  agentic UX, MVP/feature design). 4 service pages now: ai-website-design, design-retainer,
  webflow-website, ai-product-design.
- **Funnel extended to the product side:** `agentic-ux-design-guide` now links to
  `/services/ai-product-design` in-body and in Related reading.

## Phase 6 — 2026-07-06 (PR #1)

### Live in the Framer project
- **`/services/webflow-website`** — new Webflow service page (parallels the existing Framer page;
  covers "why Webflow over WordPress", migrations, and real case studies).
- **`/agencies/best-design-agency-for-ai-startups`** — commercial roundup/"how to choose" page for
  the "best design agency for AI startups" intent. Links into both service pages and the blog cluster.
- **Funnel wired (blog → money pages):** the pillar (`ai-startup-website-design-guide`),
  `design-agency-for-ai-startups`, and `ai-saas-website-design-cost` now link to
  `/services/ai-website-design` and `/services/design-retainer` in-body and in Related reading, so
  high-intent readers flow toward the pages that book calls.

### Site map of what now interlinks
Homepage (schema) → blog cluster (8 posts, cross-linked) → `/services/ai-website-design` +
`/services/design-retainer` + `/services/webflow-website` → `/work`. The `/agencies` page and two
established posts (`ai-product-ux-design-guide`, `ux-design-agency-for-tech-companies`) feed authority in.

## Phase 5 — 2026-07-06 (PR #1)

### Live in the Framer project — two commercial service landing pages
Bottom-of-funnel money pages (higher lead intent than blog posts) filling real gaps in the
`/services/:slug` collection (which had web-design, framer-website, product-design, ai-mvp-cleanup
but nothing AI-specific or retainer-specific):
- **`/services/ai-website-design`** — "Website design for AI companies that want to look like the
  category leader." The dedicated commercial page for the core ICP term, with AI-specific services,
  qualify list, real case studies (Dualite, SATHI) and 6 FAQs.
- **`/services/design-retainer`** — "A monthly design retainer for AI and SaaS companies." The
  retainer was sold on the homepage with no landing page; now it has a full commercial page with
  pricing FAQs ($3k–$9k/mo) and case studies (Dualite, PixelFlow).

Both reuse the proven web-design/product-design template structure and real project imagery, so
they render correctly and match the site's design.

### Owner follow-ups for the new service pages
- Add nav / homepage-services links to `/services/ai-website-design` and `/services/design-retainer`
  (the services section is a component the MCP can't edit) so they get internal links + are easy to find.
- Set their SEO titles/descriptions in Framer (pattern is in `recommended-metadata.md`).

## Phase 4 — 2026-07-06 (PR #1)

### Live in the Framer project
- **Enriched homepage structured data** (`StructuredDataHome`, code file `heEHi2i`): added an
  `OfferCatalog` with the three services as priced `Offer`s (website $8k–$25k, retainer
  $3k–$9k/mo), `priceRange` on the business entity, and `offers` on each `Service`. This gives
  AI answer engines explicit pricing to cite for "how much does an AI website cost" style
  queries — exactly what the ICP asks AI tools. Repo copy updated for parity.

### Data point (Ahrefs)
- Domain Rating = **32** (free endpoint). The connected Ahrefs plan gates Site Explorer,
  Keywords Explorer, and GSC ("Insufficient plan"), so live keyword/traffic pulls aren't
  available here — use Google Search Console directly for query data. DR 32 confirms the
  strategy: long-tail commercial + AEO/GEO is winnable now; high-volume head terms are not yet.

### Owner fix — add a homepage `<h1>` (2 min, Framer UI)
The homepage currently has **no `<h1>`** (only an H2 + three H4s). The MCP can't set it safely
because the hero uses a Framer-bundled font the style API can't reference. In Framer: select the
statement "Design for AI companies that want to look like category leaders", and set its text
style's **Tag to H1** (keep the size/alignment as-is). Zero visual change, adds the missing H1.

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
