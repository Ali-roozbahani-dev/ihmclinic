export interface NavItem {
  label: string;
  href: string;
}

/** منوی اصلی هدر. */
export const mainNavigation: readonly NavItem[] = [
  { label: 'خانه', href: '/' },
  { label: 'خدمات ما', href: '/services' },
  { label: 'پزشکان', href: '/doctors' },
  { label: 'مقالات', href: '/articles' },
  { label: 'بیمه ها', href: '/insurance' },
  { label: 'درباره ما', href: '/about' },
  { label: 'تماس با ما', href: '/contact' },
];

/** لینک‌های «دسترسی سریع» فوتر. */
export const footerNavigation: readonly NavItem[] = [
  { label: 'خدمات درمانی', href: '/services' },
  { label: 'پزشکان و متخصصان', href: '/doctors' },
  { label: 'بیمه های طرف قرارداد', href: '/insurance' },
  { label: 'مقالات سلامت', href: '/articles' },
  { label: 'تماس با ما', href: '/contact' },
];
