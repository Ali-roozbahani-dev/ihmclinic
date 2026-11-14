import { buildMapSearchUrl } from '@/shared/config/site';
import './contact-design.css';
import ContactCards from './components/ContactCards';
import ContactMap from './components/ContactMap';
import HeroSection from '@/shared/components/ui/HeroSection';

const mapUrl = buildMapSearchUrl('دارالشفاء امام مجتبی تهران خیابان نورصالحی پلاک ۸۶');

export default function ContactPage() {
  return (
    <div className="contact-reference">
      <HeroSection
      bgPositionClass='bg-center'
      bg_img='/assets/contact-reception-hero.webp'
      src="/images/shared/hero-wave-mint.png" 
      ariaLabel="تماس با ما"
      />
      <div className="cr-container">
        <ContactCards mapUrl={mapUrl} />
        <ContactMap mapUrl={mapUrl} />
      </div>
    </div>
  );
}
