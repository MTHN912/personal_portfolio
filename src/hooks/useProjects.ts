// useProjects hook

'use client';

import { useQuery } from '@tanstack/react-query';
import { useState, useMemo } from 'react';
import { projectService } from '@/services';

export function useProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projectsQuery = useQuery({
    queryKey: ['projects'],
    queryFn: () => projectService.getProjects(),
  });

  const categories = useMemo(() => {
    if (!projectsQuery.data) return [];
    const cats = [...new Set(projectsQuery.data.map((p) => p.category))];
    return cats;
  }, [projectsQuery.data]);

  const filteredProjects = useMemo(() => {
    if (!projectsQuery.data) return [];

    let filtered = projectsQuery.data;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query))
      );
    }

    return filtered.sort((a, b) => a.order - b.order);
  }, [projectsQuery.data, selectedCategory, searchQuery]);

  return {
    projects: filteredProjects,
    allProjects: projectsQuery.data ?? [],
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    isLoading: projectsQuery.isLoading,
    error: projectsQuery.error,
  };
}

export function useFeaturedProjects() {
  return useQuery({
    queryKey: ['featured-projects'],
    queryFn: () => projectService.getFeaturedProjects(),
  });
}
