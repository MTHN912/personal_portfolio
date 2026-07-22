// Badge atom
import { type ReactNode } from 'react';
import { cn } from '@/shared/utils';
import styles from './Badge.module.css';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({ children, variant = 'default', size = 'sm', className }: BadgeProps) {
  return <span className={cn(styles.badge, styles[variant], styles[size], className)}>{children}</span>;
}
