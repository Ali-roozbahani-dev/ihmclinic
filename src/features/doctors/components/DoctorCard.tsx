
import Image from 'next/image';
import type { Doctor } from '../types';

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const fullName = `${doctor.firstName} ${doctor.lastName}`;

  return (
    <div className="flex h-full flex-col gap-0.75 rounded-[20px] px-4.5 pt-4.5 pb-6 text-center 
    shadow-[0_3px_14px_#0002] max-[760px]:p-2.5">
      <Image
        className="mb-3 block h-42.5 w-full rounded-[15px] bg-[#eff9f5] object-contain object-center max-[760px]:h-28.75"
        src={doctor.image}
        alt={`تصویر ${fullName}`}
        loading="lazy"
        width={1000}
        height={1000}
      />

      <strong className="text-[15px]">{`دکتر ${fullName}`}</strong>

      <span className="text-[12px]">{doctor.specialty}</span>
    </div>
  );
}
