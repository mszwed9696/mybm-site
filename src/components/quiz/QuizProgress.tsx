interface QuizProgressProps {
    currentStep: number;
    totalSteps: number;
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
    const percentage = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="w-full mb-8">
            {/* Step counter */}
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-muted-foreground">
                    Step {currentStep + 1} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-accent">
                    {Math.round(percentage)}%
                </span>
            </div>

            {/* Progress bar */}
            <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent to-purple-400 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* Step dots */}
            <div className="flex items-center justify-between mt-3 px-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i < currentStep
                                ? "bg-accent scale-100"
                                : i === currentStep
                                    ? "bg-accent scale-125 ring-4 ring-accent/20"
                                    : "bg-muted-foreground/20 scale-100"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
