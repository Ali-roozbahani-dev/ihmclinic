
import BackToTopButton from './BackToTopButton';
import FooterBrand from './FooterBrand';
import FooterContact from './FooterContact';
import FooterLinks from './FooterLinks';
import FooterLocation from './FooterLocation';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-[65px] bg-[#005d49] px-[4%] pt-10 pb-4 text-white max-[600px]:mt-[45px] 
      max-[600px]:px-5 max-[600px]:pt-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16.25 right-0 left-0 
        h-21.25 bg-[url('/images/brand/reference-footer-wave.png')] bg-[length:100%_100%] 
        bg-center bg-no-repeat max-[600px]:-top-[45px] max-[600px]:h-[60px]"
      />

      <div className="relative mx-auto grid max-w-295 grid-cols-[1fr_1fr_1.3fr_1fr] 
      items-start gap-x-7 gap-y-9 max-[900px]:grid-cols-2 max-[900px]:gap-x-8 
      max-[900px]:gap-y-8 max-[600px]:grid-cols-2 max-[600px]:gap-x-5 max-[600px]:gap-y-7">

        <div className="max-[900px]:col-span-2">
          <FooterBrand />
        </div>

        <FooterLinks />

        <FooterContact />

        <FooterLocation />
      </div>

      <div className="relative mx-auto mt-8 flex max-w-295 justify-between gap-4 
      border-t border-[#a3cebc]/60 pt-4 text-[10px] leading-7 max-[600px]:mt-6 
      max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-1 max-[600px]:text-center">
        <p className="m-0">
          کلیه حقوق این وب‌سایت متعلق به مرکز درمانی خیریه دارالشفاء امام مجتبی (ع) است.
        </p>

        <p className="m-0">
          وب‌سایت توسط شرکت آداک فناوری داده پردازان طراحی و پیاده سازی شده است.
        </p>
      </div>

      <BackToTopButton />
    </footer>
  );
}

