'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ServiceCard, clinicServices, type ClinicService } from '@/features/services';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import ServiceDetail from './ServiceDetail';
import ServicesSlider from './ServicesSlider';

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState<ClinicService | null>(null);

  return (
    <section
      className="mx-auto max-w-none rounded-[25px] px-[max(24px,calc((100vw_-_1260px)_/_2))] pt-6 pb-[22px] text-center shadow-[0_0_10px_#0002] max-[760px]:px-[18px] max-[760px]:pt-5 max-[760px]:pb-[18px]"
      id="services"
    >
      <SectionTitle eyebrow="خدمات تخصصی ما" title="ارائه خدمات درمانی با کیفیت، برای سلامتی و آرامش شما." />

      <ServicesSlider onSelect={setSelectedService} />

      {selectedService && <ServiceDetail service={selectedService} onClose={() => setSelectedService(null)} />}

      <div
        className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(145px,1fr))] gap-4 text-center"
        id="all-services"
        hidden={!showAll}
      >
        {clinicServices.map((service) => (
          <ServiceCard key={service.id} service={service} onSelect={setSelectedService} />
        ))}
      </div>

      <button
        className="mt-[27px] inline-flex cursor-pointer items-center justify-center gap-3 rounded-[30px] bg-[#056842] px-[26px] py-2.5 text-[16px] text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#198f78]"
        type="button"
        aria-expanded={showAll}
        aria-controls="all-services"
        onClick={() => setShowAll((current) => !current)}
      >
        {showAll ? 'بستن فهرست خدمات' : 'مشاهده همه خدمات'}
        <ArrowLeft size={16} aria-hidden="true" />
      </button>
    </section>
  );
}
