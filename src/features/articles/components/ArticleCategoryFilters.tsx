import { categories } from '../data/articles.data';

interface ArticleCategoryFiltersProps {
  category: string;
  onCategoryChange: (category: string) => void;
}

export default function ArticleCategoryFilters({ category, onCategoryChange }: ArticleCategoryFiltersProps) {
  return (
    <nav
      className={[
        'mx-2.5 mt-[15px] mb-[30px] grid grid-cols-5 gap-4',
        'max-[760px]:mx-0 max-[760px]:mt-3.5 max-[760px]:mb-6 max-[760px]:gap-2',
        'max-[480px]:flex max-[480px]:overflow-x-auto max-[480px]:px-0.5 max-[480px]:pt-1 max-[480px]:pb-2.5 max-[480px]:[scrollbar-width:thin]',
      ].join(' ')}
      aria-label="دسته‌بندی مقالات"
    >
      {categories.map((item) => (
        <button
          type="button"
          key={item}
          aria-pressed={category === item}
          onClick={() => onCategoryChange(item)}
          className={[
            'min-h-[54px] rounded-[10px] border border-[#f3f3f3] bg-white p-2 text-[15px] font-bold text-[#161616]',
            'shadow-[0_3px_11px_#00000021] [transition:background_.18s,color_.18s]',
            'hover:bg-[#e9f5ed] hover:text-[#075d3d]',
            'aria-pressed:border-[#075d3d] aria-pressed:bg-[#075d3d] aria-pressed:text-white',
            'aria-pressed:hover:bg-[#084c35] aria-pressed:hover:text-white',
            'max-[760px]:min-h-[46px] max-[760px]:p-1.5 max-[760px]:text-xs',
            'max-[480px]:min-w-25 max-[480px]:flex-none',
          ].join(' ')}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
