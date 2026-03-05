import ProcessSteps from '@/components/ProcessSteps';
import { buildMetadata } from '@/lib/seo';
import { getDictionary, isLocale, Locale } from '@/src/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${dictionary.nav.process}`, description: dictionary.process.title, path: '/process' });
}

export default function ProcessPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  return <ProcessSteps />;
}
