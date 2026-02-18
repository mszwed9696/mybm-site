import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoTransparent from "../../assets/logo-transparent.png";

const footerSections = [
  {
    heading: "Services",
    links: [
      { label: "Ad Campaigns", href: "/services/ad-campaigns" },
      { label: "SEO & Organic", href: "/services/seo" },
      { label: "AI Solutions", href: "/services/ai-solutions" },
      { label: "Website Design", href: "/services/website-design" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "Reviews Management", href: "/services/reviews" },
      { label: "Pricing", href: "/services/pricing" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Home Services", href: "/industries/hvac" },
      { label: "Medical & Wellness", href: "/industries/dentists" },
      { label: "Real Estate", href: "/industries/real-estate" },
      { label: "E-Commerce", href: "/industries/e-commerce" },
      { label: "Supplement Brands", href: "/industries/supplements" },
      { label: "All Industries", href: "/industries" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Marketing Quiz", href: "/resources/marketing-quiz" },
      { label: "Business Listing Scan", href: "/resources/listing-scan" },
      { label: "Marketing Score", href: "/resources/marketing-score" },
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/blog/case-studies" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Client Reviews", href: "/about/reviews" },
      { label: "Client Support", href: "/support" },
      { label: "Client Login", href: "/login" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0908" }}>
      {/* ── CTA banner ── */}
      <div
        className="py-16 text-center"
        style={{
          background:
            "linear-gradient(135deg, #af3e4d 0%, #8b2a3a 100%)",
        }}
      >
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
          Ready to grow your business?
        </h2>
        <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm md:text-base">
          No retainers. No lock-ins. Just proven, solution-driven marketing.
        </p>
        <Link
          to="/free-audit"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[#af3e4d] bg-white transition-all hover:scale-105 hover:shadow-xl"
        >
          Request an Audit
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* ── Footer columns ── */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-1.5 mb-4">
              <img src={logoTransparent} alt="Mind Your Business Media" className="h-12 w-auto" />
            </Link>
            <p className="text-xs text-white/40 leading-relaxed">
              Performance marketing for every industry. Only pay for what you
              need, when you need it.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                {section.heading}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div
          className="w-full h-px my-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* ── Bottom row ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link
              to="/terms"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Mind Your Business Media LLC. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
