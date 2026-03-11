import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
    {
        quote:
            "Mind Your Business Media completely transformed our online presence. We went from barely showing up on Google to dominating the first page in our area.",
        name: "Sarah M.",
        role: "Real Estate Agent",
        industry: "Real Estate",
        rating: 5,
    },
    {
        quote:
            "The AI automations saved us hours of manual follow-up. Our lead-to-client conversion rate jumped 40% in just 3 months.",
        name: "Dr. James K.",
        role: "Med Spa Owner",
        industry: "Medical",
        rating: 5,
    },
    {
        quote:
            "Their ad campaigns consistently deliver a 5x ROAS. The data-driven approach means we know exactly what's working and where every dollar goes.",
        name: "Marcus T.",
        role: "E-Commerce Founder",
        industry: "Supplements",
        rating: 5,
    },
];

/* Partner logos for the carousel */
const partners = [
    { name: "Google", url: "https://cdn.simpleicons.org/google/white" },
    { name: "Meta", url: "https://cdn.simpleicons.org/meta/white" },
    { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/white" },
    { name: "TikTok", url: "https://cdn.simpleicons.org/tiktok/white" },
    { name: "HubSpot", url: "https://cdn.simpleicons.org/hubspot/white" },
    { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/white" },
];

export function SocialProofSection() {
    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            style={{ backgroundColor: "#141419" }}
        >
            <div className="container-wide">
                {/* ── Logo Carousel ── */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p
                        className="text-center text-xs font-bold uppercase tracking-widest mb-10"
                        style={{ color: "rgba(244, 244, 245, 0.35)" }}
                    >
                        Trusted by industry leaders
                    </p>
                    <div className="logo-carousel">
                        <div className="logo-carousel__track">
                            {[...Array(2)].map((_, setIdx) => (
                                <ul key={setIdx} className="logo-carousel__list flex items-center gap-16 px-8">
                                    {partners.map((partner) => (
                                        <li key={`${setIdx}-${partner.name}`} className="logo-carousel__item">
                                            <img
                                                src={partner.url}
                                                alt={partner.name}
                                                className="h-8 md:h-10 opacity-50 hover:opacity-100 transition-opacity"
                                                style={{ filter: "brightness(0) invert(1)" }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Heading ── */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-label mb-4">Client Success</p>
                    <h2 className="heading-section">
                        Building trust, driving <em>more</em> growth
                    </h2>
                </motion.div>

                {/* ── Testimonial cards ── */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Quote
                                size={28}
                                className="mb-4 opacity-20"
                                style={{ color: "var(--brand-crimson)" }}
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star
                                        key={j}
                                        size={14}
                                        fill="#eab308"
                                        style={{ color: "#eab308" }}
                                    />
                                ))}
                            </div>

                            <p
                                className="text-sm leading-relaxed mb-6"
                                style={{ color: "rgba(244, 244, 245, 0.65)" }}
                            >
                                "{t.quote}"
                            </p>

                            <div
                                className="flex items-center gap-3 pt-4 border-t"
                                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                    style={{ backgroundColor: "var(--brand-crimson)" }}
                                >
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p
                                        className="text-sm font-bold"
                                        style={{ color: "var(--brand-light)" }}
                                    >
                                        {t.name}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{ color: "rgba(244, 244, 245, 0.4)" }}
                                    >
                                        {t.role} · {t.industry}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
