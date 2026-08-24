"use client";

import Link from "next/link";
import GrainOverlay from "./ui/GrainOverlay";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();
  return (
    // footer root with colors.dark-bg and data-nav-theme="dark"
    <footer 
      data-nav-theme="dark" 
      className="relative z-10 bg-[#0E0B0D] overflow-hidden"
    >
      {/* Subtle background noise overlay */}
      <GrainOverlay />

      {/* Container: max-w-[1340px] with px-6, section padding py-24 mobile scaling to py-32 desktop */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-6 py-24 md:py-32">
        
        {/* 4-column grid on desktop, gap-8 */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          
          {/* Column 1 — Brand + CTA */}
          <div className="flex flex-col items-start gap-6">
            {/* [AGENCY NAME] wordmark in colors.text-light */}
            <span className="text-[32px] font-semibold tracking-tight leading-[1.1] text-white uppercase font-sans select-none">
              [AGENCY NAME]
            </span>
            
            {/* Positioning sentence in colors.text-muted-light */}
            <p className="text-white/65 text-[14px] leading-relaxed max-w-[260px] font-sans">
              We build production systems on [STACK 1], [STACK 2], and [STACK 3] for teams shipping [VERTICAL 1] and [VERTICAL 2].
            </p>
            
            {/* Primary pink pill button: colors.primary */}
            <div className="relative inline-block mt-2">
              <button 
                type="button"
                onClick={openModal}
                className="inline-flex items-center justify-center bg-[#FF707C] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm select-none cursor-pointer"
              >
                Book an intro call
              </button>
              {/* Signature 4px offset dot in bg-white/70 */}
              <div className="w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 bg-white/70"></div>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col items-start">
            {/* Eyebrow label in colors.primary */}
            <span className="text-[#FF707C] text-[11px] font-medium tracking-[0.08em] uppercase mb-5 font-sans">
              SERVICES
            </span>
            <ul className="flex flex-col gap-y-3.5">
              {[
                "Greenfield build",
                "Platform migration",
                "Ongoing engineering",
                "Shopify Plus",
                "Next.js"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white hover:text-white/65 text-[14px] font-medium transition-colors duration-200 select-none cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Work */}
          <div className="flex flex-col items-start">
            {/* Eyebrow label in colors.primary */}
            <span className="text-[#FF707C] text-[11px] font-medium tracking-[0.08em] uppercase mb-5 font-sans">
              WORK
            </span>
            <ul className="flex flex-col gap-y-3.5">
              {[
                "Case studies",
                "Recent launches",
                "Our method",
                "Capabilities"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white hover:text-white/65 text-[14px] font-medium transition-colors duration-200 select-none cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Reach */}
          <div className="flex flex-col items-start gap-5">
            <div>
              {/* Eyebrow label in colors.primary */}
              <span className="text-[#FF707C] text-[11px] font-medium tracking-[0.08em] uppercase mb-5 block font-sans">
                REACH
              </span>
              <div className="flex flex-col gap-y-3.5">
                <a 
                  href="mailto:hello@convertiqx.com" 
                  className="text-white hover:text-white/65 text-[14px] font-medium transition-colors duration-200 font-sans"
                >
                  hello@convertiqx.com
                </a>
                <p className="text-white/65 text-[14px] leading-relaxed font-sans">
                  Shopify Plus Conversion Rate Optimization Specialists
                </p>
              </div>
            </div>

            {/* Social row below with 3 circular hairline buttons */}
            <div className="flex flex-row items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/arun-kumar786/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/12 rounded-full text-white/65 hover:text-white hover:border-white/25 transition-all duration-200" 
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a 
                href="#" 
                className="w-8 h-8 flex items-center justify-center border border-white/12 rounded-full text-white/65 hover:text-white hover:border-white/25 transition-all duration-200" 
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a 
                href="https://x.com/iam_arun06" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/12 rounded-full text-white/65 hover:text-white hover:border-white/25 transition-all duration-200" 
                aria-label="X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Bar */}
        <div className="mt-14">
          {/* Hairline Divider */}
          <div className="border-t border-white/12 w-full mb-6"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Left Copyright */}
            <span className="text-white/65 text-[13px] font-sans">
              © 2026 ConvertiqX. All rights reserved.
            </span>
            
            {/* Right Legal Links */}
            <div className="flex flex-row items-center gap-7">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "#" }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white/65 hover:text-white text-[13px] font-sans transition-colors duration-200 no-underline cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
