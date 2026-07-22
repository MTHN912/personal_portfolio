// Education types

import { BaseEntity, ImageData, DateRange } from './common.types';

export interface Education extends BaseEntity {
  institution: string;
  institutionLogo: ImageData;
  degree: string;
  major: string;
  period: DateRange;
  gpa?: string;
  certificates: EducationCertificate[];
  awards: string[];
  activities: string[];
  photos: ImageData[];
  summary: string;
  achievements: string[];
  type: 'university' | 'high-school' | 'course' | 'bootcamp';
}

export interface EducationCertificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}
