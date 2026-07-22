
'use client';

import NextImage from 'next/image';
import { cn } from '@/shared/utils';
import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
}

export default function Avatar({ src, alt, size = 'md', className, priority = false }: AvatarProps) {
  const sizeMap = { sm: 40, md: 64, lg: 96, xl: 160 };
  const dim = sizeMap[size];

  return (
    <div className={cn(styles.avatar, styles[size], className)}>
      <NextImage src={src} alt={alt} width={dim} height={dim} className={styles.image} priority={priority}
        onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&size=${dim}&background=6366f1&color=fff`; }}
      />
      <div className={styles.ring} />
    </div>
  );
}
