'use client';

import Reveal from '@/components/Reveal';
import { useTranslations } from '@/hooks/useTranslations';

export default function FAQ() {
  const t = useTranslations();

  return (
    <section>
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.faq.title}</h2>
      </Reveal>
      <div className="mt-6 space-y-4">
        {t.faq.items.map((item, index) => (
          <Reveal key={item.q} delayMs={index * 70}>
            <details className="card p-6">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-3 text-slate-300">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
