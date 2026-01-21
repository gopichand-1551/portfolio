'use client';
import Image from 'next/image';

import { Container, SectionHeader, Badge, Button } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/animations';
import { Starfield } from '@/components/backgrounds';
import { experiences, education, certifications } from '@/data/experience';
import { personalInfo } from '@/data/roles';
import * as Icons from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-[var(--bg-secondary)] overflow-hidden">
      {/* Starfield Animation */}
      <Starfield className="opacity-50" starCount={80} />
      
      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeader
            title="Experience & Education"
            subtitle="Career progression and academic background"
          />
        </ScrollReveal>

        {/* Work Experience */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-8">Professional Experience</h3>
          </ScrollReveal>
          
          <StaggerChildren className="space-y-6">
            {experiences.map((exp) => (
              <StaggerItem key={exp.id}>
                <div className="p-6 rounded-xl card-gradient backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--text-primary)]">{exp.title}</h4>
                      <p className="text-[var(--text-secondary)]">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-sm text-[var(--accent)] font-medium whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{exp.description}</p>
                  <ul className="text-sm text-[var(--text-secondary)] space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Education */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-8">Education</h3>
          </ScrollReveal>
          
          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <StaggerItem key={edu.id}>
                <div className="p-6 rounded-xl card-gradient backdrop-blur-sm h-full group hover:border-[var(--accent)]/30 border border-transparent transition-all">
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {edu.institution.includes('CMR') && (
                      <div className="relative w-16 h-16 rounded-lg bg-white p-1 flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                        <Image 
                          src="/image/cmrcet.png" 
                          alt="CMRCET" 
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-[var(--text-primary)]">{edu.degree}</h4>
                        <span className="text-sm text-[var(--accent)] font-medium">{edu.period}</span>
                      </div>
                      <p className="text-[var(--text-secondary)] font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{edu.location}</p>
                      <p className="text-sm text-[var(--accent)] mt-2 font-bold tracking-wide">{edu.grade}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        <div id="certifications">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h3 className="text-xl font-semibold text-[var(--accent)]">Professional Certifications</h3>
              <Button 
                variant="secondary" 
                size="sm"
                className="group w-fit"
                onClick={() => window.open(personalInfo.certifications, '_blank')}
              >
                <Icons.Award size={14} className="mr-2 text-[var(--accent)]" />
                View Certificates
                <Icons.ExternalLink size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
          
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <StaggerItem key={cert.id}>
                <div className="p-4 rounded-xl card-gradient backdrop-blur-sm h-full group hover:border-[var(--accent)]/30 border border-transparent transition-all flex items-center gap-4">
                  {cert.issuer.includes('Innomatics') && (
                    <div className="relative w-12 h-12 rounded-lg bg-white p-1 flex-shrink-0 shadow-md overflow-hidden">
                      <Image 
                        src="/image/innomatics.png" 
                        alt="Innomatics" 
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">{cert.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{cert.issuer}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
