import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
import {
    Linkedin,
    Youtube,
    Facebook,
    Instagram,
    Music2,
    Check,
    ArrowRight,
    Users,
    TrendingUp,
    Heart,
    DollarSign,
    Zap,
} from "lucide-react";

const platforms = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        accent: "#0077b5",
        description:
            "Build professional authority and generate B2B leads through thought leadership content, strategic engagement, and audience growth.",
        features: [
            "Profile & page optimization",
            "Content calendar & posting",
            "Connection outreach campaigns",
            "Thought leadership articles",
            "Lead gen through DMs",
            "Analytics & growth reporting",
        ],
    },
    {
        name: "YouTube",
        icon: Youtube,
        accent: "#ff0000",
        description:
            "Grow your channel with optimized video content, SEO-driven titles, thumbnails, and a strategy that converts viewers into customers.",
        features: [
            "Channel optimization & branding",
            "Video SEO (titles, tags, descriptions)",
            "Thumbnail design strategy",
            "Content planning & scheduling",
            "Audience engagement management",
            "Analytics & watch time optimization",
        ],
    },
    {
        name: "Facebook",
        icon: Facebook,
        accent: "#1877f2",
        description:
            "Dominate the world's largest social platform with organic content, community building, and strategic engagement that drives trust.",
        features: [
            "Page setup & optimization",
            "Organic content strategy",
            "Community management",
            "Facebook Group growth",
            "Engagement & response management",
            "Performance analytics",
        ],
    },
    {
        name: "Instagram",
        icon: Instagram,
        accent: "#e1306c",
        description:
            "Build a visual brand presence with curated feeds, Reels strategy, Stories, and engagement tactics that convert followers to buyers.",
        features: [
            "Profile & bio optimization",
            "Content grid planning",
            "Reels & Stories strategy",
            "Hashtag research & optimization",
            "Engagement & DM management",
            "Growth tracking & analytics",
        ],
    },
    {
        name: "TikTok",
        icon: Music2,
        accent: "#00f2ea",
        description:
            "Capture attention with short-form video content, trending sounds, and viral hooks that build massive organic reach fast.",
        features: [
            "Account setup & optimization",
            "Short-form content strategy",
            "Trend identification & execution",
            "Hook & storytelling frameworks",
            "Cross-platform repurposing",
            "Analytics & viral tracking",
        ],
    },
];

const valueProps = [
    {
        icon: Heart,
        title: "Give-to-Ask Ratio",
        description:
            "We build trust through value-first content. By giving before asking, your audience warms up — resulting in higher conversion rates when you do promote.",
    },
    {
        icon: TrendingUp,
        title: "Higher-Converting Ads",
        description:
            "Audiences that already trust your brand click more, buy more, and cost less to convert through paid advertising. Organic growth supercharges ad performance.",
    },
    {
        icon: DollarSign,
        title: "Cheaper Cost Per Lead",
        description:
            "Strong organic presence and brand authority reduce your CPL across every paid channel. The warm audience effect means your ad dollars go further.",
    },
    {
        icon: Users,
        title: "Brand Authority & Trust",
        description:
            "Consistent, valuable content positions you as the expert in your space. When prospects are ready to buy, you're the obvious choice.",
    },
];

