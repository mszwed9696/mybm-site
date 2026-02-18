import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layout } from "@/components/layout/Layout";
import { PageMeta } from "@/components/seo/PageMeta";
import { industries } from "@/data/industryData";
import { blogPosts } from "@/data/blogData";
import { getToolsForSlug, getLogoUrl } from "@/data/toolLogos";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CountUpStat } from "@/components/ui/CountUpStat";
import { ROICalculator } from "@/components/ui/ROICalculator";
import { MarketingAuditChecklist } from "@/components/ui/MarketingAuditChecklist";
import {
    ArrowRight,
    ChevronDown,
    TrendingUp,
    MapPin,
    AlertTriangle,
    CheckCircle2,
    Zap,
    BookOpen,
} from "lucide-react";

/* ── FAQ Schema JSON-LD ── */
function FaqSchema({ items }: { items: { question: string; answer: string }[] }) {
    const ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.question,
            acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
    );
}

export default function IndustryPage() {
    const { slug } = useParams<{ slug: string }>();
    const industry = industries.find((i) => i.slug === slug);

    if (!industry) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
                        <Link to="/industries" className="text-[#af3e4d] font-medium">
                            ← View All Industries
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    // Related blog posts
    const relatedPosts = blogPosts.filter((p) =>
        p.industryTags.includes(industry.slug)
    ).slice(0, 3);

    return (
        <Layout>
            <PageMeta
                title={`${industry.title} Marketing | Mind Your Business Media`}
                description={industry.description}
                keywords={industry.seoKeywords?.join(", ")}
                canonicalPath={`/industries/${industry.slug}`}
            />

            {/* FAQ JSON-LD */}
            {industry.faqItems.length > 0 && <FaqSchema items={industry.faqItems} />}

            {/* ═══════════════════════ 1. HERO ═══════════════════════ */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                {/* Gradient orb background */}
                <div
                    className="absolute top-10 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] orb-float"
                    style={{
                        background: "radial-gradient(circle, hsl(352 48% 46% / 0.06) 0%, hsl(352 48% 46% / 0.02) 40%, transparent 70%)",
                        filter: "blur(60px)",
                        pointerEvents: "none",
                    }}
                />
                <div
                    className="absolute bottom-0 left-10 w-[300px] h-[300px] orb-float"
                    style={{
                        background: "radial-gradient(circle, hsl(206 19% 41% / 0.06) 0%, transparent 70%)",
                        filter: "blur(40px)",
                        pointerEvents: "none",
                        animationDelay: "3s",
                    }}
                />

                <div className="container-wide relative z-10">
                    <div className="max-w-3xl">
                        {/* Category badge */}
                        <AnimatedSection>
                            <span
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                                style={{
                                    color: "hsl(352 48% 46%)",
                                    background: "hsl(352 48% 46% / 0.06)",
                                    border: "1px solid hsl(352 48% 46% / 0.12)",
                                }}
                            >
                                <Zap size={12} />
                                {industry.category}
                            </span>
                        </AnimatedSection>

                        {/* Headline */}
                        <AnimatedSection delay={0.1}>
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[0.95] mt-6"
                                style={{ color: "hsl(30 11% 4%)" }}
                            >
                                {industry.headline}
                            </h1>
                        </AnimatedSection>

                        {/* Description */}
                        <AnimatedSection delay={0.2}>
                            <p
                                className="text-lg md:text-xl leading-relaxed mt-6 max-w-2xl"
                                style={{ color: "hsl(206 19% 41%)" }}
                            >
                                {industry.description}
                            </p>
                        </AnimatedSection>

                        {/* CTA buttons */}
                        <AnimatedSection delay={0.3}>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <Link
                                    to="/free-audit"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.03] hover:shadow-lg"
                                    style={{
                                        background: "hsl(352 48% 46%)",
                                        boxShadow: "0 2px 12px hsl(352 48% 46% / 0.3)",
                                    }}
                                >
                                    {industry.ctaText}
                                    <ArrowRight size={16} />
                                </Link>
                                <Link
                                    to="/industries"
                                    className="btn-ghost text-sm"
                                >
                                    View All Industries
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Services pills */}
                        <AnimatedSection delay={0.4}>
                            <div className="flex flex-wrap gap-2 mt-8">
                                {industry.services.map((s) => (
                                    <span
                                        key={s}
                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            color: "hsl(30 11% 4%)",
                                            background: "hsl(30 11% 4% / 0.04)",
                                            border: "1px solid hsl(30 11% 4% / 0.08)",
                                        }}
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ 2. STATS COUNTER ═══════════════════ */}
            {industry.statistics.length > 0 && (
                <section
                    className="py-16 md:py-20"
                    style={{ background: "hsl(30 11% 4%)" }}
                >
                    <div className="container-wide">
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                            {industry.statistics.map((stat) => (
                                <StaggerItem key={stat.label} direction="up">
                                    <CountUpStat value={stat.value} label={stat.label} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>
            )}

            {/* ═══════════════ 3. PAIN POINTS → SOLUTIONS ═══════════════ */}
            <section className="py-20 md:py-28">
                <div className="container-wide">
                    <AnimatedSection>
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <h2 className="heading-section" style={{ color: "hsl(30 11% 4%)" }}>
                                We understand your challenges
                            </h2>
                            <p className="text-body-lg mt-4" style={{ color: "hsl(206 19% 41%)" }}>
                                Every {industry.title.toLowerCase()} business faces these obstacles — and we've built targeted solutions for each one.
                            </p>
                        </div>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {industry.painPoints.map((pain, idx) => (
                            <StaggerItem key={pain} direction={idx % 2 === 0 ? "left" : "right"}>
                                <div
                                    className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        background: "hsl(var(--card))",
                                        border: "1px solid hsl(var(--border) / 0.5)",
                                        boxShadow: "0 1px 3px hsl(30 11% 4% / 0.03)",
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 mt-0.5"
                                            style={{ background: "hsl(352 48% 46% / 0.08)" }}
                                        >
                                            <AlertTriangle size={16} style={{ color: "hsl(352 48% 46%)" }} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold" style={{ color: "hsl(30 11% 4%)" }}>
                                                {pain}
                                            </p>
                                            <div className="flex items-center gap-1.5 mt-2">
                                                <CheckCircle2 size={13} style={{ color: "hsl(142 70% 38%)" }} />
                                                <span className="text-xs font-medium" style={{ color: "hsl(142 70% 38%)" }}>
                                                    We solve this
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ═══════════════ 4. ROI CALCULATOR ═══════════════ */}
            <section className="py-20 md:py-28" style={{ background: "hsl(30 11% 4%)" }}>
                <div className="container-content">
                    <AnimatedSection>
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span
                                className="text-xs font-semibold uppercase tracking-[0.2em]"
                                style={{ color: "hsl(352 48% 46%)" }}
                            >
                                Interactive Tool
                            </span>
                            <h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] mt-3"
                                style={{ color: "hsl(197 24% 94%)" }}
                            >
                                See your potential ROI
                            </h2>
                            <p className="text-base mt-3" style={{ color: "hsl(197 24% 94% / 0.5)" }}>
                                Adjust the slider to estimate what targeted marketing could deliver for your {industry.title.toLowerCase()} business.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.15}>
                        <ROICalculator industryTitle={industry.title} />
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════ 5. INDUSTRY TRENDS ═══════════════ */}
            {industry.industryTrends.length > 0 && (
                <section className="py-20 md:py-28">
                    <div className="container-wide">
                        <AnimatedSection>
                            <div className="flex items-center gap-2 mb-3">
                                <TrendingUp size={18} style={{ color: "hsl(352 48% 46%)" }} />
                                <span
                                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                                    style={{ color: "hsl(352 48% 46%)" }}
                                >
                                    Industry Trends
                                </span>
                            </div>
                            <h2 className="heading-section mb-10" style={{ color: "hsl(30 11% 4%)" }}>
                                What's changing in {industry.title.toLowerCase()}
                            </h2>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {industry.industryTrends.map((trend, idx) => (
                                <StaggerItem key={idx} direction="up">
                                    <div
                                        className="rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1"
                                        style={{
                                            background: "hsl(var(--card))",
                                            border: "1px solid hsl(var(--border) / 0.5)",
                                            borderImage: `linear-gradient(135deg, hsl(352 48% 46% / 0.15), hsl(206 19% 41% / 0.1)) 1`,
                                        }}
                                    >
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                                            style={{ background: "hsl(352 48% 46% / 0.06)" }}
                                        >
                                            <TrendingUp size={16} style={{ color: "hsl(352 48% 46%)" }} />
                                        </div>
                                        <p className="text-sm leading-relaxed" style={{ color: "hsl(30 11% 4%)" }}>
                                            {trend}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>
            )}

            {/* ═══════════════ 6. MARKETING AUDIT CHECKLIST ═══════════════ */}
            <section className="py-20 md:py-28" style={{ background: "hsl(30 11% 4%)" }}>
                <div className="container-content">
                    <AnimatedSection>
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span
                                className="text-xs font-semibold uppercase tracking-[0.2em]"
                                style={{ color: "hsl(352 48% 46%)" }}
                            >
                                Interactive Checklist
                            </span>
                            <h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] mt-3"
                                style={{ color: "hsl(197 24% 94%)" }}
                            >
                                How does your marketing stack up?
                            </h2>
                            <p className="text-base mt-3" style={{ color: "hsl(197 24% 94% / 0.5)" }}>
                                Check off what you already have. We'll show you where the gaps are.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.15}>
                        <MarketingAuditChecklist />
                    </AnimatedSection>
                </div>
            </section>

            {/* ═══════════════ 7. LONG DESCRIPTION ═══════════════ */}
            {industry.longDescription && (
                <section className="py-20 md:py-28">
                    <div className="container-content">
                        <AnimatedSection>
                            <div className="max-w-3xl mx-auto">
                                {/* Pull quote */}
                                <div
                                    className="pl-6 mb-10"
                                    style={{ borderLeft: "3px solid hsl(352 48% 46%)" }}
                                >
                                    <p
                                        className="text-xl md:text-2xl font-medium leading-relaxed italic"
                                        style={{ color: "hsl(30 11% 4%)" }}
                                    >
                                        "We provide what you need when you need it. No retainers, no long-term contracts, no BS — just straight solutions to your marketing problems."
                                    </p>
                                </div>

                                {/* Body */}
                                <p
                                    className="text-base md:text-lg leading-[1.8]"
                                    style={{ color: "hsl(206 19% 41%)" }}
                                >
                                    {industry.longDescription}
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            )}

            {/* ═══════════════ 7b. TOOLS INTEGRATIONS ═══════════════ */}
            {(() => {
                const industryTools = getToolsForSlug(industry.slug);
                return industryTools.length > 0 ? (
                    <section className="py-16 md:py-20" style={{ background: "hsl(var(--secondary))" }}>
                        <div className="container-content">
                            <AnimatedSection>
                                <div className="text-center max-w-2xl mx-auto mb-10">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "hsl(352 48% 46%)" }}>
                                        Integrations
                                    </p>
                                    <h2 className="heading-section" style={{ color: "hsl(30 11% 4%)" }}>
                                        Integrates with the tools you already use
                                    </h2>
                                    <p className="mt-3 text-base" style={{ color: "hsl(206 19% 41%)" }}>
                                        We work seamlessly with the platforms {industry.title.toLowerCase()} businesses rely on every day.
                                    </p>
                                </div>
                            </AnimatedSection>
                            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
                                {industryTools.map((tool) => (
                                    <StaggerItem key={tool.name} direction="up">
                                        <div
                                            className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all hover:shadow-md"
                                            style={{
                                                background: "white",
                                                border: "1px solid hsl(30 11% 4% / 0.06)",
                                            }}
                                        >
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-white">
                                                <img
                                                    src={getLogoUrl(tool.domain, 64)}
                                                    alt={tool.name}
                                                    className="w-8 h-8 object-contain"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        const target = e.currentTarget;
                                                        target.style.display = "none";
                                                        const parent = target.parentElement;
                                                        if (parent && !parent.querySelector("span")) {
                                                            const span = document.createElement("span");
                                                            span.textContent = tool.name.charAt(0);
                                                            span.style.cssText = "font-weight:800;font-size:18px;color:#af3e4d";
                                                            parent.appendChild(span);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-center" style={{ color: "hsl(30 11% 4%)" }}>
                                                {tool.name}
                                            </span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </section>
                ) : null;
            })()}

            {/* ═══════════════ 8. FAQ ACCORDION ═══════════════ */}
            {industry.faqItems.length > 0 && (
                <section className="py-20 md:py-28" style={{ background: "hsl(var(--secondary))" }}>
                    <div className="container-content">
                        <AnimatedSection>
                            <div className="text-center max-w-2xl mx-auto mb-12">
                                <h2 className="heading-section" style={{ color: "hsl(30 11% 4%)" }}>
                                    Frequently asked questions
                                </h2>
                            </div>
                        </AnimatedSection>

                        <div className="max-w-3xl mx-auto">
                            <StaggerContainer className="space-y-3">
                                {industry.faqItems.map((faq, idx) => (
                                    <StaggerItem key={idx} direction="up">
                                        <FaqAccordionItem question={faq.question} answer={faq.answer} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </section>
            )}

            {/* ═══════════════ 9. GEO FOCUS ═══════════════ */}
            {industry.geoTargets.length > 0 && (
                <section className="py-16 md:py-20">
                    <div className="container-wide">
                        <AnimatedSection>
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin size={16} style={{ color: "hsl(352 48% 46%)" }} />
                                <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "hsl(206 19% 41%)" }}>
                                    Serving Businesses Across the United States
                                </h3>
                            </div>
                            <p className="text-sm mb-6" style={{ color: "hsl(206 19% 41% / 0.7)" }}>
                                We serve {industry.title.toLowerCase()} businesses in all 50 states. Here are some of our top-performing markets:
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {industry.geoTargets.map((geo) => (
                                    <span
                                        key={geo}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                                        style={{
                                            color: "hsl(30 11% 4%)",
                                            background: "hsl(30 11% 4% / 0.03)",
                                            border: "1px solid hsl(30 11% 4% / 0.08)",
                                        }}
                                    >
                                        <MapPin size={10} style={{ color: "hsl(352 48% 46%)" }} />
                                        {geo}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs" style={{ color: "hsl(206 19% 41% / 0.5)" }}>
                                Don't see your area? We optimize by zip code and township nationwide — <a href="/free-audit" className="underline" style={{ color: "hsl(352 48% 46%)" }}>request a free audit</a> to get started.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>
            )}

            {/* ═══════════════ RELATED BLOG POSTS ═══════════════ */}
            {relatedPosts.length > 0 && (
                <section className="py-16 md:py-20" style={{ background: "hsl(var(--secondary))" }}>
                    <div className="container-wide">
                        <AnimatedSection>
                            <div className="flex items-center gap-2 mb-3">
                                <BookOpen size={16} style={{ color: "hsl(352 48% 46%)" }} />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "hsl(352 48% 46%)" }}>
                                    Related Reading
                                </span>
                            </div>
                            <h3 className="heading-subsection mb-8" style={{ color: "hsl(30 11% 4%)" }}>
                                Insights for {industry.title} businesses
                            </h3>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {relatedPosts.map((post) => (
                                <StaggerItem key={post.slug} direction="up">
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group h-full"
                                        style={{
                                            background: "hsl(var(--card))",
                                            border: "1px solid hsl(var(--border) / 0.5)",
                                        }}
                                    >
                                        <span className="text-xs font-medium" style={{ color: "hsl(352 48% 46%)" }}>
                                            {post.category}
                                        </span>
                                        <h4 className="text-base font-bold mt-2 group-hover:text-[#af3e4d] transition-colors" style={{ color: "hsl(30 11% 4%)" }}>
                                            {post.title}
                                        </h4>
                                        <p className="text-sm mt-2 line-clamp-2" style={{ color: "hsl(206 19% 41%)" }}>
                                            {post.excerpt}
                                        </p>
                                        <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold" style={{ color: "hsl(352 48% 46%)" }}>
                                            Read article <ArrowRight size={12} />
                                        </span>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>
            )}

            {/* ═══════════════ 10. FINAL CTA ═══════════════ */}
            <section
                className="py-20 md:py-28 relative overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, hsl(30 11% 4%) 0%, hsl(30 11% 8%) 50%, hsl(352 48% 20%) 100%)",
                }}
            >
                {/* Subtle glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
                    style={{
                        background: "radial-gradient(ellipse, hsl(352 48% 46% / 0.08) 0%, transparent 70%)",
                        filter: "blur(80px)",
                        pointerEvents: "none",
                    }}
                />

                <div className="container-content relative z-10">
                    <AnimatedSection>
                        <div
                            className="text-center rounded-3xl px-8 py-14 md:px-16 md:py-20"
                            style={{
                                background: "hsl(197 24% 94% / 0.03)",
                                border: "1px solid hsl(197 24% 94% / 0.08)",
                            }}
                        >
                            <h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em]"
                                style={{ color: "hsl(197 24% 94%)" }}
                            >
                                Ready to grow your {industry.title.toLowerCase()} business?
                            </h2>
                            <p
                                className="text-base md:text-lg mt-4 max-w-xl mx-auto"
                                style={{ color: "hsl(197 24% 94% / 0.6)" }}
                            >
                                No retainers. No long-term contracts. Just targeted marketing that delivers results for {industry.title.toLowerCase()} companies.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mt-8">
                                <Link
                                    to="/free-audit"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.03]"
                                    style={{
                                        background: "hsl(352 48% 46%)",
                                        boxShadow: "0 4px 20px hsl(352 48% 46% / 0.35)",
                                    }}
                                >
                                    {industry.ctaText}
                                    <ArrowRight size={16} />
                                </Link>
                                <a
                                    href="tel:+18563504733"
                                    className="btn-ghost-dark text-sm"
                                >
                                    Call (856) 350-4733
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </Layout>
    );
}

/* ═══════════════════════════════════════════
   FAQ Accordion Item with Motion height animation
   ═══════════════════════════════════════════ */
function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="rounded-xl overflow-hidden transition-colors"
            style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border) / 0.5)",
            }}
        >
            <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(!open)}
            >
                <span className="text-sm md:text-base font-semibold pr-4" style={{ color: "hsl(30 11% 4%)" }}>
                    {question}
                </span>
                <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{
                        color: "hsl(352 48% 46%)",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5">
                            <p className="text-sm leading-relaxed" style={{ color: "hsl(206 19% 41%)" }}>
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
