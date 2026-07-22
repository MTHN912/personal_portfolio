// useSkills hook

'use client';

import { useQuery } from '@tanstack/react-query';
import { useState, useMemo } from 'react';
import { skillService } from '@/services';
import type { SkillCategory } from '@/shared/types';

export function useSkills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const skillsQuery = useQuery({
    queryKey: ['skills'],
    queryFn: () => skillService.getSkills(),
  });

  const categoriesQuery = useQuery({
    queryKey: ['skill-categories'],
    queryFn: () => skillService.getCategories(),
  });

  const filteredSkills = useMemo(() => {
    if (!skillsQuery.data) return [];

    let filtered = skillsQuery.data;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((skill) => skill.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (skill) =>
          skill.name.toLowerCase().includes(query) ||
          skill.description.toLowerCase().includes(query) ||
          skill.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [skillsQuery.data, selectedCategory, searchQuery]);

  return {
    skills: filteredSkills,
    allSkills: skillsQuery.data ?? [],
    categories: categoriesQuery.data ?? [],
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    isLoading: skillsQuery.isLoading || categoriesQuery.isLoading,
    error: skillsQuery.error || categoriesQuery.error,
  };
}
