'use client';

import { Lang } from '@/lib/i18n';
import { useEffect } from 'react';

export default function HtmlLanguageSync({ lang }: { lang: Lang }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = 'ltr';
  }, [lang]);

  return null;
}
