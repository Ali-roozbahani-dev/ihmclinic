
'use client';

import { useState } from 'react';
import { toFaNumber } from '@/shared/lib/format-number';
import HeroSection from '@/shared/components/ui/HeroSection';
import DoctorDetailDialog from './components/DoctorDetailDialog';
import DoctorFilters from './components/DoctorFilters';
import DoctorRow from './components/DoctorRow';
import DoctorSearchForm from './components/DoctorSearchForm';
import DoctorToolbar from './components/DoctorToolbar';
import { useDoctorDirectory } from './hooks/useDoctorDirectory';

export default function DoctorsPage() {
  const {
    input,
    setInput,
    submit,
    specialty,
    setSpecialty,
    sort,
    setSort,
    filteredDoctors,
    count,
  } = useDoctorDirectory();

  const [detail, setDetail] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  return (
    <>
      <HeroSection
        bg_img="/assets/doctors-hero-photo.jpg"
        src="/images/shared/hero-wave-mint.png"
        ariaLabel="پزشکان"
      />

      <DoctorSearchForm
        input={input}
        onInputChange={setInput}
        onSubmit={(event) => {
          submit(event);
          setIsSubmitted(true);
        }}
      >
        <DoctorFilters
          specialty={specialty}
          onSpecialtyChange={setSpecialty}
        />
      </DoctorSearchForm>

      <section className="doctors-content">
        <DoctorToolbar
          title={`نتایج جستجو (${toFaNumber(count)} پزشک)`}
          sort={sort}
          onSortChange={setSort}
          showTitle={isSubmitted}
        />

        <div className="doctors-rows">
          {filteredDoctors.map((doctor) => (
            <DoctorRow
              key={doctor.id}
              doctor={doctor}
              onOpenResume={() => setDetail(
                `${doctor.firstName} ${doctor.lastName}`
              )}
            />
          ))}
        </div>

        <p className="doctors-result-note">
          نمایش {toFaNumber(count)} پزشک
        </p>

        {count === 0 && (
          <p className="doctors-empty" role="status">
            نتیجه‌ای پیدا نشد؛ عبارت یا فیلتر دیگری انتخاب کنید.
          </p>
        )}
      </section>

      <DoctorDetailDialog
        title={detail}
        onClose={() => setDetail(null)}
      />
    </>
  );
}

