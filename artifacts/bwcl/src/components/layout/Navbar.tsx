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

  const isHome = location.pathname === "/";
  const transparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        transparent
          ? "bg-transparent border-transparent"
          : "bg-background/80 backdrop-blur-md border-border shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src={logo} alt="BWCL Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = link.path === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(link.path);
                
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-secondary relative py-2",
                      transparent ? "text-white hover:text-white/80" : "text-foreground",
                      isActive && !transparent && "text-secondary"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <Button asChild className="rounded-full px-6 bg-secondary hover:bg-secondary/90 text-white border-0 shadow-lg shadow-secondary/20">
            <Link to="/contact">
              Request Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 z-50 rounded-md",
            transparent ? "text-white" : "text-foreground"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background flex flex-col pt-24 px-4 transition-transform duration-300 md:hidden z-40",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-6 text-xl font-semibold mb-8">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  "block py-2 border-b border-border transition-colors",
                  (link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path))
                    ? "text-secondary border-secondary"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white">
          <Link to="/contact">Request Quote</Link>
        </Button>
      </div>
    </header>
  );
}
