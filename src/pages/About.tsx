import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Shield, Wallet, Users, ChevronDown } from 'lucide-react';
import DatabaseWithRestApi from '@/components/ui/database-with-rest-api';
import { AnimatedCard, CardBody, CardDescription, CardTitle, CardVisual, Visual3 } from '@/components/ui/animated-card-chart';


const coreValues = [
    {
        icon: Shield,
        title: 'Durability',
        description: 'Engineered to withstand the toughest industrial conditions with superior materials and advanced manufacturing processes.',
    },
    {
        icon: Wallet,
        title: 'Affordability',
        description: 'Premium quality doesn\'t have to come at a premium price. Experience exceptional value without compromising on performance.',
    },
    {
        icon: Users,
        title: 'Customer Focus',
        description: 'Your success is our priority. We\'re committed to providing dedicated support and building long-term partnerships.',
    },
];


// Performance Comparison Card Component
function PerformanceComparisonCard() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col items-center transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="mb-4 transition-all duration-500">
                <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 ${isHovered
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                        }`}
                    style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                >
                    {isHovered ? 'With CHK Bearings' : 'Before CHK Bearings'}
                </span>
            </div>
            <AnimatedCard>
                <CardVisual>
                    <Visual3
                        mainColor={isHovered ? "#22c55e" : "#ef4444"}
                        secondaryColor={isHovered ? "#16a34a" : "#dc2626"}
                        gridColor="#80808015"
                    />
                </CardVisual>
                <CardBody>
                    <CardTitle style={{ fontFamily: 'TestDomaineDisplay, serif' }}>
                        {isHovered ? 'Superior Performance' : 'Standard Performance'}
                    </CardTitle>
                    <CardDescription style={{ fontFamily: 'TestDomaineDisplay, serif' }}>
                        {isHovered
                            ? 'Maximum efficiency, minimal maintenance, extended lifespan, reduced total cost of ownership.'
                            : 'Lower efficiency, frequent maintenance required, shorter bearing lifespan, higher operational costs.'}
                    </CardDescription>
                </CardBody>
            </AnimatedCard>
        </div>
    );
}

export function About() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section id="about-hero" className="relative py-8 md:py-12 lg:py-16 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Content */}
                    <div className="text-center mb-6">
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            About CHK Bearings
                        </h1>
                    </div>

                    {/* Animated Component */}
                    <div className="flex justify-center mb-6">
                        <DatabaseWithRestApi
                            badgeTexts={{
                                first: "Ball Bearings",
                                second: "Roller Bearings",
                                third: "Thrust Bearings",
                                fourth: "Custom Solutions"
                            }}
                            buttonTexts={{
                                first: "CHK Bearings",
                                second: "Engineering"
                            }}
                            title="Precision Engineering for Industrial Excellence"
                            circleLogo="/chk-logo.png"
                            lightColor="#546cd6"
                        />
                    </div>

                    {/* Scroll Down Indicator */}
                    <div className="text-center">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm text-gray-600 font-medium" style={{ fontFamily: 'TestDomaineDisplay, serif' }}>
                                Scroll down
                            </span>
                            <ChevronDown className="w-6 h-6 text-gray-600" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Mission & Vision
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We are dedicated to providing the most reliable and affordable bearings on the market, pushing the boundaries of engineering to empower our customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Our Mission
                                </h3>
                                <p className="text-gray-600">
                                    To deliver high-performance, durable bearings that exceed industry standards while remaining accessible and affordable for all our partners.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Eye className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Our Vision
                                </h3>
                                <p className="text-gray-600">
                                    To be the world's most trusted partner in motion technology, pioneering innovations that drive progress and build a sustainable future.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Bearing Performance Comparison Section */}
            <section id="performance-comparison" className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            The CHK Performance Difference
                        </h2>
                        <p
                            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            style={{ fontFamily: 'TestDomaineDisplay, serif' }}
                        >
                            Hover over the card to see the dramatic improvement in operational efficiency and performance
                            when you choose CHK Bearings.
                        </p>
                    </div>

                    {/* Interactive Before/After Card */}
                    <div className="flex justify-center mb-12 lg:mb-10">
                        <PerformanceComparisonCard />
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="pb-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value) => (
                            <Card key={value.title} className="bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
