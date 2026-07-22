// MainLayout template - wraps content with Navbar, Footer, ScrollProgress, BackToTop
'use client';

import { Navbar, Footer } from '@/components/organisms';
import { ScrollProgress, BackToTop } from '@/components/molecules';
import type { ReactNode } from 'react';

interface MainLayoutProps { children: ReactNode; }

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
