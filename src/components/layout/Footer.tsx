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
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Mind Your Business Media"
                className="h-12 w-auto"
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Get Started</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
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
