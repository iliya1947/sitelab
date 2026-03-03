import ServicesOverview from '@/components/ServicesOverview';
import { Lang, getDictionary, isLang } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return {};
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${dictionary.nav.services}`, description: dictionary.servicesSection.title, path: '/services' });
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return (
    <section>
      <h1 className="text-3xl font-bold">{dictionary.nav.services}</h1>
      <p className="mt-2 text-slate-600">{dictionary.servicesSection.title}</p>
      <div className="mt-8">
        <ServicesOverview lang={lang} />
      </div>
    </section>
  );
}
