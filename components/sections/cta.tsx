'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BrandButton } from '@/components/brand-button';
import { Magnetic } from '@/components/magnetic';

export function CTASection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-soft sm:px-12 lg:py-20"
        >
          {/* glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute inset-0 bg-grid opacity-10" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Let's build together
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Transform your idea into a scalable digital product.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Whether you're a startup validating an MVP or an enterprise
              modernizing operations, we have the team to make it happen.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={0.3}>
                <BrandButton asChild variant="white" size="lg">
                  <Link href="/#contact" className="gap-2">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </BrandButton>
              </Magnetic>
              <Magnetic strength={0.25}>
                <BrandButton
                  asChild
                  size="lg"
                  className="border border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  <Link href="/#products">Explore Our Products</Link>
                </BrandButton>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
