import { SEO } from "@/seo/SEO";
import { RoutesBackground } from "@/components/ui/RoutesBackground";
import { Link } from "react-router-dom";
import { ArrowRight, Train, Truck, Ship, Plane, Warehouse, HardHat, Globe2, BarChart3, Leaf, Cpu, Network, Activity, Factory, Smartphone, Clock, MapPin, Search, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

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

  const getProgressStroke = (val: number, max: number) => {
    const r = 40;
    const c = Math.PI * (r * 2);
    const pct = ((100 - (val / max) * 100) / 100) * c;
    return { strokeDasharray: c, strokeDashoffset: pct };
  };

  return (
    <>
      <SEO 
        title="BLW | Moving India's Freight Forward"
        description="Empowering Multimodal Logistics with a Railway-First Strategy. India's premier integrated supply chain partner."
        canonical="/"
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] pt-32 pb-16 flex items-center overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <RoutesBackground />

        <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl"
          >
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
              Moving India's <br/> Freight <span className="font-serif italic text-primary font-normal">Forward.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
              Empowering Multimodal Logistics. We are revolutionizing rail cargo transportation in India, integrating road, sea, and air to deliver a seamless, end-to-end supply chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white h-16 px-10 text-xl font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="lg:col-span-6 relative w-full mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-xl mx-auto">

              {/* Card 1 — 95% Same-Day Delivery */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px -8px rgba(0,0,0,0.12)" }}
                style={{ transition: "box-shadow 0.4s ease" }}
                className="bg-white p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between aspect-square cursor-default"
              >
                <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-secondary/10 flex items-center justify-center mb-auto">
                  <Clock className="h-5 w-5 sm:h-7 sm:w-7 text-secondary" />
                </div>
                <div>
                  <div className="text-3xl sm:text-5xl font-bold text-foreground font-serif tracking-tight mb-1 sm:mb-2">95%</div>
                  <div className="text-xs sm:text-base text-muted-foreground font-semibold">Same-Day Delivery</div>
                </div>
              </motion.div>

              {/* Card 2 — 30K+ Ton Capacity */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px -8px rgba(0,0,0,0.16)" }}
                className="bg-primary text-white p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-lg shadow-primary/20 flex flex-col justify-between aspect-square cursor-default"
              >
                <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center mb-auto">
                  <BarChart3 className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl sm:text-5xl font-bold font-serif tracking-tight mb-1 sm:mb-2">30K+</div>
                  <div className="text-xs sm:text-base text-white/80 font-semibold">Ton Capacity</div>
                </div>
              </motion.div>

              {/* Card 3 — 76+ Countries Network */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px -8px rgba(0,0,0,0.10)" }}
                className="bg-emerald-50 p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl flex flex-col justify-between aspect-square cursor-default"
              >
                <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-emerald-100 flex items-center justify-center mb-auto">
                  <Globe2 className="h-5 w-5 sm:h-7 sm:w-7 text-emerald-600" />
                </div>
                <div>
                  <div className="text-3xl sm:text-5xl font-bold font-serif tracking-tight mb-1 sm:mb-2 text-emerald-950">76+</div>
                  <div className="text-xs sm:text-base text-emerald-700 font-semibold">Countries Network</div>
                </div>
              </motion.div>

              {/* Card 4 — 65% Cost & Time Savings */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.03, boxShadow: "0 20px 40px -8px rgba(0,0,0,0.12)" }}
                className="bg-white p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between aspect-square cursor-default"
              >
                <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-auto">
                  <Leaf className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div>
                  <div className="text-3xl sm:text-5xl font-bold text-foreground font-serif tracking-tight mb-1 sm:mb-2">65%</div>
                  <div className="text-xs sm:text-base text-muted-foreground font-semibold">Cost & Time Savings</div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Strategy Pillars */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Enterprise strategy engineered for <span className="font-serif italic text-primary font-normal">scale.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">Unmatched scale, sustainability, and reach across the subcontinent.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-16 w-16 rounded-[1.25rem] bg-primary/10 flex items-center justify-center mb-8">
                <Train className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Railway-First Strategy</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">Positioned to harness the strengths of rail-based logistics, prioritizing green, high-capacity freight movement across the subcontinent.</p>
            </div>
            
            <div className="bg-emerald-50 rounded-[2.5rem] p-10 shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className="h-16 w-16 rounded-[1.25rem] bg-emerald-100 flex items-center justify-center mb-8">
                <Network className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif text-emerald-950">Multimodal Coverage</h3>
              <p className="text-emerald-800 font-medium leading-relaxed">Integrating rail, road, sea, and air logistics into a seamless, end-to-end supply chain that optimizes both cost and transit time.</p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-16 w-16 rounded-[1.25rem] bg-secondary/10 flex items-center justify-center mb-8">
                <Globe2 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Global Perspective</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">Delivering unparalleled reach through an interconnected network spanning 76+ countries and major international logistics terminals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="py-24 bg-white rounded-[3rem] shadow-sm -mt-8 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Integrated <span className="font-serif italic text-primary font-normal">Solutions.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">End-to-end multimodal logistics designed for scale, reliability, and cost-efficiency.</p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shrink-0 h-14 px-8">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Railway Logistics", icon: Train, desc: "Truck-on-Train, Freight Forwarding Scheme for aggregation of small consignments, and door-to-door connectivity across all rail touchpoints." },
              { title: "Sea / Ship Logistics", icon: Ship, desc: "Global ocean coverage for FCL & LCL, efficient customs clearance, and scalable, eco-friendly maritime operations." },
              { title: "Road Logistics", icon: Truck, desc: "Pan-India ground coverage with LTL, FTL, PTL, and ODC movements, plus superfast cargo services with a fleet of 100+ owned trucks." },
              { title: "Air Logistics", icon: Plane, desc: "Strategic partnerships with major airlines and a broad network of airport facilities worldwide for unparalleled global reach." }
            ].map((service, i) => (
              <Link to="/services" key={i} className="group bg-white rounded-[2.5rem] p-10 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-sm border border-emerald-100/70 min-h-[260px]">
                <div className="h-16 w-16 rounded-[1.25rem] bg-emerald-50 flex items-center justify-center mb-8 group-hover:bg-emerald-100 transition-colors">
                  <service.icon className="h-8 w-8 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-6">{service.desc}</p>
                  <div className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Partner With BWCL (Bento Grid) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Why Partner With <span className="font-serif italic text-primary font-normal">BLW</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">The enterprise advantage for India's most demanding supply chains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-auto md:auto-rows-[300px]">
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all shadow-sm border border-emerald-100/70">
              <div className="h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <Search className="h-7 w-7 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-serif">Tech-Enabled Visibility</h3>
                <p className="text-muted-foreground font-medium">Real-time tracking and control-tower visibility ensuring absolute transparency over every freight movement.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all shadow-sm border border-border">
              <Zap className="h-12 w-12 text-secondary mb-6" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-serif">40% Cost Savings</h3>
                <p className="text-muted-foreground font-medium">Significant cost reductions compared to traditional road-only freight through our optimized multimodal operations.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all shadow-sm border border-emerald-100/70">
              <div className="h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <Cpu className="h-7 w-7 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif text-foreground">Custom Solutions</h3>
                <p className="text-muted-foreground font-medium">Tailored, industry-specific logistics design matching your exact enterprise requirements and constraints.</p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:-translate-y-1 transition-all shadow-sm border border-emerald-100">
              <Leaf className="h-12 w-12 text-emerald-600 mb-6" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-3 font-serif">ESG-Friendly</h3>
                <p className="text-emerald-800 font-medium">Green, low-emission rail-led movement to drastically reduce your corporate carbon footprint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industries We Power */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Industries We <span className="font-serif italic text-primary font-normal">Power</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">Purpose-built logistics for the sectors driving India's growth.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-white rounded-[1.75rem] p-6 flex flex-col items-center justify-center text-center gap-4 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <industry.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="font-bold text-foreground">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA */}
      <section className="py-28 bg-emerald-400 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif leading-tight">
            Ready to move <span className="italic font-normal">forward?</span>
          </h2>
          <p className="text-white/75 text-lg md:text-xl font-medium mb-10 font-sans">
            Let's build a smarter, greener supply chain for your business — together.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-slate-50 h-16 px-10 text-xl font-bold shadow-xl transition-transform hover:scale-105">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
