'use client';

import ServiceCard from '@/components/ServiceCard';
import { withLang } from '@/lib/routes';
import { useTranslations } from '@/src/hooks/useTranslations';
import type { Locale } from '@/src/i18n';

type ServicesOverviewProps = {
  lang: Locale;
  compact?: boolean;
};

export default function ServicesOverview({ lang, compact = false }: ServicesOverviewProps) {
  const t = useTranslations();
  const services = compact ? t.services.items.slice(0, 3) : t.services.items;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service, index) => (
        <ServiceCard
          key={service.slug}
          icon={service.icon}
          title={service.title}
          description={service.shortDescription}
          href={withLang(lang, `/services/${service.slug}`)}
          learnMoreLabel={t.services.learnMore}
          index={index}
        />
      ))}
    </div>
  );
}
