import { type ReactNode } from "react";

/**
 * HeroWaveBackground — Animated gradient mesh background
 * inspired by Stripe's hero-wave-animation.
 * Uses layered radial gradients with CSS keyframe animations
 * adapted to the Mind Your Business Media brand palette.
 */
export function HeroWaveBackground({ children, className = "" }: { children?: ReactNode; className?: string }) {
    return (
        <div className={`relative overflow-hidden ${className}`} style={{ background: "#0a0908" }}>
            {/* Gradient layers */}
            <div className="hero-wave-layer hero-wave-layer--1" />
            <div className="hero-wave-layer hero-wave-layer--2" />
            <div className="hero-wave-layer hero-wave-layer--3" />
            <div className="hero-wave-layer hero-wave-layer--4" />

            {/* Noise overlay for texture */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
                    opacity: 0.3,
                }}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
