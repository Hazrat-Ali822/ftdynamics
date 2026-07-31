'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const posts = [
  {
    title: 'How AI Integrations Are Reshaping SaaS Products in 2026',
    excerpt:
      'From AI writing assistants to intelligent analytics, embedding AI into your SaaS is now a competitive necessity. Here is how to do it right.',
    category: 'AI',
    readTime: '7 min',
    date: 'Jul 2026',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Building Scalable SaaS: Architecture Patterns That Hold Up',
    excerpt:
      'Multi-tenancy, billing, and data isolation are the hard parts of SaaS. We break down the patterns we use to build platforms that scale.',
    category: 'SaaS',
    readTime: '9 min',
    date: 'Jun 2026',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Cybersecurity Basics Every Software Team Should Enforce',
    excerpt:
      'Security is not a feature you add later. We share the baseline practices every team should enforce from day one.',
    category: 'Cybersecurity',
    readTime: '6 min',
    date: 'Jun 2026',
    image: 'https://images.pexels.com/photos/6097774/pexels-photo-6097774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Healthcare Technology: Designing Software Clinicians Trust',
    excerpt:
      'Building for hospitals means designing for speed, accuracy, and compliance. Lessons from shipping SehatYar to 10+ hospitals.',
    category: 'Healthcare Tech',
    readTime: '8 min',
    date: 'May 2026',
    image: 'https://images.pexels.com/photos/6129679/pexels-photo-6129679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Software Development: Why Process Beats Heroics',
    excerpt:
      'Great software comes from disciplined process, not all-nighters. How our 7-stage workflow keeps quality high and risk low.',
    category: 'Software Dev',
    readTime: '5 min',
    date: 'May 2026',
    image: 'https://images.pexels.com/photos/34804011/pexels-photo-34804011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Business Automation: Where to Start and What to Avoid',
    excerpt:
      'Automation can unlock serious leverage — or create fragility. A practical guide to identifying the right workflows to automate.',
    category: 'Automation',
    readTime: '6 min',
    date: 'Apr 2026',
    image: 'https://images.pexels.com/photos/8463151/pexels-photo-8463151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Blog & Insights"
            title={
              <>
                Thinking on <span className="text-gradient">software, AI, and scale</span>
              </>
            }
            description="Practical perspectives from our team on building and shipping modern software."
          />
          <a
            href="/#blog"
            className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:text-accent sm:inline-flex"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-accent backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.readTime}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <a
                  href="/#blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent-bright"
                >
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
