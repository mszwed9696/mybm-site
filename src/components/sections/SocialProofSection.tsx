import { Star, Quote } from "lucide-react";

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
      "No retainer means we only pay for results. Best marketing decision we've ever made. Their ad campaigns consistently deliver a 5x ROAS.",
    name: "Marcus T.",
    role: "E-Commerce Founder",
    industry: "Supplements",
    rating: 5,
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20" style={{ backgroundColor: "#edf2f4" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#af3e4d" }}
          >
            Client Success
          </p>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight"
            style={{ color: "#0a0908" }}
          >
            Trusted by businesses in every industry
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "#fff",
                borderColor: "#e5e7eb",
              }}
            >
              <Quote
                size={28}
                className="mb-4 opacity-15"
                style={{ color: "#af3e4d" }}
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
                style={{ color: "#374151" }}
              >
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#f3f4f6" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: "#af3e4d" }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "#0a0908" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#546a7b" }}>
                    {t.role} · {t.industry}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
