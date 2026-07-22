// Skill types

import { BaseEntity } from './common.types';

export type SkillCategory =
  | 'programming-languages'
  | 'frontend'
  | 'backend'
  | 'architecture'
  | 'databases'
  | 'cloud'
  | 'devops'
  | 'testing'
  | 'version-control'
  | 'tools'
  | 'ides'
  | 'ai-tools'
  | 'operating-systems'
  | 'soft-skills';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill extends BaseEntity {
  name: string;
  icon: string;
  description: string;
  category: SkillCategory;
  level: SkillLevel;
  yearsOfExperience: number;
  proficiency: number; // 0-100
  tags: string[];
  relatedProjects?: string[]; // project IDs
}

export interface SkillCategoryInfo {
  id: SkillCategory;
  label: string;
  icon: string;
  description: string;
}
