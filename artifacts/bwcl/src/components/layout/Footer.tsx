import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@assets/blw-logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-24 md:pb-12 mt-20 rounded-t-[3rem] md:rounded-t-[4rem] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-8 bg-white p-3 rounded-2xl shadow-sm">
              <img src={logo} alt="BLW" className="h-10 w-auto" />
            </Link>
            <p className="text-white/80 mb-8 max-w-sm text-base font-medium leading-relaxed">
              Empowering Multimodal Logistics with a Railway-First Strategy. Moving India's freight forward.
            </p>
            <div className="flex flex-wrap gap-3">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all text-white border border-white/10" aria-label="Social Link">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-6 font-serif">Company</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-6 font-serif">Services</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Railway Logistics</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Road Logistics</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Sea Freight</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Air Freight</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Warehousing</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-medium text-white/60">
          <p>© {new Date().getFullYear()} Bharat Logistics & Warehousing LLP (BLW). All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
