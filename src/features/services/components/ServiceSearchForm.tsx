import type { FormEvent } from 'react';

interface ServiceSearchFormProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
}

export default function ServiceSearchForm({ input, onInputChange, onSubmit }: ServiceSearchFormProps) {
  return (
    <form className="services-search" role="search" onSubmit={onSubmit}>
      <label className="services-query">
        <input
          aria-label="جست‌وجو"
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          placeholder="مثلا دندان پزشکی، آزمایش خون، رادیو..."
        />
      </label>

      <button className="services-primary" type="submit">
        جستجو
      </button>
    </form>
  );
}
