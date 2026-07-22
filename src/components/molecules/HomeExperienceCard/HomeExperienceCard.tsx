// HomeExperienceCard - simplified version for home page with View Detail button
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, Typography, Badge, Button } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import Link from 'next/link';
import { formatDateRange, formatEmploymentType } from '@/shared/utils';
import { FADE_IN_UP } from '@/shared/constants';
import { ROUTES } from '@/shared/constants';
import type { Experience } from '@/shared/types';
import styles from './HomeExperienceCard.module.css';

interface HomeExperienceCardProps { experience: Experience; index: number; }

export default function HomeExperienceCard({ experience, index }: HomeExperienceCardProps) {
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
          <div className={styles.companyInfo}>
            <div className={styles.companyIcon}>
              <Image
                src={experience.companyLogo.src}
                alt={experience.companyLogo.alt}
                width={experience.companyLogo.width}
                height={experience.companyLogo.height}
              />
            </div>
            <div>
              <Typography variant="h5">{experience.position}</Typography>
              <Typography variant="body-sm" color="accent">{experience.companyName}</Typography>
            </div>
          </div>
          <div className={styles.meta}>
            <Badge variant="primary">{formatEmploymentType(experience.employmentType)}</Badge>
            <Typography variant="caption" color="muted">
              {formatDateRange(experience.period.startDate, experience.period.endDate, experience.period.isCurrent)}
            </Typography>
          </div>
        </div>

        <Typography variant="body-sm" color="secondary" className={styles.location}>
          📍 {experience.location}
        </Typography>

        <div className={styles.techTags}>
          {experience.technologies.slice(0, 6).map((tech) => (
            <span key={tech} className={styles.techTag}>{tech}</span>
          ))}
          {experience.technologies.length > 6 && (
            <span className={styles.techTag}>+{experience.technologies.length - 6}</span>
          )}
        </div>

        <Link href={ROUTES.EXPERIENCE} className={styles.viewDetailButton}>
          <Button variant="outline" size="sm" className={styles.button}>
            View Detail
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
}
