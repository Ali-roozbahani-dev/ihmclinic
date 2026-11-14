import type { FormEvent } from 'react';
import { Search } from 'lucide-react';

interface DoctorSearchFormProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  /** فیلترهای تخصص و روز حضور که بین فیلد جست‌وجو و دکمه قرار می‌گیرند. */
  children?: React.ReactNode;
}

export default function DoctorSearchForm({ input, onInputChange, onSubmit, children }: DoctorSearchFormProps) {
  return (
    <form className="doctors-search" role="search" onSubmit={onSubmit}>
      <label className="doctors-query">
        <Search size={22} strokeWidth={1.3} />
        <input
          aria-label="جست‌وجو"
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="جستجوی نام پزشک یا تخصص ..."
        />
      </label>

      {children}

      <button className="doctors-primary" type="submit">
        جستجو
      </button>
    </form>
  );
}
