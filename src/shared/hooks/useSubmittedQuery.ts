'use client';

import { useState, type FormEvent } from 'react';

/**
 * فیلد جست‌وجویی که فقط با submit فرم اعمال می‌شود:
 * `input` متن در حال تایپ است و `query` مقداری که فیلتر با آن کار می‌کند.
 */
export function useSubmittedQuery() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setQuery(input);
  };

  return { input, setInput, query, submit };
}
