import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo";
import { useState, useMemo } from "react";
import { Calculator, DollarSign, Users, Eye, MousePointerClick, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════
   Social Advertising Calculator
   ═══════════════════════════════════════════ */

const industries = [
    { label: "Home Services", cpm: 12, ctr: 1.8, convRate: 3.2 },
    { label: "Medical & Wellness", cpm: 18, ctr: 1.5, convRate: 2.8 },
    { label: "Real Estate", cpm: 14, ctr: 2.0, convRate: 2.5 },
    { label: "E-Commerce", cpm: 10, ctr: 2.2, convRate: 4.0 },
    { label: "Life Insurance", cpm: 22, ctr: 1.2, convRate: 2.0 },
    { label: "Law Firm", cpm: 25, ctr: 1.3, convRate: 2.2 },
    { label: "Fitness / Gym", cpm: 8, ctr: 2.5, convRate: 3.5 },
    { label: "Restaurant / Food", cpm: 7, ctr: 2.8, convRate: 5.0 },
    { label: "Supplement Brand", cpm: 11, ctr: 2.0, convRate: 3.8 },
    { label: "Other", cpm: 13, ctr: 1.8, convRate: 3.0 },
];

const budgetOptions = [500, 1000, 2000, 3000, 5000, 7500, 10000];

export default function SocialCalculatorPage() {
    const [selectedIndustry, setSelectedIndustry] = useState(0);
    const [budget, setBudget] = useState(2000);

    const ind = industries[selectedIndustry];

    const results = useMemo(() => {
        const impressions = Math.round((budget / ind.cpm) * 1000);
        const clicks = Math.round(impressions * (ind.ctr / 100));
        const conversions = Math.round(clicks * (ind.convRate / 100));
        const costPerClick = clicks > 0 ? budget / clicks : 0;
        const costPerConversion = conversions > 0 ? budget / conversions : 0;
        return { impressions, clicks, conversions, costPerClick, costPerConversion };
    }, [selectedIndustry, budget, ind]);

    const formatNumber = (n: number) => n.toLocaleString();
    const formatCurrency = (n: number) => `$${n.toFixed(2)}`;

    return (
        <Layout noPaddingTop>
            <PageMeta
                title="Social Advertising Calculator | Mind Your Business Media"
                description="Estimate your reach, clicks, and conversions from social media ads. See how far your ad budget goes with our free calculator."
                canonicalPath="/resources/social-calculator"
            />

            <PageHero
                label="ROI Estimator"
                title={<>Social Advertising Calculator</>}
                description="See how many potential customers you could reach with social media advertising. Adjust your industry and budget below."
            />

            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
                <section className="py-20 md:py-28 min-h-screen" style={{ backgroundColor: "#141419" }}>
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="grid lg:grid-cols-5 gap-6">
                            {/* Controls */}
                            <div className="lg:col-span-2 rounded-2xl p-6 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <div className="gradient-border-top" />
                                {/* Industry */}
                                <label className="block text-sm font-semibold mb-2" style={{ color: "white" }}>
                                    Select your industry
                                </label>
                                <div className="space-y-1.5 mb-6">
                                    {industries.map((ind, idx) => (
                                        <button
                                            key={ind.label}
                                            onClick={() => setSelectedIndustry(idx)}
                                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${selectedIndustry === idx
                                                ? "bg-[hsl(352_48%_46%)]/10 text-[hsl(352_48%_46%)] border border-[hsl(352_48%_46%)]/30"
                                                : "hover:bg-[hsl(352_48%_46%)]/5 text-gray-300 border border-transparent hover:border-[hsl(352_48%_46%)]/30"
                                                }`}
                                        >
                                            {ind.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Budget */}
                                <label className="block text-sm font-semibold mb-2" style={{ color: "white" }}>
                                    Monthly ad budget
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {budgetOptions.map((b) => (
                                        <button
                                            key={b}
                                            onClick={() => setBudget(b)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${budget === b
                                                ? "bg-[hsl(352_48%_46%)] text-white"
                                                : "bg-[#141419] text-gray-400 hover:text-white border border-[rgba(255,255,255,0.1)]"
                                                }`}
                                        >
                                            ${formatNumber(b)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Results */}
                            <div className="lg:col-span-3 space-y-4">
                                {/* Key metrics */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: Eye, label: "Est. Impressions", value: formatNumber(results.impressions), color: "#6366f1" },
                                        { icon: MousePointerClick, label: "Est. Clicks", value: formatNumber(results.clicks), color: "#0ea5e9" },
                                        { icon: Users, label: "Est. Conversions", value: formatNumber(results.conversions), color: "#22c55e" },
                                        { icon: DollarSign, label: "Cost per Click", value: formatCurrency(results.costPerClick), color: "#eab308" },
                                    ].map((m) => (
                                        <div key={m.label} className="rounded-xl p-5 glass-panel inner-glow card-3d relative bg-[#141419]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                            <div className="flex items-center gap-2 mb-2">
                                                <m.icon size={16} style={{ color: m.color }} />
                                                <p className="text-xs font-semibold" style={{ color: "rgba(244,244,245,0.5)" }}>{m.label}</p>
                                            </div>
                                            <p className="text-2xl font-black" style={{ color: "white" }}>{m.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Cost per conversion */}
                                <div className="rounded-xl p-6 glass-panel inner-glow card-3d relative bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-xs font-semibold" style={{ color: "rgba(244,244,245,0.5)" }}>Estimated Cost per Conversion</p>
                                            <p className="text-3xl font-black" style={{ color: "hsl(352 48% 46%)" }}>
                                                {formatCurrency(results.costPerConversion)}
                                            </p>
                                        </div>
                                        <Calculator size={32} style={{ color: "hsl(352 48% 46%)", opacity: 0.3 }} />
                                    </div>
                                    <p className="text-xs" style={{ color: "rgba(244,244,245,0.5)" }}>
                                        Based on average {ind.label} industry benchmarks: {ind.ctr}% CTR, {ind.convRate}% conversion rate, ${ind.cpm} CPM.
                                    </p>
                                </div>

                                {/* Disclaimer + CTA */}
                                <div className="rounded-xl p-5" style={{ backgroundColor: "#141419", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <p className="text-xs mb-4" style={{ color: "rgba(244,244,245,0.7)" }}>
                                        <strong>Note:</strong> These are estimated projections based on
                                        industry averages. Actual results will vary depending on
                                        targeting, creative quality, and campaign optimization.
                                    </p>
                                    <Link
                                        to="/free-audit"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white hover:scale-105 transition-all"
                                        style={{ backgroundColor: "hsl(352 48% 46%)" }}
                                    >
                                        Get a Custom Ad Strategy
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
