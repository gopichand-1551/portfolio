'use client';

import Image from 'next/image';
import { Container, Card } from '@/components/ui';
import { ScrollReveal } from '@/components/animations';

export function Credentials() {
  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Professional</span> Learning
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Intensive training programs that have shaped my technical foundation.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Courses Section */}
          <ScrollReveal>
            <Card className="border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-all">
              <div className="md:grid md:grid-cols-3 gap-8 p-8 items-center">
                <div className="md:col-span-1 flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-white/10 mb-6 md:mb-0">
                  <div className="relative w-24 h-24 bg-white rounded-xl p-2 flex items-center justify-center mb-4 shadow-xl">
                    <Image 
                      src="/image/innomatics.png" 
                      alt="Innomatics Research Labs" 
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Professional Course</h3>
                  <div className="px-3 py-1 bg-[var(--accent)]/20 rounded-full text-[var(--accent)] text-xs font-bold uppercase tracking-wider">
                    Completed
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-[var(--accent)] mb-2">Data Analyst Course</h4>
                    <p className="text-lg text-white/90 font-medium mb-3">Innomatics Research Labs</p>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                      Comprehensive Data Analytics Program covering end-to-end data analysis workflow including SQL for database querying, Python (Pandas/NumPy) for manipulation, EDA techniques, Advanced Statistics for predictive modeling, Microsoft Excel, and Power BI for interactive visualization.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'Python', 'EDA', 'Statistics', 'Excel', 'Power BI'].map(tech => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/10 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
