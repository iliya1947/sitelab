import type { MetadataRoute } from 'next';

import { en } from '@/src/i18n/locales/en';
import { siteConfig } from '@/src/config/site';

const STATIC_ROUTES = ['', '/services', '/calculator', '/process', '/contact'] as const;

const withLocalePath = (lang: (typeof siteConfig.languages)[number], route: (typeof STATIC_ROUTES)[number]) =>
  lang === 'he' ? route || '/' : `/${lang}${route}`;

const withLocaleServicePath = (lang: (typeof siteConfig.languages)[number], slug: string) =>
  lang === 'he' ? `/services/${slug}` : `/${lang}/services/${slug}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = en.services.items.map((service) => service.slug);

  return siteConfig.languages.flatMap((lang) => [
    ...STATIC_ROUTES.map((route) => ({
      url: `${siteConfig.url}${withLocalePath(lang, route)}`,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${siteConfig.url}${withLocaleServicePath(lang, slug)}`,
    })),
  ]);
}
