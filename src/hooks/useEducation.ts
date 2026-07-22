

'use client';

import { useQuery } from '@tanstack/react-query';
import { educationService } from '@/services';

export function useEducation() {
  return useQuery({
    queryKey: ['education'],
    queryFn: () => educationService.getEducation(),
  });
}
