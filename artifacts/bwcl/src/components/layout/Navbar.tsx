import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/blw-logo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
      isScrolled
        ? "bg-white/95 backdrop-blur-xl border-border/50 shadow-sm"
        : "bg-white/70 backdrop-blur-md border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img src={logo} alt="BLW Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop: centered nav pill */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-0.5 bg-slate-100/80 border border-slate-200/80 rounded-full px-1.5 py-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-white shadow-sm text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/60"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 ml-auto md:ml-0">
          <Button
            asChild
            className="hidden md:flex rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-10 shadow-md shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            <Link to="/contact">Get Quote</Link>
          </Button>

          <button
            className="md:hidden p-2 rounded-full bg-white shadow-sm border border-slate-100 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden border-t border-border/30 bg-white overflow-hidden transition-all duration-300",
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = link.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-3 px-4 rounded-2xl text-base font-semibold transition-colors",
                  isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <Button
            asChild
            className="mt-3 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-12"
          >
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
