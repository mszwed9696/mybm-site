import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PageHeroProps {
    label?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
}

export function PageHero({ label, title, description }: PageHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [progress, setProgress] = useState(0);

    // Track scroll to calculate progress for the transition effect
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight;

            let p = scrollY / maxScroll;
            if (p < 0) p = 0;
            if (p > 1) p = 1;

            setProgress(p);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate dynamic styles based on scroll progress
    const scale = 1 - (progress * 0.05); // Scales down to 0.95
    const borderRadius = progress * 40; // Curves up to 40px
    const dimming = progress * 0.5; // Dims slightly

    return (
        <section
            ref={sectionRef}
            className="relative h-auto min-h-[100svh] md:h-[200vh]"
            style={{ backgroundColor: "#0C0C0F", zIndex: 0 }}
        >
            {/* ── Sticky Inner Container ── */}
            <div className="relative md:sticky top-0 min-h-[100svh] md:min-h-0 h-screen w-full overflow-hidden flex items-center justify-start origin-top"
                style={{
                    transform: `scale(${scale})`,
                    borderRadius: `${borderRadius}px`,
                    willChange: "transform, border-radius",
                    transition: "transform 0.1s ease-out, border-radius 0.1s ease-out"
                }}
            >
                {/* ── Cinematic Video Background ── */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/media/hero-background.mp4"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ opacity: 0.5 }}
                />

                {/* ── Dynamic dimming overlay on scroll ── */}
                <div
                    className="absolute inset-0 bg-black z-[1] pointer-events-none"
                    style={{ opacity: dimming, transition: "opacity 0.1s ease-out" }}
                />

                {/* ── Gradient overlays ── */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background:
                            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(175, 62, 77, 0.08) 0%, transparent 70%)",
                    }}
                />
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 80% at 30% 60%, rgba(123, 45, 58, 0.06) 0%, transparent 70%)",
                    }}
                />

                {/* ── Content ── */}
                <div className="relative md:absolute inset-0 z-10 w-full px-6 md:px-12 lg:px-24 pt-32 md:pt-48 pb-24 flex flex-col justify-center">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Label */}
                        {label && (
                            <p
                                className="text-label mb-6 fade-in-up"
                                style={{ color: "var(--brand-crimson)" }}
                            >
                                {label}
                            </p>
                        )}

                        {/* Main headline */}
                        <h1 className="heading-hero fade-in-up delay-100 text-4xl sm:text-5xl md:text-7xl">
                            {title}
                        </h1>

                        {/* Subhead */}
                        {description && (
                            <p
                                className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto fade-in-up delay-200"
                                style={{ color: "rgba(244, 244, 245, 0.6)" }}
                            >
                                {description}
                            </p>
                        )}
                    </div>

                    {/* ── Scroll indicator ── */}
                    <div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity"
                        style={{ opacity: 1 - progress * 2 }}
                    >
                        <div className="scroll-indicator">
                            <ArrowRight size={16} className="rotate-90 text-white/40" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
