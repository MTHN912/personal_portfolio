// Project types

import { BaseEntity, ImageData, LinkData } from './common.types';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'archived';

export interface Project extends BaseEntity {
  name: string;
  slug: string;
  thumbnail: ImageData;
  description: string;
  longDescription: string;
  role: string;
  technologies: string[];
  architecture: string;
  duration: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  screenshots: ImageData[];
  links: ProjectLinks;
  status: ProjectStatus;
  category: string;
  isFeatured: boolean;
  order: number;
}

export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  documentation?: string;
  additionalLinks?: LinkData[];
}
