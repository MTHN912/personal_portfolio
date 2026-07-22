// ProjectCard molecule
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, Typography, Tag, Badge, Button } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import { FADE_IN_UP } from '@/shared/constants';
import type { Project } from '@/shared/types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps { project: Project; onViewDetails: (project: Project) => void; }

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const statusColor = {
    completed: 'success' as const,
    'in-progress': 'warning' as const,
    planned: 'info' as const,
    archived: 'default' as const,
  };

  return (
    <motion.div variants={FADE_IN_UP}>
      <Card variant="glass" padding="none" className={styles.card}>
        {/* Thumbnail */}
        <div className={styles.thumbnail}>
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            className={styles.thumbnailImage}
          />
          <div className={styles.overlay}>
            <Button variant="primary" size="sm" onClick={() => onViewDetails(project)}>
              View Details
            </Button>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <Typography variant="h5">{project.name}</Typography>
            <Badge variant={statusColor[project.status]}>
              {project.status.replace('-', ' ')}
            </Badge>
          </div>

          <Typography variant="body-sm" color="secondary" className={styles.description}>
            {project.description}
          </Typography>

          <Typography variant="caption" color="muted">{project.role}</Typography>

          <div className={styles.techTags}>
            {project.technologies.slice(0, 5).map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
            {project.technologies.length > 5 && (
              <Tag label={`+${project.technologies.length - 5}`} />
            )}
          </div>

          <div className={styles.links}>
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} aria-label="GitHub">
                <DynamicIcon name="FaGithub" size={18} />
              </a>
            )}
            {project.links.liveDemo && (
              <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} aria-label="Live Demo">
                <DynamicIcon name="FaExternalLinkAlt" size={16} />
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
