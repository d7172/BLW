import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import logo from "@assets/bwcl-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-24 md:pb-12 mt-20 rounded-t-[3rem] md:rounded-t-[4rem] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block mb-8 bg-white p-3 rounded-2xl shadow-sm">
              <img src={logo} alt="BWCL" className="h-10 w-auto" />
            </Link>
            <p className="text-primary-foreground/90 mb-8 max-w-sm text-lg font-medium leading-relaxed">
              Empowering Multimodal Logistics with a Railway-First Strategy. Green freight moving India forward.
            </p>
            <div className="flex flex-wrap gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all text-white border border-white/10" aria-label="Social Link">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-white text-xl font-bold mb-6 font-serif">Company</h4>
            <ul className="space-y-4 text-primary-foreground/80 font-medium">
              <li><Link to="/" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Services</Link></li>
              <li><Link to="/contact" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Contact</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white text-xl font-bold mb-6 font-serif">Services</h4>
            <ul className="space-y-4 text-primary-foreground/80 font-medium">
              <li><Link to="/services" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Railway Logistics</Link></li>
              <li><Link to="/services" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Road Logistics</Link></li>
              <li><Link to="/services" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Sea Freight</Link></li>
              <li><Link to="/services" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Air Freight</Link></li>
              <li><Link to="/services" className="hover:text-secondary hover:translate-x-1 transition-all inline-block">Warehousing</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-white text-xl font-bold mb-6 font-serif">Stay Updated</h4>
            <p className="text-primary-foreground/80 text-sm mb-6 font-medium">Subscribe for the latest logistics insights and company updates.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-secondary h-14 rounded-full pl-6 pr-14"
                />
                <Button type="submit" size="icon" className="absolute right-2 top-2 h-10 w-10 rounded-full bg-secondary hover:bg-secondary/90 text-white">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-primary-foreground/85">
          <p>© {new Date().getFullYear()} BW Container Lines (BWCL). All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
