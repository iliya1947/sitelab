'use client';

import { useEffect, useMemo, useRef } from 'react';

type Drop = {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  fontSize: number;
  drift: number;
  blur: number;
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

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

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
      const count = prefersReducedMotion ? 20 : mobile ? 28 : 46;

      dropsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: prefersReducedMotion ? 0.18 : 0.45 + Math.random() * 1.2,
        opacity: 0.18 + Math.random() * 0.5,
        fontSize: 12 + Math.random() * 10,
        drift: -0.3 + Math.random() * 0.6,
        blur: Math.random() * 4,
        color: randomFrom(palette),
        text: randomFrom(codeLines)
      }));
    };

    const render = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(2,6,23,0.2)';
      ctx.fillRect(0, 0, width, height);

      for (const drop of dropsRef.current) {
        ctx.font = `${drop.fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx.fillStyle = drop.color;
        ctx.globalAlpha = drop.opacity;
        ctx.filter = `blur(${drop.blur}px)`;
        ctx.fillText(drop.text, drop.x, drop.y);

        drop.y += drop.speed;
        drop.x += drop.drift;

        if (drop.y > height + 50) {
          drop.y = -30;
          drop.x = Math.random() * width;
          drop.text = randomFrom(codeLines);
        }
      }

      ctx.globalAlpha = 1;
      ctx.filter = 'none';
      rafRef.current = requestAnimationFrame(render);
    };

    setup();
    render();
    window.addEventListener('resize', setup);

    return () => {
      window.removeEventListener('resize', setup);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}
