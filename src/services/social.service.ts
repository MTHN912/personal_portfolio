// Social service

import { APP_CONFIG } from '@/shared/constants';
import { socialMock } from '@/services/mock';
import type { SocialLink } from '@/shared/types';

function mockDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const socialService = {
  async getSocialLinks(): Promise<SocialLink[]> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(socialMock);
    }
    return socialMock;
  },
};
