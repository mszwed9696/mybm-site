import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo";
import { useState } from "react";
import { ArrowRight, ArrowLeft, BarChart3, Check, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════
   Marketing Quiz — interactive self-assessment
   ═══════════════════════════════════════════ */

interface QuizQuestion {
    question: string;
    options: { label: string; score: number }[];
}

const quizQuestions: QuizQuestion[] = [
    {
        question: "Do you have a clear, documented marketing strategy?",
        options: [
            { label: "Yes — we follow a detailed plan with measurable goals", score: 4 },
            { label: "Somewhat — we have a general direction but it's not detailed", score: 3 },
            { label: "Not really — we do things ad-hoc", score: 2 },
            { label: "No — we don't have any strategy at all", score: 1 },
        ],
    },
    {
        question: "How would you describe your website?",
        options: [
            { label: "Modern, mobile-friendly, and optimized for conversions", score: 4 },
            { label: "Decent but hasn't been updated in a while", score: 3 },
            { label: "Basic — it exists but doesn't generate leads", score: 2 },
            { label: "Outdated, broken, or we don't have one", score: 1 },
        ],
    },
    {
        question: "Are you actively running paid ads (Google, Meta, TikTok)?",
        options: [
            { label: "Yes — with a positive ROI we can measure", score: 4 },
            { label: "Yes — but we're not sure if they're profitable", score: 3 },
            { label: "We tried but stopped — didn't see results", score: 2 },
            { label: "No — we don't run any paid advertising", score: 1 },
        ],
    },
    {
        question: "How strong is your SEO / organic search presence?",
        options: [
            { label: "We rank on page 1 for key terms in our area", score: 4 },
            { label: "We show up for a few terms but want more", score: 3 },
            { label: "We barely appear in search results", score: 2 },
            { label: "We've never invested in SEO", score: 1 },
        ],
    },
    {
        question: "How active are you on social media?",
        options: [
            { label: "Very — we post regularly and engage with followers", score: 4 },
            { label: "Somewhat — we post occasionally when we remember", score: 3 },
            { label: "Rarely — our accounts exist but are mostly inactive", score: 2 },
            { label: "Not at all — we don't use social media for business", score: 1 },
        ],
    },
    {
        question: "Do you collect and respond to online reviews?",
        options: [
            { label: "Yes — we have a system to get reviews and respond promptly", score: 4 },
            { label: "Sometimes — we respond when we remember to", score: 3 },
            { label: "Rarely — we have some reviews but don't manage them", score: 2 },
            { label: "No — we don't have a review strategy", score: 1 },
        ],
    },
    {
        question: "Do you use any automation or AI in your marketing?",
        options: [
            { label: "Yes — automated follow-ups, chatbots, email sequences, etc.", score: 4 },
            { label: "A little — we use basic email automation", score: 3 },
            { label: "No — everything is manual", score: 2 },
            { label: "I'm not sure what that would look like for my business", score: 1 },
        ],
    },
    {
        question: "Can you track where your leads and customers come from?",
        options: [
            { label: "Yes — we have analytics and tracking set up for every channel", score: 4 },
            { label: "Partially — we know some sources but not all", score: 3 },
            { label: "Not really — we just know leads come in somehow", score: 2 },
            { label: "No — we have no tracking at all", score: 1 },
        ],
    },
    {
        question: "How consistent is your brand across all channels?",
        options: [
            { label: "Very — same look, feel, and message everywhere", score: 4 },
            { label: "Mostly — some inconsistencies here and there", score: 3 },
            { label: "Not great — each channel looks different", score: 2 },
            { label: "We haven't thought much about brand consistency", score: 1 },
        ],
    },
    {
        question: "How would you rate your overall marketing confidence?",
        options: [
            { label: "Very confident — marketing drives our growth", score: 4 },
            { label: "Somewhat confident — it helps but could be better", score: 3 },
            { label: "Not confident — we're not sure what works", score: 2 },
            { label: "Frustrated — marketing feels like money down the drain", score: 1 },
        ],
    },
];

function getGrade(score: number): { letter: string; color: string; label: string; text: string } {
    if (score >= 36)
        return { letter: "A", color: "#22c55e", label: "Excellent", text: "Your marketing game is strong! Let's find the tweaks to take you from great to exceptional." };
    if (score >= 30)
        return { letter: "B", color: "#84cc16", label: "Good", text: "Solid foundation. There are clear opportunities to level up and outpace your competitors." };
    if (score >= 22)
        return { letter: "C", color: "#eab308", label: "Average", text: "You're leaving money on the table. A strategic overhaul could dramatically boost your growth." };
    if (score >= 15)
        return { letter: "D", color: "#f97316", label: "Needs Work", text: "Your marketing has significant gaps that are costing you leads and revenue every day." };
    return { letter: "F", color: "#ef4444", label: "Critical", text: "You need a marketing transformation. The good news? Even small improvements can yield massive results." };
}

export default function MarketingQuizPage() {
    const [current, setCurrent] = useState(0);
    const [scores, setScores] = useState<number[]>([]);
    const [finished, setFinished] = useState(false);

    const totalScore = scores.reduce((a, b) => a + b, 0);
    const grade = getGrade(totalScore);
    const progress = ((current) / quizQuestions.length) * 100;

    const selectAnswer = (score: number) => {
        const updated = [...scores, score];
        setScores(updated);
        if (current + 1 < quizQuestions.length) {
            setTimeout(() => setCurrent((c) => c + 1), 250);
        } else {
            setTimeout(() => setFinished(true), 250);
        }
    };

    if (finished) {
        return (
            <Layout noPaddingTop>
                <PageMeta
                    title="Your Marketing Score | Mind Your Business Media"
                    description="See how your marketing stacks up."
                    canonicalPath="/resources/marketing-quiz"
                />
                <PageHero
                    label="Score Analysis"
                    title={<>Your Marketing Grade</>}
                    description="We’ve analyzed your responses. Here is your personalized marketing score and recommended next steps."
                />

                <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
                    <section className="py-20 md:py-28 min-h-screen" style={{ backgroundColor: "#141419" }}>
                        <div className="max-w-2xl mx-auto px-6">
                            <div className="rounded-2xl p-8 md:p-10 text-center glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <div className="gradient-border-top" />
                                <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(244,244,245,0.5)" }}>
                                    Your Final Grade
                                </p>
                                <div
                                    className="w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-4 text-5xl font-black text-white"
                                    style={{ backgroundColor: grade.color }}
                                >
                                    {grade.letter}
                                </div>
                                <h2 className="text-2xl font-bold mb-1" style={{ color: "white" }}>
                                    {grade.label} — {totalScore} / 40
                                </h2>
                                <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(244,244,245,0.7)" }}>
                                    {grade.text}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                    {[
                                        { icon: Target, label: "Strategy", val: scores[0] },
                                        { icon: BarChart3, label: "Website", val: scores[1] },
                                        { icon: TrendingUp, label: "Paid Ads", val: scores[2] },
                                        { icon: Lightbulb, label: "SEO", val: scores[3] },
                                    ].map((item) => (
                                        <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg border" style={{ backgroundColor: "#141419", borderColor: "rgba(255,255,255,0.05)" }}>
                                            <item.icon size={18} style={{ color: "hsl(352 48% 46%)" }} />
                                            <div className="flex-1 text-left">
                                                <p className="text-xs font-semibold" style={{ color: "white" }}>{item.label}</p>
                                                <div className="h-1.5 rounded-full mt-1" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                                                    <div className="h-1.5 rounded-full" style={{ width: `${(item.val / 4) * 100}%`, backgroundColor: "hsl(352 48% 46%)" }} />
                                                </div>
                                            </div>
                                            <span className="text-xs font-bold" style={{ color: "white" }}>{item.val}/4</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/free-audit"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white hover:scale-105 transition-all"
                                    style={{ backgroundColor: "hsl(352 48% 46%)" }}
                                >
                                    Get Your Free Personalized Audit
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        );
    }

    return (
        <Layout noPaddingTop>
            <PageMeta
                title="Free Marketing Quiz — Rate Your Marketing | Mind Your Business Media"
                description="Take our free 10-question marketing quiz to discover where your marketing stands and how to improve."
                canonicalPath="/resources/marketing-quiz"
            />
            <PageHero
                label="Self Assessment"
                title={<>Rate Your Marketing</>}
                description="Take our free 10-question marketing quiz to discover where your marketing stands and how to improve."
            />

            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">
                <section className="py-20 md:py-28 min-h-screen" style={{ backgroundColor: "#141419" }}>
                    <div className="max-w-2xl mx-auto px-6">
                        {/* Progress */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between text-xs mb-2">
                                <span style={{ color: "rgba(244,244,245,0.7)" }}>Question {current + 1} of {quizQuestions.length}</span>
                                <span className="font-bold" style={{ color: "hsl(352 48% 46%)" }}>{Math.round(progress)}%</span>
                            </div>
                            <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                                <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: "hsl(352 48% 46%)" }} />
                            </div>
                        </div>

                        <div className="rounded-2xl p-8 md:p-10 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <div className="gradient-border-top" />
                            <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "white" }}>
                                {quizQuestions[current].question}
                            </h2>
                            <div className="space-y-2.5">
                                {quizQuestions[current].options.map((opt) => (
                                    <button
                                        type="button"
                                        key={opt.label}
                                        onClick={() => selectAnswer(opt.score)}
                                        className="w-full text-left px-5 py-3.5 rounded-xl border border-[rgba(255,255,255,0.1)] text-sm font-medium transition-all duration-200 hover:border-[hsl(352_48%_46%)] hover:bg-[hsl(352_48%_46%)/0.05] text-gray-300"
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {current > 0 && (
                            <button
                                onClick={() => { setCurrent((c) => c - 1); setScores((s) => s.slice(0, -1)); }}
                                className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-[hsl(352_48%_46%)]"
                                style={{ color: "rgba(244,244,245,0.7)" }}
                            >
                                <ArrowLeft size={14} /> Back
                            </button>
                        )}
                    </div>
                </section>
            </div>
        </Layout>
    );
}
