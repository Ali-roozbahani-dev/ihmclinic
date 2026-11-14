
import Image from 'next/image';
import { buildMapSearchUrl } from '@/shared/config/site';

const mapSearchUrl = buildMapSearchUrl(
  'دارالشفاء امام مجتبی نورصالحی پلاک ۸۶'
);

export default function FooterLocation() {
  return (
    <div className="flex min-w-0 flex-col items-start">
      <h3 className="m-0 mb-3 text-sm font-bold">
        موقعیت ما
      </h3>

      <Image
        src="/images/brand/reference-footer-map.png"
        alt="تصویر نقشه محدوده دارالشفاء امام مجتبی"
        loading="lazy"
        width={320}
        height={180}
        className="h-auto w-full max-w-55 rounded-xl object-cover"
      />

      <a
        href={mapSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center justify-center rounded-full 
        border border-[#a3cebc] px-4 py-2 text-[11px] text-white transition-colors hover:bg-white/10"
      >
        مشاهده نقشه
      </a>
    </div>
  );
}

