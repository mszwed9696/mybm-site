import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
import {
    MapPin,
    Globe,
    Check,
    ArrowRight,
    ShieldCheck,
    Zap,
    BarChart3,
    Target,
    Search,
    Share2,
    Bot,
    Star,
    Megaphone,
} from "lucide-react";

/* ── Proprietary Blend Data ── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface BlendItem {
    name: string;
    description: string;
    icon: React.ComponentType<any>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface TierData {
    title: string;
    subtitle: string;
    description: string;
    accent: string;
    icon: React.ComponentType<any>;
    blend: BlendItem[];
    idealFor: string[];
    approach: string;
}

const localTier: TierData = {
    title: "Local Market Package",
    subtitle: "For service-area & brick-and-mortar businesses",
    description:
        "Designed for businesses that serve a geographic area — contractors, clinics, restaurants, salons, and local professionals. Our Local Blend focuses on dominating your service area with hyper-targeted strategies.",
    accent: "#10b981",
    icon: MapPin,
    blend: [
        {
            name: "Local SEO & Map Pack Domination",
            description:
                "Optimize your Google Business Profile, build local citations, and rank in the map pack for your service area. We make sure you show up when nearby customers search.",
            icon: Search,
        },
        {
            name: "Geo-Targeted Ad Campaigns",
            description:
                "Precision-targeted ads on Google and Meta that only reach people within your service area — no wasted spend on audiences you can't serve.",
            icon: Megaphone,
        },
        {
            name: "Reputation & Reviews Engine",
            description:
                "Automated review request flows, response management, and reputation monitoring that build the trust local buyers need before choosing a provider.",
            icon: Star,
        },
        {
            name: "Listings Syndication (60+ Directories)",
            description:
                "Consistent, accurate business info across Google, Yelp, Apple Maps, Facebook, and 60+ directories — eliminating the inconsistencies that kill local rankings.",
            icon: MapPin,
        },
        {
            name: "AI-Powered Lead Follow-Up",
            description:
                "Instant response to every inquiry with AI chatbots and automated follow-up sequences that book appointments before competitors can respond.",
            icon: Bot,
        },
    ],
    idealFor: [
        "HVAC, Plumbing, Electrical contractors",
        "Dentists, Chiropractors, Med Spas",
        "Real Estate Agents & Brokers",
        "Restaurants & Local Retail",
        "Landscapers & Home Services",
        "Law Firms & Accounting",
    ],
    approach:
        "Every dollar is spent reaching people within your service area. We combine map visibility, local ads, and reputation management to make you the obvious choice in your market.",
};

const ecommerceTier: TierData = {
    title: "E-Commerce Market Package",
    subtitle: "For online brands, DTC, & digital products",
    description:
        "Built for businesses selling online — e-commerce brands, SaaS, coaches, course creators, and supplement companies. Our E-Commerce Blend focuses on scaling revenue with data-driven funnels and direct-response creative.",
    accent: "#3b82f6",
    icon: Globe,
    blend: [
        {
            name: "Direct-Response Ad Campaigns",
            description:
                "High-converting Meta, Google, and TikTok campaigns built around proven direct-response frameworks — tested creative, split audiences, and ROAS-optimized bidding.",
            icon: Megaphone,
        },
        {
            name: "Sales Funnel Architecture",
            description:
                "Complete funnel builds — from lead magnets and webinar funnels to product launch sequences and upsell flows. Every step engineered for maximum conversion.",
            icon: Target,
        },
        {
            name: "Social Commerce & Content",
            description:
                "Platform-specific content strategies for Instagram, TikTok, and YouTube that build brand authority, drive organic traffic, and create a warm audience for retargeting.",
            icon: Share2,
        },
        {
            name: "Email & SMS Revenue Flows",
            description:
                "Automated email and SMS sequences — welcome series, cart abandonment, post-purchase upsells, and win-back campaigns that generate revenue on autopilot.",
            icon: Zap,
        },
        {
            name: "Conversion Rate Optimization",
            description:
                "A/B testing on landing pages, product pages, and checkout flows. We continuously optimize every touchpoint to squeeze more revenue from your existing traffic.",
            icon: BarChart3,
        },
    ],
    idealFor: [
        "E-Commerce & DTC Brands",
        "Supplement & Nutraceutical Companies",
        "SaaS & Digital Products",
        "Coaching & Course Creators",
        "Fitness & Wellness Brands",
        "Subscription Box Services",
    ],
    approach:
        "Every campaign is engineered for measurable revenue. We combine direct-response advertising with funnel optimization, email automation, and creative testing to scale your online business profitably.",
};

export default function ZeroRetainersPage() {
    return (
        <Layout>
            <PageMeta
                title="Two Tiers. Zero Retainers. | Local vs E-Commerce — MYB Media"
                description="Choose Local or E-Commerce packages — each with proprietary blends optimized for your market. No retainers, no lock-ins. See which package fits your business."
                keywords="no retainer marketing, local marketing package, e-commerce marketing, performance marketing tiers, MYB Media pricing"
                canonicalPath="/two-tiers"
            />
            <JsonLd
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Two Tiers. Zero Retainers.", path: "/two-tiers" },
                ]}
            />

            {/* Hero */}
            <section className="pt-32 pb-16" style={{ backgroundColor: "#0a0908" }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                        style={{ backgroundColor: "#af3e4d20", color: "#af3e4d" }}
                    >
                        <ShieldCheck size={14} />
                        Performance-Based
                    </div>
                    <h1
                        className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                        style={{ color: "#fff" }}
                    >
                        Two tiers.{" "}
                        <span style={{ color: "#af3e4d" }}>Zero retainers.</span>
                    </h1>
                    <p
                        className="text-lg max-w-3xl mx-auto mb-4"
                        style={{ color: "#9ca3af" }}
                    >
                        Whether you serve a local market or sell online, we've built
                        proprietary blends of services optimized for each —
                        so every dollar drives measurable results.
                    </p>
                    <p
                        className="text-base max-w-2xl mx-auto italic"
                        style={{ color: "#6b7280" }}
                    >
                        "We don't just make offers... we make you an offer you can't refuse."
                    </p>
                </div>
            </section>

            {/* Tier Comparison Header */}
            <section className="py-12" style={{ backgroundColor: "#111" }}>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {[localTier, ecommerceTier].map((tier) => (
                            <div
                                key={tier.title}
                                className="rounded-2xl p-8 text-center"
                                style={{
                                    backgroundColor: "#141414",
                                    border: `2px solid ${tier.accent}40`,
                                }}
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: `${tier.accent}20` }}
                                >
                                    <tier.icon size={32} style={{ color: tier.accent }} />
                                </div>
                                <h2
                                    className="text-2xl font-black mb-2"
                                    style={{ color: "#fff" }}
                                >
                                    {tier.title}
                                </h2>
                                <p
                                    className="text-sm font-semibold mb-3"
                                    style={{ color: tier.accent }}
                                >
                                    {tier.subtitle}
                                </p>
                                <p className="text-sm" style={{ color: "#9ca3af" }}>
                                    {tier.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tier Details */}
            {[localTier, ecommerceTier].map((tier, idx) => (
                <section
                    key={tier.title}
                    className="py-16"
                    style={{
                        backgroundColor: idx % 2 === 0 ? "#0d0d0d" : "#0a0908",
                    }}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
                            {/* Left: Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${tier.accent}20` }}
                                    >
                                        <tier.icon size={20} style={{ color: tier.accent }} />
                                    </div>
                                    <h2
                                        className="text-2xl font-black"
                                        style={{ color: "#fff" }}
                                    >
                                        {tier.title}
                                    </h2>
                                </div>

                                <p
                                    className="text-sm mb-6"
                                    style={{ color: "#9ca3af" }}
                                >
                                    {tier.approach}
                                </p>

                                <div>
                                    <p
                                        className="text-xs font-bold uppercase tracking-wider mb-3"
                                        style={{ color: tier.accent }}
                                    >
                                        Ideal For
                                    </p>
                                    <div className="space-y-2">
                                        {tier.idealFor.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3 text-sm"
                                                style={{ color: "#d1d5db" }}
                                            >
                                                <Check
                                                    size={14}
                                                    style={{ color: tier.accent }}
                                                    className="shrink-0"
                                                />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Proprietary Blend */}
                            <div>
                                <p
                                    className="text-xs font-bold uppercase tracking-wider mb-4"
                                    style={{ color: tier.accent }}
                                >
                                    Our Proprietary Blend
                                </p>
                                <div className="space-y-4">
                                    {tier.blend.map((item, i) => (
                                        <div
                                            key={item.name}
                                            className="rounded-xl p-5 transition-all hover:scale-[1.01]"
                                            style={{
                                                backgroundColor: "#141414",
                                                border: `1px solid ${tier.accent}20`,
                                            }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                                    style={{ backgroundColor: `${tier.accent}15` }}
                                                >
                                                    <item.icon
                                                        size={18}
                                                        style={{ color: tier.accent }}
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span
                                                            className="text-xs font-bold"
                                                            style={{ color: `${tier.accent}80` }}
                                                        >
                                                            0{i + 1}
                                                        </span>
                                                        <h4
                                                            className="font-bold text-sm"
                                                            style={{ color: "#fff" }}
                                                        >
                                                            {item.name}
                                                        </h4>
                                                    </div>
                                                    <p
                                                        className="text-xs leading-relaxed"
                                                        style={{ color: "#9ca3af" }}
                                                    >
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Why Two Tiers */}
            <section className="py-16" style={{ backgroundColor: "#111" }}>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <p
                        className="text-sm font-bold uppercase tracking-widest mb-3"
                        style={{ color: "#af3e4d" }}
                    >
                        Why This Matters
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-black mb-6"
                        style={{ color: "#fff" }}
                    >
                        Different markets need different strategies
                    </h2>
                    <div
                        className="rounded-2xl p-8 md:p-10 text-left space-y-6"
                        style={{
                            backgroundColor: "#141414",
                            border: "1px solid #222",
                        }}
                    >
                        <div>
                            <h3 className="font-bold mb-2" style={{ color: "#10b981" }}>
                                Local businesses need visibility in their service area.
                            </h3>
                            <p className="text-sm" style={{ color: "#9ca3af" }}>
                                A plumber in Dallas doesn't need TikTok viral content — they
                                need to show up in Google Maps when someone's pipe bursts at
                                2 AM. Our Local Blend prioritizes map rankings, geo-targeted
                                ads, and reputation management because that's what drives
                                calls, bookings, and revenue for service-area businesses.
                            </p>
                        </div>
                        <div
                            style={{ borderTop: "1px solid #222", paddingTop: "1.5rem" }}
                        >
                            <h3 className="font-bold mb-2" style={{ color: "#3b82f6" }}>
                                E-commerce brands need scalable systems that convert.
                            </h3>
                            <p className="text-sm" style={{ color: "#9ca3af" }}>
                                A supplement brand selling nationwide needs a completely
                                different playbook — direct-response creative, conversion-
                                optimized funnels, and automated email flows that generate
                                revenue 24/7. Our E-Commerce Blend is built around ROAS,
                                LTV, and profitable scale because that's what moves the
                                needle for online businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ backgroundColor: "#0a0908" }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2
                        className="text-3xl md:text-4xl font-black mb-4"
                        style={{ color: "#fff" }}
                    >
                        Not sure which tier fits?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: "#9ca3af" }}>
                        Book a free performance audit and we'll recommend the right
                        blend for your business — with zero obligation.
                    </p>
                    <a
                        href="/free-audit"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105"
                        style={{ backgroundColor: "#af3e4d" }}
                    >
                        Get Your Free Audit
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            <CTASection />
        </Layout>
    );
}
