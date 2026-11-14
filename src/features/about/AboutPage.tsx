import HeroSection from '@/shared/components/ui/HeroSection';
import AboutCta from './components/AboutCta';
import AboutFeatures from './components/AboutFeatures';
import AboutGallery from './components/AboutGallery';
import AboutHistory from './components/AboutHistory';

export default function AboutPage() {
  return (
    <>
      <HeroSection src="/images/shared/hero-wave-mint.png" ariaLabel="درباره ما" />
      <div
        className={[
          'mx-auto my-6 max-w-[1180px] overflow-hidden rounded-[14px] bg-[#f1f7fc]',
          'text-[#11275b] shadow-[0_8px_35px_#20375417] [direction:rtl]',
          'max-[850px]:m-3.5 max-[540px]:m-2',
        ].join(' ')}
      >
        <AboutFeatures />
        <AboutHistory />
        <AboutGallery />
        <AboutCta />
      </div>
    </>
  );
}
