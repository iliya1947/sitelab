'use client';

import Reveal from '@/components/Reveal';
import { useTranslations } from '@/hooks/useTranslations';

export default function ConsultationSection() {
  const t = useTranslations();

  return (
    <section id="consultation" className="flex justify-center">
      <Reveal className="w-full max-w-4xl rounded-xl border border-white/10 bg-white/5 p-8 text-center shadow-card backdrop-blur-sm md:p-12">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.consultation.title}</h2>
        <p className="mt-3 text-slate-300">{t.consultation.subtitle}</p>

        <ul className="mt-8 space-y-3 text-left text-slate-100 md:mx-auto md:max-w-md">
          {t.consultation.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <span className="mt-0.5 text-cyan-300" aria-hidden>
                ✔
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/20 hover:text-cyan-100"
        >
          {t.consultation.cta}
        </a>
      </Reveal>
    </section>
  );
}
