import { SEO } from "@/seo/SEO";
import { RoutesBackground } from "@/components/ui/RoutesBackground";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Train, Truck, Ship, Plane, Warehouse, HardHat, ArrowRight, Globe2, Package, Network, MapPin, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "rail-logistics",
      title: "Railway Logistics",
      icon: Train,
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=75",
      desc: "Our Railway-First Strategy positions us as leaders in green freight. We provide Truck-on-Train solutions, Freight Forwarding for small consignments, and door-to-door connectivity across all Indian rail touchpoints."
    },
    {
      id: "road-logistics",
      title: "Road Logistics",
      icon: Truck,
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=75",
      desc: "Pan-India ground coverage with LTL, FTL, PTL, and ODC movements. Superfast cargo services powered by our own fleet of 100+ trucks ensuring timely last-mile delivery."
    },
    {
      id: "sea-freight",
      title: "Sea / Ship Logistics",
      icon: Ship,
      img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=75",
      desc: "Global ocean coverage for FCL & LCL. We manage efficient customs clearance and provide scalable, eco-friendly maritime operations connecting Indian ports to the world."
    },
    {
      id: "air-freight",
      title: "Air Logistics",
      icon: Plane,
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=75",
      desc: "Strategic partnerships with major airlines and a broad network of airport facilities worldwide to provide unparalleled global reach for time-critical express cargo."
    },
    {
      id: "warehousing",
      title: "Warehousing & 3PL",
      icon: Warehouse,
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=75",
      desc: "Smart multi-location warehousing, temperature-controlled storage, and advanced Warehouse Management Systems (WMS) for seamless inventory control."
    },
    {
      id: "project-cargo",
      title: "Project Cargo",
      icon: HardHat,
      img: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800&q=75",
      desc: "Specialized logistics for heavy lift, EPC projects, and over-dimensional cargo utilizing sophisticated handling equipment and route surveys."
    }
  ];

  return (
    <>
      <SEO 
        title="Logistics Services | Rail, Road, Sea, Air & Warehousing - BLW"
        description="Comprehensive enterprise logistics services: Railway, Road, Sea, Air freight, Warehousing, and Project Cargo by BLW."
        canonical="/services"
      />
      
      <section className="pt-40 pb-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <RoutesBackground />

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-serif leading-tight">
            Comprehensive <span className="italic text-primary font-normal">Solutions.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium">End-to-end multimodal supply chain capabilities designed for scale, precision, and efficiency.</p>
        </div>
      </section>

      <section className="py-20 bg-white rounded-t-[4rem] shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
        <div className="container mx-auto flex flex-col gap-24 max-w-6xl">
          {services.map((svc, idx) => (
            <div key={svc.id} id={svc.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="rounded-[3rem] overflow-hidden shadow-xl">
                  <img src={svc.img} alt={svc.title} loading={idx === 0 ? "eager" : "lazy"} decoding="async" className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-[1.5rem] bg-primary/10 text-primary mb-6">
                  <svc.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">{svc.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 font-medium leading-relaxed">{svc.desc}</p>
                <ul className="space-y-4 mb-10">
                  {['Dedicated Account Manager', 'Real-time Tracking Visibility', 'Pan-India & Global Coverage', '24/7 Control Tower Support'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-foreground font-medium">
                      <div className="h-3 w-3 rounded-full bg-secondary shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-white rounded-full w-full sm:w-auto h-14 px-8 text-lg font-bold">
                  <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
