

import { type ReactNode, type ElementType } from 'react';
import { cn } from '@/shared/utils';
import styles from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'body-sm' | 'caption' | 'overline';
type TypographyColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'gradient' | 'inherit';

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: TypographyColor;
  as?: ElementType;
  className?: string;
  id?: string;
}

const variantTagMap: Record<TypographyVariant, ElementType> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
  body: 'p', 'body-sm': 'p', caption: 'span', overline: 'span',
};

export default function Typography({
  children, variant = 'body', color = 'primary', as, className, id,
}: TypographyProps) {
  const Component = as || variantTagMap[variant];
  return (
    <Component id={id} className={cn(styles.typography, styles[variant], styles[`color-${color}`], className)}>
      {children}
    </Component>
  );
}
