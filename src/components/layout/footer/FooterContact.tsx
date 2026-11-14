
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { clinicInfo } from '@/shared/config/site';

const infoClass =
  'flex w-full min-w-0 items-start gap-2 text-[11px] leading-6';

const iconClass = 'mt-1 h-4 w-4 shrink-0';

export default function FooterContact() {
  return (
    <div className="flex min-w-0 flex-col items-start gap-2">
      <h3 className="m-0 mb-2 text-sm font-bold">
        تماس با ما
      </h3>

      <div className={infoClass}>
        <MapPin aria-hidden="true" className={iconClass} />
        <span className="min-w-0 break-words">
          {clinicInfo.address}
        </span>
      </div>

      <div className={infoClass}>
        <Phone aria-hidden="true" className={iconClass} />
        <span dir="ltr" className="text-left">
          33344999 - 33796566
        </span>
      </div>

      <div className={infoClass}>
        <Mail aria-hidden="true" className={iconClass} />
        <a
          className="min-w-0 break-all text-white"
          href={`mailto:${clinicInfo.email}`}
        >
          {clinicInfo.email}
        </a>
      </div>

      <div className={infoClass}>
        <Clock3 aria-hidden="true" className={iconClass} />
        <span className="min-w-0">
          {clinicInfo.workingHours}
        </span>
      </div>
    </div>
  );
}

