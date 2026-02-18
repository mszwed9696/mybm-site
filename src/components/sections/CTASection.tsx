import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-3xl p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0a0908 0%, #1a1a2e 50%, #16213e 100%)",
          }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">
            Get Started Today
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Ready to see what marketing{" "}
            <span style={{ color: "#af3e4d" }}>should</span> look like?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 text-sm md:text-base">
            Get a free audit of your current marketing — no obligations, no
            retainers. Just an honest assessment and actionable next steps.
          </p>
          <Link
            to="/free-audit"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#af3e4d" }}
          >
            Request a Free Audit
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
