import { useParams, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
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
        <Layout>
            <main className="container-wide py-16 md:py-24">
                {/* Hero */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    {leadName && (
                        <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
                            {leadName}'s Personalized Diagnosis
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        {problem.headline}
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        {problem.subheadline}
                    </p>
                </div>

                {/* Problem Description */}
                <div className="max-w-3xl mx-auto mb-16">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                        {problem.description}
                    </p>
                </div>

                {/* Symptoms + Root Causes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    {/* Symptoms */}
                    <div className="card-elevated p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                            </div>
                            <h2 className="text-xl font-bold">Common Symptoms</h2>
                        </div>
                        <ul className="space-y-3">
                            {problem.symptoms.map((symptom, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                    <span className="text-foreground/80">{symptom}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Root Causes */}
                    <div className="card-elevated p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-amber-500" />
                            </div>
                            <h2 className="text-xl font-bold">Root Causes</h2>
                        </div>
                        <ul className="space-y-3">
                            {problem.rootCauses.map((cause, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                    <span className="text-foreground/80">{cause}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Solution Preview */}
                <div className="max-w-3xl mx-auto mb-16">
                    <div className="card-elevated p-8 bg-accent/5 border-accent/20">
                        <h2 className="text-2xl font-bold mb-4">How We Solve This</h2>
                        <p className="text-foreground/80 text-lg">
                            {problem.solutionPreview}
                        </p>
                    </div>
                </div>

                {/* Recommended Offer (if available from quiz) */}
                {offer && (
                    <div className="max-w-3xl mx-auto mb-16">
                        <div className="card-elevated p-10 text-center">
                            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                                Your Personalized Recommendation
                            </span>
                            <h2 className="text-3xl font-bold mt-3 mb-2">
                                {offer.offer_name}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                {offer.price_display}
                            </p>

                            <ul className="text-left max-w-lg mx-auto space-y-3 mb-8">
                                {offer.rationale_bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                        <span className="text-foreground/80">{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-muted-foreground mb-6">
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
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-muted-foreground mb-6">
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
        </Layout>
    );
}
