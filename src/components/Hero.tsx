import HeroWebGL from '@/components/HeroWebGL';

export default function Hero() {
  return (
    <section
      aria-label="[AGENCY NAME] agency hero"
      data-nav-theme="dark"
      className="relative w-full flex min-h-screen flex-col overflow-hidden animate-fadeIn"
      style={{
        background: 'radial-gradient(circle at 18% 22%, rgba(255, 112, 124, 0.08), transparent 40%), radial-gradient(circle at 82% 78%, rgba(255, 112, 124, 0.05), transparent 45%), #0E0B0D',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.5)'
      }}
    >
      <HeroWebGL />

      <div className="relative z-10 flex flex-col items-center justify-end flex-1 px-6 pt-[14vh] pb-28 md:pb-45 text-center">
        <div className="max-w-[1340px] mx-auto flex flex-col items-center">

          {/* Trust Badge */}
          <div
            className="inline-flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '8px 16px'
            }}
          >
            <div className="flex -space-x-1.5 text-white">
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M8 10l-3 2 3 2M16 10l3 2-3 2M13 8.5l-2 7" />
                </svg>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2s-4 4-4 9c0 3 2.5 4.5 4 4.5s4-1.5 4-4.5c0-5-4-9-4-9z" />
                  <path d="M9 15.5l-3 2.5v2.5l2-1 2-4" />
                  <path d="M15 15.5l3 2.5v2.5l-2-1-2-4" />
                  <path d="M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <path d="M6 9v6M18 9c0 3-4 5-4 5H9" />
                </svg>
              </div>
            </div>
            <span className="text-white/85 text-xs font-medium tracking-wide">Shopify Plus specialists &middot; 12+ years &middot; 50+ DTC brands</span>
          </div>

          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-[70px] font-semibold tracking-tight leading-[1.08] max-w-5xl mt-6">
            We don&apos;t build Shopify stores. We build conversion machines.
          </h1>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            AI-driven development meets data-backed CRO to turn your traffic into revenue, on every device, every visit.
          </p>

          <div className="mt-8 flex flex-row items-center gap-4 relative">
            <div className="relative">
              <button className="relative z-10 bg-[#FF707C] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm">
                Request a Proposal
              </button>
              <div className="absolute -bottom-1 -right-1 w-1 h-1 rounded-[1px] bg-white/70"></div>
            </div>

            <div className="relative">
              <button className="relative z-10 bg-transparent text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide border border-white/25 hover:border-white/50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm">
                See our work
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
