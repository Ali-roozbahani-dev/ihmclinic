export type InsuranceType = 'base' | 'extra';

/** ردیف فهرست در صفحه‌ی «بیمه‌ها». */
export interface InsuranceEntry {
  name: string;
  type: InsuranceType;
  /** آدرس تصویر/لوگو؛ رشته‌ی خالی یعنی بدون تصویر. */
  src: string;
}
