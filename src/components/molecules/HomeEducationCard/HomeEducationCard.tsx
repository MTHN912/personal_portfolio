// HomeEducationCard - simplified version for home page with View Detail button
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, Typography, Badge, Button } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import Link from 'next/link';
import { formatDateRange } from '@/shared/utils';
import { FADE_IN_UP } from '@/shared/constants';
import { ROUTES } from '@/shared/constants';
import type { Education } from '@/shared/types';
import styles from './HomeEducationCard.module.css';

interface HomeEducationCardProps { education: Education; index: number; }

export default function HomeEducationCard({ education, index }: HomeEducationCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`${styles.item} ${isLeft ? styles.left : styles.right}`}
      variants={FADE_IN_UP}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Timeline dot */}
      <div className={styles.dot}>
        <div className={styles.dotInner} />
      </div>

      <Card variant="glass" padding="md" className={styles.card}>
        <div className={styles.header}>
          <div className={styles.institutionInfo}>
            <div className={styles.institutionIcon}>
              <Image
                src={education.institutionLogo.src}
                alt={education.institutionLogo.alt}
                width={education.institutionLogo.width}
                height={education.institutionLogo.height}
              />
            </div>
            <div>
              <Typography variant="h5">{education.degree}</Typography>
              <Typography variant="body-sm" color="accent">{education.institution}</Typography>
            </div>
          </div>
          <div className={styles.meta}>
            <Badge variant="primary">{education.major}</Badge>
            <Typography variant="caption" color="muted">
              {formatDateRange(education.period.startDate, education.period.endDate, education.period.isCurrent)}
            </Typography>
          </div>
        </div>

        <Link href={ROUTES.EDUCATION} className={styles.viewDetailButton}>
          <Button variant="outline" size="sm" className={styles.button}>
            View Detail
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
}
