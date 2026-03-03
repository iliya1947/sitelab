'use client';

import { useEffect, useState } from 'react';

type AccessibilityLabels = {
  title: string;
  contrast: string;
  largerText: string;
  reduceMotion: string;
  skipToMain: string;
};

export default function AccessibilityMenu({ labels }: { labels: AccessibilityLabels }) {
  const [contrast, setContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.body.dataset.contrast = contrast ? 'high' : 'normal';
  }, [contrast]);

  useEffect(() => {
    document.body.dataset.fontsize = largeText ? 'large' : 'normal';
  }, [largeText]);

  useEffect(() => {
    document.body.dataset.motion = reduceMotion ? 'reduced' : 'normal';
  }, [reduceMotion]);

  return (
    <div className="fixed bottom-4 right-4 z-40 w-72 rounded-2xl border border-slate-300 bg-white p-4 shadow-card" aria-label={labels.title}>
      <a href="#main-content" className="text-sm text-brand-700 underline">
        {labels.skipToMain}
      </a>
      <h2 className="mt-2 font-semibold">{labels.title}</h2>
      <div className="mt-3 space-y-2 text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" checked={contrast} onChange={(e) => setContrast(e.target.checked)} /> {labels.contrast}</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={largeText} onChange={(e) => setLargeText(e.target.checked)} /> {labels.largerText}</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={reduceMotion} onChange={(e) => setReduceMotion(e.target.checked)} /> {labels.reduceMotion}</label>
      </div>
    </div>
  );
}
