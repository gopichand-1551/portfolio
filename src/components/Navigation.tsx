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
            className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border)] overflow-hidden"
          >
            <Container>
              <div className="py-8 flex flex-col gap-8">
                {/* Profile Header in Mobile Menu */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--accent)]">
                    <Image 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-none mb-1">{personalInfo.firstName}</h3>
                    <p className="text-[10px] text-[var(--accent)] font-medium uppercase tracking-wider">Available for work</p>
                  </div>
                </div>

                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] || Icons.Circle;
                    return (
                      <li key={item.href}>
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="w-full flex items-center gap-4 text-left p-3 rounded-xl text-white hover:text-[var(--accent)] hover:bg-white/5 text-base font-bold transition-all group"
                        >
                          <Icon size={20} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {/* Mobile Socials or CTA */}
                <div className="pt-4 border-t border-white/10">
                  <button 
                    onClick={() => scrollToSection('#contact')}
                    className="w-full py-4 rounded-xl bg-[var(--accent)] text-[var(--bg-primary)] font-bold text-center hover:opacity-90 transition-opacity"
                  >
                    Let&apos;s Talk
                  </button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
