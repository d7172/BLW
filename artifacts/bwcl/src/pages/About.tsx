import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lightbulb, Leaf, Users, Award, Target, CheckCircle2, TrendingUp, Anchor, HeartHandshake, Briefcase, Zap } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    { title: "Commitment", desc: "Unwavering dedication to meeting and exceeding our operational promises.", icon: Shield },
    { title: "Ownership", desc: "Taking full responsibility for every freight movement, from origin to destination.", icon: Briefcase },
    { title: "Team Work", desc: "Collaborating seamlessly across all logistics nodes and organizational levels.", icon: Users },
    { title: "Innovation", desc: "Continuously integrating advanced logistics technology to refine our operations.", icon: Lightbulb },
    { title: "Integrity", desc: "Operating with absolute transparency and ethical clarity in all interactions.", icon: CheckCircle2 },
    { title: "Relationship-Centric", desc: "Fostering long-term, high-trust partnerships with our enterprise clients.", icon: HeartHandshake },
    { title: "Flexibility", desc: "Adapting swiftly to shifting supply chain demands and dynamic market conditions.", icon: Zap },
  ];

  return (
    <>
      <SEO 
        title="About BWCL | Our Story, Mission & Leadership"
        description="Learn about BW Container Lines (BWCL) - India's trusted integrated logistics partner powering economic growth through rail, road, sea, and air."
        canonical="/about"
      />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-medium mb-4 md:mb-6 text-blue-300">
            <Anchor className="h-4 w-4" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">Driving India's Supply Chain Forward</h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Headquartered in Moodbidri, Karnataka, BWCL is a premier multimodal logistics company committed to reliability, technology, and sustainable growth.
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
              <Target className="h-10 w-10 md:h-12 md:w-12 text-[#0E4BFF] mb-4 md:mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-3 md:mb-4">Our Mission</h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                To deliver exceptional rail cargo logistics services that exceed client expectations through reliability, advanced technology, and sustainability — while fostering strong partnerships and ensuring operational excellence.
              </p>
            </div>
            
            <div className="bg-[#0B1F3A] p-8 md:p-10 rounded-3xl border border-[#0B1F3A] text-white shadow-xl">
              <TrendingUp className="h-10 w-10 md:h-12 md:w-12 text-emerald-400 mb-4 md:mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Vision</h2>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
                To revolutionize rail transportation by setting new standards for efficiency, innovation, and sustainability, establishing BWCL as the foremost leader in rail cargo logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">Strategic Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              { title: "Operational Excellence", desc: "Executing every freight movement with precision." },
              { title: "Customer-Centric Approach", desc: "Aligning our solutions entirely with client goals." },
              { title: "Sustainability", desc: "Driving the green modal shift to rail transportation." },
              { title: "Adaptability", desc: "Scaling operations rapidly to meet market demands." },
              { title: "Employee Growth & Well-Being", desc: "Nurturing the logistics leaders of tomorrow." }
            ].map((pillar, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-xl font-bold text-[#0E4BFF] mb-3">{pillar.title}</div>
                <p className="text-slate-600 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (Bento) */}
      <section className="py-16 md:py-24 bg-[#07111F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Core Values</h2>
            <p className="text-slate-400 text-base md:text-lg">The fundamental principles that guide every decision, route, and relationship at BWCL.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 md:p-8 rounded-3xl hover:bg-slate-800 transition-colors flex flex-col items-start">
                <val.icon className="h-8 w-8 md:h-10 md:w-10 text-emerald-400 mb-4 md:mb-6" />
                <h3 className="text-xl font-bold mb-2 md:mb-3">{val.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B1F3A] mb-4 md:mb-6">Leadership Team</h2>
          <p className="text-base md:text-lg text-slate-600 mb-12 md:mb-16 max-w-2xl mx-auto">Guided by industry visionaries with unparalleled expertise in rail cargo and multimodal logistics.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Jain Vishwas", role: "Managing Director", bio: "Leading BWCL's overarching vision and strategic integration of rail logistics networks across India." },
              { name: "Rajesh K", role: "Director", bio: "Spearheading operational excellence and ensuring flawless execution of multimodal freight operations." },
              { name: "Umesh Prasad B", role: "Director", bio: "Driving sustainable growth, compliance, and fostering long-term relationships with enterprise partners." }
            ].map((exec, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#0B1F3A] text-white rounded-full mb-4 md:mb-6 overflow-hidden flex items-center justify-center text-3xl md:text-4xl font-bold">
                  {exec.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{exec.name}</h3>
                <p className="text-[#0E4BFF] font-medium text-sm mb-4">{exec.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{exec.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Metrics / ROI */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-border" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4 md:mb-6">Why Choose Us</h2>
            <p className="text-base md:text-lg text-slate-600">
              BWCL is built on logistical expertise, vision, and operational excellence — delivering transparent, reliable, and cost-efficient multimodal solutions with highly attractive ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-border shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-emerald-500 mb-2">
                Under 3.5 years
              </div>
              <div className="text-slate-700 font-semibold uppercase tracking-wide text-sm mb-2">GCT Schedule 1 ROI</div>
              <p className="text-slate-500 text-xs">Accelerated return on strategic terminal investments.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-border shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-emerald-500 mb-2">
                2.61 – 3.52 years
              </div>
              <div className="text-slate-700 font-semibold uppercase tracking-wide text-sm mb-2">DFCCL Schedule 2 ROI</div>
              <p className="text-slate-500 text-xs">Proven profitability on dedicated freight corridor operations.</p>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-border shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-emerald-500 mb-2">
                Under 3.5 years
              </div>
              <div className="text-slate-700 font-semibold uppercase tracking-wide text-sm mb-2">ToT / Wagon Leasing ROI</div>
              <p className="text-slate-500 text-xs">Maximized capital efficiency on rail asset deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-6 md:mb-8">Ready to transform your supply chain?</h2>
          <Button asChild size="lg" className="rounded-full bg-[#0E4BFF] hover:bg-blue-600 h-14 px-8 text-base md:text-lg text-white w-full sm:w-auto">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
