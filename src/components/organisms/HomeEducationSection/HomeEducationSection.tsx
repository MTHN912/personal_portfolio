// HomeEducationSection - simplified version for home page with zic-zac layout
'use client';

import { SectionHeader } from '@/components/molecules';
import HomeEducationCard from '@/components/molecules/HomeEducationCard';
import { useEducation } from '@/hooks';
import styles from './HomeEducationSection.module.css';

export default function HomeEducationSection() {
  const { data: educations, isLoading } = useEducation();
  if (isLoading || !educations) return null;

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Education" subtitle="My learning journey" description="Academic background and continuous learning." />
        <div className={styles.timeline}>
          <div className={styles.line} />
          {educations.map((edu, i) => (
            <HomeEducationCard key={edu.id} education={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
