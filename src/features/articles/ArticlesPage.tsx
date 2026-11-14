'use client';

import { useState } from 'react';
import { toFaNumber } from '@/shared/lib/format-number';
import ArticleCategoryFilters from './components/ArticleCategoryFilters';
import ArticleDialog from './components/ArticleDialog';
import ArticleRow from './components/ArticleRow';
import ArticlesEmpty from './components/ArticlesEmpty';
import ArticlesSearchPanel from './components/ArticlesSearchPanel';
import { useArticleFilter } from './hooks/useArticleFilter';
import type { Article } from './types';
import HeroSection from '@/shared/components/ui/HeroSection';

export default function ArticlesPage() {
  const { query, setQuery, category, setCategory, visible, reset } = useArticleFilter();
  const [active, setActive] = useState<Article | null>(null);

  return (
    <div className="bg-white pb-[26px] text-[#111] [direction:rtl]">
      <HeroSection
      bgPositionClass='bg-center'
      bg_img='/assets/articles-hero.webp'
      src="/images/shared/hero-wave-mint.png" 
      ariaLabel="مقاله ها"
      />

      <div
        className={[
          'relative z-2 mx-auto mt-7 w-[calc(100%-88px)] max-w-[1180px]',
          'max-[760px]:mt-[22px] max-[760px]:w-[calc(100%-32px)] max-[480px]:w-[calc(100%-24px)]',
        ].join(' ')}
      >
        <ArticlesSearchPanel query={query} onQueryChange={setQuery} />
        <ArticleCategoryFilters category={category} onCategoryChange={setCategory} />

        <section className="grid gap-[clamp(16px,2vw,24px)]" aria-label="فهرست مقالات">
          <span className="sr-only" role="status">
            {toFaNumber(visible.length)} مقاله یافت شد
          </span>

          {visible.map((article) => (
            <ArticleRow key={article.id} article={article} onOpen={setActive} />
          ))}

          {visible.length === 0 && <ArticlesEmpty onReset={reset} />}
        </section>
      </div>

      <ArticleDialog article={active} onClose={() => setActive(null)} />
    </div>
  );
}
