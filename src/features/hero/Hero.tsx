'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/roles';
import { Container, Button } from '@/components/ui';
import { ScrollReveal, MagneticButton } from '@/components/animations';
import { ParticleNetwork } from '@/components/backgrounds';
import { TypeWriterLoop } from '@/features/hero/TypeWriterLoop';

export function Hero() {
  const roles = [
    { text: 'Data Analyst', color: '#fbbf24' }, // Amber/Yellow
    { text: 'Machine Learning Engineer', color: '#22d3ee' }, // Cyan/Light Blue
    { text: 'GenAI Engineer', color: '#c084fc' } // Purple
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      
      {/* Particle Network Animation */}
      <ParticleNetwork className="opacity-60" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(var(--accent) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Greeting */}
            <ScrollReveal delay={0.1} once={false}>
              <p className="text-xl text-[var(--text-secondary)] mb-2">
                Hello, I&apos;m
              </p>
            </ScrollReveal>

            {/* Name */}
            <ScrollReveal delay={0.2} once={false}>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="gradient-text glow-text">{personalInfo.firstName}</span>
              </motion.h1>
            </ScrollReveal>

            {/* Typewriter Role */}
            <ScrollReveal delay={0.3} once={false}>
              <p className="text-xl sm:text-2xl font-medium mb-6 h-8 flex items-center">
                <span className="text-[var(--text-secondary)] mr-2">And I&apos;m an aspiring</span>
                <TypeWriterLoop words={roles} />
              </p>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.4} once={false}>
              <p className="text-base sm:text-lg text-white mb-8 max-w-xl leading-relaxed">
                {personalInfo.summary}
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.5} once={false}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton strength={0.2}>
                  <Button 
                    size="lg" 
                    className="btn-glow"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Projects
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact Me
                  </Button>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.6} once={false}>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <span className="text-3xl font-bold gradient-text">3+</span>
                  <p className="text-sm text-[var(--text-secondary)]">Projects<br/>Completed</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl font-bold gradient-text">79K+</span>
                  <p className="text-sm text-[var(--text-secondary)]">Data Records<br/>Processed</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl font-bold gradient-text">99.5%</span>
                  <p className="text-sm text-[var(--text-secondary)]">Model<br/>Accuracy</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Profile Image with 3D Animated Arc */}
          <div className="hidden lg:flex justify-center items-center">
            <ScrollReveal delay={0.3} direction="right" once={false}>
              <div className="relative w-[500px] h-[500px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                {/* 3D Rotating Arc - Outer Ring */}
                <motion.div
                  className="absolute w-[400px] h-[400px] rounded-full"
                  style={{
                    border: '6px solid transparent',
                    borderTopColor: '#00d4ff',
                    borderRightColor: '#06b6d4',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.5), inset 0 0 30px rgba(0, 212, 255, 0.1)',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    rotateZ: [0, 360],
                    rotateX: [70, 70],
                  }}
                  transition={{
                    rotateZ: { duration: 10, repeat: Infinity, ease: 'linear' },
                    rotateX: { duration: 0 },
                  }}
                />
                
                {/* 3D Rotating Arc - Inner Ring */}
                <motion.div
                  className="absolute w-[360px] h-[360px] rounded-full"
                  style={{
                    border: '4px solid transparent',
                    borderTopColor: '#06b6d4',
                    borderLeftColor: '#00d4ff',
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    rotateZ: [360, 0],
                    rotateX: [65, 65],
                  }}
                  transition={{
                    rotateZ: { duration: 15, repeat: Infinity, ease: 'linear' },
                    rotateX: { duration: 0 },
                  }}
                />
                
                {/* Static arc glow behind profile */}
                <div 
                  className="absolute w-[380px] h-[200px] rounded-t-full -translate-y-16"
                  style={{
                    background: 'linear-gradient(to top, transparent, rgba(0, 212, 255, 0.2), rgba(0, 212, 255, 0.4))',
                    filter: 'blur(20px)',
                  }}
                />
                
                {/* Pulsing glow behind profile */}
                <motion.div
                  className="absolute w-96 h-96 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 60%)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Profile Image Container */}
                <div className="relative z-10">
                  <motion.div 
                    className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-[0_0_50px_rgba(0,212,255,0.6),0_0_100px_rgba(0,212,255,0.3)]"
                    animate={{
                      boxShadow: [
                        '0 0 50px rgba(0,212,255,0.6), 0 0 100px rgba(0,212,255,0.3)',
                        '0 0 70px rgba(0,212,255,0.8), 0 0 120px rgba(0,212,255,0.4)',
                        '0 0 50px rgba(0,212,255,0.6), 0 0 100px rgba(0,212,255,0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="320px"
                    />
                  </motion.div>
                </div>
                
                {/* Animated floating particles */}
                <motion.div 
                  className="absolute top-20 right-16 w-2 h-2 bg-[var(--accent)] rounded-full"
                  animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-28 left-20 w-1.5 h-1.5 bg-[var(--accent-secondary)] rounded-full"
                  animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
                  animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
