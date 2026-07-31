import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({
  className,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="/logo.png"
        alt="Future Tech Dynamics"
        width={180}
        height={64}
        className="h-10 w-auto object-contain"
        priority
      />
    </div>
  );
}
