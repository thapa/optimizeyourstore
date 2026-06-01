export default function Services() {
  const introCallHref = "#";
  const services = [
    {
      id: "cro",
      title: "CRO & A/B Testing",
      description:
        "Funnel audits, qualitative research, and test roadmaps built around revenue, not vanity metrics. Then we ship the variants — no waiting on a separate dev team.",
      tags: ["Optimization", "Testing"],
      href: "/services/cro",
      icon: (
        <svg
          className="h-6 w-6 text-[#11100F]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 3.5s-3.5 3.4-3.5 7.8c0 2.8 2.2 4.7 3.5 4.7s3.5-1.9 3.5-4.7C15.5 6.9 12 3.5 12 3.5Z" />
          <path d="M10 14.5 7.5 17v2l1.8-.8 1.7-3.1" />
          <path d="M14 14.5 16.5 17v2l-1.8-.8-1.7-3.1" />
          <path d="M12 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
        </svg>
      ),
    },
    {
      id: "shopify",
      title: "Shopify & Shopify Plus",
      description:
        "Custom themes, B2B and subscription flows, Klaviyo integrations, and migrations. Built on a clean, performant foundation that won't fight you six months from now.",
      tags: ["Shopify Plus", "Headless"],
      href: "/services/shopify",
      icon: (
        <svg
          className="h-6 w-6 text-[#11100F]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4 8h11" />
          <path d="m11 5 4 3-4 3" />
          <path d="M20 16H9" />
          <path d="m13 13-4 3 4 3" />
        </svg>
      ),
    },
    {
      id: "wordpress",
      title: "WordPress & WooCommerce",
      description:
        "ACF-driven custom builds, performance optimization, and SEO-ready architecture. The kind of WordPress site that scales without becoming a plugin graveyard.",
      tags: ["WordPress", "WooCommerce"],
      href: "/services/wordpress",
      icon: (
        <svg
          className="h-6 w-6 text-[#11100F]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 7.5h12" />
          <path d="M6 12h8" />
          <path d="M6 16.5h10" />
          <circle cx="18" cy="12" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section data-nav-theme="light" className="relative z-10 bg-[#F7F5F2] px-6 py-24">
      <div className="mx-auto max-w-[1340px]">
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
            Built for stores that want results, not slide decks.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex h-full flex-col rounded-[24px] border border-[rgba(17,16,15,0.08)] bg-white p-6 shadow-[0_1px_2px_rgba(17,16,15,0.04),0_8px_24px_-12px_rgba(17,16,15,0.08)] transition-[border-color,box-shadow] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(17,16,15,0.16)] hover:shadow-[0_1px_2px_rgba(17,16,15,0.04),0_16px_32px_-12px_rgba(17,16,15,0.12)] md:p-8"
            >
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border"
                style={{
                  backgroundColor: "rgba(17, 16, 15, 0.04)",
                  borderColor: "rgba(17, 16, 15, 0.08)",
                }}
              >
                {service.icon}
              </div>

              <h3
                className="mb-3 text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#11100F]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="mb-6 text-[14px] font-medium leading-[22px]"
                style={{
                  color: "rgba(17, 16, 15, 0.65)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1.5 text-[12px] font-medium"
                    style={{
                      backgroundColor: "rgba(17, 16, 15, 0.04)",
                      borderColor: "rgba(17, 16, 15, 0.08)",
                      color: "rgba(17, 16, 15, 0.75)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={service.href}
                className="mt-6 inline-block text-[14px] font-medium no-underline hover:underline"
                style={{
                  color: "#FF707C",
                  textUnderlineOffset: "4px",
                  transition: "text-decoration-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <a
              href={introCallHref}
              className="inline-flex items-center justify-center bg-[#ff5c6a] text-white px-6 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Book an intro call &rarr;
            </a>
            <div className="w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 bg-black/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
