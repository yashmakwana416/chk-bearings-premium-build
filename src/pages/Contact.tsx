import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      subDetail: "Mon-Fri, 8AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@chkbearings.com",
      subDetail: "We reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "123 Industrial Park",
      subDetail: "Manufacturing District, USA"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Monday - Friday",
      subDetail: "8:00 AM - 6:00 PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our products or need a custom quote? Our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 rounded-[18px] shadow-soft">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="Product Inquiry / Quote Request" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your bearing needs, quantities, specifications, or any questions you have..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="gradient-primary w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 rounded-[18px] shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-foreground">{info.detail}</p>
                      <p className="text-sm text-muted-foreground">{info.subDetail}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <Card className="rounded-[18px] overflow-hidden shadow-soft">
            <div className="bg-muted h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-muted-foreground" size={48} />
                <p className="text-muted-foreground">Map integration available</p>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 bg-gradient-primary rounded-[18px] p-8 md:p-12 text-center shadow-medium">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Looking for Quick Answers?
          </h2>
          <p className="text-white/90 mb-6">
            Check out our FAQ section for common questions about products, shipping, and services.
          </p>
          <Button size="lg" variant="secondary">
            Visit FAQ
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
