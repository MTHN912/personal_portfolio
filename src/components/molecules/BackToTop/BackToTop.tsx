
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button className={styles.button} onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          aria-label="Back to top">
          <DynamicIcon name="FaArrowUp" size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
