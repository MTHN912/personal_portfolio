
import { cn } from '@/shared/utils';
import styles from './Skeleton.module.css';

interface SkeletonProps { width?: string; height?: string; variant?: 'text' | 'circular' | 'rectangular'; className?: string; }

export default function Skeleton({ width, height, variant = 'text', className }: SkeletonProps) {
  return <div className={cn(styles.skeleton, styles[variant], className)} style={{ width, height }} aria-hidden="true" />;
}
