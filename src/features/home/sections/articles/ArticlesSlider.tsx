'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { articleHighlights, type ArticleHighlight } from '../../data/articles.data';
import ArticleCard from './ArticleCard';

interface ArticlesSliderProps {
  onOpen: (article: ArticleHighlight) => void;
}

/** اسلایدر حلقه‌ای مقالات؛ لیست سه بار تکرار می‌شود تا loop روی ۳ اسلاید هم درست کار کند. */
export default function ArticlesSlider({ onOpen }: ArticlesSliderProps) {
  const [slider, setSlider] = useState<SwiperInstance | null>(null);

  return (
    <div className="relative px-[30px] max-[650px]:px-2">
      <button
        className="absolute top-[47%] -right-[30px] z-2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-[#cde3d4] text-[#00494b] max-[650px]:-right-7 max-[650px]:size-[34px]"
        type="button"
        aria-label="مقاله قبلی"
        onClick={() => slider?.slidePrev()}
      >
        <ChevronRight size={30} aria-hidden="true" />
      </button>
      <Swiper
        onSwiper={setSlider}
        className="px-[9px]! pt-3! pb-6!"
        loop={true}
        spaceBetween={22}
        slidesPerView={1}
        breakpoints={{
          700: { slidesPerView: 2, spaceBetween: 22 },
          1100: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {[...articleHighlights, ...articleHighlights, ...articleHighlights].map((article, index) => (
          <SwiperSlide key={`${article.id}-${index}`} className="h-auto!">
            <ArticleCard article={article} onOpen={onOpen} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="absolute top-[47%] -left-[30px] z-2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-[#cde3d4] text-[#00494b] max-[650px]:-left-7 max-[650px]:size-[34px]"
        type="button"
        aria-label="مقاله بعدی"
        onClick={() => slider?.slideNext()}
      >
        <ChevronLeft size={30} aria-hidden="true" />
      </button>
    </div>
  );
}
