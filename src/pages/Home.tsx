import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, IndianRupee, Cog, CheckCircle, Factory, Zap, Award, Users, TrendingUp, ArrowRight, TramFront, Flame, Pickaxe, Anchor, Building2, Fan, Plane, Layers, Tractor, Hammer, Scissors, BrickWall, CarFront, Cpu } from 'lucide-react';
import { AnimatedBearingHero } from '@/components/AnimatedBearingHero';
import CardFlip from '@/components/ui/flip-card';
import { CHKConnect } from '@/components/CHKConnect';

const advantages = [
    {
        icon: Shield,
        title: 'Unmatched Durability',
        description: 'Built to withstand the toughest conditions, our bearings are engineered with premium materials and advanced manufacturing processes. Designed for extreme environments, they ensure long-lasting performance, reduce maintenance costs, and minimize downtime in critical industrial applications.',
    },
    {
        icon: IndianRupee,
        title: 'Cost-Effective Solutions',
        description: 'Experience premium quality without the premium price tag. Our competitive pricing strategy and efficient supply chain management ensure you get the best value for your investment. Maximize your operational budget while maintaining superior performance standards and reliability across all applications.',
    },
    {
        icon: Cog,
        title: 'Precision Engineering',
        description: 'Meticulously crafted using state-of-the-art technology and stringent quality control measures. Each bearing is manufactured to exact specifications, ensuring optimal efficiency, reduced friction, and enhanced load-bearing capacity. Our precision engineering guarantees perfect fit and seamless integration into your machinery.',
    },
];

const products = [
    {
        name: 'Ball Bearings',
        image: '/images/ball-bearing.png',
        path: '/products',
    },
    {
        name: 'Roller Bearings',
        image: '/images/roller-bearing.png',
        path: '/products',
    },
    {
        name: 'Custom Solutions',
        image: '/images/custom-bearing.png',
        path: '/products',
    },
];

const whyChooseUs = [
    {
        icon: CheckCircle,
        title: 'Quality Assurance',
        description: 'Every bearing undergoes rigorous testing and quality checks to meet international standards. Our commitment to excellence ensures you receive products that consistently perform at peak levels.',
    },
    {
        icon: Zap,
        title: 'Fast Delivery',
        description: 'Strategically located warehouses and efficient logistics ensure quick delivery across India. We understand the importance of timely supply in keeping your operations running smoothly.',
    },
    {
        icon: Users,
        title: 'Expert Support',
        description: 'Our technical team provides dedicated assistance for product selection, installation guidance, and troubleshooting. Count on us for professional support throughout your bearing lifecycle.',
    },
    {
        icon: TrendingUp,
        title: 'Proven Track Record',
        description: 'Trusted by leading industries nationwide with a history of successful partnerships. Our reputation is built on delivering reliable solutions that drive operational excellence.',
    },
];

const industries = [
    {
        icon: Factory,
        title: 'Steel & Metal',
        description: 'Processing equipment',
    },
    {
        icon: TramFront,
        title: 'Railways',
        description: 'Rolling stock components',
    },
    {
        icon: Zap,
        title: 'Power Gen',
        description: 'Turbines & generators',
    },
    {
        icon: Flame,
        title: 'Oil & Gas',
        description: 'Drilling & pipes',
    },
    {
        icon: Pickaxe,
        title: 'Mining',
        description: 'Excavation machinery',
    },
    {
        icon: Anchor,
        title: 'Marine',
        description: 'Shipping & offshore',
    },
    {
        icon: Building2,
        title: 'Industrial',
        description: 'General plants',
    },
    {
        icon: Fan,
        title: 'HVAC',
        description: 'Electrical motors',
    },
    {
        icon: Plane,
        title: 'Aerospace',
        description: 'Defense systems',
    },
    {
        icon: Layers,
        title: 'Ceramic',
        description: 'Processing units',
    },
    {
        icon: Tractor,
        title: 'Agriculture',
        description: 'Farm machinery',
    },
    {
        icon: Hammer,
        title: 'Heavy Duty',
        description: 'Construction machinery',
    },
    {
        icon: Scissors,
        title: 'Textile',
        description: 'Spinning & weaving',
    },
    {
        icon: BrickWall,
        title: 'Cement',
        description: 'Kilns & crushers',
    },
    {
        icon: CarFront,
        title: 'Automotive',
        description: 'Vehicle components',
    },
    {
        icon: Cpu,
        title: 'Electronics',
        description: 'Precision equipment',
    },
];

const qualityStandards = [
    {
        icon: Award,
        title: 'ISO Certified',
        description: 'Manufactured under ISO 9001:2015 quality management systems for consistent excellence.',
    },
    {
        icon: Shield,
        title: 'Premium Materials',
        description: 'High-grade steel and advanced alloys ensuring superior strength and longevity.',
    },
    {
        icon: CheckCircle,
        title: 'Rigorous Testing',
        description: 'Comprehensive quality control at every stage from raw materials to finished products.',
    },
];

