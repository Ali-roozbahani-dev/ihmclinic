import { Clock3, MapPin, Phone } from 'lucide-react';
import { clinicInfo } from '@/shared/config/site';

interface ContactMapProps {
  mapUrl: string;
}

export default function ContactMap({ mapUrl }: ContactMapProps) {
  return (
    <section className="cr-map" aria-labelledby="cr-address">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/contact/footer-map-new.png"
        alt="نقشه نمونه محدوده درمانگاه دارالشفاء امام مجتبی و خیابان‌های اطراف"
        loading="lazy"
      />

      <div className="cr-map-info">
        <div>
          <MapPin aria-hidden="true" />
          <section>
            <h2 id="cr-address">آدرس درمانگاه</h2>
            <p>{clinicInfo.address}</p>
          </section>
        </div>
        <div>
          <Clock3 aria-hidden="true" />
          <section>
            <h3>ساعات فعالیت</h3>
            <p>{clinicInfo.workingHours}</p>
          </section>
        </div>
        <div>
          <Phone aria-hidden="true" />
          <section>
            <h3>شماره تماس</h3>
            <a href="tel:+982133344999" dir="ltr">
              33344999
            </a>
            <span> – </span>
            <a href="tel:+982133796566" dir="ltr">
              33796566
            </a>
          </section>
        </div>
      </div>

      <a className="cr-map-link" href={mapUrl} target="_blank" rel="noopener noreferrer">
        <MapPin size={17} /> باز کردن نقشه و مسیریابی
      </a>
    </section>
  );
}
