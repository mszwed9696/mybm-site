import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DollarSign, TrendingUp, Users, Zap, ChevronDown, BarChart3 } from "lucide-react";

/**
 * Interactive ROI Calculator — user adjusts monthly ad spend
 * and sees a clear DIY vs. Agency-Managed comparison.
 */
export function ROICalculator({ industryTitle }: { industryTitle: string }) {
    const [spend, setSpend] = useState(2000);
    const [showAssumptions, setShowAssumptions] = useState(false);

    // Industry-average figures (conservative estimates)
    const assumptions = {
        baseCpl: 45,           // DIY cost per lead
        agencyCpl: 29,         // Agency CPL (35% lower via optimized targeting)
        baseCloseRate: 0.12,   // DIY close rate
        agencyCloseRate: 0.18, // Agency close rate (50% higher via better landing pages)
        avgJobValue: 1800,     // Average job/customer value
    };

    const diy = useMemo(() => {
        const leads = Math.round(spend / assumptions.baseCpl);
        const customers = Math.round(leads * assumptions.baseCloseRate);
        const revenue = customers * assumptions.avgJobValue;
        const roi = spend > 0 ? ((revenue - spend) / spend) * 100 : 0;
        return { leads, customers, revenue, roi };
    }, [spend]);

    const agency = useMemo(() => {
        const leads = Math.round(spend / assumptions.agencyCpl);
        const customers = Math.round(leads * assumptions.agencyCloseRate);
        const revenue = customers * assumptions.avgJobValue;
        const roi = spend > 0 ? ((revenue - spend) / spend) * 100 : 0;
        return { leads, customers, revenue, roi };
    }, [spend]);

    const maxSpend = 10000;
    const pct = (spend / maxSpend) * 100;

    const revLift = agency.revenue - diy.revenue;

    return (
        <div
            className="rounded-3xl overflow-hidden"
            style={{
                background: "linear-gradient(135deg, rgba(10,9,8,0.95) 0%, rgba(20,18,16,0.95) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
        >
            {/* Header */}
            <div className="px-6 sm:px-10 pt-8 pb-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "hsl(352 48% 46%)" }}>
                    ROI Estimator
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mt-2" style={{ color: "hsl(197 24% 94%)" }}>
                    What could your budget do for {industryTitle}?
                </h3>
            </div>

            {/* Slider */}
            <div className="px-6 sm:px-10 py-8">
                <label className="block text-sm font-medium mb-4" style={{ color: "hsl(197 24% 94% / 0.6)" }}>
                    Monthly Ad Spend
                </label>
                <div className="relative">
                    <input
                        type="range"
                        min={500}
                        max={maxSpend}
                        step={100}
                        value={spend}
                        onChange={(e) => setSpend(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{
                            background: `linear-gradient(to right, hsl(352 48% 46%) 0%, hsl(352 48% 46%) ${pct}%, hsl(197 24% 94% / 0.1) ${pct}%, hsl(197 24% 94% / 0.1) 100%)`,
                        }}
                    />
                    <div className="flex justify-between mt-2 text-xs" style={{ color: "hsl(197 24% 94% / 0.4)" }}>
                        <span>$500</span>
                        <span className="text-lg font-bold" style={{ color: "hsl(197 24% 94%)" }}>
                            ${spend.toLocaleString()}/mo
                        </span>
                        <span>$10,000</span>
                    </div>
                </div>
            </div>

            {/* DIY vs Agency Side-by-Side */}
            <div className="px-6 sm:px-10 pb-6">
                <div className="grid md:grid-cols-2 gap-4">
                    {/* DIY Card */}
                    <div
                        className="rounded-2xl p-6"
                        style={{
                            background: "hsl(197 24% 94% / 0.03)",
                            border: "1px solid hsl(197 24% 94% / 0.06)",
                        }}
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-2 h-2 rounded-full" style={{ background: "hsl(197 24% 94% / 0.3)" }} />
                            <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "hsl(197 24% 94% / 0.5)" }}>
                                DIY Marketing
                            </p>
                        </div>
                        {[
                            { icon: Users, label: "Est. Leads / mo", val: diy.leads.toString() },
                            { icon: Zap, label: "Est. Customers / mo", val: diy.customers.toString() },
                            { icon: DollarSign, label: "Est. Revenue / mo", val: `$${diy.revenue.toLocaleString()}` },
                            { icon: TrendingUp, label: "Est. ROI", val: `${Math.round(diy.roi)}%` },
                        ].map((m) => (
                            <div key={m.label} className="flex items-center justify-between py-2.5 border-b" style={{ borderColor: "hsl(197 24% 94% / 0.04)" }}>
                                <div className="flex items-center gap-2">
                                    <m.icon size={14} style={{ color: "hsl(197 24% 94% / 0.3)" }} />
                                    <span className="text-xs" style={{ color: "hsl(197 24% 94% / 0.5)" }}>{m.label}</span>
                                </div>
                                <motion.span
                                    key={m.val}
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm font-bold"
                                    style={{ color: "hsl(197 24% 94% / 0.7)" }}
                                >
                                    {m.val}
                                </motion.span>
                            </div>
                        ))}
                    </div>

                    {/* Agency Card */}
                    <div
                        className="rounded-2xl p-6 relative overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, hsl(352 48% 46% / 0.12) 0%, hsl(352 48% 46% / 0.04) 100%)",
                            border: "1px solid hsl(352 48% 46% / 0.25)",
                            boxShadow: "0 0 40px hsl(352 48% 46% / 0.08)",
                        }}
                    >
                        {/* Shine */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
                            }}
                        />
                        <div className="relative">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-2 h-2 rounded-full" style={{ background: "hsl(352 48% 46%)" }} />
                                <p className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "hsl(352 48% 46%)" }}>
                                    Agency-Managed
                                </p>
                                <span
                                    className="ml-auto text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                                    style={{ background: "hsl(352 48% 46% / 0.2)", color: "hsl(352 65% 65%)" }}
                                >
                                    Recommended
                                </span>
                            </div>
                            {[
                                { icon: Users, label: "Est. Leads / mo", val: agency.leads.toString() },
                                { icon: Zap, label: "Est. Customers / mo", val: agency.customers.toString() },
                                { icon: DollarSign, label: "Est. Revenue / mo", val: `$${agency.revenue.toLocaleString()}` },
                                { icon: TrendingUp, label: "Est. ROI", val: `${Math.round(agency.roi)}%` },
                            ].map((m) => (
                                <div key={m.label} className="flex items-center justify-between py-2.5 border-b" style={{ borderColor: "hsl(352 48% 46% / 0.1)" }}>
                                    <div className="flex items-center gap-2">
                                        <m.icon size={14} style={{ color: "hsl(352 48% 46%)" }} />
                                        <span className="text-xs" style={{ color: "hsl(197 24% 94% / 0.6)" }}>{m.label}</span>
                                    </div>
                                    <motion.span
                                        key={m.val}
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-sm font-bold"
                                        style={{ color: "hsl(197 24% 94%)" }}
                                    >
                                        {m.val}
                                    </motion.span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Revenue Lift Banner */}
                {revLift > 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 rounded-xl px-6 py-4 flex items-center justify-between"
                        style={{
                            background: "linear-gradient(135deg, hsl(352 48% 46% / 0.15) 0%, hsl(352 48% 46% / 0.05) 100%)",
                            border: "1px solid hsl(352 48% 46% / 0.15)",
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <BarChart3 size={20} style={{ color: "hsl(352 48% 46%)" }} />
                            <div>
                                <p className="text-xs" style={{ color: "hsl(197 24% 94% / 0.5)" }}>
                                    Potential monthly revenue uplift
                                </p>
                                <motion.p
                                    key={revLift}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-lg font-black"
                                    style={{ color: "hsl(352 65% 65%)" }}
                                >
                                    +${revLift.toLocaleString()}/mo
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Assumptions Expandable */}
            <div className="px-6 sm:px-10 pb-6">
                <button
                    onClick={() => setShowAssumptions(!showAssumptions)}
                    className="flex items-center gap-2 text-xs cursor-pointer transition-colors"
                    style={{ color: "hsl(197 24% 94% / 0.35)" }}
                >
                    <ChevronDown
                        size={14}
                        className="transition-transform"
                        style={{ transform: showAssumptions ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                    How we estimate this
                </button>
                <AnimatePresence>
                    {showAssumptions && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div
                                className="mt-3 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3"
                                style={{ background: "hsl(197 24% 94% / 0.03)", border: "1px solid hsl(197 24% 94% / 0.06)" }}
                            >
                                {[
                                    { label: "DIY Cost per Lead", val: `$${assumptions.baseCpl}`, note: "Industry average" },
                                    { label: "Agency Cost per Lead", val: `$${assumptions.agencyCpl}`, note: "35% lower via optimized targeting" },
                                    { label: "DIY Close Rate", val: `${(assumptions.baseCloseRate * 100).toFixed(0)}%`, note: "Typical without CRO" },
                                    { label: "Agency Close Rate", val: `${(assumptions.agencyCloseRate * 100).toFixed(0)}%`, note: "50% lift via landing pages" },
                                    { label: "Avg. Job Value", val: `$${assumptions.avgJobValue.toLocaleString()}`, note: "Industry median" },
                                ].map((item) => (
                                    <div key={item.label} className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs font-medium" style={{ color: "hsl(197 24% 94% / 0.6)" }}>{item.label}</p>
                                            <p className="text-[10px]" style={{ color: "hsl(197 24% 94% / 0.3)" }}>{item.note}</p>
                                        </div>
                                        <span className="text-xs font-bold" style={{ color: "hsl(197 24% 94% / 0.8)" }}>{item.val}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] mt-2 italic" style={{ color: "hsl(197 24% 94% / 0.25)" }}>
                                * Estimates based on industry averages for {industryTitle.toLowerCase()}. Individual results vary based on market, competition, and campaign execution.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
