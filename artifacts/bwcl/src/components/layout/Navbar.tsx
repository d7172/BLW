import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@assets/bwcl-logo.png";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 pointer-events-none">
      <div className={cn(
        "mx-auto max-w-5xl rounded-[2rem] transition-all duration-500 pointer-events-auto",
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border border-border/50 py-3 px-6" : "bg-white/50 backdrop-blur-md border border-white/20 shadow-sm py-4 px-6"
      )}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <img src={logo} alt="BWCL Logo" className="h-8 md:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = link.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(link.path);
                  
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "text-sm font-semibold tracking-wide transition-colors relative py-2",
                        isActive ? "text-primary" : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            <Button asChild className="rounded-full px-6 bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-md transition-transform hover:scale-105 active:scale-95">
              <Link to="/contact">
                Request Quote
              </Link>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 z-50 rounded-full bg-white shadow-sm border border-slate-100 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-4 top-24 bg-white rounded-3xl p-6 shadow-2xl border border-border/50 transition-all duration-300 md:hidden z-40 origin-top pointer-events-auto",
          isMobileMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        )}
      >
        <ul className="flex flex-col gap-2 mb-6">
          {NAV_LINKS.map((link) => {
            const isActive = link.path === "/" 
              ? location.pathname === "/" 
              : location.pathname.startsWith(link.path);
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "block py-4 px-4 rounded-2xl text-lg font-semibold transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button asChild size="lg" className="w-full rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg h-14 shadow-md">
          <Link to="/contact">Request Quote</Link>
        </Button>
      </div>
    </header>
  );
}
