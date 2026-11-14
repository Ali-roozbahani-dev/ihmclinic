import AboutSection from './sections/about/AboutSection';
import ArticlesSection from './sections/articles/ArticlesSection';
import DoctorsSection from './sections/doctors/DoctorsSection';
import HeroSection from '../../shared/components/ui/HeroSection';
import InsuranceSection from './sections/insurance/InsuranceSection';
import QuickLinksSection from './sections/quick-links/QuickLinksSection';
import ServicesSection from './sections/services/ServicesSection';
import StatsSection from './sections/stats/StatsSection';
import WhyUsSection from './sections/why-us/WhyUsSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection
      bg_img={'/images/shared/main-hero.webp'}
      src="/images/shared/hero-wave-mint.png" 
      ariaLabel='نمای بیرونی درمانگاه'
      />
      <QuickLinksSection />
      <AboutSection />
      <StatsSection />
      <WhyUsSection />
      <ServicesSection />
      <DoctorsSection />
      <InsuranceSection />
      <ArticlesSection />
    </div>
  );
}
