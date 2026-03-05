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
      <header className="section-glow card p-8 text-white">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{service.title}</h1>
        <p className="mt-3 text-blue-100">{service.offer}</p>
      </header>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.servicePage.audienceTitle}</h2>
        <ul className="mt-3 list-disc space-y-1 ps-6">{service.audience.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.servicePage.includesTitle}</h2>
        <ul className="mt-3 list-disc space-y-1 ps-6">{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.servicePage.technologiesTitle}</h2>
        <div className="mt-3 flex flex-wrap gap-2">{service.technologies.map((item) => <span className="card rounded-full px-3 py-1" key={item}>{item}</span>)}</div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.servicePage.demoTitle}</h2>
        <div className="card mt-3 border-dashed p-8 text-slate-300">{dictionary.servicePage.demoPlaceholder} {service.title}.</div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.servicePage.stepsTitle}</h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {service.steps.map((step, i) => (
            <li key={step} className="card p-4">{i + 1}. {step}</li>
          ))}
        </ol>
      </section>

      <section className="card p-6">
        <p className="text-xl font-semibold">{dictionary.servicePage.priceFromLabel}: <span className="price-highlight">{service.priceFrom}</span></p>
        <Link href={withLang(lang, '/contact')} className="primary-btn mt-4 inline-flex">{dictionary.servicePage.cta}</Link>
      </section>
    </article>
  );
}
