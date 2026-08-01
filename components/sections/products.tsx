'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  HeartPulse,
  GraduationCap,
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  PlayCircle,
  Users,
  Stethoscope,
  Pill,
  FlaskConical,
  FileText,
  LayoutDashboard,
  LineChart,
  BookOpen,
  Wallet,
  Bus,
  Video,
  School,
  ClipboardCheck,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { BrandButton } from '@/components/brand-button';
import { Magnetic } from '@/components/magnetic';
import { HospitalDashboard } from '@/components/dashboard-mockups';

const sehatFeatures = [
  { icon: Users, label: 'Patient Management' },
  { icon: Stethoscope, label: 'Doctors & Staff' },
  { icon: CalendarClock, label: 'Appointments' },
  { icon: FileText, label: 'Electronic Medical Records' },
  { icon: Pill, label: 'Pharmacy' },
  { icon: FlaskConical, label: 'Laboratory' },
  { icon: LayoutDashboard, label: 'Billing & Invoicing' },
  { icon: LineChart, label: 'Analytics & Reports' },
];

const schoolFeatures = [
  { icon: Users, label: 'Students' },
  { icon: School, label: 'Teachers' },
  { icon: ClipboardCheck, label: 'Attendance' },
  { icon: CalendarClock, label: 'Examinations' },
  { icon: Wallet, label: 'Fees Management' },
  { icon: BookOpen, label: 'Parents Portal' },
  { icon: Bus, label: 'Transport' },
  { icon: Video, label: 'Online Classes' },
  { icon: FileText, label: 'Results & Reports' },
  { icon: LayoutDashboard, label: 'Dashboard & Analytics' },
];

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products"
          title={
            <>
              Our own <span className="text-gradient">SaaS platforms</span>, live in production
            </>
          }
          description="We don't just build for clients — we build and operate our own products. These platforms power real hospitals and schools today."
        />

        {/* SehatYar */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3.5 py-1.5 text-xs font-semibold text-red-600">
              <HeartPulse className="h-3.5 w-3.5" />
              Live Hospital Management System
            </div>
            <h3 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              SehatYar
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A complete hospital management system trusted by 10+ hospitals —
              covering patients, doctors, pharmacy, lab, billing, and analytics
              in one unified platform.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {sehatFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-foreground shadow-card"
                >
                  <f.icon className="h-4 w-4 shrink-0 text-accent" />
                  {f.label}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.25}>
                <BrandButton asChild variant="primary" size="md">
                  <a
                    href="https://sehatyar.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    Visit Now
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </BrandButton>
              </Magnetic>
              <Magnetic strength={0.25}>
                <BrandButton asChild variant="outline" size="md">
                  <Link href="/#contact" className="gap-2">
                    <PlayCircle className="h-4 w-4" />
                    Book Demo
                  </Link>
                </BrandButton>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-red-500/10 via-accent/10 to-primary/10 blur-2xl" />
            <div className="rounded-2xl border border-border bg-white p-4 shadow-soft sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                    <HeartPulse className="h-4 w-4" />
                  </span>
                  <span className="font-heading text-sm font-semibold text-foreground">
                    SehatYar Dashboard
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-600">
                  <CheckCircle2 className="h-3 w-3" /> 10+ hospitals live
                </span>
              </div>
              <HospitalDashboard className="mt-4 border-0 p-0 shadow-none" />
            </div>
          </motion.div>
        </div>

        {/* School Management System */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl border border-border bg-white p-4 shadow-soft sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span className="font-heading text-sm font-semibold text-foreground">
                    School Dashboard
                  </span>
                </div>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                  Available
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[
                  { l: 'Students', v: '1,840' },
                  { l: 'Teachers', v: '96' },
                  { l: 'Attendance', v: '94%' },
                  { l: 'Fees collected', v: '88%' },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg border border-border/60 bg-bg-secondary/60 p-2.5">
                    <p className="font-heading text-base font-bold text-foreground">{s.v}</p>
                    <p className="text-[10px] text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-border/60 p-3">
                <p className="text-[11px] font-semibold text-foreground">Enrollment trend</p>
                <div className="mt-2 flex h-16 items-end gap-1.5">
                  {[40, 55, 48, 70, 62, 85, 78, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-1 rounded-t bg-gradient-to-t from-accent/30 to-accent"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {['Class 6-A', 'Class 9-B', 'Class 10-C'].map((c) => (
                  <div key={c} className="rounded-lg border border-border/60 p-2.5">
                    <p className="text-[10px] font-semibold text-foreground">{c}</p>
                    <div className="mt-1.5 flex items-center gap-1">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${60 + Math.random() * 30}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent">
              <GraduationCap className="h-3.5 w-3.5" />
              Education Platform
            </div>
            <h3 className="mt-5 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              School Management System
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A unified platform for schools — managing students, teachers,
              attendance, examinations, fees, parents, transport, and online
              classes, all from one intuitive dashboard with a companion mobile
              app.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {schoolFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-foreground shadow-card"
                >
                  <f.icon className="h-4 w-4 shrink-0 text-accent" />
                  {f.label}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.25}>
                <BrandButton asChild variant="dark" size="md">
                  <Link href="/#contact" className="gap-2">
                    Request Access
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </BrandButton>
              </Magnetic>
              <Magnetic strength={0.25}>
                <BrandButton asChild variant="outline" size="md">
                  <Link href="/#contact" className="gap-2">
                    <PlayCircle className="h-4 w-4" />
                    Book Demo
                  </Link>
                </BrandButton>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
