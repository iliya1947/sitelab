'use client';

import { getTranslations } from '@/locales';
import { Lang, isLang } from '@/lib/i18n';
import { useParams } from 'next/navigation';

export const useTranslations = () => {
  const params = useParams<{ lang?: string }>();
  const lang = params?.lang;
  const locale: Lang = lang && isLang(lang) ? lang : 'en';

  return getTranslations(locale);
};
