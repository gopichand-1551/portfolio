'use client';

import { personalInfo } from '@/data/roles';
import { Container, Button } from '@/components/ui';
import { ScrollReveal, MagneticButton } from '@/components/animations';
import { FloatingDots } from '@/components/backgrounds';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Floating Dots Animation */}
      <FloatingDots className="opacity-40" dotCount={50} />
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Let&apos;s Connect</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Open to discussing ML engineering, GenAI projects, or data challenges.
              Always interested in solving complex problems at scale.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <MagneticButton strength={0.2}>
                <Button 
                  size="lg" 
                  className="btn-glow"
                  onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                >
                  Get in Touch
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.open(personalInfo.github, '_blank')}
                >
                  View GitHub
                </Button>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Animated Contact Cards */}
          <ScrollReveal delay={0.3}>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <ContactCard 
                icon={<EmailIcon />}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
                gradient="from-red-500 to-orange-500"
                delay={0}
              />
              <ContactCard 
                icon={<PhoneIcon />}
                label="Phone"
                value={personalInfo.phone}
                gradient="from-green-500 to-emerald-500"
                delay={0.1}
              />
              <ContactCard 
                icon={<LocationIcon />}
                label="Location"
                value={personalInfo.location}
                gradient="from-blue-500 to-purple-500"
                delay={0.2}
              />
            </div>
          </ScrollReveal>

          {/* Social Icons with Brand Colors */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center gap-8">
              <SocialLink 
                href={personalInfo.github} 
                label="GitHub"
                hoverColor="hover:bg-gray-800 hover:text-white"
              >
                <GitHubIcon />
              </SocialLink>
              <SocialLink 
                href={personalInfo.linkedin} 
                label="LinkedIn"
                hoverColor="hover:bg-[#0A66C2] hover:text-white"
              >
                <LinkedInIcon />
              </SocialLink>
              <SocialLink 
                href={`mailto:${personalInfo.email}`} 
                label="Email"
                hoverColor="hover:bg-red-500 hover:text-white"
              >
                <EmailIconSmall />
              </SocialLink>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  gradient: string;
  delay: number;
}

function ContactCard({ icon, label, value, href, gradient, delay }: ContactCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}
      className="group relative p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] overflow-hidden cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: delay * 2 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
        animate={{
          y: [0, -8, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: delay * 3 }}
      />
      
      {/* Icon with gradient */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${gradient} mb-3`}>
        <span className="text-white">{icon}</span>
      </div>
      
      {/* Label */}
      <p className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
        {label}
      </p>
      
      {/* Value */}
      <p className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors break-all">
        {value}
      </p>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
      />
    </motion.div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
}

function SocialLink({ href, label, children, hoverColor }: { href: string; label: string; children: React.ReactNode; hoverColor: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className={`p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)] ${hoverColor} transition-all duration-300`}
    >
      {children}
    </motion.a>
  );
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIconSmall() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
