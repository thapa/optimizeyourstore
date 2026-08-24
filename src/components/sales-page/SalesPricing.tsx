'use client';

import { useRef, MouseEvent } from 'react';
import { useModal } from '@/context/ModalContext';

interface Feature {
  bold?: string;
  text: string;
}

interface PriceCard {
  tier: string;
  name: string;
  desc: string;
  amount: string;
  currency?: string;
  period: string;
  note: string;
  features: Feature[];
  ctaLabel: string;
  ctaLink: string;
  featured?: boolean;
  isCustomAmount?: boolean;
}

export default function SalesPricing() {
  const { openModal } = useModal();

  const auditCard: PriceCard = {
    tier: "CRO Strategy Audit",
    name: "Complete Strategy Audit",
    desc: "A comprehensive deep-dive into your store ecosystem to map out and prioritize every conversion leak.",
    amount: "1,497",
    currency: "$",
    period: "one-time project",
    note: "Delivered within 10 business days",
    ctaLabel: "Book Strategy Audit",
    ctaLink: "#",
    features: [
      { text: "Full UX, layout & navigation audit" },
      { text: "Copy & buying psychology audit (Home + PDPs)" },
      { text: "Full funnel audit (Cart, checkout & post-purchase)" },
      { text: "90-day prioritised testing roadmap" },
      { text: "60-minute strategy walkthrough call" },
      { text: "30–50 page written recommendations report" },
    ]
  };

  const retainerCard: PriceCard = {
    tier: "CRO Retainer",
    name: "Growth Retainer",
    desc: "A fully managed ongoing testing and optimization program for high-growth Shopify brands.",
    amount: "Scoped on Call",
    isCustomAmount: true,
    period: "monthly retainer",
    note: "3-month minimum engagement",
    ctaLabel: "Book Discovery Call",
    ctaLink: "#",
    featured: true,
    features: [
      { text: "4–5 A/B tests launched per month" },
      { text: "End-to-end execution (design, copy, custom dev)" },
      { text: "Bi-weekly strategy review & planning calls" },
      { text: "Shopify Plus checkout & flow optimization" },
      { text: "Priority Slack access (same-day response)" },
      { text: "Compounding, permanent conversion rate wins" },
    ]
  };

  // Mouse tilt animation in React
  const TiltCard = ({ card }: { card: PriceCard }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
    };

    const handleMouseLeave = () => {
      const el = cardRef.current;
      if (!el) return;
      el.style.transform = '';
      el.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      setTimeout(() => {
        if (el) el.style.transition = '';
      }, 600);
    };

    const handleMouseEnter = () => {
      const el = cardRef.current;
      if (!el) return;
      el.style.transition = 'transform 0.1s ease';
    };

    return (
      <div
        ref={cardRef}
        className={`relative flex h-full flex-col rounded-[24px] border p-8 shadow-[0_1px_2px_rgba(17,16,15,0.04),0_16px_32px_-18px_rgba(17,16,15,0.12)] transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          card.featured
            ? "border-white/12 text-white shadow-[0_24px_48px_-24px_rgba(255,92,106,0.42)]"
            : "border-[#11100F]/[0.08] bg-white text-[#11100F]"
        }`}
        style={
          card.featured
            ? {
                background:
                  "radial-gradient(circle at top, rgba(255, 112, 124, 0.26), transparent 36%), #1A0E10",
              }
            : undefined
        }
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {card.featured && (
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF707C] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            Most Popular
          </div>
        )}

        <span
          className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] self-start mb-6 ${
            card.featured
              ? "border-white/12 bg-white/10 text-white/80"
              : "border-[#11100F]/[0.08] bg-[#11100F]/[0.04] text-[#11100F]/60"
          }`}
        >
          {card.tier}
        </span>

        <h3 className="text-[24px] font-extrabold tracking-[-0.01em] mb-2">{card.name}</h3>
        <p className={`text-[14px] leading-relaxed mb-6 font-medium ${
          card.featured ? "text-white/60" : "text-[#11100F]/65"
        }`}>
          {card.desc}
        </p>

        <div className="flex items-baseline gap-1.5 mb-2 mt-auto">
          {!card.isCustomAmount && <span className="text-[28px] font-extrabold">{card.currency}</span>}
          <span className={`text-[clamp(32px,4.5vw,52px)] font-extrabold tracking-tight leading-none ${
            card.isCustomAmount ? "text-[38px] tracking-normal" : ""
          }`}>
            {card.amount}
          </span>
        </div>

        <div className={`text-[13px] font-bold uppercase tracking-wider ${
          card.featured ? "text-[#FF707C]" : "text-[#ff5c6a]"
        }`}>
          {card.period}
        </div>
        <div className={`text-[12px] font-medium mt-1 mb-6 ${
          card.featured ? "text-white/40" : "text-[#11100F]/45"
        }`}>
          {card.note}
        </div>

        <hr className={`border-t mb-6 ${card.featured ? "border-white/10" : "border-[#11100F]/10"}`} />

        <ul className="flex flex-col gap-3.5 mb-10">
          {card.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                card.featured
                  ? "border-white/12 bg-white/10 text-white"
                  : "border-[#FF707C]/10 bg-[#FF707C]/10 text-[#FF707C]"
              }`}>
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="stroke-current">
                  <path d="M2 5l2.5 2.5L8 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className={`text-[14px] leading-relaxed font-medium ${
                card.featured ? "text-white/80" : "text-[#11100F]/75"
              }`}>
                {feat.bold ? <strong>{feat.bold} </strong> : null}
                {feat.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="relative mt-auto inline-block self-stretch">
          <button
            type="button"
            onClick={openModal}
            className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[14px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm cursor-pointer ${
              card.featured 
                ? "bg-[#FF707C] text-white hover:bg-[#ff5c6a]" 
                : "bg-transparent border border-[#11100F]/25 text-[#11100F] hover:bg-[#11100F]/5"
            }`}
          >
            {card.ctaLabel}
          </button>
          {card.featured && (
            <div className="absolute -bottom-1 -right-1 h-1 w-1 rounded-[1px] bg-white/70" />
          )}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="pricing" 
      data-nav-theme="light" 
      className="relative z-10 overflow-hidden bg-[#F7F5F2] px-6 py-24 md:py-32 border-t border-[rgba(17,16,15,0.08)]"
    >
      <div className="mx-auto max-w-[1340px]">
        {/* Guarantee Callout Badge */}
        <div className="mx-auto max-w-2xl mb-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-green-600/15 bg-green-600/[0.03] p-4 text-[13px] sm:text-[14px] font-semibold text-green-800 shadow-[0_1px_2px_rgba(0,0,0,0.02)] leading-relaxed max-w-[580px] text-center justify-center font-sans">
            <span className="text-[18px] shrink-0">🛡️</span>
            <span>If we don't find you at least 10× your investment in revenue opportunities, you get a full refund. No questions asked.</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <p
            className="mb-4 text-[14px] font-medium uppercase tracking-[0.08em]"
            style={{ color: "#FF707C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Transparent Pricing
          </p>
          <h2
            className="mx-auto max-w-[48rem] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-[#11100F]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Investment That<br />Pays for Itself
          </h2>
          <p
            className="mx-auto mt-6 max-w-2xl text-[14px] font-medium leading-[22px]"
            style={{
              color: "rgba(17, 16, 15, 0.65)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Choose the service that fits where you are. Start with a strategy consultation or go straight into a full CRO retainer.
          </p>
          <p
            className="mx-auto mt-4 max-w-2xl text-[15px] font-extrabold leading-[22px] text-[#ff5c6a]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            You just saw $534,000/mo in added revenue across 6 real tests. Our Strategy Audit is $1,497.
          </p>
        </div>

        {/* Cards Grid (Simplified 2-card layout) */}
        <div className="mx-auto w-full">
          <div className="mx-auto max-w-[820px] grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
            <div>
              <TiltCard card={auditCard} />
            </div>
            <div>
              <TiltCard card={retainerCard} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
