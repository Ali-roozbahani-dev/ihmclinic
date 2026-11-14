import { insuranceTabs } from '../data/insurance-entries.data';

interface InsuranceTabsProps {
  type: string;
  onTypeChange: (type: string) => void;
}

export default function InsuranceTabs({ type, onTypeChange }: InsuranceTabsProps) {
  return (
    <>
      <div className="insurance-tabs" aria-label="نوع بیمه">
        {insuranceTabs.map(({ value, label }) => (
          <button key={value} type="button" aria-pressed={type === value} onClick={() => onTypeChange(value)}>
            {label}
          </button>
        ))}
      </div>

      <div className="insurance-table-head">
        <span>نام بیمه</span>
        <span>نوع بیمه</span>
        <span>مشاهده جزئیات</span>
      </div>
    </>
  );
}
