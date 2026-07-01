import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Train, Truck, Ship, Plane, Warehouse, HardHat, ShieldCheck, Globe2, BarChart3, Leaf, Cpu, Network, Activity, Factory, Smartphone, Clock, Award, Users, MapPin, Search, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const LOGOS = [
  "TATA STEEL", "RELIANCE", "MARUTI SUZUKI", "ULTRATECH", "JSW", "MAHINDRA", "VEDANTA", "ADANI", "HUL", "ITC", "NESTLE", "AMBUJA"
];

const INDUSTRIES = [
  { name: "FMCG", icon: Package },
  { name: "Automotive", icon: Truck },
  { name: "Chemicals", icon: Activity },
  { name: "Cement", icon: Warehouse },
  { name: "Steel", icon: Factory },
  { name: "Telecom", icon: Smartphone },
  { name: "Retail", icon: MapPin },
  { name: "Mining", icon: HardHat },
  { name: "Infrastructure", icon: Network },
  { name: "Manufacturing", icon: Cpu }
];

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  return (
    <>
      <SEO 
        title="BWCL | Moving India's Freight Forward"
        description="Empowering Multimodal Logistics with a Railway-First Strategy. India's premier integrated supply chain partner."
        canonical="/"
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] pt-24 pb-16 flex items-center bg-[#0B1F3A] text-white overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0E4BFF]/30"></div>
        
        {/* Animated Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0E4BFF] rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C2A8] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-emerald-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Railway-First Strategy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
              Moving India's <br className="hidden sm:block"/> Freight <span className="text-[#0E4BFF] drop-shadow-md brightness-150">Forward.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Empowering Multimodal Logistics. We are revolutionizing rail cargo transportation in India, integrating road, sea, and air to deliver a seamless, end-to-end supply chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[#0E4BFF] hover:bg-blue-600 text-white rounded-full h-14 px-8 text-base sm:text-lg shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 w-full sm:w-auto">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base sm:text-lg border-white/20 hover:bg-white/10 text-white bg-transparent transition-transform hover:scale-105 w-full sm:w-auto">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="relative w-full mt-10 lg:mt-0">
            {/* Abstract visual/stats here */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl mx-auto lg:max-w-none">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-amber-400 mb-4 sm:mb-6" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-slate-300 text-xs sm:text-sm font-medium">Same-Day Delivery</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl lg:translate-y-12 hover:-translate-y-2 lg:hover:translate-y-10 transition-transform duration-300"
              >
                <BarChart3 className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 mb-4 sm:mb-6" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">30K+</div>
                <div className="text-slate-300 text-xs sm:text-sm font-medium">Ton Capacity</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <Globe2 className="h-8 w-8 sm:h-10 sm:w-10 text-[#00C2A8] mb-4 sm:mb-6" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">76+</div>
                <div className="text-slate-300 text-xs sm:text-sm font-medium">Countries Network</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl lg:translate-y-12 hover:-translate-y-2 lg:hover:translate-y-10 transition-transform duration-300"
              >
                <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-400 mb-4 sm:mb-6" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">65%</div>
                <div className="text-slate-300 text-xs sm:text-sm font-medium">Cost & Time Savings</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By */}
      <section className="py-8 md:py-12 bg-white border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by India's Leading Industries</p>
        </div>
        <div className="w-full relative">
          <div className="flex w-[200%] sm:w-[150%] md:w-[100%] animate-[slide_20s_linear_infinite]">
            <div className="flex w-1/2 justify-around items-center">
              {LOGOS.slice(0, 6).map((logo, i) => (
                <div key={i} className="text-lg md:text-2xl font-black text-slate-300 px-4 md:px-8 whitespace-nowrap">{logo}</div>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center">
              {LOGOS.slice(6).map((logo, i) => (
                <div key={i} className="text-lg md:text-2xl font-black text-slate-300 px-4 md:px-8 whitespace-nowrap">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Strategy Pillars */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4 md:mb-6">Moving India's Freight Forward</h2>
            <p className="text-base md:text-lg text-slate-600">Our enterprise strategy is engineered to deliver unmatched scale, sustainability, and reach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all">
              <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <Train className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1F3A] mb-3">Railway-First Strategy</h3>
              <p className="text-slate-600">Positioned to harness the strengths of rail-based logistics, prioritizing green, high-capacity freight movement across the subcontinent.</p>
            </div>
            
            <div className="bg-[#0B1F3A] rounded-3xl p-8 border border-[#0B1F3A] text-white shadow-lg hover:shadow-2xl transition-all">
              <div className="h-14 w-14 rounded-2xl bg-blue-900 flex items-center justify-center mb-6">
                <Network className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Multimodal Coverage</h3>
              <p className="text-slate-300">Integrating rail, road, sea, and air logistics into a seamless, end-to-end supply chain that optimizes both cost and transit time.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Globe2 className="h-7 w-7 text-[#0E4BFF]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0B1F3A] mb-3">Global Perspective</h3>
              <p className="text-slate-600">Delivering unparalleled reach through an interconnected network spanning 76+ countries and major international logistics terminals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4 md:mb-6">Integrated Solutions</h2>
            <p className="text-base md:text-lg text-slate-600">End-to-end multimodal logistics designed for scale, reliability, and cost-efficiency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Railway Logistics", icon: Train, img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80", desc: "Truck-on-Train, Freight Forwarding Scheme for aggregation of small consignments, and door-to-door connectivity across all rail touchpoints." },
              { title: "Sea / Ship Logistics", icon: Ship, img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80", desc: "Global ocean coverage for FCL & LCL, efficient customs clearance, and scalable, eco-friendly maritime operations." },
              { title: "Road Logistics", icon: Truck, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80", desc: "Pan-India ground coverage with LTL, FTL, PTL, and ODC movements, plus superfast cargo services with a fleet of 100+ owned trucks." },
              { title: "Air Logistics", icon: Plane, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", desc: "Strategic partnerships with major airlines and a broad network of airport facilities worldwide for unparalleled global reach." }
            ].map((service, i) => (
              <Link to="/services" key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] flex flex-col justify-end p-6 md:p-8 bg-slate-900 border border-border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-transparent"></div>
                <div className="relative z-10 text-white">
                  <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 md:mb-6 text-emerald-400 group-hover:bg-[#0E4BFF] group-hover:text-white transition-colors border border-white/10">
                    <service.icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 md:mb-6 line-clamp-3 md:line-clamp-2 leading-relaxed">{service.desc}</p>
                  <div className="inline-flex items-center text-[#00C2A8] font-semibold text-sm group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full bg-[#0B1F3A] hover:bg-slate-800 text-white px-8">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Why Partner With BWCL (Bento Grid) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4 md:mb-6">Why Partner With BWCL</h2>
            <p className="text-base md:text-lg text-slate-600">The enterprise advantage for India's most demanding supply chains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[250px]">
            <div className="bg-[#0B1F3A] rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-border">
              <Search className="h-8 w-8 md:h-10 md:w-10 text-[#0E4BFF] mb-4" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Tech-Enabled Visibility</h3>
                <p className="text-slate-300 text-sm md:text-base">Real-time tracking and control-tower visibility ensuring absolute transparency over every freight movement.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-border">
              <Zap className="h-8 w-8 md:h-10 md:w-10 text-amber-500 mb-4" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1F3A] mb-2">40% Cost Savings</h3>
                <p className="text-slate-600 text-sm md:text-base">Significant cost reductions compared to traditional road-only freight through our optimized multimodal operations.</p>
              </div>
            </div>
            
            <div className="bg-[#0E4BFF] rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-transparent text-white">
              <Cpu className="h-8 w-8 md:h-10 md:w-10 text-white mb-4" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-blue-100 text-sm md:text-base">Tailored, industry-specific logistics design matching your exact enterprise requirements and constraints.</p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-emerald-100">
              <Leaf className="h-8 w-8 md:h-10 md:w-10 text-emerald-600 mb-4" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-950 mb-2">ESG-Friendly</h3>
                <p className="text-emerald-800 text-sm md:text-base">Green, low-emission rail-led movement to drastically reduce your corporate carbon footprint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industries Served */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">Industries We Power</h2>
        </div>
        
        <div className="relative w-full">
          <div className="flex w-max animate-[slide_30s_linear_infinite] hover:[animation-play-state:paused] py-4">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <div key={i} className="flex flex-col items-center justify-center w-36 h-36 md:w-48 md:h-48 mx-3 md:mx-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0E4BFF] hover:bg-blue-50 transition-all cursor-pointer group shrink-0">
                <ind.icon className="h-8 w-8 md:h-10 md:w-10 text-slate-400 group-hover:text-[#0E4BFF] mb-3 md:mb-4 transition-colors" />
                <span className="font-semibold text-sm md:text-base text-slate-700 group-hover:text-[#0B1F3A] transition-colors">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Stats Counters */}
      <section className="py-16 md:py-20 bg-[#0B1F3A] text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={95} suffix="%" /> : "0"}
              </div>
              <div className="text-slate-300 text-xs sm:text-sm uppercase tracking-wider">Same-Day Delivery</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={30} suffix="K+" /> : "0"}
              </div>
              <div className="text-slate-300 text-xs sm:text-sm uppercase tracking-wider">Ton Capacity</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={76} suffix="+" /> : "0"}
              </div>
              <div className="text-slate-300 text-xs sm:text-sm uppercase tracking-wider">Countries Network</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={65} suffix="%" /> : "0"}
              </div>
              <div className="text-slate-300 text-xs sm:text-sm uppercase tracking-wider">Cost & Time Savings</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
