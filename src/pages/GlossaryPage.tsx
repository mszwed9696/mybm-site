import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { PageMeta, JsonLd } from "@/components/seo";
import { getGlossaryEntries } from "@/lib/api/contentItems";
import type { ContentPageData } from "@/lib/api/contentItems";
import { Loader2 } from "lucide-react";

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
        <Layout>
            <PageMeta
                title="Supplement Marketing Glossary | Mind Your Business Media"
                description="Comprehensive glossary of supplement marketing, e-commerce, and digital advertising terms. Learn the language of growth marketing for dietary supplement and nutraceutical brands."
                keywords="supplement marketing glossary, ecommerce marketing terms, digital advertising glossary, ROAS definition, CPA meaning, supplement brand marketing terms"
                canonicalPath="/glossary"
            />
            <JsonLd type="WebSite" />

            <main className="container-wide py-16 md:py-24">
                {/* Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                        Knowledge Base
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                        Supplement Marketing{" "}
                        <span className="text-accent">Glossary</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Definitions and explanations for the key terms, metrics, and
                        strategies used in supplement brand growth marketing.
                    </p>
                </div>

                {/* Letter Navigation */}
                {sortedLetters.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        {sortedLetters.map((letter) => (
                            <a
                                key={letter}
                                href={`#letter-${letter}`}
                                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-sm font-bold text-foreground hover:bg-accent hover:text-white transition-colors"
                            >
                                {letter}
                            </a>
                        ))}
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-accent mb-4" />
                        <p className="text-muted-foreground">Loading glossary entries...</p>
                    </div>
                )}

                {/* Empty State */}
                {!loading && entries.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-muted-foreground mb-4">
                            Glossary entries coming soon.
                        </p>
                        <p className="text-muted-foreground">
                            We're building out our supplement marketing knowledge base.
                        </p>
                    </div>
                )}

                {/* Entries by Letter */}
                {sortedLetters.map((letter) => (
                    <div key={letter} id={`letter-${letter}`} className="mb-12">
                        <h2 className="text-3xl font-bold text-foreground border-b border-border pb-3 mb-6">
                            {letter}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {grouped[letter].map((entry) => (
                                <Link
                                    key={entry.slug}
                                    to={`/glossary/${entry.slug}`}
                                    className="card-elevated p-5 hover:border-accent/50 transition-colors group"
                                >
                                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                        {entry.meta.title}
                                    </h3>
                                    {entry.meta.description && (
                                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                            {entry.meta.description}
                                        </p>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </Layout>
    );
}
