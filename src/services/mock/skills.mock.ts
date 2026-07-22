// TODO: Replace with real data
// Mock data for Skills section — updated based on CV (Nguyen Mai Tran Hoang / Wiliam Mai)

import { Skill, SkillCategoryInfo } from '@/shared/types';

export const skillCategoriesMock: SkillCategoryInfo[] = [
  { id: 'programming-languages', label: 'Programming Languages', icon: 'FaCode', description: 'Core programming languages' },
  { id: 'frontend', label: 'Frontend', icon: 'FaReact', description: 'Frontend frameworks and libraries' },
  { id: 'backend', label: 'Backend', icon: 'FaServer', description: 'Backend technologies and frameworks' },
  { id: 'architecture', label: 'Architecture', icon: 'FaSitemap', description: 'Software architecture and design patterns' },
  { id: 'databases', label: 'Databases', icon: 'FaDatabase', description: 'Database management systems' },
  { id: 'tools', label: 'Tools', icon: 'FaTools', description: 'Development tools and utilities' },
  { id: 'ides', label: 'IDEs', icon: 'FaLaptopCode', description: 'Integrated development environments' },
  { id: 'ai-tools', label: 'AI Tools', icon: 'FaRobot', description: 'AI-powered development tools' },
  { id: 'version-control', label: 'Version Control', icon: 'FaGitAlt', description: 'Version control systems' },
];

