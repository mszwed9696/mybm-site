import { Link } from "react-router-dom";
import logo from "@/assets/logo-transparent.png";

const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/who-we-work-with", label: "Who We Work With" },
    { href: "/how-it-works", label: "How It Works" },
  ],
  resources: [
    { href: "/free-audit", label: "Free Performance Audit" },
    { href: "/contact", label: "Contact Us" },
  ],
  services: [
    { href: "/supplement-marketing-agency", label: "Supplement Marketing" },
    { href: "/supplement-advertising-agency", label: "Supplement Advertising" },
    { href: "/supplement-facebook-ads-agency", label: "Supplement Facebook Ads" },
    { href: "/supplement-google-ads-agency", label: "Supplement Google Ads" },
    { href: "/supplement-tiktok-ads-agency", label: "Supplement TikTok Ads" },
    { href: "/supplement-email-marketing-agency", label: "Supplement Email Marketing" },
    { href: "/supplement-cro-agency", label: "Supplement CRO" },
    { href: "/supplement-funnel-agency", label: "Supplement Funnels" },
  ],
  industries: [
    { href: "/nutraceutical-marketing-agency", label: "Nutraceutical Marketing" },
    { href: "/energy-drink-marketing-agency", label: "Energy Drink Marketing" },
    { href: "/sports-nutrition-marketing-agency", label: "Sports Nutrition Marketing" },
    { href: "/vitamin-brand-marketing-agency", label: "Vitamin Brand Marketing" },
    { href: "/health-supplement-marketing-agency", label: "Health & Wellness Marketing" },
    { href: "/functional-beverage-marketing-agency", label: "Functional Beverage Marketing" },
    { href: "/dtc-supplement-marketing-agency", label: "DTC Supplement Marketing" },
    { href: "/performance-marketing-agency-supplements", label: "Performance Marketing" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-8">
              <img
                src={logo}
                alt="Mind Your Business Media"
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              We don't care to be right. We care about making you money.
              Full-funnel growth engines for supplement and nutraceutical brands.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mind Your Business Media. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-primary mb-4">Industries</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider-glow mt-12 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>Performance-driven growth for supplement brands.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
