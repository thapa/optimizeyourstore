interface PricingPackage {
  name: string;
  pricingModel: string;
  pricingSuffix: string;
  fit: string;
  cadence: string;
  summary: string;
  included: string[];
  ctaLabel: string;
  badge?: string;
  featured?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: "Launch Sprint",
    pricingModel: "Fixed fee",
    pricingSuffix: "scoped upfront",
    fit: "Greenfield builds",
    cadence: "6-10 weeks typical",
    summary:
      "For new landing pages, marketing sites, and product launches that need a senior team shipping from scope through launch.",
    included: [
      "Written scope doc and fixed-price estimate",
      "Architecture review before production code starts",
      "Weekly demos with shared GitHub access",
      "30-day post-launch stabilization",
    ],
    ctaLabel: "Plan a launch sprint",
  },
  {
    name: "Store Replatform",
    pricingModel: "Scoped cutover",
    pricingSuffix: "most common migration model",
    fit: "Platform moves",
    cadence: "Migration-led delivery",
    summary:
      "For teams moving platforms without breaking SEO, subscriptions, analytics, or launch-day revenue during the transition.",
    included: [
      "Migration runbook and redirect mapping",
      "Theme, content, and app dependency audit",
      "QA window plus launch-day cutover support",
      "Stabilization plan for the first 30 days",
    ],
    ctaLabel: "Talk through a migration",
    badge: "Most common",
    featured: true,
  },
  {
    name: "Embedded Retainer",
    pricingModel: "Monthly",
    pricingSuffix: "shared senior engineering time",
    fit: "Continuous shipping",
    cadence: "Ongoing partnership",
    summary:
      "For teams with an active backlog that want a technical partner shipping weekly, not a contractor they have to manage.",
    included: [
      "Dedicated Slack channel and weekly demos",
      "Priority access to senior engineering time",
      "Backlog planning and technical decision support",
      "Continuity across CRO, storefront, and product work",
    ],
    ctaLabel: "Explore a retainer",
  },
];

const packageInclusions = [
  "Written scope before build work begins",
  "Shared GitHub access from day one",
  "Clear weekly communication rhythm",
  "Handoff docs or stabilization plan at the end",
];

