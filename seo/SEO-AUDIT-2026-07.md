# Studio Maydit — SEO / AEO / GEO Audit & Implementation Log

**Site:** https://studiomaydit.com (Framer)
**Date:** 2026-07-05
**Goal:** Grow to ~10,000 qualified visitors/month and increase qualified leads.
**ICP:** Funded **AI founders** who want to look like the **category leader**.

---

## TL;DR

The site is in good shape on the things most agencies get wrong: the **positioning already
targets the ICP** ("Design for AI companies that want to look like category leaders"), and there
is a **large, working content engine** — 72 published blog posts plus programmatic CMS templates
for services, agencies, resources and case studies.

The gap is **technical/structured-data SEO and answer-engine (AEO/GEO) readiness**, not
messaging. Below is what was implemented in this pass, followed by the work that requires the
site owner (things the Framer MCP cannot change) and the roadmap to 10k.

---

## What was implemented in this pass (live in the Framer project)

> ⚠️ **These changes are in the Framer project and go live only after you click *Publish* in Framer.**

1. **Homepage structured data (JSON-LD)** — new code component `StructuredDataHome.tsx`
   (source mirrored in `seo/StructuredDataHome.tsx`), placed on the homepage. It emits a single
   `@graph` with:
   - `Organization` + `ProfessionalService` (name, description, email, logo, `sameAs` socials,
     `areaServed`, `knowsAbout`, `contactPoint`) — makes the brand a clean, machine-readable
     **entity**, which is the foundation of GEO (being cited by ChatGPT/Perplexity/AI Overviews).
   - `WebSite` with a `SearchAction`.
   - Three `Service` nodes (Website design & dev, Product design, Design retainer) with an
     `audience` of "AI founders and funded SaaS teams".
   - `FAQPage` with 7 high-intent questions AI founders actually ask.
   - This is the **single highest-leverage change** for an AI-founder ICP, because that audience
     leans heavily on AI answer engines, which parse JSON-LD directly.

2. **Two net-new, commercial-intent blog posts** filling a real gap (existing posts skew
   Webflow/migration/SaaS-generic; there was **no AI-startup-specific commercial content**):
   - `/blog/how-to-look-like-a-category-leader-ai-startup` — "How to Make Your AI Startup Look
     Like a Category Leader" (bottom-of-funnel, on-ICP, with 5 FAQ Q&As).
   - `/blog/design-agency-for-ai-startups` — "Design Agency for AI Startups: How to Choose the
     Right One in 2026" (high commercial intent — captures founders actively looking to hire, with
     5 FAQ Q&As).
   - Both populate the CMS **FAQs** field, so they are answer-engine friendly and eligible for
     FAQ rich results once FAQ schema is wired into the blog template (see owner tasks).

---

## Findings

### 1. Technical SEO
| Area | Status | Note |
|---|---|---|
| HTTPS / hosting | ✅ | Framer, optimized deployment. |
| Structured data (Organization/Website) | ✅ **(added this pass)** | Was absent; now on homepage. |
| Article/BlogPosting schema on 72 posts | ❌ | Not present. Biggest remaining rich-result gap. |
| FAQ schema | ⚠️ Partial | Added on homepage; blog `FAQs` field is not yet emitted as schema. |
| Meta titles / descriptions | ⚠️ Owner-only | Not editable via the MCP. See `recommended-metadata.md`. |
| Sitemap / robots | ✅ Auto (Framer) | Confirm `sitemap.xml` is submitted in Google Search Console. |
| Canonical tags | ✅ Auto (Framer) | Verify on paginated/duplicate routes. |

### 2. On-page
- **Hero H1 is an animated SVG wordmark** (`hero-roller`) — not crawlable text. The real text
  headline is "Website and product design for AI companies", but it uses a *font* style, not a
  `/Heading 1` style, so it may not render as a semantic `<h1>`. **Recommendation:** ensure exactly
  one true `<h1>` per page containing the primary keyword (see owner tasks).
