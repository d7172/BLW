import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lightbulb, Leaf, Users, Award, Target, CheckCircle2, TrendingUp, Anchor } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    { title: "Reliability", desc: "We deliver on our promises, ensuring your cargo reaches its destination safely and on time.", icon: Shield },
    { title: "Innovation", desc: "Leveraging technology to optimize routes, reduce costs, and provide real-time visibility.", icon: Lightbulb },
    { title: "Sustainability", desc: "Committed to green logistics, championing the modal shift from road to eco-friendly rail.", icon: Leaf },
    { title: "Customer-First", desc: "Building long-term partnerships by tailoring our solutions to your specific enterprise needs.", icon: Users },
    { title: "Integrity", desc: "Operating with absolute transparency, honesty, and ethical business practices.", icon: CheckCircle2 },
    { title: "Excellence", desc: "Continuously improving our operations to set new benchmarks in the Indian logistics industry.", icon: Award },
  ];

  const timeline = [
    { year: "2012", title: "Foundation", desc: "BWCL established in Moodbidri, Karnataka with a small fleet of road transport vehicles." },
    { year: "2015", title: "Rail Integration", desc: "Launched our first dedicated container rake services, pioneering private rail freight in the region." },
    { year: "2018", title: "National Expansion", desc: "Expanded operations to cover all major ports and industrial hubs across India." },
    { year: "2021", title: "Digital Transformation", desc: "Implemented our proprietary Control Tower and advanced IoT tracking systems." },
    { year: "2024", title: "Multimodal Leader", desc: "Recognized as a premier integrated logistics provider with over 30,000+ containers moved annually." }
  ];

  return (
    <>
      <SEO 
        title="About BWCL | Our Story, Mission & Leadership"
        description="Learn about BW Container Lines (BWCL) - India's trusted integrated logistics partner powering economic growth through rail, road, sea, and air."
        canonical="/about"
      />
      
      {/* Hero */}
      <section className="pt-32 pb-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-blue-300">
            <Anchor className="h-4 w-4" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Driving India's Supply Chain Forward</h1>
          <p className="text-xl text-slate-300 font-light leading-relaxed">
            Headquartered in Moodbidri, Karnataka, BWCL is a premier multimodal logistics company committed to reliability, technology, and sustainable growth.
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-[#0E4BFF] mb-6" />
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To deliver reliable, technology-enabled, and sustainable multimodal logistics solutions that power India's economic growth and create value for our enterprise partners.
              </p>
            </div>
            
            <div className="bg-[#0B1F3A] p-10 rounded-3xl border border-[#0B1F3A] text-white hover:shadow-xl hover:shadow-[#0B1F3A]/20 transition-shadow">
              <TrendingUp className="h-12 w-12 text-emerald-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                To be India's most trusted integrated logistics partner, connecting every corner of the country and beyond through seamless, innovative, and green supply chain networks.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6">Company Overview</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded with a commitment to operational excellence, BW Container Lines (BWCL) has grown to become a cornerstone of India's logistics infrastructure. From our headquarters in Moodbidri, we orchestrate complex freight movements across the subcontinent.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We operate seamlessly across rail, road, sea, and air, providing end-to-end supply chain solutions for India's largest enterprises in steel, cement, automotive, FMCG, and manufacturing sectors. Our distinct advantage lies in our deep integration of rail infrastructure combined with agile road transport, delivering unmatched cost-efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">Our Strategic Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Technology", desc: "Proprietary TMS, IoT tracking, and data analytics driving efficiency." },
              { title: "Network", desc: "Pan-India presence with strategic access to ports and rail terminals." },
              { title: "People", desc: "Industry veterans and logistics experts managing complex operations." },
              { title: "Sustainability", desc: "Aggressive targets for carbon reduction via rail modal shifts." }
            ].map((pillar, i) => (
              <div key={i} className="text-center p-6 border-b-2 md:border-b-0 md:border-r-2 border-slate-200 last:border-0">
                <div className="text-2xl font-bold text-[#0E4BFF] mb-3">{pillar.title}</div>
                <p className="text-slate-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (Bento) */}
      <section className="py-24 bg-[#07111F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Values</h2>
            <p className="text-slate-400 text-lg">The principles that guide every decision, every route, and every relationship at BWCL.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
                <val.icon className="h-10 w-10 text-emerald-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#0B1F3A] mb-16">Our Journey</h2>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 md:flex md:flex-col md:items-center md:border-l-0">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"></div>
            
            {timeline.map((item, i) => (
              <div key={i} className={`relative pl-8 md:pl-0 mb-12 w-full md:flex ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} md:items-center`}>
                {/* Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-[#0E4BFF] ring-4 ring-white"></div>
                
                {/* Content Card */}
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-[#0E4BFF] font-bold rounded-lg text-sm mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-24 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Leadership Team</h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">Guided by industry veterans with decades of collective experience in Indian logistics.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {["Chief Executive Officer", "Chief Operating Officer", "Chief Technology Officer"].map((role, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Executive Name</h3>
                <p className="text-[#0E4BFF] font-medium text-sm mb-4">{role}</p>
                <p className="text-slate-500 text-sm">20+ years of experience in supply chain optimization and enterprise logistics strategy.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter (Reused) */}
      <section className="py-20 bg-[#0B1F3A] text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={30000} separator="," suffix="+" /> : "0"}
              </div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">TEUs Handled</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={500} suffix="+" /> : "0"}
              </div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={24} suffix="/7" /> : "0"}
              </div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Control Tower</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                {statsInView ? <CountUp end={100} suffix="%" /> : "0"}
              </div>
              <div className="text-slate-300 text-sm uppercase tracking-wider">Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">Ready to transform your supply chain?</h2>
          <Button asChild size="lg" className="rounded-full bg-[#0E4BFF] hover:bg-blue-600 h-14 px-8 text-lg text-white">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
