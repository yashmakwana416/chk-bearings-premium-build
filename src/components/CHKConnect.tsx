import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimate } from 'framer-motion';
import { HighlighterItem, HighlightGroup, Particles } from '@/components/ui/highlighter';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
                                    <div className="flex h-full flex-col justify-center gap-6 p-6 sm:p-8 md:p-10 lg:p-12 md:flex-row items-center w-full">

                                        {/* Animated Icon Area */}
                                        <div
                                            className="relative mx-auto h-[280px] sm:h-[320px] md:h-[340px] w-full max-w-[320px] sm:max-w-[380px] md:max-w-none md:w-[450px] flex-shrink-0"
                                            ref={scope}
                                        >
                                            {/* Center Icon */}
                                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
                                                    <img
                                                        src="/chk-logo.png"
                                                        alt="CHK Logo"
                                                        className="w-7 h-7 sm:w-8 sm:h-8 object-contain brightness-0 invert"
                                                    />
                                                </div>
                                            </div>

                                            {/* Floating Service Tags */}
                                            <div
                                                id="ball-bearings"
                                                className="absolute top-8 sm:top-12 right-4 sm:right-8 rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm whitespace-nowrap"
                                            >
                                                Ball Bearings
                                            </div>

                                            <div
                                                id="roller-bearings"
                                                className="absolute left-0 sm:left-0 top-20 sm:top-24 rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm whitespace-nowrap"
                                            >
                                                Roller Bearings
                                            </div>

                                            <div
                                                id="mounted-bearings"
                                                className="absolute bottom-14 sm:bottom-16 right-0 sm:right-0 rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm whitespace-nowrap"
                                            >
                                                Mounted Bearings
                                            </div>

                                            <div
                                                id="technical-support"
                                                className="absolute bottom-4 sm:bottom-6 left-6 sm:left-12 rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm opacity-50 backdrop-blur-sm whitespace-nowrap"
                                            >
                                                Technical Support
                                            </div>


                                        </div>

                                        {/* Content Area */}
                                        <div className="flex h-full flex-col justify-center w-full md:w-[450px] text-center md:text-left">
                                            <div className="flex flex-col">
                                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
                                                    Have Questions About Bearings?
                                                </h3>
                                                <p className="text-base sm:text-[17px] text-gray-500 mb-6 sm:mb-8 leading-relaxed">
                                                    Feel free to reach out to us!
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                                <Link to="/contact">
                                                    <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                                                        Book a call
                                                    </Button>
                                                </Link>

                                                <a
                                                    href="mailto:contact@chkbearings.com"
                                                    className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-full w-11 h-11 sm:w-12 sm:h-12 transition-all duration-300 shadow-sm hover:shadow-md"
                                                >
                                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </a>

                                                <a
                                                    href="https://wa.me/919876543210"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 border border-green-300 bg-green-50 hover:bg-green-100 rounded-full w-11 h-11 sm:w-12 sm:h-12 transition-all duration-300 shadow-sm hover:shadow-md text-green-600"
                                                >
                                                    <WhatsAppIcon />
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

