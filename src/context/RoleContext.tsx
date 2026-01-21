'use client';

import { createContext, useContext, useState, useEffect, ReactNode, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { roleContent, RoleContent } from '@/data/roles';

export type Role = 'ml-engineer' | 'genai-engineer' | 'data-analyst';

const VALID_ROLES: Role[] = ['ml-engineer', 'genai-engineer', 'data-analyst'];
const DEFAULT_ROLE: Role = 'genai-engineer';
const STORAGE_KEY = 'selectedRole';

interface RoleContextValue {
  role: Role;
  setRole: (role: Role) => void;
  roleData: RoleContent;
  isTransitioning: boolean;
}

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

function resolveRole(urlParam: string | null, storedRole: string | null): Role {
  if (urlParam && VALID_ROLES.includes(urlParam as Role)) {
    return urlParam as Role;
  }
  if (storedRole && VALID_ROLES.includes(storedRole as Role)) {
    return storedRole as Role;
  }
  return DEFAULT_ROLE;
}

function RoleProviderInner({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [role, setRoleState] = useState<Role>(DEFAULT_ROLE);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const urlRole = searchParams.get('role');
    const storedRole = typeof window !== 'undefined' 
      ? localStorage.getItem(STORAGE_KEY) 
      : null;
    const resolved = resolveRole(urlRole, storedRole);
    setRoleState(resolved);
    setMounted(true);
  }, [searchParams]);

  const setRole = (newRole: Role) => {
    if (!VALID_ROLES.includes(newRole) || newRole === role) return;

    setIsTransitioning(true);
    setRoleState(newRole);
    localStorage.setItem(STORAGE_KEY, newRole);

    const params = new URLSearchParams(searchParams.toString());
    params.set('role', newRole);
    router.replace(`?${params.toString()}`, { scroll: false });

    setTimeout(() => setIsTransitioning(false), 200);
  };

  const roleData = roleContent[role];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <RoleContext.Provider value={{ role, setRole, roleData, isTransitioning }}>
      {children}
    </RoleContext.Provider>
  );
}

export function RoleProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <RoleProviderInner>{children}</RoleProviderInner>
    </Suspense>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
