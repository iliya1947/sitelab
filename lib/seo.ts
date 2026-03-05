import type { Metadata } from 'next';
import { Locale, locales } from '@/src/i18n';

const baseUrl = 'https://sitelab.example';

export const buildMetadata = ({ lang, title, description, path }: { lang: Locale; title: string; description: string; path: string }): Metadata => {
  const languagesMap = Object.fromEntries(locales.map((locale) => [locale, `${baseUrl}/${locale}${path}`]));

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}${path}`,
      languages: languagesMap
    }
  };
};
