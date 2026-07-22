
'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button className={styles.toggle} onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <motion.div key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
        <DynamicIcon name={theme === 'dark' ? 'FaMoon' : 'FaSun'} size={18} />
      </motion.div>
    </motion.button>
  );
}
