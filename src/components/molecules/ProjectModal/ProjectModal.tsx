
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Typography, Tag, Badge, Button } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import type { Project } from '@/shared/types';
import styles from './ProjectModal.module.css';

interface ProjectModalProps { project: Project | null; onClose: () => void; }

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', handleEsc);
      return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleEsc); };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className={styles.modal} initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.95 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={project.name}>
            <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
              <DynamicIcon name="FaTimes" size={20} />
            </button>

            <div className={styles.content}>
              <div className={styles.header}>
                <Typography variant="h3">{project.name}</Typography>
                <Badge variant={project.status === 'completed' ? 'success' : 'warning'}>
                  {project.status.replace('-', ' ')}
                </Badge>
              </div>

              <Typography variant="body-sm" color="accent">{project.role} · {project.duration}</Typography>
              <Typography variant="body" color="secondary">{project.longDescription}</Typography>

              <div className={styles.section}>
                <Typography variant="h5">Architecture</Typography>
                <Typography variant="body-sm" color="secondary">{project.architecture}</Typography>
              </div>

              <div className={styles.section}>
                <Typography variant="h5">Technologies</Typography>
                <div className={styles.tags}>
                  {project.technologies.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>

              <div className={styles.section}>
                <Typography variant="h5">Key Features</Typography>
                <ul className={styles.list}>
                  {project.features.map((f, i) => <li key={i}><Typography variant="body-sm" color="secondary">{f}</Typography></li>)}
                </ul>
              </div>

              {project.screenshots && project.screenshots.length > 0 && (
                <div className={styles.section}>
                  <Typography variant="h5">Screenshots</Typography>
                  <div className={styles.gallery}>
                    {project.screenshots.map((screenshot, i) => (
                      <Image
                        key={i}
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={screenshot.width}
                        height={screenshot.height}
                        className={styles.galleryImage}
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.challenges.length > 0 && (
                <div className={styles.columns}>
                  <div className={styles.section}>
                    <Typography variant="h5">Challenges</Typography>
                    <ul className={styles.list}>
                      {project.challenges.map((c, i) => <li key={i}><Typography variant="body-sm" color="secondary">{c}</Typography></li>)}
                    </ul>
                  </div>
                  <div className={styles.section}>
                    <Typography variant="h5">Solutions</Typography>
                    <ul className={styles.list}>
                      {project.solutions.map((s, i) => <li key={i}><Typography variant="body-sm" color="secondary">{s}</Typography></li>)}
                    </ul>
                  </div>
                </div>
              )}

              <div className={styles.actions}>
                {project.links.github && (
                  <Button variant="outline" size="md" leftIcon={<DynamicIcon name="FaGithub" size={16} />}
                    onClick={() => window.open(project.links.github, '_blank')}>GitHub</Button>
                )}
                {project.links.liveDemo && (
                  <Button variant="primary" size="md" leftIcon={<DynamicIcon name="FaExternalLinkAlt" size={14} />}
                    onClick={() => window.open(project.links.liveDemo, '_blank')}>Live Demo</Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
