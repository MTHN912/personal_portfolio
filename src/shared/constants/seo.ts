

import { SEOMetadata } from '@/shared/types';

export const SITE_CONFIG = {
  name: 'William Mai | Software Engineer',
  shortName: 'William Mai',
  description:
    'Full Stack Software Engineer specializing in React, Next.js, TypeScript. View my portfolio, projects, and professional experience.',
  url: 'https://william.dev',
  ogImage: '/images/og-image.png',
  locale: 'en_US',
  twitterHandle: '@william_mai',
} as const;

export const DEFAULT_SEO: SEOMetadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
    'Web Developer',
  ],
  ogTitle: SITE_CONFIG.name,
  ogDescription: SITE_CONFIG.description,
  ogImage: SITE_CONFIG.ogImage,
  ogUrl: SITE_CONFIG.url,
  twitterCard: 'summary_large_image',
  twitterTitle: SITE_CONFIG.name,
  twitterDescription: SITE_CONFIG.description,
  twitterImage: SITE_CONFIG.ogImage,
  canonicalUrl: SITE_CONFIG.url,
  robots: 'index, follow',
};
