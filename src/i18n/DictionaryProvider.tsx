'use client';

import type { Dictionary, Locale } from '@/src/i18n';
import { createContext, useContext } from 'react';

type DictionaryContextValue = {
  locale: Locale;
  dictionary: Dictionary;
};

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({ locale, dictionary, children }: { locale: Locale; dictionary: Dictionary; children: React.ReactNode }) {
  return <DictionaryContext.Provider value={{ locale, dictionary }}>{children}</DictionaryContext.Provider>;
}

export function useDictionaryContext() {
  const context = useContext(DictionaryContext);

  if (!context) {
    throw new Error('useTranslations must be used within DictionaryProvider.');
  }

  return context;
}
