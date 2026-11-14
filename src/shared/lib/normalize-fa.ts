/** یکسان‌سازی متن فارسی برای جست‌وجو (ی/ک عربی، نیم‌فاصله و فاصله‌های اضافه). */
export const normalizeFa = (value: string) =>
  value
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[\s‌]+/g, ' ')
    .trim();

/** آیا `text` شامل `query` است؟ (بعد از نرمال‌سازی هر دو) */
export const includesFa = (text: string, query: string) =>
  normalizeFa(text).includes(normalizeFa(query));
