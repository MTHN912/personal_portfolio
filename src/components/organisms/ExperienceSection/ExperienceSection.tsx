
'use client';

import { SectionHeader, ExperienceCard } from '@/components/molecules';
import { useExperience } from '@/hooks';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const { data: experiences, isLoading } = useExperience();
  if (isLoading || !experiences) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Work Experience" subtitle="My career journey" description="A timeline of my professional experience and key achievements." />
        <div className={`${styles.timeline} ${styles.fullWidthLayout}`}>
          <div className={styles.line} />
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} index={i} layoutMode="full-width" />
          ))}
        </div>
      </div>
    </section>
  );
}
