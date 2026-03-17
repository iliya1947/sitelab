'use client';

import { useLocale, useTranslations } from '@/hooks/useTranslations';
import { useMemo, useState } from 'react';

type SiteType = 'landingPage' | 'businessWebsite' | 'webApplication';
type FeatureKey = 'seoOptimization' | 'multiLanguageSupport' | 'advancedAnimations' | 'cmsIntegration' | 'customIntegrations';

type PriceRange = { min: number; max: number };

const baseByType: Record<SiteType, PriceRange> = {
  landingPage: { min: 3500, max: 6000 },
  businessWebsite: { min: 8000, max: 14000 },
  webApplication: { min: 18000, max: 32000 }
};

const featurePricing: Record<FeatureKey, PriceRange> = {
  seoOptimization: { min: 1200, max: 3000 },
  multiLanguageSupport: { min: 1800, max: 4200 },
  advancedAnimations: { min: 1500, max: 5000 },
  cmsIntegration: { min: 2000, max: 5500 },
  customIntegrations: { min: 3000, max: 9000 }
};

export default function Calculator() {
  const t = useTranslations();
  const locale = useLocale();
  const [siteType, setSiteType] = useState<SiteType>('landingPage');
  const [pages, setPages] = useState(5);
  const [selectedFeatures, setSelectedFeatures] = useState<Record<FeatureKey, boolean>>({
    seoOptimization: false,
    multiLanguageSupport: false,
    advancedAnimations: false,
    cmsIntegration: false,
    customIntegrations: false
  });

  const formatILS = (value: number) =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'ILS',
      maximumFractionDigits: 0
    }).format(value);

  const estimate = useMemo(() => {
    const base = baseByType[siteType];
    const extraPages = Math.max(0, pages - 1);

    let min = base.min + extraPages * 250;
    let max = base.max + extraPages * 600;

    (Object.keys(featurePricing) as FeatureKey[]).forEach((key) => {
      if (selectedFeatures[key]) {
        min += featurePricing[key].min;
        max += featurePricing[key].max;
      }
    });

    return { min: Math.round(min), max: Math.round(max) };
  }, [siteType, pages, selectedFeatures]);

  const selectedFeatureLabels = (Object.keys(selectedFeatures) as FeatureKey[])
    .filter((key) => selectedFeatures[key])
    .map((key) => t.calculator.features[key]);

  const priceText =
    estimate.min === estimate.max
      ? formatILS(estimate.min)
      : `${formatILS(estimate.min)} - ${formatILS(estimate.max)}`;

  return (
    <section
      id="calculator"
      className="section-glow card rounded-3xl p-8 shadow-card transition-all duration-300 hover:border-blue-400/60 hover:shadow-[0_0_36px_rgba(59,130,246,0.28)]"
    >
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.calculator.title}</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 rounded-2xl border border-slate-700/70 bg-slate-900/40 p-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-200">{t.calculator.fields.siteType}</span>
            <select
              className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 transition-colors focus:border-cyan-400 focus:outline-none"
              value={siteType}
              onChange={(e) => setSiteType(e.target.value as SiteType)}
            >
              <option value="landingPage">{t.calculator.siteTypes.landingPage}</option>
              <option value="businessWebsite">{t.calculator.siteTypes.businessWebsite}</option>
              <option value="webApplication">{t.calculator.siteTypes.webApplication}</option>
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-200">
              {t.calculator.fields.pages}: {pages}
            </span>
            <input
              className="accent-cyan-400 transition-all duration-300"
              type="range"
              min={1}
              max={40}
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
            />
          </label>

          <div className="space-y-3">
            <p className="text-sm font-medium text-slate-200">{t.calculator.fields.features}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {(Object.keys(featurePricing) as FeatureKey[]).map((key) => (
                <label
                  key={key}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 transition-all duration-300 hover:border-cyan-300/70"
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures[key]}
                    onChange={(e) =>
                      setSelectedFeatures((prev) => ({
                        ...prev,
                        [key]: e.target.checked
                      }))
                    }
                  />
                  <span className="text-sm">{t.calculator.features[key]}</span>
                </label>
              ))}
            </div>
          </div>

          <p className="rounded-2xl border border-cyan-300/30 bg-slate-950/80 px-4 py-4 text-lg font-semibold transition-all duration-300 md:text-xl">
            {t.calculator.estimateRangeLabel}:{' '}
            <span className="price-highlight text-2xl md:text-3xl">{priceText}</span>
          </p>
        </div>

        <aside className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-5 transition-all duration-300">
          <h3 className="text-xl font-semibold">{t.calculator.summaryTitle}</h3>
          <div className="mt-4 space-y-3 text-sm">
            <p>
              <span className="font-semibold">{t.calculator.selectedTypeLabel}:</span>{' '}
              {t.calculator.siteTypes[siteType]}
            </p>
            <div>
              <p className="font-semibold">{t.calculator.selectedFeaturesLabel}:</p>
              {selectedFeatureLabels.length > 0 ? (
                <ul className="mt-2 list-disc space-y-1 ps-5 text-slate-200">
                  {selectedFeatureLabels.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-slate-300">{t.calculator.summaryEmpty}</p>
              )}
            </div>
          </div>

          <p className="mt-6 rounded-xl border border-cyan-300/40 bg-slate-950/70 px-4 py-3 text-lg font-bold text-cyan-200">
            {t.calculator.finalPriceLabel}: {priceText}
          </p>
          <button className="primary-btn mt-5 w-full font-semibold transition-transform duration-300 hover:scale-[1.01]">
            {t.calculator.submit}
          </button>
        </aside>
      </div>
    </section>
  );
}
