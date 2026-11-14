import Image from 'next/image';

export default function FooterBrand() {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <Image src="/images/brand/clinic-logo-white.png" alt="نشان دارالشفاء امام مجتبی" width={78} height={78} className="h-[78px] w-[78px] object-contain max-[600px]:h-[65px] max-[600px]:w-[65px]" />
      <h2 className="m-0 text-[23px] leading-[1.8] font-normal max-[600px]:text-[19px]">دارالشفاء امام مجتبی (ع)</h2>
      <p className="m-0 text-[10px]">در کنار شما، برای زندگی سالم‌تر</p>
    </div>
  );
}
