import type { ServiceSort } from '../types';

interface ServiceToolbarProps {
  title: string;
  sort: ServiceSort;
  onSortChange: (sort: ServiceSort) => void;
  isSubmitted : boolean
}

export default function ServiceToolbar({ title, sort, onSortChange , isSubmitted }: ServiceToolbarProps) {
  return (
    <div className="services-toolbar">
      {isSubmitted &&
      <strong>{title}</strong>
      }

      <select
        aria-label="مرتب‌سازی"
        value={sort}
        onChange={(event) => onSortChange(event.target.value as ServiceSort)}
      >
        <option value="related">مرتب‌سازی: مرتبط ترین</option>
        <option value="name">مرتب‌سازی: نام</option>
      </select>
    </div>
  );
}
