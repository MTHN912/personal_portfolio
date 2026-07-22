// SkillsSection organism
'use client';

import { motion } from 'framer-motion';
import { Chip } from '@/components/atoms';
import { SectionHeader, SkillCard, SearchInput } from '@/components/molecules';
import { useSkills } from '@/hooks';
import { STAGGER_CHILDREN } from '@/shared/constants';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const { skills, categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, isLoading } = useSkills();

  if (isLoading) return null;

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Skills & Expertise" subtitle="What I can do" description="A comprehensive overview of my technical skills and proficiencies." />

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.chipRow}>
            <Chip label="All" isActive={selectedCategory === 'all'} onClick={() => setSelectedCategory('all')} />
            {categories.map((cat) => (
              <Chip key={cat.id} label={cat.label} isActive={selectedCategory === cat.id} onClick={() => setSelectedCategory(cat.id)} />
            ))}
          </div>
          <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Search skills..." />
        </div>

        {/* Skills Grid */}
        <motion.div className={styles.grid} variants={STAGGER_CHILDREN} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} key={`${selectedCategory}-${searchQuery}`}>
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </motion.div>

        {skills.length === 0 && (
          <div className={styles.empty}>
            <p>No skills found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
