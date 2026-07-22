// SmartLink atom - handles internal/external links
import NextLink from 'next/link';
import { type ReactNode } from 'react';
import { cn } from '@/shared/utils';
import styles from './SmartLink.module.css';

interface SmartLinkProps {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
  className?: string;
  variant?: 'default' | 'nav' | 'underline' | 'icon';
  ariaLabel?: string;
}

export default function SmartLink({ href, children, isExternal, className, variant = 'default', ariaLabel }: SmartLinkProps) {
  const isExt = isExternal ?? (href.startsWith('http') || href.startsWith('mailto:'));
  const cls = cn(styles.link, styles[variant], className);

  if (isExt) {
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>{children}</a>;
  }
  return <NextLink href={href} className={cls} aria-label={ariaLabel}>{children}</NextLink>;
}
