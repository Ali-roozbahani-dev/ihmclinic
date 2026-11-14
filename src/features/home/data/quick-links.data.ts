export interface QuickLink {
  title: string;
  image: string;
  detail: string;
  href ?: string;
}

export const quickLinks: QuickLink[] = [
  { title: 'نوبت دهی', image: '/images/home/quick-booking.png', detail: 'رزرو نوبت آنلاین' , href: "/doctors" },
  { title: 'جوابدهی آزمایشگاه', image: '/images/home/quick-lab.png', detail: 'دریافت جواب آزمایشگاه' },
  { title: 'جوابدهی رادیولوژی', image: '/images/shared/quick-radiology.png', detail: 'دریافت جواب رادیولوژی' },
  { title: 'جوابدهی سونوگرافی', image: '/images/home/quick-ultrasound.png', detail: 'دریافت جواب سونوگرافی' },
];
