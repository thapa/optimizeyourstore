'use client';

import Link from "next/link";
import GrainOverlay from "../ui/GrainOverlay";

export default function SalesFooter() {
  return (
    <footer 
      data-nav-theme="dark" 
      className="relative z-10 bg-[#0E0B0D] overflow-hidden border-t border-white/10"
    >
      {/* Subtle background noise overlay */}
      <GrainOverlay />

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 py-20 md:py-28">
        
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 md:gap-8">
          
          {/* Column 1 — Brand + Tagline */}
          <div className="flex flex-col items-start gap-5">
            <span className="text-[20px] font-extrabold tracking-tight text-white font-sans select-none">
              Convertiq<span className="font-light">X</span><span className="text-[#FF707C]">.</span>
            </span>
            
            <p className="text-white/55 text-[14px] leading-relaxed max-w-[280px] font-sans font-medium">
              Data-driven CRO and ecommerce strategy for D2C Shopify and Shopify Plus brands that want consistent, compounding growth.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col items-start">
            <span className="text-[#FF707C] text-[11px] font-bold tracking-[0.08em] uppercase mb-5 font-sans">
              Services
            </span>
            <ul className="flex flex-col gap-y-3.5">
              {[
                { name: "Strategy Consultation", href: "#services" },
                { name: "CRO Retainer", href: "#services" },
                { name: "Pricing", href: "#pricing" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-[#FF707C] text-[14px] font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="flex flex-col items-start">
            <span className="text-[#FF707C] text-[11px] font-bold tracking-[0.08em] uppercase mb-5 font-sans">
              Company
            </span>
            <ul className="flex flex-col gap-y-3.5">
              {[
                { name: "About", href: "#" },
                { name: "Results", href: "#results" },
                { name: "FAQ", href: "#faq" },
                { name: "Privacy Policy", href: "/privacy" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-[#FF707C] text-[14px] font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-[#FF707C] text-[11px] font-bold tracking-[0.08em] uppercase mb-1 font-sans">
              Contact
            </span>
            <div className="flex flex-col gap-y-3">
              <a 
                href="https://calendar.app.google/A3gnRV3q6xhCi2oR8" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FF707C] text-[14px] font-medium transition-colors duration-200"
              >
                Book a Call
              </a>
              <a 
                href="mailto:hello@convertiqx.com" 
                className="text-white/70 hover:text-[#FF707C] text-[14px] font-medium transition-colors duration-200"
              >
                hello@convertiqx.com
              </a>
            </div>
            
            {/* Social icons */}
            <div className="flex flex-row items-center gap-3 pt-4">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/arun-kumar786/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/12 rounded-full text-white/50 hover:text-[#FF707C] hover:border-[#FF707C]/30 transition-all duration-200" 
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a 
                href="https://x.com/iam_arun06" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-white/12 rounded-full text-white/50 hover:text-[#FF707C] hover:border-[#FF707C]/30 transition-all duration-200" 
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
          <div className="border-t border-white/10 w-full mb-6"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
            <span className="text-white/40 text-[13px] font-sans font-medium">
              © 2026 ConvertiqX. All rights reserved.
            </span>
            <span className="text-white/40 text-[13px] font-sans font-medium">
              Built for D2C Shopify & Shopify Plus Brands
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
