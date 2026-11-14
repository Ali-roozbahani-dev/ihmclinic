'use client';

import * as React from 'react';
import { Dialog as SheetPrimitive } from '@base-ui/react/dialog';

import { cn } from '@/lib/utils';

function Sheet(props: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root {...props} />;
}

function SheetTrigger(props: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose(props: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal(props: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        'fixed inset-0 z-2000 transition-opacity duration-200',
        'data-ending-style:opacity-0 data-starting-style:opacity-0',
        className,
      )}
      {...props}
    />
  );
}

type SheetSide = 'top' | 'right' | 'bottom' | 'left';

/** پنل کشویی. ظاهر (رنگ، سایه، padding) از className مصرف‌کننده می‌آید. */
function SheetContent({
  className,
  overlayClassName,
  children,
  side = 'right',
  ...props
}: SheetPrimitive.Popup.Props & { side?: SheetSide; overlayClassName?: string }) {
  return (
    <SheetPortal>
      <SheetOverlay className={overlayClassName} />
      <SheetPrimitive.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          'fixed z-2000 outline-none transition duration-200 ease-in-out',
          'data-ending-style:opacity-0 data-starting-style:opacity-0',
          'data-[side=top]:inset-x-0 data-[side=top]:top-0',
          'data-[side=top]:data-ending-style:-translate-y-10 data-[side=top]:data-starting-style:-translate-y-10',
          'data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0',
          'data-[side=bottom]:data-ending-style:translate-y-10 data-[side=bottom]:data-starting-style:translate-y-10',
          'data-[side=left]:inset-y-0 data-[side=left]:left-0',
          'data-[side=left]:data-ending-style:-translate-x-10 data-[side=left]:data-starting-style:-translate-x-10',
          'data-[side=right]:inset-y-0 data-[side=right]:right-0',
          'data-[side=right]:data-ending-style:translate-x-10 data-[side=right]:data-starting-style:translate-x-10',
          className,
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Popup>
    </SheetPortal>
  );
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return <SheetPrimitive.Title data-slot="sheet-title" className={cn(className)} {...props} />;
}

function SheetDescription({ className, ...props }: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn(className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
