import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QUIZ_STEPS, TOTAL_QUIZ_STEPS, EMPTY_QUIZ_ANSWERS } from "@/config/quizConfig";
import type { QuizAnswers } from "@/config/quizConfig";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizStep } from "@/components/quiz/QuizStep";
import { computeRoute } from "@/lib/routing/computeRoute";
import { supabase } from "@/lib/supabaseClient";

export function QuizWizard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswers>(EMPTY_QUIZ_ANSWERS);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const step = QUIZ_STEPS[currentStep];

    // ─── Field Update Handler ───────────────────────────────
    const handleFieldChange = (field: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [field]: value }));
    };

    // ─── Validation ─────────────────────────────────────────
    const isStepValid = (): boolean => {
        if (step.type === "contact") {
            return !!(
                answers.name.trim() &&
                answers.email.trim() &&
                answers.phone.trim() &&
                answers.company.trim() &&
                answers.website.trim()
            );
        }
        const fieldValue = answers[step.field as keyof QuizAnswers];
        return !!fieldValue && fieldValue.trim().length > 0;
    };

    // ─── Navigation ─────────────────────────────────────────
    const goNext = () => {
        if (currentStep < TOTAL_QUIZ_STEPS - 1) {
            setCurrentStep((s) => s + 1);
        }
    };

    const goBack = () => {
        if (currentStep > 0) {
            setCurrentStep((s) => s - 1);
        }
    };

    // ─── Submit ─────────────────────────────────────────────
    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            // 1. Compute route deterministically
            const route = computeRoute(answers);

            // 2. Get UTM params from URL
            const urlParams = new URLSearchParams(window.location.search);

            // 3. Insert lead into Supabase
            const { data: lead, error: leadError } = await supabase
                .from("leads")
                .insert({
                    name: answers.name,
                    email: answers.email,
                    phone: answers.phone,
                    company: answers.company,
                    website: answers.website,
                    sub_niche: answers.sub_niche,
                    monthly_revenue: answers.monthly_revenue,
                    monthly_ad_spend: answers.monthly_ad_spend,
                    primary_platform: answers.primary_platform,
                    primary_pain: answers.primary_pain,
                    lifecycle_maturity: answers.lifecycle_maturity,
                    commerce_channel: answers.commerce_channel,
                    utm_source: urlParams.get("utm_source") || undefined,
                    utm_medium: urlParams.get("utm_medium") || undefined,
                    utm_campaign: urlParams.get("utm_campaign") || undefined,
                    utm_content: urlParams.get("utm_content") || undefined,
                    utm_term: urlParams.get("utm_term") || undefined,
                    referrer: document.referrer || undefined,
                    tags: ["source:quiz", "funnel:quiz-lead"],
                })
                .select("id")
                .single();

            if (leadError) throw leadError;

            // 4. Insert quiz session
            const { error: sessionError } = await supabase
                .from("quiz_sessions")
                .insert({
                    lead_id: lead.id,
                    answers,
                    computed_pain: answers.primary_pain,
                    route_to: route.route_to,
                    recommended_offer: route.recommended_offer,
                    redirect_token: route.redirect_token,
                    completed_at: new Date().toISOString(),
                });

            if (sessionError) throw sessionError;

            // 5. Navigate to the problem page with offer data
            navigate(route.route_to, {
                state: {
                    offer: route.recommended_offer,
                    token: route.redirect_token,
                    leadName: answers.name,
                },
            });
        } catch (error) {
            console.error("Quiz submission error:", error);
            toast({
                title: "Something went wrong",
                description: "Please try again. If the problem persists, contact us directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const isLastStep = currentStep === TOTAL_QUIZ_STEPS - 1;

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <QuizProgress currentStep={currentStep} totalSteps={TOTAL_QUIZ_STEPS} />

            {/* Step Content */}
            <div className="card-elevated p-8 md:p-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                        {step.title}
                    </h2>
                    <p className="text-muted-foreground">{step.subtitle}</p>
                </div>

                <QuizStep
                    step={step}
                    value={answers[step.field as keyof QuizAnswers] || ""}
                    onChange={handleFieldChange}
                    contactValues={
                        step.type === "contact"
                            ? {
                                name: answers.name,
                                email: answers.email,
                                phone: answers.phone,
                                company: answers.company,
                                website: answers.website,
                            }
                            : undefined
                    }
                />

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={goBack}
                        disabled={currentStep === 0}
                        className="gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </Button>

                    {isLastStep ? (
                        <Button
                            type="button"
                            variant="glow"
                            size="lg"
                            onClick={handleSubmit}
                            disabled={!isStepValid() || isSubmitting}
                            className="gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Analyzing...
                                </>
                            ) : (
                                "Get My Recommendation →"
                            )}
                        </Button>
                    ) : (
                        <Button
                            type="button"
                            variant="glow"
                            onClick={goNext}
                            disabled={!isStepValid()}
                            className="gap-2"
                        >
                            Continue
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
