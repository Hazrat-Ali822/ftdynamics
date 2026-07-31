'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Gem,
  HandshakeIcon,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/motion';

const values = [
  { icon: Lightbulb, title: 'Innovation', text: 'We adopt emerging tech to solve real problems in novel ways.' },
  { icon: ShieldCheck, title: 'Transparency', text: 'Clear communication, honest timelines, no hidden surprises.' },
  { icon: Gem, title: 'Quality', text: 'Engineered to a high bar — tested, documented, and maintainable.' },
  { icon: HandshakeIcon, title: 'Long-term Partnerships', text: 'We invest in relationships, not one-off transactions.' },
  { icon: Layers, title: 'Scalable Technology', text: 'Architecture that grows with your business, not against it.' },
  { icon: HeartHandshake, title: 'Customer Success', text: 'Your outcomes define our work. We win when you win.' },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title={
            <>
              Engineering software that <span className="text-gradient">earns trust</span>
            </>
          }
          description="Future Tech Dynamics is a software development company specializing in modern digital solutions. We build scalable products, SaaS platforms, enterprise software, and AI-powered systems for organizations that take technology seriously."
        />

        {/* Mission & Vision */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:shadow-soft lg:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To empower businesses with future-ready digital solutions that
                streamline operations, unlock growth, and create measurable
                impact. We turn ambitious ideas into reliable, scalable software
                products that people love to use.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-300 hover:shadow-soft lg:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To be a globally recognized software engineering partner known
                for technical excellence, innovation, and integrity — helping
                organizations across healthcare, education, and enterprise
                thrive in a digital-first world.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Core values */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <v.icon className="h-5 w-5" />
              </span>
              <h4 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {v.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
