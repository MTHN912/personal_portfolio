// Error page (500 / runtime errors)
'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Typography } from '@/components/atoms';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem', background: 'var(--color-bg)',
    }}>
      <motion.div
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', maxWidth: '500px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h1" color="gradient">500</Typography>
        <Typography variant="h3">Something Went Wrong</Typography>
        <Typography variant="body" color="secondary">
          An unexpected error occurred. Please try again.
        </Typography>
        <Button variant="primary" size="lg" onClick={reset}>
          Try Again
        </Button>
      </motion.div>
    </div>
  );
}
