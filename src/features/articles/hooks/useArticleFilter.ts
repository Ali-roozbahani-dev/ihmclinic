'use client';

import { useState } from 'react';
import { articles, categories } from '../data/articles.data';

const ALL_CATEGORIES = categories[0];

/** فیلتر مقالات بر اساس عبارت جست‌وجو (همزمان با تایپ) و دسته‌بندی. */
export function useArticleFilter() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(ALL_CATEGORIES);

  const visible = articles.filter(
    (article) =>
      (category === ALL_CATEGORIES || article.category === category || article.tags.includes(category)) &&
      `${article.title} ${article.summary}`.includes(query.trim()),
  );

  const reset = () => {
    setCategory(ALL_CATEGORIES);
    setQuery('');
  };

  return { query, setQuery, category, setCategory, visible, reset };
}
