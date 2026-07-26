'use client';

export default function SalesServices() {
  const checkIcon = (
    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff5c6a]/10 border border-[#ff5c6a]/30 text-[#ff5c6a] mt-0.5">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="stroke-current">
        <path d="M2 5l2.5 2.5L8 3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  return (
    <section 
      id="services" 
      data-nav-theme="light" 
      className="relative z-10 bg-[#F7F5F2] px-6 py-24 md:py-32 border-t border-[rgba(17,16,15,0.08)]"
    >
      <div className="mx-auto max-w-[1340px]">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p
            className="mb-4 text-[14px] font-medium uppercase tracking-[0.08em]"
            style={{ color: "#FF707C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What We Do
          </p>
          <h2
            className="mx-auto max-w-[48rem] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-[#11100F]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Two Services.<br />One Goal: More Revenue.
          </h2>
          <p
            className="mx-auto mt-6 max-w-2xl text-[14px] font-medium leading-[22px]"
            style={{
              color: "rgba(17, 16, 15, 0.65)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Whether you need a clear strategic roadmap or a full ongoing CRO partnership, we have a model built for your stage.
          </p>
        </div>

        {/* Service 1: Strategy Consultation */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center mt-12 lg:mt-20">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[12px] font-bold tracking-[0.10em] uppercase text-[#FF707C] mb-4">
              Service 01
            </span>
            <h3 
              className="text-[#11100F] font-semibold tracking-[-0.025em] text-[clamp(24px,3.6vw,42px)] leading-[1.15] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ecommerce Strategy Consultation
            </h3>
            <p className="text-[#11100F]/70 text-base leading-relaxed mb-8">
              A comprehensive deep-dive into your entire store ecosystem. We audit your UX, copy, funnel, and competitive landscape — then hand you a 90-day growth strategy you can actually execute.
            </p>
            
            <p className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#11100F]/40 mb-4">
              What's included
            </p>
            <ul className="flex flex-col gap-3.5 mb-10 w-full">
              {[
                { bold: "Ecommerce Store Audit", text: " — UX, design, navigation, product pages, cart, checkout" },
                { bold: "Copy Audit", text: " — Headlines, CTAs, product descriptions, email flows" },
                { bold: "Funnel Audit", text: " — Full customer journey from ad click to post-purchase" },
                { bold: "90-Day Growth Strategy", text: " — Prioritised roadmap with actionable quick wins" },
                { bold: "1× 60-min Strategy Call", text: " — Full walkthrough + Q&A on your roadmap" },
                { bold: "Written Recommendations Report", text: " — 30–60 page PDF deliverable" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15px] text-[#11100F]/70">
                  {checkIcon}
                  <span>
                    <strong>{item.bold}</strong>{item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative">
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center bg-[#ff5c6a] text-white rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm"
              >
                View Pricing
                <svg className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 bg-black/30"></div>
            </div>
          </div>

          {/* Visual card mockup */}
          <div className="w-full max-w-[500px] mx-auto lg:mx-0">
            <div className="rounded-[24px] border border-[rgba(17,16,15,0.08)] bg-white p-8 shadow-[0_32px_64px_rgba(17,16,15,0.08)] transition-transform duration-500 hover:translate-y-[-6px]">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[12px] font-bold text-[#11100F]/40 tracking-wider uppercase mb-1">Audit in progress</div>
                  <div className="text-[20px] font-extrabold text-[#11100F]">Your Store Report</div>
                </div>
                <div className="rounded-full bg-[#ff5c6a]/10 border border-[#ff5c6a]/20 px-3.5 py-1 text-[11px] font-bold text-[#ff5c6a] animate-pulse">
                  Live
                </div>
              </div>

              {/* Audit List items */}
              <div className="flex flex-col gap-2.5">
                {[
                  { name: "🏠 Homepage UX", status: "✓ Complete", green: true },
                  { name: "📄 Product Pages", status: "✓ Complete", green: true },
                  { name: "🛒 Cart & Checkout", status: "✓ Complete", green: true },
                  { name: "✍️ Copy & Messaging", status: "⚡ In Review", yellow: true },
                  { name: "📧 Email Flows", status: "→ Queued", muted: true },
                  { name: "📈 Funnel Analysis", status: "→ Queued", muted: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-4 py-3 bg-[#F7F5F2] border border-[rgba(17,16,15,0.04)] rounded-xl">
                    <span className="text-[13px] font-semibold text-[#11100F]">{item.name}</span>
                    <span className={`text-[12px] font-bold ${
                      item.green ? "text-green-600" : item.yellow ? "text-amber-500" : "text-[#11100F]/40"
                    }`}>{item.status}</span>
                  </div>
                ))}
              </div>

              {/* Priority finding callout box */}
              <div className="mt-6 p-4 bg-[#FF707C]/5 border border-[#FF707C]/20 rounded-xl">
                <div className="text-[12px] font-bold text-[#ff5c6a] mb-1">🚨 Priority Finding</div>
                <div className="text-[13px] text-[#11100F]/80 leading-relaxed font-medium">
                  Checkout abandonment at 78% — primary CTA above the fold is competing with 3 other CTAs.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2: CRO & A/B Testing */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center mt-24 lg:mt-32">
          
          {/* Visual card mockup (first on desktop) */}
          <div className="w-full max-w-[500px] mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="rounded-[24px] border border-[rgba(17,16,15,0.08)] bg-white p-8 shadow-[0_32px_64px_rgba(17,16,15,0.08)] transition-transform duration-500 hover:translate-y-[-6px]">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-[12px] font-bold text-[#11100F]/40 tracking-wider uppercase mb-1">Real Test · Live Shopify Client</div>
                  <div className="text-[20px] font-extrabold text-[#11100F]">A/B Test Results</div>
                </div>
                <div className="rounded-full bg-green-50 border border-green-200 px-3.5 py-1 text-[11px] font-bold text-green-600">
                  Winner ✓
                </div>
              </div>

              {/* AB metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col px-4.5 py-3.5 bg-[#F7F5F2] border border-[rgba(17,16,15,0.04)] rounded-xl">
                  <span className="text-[24px] font-extrabold text-[#11100F] tracking-tight">5.15%</span>
                  <span className="text-[11px] font-bold text-[#11100F]/40 mt-1 uppercase">Control CVR</span>
                  <span className="inline-flex self-start px-2 py-0.5 rounded-md bg-[#11100F]/5 text-[#11100F]/50 text-[10px] font-bold mt-2">Baseline</span>
                </div>
                
                <div className="flex flex-col px-4.5 py-3.5 bg-green-50/50 border border-green-100 rounded-xl">
                  <span className="text-[24px] font-extrabold text-green-600 tracking-tight">6.21%</span>
                  <span className="text-[11px] font-bold text-[#11100F]/40 mt-1 uppercase">Variant CVR</span>
                  <span className="inline-flex self-start px-2 py-0.5 rounded-md bg-green-100/50 text-green-700 text-[10px] font-bold mt-2">▲ +20.57% lift</span>
                </div>

                <div className="flex flex-col px-4.5 py-3.5 bg-[#F7F5F2] border border-[rgba(17,16,15,0.04)] rounded-xl">
                  <span className="text-[24px] font-extrabold text-[#11100F] tracking-tight">$55.29</span>
                  <span className="text-[11px] font-bold text-[#11100F]/40 mt-1 uppercase">Control AOV</span>
                </div>

                <div className="flex flex-col px-4.5 py-3.5 bg-green-50/50 border border-green-100 rounded-xl">
                  <span className="text-[24px] font-extrabold text-green-600 tracking-tight">$60.20</span>
                  <span className="text-[11px] font-bold text-[#11100F]/40 mt-1 uppercase">Variant AOV</span>
                  <span className="inline-flex self-start px-2 py-0.5 rounded-md bg-green-100/50 text-green-700 text-[10px] font-bold mt-2">▲ +8.89% lift</span>
                </div>
              </div>

              {/* Bottom results banners */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center px-4 py-3.5 bg-green-50/20 border border-green-100/50 rounded-xl">
                  <span className="text-[13px] font-semibold text-[#11100F]/75">Revenue per Visitor Lift</span>
                  <span className="text-[15px] font-bold text-green-600">+31.29%</span>
                </div>
                <div className="flex justify-between items-center px-4 py-3.5 bg-[#FF707C]/5 border border-[#FF707C]/15 rounded-xl">
                  <span className="text-[13px] font-semibold text-[#11100F]/75">Est. Additional Revenue</span>
                  <span className="text-[15px] font-bold text-[#ff5c6a]">+$159,858/mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (second on desktop, first on mobile) */}
          <div className="flex flex-col items-start text-left order-1 lg:order-2">
            <span className="text-[12px] font-bold tracking-[0.10em] uppercase text-[#FF707C] mb-4">
              Service 02
            </span>
            <h3 
              className="text-[#11100F] font-semibold tracking-[-0.025em] text-[clamp(24px,3.6vw,42px)] leading-[1.15] mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              CRO & A/B Testing for D2C Shopify & Shopify Plus Brands
            </h3>
            <p className="text-[#11100F]/70 text-base leading-relaxed mb-8">
              A fully managed, data-driven CRO programme for D2C Shopify and Shopify Plus brands. We research, design, run, and analyse experiments every month — you see the revenue lift.
            </p>
            
            <p className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#11100F]/40 mb-4">
              What's included
            </p>
            <ul className="flex flex-col gap-3.5 mb-10 w-full">
              {[
                { bold: "Ongoing CRO Audit", text: " — Continuous monitoring and new opportunity identification" },
                { bold: "ICE-Scored Hypothesis Bank", text: " — Research-backed, prioritised test backlog" },
                { bold: "Full Test Design & Implementation", text: " — We build, QA, and launch every test" },
                { bold: "Statistical Analysis & Reporting", text: " — Full test reports with actionable insights" },
                { bold: "Monthly Strategy Calls", text: " — Review results, plan next sprint, align on goals" },
                { bold: "Shopify Plus Compatible", text: " — Scripts, Checkout Extensibility, Custom Flows" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15px] text-[#11100F]/70">
                  {checkIcon}
                  <span>
                    <strong>{item.bold}</strong>{item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative">
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center bg-[#ff5c6a] text-white rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm"
              >
                View Pricing
                <svg className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 bg-black/30"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
