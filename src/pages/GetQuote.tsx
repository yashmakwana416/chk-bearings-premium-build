import React, { useState, useRef, useEffect } from 'react';
import { products } from './Products';
import { Send, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

// --- Custom dropdown component for smooth interactions ---
interface CustomSelectProps {
    label: string;
    options: typeof products;
    value: string;
    onChange: (value: string) => void;
}

function CustomSelect({ label, options, value, onChange }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="space-y-2" ref={containerRef}>
            <Label className="text-gray-700 font-medium ml-1">{label}</Label>
            <div className="relative">
                {/* Trigger Button */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "w-full h-14 pl-5 pr-10 rounded-2xl border border-gray-200 bg-gray-50/50 flex items-center cursor-pointer transition-all hover:bg-white hover:border-gray-300",
                        isOpen ? "bg-white ring-2 ring-primary/20 border-primary" : "text-gray-700"
                    )}
                >
                    <span className={cn("font-medium text-base", !value && "text-gray-400")}>
                        {value || "Choose a product..."}
                    </span>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen && "rotate-180")} />
                    </div>
                </div>

                {/* Animated Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-h-80 overflow-y-auto"
                        >
                            <div className="p-2 space-y-1">
                                {options.map((p) => (
                                    <div
                                        key={p.id}
                                        onClick={() => {
                                            onChange(p.name);
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors group",
                                            value === p.name ? "bg-primary/5" : "hover:bg-gray-50"
                                        )}
                                    >
                                        <div className="flex flex-col">
                                            <span className={cn(
                                                "font-medium transition-colors",
                                                value === p.name ? "text-primary" : "text-gray-700 group-hover:text-gray-900"
                                            )}>
                                                {p.name}
                                            </span>
                                            <span className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-0.5">
                                                {p.category} Series
                                            </span>
                                        </div>
                                        {value === p.name && (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                                <Check className="w-4 h-4 text-primary" />
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                                <div className="h-px bg-gray-100 my-2 mx-2"></div>
                                <div
                                    onClick={() => {
                                        onChange("Other");
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-50 group"
                                >
                                    <span className="font-medium text-gray-600 group-hover:text-gray-900">
                                        Other / Custom Requirement
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export function GetQuote() {
    const [formData, setFormData] = useState({
        product: '',
        quantity: '',
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Custom select handler
    const handleProductChange = (val: string) => {
        setFormData({ ...formData, product: val });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const text = `*New Quote Request*\n\n` +
            `*Product:* ${formData.product || 'General Enquiry'}\n` +
            `*Quantity:* ${formData.quantity}\n` +
            `*Name:* ${formData.name}\n` +
            `*Company:* ${formData.company}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Email:* ${formData.email}\n` +
            `*Message:* ${formData.message}\n\n` +
            `_Sent via Website_`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/916352711793?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
            <div className="w-full max-w-5xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6 border border-green-200">
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Instant Quote via WhatsApp</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Get Your Custom Quote
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Select your product and tell us your requirements. We'll get back to you with the best price instantly.
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden relative">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-50/50 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-gray-50/50 to-transparent pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2">
                        {/* Form Section */}
                        <div className="p-8 md:p-12 lg:p-16 relative z-10">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Product Selection - Custom Component */}
                                <CustomSelect
                                    label="Select Product"
                                    options={products}
                                    value={formData.product}
                                    onChange={handleProductChange}
                                />

                                {/* Quantity & Phone Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="quantity" className="text-gray-700 font-medium ml-1">Quantity</Label>
                                        <Input
                                            type="text" // text to allow "100 pcs" etc.
                                            name="quantity"
                                            id="quantity"
                                            placeholder="e.g. 50 pcs"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            required
                                            className="h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-gray-700 font-medium ml-1">Phone Number</Label>
                                        <Input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="+91 "
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all text-base"
                                        />
                                    </div>
                                </div>

                                {/* Name & Company Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-gray-700 font-medium ml-1">Full Name</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-gray-700 font-medium ml-1">Company (Optional)</Label>
                                        <Input
                                            type="text"
                                            name="company"
                                            id="company"
                                            placeholder="Your Company Ltd."
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="h-14 rounded-2xl border-gray-200 bg-gray-50/50 focus:bg-white transition-all text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-gray-700 font-medium ml-1">Message / Specs</Label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder="Any specific brands, dimensions, or details..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-5 rounded-2xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-base resize-none"
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 rounded-full bg-[#25D366] hover:bg-[#20bc5a] text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                                >
                                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                                    Get Quote via WhatsApp
                                </Button>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    By submitting, you will be redirected to WhatsApp to send your enquiry directly to our sales team.
                                </p>
                            </form>
                        </div>

                        {/* Info/Image Section - Desktop Only */}
                        <div className="hidden lg:flex flex-col justify-between p-12 lg:p-16 text-white relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #1E3C82 0%, #2B4FA8 50%, #E8641A 100%)' }}
                        >
                            <div className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 20% 80%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-6">Why CHK Bearings?</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">Premium Quality</h4>
                                            <p className="text-white/70 text-sm leading-relaxed mt-1">Authentic, high-grade bearings sourced directly from top manufacturers.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">Best Price Guarantee</h4>
                                            <p className="text-white/70 text-sm leading-relaxed mt-1">Competitive pricing for bulk orders in Rajkot, Surat, and Morbi.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-sm">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">Instant Support</h4>
                                            <p className="text-white/70 text-sm leading-relaxed mt-1">Direct access to our technical sales team for quick resolution.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative z-10 pt-12 border-t border-white/20 mt-12">
                                <p className="text-white/60 text-sm mb-2">Direct Contact</p>
                                <p className="text-2xl font-bold tracking-tight">+91 84600 78518</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


