import { Layout } from "@/components/layout";
import { PageMeta } from "@/components/seo";
import { useParams, Link } from "react-router-dom";
import { getBlogPostBySlug, blogPosts } from "@/data/blogData";
import { ArrowRight, ArrowLeft, Clock, User, Calendar } from "lucide-react";
import NotFound from "./NotFound";

/* ── simple markdown-to-html (handles ##, **, -, |tables|, ❌/✅, 🚩) ── */
function renderMarkdown(md: string) {
    const lines = md.split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
        const line = lines[i];

        // blank line
        if (line.trim() === "") { i++; continue; }

        // headings
        if (line.startsWith("### ")) {
            elements.push(<h3 key={key++} className="text-lg font-bold mt-8 mb-3" style={{ color: "#0a0908" }}>{formatInline(line.slice(4))}</h3>);
            i++; continue;
        }
        if (line.startsWith("## ")) {
            elements.push(<h2 key={key++} className="text-xl font-bold mt-10 mb-4" style={{ color: "#0a0908" }}>{formatInline(line.slice(3))}</h2>);
            i++; continue;
        }

        // table row
        if (line.trim().startsWith("|")) {
            const rows: string[][] = [];
            while (i < lines.length && lines[i].trim().startsWith("|")) {
                const raw = lines[i].trim();
                if (raw.match(/^\|[\s-|]+\|$/)) { i++; continue; } // separator
                const cells = raw.split("|").filter(Boolean).map(c => c.trim());
                rows.push(cells);
                i++;
            }
            if (rows.length > 0) {
                elements.push(
                    <div key={key++} className="overflow-x-auto my-6">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr>
                                    {rows[0].map((c, ci) => (
                                        <th key={ci} className="text-left px-4 py-2 font-semibold border-b-2" style={{ borderColor: "#e5e7eb", color: "#0a0908" }}>{c}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.slice(1).map((row, ri) => (
                                    <tr key={ri}>
                                        {row.map((c, ci) => (
                                            <td key={ci} className="px-4 py-2 border-b" style={{ borderColor: "#f3f4f6", color: "#374151" }}>{c}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            }
            continue;
        }

        // unordered list
        if (line.match(/^[-*✅❌🚩] /)) {
            const items: string[] = [];
            while (i < lines.length && lines[i].match(/^[-*✅❌🚩] /)) {
                items.push(lines[i].replace(/^[-*✅❌🚩] /, ""));
                i++;
            }
            elements.push(
                <ul key={key++} className="space-y-2 my-4 pl-1">
                    {items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                            <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#af3e4d" }} />
                            <span>{formatInline(item)}</span>
                        </li>
                    ))}
                </ul>
            );
            continue;
        }

        // numbered list
        if (line.match(/^\d+\.\s/)) {
            const items: string[] = [];
            while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
                items.push(lines[i].replace(/^\d+\.\s/, ""));
                i++;
            }
            elements.push(
                <ol key={key++} className="space-y-2 my-4 list-decimal list-inside">
                    {items.map((item, ii) => (
                        <li key={ii} className="text-sm" style={{ color: "#374151" }}>{formatInline(item)}</li>
                    ))}
                </ol>
            );
            continue;
        }

        // paragraph
        elements.push(<p key={key++} className="text-sm leading-relaxed my-4" style={{ color: "#374151" }}>{formatInline(line)}</p>);
        i++;
    }

    return elements;
}

function formatInline(text: string): React.ReactNode {
    // Bold
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1
            ? <strong key={i} style={{ color: "#0a0908" }}>{part}</strong>
            : <span key={i}>{part}</span>
    );
}

/* ── Article JSON-LD ── */
function ArticleSchema({ post }: { post: { title: string; excerpt: string; author: string; date: string; slug: string } }) {
    const ld = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        author: { "@type": "Organization", name: post.author },
        datePublished: post.date,
        publisher: { "@type": "Organization", name: "Mind Your Business Media", url: "https://mindyourbusiness.media" },
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://mindyourbusiness.media/blog/${post.slug}` },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}

/* ── Page Component ── */
export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getBlogPostBySlug(slug) : undefined;

    if (!post) return <NotFound />;

    // Related posts: same category, excluding current, max 3
    const related = blogPosts
        .filter((p) => p.slug !== post.slug && p.category === post.category)
        .slice(0, 3);

    return (
        <Layout>
            <PageMeta
                title={`${post.title} | Mind Your Business Media Blog`}
                description={post.metaDescription}
                canonicalPath={`/blog/${post.slug}`}
            />
            <ArticleSchema post={post} />

            {/* Hero */}
            <section className="pt-32 pb-12" style={{ backgroundColor: "#edf2f4" }}>
                <div className="max-w-4xl mx-auto px-6">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-6 hover:underline"
                        style={{ color: "#af3e4d" }}
                    >
                        <ArrowLeft size={12} /> Back to Blog
                    </Link>

                    <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                        style={{ backgroundColor: "#af3e4d", color: "#fff" }}
                    >
                        {post.category}
                    </span>

                    <h1
                        className="text-3xl md:text-4xl font-black tracking-tight mb-5 leading-[1.15]"
                        style={{ color: "#0a0908" }}
                    >
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "#546a7b" }}>
                        <span className="inline-flex items-center gap-1">
                            <User size={12} /> {post.author}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Calendar size={12} /> {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            {/* Article body */}
            <section className="py-12" style={{ backgroundColor: "#fff" }}>
                <article className="max-w-3xl mx-auto px-6">
                    {renderMarkdown(post.body)}
                </article>
            </section>

            {/* Mid-article CTA */}
            <section className="py-12" style={{ backgroundColor: "#f9fafb" }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-lg font-bold mb-3" style={{ color: "#0a0908" }}>
                        Ready to put this into action?
                    </p>
                    <p className="text-sm mb-6" style={{ color: "#546a7b" }}>
                        Get a free marketing audit — no retainers, no contracts, just a clear plan built for results.
                    </p>
                    <Link
                        to="/free-audit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
                        style={{ backgroundColor: "#af3e4d" }}
                    >
                        Request a Free Audit <ArrowRight size={14} />
                    </Link>
                </div>
            </section>

            {/* Related posts */}
            {related.length > 0 && (
                <section className="py-12" style={{ backgroundColor: "#fff" }}>
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-xl font-bold mb-8" style={{ color: "#0a0908" }}>
                            More from the Blog
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    to={`/blog/${r.slug}`}
                                    className="group block p-6 rounded-xl border transition-all hover:shadow-md"
                                    style={{ borderColor: "#e5e7eb" }}
                                >
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-wider"
                                        style={{ color: "#af3e4d" }}
                                    >
                                        {r.category}
                                    </span>
                                    <h3
                                        className="text-sm font-bold mt-2 mb-2 group-hover:underline"
                                        style={{ color: "#0a0908" }}
                                    >
                                        {r.title}
                                    </h3>
                                    <p className="text-xs" style={{ color: "#546a7b" }}>
                                        {r.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </Layout>
    );
}
