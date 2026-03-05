import { Lang, getDictionary } from '@/lib/i18n';
import { withLang } from '@/lib/routes';
import Link from 'next/link';

type HeroProps = {
  lang: Lang;
};

export default function Hero({ lang }: HeroProps) {
  const dictionary = getDictionary(lang);

  return (
    <section className="hero-premium section-glow relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#05070f] px-6 py-16 text-white shadow-[0_35px_120px_rgba(8,8,20,0.65)] md:px-10 lg:py-20">
      <div className="absolute inset-0 -z-20 bg-[#05070f]" />
      <div className="hero-gradient-glow absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,10,15,0.3)_0%,rgba(10,10,15,0.8)_55%,rgba(8,8,14,0.96)_100%)]" />

      <div className="mx-auto max-w-3xl text-left">
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
          {dictionary.hero.badge}
        </p>

        <h1 className="mt-6 text-5xl font-black leading-[0.96] tracking-[-0.03em] md:text-6xl lg:text-[68px]">
          {dictionary.hero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-base text-slate-200 md:text-xl md:leading-relaxed">
          {dictionary.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link href={withLang(lang, '/contact')} className="primary-btn rounded-full px-8 py-3.5 font-semibold text-white">
            {dictionary.hero.cta}
          </Link>
          <Link
            href={withLang(lang, '/services')}
            className="btn-interactive rounded-full border border-white/25 bg-white/5 px-8 py-3.5 font-semibold text-white transition duration-300 hover:border-cyan-300/70 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]"
          >
            {dictionary.hero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
