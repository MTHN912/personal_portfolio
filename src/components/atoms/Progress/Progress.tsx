// Progress bar atom
'use client';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils';
import styles from './Progress.module.css';

interface ProgressProps { value: number; max?: number; label?: string; showValue?: boolean; size?: 'sm' | 'md'; className?: string; }

export default function Progress({ value, max = 100, label, showValue = true, size = 'md', className }: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className={cn(styles.wrapper, className)}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className={cn(styles.track, styles[size])} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
        <motion.div className={styles.fill} initial={{ width: 0 }} whileInView={{ width: `${percentage}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} />
      </div>
    </div>
  );
}
