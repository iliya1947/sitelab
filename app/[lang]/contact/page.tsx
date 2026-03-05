import ContactForm from '@/components/ContactForm';
import { Lang, getDictionary, isLang } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return {};
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return buildMetadata({ lang, title: `SiteLab | ${dictionary.nav.contact}`, description: dictionary.contact.subtitle, path: '/contact' });
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return (
    <section className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{dictionary.contact.title}</h1>
      <p className="mt-3 text-slate-300">{dictionary.contact.subtitle}</p>
      <div className="mt-6">
        <ContactForm labels={dictionary.contact} />
      </div>
    </section>
  );
}
