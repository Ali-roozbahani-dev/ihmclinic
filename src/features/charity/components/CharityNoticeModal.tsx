import Link from 'next/link';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

interface CharityNoticeModalProps {
  message: string;
  onClose: () => void;
}

/** پیام راهنما بعد از ثبت فرم کمک مالی (shadcn Dialog). */
export default function CharityNoticeModal({ message, onClose }: CharityNoticeModalProps) {
  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        overlayClassName="bg-[#24132d70]"
        className="w-max max-w-[min(440px,calc(100%-2.5rem))] rounded-2xl bg-white p-7 leading-loose"
      >
        <DialogTitle>اطلاعات و راهنمایی</DialogTitle>
        <DialogDescription>{message}</DialogDescription>
        <Link className="page-action" href="/contact">
          تماس با پذیرش
        </Link>
        <DialogClose className="m-2.5 rounded-lg border-0 px-5 py-2">بستن</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
