'use client';

import { useMemo, useState } from 'react';

const baseByType: Record<string, number> = {
  landing: 700,
  corporate: 1600,
  ecommerce: 2800,
  webapp: 4500
};

type Labels = {
  title: string;
  submit: string;
  estimateLabel: string;
  fields: {
    siteType: string;
    pages: string;
    multilingual: string;
    ecommerce: string;
    seo: string;
    urgency: string;
  };
};

export default function Calculator({ labels }: { labels: Labels }) {
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
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
      <h2 className="text-2xl font-semibold">{labels.title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span>{labels.fields.siteType}</span>
          <select className="rounded-xl border border-slate-300 p-2" value={siteType} onChange={(e) => setSiteType(e.target.value as keyof typeof baseByType)}>
            <option value="landing">Landing</option>
            <option value="corporate">Corporate</option>
            <option value="ecommerce">E-commerce</option>
            <option value="webapp">Web app</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span>{labels.fields.pages}: {pages}</span>
          <input type="range" min={1} max={40} value={pages} onChange={(e) => setPages(Number(e.target.value))} />
        </label>

        <label className="flex items-center gap-3"><input type="checkbox" checked={multilingual} onChange={(e) => setMultilingual(e.target.checked)} /> {labels.fields.multilingual}</label>
        <label className="flex items-center gap-3"><input type="checkbox" checked={store} onChange={(e) => setStore(e.target.checked)} /> {labels.fields.ecommerce}</label>
        <label className="flex items-center gap-3"><input type="checkbox" checked={seo} onChange={(e) => setSeo(e.target.checked)} /> {labels.fields.seo}</label>
        <label className="flex items-center gap-3"><input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} /> {labels.fields.urgency}</label>
      </div>

      <p className="mt-6 text-xl font-semibold">
        {labels.estimateLabel}: <span className="text-brand-700">${estimate}</span>
      </p>
      <button className="mt-4 rounded-full bg-brand-700 px-5 py-2 font-semibold text-white hover:bg-brand-900">{labels.submit}</button>
    </section>
  );
}
