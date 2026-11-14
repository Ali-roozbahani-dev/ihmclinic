import type { ClinicService } from '../types';

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
