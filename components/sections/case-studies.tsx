'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  Cpu,
  TrendingUp,
  BarChart3,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const caseStudies = [
  {
    client: 'SehatYar',
    url: 'https://sehatyar.online',
    displayUrl: 'sehatyar.online',
    industry: 'Healthcare · Hospital & Pharmacy HMS',
    title: 'Deploying a Complete Hospital & Pharmacy Management System',
    challenge:
      'Hospitals and pharmacies struggled with fragmented paper records, manual lab report dispatching, slow OPD check-in queues, and stock inventory discrepancies.',
    solution:
      'We engineered SehatYar — a full-featured cloud HMS integrating EMR patient records, OPD appointment queues, pharmacy POS & stock tracking, lab test automation, and executive billing dashboards.',
    technologies: ['Laravel', 'React', 'MySQL', 'Docker', 'Tailwind'],
    results: [
      { label: 'Hospitals & Pharmacies', value: '10+' },
      { label: 'Patient Queue Time', value: '−65%' },
      { label: 'Billing & Stock Accuracy', value: '99.8%' },
    ],
    impact:
      'Deployed live at sehatyar.online, streamlining healthcare workflows, pharmacy point-of-sale, and diagnostic reporting across 10+ medical facilities.',
  },
  {
    client: 'Khabir Consultant',
    url: 'https://khabirconsultant.ae',
    displayUrl: 'khabirconsultant.ae',
    industry: 'Education & Corporate Consulting · UAE',
    title: 'Scaling an E-Learning & Advisory Portal for Thousands of Learners',
    challenge:
      'Delivering specialized consulting courses, interactive client sessions, and advisory deliverables to thousands of professionals across UAE and GCC smoothly.',
    solution:
      'We engineered a high-performance Next.js corporate portal and LMS with video streaming, automated progress tracking, client workspace portals, and secure document exchange.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    results: [
      { label: 'Learners & Clients', value: '8k+' },
      { label: 'Engagement Rate', value: '+42%' },
      { label: 'Page Load Speed', value: '1.1s' },
    ],
    impact:
      'Scaled Khabir Consultant operations across the UAE, managing concurrent learning modules, advisory workflows, and client engagement seamlessly.',
  },
  {
    client: 'Barqiya',
    url: 'https://barqiya.ae',
    displayUrl: 'barqiya.ae',
    industry: 'Corporate · Enterprise ERP & Logistics Automation',
    title: 'Unifying Enterprise Workflows & Fleet Logistics',
    challenge:
      'Managing cross-departmental operations, order dispatch, fleet tracking, and financial ledgers across disconnected spreadsheets created operational lag and reporting bottlenecks.',
    solution:
      'We developed a unified enterprise resource planning (ERP) platform featuring automated fleet dispatching, real-time ledger accounting, role-based admin controls, and operational analytics.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Postgres', 'Docker'],
    results: [
      { label: 'Operational Lag', value: '−80%' },
      { label: 'Logistics Accuracy', value: '99.6%' },
      { label: 'Units Onboarded', value: '12+' },
    ],
    impact:
      'Consolidated Barqiya core business workflows into a single real-time dashboard, giving executive leadership live visibility over operations and finances.',
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
              Proven impact on <span className="text-gradient">real-world platforms</span>
            </>
          }
          description="Detailed breakdown of how Future Tech Dynamics engineered scalable solutions for SehatYar, Khabir Consultant, and Barqiya."
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
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-heading text-2xl font-bold text-foreground">
                      {cs.client}
                    </span>
                    <a
                      href={cs.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                    >
                      <ExternalLink className="h-3 w-3" />
                      {cs.displayUrl}
                    </a>
                    <span className="rounded-full bg-bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
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
                  <div className="h-full flex flex-col justify-between rounded-2xl border border-border bg-gradient-to-br from-primary/[0.03] to-accent/[0.05] p-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        <p className="font-heading text-sm font-semibold text-foreground">
                          Key Metrics & Results
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
                    </div>

                    <a
                      href={cs.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-accent shadow-md"
                    >
                      Visit Live Platform
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
