import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/48a43549-1.png"; // ✅ Add this

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container-narrow section-padding !py-12 lg:!py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              
              {/* Logo Image */}
              <img
                src={logo}
                alt="Srinathan Enterprises Logo"
                className="w-10 h-10 object-contain"
              />

              <span className="font-bold text-background text-lg">
                Srithan Enterprise
              </span>
            </div>

            <p className="text-background/60 text-sm leading-relaxed">
              Trusted logistics and transportation partner serving businesses across India since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Fleet", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {["Full Truckload", "Part Load", "Warehousing", "Express Delivery", "Last Mile"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-background/60 hover:text-background transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-background/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/60">
                  123 Transport Nagar,<br />Chennai, Tamil Nadu 600001
                </span>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a href="mailto:info@srinathan.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                  <Mail className="w-4 h-4" />
                  srini@srithanenterprise-co-in.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-8 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Srinathan Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
