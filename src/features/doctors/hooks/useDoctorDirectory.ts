
'use client';

import { useMemo, useState } from 'react';
import type { DoctorSort } from '../types';
import { useSubmittedQuery } from '@/shared/hooks/useSubmittedQuery';
import { includesFa } from '@/shared/lib/normalize-fa';
import { doctors } from '../data/doctors.data';

export function useDoctorDirectory() {
  const search = useSubmittedQuery();

  const [specialty, setSpecialty] = useState('all');
  const [sort, setSort] = useState<DoctorSort>('related');

  const filteredDoctors = useMemo(() => {
    const query = search.query.trim();

    const result = doctors.filter((doctor) => {
      const fullName = `${doctor.firstName} ${doctor.lastName}`;

      const matchesSearch =
        !query ||
        includesFa(
          `${fullName} ${doctor.specialty} ${doctor.medicalCode}`,
          query
        );

      const matchesSpecialty =
        specialty === 'all' || doctor.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });

    if (sort === 'name') {
      return [...result].sort((a, b) =>
        `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`,
          'fa'
        )
      );
    }

    return result;
  }, [search.query, specialty, sort]);

  return {
    ...search,
    specialty,
    setSpecialty,
    sort,
    setSort,
    filteredDoctors,
    count: filteredDoctors.length,
  };
}

