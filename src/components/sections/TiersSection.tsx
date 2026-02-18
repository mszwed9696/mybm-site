import { motion } from "motion/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
    MapPin,
    Globe,
    Store,
    ArrowRight,
    CheckCircle2,
    Search,
    Users,
    ShoppingCart,
    Megaphone,
    BarChart3,
    Smartphone,
    MonitorSmartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const segments = [
    {
        icon: <Store size={28} />,
        badge: "Local Business",
        title: "Brick-and-mortar & service-area",
        subtitle: "You serve customers in a defined geography",
        description:
            "You're an HVAC company, dental practice, law firm, or restaurant — your customers find you through local search, maps, and word of mouth. We dominate your local market.",
        color: "hsl(217 71% 53%)",      // blue
        bgLight: "hsl(217 71% 97%)",
        examples: [
            "HVAC • Plumbing • Roofing",
            "Dental • Chiropractic • Med Spa",
            "Law Firms • Accounting",
            "Restaurants • Auto Repair",
        ],
        capabilities: [
            { icon: <MapPin size={16} />, label: "Google Business & Maps domination" },
            { icon: <Search size={16} />, label: "Local SEO & geo-specific keywords" },
            { icon: <Users size={16} />, label: "Reviews management & reputation" },
            { icon: <Megaphone size={16} />, label: "Local paid search & social ads" },
            { icon: <Smartphone size={16} />, label: "Listings across 60+ directories" },
            { icon: <BarChart3 size={16} />, label: "Lead tracking & ROI reporting" },
        ],
        ctaLabel: "See local marketing",
        ctaLink: "/industries",
    },
    {
        icon: <Globe size={28} />,
        badge: "Nationwide / Global",
        title: "E-commerce & digital-first",
        subtitle: "Your customers can be anywhere in the world",
        description:
            "You're a Shopify brand, subscription box, SaaS product, or DTC company — your revenue comes from the web and you need to scale nationally or globally.",
        color: "hsl(271 64% 57%)",       // purple
        bgLight: "hsl(271 64% 97%)",
        examples: [
            "Fashion & Apparel DTC",
            "Health & Supplements",
            "Home Goods & Furniture",
            "Subscription Boxes",
        ],
        capabilities: [
            { icon: <ShoppingCart size={16} />, label: "E-commerce SEO & content strategy" },
            { icon: <Megaphone size={16} />, label: "Meta, TikTok & Google Ads" },
            { icon: <MonitorSmartphone size={16} />, label: "Conversion rate optimization" },
            { icon: <Users size={16} />, label: "Email & SMS marketing (Klaviyo)" },
            { icon: <BarChart3 size={16} />, label: "Analytics & attribution modeling" },
            { icon: <Globe size={16} />, label: "Nationwide / international SEO" },
        ],
        ctaLabel: "See e-commerce marketing",
        ctaLink: "/industries",
    },
];

export function TiersSection() {
    return (
        <section className="py-20 md:py-28" style={{ backgroundColor: "#f9fafb" }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <p
                            className="text-sm font-bold uppercase tracking-widest mb-3"
                            style={{ color: "#af3e4d" }}
                        >
                            Who We Serve
                        </p>
                        <h2
                            className="text-3xl md:text-4xl font-black tracking-tight"
                            style={{ color: "#0a0908" }}
                        >
                            Two types of businesses.{" "}
                            <span style={{ color: "#af3e4d" }}>One agency.</span>
                        </h2>
                        <p className="mt-4 text-lg" style={{ color: "#6b7280" }}>
                            Whether your customers are down the street or across the globe,
                            we build the playbook that drives real revenue.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Two segment cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {segments.map((seg, idx) => (
                        <AnimatedSection key={seg.badge} delay={idx * 0.1}>
                            <motion.div
                                whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="rounded-3xl p-8 md:p-10 h-full flex flex-col"
                                style={{
                                    background: "white",
                                    border: `2px solid ${seg.color}20`,
                                }}
                            >
                                {/* Badge + Icon */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div
                                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                                        style={{ background: seg.bgLight, color: seg.color }}
                                    >
                                        {seg.icon}
                                    </div>
                                    <span
                                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                        style={{
                                            background: seg.bgLight,
                                            color: seg.color,
                                        }}
                                    >
                                        {seg.badge}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-black mb-1" style={{ color: "#0a0908" }}>
                                    {seg.title}
                                </h3>
                                <p className="text-sm font-medium mb-4" style={{ color: "#9ca3af" }}>
                                    {seg.subtitle}
                                </p>
                                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6b7280" }}>
                                    {seg.description}
                                </p>

                                {/* Industry examples */}
                                <div className="mb-6">
                                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#9ca3af" }}>
                                        Industries we serve
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {seg.examples.map((ex) => (
                                            <span
                                                key={ex}
                                                className="text-xs px-3 py-1 rounded-full font-medium"
                                                style={{
                                                    background: seg.bgLight,
                                                    color: seg.color,
                                                }}
                                            >
                                                {ex}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Capabilities */}
                                <div className="flex-1">
                                    <ul className="space-y-2.5 mb-8">
                                        {seg.capabilities.map((cap) => (
                                            <li key={cap.label} className="flex items-center gap-3">
                                                <CheckCircle2
                                                    size={16}
                                                    style={{ color: seg.color, flexShrink: 0 }}
                                                />
                                                <span className="text-sm" style={{ color: "#374151" }}>
                                                    {cap.label}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <Link
                                    to={seg.ctaLink}
                                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all"
                                    style={{
                                        background: seg.color,
                                        color: "white",
                                    }}
                                >
                                    {seg.ctaLabel}
                                    <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Bottom note */}
                <AnimatedSection delay={0.2}>
                    <p className="text-center text-sm mt-10" style={{ color: "#9ca3af" }}>
                        Not sure where you fit?{" "}
                        <Link to="/free-audit" className="underline font-semibold" style={{ color: "#af3e4d" }}>
                            Get a free audit
                        </Link>{" "}
                        and we'll build a custom plan for your business model.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
