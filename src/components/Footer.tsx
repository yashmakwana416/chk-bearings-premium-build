import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Story', path: '/about' },
    { name: 'Careers', path: '#' },
    { name: 'Contact', path: '/contact' },
];

const productLinks = [
    { name: 'Ball Bearings', path: '/products' },
    { name: 'Roller Bearings', path: '/products' },
    { name: 'Thrust Bearings', path: '/products' },
    { name: 'Custom Solutions', path: '/products' },
];

const resourceLinks = [
    { name: 'Technical Specs', path: '#' },
    { name: 'Product Catalog', path: '#' },
    { name: 'Installation Guide', path: '#' },
    { name: 'Maintenance Tips', path: '#' },
];

const supportLinks = [
    { name: 'Help Center', path: '#' },
    { name: 'Returns & Warranty', path: '#' },
    { name: 'Shipping Info', path: '#' },
    { name: 'FAQs', path: '#' },
];

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-[#0A66C2]' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-[#1DA1F2]' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-[#1877F2]' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-[#E4405F]' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-[#FF0000]' },
];

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10 text-center md:text-left">
                    {/* Logo and Tagline */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-center md:items-start">
                        <Link to="/" className="flex items-center justify-center mb-3">
                            <img
                                src="/chk-logo.png"
                                alt="CHK Bearings Logo"
                                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                            />
                        </Link>
                        {/* Social Media Dock */}
                        <div className="flex items-center justify-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-200 hover:scale-110 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-3.5 h-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">Products</h4>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {resourceLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright - Centered with border below */}
                <div className="pt-8 pb-8 border-b border-gray-200">
                    <p className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} CHK Bearings. All rights reserved.
                    </p>
                </div>

                {/* Large Fading Logo */}
                <div className="relative py-4 flex items-center justify-center overflow-hidden">
                    <img
                        src="/chk-logo.png"
                        alt="CHK Bearings"
                        className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md opacity-20 grayscale"
                        style={{ filter: 'grayscale(100%)' }}
                    />
                </div>
            </div>
        </footer>
    );
}

