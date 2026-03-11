import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageMeta } from "./PageMeta";
import { JsonLd } from "./JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import type { LucideIcon } from "lucide-react";

export interface SEOPageSection {
    heading: string;
    body: string;
    bullets?: string[];
    icon?: LucideIcon;
}

export interface SEOPageFAQ {
    question: string;
    answer: string;
}

export interface RelatedPage {
    href: string;
    label: string;
}

export interface SEOLandingPageProps {
    meta: {
        title: string;
        description: string;
        keywords: string;
        canonicalPath: string;
    };
    hero: {
        eyebrow: string;
        headline: string;
        headlineAccent: string;
        subtitle: string;
    };
    intro: {
        heading: string;
        body: string;
        bullets?: string[];
    };
    sections: SEOPageSection[];
    faqs: SEOPageFAQ[];
    relatedPages: RelatedPage[];
    ctaTitle?: string;
    ctaSubtitle?: string;
}

export function SEOLandingPage({
    meta,
    hero,
    intro,
    sections,
    faqs,
    relatedPages,
    ctaTitle,
    ctaSubtitle,
}: SEOLandingPageProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [meta.canonicalPath]);

    return (
        <Layout noPaddingTop>
            <PageMeta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
                canonicalPath={meta.canonicalPath}
            />
            <JsonLd type="FAQPage" faqs={faqs} />
            <JsonLd
                type="Service"
                serviceName={hero.headline + " " + hero.headlineAccent}
                serviceDescription={meta.description}
            />

            <PageHero
                label={hero.eyebrow}
                title={
                    <>
                        {hero.headline}{" "}
                        <span style={{ color: "#af3e4d" }}>{hero.headlineAccent}</span>
                    </>
                }
                description={hero.subtitle}
            />

            {/* Main Content Wrapper for Sweep-Over Effect */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419] min-h-screen">
                {/* Social Proof Bar */}
                <section className="py-16 relative border-t border-[rgba(255,255,255,0.05)]">
                    <div className="container-wide">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                            {[
                                { value: "3.5x", label: "Average ROAS" },
                                { value: "$50M+", label: "Revenue Generated" },
                                { value: "90-Day", label: "Results Timeline" },
                                { value: "100%", label: "Performance Aligned" },
                            ].map((metric) => (
                                <div key={metric.label} className="text-center">
                                    <p className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                                        {metric.value}
                                    </p>
                                    <p className="text-sm text-[rgba(244,244,245,0.5)] tracking-wide uppercase">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-16 md:py-24 bg-[#1a1a24]">
                    <div className="container-wide">
                        <div className="max-w-3xl mx-auto pl-4 pr-4">
                            <h2 className="text-3xl font-bold text-white mb-8">{intro.heading}</h2>
                            <p className="text-lg text-[rgba(244,244,245,0.8)] leading-relaxed mb-8">{intro.body}</p>
                            {intro.bullets && (
                                <ul className="space-y-4">
                                    {intro.bullets.map((bullet) => (
                                        <li key={bullet} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[#af3e4d] mt-1 flex-shrink-0" size={20} />
                                            <span className="text-[rgba(244,244,245,0.8)]">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                {sections.map((section, index) => (
                    <section
                        key={section.heading}
                        className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-[#141419]" : "bg-[#1a1a24]"}`}
                    >
                        <div className="container-wide">
                            <div className="max-w-3xl mx-auto pl-4 pr-4">
                                <h2 className="text-2xl font-bold text-white mb-6">{section.heading}</h2>
                                <div className="text-[rgba(244,244,245,0.8)] leading-relaxed mb-6 whitespace-pre-line">{section.body}</div>
                                {section.bullets && (
                                    <ul className="space-y-3">
                                        {section.bullets.map((bullet) => (
                                            <li key={bullet} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#af3e4d] mt-2.5 flex-shrink-0" />
                                                <span className="text-[rgba(244,244,245,0.8)]">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </section>
                ))}

                {/* FAQ Section */}
                {faqs.length > 0 && (
                    <section className="py-16 md:py-24 bg-[#141419]">
                        <div className="container-wide">
                            <div className="max-w-3xl mx-auto pl-4 pr-4">
                                <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {faqs.map((faq) => (
                                        <div key={faq.question} className="rounded-2xl bg-[#1a1a24] border border-[rgba(255,255,255,0.05)] p-8">
                                            <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                                            <p className="text-[rgba(244,244,245,0.8)] leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Related Pages / Internal Links */}
                {relatedPages.length > 0 && (
                    <section className="py-16 bg-[#1a1a24]">
                        <div className="container-wide">
                            <div className="max-w-3xl mx-auto pl-4 pr-4">
                                <h2 className="text-2xl font-bold text-white mb-8 text-center">Related Services</h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {relatedPages.map((page) => (
                                        <Link
                                            key={page.href}
                                            to={page.href}
                                            className="rounded-2xl bg-[#141419] border border-[rgba(255,255,255,0.05)] p-5 flex items-center justify-between group hover:border-[#af3e4d]/40 transition-colors"
                                        >
                                            <span className="text-sm font-medium text-white">{page.label}</span>
                                            <ArrowRight
                                                size={16}
                                                className="text-[rgba(244,244,245,0.5)] group-hover:text-[#af3e4d] transition-colors"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                <CTASection />
            </div>
        </Layout>
    );
}
