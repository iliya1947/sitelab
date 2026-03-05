import { Lang } from '@/lib/i18n';
import { en } from '@/locales/en';
import { he } from '@/locales/he';
import { ru } from '@/locales/ru';
import type { Translations } from '@/locales/types';

const translationsByLang: Record<Lang, Translations> = {
  en,
  ru,
  he
};

export const getTranslations = (lang: Lang): Translations => translationsByLang[lang];
