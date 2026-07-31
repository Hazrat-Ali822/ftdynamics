'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Cpu,
  Network,
  Zap,
  MessagesSquare,
  LifeBuoy,
  Lock,
  Briefcase,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Team',
    text: '10 senior engineers, designers, and product thinkers with deep domain experience.',
    span: 'lg:col-span-2',
  },
  {
    icon: Cpu,
    title: 'Modern Technologies',
    text: 'Next.js, TypeScript, Node, and AI at the core of every build.',
    span: '',
  },
  {
    icon: Network,
    title: 'Scalable Architecture',
    text: 'Cloud-native systems designed to scale from MVP to millions of users.',
    span: '',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    text: 'Lean process, weekly milestones, and shipping software that works.',
    span: '',
  },
  {
    icon: MessagesSquare,
    title: 'Transparent Communication',
    text: 'Clear updates, shared roadmaps, and no surprises — ever.',
    span: '',
  },
  {
    icon: LifeBuoy,
    title: 'Dedicated Support',
    text: 'We stay with you after launch with proactive monitoring and fixes.',
    span: 'lg:col-span-2',
  },
  {
    icon: Lock,
    title: 'Secure Development',
    text: 'Security-first practices baked into every layer of the stack.',
    span: '',
  },
  {
    icon: Briefcase,
    title: 'Business-focused Solutions',
    text: 'We build for outcomes — revenue, efficiency, and growth.',
    span: 'lg:col-span-2',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              A partner built for <span className="text-gradient">serious outcomes</span>
            </>
          }
          description="We combine engineering rigor with product sensibility — delivering software that is reliable, scalable, and genuinely useful to your business."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft ${r.span}`}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-all duration-300 group-hover:from-accent group-hover:to-accent group-hover:text-white">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
