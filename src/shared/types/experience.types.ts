

import { BaseEntity, ImageData, DateRange } from './common.types';

export type EmploymentType =
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'freelance'
  | 'internship';

export interface Experience extends BaseEntity {
  companyName: string;
  companyLogo: ImageData;
  position: string;
  employmentType: EmploymentType;
  location: string;
  period: DateRange;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  images: ImageData[];
  certificates: Certificate[];
  awards: Award[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  image?: ImageData;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}
