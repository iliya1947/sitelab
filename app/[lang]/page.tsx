import Calculator from '@/components/Calculator';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesOverview from '@/components/ServicesOverview';
import { Lang, getDictionary, isLang } from '@/lib/i18n';
import { withLang } from '@/lib/routes';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) return {};
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return buildMetadata({ lang, title: `${dictionary.siteName} | ${dictionary.hero.title}`, description: dictionary.hero.subtitle, path: '' });
}

export default function HomePage({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} />

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.audiences.title}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {dictionary.audiences.items.map((item) => (
            <li key={item} className="rounded-xl border border-slate-200 bg-white p-4">{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">{dictionary.servicesSection.title}</h2>
          <Link href={withLang(lang, '/services')} className="font-medium text-brand-700">
            {dictionary.servicesSection.cta}
          </Link>
        </div>
        <ServicesOverview lang={lang} compact />
      </section>

      <Calculator labels={dictionary.calculator} />

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.whyUs.title}</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {dictionary.whyUs.points.map((point) => (
            <li key={point} className="rounded-xl border border-slate-200 bg-white p-4">{point}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.stack.title}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {dictionary.stack.items.map((item) => (
            <span key={item} className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-brand-900">{item}</span>
          ))}
        </div>
      </section>

      <ProcessSteps title={dictionary.processSection.title} steps={dictionary.processSection.steps} />
      <FAQ title={dictionary.faq.title} items={dictionary.faq.items} />

      <section>
        <h2 className="text-2xl font-semibold">{dictionary.contact.title}</h2>
        <p className="mt-2 text-slate-600">{dictionary.contact.subtitle}</p>
        <div className="mt-4">
          <ContactForm labels={dictionary.contact} />
        </div>
      </section>
    </>
  );
}
