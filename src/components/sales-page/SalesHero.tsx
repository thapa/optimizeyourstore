'use client';

import { useEffect, useState, useRef } from 'react';
import HeroWebGL from '@/components/HeroWebGL';
import { useModal } from '@/context/ModalContext';

function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  decimal = false,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 1800;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const currentVal = target * eased;
            setCount(currentVal);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [target, animated]);

  return (
    <span ref={elementRef}>
      {prefix}
      {decimal ? count.toFixed(1) : Math.round(count).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function SalesHero() {
  const heroCardRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = heroCardRef.current;
      if (!card) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      aria-label="ConvertiqX CRO hero"
      data-nav-theme="dark"
      className="relative w-full flex min-h-screen flex-col overflow-hidden animate-fadeIn"
      style={{
        background:
          'radial-gradient(circle at 18% 22%, rgba(255, 112, 124, 0.08), transparent 40%), radial-gradient(circle at 82% 78%, rgba(255, 112, 124, 0.05), transparent 45%), #0E0B0D',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.5)',
      }}
    >
      <HeroWebGL />

      {/* Grid Lines Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1340px] mx-auto w-full px-6 pt-[18vh] pb-28 md:pb-36">
        
        {/* Left Column (Content) */}
        <div className="flex flex-col items-start text-left max-w-xl lg:max-w-[840px] w-full">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border px-4.5 py-2 text-[13px] font-semibold text-[#FF707C] mb-8 bg-[#FF707C]/8 border-[#FF707C]/30 animate-fadeUp">
            <span className="w-1.75 h-1.75 rounded-full bg-[#FF707C] animate-dot-pulse" />
            CRO & A/B testing for D2C Shopify & Shopify Plus brands.
          </div>

          {/* Headline */}
          <h1 className="text-white text-[clamp(28px,7.5vw,42px)] sm:text-[clamp(38px,8vw,56px)] lg:text-[clamp(48px,6.5vw,82px)] font-extrabold tracking-[-0.03em] leading-[1.08] w-full mb-7">
            Your Ads Are Fine.<br />
            <span className="text-gradient">Your Store Is the Leak.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-base md:text-[19px] leading-relaxed max-w-[580px] mb-11">
            Your ads aren't the problem — your store is leaking profit on every session you pay for. We find the leaks, size them in dollars, and test the fixes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
            <div className="relative">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF707C] px-7 py-4 text-[15px] font-semibold text-[#0E0B0D] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-[0_4px_20px_rgba(255,112,124,0.15)] hover:shadow-[0_8px_32px_rgba(255,112,124,0.3)] hover:bg-[#ff5c6a] w-full sm:w-auto cursor-pointer"
              >
                Get My Revenue Leak Diagnostic
                <svg className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="absolute -bottom-1 -right-1 h-1 w-1 rounded-[1px] bg-white/70 hidden sm:block" />
            </div>

            <a
              href="#results"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[15px] font-medium text-white/70 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] hover:border-white/50 hover:text-white active:scale-[0.98] w-full sm:w-auto"
            >
              See real test results
            </a>
          </div>

          {/* Stats pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-[540px]">
            <div className="flex flex-col gap-1 rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-5.5 py-4 backdrop-blur-[10px] transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-0.5">
              <div className="flex items-baseline gap-0.5 font-bold tracking-tight text-white text-[26px] leading-none">
                <AnimatedCounter target={47} suffix="+" />
              </div>
              <span className="text-[12px] font-medium leading-tight text-white/40 mt-0.5">Keep only with a real, defensible number</span>
            </div>

            <div className="flex flex-col gap-1 rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-5.5 py-4 backdrop-blur-[10px] transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-0.5">
              <div className="flex items-baseline gap-0.5 font-bold tracking-tight text-white text-[26px] leading-none">
                <AnimatedCounter target={534} prefix="$" suffix="K/mo" />
              </div>
              <span className="text-[12px] font-medium leading-tight text-white/40 mt-0.5">Projected monthly impact (at full rollout)</span>
            </div>

            <div className="col-span-2 sm:col-span-1 flex flex-col gap-1 rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-5.5 py-4 backdrop-blur-[10px] transition-all duration-200 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-0.5">
              <div className="flex items-baseline gap-0.5 font-bold tracking-tight text-white text-[26px] leading-none">
                <AnimatedCounter target={23.0} suffix="%+" decimal={true} />
              </div>
              <span className="text-[12px] font-medium leading-tight text-white/40 mt-0.5">[+X]% CVR • [X]% confidence</span>
            </div>
          </div>

        </div>

        {/* Right Column (Floating Card) */}
        <div className="hidden lg:flex items-center justify-center w-full max-w-[480px] shrink-0 pointer-events-none">
          <div className="perspective-[800px] w-full">
            <div
              ref={heroCardRef}
              className="w-full rounded-[28px] border border-white/10 bg-black/80 p-9 backdrop-blur-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)] animate-float transition-transform duration-100 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-1">What You Get</div>
                  <div className="text-[16px] font-extrabold text-white">Revenue Leak Diagnostic</div>
                </div>
                <div className="rounded-[8px] border border-[#FF707C]/30 bg-[#FF707C]/10 px-3 py-1.25 text-[11px] font-bold text-[#FF707C]">
                  delivered in 10 business days
                </div>
              </div>

              {/* Deliverables List */}
              <div className="flex flex-col gap-2 mb-5">
                {[
                  'Funnel model from your GA4 + Shopify data',
                  'Clarity behavioral analysis',
                  'Unit economics & profit-lever review',
                  'Traffic-feasibility verdict',
                  'Ranked 90-day test roadmap',
                  '60-min walkthrough call',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-[10px] border border-white/[0.06] bg-white/[0.04] px-3.25 py-2.25"
                  >
                    <div className="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-[#FF707C]/30 bg-[#FF707C]/10">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2L7.5 2" stroke="#FF707C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[13px] font-semibold text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              {/* <div className="grid grid-cols-2 gap-0 border-top border-white/[0.06] pt-4.5 border-t border-dashed">
                <div className="text-center">
                  <div className="text-[18px] font-extrabold tracking-tight text-white leading-none">47+</div>
                  <div className="text-[10px] font-medium text-white/40 mt-1">Stores Audited</div>
                </div>
                <div className="text-center border-l border-white/[0.06]">
                  <div className="text-[18px] font-extrabold tracking-tight text-[#FF707C] leading-none">Shopify Plus</div>
                  <div className="text-[10px] font-medium text-white/40 mt-1">Specialist</div>
                </div>
              </div> */}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
