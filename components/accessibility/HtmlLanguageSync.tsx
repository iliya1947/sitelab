'use client';

import { Locale } from '@/src/i18n';
import { useEffect } from 'react';

export default function HtmlLanguageSync({ lang }: { lang: Locale }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  return null;
}
