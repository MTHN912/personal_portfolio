// Chip atom - filterable chip/toggle
'use client';
import { cn } from '@/shared/utils';
import styles from './Chip.module.css';

interface ChipProps { label: string; isActive?: boolean; onClick?: () => void; className?: string; }

export default function Chip({ label, isActive = false, onClick, className }: ChipProps) {
  return (
    <button type="button" className={cn(styles.chip, isActive && styles.active, className)} onClick={onClick} aria-pressed={isActive}>
      {label}
    </button>
  );
}
