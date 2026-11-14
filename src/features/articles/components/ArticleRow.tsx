import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react';
import type { Article } from '../types';

interface ArticleRowProps {
  article: Article;
  onOpen: (article: Article) => void;
}

export default function ArticleRow({ article, onOpen }: ArticleRowProps) {
  return (
    <article
      className={[
        'flex min-h-40 items-stretch gap-[22px] overflow-hidden rounded-2xl border border-[#e5eee9] bg-white',
        'shadow-[0_8px_28px_rgb(18_69_48/9%)] hover:shadow-[0_14px_34px_rgb(18_69_48/14%)]',
        '[transition:box-shadow_.2s_ease,transform_.2s_ease] motion-reduce:transition-none',
        'min-[761px]:max-[1100px]:min-h-[135px] min-[1400px]:min-h-[185px]',
        'max-[760px]:min-h-[145px] max-[760px]:gap-[13px] max-[760px]:rounded-[14px]',
        'max-[480px]:grid max-[480px]:grid-cols-[1fr_42px] max-[480px]:gap-0',
      ].join(' ')}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        width={240}
        height={145}
        className={[
          'aspect-[1.65] h-auto w-[27.5%] shrink-0 rounded-2xl object-cover',
          'max-[760px]:w-[30%] max-[760px]:rounded-[14px] max-[760px]:object-center',
          'max-[480px]:col-span-full max-[480px]:h-[175px] max-[480px]:w-full max-[480px]:aspect-auto',
        ].join(' ')}
      />

      <div
        className={[
          'min-w-0 flex-1 pt-5 pb-[17px]',
          'min-[761px]:max-[1100px]:py-3.5 max-[760px]:py-3 max-[480px]:p-4',
        ].join(' ')}
      >
        <h2 className="mb-[9px] text-[21px] leading-[1.7] font-extrabold min-[761px]:max-[1100px]:text-[19px] max-[760px]:text-base max-[480px]:text-[17px]">
          <button className="text-right" onClick={() => onOpen(article)}>
            {article.title}
          </button>
        </h2>
        <p
          className={[
            'mb-[17px] text-[13px] leading-loose text-[#4f4f4f]',
            'min-[761px]:max-[1100px]:text-xs max-[760px]:mb-2.5 max-[760px]:text-[11px] max-[760px]:leading-[1.9]',
            'max-[480px]:text-xs',
          ].join(' ')}
        >
          {article.summary}
        </p>
        <div className="flex flex-wrap items-center gap-[25px] text-xs font-semibold max-[760px]:gap-3 max-[760px]:text-[10px] max-[760px]:[&_svg]:w-4">
          <span className="flex items-center gap-[9px]">
            <CalendarDays size={20} strokeWidth={1.6} />
            <time dateTime="2026-09-13">۱۴۰۵/۰۶/۲۲</time>
          </span>
          <span className="flex items-center gap-[9px]">
            <Clock3 size={20} strokeWidth={1.6} />
            ۱۰ دقیقه مطالعه
          </span>
        </div>
      </div>

      <button
        className="ml-[9px] self-center rounded-full p-[18px] text-[#174c37] hover:bg-[#edf7f0] max-[760px]:ml-1 max-[760px]:p-[9px] max-[480px]:ml-[5px]"
        aria-label={`مطالعه ${article.title}`}
        onClick={() => onOpen(article)}
      >
        <ArrowLeft size={25} strokeWidth={2} />
      </button>
    </article>
  );
}
