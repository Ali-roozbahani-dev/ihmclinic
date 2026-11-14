import Image from 'next/image';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import type { ArticleHighlight } from '../../data/articles.data';

interface ArticleCardProps {
  article: ArticleHighlight;
  onOpen: (article: ArticleHighlight) => void;
}

export default function ArticleCard({ article, onOpen }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[25px] border border-[#e9e9e9] bg-white px-[17px] pt-[17px] pb-[15px] shadow-[0_7px_16px_#00000026]">
      <Image
        src={article.image}
        alt={article.title.replace('؛', '')}
        className="block aspect-[1.86] w-full rounded-[21px] object-cover"
        loading="lazy"
        width={1000}
        height={1000}
      />
      <div className="flex flex-1 flex-col px-2.5 pt-[17px] pb-px">
        <h3 className="text-[clamp(16px,1.5vw,23px)] leading-[1.75] font-bold text-[#111]">{article.title}</h3>
        <p className="mb-[22px] text-[clamp(13px,1.18vw,17px)] leading-[1.8] font-semibold text-[#191919]">
          {article.description}
        </p>
        <div className="mt-auto flex items-center justify-between text-[#626262]">
          <span className="inline-flex items-center gap-[9px] text-[14px]">
            <CalendarDays className="text-[#101010]" size={21} aria-hidden="true" />
            <span>{article.date}</span>
          </span>
          <button
            className="grid cursor-pointer place-items-center p-1.5 text-[#004f52]"
            type="button"
            aria-label={`نمایش توضیحات ${article.title}`}
            onClick={() => onOpen(article)}
          >
            <ArrowLeft size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
