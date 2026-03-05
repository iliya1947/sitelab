import ProcessSteps from '@/components/ProcessSteps';
import { Lang, getDictionary, isLang } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return {};
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return buildMetadata({ lang, title: `SiteLab | ${dictionary.nav.process}`, description: dictionary.processSection.title, path: '/process' });
}

export default function ProcessPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return <ProcessSteps title={dictionary.processSection.title} stepLabel={dictionary.processSection.stepLabel} steps={dictionary.processSection.steps} />;
}
