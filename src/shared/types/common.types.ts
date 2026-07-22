

export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  category?: string;
  date?: string;
  description?: string;
}

export interface LinkData {
  label: string;
  url: string;
  icon?: string;
  isExternal?: boolean;
}

export interface DateRange {
  startDate: string;
  endDate?: string;
  isCurrent?: boolean;
}

export interface SectionMeta {
  title: string;
  subtitle?: string;
  description?: string;
}

export type ThemeMode = 'light' | 'dark';

export type Locale = 'en' | 'vi';

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  isExternal?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: string;
}
