'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ClipboardList, Palette, Code2, FlaskConical, Rocket, LifeBuoy } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const steps = [
  { icon: Search, title: 'Discovery', text: 'We dig into your goals, users, and constraints to define the right problem.' },
  { icon: ClipboardList, title: 'Planning', text: 'Roadmap, architecture, and milestones — aligned before a line of code.' },
  { icon: Palette, title: 'UI/UX Design', text: 'Wireframes and high-fidelity interfaces validated for clarity and flow.' },
  { icon: Code2, title: 'Development', text: 'Engineered in weekly increments with clean, tested, documented code.' },
  { icon: FlaskConical, title: 'Testing', text: 'Automated and manual QA across devices, edge cases, and performance.' },
  { icon: Rocket, title: 'Deployment', text: 'Smooth, zero-downtime launches on cloud infrastructure with monitoring.' },
  { icon: LifeBuoy, title: 'Maintenance', text: 'Ongoing support, updates, and hardening to keep things fast and secure.' },
];

export function Process() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              A proven path from <span className="text-gradient">idea to impact</span>
            </>
          }
          description="Seven disciplined stages that keep projects on track, transparent, and focused on outcomes at every step."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-3xl">
          {/* Track */}
          <div className="absolute left-[27px] top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
          {/* Animated progress fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-0 w-px bg-gradient-to-b from-accent to-primary sm:left-1/2 sm:-translate-x-1/2"
          />

          <ol className="space-y-10">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.title} className="relative">
                  <div className="flex items-start gap-5 sm:grid sm:grid-cols-2 sm:gap-0">
                    {/* Node */}
                    <span className="absolute left-[19px] top-1 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-white text-accent shadow-card sm:left-1/2 sm:-translate-x-1/2">
                      <s.icon className="h-4 w-4" />
                    </span>

                    {/* Spacer for alternating layout on desktop */}
                    {!left && <div className="hidden sm:block" />}

                    <motion.div
                      initial={{ opacity: 0, x: left ? -20 : 20, y: 10 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className={`ml-14 rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:border-accent/30 hover:shadow-soft sm:ml-0 ${left ? 'sm:mr-10 sm:text-right' : 'sm:ml-10'}`}
                    >
                      <div className={`flex items-center gap-2 ${left ? 'sm:flex-row-reverse' : ''}`}>
                        <span className="font-heading text-xs font-bold text-accent">
                          0{i + 1}
                        </span>
                        <h3 className="font-heading text-base font-semibold text-foreground">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </motion.div>

                    {left && <div className="hidden sm:block" />}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
