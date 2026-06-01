'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);

    const detectTheme = () => {
      const PROBE_Y = 48; // y-coordinate to sample behind the header
      const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]');
      let theme = 'dark';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= PROBE_Y && rect.bottom > PROBE_Y) {
          theme = section.dataset.navTheme ?? 'dark';
        }
      });
      setIsDark(theme === 'dark');
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      detectTheme();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null; // Prevent SSR mismatch
  }

  const txt = isDark ? 'text-white' : 'text-black';
  const txtMuted = isDark ? 'text-white/80' : 'text-black/70';
  const hoverBg = isDark ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-black/8 hover:text-black';
  const activePill = isDark
    ? 'bg-white/30 text-white border-white/20'
    : 'bg-black/10 text-black border-black/10';
  const navPillBg = scrolled
    ? isDark
      ? 'bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.1)]'
      : 'bg-black/5 border border-black/10 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
    : 'bg-transparent border border-transparent backdrop-blur-none shadow-none';
  const decoDot = isDark ? 'bg-white/70' : 'bg-black/30';

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full flex items-center justify-between
        ${scrolled
          ? 'max-w-384 px-8 py-6 bg-transparent border-transparent backdrop-blur-none shadow-none transition-[max-width,padding,margin] duration-500 ease-in-out'
          : 'max-w-[1340px] px-6 py-3 mt-6 bg-white/10 border border-white/20 backdrop-blur-xl rounded-full shadow-[0_10px_30px_rgba(116,49,58,0.15),inset_0_2px_4px_rgba(255,255,255,0.1)] transition-all duration-500 ease-in-out'
        }
      `}
    >
      {/* Logo */}
      <div className="flex items-center relative">
        <span className={`text-[22px] font-bold tracking-tight leading-none mt-1 transition-colors duration-300 ${txt}`}>[AGENCY NAME]</span>
      </div>

      {/* Center Nav */}
      <nav className={`flex items-center gap-1.5 p-1.25 rounded-full transition-all duration-500 ease-in-out ${navPillBg}`}>
        <Link href="#" className={`px-6 py-1.75 rounded-full font-semibold text-[14px] transition-all duration-300 border shadow-md ${activePill}`}>
          Work
        </Link>
        <Link href="#" className={`px-6 py-1.75 rounded-full font-medium text-[14px] transition-all duration-300 ${txtMuted} ${hoverBg}`}>
          Services
        </Link>
        <Link href="#" className={`px-6 py-1.75 rounded-full font-medium text-[14px] transition-all duration-300 ${txtMuted} ${hoverBg}`}>
          Process
        </Link>
        <Link href="#" className={`px-6 py-1.75 rounded-full font-medium text-[14px] transition-all duration-300 ${txtMuted} ${hoverBg}`}>
          About
        </Link>
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="relative ml-2">
          <button className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm
            ${isDark 
              ? 'bg-[#FF707C] text-white' 
              : 'bg-[#ff5c6a] text-white'
            }
          `}>
            Book a Call
          </button>
          <div className={`w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 transition-colors duration-300 ${decoDot}`}></div>
        </div>
      </div>
    </header>
  );
}


