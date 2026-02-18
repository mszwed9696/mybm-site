import { Layout } from "@/components/layout";
import { PageMeta } from "@/components/seo";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { blogPosts, blogCategories } from "@/data/blogData";

/* ═══════════════════════════════════════════
   Blog Index — curated article listing
   ═══════════════════════════════════════════ */

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((p) => p.category === activeCategory);

    const featuredPosts = filtered.filter((p) => p.featured);
    const regularPosts = filtered.filter((p) => !p.featured);

    return (
        <Layout>
            <PageMeta
                title="Mind Your Business Media Blog — Marketing Tips, Case Studies & Insights"
                description="Actionable marketing insights, industry-specific strategies, and case studies from Mind Your Business Media."
                canonicalPath="/blog"
            />

            <section className="pt-28 pb-16 min-h-screen" style={{ backgroundColor: "#edf2f4" }}>
                <div className="max-w-5xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#0a0908" }}>
                            The Mind Your Business Media Blog
                        </h1>
                        <p className="text-base max-w-xl mx-auto" style={{ color: "#546a7b" }}>
                            Actionable insights, industry tips, and real-world case studies to
                            help your business grow.
                        </p>
                    </div>

                    {/* Category pills */}
                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        {blogCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${cat === activeCategory
                                    ? "bg-[#af3e4d] text-white"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Featured posts */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        {featuredPosts.map((post) => (
                            <Link
                                to={`/blog/${post.slug}`}
                                key={post.slug}
                                className="group rounded-2xl border overflow-hidden transition-all hover:shadow-lg"
                                style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}
                            >
                                <div className="h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
                                    <p className="text-white/30 text-sm font-bold">Featured Article</p>
                                </div>
                                <div className="p-6">
                                    <span
                                        className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                                        style={{ backgroundColor: "#af3e4d15", color: "#af3e4d" }}
                                    >
                                        {post.category}
                                    </span>
                                    <h2 className="text-lg font-bold mb-2 group-hover:text-[#af3e4d] transition-colors" style={{ color: "#0a0908" }}>
                                        {post.title}
                                    </h2>
                                    <p className="text-sm mb-4" style={{ color: "#546a7b" }}>{post.excerpt}</p>
                                    <div className="flex items-center gap-4 text-xs" style={{ color: "#9ca3af" }}>
                                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Regular posts */}
                    <div className="space-y-4">
                        {regularPosts.map((post) => (
                            <Link
                                to={`/blog/${post.slug}`}
                                key={post.slug}
                                className="group flex gap-5 rounded-xl border p-5 transition-all hover:shadow-md"
                                style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}
                            >
                                <div
                                    className="w-20 h-20 rounded-lg shrink-0 flex items-center justify-center"
                                    style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)" }}
                                >
                                    <span className="text-white/20 text-xs font-bold">MYBM</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold" style={{ color: "#af3e4d" }}>{post.category}</span>
                                        <span className="text-xs" style={{ color: "#9ca3af" }}>•</span>
                                        <span className="text-xs" style={{ color: "#9ca3af" }}>{post.date}</span>
                                    </div>
                                    <h3 className="text-sm font-bold mb-1 group-hover:text-[#af3e4d] transition-colors" style={{ color: "#0a0908" }}>
                                        {post.title}
                                    </h3>
                                    <p className="text-xs truncate" style={{ color: "#546a7b" }}>{post.excerpt}</p>
                                    <div className="flex items-center gap-3 mt-2 text-xs" style={{ color: "#9ca3af" }}>
                                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center rounded-2xl p-8" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}>
                        <h2 className="text-xl font-bold text-white mb-2">
                            Want results, not just reading?
                        </h2>
                        <p className="text-sm text-white/60 mb-6">
                            Let us put these strategies to work for your business.
                        </p>
                        <Link
                            to="/free-audit"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white hover:scale-105 transition-all"
                            style={{ backgroundColor: "#af3e4d" }}
                        >
                            Request a Free Audit
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
