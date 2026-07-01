import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Train, Truck, Ship, Plane, Warehouse, HardHat, ShieldCheck, Globe2, BarChart3, Leaf, Cpu, Network, Activity, Factory, Smartphone, Clock, Award, Users, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LOGOS = [
  "TATA STEEL", "RELIANCE", "MARUTI SUZUKI", "ULTRATECH", "JSW", "MAHINDRA", "VEDANTA", "ADANI", "HUL", "ITC", "NESTLE", "AMBUJA"
];

const INDUSTRIES = [
  { name: "Automobile", icon: Truck },
  { name: "Steel", icon: Factory },
  { name: "Mining", icon: HardHat },
  { name: "Cement", icon: Warehouse },
  { name: "Chemical", icon: Activity },
  { name: "Retail", icon: MapPin },
  { name: "Infrastructure", icon: Network },
  { name: "Manufacturing", icon: Cpu },
  { name: "FMCG", icon: Package },
  { name: "Technology", icon: Smartphone }
];

// Fallback icon for FMCG if Package doesn't exist, use Archive or Box
import { Archive as Package } from "lucide-react";

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  return (
    <>
      <SEO 
        title="BWCL | India's Premier Multimodal Logistics Company"
        description="Delivering integrated multimodal logistics solutions through rail, road, sea, and air — powered by technology, driven by sustainability."
        canonical="/"
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[100dvh] pt-20 flex items-center bg-[#0B1F3A] text-white overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0E4BFF]/30"></div>
        
        {/* Animated Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0E4BFF] rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C2A8] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-emerald-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Enterprise Logistics Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
              Moving India's Freight <span className="text-[#0E4BFF] drop-shadow-md brightness-150">Smarter.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
              Delivering integrated multimodal logistics solutions through rail, road, sea, and air — powered by technology, driven by sustainability, and trusted across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0E4BFF] hover:bg-blue-600 text-white rounded-full h-14 px-8 text-lg shadow-lg shadow-blue-500/25 transition-transform hover:scale-105">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-white/20 hover:bg-white/10 text-white bg-transparent transition-transform hover:scale-105">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="hidden lg:block relative h-[600px] w-full">
            {/* Abstract visual/stats here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                >
                  <BarChart3 className="h-10 w-10 text-emerald-400 mb-6" />
                  <div className="text-4xl font-bold text-white mb-2">30,000+</div>
                  <div className="text-slate-300 text-sm font-medium">Containers Moved</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl translate-y-12 hover:translate-y-10 transition-transform duration-300"
                >
                  <Globe2 className="h-10 w-10 text-blue-400 mb-6" />
                  <div className="text-4xl font-bold text-white mb-2">76+</div>
                  <div className="text-slate-300 text-sm font-medium">Locations Served</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-300"
                >
                  <ShieldCheck className="h-10 w-10 text-amber-400 mb-6" />
                  <div className="text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-slate-300 text-sm font-medium">On-Time Delivery</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl translate-y-12 hover:translate-y-10 transition-transform duration-300"
                >
                  <Leaf className="h-10 w-10 text-emerald-400 mb-6" />
                  <div className="text-4xl font-bold text-white mb-2">65%</div>
                  <div className="text-slate-300 text-sm font-medium">Carbon Reduction vs Road</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted By */}
      <section className="py-12 bg-white border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by India's Leading Industries</p>
        </div>
        <div className="w-full relative">
          <div className="flex w-[200%] animate-[slide_20s_linear_infinite]">
            <div className="flex w-1/2 justify-around items-center">
              {LOGOS.slice(0, 6).map((logo, i) => (
                <div key={i} className="text-xl md:text-2xl font-black text-slate-300 px-8">{logo}</div>
              ))}
            </div>
            <div className="flex w-1/2 justify-around items-center">
              {LOGOS.slice(6).map((logo, i) => (
                <div key={i} className="text-xl md:text-2xl font-black text-slate-300 px-8">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why BWCL (Bento Grid) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">The Enterprise Advantage</h2>
            <p className="text-lg text-slate-600">Why India's largest companies trust BWCL for their critical supply chain operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="md:col-span-2 lg:col-span-2 bg-[#0B1F3A] rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-border">
              <Cpu className="h-10 w-10 text-[#0E4BFF] mb-4" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Technology-First Logistics</h3>
                <p className="text-slate-300">AI-driven route optimization, automated dispatch, and predictive analytics.</p>
              </div>
            </div>
            
            <div className="md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-border">
              <Train className="h-10 w-10 text-emerald-500 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Nationwide Rail Network</h3>
                <p className="text-slate-600 text-sm">Pan-India container rake services.</p>
              </div>
            </div>
            
            <div className="md:col-span-1 lg:col-span-1 bg-[#0E4BFF] rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-transparent">
              <Clock className="h-10 w-10 text-white mb-4" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Control Tower</h3>
                <p className="text-blue-100 text-sm">Round-the-clock monitoring.</p>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-border">
              <Search className="h-10 w-10 text-amber-500 mb-4" />
              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Digital Tracking</h3>
                <p className="text-slate-600 text-sm">Real-time GPS & IoT visibility.</p>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-2 bg-emerald-50 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-emerald-100">
              <Leaf className="h-10 w-10 text-emerald-600 mb-4" />
              <div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-2">ESG & Green Logistics</h3>
                <p className="text-emerald-800">Committed to reducing carbon footprint through rail optimization and sustainable transport practices.</p>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-1 bg-white rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl transition-all border border-border">
              <Warehouse className="h-10 w-10 text-[#0B1F3A] mb-4" />
              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Smart Warehousing</h3>
                <p className="text-slate-600 text-sm">Tech-enabled 3PL facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview (Refined) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Integrated Solutions for Every Supply Chain</h2>
            <p className="text-lg text-slate-600">End-to-end multimodal logistics designed for scale, reliability, and cost-efficiency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Rail Logistics", icon: Train, img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80", desc: "India's most cost-effective bulk freight solution with complete container rake services." },
              { title: "Road Logistics", icon: Truck, img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80", desc: "Nationwide FTL, PTL and ODC transport with real-time GPS tracking." },
              { title: "Sea Freight", icon: Ship, img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80", desc: "Global and coastal shipping solutions for full and less-than-container loads." },
              { title: "Air Freight", icon: Plane, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", desc: "Express cargo services for high-value and time-sensitive shipments." },
              { title: "Warehousing", icon: Warehouse, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", desc: "Smart 3PL warehousing with advanced inventory management systems." },
              { title: "Project Cargo", icon: HardHat, img: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&q=80", desc: "Specialized handling for heavy lift, EPC, and over-dimensional cargo." }
            ].map((service, i) => (
              <Link to="/services" key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 bg-slate-900 border border-border shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/60 to-transparent"></div>
                <div className="relative z-10 text-white">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-[#0E4BFF] group-hover:text-white transition-colors border border-white/10">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-2">{service.desc}</p>
                  <div className="inline-flex items-center text-[#00C2A8] font-semibold text-sm group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Rail vs Road Comparison */}
      <section className="py-24 bg-[#07111F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Shift to Rail?</h2>
            <p className="text-lg text-slate-400">Discover the strategic advantages of rail freight over traditional road transport for enterprise logistics.</p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-800/50 p-6 border-b border-slate-800">
              <div className="font-semibold text-slate-400 uppercase tracking-wider text-sm">Metric</div>
              <div className="font-bold text-emerald-400 text-center flex items-center justify-center gap-2"><Train className="h-5 w-5" /> Rail (BWCL)</div>
              <div className="font-bold text-slate-400 text-center flex items-center justify-center gap-2"><Truck className="h-5 w-5" /> Road (Standard)</div>
            </div>
            
            {[
              { metric: "Cost per ton-km", rail: "₹1.2", road: "₹2.8", advantage: "rail" },
              { metric: "Capacity per movement", rail: "2,000 tons", road: "25 tons", advantage: "rail" },
              { metric: "Carbon Emissions", rail: "80% lower", road: "Baseline", advantage: "rail" },
              { metric: "Transit Time", rail: "Consistent", road: "Variable", advantage: "rail" },
              { metric: "Reliability", rail: "High (Weather-proof)", road: "Weather-dependent", advantage: "rail" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                <div className="font-medium flex items-center">{row.metric}</div>
                <div className="text-center font-semibold text-white flex items-center justify-center">{row.rail}</div>
                <div className="text-center text-slate-400 flex items-center justify-center">{row.road}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries Served */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">Industries We Power</h2>
        </div>
        
        <div className="flex w-max animate-[slide_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
            <div key={i} className="flex flex-col items-center justify-center w-48 h-48 mx-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0E4BFF] hover:bg-blue-50 transition-all cursor-pointer group">
              <ind.icon className="h-10 w-10 text-slate-400 group-hover:text-[#0E4BFF] mb-4 transition-colors" />
              <span className="font-semibold text-slate-700 group-hover:text-[#0B1F3A] transition-colors">{ind.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Real-Time Tracking */}
      <section className="py-24 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Total Visibility. Absolute Control.</h2>
              <p className="text-lg text-slate-300 mb-8">Our proprietary Control Tower technology gives you real-time insights into your entire supply chain, down to the container level.</p>
              
              <ul className="space-y-6">
                {[
                  "Live GPS Tracking & Geofencing",
                  "IoT Sensors for Temperature & Humidity",
                  "AI-Powered ETA Predictions",
                  "Unified Analytics Dashboard",
                  "24/7 Dedicated Support Team"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-slate-200">
                    <div className="h-6 w-6 rounded-full bg-[#0E4BFF]/20 flex items-center justify-center text-[#0E4BFF]">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-[500px] w-full bg-[#07111F] rounded-3xl border border-slate-700 shadow-2xl p-6 overflow-hidden flex flex-col">
              {/* Mock Dashboard UI */}
              <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center"><Search className="h-4 w-4" /></div>
                  <div className="font-semibold text-lg">BWCL Command Center</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                </div>
              </div>
              
              <div className="flex-1 relative">
                {/* Abstract Map Lines */}
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M10,90 Q30,50 50,50 T90,10" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <path d="M20,80 Q40,60 70,30 T95,20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                </svg>
                
                {/* Floating Elements */}
                <div className="absolute top-10 left-10 bg-slate-800/80 backdrop-blur p-4 rounded-xl border border-slate-700 text-sm">
                  <div className="text-slate-400 mb-1">Rake #R-4922</div>
                  <div className="font-bold text-emerald-400">On Track • 65km/h</div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3">
                    <div className="bg-emerald-500 h-1.5 rounded-full w-[70%]"></div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-10 bg-slate-800/80 backdrop-blur p-4 rounded-xl border border-slate-700 text-sm">
                  <div className="text-slate-400 mb-1">Fleet Status</div>
                  <div className="flex gap-4 mt-2">
                    <div>
                      <div className="text-2xl font-bold text-white">142</div>
                      <div className="text-xs text-slate-500">In Transit</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">18</div>
                      <div className="text-xs text-slate-500">Delivered</div>
                    </div>
                  </div>
                </div>
                
                {/* Blinking Dots */}
                <div className="absolute top-[30%] right-[30%] h-3 w-3 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-[30%] right-[30%] h-3 w-3 bg-blue-500 rounded-full"></div>
                
                <div className="absolute bottom-[40%] left-[40%] h-3 w-3 bg-emerald-500 rounded-full animate-ping" style={{ animationDelay: '1s'}}></div>
                <div className="absolute bottom-[40%] left-[40%] h-3 w-3 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sustainability */}
      <section className="py-24 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">Green Logistics for a Sustainable India</h2>
            <p className="text-lg text-emerald-800">We are committed to reducing the carbon footprint of India's supply chain by driving the modal shift from road to rail.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "80%", label: "Less CO₂ Emissions", sub: "When shifting from road to rail", icon: Leaf },
              { value: "100%", label: "Paperless Ops", sub: "Digital documentation", icon: Smartphone },
              { value: "A+", label: "ESG Rating", sub: "Industry leading compliance", icon: Award },
              { value: "Zero", label: "Waste to Landfill", sub: "At corporate facilities", icon: Factory }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 text-center hover:-translate-y-2 transition-transform">
                <div className="h-16 w-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-emerald-950 mb-2">{stat.value}</div>
                <div className="font-semibold text-emerald-800 mb-1">{stat.label}</div>
                <div className="text-sm text-emerald-600">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Statistics Counter (Already implemented via statsRef earlier, but adding it here as requested) */}
      <section className="py-24 bg-[#07111F] text-white border-b border-slate-800" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#0E4BFF] mb-3 font-sans tracking-tight">
                {statsInView ? <CountUp end={30000} separator="," suffix="+" duration={2.5} /> : "0"}
              </div>
              <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">Containers Moved</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#0E4BFF] mb-3 font-sans tracking-tight">
                {statsInView ? <CountUp end={76} suffix="+" duration={2} /> : "0"}
              </div>
              <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">Locations</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#0E4BFF] mb-3 font-sans tracking-tight">
                {statsInView ? <CountUp end={95} suffix="%" duration={2} /> : "0"}
              </div>
              <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#0E4BFF] mb-3 font-sans tracking-tight">
                {statsInView ? <CountUp end={12} suffix="+" duration={1.5} /> : "0"}
              </div>
              <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials Slider */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#0B1F3A] mb-16">Trusted by Enterprise Leaders</h2>
          
          <TestimonialsSlider />
        </div>
      </section>

      {/* 11. FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#0B1F3A] mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What is multimodal logistics?", a: "Multimodal logistics involves the transportation of goods under a single contract, but performed with at least two different means of transport (e.g., rail and road). BWCL handles the entire journey, providing a seamless door-to-door experience." },
              { q: "Do you offer Pan-India coverage?", a: "Yes, our network spans across India. With our extensive rail and road partnerships, we can deliver to and from all major industrial hubs, ports, and remote locations." },
              { q: "How can I track my shipment?", a: "We provide all our enterprise clients access to our digital Control Tower dashboard. You can track your cargo in real-time, view ETAs, and receive automated alerts via email or SMS." },
              { q: "What types of cargo do you handle?", a: "We handle a wide variety of cargo including bulk commodities (steel, cement, coal), containerized FMCG goods, hazardous chemicals, perishables, and Over-Dimensional Cargo (ODC) for large infrastructure projects." },
              { q: "Why should we choose rail over road?", a: "Rail freight is generally 30-40% more cost-effective for long distances (over 500km) and bulk volumes. It is also significantly more reliable during monsoons and produces up to 80% fewer carbon emissions compared to road transport." },
              { q: "Do you provide customs clearance for international freight?", a: "Yes, our Freight Forwarding division provides comprehensive customs clearance, documentation, and compliance services for both import and export shipments." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200 py-2">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#0E4BFF] hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 12. Final CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-[#0B1F3A] to-[#07111F] text-center relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E4BFF] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C2A8] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Smarter Logistics Together</h2>
          <p className="text-xl text-slate-300 mb-10 font-light">Partner with BWCL for reliable, technology-driven supply chain solutions tailored to your enterprise needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#0E4BFF] hover:bg-blue-600 text-white rounded-full h-14 px-8 text-lg shadow-lg shadow-blue-500/20">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300">
              <a href="https://wa.me/919483077277" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const TESTIMONIALS = [
  { quote: "BWCL's rail logistics capabilities have completely transformed our bulk material movement. Their reliability and control tower visibility are unmatched in the Indian market.", name: "Rajesh Kumar", title: "VP Supply Chain", company: "Leading Cement Mfg" },
  { quote: "Shifting our primary freight from road to rail with BWCL not only saved us 22% in logistics costs but also helped us hit our quarterly ESG carbon reduction targets.", name: "Priya Sharma", title: "Head of Procurement", company: "Global FMCG Brand" },
  { quote: "Handling ODC project cargo requires precision. The BWCL team executed our 500-ton turbine movement flawlessly with complete route planning and safety compliance.", name: "Anand Patel", title: "Project Director", company: "Infrastructure Corp" },
  { quote: "Their multi-modal approach gives us the flexibility we need. When air is too expensive and sea is too slow, their rail+road hybrid solutions perfectly hit our sweet spot.", name: "Vikram Singh", title: "Logistics Head", company: "Auto OEM" }
];

function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    // auto-play
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] px-4">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 h-full flex flex-col justify-between">
                <div className="mb-6">
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 italic">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0B1F3A] font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1F3A]">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === selectedIndex ? "bg-[#0E4BFF] scale-125" : "bg-slate-300"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
