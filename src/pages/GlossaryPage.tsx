import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { PageMeta, JsonLd } from "@/components/seo";
import { getGlossaryEntries } from "@/lib/api/contentItems";
import type { ContentPageData } from "@/lib/api/contentItems";
import { Loader2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

export default function GlossaryPage() {
    const [entries, setEntries] = useState<ContentPageData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGlossaryEntries().then((data) => {
            setEntries(data);
            setLoading(false);
        });
    }, []);

    // Group entries alphabetically
    const grouped = entries.reduce<Record<string, ContentPageData[]>>(
        (acc, entry) => {
            const letter = entry.meta.title.charAt(0).toUpperCase();
            if (!acc[letter]) acc[letter] = [];
            acc[letter].push(entry);
            return acc;
        },
        {}
    );

    const sortedLetters = Object.keys(grouped).sort();

    return (
        <Layout noPaddingTop>
            <PageMeta
                title="Supplement Marketing Glossary | Mind Your Business Media"
                description="Comprehensive glossary of supplement marketing, e-commerce, and digital advertising terms. Learn the language of growth marketing for dietary supplement and nutraceutical brands."
                keywords="supplement marketing glossary, ecommerce marketing terms, digital advertising glossary, ROAS definition, CPA meaning, supplement brand marketing terms"
                canonicalPath="/glossary"
            />
            <JsonLd type="WebSite" />

            <PageHero
                label="Knowledge Base"
                title={<>Supplement Marketing <span style={{ color: "#af3e4d" }}>Glossary</span></>}
                description="Definitions and explanations for the key terms, metrics, and strategies used in supplement brand growth marketing."
            />

            {/* Main Content Wrapper for Sweep-Over Effect */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419] min-h-screen">
                <main className="container-wide py-16 md:py-24">
                    {/* Letter Navigation */}
                    {sortedLetters.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-center mb-12">
                            {sortedLetters.map((letter) => (
                                <a
                                    key={letter}
                                    href={`#letter-${letter}`}
                                    className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-sm font-bold text-white hover:bg-[#af3e4d] hover:border-[#af3e4d] transition-colors"
                                >
                                    {letter}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-20">
                            <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#af3e4d] mb-4" />
                            <p className="text-[rgba(244,244,245,0.7)]">Loading glossary entries...</p>
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && entries.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-[rgba(244,244,245,0.7)] mb-4">
                                Glossary entries coming soon.
                            </p>
                            <p className="text-[rgba(244,244,245,0.7)]">
                                We're building out our supplement marketing knowledge base.
                            </p>
                        </div>
                    )}

                    {/* Entries by Letter */}
                    {sortedLetters.map((letter) => (
                        <div key={letter} id={`letter-${letter}`} className="mb-12">
                            <h2 className="text-3xl font-bold text-white border-b border-[rgba(255,255,255,0.1)] pb-3 mb-6">
                                {letter}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {grouped[letter].map((entry) => (
                                    <Link
                                        key={entry.slug}
                                        to={`/glossary/${entry.slug}`}
                                        className="p-5 rounded-2xl glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50 hover:border-[#af3e4d]/50 transition-colors group"
                                        style={{ borderColor: "rgba(255,255,255,0.05)" }}
                                    >
                                        <div className="gradient-border-top" />
                                        <h3 className="font-semibold text-white group-hover:text-[#af3e4d] transition-colors">
                                            {entry.meta.title}
                                        </h3>
                                        {entry.meta.description && (
                                            <p className="text-sm text-[rgba(244,244,245,0.6)] mt-2 line-clamp-2">
                                                {entry.meta.description}
                                            </p>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </Layout>
    );
}
