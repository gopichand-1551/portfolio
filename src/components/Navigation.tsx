'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui';
import Image from 'next/image';
import { personalInfo } from '@/data/roles';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const navItems = [
  { label: 'Skills', href: '#skills', icon: 'Zap' },
  { label: 'Projects', href: '#projects', icon: 'Rocket' },
  { label: 'Learning', href: '#credentials', icon: 'BookOpen' },
  { label: 'Experience', href: '#experience', icon: 'Milestone' },
  { label: 'Contact', href: '#contact', icon: 'Send' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[var(--bg-primary)]/90 backdrop-blur-lg border-b border-[var(--border)]'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/icon.png" 
                alt="Gopichand Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              <span className="gradient-text">{personalInfo.firstName}</span>
              <span className="text-[var(--accent)]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] || Icons.Circle;
              return (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="group flex items-center gap-2 text-base font-bold text-white hover:text-[var(--accent)] transition-all duration-300"
                  >
                    <Icon size={18} className="text-[var(--accent)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                className="w-full h-0.5 bg-[var(--accent)] origin-left"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: -2 },
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-[var(--accent)]"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span
                className="w-full h-0.5 bg-[var(--accent)] origin-left"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: 2 },
                }}
              />
            </motion.div>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border)]"
          >
            <Container>
              <ul className="py-6 space-y-6">
                {navItems.map((item) => {
                  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] || Icons.Circle;
                  return (
                    <li key={item.href}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="w-full flex items-center gap-4 text-left py-2 text-white hover:text-[var(--accent)] text-lg font-bold transition-all"
                      >
                        <Icon size={22} className="text-[var(--accent)]" />
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
