// About section types

import { BaseEntity, ImageData, DateRange } from './common.types';

export interface PersonalInfo extends BaseEntity {
  fullName: string;
  firstName: string;
  lastName: string;
  avatar: ImageData;
  birthday: string;
  address: string;
  phone: string;
  email: string;
  nationality: string;
  languages: Language[];
  title: string;
  shortBio: string;
  longIntro: string;
  careerObjective: string;
  interests: string[];
  resumeUrl: string;
  photos: ImageData[];
  achievements: Achievement[];
  timeline: TimelineEvent[];
}

export interface Language {
  name: string;
  level: 'native' | 'fluent' | 'intermediate' | 'beginner';
  flag?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: DateRange;
  icon?: string;
  type: 'education' | 'work' | 'achievement' | 'personal';
}
