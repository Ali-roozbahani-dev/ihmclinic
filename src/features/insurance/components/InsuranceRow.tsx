import type { InsuranceEntry } from '../types';

interface InsuranceRowProps {
  entry: InsuranceEntry;
  onOpen: (name: string) => void;
}

export default function InsuranceRow({ entry, onOpen }: InsuranceRowProps) {
  return (
    <article className="insurance-row">
      <div className="insurance-provider">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={entry.src || undefined} alt="" />
        <h2>{entry.name}</h2>
      </div>

      <p>بیمه {entry.type === 'base' ? 'پایه' : 'تکمیلی'}</p>

      <button onClick={() => onOpen(entry.name)}>مشاهده جزئیات</button>
    </article>
  );
}
