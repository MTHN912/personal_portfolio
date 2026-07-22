
'use client';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import { STAGGER_CHILDREN, SCALE_IN } from '@/shared/constants';
import type { SocialLink } from '@/shared/types';
import styles from './SocialLinks.module.css';

interface SocialLinksProps { links: SocialLink[]; size?: 'sm' | 'md' | 'lg'; }

export default function SocialLinks({ links, size = 'md' }: SocialLinksProps) {
  const iconSize = { sm: 16, md: 18, lg: 22 };
  return (
    <motion.div className={styles.container} variants={STAGGER_CHILDREN} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {links.map((link) => (
        <motion.a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer"
          className={`${styles.link} ${styles[size]}`} aria-label={link.label}
          variants={SCALE_IN} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}>
          <Tooltip content={link.label}>
            <DynamicIcon name={link.icon} size={iconSize[size]} />
          </Tooltip>
        </motion.a>
      ))}
    </motion.div>
  );
}