export const skillsMock: Skill[] = [
  // Programming Languages
  { id: 'skill-1', name: 'JavaScript', icon: 'SiJavascript', description: 'Core web programming language', category: 'programming-languages', level: 'expert', yearsOfExperience: 3, proficiency: 90, tags: ['ES6+', 'Web', 'Async/Await'], relatedProjects: [] },
  { id: 'skill-2', name: 'TypeScript', icon: 'SiTypescript', description: 'Strongly typed JavaScript superset', category: 'programming-languages', level: 'advanced', yearsOfExperience: 2, proficiency: 85, tags: ['Static Typing', 'ES6+', 'JavaScript'], relatedProjects: [] },

  // Frontend
  { id: 'skill-3', name: 'React', icon: 'SiReact', description: 'Component-based UI library', category: 'frontend', level: 'advanced', yearsOfExperience: 2, proficiency: 85, tags: ['Hooks', 'Component-Based'], relatedProjects: [] },
  { id: 'skill-4', name: 'Next.js', icon: 'SiNextdotjs', description: 'React meta-framework for production', category: 'frontend', level: 'advanced', yearsOfExperience: 2, proficiency: 82, tags: ['SSR', 'SSG', 'Performance Optimization'], relatedProjects: [] },

  // Backend
  { id: 'skill-5', name: 'Node.js', icon: 'SiNodedotjs', description: 'Server-side JavaScript runtime', category: 'backend', level: 'advanced', yearsOfExperience: 2, proficiency: 85, tags: ['REST', 'Runtime'], relatedProjects: [] },
  { id: 'skill-6', name: 'NestJS', icon: 'SiNestjs', description: 'Progressive Node.js framework', category: 'backend', level: 'advanced', yearsOfExperience: 2, proficiency: 82, tags: ['DI', 'Decorators', 'Modular'], relatedProjects: [] },
  { id: 'skill-7', name: 'RESTful APIs', icon: 'SiSwagger', description: 'Designing and integrating REST APIs', category: 'backend', level: 'advanced', yearsOfExperience: 2, proficiency: 85, tags: ['API Design', 'Gateway Integration'], relatedProjects: [] },

  // Architecture
  { id: 'skill-8', name: 'Microservices Architecture', icon: 'FaSitemap', description: 'Distributed, independently deployable services', category: 'architecture', level: 'advanced', yearsOfExperience: 2, proficiency: 80, tags: ['Independent Deployment', 'Scalability'], relatedProjects: [] },
  { id: 'skill-9', name: 'Micro-frontend Architecture', icon: 'FaLayerGroup', description: 'Modular frontend composition across teams/apps', category: 'architecture', level: 'advanced', yearsOfExperience: 1.5, proficiency: 78, tags: ['Modularity', 'Independent Deployment'], relatedProjects: [] },
  { id: 'skill-10', name: 'Modular Architecture', icon: 'FaCubes', description: 'Structuring code into maintainable, reusable modules', category: 'architecture', level: 'advanced', yearsOfExperience: 2, proficiency: 80, tags: ['Maintainability', 'Reusability'], relatedProjects: [] },
  { id: 'skill-11', name: 'Atomic Design', icon: 'FaAtom', description: 'Systematic UI component design methodology', category: 'architecture', level: 'intermediate', yearsOfExperience: 1.5, proficiency: 72, tags: ['Design System', 'UI Components'], relatedProjects: [] },

  // Databases
  { id: 'skill-12', name: 'PostgreSQL', icon: 'SiPostgresql', description: 'Advanced relational database', category: 'databases', level: 'advanced', yearsOfExperience: 2, proficiency: 80, tags: ['SQL', 'Relational'], relatedProjects: [] },
  { id: 'skill-13', name: 'MySQL', icon: 'SiMysql', description: 'Popular relational database management system', category: 'databases', level: 'intermediate', yearsOfExperience: 1.5, proficiency: 72, tags: ['SQL', 'Relational'], relatedProjects: [] },
  { id: 'skill-14', name: 'MongoDB', icon: 'SiMongodb', description: 'Document-oriented NoSQL database', category: 'databases', level: 'intermediate', yearsOfExperience: 1, proficiency: 68, tags: ['NoSQL', 'Document Store'], relatedProjects: [] },
  { id: 'skill-15', name: 'Redis', icon: 'SiRedis', description: 'In-memory caching for high-traffic APIs', category: 'databases', level: 'advanced', yearsOfExperience: 1.5, proficiency: 78, tags: ['Caching', 'Performance'], relatedProjects: [] },

  // Tools
  { id: 'skill-16', name: 'GitHub', icon: 'SiGithub', description: 'Code hosting and collaboration platform', category: 'tools', level: 'advanced', yearsOfExperience: 3, proficiency: 88, tags: ['Collaboration', 'Code Hosting'], relatedProjects: [] },
  { id: 'skill-17', name: 'Bitbucket', icon: 'SiBitbucket', description: 'Git-based source code repository platform', category: 'tools', level: 'intermediate', yearsOfExperience: 1.5, proficiency: 70, tags: ['Repository', 'Collaboration'], relatedProjects: [] },
  { id: 'skill-18', name: 'Jira', icon: 'SiJira', description: 'Project and issue tracking tool', category: 'tools', level: 'advanced', yearsOfExperience: 2, proficiency: 78, tags: ['Agile', 'Issue Tracking'], relatedProjects: [] },
  { id: 'skill-19', name: 'Postman', icon: 'SiPostman', description: 'API testing and development tool', category: 'tools', level: 'advanced', yearsOfExperience: 2, proficiency: 82, tags: ['API Testing', 'Debugging'], relatedProjects: [] },

  // IDEs
  { id: 'skill-20', name: 'VS Code', icon: 'SiVisualstudiocode', description: 'Lightweight code editor', category: 'ides', level: 'expert', yearsOfExperience: 3, proficiency: 92, tags: ['Extensions', 'Debugging'], relatedProjects: [] },

  // AI Tools
  { id: 'skill-21', name: 'GitHub Copilot', icon: 'SiGithubcopilot', description: 'AI-powered code completion', category: 'ai-tools', level: 'advanced', yearsOfExperience: 1.5, proficiency: 82, tags: ['AI', 'Productivity'], relatedProjects: [] },
  { id: 'skill-22', name: 'Cursor', icon: 'SiCursor', description: 'AI-first code editor for accelerated development', category: 'ai-tools', level: 'advanced', yearsOfExperience: 1, proficiency: 80, tags: ['AI', 'Code Editor'], relatedProjects: [] },
  { id: 'skill-23', name: 'Windsurf', icon: 'FaWind', description: 'AI-powered coding assistant and IDE', category: 'ai-tools', level: 'intermediate', yearsOfExperience: 1, proficiency: 75, tags: ['AI', 'Code Editor'], relatedProjects: [] },
  { id: 'skill-24', name: 'Claude Code', icon: 'SiClaude', description: 'AI-assisted development and debugging tool', category: 'ai-tools', level: 'advanced', yearsOfExperience: 1, proficiency: 80, tags: ['AI', 'Debugging', 'Productivity'], relatedProjects: [] },
  { id: 'skill-25', name: 'ChatGPT', icon: 'SiOpenai', description: 'AI language model assistant', category: 'ai-tools', level: 'advanced', yearsOfExperience: 2, proficiency: 80, tags: ['AI', 'Problem Solving'], relatedProjects: [] },

  // Version Control
  { id: 'skill-26', name: 'Git', icon: 'SiGit', description: 'Distributed version control system', category: 'version-control', level: 'advanced', yearsOfExperience: 3, proficiency: 88, tags: ['Branching', 'Merge'], relatedProjects: [] },
];