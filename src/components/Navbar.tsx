import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/48a43549-1.png"; // ✅ FIXED PATH

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Home", "About", "Services", "Fleet", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow section-padding !py-0">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Srinathan Enterprises Logo"
              className="w-11 h-11 object-contain"
            />
            <div className="leading-tight">
              <span className="font-bold text-foreground text-lg tracking-tight">
                Srinathan
              </span>
              <span className="block text-[11px] text-muted-foreground font-medium tracking-widest uppercase -mt-0.5">
                Enterprise
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 12345 67890
            </a>
            <Button variant="hero" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-border pt-4">
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                +91 12345 67890
              </a>
              <Button variant="hero" size="sm" className="w-full">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
