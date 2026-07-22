
'use client';
import { cn } from '@/shared/utils';
import styles from './Tag.module.css';

interface TagProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Tag({ label, icon, className }: TagProps) {
  return (
    <span className={cn(styles.tag, className)}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </span>
  );
}
