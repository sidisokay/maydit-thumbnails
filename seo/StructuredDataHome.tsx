// Framer Code Component — StructuredDataHome
// DEPLOYED to the Studio Maydit Framer project (code file id: heEHi2i), placed on
// the homepage (instance PRdHljgvF). This file is the version-controlled copy.
//
// Renders JSON-LD structured data (schema.org) for the homepage:
//   1. Organization / ProfessionalService (the brand entity)
//   2. WebSite (with SearchAction)
//   3. Service list (what the studio sells)
//   4. FAQPage (high-intent questions AI founders actually ask)
// Framer statically renders this into the published HTML, so the JSON-LD is
// crawlable without JS — the core AEO/GEO signal. Zero visual footprint.

import { addPropertyControls, ControlType } from "framer"

type FaqItem = { q: string; a: string }

type Props = {
    orgName: string
    url: string
    logo: string
    image: string
    email: string
    description: string
    city: string
    country: string
    sameAs: string
    faqs: FaqItem[]
}

const DEFAULT_FAQS: FaqItem[] = [
    { q: "What does Studio Maydit do?", a: "Studio Maydit is a design studio for funded AI companies. We design and build websites, and design product UI/UX, so early-stage AI startups look and feel like the category leader — not like a demo. Work is led by a senior designer, never handed to a junior account team." },
    { q: "Who is Studio Maydit for?", a: "We work with funded, taste-obsessed AI founders and SaaS teams that are about to launch, have just raised, or are done settling for a template. If your product is ahead of your brand, we close that gap." },
    { q: "How much does it cost to design a website for an AI startup?", a: "Most fixed-scope AI startup website projects fall between roughly $8,000 and $25,000 depending on page count, custom animation and whether we also build it in Framer or Webflow. Teams that need ongoing design use a monthly retainer instead. We scope exact pricing on the first call." },
    { q: "How long does an AI SaaS website design project take?", a: "A focused marketing site typically ships in 3 to 6 weeks: strategy and messaging, design, then build and launch. Full product UI/UX work runs longer and is scoped per engagement." },
    { q: "Do you offer a monthly design retainer?", a: "Yes. The design retainer gives you senior product and web design on tap — no salary, no overhead, no hiring or onboarding. It suits AI teams that ship continuously and need consistent design taste week to week." },
    { q: "What makes a website look like a category leader?", a: "Clarity over decoration, a distinct visual identity, fast and accessible pages, real product proof, and messaging that names the category you want to own. We design the whole system — not just a prettier hero — so investors, users and competitors take you seriously." },
    { q: "Can you design our product, not just the marketing website?", a: "Yes. After the website lands we work inside your product — flows, dashboards, empty and error states, onboarding — so the experience holds up once users are inside, not just on the landing page." },
]

function graph(props: Props) {
    const { orgName, url, logo, image, email, description, city, country, sameAs, faqs } = props
    const base = url.replace(/\/$/, "")
    const social = (sameAs || "").split(/[\n,]+/).map((s) => s.trim()).filter(Boolean)
    const items = faqs && faqs.length ? faqs : DEFAULT_FAQS

    const org = {
        "@type": ["Organization", "ProfessionalService"],
        "@id": base + "/#organization",
        name: orgName,
        url: base + "/",
        legalName: orgName,
        description,
        email,
        logo: { "@type": "ImageObject", url: logo },
        image,
        slogan: "Design for AI companies that want to look like category leaders",
        knowsAbout: ["UI/UX design", "Website design", "Product design", "AI product design", "SaaS design", "Framer development", "Webflow development", "Design retainer"],
        areaServed: { "@type": "Place", name: "Worldwide" },
        address: { "@type": "PostalAddress", addressLocality: city, addressCountry: country },
        contactPoint: { "@type": "ContactPoint", email, contactType: "sales", areaServed: "Worldwide", availableLanguage: "English" },
        sameAs: social,
    }
    const website = {
        "@type": "WebSite",
        "@id": base + "/#website",
        url: base + "/",
        name: orgName,
        description,
        publisher: { "@id": base + "/#organization" },
        inLanguage: "en",
        potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: base + "/blog?q={search_term_string}" }, "query-input": "required name=search_term_string" },
    }
    const serviceNames = [
        { name: "Website Design & Development for AI Companies", desc: "Launch-ready marketing sites designed and built in Framer or Webflow for funded AI startups." },
        { name: "Web & Mobile App Product Design", desc: "UI/UX design for AI SaaS products — flows, dashboards, onboarding and edge-case states." },
        { name: "Monthly Design Retainer", desc: "Ongoing senior product and web design for AI teams, without hiring in-house." },
    ]
    const services = serviceNames.map((s) => ({
        "@type": "Service",
        name: s.name,
        description: s.desc,
        serviceType: s.name,
        provider: { "@id": base + "/#organization" },
        areaServed: { "@type": "Place", name: "Worldwide" },
        audience: { "@type": "Audience", audienceType: "AI founders and funded SaaS teams" },
    }))
    const faqPage = {
        "@type": "FAQPage",
        "@id": base + "/#faq",
        mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    }
    return { "@context": "https://schema.org", "@graph": [org, website, ...services, faqPage] }
}

export default function StructuredDataHome(props: Props) {
    const json = JSON.stringify(graph(props))
    return (
        <div style={{ width: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
        </div>
    )
}

StructuredDataHome.defaultProps = {
    orgName: "Studio Maydit",
    url: "https://studiomaydit.com",
    logo: "https://framerusercontent.com/images/YDkcBeshSxBqKqGMgUjHBRb7QU0.webp",
    image: "https://framerusercontent.com/images/YDkcBeshSxBqKqGMgUjHBRb7QU0.webp",
    email: "hello@studiomaydit.com",
    description: "Studio Maydit is a design studio for funded AI companies. We design and build websites and product UI/UX so early-stage AI startups look like the category leader.",
    city: "Hyderabad",
    country: "IN",
    sameAs: "https://www.linkedin.com/company/studio-maydit\nhttps://www.instagram.com/studiomaydit/\nhttps://www.framer.com/@studio-maydit/\nhttps://clutch.co/profile/studio-maydit",
    faqs: DEFAULT_FAQS,
}

addPropertyControls(StructuredDataHome, {
    orgName: { type: ControlType.String, title: "Org Name" },
    url: { type: ControlType.String, title: "Site URL" },
    logo: { type: ControlType.Image, title: "Logo" },
    image: { type: ControlType.Image, title: "Brand Image" },
    email: { type: ControlType.String, title: "Email" },
    description: { type: ControlType.String, title: "Description", displayTextArea: true },
    city: { type: ControlType.String, title: "City" },
    country: { type: ControlType.String, title: "Country (ISO)" },
    sameAs: { type: ControlType.String, title: "Social URLs", displayTextArea: true },
    faqs: {
        type: ControlType.Array,
        title: "FAQs",
        control: { type: ControlType.Object, controls: { q: { type: ControlType.String, title: "Question" }, a: { type: ControlType.String, title: "Answer", displayTextArea: true } } },
    },
})
