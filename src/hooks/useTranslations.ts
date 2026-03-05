'use client';

import { useDictionaryContext } from '@/src/i18n/DictionaryProvider';

export const useTranslations = () => {
  const { dictionary } = useDictionaryContext();
  return dictionary;
};

export const useLocale = () => {
  const { locale } = useDictionaryContext();
  return locale;
};
