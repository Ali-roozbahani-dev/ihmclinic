import type { InsuranceEntry } from '../types';

// منبع: فایل اکسل «لیست بیمه ها». آدرس لوگوی هر بیمه را در فیلد src بنویسید
// (مثلاً '/images/insurance/bime-iran.jpg'). رشته‌ی خالی یعنی بدون تصویر.
// نوع بیمه (پایه/تکمیلی) در اکسل نبود؛ مقدار type را در صورت نیاز اصلاح کنید.
export const insuranceEntries: InsuranceEntry[] = [
  { name: 'بیمه ایران', type: 'extra', src: '/images/insurance/bime-iran.jpg' },
  { name: 'بیمه دی', type: 'extra', src: '/images/insurance/bime-dey.png' },
  { name: 'بیمه سینا', type: 'extra', src: '/images/insurance/bime-sina.png' },
  { name: 'بیمه تامین اجتماعی', type: 'base', src: '/images/insurance/tamin-ejtemaei.jpg' },
  { name: 'بیمه سلامت', type: 'base', src: '/images/insurance/bime-salamat.png' },
  { name: 'بیمه نیروهای مسلح', type: 'base', src: '/images/insurance/niroohaye-mosalah.jpg' },
  { name: 'بیمه شهرداری', type: 'extra', src: '/images/insurance/bime-shahrdari.png' },
  { name: 'بیمه بانک ملت', type: 'extra', src: '/images/insurance/bime-melat.png' },
  { name: 'بیمه بانک تجارت', type: 'extra', src: '/images/insurance/bime-bank-tejarat.jfif' },
  { name: 'بیمه بانک صادرات', type: 'extra', src: '/images/insurance/bime-saderat.png' },
  { name: 'بیمه بانک مرکزی', type: 'extra', src: '/images/insurance/bime-markazi.png' },
  { name: 'بیمه بانک کشاورزی', type: 'extra', src: '/images/insurance/bime-keshavarzi.jpg' },
  { name: 'بیمه بانک سپه', type: 'extra', src: '/images/insurance/bime-sepah.jpg' },
  { name: 'بیمه بانک توسعه صادرات', type: 'extra', src: '/images/insurance/tose-e-saderat.png' },
];

export const insuranceTabs = [
  { value: 'all', label: 'همه' },
  { value: 'base', label: 'بیمه پایه' },
  { value: 'extra', label: 'بیمه تکمیلی' },
] as const;
