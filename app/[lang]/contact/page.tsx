import ContactForm from '@/components/ContactForm';
import { buildMetadata } from '@/lib/seo';
import { getDictionary, isLocale, Locale } from '@/src/i18n';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${dictionary.nav.contact}`, description: dictionary.contact.subtitle, path: '/contact' });
}

export default async function ContactPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <section className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{dictionary.contact.title}</h1>
      <p className="mt-3 text-slate-300">{dictionary.contact.subtitle}</p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </section>
  );
}
