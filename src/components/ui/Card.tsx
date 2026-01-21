import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, style, hover = true, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={cn(
        'rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]',
        'p-6',
        hover && 'transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-subtle)]',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardHeader({ children, className, style }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)} style={style}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardTitle({ children, className, style }: CardTitleProps) {
  return (
    <h3 className={cn('text-xl font-semibold text-[var(--text-primary)]', className)} style={style}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-[var(--text-secondary)] mt-2 leading-relaxed', className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}
