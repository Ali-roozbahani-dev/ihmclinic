'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Pagination } from 'swiper/modules';
import { DoctorCard, doctors } from '@/features/doctors';
import SectionTitle from '@/shared/components/ui/SectionTitle';
import SliderArrows from '@/shared/components/ui/SliderArrows';

export default function DoctorsSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section
      className="mx-auto max-w-[1260px] px-6 pt-[34px] pb-[34px] max-[760px]:px-[18px] max-[760px]:pt-[26px] max-[760px]:pb-7"
      id="doctors"
    >
      <SectionTitle eyebrow="تیم پزشکان" title="پزشکان متخصص و متعهد" />

      <div className="relative px-[25px] max-[760px]:px-6">
        <SliderArrows
          onPrevious={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
        />

        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          dir="rtl"
          loop={true}
          slidesPerView={1.4}
          spaceBetween={16}
          breakpoints={{
            560: { slidesPerView: 2.4 },
            760: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="px-1! pt-3! pb-[43px]! [&_.swiper-pagination-bullet]:bg-[#0d615c]! [&_.swiper-pagination-bullet]:opacity-40! [&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:opacity-100!"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
