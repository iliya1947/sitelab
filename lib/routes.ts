import { Locale } from '@/src/i18n';

export const withLang = (lang: Locale, path = '') => {
  const normalizedPath = path.startsWith('/') || path === '' ? path : `/${path}`;
  return lang === 'he' ? normalizedPath || '/' : `/${lang}${normalizedPath}`;
};
