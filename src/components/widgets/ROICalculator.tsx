import { useState, useEffect, useRef } from "react";
import type { ROICalculatorConfig } from "@/data/servicePages";

interface Props {
    config: ROICalculatorConfig;
    accentColor: string;
}

export function ROICalculator({ config, accentColor }: Props) {
    const [inputValue, setInputValue] = useState(config.inputDefault);
    const results = config.calculate(inputValue);

    /* Animated number refs */
    const percentage =
        ((inputValue - config.inputMin) / (config.inputMax - config.inputMin)) * 100;

    return (
        <div
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0a0908 0%, #1a1a2e 100%)",
                border: "1px solid hsl(197 24% 94% / 0.08)",
            }}
        >
            {/* Decorative glow */}
            <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20"
                style={{ background: accentColor }}
            />

            {/* Title */}
            <h3
                className="text-xl md:text-2xl font-bold mb-2"
                style={{ color: "hsl(197 24% 94%)" }}
            >
                Calculate Your ROI
            </h3>
            <p className="text-sm mb-8" style={{ color: "hsl(197 24% 94% / 0.5)" }}>
                Adjust the slider to see projected results based on industry benchmarks.
            </p>

            {/* Slider Input */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                    <label
                        className="text-sm font-semibold"
                        style={{ color: "hsl(197 24% 94% / 0.7)" }}
                    >
                        {config.inputLabel}
                    </label>
                    <span
                        className="text-2xl font-black tabular-nums"
                        style={{ color: accentColor }}
                    >
                        {config.inputUnit === "$" && "$"}
                        {inputValue.toLocaleString()}
                        {config.inputUnit !== "$" && config.inputUnit !== "" && config.inputUnit}
                    </span>
                </div>

                {/* Custom slider */}
                <div className="relative h-3 rounded-full" style={{ background: "hsl(197 24% 94% / 0.08)" }}>
                    <div
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-150"
                        style={{
                            width: `${percentage}%`,
                            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc)`,
                        }}
                    />
                    <input
                        type="range"
                        min={config.inputMin}
                        max={config.inputMax}
                        step={config.inputStep}
                        value={inputValue}
                        onChange={(e) => setInputValue(Number(e.target.value))}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        style={{ zIndex: 10 }}
                    />
                    {/* Thumb indicator */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 shadow-lg pointer-events-none transition-all duration-150"
                        style={{
                            left: `calc(${percentage}% - 10px)`,
                            background: "#fff",
                            borderColor: accentColor,
                            boxShadow: `0 0 12px ${accentColor}66`,
                        }}
                    />
                </div>

                <div
                    className="flex justify-between text-xs mt-2"
                    style={{ color: "hsl(197 24% 94% / 0.3)" }}
                >
                    <span>
                        {config.inputUnit === "$" && "$"}
                        {config.inputMin.toLocaleString()}
                        {config.inputUnit !== "$" && config.inputUnit !== "" && config.inputUnit}
                    </span>
                    <span>
                        {config.inputUnit === "$" && "$"}
                        {config.inputMax.toLocaleString()}
                        {config.inputUnit !== "$" && config.inputUnit !== "" && config.inputUnit}
                    </span>
                </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4">
                {results.map((result, i) => (
                    <ResultCard
                        key={result.label}
                        label={result.label}
                        value={result.value}
                        accentColor={accentColor}
                        index={i}
                    />
                ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
                <a
                    href="/free-audit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
                    style={{ background: accentColor }}
                >
                    Get My Free ROI Analysis →
                </a>
                <p className="text-xs mt-3" style={{ color: "hsl(197 24% 94% / 0.3)" }}>
                    Based on industry-average benchmarks. Your results may vary.
                </p>
            </div>
        </div>
    );
}

/* ── Animated result card ── */
function ResultCard({
    label,
    value,
    accentColor,
    index,
}: {
    label: string;
    value: string;
    accentColor: string;
    index: number;
}) {
    const [displayValue, setDisplayValue] = useState(value);
    const prevValue = useRef(value);

    useEffect(() => {
        if (prevValue.current !== value) {
            // Trigger a brief flash effect
            setDisplayValue(value);
            prevValue.current = value;
        }
    }, [value]);

    return (
        <div
            className="rounded-2xl p-5 transition-all duration-300"
            style={{
                background: "hsl(197 24% 94% / 0.04)",
                border: "1px solid hsl(197 24% 94% / 0.06)",
            }}
        >
            <p
                className="text-2xl md:text-3xl font-black mb-1 tabular-nums transition-all duration-300"
                style={{ color: accentColor }}
            >
                {displayValue}
            </p>
            <p
                className="text-xs font-medium"
                style={{ color: "hsl(197 24% 94% / 0.5)" }}
            >
                {label}
            </p>
        </div>
    );
}
