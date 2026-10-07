'use client';

import { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { proof as content } from '@/content';

export default function SalesProof() {
  const { openModal } = useModal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const highlights = content.tests ?? [];

  // Keypress event handler for lightbox navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % highlights.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + highlights.length) % highlights.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, highlights.length]);

  return (
    <section 
      id="proof" 
      data-nav-theme="dark" 
      className="relative bg-[#0E0B0D] py-24 px-6 overflow-hidden border-t border-white/10"
    >
      <div className="relative z-10 max-w-[1340px] mx-auto w-full">
        {/* Header Block */}
        <div className="flex flex-col text-left mb-16 max-w-2xl">
          <p className="text-[#FF707C] text-sm font-medium tracking-[0.08em] uppercase mb-3">
            {content.eyebrow}
          </p>
          <h2 
            className="text-white font-semibold tracking-[-0.025em] text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {content.headline}<br />
            <span className="text-gradient">{content.headline_accent}</span>
          </h2>
          <p className="text-white/65 text-base font-medium leading-6">
            {content.intro}
          </p>
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className={`relative cursor-pointer rounded-[20px] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                item.best 
                  ? "border-green-500/20 bg-green-500/[0.03] hover:bg-green-500/[0.05]" 
                  : "border-white/5 bg-white/[0.03] hover:bg-white/[0.05]"
              }`}
            >
              {item.best && (
                <div className="absolute top-3 right-3 bg-green-500/15 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  BEST
                </div>
              )}
              {item.confidence && (
                <div className="absolute top-3 right-3 bg-green-500/15 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  {item.confidence}
                </div>
              )}
              
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">
                {item.label}
              </div>
              <div className={`text-[36px] font-extrabold tracking-tight leading-none mb-1 text-green-400`}>
                {item.metric}
              </div>
              <div className="text-[12px] font-bold text-white/40 mb-4">{item.sub}</div>
              
              <div className="border-t border-white/5 pt-3 flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-white/40">Rev/Visitor</span>
                  <span className="text-green-400 font-bold">{item.rpv}</span>
                </div>
                {content.projected_label && (
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="text-white/40">Projected/mo</span>
                    <span className="text-[#FF707C] font-bold">{content.projected_label}</span>
                    {/* <span className="text-[#FF707C] font-bold">{item.monthly}</span> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-[20px] border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:border-[#FF707C]/30 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
            >
              {/* Image Container with Watermark */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f0f4ff]">
                {/* Fallback rendering when image errors */}
                {imgErrors[idx] ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a1118] to-[#0e0b0d] flex flex-col items-center justify-center gap-2 relative">
                    <div className="text-[32px] font-extrabold text-green-400">{item.metric}</div>
                    <div className="text-[12px] font-bold text-white/40">CVR Lift · {item.label?.split(' · ')[1] || "A/B Test"}</div>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.caption}
                    onError={() => setImgErrors(prev => ({ ...prev, [idx]: true }))}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                )}
                
                {/* Watermark Overlay (matches .proof-img-wrap::after in reference) */}
                <div 
                  className="absolute inset-0 pointer-events-none z-10 select-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='380' height='180'%3E%3Ctext transform='rotate(-30 190 90)' x='30' y='105' font-family='Arial,sans-serif' font-size='14' font-weight='800' fill='rgba(0,0,0,0.22)' letter-spacing='2'%3E%C2%A9 ConvertiqX.com%3C/text%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                  }}
                />
                
                {/* Hover overlay button */}
                <div className="absolute inset-0 bg-[#0E0B0D]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center z-20">
                  <div className="bg-[#FF707C] text-[#0E0B0D] text-[13px] font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 transition-transform duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1.5 1.5h11v11m0-11L1.5 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    View Full Screenshot
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 flex justify-between items-center bg-white/[0.01] border-t border-white/[0.04]">
                <div className="text-[13px] font-bold text-white/80">{item.label}</div>
                <div className="text-[12px] font-bold bg-green-500/10 text-green-400 px-2.5 py-0.5 rounded-md border border-green-500/20">
                  {item.metric} CVR
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estimated Revenue Banner */}
        <div className="mt-16 p-8 md:p-10 bg-gradient-to-r from-[#FF707C]/10 to-white/[0.03] border border-[#FF707C]/15 rounded-[28px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">{content.banner_eyebrow}</span>
            <div className="text-[36px] font-extrabold tracking-tight text-white leading-none">{content.banner_amount}<span className="text-[#FF707C] text-[20px] font-bold">/mo</span></div>
            <span className="text-[14px] text-white/50 mt-1 font-medium">{content.banner_text}</span>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center bg-[#FF707C] text-[#0E0B0D] px-7 py-4 text-[15px] font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-lg hover:bg-[#ff5c6a] cursor-pointer"
            >
              {content.banner_cta}
              <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* <div className="absolute -bottom-1 -right-1 h-1 w-1 rounded-[1px] bg-white/70" /> */}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 opacity-100"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 -right-4 md:-right-12 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              &#x2715;
            </button>

            {/* Navigation Left */}
            <button 
              onClick={() => setLightboxIndex(prev => (prev !== null ? (prev - 1 + highlights.length) % highlights.length : null))}
              className="absolute left-[-20px] md:left-[-64px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-11 h-11 rounded-full flex items-center justify-center transition-colors select-none z-10"
            >
              &#8592;
            </button>

            {/* Lightbox Main Image/Block */}
            <div className="bg-white/5 rounded-2xl overflow-hidden max-h-[72vh] max-w-full flex items-center justify-center shadow-2xl relative">
              {imgErrors[lightboxIndex] ? (
                <div className="w-[80vw] max-w-[800px] aspect-[16/10] bg-gradient-to-br from-[#1a1118] to-[#0e0b0d] flex flex-col items-center justify-center gap-4 relative">
                  <div className="text-[64px] font-extrabold text-green-400">{highlights[lightboxIndex].metric}</div>
                  <div className="text-[16px] font-bold text-white/50">A/B Test: {highlights[lightboxIndex].label}</div>
                  <div className="text-[14px] text-[#FF707C] font-semibold">RPV Lift: {highlights[lightboxIndex].rpv} · Monthly Lift: {highlights[lightboxIndex].monthly}</div>
                </div>
              ) : (
                <img 
                  src={highlights[lightboxIndex].image} 
                  alt={highlights[lightboxIndex].caption} 
                  onError={() => setImgErrors(prev => ({ ...prev, [lightboxIndex]: true }))}
                  className="max-h-[72vh] max-w-full object-contain pointer-events-none select-none" 
                />
              )}
              {/* Lightbox Watermark Overlay (matches .lightbox-inner::after in reference) */}
              <div 
                className="absolute inset-0 pointer-events-none z-10 select-none rounded-2xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='260'%3E%3Ctext transform='rotate(-30 260 130)' x='40' y='148' font-family='Arial,sans-serif' font-size='22' font-weight='800' fill='rgba(0,0,0,0.22)' letter-spacing='3'%3E%C2%A9 ConvertiqX.com%3C/text%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}
              />
            </div>

            {/* Navigation Right */}
            <button 
              onClick={() => setLightboxIndex(prev => (prev !== null ? (prev + 1) % highlights.length : null))}
              className="absolute right-[-20px] md:right-[-64px] top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-11 h-11 rounded-full flex items-center justify-center transition-colors select-none z-10"
            >
              &#8594;
            </button>

            {/* Caption */}
            <div className="text-center text-[13px] md:text-[14px] text-white/70 max-w-[650px] mt-4 font-medium leading-relaxed px-4">
              {highlights[lightboxIndex].caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
