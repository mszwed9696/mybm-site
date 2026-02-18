import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CMO, VitalBlend Supplements",
    quote:
      "Mind Your Business Media completely transformed our ad performance. We went from a 1.2x ROAS to consistently hitting 4x+ within 60 days. Their understanding of the supplement space is unmatched.",
    rating: 5,
  },
  {
    name: "James Rivera",
    title: "Founder, Peak Nutrition Co.",
    quote:
      "The full-funnel approach is what sets Mind Your Business Media apart. They didn't just run ads — they rebuilt our entire acquisition system. Revenue is up 300% since we started.",
    rating: 5,
  },
  {
    name: "Dr. Anita Patel",
    title: "CEO, PurePath Wellness",
    quote:
      "We tried three agencies before Mind Your Business Media. None of them understood compliance and performance the way this team does. They're a true extension of our brand.",
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    title: "VP Growth, FitCore Labs",
    quote:
      "The revenue share model meant Mind Your Business Media was as invested in our success as we were. That alignment shows up in every decision and every campaign they run.",
    rating: 5,
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="section-lg">
      <div className="container-content">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-label text-accent mb-6">Testimonials</p>
          <h2 className="heading-section max-w-2xl">
            What Our Partners{" "}
            <span className="text-gradient-accent">Say</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-foreground/80 leading-relaxed mb-8">
                "{t.quote}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-semibold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
