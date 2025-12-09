import React, { useEffect, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

    const links = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-5 z-50 left-0 right-0 transition-all duration-300',
                'mx-auto w-full max-w-6xl rounded-lg',
                isHome && !isScrolled
                    ? 'bg-transparent border-transparent shadow-none'
                    : 'bg-gray-50/95 border border-gray-200 shadow-md supports-[backdrop-filter]:bg-gray-50/90 backdrop-blur-lg'
            )}
        >
            <nav className="mx-auto flex items-center justify-between p-1.5 px-4">
                <Link to="/" className="hover:bg-accent/10 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
                    <img
                        src="/chk-logo.png"
                        alt="CHK Bearings - Driven by Trust"
                        className="h-10 w-auto"
                    />
                </Link>
                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                                buttonVariants({ variant: 'ghost', size: 'sm' }),
                                isHome && !isScrolled ? "text-white hover:bg-white/10 hover:text-white" : "text-gray-700 hover:bg-gray-100"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        className={cn(
                            "hidden sm:flex transition-colors",
                            isHome && !isScrolled ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary/90"
                        )}
                    >
                        Get a Quote
                    </Button>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setOpen(!open)}
                            className={cn(
                                "lg:hidden",
                                isHome && !isScrolled ? "bg-white/10 border-white/20 text-white hover:bg-white/20" : ""
                            )}
                        >
                            <MenuIcon className="size-4" />
                        </Button>
                        <SheetContent
                            className="bg-gray-50/95 supports-[backdrop-filter]:bg-gray-50/90 gap-0 backdrop-blur-lg"
                            showClose={false}
                            side="left"
                        >
                            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        to={link.href}
                                        className={buttonVariants({
                                            variant: 'ghost',
                                            className: 'justify-start text-gray-700',
                                        })}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <SheetFooter>
                                <Button variant="outline" className="w-full">Sign In</Button>
                                <Button className="w-full">Get a Quote</Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
