'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

interface InfoDialogProps {
  /** عنوان آیتم انتخاب‌شده؛ با مقدار غیر null دیالوگ باز می‌شود. */
  title: string | null;
  message: string;
  /** کلاس دکمه‌ی «تماس با پذیرش» که هر صفحه استایل خودش را دارد. */
  linkClassName: string;
  onClose: () => void;
}

/** دیالوگ اطلاعات (پزشکان / خدمات / بیمه‌ها) روی shadcn Dialog. */
export default function InfoDialog({ title, message, linkClassName, onClose }: InfoDialogProps) {
  // آخرین عنوان نگه داشته می‌شود تا متن در انیمیشن بسته‌شدن خالی نشود.
  const [shownTitle, setShownTitle] = useState(title);
  if (title !== null && title !== shownTitle) {
    setShownTitle(title);
  }

  return (
    <Dialog
      open={title !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        overlayClassName="bg-[#052e2466]"
        className="w-max max-w-[min(440px,90vw)] rounded-2xl bg-white p-[30px] shadow-[0_10px_50px_#0004]"
      >
        <DialogClose className="text-[#174d3c]" aria-label="بستن">
          <X />
        </DialogClose>

        <DialogTitle className="text-[20px]">{shownTitle}</DialogTitle>
        <DialogDescription className="text-[14px] leading-8">{message}</DialogDescription>

        <Link href="/contact" className={linkClassName} onClick={onClose}>
          تماس با پذیرش
        </Link>
      </DialogContent>
    </Dialog>
  );
}
