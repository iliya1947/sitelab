import { Locale } from '@/src/i18n';

export const withLang = (lang: Locale, path = '') => `/${lang}${path}`;
