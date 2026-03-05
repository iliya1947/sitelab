'use client';

import { useEffect, useRef } from 'react';

type Layer = 'layer1' | 'layer2' | 'layer3';

type CodeColumn = {
  baseX: number;
  x: number;
  y: number;
  speed: number;
  driftAmplitude: number;
  driftPhase: number;
  opacity: number;
  fontSize: number;
  blur: number;
  glow: number;
  color: string;
  layer: Layer;
  snippet: string[];
};

const CODE_SNIPPETS: string[][] = [
  ['const response = await fetch("/api/projects");', 'const projects: Project[] = await response.json();', 'return projects.filter((project) => project.isFeatured);'],
  ['export default function Hero() {', '  return <section className="relative" />;', '}'],
  ['type Project = {', '  id: string;', '  name: string;', '  slug: string;', '};'],
  ['query PortfolioProjects($locale: Locale!) {', '  projects(locale: $locale) {', '    id', '    name', '    stack', '  }', '}'],
  ['const app = express();', 'app.get("/api/health", (_req, res) => {', '  res.status(200).json({ status: "ok" });', '});'],
  ['import { NextResponse } from "next/server";', 'export async function GET() {', '  return NextResponse.json({ cached: true });', '}'],
  ['const router = createTRPCRouter({', '  projectBySlug: publicProcedure', '    .input(z.object({ slug: z.string() }))', '    .query(({ ctx, input }) => ctx.db.project.findUnique({ where: input })),', '});'],
  ['const { data, isLoading } = useQuery({', '  queryKey: ["services", lang],', '  queryFn: fetchServices,', '});'],
  ['mutation CreateLead($input: LeadInput!) {', '  createLead(input: $input) {', '    id', '    createdAt', '  }', '}'],
  ['export const metadata: Metadata = {', '  title: "Premium AI Web Studio",', '  description: "Next.js development with measurable growth",', '};']
];

const LAYER_CONFIG: Record<Layer, { speed: [number, number]; font: [number, number]; opacity: [number, number]; blur: [number, number]; glow: [number, number]; spacing: number }> = {
  layer1: {
    speed: [0.12, 0.2],
    font: [16, 22],
    opacity: [0.16, 0.28],
    blur: [0.8, 1.8],
    glow: [14, 24],
    spacing: 190
  },
  layer2: {
    speed: [0.24, 0.38],
    font: [13, 17],
    opacity: [0.2, 0.34],
    blur: [0.2, 0.9],
    glow: [10, 18],
    spacing: 150
  },
  layer3: {
    speed: [0.4, 0.64],
    font: [10, 13],
    opacity: [0.22, 0.4],
    blur: [0, 0.35],
    glow: [7, 14],
    spacing: 112
  }
};

const COLORS = ['rgba(34,211,238,0.8)', 'rgba(59,130,246,0.6)', 'rgba(139,92,246,0.6)'];

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

export default function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    let animationFrame = 0;
    let isVisible = !document.hidden;
    let shouldReduceMotion = reducedMotionMedia.matches;
    let time = 0;
    let columns: CodeColumn[] = [];

    const createLayerColumns = (width: number, height: number, layer: Layer) => {
      const config = LAYER_CONFIG[layer];
      const count = Math.max(4, Math.floor(width / config.spacing));

      return Array.from({ length: count }, (_, index): CodeColumn => {
        const fontSize = randomBetween(config.font[0], config.font[1]);
        const snippet = CODE_SNIPPETS[(index + Math.floor(Math.random() * CODE_SNIPPETS.length)) % CODE_SNIPPETS.length];

        return {
          baseX: (index + Math.random() * 0.6) * config.spacing,
          x: 0,
          y: randomBetween(-height, height),
          speed: randomBetween(config.speed[0], config.speed[1]),
          driftAmplitude: randomBetween(4, 22),
          driftPhase: Math.random() * Math.PI * 2,
          opacity: randomBetween(config.opacity[0], config.opacity[1]),
          fontSize,
          blur: randomBetween(config.blur[0], config.blur[1]),
          glow: randomBetween(config.glow[0], config.glow[1]),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          layer,
          snippet
        };
      });
    };

    const drawColumns = (width: number, height: number) => {
      context.clearRect(0, 0, width, height);
      context.textBaseline = 'top';

      columns.forEach((column) => {
        const lineHeight = column.fontSize * 1.35;
        const snippetHeight = lineHeight * column.snippet.length;
        column.x = column.baseX + Math.sin(time * 0.0016 + column.driftPhase) * column.driftAmplitude;

        context.font = `${column.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        context.fillStyle = column.color;
        context.globalAlpha = column.opacity;
        context.filter = `blur(${column.blur}px)`;
        context.shadowBlur = column.glow;
        context.shadowColor = column.color;

        column.snippet.forEach((line, lineIndex) => {
          context.fillText(line, column.x, column.y + lineHeight * lineIndex);
        });

        if (!shouldReduceMotion && isVisible) {
          column.y += column.speed;

          if (column.y > height + snippetHeight + 32) {
            column.y = -snippetHeight - randomBetween(40, 180);
            column.baseX = randomBetween(-80, width + 80);
            column.driftPhase = Math.random() * Math.PI * 2;
            column.snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
          }
        }
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      context.filter = 'none';
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      columns = [
        ...createLayerColumns(width, height, 'layer1'),
        ...createLayerColumns(width, height, 'layer2'),
        ...createLayerColumns(width, height, 'layer3')
      ];

      drawColumns(width, height);
    };

    const loop = () => {
      if (!isVisible || shouldReduceMotion) {
        animationFrame = 0;
        return;
      }

      time += 16;
      drawColumns(canvas.clientWidth, canvas.clientHeight);
      animationFrame = window.requestAnimationFrame(loop);
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;

      if (isVisible && !shouldReduceMotion && !animationFrame) {
        animationFrame = window.requestAnimationFrame(loop);
      }

      if (!isVisible && animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      shouldReduceMotion = event.matches;

      if (shouldReduceMotion && animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }

      drawColumns(canvas.clientWidth, canvas.clientHeight);

      if (!shouldReduceMotion && isVisible && !animationFrame) {
        animationFrame = window.requestAnimationFrame(loop);
      }
    };

    resize();

    if (!shouldReduceMotion) {
      animationFrame = window.requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reducedMotionMedia.addEventListener('change', handleReducedMotionChange);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reducedMotionMedia.removeEventListener('change', handleReducedMotionChange);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
