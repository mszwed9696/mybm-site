import { motion } from "motion/react";

const steps = [
 {
 number: "01",
 title: "Data-Driven",
 subtitle: "Precision Targeting",
 description:
 "We collect and analyze first-party data to build custom audiences, optimize ad placements, and eliminate wasted spend before it happens.",
 color: "#af3e4d",
 },
 {
 number: "02",
 title: "AI-Powered",
 subtitle: "Automated Intelligence",
 description:
 "Our AI systems generate leads, score prospects, automate follow-ups, and retarget lost opportunities — 24/7, without missing a beat.",
 color: "#c25565",
 },
 {
 number: "03",
 title: "Omnichannel",
 subtitle: "Unified Strategy",
 description:
 "Google, Meta, TikTok, SEO, Email — every channel works in sync. One integrated system, one source of truth, maximum impact.",
 color: "#d46b78",
 },
 {
 number: "04",
 title: "Results-Based",
 subtitle: "Revenue-First Reporting",
 description:
 "We don't measure vanity metrics. Every dashboard, every report, every recommendation ties directly back to revenue and profit growth.",
 color: "#e6808b",
 },
];

export function MethodologySection() {
 return (
 <section
 className="py-24 md:py-32 relative overflow-hidden"
 style={{ backgroundColor: "#0C0C0F" }}
 >
 <div className="container-wide">
 <div className="grid lg:grid-cols-2 gap-16 items-start">
 {/* ── Left: Copy ── */}
 <div>
 <motion.p
 className="text-label mb-4"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 >
 The Mind Your Business Media Method
 </motion.p>

 <motion.h2
 className="heading-section mb-6"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 >
 Our <em>integrated system</em> for driving exceptional results
 </motion.h2>

 <motion.p
 className="text-body-lg max-w-lg mb-8"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 >
 Nobody minds your business like we do. Our methodology isn't a
 checklist — it's a flywheel. Each stage feeds the next, compounding
 your growth with every cycle.
 </motion.p>
 </div>

 {/* ── Right: Subway Map ── */}
 <div className="relative">
 {/* Vertical track line */}
 <div
 className="absolute left-6 top-0 bottom-0 w-[2px]"
 style={{
 background:
 "linear-gradient(180deg, var(--brand-crimson) 0%, rgba(175,62,77,0.2) 100%)",
 }}
 />

 <div className="space-y-0">
 {steps.map((step, idx) => (
 <motion.div
 key={step.number}
 className="relative flex gap-6 py-8"
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.15 }}
 >
 {/* Node circle */}
 <div className="relative z-10 shrink-0">
 <div
 className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold"
 style={{
 background: step.color,
 color: "#fff",
 boxShadow: `0 0 20px ${step.color}40`,
 }}
 >
 {step.number}
 </div>
 </div>

 {/* Content */}
 <div className="flex-1 pt-1">
 <p
 className="text-xs font-bold uppercase tracking-widest mb-1"
 style={{ color: step.color }}
 >
 {step.subtitle}
 </p>
 <h3
 className="text-xl md:text-2xl font-bold mb-2"
 style={{
 fontFamily: "'Poppins', sans-serif",
 color: "var(--brand-light)",
 }}
 >
 {step.title}
 </h3>
 <p
 className="text-sm leading-relaxed"
 style={{ color: "rgba(244, 244, 245, 0.5)" }}
 >
 {step.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
