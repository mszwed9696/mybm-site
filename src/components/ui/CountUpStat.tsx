import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * Animated counter that counts from 0 → target when scrolled into view.
 * Supports values like "65%", "5x", "$450B+", "120%", "40-60%".
 */
export function CountUpStat({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [displayed, setDisplayed] = useState("0");

    useEffect(() => {
        if (!isInView) return;

        // Parse numeric portion from the value string
        const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
        if (!match) {
            setDisplayed(value);
            return;
        }

        const prefix = match[1];   // e.g. "$"
        const target = parseFloat(match[2]);
        const suffix = match[3];   // e.g. "%", "x", "B+"

        const duration = 1200; // ms
        const steps = 40;
        const stepTime = duration / steps;
        let current = 0;

        const interval = setInterval(() => {
            current++;
            const progress = Math.min(current / steps, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const num = Math.round(eased * target);
            setDisplayed(`${prefix}${num}${suffix}`);

            if (current >= steps) clearInterval(interval);
        }, stepTime);

        return () => clearInterval(interval);
    }, [isInView, value]);

    return (
        <div ref={ref} className="text-center">
            <div
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
                style={{ color: "hsl(352 48% 46%)" }}
            >
                {displayed}
            </div>
            <p
                className="mt-2 text-sm md:text-base leading-snug max-w-[200px] mx-auto"
                style={{ color: "hsl(197 24% 94% / 0.7)" }}
            >
                {label}
            </p>
        </div>
    );
}