export default function PlatformPricingPage() {
    return (
        <Layout>
            <PageMeta
                title="Platform Pricing | Pay-Per-Usage Social Growth — MYB Media"
                description="Social media account growth across LinkedIn, YouTube, Facebook, Instagram, and TikTok. Pay per usage — no retainers. Build brand authority and reduce your CPL."
                keywords="social media growth pricing, social media management pricing, LinkedIn growth, YouTube growth, TikTok marketing, pay per usage marketing"
                canonicalPath="/services/pricing"
            />
            <JsonLd
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Services", path: "/services" },
                    { name: "Platform Pricing", path: "/services/pricing" },
                ]}
            />

            {/* Hero */}
            <section className="pt-32 pb-16" style={{ backgroundColor: "#0a0908" }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                        style={{ backgroundColor: "#8b5cf620", color: "#8b5cf6" }}
                    >
                        <Zap size={14} />
                        Pay Per Usage
                    </div>
                    <h1
                        className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                        style={{ color: "#fff" }}
                    >
                        Social media growth.{" "}
                        <span style={{ color: "#8b5cf6" }}>No retainers.</span>
                    </h1>
                    <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: "#9ca3af" }}>
                        Grow your brand across LinkedIn, YouTube, Facebook, Instagram, and
                        TikTok with our pay-per-usage model. Build authority, earn trust,
                        and create a warm audience that makes every ad dollar work harder.
                    </p>
                    <a
                        href="/free-audit"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105"
                        style={{ backgroundColor: "#8b5cf6" }}
                    >
                        Get Custom Pricing
                        <ArrowRight size={18} />
                    </a>
                </div>
            </section>

            {/* Why Social Growth Matters */}
            <section className="py-16" style={{ backgroundColor: "#111" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p
                            className="text-sm font-bold uppercase tracking-widest mb-3"
                            style={{ color: "#8b5cf6" }}
                        >
                            The Growth Flywheel
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-black mb-4"
                            style={{ color: "#fff" }}
                        >
                            Why organic growth changes everything
                        </h2>
                        <p className="text-base max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
                            A strong give-to-ask ratio builds trust. Trust builds authority.
                            Authority makes your paid ads convert higher and cost less.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valueProps.map((vp) => (
                            <div
                                key={vp.title}
                                className="rounded-2xl p-6 transition-all hover:scale-[1.02]"
                                style={{
                                    backgroundColor: "#141414",
                                    border: "1px solid #222",
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: "#8b5cf620" }}
                                >
                                    <vp.icon size={22} style={{ color: "#8b5cf6" }} />
                                </div>
                                <h3
                                    className="font-bold text-base mb-2"
                                    style={{ color: "#fff" }}
                                >
                                    {vp.title}
                                </h3>
                                <p className="text-sm" style={{ color: "#9ca3af" }}>
                                    {vp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Cards */}
            <section className="py-16" style={{ backgroundColor: "#0d0d0d" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p
                            className="text-sm font-bold uppercase tracking-widest mb-3"
                            style={{ color: "#8b5cf6" }}
                        >
                            Platforms We Grow
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-black"
                            style={{ color: "#fff" }}
                        >
                            Choose your platforms
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {platforms.map((platform) => (
                            <div
                                key={platform.name}
                                className="rounded-2xl overflow-hidden transition-all hover:scale-[1.005]"
                                style={{
                                    backgroundColor: "#141414",
                                    border: `1px solid ${platform.accent}30`,
                                }}
                            >
                                <div className="p-8 md:p-10">
                                    <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                                        {/* Platform info */}
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div
                                                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                                    style={{ backgroundColor: `${platform.accent}20` }}
                                                >
                                                    <platform.icon
                                                        size={28}
                                                        style={{ color: platform.accent }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3
                                                        className="text-xl font-black"
                                                        style={{ color: "#fff" }}
                                                    >
                                                        {platform.name}
                                                    </h3>
                                                    <span
                                                        className="text-xs font-bold uppercase tracking-wider"
                                                        style={{ color: platform.accent }}
                                                    >
                                                        Pay Per Usage
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-sm" style={{ color: "#9ca3af" }}>
                                                {platform.description}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {platform.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center gap-3 p-3 rounded-lg"
                                                    style={{ backgroundColor: "#1a1a1a" }}
                                                >
                                                    <Check
                                                        size={16}
                                                        style={{ color: platform.accent }}
                                                        className="shrink-0"
                                                    />
                                                    <span
                                                        className="text-sm"
                                                        style={{ color: "#d1d5db" }}
                                                    >
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pricing note */}
                    <div
                        className="rounded-2xl p-8 mt-10 text-center"
                        style={{
                            backgroundColor: "#141414",
                            border: "1px solid #8b5cf630",
                        }}
                    >
                        <p
                            className="text-sm font-bold uppercase tracking-wider mb-2"
                            style={{ color: "#8b5cf6" }}
                        >
                            How Pricing Works
                        </p>
                        <h3
                            className="text-2xl font-black mb-3"
                            style={{ color: "#fff" }}
                        >
                            Pay only for what you use
                        </h3>
                        <p
                            className="text-base max-w-2xl mx-auto mb-6"
                            style={{ color: "#9ca3af" }}
                        >
                            No monthly retainers. No long-term contracts. Choose the
                            platforms you need, and pay based on actual usage —
                            content created, posts published, campaigns run. Scale up or
                            down anytime.
                        </p>
                        <a
                            href="/free-audit"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105"
                            style={{ backgroundColor: "#8b5cf6" }}
                        >
                            Get Your Custom Quote
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            <CTASection />
        </Layout>
    );
}
