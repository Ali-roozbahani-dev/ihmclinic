'use client';

import { useState } from 'react';
import { useSubmittedQuery } from '@/shared/hooks/useSubmittedQuery';
import { includesFa } from '@/shared/lib/normalize-fa';
import { insuranceEntries } from '../data/insurance-entries.data';

/** جست‌وجو و فیلتر نوع بیمه در صفحه‌ی «بیمه‌ها». */
export function useInsuranceDirectory() {
  const search = useSubmittedQuery();
  const [type, setType] = useState('all');

  const rows = insuranceEntries.filter(
    (entry) => includesFa(entry.name, search.query) && (type === 'all' || entry.type === type),
  );

  return { ...search, type, setType, rows };
}
