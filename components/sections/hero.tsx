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
  MobileDashboard,
  FloatingChip,
} from '@/components/dashboard-mockups';
import { Activity, HeartPulse, ShieldCheck } from 'lucide-react';

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: (i * 67) % 100,
  y: (i * 41) % 100,
  size: 4 + ((i * 7) % 10),
  delay: (i * 0.4) % 4,
  duration: 6 + ((i * 1.3) % 5),
}));

export function Hero() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yLaptop = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yTablet = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yMobile = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          style={{ y: glowY }}
          className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full glow-accent blur-2xl"
        />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.4]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-accent/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-card backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Software engineering for ambitious teams
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
          >
            Building{' '}
            <span className="text-gradient">Future-Ready</span> Digital
            Solutions for Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We help startups, enterprises, healthcare providers, educational
            institutions, and growing businesses build scalable software
            solutions that drive innovation and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
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
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground"
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
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[520px]">
            {/* Laptop */}
            <motion.div
              style={{ y: yLaptop }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-8 z-20 w-[88%]"
            >
              <div className="rounded-xl border border-border/70 bg-[#1c2333] p-2 shadow-soft">
                <LaptopDashboard />
              </div>
              <div className="mx-auto h-2.5 w-32 rounded-b-xl bg-gradient-to-b from-[#1c2333] to-[#0f1420]" />
              <div className="mx-auto h-1 w-44 rounded-b-md bg-[#0f1420]" />
            </motion.div>

            {/* Tablet (hospital) */}
            <motion.div
              style={{ y: yTablet }}
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-44 z-30 w-[46%] animate-float-slow"
            >
              <HospitalDashboard />
            </motion.div>

            {/* Mobile */}
            <motion.div
              style={{ y: yMobile }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-2 z-30 w-[26%] animate-float sm:left-6"
            >
              <MobileDashboard />
            </motion.div>

            {/* Floating chips */}
            <FloatingChip
              className="absolute -left-2 top-2 z-40 animate-float-slow"
              icon={Activity}
              label="Uptime"
              value="99.9%"
              tone="green"
            />
            <FloatingChip
              className="absolute -right-1 bottom-24 z-40 animate-float"
              icon={HeartPulse}
              label="Live patients"
              value="248"
              tone="accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
