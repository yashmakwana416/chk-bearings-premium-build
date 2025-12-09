import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimate } from 'framer-motion';
import { HighlighterItem, HighlightGroup, Particles } from '@/components/ui/highlighter';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CHKConnect() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            [
                // Start at Ball Bearings
                ["#pointer", { left: 370, top: 60 }, { duration: 0 }],
                ["#ball-bearings", { opacity: 1 }, { duration: 0.3 }],

                // Move to Roller Bearings
                [
                    "#pointer",
                    { left: 40, top: 100 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#ball-bearings", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#roller-bearings", { opacity: 1 }, { duration: 0.3 }],

                // Move to Mounted Bearings
                [
                    "#pointer",
                    { left: 280, top: 145 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#roller-bearings", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#mounted-bearings", { opacity: 1 }, { duration: 0.3 }],

                // Move to Technical Support
                [
                    "#pointer",
                    { left: 60, top: 245 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#mounted-bearings", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#technical-support", { opacity: 1 }, { duration: 0.3 }],

                // Return to Ball Bearings
                [
                    "#pointer",
                    { left: 370, top: 60 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#technical-support", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
            ],
            {
                repeat: Number.POSITIVE_INFINITY,
            },
        );
    }, [animate]);

    return (
        <section className="relative mx-auto py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HighlightGroup className="group h-full">
                    <div className="group/item h-full">
                        <HighlighterItem className="rounded-[2.5rem] p-px">
                            <div className="relative z-20 h-full overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white">
                                <Particles
                                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                                    quantity={200}
                                    color={"#546cd6"}
                                    vy={-0.2}
                                />
                                <div className="flex justify-center">
                                    <div className="flex h-full flex-col justify-center gap-10 p-8 md:py-16 md:px-12 md:flex-row">

                                        {/* Animated Icon Area */}
                                        <div
                                            className="relative mx-auto h-[300px] w-[450px]"
                                            ref={scope}
                                        >
                                            {/* Center Icon */}
                                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                                                    <div className="w-6 h-6 bg-white rounded-sm"></div>
                                                </div>
                                            </div>

                                            {/* Floating Service Tags */}
                                            <div
                                                id="ball-bearings"
                                                className="absolute top-12 right-8 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50"
                                            >
                                                Ball Bearings
                                            </div>

                                            <div
                                                id="roller-bearings"
                                                className="absolute left-0 top-24 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50"
                                            >
                                                Roller Bearings
                                            </div>

                                            <div
                                                id="mounted-bearings"
                                                className="absolute bottom-16 right-0 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50"
                                            >
                                                Mounted Bearings
                                            </div>

                                            <div
                                                id="technical-support"
                                                className="absolute bottom-6 left-12 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50"
                                            >
                                                Technical Support
                                            </div>

                                            {/* Animated Cursor */}
                                            <div id="pointer" className="absolute">
                                                <svg
                                                    width="16.8"
                                                    height="18.2"
                                                    viewBox="0 0 12 13"
                                                    className="fill-red-500"
                                                    stroke="white"
                                                    strokeWidth="1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="flex h-full flex-col justify-center md:w-[450px]">
                                            <div className="flex flex-col">
                                                <h3 className="font-['TestDomaineDisplay'] text-3xl md:text-4xl font-semibold text-gray-900 mb-3 leading-tight">
                                                    Have Questions About Bearings?
                                                </h3>
                                                <p className="font-['TestDomaineDisplay'] text-[17px] text-gray-500 mb-8 leading-relaxed">
                                                    Feel free to reach out to us!
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <Link to="/contact">
                                                    <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-6 h-auto font-['TestDomaineDisplay'] font-semibold transition-all duration-300">
                                                        Book a call
                                                    </Button>
                                                </Link>

                                                <a
                                                    href="mailto:contact@chkbearings.com"
                                                    className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-full w-12 h-12 transition-all duration-300"
                                                >
                                                    <Mail className="w-5 h-5" />
                                                </a>

                                                <a
                                                    href="https://wa.me/919876543210"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 border border-green-300 bg-green-50 hover:bg-green-100 rounded-full w-12 h-12 transition-all duration-300"
                                                >
                                                    <MessageCircle className="w-5 h-5 text-green-600" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </HighlighterItem>
                    </div>
                </HighlightGroup>
            </div>
        </section>
    );
}
