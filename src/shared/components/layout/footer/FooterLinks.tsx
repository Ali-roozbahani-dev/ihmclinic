import Link from 'next/link';
import { footerNavigation } from '@/shared/config/navigation';

export default function FooterLinks() {
  return (
    <nav className="flex min-w-0 flex-col items-start gap-[7px]" aria-label="دسترسی سریع فوتر">
      <h3 className="m-0 mb-[5px] text-[15px] font-bold">دسترسی سریع</h3>
      {footerNavigation.map(({ label, href }) => <Link key={href} href={href} className="text-[11px] font-normal text-white hover:text-white/80">{label}</Link>)}
    </nav>
  );
}
