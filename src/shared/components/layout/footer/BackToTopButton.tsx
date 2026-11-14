'use client';

import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button className="mx-auto mt-3 flex items-center justify-center gap-1.5 
    rounded-full border font-bold border-[#a3cebc] bg-white px-3.25 py-1.25 
    text-[10px] text-primary-dark hover:text-white transition-colors hover:bg-primary-light 
    focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" 
    type="button" 
    onClick={scrollToTop} 
    aria-label="بازگشت به بالای صفحه"
    >
      <ArrowUp size={18} />
      <span>بازگشت به بالا</span>
    </button>
  );
}
