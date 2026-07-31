'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { projects, categories, type Category } from '@/lib/projects';
import { cn } from '@/lib/utils';

const filters: ('All' | Category)[] = categories;

export function Portfolio() {
  const [active, setActive] = React.useState<'All' | Category>('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              30+ projects, <span className="text-gradient">built to ship</span>
            </>
          }
          description="A selection of products we've engineered across healthcare, education, corporate, and SaaS. Filter by industry to explore our work."
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
        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                        <Star className="h-3 w-3 fill-white" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3 inline-flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-primary opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-muted-foreground">
                    {p.client} · {p.industry}
                  </p>
                  <h3 className="mt-1.5 font-heading text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/#case-studies"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-bright"
                  >
                    View Case Study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
