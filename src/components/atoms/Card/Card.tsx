// Card atom component

'use client';

import { type ReactNode, type HTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/utils';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'outline';
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export default function Card({
  children, variant = 'glass', hoverable = true, padding = 'md',
  animate = true, className, ...props
}: CardProps) {
  const Wrapper = animate ? motion.div : 'div';
  const motionProps = animate ? {
    whileHover: hoverable ? { y: -4, transition: { duration: 0.2 } } : undefined,
  } : {};

  return (
    <Wrapper
      className={cn(styles.card, styles[variant], styles[`padding-${padding}`], hoverable && styles.hoverable, className)}
      {...motionProps}
      {...props}
    >
      {children}
    </Wrapper>
  );
}
