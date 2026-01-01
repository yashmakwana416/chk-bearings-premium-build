import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export function FloatingHeader() {
    const [open, setOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-2 md:top-5 z-50 left-0 right-0 transition-all duration-300',
                'mx-auto w-[95%] md:w-full max-w-6xl rounded-lg',
                isHome && !isScrolled && !open
                    ? 'bg-transparent border-transparent shadow-none'
                    : 'bg-white/80 border border-gray-200 shadow-sm backdrop-blur-md'
            )}
        >
            <div className="relative">
                <nav className="mx-auto flex items-center justify-between p-2 px-4">
                    <Link to="/" className="hover:bg-accent/10 flex cursor-pointer items-center gap-2 rounded-md py-1 duration-100">
                        <img
                            src="/chk-logo.png"
                            alt="CHK Bearings - Driven by Trust"
                            className="h-8 md:h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    buttonVariants({ variant: 'ghost', size: 'sm' }),
                                    isHome && !isScrolled && !open ? "text-white hover:bg-white/10 hover:text-white" : "text-gray-700 hover:bg-gray-100"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to="/quote">
                            <Button
                                size="sm"
                                className={cn(
                                    "hidden sm:flex transition-all duration-300 rounded-full px-8 h-10 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer",
                                    isHome && !isScrolled && !open
                                        ? "bg-white text-gray-900 hover:bg-gray-100 border-2 border-white/20"
                                        : "bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 border-none"
                                )}
                            >
                                Get a Quote
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setOpen(!open)}
                            className={cn(
                                "lg:hidden cursor-pointer",
                                isHome && !isScrolled && !open ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-gray-100"
                            )}
                        >
                            {open ? <X className="size-5" /> : <Menu className="size-5" />}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden border-t border-gray-100 overflow-hidden"
                        >
                            <div className="p-4 flex flex-col gap-2">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-2 mt-2 border-t border-gray-100">
                                    <Button
                                        asChild
                                        className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 rounded-full py-6 shadow-lg shadow-gray-900/10 transition-all active:scale-[0.98] cursor-pointer"
                                        onClick={() => setOpen(false)}
                                    >
                                        <Link to="/quote">
                                            Get a Quote
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
