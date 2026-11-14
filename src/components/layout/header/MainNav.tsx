import Link from 'next/link';
import type { NavItem } from '@/shared/config/navigation';

interface MainNavProps {
  items: readonly NavItem[];
  currentPath: string;
}

// موبایل (≤760px): منوی دسکتاپ مخفی است و MobileNav (shadcn Sheet) جای آن را می‌گیرد.
const navClasses = [
  'mx-auto flex items-center gap-[clamp(10px,1.5vw,24px)] max-[760px]:hidden',
  // صفحات مرجع: منوی افقی و فشرده (به‌جای همبرگری) تا ۶۵۰px
  'group-data-[ref]/header:gap-[23px]',
  'group-data-[ref]/header:min-[650px]:max-[1100px]:static group-data-[ref]/header:min-[650px]:max-[1100px]:flex',
  'group-data-[ref]/header:min-[650px]:max-[1100px]:flex-row group-data-[ref]/header:min-[650px]:max-[1100px]:items-center',
  'group-data-[ref]/header:min-[650px]:max-[1100px]:gap-3 group-data-[ref]/header:min-[650px]:max-[1100px]:p-0',
  'group-data-[ref]/header:min-[650px]:max-[1100px]:max-h-none group-data-[ref]/header:min-[650px]:max-[1100px]:shadow-none',
].join(' ');

const linkBase = [
  'whitespace-nowrap [transition:color_.15s]',
  'text-[13px] max-[1100px]:text-[11px]',
  'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2bb798]!',
  // صفحات مرجع
  'group-data-[ref]/header:font-normal group-data-[ref]/header:text-[13px]',
  'group-data-[ref]/header:min-[801px]:max-[1100px]:text-[12px] group-data-[ref]/header:min-[650px]:max-[800px]:text-[11px]',
  'group-data-[ref]/header:min-[650px]:max-[1100px]:p-0',
].join(' ');

const linkIdle = 'font-medium hover:text-[#096342]!';

const linkCurrent = [
  'border-b-2 border-[#096342] pb-[6px] font-extrabold text-[#08704f]!',
  'group-data-[ref]/header:min-[650px]:max-[1100px]:pb-[5px]',
].join(' ');

export default function MainNav({ items, currentPath }: MainNavProps) {
  return (
    <nav id="header-main-navigation" className={navClasses} aria-label="منوی اصلی">
      {items.map(({ label, href }) => (
        <Link
          key={label}
          className={`${linkBase} ${currentPath === href ? linkCurrent : linkIdle}`}
          href={href}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
