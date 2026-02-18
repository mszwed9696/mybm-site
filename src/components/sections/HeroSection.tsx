import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#edf2f4", paddingTop: "7.5rem", paddingBottom: "4rem" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left column: headline + CTAs ── */}
          <div className="max-w-xl">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "#af3e4d" }}
            >
              Performance Marketing Agency
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
              style={{ color: "#0a0908" }}
            >
              A smarter, more effective way to{" "}
              <span style={{ color: "#af3e4d" }}>market your business</span>
            </h1>
            <p
              className="mt-5 text-lg md:text-xl leading-relaxed"
              style={{ color: "#546a7b" }}
            >
              You run your business.{" "}
              <strong style={{ color: "#0a0908" }}>Let Mind Your Business Media run your digital marketing.</strong>{" "}
              No retainers. Only pay for what you need, when you need it.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/free-audit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#af3e4d" }}
              >
                Request an Audit
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold border-2 transition-all duration-300 hover:scale-105"
                style={{
                  color: "#0a0908",
                  borderColor: "#0a0908",
                  backgroundColor: "transparent",
                }}
              >
                Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-2">
                {["#f97316", "#3b82f6", "#22c55e", "#8b5cf6"].map((bg, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: bg }}
                  >
                    {["R", "I", "S", "F"][i]}
                  </div>
                ))}
              </div>
              <p className="text-xs" style={{ color: "#546a7b" }}>
                <strong style={{ color: "#0a0908" }}>27+ industries</strong> served
                across local & online businesses
              </p>
            </div>
          </div>

          {/* ── Right column: VSL placeholder / dashboard preview ── */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-2xl aspect-video flex items-center justify-center group cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl"
                  style={{ backgroundColor: "#af3e4d" }}
                >
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
                <p className="text-white/60 text-sm font-medium">
                  Watch how we drive results
                </p>
              </div>

              {/* Floating accent elements */}
              <div
                className="absolute top-6 right-6 w-20 h-20 rounded-xl opacity-20"
                style={{ backgroundColor: "#af3e4d" }}
              />
              <div
                className="absolute bottom-6 left-6 w-16 h-16 rounded-lg opacity-15"
                style={{ backgroundColor: "#3b82f6" }}
              />
            </div>

            {/* Floating stats card */}
            <div
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 p-4 rounded-xl shadow-lg border"
              style={{
                backgroundColor: "#fff",
                borderColor: "#e5e7eb",
              }}
            >
              <p className="text-xs text-gray-400 mb-1">Avg. Client ROI</p>
              <p className="text-2xl font-black" style={{ color: "#22c55e" }}>
                +312%
              </p>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-3 -right-3 md:-top-5 md:-right-5 px-4 py-2 rounded-full shadow-lg text-xs font-bold text-white"
              style={{ backgroundColor: "#af3e4d" }}
            >
              No Retainers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
