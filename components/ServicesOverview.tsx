'use client';

import ServiceCard from '@/components/ServiceCard';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/src/i18n';
import { withLang } from '@/lib/routes';

type ServicesOverviewProps = {
  lang: Locale;
  compact?: boolean;
};

export default function ServicesOverview({ lang, compact = false }: ServicesOverviewProps) {
  const t = useTranslations();
  const services = compact ? t.services.items.slice(0, 3) : t.services.items;

  return (
    <section className="section-glow">
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
    </section>
  );
}
