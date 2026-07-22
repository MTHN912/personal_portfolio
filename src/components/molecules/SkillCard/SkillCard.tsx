
'use client';

import { motion } from 'framer-motion';
import { Card, Progress, Tag, Typography } from '@/components/atoms';
import { FADE_IN_UP } from '@/shared/constants';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import type { Skill } from '@/shared/types';
import styles from './SkillCard.module.css';

interface SkillCardProps { skill: Skill; }

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div variants={FADE_IN_UP}>
      <Card variant="glass" padding="md" className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <DynamicIcon name={skill.icon} size={24} />
          </div>
          <div className={styles.info}>
            <Typography variant="h6">{skill.name}</Typography>
            <Typography variant="caption" color="muted">{skill.yearsOfExperience} yrs</Typography>
          </div>
        </div>
        <Typography variant="body-sm" color="secondary" className={styles.description}>
          {skill.description}
        </Typography>
        <Progress value={skill.proficiency} label={skill.level} size="sm" />
        <div className={styles.tags}>
          {skill.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
