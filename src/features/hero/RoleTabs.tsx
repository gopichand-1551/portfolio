'use client';

import { Role, useRole } from '@/context/RoleContext';
import { roleLabels } from '@/data/roles';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

const roles: Role[] = ['ml-engineer', 'genai-engineer', 'data-analyst'];

export function RoleTabs() {
  const { role, setRole, isTransitioning } = useRole();

  return (
    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
      {roles.map((r) => (
        <button
          key={r}
          onClick={() => setRole(r)}
          disabled={isTransitioning}
          className={cn(
            'relative px-4 py-2 text-sm font-medium rounded-lg',
            'transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
            role === r
              ? 'text-[var(--accent)]'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          )}
        >
          {roleLabels[r]}
          {role === r && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-[var(--accent-subtle)] rounded-lg -z-10"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
