import Calculator from '@/components/Calculator';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Hero from '@/components/Hero';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
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
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.audiences.title}</h2>
        </Reveal>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {dictionary.audiences.items.map((item, index) => (
            <Reveal key={item} delayMs={index * 70}>
              <li className="card p-6">{item}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section>
        <Reveal className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.servicesSection.title}</h2>
          <Link href={withLang(lang, '/services')} className="font-medium text-cyan-300 hover:text-cyan-200">
            {dictionary.servicesSection.cta}
          </Link>
        </Reveal>
        <ServicesOverview lang={lang} compact />
      </section>

      <Calculator labels={dictionary.calculator} />

      <section>
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.whyUs.title}</h2>
        </Reveal>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {dictionary.whyUs.points.map((point, index) => (
            <Reveal key={point} delayMs={index * 70}>
              <li className="card p-6">{point}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section>
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.stack.title}</h2>
        </Reveal>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {dictionary.stack.items.map((item, index) => (
            <Reveal key={item} delayMs={index * 60}>
              <span className="logo-item card flex items-center justify-center px-4 py-4 text-center font-medium text-slate-300">{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessSteps title={dictionary.processSection.title} steps={dictionary.processSection.steps} />
      <FAQ title={dictionary.faq.title} items={dictionary.faq.items} />

      <section>
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{dictionary.contact.title}</h2>
          <p className="mt-3 text-slate-300">{dictionary.contact.subtitle}</p>
        </Reveal>
        <div className="mt-6">
          <ContactForm labels={dictionary.contact} />
        </div>
      </section>
    </>
  );
}
