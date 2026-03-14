'use client';

import Reveal from '@/components/Reveal';
import { withLang } from '@/lib/routes';
import { useTranslations } from '@/src/hooks/useTranslations';
import type { Locale } from '@/src/i18n';
import Link from 'next/link';

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
        <Reveal key={service.slug} delayMs={index * 80}>
          <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-[0_14px_40px_rgba(6,182,212,0.2)]">
            <div
              className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(103,232,249,0.35), 0 0 24px rgba(34,211,238,0.25)' }}
              aria-hidden
            />

            <div className="relative inline-flex rounded-xl border border-white/10 bg-slate-900/90 p-3 text-3xl transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-110 group-hover:border-cyan-300/50 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" aria-hidden>
              {service.icon}
            </div>

            <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-white">{service.title}</h3>
            <p className="relative mt-3 text-slate-300">{service.shortDescription}</p>

            <Link
              href={withLang(lang, `/services/${service.slug}`)}
              className="relative mt-6 inline-flex items-center gap-2 font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-200"
            >
              {t.services.learnMore}
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
