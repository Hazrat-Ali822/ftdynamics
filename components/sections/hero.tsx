'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { BrandButton } from '@/components/brand-button';
import { Magnetic } from '@/components/magnetic';
import {
  LaptopDashboard,
  HospitalDashboard,
  FloatingChip,
} from '@/components/dashboard-mockups';
import { Activity, HeartPulse, ShieldCheck } from 'lucide-react';

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yLaptop = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yTablet = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-20 pb-12 sm:pt-24 lg:pt-24 lg:pb-16"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full glow-accent blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.3]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Software engineering for ambitious teams</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]"
            >
              Building <span className="text-gradient">future-ready</span> digital
              solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We help startups, enterprises, healthcare providers, educational
              institutions, and growing businesses build scalable software
              solutions that drive innovation and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={0.3}>
                <BrandButton asChild variant="primary" size="lg">
                  <Link href="/#contact" className="gap-2">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </BrandButton>
              </Magnetic>
              <Magnetic strength={0.25}>
                <BrandButton asChild variant="outline" size="lg">
                  <Link href="/#portfolio">View Our Work</Link>
                </BrandButton>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-medium text-foreground">5.0</span>
                <span>client rating</span>
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent" />
                30+ projects delivered
              </div>
              <div className="hidden h-4 w-px bg-border sm:block" />
              <div className="flex items-center gap-1.5">
                <HeartPulse className="h-4 w-4 text-accent" />
                10+ hospitals on SehatYar
              </div>
            </motion.div>
          </div>

          {/* Right: device composition */}
          <div className="relative mt-6 lg:mt-0 lg:col-span-6 w-full max-w-full overflow-hidden sm:overflow-visible">
            <div className="relative mx-auto h-[350px] w-full max-w-full sm:max-w-[580px] sm:h-[450px] lg:h-[500px]">
              {/* Main Laptop Dashboard */}
              <motion.div
                style={{ y: yLaptop }}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 sm:top-2 z-20 w-full"
              >
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-[#070d19] p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(14,49,90,0.3)]">
                  <LaptopDashboard />
                </div>
                <div className="mx-auto h-2 w-28 sm:h-2.5 sm:w-36 rounded-b-xl bg-[#070d19]" />
                <div className="mx-auto h-1 w-36 sm:w-48 rounded-b-md bg-[#040810]" />
              </motion.div>

              {/* SehatYar Floating Widget */}
              <motion.div
                style={{ y: yTablet }}
                initial={{ opacity: 0, x: 25, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 bottom-1 sm:bottom-4 z-30 w-[72%] sm:w-[50%] shadow-2xl"
              >
                <HospitalDashboard />
              </motion.div>

              {/* Floating Glow Chips */}
              <FloatingChip
                className="absolute -left-3 -top-2 z-40 hidden sm:flex"
                icon={Activity}
                label="Uptime SLA"
                value="99.99%"
                tone="green"
              />
              <FloatingChip
                className="absolute left-2 -bottom-2 z-40 hidden sm:flex"
                icon={HeartPulse}
                label="SehatYar Facilities"
                value="10+ Live"
                tone="accent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
