import { SEO } from "@/seo/SEO";
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

        {/* World map — geographic lon/lat outlines + trade-route dots */}
        {(() => {
          // Equirectangular projection: x=(lon+180)*1000/360, y=(90-lat)*500/180
          const x = (lon: number) => ((lon + 180) * 1000 / 360).toFixed(1);
          const y = (lat: number) => ((90 - lat) * 500 / 180).toFixed(1);
          const poly = (pts: [number, number][]) =>
            pts.map(([lo, la], i) => `${i === 0 ? 'M' : 'L'}${x(lo)},${y(la)}`).join(' ') + 'Z';

          // Key continent outlines as [lon, lat] arrays (clockwise)
          const greenland = poly([[-54,77],[-18,77],[-18,70],[-25,63],[-44,60],[-54,63],[-54,77]]);
          const northAmerica = poly([
            [-168,53],[-160,65],[-140,62],[-125,50],[-120,35],
            [-105,20],[-87,15],[-80,26],[-80,32],[-75,44],
            [-56,47],[-60,57],[-80,73],[-100,73],[-130,70],[-155,72],
          ]);
          const centralAmerica = poly([[-83,10],[-77,8],[-80,9],[-83,10]]);
          const southAmerica = poly([
            [-80,8],[-72,12],[-63,11],[-35,-5],[-40,-20],
            [-43,-23],[-52,-30],[-58,-34],[-68,-55],[-75,-50],
            [-70,-28],[-77,-14],[-80,-2],[-80,5],
          ]);
          const uk = poly([[-5,50],[2,52],[-1,59],[-5,58]]);
          const scandinavia = poly([[5,58],[20,72],[30,70],[28,64],[18,58]]);
          const europe = poly([
            [-9,37],[3,37],[25,37],[36,42],[36,47],[27,47],
            [14,46],[8,44],[3,43],[0,47],[-8,44],[-9,37],
          ]);
          const africa = poly([
            [-17,14],[10,37],[37,37],[42,11],[50,11],
            [43,-12],[35,-26],[28,-35],[18,-34],[13,-17],
            [8,5],[-5,5],[-17,10],
          ]);
          const madagascar = poly([[44,-13],[50,-13],[50,-26],[44,-26]]);
          const asia = poly([
            [26,42],[36,37],[57,24],[60,22],[68,24],[80,8],
            [92,22],[105,2],[120,22],[135,35],[142,47],[170,65],
            [178,68],[140,74],[60,73],[30,68],
          ]);
          const arabianPen = poly([[36,29],[55,14],[60,22],[56,24],[46,24],[44,28]]);
          const india = poly([[68,23],[80,28],[80,20],[79,8],[77,8],[68,12]]);
          const seAsia = poly([[100,10],[115,5],[118,2],[115,-5],[105,-8],[105,5],[100,10]]);
          const japan = poly([[130,33],[131,34],[141,41],[141,43],[135,34],[130,33]]);
          const australia = poly([
            [114,-22],[114,-35],[118,-38],[128,-38],[138,-36],[148,-38],
            [152,-28],[154,-24],[152,-18],[138,-15],[131,-12],[126,-14],
            [122,-18],[114,-22],
          ]);
          const newZealand = poly([[166,-46],[172,-46],[174,-41],[174,-36],[172,-34],[168,-38],[166,-46]]);

          const continents = [
            greenland, northAmerica, southAmerica, uk, scandinavia, europe,
            africa, madagascar, asia, arabianPen, india, seAsia, japan,
            australia, newZealand,
          ];

          // Trade-route arc paths for animated dots (same projection)
          const routes = {
            shanghaiRotterdam: `M${x(121)},${y(31)} Q${x(80)},${y(55)} ${x(4)},${y(52)}`,
            mumbaiLondon:       `M${x(73)},${y(19)} Q${x(40)},${y(40)} ${x(-1)},${y(51)}`,
            nyLondon:           `M${x(-74)},${y(41)} Q${x(-38)},${y(52)} ${x(-1)},${y(51)}`,
            laShanghai:         `M${x(-118)},${y(34)} Q${x(180)},${y(55)} ${x(121)},${y(31)}`,
            sydneySingapore:    `M${x(151)},${y(-34)} Q${x(130)},${y(-5)} ${x(104)},${y(1)}`,
            dubaiShanghai:      `M${x(55)},${y(25)} Q${x(88)},${y(28)} ${x(121)},${y(31)}`,
          };

          return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
              <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
                {/* Continent outlines */}
                <g fill="hsl(146,60%,47%)" fillOpacity="0.07"
                   stroke="hsl(146,60%,47%)" strokeOpacity="0.25" strokeWidth="1" strokeLinejoin="round">
                  {continents.map((d, i) => <path key={i} d={d}/>)}
                </g>

                {/* Animated trade-route dots */}
                <circle r="3" fill="hsl(146,60%,47%)" opacity="0.55">
                  <animateMotion dur="13s" repeatCount="indefinite" path={routes.shanghaiRotterdam}/>
                </circle>
                <circle r="2.6" fill="hsl(146,60%,47%)" opacity="0.50">
                  <animateMotion dur="10s" repeatCount="indefinite" begin="4s" path={routes.mumbaiLondon}/>
                </circle>
                <circle r="2.8" fill="hsl(14,88%,60%)" opacity="0.50">
                  <animateMotion dur="9s" repeatCount="indefinite" begin="1.5s" path={routes.nyLondon}/>
                </circle>
                <circle r="3" fill="hsl(14,88%,60%)" opacity="0.45">
                  <animateMotion dur="18s" repeatCount="indefinite" begin="6s" path={routes.laShanghai}/>
                </circle>
                <circle r="2.4" fill="hsl(146,60%,47%)" opacity="0.48">
                  <animateMotion dur="8s" repeatCount="indefinite" begin="2s" path={routes.sydneySingapore}/>
                </circle>
                <circle r="2.6" fill="hsl(14,88%,60%)" opacity="0.48">
                  <animateMotion dur="11s" repeatCount="indefinite" begin="7s" path={routes.dubaiShanghai}/>
                </circle>
              </svg>
            </div>
          );
        })()}

        <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-center lg:text-left mx-auto lg:mx-0 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border font-semibold text-sm mb-8 text-primary uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Railway-First Strategy
            </div>
            
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

      {/* 7. Stats Rings */}
      <section className="py-24 bg-white" ref={statsRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { val: 95, max: 100, suffix: "%", label: "Same-Day Delivery", color: "text-primary", ring: "stroke-primary" },
              { val: 30, max: 100, suffix: "K+", label: "Ton Capacity", color: "text-secondary", ring: "stroke-secondary" },
              { val: 76, max: 100, suffix: "+", label: "Countries Network", color: "text-foreground", ring: "stroke-foreground" },
              { val: 65, max: 100, suffix: "%", label: "Cost Savings", color: "text-primary", ring: "stroke-primary" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" className="stroke-slate-100" strokeWidth="8" fill="none" />
                    <circle 
                      cx="50" cy="50" r="40" 
                      strokeWidth="8" 
                      fill="none" 
                      strokeLinecap="round"
                      style={statsInView ? getProgressStroke(stat.val, stat.max) : getProgressStroke(0, stat.max)}
                      strokeDasharray={Math.PI * 80}
                      className={`transition-all duration-1500 ease-out ${stat.ring}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className={`text-3xl sm:text-4xl font-bold font-serif ${stat.color}`}>
                      {statsInView ? <CountUp end={stat.val} duration={2} /> : "0"}{stat.suffix}
                    </span>
                  </div>
                </div>
                <div className="text-center font-bold text-slate-600 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
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
