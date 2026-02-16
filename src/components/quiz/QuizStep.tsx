import type { QuizStepConfig, QuizOption } from "@/config/quizConfig";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuizStepProps {
    step: QuizStepConfig;
    value: string | Record<string, string>;
    onChange: (field: string, value: string) => void;
    contactValues?: {
        name: string;
        email: string;
        phone: string;
        company: string;
        website: string;
    };
}

export function QuizStep({ step, value, onChange, contactValues }: QuizStepProps) {
    if (step.type === "contact") {
        return <ContactStep onChange={onChange} values={contactValues} />;
    }

    if (step.type === "radio") {
        return (
            <RadioStep
                step={step}
                selectedValue={value as string}
                onChange={(val) => onChange(step.field, val)}
            />
        );
    }

    return null;
}

// ─── Radio Step ─────────────────────────────────────────────

interface RadioStepProps {
    step: QuizStepConfig;
    selectedValue: string;
    onChange: (value: string) => void;
}

function RadioStep({ step, selectedValue, onChange }: RadioStepProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {step.options?.map((option: QuizOption) => (
                <button
                    key={option.value}
                    type="button"
                    onClick={() => onChange(option.value)}
                    className={`group relative p-4 rounded-xl border-2 text-left transition-all duration-200 ${selectedValue === option.value
                            ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                            : "border-border hover:border-accent/50 hover:bg-muted/50"
                        }`}
                >
                    {/* Radio indicator */}
                    <div className="flex items-start gap-3">
                        <div
                            className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${selectedValue === option.value
                                    ? "border-accent bg-accent"
                                    : "border-muted-foreground/30 group-hover:border-accent/50"
                                }`}
                        >
                            {selectedValue === option.value && (
                                <div className="w-2 h-2 rounded-full bg-white" />
                            )}
                        </div>

                        <div>
                            <span className="font-medium text-foreground block">
                                {option.label}
                            </span>
                            {option.description && (
                                <span className="text-sm text-muted-foreground mt-0.5 block">
                                    {option.description}
                                </span>
                            )}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
}

// ─── Contact Step ───────────────────────────────────────────

interface ContactStepProps {
    onChange: (field: string, value: string) => void;
    values?: {
        name: string;
        email: string;
        phone: string;
        company: string;
        website: string;
    };
}

function ContactStep({ onChange, values }: ContactStepProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
                <Label htmlFor="quiz-name">Full Name *</Label>
                <Input
                    id="quiz-name"
                    value={values?.name || ""}
                    onChange={(e) => onChange("name", e.target.value)}
                    required
                    className="input-glow"
                    placeholder="John Smith"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="quiz-email">Email Address *</Label>
                <Input
                    id="quiz-email"
                    type="email"
                    value={values?.email || ""}
                    onChange={(e) => onChange("email", e.target.value)}
                    required
                    className="input-glow"
                    placeholder="john@supplement.com"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="quiz-phone">Phone Number *</Label>
                <Input
                    id="quiz-phone"
                    type="tel"
                    value={values?.phone || ""}
                    onChange={(e) => onChange("phone", e.target.value)}
                    required
                    className="input-glow"
                    placeholder="+1 (555) 000-0000"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="quiz-company">Company Name *</Label>
                <Input
                    id="quiz-company"
                    value={values?.company || ""}
                    onChange={(e) => onChange("company", e.target.value)}
                    required
                    className="input-glow"
                    placeholder="Supplement Co."
                />
            </div>

            <div className="space-y-2 md:col-span-2">
                <Label htmlFor="quiz-website">Website *</Label>
                <Input
                    id="quiz-website"
                    type="url"
                    value={values?.website || ""}
                    onChange={(e) => onChange("website", e.target.value)}
                    required
                    className="input-glow"
                    placeholder="https://yoursupplement.com"
                />
            </div>
        </div>
    );
}
