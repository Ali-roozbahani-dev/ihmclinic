import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

interface HeroSectionProps {
  src: string;
  alt?: string;
  ariaLabel: string;
  bg_img?: string;
  bgPositionClass?: string;
}

export default function HeroSection({
  src,
  alt,
  ariaLabel,
  bg_img = '/images/shared/main-hero.webp',
  bgPositionClass,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[clamp(280px,31vw,420px)] overflow-hidden max-[760px]:h-[clamp(220px,58vw,290px)]"
      id="home"
      aria-label={ariaLabel}
    >
      <div
        className={cn(
          'absolute inset-0 bg-cover bg-top',
          bgPositionClass
        )}
        style={{ backgroundImage: `url("${bg_img}")` }}
        role="img"
        aria-label={ariaLabel}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 block h-[clamp(95px,15vw,185px)] w-full overflow-hidden max-[760px]:h-[clamp(72px,22vw,115px)]"
        aria-hidden="true"
      >
        <Image
          priority
          className="pointer-events-none absolute bottom-0 left-0 block size-full object-fill"
          src={src}
          alt={alt || ''}
          decoding="async"
          width={2048}
          height={697}
        />
      </div>
    </section>
  );
}


