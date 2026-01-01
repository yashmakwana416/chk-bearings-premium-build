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
                // Start State (Ball Bearings - Top Right)
                ["#ball-bearings", { opacity: 1 }, { duration: 0.3 }],

                // Move to Roller Bearings (Top Left)
                [
                    "#ball-bearings", { opacity: 0.4 }, { duration: 0.3, delay: 1.5 }
                ],
                ["#roller-bearings", { opacity: 1 }, { duration: 0.3 }],

                // Move to Technical Support (Bottom Left)
                [
                    "#roller-bearings", { opacity: 0.4 }, { duration: 0.3, delay: 1.5 }
                ],
                ["#technical-support", { opacity: 1 }, { duration: 0.3 }],

                // Move to Mounted Bearings (Bottom Right)
                [
                    "#technical-support", { opacity: 0.4 }, { duration: 0.3, delay: 1.5 }
                ],
                ["#mounted-bearings", { opacity: 1 }, { duration: 0.3 }],

                // Return to Ball Bearings (Top Right)
                [
                    "#mounted-bearings", { opacity: 0.4 }, { duration: 0.3, delay: 1.5 }
                ],
                ["#ball-bearings", { opacity: 1 }, { duration: 0.3 }],
            ],
            {
                repeat: Number.POSITIVE_INFINITY,
            }
        );
    }, [animate]);

    return (
        <section className="relative mx-auto py-12 md:py-20 bg-gray-50 overflow-hidden">
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
                                    <div className="flex h-full flex-col justify-center gap-6 p-6 md:p-8 lg:p-12 md:flex-row items-center">

                                        {/* Animated Icon Area */}
                                        <div
                                            className="relative mx-auto h-[300px] w-full max-w-[340px] md:max-w-none md:w-[450px] scale-90 sm:scale-100"
                                            ref={scope}
                                        >
                                            {/* Center Icon */}
                                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                                <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
                                                    <img
                                                        src="/chk-logo.png"
                                                        alt="CHK Logo"
                                                        className="w-8 h-8 object-contain brightness-0 invert"
                                                    />
                                                </div>
                                            </div>

                                            {/* Floating Service Tags */}
                                            <div
                                                id="ball-bearings"
                                                className="absolute top-12 right-8 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm"
                                            >
                                                Ball Bearings
                                            </div>

                                            <div
                                                id="roller-bearings"
                                                className="absolute left-0 top-24 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm"
                                            >
                                                Roller Bearings
                                            </div>

                                            <div
                                                id="mounted-bearings"
                                                className="absolute bottom-16 right-0 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm"
                                            >
                                                Mounted Bearings
                                            </div>

                                            <div
                                                id="technical-support"
                                                className="absolute bottom-6 left-12 rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-['TestDomaineDisplay'] font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm"
                                            >
                                                Technical Support
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
                                                    <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 h-12 font-['TestDomaineDisplay'] font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                                                        Book a call
                                                    </Button>
                                                </Link>

                                                <a
                                                    href="mailto:contact@chkbearings.com"
                                                    className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-full w-12 h-12 transition-all duration-300 shadow-sm hover:shadow-md"
                                                >
                                                    <Mail className="w-5 h-5" />
                                                </a>

                                                <a
                                                    href="https://wa.me/919876543210"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 border border-green-300 bg-green-50 hover:bg-green-100 rounded-full w-12 h-12 transition-all duration-300 shadow-sm hover:shadow-md"
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
