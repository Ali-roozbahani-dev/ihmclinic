'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { headerDestinations } from '@/shared/config/external-links';
import { mainNavigation } from '@/shared/config/navigation';
import HeaderActionDialog, { type HeaderAction } from './HeaderActionDialog';
import HeaderActions from './HeaderActions';
import HeaderBrand from './HeaderBrand';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();
  const [activeAction, setActiveAction] = useState<HeaderAction | null>(null);

  const handleAction = (action: HeaderAction) => {
    const destination = headerDestinations[action];

    if (destination) {
      window.location.assign(destination);
      return;
    }

    setActiveAction(action);
  };

  return (
    <header
      className={[
        'group/header relative z-20 bg-white',
        'font-[IRANSansX,Tahoma,sans-serif] font-medium',
        'h-auto min-h-21.5',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex h-full max-w-360 items-center',
          'min-h-21.5 max-[760px]:min-h-17.5',
          'gap-9 max-[1100px]:gap-5 max-[1000px]:gap-3',
          'px-6.5 max-[760px]:px-3.75 max-[480px]:px-2',
        ].join(' ')}
      >
        <HeaderBrand />

        <MainNav items={mainNavigation} currentPath={pathname} />

        <HeaderActions onAccountClick={() => handleAction('account')} />

        <MobileNav items={mainNavigation} currentPath={pathname} />
      </div>

      {activeAction && (
        <HeaderActionDialog
          action={activeAction}
          onClose={() => setActiveAction(null)}
        />
      )}
    </header>
  );
}
