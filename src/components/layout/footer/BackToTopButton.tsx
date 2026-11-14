'use client';

import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button className="mx-auto mt-3 flex items-center justify-center gap-[6px] rounded-full border border-[#a3cebc] bg-transparent px-[13px] py-[5px] text-[10px] text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" type="button" onClick={scrollToTop} aria-label="بازگشت به بالای صفحه">
      <ArrowUp size={18} />
      <span>بازگشت به بالا</span>
    </button>
  );
}
