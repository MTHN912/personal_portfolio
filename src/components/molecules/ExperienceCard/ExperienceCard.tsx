
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, Typography, Tag, Badge } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import ImageModal from '@/components/molecules/ImageModal';
import { formatDateRange, formatEmploymentType } from '@/shared/utils';
import { FADE_IN_UP } from '@/shared/constants';
import type { Experience } from '@/shared/types';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps { experience: Experience; index: number; layoutMode?: 'zigzag' | 'full-width'; }

export default function ExperienceCard({ experience, index, layoutMode = 'zigzag' }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<import('@/shared/types').ImageData | null>(null);
  const isLeft = layoutMode === 'zigzag' ? index % 2 === 0 : false;

  const categories = ['all', ...new Set(experience.images.map(img => img.category).filter((cat): cat is string => Boolean(cat)))];
  const filteredImages = selectedCategory === 'all'
    ? experience.images
    : experience.images.filter(img => img.category === selectedCategory);

  return (
    <motion.div
      className={`${styles.item} ${layoutMode === 'full-width' ? styles.fullWidth : (isLeft ? styles.left : styles.right)}`}
      variants={FADE_IN_UP}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {}
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
            <Tag key={tech} label={tech} />
          ))}
          {experience.technologies.length > 6 && (
            <Tag label={`+${experience.technologies.length - 6}`} />
          )}
        </div>

        <button className={styles.expandButton} onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded}>
          {isExpanded ? 'Show Less' : 'Show More'}
          <DynamicIcon name={isExpanded ? 'FaChevronUp' : 'FaChevronDown'} size={12} />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.expanded}
            >
              <div className={styles.section}>
                <Typography variant="h6" color="accent">Responsibilities</Typography>
                <ul className={styles.list}>
                  {experience.responsibilities.map((item, i) => (
                    <li key={i}><Typography variant="body-sm" color="secondary">{item}</Typography></li>
                  ))}
                </ul>
              </div>
              {experience.achievements.length > 0 && (
                <div className={styles.section}>
                  <Typography variant="h6" color="accent">Achievements</Typography>
                  <ul className={styles.list}>
                    {experience.achievements.map((item, i) => (
                      <li key={i}><Typography variant="body-sm" color="secondary">{item}</Typography></li>
                    ))}
                  </ul>
                </div>
              )}
              {experience.images && experience.images.length > 0 && (
                <div className={styles.section}>
                  <Typography variant="h6" color="accent">Gallery</Typography>
                  <div className={styles.categoryFilters}>
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className={styles.gallery}>
                    {filteredImages.map((img, i) => (
                      <div
                        key={i}
                        className={styles.galleryImageWrapper}
                        onClick={() => setSelectedImage(img)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => { if (e.key === 'Enter') setSelectedImage(img); }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          className={styles.galleryImage}
                          title={img.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </motion.div>
  );
}
