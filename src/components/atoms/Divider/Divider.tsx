
import { cn } from '@/shared/utils';
import styles from './Divider.module.css';

interface DividerProps { className?: string; orientation?: 'horizontal' | 'vertical'; }

export default function Divider({ className, orientation = 'horizontal' }: DividerProps) {
  return <div className={cn(styles.divider, styles[orientation], className)} role="separator" />;
}
