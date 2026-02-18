/**
 * Navigation data for the Mind Your Business Media mega-menu.
 * Mirrors Hibu's 5-section structure, adapted for Mind Your Business Media.
 */

/* ── Types ── */
export interface NavItem {
    label: string;
    href: string;
    description?: string;
}

export interface NavCategory {
    heading: string;
    items: NavItem[];
}

export interface NavSection {
    label: string;
    columns: NavCategory[];
    /** Optional highlighted / featured column (far-right) */
    featured?: {
        heading: string;
        title: string;
        description: string;
        href: string;
        image?: string;
    };
}

/* ══════════════════════════════════════════════════════
   1. Digital Marketing Services
   ══════════════════════════════════════════════════════ */
export const servicesMenu: NavSection = {
    label: "Digital Marketing Services",
    columns: [
        {
            heading: "Advertising",
            items: [
                {
                    label: "Ad Campaigns",
                    href: "/services/ad-campaigns",
                    description:
                        "Reach more customers with search, display, and social ads powered by data-driven strategy.",
                },
                {
                    label: "Social Media Marketing",
                    href: "/services/social-media",
                    description:
                        "Build brand awareness and engagement across Facebook, Instagram, TikTok, and LinkedIn.",
                },
                {
                    label: "Social Media Account Growth",
                    href: "/services/social-media-growth",
                    description:
                        "Grow your brand across LinkedIn, YouTube, Facebook, Instagram, and TikTok with pay-per-usage pricing.",
                },
            ],
        },
        {
            heading: "Organic & SEO",
            items: [
                {
                    label: "Organic Marketing (SEO)",
                    href: "/services/seo",
                    description:
                        "Dominate search results with fully-managed SEO services and content strategy.",
                },
                {
                    label: "Listings Management",
                    href: "/services/listings",
                    description:
                        "Keep your business info accurate and consistent across 60+ directories.",
                },
                {
                    label: "Reviews Management",
                    href: "/services/reviews",
                    description:
                        "Monitor, respond to, and grow your online reviews to build trust.",
                },
            ],
        },
        {
            heading: "Technology & Design",
            items: [
                {
                    label: "AI Solutions & Automations",
                    href: "/services/ai-solutions",
                    description:
                        "Automate lead follow-up, appointment booking, and marketing workflows with AI.",
                },
                {
                    label: "Website Design",
                    href: "/services/website-design",
                    description:
                        "Custom-coded and proven fast solutions for businesses of all sizes.",
                },
                {
                    label: "Platform Pricing",
                    href: "/services/pricing",
                    description:
                        "See how our two-tier pricing (Local & Online) works to meet your unique needs.",
                },
            ],
        },
    ],
    featured: {
        heading: "Our Approach",
        title: "Two Tiers. Zero Retainers.",
        description:
            "Choose Local, Online, or both — with proven fast solutions and custom coded options for every need.",
        href: "/two-tiers",
    },
};

/* ══════════════════════════════════════════════════════
   2. Industries
   ══════════════════════════════════════════════════════ */
export const industriesMenu: NavSection = {
    label: "Industries",
    columns: [
        {
            heading: "Home Services",
            items: [
                { label: "HVAC", href: "/industries/hvac" },
                { label: "Plumbers", href: "/industries/plumbers" },
                { label: "Electricians", href: "/industries/electricians" },
                { label: "Roofers", href: "/industries/roofers" },
                { label: "Contractors", href: "/industries/contractors" },
                { label: "Painters", href: "/industries/painters" },
                { label: "Landscapers", href: "/industries/landscapers" },
                { label: "Pest Control", href: "/industries/pest-control" },
                { label: "Cleaning Services", href: "/industries/cleaning-services" },
                { label: "Garage Door Services", href: "/industries/garage-door" },
            ],
        },
        {
            heading: "Medical & Wellness",
            items: [
                { label: "Dentists", href: "/industries/dentists" },
                { label: "Chiropractors", href: "/industries/chiropractors" },
                { label: "Med Spas", href: "/industries/med-spas" },
                { label: "Men's Health Clinics", href: "/industries/mens-health" },
                { label: "Medical Services", href: "/industries/medical-services" },
                { label: "Optical Services", href: "/industries/optical" },
                { label: "Veterinarians", href: "/industries/veterinarians" },
            ],
        },
        {
            heading: "Professional & Financial",
            items: [
                { label: "Real Estate Agents", href: "/industries/real-estate" },
                { label: "Life Insurance Agencies", href: "/industries/life-insurance" },
                { label: "Law Firms", href: "/industries/law-firms" },
                { label: "Accounting & Tax", href: "/industries/accounting" },
                { label: "Automotive Services", href: "/industries/auto" },
            ],
        },
        {
            heading: "E-Commerce & Retail",
            items: [
                { label: "E-Commerce", href: "/industries/e-commerce" },
                { label: "Supplement Brands", href: "/industries/supplements" },
                { label: "Fitness & Gyms", href: "/industries/fitness" },
                { label: "Pet Care & Supplies", href: "/industries/pet-care" },
                { label: "Franchise", href: "/industries/franchise" },
            ],
        },
    ],
};

