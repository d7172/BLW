import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhatsAppFAB() {
  return (
    <>
      <a
        href="https://wa.me/919483077277?text=Hello%20BLW%2C%20I%20am%20interested%20in%20your%20logistics%20services.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-40 flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:-translate-y-2 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-[1.5rem] animate-ping bg-[#25D366] opacity-30"></span>
        <MessageCircle className="relative z-10 h-8 w-8" />
        
        <span className="absolute right-full mr-4 w-max rounded-xl bg-foreground px-4 py-2 text-sm font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none shadow-md hidden md:block">
          Chat with BLW
        </span>
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0))] shadow-[0_-10px_20px_rgb(0,0,0,0.05)] rounded-t-3xl">
        <a href="tel:+919483077277" className="flex-1 py-2 text-center text-sm font-bold text-foreground hover:text-primary transition-colors">Call Now</a>
        <div className="w-px h-6 bg-slate-200"></div>
        <a href="https://wa.me/919483077277" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center text-sm font-bold text-[#25D366]">WhatsApp</a>
        <div className="w-px h-6 bg-slate-200"></div>
        <Link to="/contact" className="flex-1 py-2 text-center text-sm font-bold text-secondary">Get Quote</Link>
      </div>
    </>
  );
}
