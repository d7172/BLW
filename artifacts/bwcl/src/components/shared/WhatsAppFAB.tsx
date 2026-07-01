import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhatsAppFAB() {
  return (
    <>
      <a
        href="https://wa.me/919483077277?text=Hello%20BWCL%2C%20I%20am%20interested%20in%20your%20logistics%20services.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-75"></span>
        <MessageCircle className="relative z-10 h-6 w-6 md:h-7 md:w-7" />
        
        <span className="absolute right-full mr-4 w-max rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none shadow-md hidden md:block">
          Chat with BWCL
        </span>
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white border-t flex items-center justify-around p-2 pb-[env(safe-area-inset-bottom,0.5rem)] shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.1)]">
        <a href="tel:+919483077277" className="flex-1 py-2 text-center text-sm font-semibold text-slate-700">Call Now</a>
        <div className="w-px h-6 bg-border"></div>
        <a href="https://wa.me/919483077277" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center text-sm font-semibold text-[#25D366]">WhatsApp</a>
        <div className="w-px h-6 bg-border"></div>
        <Link to="/contact" className="flex-1 py-2 text-center text-sm font-semibold text-secondary">Get Quote</Link>
      </div>
    </>
  );
}
