import { ExternalLink, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { clinicInfo } from '@/shared/config/site';

interface ContactCardsProps {
  mapUrl: string;
}

export default function ContactCards({ mapUrl }: ContactCardsProps) {
  return (
    <section className="cr-cards" aria-label="راه‌های ارتباط با درمانگاه">
      <article>
        <div className="cr-card-heading">
          <span>
            <MessageSquare aria-hidden="true" />
          </span>
          <h2>ارتباط و پیگیری</h2>
        </div>
        <p>برای ارسال پیام و پیگیری درخواست‌ها با پذیرش درمانگاه در ارتباط باشید.</p>
        <a className="cr-action" href={`mailto:${clinicInfo.email}`}>
          <Mail size={18} /> ارسال ایمیل
        </a>
        <a className="cr-email" href={`mailto:${clinicInfo.email}`}>
          {clinicInfo.email}
        </a>
      </article>

      <article>
        <div className="cr-card-heading">
          <span>
            <MapPin aria-hidden="true" />
          </span>
          <h2>یافتن مسیر</h2>
        </div>
        <p>آدرس دقیق درمانگاه را مشاهده کرده و با نقشه، مسیر خود را پیدا کنید.</p>
        <a className="cr-action" href={mapUrl} target="_blank" rel="noopener noreferrer">
          مشاهده در نقشه <ExternalLink size={16} />
        </a>
      </article>

      <article>
        <div className="cr-card-heading">
          <span>
            <Phone aria-hidden="true" />
          </span>
          <h2>تماس مستقیم</h2>
        </div>
        <p>برای ارتباط سریع با پذیرش درمانگاه، شماره تماس را لمس کنید.</p>
        <a className="cr-action" href="tel:+982133344999" dir="ltr">
          ۰۲۱–۳۳۳۴۴۹۹۹
        </a>
        <a className="cr-secondary-phone" href="tel:+982133796566" dir="ltr">
          ۰۲۱–۳۳۷۹۶۵۶۶
        </a>
      </article>
    </section>
  );
}
