'use client';

import { useEffect, useMemo, useRef } from 'react';

type Drop = {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  font: string;
  drift: number;
  color: string;
  text: string;
};

const codeLines = [
  'const app = await createAppRouter();',
  'export default function Page(){ return <Hero /> }',
  'type Locale = "en" | "ru" | "he";',
  'const [open, setOpen] = useState(false);',
  'requestAnimationFrame(renderFrame);',
  'useEffect(() => cleanup, []);',
  'import Link from "next/link";',
  'className="backdrop-blur-xl"'
];

const palette = ['#7dd3fc', '#60a5fa', '#a78bfa'];

function randomFrom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export default function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<Drop[]>([]);
  const rafRef = useRef<number>();
  const reducedMotionRef = useRef(false);

  const prefersReducedMotion = useMemo(() => (typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const mobile = window.innerWidth < 768;
      reducedMotionRef.current = prefersReducedMotion;

      if (mobile) {
        dropsRef.current = [];
        ctx.clearRect(0, 0, width, height);
        return;
      }

      const count = prefersReducedMotion ? 24 : 56;

      dropsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: prefersReducedMotion ? 0.18 : 0.45 + Math.random() * 1.2,
        opacity: 0.18 + Math.random() * 0.5,
        font: `${12 + Math.random() * 10}px ui-monospace, SFMono-Regular, Menlo, monospace`,
        drift: -0.3 + Math.random() * 0.6,
        color: randomFrom(palette),
        text: randomFrom(codeLines)
      }));
    };

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      if (!dropsRef.current.length) {
        rafRef.current = undefined;
        return;
      }

      ctx.fillStyle = 'rgba(2,6,23,0.2)';
      ctx.fillRect(0, 0, width, height);

      for (const drop of dropsRef.current) {
        ctx.font = drop.font;
        ctx.fillStyle = drop.color;
        ctx.globalAlpha = drop.opacity;
        ctx.fillText(drop.text, drop.x, drop.y);

        if (!reducedMotionRef.current) {
          drop.y += drop.speed;
          drop.x += drop.drift;
        }

        if (drop.y > height + 50) {
          drop.y = -30;
          drop.x = Math.random() * width;
          drop.text = randomFrom(codeLines);
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(render);
    };

    const handleResize = () => {
      setup();
      if (!rafRef.current && dropsRef.current.length) {
        rafRef.current = requestAnimationFrame(render);
      }
      if (rafRef.current && !dropsRef.current.length) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = undefined;
      }
    };

    setup();
    if (dropsRef.current.length) {
      rafRef.current = requestAnimationFrame(render);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}
