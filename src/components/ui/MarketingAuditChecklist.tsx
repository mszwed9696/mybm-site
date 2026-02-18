import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
    Globe, Search, Megaphone, Star, Share2, Bot, ArrowRight,
} from "lucide-react";

const ITEMS = [
    { id: "website", label: "Professional Website", icon: Globe, tip: "Mobile-first, fast-loading, conversion-optimized" },
    { id: "seo", label: "Local SEO & Google Business", icon: Search, tip: "Google Maps, local pack, service-area pages" },
    { id: "ads", label: "Paid Ads (Google / Meta)", icon: Megaphone, tip: "Targeted campaigns with proper conversion tracking" },
    { id: "reviews", label: "Review Generation System", icon: Star, tip: "Automated review requests and reputation management" },
    { id: "social", label: "Social Media Presence", icon: Share2, tip: "Consistent posting, community engagement, social proof" },
    { id: "ai", label: "AI Search Optimization", icon: Bot, tip: "Schema markup, FAQ content, answer-engine readiness" },
];

export function MarketingAuditChecklist() {
    const [checked, setChecked] = useState<Set<string>>(new Set());

    const toggle = (id: string) => {
        setChecked((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const gaps = ITEMS.length - checked.size;

    return (
        <div>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ITEMS.map((item) => {
                    const done = checked.has(item.id);
                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => toggle(item.id)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative text-left rounded-2xl p-5 transition-all duration-300 cursor-pointer"
                            style={{
                                background: done
                                    ? "hsl(197 24% 94% / 0.06)"
                                    : "hsl(30 11% 6%)",
                                border: `1px solid ${done ? "hsl(352 48% 46% / 0.4)" : "hsl(197 24% 94% / 0.08)"}`,
                            }}
                        >
                            {/* Pulsing gap dot */}
                            {!done && (
                                <span
                                    className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full"
                                    style={{
                                        background: "hsl(40 95% 55%)",
                                        boxShadow: "0 0 8px hsl(40 95% 55% / 0.5)",
                                        animation: "pulse 2s ease-in-out infinite",
                                    }}
                                />
                            )}

                            {/* Checkbox indicator */}
                            <div className="flex items-start gap-3">
                                <div
                                    className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-md flex-shrink-0 transition-colors"
                                    style={{
                                        border: `2px solid ${done ? "hsl(352 48% 46%)" : "hsl(197 24% 94% / 0.2)"}`,
                                        background: done ? "hsl(352 48% 46%)" : "transparent",
                                    }}
                                >
                                    {done && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <item.icon size={16} style={{ color: done ? "hsl(352 48% 46%)" : "hsl(197 24% 94% / 0.5)" }} />
                                        <span
                                            className="text-sm font-semibold"
                                            style={{ color: done ? "hsl(197 24% 94% / 0.5)" : "hsl(197 24% 94%)", textDecoration: done ? "line-through" : "none" }}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                    <p className="text-xs mt-1" style={{ color: "hsl(197 24% 94% / 0.35)" }}>
                                        {item.tip}
                                    </p>
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Gap summary */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={gaps}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-5"
                    style={{
                        background: gaps > 0
                            ? "linear-gradient(135deg, hsl(352 48% 46% / 0.12) 0%, hsl(30 11% 6%) 100%)"
                            : "hsl(120 40% 20% / 0.15)",
                        border: `1px solid ${gaps > 0 ? "hsl(352 48% 46% / 0.2)" : "hsl(120 40% 40% / 0.3)"}`,
                    }}
                >
                    <p className="text-sm font-medium" style={{ color: "hsl(197 24% 94%)" }}>
                        {gaps > 0
                            ? `You're missing ${gaps} of ${ITEMS.length} key marketing areas.`
                            : "You've covered all the basics! Let's optimize for maximum impact."}
                    </p>
                    <Link
                        to="/free-audit"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white whitespace-nowrap transition-transform hover:scale-105"
                        style={{ background: "hsl(352 48% 46%)" }}
                    >
                        {gaps > 0 ? "Let's Fix the Gaps" : "Get Advanced Audit"}
                        <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
