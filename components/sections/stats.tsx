'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from 'framer-motion';

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
};

const stats: Stat[] = [
  { value: 30, suffix: '+', label: 'Completed Projects' },
  { value: 10, suffix: '+', label: 'Hospitals Using SehatYar' },
  { value: 2, label: 'Own SaaS Products' },
  { value: 10, label: 'Expert Team Members' },
  { value: 100, suffix: '%', label: 'Quality Commitment' },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const spring = useSpring(rounded, { duration: 1600, bounce: 0 });

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, stat.value, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, stat.value, count]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
      {stat.prefix}
      <motion.span>{spring}</motion.span>
      {stat.suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-[680px] -translate-x-1/2 -translate-y-1/2 glow-primary blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Counter stat={stat} />
              <p className="mt-3 text-sm font-medium text-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
