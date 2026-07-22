// Icon atom - wrapper around react-icons
import { type ReactNode } from 'react';
import { cn } from '@/shared/utils';

interface IconProps { children: ReactNode; size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string; ariaLabel?: string; }

const sizeMap = { sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '2rem' };

export default function Icon({ children, size = 'md', className, ariaLabel }: IconProps) {
  return (
    <span className={cn('inline-flex items-center justify-center', className)} style={{ fontSize: sizeMap[size] }}
      role={ariaLabel ? 'img' : 'presentation'} aria-label={ariaLabel}>
      {children}
    </span>
  );
}
