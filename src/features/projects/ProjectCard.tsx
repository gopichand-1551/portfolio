'use client';

import { Project } from '@/data/projects';
import { Badge, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { Tilt3D } from '@/components/animations';
import { cn } from '@/utils/cn';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <Tilt3D maxTilt={6} scale={1.01}>
      <Card
        className={cn(
          'h-full cursor-pointer group bg-[var(--bg-secondary)] border-[var(--border)]',
          'hover:border-[var(--accent)] transition-all duration-300'
        )}
        onClick={onClick}
      >
        <CardHeader className="p-0 overflow-hidden">
          {project.image && (
            <div className="relative w-full h-56 overflow-hidden bg-[var(--bg-primary)] border-b border-[var(--border)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback for missing images
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent opacity-40" />
            </div>
          )}
          <div className="p-6 pb-0">
            <div className="flex items-start justify-between gap-4 mb-4">
              <CardTitle className="text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors leading-tight">
                {project.title}
              </CardTitle>
              <span className="text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-1 rounded border border-[var(--accent)]/20">
                #0{index + 1}
              </span>
            </div>
            
            {/* Architecture Highlight */}
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-bold mb-1">Technical Architecture</p>
              <p className="text-sm text-white font-medium line-clamp-2 opacity-90">
                {project.architecture}
              </p>
            </div>

            <p className="text-sm text-[var(--text-secondary)] mb-4">
              {project.summary}
            </p>
          </div>
        </CardHeader>
        
        <CardContent>
          {/* Metrics preview */}
          <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-[var(--bg-primary)]/50 rounded-xl border border-white/5">
            {project.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-base font-bold text-[var(--accent)]">
                  {metric.value}
                </div>
                <div className="text-[9px] uppercase tracking-tighter text-[var(--text-secondary)] truncate">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] border-white/10 text-white/70">
                {tech}
              </Badge>
            ))}
          </div>

          {/* View details hint */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
            <p className="text-xs font-semibold text-[var(--accent)] group-hover:translate-x-1 transition-transform">
              Explore Case Study →
            </p>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
              <span className="text-[var(--accent)] text-lg">+</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Tilt3D>
  );
}
