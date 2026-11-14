// داده‌های نمایشی فعلی حفظ شده‌اند و باید پیش از انتشار نهایی تأیید شوند.

export const quickLinks = [
  {
    title: 'نوبت دهی',
    image: '/assets/quick-booking.png',
    detail: 'رزرو نوبت آنلاین',
  },
  {
    title: 'جوابدهی آزمایشگاه',
    image: '/assets/quick-lab.png',
    detail: 'دریافت جواب آزمایشگاه',
  },
  {
    title: 'جوابدهی رادیولوژی',
    image: '/assets/quick-radiology.png',
    detail: 'دریافت جواب رادیولوژی',
  },
  {
    title: 'جوابدهی سونوگرافی',
    image: '/assets/quick-ultrasound.png',
    detail: 'دریافت جواب سونوگرافی',
  },
];

export const links = [
  ['خانه', '/'],
  ['خدمات', '/services'],
  ['پزشکان', '/doctors'],
  ['مقالات', '/articles'],
  ['بیمه ها', '/insurance'],
  ['درباره ما', '/about'],
  ['تماس با ما', '/contact'],
] as const;

export interface ClinicService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// خدمات معرفی‌شده باید پیش از انتشار نهایی با خدمات واقعی درمانگاه تطبیق داده شوند.
export const clinicServices: ClinicService[] = [
  {
    id: 'ultrasound',
    title: 'سونوگرافی',
    description: 'بررسی و تصویربرداری تشخیصی با استفاده از امواج صوتی.',
    icon: 'scan',
  },
  {
    id: 'dentistry',
    title: 'دندان‌پزشکی',
    description: 'معاینه و خدمات عمومی سلامت دهان و دندان.',
    icon: 'tooth',
  },
  {
    id: 'cardiology',
    title: 'قلب و عروق',
    description: 'مشاوره و ارزیابی سلامت قلب و عروق.',
    icon: 'heart',
  },
  {
    id: 'laboratory',
    title: 'آزمایشگاه',
    description: 'انجام آزمایش‌های تشخیصی و بررسی نتایج.',
    icon: 'flask',
  },
  {
    id: 'radiology',
    title: 'رادیولوژی',
    description: 'خدمات تصویربرداری برای کمک به تشخیص پزشکی.',
    icon: 'scan-line',
  },
  {
    id: 'neurology',
    title: 'مغز و اعصاب',
    description: 'ویزیت و ارزیابی مشکلات دستگاه عصبی.',
    icon: 'brain',
  },
  {
    id: 'general',
    title: 'پزشکی عمومی',
    description: 'ویزیت اولیه، بررسی علائم و راهنمایی درمانی.',
    icon: 'stethoscope',
  },
  {
    id: 'pediatrics',
    title: 'اطفال',
    description: 'پایش سلامت و مراقبت پزشکی کودکان.',
    icon: 'baby',
  },
  {
    id: 'orthopedics',
    title: 'ارتوپدی',
    description: 'بررسی مشکلات استخوان، مفاصل و حرکت.',
    icon: 'bone',
  },
  {
    id: 'dermatology',
    title: 'پوست و مو',
    description: 'ارزیابی مشکلات پوست و مو.',
    icon: 'activity',
  },
  {
    id: 'gynecology',
    title: 'زنان و زایمان',
    description: 'مشاوره و خدمات مراقبتی سلامت بانوان.',
    icon: 'user-round',
  },
  {
    id: 'physiotherapy',
    title: 'فیزیوتراپی',
    description: 'کمک به بهبود تحرک و بازتوانی جسمی.',
    icon: 'accessibility',
  },
];

export interface InsuranceProvider {
  id: string;
  name: string;
  image: string;
}

// Names supplied by the clinic. Confirm contractual status before publishing.
export const insurers: InsuranceProvider[] = [
  { id: 'iran', name: 'ایران', image: '/assets/insurer-1.png' },
  { id: 'dey', name: 'دی', image: '' },
  { id: 'sina', name: 'سینا', image: '/assets/insurer-3.png' },
  { id: 'social-security', name: 'تامین اجتماعی', image: '/assets/insurer-5.png' },
  { id: 'salamat', name: 'سلامت', image: '' },
  { id: 'armed-forces', name: 'نیروهای مسلح', image: '' },
  { id: 'municipality', name: 'شهرداری', image: '' },
  { id: 'mellat', name: 'ملت', image: '' },
  { id: 'tejarat', name: 'تجارت', image: '' },
  { id: 'saderat', name: 'صادرات', image: '' },
  { id: 'markazi', name: 'مرکزی', image: '' },
  { id: 'keshavarzi', name: 'کشاورزی', image: '' },
  { id: 'sepah', name: 'سپه', image: '' },
  { id: 'export-development', name: 'توسعه صادرات', image: '' },
];
