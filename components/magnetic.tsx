'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: 'div' | 'button' | 'a' | 'span';
  href?: string;
} & React.HTMLAttributes<HTMLElement>;

export function Magnetic({
  children,
  className,
  strength = 0.35,
  as = 'div',
  ...props
}: MagneticProps) {
  const ref = React.useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[as as 'div'];

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('inline-block', className)}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </MotionTag>
  );
}
