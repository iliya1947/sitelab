import type { Metadata } from 'next';
import { Lang, languages } from '@/lib/i18n';

const baseUrl = 'https://sitelab.example';

export const buildMetadata = ({
  lang,
  title,
  description,
  path
}: {
  lang: Lang;
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const languagesMap = Object.fromEntries(
    languages.map((locale) => [locale, `${baseUrl}/${locale}${path}`])
  );

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}${path}`,
      languages: languagesMap
    }
  };
};
