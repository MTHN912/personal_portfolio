// Hero organism
'use client';

import { motion } from 'framer-motion';
import { Typography, Button, Avatar } from '@/components/atoms';
import { TypingText, SocialLinks, StatisticCard } from '@/components/molecules';
import { useAbout, useStatistics, useSocial } from '@/hooks';
import { STAGGER_CHILDREN, FADE_IN_UP, FADE_IN_LEFT, FADE_IN_RIGHT } from '@/shared/constants';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import styles from './Hero.module.css';

export default function Hero() {
  const { data: about } = useAbout();
  const { data: stats } = useStatistics();
  const { data: socialLinks } = useSocial();

  if (!about) return null;

  const typingTexts = [
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Architect',
  ];

  return (
    <section id="home" className={styles.hero}>
      {/* Gradient orbs background */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <motion.div className={styles.content} variants={STAGGER_CHILDREN} initial="hidden" animate="visible">
          {/* Left: Text */}
          <motion.div className={styles.textSide} variants={FADE_IN_LEFT}>
            <motion.div variants={FADE_IN_UP}>
              <Typography variant="overline" color="accent">Welcome to my portfolio</Typography>
            </motion.div>

            <motion.div variants={FADE_IN_UP}>
              <Typography variant="h1">
                Hi, I&apos;m{' '}
                <span className={styles.nameGradient}>{about.firstName}</span>
              </Typography>
            </motion.div>

            <motion.div variants={FADE_IN_UP}>
              <TypingText texts={typingTexts} />
            </motion.div>

            <motion.div variants={FADE_IN_UP}>
              <Typography variant="body" color="secondary" className={styles.bio}>
                {about.shortBio}
              </Typography>
            </motion.div>

            <motion.div variants={FADE_IN_UP} className={styles.buttons}>
              <Button variant="primary" size="lg" leftIcon={<DynamicIcon name="FaDownload" size={16} />}
                onClick={() => window.open(about.resumeUrl, '_blank')}>
                Download CV
              </Button>
              <Button variant="outline" size="lg" leftIcon={<DynamicIcon name="FaEnvelope" size={16} />}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </motion.div>

            {socialLinks && (
              <motion.div variants={FADE_IN_UP}>
                <SocialLinks links={socialLinks.slice(0, 5)} size="md" />
              </motion.div>
            )}
          </motion.div>

          {/* Right: Avatar */}
          <motion.div className={styles.avatarSide} variants={FADE_IN_RIGHT}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarGlow} />
              <Avatar src={about.avatar.src} alt={about.avatar.alt} size="xl" priority />
              <div className={styles.floatingBadge1}>
                <DynamicIcon name="SiReact" size={20} />
              </div>
              <div className={styles.floatingBadge2}>
                <DynamicIcon name="SiTypescript" size={20} />
              </div>
              <div className={styles.floatingBadge3}>
                <DynamicIcon name="SiNextdotjs" size={20} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        {stats && (
          <motion.div className={styles.stats} variants={STAGGER_CHILDREN} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {stats.map((stat) => (
              <StatisticCard key={stat.id} stat={stat} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
