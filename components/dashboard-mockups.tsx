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
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  Globe,
  Database,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ---------- Glowing Line Area Chart ---------- */
function GlowingChart({ className }: { className?: string }) {
  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      <svg
        viewBox="0 0 400 120"
        className="h-full w-full"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Fill Area */}
        <path
          d="M0,90 Q50,40 100,70 T200,30 T300,50 T400,20 L400,120 L0,120 Z"
          fill="url(#chartGlow)"
        />

        {/* Stroke Line */}
        <motion.path
          d="M0,90 Q50,40 100,70 T200,30 T300,50 T400,20"
          stroke="url(#lineGlow)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Pulse Dot */}
        <circle cx="400" cy="20" r="4" fill="#10B981" />
        <circle cx="400" cy="20" r="8" fill="#10B981" opacity="0.3" />
      </svg>
    </div>
  );
}

/* ---------- Multi-Bar Chart ---------- */
function GradientBars({ data }: { data: number[] }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-full items-end gap-2 px-1">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(v / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600/40 via-blue-500 to-emerald-400"
        />
      ))}
    </div>
  );
}

/* ---------- Laptop SaaS Dashboard Mockup ---------- */
export function LaptopDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-white/10 bg-[#0d1527] text-white shadow-2xl backdrop-blur-xl',
        className
      )}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#070d19] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 text-[10px] font-medium text-slate-400">
            app.ftdynamics.pk
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            System Live
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-3.5 p-4 text-xs">
        {/* Sidebar */}
        <aside className="col-span-3 hidden flex-col gap-1 sm:flex">
          {[
            { label: 'Analytics', active: true, icon: TrendingUp },
            { label: 'SehatYar HMS', active: false, icon: HeartPulse },
            { label: 'Barqiya Suite', active: false, icon: Zap },
            { label: 'Khabir Portal', active: false, icon: Globe },
            { label: 'Databases', active: false, icon: Database },
          ].map((item) => (
            <div
              key={item.label}
              className={cn(
                'flex items-center gap-2 rounded-lg px-2.5 py-2 text-[10.5px] font-medium transition-colors',
                item.active
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              )}
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </div>
          ))}
        </aside>

        {/* Dashboard Content */}
        <main className="col-span-12 flex flex-col gap-3.5 sm:col-span-9">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: 'Total Revenue', value: '$124.8k', change: '+14.2%', icon: TrendingUp, color: 'text-emerald-400' },
              { label: 'Active Users', value: '18,940', change: '+8.6%', icon: Users, color: 'text-blue-400' },
              { label: 'Uptime Score', value: '99.99%', change: 'Optimal', icon: ShieldCheck, color: 'text-emerald-400' },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-white/10 bg-[#121c33] p-3 shadow-inner"
              >
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-medium">{m.label}</span>
                  <m.icon className="h-3.5 w-3.5 text-blue-400" />
                </div>
                <p className="mt-1 font-heading text-base font-bold text-white tracking-tight">
                  {m.value}
                </p>
                <span className={cn('text-[9px] font-semibold', m.color)}>
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* Glowing Area Chart */}
          <div className="rounded-xl border border-white/10 bg-[#121c33] p-3.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-white">System Throughput & Performance</p>
                <p className="text-[9px] text-slate-400">Real-time telemetry analytics</p>
              </div>
              <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-[9px] font-medium text-blue-300 border border-blue-400/30">
                Live Data
              </span>
            </div>
            <div className="mt-2 h-20">
              <GlowingChart />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-white/10 bg-[#121c33] p-3">
              <p className="text-[10px] font-bold text-white">Requests Volume</p>
              <div className="mt-2 h-14">
                <GradientBars data={[45, 68, 35, 90, 72, 85, 60, 95]} />
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#121c33] p-3">
              <p className="text-[10px] font-bold text-white">Active Deployment Status</p>
              <div className="mt-2 space-y-1.5">
                {[
                  { name: 'SehatYar HMS', status: 'Healthy', val: '10+ Facilities' },
                  { name: 'Barqiya Tech', status: 'Active', val: '500+ Projects' },
                  { name: 'Khabir Portal', status: 'Verified', val: 'FEWA Cat-1' },
                ].map((d) => (
                  <div key={d.name} className="flex items-center justify-between text-[9.5px]">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      {d.name}
                    </span>
                    <span className="font-semibold text-blue-300">{d.val}</span>
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

/* ---------- SehatYar HMS Widget ---------- */
export function HospitalDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-xl sm:rounded-2xl border border-white/20 bg-white p-2.5 sm:p-4 shadow-2xl backdrop-blur-xl',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
            <HeartPulse className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-foreground">SehatYar HMS</p>
            <p className="text-[8px] sm:text-[9px] text-muted-foreground">Hospital Management</p>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-semibold text-emerald-600 border border-emerald-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      <div className="mt-2.5 sm:mt-3.5 grid grid-cols-2 gap-1.5 sm:gap-2.5">
        {[
          { label: 'Patients today', val: '248', icon: Users, color: 'text-blue-500' },
          { label: 'Appointments', val: '56', icon: CalendarDays, color: 'text-emerald-500' },
          { label: 'Doctors on duty', val: '18', icon: Stethoscope, color: 'text-purple-500' },
          { label: 'Bed occupancy', val: '74%', icon: Activity, color: 'text-amber-500' },
        ].map((s) => (
          <div key={s.label} className="rounded-lg sm:rounded-xl border border-border/80 bg-bg-secondary/70 p-2 sm:p-2.5">
            <s.icon className={cn('h-3 w-3 sm:h-3.5 sm:w-3.5', s.color)} />
            <p className="mt-1 font-heading text-xs sm:text-sm font-bold text-foreground">
              {s.val}
            </p>
            <p className="text-[8px] sm:text-[9px] font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 sm:mt-3 rounded-lg sm:rounded-xl border border-border/80 bg-bg-secondary/70 p-2 sm:p-2.5">
        <div className="flex items-center justify-between text-[8.5px] sm:text-[9.5px]">
          <span className="font-semibold text-foreground">OPD Admissions</span>
          <span className="text-emerald-600 font-bold">+18.4%</span>
        </div>
        <div className="mt-1.5 h-8 sm:h-10">
          <GradientBars data={[35, 55, 40, 70, 50, 85, 65]} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile Analytics Card ---------- */
export function MobileDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/20 bg-white p-3.5 shadow-2xl',
        className
      )}
    >
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-foreground">Analytics</span>
        <span className="text-[10px] font-medium text-muted-foreground">9:41</span>
      </div>

      <div className="mt-2.5 space-y-2.5">
        <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-3 text-white shadow-md">
          <p className="text-[9px] opacity-80">Total Revenue</p>
          <p className="font-heading text-lg font-bold tracking-tight">$42,180</p>
          <div className="mt-1.5 h-7">
            <GlowingChart />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-border/80 bg-bg-secondary p-2 text-center">
            <p className="font-heading text-xs font-bold text-foreground">1.2k</p>
            <p className="text-[8.5px] text-muted-foreground">Active Users</p>
          </div>
          <div className="rounded-xl border border-border/80 bg-bg-secondary p-2 text-center">
            <p className="font-heading text-xs font-bold text-emerald-600">99.9%</p>
            <p className="text-[8.5px] text-muted-foreground">Uptime SLA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Floating Glow Badges ---------- */
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
    accent: 'bg-blue-500/15 text-blue-600',
    green: 'bg-emerald-500/15 text-emerald-600',
    primary: 'bg-indigo-500/15 text-indigo-600',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'flex items-center gap-2.5 rounded-xl border border-white/40 bg-white/95 px-3.5 py-2 shadow-2xl backdrop-blur-xl',
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
        <p className="mt-0.5 text-[9.5px] font-medium text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}
