import Image from 'next/image';
import { buildMapSearchUrl } from '@/shared/config/site';

const mapSearchUrl = buildMapSearchUrl('دارالشفاء امام مجتبی نورصالحی پلاک ۸۶');

export default function FooterLocation() {
  return (
    <div className="flex w-max min-w-0 flex-col items-center mx-auto">
      <h3 className="m-0 mb-[5px] text-[15px] font-bold">موقعیت ما</h3>
      <Image src="/images/brand/reference-footer-map.png" alt="تصویر نقشه محدوده دارالشفاء امام مجتبی" loading="lazy" width={161} height={94} className="h-auto max-h-[100px] w-[160px] rounded-xl object-cover" />
      <a href={mapSearchUrl} target="_blank" rel="noopener noreferrer" className="mt-[10px] inline-flex min-w-[110px] items-center justify-center rounded-full border border-[#a3cebc] px-[13px] py-[3px] text-[10px] text-white hover:bg-white/10">مشاهده نقشه</a>
    </div>
  );
}
