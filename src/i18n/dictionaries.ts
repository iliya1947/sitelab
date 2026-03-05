import type { Dictionary, Locale } from '@/src/i18n/types';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/src/i18n/locales/en').then((m) => m.en),
  ru: () => import('@/src/i18n/locales/ru').then((m) => m.ru),
  he: () => import('@/src/i18n/locales/he').then((m) => m.he)
};

const englishDictionaryPromise = dictionaries.en();

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en;
  const dictionary = await loader();

  const fallback = await englishDictionaryPromise;
  return deepMerge(fallback, dictionary);
}

function deepMerge<T extends Record<string, unknown>>(base: T, override: T): T {
  const output: Record<string, unknown> = { ...base };

  Object.keys(override).forEach((key) => {
    const baseValue = output[key];
    const overrideValue = override[key];

    if (Array.isArray(baseValue) || Array.isArray(overrideValue)) {
      output[key] = overrideValue;
      return;
    }

    if (isObject(baseValue) && isObject(overrideValue)) {
      output[key] = deepMerge(baseValue as Record<string, unknown>, overrideValue as Record<string, unknown>);
      return;
    }

    output[key] = overrideValue ?? baseValue;
  });

  return output as T;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object';
}
