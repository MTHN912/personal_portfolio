
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Card, Typography, Badge } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import ImageModal from '@/components/molecules/ImageModal';
import { formatDateRange } from '@/shared/utils';
import { FADE_IN_UP } from '@/shared/constants';
import type { Education } from '@/shared/types';
import styles from './EducationCard.module.css';

interface EducationCardProps { education: Education; index: number; layoutMode?: 'zigzag' | 'full-width'; }

export default function EducationCard({ education, index, layoutMode = 'zigzag' }: EducationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<import('@/shared/types').ImageData | null>(null);
  const isLeft = layoutMode === 'zigzag' ? index % 2 === 0 : false;

  const categories = ['all', ...new Set(education.photos.map(photo => photo.category).filter((cat): cat is string => Boolean(cat)))];
  const filteredPhotos = selectedCategory === 'all'
    ? education.photos
    : education.photos.filter(photo => photo.category === selectedCategory);

  return (
    <motion.div className={`${styles.item} ${layoutMode === 'full-width' ? styles.fullWidth : (isLeft ? styles.left : styles.right)}`}
      variants={FADE_IN_UP} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
      <div className={styles.dot}><div className={styles.dotInner} /></div>
      <Card variant="glass" padding="md" className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconBox}>
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
            <Typography variant="caption" color="muted">{education.major}</Typography>
          </div>
        </div>
        <div className={styles.meta}>
          <Typography variant="caption" color="muted">
            {formatDateRange(education.period.startDate, education.period.endDate, education.period.isCurrent)}
          </Typography>
          {education.gpa && <Badge variant="primary">GPA: {education.gpa}</Badge>}
          <Badge variant="info">{education.type}</Badge>
        </div>
        <Typography variant="body-sm" color="secondary">{education.summary}</Typography>
        <button className={styles.expandButton} onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded}>
          {isExpanded ? 'Show Less' : 'Show More'}
          <DynamicIcon name={isExpanded ? 'FaChevronUp' : 'FaChevronDown'} size={12} />
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className={styles.expanded}>
              {education.achievements.length > 0 && (
                <div className={styles.section}>
                  <Typography variant="h6" color="accent">Achievements</Typography>
                  <ul className={styles.list}>
                    {education.achievements.map((a, i) => <li key={i}><Typography variant="body-sm" color="secondary">{a}</Typography></li>)}
                  </ul>
                </div>
              )}
              {education.activities.length > 0 && (
                <div className={styles.section}>
                  <Typography variant="h6" color="accent">Activities</Typography>
                  <ul className={styles.list}>
                    {education.activities.map((a, i) => <li key={i}><Typography variant="body-sm" color="secondary">{a}</Typography></li>)}
                  </ul>
                </div>
              )}
              {education.photos && education.photos.length > 0 && (
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
                    {filteredPhotos.map((photo, i) => (
                      <div
                        key={i}
                        className={styles.galleryImageWrapper}
                        onClick={() => setSelectedImage(photo)}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => { if (e.key === 'Enter') setSelectedImage(photo); }}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          className={styles.galleryImage}
                          title={photo.description}
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
