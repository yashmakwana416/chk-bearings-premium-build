export function AnimatedBearingHero() {
    return (
        <div className="relative w-full max-w-xl mx-auto">
            {/* Animated rotating dashed borders */}
            <div className="absolute inset-0 -m-8">
                <div className="absolute inset-0 border-2 border-dashed border-primary/80 rounded-full animate-spin-slow"
                    style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 border-3 border-dashed border-white rounded-full animate-spin-reverse"
                    style={{ animationDuration: '15s' }} />
                <div className="absolute inset-8 border-2 border-dashed border-orange-400/80 rounded-full animate-spin-slow"
                    style={{ animationDuration: '25s' }} />
            </div>

            {/* Outlined bearing illustration */}
            <div className="relative z-10 p-12">
                <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Outer ring */}
                    <circle
                        cx="200"
                        cy="200"
                        r="180"
                        fill="none"
                        stroke="url(#gradient1)"
                        strokeWidth="3"
                        className="animate-draw-circle"
                    />

                    {/* Inner ring */}
                    <circle
                        cx="200"
                        cy="200"
                        r="140"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="3"
                        className="animate-draw-circle"
                        style={{ animationDelay: '0.3s' }}
                    />

                    {/* Center circle */}
                    <circle
                        cx="200"
                        cy="200"
                        r="60"
                        fill="none"
                        stroke="url(#gradient3)"
                        strokeWidth="4"
                        className="animate-draw-circle"
                        style={{ animationDelay: '0.6s' }}
                    />

                    {/* Ball bearings - 8 circles around the ring */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                        const radian = (angle * Math.PI) / 180;
                        const x = 200 + 160 * Math.cos(radian);
                        const y = 200 + 160 * Math.sin(radian);
                        return (
                            <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="18"
                                fill="none"
                                stroke="url(#gradient4)"
                                strokeWidth="2.5"
                            />
                        );
                    })}

                    {/* Connecting lines - technical look */}
                    {[0, 90, 180, 270].map((angle, i) => {
                        const radian = (angle * Math.PI) / 180;
                        const x1 = 200 + 65 * Math.cos(radian);
                        const y1 = 200 + 65 * Math.sin(radian);
                        const x2 = 200 + 135 * Math.cos(radian);
                        const y2 = 200 + 135 * Math.sin(radian);
                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="url(#gradient5)"
                                strokeWidth="2.5"
                                strokeDasharray="4 4"
                                className="animate-dash"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        );
                    })}

                    {/* Gradient definitions */}
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d3b394ff" />
                        </linearGradient>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d3b394ff" />
                        </linearGradient>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#b0b0b0ff" />
                        </linearGradient>
                        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(133, 50, 144, 1)" />
                        </linearGradient>
                        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#22d3ee" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
