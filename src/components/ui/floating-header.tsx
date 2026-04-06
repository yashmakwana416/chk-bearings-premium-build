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
                        {links.map((link) => {
                            const isActive = location.pathname === link.href ||
                                (link.href !== '/' && location.pathname.startsWith(link.href));
                            return (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={cn(
                                        buttonVariants({ variant: 'ghost', size: 'sm' }),
                                        "relative text-gray-700 hover:bg-transparent hover:text-[#1E3C82]",
                                        isActive && "text-[#1E3C82] font-semibold"
                                    )}
                                >
                                    {link.label}
                                    <span className={cn(
                                        "absolute bottom-1 left-3 right-3 h-[2px] bg-[#E8641A] rounded-full transition-transform duration-300 origin-left",
                                        isActive ? "scale-x-100" : "scale-x-0"
                                    )} />
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to="/quote" className="hidden md:block">
                            <button className="chk-quote-btn">
                                Get a Quote
                            </button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setOpen(!open)}
                            className={cn(
                                "lg:hidden cursor-pointer",
                                "text-gray-900 hover:bg-gray-100"
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
                                {links.map((link) => {
                                    const isActive = location.pathname === link.href ||
                                        (link.href !== '/' && location.pathname.startsWith(link.href));
                                    return (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-colors cursor-pointer",
                                                isActive ? "font-semibold text-[#1E3C82]" : "font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                                            )}
                                        >
                                            {isActive && <span className="w-1 h-1 rounded-full bg-[#E8641A] shrink-0" />}
                                            {link.label}
                                        </Link>
                                    );
                                })}
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
          <style>{`
        .chk-quote-btn {
          display: inline-flex;
          align-items: center;
          padding: 7px 20px;
          height: 36px;
          border: 1.5px solid #1E3C82;
          border-radius: 9999px;
          position: relative;
          overflow: hidden;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          color: #1E3C82;
          background: transparent;
          z-index: 1;
          transition: color 0.3s ease, border-color 0.3s ease;
          white-space: nowrap;
        }
        @media (min-width: 1024px) {
          .chk-quote-btn {
            padding: 8px 28px;
            height: 40px;
            font-size: 14px;
          }
        }
        .chk-quote-btn::before {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%) scaleY(1) scaleX(1.25);
          top: 100%;
          width: 140%;
          height: 180%;
          background-color: rgba(30, 60, 130, 0.06);
          border-radius: 50%;
          display: block;
          transition: all 0.5s 0.08s cubic-bezier(0.55, 0, 0.1, 1);
          z-index: -1;
        }
        .chk-quote-btn::after {
          content: "";
          position: absolute;
          left: 55%;
          transform: translateX(-50%) scaleY(1) scaleX(1.45);
          top: 180%;
          width: 160%;
          height: 190%;
          background-color: #1E3C82;
          border-radius: 50%;
          display: block;
          transition: all 0.5s 0.08s cubic-bezier(0.55, 0, 0.1, 1);
          z-index: -1;
        }
        .chk-quote-btn:hover {
          color: #ffffff;
          border-color: #1E3C82;
        }
        .chk-quote-btn:hover::before {
          top: -35%;
          background-color: #1E3C82;
          transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }
        .chk-quote-btn:hover::after {
          top: -45%;
          background-color: #1E3C82;
          transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
        }
      `}</style>
    </header>
    );
}
