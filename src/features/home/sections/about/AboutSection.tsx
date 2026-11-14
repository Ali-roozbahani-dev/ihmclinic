import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      className="mx-auto grid max-w-[1260px] grid-cols-[1fr_1.1fr] items-center gap-[46px] px-6 pt-[38px] pb-[34px] max-[760px]:grid-cols-1 max-[760px]:gap-[18px] max-[760px]:px-[18px] max-[760px]:py-7"
      id="about"
    >
      <div className="text-right">
        <h2 className="font-semibold  mb-[25px] text-[33px] text-[#101b17] max-[760px]:text-[25px]">درباره ما</h2>
        <p className="max-w-[570px] text-[14px] leading-[2.1] text-[#555]">
          درمانگاه ما با هدف ارائه خدمات درمانی تخصصی و با کیفیت، در محیطی آرام و مجهز فعالیت می‌کند. پزشکان و
          کادر درمانی مجرب، تجهیزات پیشرفته و ارائه خدمات متنوع، همراه شما برای حفظ سلامتی هستند.
        </p>
        <a
          className="mt-2 inline-flex items-center justify-center gap-3 rounded-[30px] bg-[#056842] px-[26px] py-2.5 text-[13px] text-white"
          href="#services"
        >
          بیشتر بدانید
          <ArrowLeft size={17} aria-hidden="true" />
        </a>
      </div>

      <div className="h-[330px] overflow-hidden rounded-[30px] shadow-[0_4px_18px_#00000014] max-[760px]:h-[240px]">
        <Image
          className="block size-full object-cover object-[70%_70%]"
          src="/images/shared/about-clinic-waiting.jpg"
          alt="تصویر مفهومی یک سالن انتظار مدرن با صندلی‌ها و فضای پذیرش"
          loading="lazy"
          width={1200}
          height={799}
        />
      </div>
    </section>
  );
}
