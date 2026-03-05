'use client';

import { useEffect, useRef } from 'react';

type Layer = 'layer1' | 'layer2' | 'layer3';

type CodeColumn = {
  x: number;
  y: number;
  speed: number;
  drift: number;
  opacity: number;
  fontSize: number;
  blur: number;
  glow: number;
  color: string;
  layer: Layer;
};

const letters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const layers: Record<Layer, Partial<CodeColumn>> = {
  layer1: { speed: 1.0, drift: 0.3, opacity: 0.3, fontSize: 16, blur: 0, glow: 1, color: '#0f0' },
  layer2: { speed: 1.5, drift: 0.6, opacity: 0.5, fontSize: 20, blur: 0.5, glow: 1.5, color: '#0f0' },
  layer3: { speed: 2.0, drift: 1.0, opacity: 0.8, fontSize: 24, blur: 1, glow: 2, color: '#0f0' },
};

export default function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const columnsRef = useRef<CodeColumn[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Инициализация колонок
      const columnCount = Math.floor(canvas.width / 20);
      columnsRef.current = Array.from({ length: columnCount }, (_, i) => {
        const layer: Layer = i % 3 === 0 ? 'layer1' : i % 3 === 1 ? 'layer2' : 'layer3';
        const base = layers[layer];
        return {
          x: i * 20,
          y: Math.random() * canvas.height,
          speed: (base.speed || 1) + Math.random(),
          drift: (base.drift || 0.3) * (Math.random() > 0.5 ? 1 : -1),
          opacity: base.opacity || 0.5,
          fontSize: base.fontSize || 18,
          blur: base.blur || 0,
          glow: base.glow || 1,
          color: base.color || '#0f0',
          layer,
        };
      });
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!ctx) return;

      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.textBaseline = 'top';
      columnsRef.current.forEach((col) => {
        ctx.font = `${col.fontSize}px monospace`;
        ctx.fillStyle = col.color;
        ctx.shadowColor = col.color;
        ctx.shadowBlur = col.glow;
        ctx.globalAlpha = col.opacity;

        const char = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(char, col.x + col.drift, col.y);

        col.y += col.speed;
        col.drift += Math.sin(col.y / 20) * 0.5;

        if (col.y > canvas.height) col.y = -col.fontSize * 2;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#000',
      }}
    />
  );
}
