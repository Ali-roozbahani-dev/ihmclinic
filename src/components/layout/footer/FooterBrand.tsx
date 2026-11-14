
import Image from 'next/image';

export default function FooterBrand() {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <Image
        src="/images/brand/clinic-logo-white.png"
        alt="نشان دارالشفاء امام مجتبی"
        width={78}
        height={78}
        className="h-[72px] w-[72px] object-contain max-[600px]:h-[58px] max-[600px]:w-[58px]"
      />

      <h2 className="m-0 mt-1 text-[21px] leading-relaxed font-normal max-[600px]:text-[18px]">
        دارالشفاء امام مجتبی (ع)
      </h2>

      <p className="m-0 mt-1 text-[11px] text-white/85">
        در کنار شما، برای زندگی سالم‌تر
      </p>
    </div>
  );
}

