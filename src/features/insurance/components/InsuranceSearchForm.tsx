import type { FormEvent } from 'react';
import { Search } from 'lucide-react';

interface InsuranceSearchFormProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
}

export default function InsuranceSearchForm({ input, onInputChange, onSubmit }: InsuranceSearchFormProps) {
  return (
    <form className="insurance-search" role="search" onSubmit={onSubmit}>
      <label className="insurance-query">
        <Search size={22} strokeWidth={1.3} />
        <input
          aria-label="جست‌وجو"
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="جستجوی نام بیمه...."
        />
      </label>

      <button className="insurance-primary" type="submit">
        جستجو
      </button>
    </form>
  );
}
