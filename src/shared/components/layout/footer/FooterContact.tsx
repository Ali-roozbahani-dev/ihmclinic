import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { clinicInfo } from '@/shared/config/site';

const infoClass = 'flex w-full min-w-0 items-center gap-[9px] text-[10px] leading-[1.8]';
const iconClass = 'h-[15px] w-[15px] shrink-0';

export default function FooterContact() {
  return (
    <div className="flex min-w-0 flex-col items-start gap-[7px]">
      <h3 className="m-0 mb-[5px] text-[15px] font-bold">تماس با ما</h3>
      <div className={infoClass}><MapPin aria-hidden="true" className={iconClass} /><span className="min-w-0 break-words">{clinicInfo.address}</span></div>
      <div className={infoClass}><Phone aria-hidden="true" className={iconClass} /><span dir="ltr">33344999 - 33796566</span></div>
      <div className={infoClass}><Mail aria-hidden="true" className={iconClass} /><a className="break-all text-white" href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a></div>
      <div className={infoClass}><Clock3 aria-hidden="true" className={iconClass} /><span>{clinicInfo.workingHours}</span></div>
    </div>
  );
}
