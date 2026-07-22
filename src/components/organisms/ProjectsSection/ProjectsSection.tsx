// ProjectsSection organism
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Chip } from '@/components/atoms';
import { SectionHeader, ProjectCard, SearchInput, ProjectModal } from '@/components/molecules';
import { useProjects } from '@/hooks';
import { STAGGER_CHILDREN } from '@/shared/constants';
import type { Project } from '@/shared/types';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const { projects, categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (isLoading) return null;

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Projects" subtitle="What I've built" description="A showcase of my recent projects and contributions." />

        <div className={styles.filters}>
          <div className={styles.chipRow}>
            <Chip label="All" isActive={selectedCategory === 'all'} onClick={() => setSelectedCategory('all')} />
            {categories.map((cat) => (
              <Chip key={cat} label={cat} isActive={selectedCategory === cat} onClick={() => setSelectedCategory(cat)} />
            ))}
          </div>
          <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Search projects..." />
        </div>

        <motion.div className={styles.grid} variants={STAGGER_CHILDREN} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} key={`${selectedCategory}-${searchQuery}`}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
          ))}
        </motion.div>

        {projects.length === 0 && <div className={styles.empty}><p>No projects found.</p></div>}

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