/* ══════════════════════════════════════════════════════
   3. Resources
   ══════════════════════════════════════════════════════ */
export const resourcesMenu: NavSection = {
    label: "Resources",
    columns: [
        {
            heading: "Free Tools",
            items: [
                {
                    label: "Marketing Quiz",
                    href: "/resources/marketing-quiz",
                    description:
                        "See what's working and what's not with your current marketing.",
                },
                {
                    label: "Business Listing Scan",
                    href: "/resources/listing-scan",
                    description:
                        "Check how your online business info appears across the web.",
                },
                {
                    label: "Digital Marketing Score",
                    href: "/resources/marketing-score",
                    description:
                        "Test your website to see how you can convert more customers.",
                },
                {
                    label: "Social Advertising Calculator",
                    href: "/resources/social-calculator",
                    description:
                        "How many potential customers could you reach with social advertising?",
                },
            ],
        },
        {
            heading: "Learn",
            items: [
                {
                    label: "Mind Your Business Media Blog",
                    href: "/blog",
                    description:
                        "Industry-specific resources, tips, case studies, and more.",
                },
                {
                    label: "Case Studies",
                    href: "/case-studies",
                    description:
                        "Proven strategies and real results from businesses like yours.",
                },
            ],
        },
    ],
    featured: {
        heading: "Insights",
        title: "See Real Results",
        description:
            "Discover how businesses in your industry are growing with data-driven marketing.",
        href: "/case-studies",
    },
};

/* ══════════════════════════════════════════════════════
   4. Company
   ══════════════════════════════════════════════════════ */
export const companyMenu: NavSection = {
    label: "Company",
    columns: [
        {
            heading: "Who We Are",
            items: [
                {
                    label: "Company Overview",
                    href: "/about",
                    description:
                        "Mind Your Business Media helps businesses grow with proven, solution-driven marketing — no retainers, no lock-ins.",
                },
                {
                    label: "Our Core Values",
                    href: "/about#values",
                    description:
                        "What drives every decision we make for our clients.",
                },
            ],
        },
        {
            heading: "Connect",
            items: [
                {
                    label: "Contact Us",
                    href: "/contact",
                    description:
                        "Have a question? Connect with a Mind Your Business Media representative.",
                },
                {
                    label: "Client Reviews",
                    href: "/reviews",
                    description:
                        "Read what our clients say about their results with Mind Your Business Media.",
                },
            ],
        },
    ],
};

/* ══════════════════════════════════════════════════════
   5. Client Support & Login (right-aligned)
   ══════════════════════════════════════════════════════ */
export const supportMenu: NavSection = {
    label: "Client Support & Login",
    columns: [
        {
            heading: "",
            items: [
                {
                    label: "Contact Client Support",
                    href: "/support",
                    description:
                        "Our support team is ready to assist by phone, chat, or message.",
                },
                {
                    label: "Visit Your Dashboard",
                    href: "/login",
                    description:
                        "Log into your Mind Your Business Media Dashboard to see your results and more.",
                },
            ],
        },
    ],
};

/* ── Aggregate for the header ── */
export const mainNavSections: NavSection[] = [
    servicesMenu,
    industriesMenu,
    resourcesMenu,
    companyMenu,
];
