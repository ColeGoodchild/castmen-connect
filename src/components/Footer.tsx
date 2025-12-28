import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-lg bg-primary/10 p-2">
                <div className="absolute inset-0 rounded-lg bg-primary/20 blur-sm" />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="relative h-full w-full text-primary"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-foreground">
                  CASTMEN
                </span>
                <span className="block text-xs font-medium tracking-widest text-primary">
                  ELECTRONICS
                </span>
              </div>
            </div>
            <p className="mb-4 max-w-md text-sm text-muted-foreground">
              U.S.-based custom cable assembly manufacturer specializing in high-quality 
              wire harnesses for aerospace, defense, robotics, and advanced technology sectors.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              AS9100D / ISO 9001:2015 Certified
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#capabilities"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#quality"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Quality
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>61 State St.</li>
              <li>Seneca Falls, NY 13148</li>
              <li>
                <a
                  href="tel:+13152167743"
                  className="transition-colors hover:text-primary"
                >
                  (315) 216-7743
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@castmen.com"
                  className="transition-colors hover:text-primary"
                >
                  info@castmen.com
                </a>
              </li>
            </ul>
            <div className="mt-4 space-y-1 text-xs text-muted-foreground">
              <div>CAGE: 10C34</div>
              <div>DUNS: 136273848</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row">
          <div>© {currentYear} Castmen Electronics. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>ITAR Compliant</span>
            <span className="text-border">•</span>
            <span>Made in USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
