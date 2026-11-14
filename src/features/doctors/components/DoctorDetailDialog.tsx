import InfoDialog from '@/shared/components/ui/InfoDialog';

interface DoctorDetailDialogProps {
  /** عنوان آیتم انتخاب‌شده؛ با مقدار غیر null دیالوگ باز می‌شود. */
  title: string | null;
  onClose: () => void;
}

const MESSAGE = 'برای دریافت اطلاعات کامل و هماهنگی زمان مراجعه، با پذیرش درمانگاه در ارتباط باشید.';

/** دیالوگ «رزومه» (shadcn Dialog). */
export default function DoctorDetailDialog({ title, onClose }: DoctorDetailDialogProps) {
  return <InfoDialog title={title} message={MESSAGE} linkClassName="doctors-primary" onClose={onClose} />;
}
