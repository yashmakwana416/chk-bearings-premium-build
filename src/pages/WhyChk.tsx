import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, DollarSign, MessageSquare, Globe, ArrowRight } from 'lucide-react';

const advantages = [
    {
        icon: Shield,
        title: 'Uncompromising Durability',
        description: 'Engineered to perform under the most demanding conditions.',
    },
    {
        icon: DollarSign,
        title: 'Cost-Effective Solutions',
        description: 'Premium quality bearings that fit your budget.',
    },
    {
        icon: MessageSquare,
        title: 'Expert Consultation',
        description: 'Our engineering team is ready to assist with your technical challenges.',
    },
    {
        icon: Globe,
        title: 'Global Supply Chain',
        description: 'Reliable delivery to your location, wherever you are.',
    },
];

const services = [
    {
        title: 'Custom Bearing Solutions',
        description: 'We design and manufacture bearings to your exact specifications. Our team works with you to create the perfect component for your application, ensuring optimized performance and integration.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        link: 'Learn More',
        reverse: false,
    },
    {
        title: 'Technical Support & Engineering',
        description: 'Our experienced engineering team provides comprehensive technical support, from product selection to troubleshooting, helping you overcome challenges and optimize your machinery\'s performance.',
        image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop',
        link: 'Get Support',
        reverse: true,
    },
    {
        title: 'Bulk & Just-in-Time Delivery',
        description: 'Our robust global supply chain ensures you get the parts you need, when you need them. We offer flexible delivery options, including bulk orders and just-in-time scheduling, to keep your production line moving.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
        link: 'Explore Logistics',
        reverse: false,
    },
];

export function WhyChk() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-30" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Precision Engineering,<br />
                        Unmatched Value
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Discover superior durability and affordability, backed by expert services tailored to your needs. We are your partners in performance.
                    </p>
                    <Link to="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
                            Request a Quote
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Why Choose CHK Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose CHK Bearings?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We combine cutting-edge technology with dedicated support to deliver solutions that enhance performance and reduce costs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage) => (
                            <Card key={advantage.title} className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <advantage.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {advantage.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Our Services
                        </h2>
                    </div>

                    <div className="space-y-20">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                            >
                                <div className="w-full lg:w-1/2">
                                    <div className="rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-80 object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                                        {service.link}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Upgrade Your Operations?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let our experts help you find the perfect bearing solution to enhance performance and reduce costs. Get in touch today for a personalized quote.
                    </p>
                    <Link to="/contact">
                        <Button className="bg-gradient-to-r from-primary to-orange-400 hover:from-primary/90 hover:to-orange-400/90 text-white rounded-full px-8 py-6 text-lg">
                            Contact Our Experts
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
