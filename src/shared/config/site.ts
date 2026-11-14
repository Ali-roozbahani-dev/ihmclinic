/** اطلاعات ثابت درمانگاه که در چند بخش سایت تکرار می‌شود. */
export const clinicInfo = {
  address: 'خیابان پیروزی، خیابان شکوفه، خیابان شهیدان نورصالحی پلاک ۸۶',
  email: 'dema.darman@gmail.com',
  workingHours: '۸ الی ۲۲',
} as const;

/** ساخت لینک جست‌وجوی گوگل‌مپ برای یک عبارت. */
export function buildMapSearchUrl(query: string): string {
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
}
