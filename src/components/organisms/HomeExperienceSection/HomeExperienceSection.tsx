
'use client';

import { SectionHeader } from '@/components/molecules';
import HomeExperienceCard from '@/components/molecules/HomeExperienceCard';
import { useExperience } from '@/hooks';
import styles from './HomeExperienceSection.module.css';

export default function HomeExperienceSection() {
  const { data: experiences, isLoading } = useExperience();
  if (isLoading || !experiences) return null;

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Work Experience" subtitle="My career journey" description="A timeline of my professional experience and key achievements." />
        <div className={styles.timeline}>
          <div className={styles.line} />
          {experiences.map((exp, i) => (
            <HomeExperienceCard key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
