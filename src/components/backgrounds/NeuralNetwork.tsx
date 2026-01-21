'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface NeuralNetworkProps {
  className?: string;
  nodeCount?: number;
  color?: string;
}

export function NeuralNetwork({ 
  className = '', 
  nodeCount = 30,
  color = '0, 212, 255'
}: NeuralNetworkProps) {
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

    // Create neural network layers
    const layers = [
      Array.from({ length: 5 }, (_, i) => ({ x: 0.15, y: 0.1 + i * 0.2 })),
      Array.from({ length: 7 }, (_, i) => ({ x: 0.35, y: 0.05 + i * 0.15 })),
      Array.from({ length: 7 }, (_, i) => ({ x: 0.55, y: 0.05 + i * 0.15 })),
      Array.from({ length: 5 }, (_, i) => ({ x: 0.75, y: 0.1 + i * 0.2 })),
      Array.from({ length: 3 }, (_, i) => ({ x: 0.9, y: 0.25 + i * 0.25 })),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      // Draw connections
      layers.forEach((layer, li) => {
        if (li < layers.length - 1) {
          const nextLayer = layers[li + 1];
          layer.forEach((node, ni) => {
            nextLayer.forEach((nextNode, nni) => {
              const pulse = Math.sin(time + ni * 0.5 + nni * 0.3 + li) * 0.5 + 0.5;
              ctx.beginPath();
              ctx.moveTo(node.x * canvas.width, node.y * canvas.height);
              ctx.lineTo(nextNode.x * canvas.width, nextNode.y * canvas.height);
              ctx.strokeStyle = `rgba(${color}, ${0.05 + pulse * 0.15})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            });
          });
        }
      });

      // Draw nodes
      layers.forEach((layer, li) => {
        layer.forEach((node, ni) => {
          const pulse = Math.sin(time * 2 + ni + li) * 0.5 + 0.5;
          const x = node.x * canvas.width;
          const y = node.y * canvas.height;
          const radius = 4 + pulse * 3;

          // Glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
          gradient.addColorStop(0, `rgba(${color}, ${0.3 + pulse * 0.2})`);
          gradient.addColorStop(1, `rgba(${color}, 0)`);
          ctx.beginPath();
          ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${0.6 + pulse * 0.4})`;
          ctx.fill();
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion, nodeCount, color]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
