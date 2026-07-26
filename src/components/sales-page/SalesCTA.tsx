'use client';

import GrainOverlay from "../ui/GrainOverlay";

export default function SalesCTA() {
  return (
    <section 
      id="book"
      data-nav-theme="dark"
      className="relative z-10 py-24 md:py-32 px-6 overflow-hidden border-t border-white/10"
      style={{
        backgroundColor: '#1A0E10',
        backgroundImage: 'url(/stacked-waves-haikei.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
      }}
    >
      {/* Subtle background noise overlay */}
      <GrainOverlay />

      <div className="relative z-10 max-w-[1340px] mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF707C]/30 bg-[#FF707C]/8 px-4.5 py-2 text-[13px] font-semibold text-[#FF707C] mb-8 animate-fadeUp select-none">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF707C]">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Free 30-Minute Strategy Call
        </div>

        {/* Heading */}
        <h2 
          className="text-white font-extrabold tracking-[-0.03em] text-[clamp(28px,7.5vw,56px)] leading-[1.15] max-w-[70rem] font-sans text-center mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Find Out Exactly Where<br />
          Your Store Is Bleeding Revenue
        </h2>

        {/* Supporting Copy */}
        <p className="text-white/70 font-medium text-lg leading-[28px] max-w-[34rem] mb-12 text-center font-sans">
          Book a free 30-minute strategy call. We'll look at your store, identify your top 3 conversion leaks, and tell you exactly what we'd fix first — no pitch, no pressure.
        </p>

        {/* Action Group */}
        <div className="flex flex-col items-center gap-6 w-full text-center">
          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* Primary CTA button */}
            <div className="relative w-full sm:w-auto flex justify-center">
              <a 
                href="https://calendar.app.google/A3gnRV3q6xhCi2oR8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center bg-[#FF707C] text-white px-7 py-4 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] hover:bg-[#ff5c6a] active:scale-[0.98] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF707C] shadow-lg text-center"
              >
                Get My Free Store Diagnosis
                <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 bg-white/70 hidden sm:block"></div>
            </div>

            {/* Secondary CTA button */}
            <a 
              href="mailto:hello@convertiqx.com"
              className="inline-flex w-full sm:w-auto items-center justify-center bg-transparent border border-white/25 text-white px-7 py-4 rounded-full text-[15px] font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/50 hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Email Us Instead
            </a>
          </div>

          {/* Reassurance/Guarantee Line */}
          <p className="text-white/45 font-medium text-[13px] leading-[20px] max-w-[32rem] flex items-center justify-center gap-2 font-sans mt-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#FF707C]/60 shrink-0">
              <path d="M7 1l1.5 4h4l-3.3 2.4 1.3 4L7 9 3.5 11.4l1.3-4L1.5 5h4L7 1z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" />
            </svg>
            No long-term commitment required — start with the audit and scale from there
          </p>
        </div>
      </div>
    </section>
  );
}
