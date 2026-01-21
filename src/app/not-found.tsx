'use client';

import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-md mx-auto mb-10">
            The page you are looking for might have been moved, deleted, or never existed in this reality.
          </p>
          <Link href="/">
            <Button size="lg" className="btn-glow">
              Return Home
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}
