import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Truck, Factory, MapPin, Phone, MessageCircle } from 'lucide-react';
import { products } from '@/data/productsData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function ProductDetail() {
    const { slug } = useParams<{ slug: string }>();
    const product = slug ? products[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
        if (product) {
            document.title = product.seo.title;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', product.seo.description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = product.seo.description;
                document.head.appendChild(meta);
            }
        }
    }, [slug, product]);

    if (!product) {
        return <Navigate to="/products" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            {/* Hero Section - Luxurious & Compact for 100% Zoom */}
            <section className="bg-gray-50 min-h-[700px] flex items-center relative overflow-hidden py-16">
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl shadow-gray-900/5 p-8 md:p-12">
                            {/* Premium Badge */}
                            <div className="flex justify-center mb-5">
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-blue-600/10 text-primary px-5 py-2 rounded-full text-xs font-semibold border border-primary/20 shadow-sm">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    <span className="font-['TestDomaineDisplay']">Premium CHK Quality</span>
                                </div>
                            </div>

                            {/* Main Heading with Custom Font */}
                            <h1 className="font-['TestDomaineDisplay'] text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-[1.2] text-center text-gray-900 tracking-tight">
                                {product.hero.title}
                            </h1>

                            {/* Elegant Subtitle */}
                            <p className="font-['TestDomaineDisplay'] text-base md:text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
                                {product.hero.subtitle}
                            </p>

                            {/* CTA Buttons - Luxurious Style */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                                <Button
                                    size="lg"
                                    className="font-['TestDomaineDisplay'] bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white rounded-full px-8 text-sm font-semibold shadow-xl shadow-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 h-12 min-w-[180px]"
                                >
                                    <Phone className="mr-2 w-4 h-4" />
                                    Get Today's Price
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="font-['TestDomaineDisplay'] border-2 border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 rounded-full px-8 text-sm font-semibold bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-12 min-w-[180px]"
                                >
                                    <MessageCircle className="mr-2 w-4 h-4" />
                                    WhatsApp Order
                                </Button>
                            </div>

                            {/* Premium Feature Pills - Compact */}
                            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto pt-6 border-t border-gray-200/50">
                                <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
                                    <div className="w-11 h-11 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl flex items-center justify-center shadow-sm">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="font-['TestDomaineDisplay'] font-semibold text-gray-900 text-xs text-center leading-tight">Certified Quality</p>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
                                    <div className="w-11 h-11 bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-xl flex items-center justify-center shadow-sm">
                                        <Truck className="w-5 h-5 text-green-600" />
                                    </div>
                                    <p className="font-['TestDomaineDisplay'] font-semibold text-gray-900 text-xs text-center leading-tight">Fast Delivery</p>
                                </div>

                                <div className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/60 transition-all duration-300">
                                    <div className="w-11 h-11 bg-gradient-to-br from-orange-50 to-amber-100/50 rounded-xl flex items-center justify-center shadow-sm">
                                        <Factory className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <p className="font-['TestDomaineDisplay'] font-semibold text-gray-900 text-xs text-center leading-tight">Ready Stock</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elegant Background Elements */}
                <div className="absolute top-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-48 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-500/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/40 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            </section>

            {/* What Is Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="font-['TestDomaineDisplay'] text-4xl font-bold mb-8 text-gray-900 leading-tight">{product.whatIs.title}</h2>
                            <p className="font-['TestDomaineDisplay'] text-xl text-gray-600 leading-relaxed mb-8">
                                {product.whatIs.description}
                            </p>

                            <ul className="space-y-5">
                                {product.features.list.slice(0, 3).map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="font-['TestDomaineDisplay'] text-lg text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] transform rotate-3 scale-105" />
                            <img
                                src={product.whatIs.image || '/images/placeholder.png'}
                                alt={product.whatIs.title}
                                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3] bg-white p-2"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why CHK Section - Minimalistic & Compact */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-['TestDomaineDisplay'] text-3xl md:text-4xl font-bold mb-4 text-gray-900">{product.whyChk.title}</h2>
                        <p className="font-['TestDomaineDisplay'] text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Trusted by industry leaders in Rajkot, Morbi, and Surat for superior quality and service.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.whyChk.points.map((point, index) => (
                            <Card key={index} className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4">
                                        {index === 0 ? <ShieldCheck className="w-6 h-6" /> : index === 3 ? <Truck className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                                    </div>
                                    <p className="font-['TestDomaineDisplay'] text-base font-medium text-gray-900 leading-relaxed">
                                        {point}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden">
                        <div className="p-10 md:p-16">
                            <h2 className="font-['TestDomaineDisplay'] text-3xl md:text-4xl font-bold mb-12 text-gray-900">{product.technicalSpecs.title}</h2>
                            <div className="grid md:grid-cols-2 gap-y-6 gap-x-16">
                                {product.technicalSpecs.data.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center py-5 border-b border-gray-100 hover:bg-gray-50 px-4 -mx-4 rounded-xl transition-colors">
                                        <span className="font-['TestDomaineDisplay'] text-lg font-medium text-gray-500">{item.label}</span>
                                        <span className="font-['TestDomaineDisplay'] text-lg font-bold text-gray-900">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-['TestDomaineDisplay'] text-4xl font-bold mb-16 text-center text-gray-900">{product.applications.title}</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {product.applications.industries.map((app, index) => (
                            <div key={index} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Factory className="w-24 h-24 text-primary" />
                                </div>
                                <div className="flex items-center gap-3 mb-6 relative z-10">
                                    <div className="bg-orange-50 p-2 rounded-lg">
                                        <MapPin className="text-orange-600 w-6 h-6" />
                                    </div>
                                    <span className="font-['TestDomaineDisplay'] font-bold text-xl text-gray-900">{app.city}</span>
                                </div>
                                <h3 className="font-['TestDomaineDisplay'] font-bold text-2xl mb-4 text-gray-900 group-hover:text-primary transition-colors relative z-10">{app.industry}</h3>
                                <p className="font-['TestDomaineDisplay'] text-lg text-gray-600 leading-relaxed relative z-10">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-['TestDomaineDisplay'] text-4xl font-bold mb-16 text-center text-gray-900">{product.comparison.title}</h2>
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        {product.comparison.headers.map((header, idx) => (
                                            <th key={idx} className="font-['TestDomaineDisplay'] p-6 bg-gray-50/50 text-gray-900 font-bold text-lg border-b border-gray-100">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.comparison.rows.map((row, rowIdx) => (
                                        <tr key={rowIdx} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors last:border-0">
                                            {row.map((cell, cellIdx) => (
                                                <td key={cellIdx} className={`font-['TestDomaineDisplay'] p-6 text-lg ${cellIdx === 0 ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-['TestDomaineDisplay'] text-4xl font-bold mb-16 text-center text-gray-900">{product.faq.title}</h2>
                    <div className="space-y-6">
                        {product.faq.items.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-['TestDomaineDisplay'] font-bold text-xl text-gray-900 mb-4 flex items-start gap-4">
                                    <div className="bg-primary/10 p-1.5 rounded-lg mt-0.5">
                                        <span className="text-primary font-bold text-sm block leading-none">?</span>
                                    </div>
                                    {item.question}
                                </h3>
                                <p className="font-['TestDomaineDisplay'] text-lg text-gray-600 pl-12 leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-gray-50 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-['TestDomaineDisplay'] text-4xl md:text-5xl font-bold mb-8 text-gray-900 tracking-tight">Ready to Order Premium Bearings?</h2>
                    <p className="font-['TestDomaineDisplay'] text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Contact us today for the best prices and instant delivery in Rajkot, Morbi, and Surat.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="font-['TestDomaineDisplay'] bg-primary hover:bg-blue-700 text-white rounded-full px-12 h-16 text-xl font-bold shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1">
                            <Phone className="mr-3 w-6 h-6" />
                            Call Now
                        </Button>
                        <Button variant="outline" size="lg" className="font-['TestDomaineDisplay'] border-gray-300 text-gray-900 hover:bg-gray-100 hover:text-primary rounded-full px-12 h-16 text-xl font-medium bg-white shadow-sm transition-all hover:-translate-y-1">
                            Request Quote
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
