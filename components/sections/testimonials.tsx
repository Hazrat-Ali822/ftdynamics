'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const testimonials = [
  {
    quote:
      'Future Tech Dynamics rebuilt our hospital management system from the ground up. SehatYar now runs across all our branches — patient check-in is faster, and our billing errors dropped dramatically.',
    name: 'Dr. Ayesha Khan',
    role: 'Medical Director, City Hospital',
    sector: 'Healthcare',
    image: 'https://images.pexels.com/photos/37272329/pexels-photo-37272329.png?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    quote:
      'Their team built our school management platform with a parent portal and online classes. Communication was transparent throughout, and the product just works. Parents love it.',
    name: 'Sana Iqbal',
    role: 'Principal, Greenwood School',
    sector: 'Education',
    image: 'https://images.pexels.com/photos/16160869/pexels-photo-16160869.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    quote:
      'We engaged FT Dynamics to unify our operations into a custom ERP. The result: a single source of truth across finance, HR, and operations, with real-time dashboards for leadership.',
    name: 'Bilal Ahmed',
    role: 'COO, Barqiya',
    sector: 'Corporate',
    image: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    quote:
      'From discovery to deployment, the process was disciplined and professional. They delivered our e-learning platform on time and scaled it to thousands of learners without a hitch.',
    name: 'Hamza Raza',
    role: 'Founder, Khabir Consultant',
    sector: 'Education',
    image: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    quote:
      'Their AI integration work transformed our content workflow. We shipped an AI writing assistant that our customers rely on daily — the engineering quality is excellent.',
    name: 'Marcus Lee',
    role: 'Product Lead, WriteAI',
    sector: 'SaaS',
    image: 'https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    quote:
      'A genuinely senior team. They understood our business, not just the tech, and built a CRM that fits our sales process perfectly. ROI was visible within the first quarter.',
    name: 'Nadia Sheikh',
    role: 'VP Sales, Apex Ventures',
    sector: 'Corporate',
    image: 'https://images.pexels.com/photos/34761515/pexels-photo-34761515.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by leaders in <span className="text-gradient">every sector we serve</span>
            </>
          }
          description="Hear from the healthcare, education, and corporate teams who partner with us to build and scale their products."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <Quote className="h-8 w-8 text-accent/15 transition-colors duration-300 group-hover:text-accent/30" />
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <span className="relative h-11 w-11 overflow-hidden rounded-full border border-border">
                  <Image src={t.image} alt={t.name} fill sizes="44px" className="object-cover" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
                <span className="ml-auto rounded-full bg-bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                  {t.sector}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
