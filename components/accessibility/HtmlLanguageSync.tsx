'use client';

import { useEffect } from 'react';

export default function HtmlLanguageSync({ lang }: { lang: 'he' | 'en' | 'ru' }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  return null;
}
