'use client';

import { useState } from 'react';
import Lines from '../ui/Lines';
import { faq as content } from '@/content';

export default function SalesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section 
      id="faq" 
      data-nav-theme="light" 
      className="relative bg-[#F7F5F2] py-24 px-6 overflow-hidden border-t border-[rgba(17,16,15,0.08)]"
    >
      <div className="relative z-10 max-w-[1340px] mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
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

        {/* FAQs list */}
        <div className="max-w-[780px] mx-auto mt-12 flex flex-col">
          {(content.faqs ?? []).map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="border-b border-[rgba(17,16,15,0.08)]"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center py-6 gap-4 text-left font-semibold text-[16px] text-[#11100F] transition-colors duration-200 hover:text-[#ff5c6a]"
                  aria-expanded={isOpen}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {faq.question}
                  
                  {/* Plus/Minus Icon */}
                  <div className={`w-7 h-7 rounded-full bg-[rgba(17,16,15,0.04)] border border-[rgba(17,16,15,0.08)] flex items-center justify-center shrink-0 text-[#11100F]/60 transition-all duration-300 ${
                    isOpen ? 'bg-[#FF707C]/10 border-[#FF707C]/30 text-[#ff5c6a] rotate-45' : ''
                  }`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-current">
                      <path d="M6 1v10M1 6h10" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-[max-height,padding] duration-400 ease-in-out ${
                    isOpen ? 'max-h-[350px] pb-6' : 'max-h-0'
                  }`}
                >
                  <p 
                    className="text-[15px] font-medium leading-[26px] text-[#11100F]/65"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
