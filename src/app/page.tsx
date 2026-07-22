// Home Page - assembles the MainLayout template with HomeTemplate
// No business logic here - pages only assemble templates

import { MainLayout } from '@/components/templates/MainLayout';
import { HomeTemplate } from '@/components/templates/HomeTemplate';

export default function HomePage() {
  return (
    <MainLayout>
      <HomeTemplate />
    </MainLayout>
  );
}
