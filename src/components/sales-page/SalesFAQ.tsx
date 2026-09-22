'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function SalesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What monthly traffic do I need for CRO to work?",
      answer: "We recommend a minimum of 20,000 monthly visitors and ~500 monthly transactions to run statistically valid A/B tests. That said, the strategy consultation service works at any traffic level — it doesn't require testing volume to deliver value. For brands under the traffic threshold, the audit package is the right starting point."
    },
    {
      question: "Do you work with Shopify Plus specifically?",
      answer: "Yes. We work with both standard Shopify and Shopify Plus. For Plus brands, we have full experience with Checkout Extensibility, Shopify Functions, custom checkout flows, and personalisation using Shopify's native tools. Shopify Plus unlocks significantly more testing surface area than standard Shopify."
    },
    {
      question: "How quickly will I see results?",
      answer: "The audit alone typically surfaces quick-win fixes within the first week. First tests typically go live within 2 weeks of onboarding. Results timing depends on your traffic — the Diagnostic tells you exactly how long a test needs on your store of implementation. For the CRO retainer, we aim to have the first tests live within 2 weeks of onboarding, with results reportable within 4–6 weeks depending on traffic volume."
    },
    {
      question: "Can I start with the audit and move to the retainer later?",
      answer: "Absolutely — and many clients do exactly this. The Full Strategy Package is actually a great primer before starting the retainer because it gives us (and you) a deep understanding of your store before we start testing. Clients who do both typically see faster results in the retainer because we skip the discovery phase and go straight into high-priority tests."
    },
    {
      question: "What testing tools do you use?",
      answer: "We primarily use Varify.io and Intelligems for A/B testing on Shopify. For analytics, we work with GA4, Shopify Analytics, Hotjar/Microsoft Clarity for heatmaps, and Littledata for accurate attribution. Tool selection depends on your existing stack — we'll recommend what makes sense for your store."
    },
    {
      question: "What's your process if a test loses?",
      answer: "Losses are just as valuable as wins — they teach us what your audience doesn't respond to, which sharpens every subsequent test. A failed test means we controlled the risk (it never went live as a permanent change), documented the insight, and updated the strategy accordingly. We've found that teams with the highest test velocity, including losses, see the fastest long-term CVR growth."
    },
    {
      question: "Is there a minimum contract length?",
      answer: "CRO retainers require a 3-month minimum. This isn't arbitrary — the first month is onboarding and audit refinement, Align with the one timeline used elsewhere on the page (2-week launch, results depend on traffic), and month three is when we start compounding wins from the data collected. Shorter engagements don't give the testing programme enough runway to show meaningful results."
    },
    {
      question: "Does the Diagnostic cost count toward the retainer?",
      answer: "Yes — start within 30 days and the full $1,497 is credited."
    },
    {
      question: "What if my traffic is too low to test?",
      answer: "The Diagnostic tells you. If you're below threshold, you get a prioritized implementation roadmap instead of a test plan — so you're not wasting months on underpowered tests."
    }
  ];

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
            FAQ
          </p>
          <h2 
            className="text-[#11100F] font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Questions You'll<br />
            Probably Have
          </h2>
        </div>

        {/* FAQs list */}
        <div className="max-w-[780px] mx-auto mt-12 flex flex-col">
          {faqs.map((faq, idx) => {
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
