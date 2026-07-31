'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Users,
  HeartPulse,
  TrendingUp,
  CalendarDays,
  Stethoscope,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ---------- Shared tiny chart ---------- */
function Sparkline({
  points,
  className,
  stroke = 'hsl(var(--accent))',
}: {
  points: string;
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 40"
      className={cn('h-full w-full', className)}
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d={points}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={`${points} L120 40 L0 40 Z`} fill={stroke} opacity="0.08" />
    </svg>
  );
}

function Bars({ data, className }: { data: number[]; className?: string }) {
  const max = Math.max(...data);
  return (
    <div className={cn('flex h-full items-end gap-1.5', className)}>
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(v / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 rounded-t bg-gradient-to-t from-accent/30 to-accent"
        />
      ))}
    </div>
  );
}

/* ---------- Laptop SaaS analytics dashboard ---------- */
export function LaptopDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border/70 bg-white shadow-soft',
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border/70 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="mx-auto flex h-6 w-40 items-center justify-center rounded-md bg-bg-secondary text-[10px] font-medium text-muted-foreground">
          app.ftdynamics.pk
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 p-4">
        <aside className="col-span-3 hidden flex-col gap-1.5 sm:flex">
          {['Overview', 'Patients', 'Appointments', 'Analytics', 'Settings'].map(
            (item, i) => (
              <div
                key={item}
                className={cn(
                  'rounded-md px-2.5 py-1.5 text-[10px] font-medium',
                  i === 0
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted-foreground'
                )}
              >
                {item}
              </div>
            )
          )}
        </aside>
        <main className="col-span-12 flex flex-col gap-3 sm:col-span-9">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: 'Revenue', value: '$84.2k', up: true, icon: TrendingUp },
              { label: 'Active Users', value: '12,480', up: true, icon: Users },
              { label: 'Churn', value: '1.2%', up: false, icon: Activity },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-border/60 bg-bg-secondary/60 p-2.5"
              >
                <div className="flex items-center justify-between">
                  <m.icon className="h-3.5 w-3.5 text-accent" />
                  <span
                    className={cn(
                      'flex items-center gap-0.5 text-[9px] font-semibold',
                      m.up ? 'text-green-600' : 'text-red-500'
                    )}
                  >
                    {m.up ? (
                      <ArrowUpRight className="h-2.5 w-2.5" />
                    ) : (
                      <ArrowDownRight className="h-2.5 w-2.5" />
                    )}
                    8%
                  </span>
                </div>
                <p className="mt-1.5 font-heading text-sm font-bold text-foreground">
                  {m.value}
                </p>
                <p className="text-[9px] text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border/60 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold text-foreground">
                Performance
              </p>
              <span className="text-[9px] text-muted-foreground">Last 30 days</span>
            </div>
            <div className="mt-2 h-16">
              <Sparkline points="0,32 15,28 30,30 45,18 60,22 75,10 90,14 105,6 120,8" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-lg border border-border/60 p-3">
              <p className="text-[10px] font-semibold text-foreground">Visitors</p>
              <div className="mt-2 h-12">
                <Bars data={[40, 65, 30, 80, 55, 70, 45]} />
              </div>
            </div>
            <div className="rounded-lg border border-border/60 p-3">
              <p className="text-[10px] font-semibold text-foreground">
                Conversion
              </p>
              <div className="mt-3 space-y-1.5">
                {[
                  { l: 'Signup', v: '70%' },
                  { l: 'Paid', v: '42%' },
                  { l: 'Retain', v: '88%' },
                ].map((r) => (
                  <div key={r.l} className="flex items-center gap-2">
                    <span className="w-12 text-[9px] text-muted-foreground">
                      {r.l}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: r.v }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------- Hospital dashboard ---------- */
export function HospitalDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border/70 bg-white p-3.5 shadow-soft',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-red-500/10 text-red-500">
            <HeartPulse className="h-3.5 w-3.5" />
          </span>
          <span className="text-[11px] font-semibold text-foreground">
            SehatYar HMS
          </span>
        </div>
        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-[9px] font-semibold text-green-600">
          Live
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {[
          { l: 'Patients today', v: '248', icon: Users },
          { l: 'Appointments', v: '56', icon: CalendarDays },
          { l: 'Doctors on duty', v: '18', icon: Stethoscope },
          { l: 'Bed occupancy', v: '74%', icon: Activity },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-border/60 p-2.5">
            <s.icon className="h-3.5 w-3.5 text-accent" />
            <p className="mt-1.5 font-heading text-sm font-bold text-foreground">
              {s.v}
            </p>
            <p className="text-[9px] text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="mt-2.5 rounded-lg border border-border/60 p-2.5">
        <p className="text-[9px] font-semibold text-foreground">Admissions / week</p>
        <div className="mt-1.5 h-10">
          <Bars data={[30, 50, 35, 60, 45, 75, 55]} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile dashboard ---------- */
export function MobileDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-[1.4rem] border border-border/70 bg-white p-3 shadow-soft',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-semibold text-foreground">Analytics</span>
        <span className="text-[8px] text-muted-foreground">9:41</span>
      </div>
      <div className="mt-2 space-y-2">
        <div className="rounded-lg bg-gradient-to-br from-accent to-primary p-2.5 text-white">
          <p className="text-[8px] opacity-80">Total Revenue</p>
          <p className="font-heading text-base font-bold">$42,180</p>
          <div className="mt-1.5 h-8">
            <Sparkline
              points="0,20 20,18 40,22 60,12 80,16 100,8 120,10"
              stroke="white"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border/60 p-2">
            <p className="font-heading text-xs font-bold text-foreground">1.2k</p>
            <p className="text-[8px] text-muted-foreground">Users</p>
          </div>
          <div className="rounded-lg border border-border/60 p-2">
            <p className="font-heading text-xs font-bold text-foreground">98%</p>
            <p className="text-[8px] text-muted-foreground">Uptime</p>
          </div>
        </div>
        <div className="rounded-lg border border-border/60 p-2">
          <div className="flex items-center justify-between">
            <p className="text-[8px] text-muted-foreground">Tasks</p>
            <span className="text-[8px] text-accent">+12</span>
          </div>
          <div className="mt-1.5 space-y-1">
            {['Design review', 'API integration', 'Deploy v2.1'].map((t, i) => (
              <div key={t} className="flex items-center gap-1.5">
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    i === 0 ? 'bg-green-500' : i === 1 ? 'bg-amber-500' : 'bg-accent'
                  )}
                />
                <span className="text-[8px] text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Floating stat chip ---------- */
export function FloatingChip({
  className,
  icon: Icon,
  label,
  value,
  tone = 'accent',
}: {
  className?: string;
  icon: typeof Activity;
  label: string;
  value: string;
  tone?: 'accent' | 'green' | 'primary';
}) {
  const tones = {
    accent: 'bg-accent/10 text-accent',
    green: 'bg-green-500/10 text-green-600',
    primary: 'bg-primary/10 text-primary',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'flex items-center gap-2.5 rounded-xl border border-border/60 bg-white/90 px-3 py-2 shadow-soft backdrop-blur',
        className
      )}
    >
      <span className={cn('inline-flex h-7 w-7 items-center justify-center rounded-lg', tones[tone])}>
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-heading text-xs font-bold leading-none text-foreground">
          {value}
        </p>
        <p className="text-[10px] text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}
