import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const keywords = [
 {
 word: "data",
 label: "More Powerful Data",
 description:
 "Precision targeting through first-party data collection, cross-channel attribution, and real-time performance dashboards.",
 },
 {
 word: "leads",
 label: "More Qualified Leads",
 description:
 "AI-powered lead generation that identifies, nurtures, and scores prospects so your sales team only talks to buyers.",
 },
 {
 word: "spend",
 label: "More Accountable Spend",
 description:
 "Every dollar tracked, every campaign measured. We optimize relentlessly so you never waste ad budget again.",
 },
 {
 word: "growth",
 label: "More Profitable Growth",
 description:
 "Retargeting, automation, and full-funnel strategy that compounds your revenue month over month.",
 },
];

export function ValuePropSection() {
 return (
 <section
 className="py-24 md:py-32 relative overflow-hidden"
 style={{ backgroundColor: "#141419" }}
 >
 {/* Subtle gradient accent */}
 <div
 className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
 style={{
 background:
 "radial-gradient(ellipse 60% 80% at 80% 30%, rgba(175, 62, 77, 0.06) 0%, transparent 70%)",
 }}
 />

 <div className="container-wide relative z-10">
 {/* Label */}
 <motion.p
 className="text-label mb-4"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 >
 The Mind Your Business Media Difference
 </motion.p>

 {/* Headline */}
 <motion.h2
 className="heading-section max-w-3xl mb-16"
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.1 }}
 >
 A relentless pursuit of{" "}
 <em>growth</em> for your business.
 </motion.h2>

 {/* Keyword blocks */}
 <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
 {keywords.map((item, idx) => (
 <motion.div
 key={item.word}
 className="group p-8 rounded-2xl transition-all duration-300"
 style={{
 backgroundColor: "rgba(255, 255, 255, 0.03)",
 border: "1px solid rgba(255, 255, 255, 0.06)",
 }}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.1 }}
 whileHover={{
 borderColor: "rgba(175, 62, 77, 0.3)",
 backgroundColor: "rgba(175, 62, 77, 0.04)",
 }}
 >
 <p
 className="text-xs font-bold uppercase tracking-widest mb-3"
 style={{ color: "var(--brand-crimson)" }}
 >
 More
 </p>
 <h3
 className="text-2xl md:text-3xl font-bold mb-3"
 style={{
 fontFamily: "'Poppins', sans-serif",
 color: "var(--brand-light)",
 }}
 >
 {item.label.replace("More ", "")}
 </h3>
 <p
 className="text-sm leading-relaxed"
 style={{ color: "rgba(244, 244, 245, 0.5)" }}
 >
 {item.description}
 </p>
 </motion.div>
 ))}
 </div>

 {/* Bottom CTA */}
 <motion.div
 className="mt-14 text-center"
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 transition={{ delay: 0.5 }}
 >
 <Link
 to="/services"
 className="btn-pill-outline inline-flex items-center gap-2"
 >
 Explore Our Services
 <ArrowRight size={16} />
 </Link>
 </motion.div>
 </div>
 </section>
 );
}
