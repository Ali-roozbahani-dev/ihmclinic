'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import type { NavItem } from '@/shared/config/navigation';

interface MobileNavProps {
  items: readonly NavItem[];
  currentPath: string;
}

const MOBILE_QUERY = '(max-width: 760px)';
const DEFAULT_TOP = 70;

const linkBase = [
  'whitespace-nowrap p-[13px] text-[11px] [transition:color_.15s]',
  'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2bb798]!',
].join(' ');

const linkIdle = 'font-medium hover:text-[#096342]!';
const linkCurrent = 'border-b-2 border-[#096342] pb-[6px] font-extrabold text-[#08704f]!';

/** منوی موبایل (≤760px): دکمه‌ی همبرگری + shadcn Sheet که زیر هدر باز می‌شود. */
export default function MobileNav({ items, currentPath }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(DEFAULT_TOP);

  // با بزرگ‌شدن صفحه از حالت موبایل، پنل باز نماند.
  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setOpen(false);
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  // پنل دقیقاً زیر لبه‌ی پایین هدر قرار می‌گیرد (هدر sticky نیست).
  const measureHeader = (trigger: HTMLElement) => {
    const bottom = trigger.closest('header')?.getBoundingClientRect().bottom ?? DEFAULT_TOP;
    setTop(Math.max(0, Math.round(bottom)));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={[
          'hidden bg-transparent text-[#00633e] max-[760px]:block',
          'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2bb798]!',
          // صفحات مرجع: منوی افقی جای همبرگری را می‌گیرد
          'group-data-[ref]/header:min-[650px]:max-[1100px]:hidden',
        ].join(' ')}
        aria-label={open ? 'بستن منو' : 'نمایش منو'}
        onClick={(event) => measureHeader(event.currentTarget)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </SheetTrigger>

      <SheetContent
        side="top"
        style={{ top }}
        overlayClassName="bg-transparent"
        className="max-h-[75vh] overflow-auto bg-white p-[15px] shadow-[0_8px_12px_#0002]"
      >
        <SheetTitle className="sr-only">منوی اصلی</SheetTitle>
        <nav aria-label="منوی اصلی" className="flex flex-col items-stretch gap-2.5">
          {items.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`${linkBase} ${currentPath === href ? linkCurrent : linkIdle}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
