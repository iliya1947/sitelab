'use client';

import CodeRainBackground from '@/components/CodeRainBackground';
import { withLang } from '@/lib/routes';
import { useTranslations } from '@/src/hooks/useTranslations';
import type { Locale } from '@/src/i18n';
import Link from 'next/link';

const cardPositions = [
  'start-2 top-4',
  'end-4 top-20',
  'start-10 bottom-10',
  'end-8 bottom-2'
];

export default function Hero({ lang }: { lang: Locale }) {
  const t = useTranslations();

  return (
    <section id="hero" className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-20 md:px-10">
      <div className="absolute inset-0">
        <CodeRainBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.1),rgba(2,6,23,0.82)_58%,rgba(2,6,23,0.96)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="text-center lg:text-start">
          <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">{t.hero.badge}</p>
          <h1 className="mt-6 text-5xl font-black leading-[0.94] tracking-tight md:text-7xl">
            <span>{t.hero.title1} </span>
            <span className="bg-gradient-to-r from-cyan-100 via-blue-200 to-violet-200 bg-clip-text text-transparent">{t.hero.title2}</span>
            <span> {t.hero.title3}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-slate-200 lg:mx-0">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href={withLang(lang, '/contact')} className="primary-btn rounded-full px-7 py-3 font-semibold">
              {t.hero.primaryCTA}
            </Link>
            <Link href={withLang(lang, '/services')} className="btn-interactive rounded-full border border-white/25 bg-white/5 px-7 py-3 font-semibold text-white">
              {t.hero.secondaryCTA}
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[390px] rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl lg:block">
          {t.hero.statCards.map((card, index) => (
            <article
              key={card.title}
              className={`absolute w-56 rounded-2xl border border-cyan-100/20 bg-slate-900/65 p-4 shadow-[0_14px_35px_rgba(2,6,23,0.55)] ${cardPositions[index] ?? ''}`} style={{ animation: `floatCard ${5 + index}s ease-in-out ${index * 0.2}s infinite` }}
            >
              <p className="text-[11px] uppercase tracking-[0.12em] text-cyan-100/80">{card.title}</p>
              <p className="mt-2 text-xl font-bold text-white">{card.value}</p>
              <p className="mt-2 text-xs text-slate-200">{card.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
