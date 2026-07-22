

'use client';

import { type ReactNode, type HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'outline';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

export default function Card({
  children, variant = 'glass', hoverable = true, padding = 'md',
  animate = true, className
}: CardProps) {
  const cardClassName = cn(styles.card, styles[variant], styles[`padding-${padding}`], hoverable && styles.hoverable, className);

  if (animate) {
    return (
      <motion.div
        className={cardClassName}
        whileHover={hoverable ? { y: -4, transition: { duration: 0.2 } } : undefined}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cardClassName}>
      {children}
    </div>
  );
}
