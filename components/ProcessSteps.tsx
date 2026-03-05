'use client';

import Reveal from '@/components/Reveal';
import { useTranslations } from '@/hooks/useTranslations';

export default function ProcessSteps({ title, steps }: { title: string; steps: string[] }) {
  const t = useTranslations();

  return (
    <section>
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      </Reveal>
      <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step}>
            <Reveal delayMs={index * 80}>
              <div className="card p-6 shadow-card">
                <p className="text-sm uppercase tracking-[0.14em] text-cyan-300">{t.process.stepBadges[index] ?? ''}</p>
                <p className="mt-3 font-semibold text-slate-100">{step}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
