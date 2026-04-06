import { ArrowRight } from 'lucide-react';

export function AnimatedBearingHero() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col md:flex-row md:items-center">

      {/* Diagonal background — desktop only */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{ background: 'linear-gradient(107deg, #FFFFFF 52%, #F9FAFB 52%)' }}
      />
      {/* Mobile background */}
      <div className="absolute inset-0 z-0 md:hidden bg-[#F9FAFB]" />

      {/* ── LEFT CONTENT ── */}
      <div className="relative z-20 flex flex-col w-full md:w-[46%] px-5 sm:px-8 pt-20 sm:pt-24 pb-6 md:pt-0 md:pb-0 md:pl-[clamp(2rem,5vw,6rem)] md:pr-6 lg:pr-10 md:min-h-0">

        {/* Top Content Group */}
        <div className="flex-shrink-0">
          {/* Headline */}
          <h1
            className="font-bold leading-[1.05] text-[#1E3C82] tracking-[-0.01em] mb-3 md:mb-5 opacity-0 translate-y-4 animate-[fadeUp_0.9s_0.35s_ease_forwards]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.6rem)' }}
          >
            Most break.<br />
            <span className="text-[#E8641A]">Ours don't.</span>
          </h1>

          {/* Body */}
          <p
            className="text-[0.82rem] md:text-[0.9rem] font-light leading-[1.65] text-[#5A6480] max-w-[38ch] mb-4 md:mb-8 opacity-0 translate-y-3 animate-[fadeUp_0.9s_0.52s_ease_forwards]"
          >
            Premium bearings engineered for the harshest conditions - where tolerance is measured in microns and failure isn't an option.
          </p>

          {/* Stats — inline on mobile, absolute on desktop */}
          <div className="flex gap-6 md:hidden mb-3 opacity-0 animate-[fadeUp_0.9s_0.68s_ease_forwards]">
            {[
              { num: '3', suffix: '+', label: 'Years of precision' },
              { num: '1200', suffix: '+', label: 'SKU variants' },
              { num: '0.5', suffix: 'µm', label: 'Tolerance class' },
            ].map(({ num, suffix, label }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="font-bold text-[1.3rem] text-[#1E3C82] leading-none"
                >
                  {num}<span className="text-[#E8641A]">{suffix}</span>
                </span>
                <span className="text-[0.58rem] font-normal tracking-[0.15em] uppercase text-[#8A94B0]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── BEARING ANIMATION — Mobile Only (Middle Section) ── */}
        <div className="flex md:hidden items-center justify-center py-6 pointer-events-none flex-shrink-0">
          <div
            className="w-[52vw] max-w-[200px] aspect-square opacity-0 animate-[scaleIn_1.1s_0.15s_cubic-bezier(0.22,1,0.36,1)_forwards]"
          >
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <linearGradient id="gOuter-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E3C82" stopOpacity="1"/>
                  <stop offset="50%" stopColor="#2B4FA8"/>
                  <stop offset="100%" stopColor="#0F2255"/>
                </linearGradient>
                <linearGradient id="gCage-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E8641A"/>
                  <stop offset="100%" stopColor="#C44D0A"/>
                </linearGradient>
                <linearGradient id="gInner-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2B4FA8"/>
                  <stop offset="100%" stopColor="#1A2E66"/>
                </linearGradient>
                <radialGradient id="gBall-mobile" cx="35%" cy="30%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55"/>
                  <stop offset="100%" stopColor="#E8641A" stopOpacity="1"/>
                </radialGradient>
                <filter id="fShadow-mobile" x="-8%" y="-8%" width="116%" height="116%">
                  <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#1E3C82" floodOpacity="0.15"/>
                </filter>
                <filter id="fInner-mobile" x="-5%" y="-5%" width="110%" height="110%">
                  <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#1E3C82" floodOpacity="0.2"/>
                </filter>
                <filter id="fBall-mobile" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#E8641A" floodOpacity="0.35"/>
                </filter>
              </defs>

              {/* Outer Ring */}
              <g style={{ transformOrigin: 'center', animation: 'spinSlow 28s linear infinite' }} filter="url(#fShadow-mobile)">
                <circle cx="250" cy="250" r="220" fill="url(#gOuter-mobile)"/>
                <circle cx="250" cy="250" r="185" fill="white"/>
                <g stroke="#FFFFFF" strokeWidth="1" opacity="0.18">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <line key={i} x1="250" y1="32" x2="250" y2={i % 2 === 0 ? "44" : "38"} transform={`rotate(${i * 7.5} 250 250)`}/>
                  ))}
                </g>
                <circle cx="250" cy="250" r="185" fill="none" stroke="#3D6ACC" strokeWidth="1.2" opacity="0.4"/>
                <circle cx="250" cy="250" r="218" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.12"/>
              </g>

              {/* Raceway */}
              <circle cx="250" cy="250" r="183" fill="none" stroke="#E2E8F4" strokeWidth="0.8"/>
              <circle cx="250" cy="250" r="147" fill="none" stroke="#E2E8F4" strokeWidth="0.8"/>

              {/* Balls + Cage */}
              <g style={{ transformOrigin: 'center', animation: 'spinSlow 18s linear infinite reverse' }}>
                <g filter="url(#fBall-mobile)">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <circle key={i} cx="250" cy="85" r="18" fill="url(#gBall-mobile)" transform={`rotate(${i * 36} 250 250)`}/>
                  ))}
                </g>
                <circle cx="250" cy="250" r="168" fill="none" stroke="url(#gCage-mobile)" strokeWidth="5" strokeDasharray="16 10.5" strokeLinecap="round" opacity="0.7"/>
                <circle cx="250" cy="250" r="148" fill="none" stroke="url(#gCage-mobile)" strokeWidth="3" strokeDasharray="14 12" strokeLinecap="round" opacity="0.5"/>
                <g fill="none" stroke="#E8641A" strokeWidth="2.4" opacity="0.5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <circle key={i} cx="250" cy="85" r="21" transform={`rotate(${i * 36} 250 250)`}/>
                  ))}
                </g>
              </g>

              {/* Inner Ring */}
              <g style={{ transformOrigin: 'center', animation: 'spinSlow 40s linear infinite' }} filter="url(#fInner-mobile)">
                <circle cx="250" cy="250" r="143" fill="url(#gInner-mobile)"/>
                <circle cx="250" cy="250" r="105" fill="white"/>
                <circle cx="250" cy="250" r="143" fill="none" stroke="#3D6ACC" strokeWidth="1.2" opacity="0.35"/>
                <circle cx="250" cy="250" r="105" fill="none" stroke="#2B4FA8" strokeWidth="0.8" opacity="0.3"/>
                <g stroke="#FFFFFF" strokeWidth="0.7" opacity="0.1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line key={i} x1="250" y1="109" x2="250" y2={i % 2 === 0 ? "119" : "113"} transform={`rotate(${i * 15} 250 250)`}/>
                  ))}
                </g>
              </g>

              {/* Bore */}
              <circle cx="250" cy="250" r="103" fill="white"/>
              <circle cx="250" cy="250" r="100" fill="none" stroke="#E2E8F4" strokeWidth="1.6"/>
              <circle cx="250" cy="250" r="96" fill="none" stroke="#EDF0F7" strokeWidth="0.8"/>
              <circle cx="250" cy="250" r="4" fill="#1E3C82" opacity="0.35"/>
              <circle cx="250" cy="250" r="1.5" fill="#1E3C82" opacity="0.6"/>

              {/* Crosshairs */}
              <g stroke="#1E3C82" strokeWidth="0.6" opacity="0.08">
                <line x1="250" y1="154" x2="250" y2="346"/>
                <line x1="154" y1="250" x2="346" y2="250"/>
                <circle cx="250" cy="250" r="50" fill="none" strokeDasharray="3 4"/>
              </g>
            </svg>
          </div>
        </div>

        {/* CTA Buttons — Lower Third on Mobile */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-3 md:items-center mb-6 md:mb-0 opacity-0 translate-y-3 animate-[fadeUp_0.9s_0.85s_ease_forwards] md:mt-0 flex-shrink-0">
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#1E3C82] text-white font-semibold text-[0.8rem] md:text-[0.8rem] tracking-[0.1em] uppercase px-6 md:px-7 py-3.5 md:py-3 cursor-pointer transition-all duration-200 hover:bg-[#2B4FA8] active:scale-[0.98] rounded-sm shadow-sm"
          >
            <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5 shrink-0" />
            Explore Catalogue
          </button>
          <button
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-[#1E3C82] font-semibold text-[0.8rem] md:text-[0.8rem] tracking-[0.1em] uppercase px-6 md:px-7 py-3.5 md:py-3 border-2 md:border border-[#1E3C82] cursor-pointer transition-all duration-200 hover:bg-[#1E3C82] hover:text-white active:scale-[0.98] rounded-sm"
          >
            Technical Specs
          </button>
        </div>
      </div>

      {/* ── RIGHT VISUAL — Bearing (Desktop/Tablet Only) ── */}
      <div className="hidden md:flex relative z-10 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[56%] md:h-full items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="md:w-[min(48vw,64vh)] aspect-square opacity-0 animate-[scaleIn_1.1s_0.15s_cubic-bezier(0.22,1,0.36,1)_forwards]"
        >
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <linearGradient id="gOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3C82" stopOpacity="1"/>
                <stop offset="50%" stopColor="#2B4FA8"/>
                <stop offset="100%" stopColor="#0F2255"/>
              </linearGradient>
              <linearGradient id="gCage" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8641A"/>
                <stop offset="100%" stopColor="#C44D0A"/>
              </linearGradient>
              <linearGradient id="gInner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2B4FA8"/>
                <stop offset="100%" stopColor="#1A2E66"/>
              </linearGradient>
              <radialGradient id="gBall" cx="35%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55"/>
                <stop offset="100%" stopColor="#E8641A" stopOpacity="1"/>
              </radialGradient>
              <filter id="fShadow" x="-8%" y="-8%" width="116%" height="116%">
                <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#1E3C82" floodOpacity="0.15"/>
              </filter>
              <filter id="fInner" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#1E3C82" floodOpacity="0.2"/>
              </filter>
              <filter id="fBall" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#E8641A" floodOpacity="0.35"/>
              </filter>
            </defs>

            {/* Outer Ring */}
            <g style={{ transformOrigin: 'center', animation: 'spinSlow 28s linear infinite' }} filter="url(#fShadow)">
              <circle cx="250" cy="250" r="220" fill="url(#gOuter)"/>
              <circle cx="250" cy="250" r="185" fill="white"/>
              <g stroke="#FFFFFF" strokeWidth="1" opacity="0.18">
                {Array.from({ length: 48 }).map((_, i) => (
                  <line key={i} x1="250" y1="32" x2="250" y2={i % 2 === 0 ? "44" : "38"} transform={`rotate(${i * 7.5} 250 250)`}/>
                ))}
              </g>
              <circle cx="250" cy="250" r="185" fill="none" stroke="#3D6ACC" strokeWidth="1.2" opacity="0.4"/>
              <circle cx="250" cy="250" r="218" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.12"/>
            </g>

            {/* Raceway */}
            <circle cx="250" cy="250" r="183" fill="none" stroke="#E2E8F4" strokeWidth="0.8"/>
            <circle cx="250" cy="250" r="147" fill="none" stroke="#E2E8F4" strokeWidth="0.8"/>

            {/* Balls + Cage */}
            <g style={{ transformOrigin: 'center', animation: 'spinSlow 18s linear infinite reverse' }}>
              <g filter="url(#fBall)">
                {Array.from({ length: 10 }).map((_, i) => (
                  <circle key={i} cx="250" cy="85" r="18" fill="url(#gBall)" transform={`rotate(${i * 36} 250 250)`}/>
                ))}
              </g>
              <circle cx="250" cy="250" r="168" fill="none" stroke="url(#gCage)" strokeWidth="5" strokeDasharray="16 10.5" strokeLinecap="round" opacity="0.7"/>
              <circle cx="250" cy="250" r="148" fill="none" stroke="url(#gCage)" strokeWidth="3" strokeDasharray="14 12" strokeLinecap="round" opacity="0.5"/>
              <g fill="none" stroke="#E8641A" strokeWidth="2.4" opacity="0.5">
                {Array.from({ length: 10 }).map((_, i) => (
                  <circle key={i} cx="250" cy="85" r="21" transform={`rotate(${i * 36} 250 250)`}/>
                ))}
              </g>
            </g>

            {/* Inner Ring */}
            <g style={{ transformOrigin: 'center', animation: 'spinSlow 40s linear infinite' }} filter="url(#fInner)">
              <circle cx="250" cy="250" r="143" fill="url(#gInner)"/>
              <circle cx="250" cy="250" r="105" fill="white"/>
              <circle cx="250" cy="250" r="143" fill="none" stroke="#3D6ACC" strokeWidth="1.2" opacity="0.35"/>
              <circle cx="250" cy="250" r="105" fill="none" stroke="#2B4FA8" strokeWidth="0.8" opacity="0.3"/>
              <g stroke="#FFFFFF" strokeWidth="0.7" opacity="0.1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <line key={i} x1="250" y1="109" x2="250" y2={i % 2 === 0 ? "119" : "113"} transform={`rotate(${i * 15} 250 250)`}/>
                ))}
              </g>
            </g>

            {/* Bore */}
            <circle cx="250" cy="250" r="103" fill="white"/>
            <circle cx="250" cy="250" r="100" fill="none" stroke="#E2E8F4" strokeWidth="1.6"/>
            <circle cx="250" cy="250" r="96" fill="none" stroke="#EDF0F7" strokeWidth="0.8"/>
            <circle cx="250" cy="250" r="4" fill="#1E3C82" opacity="0.35"/>
            <circle cx="250" cy="250" r="1.5" fill="#1E3C82" opacity="0.6"/>

            {/* Crosshairs */}
            <g stroke="#1E3C82" strokeWidth="0.6" opacity="0.08">
              <line x1="250" y1="154" x2="250" y2="346"/>
              <line x1="154" y1="250" x2="346" y2="250"/>
              <circle cx="250" cy="250" r="50" fill="none" strokeDasharray="3 4"/>
            </g>
          </svg>
        </div>
      </div>

      {/* ── STATS STRIP — desktop only ── */}
      <div className="hidden md:flex absolute bottom-8 left-[clamp(2.5rem,6vw,7rem)] gap-10 z-20 opacity-0 animate-[fadeUp_0.9s_0.9s_ease_forwards]">
        {[
          { num: '3', suffix: '+', label: 'Years of precision' },
          { num: '1200', suffix: '+', label: 'SKU variants' },
          { num: '0.5', suffix: 'µm', label: 'Tolerance class' },
        ].map(({ num, suffix, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <span
              className="font-bold text-[clamp(1.3rem,2vw,1.8rem)] text-[#1E3C82] leading-none"
            >
              {num}<span className="text-[#E8641A]">{suffix}</span>
            </span>
            <span className="text-[0.6rem] font-normal tracking-[0.18em] uppercase text-[#8A94B0]">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── SCROLL HINT — desktop only ── */}
      <div className="hidden md:flex absolute bottom-8 right-16 items-center gap-2.5 z-20 opacity-0 animate-[fadeUp_0.8s_1.1s_ease_forwards]">
        <div
          className="relative w-9 h-px overflow-hidden"
          style={{ background: 'linear-gradient(to right, transparent, #3D6ACC)' }}
        >
          <div className="absolute top-0 left-[-100%] w-full h-full bg-[#E8641A] animate-[scanLine_2.4s_ease-in-out_1.5s_infinite]"/>
        </div>
        <span
          className="text-[0.58rem] tracking-[0.22em] uppercase text-[#8A94B0] [writing-mode:vertical-lr] rotate-180"
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes scanLine {
          0%   { left: -100%; }
          50%  { left: 0%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}

