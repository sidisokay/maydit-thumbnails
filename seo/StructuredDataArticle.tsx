// Framer Code Component — StructuredDataArticle
// DEPLOYED to the Studio Maydit Framer project (code file id: o57xbyg). NOT yet
// placed, because the Framer MCP cannot edit CMS collection templates. Placement is
// a one-time manual step (see seo/CHANGELOG.md → "Owner: place the Article schema").
//
// Drop ONE instance onto the /blog/:slug template (under the Desktop breakpoint).
// It reads the rendered page at runtime and emits BlogPosting JSON-LD (and, if you
// point it at your FAQ container, FAQPage JSON-LD) for EVERY blog post automatically
// — no per-post CMS binding required. Zero visual footprint.
//
// FAQ safety: FAQPage is emitted ONLY when `faqSelector` is set to the FAQ section's
// CSS selector. Left blank, FAQ schema stays off so body headings are never mistaken
// for questions.

import { useEffect, useState } from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = {
    siteUrl: string
    orgName: string
    authorName: string
    faqSelector: string
}

function text(el: Element | null | undefined): string {
    return (el?.textContent || "").replace(/\s+/g, " ").trim()
}

function build(props: Props): string | null {
    if (typeof document === "undefined") return null
    try {
        const { siteUrl, orgName, authorName, faqSelector } = props
        const base = (siteUrl || "").replace(/\/$/, "")

        const canonical =
            (document.querySelector('link[rel="canonical"]') as HTMLLinkElement)?.href ||
            (typeof location !== "undefined" ? location.href : base)

        const headline =
            text(document.querySelector("h1")) ||
            (document.querySelector('meta[property="og:title"]') as HTMLMetaElement)?.content ||
            document.title

        const description =
            (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content ||
            (document.querySelector('meta[property="og:description"]') as HTMLMetaElement)?.content ||
            ""

        const image =
            (document.querySelector('meta[property="og:image"]') as HTMLMetaElement)?.content ||
            (document.querySelector("article img, main img") as HTMLImageElement)?.src ||
            ""

        const datePublished =
            (document.querySelector('meta[property="article:published_time"]') as HTMLMetaElement)?.content ||
            (document.querySelector("time[datetime]") as HTMLTimeElement)?.getAttribute("datetime") ||
            undefined

        const graph: any[] = []

        const article: any = {
            "@type": "BlogPosting",
            "@id": canonical + "#article",
            headline: headline.slice(0, 110),
            description,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            url: canonical,
            inLanguage: "en",
            author: { "@type": "Organization", name: authorName || orgName, url: base + "/" },
            publisher: {
                "@type": "Organization",
                name: orgName,
                url: base + "/",
                "@id": base + "/#organization",
            },
        }
        if (image) article.image = image
        if (datePublished) {
            article.datePublished = datePublished
            article.dateModified = datePublished
        }
        graph.push(article)

        if (faqSelector && faqSelector.trim()) {
            const container = document.querySelector(faqSelector.trim())
            if (container) {
                const nodes = Array.from(container.querySelectorAll("h2, h3, h4"))
                const faqs: { q: string; a: string }[] = []
                nodes.forEach((h) => {
                    const q = text(h)
                    let a = ""
                    let sib = h.nextElementSibling
                    while (sib && !/^H[1-6]$/.test(sib.tagName)) {
                        const t = text(sib)
                        if (t) a += (a ? " " : "") + t
                        sib = sib.nextElementSibling
                    }
                    if (q && a) faqs.push({ q, a })
                })
                if (faqs.length) {
                    graph.push({
                        "@type": "FAQPage",
                        "@id": canonical + "#faq",
                        mainEntity: faqs.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
                        })),
                    })
                }
            }
        }

        return JSON.stringify({ "@context": "https://schema.org", "@graph": graph })
    } catch {
        return null
    }
}

export default function StructuredDataArticle(props: Props) {
    const [json, setJson] = useState<string | null>(null)
    useEffect(() => {
        const t = setTimeout(() => setJson(build(props)), 150)
        return () => clearTimeout(t)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.siteUrl, props.orgName, props.authorName, props.faqSelector])

    return (
        <div style={{ width: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
            {json ? (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
            ) : null}
        </div>
    )
}

StructuredDataArticle.defaultProps = {
    siteUrl: "https://studiomaydit.com",
    orgName: "Studio Maydit",
    authorName: "Studio Maydit",
    faqSelector: "",
}

addPropertyControls(StructuredDataArticle, {
    siteUrl: { type: ControlType.String, title: "Site URL" },
    orgName: { type: ControlType.String, title: "Org Name" },
    authorName: { type: ControlType.String, title: "Author" },
    faqSelector: {
        type: ControlType.String,
        title: "FAQ selector",
        placeholder: "e.g. .faq-section (leave blank to disable FAQ schema)",
    },
})
