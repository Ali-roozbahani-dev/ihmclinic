'use client';

import { useState } from 'react';
import Image from 'next/image';
import { quickLinkDestinations } from '@/shared/config/external-links';
import { quickLinks } from '../../data/quick-links.data';
import QuickLinkCard from './QuickLinkCard';
import QuickLinkDialog from './QuickLinkDialog';

export default function QuickLinksSection() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  function handleQuickLink(title: string) {
    const destination = quickLinkDestinations[title];

    if (destination) {
      window.location.assign(destination);
      return;
    }

    setSelectedTitle(title);
  }

  return (
    <section
      id="quick-links"
      className="relative isolate z-2 mx-auto -mt-[70px] max-w-[1370px] px-[25px] pb-[clamp(30px,5vw,65px)] max-[760px]:-mt-[45px] max-[760px]:px-[13px] max-[760px]:pb-[35px]"
      aria-label="دسترسی سریع"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-1 h-[clamp(70px,12vw,150px)] overflow-hidden max-[760px]:h-[85px]"
        aria-hidden="true"
      >
        <Image
          className="pointer-events-none absolute inset-0 block size-full translate-y-[15%] object-fill opacity-[0.42]"
          src="/images/shared/hero-wave-mint.png"
          alt=""
          decoding="async"
          width={2048}
          height={697}
        />
      </div>

      <div className="relative z-2 grid grid-cols-4 gap-[14px] rounded-[48px] border-8 border-white bg-white/97 px-4 py-3 shadow-[0_3px_15px_#0002] max-[760px]:grid-cols-2 max-[760px]:gap-[9px] max-[760px]:rounded-[25px] max-[760px]:border-[5px] max-[760px]:p-2">
        {quickLinks.map((link) => (
          <QuickLinkCard key={link.title} link={link} onClick={handleQuickLink} />
        ))}
      </div>

      {selectedTitle && <QuickLinkDialog title={selectedTitle} onClose={() => setSelectedTitle(null)} />}
    </section>
  );
}
