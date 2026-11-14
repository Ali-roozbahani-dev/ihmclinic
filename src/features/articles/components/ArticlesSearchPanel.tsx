import { Search } from 'lucide-react';

interface ArticlesSearchPanelProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export default function ArticlesSearchPanel({ query, onQueryChange }: ArticlesSearchPanelProps) {
  return (
    <section
      className={[
        'rounded-[10px] bg-white px-[25px] pt-[22px] pb-[25px] shadow-[0_3px_12px_#0000001c]',
        'min-[761px]:max-[1100px]:pt-[15px] min-[761px]:max-[1100px]:pb-[19px]',
        'max-[760px]:p-4',
      ].join(' ')}
      aria-label="جست‌وجوی موضوعات سلامت"
    >
      <p className="mb-3.5 text-[16px] max-[760px]:text-[14px]">به دنبال چه موضوعی هستید؟</p>
      <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="flex items-center gap-3 rounded-lg border border-[#f1f1f1] bg-white p-[7px] shadow-[0_1px_12px_#00000029]"
      >
        <button
          type="submit"
          aria-label="جست‌وجوی مقالات"
          className="grid min-h-[46px] min-w-15 place-items-center rounded-lg bg-[#075d3d] text-white"
        >
          <Search size={26} strokeWidth={1.6} />
        </button>
        <input
          className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-[14px] text-[#333] outline-none"
          aria-label="جست‌وجو در مقالات سلامت"
          placeholder="جستجو در مقالات سلامت..."
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </form>
    </section>
  );
}
