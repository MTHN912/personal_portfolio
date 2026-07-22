

import type { Variants, Transition } from 'framer-motion';

export const TRANSITION_DEFAULTS: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};

export const STAGGER_CHILDREN: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const FADE_IN: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITION_DEFAULTS,
  },
};

export const FADE_IN_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
};

export const FADE_IN_DOWN: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_DEFAULTS,
  },
};

export const FADE_IN_LEFT: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_DEFAULTS,
  },
};

export const FADE_IN_RIGHT: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_DEFAULTS,
  },
};

export const SCALE_IN: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION_DEFAULTS,
  },
};

export const SLIDE_IN_LEFT: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ...TRANSITION_DEFAULTS, duration: 0.3 },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { ...TRANSITION_DEFAULTS, duration: 0.3 },
  },
};

export const HOVER_SCALE = {
  scale: 1.05,
  transition: { duration: 0.2 },
} as const;

export const TAP_SCALE = {
  scale: 0.95,
} as const;

export const SCROLL_REVEAL_THRESHOLD = 0.15;
