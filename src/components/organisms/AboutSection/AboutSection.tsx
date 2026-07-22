
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography, Card, Tag, Button, Divider } from '@/components/atoms';
import { SectionHeader } from '@/components/molecules';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import ImageModal from '@/components/molecules/ImageModal';
import { useAbout } from '@/hooks';
import { STAGGER_CHILDREN, FADE_IN_UP, FADE_IN_LEFT, FADE_IN_RIGHT } from '@/shared/constants';
import { formatDate } from '@/shared/utils';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const { data: about, isLoading } = useAbout();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<import('@/shared/types').ImageData | null>(null);

  if (isLoading || !about) return null;

  const categories = ['all', ...new Set(about.photos.map(photo => photo.category).filter((cat): cat is string => Boolean(cat)))];
  const filteredPhotos = selectedCategory === 'all'
    ? about.photos
    : about.photos.filter(photo => photo.category === selectedCategory);

  const personalDetails = [
    { icon: 'FaCalendar', label: 'Birthday', value: formatDate(about.birthday, { year: 'numeric', month: 'long', day: 'numeric' }) },
    { icon: 'FaMapMarkerAlt', label: 'Location', value: about.address },
    { icon: 'FaPhone', label: 'Phone', value: about.phone },
    { icon: 'FaEnvelope', label: 'Email', value: about.email },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="About Me" subtitle="Get to know me" description="Learn more about my background, experience, and what drives me." />

        <div className={styles.grid}>
          {}
          <motion.div className={styles.bioColumn} variants={FADE_IN_LEFT} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card variant="glass" padding="lg">
              <Typography variant="body" color="secondary" className={styles.longIntro}>
                {about.longIntro.split('\n\n').map((p, i) => (
                  <span key={i}>{p}<br /><br /></span>
                ))}
              </Typography>

              <Divider />

              <div className={styles.careerObj}>
                <Typography variant="h5" color="accent">Career Objective</Typography>
                <Typography variant="body-sm" color="secondary">{about.careerObjective}</Typography>
              </div>

              <Button variant="primary" size="md" leftIcon={<DynamicIcon name="FaDownload" size={14} />}
                onClick={() => window.open(about.resumeUrl, '_blank')}>
                Download Resume
              </Button>
            </Card>
          </motion.div>

          {}
          <motion.div className={styles.detailsColumn} variants={STAGGER_CHILDREN} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {}
            <motion.div variants={FADE_IN_RIGHT}>
              <Card variant="glass" padding="md">
                <Typography variant="h5" className={styles.cardTitle}>Personal Info</Typography>
                <div className={styles.infoGrid}>
                  {personalDetails.map((detail) => (
                    <div key={detail.label} className={styles.infoItem}>
                      <span className={styles.infoIcon}><DynamicIcon name={detail.icon} size={14} /></span>
                      <div>
                        <Typography variant="caption" color="muted">{detail.label}</Typography>
                        <Typography variant="body-sm">{detail.value}</Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {}
            <motion.div variants={FADE_IN_RIGHT}>
              <Card variant="glass" padding="md">
                <Typography variant="h5" className={styles.cardTitle}>Languages</Typography>
                <div className={styles.languageList}>
                  {about.languages.map((lang) => (
                    <div key={lang.name} className={styles.langItem}>
                      <Typography variant="body-sm">{lang.name}</Typography>
                      <Typography variant="caption" color="accent">{lang.level}</Typography>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {}
            <motion.div variants={FADE_IN_RIGHT}>
              <Card variant="glass" padding="md">
                <Typography variant="h5" className={styles.cardTitle}>Interests</Typography>
                <div className={styles.interests}>
                  {about.interests.map((interest) => (
                    <Tag key={interest} label={interest} />
                  ))}
                </div>
              </Card>
            </motion.div>

            {}
            {about.photos && about.photos.length > 0 && (
              <motion.div variants={FADE_IN_RIGHT}>
                <Card variant="glass" padding="md">
                  <Typography variant="h5" className={styles.cardTitle}>Gallery</Typography>
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
                          key={i}
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
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}
