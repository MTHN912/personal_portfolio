
import { MainLayout } from '@/components/templates/MainLayout';
import { ProjectsSection } from '@/components/organisms';

export default function ProjectsPage() {
  return (
    <MainLayout>
      {/* <ProjectsSection /> */}
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold">🚧 Coming Soon</h1>
      <p className="mt-4 text-lg text-gray-500">
        This page is currently under development. Please check back later.
      </p>
    </div>
    </MainLayout>
  );
}
