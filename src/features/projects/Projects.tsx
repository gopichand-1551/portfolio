'use client';

import { useState } from 'react';
import { Container, SectionHeader } from '@/components/ui';
import { ScrollReveal, StaggerChildren, StaggerItem } from '@/components/animations';
import { GradientMesh } from '@/components/backgrounds';
import { projects, Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-20 overflow-hidden">
        {/* Gradient Mesh Animation */}
        <GradientMesh />
        
        <Container className="relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="Featured Projects"
              subtitle="Production systems with measurable business impact"
            />
          </ScrollReveal>

          <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <StaggerItem key={project.id}>
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
