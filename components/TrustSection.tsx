'use client';

import Reveal from '@/components/Reveal';
import { useTranslations } from '@/src/hooks/useTranslations';

export default function TrustSection() {
  const t = useTranslations();

  const trustItems = [
    { icon: '⚡', text: t.trust.items.performance },
    { icon: '⚡', text: t.trust.items.technology },
    { icon: '⚡', text: t.trust.items.custom },
    { icon: '⚡', text: t.trust.items.delivery }
  ];

  return (
    <section id="trust">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.trust.title}</h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {trustItems.map((item, index) => (
          <Reveal key={item.text} delayMs={index * 70}>
            <article className="h-full rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-black/20 text-xl text-cyan-200">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-100">{item.text}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
