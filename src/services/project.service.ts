

import { APP_CONFIG } from '@/shared/constants';
import { projectsMock } from '@/services/mock';
import type { Project } from '@/shared/types';

function mockDelay<T>(data: T, ms = 300): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export const projectService = {
  async getProjects(): Promise<Project[]> {
    if (APP_CONFIG.api.useMock) {
      return mockDelay(projectsMock);
    }
    return projectsMock;
  },

  async getFeaturedProjects(): Promise<Project[]> {
    const projects = await this.getProjects();
    return projects.filter((p) => p.isFeatured);
  },

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const projects = await this.getProjects();
    return projects.find((p) => p.slug === slug);
  },
};
