'use client';

import { Container } from '@/components/ui';
import { personalInfo } from '@/data/roles';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <Container>
        <div className="flex justify-center items-center">
          <motion.p 
            className="text-sm font-medium text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </span>
          </motion.p>
        </div>
      </Container>
    </footer>
  );
}
