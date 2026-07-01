import { SEO } from "@/seo/SEO";
import { RoutesBackground } from "@/components/ui/RoutesBackground";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lightbulb, Leaf, Users, Award, Target, CheckCircle2, TrendingUp, Anchor, HeartHandshake, Briefcase, Zap, Train, Truck, Ship, Globe2, Package, Network, MapPin, Plane } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    { title: "Commitment", desc: "Unwavering dedication to meeting and exceeding our operational promises.", icon: Shield, bg: "bg-emerald-500", iconBg: "bg-emerald-400/30", iconColor: "text-white", text: "text-white", sub: "text-emerald-100" },
    { title: "Ownership", desc: "Taking full responsibility for every freight movement, from origin to destination.", icon: Briefcase, bg: "bg-orange-500", iconBg: "bg-orange-400/30", iconColor: "text-white", text: "text-white", sub: "text-orange-100" },
    { title: "Team Work", desc: "Collaborating seamlessly across all logistics nodes and organizational levels.", icon: Users, bg: "bg-sky-500", iconBg: "bg-sky-400/30", iconColor: "text-white", text: "text-white", sub: "text-sky-100" },
    { title: "Innovation", desc: "Continuously integrating advanced logistics technology to refine our operations.", icon: Lightbulb, bg: "bg-violet-500", iconBg: "bg-violet-400/30", iconColor: "text-white", text: "text-white", sub: "text-violet-100" },
    { title: "Integrity", desc: "Operating with absolute transparency and ethical clarity in all interactions.", icon: CheckCircle2, bg: "bg-teal-500", iconBg: "bg-teal-400/30", iconColor: "text-white", text: "text-white", sub: "text-teal-100" },
    { title: "Relationship-Centric", desc: "Fostering long-term, high-trust partnerships with our enterprise clients.", icon: HeartHandshake, bg: "bg-rose-500", iconBg: "bg-rose-400/30", iconColor: "text-white", text: "text-white", sub: "text-rose-100" },
    { title: "Flexibility", desc: "Adapting swiftly to shifting supply chain demands and dynamic market conditions.", icon: Zap, bg: "bg-amber-500", iconBg: "bg-amber-400/30", iconColor: "text-white", text: "text-white", sub: "text-amber-100" },
  ];

  return (
    <>
      <SEO 
        title="About BLW | Our Story, Mission & Leadership"
        description="Learn about Bharat Logistics & Warehousing (BLW) - India's trusted integrated logistics partner powering economic growth through rail, road, sea, and air."
        canonical="/about"
      />
      
      {/* Hero */}
      <section className="pt-40 pb-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <RoutesBackground />

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-border font-semibold text-sm mb-8 text-primary uppercase tracking-wider">
            <Anchor className="h-4 w-4" />
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-foreground">
            Driving India's Supply Chain <span className="font-serif italic text-primary font-normal">Forward.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
            Headquartered in Moodbidri, Karnataka, BLW is a premier multimodal logistics company committed to reliability, technology, and sustainable growth.
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-24 bg-white rounded-[4rem] shadow-sm -mt-8 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <Target className="h-12 w-12 text-primary mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">Our Mission</h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                To deliver exceptional rail cargo logistics services that exceed client expectations through reliability, advanced technology, and sustainability — while fostering strong partnerships and ensuring operational excellence.
              </p>
            </div>
            
            <div className="bg-primary p-12 rounded-[3rem] border border-primary text-white shadow-xl shadow-primary/20">
              <TrendingUp className="h-12 w-12 text-white mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Our Vision</h2>
              <p className="text-lg text-white/90 font-medium leading-relaxed">
                To revolutionize rail transportation by setting new standards for efficiency, innovation, and sustainability, establishing BLW as the foremost leader in rail cargo logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif">Strategic <span className="italic text-primary">Pillars</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Operational Excellence", desc: "Executing every freight movement with precision." },
              { title: "Customer-Centric Approach", desc: "Aligning our solutions entirely with client goals." },
              { title: "Sustainability", desc: "Driving the green modal shift to rail transportation." },
              { title: "Adaptability", desc: "Scaling operations rapidly to meet market demands." },
              { title: "Employee Growth & Well-Being", desc: "Nurturing the logistics leaders of tomorrow." }
            ].map((pillar, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                <div className="text-xl font-bold text-foreground mb-4">{pillar.title}</div>
                <p className="text-muted-foreground font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (Bento) */}
      <section className="py-24 bg-primary text-white rounded-[4rem] mx-4 mb-24">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-white">Core <span className="italic text-white/70 font-normal">Values</span></h2>
            <p className="text-white/70 text-lg md:text-xl font-medium">The fundamental principles that guide every decision, route, and relationship at BLW.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <div key={i} className={`${val.bg} p-8 rounded-[2rem] flex flex-col items-start transition-opacity hover:opacity-90`}>
                <div className={`h-14 w-14 rounded-2xl ${val.iconBg} flex items-center justify-center mb-6`}>
                  <val.icon className={`h-7 w-7 ${val.iconColor}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 font-serif ${val.text}`}>{val.title}</h3>
                <p className={`${val.sub} font-medium leading-relaxed`}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Partnership Metrics / ROI */}
      <section className="py-24 bg-background" ref={statsRef}>
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif">Why <span className="italic text-primary font-normal">Choose Us</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              BLW is built on logistical expertise, vision, and operational excellence — delivering transparent, reliable, and cost-efficient multimodal solutions with highly attractive ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-4 font-serif">
                Under 3.5 years
              </div>
              <div className="text-foreground font-bold uppercase tracking-wider text-sm mb-4">GCT Schedule 1 ROI</div>
              <p className="text-muted-foreground font-medium">Accelerated return on strategic terminal investments.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-4 font-serif">
                2.61 – 3.52 years
              </div>
              <div className="text-foreground font-bold uppercase tracking-wider text-sm mb-4">DFCCL Schedule 2 ROI</div>
              <p className="text-muted-foreground font-medium">Proven profitability on dedicated freight corridor operations.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-primary mb-4 font-serif">
                Under 3.5 years
              </div>
              <div className="text-foreground font-bold uppercase tracking-wider text-sm mb-4">ToT / Wagon Leasing ROI</div>
              <p className="text-muted-foreground font-medium">Maximized capital efficiency on rail asset deployment.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
