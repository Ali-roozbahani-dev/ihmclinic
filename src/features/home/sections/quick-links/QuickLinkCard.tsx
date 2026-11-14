import Image from 'next/image';
import Link from 'next/link';
import type { QuickLink } from '../../data/quick-links.data';

interface QuickLinkCardProps {
  link: QuickLink;
  onClick: (title: string) => void;
}

export default function QuickLinkCard({ link, onClick }: QuickLinkCardProps) {
  const className =
    "relative min-w-0 animate-quick-card-float cursor-pointer overflow-hidden rounded-2xl border border-[#e5eee9] bg-white bg-[linear-gradient(150deg,#fff_0%,#f3fbf7_100%)] shadow-[0_8px_28px_rgba(18,69,48,0.09)] transition-shadow duration-200 ease-[ease] will-change-transform after:pointer-events-none after:absolute after:inset-3 after:rounded-2xl after:border after:border-[rgba(39,156,124,0.12)] after:content-[''] hover:shadow-[0_14px_34px_rgba(18,69,48,0.14)] hover:[animation-play-state:paused] focus-visible:outline-3 focus-visible:outline-offset-5 focus-visible:outline-[#006a4b] nth-2:[animation-delay:-1.2s] nth-3:[animation-delay:-2.4s] nth-4:[animation-delay:-3.6s] max-[760px]:rounded-[14px]";

  const content = (
    <Image
      className="relative z-1 block aspect-694/440 w-full object-cover"
      src={link.image}
      alt=""
      width={1000}
      height={1000}
    />
  );

  if (link.href) {
    return (
      <Link
        href={link.href}
        className={className}
        aria-label={`${link.title}؛ ${link.detail}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={className}
      type="button"
      onClick={() => onClick(link.title)}
      aria-label={`${link.title}؛ ${link.detail}`}
    >
      {content}
    </button>
  );
}
