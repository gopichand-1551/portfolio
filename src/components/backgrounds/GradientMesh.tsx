'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className = '' }: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const blobs = [
      { x: 0.3, y: 0.3, radius: 0.4, speed: 0.3, phase: 0 },
      { x: 0.7, y: 0.6, radius: 0.35, speed: 0.4, phase: Math.PI / 2 },
      { x: 0.5, y: 0.8, radius: 0.3, speed: 0.35, phase: Math.PI },
    ];

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob, i) => {
        const x = (blob.x + Math.sin(time * blob.speed + blob.phase) * 0.1) * canvas.width;
        const y = (blob.y + Math.cos(time * blob.speed * 0.8 + blob.phase) * 0.1) * canvas.height;
        const radius = blob.radius * Math.min(canvas.width, canvas.height);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        
        if (i === 0) {
          gradient.addColorStop(0, 'rgba(0, 212, 255, 0.15)');
          gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        } else if (i === 1) {
          gradient.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
          gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(0, 200, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
        }

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
