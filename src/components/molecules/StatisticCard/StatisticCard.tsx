// StatisticCard molecule with animated counter
'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, Typography } from '@/components/atoms';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import { FADE_IN_UP } from '@/shared/constants';
import type { StatItem } from '@/shared/types';
import styles from './StatisticCard.module.css';

interface StatisticCardProps { stat: StatItem; }

const iconNameMap: Record<string, string> = {
  calendar: 'FaCalendar', code: 'FaCode', layers: 'FaSitemap', award: 'FaAward',
};

export default function StatisticCard({ stat }: StatisticCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) { setCount(stat.value); clearInterval(timer); }
          else { setCount(Math.floor(current)); }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <motion.div ref={ref} variants={FADE_IN_UP}>
      <Card variant="glass" padding="md" className={styles.card}>
        <div className={styles.iconWrapper}>
          <DynamicIcon name={iconNameMap[stat.icon || ''] || 'FaStar'} size={24} />
        </div>
        <Typography variant="h3" color="gradient" className={styles.value}>
          {stat.prefix}{count}{stat.suffix}
        </Typography>
        <Typography variant="body-sm" color="secondary">{stat.label}</Typography>
      </Card>
    </motion.div>
  );
}
