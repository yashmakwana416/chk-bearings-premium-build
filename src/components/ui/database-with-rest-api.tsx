"use client";

import { motion } from "motion/react";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DatabaseWithRestApiProps {
    className?: string;
    circleText?: string;
    circleLogo?: string;
    badgeTexts?: {
        first: string;
        second: string;
        third: string;
        fourth: string;
    };
    buttonTexts?: {
        first: string;
        second: string;
    };
    title?: string;
    lightColor?: string;
}

const DatabaseWithRestApi = ({
    className,
    circleText,
    circleLogo,
    badgeTexts,
    buttonTexts,
    title,
    lightColor,
}: DatabaseWithRestApiProps) => {
    return (
        <div
            className={cn(
                "relative flex h-[450px] w-full max-w-[650px] flex-col items-center",
                className
            )}
        >
            {/* SVG Paths  */}
            <svg
                className="h-full sm:w-full text-gray-400"
                width="100%"
                height="100%"
                viewBox="0 0 200 100"
            >
                <g
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0.4"
                    strokeDasharray="100 100"
                    pathLength="100"
                >
                    <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 15" />
                    <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 15" />
                    <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 15" />
                    <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 15" />
                    {/* Animation For Path Starting */}
                    <animate
                        attributeName="stroke-dashoffset"
                        from="100"
                        to="0"
                        dur="1s"
                        fill="freeze"
                        calcMode="spline"
                        keySplines="0.25,0.1,0.5,1"
                        keyTimes="0; 1"
                    />
                </g>
                {/* Blue Lights */}
                <g mask="url(#db-mask-1)">
                    <circle
                        className="database db-light-1"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                <g mask="url(#db-mask-2)">
                    <circle
                        className="database db-light-2"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                <g mask="url(#db-mask-3)">
                    <circle
                        className="database db-light-3"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                <g mask="url(#db-mask-4)">
                    <circle
                        className="database db-light-4"
                        cx="0"
                        cy="0"
                        r="12"
                        fill="url(#db-blue-grad)"
                    />
                </g>
                {/* Buttons */}
                <g stroke="currentColor" fill="none" strokeWidth="0.4">
                    {/* First Button */}
                    <g>
                        <rect
                            fill="#F4F4F5"
                            stroke="#E4E4E7"
                            strokeWidth="0.3"
                            x="11"
                            y="5"
                            width="40"
                            height="10"
                            rx="5"
                        ></rect>
                        <text
                            x="31"
                            y="12"
                            fill="#18181B"
                            stroke="none"
                            fontSize="4.5"
                            fontWeight="600"
                            textAnchor="middle"
                        >
                            {badgeTexts?.first || "Ball Bearings"}
                        </text>
                    </g>
                    {/* Second Button */}
                    <g>
                        <rect
                            fill="#F4F4F5"
                            stroke="#E4E4E7"
                            strokeWidth="0.3"
                            x="56"
                            y="5"
                            width="43"
                            height="10"
                            rx="5"
                        ></rect>
                        <text
                            x="77.5"
                            y="12"
                            fill="#18181B"
                            stroke="none"
                            fontSize="4.5"
                            fontWeight="600"
                            textAnchor="middle"
                        >
                            {badgeTexts?.second || "Roller Bearings"}
                        </text>
                    </g>
                    {/* Third Button */}
                    <g>
                        <rect
                            fill="#F4F4F5"
                            stroke="#E4E4E7"
                            strokeWidth="0.3"
                            x="103"
                            y="5"
                            width="45"
                            height="10"
                            rx="5"
                        ></rect>
                        <text
                            x="125.5"
                            y="12"
                            fill="#18181B"
                            stroke="none"
                            fontSize="4.5"
                            fontWeight="600"
                            textAnchor="middle"
                        >
                            {badgeTexts?.third || "Thrust Bearings"}
                        </text>
                    </g>
                    {/* Fourth Button */}
                    <g>
                        <rect
                            fill="#F4F4F5"
                            stroke="#E4E4E7"
                            strokeWidth="0.3"
                            x="151"
                            y="5"
                            width="44"
                            height="10"
                            rx="5"
                        ></rect>
                        <text
                            x="173"
                            y="12"
                            fill="#18181B"
                            stroke="none"
                            fontSize="4.5"
                            fontWeight="600"
                            textAnchor="middle"
                        >
                            {badgeTexts?.fourth || "Custom Solutions"}
                        </text>
                    </g>
                </g>
                <defs>
                    {/* 1 -  user list */}
                    <mask id="db-mask-1">
                        <path
                            d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 15"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* 2 - task list */}
                    <mask id="db-mask-2">
                        <path
                            d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 15"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* 3 - backlogs */}
                    <mask id="db-mask-3">
                        <path
                            d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 15"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* 4 - misc */}
                    <mask id="db-mask-4">
                        <path
                            d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 15"
                            strokeWidth="0.5"
                            stroke="white"
                        />
                    </mask>
                    {/* Blue Grad */}
                    <radialGradient id="db-blue-grad" fx="1">
                        <stop offset="0%" stopColor={lightColor || "#546cd6"} />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
            </svg>
            {/* Main Box */}
            <div className="absolute bottom-16 flex w-full flex-col items-center">
                {/* bottom shadow */}
                <div className="absolute -bottom-2 h-[100px] w-[62%] rounded-lg bg-gray-200/50" />
                {/* box title */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 sm:-top-7 sm:py-2 shadow-sm">
                    <SparklesIcon className="size-3 text-gray-700" />
                    <span className="ml-2 text-xs text-gray-700 font-medium">
                        {title ? title : "Precision Engineering for Industrial Excellence"}
                    </span>
                </div>
                {/* box outter circle */}
                <div className="absolute -bottom-12 z-30 grid h-[100px] w-[100px] place-items-center rounded-full border-2 border-gray-300 bg-white font-semibold text-sm text-gray-900 shadow-md overflow-hidden p-2">
                    {circleLogo ? (
                        <img src={circleLogo} alt="Company Logo" className="w-full h-full object-contain" />
                    ) : (
                        <span>{circleText ? circleText : "nothing"}</span>
                    )}
                </div>
                {/* box content */}
                <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md mt-4">
                    {/* Badges */}
                    <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-white px-3 text-xs border border-gray-300 flex items-center gap-2 shadow-sm">
                        <HeartHandshakeIcon className="size-4 text-gray-700" />
                        <span className="text-gray-900 font-medium">{buttonTexts?.first || "CHK Bearings"}</span>
                    </div>
                    <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-white px-3 text-xs sm:flex border border-gray-300 items-center gap-2 shadow-sm">
                        <Folder className="size-4 text-gray-700" />
                        <span className="text-gray-900 font-medium">{buttonTexts?.second || "Engineering"}</span>
                    </div>
                    {/* Circles */}
                    <motion.div
                        className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-gray-300 bg-gray-50/30"
                        animate={{
                            scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-gray-300 bg-gray-50/30"
                        animate={{
                            scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-gray-300 bg-gray-50/30"
                        animate={{
                            scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute -bottom-[120px] h-[235px] w-[235px] rounded-full border-t border-gray-300 bg-gray-50/30"
                        animate={{
                            scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DatabaseWithRestApi;
