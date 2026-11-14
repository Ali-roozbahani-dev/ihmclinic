
import Image from 'next/image';

const imageClasses = [
  'h-[175px] w-full rounded-[10px] object-cover',
  'max-[850px]:h-[140px]',
  'max-[540px]:h-[100px] max-[540px]:rounded-[7px]',
  'max-[380px]:h-[85px]',
].join(' ');

export default function AboutGallery() {
  return (
    <section className="mx-auto w-[min(1180px,100%)] px-[38px] pt-[clamp(28px,3vw,42px)] max-[850px]:px-[22px] max-[760px]:w-[calc(100%-32px)] max-[760px]:pt-6 max-[540px]:pt-5">
      <h2 className="mb-5 text-[24px] max-[540px]:mb-3 max-[540px]:text-[17px]">
        آشنایی با فضای درمانگاه
      </h2>

      <div className="grid grid-cols-3 gap-2.5 [direction:ltr] max-[540px]:gap-1.5">
        <Image
          width={1200}
          height={799}
          src="/images/shared/about-clinic-waiting.jpg"
          alt="فضای پذیرش درمانگاه"
          loading="lazy"
          className={imageClasses}
        />

        <Image
          width={678}
          height={410}
          src="/images/about/waiting-room-reference.png"
          alt="سالن انتظار درمانگاه"
          loading="lazy"
          className={imageClasses}
        />

        <Image
          width={693}
          height={440}
          src="/images/shared/quick-radiology.png"
          alt="خدمات تصویربرداری درمانگاه"
          loading="lazy"
          className={imageClasses}
        />
      </div>
    </section>
  );
}

