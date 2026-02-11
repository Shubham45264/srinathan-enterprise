import { CheckCircle } from "lucide-react";

const highlights = [
  "Modern fleet with GPS tracking on every vehicle",
  "Experienced drivers with safety-first training",
  "24/7 customer support and real-time updates",
  "Competitive pricing with transparent billing",
  "Pan-India network covering 28+ states",
  "Fully insured cargo with zero-damage guarantee",
];

const About = () => {
  return (
    <section id="about" className="bg-card">
      <div className="container-narrow section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Moving India Forward
              <br />
              <span className="text-primary">Since 2009</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Srinathan Enterprises is a trusted name in the Indian logistics and transportation industry. 
              With over 15 years of experience, we've built a reputation for reliability, safety, and 
              on-time delivery that businesses across the country depend on.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our modern fleet, trained personnel, and technology-driven approach ensure that every 
              shipment—big or small—reaches its destination efficiently and securely.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="bg-section-alt rounded-2xl p-8 lg:p-10 border border-border">
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Our Mission</div>
                  <p className="text-foreground font-medium leading-relaxed">
                    To provide exceptional logistics solutions that empower businesses to grow, 
                    with unwavering commitment to safety, efficiency, and customer satisfaction.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Our Vision</div>
                  <p className="text-foreground font-medium leading-relaxed">
                    To be India's most trusted and technology-driven logistics partner, 
                    setting the standard for reliability and innovation in the transportation industry.
                  </p>
                </div>
                <div className="bg-primary rounded-xl p-5">
                  <div className="text-sm text-primary-foreground/70 mb-1">Core Values</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Safety", "Reliability", "Integrity", "Innovation"].map((val) => (
                      <span
                        key={val}
                        className="px-3 py-1 bg-primary-foreground/15 text-primary-foreground text-sm rounded-full font-medium"
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
