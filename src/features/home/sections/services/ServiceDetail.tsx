import type { ClinicService } from '@/features/services';

interface ServiceDetailProps {
  service: ClinicService;
  onClose: () => void;
}

export default function ServiceDetail({ service, onClose }: ServiceDetailProps) {
  return (
    <div
      className="mx-auto mt-5 flex max-w-[780px] items-center justify-between gap-5 rounded-[14px] bg-[#e8f5ee] px-5 py-4 text-right max-[600px]:flex-col max-[600px]:items-start"
      role="status"
      aria-live="polite"
    >
      <div>
        <strong>{service.title}</strong>
        <p className="mt-2 leading-[1.8]">{service.description}</p>
      </div>
      <button
        type="button"
        className="cursor-pointer rounded-[10px] border border-[#9acabb] bg-white px-4 py-2"
        onClick={onClose}
      >
        بستن
      </button>
    </div>
  );
}
