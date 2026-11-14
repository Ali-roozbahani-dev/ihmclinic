import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

export type HeaderAction = 'charity' | 'account';

const actionContent: Record<HeaderAction, { title: string; message: string }> = {
  charity: {
    title: 'کمک به خیریه',
    message: 'لینک رسمی درگاه کمک به خیریه هنوز ثبت نشده است.',
  },
  account: {
    title: 'ورود کاربران',
    message: 'آدرس رسمی سامانه کاربران هنوز ثبت نشده است.',
  },
};

interface HeaderActionDialogProps {
  action: HeaderAction;
  onClose: () => void;
}

/** پیام «هنوز ثبت نشده» برای دکمه‌هایی که آدرس نهایی ندارند (shadcn Dialog). */
export default function HeaderActionDialog({ action, onClose }: HeaderActionDialogProps) {
  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        overlayClassName="bg-[rgb(0_0_0/45%)]"
        className="w-[min(calc(100%-2.5rem),420px)] rounded-2xl bg-white p-7 text-right font-[family-name:IRANSansX,Tahoma,sans-serif] shadow-[0_18px_60px_rgb(0_0_0/18%)]"
      >
        <DialogTitle className="mb-3 text-[20px]">{actionContent[action].title}</DialogTitle>
        <DialogDescription className="mb-[22px] leading-loose">
          {actionContent[action].message}
        </DialogDescription>
        <DialogClose className="rounded-[9px] bg-[#05623f] px-5 py-2.5 text-white">متوجه شدم</DialogClose>
      </DialogContent>
    </Dialog>
  );
}
