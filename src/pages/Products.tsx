import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Product data based on sitemap URLs
export const products = [
    {
        id: 1,
        name: 'Roller Bearings',
        slug: 'roller-bearings-in-rajkot-surat-morbi',
        description: 'High-performance roller bearings designed for heavy radial loads and superior durability in industrial applications.',
        image: '/images/roller-bearing.png',
        priority: 0.8,
        category: 'General',
    },
    {
        id: 2,
        name: 'Ball Bearings',
        slug: 'ball-bearings-in-rajkot-surat-morbi',
        description: 'Versatile ball bearings offering low friction and high-speed capability for diverse mechanical applications.',
        image: '/images/ball-bearing.png',
        priority: 0.8,
        category: 'General',
    },
    {
        id: 3,
        name: 'Plain Bearings',
        slug: 'plain-bearings-in-rajkot-surat-morbi',
        description: 'Simple, cost-effective plain bearings providing reliable sliding contact for various load conditions.',
        image: '/images/plain-bearing.png',
        priority: 0.8,
        category: 'General',
    },
    {
        id: 4,
        name: 'Mounted Bearings',
        slug: 'mounted-bearings-in-rajkot-surat-morbi',
        description: 'Pre-assembled mounted bearing units for easy installation and maintenance in demanding environments.',
        image: '/images/mounted-bearing.png',
        priority: 0.8,
        category: 'General',
    },
    {
        id: 5,
        name: 'Tapered Roller Bearings',
        slug: 'tapered-roller-bearings-in-rajkot-morbi-surat',
        description: 'Precision tapered roller bearings for combined radial and axial loads in automotive and industrial use.',
        image: '/images/tapered-roller-bearing.png',
        priority: 0.7,
        category: 'Roller',
    },
    {
        id: 6,
        name: 'Spherical Roller Bearings',
        slug: 'spherical-roller-bearings-in-rajkot-morbi-surat',
        description: 'Self-aligning spherical roller bearings accommodating shaft misalignment and heavy loads.',
        image: '/images/spherical-roller-bearing.png',
        priority: 0.7,
        category: 'Roller',
    },
    {
        id: 7,
        name: 'Needle Roller Bearings',
        slug: 'needle-roller-bearings-in-rajkot-morbi-surat',
        description: 'Compact needle roller bearings with high load capacity in limited radial space.',
        image: '/images/needle-roller-bearing.png',
        priority: 0.7,
        category: 'Roller',
    },
    {
        id: 8,
        name: 'Cylindrical Roller Bearings',
        slug: 'cylindrical-roller-bearings-in-rajkot-morbi-surat',
        description: 'High radial load capacity cylindrical roller bearings for industrial machinery and equipment.',
        image: '/images/roller-bearing.png',
        priority: 0.7,
        category: 'Roller',
    },
    {
        id: 9,
        name: 'Spherical Roller Thrust Bearings',
        slug: 'spherical-roller-thrust-bearings-in-rajkot-morbi-surat',
        description: 'Heavy-duty thrust bearings handling combined axial and radial loads with self-aligning capability.',
        image: '/images/spherical-roller-bearing.png',
        priority: 0.7,
        category: 'Roller',
    },
    {
        id: 10,
        name: 'Pedestal Bearings',
        slug: 'pedestal-bearings-in-rajkot-morbi-surat',
        description: 'Robust pedestal bearing assemblies for shaft support in agricultural and industrial machinery.',
        image: '/images/mounted-bearing.png',
        priority: 0.7,
        category: 'Mounted',
    },
    {
        id: 11,
        name: 'Deep Groove Ball Bearings',
        slug: 'deep-groove-ball-bearings-in-rajkot-morbi-surat',
        description: 'Most common ball bearing type offering versatility for radial and limited axial loads.',
        image: '/images/ball-bearing.png',
        priority: 0.7,
        category: 'Ball',
    },
    {
        id: 12,
        name: 'Self Aligning Ball Bearings',
        slug: 'self-aligning-ball-bearings-in-rajkot-morbi-surat',
        description: 'Self-compensating ball bearings tolerating shaft deflection and misalignment.',
        image: '/images/ball-bearing.png',
        priority: 0.7,
        category: 'Ball',
    },
    {
        id: 13,
        name: 'Angular Contact Ball Bearings',
        slug: 'angular-contact-ball-bearings-in-rajkot-morbi-surat',
        description: 'High-speed angular contact bearings for combined radial and axial loads in precision applications.',
        image: '/images/ball-bearing.png',
        priority: 0.7,
        category: 'Ball',
    },
    {
        id: 14,
        name: 'Double Row Angular Contact',
        slug: 'double-row-angular-contact-in-rajkot-morbi-surat',
        description: 'Enhanced load capacity double row bearings for rigorous industrial demands.',
        image: '/images/ball-bearing.png',
        priority: 0.7,
        category: 'Ball',
    },
    {
        id: 15,
        name: 'Thrust Ball Bearings',
        slug: 'thrust-ball-bearings-in-rajkot-morbi-surat',
        description: 'Specialized thrust bearings designed exclusively for axial loads in low-speed applications.',
        image: '/images/thrust-ball-bearing.png',
        priority: 0.7,
        category: 'Ball',
    },
];

