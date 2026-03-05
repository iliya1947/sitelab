'use client';

import { Lang } from '@/lib/i18n';
import { withLang } from '@/lib/routes';
import Link from 'next/link';
import { CSSProperties, MouseEvent } from 'react';

type HeroProps = {
  lang: Lang;
};

const techCards = [
  {
    title: 'Performance',
    value: '98 Lighthouse',
    detail: 'Fast, stable, conversion-first experiences',
    className: 'left-4 top-6'
  },
  {
    title: 'Delivery',
    value: '3 Week Launch',
    detail: 'From strategy to production-ready release',
    className: 'right-4 top-24'
  },
  {
    title: 'Search Engine Visibility',
    value: 'SEO Optimized',
    detail: 'Built for discoverability and intent capture',
    className: 'left-14 bottom-10'
  },
  {
    title: 'Stack',
    value: 'Next.js / TypeScript',
    detail: 'Modern architecture for scale and speed',
    className: 'right-12 bottom-4'
  }
];

const trustedBy = ['Seed-stage SaaS', 'VC-backed product teams', 'High-growth B2B brands', 'Premium eCommerce'];

export default function Hero({ lang }: HeroProps) {
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const bounds = target.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    target.style.setProperty('--cursor-x', `${x}%`);
    target.style.setProperty('--cursor-y', `${y}%`);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="hero-premium section-glow relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#05070f] px-6 py-16 text-white shadow-[0_35px_120px_rgba(8,8,20,0.65)] md:px-10 lg:py-20"
      style={{ '--cursor-x': '50%', '--cursor-y': '50%' } as CSSProperties}
    >
      <div className="absolute inset-0 -z-20 bg-[#05070f]" />
      <div className="hero-gradient-glow absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,10,15,0.3)_0%,rgba(10,10,15,0.8)_55%,rgba(8,8,14,0.96)_100%)]" />
      <div className="hero-cursor-light absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="motion-reveal is-visible text-left">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Premium web engineering
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[0.96] tracking-[-0.03em] md:text-6xl lg:text-[68px]">
            <span className="block">Build High-End</span>
            <span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-200 bg-clip-text text-transparent">Custom Websites</span>
            <span className="block">That Convert</span>
          </h1>

          <p className="mt-8 max-w-xl text-base text-slate-200 md:text-xl md:leading-relaxed">
            We design and build high-performance websites for startups, tech companies and premium brands that need authority, speed, and measurable growth.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href={withLang(lang, '/contact')} className="primary-btn rounded-full px-8 py-3.5 font-semibold text-white">
              Start your project
            </Link>
            <Link
              href={withLang(lang, '/services')}
              className="btn-interactive rounded-full border border-white/25 bg-white/5 px-8 py-3.5 font-semibold text-white transition duration-300 hover:border-cyan-300/70 hover:shadow-[0_0_35px_rgba(56,189,248,0.35)]"
            >
              View our work
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[430px] rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_35px_90px_rgba(15,23,42,0.75)] backdrop-blur lg:block">
          <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]" />
          {techCards.map((card, index) => (
            <div
              key={card.title}
              className={`hero-float-card absolute w-60 rounded-2xl border border-cyan-100/20 bg-white/10 p-4 shadow-[0_0_35px_rgba(56,189,248,0.18)] backdrop-blur-xl ${card.className}`}
              style={{ animation: `floatY ${8 + index * 0.8}s ease-in-out ${index * 0.35}s infinite` }}
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-100/80">{card.title}</p>
              <p className="mt-2 text-xl font-bold leading-tight text-white">{card.value}</p>
              <p className="mt-1 text-xs text-slate-200">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 pt-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-300">
          Trusted by startups and growing tech teams.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustedBy.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
