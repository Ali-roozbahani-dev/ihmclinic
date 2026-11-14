import type { DoctorSort } from '../types';

interface DoctorToolbarProps {
  title: string;
  sort: DoctorSort;
  onSortChange: (sort: DoctorSort) => void;
  showTitle: boolean;
}

export default function DoctorToolbar({ title, sort, onSortChange ,showTitle }: DoctorToolbarProps) {
  return (
    <div className="doctors-toolbar">
      {
        showTitle &&
        <strong>{title}</strong>
      }

      <select
        aria-label="مرتب‌سازی"
        value={sort}
        onChange={(event) => onSortChange(event.target.value as DoctorSort)}
      >
        <option value="related">مرتب‌سازی: محبوب‌ترین</option>
        <option value="name">مرتب‌سازی: نام</option>
      </select>
    </div>
  );
}
