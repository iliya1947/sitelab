import { Lang } from '@/lib/i18n';
import { withLang } from '@/lib/routes';
import Link from 'next/link';

type HeroProps = {
  lang: Lang;
  title: string;
  subtitle: string;
  cta: string;
};

export default function Hero({ lang, title, subtitle, cta }: HeroProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 px-6 py-16 text-white shadow-card md:px-12">
      {/* Hero copy can be replaced with production marketing text */}
      <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-blue-100">{subtitle}</p>
      <Link
        href={withLang(lang, '/contact')}
        className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-brand-900 transition hover:bg-blue-50"
      >
        {cta}
      </Link>
    </section>
  );
}
