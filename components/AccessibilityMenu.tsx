'use client';

import { useAccessibility } from '@/components/accessibility/AccessibilityProvider';
import { useState } from 'react';

type AccessibilityLabels = {
  title: string;
  contrast: string;
  largerText: string;
  reduceMotion: string;
  skipToMain: string;
};

type ToggleProps = {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
};

function Toggle({ label, checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-200/30"
      aria-pressed={checked}
    >
      <span>{label}</span>
      <span
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? 'bg-cyan-400/80' : 'bg-slate-500/50'}`}
        aria-hidden
      >
        <span className={`inline-block h-5 w-5 rounded-full bg-white transition ${checked ? 'translate-x-5' : 'translate-x-1'}`} />
      </span>
    </button>
  );
}

export default function AccessibilityMenu({ labels }: { labels: AccessibilityLabels }) {
  const [open, setOpen] = useState(false);
  const { highContrast, largeText, reduceMotion, setHighContrast, setLargeText, setReduceMotion } = useAccessibility();

  return (
    <div className="fixed bottom-5 start-5 z-50">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.3)] backdrop-blur-xl transition hover:shadow-[0_0_26px_rgba(56,189,248,0.6)]"
        aria-label={labels.title}
        aria-expanded={open}
      >
        ✦
      </button>

      <aside
        className={`mt-3 w-72 rounded-2xl border border-white/15 bg-slate-950/85 p-4 shadow-[0_20px_50px_rgba(8,15,35,0.65)] backdrop-blur-2xl transition duration-200 ${
          open ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-100">{labels.title}</h2>
        <div className="mt-3 space-y-2">
          <Toggle label={labels.largerText} checked={largeText} onChange={setLargeText} />
          <Toggle label={labels.contrast} checked={highContrast} onChange={setHighContrast} />
          <Toggle label={labels.reduceMotion} checked={reduceMotion} onChange={setReduceMotion} />
          <a href="#main-content" className="block rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/15">
            {labels.skipToMain}
          </a>
        </div>
      </aside>
    </div>
  );
}
