'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useModal } from '@/context/ModalContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { openModal } = useModal();

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

  const txt = isDark ? 'text-white' : 'text-[#11100F]';
  const txtMuted = isDark ? 'text-white/80' : 'text-[#11100F]/70';
  const hoverBg = isDark ? 'hover:bg-white/10 hover:text-white' : 'hover:bg-black/8 hover:text-black';
  const decoDot = isDark ? 'bg-white/70' : 'bg-black/30';

  return (
    <header
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between transition-all duration-500 ease-in-out
        ${scrolled
          ? `max-w-full w-full px-6 md:px-8 py-4 mt-0 rounded-none border-b shadow-[0_4px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl
             ${isDark ? 'bg-[#0E0B0D]/90 border-white/8 text-white' : 'bg-[#F7F5F2]/90 border-black/8 text-[#11100F]'}`
          : `w-full max-w-full px-6 py-4.5 mt-0 border-none rounded-none bg-transparent text-white
             md:max-w-[1340px] md:w-[calc(100%-48px)] md:px-6 md:py-3 md:mt-6 md:border md:rounded-full md:backdrop-blur-xl md:shadow-[0_10px_30px_rgba(116,49,58,0.15),inset_0_2px_4px_rgba(255,255,255,0.1)]
             ${isDark ? 'md:bg-white/10 md:border-white/20 md:text-white' : 'md:bg-black/5 md:border-black/10 md:text-[#11100F]'}`
        }
      `}
    >
      {/* Logo */}
      <div className="flex items-center relative">
        <Link href="#" className={`text-[18px] md:text-[22px] font-extrabold tracking-tight leading-none mt-1 transition-colors duration-300 ${txt}`}>
          Convertiq<span className="font-light">X</span><span className="text-[#FF707C]">.</span>
        </Link>
      </div>

      {/* Center Nav */}
      <nav className="hidden md:flex items-center gap-1.5 p-1.25 rounded-full transition-all duration-500 ease-in-out bg-transparent border border-transparent backdrop-blur-none shadow-none">
        <Link href="#services" className={`px-6 py-1.75 rounded-full font-medium text-[14px] transition-all duration-300 ${txtMuted} ${hoverBg}`}>
          Services
        </Link>
        <Link href="#pricing" className={`px-6 py-1.75 rounded-full font-medium text-[14px] transition-all duration-300 ${txtMuted} ${hoverBg}`}>
          Pricing
        </Link>
        <Link href="#results" className={`px-6 py-1.75 rounded-full font-medium text-[14px] transition-all duration-300 ${txtMuted} ${hoverBg}`}>
          Results
        </Link>
        <Link href="#faq" className={`px-6 py-1.75 rounded-full font-medium text-[14px] transition-all duration-300 ${txtMuted} ${hoverBg}`}>
          FAQ
        </Link>
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="relative ml-2">
          <button
            type="button"
            onClick={openModal}
            className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[12px] md:text-[14px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] active:scale-[0.98] shadow-sm block cursor-pointer
              ${isDark 
                ? 'bg-[#FF707C] text-white hover:bg-[#ff5c6a]' 
                : 'bg-[#ff5c6a] text-white hover:bg-[#FF707C]'
              }
            `}
          >
            Book Free Call
          </button>
          <div className={`w-1 h-1 rounded-[1px] absolute -bottom-1 -right-1 transition-colors duration-300 ${decoDot}`}></div>
        </div>
      </div>
    </header>
  );
}


