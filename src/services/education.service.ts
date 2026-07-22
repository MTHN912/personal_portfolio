// Education service

import { APP_CONFIG } from '@/shared/constants';
import { educationMock } from '@/services/mock';
import type { Education } from '@/shared/types';

function mockDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const educationService = {
  async getEducation(): Promise<Education[]> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(educationMock);
    }
    return educationMock;
  },
};
