import { Link } from "react-router-dom";
import {
    Megaphone,
    Search,
    Bot,
    Globe,
    Share2,
    Star,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        Icon: Megaphone,
        title: "Ad Campaigns",
        desc: "Search, display, and social ads powered by data-driven strategy to reach more customers.",
        href: "/services/ad-campaigns",
        accent: "#f97316",
    },
    {
        Icon: Search,
        title: "SEO & Organic Marketing",
        desc: "Dominate search results with fully-managed SEO, content strategy, and local optimization.",
        href: "/services/seo",
        accent: "#3b82f6",
    },
    {
        Icon: Bot,
        title: "AI Solutions & Automations",
        desc: "Automate lead follow-up, appointment booking, and marketing workflows with AI.",
        href: "/services/ai-solutions",
        accent: "#8b5cf6",
    },
    {
        Icon: Globe,
        title: "Website Design",
        desc: "Custom-coded and proven fast solutions — responsive, fast, and built to convert.",
        href: "/services/website-design",
        accent: "#14b8a6",
    },
    {
        Icon: Share2,
        title: "Social Media Marketing",
        desc: "Build brand awareness and engagement across Facebook, Instagram, TikTok, and LinkedIn.",
        href: "/services/social-media",
        accent: "#ec4899",
    },
    {
        Icon: Star,
        title: "Reviews Management",
        desc: "Monitor, respond to, and grow your online reviews to build trust and credibility.",
        href: "/services/reviews",
        accent: "#eab308",
    },
];

export function ServicesCardsSection() {
    return (
        <section className="py-20" style={{ backgroundColor: "#fff" }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p
                        className="text-sm font-bold uppercase tracking-widest mb-3"
                        style={{ color: "#af3e4d" }}
                    >
                        What We Do
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-black tracking-tight"
                        style={{ color: "#0a0908" }}
                    >
                        All the marketing you need, all working together
                    </h2>
                    <p className="mt-3 text-base" style={{ color: "#546a7b" }}>
                        Our integrated approach ensures every channel works in sync to
                        drive lower lead costs and higher ROI.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ Icon, title, desc, href, accent }) => (
                        <Link
                            key={title}
                            to={href}
                            className="group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            style={{
                                backgroundColor: "#fff",
                                borderColor: "#e5e7eb",
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                style={{ backgroundColor: `${accent}15` }}
                            >
                                <Icon size={22} style={{ color: accent }} />
                            </div>

                            <h3
                                className="text-lg font-bold mb-2 group-hover:text-[#af3e4d] transition-colors"
                                style={{ color: "#0a0908" }}
                            >
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#546a7b" }}>
                                {desc}
                            </p>

                            <span
                                className="inline-flex items-center gap-1 mt-4 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1"
                                style={{ color: accent }}
                            >
                                Learn more <ArrowRight size={14} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
