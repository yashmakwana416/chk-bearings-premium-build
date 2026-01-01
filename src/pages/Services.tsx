import { Truck, Settings, Package, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Global Supply Chain Solutions",
      description: "Reliable logistics and distribution network ensuring on-time delivery worldwide",
      features: [
        "Express shipping options available",
        "Track orders in real-time",
        "Flexible delivery schedules",
        "Consolidated shipping for bulk orders"
      ]
    },
    {
      icon: Package,
      title: "OEM & Custom Manufacturing",
      description: "Tailored bearing solutions designed for your specific applications",
      features: [
        "Custom specifications and sizes",
        "Private labeling options",
        "Engineering support",
        "Prototype development"
      ]
    },
    {
      icon: Settings,
      title: "Technical Support & Consulting",
      description: "Expert guidance for bearing selection, installation, and maintenance",
      features: [
        "Application engineering",
        "Bearing selection assistance",
        "Installation guidelines",
        "Troubleshooting support"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "After-Sales Service",
      description: "Comprehensive support ensuring your complete satisfaction",
      features: [
        "Warranty coverage",
        "Return and exchange policy",
        "Quality issue resolution",
        "Long-term partnership focus"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive solutions beyond just bearings – from consultation to delivery
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 rounded-[18px] shadow-soft hover:shadow-medium transition-smooth">
                <div className="bg-gradient-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 rounded-[18px] shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Bulk Order Benefits</h2>
                <p className="text-muted-foreground mb-6">
                  Special pricing and services for large quantity orders
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Volume-based pricing tiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Flexible payment terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Priority production scheduling</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">📦</div>
                <Button className="gradient-primary" size="lg" asChild>
                  <Link to="/contact">Request Bulk Quote</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent process from inquiry to delivery
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Inquiry", desc: "Share your requirements" },
            { step: "02", title: "Quote", desc: "Receive detailed pricing" },
            { step: "03", title: "Order", desc: "Confirm and place order" },
            { step: "04", title: "Delivery", desc: "Fast, tracked shipping" }
          ].map((item, index) => (
            <Card key={index} className="p-6 rounded-[18px] shadow-soft text-center">
              <div className="text-5xl font-bold gradient-text mb-3">{item.step}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-primary rounded-[18px] p-8 md:p-12 text-center shadow-medium">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your bearing needs and discover how we can help your business succeed.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
