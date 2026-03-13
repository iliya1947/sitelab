import type { MetadataRoute } from 'next';

import { en } from '@/src/i18n/locales/en';

const BASE_URL = 'https://sitelab.co.il';
const LANGUAGES = ['en', 'ru', 'he'] as const;
const STATIC_ROUTES = ['', '/services', '/calculator', '/process', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = en.services.items.map((service) => service.slug);

  return LANGUAGES.flatMap((lang) => [
    ...STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}/${lang}${route}`,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/${lang}/services/${slug}`,
    })),
  ]);
}
