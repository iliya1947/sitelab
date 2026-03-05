'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { useMemo, useState } from 'react';

const baseByType: Record<string, number> = {
  landing: 700,
  corporate: 1600,
  ecommerce: 2800,
  webapp: 4500
};

export default function Calculator() {
  const t = useTranslations();
  const [siteType, setSiteType] = useState<keyof typeof baseByType>('landing');
  const [pages, setPages] = useState(5);
  const [multilingual, setMultilingual] = useState(false);
  const [store, setStore] = useState(false);
  const [seo, setSeo] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const estimate = useMemo(() => {
    let total = baseByType[siteType] + pages * 60;
    if (multilingual) total += 400;
    if (store) total += 900;
    if (seo) total += 350;
    if (urgent) total *= 1.2;

    return Math.round(total);
  }, [siteType, pages, multilingual, store, seo, urgent]);

  return (
    <section className="section-glow card rounded-3xl p-8 shadow-card transition hover:border-blue-400/60 hover:shadow-[0_0_36px_rgba(59,130,246,0.28)]">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.calculator.title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span>{t.calculator.fields.siteType}</span>
          <select value={siteType} onChange={(e) => setSiteType(e.target.value as keyof typeof baseByType)}>
            <option value="landing">{t.calculator.siteTypes.landing}</option>
            <option value="corporate">{t.calculator.siteTypes.corporate}</option>
            <option value="ecommerce">{t.calculator.siteTypes.ecommerce}</option>
            <option value="webapp">{t.calculator.siteTypes.webapp}</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span>{t.calculator.fields.pages}: {pages}</span>
          <input className="transition duration-200" type="range" min={1} max={40} value={pages} onChange={(e) => setPages(Number(e.target.value))} />
        </label>

        <label className="flex items-center gap-3"><input type="checkbox" checked={multilingual} onChange={(e) => setMultilingual(e.target.checked)} /> {t.calculator.fields.multilingual}</label>
        <label className="flex items-center gap-3"><input type="checkbox" checked={store} onChange={(e) => setStore(e.target.checked)} /> {t.calculator.fields.ecommerce}</label>
        <label className="flex items-center gap-3"><input type="checkbox" checked={seo} onChange={(e) => setSeo(e.target.checked)} /> {t.calculator.fields.seo}</label>
        <label className="flex items-center gap-3"><input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} /> {t.calculator.fields.urgency}</label>
      </div>

      <p className="mt-8 rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-4 py-4 text-xl font-semibold md:text-2xl">
        {t.calculator.estimateLabel}: <span className="price-highlight text-3xl">${estimate}</span>
      </p>
      <button className="primary-btn mt-6 font-semibold">{t.calculator.submit}</button>
    </section>
  );
}
