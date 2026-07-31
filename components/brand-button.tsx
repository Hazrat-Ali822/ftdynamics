'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

const brandButtonVariants = cva(
  'group relative inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-accent-foreground shadow-[0_8px_30px_hsl(var(--accent)/0.25)] hover:bg-accent-bright hover:shadow-[0_10px_40px_hsl(var(--accent)/0.4)]',
        dark: 'bg-primary text-primary-foreground shadow-[0_8px_30px_hsl(var(--primary)/0.25)] hover:bg-primary/90 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.35)]',
        outline:
          'border border-border bg-background/60 text-foreground backdrop-blur hover:border-accent/60 hover:bg-accent/5 hover:text-accent',
        ghost: 'text-foreground hover:bg-muted',
        white:
          'bg-white text-primary shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:bg-white/90',
      },
      size: {
        sm: 'h-9 px-5 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-7 text-[15px]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brandButtonVariants> {
  asChild?: boolean;
}

const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(brandButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
BrandButton.displayName = 'BrandButton';

export { BrandButton, brandButtonVariants };
