import { Lang, getDictionary, getServiceBySlug, isLang, languages } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    getDictionary(lang).services.map((service) => ({ lang, service: service.slug }))
  );
}

export async function generateMetadata({ params }: { params: { lang: string; service: string } }) {
  if (!isLang(params.lang)) return {};
  const lang = params.lang as Lang;
  const service = getServiceBySlug(lang, params.service);
  if (!service) return {};

  return buildMetadata({ lang, title: `SiteLab | ${service.title}`, description: service.shortDescription, path: `/services/${service.slug}` });
}

export default function ServicePage({ params }: { params: { lang: string; service: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const service = getServiceBySlug(lang, params.service);

  if (!service) notFound();

  return (
    <article className="space-y-8">
      <header className="card p-8 text-white">
        <h1 className="text-3xl font-bold">{service.title}</h1>
        <p className="mt-3 text-blue-100">{service.offer}</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.servicePage.audienceTitle}</h2>
        <ul className="mt-3 list-disc space-y-1 ps-6">
          {service.audience.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.servicePage.includesTitle}</h2>
        <ul className="mt-3 list-disc space-y-1 ps-6">
          {service.includes.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.servicePage.technologiesTitle}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {service.technologies.map((item) => <span className="card rounded-full px-3 py-1" key={item}>{item}</span>)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.servicePage.demoTitle}</h2>
        {/* Replace this placeholder with real screenshots or live embeds */}
        <div className="card mt-3 border-dashed p-8 text-slate-300">
          Demo block placeholder for {service.title} interface.
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.servicePage.stepsTitle}</h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {service.steps.map((step, i) => (
            <li key={step} className="card p-4">{i + 1}. {step}</li>
          ))}
        </ol>
      </section>

      <section className="card p-6">
        <p className="text-xl font-semibold">{dictionary.servicePage.priceFromLabel}: <span className="price-highlight">{service.priceFrom}</span></p>
        <Link href={`/${lang}/contact`} className="primary-btn mt-4 inline-flex">
          {dictionary.servicePage.cta}
        </Link>
      </section>
    </article>
  );
}
