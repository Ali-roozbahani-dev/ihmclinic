'use client';

import { useState } from 'react';
import HeroSection from '@/shared/components/ui/HeroSection';
import InsuranceDetailDialog from './components/InsuranceDetailDialog';
import InsuranceNotes from './components/InsuranceNotes';
import InsuranceRow from './components/InsuranceRow';
import InsuranceSearchForm from './components/InsuranceSearchForm';
import InsuranceTabs from './components/InsuranceTabs';
import { useInsuranceDirectory } from './hooks/useInsuranceDirectory';

export default function InsurancePage() {
  const { input, setInput, submit, type, setType, rows } = useInsuranceDirectory();
  const [detail, setDetail] = useState<string | null>(null);

  return (
    <>
      <HeroSection 
      bgPositionClass='bg-center'
      bg_img='/assets/insurance-hero-pro.webp'
      src="/images/shared/hero-wave-mint.png" 
      ariaLabel="بیمه ها" 
      />

      <InsuranceSearchForm input={input} onInputChange={setInput} onSubmit={submit} />

      <section className="insurance-content">
        <InsuranceTabs type={type} onTypeChange={setType} />

        <div className="insurance-rows">
          {rows.map((entry, index) => (
            <InsuranceRow key={`${entry.name}-${index}`} entry={entry} onOpen={setDetail} />
          ))}
        </div>

        <InsuranceNotes />

        {rows.length === 0 && (
          <p className="insurance-empty" role="status">
            نتیجه‌ای پیدا نشد؛ عبارت یا فیلتر دیگری انتخاب کنید.
          </p>
        )}
      </section>

      <InsuranceDetailDialog title={detail} onClose={() => setDetail(null)} />
    </>
  );
}
