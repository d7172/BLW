import { SEO } from "@/seo/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Train, Truck, Ship, Plane, Warehouse, HardHat } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "rail-logistics",
      title: "Rail Logistics",
      icon: Train,
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200",
      desc: "India's most cost-effective bulk freight solution. We provide container rakes, BOXN wagons, BCNA wagons, GPWIS, and FCI rakes."
    },
    {
      id: "road-logistics",
      title: "Road Logistics",
      icon: Truck,
      img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200",
      desc: "Nationwide coverage for FTL, PTL, ODC (Over-Dimensional Cargo), and efficient last-mile delivery operations."
    },
    {
      id: "sea-freight",
      title: "Sea Freight",
      icon: Ship,
      img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200",
      desc: "Comprehensive ocean logistics including FCL, LCL, coastal shipping, and port-to-port freight services."
    },
    {
      id: "air-freight",
      title: "Air Freight",
      icon: Plane,
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
      desc: "Time-critical express cargo, perishables handling, and secure transport for high-value shipments."
    },
    {
      id: "warehousing",
      title: "Warehousing & 3PL",
      icon: Warehouse,
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
      desc: "Multi-location warehousing, temperature-controlled storage, and advanced Warehouse Management Systems (WMS)."
    },
    {
      id: "project-cargo",
      title: "Project Cargo",
      icon: HardHat,
      img: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=1200",
      desc: "Specialized logistics for heavy lift, EPC projects, utilizing cranes and specialized equipment."
    }
  ];

  return (
    <>
      <SEO 
        title="Logistics Services | Rail, Road, Sea, Air & Warehousing - BWCL"
        description="Comprehensive enterprise logistics services: Rail, Road, Sea, Air freight, Warehousing, and Project Cargo by BWCL."
        canonical="/services"
      />
      
      <section className="pt-32 pb-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] mb-6">Comprehensive Logistics Solutions</h1>
          <p className="text-xl text-slate-600">End-to-end multimodal supply chain capabilities designed for scale, precision, and efficiency.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col gap-24">
          {services.map((svc, idx) => (
            <div key={svc.id} id={svc.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={svc.img} alt={svc.title} className="w-full h-[400px] object-cover" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-secondary mb-6">
                  <svc.icon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                <p className="text-lg text-slate-600 mb-8">{svc.desc}</p>
                <ul className="space-y-3 mb-8">
                  {['Dedicated Account Manager', 'Real-time Tracking Visibility', 'Pan-India Coverage', '24/7 Control Tower Support'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#0B1F3A] hover:bg-slate-800 text-white rounded-full">
                  <Link to="/contact">Get a Quote for {svc.title}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
