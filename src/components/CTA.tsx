import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="bg-card">
      <div className="container-narrow section-padding">
        <div className="bg-primary rounded-2xl p-8 lg:p-16 text-center relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-64 h-64 border border-primary-foreground rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 border border-primary-foreground rounded-full" />
          </div>

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Move Your Business Forward?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Get a free quote today and discover why 500+ businesses trust Srinathan Enterprises 
              for their logistics needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                variant="secondary"
                size="lg"
                className="text-base font-semibold"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                size="lg"
                className="text-base font-semibold bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25"
              >
                Talk to an Expert
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
              <a href="tel:+911234567890" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +91 12345 67890
              </a>
              <a href="mailto:info@srinathan.com" className="flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@srinathan.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
