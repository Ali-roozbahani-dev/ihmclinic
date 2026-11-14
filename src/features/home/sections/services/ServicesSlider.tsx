'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { ServiceCard, clinicServices, type ClinicService } from '@/features/services';
import SliderArrows from '@/shared/components/ui/SliderArrows';

interface ServicesSliderProps {
  onSelect: (service: ClinicService) => void;
}

export default function ServicesSlider({ onSelect }: ServicesSliderProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <div className="relative px-[25px] max-[760px]:px-6">
      <SliderArrows
        variant="ghost"
        onPrevious={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
      />
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        dir="rtl"
        slidesPerView={2}
        spaceBetween={14}
        watchOverflow={true}
        breakpoints={{
          540: { slidesPerView: 3 },
          760: { slidesPerView: 5 },
          1050: { slidesPerView: 7 },
        }}
        className="px-1! pt-3! pb-[17px]!"
      >
        {clinicServices.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard service={service} onSelect={onSelect} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
