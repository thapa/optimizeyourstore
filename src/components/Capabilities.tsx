"use client";

import { useRef } from "react";
import GrainOverlay from "@/components/ui/GrainOverlay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const NextJsWireframe = () => (
  <div className="flex flex-col h-full w-full justify-between gap-4">
    {/* Top navbar */}
    <div className="h-4 w-full rounded bg-white/20" />
    <div className="flex flex-1 gap-4 overflow-hidden">
      {/* Sidebar */}
      <div className="flex flex-col gap-2 w-1/4">
        <div className="h-3 w-full rounded bg-white/20" />
        <div className="h-3 w-full rounded bg-white/20" />
        <div className="h-3 w-full rounded bg-white/20" />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex-1 rounded-lg border border-white/12 p-3 flex flex-col gap-2 bg-white/5">
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="h-2 w-1/2 rounded bg-white/20" />
        </div>
        <div className="flex-1 rounded-lg border border-white/12 p-3 flex flex-col gap-2 bg-white/5">
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="h-2 w-1/2 rounded bg-white/20" />
        </div>
        <div className="flex-1 rounded-lg border border-white/12 p-3 flex flex-col gap-2 bg-white/5">
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="h-2 w-1/2 rounded bg-white/20" />
        </div>
      </div>
    </div>
    {/* Accent rectangle */}
    <div className="h-9 w-full rounded-lg" style={{ backgroundColor: "rgba(255, 112, 124, 0.5)" }} />
  </div>
);

const ShopifyWireframe = () => (
  <div className="flex flex-col h-full w-full justify-between gap-3">
    {/* Breadcrumb */}
    <div className="h-2 w-1/3 rounded bg-white/20" />
    {/* Large Product Image Area */}
    <div className="flex-1 rounded-xl bg-white/5 border border-white/12 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-white/10" />
    </div>
    {/* Variant selector */}
    <div className="flex gap-2 py-1">
      <div className="w-4 h-4 rounded-full bg-white/20" />
      <div className="w-4 h-4 rounded-full bg-white/20" />
      <div className="w-4 h-4 rounded-full bg-white/20" />
    </div>
    {/* Title placeholder */}
    <div className="flex flex-col gap-2">
      <div className="h-3 w-3/4 rounded bg-white/20" />
      <div className="h-3 w-1/2 rounded bg-white/20" />
    </div>
    {/* Price line in accent color */}
    <div className="h-3 w-1/4 rounded" style={{ backgroundColor: "rgba(255, 112, 124, 0.5)" }} />
    {/* Add to Cart button in accent color */}
    <div className="h-9 w-full rounded-lg" style={{ backgroundColor: "rgba(255, 112, 124, 0.5)" }} />
  </div>
);

const MigrationWireframe = () => (
  <svg className="w-full h-full select-none" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Before Section (Tangled cluster) */}
    <rect x="10" y="10" width="180" height="90" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
    <text x="20" y="28" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="sans-serif">LEGACY</text>
    
    {/* Tangled connections */}
    <path d="M 40,55 Q 60,85 90,45 T 140,75" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
    <path d="M 50,75 Q 110,35 150,55" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
    
    {/* Nodes */}
    <rect x="35" y="45" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="80" y="65" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="135" y="45" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="110" y="70" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />

    {/* Central connecting Arrow in accent color */}
    <path d="M 100,108 L 100,132" stroke="rgba(255, 112, 124, 0.5)" strokeWidth="2.5" strokeDasharray="3 3" />
    <path d="M 96,128 L 100,134 L 104,128" stroke="rgba(255, 112, 124, 0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* After Section (Clean Grid) */}
    <rect x="10" y="145" width="180" height="95" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
    <text x="20" y="163" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="sans-serif">TARGET</text>
    
    {/* Clean grid lines */}
    <line x1="50" y1="185" x2="150" y2="185" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <line x1="50" y1="210" x2="150" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <line x1="75" y1="175" x2="75" y2="220" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <line x1="125" y1="175" x2="125" y2="220" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    
    {/* Nodes aligned */}
    <rect x="40" y="180" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="90" y="180" width="20" height="12" rx="3" fill="rgba(255, 112, 124, 0.5)" />
    <rect x="140" y="180" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="40" y="205" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="90" y="205" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
    <rect x="140" y="205" width="20" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
  </svg>
);