function CheckIcon({ featured = false }: { featured?: boolean }) {
  return (
    <span
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
        featured
          ? "border-white/12 bg-white/10 text-white"
          : "border-[#FF707C]/10 bg-[#FF707C]/10 text-[#FF707C]"
      }`}
    >
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="m5 12 4 4L19 6" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  return (
    <section data-nav-theme="light" className="relative z-10 overflow-hidden bg-[#F7F5F2] px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF707C]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1340px]">
        <div className="mx-auto max-w-[42rem] text-center">
          <p
            className="mb-4 text-sm font-medium uppercase tracking-[0.08em]"
            style={{ color: "#FF707C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            PRICING & PACKAGES
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-[#11100F]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Simple, transparent engagement models.
          </h2>
          <p
            className="mx-auto mt-4 max-w-[34rem] text-base font-medium leading-7 text-[#11100F]/65"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Fixed scopes where they make sense. Retainers where the work never really stops.
            No vague proposals, no hourly guessing, and no surprise change orders halfway through.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-[#11100F]/[0.08] bg-white p-1.5 shadow-[0_1px_2px_rgba(17,16,15,0.04),0_12px_24px_-16px_rgba(17,16,15,0.12)]">
            <span
              className="rounded-full bg-[#ff5c6a] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Fixed scopes
            </span>
            <span
              className="px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#11100F]/45"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ongoing retainers
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1110px] lg:mt-20">
          <div className="pointer-events-none absolute inset-x-6 top-14 hidden h-[calc(100%-5.5rem)] rounded-[24px] border border-[#11100F]/[0.06] bg-white shadow-[0_20px_40px_-28px_rgba(17,16,15,0.12)] lg:block" />

          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-end">
            {packages.map((item) => {
              const featured = item.featured;

              return (
                <article
                  key={item.name}
                  className={`relative flex h-full flex-col rounded-[24px] border p-8 transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 ${
                    featured
                      ? "border-white/12 text-white shadow-[0_24px_48px_-24px_rgba(255,92,106,0.42)] lg:-translate-y-6"
                      : "border-[#11100F]/[0.08] bg-white text-[#11100F] shadow-[0_1px_2px_rgba(17,16,15,0.04),0_16px_32px_-18px_rgba(17,16,15,0.12)] lg:translate-y-6"
                  }`}
                  style={
                    featured
                      ? {
                          background:
                            "radial-gradient(circle at top, rgba(255, 112, 124, 0.26), transparent 36%), #1A0E10",
                        }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${
                        featured
                          ? "border-white/12 bg-white/10 text-white/80"
                          : "border-[#11100F]/[0.08] bg-[#11100F]/[0.04] text-[#11100F]/60"
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.fit}
                    </span>

                    {item.badge ? (
                      <span
                        className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {item.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-8 flex flex-wrap items-end gap-x-3 gap-y-1">
                    <span
                      className={`text-[clamp(2.2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] ${
                        featured ? "text-white" : "text-[#11100F]"
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.pricingModel}
                    </span>
                    <span
                      className={`pb-1 text-sm font-medium ${
                        featured ? "text-white/65" : "text-[#11100F]/45"
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      /{item.pricingSuffix}
                    </span>
                  </div>

                  <h3
                    className={`mt-6 text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] ${
                      featured ? "text-white" : "text-[#11100F]"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`mt-4 text-sm font-medium leading-[24px] ${
                      featured ? "text-white/70" : "text-[#11100F]/65"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.summary}
                  </p>

                  <span
                    className={`mt-6 inline-flex self-start rounded-full border px-3 py-1.5 text-[12px] font-medium ${
                      featured
                        ? "border-white/12 bg-white/10 text-white/80"
                        : "border-[#11100F]/[0.08] bg-[#11100F]/[0.04] text-[#11100F]/75"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item.cadence}
                  </span>

                  <ul className="mt-8 space-y-3">
                    {item.included.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckIcon featured={featured} />
                        <span
                          className={`text-sm font-medium leading-[22px] ${
                            featured ? "text-white/78" : "text-[#11100F]/75"
                          }`}
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto inline-block self-start pt-8">
                    <a
                      href="#"
                      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm ${
                        featured ? "bg-[#FF707C]" : "bg-[#ff5c6a]"
                      }`}
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.ctaLabel} &rarr;
                    </a>
                    <div
                      className={`absolute -bottom-1 -right-1 h-1 w-1 rounded-[1px] ${
                        featured ? "bg-white/70" : "bg-black/30"
                      }`}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-[1110px] rounded-[24px] border border-[#11100F]/[0.08] bg-white p-6 shadow-[0_1px_2px_rgba(17,16,15,0.04),0_12px_24px_-16px_rgba(17,16,15,0.12)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr] lg:items-center">
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: "#FF707C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Every engagement includes
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {packageInclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span
                      className="text-sm font-medium leading-[22px] text-[#11100F]/75"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="mt-6 max-w-[38rem] text-sm font-medium leading-[22px] text-[#11100F]/65"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Scope changes are written down before the work changes. If something does not fit one
                of these packages, we will say that clearly before anything is quoted.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <p
                className="text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#11100F]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Need something in between?
              </p>
              <p
                className="mt-2 max-w-[26rem] text-sm font-medium leading-[22px] text-[#11100F]/65"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                We also quote audits, rescue work, and senior technical advisory after a short scoping
                call.
              </p>

              <div className="relative mt-6 inline-block">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-[#ff5c6a] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Book an intro call &rarr;
                </a>
                <div className="absolute -bottom-1 -right-1 h-1 w-1 rounded-[1px] bg-black/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
