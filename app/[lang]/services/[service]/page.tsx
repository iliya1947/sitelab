import { buildMetadata } from '@/lib/seo';
import { withLang } from '@/lib/routes';
import { getDictionary, isLocale, locales, Locale } from '@/src/i18n';
import Link from 'next/link';
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

  return (
    <article className="space-y-8">
      <header className="section-glow card p-8 text-white md:p-12">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{service.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-blue-100">{service.shortDescription}</p>
      </header>

      <section className="card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{dictionary.servicePage.detailsTitle}</h2>
        <p className="mt-4 text-slate-200">{service.longDescription}</p>
      </section>

      <section className="card p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{dictionary.servicePage.featuresTitle}</h2>
        <ul className="mt-4 list-disc space-y-2 ps-6 text-slate-200">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="card p-6 md:p-8">
        <p className="text-xl font-semibold">{dictionary.servicePage.priceFromLabel}: <span className="price-highlight">{service.priceFrom}</span></p>
        <Link href={withLang(lang, '/calculator#calculator')} className="primary-btn mt-4 inline-flex">
          {dictionary.servicePage.quoteCta}
        </Link>
      </section>
    </article>
  );
}
