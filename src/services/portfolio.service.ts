

import { APP_CONFIG } from '@/shared/constants';
import { aboutMock, statisticsMock } from '@/services/mock';
import type { PersonalInfo, StatItem } from '@/shared/types';


function mockDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const portfolioService = {
  async getPersonalInfo(): Promise<PersonalInfo> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(aboutMock);
    }

    return aboutMock;
  },

  async getStatistics(): Promise<StatItem[]> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(statisticsMock);
    }
    return statisticsMock;
  },
};
