import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@assets/blw-logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-100 pt-20 pb-24 md:pb-12 mt-20 rounded-t-[3rem] md:rounded-t-[4rem]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <div>
            <Link to="/" className="inline-block mb-8">
              <img src={logo} alt="BLW" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-500 mb-8 max-w-sm text-base font-medium leading-relaxed">
              Empowering Multimodal Logistics with a Railway-First Strategy. Moving India's freight forward.
            </p>
            <div className="flex flex-wrap gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-11 w-11 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-500" aria-label="Social Link">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-800 text-xl font-bold mb-6 font-serif">Company</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Services</Link></li>
              <li><Link to="/contact" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-800 text-xl font-bold mb-6 font-serif">Services</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><Link to="/services" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Railway Logistics</Link></li>
              <li><Link to="/services" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Road Logistics</Link></li>
              <li><Link to="/services" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Sea Freight</Link></li>
              <li><Link to="/services" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Air Freight</Link></li>
              <li><Link to="/services" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">Warehousing</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-slate-400">
          <p>© {new Date().getFullYear()} Bharat Logistics & Warehousing LLP (BLW). All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
