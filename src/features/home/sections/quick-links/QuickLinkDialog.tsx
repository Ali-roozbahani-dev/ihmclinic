import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

interface QuickLinkDialogProps {
  title: string;
  onClose: () => void;
}

/** پیام «آدرس سامانه هنوز ثبت نشده» برای کارت‌های دسترسی سریع. */
export default function QuickLinkDialog({ title, onClose }: QuickLinkDialogProps) {
  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        overlayClassName="bg-[rgba(12,33,28,0.56)]"
        className="w-[min(calc(100%-2.5rem),440px)] rounded-[18px] bg-white p-7 text-right shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
      >
        <DialogTitle className="mb-3 text-[23px] text-[#075b43]">{title}</DialogTitle>
        <DialogDescription className="mb-[18px] leading-[2]">
          آدرس سامانه مربوطه هنوز ثبت نشده است. لطفاً برای دریافت اطلاعات با پذیرش درمانگاه تماس بگیرید.
        </DialogDescription>
        <DialogClose className="cursor-pointer rounded-3xl bg-[#076643] px-6 py-2.5 text-white">
          متوجه شدم
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
