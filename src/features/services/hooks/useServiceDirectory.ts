'use client';

import { useState } from 'react';
import type { ServiceSort } from '../types';
import { useSubmittedQuery } from '@/shared/hooks/useSubmittedQuery';
import { includesFa } from '@/shared/lib/normalize-fa';
import { directoryServices } from '../data/directory-services.data';

/** جست‌وجو و مرتب‌سازی فهرست خدمات صفحه‌ی «خدمات». */
export function useServiceDirectory() {
  const search = useSubmittedQuery();
  const [sort, setSort] = useState<ServiceSort>('related');

  const rows = directoryServices.filter((item) => includesFa(`${item.name} ${item.text}`, search.query));

  if (sort === 'name') {
    rows.sort((a, b) => a.name.localeCompare(b.name, 'fa'));
  }

  return { ...search, sort, setSort, rows };
}
