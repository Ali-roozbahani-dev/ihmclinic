import { ChevronLeft } from 'lucide-react';
import type { DirectoryService } from '../types';

interface ServiceRowProps {
  service: DirectoryService;
  onOpen: (name: string) => void;
}

export default function ServiceRow({ service, onOpen }: ServiceRowProps) {
  return (
    <article className="services-row">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={service.src || undefined} alt={service.name} />

      <div>
        <h2>{service.name}</h2>
        {service.text && <p>{service.text}</p>}
      </div>

      <button aria-label={`اطلاعات ${service.name}`} onClick={() => onOpen(service.name)}>
        <ChevronLeft size={26} />
      </button>
    </article>
  );
}
