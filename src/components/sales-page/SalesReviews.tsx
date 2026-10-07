'use client';

import Lines from '../ui/Lines';
import { testimonials as content } from '@/content';

export default function SalesReviews() {
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
            {content.eyebrow}
          </p>
          <h2 
            className="text-[#11100F] font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <Lines text={content.headline} />
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {(content.reviews ?? []).map((review, idx) => (
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
                  {review.name?.charAt(0)}
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
