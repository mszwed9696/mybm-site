import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CTASection({ title, subtitle }: { title?: React.ReactNode; subtitle?: React.ReactNode }) {
    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            style={{ backgroundColor: "#141419" }}
        >
            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(175, 62, 77, 0.06) 0%, transparent 70%)",
                }}
            />

            <div className="container-wide relative z-10">
                <motion.div
                    className="text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-label mb-4">Get Started</p>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "var(--brand-light)",
                        }}
                    >
                        {title || "Ready to get started?"}
                    </h2>
                    <p
                        className="text-lg leading-relaxed mb-10"
                        style={{ color: "rgba(244, 244, 245, 0.5)" }}
                    >
                        {subtitle || (
                            <>
                                Get a free audit of your current marketing — no obligations.<br />
                                Just an honest assessment and actionable next steps.
                            </>
                        )}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/free-audit"
                            className="btn-pill-primary inline-flex items-center gap-2"
                        >
                            Talk to Us
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            to="/services"
                            className="btn-pill-outline inline-flex items-center gap-2"
                        >
                            See What We Do
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
