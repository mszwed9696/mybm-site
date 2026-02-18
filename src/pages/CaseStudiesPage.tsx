import { useState } from "react";
import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
import {
    caseStudies,
    caseStudyIndustryFilters,
} from "@/data/caseStudyData";
import {
    GraduationCap,
    TrendingUp,
    Bot,
    Target,
    Hammer,
    Sun,
    ArrowRight,
    BarChart3,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
    GraduationCap,
    TrendingUp,
    Bot,
    Target,
    Hammer,
    Sun,
};

export default function CaseStudiesPage() {
    const [activeFilter, setActiveFilter] = useState("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filtered =
        activeFilter === "all"
            ? caseStudies
            : caseStudies.filter((cs) => cs.industryTag === activeFilter);

    return (
        <Layout>
            <PageMeta
                title="Case Studies | Real Results from Real Clients — MYB Media"
                description="See how Mind Your Business Media drives real revenue for businesses. Case studies with verified metrics from coaching, real estate, SaaS, home services, and more."
                keywords="marketing case studies, performance marketing results, ROAS case study, lead generation results, MYB Media results"
                canonicalPath="/case-studies"
            />
            <JsonLd
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Case Studies", path: "/case-studies" },
                ]}
            />

            {/* Hero */}
            <section className="pt-32 pb-16" style={{ backgroundColor: "#0a0908" }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                        style={{ backgroundColor: "#af3e4d20", color: "#af3e4d" }}>
                        <BarChart3 size={14} />
                        Verified Results
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                        style={{ color: "#fff" }}>
                        Results that speak{" "}
                        <span style={{ color: "#af3e4d" }}>louder than promises</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
                        Real data from real clients. No vanity metrics — just revenue,
                        pipeline, and growth that changed businesses.
                    </p>
                </div>
            </section>

            {/* Headline Stats */}
            <section className="py-12" style={{ backgroundColor: "#111" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "$1.24M", label: "Pipeline Generated" },
                            { value: "7.4x", label: "Best ROAS" },
                            { value: "69%", label: "CPL Reduction" },
                            { value: "$344K", label: "Revenue in 2 Months" },
                        ].map((s) => (
                            <div key={s.label} className="text-center p-5 rounded-2xl"
                                style={{ backgroundColor: "#1a1a1a", border: "1px solid #222" }}>
                                <p className="text-3xl md:text-4xl font-black" style={{ color: "#af3e4d" }}>
                                    {s.value}
                                </p>
                                <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: "#6b7280" }}>
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8" style={{ backgroundColor: "#0d0d0d" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {caseStudyIndustryFilters.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setActiveFilter(f.value)}
                                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                                style={{
                                    backgroundColor:
                                        activeFilter === f.value ? "#af3e4d" : "#1a1a1a",
                                    color: activeFilter === f.value ? "#fff" : "#9ca3af",
                                    border: `1px solid ${activeFilter === f.value ? "#af3e4d" : "#333"}`,
                                }}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Cards */}
            <section className="py-16" style={{ backgroundColor: "#0d0d0d" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {filtered.map((cs) => {
                            const Icon = iconMap[cs.icon] || Target;
                            const isExpanded = expandedId === cs.id;

                            return (
                                <div
                                    key={cs.id}
                                    className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                                    style={{
                                        backgroundColor: "#141414",
                                        border: `1px solid ${cs.accent}30`,
                                    }}
                                >
                                    {/* Header */}
                                    <div className="p-8">
                                        <div className="flex items-start gap-4 mb-5">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: `${cs.accent}20` }}
                                            >
                                                <Icon size={22} style={{ color: cs.accent }} />
                                            </div>
                                            <div>
                                                <span
                                                    className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2"
                                                    style={{
                                                        backgroundColor: `${cs.accent}15`,
                                                        color: cs.accent,
                                                    }}
                                                >
                                                    {cs.industry}
                                                </span>
                                                <h3
                                                    className="text-xl font-bold leading-tight"
                                                    style={{ color: "#fff" }}
                                                >
                                                    {cs.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Headline metric */}
                                        <div
                                            className="rounded-xl p-5 mb-6 text-center"
                                            style={{ backgroundColor: `${cs.accent}10` }}
                                        >
                                            <p
                                                className="text-xs font-bold uppercase tracking-wider mb-1"
                                                style={{ color: cs.accent }}
                                            >
                                                {cs.results.headline}
                                            </p>
                                            <p
                                                className="text-4xl md:text-5xl font-black"
                                                style={{ color: "#fff" }}
                                            >
                                                {typeof cs.results.value === "string" &&
                                                    cs.results.value.match(/^\d/)
                                                    ? "$"
                                                    : ""}
                                                {cs.results.value}
                                                {cs.results.suffix}
                                            </p>
                                        </div>

                                        {/* Metrics grid */}
                                        <div className="grid grid-cols-2 gap-3 mb-5">
                                            {cs.metrics.map((m) => (
                                                <div
                                                    key={m.label}
                                                    className="rounded-lg p-3"
                                                    style={{
                                                        backgroundColor: "#1a1a1a",
                                                        border: "1px solid #222",
                                                    }}
                                                >
                                                    <p
                                                        className="text-lg font-black"
                                                        style={{ color: "#fff" }}
                                                    >
                                                        {m.value}
                                                    </p>
                                                    <p
                                                        className="text-[11px] uppercase tracking-wider"
                                                        style={{ color: "#6b7280" }}
                                                    >
                                                        {m.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Expand / Collapse */}
                                        <button
                                            onClick={() =>
                                                setExpandedId(isExpanded ? null : cs.id)
                                            }
                                            className="flex items-center gap-2 text-sm font-semibold transition-colors"
                                            style={{ color: cs.accent }}
                                        >
                                            {isExpanded ? "Hide Details" : "View Full Story"}
                                            {isExpanded ? (
                                                <ChevronUp size={16} />
                                            ) : (
                                                <ChevronDown size={16} />
                                            )}
                                        </button>
                                    </div>

                                    {/* Expanded details */}
                                    {isExpanded && (
                                        <div
                                            className="px-8 pb-8 pt-0 space-y-4"
                                            style={{
                                                borderTop: `1px solid ${cs.accent}20`,
                                            }}
                                        >
                                            <div>
                                                <p
                                                    className="text-xs font-bold uppercase tracking-wider mb-1"
                                                    style={{ color: "#ef4444" }}
                                                >
                                                    The Challenge
                                                </p>
                                                <p className="text-sm" style={{ color: "#9ca3af" }}>
                                                    {cs.challenge}
                                                </p>
                                            </div>
                                            <div>
                                                <p
                                                    className="text-xs font-bold uppercase tracking-wider mb-1"
                                                    style={{ color: "#10b981" }}
                                                >
                                                    Our Solution
                                                </p>
                                                <p className="text-sm" style={{ color: "#9ca3af" }}>
                                                    {cs.solution}
                                                </p>
                                            </div>
                                            {cs.testimonial && (
                                                <div
                                                    className="rounded-xl p-5 mt-4"
                                                    style={{
                                                        backgroundColor: `${cs.accent}08`,
                                                        borderLeft: `3px solid ${cs.accent}`,
                                                    }}
                                                >
                                                    <p
                                                        className="text-sm italic mb-2"
                                                        style={{ color: "#d1d5db" }}
                                                    >
                                                        "{cs.testimonial.quote}"
                                                    </p>
                                                    <p
                                                        className="text-xs font-semibold"
                                                        style={{ color: cs.accent }}
                                                    >
                                                        — {cs.testimonial.author}
                                                        {cs.testimonial.role &&
                                                            `, ${cs.testimonial.role}`}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20" style={{ backgroundColor: "#0a0908" }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2
                        className="text-3xl md:text-4xl font-black mb-4"
                        style={{ color: "#fff" }}
                    >
                        Want results like these?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: "#9ca3af" }}>
                        Get a free performance audit and see exactly where the revenue
                        opportunities are hiding in your business.
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
