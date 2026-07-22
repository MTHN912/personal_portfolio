// useAbout hook

'use client';

import { useQuery } from '@tanstack/react-query';
import { portfolioService } from '@/services';

export function useAbout() {
  return useQuery({
    queryKey: ['about'],
    queryFn: () => portfolioService.getPersonalInfo(),
  });
}

export function useStatistics() {
  return useQuery({
    queryKey: ['statistics'],
    queryFn: () => portfolioService.getStatistics(),
  });
}
