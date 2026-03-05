'use client';

import { useEffect, useRef } from 'react';

const CODE_SNIPPETS = [
  'const build = async () => {',
  '  const data = await fetch(`/api/contact`);',
  '  return data.json();',
  '};',
  'interface ProjectConfig {',
  '  locale: Locale;',
  '  highContrast: boolean;',
  '}',
  "type Locale = 'he' | 'en' | 'ru'",
  'export default function Hero() {',
  '  useEffect(() => {',
  '    requestAnimationFrame(loop);',
  '  }, []);',
  '  return <section />;',
  '}',
  "fetch('/api/contact')"
];

type Column = {
  x: number;
  y: number;
  speed: number;
  drift: number;
  opacity: number;
  fontSize: number;
  color: string;
  line: string;
};

const GLOW_COLORS = ['#7dd3fc', '#60a5fa', '#a78bfa'];

export default function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationId = 0;
    let columns: Column[] = [];

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = isMobile ? 8 : Math.max(14, Math.floor(width / 120));
      columns = Array.from({ length: count }, (_, index) => {
        const snippet = CODE_SNIPPETS[index % CODE_SNIPPETS.length];

        return {
          x: (index / count) * width,
          y: Math.random() * -height,
          speed: isMobile ? 0.15 + Math.random() * 0.15 : 0.25 + Math.random() * 0.35,
          drift: (Math.random() - 0.5) * (isMobile ? 0.08 : 0.16),
          opacity: 0.05 + Math.random() * 0.15,
          fontSize: isMobile ? 11 + Math.random() * 2 : 12 + Math.random() * 5,
          color: GLOW_COLORS[index % GLOW_COLORS.length],
          line: snippet
        };
      });
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);

      columns.forEach((column) => {
        context.font = `${column.fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        context.fillStyle = column.color;
        context.globalAlpha = column.opacity;
        context.shadowColor = column.color;
        context.shadowBlur = 16;
        context.fillText(column.line, column.x, column.y);

        column.y += column.speed;
        column.x += column.drift;

        if (column.y > height + 40) {
          column.y = -40;
          column.x = Math.random() * width;
        }

        if (column.x < -160) {
          column.x = width + Math.random() * 40;
        }

        if (column.x > width + 160) {
          column.x = -Math.random() * 40;
        }
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;

      animationId = window.requestAnimationFrame(draw);
    };

    resize();

    if (!shouldReduceMotion) {
      animationId = window.requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
