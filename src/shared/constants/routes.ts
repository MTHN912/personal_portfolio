// Navigation and route constants

import { NavItem } from '@/shared/types';

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  EDUCATION: '/education',
  CONTACT: '/contact',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Skills', href: ROUTES.SKILLS },
  { label: 'Experience', href: ROUTES.EXPERIENCE },
  { label: 'Projects', href: ROUTES.PROJECTS },
  { label: 'Education', href: ROUTES.EDUCATION },
  { label: 'Contact', href: ROUTES.CONTACT },
];

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  EDUCATION: 'education',
  CONTACT: 'contact',
} as const;
