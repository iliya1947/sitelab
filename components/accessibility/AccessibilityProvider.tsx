'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type AccessibilityState = {
  highContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
};

type AccessibilityContextValue = AccessibilityState & {
  setHighContrast: (value: boolean) => void;
  setLargeText: (value: boolean) => void;
  setReduceMotion: (value: boolean) => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setReduceMotion(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('a11y-high-contrast', highContrast);
    root.classList.toggle('a11y-large-text', largeText);
    root.classList.toggle('a11y-reduce-motion', reduceMotion);
  }, [highContrast, largeText, reduceMotion]);

  const value = useMemo(
    () => ({
      highContrast,
      largeText,
      reduceMotion,
      setHighContrast,
      setLargeText,
      setReduceMotion
    }),
    [highContrast, largeText, reduceMotion]
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }

  return context;
}
