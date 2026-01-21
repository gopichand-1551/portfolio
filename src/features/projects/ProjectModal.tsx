'use client';

import { Project } from '@/data/projects';
import { Button, Badge } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-[var(--bg-primary)] rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-colors z-10"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2 pr-12">
              {project.title}
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">{project.summary}</p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-[var(--bg-secondary)] rounded-xl">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-2xl font-bold text-[var(--accent)]">{metric.value}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Case Study Sections */}
            <div className="space-y-6">
              <CaseSection title="Problem" content={project.problem} />
              <CaseSection title="Scale" content={project.scale} />
              <CaseSection title="Architecture" content={project.architecture} />
              <CaseSection title="Tradeoffs" content={project.tradeoffs} />
              <CaseSection title="Result" content={project.result} />
              <CaseSection title="What I'd Improve" content={project.nextSteps} />
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-8 pt-6 border-t border-[var(--border)]">
              {project.github && (
                <Button variant="secondary" onClick={() => window.open(project.github, '_blank')}>
                  View Code
                </Button>
              )}
              {project.live && (
                <Button onClick={() => window.open(project.live, '_blank')}>
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CaseSection({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-[var(--accent)] uppercase tracking-wider mb-2">
        {title}
      </h4>
      <p className="text-[var(--text-secondary)] leading-relaxed">{content}</p>
    </div>
  );
}
