'use client';

import { useState } from 'react';
import { toFaNumber } from '@/shared/lib/format-number';
import HeroSection from '@/shared/components/ui/HeroSection';
import ServiceDetailDialog from './components/ServiceDetailDialog';
import ServiceRow from './components/ServiceRow';
import ServiceSearchForm from './components/ServiceSearchForm';
import ServiceToolbar from './components/ServiceToolbar';
import { useServiceDirectory } from './hooks/useServiceDirectory';

export default function ServicesPage() {
  const { input, setInput, submit, sort, setSort, rows } = useServiceDirectory();
  const [detail, setDetail] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <HeroSection 
      src="/images/shared/hero-wave-mint.png"
      bg_img="/images/shared/about-clinic-waiting-compressed.webp" 
      ariaLabel="خدمات ما" 
      bgPositionClass='bg-center'
      />

      <ServiceSearchForm
          input={input}
          onInputChange={setInput}
          onSubmit={(event) => {
            submit(event);
            setIsSubmitted(true);
          }}
        />

      <section className="services-content">
        <ServiceToolbar 
        title={`${toFaNumber(rows.length)} خدمت یافت شد`} 
        sort={sort} onSortChange={setSort} 
        isSubmitted={isSubmitted}
        />

        <div className="services-rows">
          {rows.map((service, index) => (
            <ServiceRow key={`${service.name}-${index}`} service={service} onOpen={setDetail} />
          ))}
        </div>

        {rows.length === 0 && (
          <p className="services-empty" role="status">
            نتیجه‌ای پیدا نشد؛ عبارت یا فیلتر دیگری انتخاب کنید.
          </p>
        )}
      </section>

      <ServiceDetailDialog title={detail} onClose={() => setDetail(null)} />
    </>
  );
}
