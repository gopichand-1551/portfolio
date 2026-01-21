'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface GeometricPatternsProps {
  className?: string;
  shapeCount?: number;
  color?: string;
}

export function GeometricPatterns({ 
  className = '', 
  shapeCount = 15,
  color = '0, 212, 255'
}: GeometricPatternsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: 'hexagon' | 'triangle' | 'square';
      opacity: number;
    }> = [];

    const types: Array<'hexagon' | 'triangle' | 'square'> = ['hexagon', 'triangle', 'square'];

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        type: types[Math.floor(Math.random() * types.length)],
        opacity: Math.random() * 0.1 + 0.05,
      });
    }

    const drawHexagon = (x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + rotation;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawTriangle = (x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 / 3) * i + rotation - Math.PI / 2;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const drawSquare = (x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (Math.PI / 2) * i + rotation + Math.PI / 4;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        shape.rotation += shape.rotationSpeed;

        ctx.save();
        
        if (shape.type === 'hexagon') {
          drawHexagon(shape.x, shape.y, shape.size, shape.rotation);
        } else if (shape.type === 'triangle') {
          drawTriangle(shape.x, shape.y, shape.size, shape.rotation);
        } else {
          drawSquare(shape.x, shape.y, shape.size, shape.rotation);
        }

        ctx.strokeStyle = `rgba(${color}, ${shape.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion, shapeCount, color]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
