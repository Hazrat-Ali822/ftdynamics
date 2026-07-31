'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, Database, Cloud, BrainCircuit } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const groups = [
  {
    icon: Monitor,
    label: 'Frontend',
    items: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#000000' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind', color: '#06B6D4' },
    ],
  },
  {
    icon: Server,
    label: 'Backend',
    items: [
      { name: 'Laravel', color: '#FF2D20' },
      { name: 'Node.js', color: '#339933' },
      { name: 'PHP', color: '#777BB4' },
      { name: 'Python', color: '#3776AB' },
    ],
  },
  {
    icon: Database,
    label: 'Databases',
    items: [
      { name: 'MySQL', color: '#4479A1' },
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Firebase', color: '#FFCA28' },
    ],
  },
  {
    icon: Cloud,
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS', color: '#FF9900' },
      { name: 'DigitalOcean', color: '#0080FF' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'GitHub', color: '#181717' },
    ],
  },
  {
    icon: BrainCircuit,
    label: 'AI',
    items: [
      { name: 'OpenAI', color: '#10A37F' },
      { name: 'Gemini', color: '#4285F4' },
      { name: 'Claude API', color: '#D97757' },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              The tools we <span className="text-gradient">trust and build with</span>
            </>
          }
          description="A modern, battle-tested stack across the full spectrum — from frontend to backend, databases, cloud, and AI."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: gi * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft ${g.items.length <= 3 ? 'sm:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <g.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {g.label}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-bg-secondary/60 px-3.5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/40 hover:bg-white hover:shadow-card"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
