'use client';

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useModal } from "@/context/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Step {
  numberStr: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string;
}

export default function SalesMethod() {
  const { openModal } = useModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reset refs on each render
  stepRefs.current = [];

  const steps: Step[] = [
    {
      numberStr: "01",
      title: "Audit & Research",
      duration: "Days 1–7",
      description: "We dig deep into your analytics, heatmaps, session recordings, and customer feedback to find every revenue leak in your store.",
      deliverables: "We deliver: analytics audit · heatmaps report · research logs"
    },
    {
      numberStr: "02",
      title: "Strategy & Hypotheses",
      duration: "Days 8–10",
      description: "We build a prioritised test backlog using our ICE framework — Impact, Confidence, Ease — so we always run the highest-value tests first.",
      deliverables: "We deliver: ICE test backlog · wireframes · UX roadmap"
    },
    {
      numberStr: "03",
      title: "Test & Iterate",
      duration: "Ongoing sprints",
      description: "Tests are designed, built, QA'd, and launched on your Shopify store. We run each test until statistical significance is reached.",
      deliverables: "We deliver: variant setups · QA sign-off · live A/B tests"
    },
    {
      numberStr: "04",
      title: "Analyse & Scale",
      duration: "Compounding monthly",
      description: "Winners are implemented permanently. Losers teach us something new. Every sprint compounds on the last — revenue grows month over month.",
      deliverables: "We deliver: performance analysis · revenue reports · roadmap updates"
    }
  ];

  useGSAP(() => {
    // ScrollTrigger to animate the active progress line scaleY
    gsap.fromTo(
      progressLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="process" 
      data-nav-theme="light" 
      className="relative bg-[#F7F5F2] py-24 px-6 overflow-x-clip border-t border-[rgba(17,16,15,0.08)]"
    >
      <div className="relative z-10 max-w-[1340px] mx-auto w-full">
        
        {/* Parent Grid Container - Aligned widths like screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.6fr] gap-10 lg:gap-24 items-start">
          
          {/* Left Column: Intro (Sticky on lg, pt-4 to align perfectly at the top with step 1) */}
          <div className="lg:sticky lg:top-32 flex flex-col text-left lg:pt-4">
            <p 
              className="text-sm font-medium uppercase tracking-[0.08em] mb-4"
              style={{ color: "#FF707C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Our Process
            </p>
            <h2 
              className="text-[#11100F] font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] max-w-[24.5rem] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              From Audit to<br />Revenue Growth
            </h2>
            <p className="text-[#11100F]/70 text-sm font-medium leading-relaxed max-w-[24.5rem] mb-8">
              A clear, systematic process that turns data into decisions and decisions into revenue — every single month.
            </p>

            {/* Primary CTA */}
            <div className="relative inline-block self-start">
              <button 
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center bg-[#ff5c6a] text-white rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF707C] shadow-sm cursor-pointer"
              >
                Book Your Free Call &rarr;
              </button>
              <div className="w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 bg-black/30"></div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div ref={containerRef} className="relative pl-1">
            {/* Connecting Vertical Hairline (Aligned to center of 44px circle) */}
            <div className="absolute left-[24px] top-[22px] bottom-[22px] w-[2px] bg-[#11100F]/[0.12] z-0" />
            
            {/* GSAP-animated active progress hairline indicator */}
            <div 
              ref={progressLineRef}
              className="absolute left-[24px] top-[22px] bottom-[22px] w-[2px] bg-[#FF707C] z-0 origin-top scale-y-0"
            />

            {/* Steps Container - space-y-24 adds rich layout spacing */}
            <div className="flex flex-col space-y-24 relative z-10">
              {steps.map((step, idx) => {
                // Parse deliverables into a prefix and array of pill items
                const parts = step.deliverables.split(": ");
                const prefix = parts[0] + ":";
                const items = parts[1] ? parts[1].split(" · ") : [];

                return (
                  <div 
                    key={idx} 
                    className="group grid grid-cols-[44px_1fr] gap-4 md:gap-6 items-start"
                  >
                    
                    {/* Circle - Upgraded to 44px touch target size */}
                    <div className="w-11 h-11 bg-white border border-[#11100F]/[0.16] rounded-full flex items-center justify-center shrink-0 relative z-10 transition-all duration-300 group-hover:border-[#FF707C] group-hover:bg-[#FF707C] shadow-sm">
                      <span className="text-[#11100F] font-semibold text-sm transition-colors duration-300 group-hover:text-white">
                        {step.numberStr}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="flex flex-col pt-1.5 text-left">
                      <div className="flex flex-row items-baseline mb-2">
                        <h3 
                          className="text-[#11100F] font-semibold text-base md:text-lg leading-6 transition-colors duration-300"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {step.title}
                        </h3>
                        <span className="text-[#11100F]/60 font-medium text-xs md:text-sm leading-6 ml-3 transition-colors duration-300">
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-[#11100F]/70 font-medium text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      
                      {/* Premium Deliverables Chips layout */}
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-[#11100F]/60 font-semibold text-[11px] uppercase tracking-wider">
                          {prefix}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item, idx2) => (
                            <span 
                              key={idx2} 
                              className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#11100F]/5 text-[#11100F]/75 text-xs font-medium border border-[#11100F]/5 transition-all duration-300 group-hover:bg-[#FF707C]/10 group-hover:text-[#FF707C] group-hover:border-[#FF707C]/10"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
