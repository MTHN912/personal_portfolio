

import { APP_CONFIG } from '@/shared/constants';
import { experienceMock } from '@/services/mock';
import type { Experience } from '@/shared/types';

function mockDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const experienceService = {
  async getExperiences(): Promise<Experience[]> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(experienceMock);
    }
    return experienceMock;
  },
};
