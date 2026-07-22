
import { cn } from '@/shared/utils';
import styles from './Spinner.module.css';

interface SpinnerProps { size?: 'sm' | 'md' | 'lg'; className?: string; }

export default function Spinner({ size = 'md', className }: SpinnerProps) {
  return (
    <div className={cn(styles.spinner, styles[size], className)} role="status" aria-label="Loading">
      <svg viewBox="0 0 50 50" className={styles.svg}>
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="80 200" />
      </svg>
    </div>
  );
}
