'use client';

import Reveal from '@/components/Reveal';
import { useTranslations } from '@/hooks/useTranslations';

export default function ProcessSteps() {
  const t = useTranslations();

  return (
    <section id="process">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.process.title}</h2>
      </Reveal>
      <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.process.steps.map((step, index) => (
          <li key={step}>
            <Reveal delayMs={index * 80}>
              <div className="card p-6 shadow-card">
                <p className="text-sm uppercase tracking-[0.14em] text-cyan-300">{index + 1}</p>
                <p className="mt-3 font-semibold text-slate-100">{step}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
