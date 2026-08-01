'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Star,
  Building2,
  Globe,
  Layers,
  Code2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { projects, categories, type Category } from '@/lib/projects';
import { cn } from '@/lib/utils';

const filters: ('All' | Category)[] = categories;

const categoryIconMap: Record<Category, React.ElementType> = {
  SaaS: Layers,
  'Enterprise Tech': Building2,
  'Web Platforms': Globe,
};

const categoryGradientMap: Record<Category, string> = {
  SaaS: 'from-blue-600/15 via-cyan-500/10 to-transparent',
  'Enterprise Tech': 'from-slate-800/15 via-blue-900/10 to-transparent',
  'Web Platforms': 'from-indigo-600/15 via-purple-500/10 to-transparent',
};

export function Portfolio() {
  const [active, setActive] = React.useState<'All' | Category>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Curated platforms & <span className="text-gradient">SaaS products</span>
            </>
          }
          description="Key SaaS platforms, enterprise client systems, and custom web applications engineered by Future Tech Dynamics."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
                active === f
                  ? 'border-accent bg-accent text-white shadow-[0_6px_20px_hsl(var(--accent)/0.3)]'
                  : 'border-border bg-white text-muted-foreground hover:border-accent/40 hover:text-foreground'
              )}
            >
              {f}
              {f !== 'All' && (
                <span
                  className={cn(
                    'ml-1.5 text-xs',
                    active === f ? 'text-white/70' : 'text-muted-foreground/60'
                  )}
                >
                  {projects.filter((p) => p.category === f).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => {
              const IconComponent = categoryIconMap[p.category] || Code2;
              const gradientClass = categoryGradientMap[p.category] || 'from-primary/10 to-transparent';

              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-soft sm:p-8"
                >
                  {/* Subtle hover gradient background */}
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b opacity-60 transition-opacity duration-500 group-hover:opacity-100',
                      gradientClass
                    )}
                  />

                  <div>
                    {/* Header badges */}
                    <div className="relative flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                          <IconComponent className="h-5 w-5" />
                        </span>
                        <span className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                          {p.category}
                        </span>
                      </div>

                      {p.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                          <Star className="h-3.5 w-3.5 fill-accent" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Title & Client */}
                    <div className="relative mt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {p.client} · {p.industry}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {p.summary}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack & Action link */}
                  <div className="relative mt-8 pt-5 border-t border-border/60">
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-border/80 bg-bg-secondary px-3 py-1 text-xs font-semibold text-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" /> Production Deployed
                      </span>

                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl bg-accent/10 px-3.5 py-2 text-xs font-bold text-accent transition-all hover:bg-accent hover:text-white"
                        >
                          Visit Live Project
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <a
                          href="/#contact"
                          className="inline-flex items-center gap-1 text-xs font-bold text-accent transition-colors hover:text-accent-bright"
                        >
                          Request Demo
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
