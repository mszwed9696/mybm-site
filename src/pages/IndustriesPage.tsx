import { Layout } from "@/components/layout";
import { PageMeta } from "@/components/seo";
import { Link } from "react-router-dom";
import { industries } from "@/data/industryData";
import { ArrowRight } from "lucide-react";

const categoryColors: Record<string, { accent: string; bg: string }> = {
    "Home Services": { accent: "#f97316", bg: "#fff7ed" },
    "Medical & Wellness": { accent: "#ef4444", bg: "#fef2f2" },
    "Professional & Financial": { accent: "#3b82f6", bg: "#eff6ff" },
    "E-Commerce & Retail": { accent: "#8b5cf6", bg: "#f5f3ff" },
};

// Group by category
const grouped = industries.reduce(
    (acc, ind) => {
        if (!acc[ind.category]) acc[ind.category] = [];
        acc[ind.category].push(ind);
        return acc;
    },
    {} as Record<string, typeof industries>
);

export default function IndustriesPage() {
    return (
        <Layout>
            <PageMeta
                title="Industries We Serve | Mind Your Business Media"
                description="Digital marketing for every industry — home services, medical, professional, e-commerce, and more. See how Mind Your Business Media drives results for businesses like yours."
                canonicalPath="/industries"
            />

            {/* Hero */}
            <section
                className="pt-32 pb-16"
                style={{ backgroundColor: "#edf2f4" }}
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p
                        className="text-sm font-bold uppercase tracking-widest mb-3"
                        style={{ color: "#af3e4d" }}
                    >
                        Industries We Serve
                    </p>
                    <h1
                        className="text-4xl md:text-5xl font-black tracking-tight mb-4"
                        style={{ color: "#0a0908" }}
                    >
                        Marketing that works for{" "}
                        <span style={{ color: "#af3e4d" }}>your</span> industry
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: "#546a7b" }}>
                        From HVAC to e-commerce, we've built proven strategies for
                        businesses across 27+ industries. Find yours below.
                    </p>
                </div>
            </section>

            {/* Industry categories */}
            <section className="py-16" style={{ backgroundColor: "#fff" }}>
                <div className="max-w-7xl mx-auto px-6">
                    {Object.entries(grouped).map(([category, items]) => {
                        const colors = categoryColors[category] || {
                            accent: "#546a7b",
                            bg: "#f9fafb",
                        };
                        return (
                            <div key={category} className="mb-14 last:mb-0">
                                <h2
                                    className="text-2xl font-bold mb-6"
                                    style={{ color: "#0a0908" }}
                                >
                                    {category}
                                </h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {items.map((ind) => (
                                        <Link
                                            key={ind.slug}
                                            to={`/industries/${ind.slug}`}
                                            className="group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                                            style={{
                                                borderColor: "#e5e7eb",
                                                backgroundColor: "#fff",
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-2 h-8 rounded-full"
                                                    style={{ backgroundColor: colors.accent }}
                                                />
                                                <span
                                                    className="text-sm font-semibold group-hover:text-[#af3e4d] transition-colors"
                                                    style={{ color: "#0a0908" }}
                                                >
                                                    {ind.title}
                                                </span>
                                            </div>
                                            <ArrowRight
                                                size={14}
                                                className="text-gray-300 group-hover:text-[#af3e4d] transition-colors"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
}