export function Products() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Centered */}
            <section className="relative bg-gray-50 overflow-hidden min-h-screen flex items-center justify-center">
                {/* Centered Content Container */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-6 md:space-y-8">

                    {/* Eyebrow - Centered */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                        <span className="font-['TestDomaineDisplay'] text-[13px] font-medium tracking-[0.08em] text-gray-500 uppercase">
                            Industrial Grade
                        </span>
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                    </div>

                    {/* Hero Heading - Centered */}
                    <h1 className="font-['TestDomaineDisplay'] text-4xl sm:text-5xl lg:text-[72px] xl:text-[80px] font-semibold leading-[0.95] tracking-[-0.02em] text-gray-900">
                        Premium Bearings
                    </h1>


                    {/* Subheading - Centered */}
                    <p className="font-['TestDomaineDisplay'] text-[19px] lg:text-[21px] leading-[1.6] text-gray-600 max-w-[600px] mx-auto font-light">
                        Precision-engineered bearing solutions for industrial applications across Rajkot, Surat, and Morbi.
                    </p>


                    {/* Meta Info - Centered */}
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-2">
                        <div className="flex items-center gap-2.5">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </div>
                            <span className="font-['TestDomaineDisplay'] text-[14px] text-gray-700 font-medium">
                                In Stock
                            </span>
                        </div>

                        <div className="h-4 w-px bg-gray-300"></div>

                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-['TestDomaineDisplay'] text-[14px] text-gray-600">
                                Gujarat, India
                            </span>
                        </div>
                    </div>

                    {/* Scroll Down Indicator */}
                    <div className="flex flex-col items-center gap-2 mt-12">
                        <span className="font-['TestDomaineDisplay'] text-sm text-gray-600 font-medium">
                            Scroll down
                        </span>
                        <ChevronDown className="w-6 h-6 text-gray-600" />
                    </div>
                </div>



                {/* Ambient background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-blue-50/30 to-transparent pointer-events-none -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-gray-100/40 to-transparent pointer-events-none -z-10"></div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Premium Bearing Solutions
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our extensive range of high-quality bearings engineered for durability,
                            performance, and reliability across all industrial applications.
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="group bg-gray-50 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                {/* Image Container - Enlarged */}
                                <div className="relative bg-gray-50 h-72 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={`${product.name} - CHK Bearings`}
                                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    {/* Category Badge */}
                                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                        {product.category}
                                    </div>

                                    <h3 className="font-['TestDomaineDisplay'] text-xl font-semibold text-gray-900 leading-tight">
                                        {product.name}
                                    </h3>

                                    {/* CTA Button */}
                                    <Link
                                        to={`/products/${product.slug}`}
                                        className="inline-flex items-center gap-2 text-primary font-['TestDomaineDisplay'] font-semibold text-[15px] group/btn pt-2"
                                        aria-label={`Learn more about ${product.name}`}
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                        {/* Content Container */}
                        <div className="relative z-10 text-center px-8 py-16 md:py-20">
                            {/* Eyebrow */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                                <span className="font-['TestDomaineDisplay'] text-[13px] font-medium tracking-[0.08em] text-gray-500 uppercase">
                                    Need Help?
                                </span>
                                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                            </div>

                            {/* Heading */}
                            <h2 className="font-['TestDomaineDisplay'] text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                                Can't Find What You're<br className="hidden sm:block" /> Looking For?
                            </h2>

                            {/* Description */}
                            <p className="font-['TestDomaineDisplay'] text-[17px] md:text-[19px] text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Our team of experts is ready to help you find the perfect bearing solution for your specific needs.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-['TestDomaineDisplay'] font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg shadow-primary/20"
                                >
                                    Contact Our Team
                                    <ArrowRight className="w-5 h-5" />
                                </Link>

                                <a
                                    href="tel:+919876543210"
                                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-['TestDomaineDisplay'] font-semibold border-2 border-gray-200 hover:border-primary hover:text-primary transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Now
                                </a>
                            </div>
                        </div>

                        {/* Subtle Background Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/5 to-transparent -z-0"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-blue-500/5 to-transparent -z-0"></div>
                    </div>
                </div>
            </section>

            {/* Inline Styles for Animation */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
