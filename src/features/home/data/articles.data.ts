export interface ArticleHighlight {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const articleHighlights: ArticleHighlight[] = [
  {
    id: 'heart',
    title: 'بیماری‌های قلبی و عروقی؛',
    description: 'علائم هشداردهنده، روش‌های پیشگیری و درمان',
    image: '/images/home/article-heart-hq.png',
    date: '۱۴۰۵/۰۶/۲۲',
  },
  {
    id: 'brain',
    title: 'بیماری‌های مغز و اعصاب؛',
    description: 'علائم شایع، روش‌های تشخیص و راهکارهای درمان',
    image: '/images/home/article-brain-hq.png',
    date: '۱۴۰۵/۰۶/۲۲',
  },
  {
    id: 'dental',
    title: 'مراقبت از دهان و دندان؛',
    description: 'راهکارهای پیشگیری از پوسیدگی و بیماری‌های لثه',
    image: '/images/home/article-dental-hq.png',
    date: '۱۴۰۵/۰۶/۲۲',
  },
];
