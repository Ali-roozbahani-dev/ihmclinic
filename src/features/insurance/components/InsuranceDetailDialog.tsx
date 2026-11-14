import InfoDialog from '@/shared/components/ui/InfoDialog';

interface InsuranceDetailDialogProps {
  /** نام بیمه‌ی انتخاب‌شده؛ با مقدار غیر null دیالوگ باز می‌شود. */
  title: string | null;
  onClose: () => void;
}

const MESSAGE =
  'برای اطمینان از پوشش خدمت مورد نظر، با همراه داشتن کارت شناسایی و کارت بیمه با پذیرش درمانگاه تماس بگیرید.';

/** دیالوگ «مشاهده جزئیات» (shadcn Dialog). */
export default function InsuranceDetailDialog({ title, onClose }: InsuranceDetailDialogProps) {
  return <InfoDialog title={title} message={MESSAGE} linkClassName="insurance-primary" onClose={onClose} />;
}
