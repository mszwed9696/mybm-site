import { Layout } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { PageMeta, JsonLd } from "@/components/seo";
import { clientReviews, overallRating } from "@/data/reviewsData";
import { Star, Quote, ArrowRight } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={16}
                    fill={i < rating ? "#f59e0b" : "transparent"}
                    style={{ color: i < rating ? "#f59e0b" : "#333" }}
                />
            ))}
        </div>
    );
}

export default function ClientReviewsPage() {
    return (
        <Layout>
            <PageMeta
                title="Client Reviews | 5-Star Rated Marketing Agency — MYB Media"
                description="Read what clients say about Mind Your Business Media. 5.0/5 stars across 15 reviews. Real testimonials from coaching, real estate, e-commerce, and home service businesses."
                keywords="MYB Media reviews, performance marketing agency reviews, marketing agency testimonials, client success stories"
                canonicalPath="/reviews"
            />
            <JsonLd
                type="BreadcrumbList"
                breadcrumbs={[
                    { name: "Home", path: "/" },
                    { name: "Client Reviews", path: "/reviews" },
                ]}
            />

            {/* Hero */}
            <section className="pt-32 pb-16" style={{ backgroundColor: "#0a0908" }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                        style={{ backgroundColor: "#f59e0b20", color: "#f59e0b" }}
                    >
                        <Star size={14} fill="#f59e0b" />
                        Client Testimonials
                    </div>
                    <h1
                        className="text-4xl md:text-6xl font-black tracking-tight mb-6"
                        style={{ color: "#fff" }}
                    >
                        What our clients{" "}
                        <span style={{ color: "#f59e0b" }}>say about us</span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
                        Our reputation is built on results, not retainers. Hear directly
                        from the businesses we've helped grow.
                    </p>
                </div>
            </section>

            {/* Overall Rating */}
            <section className="py-12" style={{ backgroundColor: "#111" }}>
                <div className="max-w-4xl mx-auto px-6">
                    <div
                        className="rounded-2xl p-8 md:p-12 text-center"
                        style={{
                            backgroundColor: "#141414",
                            border: "1px solid #f59e0b30",
                        }}
                    >
                        <p
                            className="text-7xl md:text-8xl font-black mb-3"
                            style={{ color: "#f59e0b" }}
                        >
                            {overallRating.average}
                        </p>
                        <div className="flex justify-center gap-1 mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} size={28} fill="#f59e0b" style={{ color: "#f59e0b" }} />
                            ))}
                        </div>
                        <p className="text-sm" style={{ color: "#9ca3af" }}>
                            Based on{" "}
                            <span className="font-bold text-white">
                                {overallRating.total} verified reviews
                            </span>
                        </p>

                        {/* Rating breakdown */}
                        <div className="max-w-xs mx-auto mt-6 space-y-2">
                            {[
                                { stars: 5, count: overallRating.breakdown.five },
                                { stars: 4, count: overallRating.breakdown.four },
                                { stars: 3, count: overallRating.breakdown.three },
                                { stars: 2, count: overallRating.breakdown.two },
                                { stars: 1, count: overallRating.breakdown.one },
                            ].map((row) => (
                                <div key={row.stars} className="flex items-center gap-3">
                                    <span
                                        className="text-xs w-8 text-right font-medium"
                                        style={{ color: "#9ca3af" }}
                                    >
                                        {row.stars}★
                                    </span>
                                    <div
                                        className="flex-1 h-2 rounded-full overflow-hidden"
                                        style={{ backgroundColor: "#1a1a1a" }}
                                    >
                                        <div
                                            className="h-full rounded-full transition-all"
                                            style={{
                                                width: `${overallRating.total > 0
                                                        ? (row.count / overallRating.total) * 100
                                                        : 0
                                                    }%`,
                                                backgroundColor: "#f59e0b",
                                            }}
                                        />
                                    </div>
                                    <span
                                        className="text-xs w-8 font-medium"
                                        style={{ color: "#6b7280" }}
                                    >
                                        {row.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-16" style={{ backgroundColor: "#0d0d0d" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clientReviews.map((review) => (
                            <div
                                key={review.id}
                                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                    backgroundColor: "#141414",
                                    border: "1px solid #222",
                                }}
                            >
                                {/* Quote icon */}
                                <Quote
                                    size={24}
                                    className="mb-4"
                                    style={{ color: "#af3e4d30" }}
                                />

                                {/* Stars */}
                                <div className="mb-4">
                                    <StarRating rating={review.rating} />
                                </div>

                                {/* Quote */}
                                <p
                                    className="text-sm leading-relaxed mb-5"
                                    style={{ color: "#d1d5db" }}
                                >
                                    "{review.quote}"
                                </p>

                                {/* Author */}
                                <div
                                    className="pt-4"
                                    style={{ borderTop: "1px solid #222" }}
                                >
                                    <p className="font-bold text-sm" style={{ color: "#fff" }}>
                                        {review.name}
                                    </p>
                                    {review.role && (
                                        <p
                                            className="text-xs mt-0.5"
                                            style={{ color: "#6b7280" }}
                                        >
                                            {review.role}
                                        </p>
                                    )}
                                    {review.service && (
                                        <span
                                            className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                                            style={{
                                                backgroundColor: "#af3e4d15",
                                                color: "#af3e4d",
                                            }}
                                        >
                                            {review.service}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ backgroundColor: "#0a0908" }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2
                        className="text-3xl md:text-4xl font-black mb-4"
                        style={{ color: "#fff" }}
                    >
                        Ready to become our next success story?
                    </h2>
                    <p className="text-lg mb-8" style={{ color: "#9ca3af" }}>
                        Join the businesses getting real results — no retainers, just
                        performance.
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
