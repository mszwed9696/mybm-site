/**
 * Real case study data extracted from MYBM Results Canva deck.
 * Each case study includes verified metrics, industry tags, and client context.
 */

export interface CaseStudy {
    id: string;
    title: string;
    industry: string;
    industryTag: string;
    challenge: string;
    solution: string;
    results: {
        headline: string;
        value: string;
        suffix?: string;
    };
    metrics: { label: string; value: string; description?: string }[];
    testimonial?: {
        quote: string;
        author: string;
        role?: string;
    };
    accent: string;
    icon: string; // Lucide icon name
}

export const caseStudies: CaseStudy[] = [
    {
        id: "coaching-business",
        title: "Brand New Coaching Business to $344K Revenue",
        industry: "Coaching & Consulting",
        industryTag: "coaching",
        challenge:
            "A brand new coaching business with zero clients, no audience, and no proven funnel needed to generate revenue fast — without burning through capital on untested strategies.",
        solution:
            "We built a high-converting webinar sales funnel, launched targeted Meta ad campaigns with just $5,000 in ad spend, and implemented an automated follow-up system to nurture and close leads.",
        results: {
            headline: "Total Revenue Generated",
            value: "344,592",
            suffix: "",
        },
        metrics: [
            { label: "Ad Spend", value: "$5,000", description: "Total investment" },
            { label: "ROAS", value: "7.4x", description: "Return on ad spend" },
            {
                label: "MRR",
                value: "$28,716",
                description: "Monthly recurring revenue",
            },
            {
                label: "New Clients",
                value: "16",
                description: "Coaching clients in 2 months",
            },
        ],
        testimonial: {
            quote:
                "I went from zero clients to a full coaching roster in under 60 days. The webinar funnel they built converts like crazy.",
            author: "Coaching Client",
            role: "Business Coach",
        },
        accent: "#10b981",
        icon: "GraduationCap",
    },
    {
        id: "high-end-pipeline",
        title: "$1.24M Pipeline in Opportunity Value",
        industry: "Real Estate & Services",
        industryTag: "real-estate",
        challenge:
            "A service-based business needed to fill their pipeline with high-value opportunities but was relying on referrals and inconsistent outreach with no predictable lead flow.",
        solution:
            "We deployed a multi-channel outbound and inbound strategy combining Meta ads, landing page funnels, and CRM automation to capture, nurture, and close high-ticket leads.",
        results: {
            headline: "Pipeline Value",
            value: "1.24",
            suffix: "M",
        },
        metrics: [
            {
                label: "Growth",
                value: "+719.9%",
                description: "Pipeline growth rate",
            },
            {
                label: "Funnel Revenue",
                value: "$56.85K",
                description: "30-day funnel value",
            },
            {
                label: "Won Deals",
                value: "$127.9K",
                description: "Closed revenue",
            },
            {
                label: "Proposals",
                value: "8",
                description: "Accepted in 5 days ($3.5K–$26K each)",
            },
        ],
        accent: "#3b82f6",
        icon: "TrendingUp",
    },
    {
        id: "ai-saas-platform",
        title: "Contractor Launches AI SaaS — $4,269 MRR",
        industry: "SaaS & Technology",
        industryTag: "saas",
        challenge:
            "A 47-year-old contractor wanted to transition from his 9-to-5 into tech entrepreneurship but had no experience building or marketing a software product.",
        solution:
            "We helped build and launch an AI-powered SaaS platform, created the go-to-market strategy, and ran targeted campaigns to acquire early subscribers — enabling him to go full-time.",
        results: {
            headline: "Monthly Recurring Revenue",
            value: "4,269",
            suffix: "",
        },
        metrics: [
            {
                label: "Outcome",
                value: "Full-Time",
                description: "Quit 9-to-5 job",
            },
            {
                label: "Platform",
                value: "AI SaaS",
                description: "Built from scratch",
            },
            {
                label: "Timeline",
                value: "90 Days",
                description: "Launch to revenue",
            },
            {
                label: "MRR",
                value: "$4,269",
                description: "Recurring monthly income",
            },
        ],
        accent: "#8b5cf6",
        icon: "Bot",
    },
    {
        id: "meta-ads-optimization",
        title: "Cost Per Lead Slashed 69% on Meta Ads",
        industry: "Paid Advertising",
        industryTag: "advertising",
        challenge:
            "A business running Meta Ads was paying $74 per lead — far too expensive to scale profitably. Their targeting was broad, creative was stale, and tracking was broken.",
        solution:
            "We rebuilt their campaign structure, implemented advanced conversion tracking, refined audience targeting, and deployed fresh direct-response creative. The result was a dramatic CPL reduction.",
        results: {
            headline: "Cost Per Lead Reduction",
            value: "69",
            suffix: "%",
        },
        metrics: [
            { label: "CPL Before", value: "$74", description: "Previous cost/lead" },
            {
                label: "CPL After",
                value: "$23",
                description: "Optimized cost/lead",
            },
            {
                label: "Savings",
                value: "69%",
                description: "Cost reduction achieved",
            },
            {
                label: "Method",
                value: "Meta Ads",
                description: "Targeted strategy + tracking",
            },
        ],
        accent: "#ef4444",
        icon: "Target",
    },
    {
        id: "high-ticket-sales",
        title: "$300K+ Annual Sales with Systems & Automation",
        industry: "Home Services",
        industryTag: "home-services",
        challenge:
            "Multiple concrete coating businesses needed a reliable system for generating on-site consultations and converting estimates into booked jobs at scale.",
        solution:
            "We deployed automated lead-to-appointment pipelines, CRM workflows, and consistent follow-up sequences that kept the sales team booking consultations daily across multiple franchise locations.",
        results: {
            headline: "Annual Earnings",
            value: "300,000",
            suffix: "+",
        },
        metrics: [
            {
                label: "Revenue",
                value: "$300K+",
                description: "In a single year",
            },
            {
                label: "Activity",
                value: "Daily",
                description: "Consultations & estimates",
            },
            {
                label: "Clients",
                value: "Multiple",
                description: "Franchise locations",
            },
            {
                label: "Industry",
                value: "Concrete",
                description: "Epoxy & coatings",
            },
        ],
        accent: "#f59e0b",
        icon: "Hammer",
    },
    {
        id: "seasonal-revenue",
        title: "Off-Season Revenue: Holiday Lighting Bookings",
        industry: "Landscaping & Contractors",
        industryTag: "contractors",
        challenge:
            "A landscaping contractor's revenue dropped to near-zero during winter months with no strategy for generating off-season income.",
        solution:
            "We ran a database reactivation campaign targeting existing customers and local homeowners, promoting holiday lighting installation services to fill the winter schedule.",
        results: {
            headline: "Off-Season Strategy",
            value: "Fully Booked",
            suffix: "",
        },
        metrics: [
            {
                label: "Season",
                value: "Winter",
                description: "Previously zero revenue",
            },
            {
                label: "Service",
                value: "Holiday Lights",
                description: "New revenue stream",
            },
            {
                label: "Method",
                value: "DB Reactivation",
                description: "Existing customer outreach",
            },
            {
                label: "Result",
                value: "Booked Out",
                description: "Full winter schedule",
            },
        ],
        accent: "#06b6d4",
        icon: "Sun",
    },
];

export const caseStudyIndustryFilters = [
    { label: "All", value: "all" },
    { label: "Coaching", value: "coaching" },
    { label: "Real Estate", value: "real-estate" },
    { label: "SaaS", value: "saas" },
    { label: "Advertising", value: "advertising" },
    { label: "Home Services", value: "home-services" },
    { label: "Contractors", value: "contractors" },
];
