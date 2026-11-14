'use client';

import { useState } from 'react';
import { articleHighlights, type ArticleHighlight } from '../../data/articles.data';
import ArticleCard from './ArticleCard';
import ArticleDialog from './ArticleDialog';
import ArticlesSlider from './ArticlesSlider';

export default function ArticlesSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeArticle, setActiveArticle] = useState<ArticleHighlight | null>(null);

  return (
    <section
      className="mx-auto mt-[70px] mb-[100px] max-w-[1450px] px-[52px] max-[650px]:mb-[70px] max-[650px]:px-7"
      id="articles"
      aria-labelledby="health-articles-title"
    >
      <div className="mb-[23px] flex items-end justify-between gap-6 max-[650px]:flex-wrap max-[650px]:justify-center">
        <h2
          id="health-articles-title"
          className="flex-1 text-center text-[clamp(19px,2.5vw,32px)] text-[#676767] max-[650px]:basis-full"
        >
          اطلاعات مفید برای ارتقای سلامت شما
        </h2>
        <button
          type="button"
          className="order-1 cursor-pointer rounded-full border-2 border-[#006b6e] bg-white px-9 py-2 font-semibold whitespace-nowrap text-[#171717] max-[650px]:order-0"
          aria-expanded={showAll}
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll ? 'بستن فهرست' : 'مشاهده همه'}
        </button>
      </div>

      {showAll ? (
        <div className="grid grid-cols-3 gap-6 max-[950px]:grid-cols-2 max-[650px]:grid-cols-1">
          {articleHighlights.map((article) => (
            <ArticleCard key={article.id} article={article} onOpen={setActiveArticle} />
          ))}
        </div>
      ) : (
        <ArticlesSlider onOpen={setActiveArticle} />
      )}

      {activeArticle && <ArticleDialog article={activeArticle} onClose={() => setActiveArticle(null)} />}
    </section>
  );
}
