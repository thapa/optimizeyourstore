'use client';

interface Review {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export default function SalesReviews() {
  const reviews: Review[] = [
    {
      quote: "Within 60 days of the full strategy audit, our checkout conversion rate went from 2.3% to 4.1%. The funnel audit alone paid for the service 10× over. I wish we'd done this two years ago.",
      name: "Sarah M.",
      role: "Founder, DTC Skincare Brand · Shopify Plus · $1M–$5M brand",
      initials: "S"
    },
    {
      quote: "We were spending $40k/month on Facebook ads and barely breaking even. After the CRO retainer, we went from 1.4% to 3.2% CVR — same ad spend, 2.3× the revenue. Genuinely game-changing.",
      name: "James R.",
      role: "CMO, Health & Supplements · Shopify Plus · $40k/mo ad spend",
      initials: "J"
    },
    {
      quote: "The copy audit completely changed how we communicate our product. New headlines, new CTA structure, new product descriptions — AOV jumped 28% in the first month after implementation.",
      name: "Kavya P.",
      role: "Director of Ecommerce, Fashion Brand · Shopify Plus",
      initials: "K"
    }
  ];

  return (
    <section 
      id="testimonials" 
      data-nav-theme="light" 
      className="relative bg-[#F7F5F2] py-24 px-6 overflow-hidden border-t border-[rgba(17,16,15,0.08)]"
    >
      <div className="relative z-10 max-w-[1340px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#FF707C] text-sm font-medium tracking-[0.08em] uppercase mb-3">
            Client Results
          </p>
          <h2 
            className="text-[#11100F] font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Brands That Trusted<br />
            the Process
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-[rgba(17,16,15,0.08)] rounded-[24px] shadow-[0_1px_2px_rgba(17,16,15,0.04),0_8px_24px_-12px_rgba(17,16,15,0.08)] p-8 md:p-10 transition-all duration-300 hover:translate-y-[-4px] hover:border-[rgba(17,16,15,0.16)] hover:shadow-[0_1px_2px_rgba(17,16,15,0.04),0_16px_32px_-12px_rgba(17,16,15,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FBBF24] text-[15px]">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p 
                  className="text-[15px] font-medium leading-[26px] text-[#11100F]/80 italic mb-8"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  "{review.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF707C] to-[#0E0B0D] flex items-center justify-center font-extrabold text-[13px] text-white shrink-0">
                  {review.initials}
                </div>
                
                <div className="flex flex-col text-left">
                  <h4 
                    className="text-[14px] font-bold text-[#11100F] leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {review.name}
                  </h4>
                  <span 
                    className="text-[12px] font-medium text-[#11100F]/45 mt-1 leading-normal"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
