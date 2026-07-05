# Recommended SEO Titles & Meta Descriptions

Apply these in **Framer → each Page → Settings → SEO** (and on CMS templates, per collection item
or template default). Titles are kept ≤ ~60 chars, descriptions ≤ ~155 chars, keyword-front-loaded
and aligned to the AI-founder / category-leader ICP.

> The Framer MCP cannot set these fields, so they are provided here for one-time manual application.

## Core pages

| Page | Title tag | Meta description |
|---|---|---|
| `/` (Home) | Design Studio for AI Startups \| Studio Maydit | We design & build websites and product UI for funded AI startups that want to look like the category leader. Work with a senior designer. |
| `/work` | AI Startup Design Work & Case Studies \| Studio Maydit | See websites and product design we've built for funded AI and SaaS companies — with the outcomes they drove. |
| `/agencies` | Design & Web Guides for Tech Companies \| Studio Maydit | Guides on choosing agencies, migrations and web design for AI and SaaS teams that want to look like the leader. |
| `/resources` | Free Resources for AI & SaaS Founders \| Studio Maydit | Checklists and resources to help AI founders ship a category-leader website and product. |
| `/blog` | The Studio Maydit Blog: AI & SaaS Design | Practical design, UX and website guides for AI founders and SaaS teams. New posts weekly. |
| `/checklist-2` | SaaS Website Redesign Checklist \| Studio Maydit | The checklist AI and SaaS teams use to plan a website redesign that actually converts. |

## CMS templates (set a template default with dynamic fields where possible)

| Template | Title pattern | Description pattern |
|---|---|---|
| `/blog/:slug` | `{Blog Title}` \| Studio Maydit | `{description for thumbnail}` (fallback: first ~150 chars of Content) |
| `/services/:slug` | `{Service H1}` for AI Startups \| Studio Maydit | `{Hero body}` |
| `/work/:slug` | `{Project Title}` — AI Startup Design \| Studio Maydit | `{about content}` trimmed to ~150 chars |
| `/agencies/:slug` | `{Title}` \| Studio Maydit | `{description for thumbnail}` |

## Open Graph / Twitter (set per page if not inherited)

- `og:title` = the title tag above
- `og:description` = the meta description above
- `og:image` = a 1200×630 branded image (the CMS `Image`/thumbnail works for posts)
- `twitter:card` = `summary_large_image`

## Notes
- Keep exactly **one `<h1>`** per page containing the primary keyword.
- Avoid duplicate titles across the 72 blog posts — each should lead with its unique primary keyword.
- After applying, request indexing for the homepage and the two new posts in Google Search Console.
