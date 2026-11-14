'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { Article } from '../types';

interface ArticleDialogProps {
  /** مقاله‌ی انتخاب‌شده؛ با مقدار غیر null دیالوگ باز می‌شود. */
  article: Article | null;
  onClose: () => void;
}

/** نمایش متن مقاله در shadcn Dialog. */
export default function ArticleDialog({ article, onClose }: ArticleDialogProps) {
  // آخرین مقاله نگه داشته می‌شود تا محتوا در انیمیشن بسته‌شدن خالی نشود.
  const [shown, setShown] = useState(article);
  if (article && article !== shown) {
    setShown(article);
  }

  return (
    <Dialog
      open={article !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        overlayClassName="bg-[#102c2580]"
        className="max-h-[85dvh] w-[min(640px,calc(100%-30px))] overflow-y-auto rounded-[18px] bg-white p-[26px] text-[#193d30] shadow-[0_20px_80px_#0003]"
      >
        {shown && (
          <>
            <DialogClose
              className="grid place-items-center rounded-full bg-[#edf5ef] p-2 text-[#165c3d]"
              aria-label="بستن مقاله"
            >
              <X />
            </DialogClose>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shown.image}
              alt=""
              className="my-3.5 h-[180px] w-full rounded-xl object-cover min-[481px]:h-[230px]"
            />
            <span className="text-xs text-[#498568]">{shown.category}</span>
            <DialogTitle className="text-2xl">{shown.title}</DialogTitle>
            <DialogDescription className="text-sm leading-[2.1]">{shown.summary}</DialogDescription>
            <p className="text-sm leading-[2.1]">{shown.body}</p>
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#075d3d] px-5 py-2.5 text-white"
            >
              ارتباط با درمانگاه <ArrowLeft size={16} />
            </Link>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
