import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { tools, getLogoUrl, type ToolInfo } from "@/data/toolLogos";

/* ─── Category definitions with real tools ─── */
const categories = [
    {
        id: "field-service",
        label: "Field Service",
        toolKeys: ["servicetitan", "housecallpro", "jobber", "fieldedge", "procore", "buildertrend"],
    },
    {
        id: "medical",
        label: "Medical & Wellness",
        toolKeys: ["dentrix", "janeapp", "mindbody", "weave", "vagaro", "zenoti"],
    },
    {
        id: "crm-sales",
        label: "CRM & Sales",
        toolKeys: ["hubspot", "salesforce", "followupboss", "gohighlevel", "kvcore", "clio"],
    },
    {
        id: "ecommerce",
        label: "E-commerce",
        toolKeys: ["shopify", "klaviyo", "bigcommerce", "gorgias", "recharge", "stripe"],
    },
    {
        id: "restaurant",
        label: "Restaurant & Retail",
        toolKeys: ["toast", "square", "lightspeed", "clover", "sevenshifts"],
    },
    {
        id: "accounting",
        label: "Accounting",
        toolKeys: ["quickbooks", "xero", "freshbooks", "drake"],
    },
] as const;

type CategoryId = (typeof categories)[number]["id"];

function resolveTools(keys: readonly string[]): (ToolInfo & { key: string })[] {
    return keys
        .map((k) => (tools[k] ? { ...tools[k], key: k } : null))
        .filter(Boolean) as (ToolInfo & { key: string })[];
}

/* Flatten all tools for the marquee */
const allToolKeys = Array.from(new Set(categories.flatMap((c) => c.toolKeys)));
const allTools = resolveTools(allToolKeys);

export function IntegrationsSection() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>("field-service");

    const activeCat = categories.find((c) => c.id === activeCategory)!;
    const activeTools = resolveTools(activeCat.toolKeys);

    return (
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#0a0908" }}>
            {/* Subtle gradient bg */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 40% at 50% 0%, hsl(352 48% 46% / 0.06) 0%, transparent 70%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                        style={{ color: "hsl(352 48% 46%)" }}
                    >
                        Integrations
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: "hsl(197 24% 94%)" }}>
                        Integrates with the tools
                        <br />
                        <span style={{ color: "hsl(352 48% 46%)" }}>you already use</span>
                    </h2>
                    <p className="text-base md:text-lg max-w-xl mb-12" style={{ color: "hsl(197 24% 94% / 0.5)" }}>
                        From field service management and CRMs to e-commerce platforms and POS systems — we work
                        with your existing stack.
                    </p>
                </AnimatedSection>

                {/* Category Tabs */}
                <AnimatedSection delay={0.1}>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className="px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer"
                                style={{
                                    background:
                                        activeCategory === cat.id ? "hsl(352 48% 46%)" : "hsl(197 24% 94% / 0.06)",
                                    color: activeCategory === cat.id ? "white" : "hsl(197 24% 94% / 0.5)",
                                    border: `1px solid ${activeCategory === cat.id ? "hsl(352 48% 46%)" : "hsl(197 24% 94% / 0.08)"}`,
                                }}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Integration Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16"
                    >
                        {activeTools.map((tool, i) => (
                            <motion.div
                                key={tool.key}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="rounded-2xl p-5 flex items-center gap-4 group cursor-default"
                                style={{
                                    background: "hsl(197 24% 94% / 0.03)",
                                    border: "1px solid hsl(197 24% 94% / 0.06)",
                                    backdropFilter: "blur(10px)",
                                }}
                            >
                                {/* Real logo from Clearbit */}
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
                                    style={{ background: "white" }}
                                >
                                    <img
                                        src={getLogoUrl(tool.domain, 64)}
                                        alt={tool.name}
                                        className="w-7 h-7 object-contain"
                                        loading="lazy"
                                        onError={(e) => {
                                            // Fallback: show first letter
                                            const target = e.currentTarget;
                                            target.style.display = "none";
                                            const parent = target.parentElement;
                                            if (parent && !parent.querySelector("span")) {
                                                const span = document.createElement("span");
                                                span.textContent = tool.name.charAt(0);
                                                span.style.cssText = "font-weight:800;font-size:18px;color:#af3e4d";
                                                parent.appendChild(span);
                                            }
                                        }}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold" style={{ color: "hsl(197 24% 94%)" }}>
                                        {tool.name}
                                    </p>
                                    <p className="text-xs" style={{ color: "hsl(197 24% 94% / 0.4)" }}>
                                        {tool.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Logo Marquee */}
                <AnimatedSection delay={0.2}>
                    <div className="logo-carousel py-4">
                        <div className="logo-carousel__track" style={{ "--marquee-speed": "45s" } as React.CSSProperties}>
                            {[...allTools, ...allTools].map((tool, i) => (
                                <div
                                    key={`${tool.key}-${i}`}
                                    className="logo-carousel__item flex items-center gap-2 px-5"
                                >
                                    <img
                                        src={getLogoUrl(tool.domain, 40)}
                                        alt={tool.name}
                                        className="h-5 w-5 object-contain"
                                        style={{ filter: "grayscale(1) brightness(2)", opacity: 0.5 }}
                                        loading="lazy"
                                    />
                                    <span className="text-xs font-medium whitespace-nowrap" style={{ color: "hsl(197 24% 94% / 0.3)" }}>
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
