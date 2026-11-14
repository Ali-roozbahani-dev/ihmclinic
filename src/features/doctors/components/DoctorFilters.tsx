
import { specialtyOptions } from '../data/directory-doctor.data';

interface DoctorFiltersProps {
  specialty: string;
  onSpecialtyChange: (value: string) => void;
}

export default function DoctorFilters({
  specialty,
  onSpecialtyChange,
}: DoctorFiltersProps) {
  return (
    <select
      aria-label="تخصص پزشک"
      value={specialty}
      onChange={(event) => onSpecialtyChange(event.target.value)}
    >
      {specialtyOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

