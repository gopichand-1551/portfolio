'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface FadeTransitionProps {
  children: ReactNode;
  className?: string;
  id: string;
  duration?: number;
}

export function FadeTransition({
  children,
  className,
  id,
  duration = 0.2,
}: FadeTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        className={cn(className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