- **H2 is strong and on-ICP:** "Design for AI companies that want to look like category leaders".
- **Images:** the homepage uses ~37 CSS `backgroundImage`s (no alt needed) but decorative
  `<Image>`/logo nodes should carry descriptive alt text where meaningful.

### 3. Content / topical authority
- 72 posts — strong. Clusters: Webflow/Framer/migrations, SaaS UX, and a growing **AI UX** cluster.
- **Gap (now partially filled):** AI-**startup-commercial** intent ("design agency for AI startups",
  "AI startup website design", "look like a category leader"). These convert the ICP; keep expanding
  this cluster (roadmap below).

### 4. AEO / GEO (answer & generative engines)
- The ICP disproportionately uses ChatGPT/Perplexity/Google AI Overviews to shortlist vendors.
- Levers: entity clarity (✅ Organization schema added), FAQ/HowTo schema, being listed in
  third-party comparison/roundup pages, and consistent NAP + `sameAs` across the web (Clutch,
  LinkedIn, Instagram, Framer profile — all wired into the schema).

### 5. Conversion (leads, not just traffic)
- Clear primary CTA ("Book an intro call" → cal.com/maydit/30min) and a fit-checker exist. Good.
- Recommendation: add a soft-conversion (checklist/lead magnet — the `/checklist-2` route already
  exists) inside high-traffic blog posts to capture visitors not ready to book.

---

## Owner-only tasks (cannot be done through the Framer MCP)

These are the highest-impact remaining items. They must be done in the Framer UI / Search Console.

1. **Set per-page SEO titles & meta descriptions** for every page and CMS template.
   Copy-paste-ready values are in **`seo/recommended-metadata.md`**.
2. **Wire Article + FAQ schema into the blog template** (`/blog/:slug`). Add a code component to
   the CMS detail page and bind: `headline`→Title, `datePublished`→Date, `image`→Image,
   `description`→description field, and `FAQPage`→the `FAQs` field. This gives all 72 posts
   rich-result eligibility at once. (The MCP cannot traverse/bind CMS template pages.)
3. **Ensure one semantic `<h1>` per page** (switch the hero text headline to a `Heading 1` style,
   or set the SVG wordmark's container to an `h1` with an accessible label).
4. **Google Search Console + Bing Webmaster Tools:** verify the domain, submit `sitemap.xml`,
   and monitor Core Web Vitals and coverage.
5. **Publish the site** in Framer so this pass's changes (homepage schema + 2 posts) go live.

---

## 90-day roadmap to 10k qualified visitors/month

**Phase 1 (wks 1–2): Technical foundation**
- Apply all meta titles/descriptions from `recommended-metadata.md`.
- Publish homepage structured data (done in-project) and add blog Article+FAQ schema.
- Verify GSC, submit sitemap, fix any coverage/CWV issues.

**Phase 2 (wks 3–8): AI-commercial content cluster** (targets the ICP + converts)
Prioritised net-new posts (2 already shipped ✅):
- ✅ How to make your AI startup look like a category leader
- ✅ Design agency for AI startups: how to choose
- AI startup website design: the complete guide
- How much does it cost to design an AI SaaS website?
- Branding for AI startups (positioning + visual identity)
- AI SaaS landing page examples that convert
- Product design for AI agents / agentic UX (commercial angle)
- Website design for AI startups after a seed/Series A raise
Internally link each to the homepage, `/work`, and the relevant service page with keyword-rich anchors.

**Phase 3 (wks 6–12): Authority & GEO**
- Get listed/updated on comparison + roundup pages ("best design agencies for startups/AI").
- Keep Clutch, LinkedIn, Instagram, Framer profile consistent (feeds `sameAs`).
- Publish 1–2 data-backed or opinion pieces per month to earn links and AI citations.
- Add lead magnets (checklist) into top posts to convert traffic → pipeline.

**Measurement:** track qualified sessions (target 10k/mo), assisted conversions to booked calls,
and share-of-voice in AI answer engines for "design agency for AI startups" and sibling queries.
