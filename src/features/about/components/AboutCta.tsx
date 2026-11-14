
import Link from 'next/link';
import { CalendarDays, Clock3 } from 'lucide-react';

export default function AboutCta() {
  return (
    <section
      className={[
        'mx-auto mt-7 mb-6 flex w-[min(1180px,100%)] items-center gap-[25px] rounded-xl bg-primary-dark px-[30px] py-7 text-white',
        'max-[850px]:gap-[15px] max-[850px]:px-[18px] max-[850px]:py-[22px]',
        'max-[760px]:w-[calc(100%-32px)]',
        'max-[540px]:grid max-[540px]:grid-cols-[36px_minmax(0,1fr)] max-[540px]:gap-x-3 max-[540px]:gap-y-4 max-[540px]:px-4 max-[540px]:py-5',
      ].join(' ')}
    >
      <CalendarDays
        aria-hidden="true"
        strokeWidth={1.5}
        className="size-[42px] shrink-0 max-[540px]:size-[32px]"
      />

      <div className="min-w-0 flex-1">
        <h2 className="mb-2 text-[19px] leading-relaxed max-[850px]:text-[15px] max-[540px]:mb-1 max-[540px]:text-[13px]">
          برای دریافت نوبت یا مشاوره با ما در ارتباط باشید
        </h2>

        <p className="text-[13px] text-[#b8cee5] max-[540px]:text-[11px]">
          ما آماده پاسخگویی به شما هستیم
        </p>
      </div>

      <div className="col-span-2 flex items-center gap-3 max-[540px]:w-full">
        <Link
          href="/doctors"
          className={[
            'rounded-[7px] bg-white px-[35px] py-3 text-center text-[13px] whitespace-nowrap text-[#244b76]',
            'max-[850px]:px-[22px] max-[850px]:py-[11px]',
            'max-[540px]:flex-1 max-[540px]:py-3 max-[540px]:text-[12px]',
          ].join(' ')}
        >
          رزرو نوبت
        </Link>

        <Link
          href="/contact"
          aria-label="تماس با درمانگاه"
          className="grid size-[42px] shrink-0 place-items-center rounded-full border border-[#bdd0e6] max-[540px]:size-[42px]"
        >
          <Clock3 size={21} />
        </Link>
      </div>
    </section>
  );
}
