'use client';

import { useState, type FormEvent } from 'react';
import { toFaNumber } from '@/shared/lib/format-number';

const presetAmounts = ['100000', '200000', '500000'];

interface DonationFormProps {
  /** بعد از ثبت فرم صدا زده می‌شود (فعلاً پرداخت آنلاین وجود ندارد). */
  onSubmitted: () => void;
}

export default function DonationForm({ onSubmitted }: DonationFormProps) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmitted();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>مبلغ کمک شما</h2>

      <div className="amounts">
        {presetAmounts.map((preset) => (
          <button key={preset} type="button" aria-pressed={amount === preset} onClick={() => setAmount(preset)}>
            {toFaNumber(Number(preset))}
          </button>
        ))}
      </div>

      <label>
        مبلغ (تومان)
        <input required min="1000" type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <label>
        نام و نام خانوادگی (اختیاری)
        <input autoComplete="name" />
      </label>
      <label>
        شماره تماس (اختیاری)
        <input type="tel" autoComplete="tel" />
      </label>

      <button className="page-action" type="submit">
        بررسی و هماهنگی کمک
      </button>
    </form>
  );
}
