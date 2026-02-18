export function WhoWeHelpSection() {
  return (
    <section className="section-lg bg-section-alt">
      <div className="container-content">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-label text-accent mb-6">Who We Are</p>
          <h2 className="heading-section max-w-3xl mb-10 md:mb-12">
            We Build Growth Engines for{" "}
            <span className="text-gradient-accent">Supplement Brands</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Mind Your Business Media is a performance marketing agency built exclusively for
            supplement, nutraceutical, and health brands. We don't do "general
            marketing" — every system, process, and strategy is designed around
            the unique challenges of this vertical.
          </p>
        </div>

        {/* Mission / Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="card-minimal p-8 md:p-10">
            <p className="text-label text-accent mb-4">Mission</p>
            <p className="text-body-lg text-foreground/85 leading-relaxed">
              To build the most profitable growth systems in the supplement industry —
              where every dollar spent drives measurable, scalable revenue.
            </p>
          </div>
          <div className="card-minimal p-8 md:p-10">
            <p className="text-label text-accent mb-4">Vision</p>
            <p className="text-body-lg text-foreground/85 leading-relaxed">
              A world where supplement brands can scale confidently, backed by
              a partner who is fully invested in their success through performance-aligned
              incentives.
            </p>
          </div>
        </div>

        {/* Founder Quote */}
        <div className="divider-glow mb-12" />
        <blockquote className="max-w-3xl">
          <p className="text-2xl md:text-3xl font-medium text-foreground/85 leading-relaxed italic mb-6">
            "We don't care to be right. We care about making you money."
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
              <span className="text-accent font-bold text-lg">M</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Mike Szwed</p>
              <p className="text-sm text-muted-foreground">Founder, Mind Your Business Media</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