const RetainerWireframe = () => (
  <div className="flex h-full w-full gap-3 justify-between">
    {/* Column 1 */}
    <div className="flex-1 flex flex-col gap-3">
      {/* Column Header */}
      <div className="h-3 w-3/4 rounded bg-white/20 mx-auto" />
      <div className="h-[1px] w-full bg-white/10" />
      {/* Column Cards */}
      <div className="rounded-lg border border-white/12 p-3 bg-white/5 flex flex-col gap-2">
        <div className="h-2 w-3/4 rounded bg-white/20" />
      </div>
      <div className="rounded-lg border border-white/12 p-3 bg-white/5 flex flex-col gap-2">
        <div className="h-2 w-1/2 rounded bg-white/20" />
      </div>
      <div className="rounded-lg border border-white/12 p-3 bg-white/5 flex flex-col gap-2">
        <div className="h-2 w-2/3 rounded bg-white/20" />
      </div>
    </div>
    
    {/* Divider */}
    <div className="w-[1px] h-full bg-white/10" />

    {/* Column 2 */}
    <div className="flex-1 flex flex-col gap-3">
      {/* Column Header */}
      <div className="h-3 w-3/4 rounded bg-white/20 mx-auto" />
      <div className="h-[1px] w-full bg-white/10" />
      {/* Column Cards */}
      <div className="rounded-lg border border-white/12 border-l-2 border-l-[#FF707C]/50 p-3 bg-white/5 flex flex-col gap-2">
        <div className="h-2 w-2/3 rounded bg-white/20" />
      </div>
      <div className="rounded-lg border border-white/12 p-3 bg-white/5 flex flex-col gap-2">
        <div className="h-2 w-1/2 rounded bg-white/20" />
      </div>
    </div>

    {/* Divider */}
    <div className="w-[1px] h-full bg-white/10" />

    {/* Column 3 */}
    <div className="flex-1 flex flex-col gap-3">
      {/* Column Header */}
      <div className="h-3 w-3/4 rounded bg-white/20 mx-auto" />
      <div className="h-[1px] w-full bg-white/10" />
      {/* Column Cards */}
      <div className="rounded-lg border border-white/12 p-3 bg-white/5 flex flex-col gap-2">
        <div className="h-2 w-3/4 rounded bg-white/20" />
      </div>
      <div className="rounded-lg border border-white/12 p-3 bg-white/5 flex flex-col gap-2">
        <div className="h-2 w-1/2 rounded bg-white/20" />
      </div>
    </div>
  </div>
);

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expandedRefs = useRef<(HTMLDivElement | null)[]>([]);
  const collapsedRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reset refs on each render to handle dynamic changes
  cardRefs.current = [];
  expandedRefs.current = [];
  collapsedRefs.current = [];

  const capabilities = [
    {
      num: "01",
      collapsedLabel: "GREENFIELD NEXT.JS BUILDS",
      title: "Production web apps from zero",
      description:
        "We take a Figma file, a half-written PRD, or a back-of-napkin idea and ship a production Next.js app. App Router, server components, edge deploys on Vercel. Typical engagement: 6–12 weeks. You own the GitHub repo from day one.",
      href: "/work/builds",
      visual: <NextJsWireframe />
    },
    {
      num: "02",
      collapsedLabel: "SHOPIFY PLUS STORES",
      title: "E-commerce that scales past 7 figures",
      description:
        "Custom Shopify Plus builds for high-volume merchants. Headless when it makes sense, themed when it doesn't. We've migrated stores through Black Friday without dropping orders. Full Liquid + Hydrogen capability.",
      href: "/work/shopify",
      visual: <ShopifyWireframe />
    },
    {
      num: "03",
      collapsedLabel: "PLATFORM MIGRATIONS",
      title: "Move off the platform holding you back",
      description:
        "Legacy WordPress, Webflow that outgrew itself, a Shopify build that needs Plus, or a monolith ready to break apart. We migrate without breaking SEO, sessions, or revenue — with a written runbook delivered before cutover day.",
      href: "/work/migrations",
      visual: <MigrationWireframe />
    },
    {
      num: "04",
      collapsedLabel: "EMBEDDED ENGINEERING",
      title: "Your fractional engineering team",
      description:
        "Ongoing retainer engagements for teams that ship continuously. Weekly demos, shared Linear and GitHub, a dedicated Slack channel. We act as a fractional engineering team — not a contractor you have to manage.",
      href: "/work/retainer",
      visual: <RetainerWireframe />
    }
  ];

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Set initial state: card 0 at left: 0, others collapsed at the right
      gsap.set(cardRefs.current[0], { left: "0px" });
      gsap.set(expandedRefs.current[0], { autoAlpha: 1 });
      gsap.set(collapsedRefs.current[0], { 
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderRight: "1px solid rgba(255, 255, 255, 0.08)"
      });
      gsap.set(collapsedRefs.current[0]?.querySelector(".rotated-label") as Element, { color: "#FF707C" });
      gsap.set(collapsedRefs.current[0]?.querySelector(".rotated-num") as Element, { color: "#FFFFFF" });

      gsap.set(cardRefs.current[1], { left: "calc(100% - 192px)" });
      gsap.set(expandedRefs.current[1], { autoAlpha: 0 });
      gsap.set(collapsedRefs.current[1], { 
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderRight: "1px solid rgba(255, 255, 255, 0)"
      });
      gsap.set(collapsedRefs.current[1]?.querySelector(".rotated-label") as Element, { color: "rgba(255, 255, 255, 0.65)" });
      gsap.set(collapsedRefs.current[1]?.querySelector(".rotated-num") as Element, { color: "rgba(255, 255, 255, 0.35)" });

      gsap.set(cardRefs.current[2], { left: "calc(100% - 128px)" });
      gsap.set(expandedRefs.current[2], { autoAlpha: 0 });
      gsap.set(collapsedRefs.current[2], { 
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderRight: "1px solid rgba(255, 255, 255, 0)"
      });
      gsap.set(collapsedRefs.current[2]?.querySelector(".rotated-label") as Element, { color: "rgba(255, 255, 255, 0.65)" });
      gsap.set(collapsedRefs.current[2]?.querySelector(".rotated-num") as Element, { color: "rgba(255, 255, 255, 0.35)" });

      gsap.set(cardRefs.current[3], { left: "calc(100% - 64px)" });
      gsap.set(expandedRefs.current[3], { autoAlpha: 0 });
      gsap.set(collapsedRefs.current[3], { 
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderRight: "1px solid rgba(255, 255, 255, 0)"
      });
      gsap.set(collapsedRefs.current[3]?.querySelector(".rotated-label") as Element, { color: "rgba(255, 255, 255, 0.65)" });
      gsap.set(collapsedRefs.current[3]?.querySelector(".rotated-num") as Element, { color: "rgba(255, 255, 255, 0.35)" });

      // Create ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "capabilities-pin",
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2400",
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Transition from Card 0 -> Card 1
      tl.addLabel("step0")
        .to(cardRefs.current[1], { left: "64px", duration: 1 }, "step0")
        .to(expandedRefs.current[0], { autoAlpha: 0, duration: 1 }, "step0")
        .to(collapsedRefs.current[0], { backgroundColor: "rgba(255, 255, 255, 0)", borderRight: "1px solid rgba(255, 255, 255, 0)", duration: 1 }, "step0")
        .to(collapsedRefs.current[0]?.querySelector(".rotated-label") as Element, { color: "rgba(255, 255, 255, 0.65)", duration: 1 }, "step0")
        .to(collapsedRefs.current[0]?.querySelector(".rotated-num") as Element, { color: "rgba(255, 255, 255, 0.35)", duration: 1 }, "step0")
        .to(expandedRefs.current[1], { autoAlpha: 1, duration: 1 }, "step0")
        .to(collapsedRefs.current[1], { backgroundColor: "rgba(255, 255, 255, 0.04)", borderRight: "1px solid rgba(255, 255, 255, 0.08)", duration: 1 }, "step0")
        .to(collapsedRefs.current[1]?.querySelector(".rotated-label") as Element, { color: "#FF707C", duration: 1 }, "step0")
        .to(collapsedRefs.current[1]?.querySelector(".rotated-num") as Element, { color: "#FFFFFF", duration: 1 }, "step0");

      // Transition from Card 1 -> Card 2
      tl.addLabel("step1")
        .to(cardRefs.current[2], { left: "128px", duration: 1 }, "step1")
        .to(expandedRefs.current[1], { autoAlpha: 0, duration: 1 }, "step1")
        .to(collapsedRefs.current[1], { backgroundColor: "rgba(255, 255, 255, 0)", borderRight: "1px solid rgba(255, 255, 255, 0)", duration: 1 }, "step1")
        .to(collapsedRefs.current[1]?.querySelector(".rotated-label") as Element, { color: "rgba(255, 255, 255, 0.65)", duration: 1 }, "step1")
        .to(collapsedRefs.current[1]?.querySelector(".rotated-num") as Element, { color: "rgba(255, 255, 255, 0.35)", duration: 1 }, "step1")
        .to(expandedRefs.current[2], { autoAlpha: 1, duration: 1 }, "step1")
        .to(collapsedRefs.current[2], { backgroundColor: "rgba(255, 255, 255, 0.04)", borderRight: "1px solid rgba(255, 255, 255, 0.08)", duration: 1 }, "step1")
        .to(collapsedRefs.current[2]?.querySelector(".rotated-label") as Element, { color: "#FF707C", duration: 1 }, "step1")
        .to(collapsedRefs.current[2]?.querySelector(".rotated-num") as Element, { color: "#FFFFFF", duration: 1 }, "step1");

      // Transition from Card 2 -> Card 3
      tl.addLabel("step2")
        .to(cardRefs.current[3], { left: "192px", duration: 1 }, "step2")
        .to(expandedRefs.current[2], { autoAlpha: 0, duration: 1 }, "step2")
        .to(collapsedRefs.current[2], { backgroundColor: "rgba(255, 255, 255, 0)", borderRight: "1px solid rgba(255, 255, 255, 0)", duration: 1 }, "step2")
        .to(collapsedRefs.current[2]?.querySelector(".rotated-label") as Element, { color: "rgba(255, 255, 255, 0.65)", duration: 1 }, "step2")
        .to(collapsedRefs.current[2]?.querySelector(".rotated-num") as Element, { color: "rgba(255, 255, 255, 0.35)", duration: 1 }, "step2")
        .to(expandedRefs.current[3], { autoAlpha: 1, duration: 1 }, "step2")
        .to(collapsedRefs.current[3], { backgroundColor: "rgba(255, 255, 255, 0.04)", borderRight: "1px solid rgba(255, 255, 255, 0.08)", duration: 1 }, "step2")
        .to(collapsedRefs.current[3]?.querySelector(".rotated-label") as Element, { color: "#FF707C", duration: 1 }, "step2")
        .to(collapsedRefs.current[3]?.querySelector(".rotated-num") as Element, { color: "#FFFFFF", duration: 1 }, "step2");

    }, sectionRef);

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef });

  return (
    <section 
      data-nav-theme="dark"
      ref={sectionRef}
      className="capabilities-section relative z-10 py-24 md:py-0 md:h-screen md:min-h-[800px] md:flex md:flex-col md:justify-center px-6 border-b border-white/10 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 0%, #1A0E10 0%, #120B0D 60%, #0E0B0D 100%)"
      }}
    >
      <style>{`
        @media (max-height: 800px) and (min-width: 768px) {
          .capabilities-section {
            min-height: 700px !important;
          }
          .capabilities-accordion {
            height: 420px !important;
          }
          .capabilities-header {
            margin-bottom: 24px !important;
          }
          .capabilities-cta {
            margin-top: 24px !important;
          }
          .capabilities-visual {
            width: 220px !important;
          }
        }
        @media (max-height: 720px) and (min-width: 768px) {
          .capabilities-section {
            min-height: 620px !important;
          }
          .capabilities-accordion {
            height: 360px !important;
          }
          .capabilities-visual {
            width: 180px !important;
          }
        }
      `}</style>
      <GrainOverlay />

      <div className="relative z-10 w-full max-w-[1340px] mx-auto">
        {/* Header Block */}
        <div className="capabilities-header flex flex-col text-left mb-8 md:mb-12 max-w-2xl">
          <p 
            className="text-[#FF707C] text-sm font-medium tracking-[0.08em] uppercase mb-3 font-sans"
          >
            WHAT WE BUILD
          </p>
          <h2 
            className="text-white font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] mb-4 font-sans"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Four things we ship in production.
          </h2>
          <p 
            className="text-white/65 text-base font-medium leading-6 font-sans"
          >
            Click any panel to see the engagement details and a real example. Every panel reflects work currently in production.
          </p>
        </div>

        {/* Mobile Layout (< 768px): Vertical Stack of Cards */}
        <div className="flex flex-col gap-6 md:hidden">
          {capabilities.map((item, idx) => (
            <div 
              key={`mobile-${idx}`} 
              className="bg-white/5 border border-white/12 rounded-[24px] p-6 flex flex-col gap-6"
              style={{ backdropFilter: "blur(24px)" }}
            >
              {/* Header: Number + Label */}
              <div className="flex justify-between items-center pb-4 border-b border-white/[0.08]">
                <span className="text-white/35 font-medium text-[14px] font-sans">{item.num}</span>
                <span className="text-white/65 font-medium text-[12px] tracking-[0.12em] uppercase font-sans">{item.collapsedLabel}</span>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-semibold text-[20px] leading-7 tracking-[-0.015em] font-sans">{item.title}</h3>
                <p className="text-white/65 font-medium text-[13px] leading-[22px] font-sans">{item.description}</p>
                <a 
                  href={item.href} 
                  className="text-[#FF707C] font-medium text-[14px] hover:underline underline-offset-4 self-start font-sans"
                >
                  Explore projects &rarr;
                </a>
              </div>
              {/* Visual Mockup */}
              <div className="w-full bg-white/5 border border-white/12 rounded-2xl flex items-center justify-center p-6 shadow-inner relative overflow-hidden aspect-[4/5] max-h-[320px]">
                <div className="absolute inset-0 p-6 flex items-center justify-center">
                  {item.visual}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet Layout (>= 768px): Horizontal Accordion overlapping stack */}
        <div className="capabilities-accordion hidden md:block relative w-full h-[480px] rounded-[24px] border border-white/12 overflow-hidden bg-white/[0.02] backdrop-blur-[24px]">
          {capabilities.map((item, idx) => {
            return (
              <div
                key={item.num}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className={`absolute top-0 h-full bg-[#120B0D]/85 backdrop-blur-[24px] flex flex-col justify-between ${idx > 0 ? "border-l border-white/[0.12]" : ""}`}
                style={{
                  width: "calc(100% - 192px)",
                  left: idx === 0 ? "0px" : idx === 1 ? "calc(100% - 192px)" : idx === 2 ? "calc(100% - 128px)" : "calc(100% - 64px)",
                  zIndex: idx,
                }}
              >
                {/* Expanded Panel View */}
                <div
                  ref={(el) => { expandedRefs.current[idx] = el; }}
                  className="capabilities-expanded absolute inset-0 py-8 pr-8 pl-[96px] flex flex-row gap-6 lg:gap-8 items-center lg:items-stretch h-full w-full"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    visibility: idx === 0 ? "visible" : "hidden",
                  }}
                >
                  {/* Left Content Column */}
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex flex-col">
                      {/* Title */}
                      <h3 className="text-white font-semibold text-[24px] leading-[32px] tracking-[-0.015em] mb-3 font-sans">
                        {item.title}
                      </h3>
                      {/* Description */}
                      <p className="text-white/65 font-medium text-[14px] leading-[22px] max-w-[30rem] mb-6 font-sans">
                        {item.description}
                      </p>
                    </div>
                    {/* Explore Link */}
                    <div>
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-[14px] font-medium text-[#FF707C] hover:underline underline-offset-4 transition-all duration-150 font-sans"
                      >
                        Explore projects &rarr;
                      </a>
                    </div>
                  </div>
                  
                  {/* Right Visual Column */}
                  <div className="capabilities-visual w-[180px] lg:w-[300px] aspect-[4/5] bg-white/5 border border-white/12 rounded-2xl flex items-center justify-center p-4 lg:p-6 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 p-6 flex items-center justify-center">
                      {item.visual}
                    </div>
                  </div>
                </div>

                {/* Collapsed Panel View */}
                <div
                  ref={(el) => { collapsedRefs.current[idx] = el; }}
                  className="capabilities-collapsed absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between items-center py-8 select-none cursor-pointer hover:bg-white/[0.03] transition-colors duration-200"
                  style={{
                    borderRight: idx === 0 ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(255, 255, 255, 0)",
                    backgroundColor: idx === 0 ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0)",
                  }}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      const trigger = ScrollTrigger.getById("capabilities-pin");
                      if (trigger) {
                        const start = trigger.start;
                        const end = trigger.end;
                        const scrollPos = start + (end - start) * (idx / 3);
                        window.scrollTo({ top: scrollPos, behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {/* Number */}
                  <span className="rotated-num text-white/35 font-medium text-[14px] font-sans" style={{ color: idx === 0 ? "#FFFFFF" : "rgba(255, 255, 255, 0.35)" }}>
                    {item.num}
                  </span>
                  {/* Vertical rotated label */}
                  <span
                    className="rotated-label text-[12px] font-medium uppercase tracking-[0.12em] [writing-mode:vertical-lr] rotate-180 text-white/65 my-auto h-fit text-center whitespace-nowrap font-sans"
                    style={{ 
                      whiteSpace: "nowrap",
                      color: idx === 0 ? "#FF707C" : "rgba(255, 255, 255, 0.65)"
                    }}
                  >
                    {item.collapsedLabel}
                  </span>
                  {/* Spacer to keep balance */}
                  <div className="h-[14px]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
