'use client';

import * as Icons from 'lucide-react';
import { Container, SectionHeader, Badge, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/animations';
import { NeuralNetwork } from '@/components/backgrounds';
import { skills } from '@/data/skills';
import { AnimalMode } from './AnimalMode';

export function Skills() {
  // Display top 9 skills for a fuller grid
  const displaySkills = skills;

  return (
    <section id="skills" className="relative py-20 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Neural Network Animation */}
      <NeuralNetwork className="opacity-40" />
      <AnimalMode />
      
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Domain-specific capabilities backed by production experience"
          />
        </ScrollReveal>

        <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displaySkills.map((skill) => {
            const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[skill.icon] || Icons.Code;
            
            return (
              <StaggerItem key={skill.id}>
                <Card 
                  className="h-full backdrop-blur-md bg-[var(--bg-secondary)]/60 border-opacity-10 transition-all duration-500 hover:scale-[1.02] hover:bg-[var(--bg-secondary)]/80 group"
                  style={{ 
                    borderLeft: `3px solid ${skill.color}`,
                    boxShadow: `0 8px 32px -10px rgba(0,0,0,0.5)`
                  }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div 
                        className="p-2.5 rounded-xl bg-opacity-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                      >
                        <IconComponent size={28} strokeWidth={1.5} />
                      </div>
                      <CardTitle 
                        className="text-xl font-bold tracking-tight gradient-text glow-text"
                      >
                        {skill.category}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-white text-[15px] leading-relaxed opacity-90 font-light">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {skill.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="px-2.5 py-0.5 border-opacity-20 text-[11px] font-medium bg-white/5"
                          style={{ borderColor: skill.color, color: 'white' }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {skill.usedIn.length > 0 && (
                      <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                        <Icons.Compass size={12} className="text-[var(--accent)]" />
                        <p className="text-[10px] uppercase tracking-[0.15em] font-bold text-[var(--accent)]">
                          Project Context: {skill.usedIn.join(' • ')}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
