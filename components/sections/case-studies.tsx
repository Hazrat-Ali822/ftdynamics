'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  Cpu,
  TrendingUp,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const caseStudies = [
  {
    client: 'Barqiya',
    industry: 'Corporate · Enterprise Software',
    title: 'Unifying operations with a custom ERP',
    challenge:
      'Barqiya managed finance, HR, and operations across disconnected spreadsheets and legacy tools, causing reporting delays and data inconsistencies.',
    solution:
      'We designed and built a modular ERP with shared data models, role-based access, and real-time dashboards — deployed incrementally to avoid disruption.',
    technologies: ['Next.js', 'TypeScript', 'AWS', 'Postgres'],
    results: [
      { label: 'Reporting time', value: '−80%' },
      { label: 'Data accuracy', value: '99.6%' },
      { label: 'Teams onboarded', value: '12' },
    ],
    impact:
      'Leadership now sees live operational data across departments, enabling faster decisions and a single source of truth.',
  },
  {
    client: 'Khabir Consultant',
    industry: 'Education · E-Learning & Consulting',
    title: 'Scaling an e-learning platform for thousands of learners',
    challenge:
      'Khabir needed a learning platform that could deliver courses, quizzes, and progress tracking at scale — with a consulting portal for client engagement.',
    solution:
      'We built a multi-tenant Next.js platform with video delivery, automated grading, and a client portal, backed by a robust Node and MongoDB API.',
    technologies: ['Next.js', 'Node', 'MongoDB', 'WebRTC'],
    results: [
      { label: 'Active learners', value: '8k+' },
      { label: 'Course completion', value: '+42%' },
      { label: 'Load time', value: '1.1s' },
    ],
    impact:
      'Khabir scaled to thousands of concurrent learners while improving completion rates and consultant response times.',
  },
  {
    client: 'SehatYar',
    industry: 'Healthcare · Hospital Management',
    title: 'Deploying a live HMS across 10+ hospitals',
    challenge:
      'Hospitals needed a unified system for patients, doctors, pharmacy, lab, and billing — replacing fragmented paper and legacy processes.',
    solution:
      'We built SehatYar, a complete HMS with EMR, appointments, pharmacy, lab, and analytics — deployed as a hosted SaaS with on-site training.',
    technologies: ['Laravel', 'MySQL', 'React', 'Docker'],
    results: [
      { label: 'Hospitals live', value: '10+' },
      { label: 'Patient check-in', value: '−65%' },
      { label: 'Billing errors', value: '−90%' },
    ],
    impact:
      'Hospitals reduced check-in time and billing errors dramatically while gaining real-time visibility into occupancy and operations.',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title={
            <>
              Real challenges. <span className="text-gradient">Measurable results.</span>
            </>
          }
          description="A closer look at how we partner with clients to solve hard problems and deliver business impact — not just shipping software."
        />

        <div className="mt-16 space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border border-border bg-white shadow-card"
            >
              <div className="grid gap-8 p-7 lg:grid-cols-12 lg:gap-10 lg:p-10">
                {/* Left: narrative */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-xl font-bold text-foreground">
                      {cs.client}
                    </span>
                    <span className="rounded-full bg-bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground">
                    {cs.title}
                  </h3>

                  <div className="mt-6 space-y-5">
                    {[
                      { icon: Target, label: 'Challenge', text: cs.challenge },
                      { icon: Lightbulb, label: 'Solution', text: cs.solution },
                      { icon: BarChart3, label: 'Business Impact', text: cs.impact },
                    ].map((row) => (
                      <div key={row.label} className="flex gap-3.5">
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <row.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {row.label}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {row.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    {cs.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: results */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/[0.03] to-accent/[0.05] p-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <p className="font-heading text-sm font-semibold text-foreground">
                        Results
                      </p>
                    </div>
                    <div className="mt-5 space-y-4">
                      {cs.results.map((r) => (
                        <div key={r.label} className="flex items-center justify-between border-b border-border/60 pb-4 last:border-0 last:pb-0">
                          <span className="text-sm text-muted-foreground">{r.label}</span>
                          <span className="font-heading text-2xl font-bold text-gradient">
                            {r.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/#contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-bright"
                    >
                      Discuss a similar project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
