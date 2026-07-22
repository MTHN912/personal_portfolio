
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, ROUTES } from '@/shared/constants';
import { ThemeToggle } from '@/components/molecules';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import { cn } from '@/shared/utils';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <motion.nav
      className={cn(styles.navbar, isScrolled && styles.scrolled)}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <Link href={ROUTES.HOME} className={styles.logo}>
          <span className={styles.logoGradient}>{'<AC />'}</span>
        </Link>

        {}
        <div className={styles.desktopNav}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(styles.navLink, pathname === item.href && styles.active)}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div className={styles.activeIndicator} layoutId="activeNav" transition={{ duration: 0.3 }} />
              )}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={styles.menuButton}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <DynamicIcon name={isMobileOpen ? 'FaTimes' : 'FaBars'} size={20} />
          </button>
        </div>
      </div>

      {}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div className={styles.mobileOverlay}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)} />
            <motion.div className={styles.mobileMenu}
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}>
              <div className={styles.mobileLinks}>
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(styles.mobileLink, pathname === item.href && styles.active)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
