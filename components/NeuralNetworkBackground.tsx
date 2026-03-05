'use client';

import { useEffect, useRef } from 'react';

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

const NODE_COLORS = ['#22d3ee', '#3b82f6', '#8b5cf6'];
const MAX_NODES = 80;
const LINK_DISTANCE = 165;

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches || window.matchMedia('(pointer: coarse)').matches;

    if (isMobile) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let points: NodePoint[] = [];
    let animationFrame = 0;
    let isVisible = !document.hidden;

    const createPoints = (width: number, height: number) => {
      const count = Math.min(MAX_NODES, Math.max(42, Math.floor((width * height) / 18000)));

      return Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: 1.2 + Math.random() * 1.6,
        color: NODE_COLORS[index % NODE_COLORS.length]
      }));
    };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      points = createPoints(width, height);
    };

    const draw = () => {
      if (!isVisible) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        point.x += point.vx;
        point.y += point.vy;

        if (point.x <= 0 || point.x >= width) point.vx *= -1;
        if (point.y <= 0 || point.y >= height) point.vy *= -1;

        point.x = Math.max(0, Math.min(width, point.x));
        point.y = Math.max(0, Math.min(height, point.y));
      }

      for (let i = 0; i < points.length; i += 1) {
        const pointA = points[i];

        for (let j = i + 1; j < points.length; j += 1) {
          const pointB = points[j];
          const dx = pointA.x - pointB.x;
          const dy = pointA.y - pointB.y;
          const distance = Math.hypot(dx, dy);

          if (distance > LINK_DISTANCE) continue;

          const intensity = 1 - distance / LINK_DISTANCE;
          context.beginPath();
          context.moveTo(pointA.x, pointA.y);
          context.lineTo(pointB.x, pointB.y);
          context.strokeStyle = `rgba(110, 195, 255, ${0.05 + intensity * 0.22})`;
          context.lineWidth = 0.7;
          context.shadowBlur = 10;
          context.shadowColor = '#3b82f6';
          context.stroke();
        }
      }

      points.forEach((point) => {
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = point.color;
        context.globalAlpha = 0.72;
        context.shadowBlur = 14;
        context.shadowColor = point.color;
        context.fill();
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      animationFrame = window.requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;

      if (isVisible && !animationFrame && !reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }

      if (!isVisible && animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    resize();

    if (!reducedMotion) {
      animationFrame = window.requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
