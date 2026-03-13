import type { MetadataRoute } from 'next';

import { en } from '@/src/i18n/locales/en';
import { siteConfig } from '@/src/config/site';

const STATIC_ROUTES = ['', '/services', '/calculator', '/process', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = en.services.items.map((service) => service.slug);

  return siteConfig.languages.flatMap((lang) => [
    ...STATIC_ROUTES.map((route) => ({
      url: `${siteConfig.url}/${lang}${route}`,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${siteConfig.url}/${lang}/services/${slug}`,
    })),
  ]);
}
