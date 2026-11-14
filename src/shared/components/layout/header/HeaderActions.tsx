import Link from 'next/link';
import { HeartHandshake, UserRound } from 'lucide-react';

interface HeaderActionsProps {
  onAccountClick: () => void;
}

export default function HeaderActions({ onAccountClick }: HeaderActionsProps) {
  return (
    <div
      className={[
        'flex shrink-0 items-center gap-[18px] max-[1000px]:gap-2 max-[760px]:mr-auto',
        // صفحات مرجع
        'group-data-[ref]/header:gap-[15px]',
        'group-data-[ref]/header:min-[650px]:max-[1100px]:mr-0 group-data-[ref]/header:min-[650px]:max-[1100px]:gap-2.5',
        'group-data-[ref]/header:max-[649px]:gap-1',
      ].join(' ')}
    >
      <button
        type="button"
        className={[
          'flex items-end gap-2 rounded-[50%] bg-transparent p-1.75 text-[#00633e]',
          'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-accent!',
          'group-data-ref/header:max-[649px]:p-1',
        ].join(' ')}
        onClick={onAccountClick}
        aria-label="ورود کاربران"
        title="ورود کاربران"
      >
        <span className='hidden lg:block text-[14px]'>ورود کاربران</span>
        <UserRound size={25} strokeWidth={1.7} aria-hidden="true" />
      </button>

      <Link
        href="/charity"
        className={[
          'flex items-center gap-2 rounded-[30px] bg-[#05623f] text-white!',
          'px-[19px] py-2.5 text-[12px] font-bold',
          'max-[760px]:px-2.5 max-[760px]:py-2 max-[760px]:text-[11px]',
          'max-[410px]:p-[7px] max-[410px]:text-[10px]',
          'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#2bb798]!',
          // صفحات مرجع
          'group-data-[ref]/header:px-[17px] group-data-[ref]/header:py-2 group-data-[ref]/header:text-[12px] group-data-[ref]/header:font-normal',
          'group-data-[ref]/header:min-[650px]:max-[1100px]:px-[13px] group-data-[ref]/header:min-[650px]:max-[1100px]:text-[11px]',
          'group-data-[ref]/header:max-[649px]:px-[9px] group-data-[ref]/header:max-[649px]:py-[7px] group-data-[ref]/header:max-[649px]:text-[10px]',
        ].join(' ')}
      >
        <HeartHandshake
          size={17}
          aria-hidden="true"
          className="max-[760px]:hidden group-data-[ref]/header:min-[650px]:max-[1100px]:block"
        />
        <span>کمک به خیریه</span>
      </Link>
    </div>
  );
}
