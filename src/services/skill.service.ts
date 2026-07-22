// Skill service

import { APP_CONFIG } from '@/shared/constants';
import { skillsMock, skillCategoriesMock } from '@/services/mock';
import type { Skill, SkillCategoryInfo } from '@/shared/types';

function mockDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const skillService = {
  async getSkills(): Promise<Skill[]> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(skillsMock);
    }
    return skillsMock;
  },

  async getCategories(): Promise<SkillCategoryInfo[]> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(skillCategoriesMock);
    }
    return skillCategoriesMock;
  },
};
