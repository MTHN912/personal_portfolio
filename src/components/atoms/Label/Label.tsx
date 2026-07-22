
import { cn } from '@/shared/utils';

interface LabelProps { htmlFor?: string; children: React.ReactNode; required?: boolean; className?: string; }

export default function Label({ htmlFor, children, required, className }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn('block text-sm font-medium text-[var(--color-text-secondary)] mb-1', className)}>
      {children}
      {required && <span className="text-[var(--color-error)] ml-0.5">*</span>}
    </label>
  );
}
