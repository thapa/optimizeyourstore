import { ReactNode } from 'react';

interface Problem {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function SalesProblem() {
  const problems: Problem[] = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff5c6a]">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "You're paying for sessions that don't pay you back. Every visitor you buy has a cost",
      description:
        "your store can't convert them profitably, more ad spend just scales the loss.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff5c6a]">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      ),
      title: "Your funnel has hidden drop-off points",
      description:
        "Most brands don't know where exactly they're losing customers — product page? Cart? Checkout? A funnel audit reveals the exact points bleeding your revenue.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff5c6a]">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Your copy doesn't close the sale",
      description:
        "Weak headlines, unclear value props, and misaligned CTAs silently kill conversions. A copy audit rewrites the moments that matter most to your buyer journey.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff5c6a]">
          <path d="M6 3h12" />
          <path d="M12 3v7" />
          <path d="M9 10h6" />
          <path d="M8.5 10L4 18.5a2 2 0 0 0 1.7 2.5h12.6a2 2 0 0 0 1.7-2.5L15.5 10z" />
        </svg>
      ),
      title: "You're guessing instead of testing. Changes shipped on gut feel can quietly cost you revenue",
      description:
        "and you'd never know which ones did.",
    },
  ];

  return (
    <section data-nav-theme="light" className="relative z-10 bg-[#F7F5F2] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1340px]">
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <p
            className="mb-4 text-[14px] font-medium uppercase tracking-[0.08em]"
            style={{ color: "#FF707C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The Revenue Problem
          </p>
          <h2
            className="mx-auto max-w-[70rem] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.2] tracking-[-0.025em] text-[#11100F]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            You don't have a traffic problem.<br /> You have a session economics problem.
          </h2>
          <p
            className="mx-auto max-w-2xl text-[14px] font-medium leading-[22px] mt-6"
            style={{
              color: "rgba(17, 16, 15, 0.65)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Most ecommerce brands pour budget into paid traffic while ignoring the silent conversion killers on their own store — Cut, or cite a source you can defend.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[24px] border border-[rgba(17,16,15,0.08)] bg-white p-8 md:p-10 shadow-[0_1px_2px_rgba(17,16,15,0.04),0_8px_24px_-12px_rgba(17,16,15,0.08)] transition-[border-color,box-shadow] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(17,16,15,0.16)] hover:shadow-[0_1px_2px_rgba(17,16,15,0.04),0_16px_32px_-12px_rgba(17,16,15,0.12)]"
            >
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border text-[20px]"
                style={{
                  backgroundColor: "rgba(17, 16, 15, 0.04)",
                  borderColor: "rgba(17, 16, 15, 0.08)",
                }}
              >
                {problem.icon}
              </div>

              <h3
                className="mb-3 text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#11100F]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {problem.title}
              </h3>
              
              <p
                className="text-[14px] font-medium leading-[22px]"
                style={{
                  color: "rgba(17, 16, 15, 0.65)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
