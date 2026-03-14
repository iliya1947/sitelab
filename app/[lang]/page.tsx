import Calculator from '@/components/Calculator';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import ServicesOverview from '@/components/ServicesOverview';
import TechStackSection from '@/components/TechStackSection';
import TrustSection from '@/components/TrustSection';
import { withLang } from '@/lib/routes';
import { buildMetadata } from '@/lib/seo';
import { getDictionary, isLocale, Locale } from '@/src/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return {};
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${dictionary.hero.title1} ${dictionary.hero.title2}`, description: dictionary.hero.subtitle, path: '' });
}

export default async function HomePage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} />

      <TechStackSection />

      <section id="services">
        <Reveal className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.servicesSection.title}</h2>
          <Link href={withLang(lang, '/services')} className="font-medium text-cyan-300 hover:text-cyan-200">
            {dictionary.servicesSection.cta}
          </Link>
        </Reveal>
        <ServicesOverview lang={lang} compact />
      </section>

      <TrustSection />

      <Calculator />
      <ProcessSteps />

      <section id="contact" className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.contact.title}</h2>
            <p className="mt-3 text-slate-300">{dictionary.contact.subtitle}</p>
          </Reveal>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
        <FAQ />
      </section>
    </>
  );
}
