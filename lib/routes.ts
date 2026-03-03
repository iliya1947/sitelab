import { Lang } from '@/lib/i18n';

export const withLang = (lang: Lang, path = '') => `/${lang}${path}`;
