'use client';

import { Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/features/hero';
import { Skills } from '@/features/skills';
import { Projects } from '@/features/projects';
import { Experience } from '@/features/experience';
import { Credentials } from '@/features/credentials';
import { Contact } from '@/features/contact';

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </Suspense>
  );
}
