import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-trucks.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fleet of trucks on highway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative container-narrow section-padding !py-20 lg:!py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary-foreground/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Trusted by 500+ businesses across India
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight mb-6">
            Reliable Logistics
            <br />
            <span className="text-accent">Solutions You</span>
            <br />
            Can Count On
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
            Srithan Enterprise delivers safe, on-time transportation services with a modern fleet and 
            dedicated team across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-base">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Our Services
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            {[
              { icon: Shield, label: "Fully Insured" },
              { icon: Clock, label: "On-Time Delivery" },
              { icon: MapPin, label: "Pan-India Coverage" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
