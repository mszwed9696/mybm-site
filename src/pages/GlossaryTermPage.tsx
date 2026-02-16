import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { PageMeta, JsonLd } from "@/components/seo";
import { getContentBySlug } from "@/lib/api/contentItems";
import type { ContentPageData } from "@/lib/api/contentItems";
import { injectLLMMetaTags, generateLLMMetaTags, buildEntitySummary } from "@/lib/seo/llmOptimization";
import { Loader2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlossaryTermPage() {
    const { slug } = useParams<{ slug: string }>();
    const [entry, setEntry] = useState<ContentPageData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        setLoading(true);
        getContentBySlug(slug).then((data) => {
            setEntry(data);
            setLoading(false);

            // Inject LLM meta tags for discoverability
            if (data) {
                const llmTags = generateLLMMetaTags({
                    summary: buildEntitySummary(
                        data.meta.title,
                        "supplement marketing term",
                        "e-commerce growth and digital advertising"
                    ),
                    contentType: "glossary_term",
                    entityType: "MarketingConcept",
                    relatedEntities: (data.relatedPages as Array<{ title?: string }>)
                        .map((r) => r.title)
                        .filter(Boolean) as string[],
                });
                injectLLMMetaTags(llmTags);
            }
        });
    }, [slug]);

    if (loading) {
        return (
            <Layout>
                <main className="container-wide py-24 text-center">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-accent mb-4" />
                    <p className="text-muted-foreground">Loading...</p>
                </main>
            </Layout>
        );
    }

    if (!entry) {
        return (
            <Layout>
                <main className="container-wide py-24 text-center">
                    <h1 className="text-3xl font-bold mb-4">Term Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        This glossary term doesn't exist yet.
                    </p>
                    <Link to="/glossary">
                        <Button variant="glow">Browse Glossary</Button>
                    </Link>
                </main>
            </Layout>
        );
    }

    const heroData = entry.hero as { eyebrow?: string; headline?: string; subtitle?: string } | undefined;
    const introData = entry.intro as { text?: string } | undefined;
    const faqItems = entry.faqs as Array<{ question: string; answer: string }>;

    return (
        <Layout>
            <PageMeta
                title={`${entry.meta.title} | Supplement Marketing Glossary`}
                description={entry.meta.description}
                keywords={entry.meta.keywords}
                canonicalPath={`/glossary/${entry.slug}`}
            />
            {entry.structuredData && (
                <JsonLd
                    type="FAQPage"
                    faqs={faqItems.map((f) => ({
                        question: f.question,
                        answer: f.answer,
                    }))}
                />
            )}

            <main className="container-wide py-16 md:py-24">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <Link
                        to="/glossary"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                    >
                        <ArrowLeft className="w-3 h-3" />
                        Back to Glossary
                    </Link>
                </nav>

                {/* Hero */}
                <div className="max-w-3xl mb-12">
                    {heroData?.eyebrow && (
                        <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                            {heroData.eyebrow}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                        {heroData?.headline || entry.meta.title}
                    </h1>
                    {heroData?.subtitle && (
                        <p className="text-xl text-muted-foreground">
                            {heroData.subtitle}
                        </p>
                    )}
                </div>

                {/* Intro */}
                {introData?.text && (
                    <div className="max-w-3xl mb-12">
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            {introData.text}
                        </p>
                    </div>
                )}

                {/* Sections */}
                {(entry.sections as Array<{ title?: string; content?: string }>)?.map(
                    (section, i) => (
                        <div key={i} className="max-w-3xl mb-10">
                            {section.title && (
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {section.title}
                                </h2>
                            )}
                            {section.content && (
                                <div className="text-foreground/80 leading-relaxed">
                                    {section.content}
                                </div>
                            )}
                        </div>
                    )
                )}

                {/* FAQs */}
                {faqItems.length > 0 && (
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {faqItems.map((faq, i) => (
                                <div key={i} className="card-elevated p-6">
                                    <h3 className="font-semibold text-foreground mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-foreground/80">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Related Terms */}
                {(entry.relatedPages as Array<{ slug?: string; title?: string }>)
                    .length > 0 && (
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold text-foreground mb-6">
                                Related Terms
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {(
                                    entry.relatedPages as Array<{ slug?: string; title?: string }>
                                ).map(
                                    (rel, i) =>
                                        rel.slug &&
                                        rel.title && (
                                            <Link
                                                key={i}
                                                to={`/glossary/${rel.slug}`}
                                                className="card-elevated p-4 hover:border-accent/50 transition-colors inline-flex items-center justify-between group"
                                            >
                                                <span className="font-medium group-hover:text-accent transition-colors">
                                                    {rel.title}
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                            </Link>
                                        )
                                )}
                            </div>
                        </div>
                    )}

                {/* CTA */}
                {entry.ctaTitle && (
                    <div className="max-w-3xl mt-16 text-center">
                        <div className="card-elevated p-10 bg-accent/5 border-accent/20">
                            <h2 className="text-2xl font-bold mb-3">{entry.ctaTitle}</h2>
                            {entry.ctaSubtitle && (
                                <p className="text-muted-foreground mb-6">
                                    {entry.ctaSubtitle}
                                </p>
                            )}
                            <Link to="/quiz">
                                <Button variant="glow" size="lg">
                                    Get Your Growth Plan
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </main>
        </Layout>
    );
}
