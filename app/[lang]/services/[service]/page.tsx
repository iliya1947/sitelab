import { buildMetadata } from '@/lib/seo';
import { withLang } from '@/lib/routes';
import { getDictionary, isLocale, locales, Locale } from '@/src/i18n';
import Link from 'next/link';
import ServiceHero from '@/components/services/ServiceHero';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const all = await Promise.all(locales.map((lang) => getDictionary(lang)));
  return locales.flatMap((lang, index) =>
    all[index].services.items.map((service) => ({ lang, service: service.slug }))
  );
}

export async function generateMetadata({ params }: { params: { lang: string; service: string } }) {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);
  const service = dictionary.services.items.find((item) => item.slug === params.service);
  if (!service) return {};

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${service.title}`, description: service.shortDescription, path: `/services/${service.slug}` });
}


export default async function ServicePage({ params }: { params: { lang: string; service: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);
  const service = dictionary.services.items.find((item) => item.slug === params.service);

  if (!service) notFound();

  const heroImages: string[] = [];

  const processSteps = [
    dictionary.process.steps[0],
    dictionary.process.steps[2],
    dictionary.process.steps[3],
    dictionary.process.steps[4]
  ];

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10">
      <section className="bg-slate-950 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <ServiceHero title={service.title} shortDescription={service.shortDescription} images={heroImages} />
          <div>
            <Link href={withLang(lang, '/calculator#calculator')} className="primary-btn inline-flex">
              {dictionary.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{dictionary.consultation.title}</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {dictionary.consultation.benefits.slice(0, 4).map((benefit) => (
            <li
              key={benefit}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-slate-800/70"
            >
              {benefit}
            </li>
          ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{dictionary.servicePage.featuresTitle}</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-slate-800/70"
            >
              {feature}
            </li>
          ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">{dictionary.process.title}</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-slate-800/70"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-2 text-lg font-medium text-white">{step}</p>
            </li>
          ))}
          </ol>
        </div>
      </section>

      <section className="section-glow bg-slate-950 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-3xl text-2xl font-semibold text-white md:text-3xl">
          {dictionary.servicePage.priceFromLabel}: <span className="price-highlight">{service.priceFrom}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={withLang(lang, '/contact')} className="primary-btn inline-flex">
              {dictionary.hero.ctaPrimary}
            </Link>
            <Link href={withLang(lang, '/calculator#calculator')} className="secondary-btn inline-flex">
              {dictionary.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
