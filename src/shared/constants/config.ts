// Application configuration constants

export const APP_CONFIG = {
  // Feature flags
  features: {
    particleBackground: true,
    animatedCursor: true,
    scrollProgress: true,
    backToTop: true,
    loadingScreen: true,
    mouseGlow: true,
  },
  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 10000,
    useMock: process.env.NEXT_PUBLIC_USE_MOCK !== 'false',
  },
  // Contact form
  contact: {
    maxMessageLength: 1000,
    maxSubjectLength: 100,
  },
  // Pagination defaults
  pagination: {
    defaultPage: 1,
    defaultLimit: 10,
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
