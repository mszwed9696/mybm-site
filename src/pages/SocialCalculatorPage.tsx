import { Layout } from "@/components/layout";
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
        <Layout>
            <PageMeta
                title="Social Advertising Calculator | Mind Your Business Media"
                description="Estimate your reach, clicks, and conversions from social media ads. See how far your ad budget goes with our free calculator."
                canonicalPath="/resources/social-calculator"
            />

            <section className="pt-28 pb-16 min-h-screen" style={{ backgroundColor: "#edf2f4" }}>
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: "#0a0908" }}>
                            Social Advertising Calculator
                        </h1>
                        <p className="text-base max-w-xl mx-auto" style={{ color: "#546a7b" }}>
                            See how many potential customers you could reach with social media
                            advertising. Adjust your industry and budget below.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-6">
                        {/* Controls */}
                        <div className="lg:col-span-2 rounded-2xl border p-6" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                            {/* Industry */}
                            <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
                                Select your industry
                            </label>
                            <div className="space-y-1.5 mb-6">
                                {industries.map((ind, idx) => (
                                    <button
                                        key={ind.label}
                                        onClick={() => setSelectedIndustry(idx)}
                                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${selectedIndustry === idx
                                                ? "bg-[#af3e4d]/10 text-[#af3e4d] border border-[#af3e4d]/30"
                                                : "hover:bg-gray-50 text-gray-600 border border-transparent"
                                            }`}
                                    >
                                        {ind.label}
                                    </button>
                                ))}
                            </div>

                            {/* Budget */}
                            <label className="block text-sm font-semibold mb-2" style={{ color: "#374151" }}>
                                Monthly ad budget
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {budgetOptions.map((b) => (
                                    <button
                                        key={b}
                                        onClick={() => setBudget(b)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${budget === b
                                                ? "bg-[#af3e4d] text-white"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
                                    <div key={m.label} className="rounded-xl border p-5" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                                        <div className="flex items-center gap-2 mb-2">
                                            <m.icon size={16} style={{ color: m.color }} />
                                            <p className="text-xs font-semibold" style={{ color: "#9ca3af" }}>{m.label}</p>
                                        </div>
                                        <p className="text-2xl font-black" style={{ color: "#0a0908" }}>{m.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Cost per conversion */}
                            <div className="rounded-xl border p-6" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="text-xs font-semibold" style={{ color: "#9ca3af" }}>Estimated Cost per Conversion</p>
                                        <p className="text-3xl font-black" style={{ color: "#af3e4d" }}>
                                            {formatCurrency(results.costPerConversion)}
                                        </p>
                                    </div>
                                    <Calculator size={32} style={{ color: "#af3e4d", opacity: 0.3 }} />
                                </div>
                                <p className="text-xs" style={{ color: "#9ca3af" }}>
                                    Based on average {ind.label} industry benchmarks: {ind.ctr}% CTR, {ind.convRate}% conversion rate, ${ind.cpm} CPM.
                                </p>
                            </div>

                            {/* Disclaimer + CTA */}
                            <div className="rounded-xl p-5" style={{ backgroundColor: "#f3f4f6" }}>
                                <p className="text-xs mb-4" style={{ color: "#546a7b" }}>
                                    <strong>Note:</strong> These are estimated projections based on
                                    industry averages. Actual results will vary depending on
                                    targeting, creative quality, and campaign optimization.
                                </p>
                                <Link
                                    to="/free-audit"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white hover:scale-105 transition-all"
                                    style={{ backgroundColor: "#af3e4d" }}
                                >
                                    Get a Custom Ad Strategy
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
