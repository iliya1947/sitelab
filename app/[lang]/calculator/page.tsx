import Calculator from '@/components/Calculator';
import { buildMetadata } from '@/lib/seo';
import { getDictionary, isLocale, Locale } from '@/src/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${dictionary.calculator.title}`, description: dictionary.calculator.title, path: '/calculator' });
}

export default function CalculatorPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  return <Calculator />;
}
