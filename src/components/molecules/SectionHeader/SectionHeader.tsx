// SectionHeader molecule - consistent section heading with animations
'use client';

import { motion } from 'framer-motion';
import { Typography } from '@/components/atoms';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/shared/constants';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, description, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      className={`${styles.header} ${align === 'center' ? styles.center : styles.left}`}
      variants={STAGGER_CHILDREN}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {subtitle && (
        <motion.div variants={FADE_IN_UP}>
          <Typography variant="overline" color="accent">{subtitle}</Typography>
        </motion.div>
      )}
      <motion.div variants={FADE_IN_UP}>
        <Typography variant="h2" color="gradient">{title}</Typography>
      </motion.div>
      {description && (
        <motion.div variants={FADE_IN_UP}>
          <Typography variant="body" color="secondary" className={styles.description}>
            {description}
          </Typography>
        </motion.div>
      )}
      <motion.div variants={FADE_IN_UP} className={styles.dividerLine} />
    </motion.div>
  );
}
