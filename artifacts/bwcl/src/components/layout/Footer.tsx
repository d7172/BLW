import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@assets/bwcl-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-[#07111F] text-slate-300 pt-16 md:pt-20 pb-20 md:pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
              <img src={logo} alt="BWCL" className="h-8 md:h-10 w-auto" />
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm text-sm md:text-base">
              Empowering Multimodal Logistics with a Railway-First Strategy. Delivering integrated solutions across India and globally.
            </p>
            <div className="space-y-2 mb-6 text-sm">
              <p>Email: <a href="mailto:info@bwcl.co.in" className="text-secondary hover:underline">info@bwcl.co.in</a></p>
              <p>Phone: <a href="tel:+919483077277" className="text-secondary hover:underline">+91 9483077277</a></p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-6">Company</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li><Link to="/" className="hover:text-secondary transition-colors block py-1 md:py-0">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors block py-1 md:py-0">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors block py-1 md:py-0">Services</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors block py-1 md:py-0">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-6">Services</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li><Link to="/services" className="hover:text-secondary transition-colors block py-1 md:py-0">Railway Logistics</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors block py-1 md:py-0">Road Logistics</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors block py-1 md:py-0">Sea Freight</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors block py-1 md:py-0">Air Freight</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors block py-1 md:py-0">Warehousing</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 md:mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe for the latest logistics insights and company updates.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-secondary h-12"
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white w-full h-12">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500 text-center md:text-left">
          <p>© {new Date().getFullYear()} BW Container Lines (BWCL). All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
