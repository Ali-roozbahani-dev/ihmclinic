'use client';

import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import { usePrefersReducedMotion } from '@/shared/hooks/usePrefersReducedMotion';
import { insuranceEntries } from '@/features/insurance/data/insurance-entries.data';
import { InsurerCard } from '@/features/insurance';

export default function InsuranceSection() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section
      className="mx-auto max-w-[1260px] px-6 pt-[30px] pb-[26px] max-[760px]:px-[18px] max-[760px]:pt-6 max-[760px]:pb-5"
      id="insurance"
      aria-label="بیمه‌های طرف قرارداد"
    >
      <SectionTitle title="بیمه‌های طرف قرارداد" />

      <Swiper
        key={reduceMotion ? 'reduced-motion' : 'continuous-motion'}
        modules={[Autoplay, A11y]}
        className="px-1.5! pt-3! pb-6! [&_.swiper-wrapper]:ease-linear!"
        dir="rtl"
        loop={!reduceMotion}
        loopAdditionalSlides={insuranceEntries.length}
        speed={reduceMotion ? 300 : 5500}
        slidesPerView={1.6}
        spaceBetween={16}
        grabCursor
        allowTouchMove
        autoplay={
          reduceMotion
            ? false
            : {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }
        }
        breakpoints={{
          480: { slidesPerView: 2.3, spaceBetween: 16 },
          640: { slidesPerView: 3.2, spaceBetween: 20 },
          900: { slidesPerView: 4.5, spaceBetween: 22 },
          1200: { slidesPerView: 5.5, spaceBetween: 24 },
        }}
      >
        {insuranceEntries.map((entry) => (
          <SwiperSlide key={entry.name} className="h-auto!">
            <InsurerCard entry={entry} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
