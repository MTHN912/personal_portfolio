
'use client';
import { useState } from 'react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/shared/utils';
import styles from './OptimizedImage.module.css';

interface OptimizedImageProps extends Omit<NextImageProps, 'onLoad'> {
  containerClassName?: string;
  rounded?: boolean;
}

export default function OptimizedImage({ containerClassName, rounded, className, alt, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={cn(styles.container, rounded && styles.rounded, containerClassName)}>
      {!isLoaded && <div className={styles.skeleton} />}
      <NextImage
        {...props}
        alt={alt}
        className={cn(styles.image, isLoaded && styles.loaded, rounded && styles.rounded, className)}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
