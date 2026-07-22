// EducationSection organism - full-width version for Education page
'use client';

import { SectionHeader, EducationCard } from '@/components/molecules';
import { useEducation } from '@/hooks';
import styles from './EducationSection.module.css';

export default function EducationSection() {
  const { data: educations, isLoading } = useEducation();
  if (isLoading || !educations) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Education" subtitle="My learning journey" description="Academic background and continuous learning." />
        <div className={`${styles.timeline} ${styles.fullWidthLayout}`}>
          <div className={styles.line} />
          {educations.map((edu, i) => (
            <EducationCard key={edu.id} education={edu} index={i} layoutMode="full-width" />
          ))}
        </div>
      </div>
    </section>
  );
}
