import { Truck, Package, Warehouse, MapPinned, Clock, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Full Truckload (FTL)",
    description: "Dedicated truck for your cargo with direct point-to-point delivery across India.",
  },
  {
    icon: Package,
    title: "Part Load Services",
    description: "Cost-effective shared transportation for smaller shipments without compromising timelines.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure, well-managed warehousing facilities with inventory management support.",
  },
  {
    icon: MapPinned,
    title: "Last Mile Delivery",
    description: "Reliable last-mile logistics ensuring your goods reach the final destination safely.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Time-critical shipments handled with priority routing and real-time tracking.",
  },
  {
    icon: ShieldCheck,
    title: "Insured Transport",
    description: "Complete cargo insurance coverage giving you total peace of mind during transit.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-section-alt">
      <div className="container-narrow section-padding">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end logistics solutions tailored to your business needs with reliability and efficiency at every step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
