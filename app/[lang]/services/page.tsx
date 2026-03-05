import ServicesOverview from '@/components/ServicesOverview';
import { buildMetadata } from '@/lib/seo';
import { getDictionary, isLocale, Locale } from '@/src/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${dictionary.nav.services}`, description: dictionary.servicesSection.title, path: '/services' });
}

export default async function ServicesPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{dictionary.nav.services}</h1>
      <p className="mt-3 text-slate-300">{dictionary.servicesSection.title}</p>
      <div className="mt-8">
        <ServicesOverview lang={lang} />
      </div>
    </section>
  );
}
