'use client';

import { useEffect, useState, useRef } from 'react';

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
          const duration = 1600;
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

export default function SalesStats() {
  const stats = [
    {
      num: <AnimatedCounter target={23} suffix="%+" />,
      label: "Highest CVR lift from a single A/B test"
    },
    {
      num: <AnimatedCounter target={534} prefix="$" suffix="K" />,
      label: "Extra revenue added per month across client tests"
    },
    {
      num: <AnimatedCounter target={47} suffix="+" />,
      label: "Shopify & Shopify Plus stores audited"
    },
    {
      num: <AnimatedCounter target={99} suffix="%" />,
      label: "Statistical confidence on our best-performing test"
    }
  ];

  return (
    <section 
      id="results" 
      data-nav-theme="dark" 
      className="relative bg-[#0E0B0D] py-24 px-6 overflow-hidden border-t border-white/10"
    >
      <div className="relative z-10 max-w-[1340px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col text-left mb-16 max-w-2xl">
          <p className="text-[#FF707C] text-sm font-medium tracking-[0.08em] uppercase mb-3">
            Proven Results
          </p>
          <h2 
            className="text-white font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Numbers That<br />
            Actually Mean Something
          </h2>
          <p className="text-white/65 text-base font-medium leading-6">
            We don't report impressions or clicks. We report the metrics that show up in your bank account.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.04] border border-white/[0.08] rounded-[24px] backdrop-blur-[24px] p-8 text-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12] hover:translate-y-[-4px]"
            >
              <div className="text-[44px] font-extrabold tracking-[-0.04em] mb-3 text-white leading-none bg-gradient-to-r from-white to-[#FF707C] bg-clip-text text-transparent inline-block">
                {stat.num}
              </div>
              <p 
                className="text-[14px] font-medium leading-relaxed text-white/50"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
