
import Link from 'next/link';
import type { Doctor } from '../types';

interface DoctorRowProps {
  doctor: Doctor;
  onOpenResume: () => void;
}

export default function DoctorRow({
  doctor,
  onOpenResume,
}: DoctorRowProps) {
  const fullName = `${doctor.firstName} ${doctor.lastName}`;

  return (
    <article className="doctors-row">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={doctor.image} alt={`تصویر ${fullName}`} />

      <div className="doctors-info">
        <h2>{`دکتر ${fullName}`}</h2>
        <p>{doctor.specialty}</p>
        <small>شماره نظام پزشکی: {doctor.medicalCode}</small>
      </div>

      <div className="doctors-actions">
        <button type="button" onClick={onOpenResume}>
          جزئیات پزشک
        </button>

        <Link className="doctors-primary" href="/contact">
          دریافت نوبت
        </Link>
      </div>
    </article>
  );
}

