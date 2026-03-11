import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
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
    <Layout noPaddingTop>
      <PageMeta
        title="Industries We Serve | Mind Your Business Media"
        description="Digital marketing for every industry — home services, medical, professional, e-commerce, and more. See how Mind Your Business Media drives results for businesses like yours."
        canonicalPath="/industries"
      />

      {/* Hero */}
      <PageHero
        label="Industries We Serve"
        title={
          <>
            Marketing that works for{" "} <span style={{ color: "#af3e4d" }}>your</span> industry
          </>
        }
        description="From HVAC to e-commerce, we've built proven strategies for businesses across 27+ industries. Find yours below."
      />

      {/* Main Content Wrapper for Sweep-Over Effect */}
      <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
        {/* Industry categories */}
        <section className="py-16" style={{ backgroundColor: "#141419" }}>
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
                    style={{ color: "#fff" }}
                  >
                    {category}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((ind) => (
                      <Link
                        key={ind.slug}
                        to={`/industries/${ind.slug}`}
                        className="group flex items-center justify-between p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 glass-panel inner-glow card-3d relative bg-[#141419]/50"
                        style={{
                          borderColor: "rgba(255,255,255,0.05)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-2 h-8 rounded-full"
                            style={{ backgroundColor: colors.accent }}
                          />
                          <span
                            className="text-sm font-semibold group-hover:text-[#af3e4d] transition-colors"
                            style={{ color: "#fff" }}
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
      </div>
    </Layout>
  );
}
