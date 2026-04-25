import { useState } from "react";
import { Menu, X, Phone, Mail, Home } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToContact = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  const navLinks = [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#industries", label: "Industries" },
    { href: "#quality", label: "Quality" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
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
              <span className="text-xl font-bold tracking-tight text-foreground">
                CASTMEN
              </span>
              <span className="block text-xs font-medium tracking-widest text-primary">
                ELECTRONICS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {location.pathname !== "/" && (
              <Link
                to="/"
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
            )}
            {navLinks.map((link) =>
              location.pathname === "/" ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={goToContact}
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-border/50 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {location.pathname !== "/" && (
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              )}
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={location.pathname === "/" ? link.href : `/${link.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Button 
                  className="w-full bg-primary text-primary-foreground"
                  onClick={() => {
                    setIsMenuOpen(false);
                    goToContact();
                  }}
                >
                  Request Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
