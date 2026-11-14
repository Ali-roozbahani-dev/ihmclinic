import { Search } from 'lucide-react';

export default function ArticlesEmpty({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-xl bg-[#f5faf6] p-[45px] text-center text-[#075d3d]">
      <Search size={30} />
      <h2 className="text-[20px]">مقاله‌ای پیدا نشد</h2>
      <p>موضوع یا عبارت دیگری را انتخاب کنید.</p>
      <button className="rounded-lg bg-[#075d3d] px-6 py-3 text-white" onClick={onReset}>نمایش همه مقالات</button>
    </div>
  );
}
