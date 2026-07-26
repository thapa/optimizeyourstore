"use client";

interface StatCardProps {
  numberValue: string;
  numberAccent: string;
  accentNeedsSpace?: boolean;
  title: string;
  description: string;
  footnote: string;
}

export default function Stats() {
  const statsData: StatCardProps[] = [
    {
      numberValue: "50",
      numberAccent: "+",
      title: "Production launches",
      description: "Shipped to production across SaaS, e-commerce, and internal tools — every codebase handed off, none abandoned mid-build.",
      footnote: "as of June 2026"
    },
    {
      numberValue: "8",
      numberAccent: "wks",
      accentNeedsSpace: true,
      title: "Average ship time",
      description: "From kickoff to launch on greenfield builds. Migration timelines vary by scope and are scoped per project.",
      footnote: "across last 12 projects"
    },
    {
      numberValue: "12",
      numberAccent: "+",
      title: "Years shipping",
      description: "Building production web apps with the same core team — consistent ownership, no agency churn between projects.",
      footnote: "verifiable on request"
    }
  ];

  return (
    <section data-nav-theme="dark" className="relative bg-[#0E0B0D] py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-[1340px] mx-auto w-full">
        {/* Header Block */}
        <div className="flex flex-col text-left mb-16">
          <p className="text-[#FF707C] text-sm font-medium tracking-[0.08em] uppercase mb-3">
            BY THE NUMBERS
          </p>
          <h2 
            className="text-white font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] max-w-[36rem] leading-[1.2] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What we've shipped, measured honestly.
          </h2>
          <p className="text-white/65 text-base font-medium leading-6 max-w-[28rem]">
            Verifiable numbers, with sources where they matter. No vanity metrics, no inflated claims.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/[0.04] border border-white/[0.08] rounded-[24px] backdrop-blur-[24px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.4)] p-8 md:p-10 transition-colors duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/[0.06] hover:border-white/[0.16] flex flex-col justify-between"
            >
              <div>
                {/* Big number */}
                <div className="text-white font-semibold tracking-[-0.04em] text-[clamp(4rem,7vw,6rem)] leading-none mb-6">
                  <span>{stat.numberValue}</span>
                  <span className={`text-[#FF707C]${stat.accentNeedsSpace ? " ml-2" : ""}`}>
                    {stat.numberAccent}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-white text-lg font-semibold leading-6 tracking-[-0.01em] mb-3">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 text-sm font-medium leading-[22px] mb-5">
                  {stat.description}
                </p>
              </div>

              {/* Footnote */}
              <div>
                <hr className="border-white/[0.08] mb-4" />
                <p className="text-white/45 text-xs font-medium tracking-[0.02em]">
                  {stat.footnote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
