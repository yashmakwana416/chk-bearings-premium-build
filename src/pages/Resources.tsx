import { BookOpen, FileText, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const Resources = () => {
  const articles = [
    {
      title: "Complete Guide to Bearing Selection",
      category: "Technical Guide",
      excerpt: "Learn how to choose the right bearing for your application with this comprehensive guide covering load types, speeds, and environmental factors.",
      readTime: "8 min read"
    },
    {
      title: "Understanding Bearing Maintenance",
      category: "Best Practices",
      excerpt: "Proper maintenance extends bearing life significantly. Discover lubrication schedules, inspection techniques, and common issues to watch for.",
      readTime: "6 min read"
    },
    {
      title: "Ball Bearings vs Roller Bearings",
      category: "Product Comparison",
      excerpt: "A detailed comparison of ball and roller bearings to help you understand which type best suits your specific application requirements.",
      readTime: "5 min read"
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Technical Datasheets",
      description: "Download detailed specifications and performance data",
      action: "Browse Datasheets"
    },
    {
      icon: BookOpen,
      title: "Installation Guides",
      description: "Step-by-step instructions for proper bearing installation",
      action: "View Guides"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch expert demonstrations and maintenance tips",
      action: "Watch Videos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Learning</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technical guides, articles, and resources to help you make informed decisions about industrial bearings.
          </p>
        </div>

        {/* Quick Access Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="p-6 rounded-[18px] shadow-soft hover:shadow-medium transition-smooth">
                  <div className="bg-gradient-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full">
                    {resource.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
          <div className="space-y-6">
            {articles.map((article, index) => (
              <Card key={index} className="p-6 rounded-[18px] shadow-soft hover:shadow-medium transition-smooth">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-xs font-medium text-primary mb-2">{article.category}</div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-3">{article.excerpt}</p>
                    <div className="text-sm text-muted-foreground">{article.readTime}</div>
                  </div>
                  <Button className="gradient-primary md:flex-shrink-0">
                    Read Article
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="mb-16">
          <div className="bg-muted rounded-[18px] p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "What is the typical lead time for orders?",
                  a: "Standard products ship within 3-5 business days. Custom orders typically take 2-3 weeks."
                },
                {
                  q: "Do you offer warranties on your bearings?",
                  a: "Yes, all bearings come with a 12-month warranty against manufacturing defects."
                },
                {
                  q: "Can I get technical support for bearing selection?",
                  a: "Absolutely! Our engineering team is available to help you choose the right bearing for your application."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 rounded-[18px] shadow-soft">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <div className="bg-gradient-primary rounded-[18px] p-8 md:p-12 text-center shadow-medium">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Stay Updated
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for technical articles, product updates, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
