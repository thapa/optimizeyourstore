const categories = [
  "Shopify Plus",
  "DTC Fashion",
  "Beauty & Skincare",
  "Home & Lifestyle",
  "Health & Wellness",
  "Supplements"
];

export default function SalesLogoMarquee() {
  const duplicatedCategories = [
    ...categories,
    ...categories,
    ...categories,
    ...categories,
  ];

  return (
    <section 
      data-nav-theme="dark" 
      className="relative z-10 py-6 md:py-8 w-full border-t border-white/5 border-b border-white/5" 
      style={{ backgroundColor: '#0E0B0D' }}
    >
      <div className="relative z-10 max-w-[1340px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 overflow-hidden">
          {/* Static label on the left */}
          <span className="text-[11px] font-semibold tracking-[0.10em] uppercase text-white/25 whitespace-nowrap shrink-0">
            Brands we've grown
          </span>
          
          {/* Vertical divider line */}
          <div className="hidden md:block w-[1px] h-5 bg-white/10 shrink-0" />
          
          {/* Infinite scrolling slider on the right */}
          <div className="relative flex-1 overflow-hidden">
            {/* Gradients to fade out edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#0E0B0D] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#0E0B0D] to-transparent z-10 pointer-events-none" />
            
            <div className="animate-marquee flex gap-12 md:gap-20 py-2">
              <div className="flex gap-12 md:gap-20 shrink-0">
                {duplicatedCategories.map((category, idx) => (
                  <span
                    key={`cat-1-${idx}`}
                    className="text-[14px] font-semibold tracking-[-0.01em] text-white/25 hover:text-white/55 transition-colors duration-200 whitespace-nowrap cursor-default"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-12 md:gap-20 shrink-0" aria-hidden="true">
                {duplicatedCategories.map((category, idx) => (
                  <span
                    key={`cat-2-${idx}`}
                    className="text-[14px] font-semibold tracking-[-0.01em] text-white/25 hover:text-white/55 transition-colors duration-200 whitespace-nowrap cursor-default"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
