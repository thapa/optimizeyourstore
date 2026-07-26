'use client';

import { useRef } from 'react';

export default function SalesComparison() {
  const containerRef = useRef<HTMLDivElement>(null);

  const oldWayItems = [
    <>Launching new pages based on "gut-feel" and <strong>praying they work</strong></>,
    <>Scaling a winner, watching ROAS drop, and <strong>pulling the spend back</strong></>,
    <>Hiring agencies that send vanity reports while your <strong>net profit drops</strong></>,
    <>Stacking buggy third-party Shopify apps that <strong>bloat your site speed</strong></>,
    <>Watching visitors drop off at checkout and <strong>not knowing why</strong></>
  ];

  const newWayItems = [
    <>Launching store variants backed by <strong>real customer click and behavior data</strong></>,
    <>A store that converts paid traffic at a <strong>higher profit per session</strong></>,
    <>Partnering with specialists whose success is tied directly to your <strong>net margins</strong></>,
    <>Custom, lightweight code that keeps your <strong>checkout lightning fast</strong></>,
    <>Knowing the exact bottleneck of your store and <strong>fixing it systematically</strong></>
  ];

  return (
    <section
      id="comparison"
      data-nav-theme="dark"
      className="relative z-10 bg-[#0E0B0D] px-6 py-24 md:py-32 overflow-hidden border-t border-white/[0.06]"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 112, 124, 0.03), transparent 60%), #0E0B0D'
      }}
    >
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.01) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1340px]" ref={containerRef}>
        {/* Section Header */}
        <div className="mx-auto mb-16 md:mb-24 max-w-4xl text-center">
          <p
            className="mb-4 text-[13px] font-bold uppercase tracking-[0.10em] text-[#FF707C]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The Shift
          </p>
          <h2
            className="mx-auto max-w-[52rem] text-white text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.025em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            You don't have a traffic problem.<br />
            <span className="text-[#FF707C]">You have a session economics problem.</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-2xl text-[14px] md:text-[15px] font-medium leading-[24px] text-white/50"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Doubling your budget won't save a store that leaks revenue. The most successful Shopify brands don't scale by simply buying more clicks—they scale because they make more money from the traffic they already have.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-8">
          
          {/* Card 1: The Old Way */}
          <div className="flex flex-col rounded-[24px] border border-white/[0.06] bg-[#120E11]/45 p-8 md:p-10 backdrop-blur-sm transition-all duration-300">
            <h3 
              className="text-[#ff5c6a] font-bold tracking-[-0.01em] text-[20px] text-center mb-8 pb-5 border-b border-white/[0.06]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The old way
            </h3>

            <div className="flex flex-col gap-6.5 my-auto">
              {oldWayItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-[#ff5c6a] text-[10px] font-bold mt-0.5 border border-red-500/20">
                    ✕
                  </span>
                  <p className="text-[14px] md:text-[15px] font-medium leading-[22px] text-white/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: The New Way */}
          <div 
            className="flex flex-col rounded-[24px] border border-green-500/20 bg-[#101411]/50 p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-green-500/35 relative"
            style={{
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 24px 48px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <h3 
              className="text-[#4ade80] font-bold tracking-[-0.01em] text-[20px] text-center mb-8 pb-5 border-b border-white/[0.06]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              The new way
            </h3>

            <div className="flex flex-col gap-6.5 my-auto">
              {newWayItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-[#4ade80] text-[10px] font-bold mt-0.5 border border-green-500/20">
                    ✓
                  </span>
                  <p className="text-[14px] md:text-[15px] font-medium leading-[22px] text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Callout Box (Aligned with screenshot) */}
        <div className="mx-auto max-w-5xl mt-8">
          <div 
            className="rounded-[24px] border border-[#ff5c6a]/80 bg-[#1A0E10]/80 p-8 md:p-10 backdrop-blur-sm text-center relative"
            style={{
              boxShadow: '0 20px 40px rgba(116, 49, 58, 0.15)'
            }}
          >
            {/* Visual Accent Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none rounded-[24px]" />
            
            <p 
              className="text-white text-[15px] md:text-[17px] font-semibold leading-[28px] max-w-[800px] mx-auto relative z-10"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              If that sounds familiar, it is not because you are doing something wrong as a founder. It is because you have been trying to fix the traffic layer, when the actual leak is your store.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
