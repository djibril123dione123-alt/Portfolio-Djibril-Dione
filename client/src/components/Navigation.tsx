import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projets", label: "Projets" },
    { href: "#mairie", label: "Cas Mairie" },
    { href: "#confort-immo", label: "Confort Immo" },
    { href: "#parcours", label: "Parcours" },
    { href: "#cv", label: "CV" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-display font-bold tracking-tight group"
            data-testid="link-logo"
          >
            <span className="text-foreground">DJIBRIL</span>
            <span className="text-primary group-hover:text-accent transition-colors">
              .DIONE
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
                data-testid={`link-nav-${link.href.slice(1)}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="px-5 py-2.5 rounded-full text-sm font-semibold"
              data-testid="button-contact"
            >
              <a href="#contact">Me contacter</a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.href.slice(1)}`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full rounded-full"
              data-testid="button-mobile-contact"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Me contacter
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
