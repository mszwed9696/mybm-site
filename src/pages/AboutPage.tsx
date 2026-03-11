import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
import { Target, Zap, ShieldCheck, Users, Heart, TrendingUp, Eye, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

/* ── Company Stats ── */
const stats = [
    { value: "27+", label: "Industries served" },
    { value: "5x", label: "Average ROAS" },
    { value: "312%", label: "Avg. client ROI" },
    { value: "0", label: "Retainers required" },
];

/* ── R-Core Values ── */
const rCoreValues = [
    {
        icon: Target,
        title: "Results over retainers",
        description:
            "We don't charge you to keep us around. We charge based on the outcomes we deliver. If we're not generating revenue, you shouldn't be paying for marketing.",
    },
    {
        icon: Eye,
        title: "Real problems, real solutions",
        description:
            "We partner with businesses looking to solve actual problems — filling pipelines, reducing CPL, increasing ROAS. Not vanity metrics. Not impressions that don't convert.",
    },
    {
        icon: Lightbulb,
        title: "Trailblazing, not template-copying",
        description:
            "Every strategy is custom-built. We don't recycle the same playbook for every client. Your business is unique, and your marketing should be too.",
    },
    {
        icon: Heart,
        title: "Partnership over vendor relationships",
        description:
            "We embed into your business like an extension of your team. Your growth is our growth — that's why our model ties our success directly to your revenue.",
    },
];

/* ── Company Overview Values ── */
const companyValues = [
    {
        icon: Zap,
        title: "Results-Driven",
        description:
            "Only pay for what you need, when you need it. No long-term contracts, no hidden fees, no lock-ins.",
    },
    {
        icon: ShieldCheck,
        title: "Proven across 27+ industries",
        description:
            "Battle-tested strategies refined over thousands of campaigns — from contractors to e-commerce brands.",
    },
    {
        icon: Users,
        title: "Your team, extended",
        description:
            "We embed into your workflow — not the other way around. Think of us as your marketing department.",
    },
    {
        icon: TrendingUp,
        title: "Performance-aligned incentives",
        description:
            "We only win when you win. Our model ties our earnings directly to your results, so our goals are always aligned.",
    },
];

export default function AboutPage() {
    return (
        <Layout noPaddingTop>
            <PageMeta
                title="About Mind Your Business Media | Performance Marketing Agency"
                description="Meet Mind Your Business Media — a performance marketing agency with results-driven strategies, proven solutions, and results for 27+ industries."
                canonicalPath="/about"
            />
            <JsonLd
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                ]}
            />

            <PageHero
                label="Company Overview"
                title={
                    <>
                        Marketing that works as hard as{" "}
                        <span style={{ color: "#af3e4d" }}>you do</span>
                    </>
                }
                description="Mind Your Business Media is a performance marketing agency built on a simple idea: you shouldn't need a retainer to get world-class marketing. We deliver proven fast solutions and custom-coded options across every channel — measured by results, not hours."
            />

            {/* Main Content Wrapper for Sweep-Over Effect */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
                {/* Stats */}
                <section className="py-24" style={{ backgroundColor: "#141419" }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="text-center p-6 rounded-2xl transition-all hover:-translate-y-1 relative overflow-hidden glass-panel inner-glow card-3d bg-[#141419]/50"
                                >
                                    <div className="gradient-border-top" />
                                    <div className="relative z-10">
                                        <p
                                            className="text-3xl md:text-4xl font-black"
                                            style={{ color: "#af3e4d" }}
                                        >
                                            {s.value}
                                        </p>
                                        <p
                                            className="text-sm mt-1"
                                            style={{ color: "rgba(244,244,245,0.6)" }}
                                        >
                                            {s.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Values: What Sets Us Apart */}
                <section className="py-24" style={{ backgroundColor: "#1a1a24" }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <p
                                className="text-sm font-bold uppercase tracking-widest mb-3"
                                style={{ color: "#af3e4d" }}
                            >
                                What Sets Us Apart
                            </p>
                            <h2
                                className="text-3xl md:text-4xl font-black"
                                style={{ color: "#fff" }}
                            >
                                Built different — on purpose
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {companyValues.map((v) => (
                                <div
                                    key={v.title}
                                    className="p-8 rounded-2xl transition-all hover:-translate-y-1 relative overflow-hidden glass-panel inner-glow card-3d bg-[#141419]/50"
                                >
                                    <div className="gradient-border-top" />
                                    <div className="relative z-10">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                            style={{ backgroundColor: "rgba(175, 62, 77, 0.1)" }}
                                        >
                                            <v.icon size={22} style={{ color: "#af3e4d" }} />
                                        </div>
                                        <h3
                                            className="font-bold text-lg mb-3"
                                            style={{ color: "#fff" }}
                                        >
                                            {v.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,245,0.6)" }}>
                                            {v.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══ R-CORE VALUES ═══ */}
                <section id="values" className="py-24" style={{ backgroundColor: "#0C0C0F" }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
                                style={{ backgroundColor: "rgba(175, 62, 77, 0.1)", color: "#af3e4d" }}
                            >
                                R-Core Values
                            </div>
                            <h2
                                className="text-3xl md:text-4xl font-black mb-6"
                                style={{ color: "#fff" }}
                            >
                                Solve real problems. Skip the vanity metrics.
                            </h2>
                            <p
                                className="text-lg max-w-3xl mx-auto leading-relaxed"
                                style={{ color: "rgba(244,244,245,0.6)" }}
                            >
                                Our mission is to provide high-level marketing for businesses
                                that are looking to solve real problems — not just pay retainers
                                for impressions, clicks, and metrics that don't move the needle.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {rCoreValues.map((v, i) => (
                                <div
                                    key={v.title}
                                    className="rounded-2xl p-8 transition-all hover:-translate-y-1 relative overflow-hidden glass-panel inner-glow card-3d bg-[#141419]/50"
                                >
                                    <div className="gradient-border-top" />
                                    <div className="relative z-10 flex items-start gap-5">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: "rgba(175, 62, 77, 0.1)" }}
                                        >
                                            <v.icon size={22} style={{ color: "#af3e4d" }} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span
                                                    className="text-xs font-bold"
                                                    style={{ color: "rgba(175, 62, 77, 0.5)" }}
                                                >
                                                    0{i + 1}
                                                </span>
                                                <h3
                                                    className="font-bold text-lg"
                                                    style={{ color: "#fff" }}
                                                >
                                                    {v.title}
                                                </h3>
                                            </div>
                                            <p className="text-sm leading-relaxed" style={{ color: "rgba(244,244,245,0.6)" }}>
                                                {v.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTASection />
            </div>
        </Layout>
    );
}