export function Home() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-90">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }} />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-26">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-white">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-0 bg-gradient-to-bl from-white to-gray-400 bg-clip-text text-transparent tracking-tight leading-none" style={{ fontFamily: 'TestDomaineDisplay, serif' }}>
                                Manufactured for
                            </h1>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 bg-gradient-to-bl from-white to-gray-400 bg-clip-text text-transparent tracking-tight leading-none" style={{ fontFamily: 'TestDomaineDisplay, serif' }}>
                                Endurance
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light" style={{ fontFamily: 'TestDomaineDisplay, serif' }}>
                                Discover affordable, high-quality bearings built for performance and reliability.
                                Experience precision engineering that powers your operations.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/products">
                                    <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25">
                                        Explore Products
                                    </Button>
                                </Link>

                            </div>
                        </div>

                        {/* Animated Bearing Illustration */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-sm">
                                <AnimatedBearingHero />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CHK Advantage Section */}
            <section id="chk-advantage" className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            The CHK Advantage
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            We combine cutting-edge technology with rigorous quality control to deliver
                            premium bearings you can trust.
                        </p>
                    </div>

                    {/* Advantage Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {advantages.map((advantage, index) => (
                            <Card
                                key={advantage.title}
                                id={`advantage-card-${index + 1}`}
                                className="bg-white border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden group"
                            >
                                <CardContent className="p-6 md:p-8">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                        <advantage.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" aria-hidden="true" />
                                    </div>

                                    {/* Card Title */}
                                    <h3
                                        className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 md:mb-4"
                                        style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                                    >
                                        {advantage.title}
                                    </h3>

                                    {/* Card Description */}
                                    <p
                                        className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed"
                                        style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                                    >
                                        {advantage.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Features Section with Flip Cards */}
            <section id="interactive-features" className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Discover Our Capabilities
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Hover over the cards to explore what makes CHK Bearings your ideal partner for industrial bearing solutions.
                        </p>
                    </div>

                    {/* Flip Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 justify-items-center">
                        <CardFlip
                            title="Premium Quality"
                            subtitle="Excellence in every bearing"
                            description="CHK Bearings delivers unmatched quality through rigorous testing, premium materials, and . engineering. Every product meets international standards."
                            features={[
                                'ISO 9001:2015 Certified',
                                'High-Grade Materials',
                                '100% Quality Tested',
                                'Long-lasting Performance'
                            ]}
                            color="#546cd6"
                            icon={Award}
                        />
                        <CardFlip
                            title="Fast Delivery"
                            subtitle="Quick turnaround nationwide"
                            description="Strategically located warehouses and efficient logistics ensure prompt delivery across India. We understand time is critical for your operations."
                            features={[
                                'Pan-India Coverage',
                                'Rapid Dispatch',
                                'Real-time Tracking',
                                'Reliable Supply Chain'
                            ]}
                            color="#546cd6"
                            icon={Zap}
                        />
                        <CardFlip
                            title="Expert Support"
                            subtitle="Dedicated technical assistance"
                            description="Our experienced team provides comprehensive support from product selection to installation and maintenance. Count on us for professional guidance."
                            features={[
                                'Technical Consultation',
                                'Installation Guidance',
                                'After-sales Support',
                                '24/7 Assistance'
                            ]}
                            color="#546cd6"
                            icon={Users}
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose CHK Section */}
            <section id="why-choose-chk" className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Why Choose CHK Bearings
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Your trusted partner for industrial bearing solutions. We deliver excellence through innovation, quality, and customer-focused service across India.
                        </p>
                    </div>

                    {/* Why Choose Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {whyChooseUs.map((reason, index) => (
                            <Card
                                key={reason.title}
                                id={`why-choose-card-${index + 1}`}
                                className="bg-white border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden group"
                            >
                                <CardContent className="p-6 md:p-8">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                        <reason.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" aria-hidden="true" />
                                    </div>

                                    {/* Card Title */}
                                    <h3
                                        className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                                        style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                                    >
                                        {reason.title}
                                    </h3>

                                    {/* Card Description */}
                                    <p
                                        className="text-gray-600 text-xs md:text-sm leading-relaxed"
                                        style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                                    >
                                        {reason.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section id="industries-we-serve" className="relative py-12 md:py-16 lg:py-20 bg-gray-50 overflow-hidden">
                {/* Animated background grid */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute inset-0"
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                            animation: 'slideBackground 20s linear infinite'
                        }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Industries We Serve
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            From manufacturing plants to agricultural operations, CHK Bearings powers diverse industrial sectors with reliable, high-performance bearing solutions tailored to your specific needs.
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {industries.map((industry, index) => (
                            <Card
                                key={industry.title}
                                id={`industry-card-${index + 1}`}
                                className="bg-white border-transparent shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden group opacity-0 animate-fade-in"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                                    {/* Icon Container */}
                                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                                        <industry.icon className="w-7 h-7 text-primary" aria-hidden="true" strokeWidth={1.5} />
                                    </div>

                                    {/* Industry Title */}
                                    <h3
                                        className="text-sm font-semibold text-gray-900"
                                        style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                                    >
                                        {industry.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Standards Section */}
            <section id="quality-standards" className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Our Quality Standards
                        </h2>
                        <p
                            className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Quality is not just a promise at CHK Bearings – it's our foundation. Every product meets stringent international standards, ensuring reliability and performance excellence.
                        </p>
                    </div>

                    {/* Quality Standards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {qualityStandards.map((standard, index) => (
                            <Card
                                key={standard.title}
                                id={`quality-card-${index + 1}`}
                                className="bg-white border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden group"
                            >
                                <CardContent className="p-6 md:p-8">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                        <standard.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" aria-hidden="true" />
                                    </div>

                                    {/* Standard Title */}
                                    <h3
                                        className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 md:mb-4"
                                        style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                                    >
                                        {standard.title}
                                    </h3>

                                    {/* Standard Description */}
                                    <p
                                        className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed"
                                        style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                                    >
                                        {standard.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Contact Section */}
            <CHKConnect />
        </div>
    );
}
