import React, { useState, useRef, useEffect } from 'react';
import { products } from './Products';
import { MessageSquare, Send, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-6">
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant Quote via WhatsApp</span>
                    </div>
                    <h1 className="font-['TestDomaineDisplay'] text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Get Your Custom Quote
                    </h1>
                    <p className="font-['TestDomaineDisplay'] text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
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
                                    className="w-full h-14 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Get Quote via WhatsApp
                                </Button>

                                <p className="text-center text-xs text-gray-500 mt-4">
                                    By submitting, you will be redirected to WhatsApp to send your enquiry directly to our sales team.
                                </p>
                            </form>
                        </div>

                        {/* Info/Image Section - Desktop Only */}
                        <div className="hidden lg:flex flex-col justify-between bg-gray-900 p-12 lg:p-16 text-white relative overflow-hidden">
                            {/* Background Image/Gradient */}
                            <div className="absolute inset-0 bg-[url('/images/factory-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-primary/90"></div>

                            <div className="relative z-10">
                                <h3 className="font-['TestDomaineDisplay'] text-3xl font-bold mb-6">Why CHK Bearings?</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-emerald-400 font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">Premium Quality</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed mt-1">Authentic, high-grade bearings sourced directly from top manufacturers.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-400 font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">Best Price Guarantee</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed mt-1">Competitive pricing for bulk orders in Rajkot, Surat, and Morbi.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-purple-400 font-bold">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">Instant Support</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed mt-1">Direct access to our technical sales team for quick resolution.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="relative z-10 pt-12 border-t border-white/10 mt-12">
                                <p className="text-gray-400 text-sm mb-2">Direct Contact</p>
                                <p className="text-2xl font-bold tracking-tight font-['TestDomaineDisplay']">+91 84600 78518</p>
                                <p className="text-gray-500 text-sm mt-1">anjalibenchakriwala@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
