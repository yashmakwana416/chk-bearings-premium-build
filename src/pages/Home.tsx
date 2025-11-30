import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Package, Shield, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "ISO-certified manufacturing with rigorous quality control standards"
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Affordable bearings without compromising on durability and performance"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Efficient supply chain with on-time delivery worldwide"
    },
    {
      icon: Package,
      title: "Wide Range",
      description: "Comprehensive selection for all industrial applications"
    }
  ];

  const categories = [
    { name: "Ball Bearings", description: "Deep groove, angular contact, self-aligning", image: "🔵" },
    { name: "Roller Bearings", description: "Cylindrical, tapered, spherical roller", image: "🔶" },
    { name: "Thrust Bearings", description: "Axial load applications", image: "⚡" },
    { name: "Specialty Bearings", description: "Custom and application-specific solutions", image: "⭐" },
  ];

  const trustedBy = [
    "Automotive", "Aerospace", "Manufacturing", "Mining", "Energy", "Construction"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-primary rounded-[18px] p-12 md:p-16 shadow-medium text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Bearings,<br />Affordable Prices
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Durable industrial bearings engineered for performance. Trusted since 2004.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link to="/products">
                  Browse Products <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 rounded-[18px] shadow-soft hover:shadow-medium transition-smooth">
                <div className="bg-gradient-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Product Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive bearing solutions for every industrial application
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-8 rounded-[18px] shadow-soft hover:shadow-medium transition-smooth group cursor-pointer">
              <div className="text-5xl mb-4">{category.image}</div>
              <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
              <Link to="/products" className="text-primary text-sm font-medium inline-flex items-center">
                View Products <ArrowRight className="ml-1" size={16} />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Trusted By */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-muted rounded-[18px] p-12">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Trusted by industry leaders worldwide
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustedBy.map((industry, index) => (
              <div key={index} className="text-foreground/60 font-medium text-lg">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CHK Bearings?</h2>
            <p className="text-muted-foreground text-lg">
              20 years of excellence in bearing manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "ISO 9001 certified manufacturing facilities",
              "In-house quality control and testing",
              "Competitive bulk pricing options",
              "Global shipping and logistics support",
              "Custom OEM solutions available",
              "Expert technical support team"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 mb-12">
        <div className="max-w-4xl mx-auto bg-gradient-primary rounded-[18px] p-12 md:p-16 text-center shadow-medium">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a custom quote for your bearing needs. Our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link to="/contact">Request Quote <ArrowRight className="ml-2" size={20} /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
