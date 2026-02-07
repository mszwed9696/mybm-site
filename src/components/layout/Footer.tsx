import { Link } from "react-router-dom";
import logo from "@/assets/logo-transparent.png";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/free-audit", label: "Free Audit" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/30">
      <div className="container-wide py-20 md:py-28 lg:py-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-10">
              <img
                src={logo}
                alt="Mind Your Business Media"
                className="h-20 md:h-24 w-auto"
              />
            </Link>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-8">
              We don't care to be right. We care about making you money.
            </p>
            <p className="text-muted-foreground max-w-md">
              Full-funnel growth engines for supplement and nutraceutical brands 
              ready to scale profitably.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="lg:col-span-4 lg:pl-8">
            <h4 className="text-sm font-semibold text-primary tracking-wide uppercase mb-8">
              Navigation
            </h4>
            <nav>
              <ul className="space-y-5">
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-primary tracking-wide uppercase mb-8">
              Get Started
            </h4>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Discover your hidden revenue opportunities with a free performance audit.
            </p>
            <Link
              to="/free-audit"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-200 font-medium"
            >
              Request Free Audit
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Section - Minimal & Clean */}
        <div className="mt-20 md:mt-24 pt-10 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} Mind Your Business Media. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
