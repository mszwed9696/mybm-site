import { useParams, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PROBLEM_PAGES } from "@/config/routingRules";
import type { RecommendedOffer } from "@/config/routingRules";
import { ArrowRight, CheckCircle2, AlertTriangle, Zap } from "lucide-react";

interface LocationState {
    offer?: RecommendedOffer;
    token?: string;
    leadName?: string;
}

export default function ProblemPage() {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const state = location.state as LocationState | null;

    const problem = slug ? PROBLEM_PAGES[slug] : null;

    if (!problem) {
        return (
            <Layout>
                <main className="container-wide py-24 text-center">
                    <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        We couldn't find the problem page you're looking for.
                    </p>
                    <Link to="/quiz">
                        <Button variant="glow">Take the Quiz</Button>
                    </Link>
                </main>
            </Layout>
        );
    }

    const offer = state?.offer;
    const leadName = state?.leadName;

    return (
        <Layout noPaddingTop>
            <PageHero
                label={leadName ? `${leadName}'s Personalized Diagnosis` : "Diagnostic Result"}
                title={<>{problem.headline}</>}
                description={problem.subheadline}
            />

            {/* Main Content Wrapper for Sweep-Over Effect */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419] min-h-screen">
                <main className="container-wide py-16 md:py-24">
                    {/* Problem Description */}
                    <div className="max-w-3xl mx-auto mb-16 pl-4 pr-4">
                        <p className="text-lg text-[rgba(244,244,245,0.8)] leading-relaxed text-center">
                            {problem.description}
                        </p>
                    </div>

                    {/* Symptoms + Root Causes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16 pl-4 pr-4">
                        {/* Symptoms */}
                        <div className="rounded-2xl bg-[#1a1a24] border border-[rgba(255,255,255,0.05)] p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                </div>
                                <h2 className="text-xl font-bold text-white">Common Symptoms</h2>
                            </div>
                            <ul className="space-y-3">
                                {problem.symptoms.map((symptom, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                        <span className="text-[rgba(244,244,245,0.8)]">{symptom}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Root Causes */}
                        <div className="rounded-2xl bg-[#1a1a24] border border-[rgba(255,255,255,0.05)] p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-amber-500" />
                                </div>
                                <h2 className="text-xl font-bold text-white">Root Causes</h2>
                            </div>
                            <ul className="space-y-3">
                                {problem.rootCauses.map((cause, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                        <span className="text-[rgba(244,244,245,0.8)]">{cause}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Solution Preview */}
                    <div className="max-w-3xl mx-auto mb-16 pl-4 pr-4">
                        <div className="rounded-2xl bg-[#af3e4d]/10 border border-[#af3e4d]/20 p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">How We Solve This</h2>
                            <p className="text-[rgba(244,244,245,0.8)] text-lg">
                                {problem.solutionPreview}
                            </p>
                        </div>
                    </div>

                    {/* Recommended Offer (if available from quiz) */}
                    {offer && (
                        <div className="max-w-3xl mx-auto mb-16 pl-4 pr-4">
                            <div className="rounded-3xl bg-[#1a1a24] border border-[rgba(255,255,255,0.05)] p-10 text-center">
                                <span className="text-sm font-semibold text-[#af3e4d] uppercase tracking-wider">
                                    Your Personalized Recommendation
                                </span>
                                <h2 className="text-3xl font-bold text-white mt-3 mb-2">
                                    {offer.offer_name}
                                </h2>
                                <p className="text-lg text-[rgba(244,244,245,0.7)] mb-6">
                                    {offer.price_display}
                                </p>

                                <ul className="text-left max-w-lg mx-auto space-y-3 mb-8">
                                    {offer.rationale_bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#af3e4d] mt-0.5 flex-shrink-0" />
                                            <span className="text-[rgba(244,244,245,0.8)]">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-[rgba(244,244,245,0.7)] mb-6">
                                    {offer.next_step_copy}
                                </p>

                                <Link to="/contact">
                                    <Button variant="glow" size="xl" className="gap-2">
                                        {offer.cta_type === "book_call"
                                            ? "Book Your Strategy Call"
                                            : "Get Started"}
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Fallback CTA (no offer data — direct visit) */}
                    {!offer && (
                        <div className="max-w-3xl mx-auto text-center pl-4 pr-4">
                            <p className="text-lg text-[rgba(244,244,245,0.7)] mb-6">
                                Ready to solve this? Take our free growth assessment to get a
                                personalized recommendation.
                            </p>
                            <Link to="/quiz">
                                <Button variant="glow" size="xl" className="gap-2">
                                    Take the Quiz
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    )}
                </main>
            </div>
        </Layout>
    );
}
