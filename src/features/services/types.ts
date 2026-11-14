/** خدمت درمانی در اسلایدر صفحه‌ی اصلی. */
export interface ClinicService {
  id: string;
  title: string;
  description: string;
  /** کلید آیکون؛ در service-icons.ts به آیکون lucide نگاشت می‌شود. */
  icon: string;
}

/** ردیف فهرست در صفحه‌ی «خدمات». */
export interface DirectoryService {
  name: string;
  /** توضیح کوتاه (اختیاری). */
  text: string;
  /** آدرس تصویر؛ رشته‌ی خالی یعنی بدون تصویر. */
  src: string;
}

export type ServiceSort = 'related' | 'name';
