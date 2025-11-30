import { Award, Users, Globe, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const milestones = [
    { year: "2004", event: "CHK Bearings founded with focus on quality and affordability" },
    { year: "2008", event: "ISO 9001 certification achieved" },
    { year: "2012", event: "Expanded to international markets" },
    { year: "2016", event: "Opened state-of-the-art manufacturing facility" },
    { year: "2020", event: "Reached 50+ countries worldwide" },
    { year: "2024", event: "20 years of excellence and innovation" }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every bearing undergoes rigorous testing to ensure it meets our high standards"
    },
    {
      icon: Target,
      title: "Affordability",
      description: "Premium bearings at competitive prices, making quality accessible"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated support team ensuring your success is our priority"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving industries worldwide with reliable supply chain solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About CHK Bearings
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Two decades of commitment to quality, innovation, and customer satisfaction
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Founded in 2004, CHK Bearings emerged from a simple mission: to provide industrial-grade bearings that combine premium quality with affordable pricing. We recognized that manufacturers needed reliable bearing solutions without breaking their budgets.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Over the past 20 years, we've grown from a small operation to an internationally recognized supplier, serving clients across automotive, aerospace, manufacturing, and heavy industries. Our success stems from an unwavering commitment to quality, innovation, and customer satisfaction.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, CHK Bearings operates state-of-the-art manufacturing facilities with ISO 9001 certification, ships to over 50 countries, and maintains a reputation for durability and performance that speaks for itself.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="p-6 rounded-[18px] shadow-soft text-center">
                <div className="bg-gradient-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-primary text-white font-bold rounded-[18px] px-4 py-2 shadow-soft">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="p-6 rounded-[18px] shadow-soft">
                    <p className="text-foreground">{milestone.event}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-muted rounded-[18px] p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Certifications & Standards</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our commitment to quality is verified by international certifications
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <p className="font-semibold">ISO 9001:2015</p>
              <p className="text-sm text-muted-foreground">Quality Management</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="font-semibold">ANSI/ABMA</p>
              <p className="text-sm text-muted-foreground">Standards Compliant</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <p className="font-semibold">CE Marked</p>
              <p className="text-sm text-muted-foreground">European Standards</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
