import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
  style?: React.CSSProperties;
}

export function Badge({ children, variant = 'default', className, style }: BadgeProps) {
  const variants = {
    default: 'bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/20',
    outline: 'border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]',
  };

  return (
    <span
      style={style}
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
        'transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
