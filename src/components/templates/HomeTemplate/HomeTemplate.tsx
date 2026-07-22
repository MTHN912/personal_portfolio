
'use client';

import { Hero, AboutSection, SkillsSection, ProjectsSection, ContactSection } from '@/components/organisms';
import { HomeExperienceSection, HomeEducationSection } from '@/components/organisms';

export default function HomeTemplate() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <HomeExperienceSection />
      {/* <ProjectsSection /> */}
      <HomeEducationSection />
      <ContactSection />
    </>
  );
}
