"use client";

import GrainOverlay from "./ui/GrainOverlay";
import { useModal } from "@/context/ModalContext";

export default function CTA() {
  const { openModal } = useModal();
  return (
    <section 
      data-nav-theme="dark"
      className="relative z-10 py-24 md:py-32 px-6 overflow-x-clip"
      style={{
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
        {/* Header Group: Eyebrow + Headline (Tight 12px grouping) */}
        <div className="flex flex-col items-center gap-3 text-center mb-6">
          <p className="text-[#FF707C] font-semibold text-sm tracking-[0.08em] uppercase select-none font-sans">
            READY TO SHIP?
          </p>
          <h2 
            className="text-white font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] max-w-[70rem] font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Let's build the thing that's been on your roadmap for a year.
          </h2>
        </div>

        {/* Supporting Copy (Generous 24px gap after title) */}
        <p className="text-white/65 font-medium text-lg leading-[28px] max-w-[32rem] mb-12 text-center font-sans">
          Tell us what you're trying to ship. We'll reply within one business day with honest thoughts on scope, timeline, and whether we're the right team for it.
        </p>

        {/* Action Group: Buttons + Reassurance line (Generous 48px gap from body) */}
        <div className="flex flex-col items-center gap-6 w-full text-center">
          {/* Buttons Row - stacks on mobile (<768px), side-by-side on desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full">
            {/* Primary CTA button */}
            <div className="relative w-full md:w-auto flex justify-center">
              <button 
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center bg-white text-[#11100F] px-7 py-3.5 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] hover:bg-[#F7F5F2] active:scale-[0.98] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF707C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A0E10] w-full md:w-auto text-center shadow-sm cursor-pointer"
              >
                Book an intro call &rarr;
              </button>
              <div className="w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 bg-white/70"></div>
            </div>

            {/* Secondary CTA button */}
            <div className="relative group w-full md:w-auto flex justify-center">
              <a 
                href="mailto:hello@convertiqx.com"
                className="inline-flex items-center justify-center bg-transparent border border-white/25 text-white px-7 py-3.5 rounded-full text-[15px] font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/50 hover:scale-[1.02] active:scale-[0.98] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A0E10] w-full md:w-auto text-center"
              >
                Send us a brief
              </a>
            </div>
          </div>

          {/* Reassurance Line */}
          <p className="text-white/45 font-medium text-[13px] leading-[20px] max-w-[32rem] font-sans">
            Replies within 1 business day <span className="hidden sm:inline">·</span><br className="sm:hidden" /> No sales pressure <span className="hidden sm:inline">·</span><br className="sm:hidden" /> Engineers in the call
          </p>
        </div>
      </div>
    </section>
  );
}
