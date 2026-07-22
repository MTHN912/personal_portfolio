
'use client';
import { useTypingAnimation } from '@/hooks';
import { Typography } from '@/components/atoms';
import styles from './TypingText.module.css';

interface TypingTextProps { texts: string[]; className?: string; }

export default function TypingText({ texts, className }: TypingTextProps) {
  const { displayText } = useTypingAnimation({ texts });
  return (
    <span className={`${styles.wrapper} ${className || ''}`}>
      <Typography variant="h3" color="accent" as="span">{displayText}</Typography>
      <span className={styles.cursor}>|</span>
    </span>
  );
}
