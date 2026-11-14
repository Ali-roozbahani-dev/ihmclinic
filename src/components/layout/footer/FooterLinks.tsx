
import Link from 'next/link';
import { footerNavigation } from '@/shared/config/navigation';

export default function FooterLinks() {
  return (
    <nav
      className="flex min-w-0 flex-col items-start gap-2"
      aria-label="دسترسی سریع فوتر"
    >
      <h3 className="m-0 mb-2 text-sm font-bold">
        دسترسی سریع
      </h3>

      {footerNavigation.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className="text-[11px] leading-6 text-white/90 transition-colors hover:text-white"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

