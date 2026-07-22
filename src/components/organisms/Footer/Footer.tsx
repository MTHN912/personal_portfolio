// Footer organism
'use client';

import Link from 'next/link';
import { Typography, Divider } from '@/components/atoms';
import { SocialLinks, ThemeToggle } from '@/components/molecules';
import { useSocial } from '@/hooks';
import { NAV_ITEMS } from '@/shared/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const { data: socialLinks } = useSocial();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo & Description */}
          <div className={styles.brand}>
            <span className={styles.logo}>{'<AC />'}</span>
            <Typography variant="body-sm" color="secondary">
              Building exceptional digital experiences with modern technologies and clean architecture.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <Typography variant="h6" className={styles.linkTitle}>Quick Links</Typography>
            <nav className={styles.navLinks}>
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Theme */}
          <div className={styles.social}>
            <Typography variant="h6" className={styles.linkTitle}>Connect</Typography>
            {socialLinks && <SocialLinks links={socialLinks.slice(0, 6)} size="sm" />}
            <div className={styles.themeRow}>
              <Typography variant="caption" color="muted">Theme</Typography>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <Divider />

        <div className={styles.bottom}>
          <Typography variant="caption" color="muted">
            © {year} William Mai. All rights reserved.
          </Typography>
          <Typography variant="caption" color="muted">
            Built with Next.js, TypeScript & ❤️
          </Typography>
        </div>
      </div>
    </footer>
  );
}
