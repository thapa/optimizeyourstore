"use client";

import { useState, useEffect } from "react";

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 19L8 12L15 5" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5L16 12L9 19" />
  </svg>
);

const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

interface Review {
  quote: string;
  name: string;
  title: string;
  company: string;
  linkedin: string;
  initials: string;
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const reviewsData: Review[] = [
    {
      quote: "[Specific quote about scope clarity, the written PRD process, or how the engagement felt before code was written. ~25–40 words.]",
      name: "[Client Name]",
      title: "[Title]",
      company: "[Company]",
      linkedin: "[linkedin-url]",
      initials: "CN"
    },
    {
      quote: "[Specific quote naming the project type (migration / greenfield / retainer) and a concrete outcome — bug avoided, time saved, revenue impact. ~25–40 words.]",
      name: "[Client Name]",
      title: "[Title]",
      company: "[Company]",
      linkedin: "[linkedin-url]",
      initials: "CN"
    },
    {
      quote: "[Quote about ongoing communication — Slack channel, weekly demos, code ownership. The \"what working with them was like day to day\" angle. ~25–40 words.]",
      name: "[Client Name]",
      title: "[Title]",
      company: "[Company]",
      linkedin: "[linkedin-url]",
      initials: "CN"
    },
    {
      quote: "[Quote from a technical buyer (CTO, VP Eng, Tech Lead) about code quality, architecture decisions, or the handoff doc. ~25–40 words.]",
      name: "[Client Name]",
      title: "[Title]",
      company: "[Company]",
      linkedin: "[linkedin-url]",
      initials: "CN"
    },
    {
      quote: "[Quote about post-launch stabilization, retainer relationship, or returning for a second project. The \"we kept working with them\" angle. ~25–40 words.]",
      name: "[Client Name]",
      title: "[Title]",
      company: "[Company]",
      linkedin: "[linkedin-url]",
      initials: "CN"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = reviewsData.length - slidesPerView;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [slidesPerView, currentIndex, reviewsData.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviewsData.length - slidesPerView;
      if (prev === 0) return maxIndex;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviewsData.length - slidesPerView;
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slidesPerView]);

  const maxIndex = reviewsData.length - slidesPerView;
  const dotsCount = maxIndex >= 0 ? maxIndex + 1 : 0;

  return (
    <section data-nav-theme="light" className="relative bg-[#F7F5F2] py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-[1340px] mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-[36rem] mx-auto">
          <p 
            className="text-sm font-medium uppercase tracking-[0.08em] mb-4"
            style={{ color: "#FF707C", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            CLIENT FEEDBACK
          </p>
          <h2 
            className="text-[#11100F] font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What it's actually like to work with us.
          </h2>
          <p className="text-[#11100F]/65 text-base font-medium leading-6 max-w-[36rem]">
            Real quotes from real client engagements. No "5 stars" — the words speak for themselves.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-[1340px] mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Viewport Wrapper */}
          <div 
            className="overflow-hidden px-2 md:px-0 -mx-4 md:mx-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track */}
            <div 
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
            >
              {reviewsData.map((review, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 px-4 transition-all duration-300"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="h-full bg-white border border-[#11100F]/[0.08] rounded-3xl shadow-[0_1px_2px_rgba(17,16,15,0.04),0_8px_24px_-12px_rgba(17,16,15,0.08)] p-8 transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#11100F]/[0.16] hover:shadow-[0_1px_2px_rgba(17,16,15,0.04),0_16px_32px_-12px_rgba(17,16,15,0.12)] flex flex-col justify-between min-h-[300px]">
                    
                    {/* Review Quote */}
                    <div className="mb-6">
                      <p className="text-[#11100F] text-base font-medium leading-[26px] tracking-[-0.005em]">
                        "{review.quote}"
                      </p>
                    </div>

                    <div className="mt-auto">
                      {/* Hairline Divider */}
                      <hr className="border-[#11100F]/[0.08] mb-6" />

                      {/* Author Profile Details */}
                      <div className="flex items-center gap-4">
                        {/* 
                          When real photos are added:
                          - <img src="..." alt="[client name]" className="w-12 h-12 rounded-full object-cover border border-[#11100F]/[0.10]" />
                          - Replace initials div with the img element
                        */}
                        <div className="w-12 h-12 rounded-full bg-[#11100F]/[0.04] border border-[#11100F]/[0.10] flex items-center justify-center font-medium text-sm text-[#11100F] shrink-0 select-none">
                          {review.initials}
                        </div>

                        {/* Name and Designation */}
                        <div className="flex flex-col">
                          <h4 className="text-[#11100F] text-sm font-medium leading-5">
                            {review.name}
                          </h4>
                          <p className="text-[#11100F]/65 text-xs font-medium leading-[18px]">
                            {review.title} · {review.company}
                          </p>
                          <a 
                            href={review.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#FF707C] font-medium text-xs mt-1 transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:underline hover:underline-offset-4"
                          >
                            LinkedIn <ArrowUpRightIcon />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#11100F]/10 bg-white shadow-[0_1px_2px_rgba(17,16,15,0.04),0_8px_24px_-12px_rgba(17,16,15,0.08)] flex items-center justify-center text-[#11100F] transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#11100F]/20 hover:shadow-[0_1px_2px_rgba(17,16,15,0.04),0_12px_24px_-12px_rgba(17,16,15,0.12)] z-10 cursor-pointer hidden md:flex"
            aria-label="Previous reviews"
          >
            <ArrowLeftIcon />
          </button>
          <button 
            onClick={handleNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#11100F]/10 bg-white shadow-[0_1px_2px_rgba(17,16,15,0.04),0_8px_24px_-12px_rgba(17,16,15,0.08)] flex items-center justify-center text-[#11100F] transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#11100F]/20 hover:shadow-[0_1px_2px_rgba(17,16,15,0.04),0_12px_24px_-12px_rgba(17,16,15,0.12)] z-10 cursor-pointer hidden md:flex"
            aria-label="Next reviews"
          >
            <ArrowRightIcon />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-[6px] mt-8 z-10 relative">
            {[...Array(Math.max(0, dotsCount))].map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "w-6 h-2 rounded-full bg-[#FF707C]" 
                      : "w-2 h-2 rounded-full bg-[#11100F]/20 hover:bg-[#11100F]/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
