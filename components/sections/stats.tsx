'use client';

import * as React from 'react';
import { motion, useInView, animate } from 'framer-motion';

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
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
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
      {stat.prefix}
      {displayValue}
      {stat.suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Counter stat={stat} />
              <p className="mt-2.5 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
