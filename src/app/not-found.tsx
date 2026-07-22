
'use client';

import { motion } from 'framer-motion';
import { Button, Typography } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.bgOrb} />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h1" color="gradient" className={styles.code}>404</Typography>
        <Typography variant="h3">Page Not Found</Typography>
        <Typography variant="body" color="secondary" className={styles.description}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Typography>
        <Button
          variant="primary"
          size="lg"
          leftIcon={<DynamicIcon name="FaArrowUp" size={16} />}
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </Button>
      </motion.div>
    </div>
  );
}
