import InfoDialog from '@/shared/components/ui/InfoDialog';

interface ServiceDetailDialogProps {
  /** عنوان آیتم انتخاب‌شده؛ با مقدار غیر null دیالوگ باز می‌شود. */
  title: string | null;
  onClose: () => void;
}

const MESSAGE = 'برای دریافت اطلاعات کامل و هماهنگی زمان مراجعه، با پذیرش درمانگاه در ارتباط باشید.';

/** دیالوگ «جزئیات» (shadcn Dialog). */
export default function ServiceDetailDialog({ title, onClose }: ServiceDetailDialogProps) {
  return <InfoDialog title={title} message={MESSAGE} linkClassName="services-primary" onClose={onClose} />;
}
