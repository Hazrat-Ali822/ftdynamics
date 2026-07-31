import { cn } from '@/lib/utils';

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="h-9 w-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            width="40"
            height="40"
            rx="11"
            fill="url(#ftd-logo)"
          />
          <path
            d="M13 26V14h11M13 20h8"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="27" cy="20" r="2.4" fill="white" />
          <defs>
            <linearGradient
              id="ftd-logo"
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E315A" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {showText && (
        <span className="font-heading text-[15px] font-bold leading-none tracking-tight text-foreground">
          Future Tech
          <span className="text-accent"> Dynamics</span>
        </span>
      )}
    </div>
  );
}
