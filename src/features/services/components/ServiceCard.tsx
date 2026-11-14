import type { ClinicService } from '../types';
import { defaultServiceIcon, serviceIcons } from './service-icons';

interface ServiceCardProps {
  service: ClinicService;
  onSelect: (service: ClinicService) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon] ?? defaultServiceIcon;

  return (
    <button
      className="flex h-full min-h-[160px] w-full cursor-pointer flex-col items-center gap-2.5 rounded-[20px] bg-white px-[7px] py-[18px] text-inherit shadow-[0_3px_14px_#0002] transition-[translate,box-shadow] duration-[180ms] ease-[ease] hover:-translate-y-[3px] hover:shadow-[0_6px_18px_#0002] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#198f78] max-[760px]:px-[5px] max-[760px]:py-3"
      type="button"
      onClick={() => onSelect(service)}
      aria-label={`مشاهده توضیحات ${service.title}`}
    >
      <Icon className="size-[49px] text-[#195e61] max-[760px]:w-[34px]" aria-hidden="true" strokeWidth={1.7} />
      <strong className="text-[13px] max-[760px]:text-[11px]">{service.title}</strong>
      <small className="text-[11px] text-[#6c7571]">مشاهده جزئیات</small>
    </button>
  );
}
