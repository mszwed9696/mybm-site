import { Layout } from "@/components/layout";
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
            <Layout>
                <PageMeta
                    title="Your Marketing Score | Mind Your Business Media"
                    description="See how your marketing stacks up."
                    canonicalPath="/resources/marketing-quiz"
                />
                <section className="pt-28 pb-16 min-h-screen" style={{ backgroundColor: "#edf2f4" }}>
                    <div className="max-w-2xl mx-auto px-6">
                        <div className="rounded-2xl border p-8 md:p-10 text-center" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                            <p className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: "#9ca3af" }}>
                                Your Marketing Grade
                            </p>
                            <div
                                className="w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-4 text-5xl font-black text-white"
                                style={{ backgroundColor: grade.color }}
                            >
                                {grade.letter}
                            </div>
                            <h2 className="text-2xl font-bold mb-1" style={{ color: "#0a0908" }}>
                                {grade.label} — {totalScore} / 40
                            </h2>
                            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "#546a7b" }}>
                                {grade.text}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: Target, label: "Strategy", val: scores[0] },
                                    { icon: BarChart3, label: "Website", val: scores[1] },
                                    { icon: TrendingUp, label: "Paid Ads", val: scores[2] },
                                    { icon: Lightbulb, label: "SEO", val: scores[3] },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "#f3f4f6" }}>
                                        <item.icon size={18} style={{ color: "#af3e4d" }} />
                                        <div className="flex-1 text-left">
                                            <p className="text-xs font-semibold" style={{ color: "#374151" }}>{item.label}</p>
                                            <div className="h-1.5 rounded-full mt-1" style={{ backgroundColor: "#d1d5db" }}>
                                                <div className="h-1.5 rounded-full" style={{ width: `${(item.val / 4) * 100}%`, backgroundColor: "#af3e4d" }} />
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold" style={{ color: "#374151" }}>{item.val}/4</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/free-audit"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white hover:scale-105 transition-all"
                                style={{ backgroundColor: "#af3e4d" }}
                            >
                                Get Your Free Personalized Audit
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageMeta
                title="Free Marketing Quiz — Rate Your Marketing | Mind Your Business Media"
                description="Take our free 10-question marketing quiz to discover where your marketing stands and how to improve."
                canonicalPath="/resources/marketing-quiz"
            />
            <section className="pt-28 pb-16 min-h-screen" style={{ backgroundColor: "#edf2f4" }}>
                <div className="max-w-2xl mx-auto px-6">
                    {/* Progress */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between text-xs mb-2">
                            <span style={{ color: "#546a7b" }}>Question {current + 1} of {quizQuestions.length}</span>
                            <span className="font-bold" style={{ color: "#af3e4d" }}>{Math.round(progress)}%</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ backgroundColor: "#d1d5db" }}>
                            <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: "#af3e4d" }} />
                        </div>
                    </div>

                    <div className="rounded-2xl border p-8 md:p-10" style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}>
                        <h2 className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#0a0908" }}>
                            {quizQuestions[current].question}
                        </h2>
                        <div className="space-y-2.5">
                            {quizQuestions[current].options.map((opt) => (
                                <button
                                    type="button"
                                    key={opt.label}
                                    onClick={() => selectAnswer(opt.score)}
                                    className="w-full text-left px-5 py-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-200 border-gray-200 hover:border-[#af3e4d] hover:bg-[#af3e4d]/5 text-gray-700"
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {current > 0 && (
                        <button
                            onClick={() => { setCurrent((c) => c - 1); setScores((s) => s.slice(0, -1)); }}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-[#af3e4d]"
                            style={{ color: "#546a7b" }}
                        >
                            <ArrowLeft size={14} /> Back
                        </button>
                    )}
                </div>
            </section>
        </Layout>
    );
}
