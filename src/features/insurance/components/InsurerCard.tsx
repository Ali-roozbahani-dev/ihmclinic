import Image from 'next/image';
import type { InsuranceEntry } from '../types';

export default function InsurerCard({ entry }: { entry: InsuranceEntry }) {
  return (
    <div className="flex h-full min-h-[124px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[rgba(24,130,105,0.14)] bg-white px-3 py-5 text-center text-[#186f60] shadow-[0_7px_22px_rgba(16,92,76,0.07)] max-[600px]:min-h-[110px] max-[600px]:px-2.5 max-[600px]:py-4" aria-label={entry.name}>
      {entry.src ? (
        <Image
          className="block h-[58px] w-[76px] object-contain drop-shadow-[0_2px_4px_rgba(16,92,76,0.12)]"
          src={entry.src}
          alt={`نشان ${entry.name}`}
          width={1000}
          height={1000}
        />
      ) : (
        <span
          className="grid h-[58px] w-full place-items-center rounded-[10px] bg-[#f1f8f4] text-[20px] leading-[1.7] font-extrabold text-[#236750]"
          aria-hidden="true"
        >
          {entry.name}
        </span>
      )}
      <span className="text-[15px] leading-[1.7] font-medium max-[600px]:text-[13px]">{entry.name}</span>
    </div>
  );
}
