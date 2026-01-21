'use client';

import { ReactNode, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-medium
      transition-all duration-300 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50
      relative overflow-hidden
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]
        text-[var(--bg-primary)] font-semibold
        hover:shadow-lg hover:shadow-[var(--accent-subtle)]
        active:scale-[0.98]
        focus-visible:ring-[var(--accent)]
      `,
      secondary: `
        bg-transparent text-[var(--text-primary)]
        border-2 border-[var(--accent)]
        hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)]
        active:scale-[0.98]
        focus-visible:ring-[var(--accent)]
      `,
      ghost: `
        bg-transparent text-[var(--text-secondary)]
        hover:text-[var(--accent)] hover:bg-[var(--accent-subtle)]
        active:scale-[0.98]
      `,
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm rounded-md',
      md: 'h-11 px-6 text-base rounded-lg',
      lg: 'h-14 px-8 text-lg rounded-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
