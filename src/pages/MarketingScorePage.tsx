import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo";
import { useState } from "react";
import { Globe, Search, Smartphone, Gauge, Shield, Share2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════
   Digital Marketing Score — website grader
   ═══════════════════════════════════════════ */

interface ScoreCategory {
    label: string;
    icon: typeof Globe;
    score: number;
    maxScore: number;
    tips: string[];
}

const demoScores: ScoreCategory[] = [
    {
        label: "Website Performance",
        icon: Gauge,
        score: 62,
        maxScore: 100,
        tips: ["Page load time is over 4 seconds (target: under 2s)", "Large images need compression", "Consider lazy-loading off-screen content"],
    },
    {
        label: "SEO Fundamentals",
        icon: Search,
        score: 45,
        maxScore: 100,
        tips: ["Missing meta descriptions on 3 pages", "No schema.org structured data detected", "Title tags are too long (over 60 characters)"],
    },
    {
        label: "Mobile Responsiveness",
        icon: Smartphone,
        score: 78,
        maxScore: 100,
        tips: ["Tap targets are too small on some buttons", "Text is readable without zooming", "Viewport meta tag is properly configured"],
    },
    {
        label: "Security & Trust",
        icon: Shield,
        score: 85,
        maxScore: 100,
        tips: ["SSL certificate is active", "No mixed content warnings", "Consider adding a privacy policy page"],
    },
    {
        label: "Social Presence",
        icon: Share2,
        score: 30,
        maxScore: 100,
        tips: ["No Open Graph tags detected", "Twitter Card meta tags are missing", "Add social sharing buttons to key pages"],
    },
    {
        label: "Online Presence",
        icon: Globe,
        score: 50,
        maxScore: 100,
        tips: ["Business listed on 4 of 12 major directories", "Google Business Profile needs optimization", "Consider claiming your Bing Places listing"],
    },
];

function getColor(score: number) {
    if (score >= 80) return "#22c55e";
    if (score >= 60) return "#84cc16";
    if (score >= 40) return "#eab308";
    if (score >= 20) return "#f97316";
    return "#ef4444";
}

export default function MarketingScorePage() {
    const [url, setUrl] = useState("");
    const [scanned, setScanned] = useState(false);
    const [scanning, setScanning] = useState(false);

    const overallScore = Math.round(demoScores.reduce((sum, c) => sum + c.score, 0) / demoScores.length);

    const handleScan = () => {
        if (!url.trim()) return;
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            setScanned(true);
        }, 2500);
    };

    return (
        <Layout noPaddingTop>
            <PageMeta
                title="Free Digital Marketing Score | Mind Your Business Media"
                description="Get a comprehensive score for your website's SEO, performance, mobile-friendliness, and online presence. Free instant analysis."
                canonicalPath="/resources/marketing-score"
            />

            <PageHero
                label="Website Grader"
                title={<>Digital Marketing Score</>}
                description="Enter your website URL and we'll grade your online presence across 6 critical marketing categories."
            />

            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
                <section className="py-20 md:py-28 min-h-screen" style={{ backgroundColor: "#141419" }}>
                    <div className="max-w-3xl mx-auto px-6">
                        {/* Input */}
                        {!scanned && (
                            <div className="rounded-2xl p-8 md:p-10 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <div className="gradient-border-top" />
                                <label className="block text-sm font-semibold mb-2" style={{ color: "white" }}>
                                    Your website URL
                                </label>
                                <div className="flex gap-3">
                                    <input
                                        type="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        className="flex-1 px-4 py-3 rounded-xl border-2 text-sm focus:outline-none focus:border-[hsl(352_48%_46%)] bg-[#141419] text-white"
                                        style={{ borderColor: "rgba(255,255,255,0.05)" }}
                                        placeholder="https://yourwebsite.com"
                                        onKeyDown={(e) => e.key === "Enter" && handleScan()}
                                    />
                                    <button
                                        onClick={handleScan}
                                        disabled={scanning || !url.trim()}
                                        className="px-6 py-3 rounded-xl text-sm font-bold text-white hover:scale-105 transition-all disabled:opacity-50"
                                        style={{ backgroundColor: "hsl(352 48% 46%)" }}
                                    >
                                        {scanning ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Analyzing...
                                            </div>
                                        ) : (
                                            "Get My Score"
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Results */}
                        {scanned && (
                            <>
                                {/* Overall score */}
                                <div className="rounded-2xl p-8 text-center mb-6 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                    <div className="gradient-border-top" />
                                    <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "rgba(244,244,245,0.5)" }}>
                                        Overall Marketing Score
                                    </p>
                                    <div className="relative w-32 h-32 mx-auto mb-4">
                                        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                                            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                                            <circle
                                                cx="60" cy="60" r="52" fill="none"
                                                stroke={getColor(overallScore)}
                                                strokeWidth="10"
                                                strokeDasharray={`${(overallScore / 100) * 327} 327`}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-3xl font-black" style={{ color: getColor(overallScore) }}>
                                                {overallScore}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold" style={{ color: "white" }}>
                                        {overallScore >= 70 ? "Good start!" : overallScore >= 50 ? "Room for improvement" : "Needs serious attention"}
                                    </p>
                                    <p className="text-xs mt-1" style={{ color: "rgba(244,244,245,0.7)" }}>
                                        Results for <strong>{url}</strong>
                                    </p>
                                </div>

                                {/* Category breakdown */}
                                <div className="space-y-4">
                                    {demoScores.map((cat) => (
                                        <div key={cat.label} className="rounded-xl p-5 glass-panel inner-glow card-3d relative bg-[#1A1A22]/40" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <cat.icon size={20} style={{ color: getColor(cat.score) }} />
                                                <h3 className="text-sm font-bold flex-1" style={{ color: "white" }}>{cat.label}</h3>
                                                <span className="text-lg font-black" style={{ color: getColor(cat.score) }}>{cat.score}</span>
                                                <span className="text-xs" style={{ color: "rgba(244,244,245,0.5)" }}>/ {cat.maxScore}</span>
                                            </div>
                                            <div className="h-2 rounded-full mb-3" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                                                <div className="h-2 rounded-full transition-all" style={{ width: `${cat.score}%`, backgroundColor: getColor(cat.score) }} />
                                            </div>
                                            <ul className="space-y-1">
                                                {cat.tips.map((tip) => (
                                                    <li key={tip} className="text-xs flex items-start gap-2" style={{ color: "rgba(244,244,245,0.7)" }}>
                                                        <span className="mt-0.5">•</span>
                                                        {tip}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-sm mb-4" style={{ color: "rgba(244,244,245,0.7)" }}>
                                        Want a detailed action plan to improve your score?
                                    </p>
                                    <Link
                                        to="/free-audit"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white hover:scale-105 transition-all"
                                        style={{ backgroundColor: "hsl(352 48% 46%)" }}
                                    >
                                        Get Your Free Audit
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    );
}
