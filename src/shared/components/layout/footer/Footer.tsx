import BackToTopButton from './BackToTopButton';
import FooterBrand from './FooterBrand';
import FooterContact from './FooterContact';
import FooterLinks from './FooterLinks';
import FooterLocation from './FooterLocation';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-16.25 bg-[#005d49] px-[4%] pt-10 pb-3 text-white max-[600px]:mt-11.25 max-[600px]:px-[6%] max-[600px]:pt-[25px]">
      <div aria-hidden="true" className="pointer-events-none absolute -top-16.25 right-0 left-0 h-21.25 bg-[url('/images/brand/reference-footer-wave.png')] bg-[length:100%_100%] bg-center bg-no-repeat max-[600px]:-top-[45px] max-[600px]:h-[60px]" />
      <div className="relative mx-auto grid max-w-295 grid-cols-[1fr_1.3fr_1fr] 
      items-start gap-7.5 max-[900px]:grid-cols-1 
      max-[900px]:gap-x-4.5 max-[900px]:gap-y-6">
        <FooterBrand />
        <div className='grid grid-cols-2'>
          <FooterLinks />
          <FooterContact />
        </div>
        <FooterLocation />
      </div>
      <div className="relative mx-auto mt-[23px] flex max-w-[1180px] justify-between gap-[18px] border-t border-[#a3cebc]/60 pt-[10px] text-[8px] leading-[1.9] max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-[5px] max-[600px]:text-center">
        <p>کلیه حقوق این وب‌سایت متعلق به مرکز درمانی خیریه دارالشفاء امام مجتبی (ع) است.</p>
        <p>وب‌سایت توسط شرکت آداک فناوری داده پردازان طراحی و پیاده سازی شده است.</p>
      </div>
      <BackToTopButton />
    </footer>
  );
}
