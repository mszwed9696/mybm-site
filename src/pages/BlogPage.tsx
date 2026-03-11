import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { blogPosts } from "@/data/blogData";

/*  Blog Index — A premium 3D grid layout  */

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Extract unique categories dynamically
    const allCategories = ["All", ...new Set(blogPosts.map(p => p.category))];

    const filtered =
        activeCategory === "All"
            ? blogPosts
            : blogPosts.filter((p) => p.category === activeCategory);

    const featuredPosts = filtered.filter((p) => p.featured);
    const regularPosts = filtered.filter((p) => !p.featured);

    return (
        <Layout noPaddingTop>
            <PageMeta
                title="Mind Your Business Blog | Elite Marketing Insights"
                description="Actionable marketing insights, industry-specific strategies, and case studies from Mind Your Business Media."
                canonicalPath="/blog"
            />

            <PageHero
                label="Insights & Strategies"
                title={<>How to Mind Your Business</>}
                description="Actionable insights, industry tips, and real-world case studies to help your business grow."
            />

            {/* Main Content Wrapper for Sweep-Over Effect */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419] min-h-screen">

                {/*  Gradient Spacer matching hero fade  */}
                <div className="h-[90vh]" />
                <div className="h-[10vh] bg-gradient-to-b from-transparent to-[#141419]" />

                <div className="container-wide py-24">

                    {/* Category Filter - Premium Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-20 fade-in-up">
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border backdrop-blur-md ${activeCategory === cat
                                    ? 'bg-[#af3e4d] text-[#F4F4F5] border-[#af3e4d] shadow-[0_4px_20px_rgba(175,62,77,0.3)]'
                                    : 'bg-[#1A1A22] text-[#9CA3AF] border-white/5 hover:text-[#F4F4F5] hover:border-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Featured Posts First */}
                    {featuredPosts.length > 0 && (
                        <div className="mb-24 fade-in-up delay-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F4F5] mb-12 flex items-center gap-4">
                                <Tag className="w-6 h-6 text-[#af3e4d]" />
                                Featured Insights
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                                {featuredPosts.map(post => (
                                    <BlogCard key={post.slug} post={post} featured />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Posts Grid */}
                    {regularPosts.length > 0 && (
                        <div className="fade-in-up delay-200">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F4F5] mb-12 border-t border-white/5 pt-12">
                                Latest Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {regularPosts.map(post => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>
                        </div>
                    )}

                    {filtered.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-[#9CA3AF] text-xl">No articles found in this category.</p>
                        </div>
                    )}

                </div>
            </div>
        </Layout >
    );
}

// ── 3D Blog Card Component ──
function BlogCard({ post, featured = false }: { post: any, featured?: boolean }) {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className={`group block card-3d glass-panel inner-glow multilayer-shadow rounded-2xl overflow-hidden relative bg-[#141419]/50 transition-all hover:-translate-y-1 ${featured ? 'flex flex-col sm:flex-row min-h-[400px]' : 'flex flex-col h-full'
                }`}
        >
            {/* Top Edge Glow Detail */}
            <div className="gradient-border-top" />

            {/* Cover Image Wrapper */}
            <div className={`relative overflow-hidden bg-[#1A1A22] ${featured ? 'sm:w-2/5 aspect-square sm:aspect-auto border-r border-white/5' : 'aspect-[16/9] border-b border-white/5'
                }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#141419] to-transparent z-10 opacity-80" />
                <img
                    src={post.coverImage && post.coverImage.startsWith('http') ? post.coverImage : `https://source.unsplash.com/800x600/?${encodeURIComponent(post.industryTags?.[0] || post.category)}`}
                    alt={post.title}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800`;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Card Content Area */}
            <div className={`flex flex-col justify-between p-8 ${featured ? 'sm:w-3/5' : ''}`}>
                <div>
                    <div className="flex items-center gap-4 text-xs font-semibold text-[#af3e4d] uppercase tracking-wider mb-4">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[#9CA3AF] flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </span>
                    </div>

                    <h3 className={`font-bold text-[#F4F4F5] leading-tight mb-4 ${featured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl'
                        }`}>
                        {post.title}
                    </h3>

                    <p className="text-[#9CA3AF] leading-relaxed line-clamp-3">
                        {post.excerpt}
                    </p>
                </div>

                <div className="mt-8 flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#af3e4d]/20 flex items-center justify-center border border-[#af3e4d]/30">
                            <User className="w-4 h-4 text-[#af3e4d]" />
                        </div>
                        <span className="text-sm font-medium text-[#F4F4F5]">MYB Team</span>
                    </div>

                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 group-hover:border-[#af3e4d] group-hover:bg-[#af3e4d] transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
