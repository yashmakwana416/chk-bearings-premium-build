import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const offices = [
    {
        city: 'Surat',
        address: '123 Bearing Lane, Surat, Gujarat',
        email: 'surat@chkbearings.com',
        phone: '+91 98765 43210',
    },
    {
        city: 'Rajkot',
        address: '456 Industrial Road, Rajkot, Gujarat',
        email: 'rajkot@chkbearings.com',
        phone: '+91 98765 43211',
    },
    {
        city: 'Morbi',
        address: '789 Factory Street, Morbi, Gujarat',
        email: 'morbi@chkbearings.com',
        phone: '+91 98765 43212',
    },
];

export function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ fullName: '', email: '', company: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                        <span className="font-['TestDomaineDisplay'] text-[13px] font-medium tracking-[0.08em] text-gray-500 uppercase">
                            Contact Us
                        </span>
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/60 to-transparent"></div>
                    </div>

                    <h1 className="font-['TestDomaineDisplay'] text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 leading-tight">
                        Get in Touch
                    </h1>
                    <p className="font-['TestDomaineDisplay'] text-[17px] md:text-[19px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We're here to help with your bearing needs. Reach out to our team for inquiries, quotes, or technical support.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-10">
                            <h2 className="font-['TestDomaineDisplay'] text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="font-['TestDomaineDisplay'] block text-[15px] font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="font-['TestDomaineDisplay'] w-full px-4 py-3 border border-gray-200 rounded-2xl text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="font-['TestDomaineDisplay'] block text-[15px] font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="font-['TestDomaineDisplay'] w-full px-4 py-3 border border-gray-200 rounded-2xl text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="font-['TestDomaineDisplay'] block text-[15px] font-medium text-gray-700 mb-2">
                                        Company Name <span className="text-gray-400">(Optional)</span>
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Your Company Inc."
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="font-['TestDomaineDisplay'] w-full px-4 py-3 border border-gray-200 rounded-2xl text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="font-['TestDomaineDisplay'] block text-[15px] font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="font-['TestDomaineDisplay'] w-full px-4 py-3 border border-gray-200 rounded-2xl text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary text-white px-8 py-4 rounded-full font-['TestDomaineDisplay'] font-semibold text-[15px] hover:bg-blue-600 transition-all duration-300 hover:shadow-lg shadow-primary/20 h-auto"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Quick Contact */}
                            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
                                <h2 className="font-['TestDomaineDisplay'] text-2xl font-semibold text-gray-900 mb-6">
                                    Quick Contact
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-['TestDomaineDisplay'] font-semibold text-gray-900 mb-1">Email</h3>
                                            <a href="mailto:contact@chkbearings.com" className="font-['TestDomaineDisplay'] text-[15px] text-primary hover:underline">
                                                contact@chkbearings.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-['TestDomaineDisplay'] font-semibold text-gray-900 mb-1">Phone</h3>
                                            <a href="tel:+919876543210" className="font-['TestDomaineDisplay'] text-[15px] text-primary hover:underline">
                                                +91 98765 43210
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-['TestDomaineDisplay'] font-semibold text-gray-900 mb-1">Business Hours</h3>
                                            <p className="font-['TestDomaineDisplay'] text-[15px] text-gray-600">
                                                Mon-Sat: 9:00 AM - 7:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Locations */}
                            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8">
                                <h2 className="font-['TestDomaineDisplay'] text-2xl font-semibold text-gray-900 mb-6">
                                    Our Offices
                                </h2>

                                <div className="space-y-6">
                                    {offices.map((office) => (
                                        <div key={office.city} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                                            <div className="flex items-start gap-3 mb-3">
                                                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-['TestDomaineDisplay'] font-semibold text-gray-900 mb-1">
                                                        {office.city}
                                                    </h3>
                                                    <p className="font-['TestDomaineDisplay'] text-[14px] text-gray-600">
                                                        {office.address}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ml-8 space-y-1">
                                                <a href={`mailto:${office.email}`} className="font-['TestDomaineDisplay'] text-[14px] text-primary hover:underline block">
                                                    {office.email}
                                                </a>
                                                <a href={`tel:${office.phone}`} className="font-['TestDomaineDisplay'] text-[14px] text-primary hover:underline block">
                                                    {office.phone}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
