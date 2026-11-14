import Image from 'next/image';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import type { ArticleHighlight } from '../../data/articles.data';

interface ArticleDialogProps {
  article: ArticleHighlight;
  onClose: () => void;
}

export default function ArticleDialog({ article, onClose }: ArticleDialogProps) {
  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        overlayClassName="bg-black/60"
        className="max-h-[85vh] w-[min(500px,calc(100%-2.5rem))] overflow-y-auto rounded-[22px] bg-white p-6 text-[#20332e]"
      >
        <DialogClose className="mb-4 cursor-pointer rounded-xl bg-[#ebf4ef] px-4 py-2">بستن ✕</DialogClose>
        <Image className="w-full rounded-[15px]" src={article.image} alt="" width={1000} height={1000} />
        <DialogTitle render={<h3 />}>{article.title}</DialogTitle>
        <DialogDescription>{article.description}</DialogDescription>
        <p className="text-[#777]">متن کامل مقاله هنوز در سایت ثبت نشده است.</p>
      </DialogContent>
    </Dialog>
  );
}
