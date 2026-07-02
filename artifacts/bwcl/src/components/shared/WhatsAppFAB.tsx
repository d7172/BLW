import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WhatsAppFAB() {
  const [showLabel, setShowLabel] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show label briefly on initial load
    const initial = setTimeout(() => {
      setShowLabel(true);
      setTimeout(() => setShowLabel(false), 3000);
    }, 1500);

    // Pop up every 10 seconds
    const interval = setInterval(() => {
      if (!isHovered) {
        setShowLabel(true);
        setTimeout(() => setShowLabel(false), 3000);
      }
    }, 10000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [isHovered]);

  const labelVisible = showLabel || isHovered;

  return (
    <>
      <a
        href="https://wa.me/918888887006?text=Hello%20BLW%2C%20I%20am%20interested%20in%20your%20logistics%20services.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:-translate-y-1 group"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25"></span>
        <MessageCircle className="relative z-10 h-8 w-8" />

        {/* Tooltip label */}
        <span className={cn(
          "absolute right-full mr-4 hidden md:flex items-center w-max rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white pointer-events-none shadow-xl transition-all duration-300",
          labelVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        )}>
          Need any query? Chat with us
        </span>
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white/90 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0))] shadow-[0_-10px_20px_rgb(0,0,0,0.05)] rounded-t-3xl">
        <a href="https://wa.me/918888887006" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center text-sm font-bold text-[#25D366]">WhatsApp</a>
        <div className="w-px h-6 bg-slate-200"></div>
        <Link to="/contact" className="flex-1 py-2 text-center text-sm font-bold text-secondary">Contact</Link>
      </div>
    </>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
