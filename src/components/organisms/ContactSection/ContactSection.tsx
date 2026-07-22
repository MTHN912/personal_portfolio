// ContactSection organism
'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography, Button, Input, Card } from '@/components/atoms';
import { SectionHeader, ContactCard, SocialLinks } from '@/components/molecules';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import { useContact, useSocial, useContactForm } from '@/hooks';
import { contactFormSchema, type ContactFormSchema } from '@/shared/utils';
import { STAGGER_CHILDREN, FADE_IN_UP, FADE_IN_LEFT, FADE_IN_RIGHT } from '@/shared/constants';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const { data: contactInfo } = useContact();
  const { data: socialLinks } = useSocial();
  const { submitForm, isSubmitting, submitStatus } = useContactForm();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormSchema) => {
    submitForm(data, { onSuccess: () => reset() });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Get In Touch" subtitle="Contact me" description="Have a question or want to work together? Feel free to reach out!" />

        <div className={styles.grid}>
          {/* Left - Info */}
          <motion.div className={styles.infoColumn} variants={STAGGER_CHILDREN} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {contactInfo && (
              <>
                <motion.div variants={FADE_IN_LEFT}>
                  <ContactCard icon="FaEnvelope" label="Email" value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
                </motion.div>
                <motion.div variants={FADE_IN_LEFT}>
                  <ContactCard icon="FaPhone" label="Phone" value={contactInfo.phone} href={`tel:${contactInfo.phone}`} />
                </motion.div>
                <motion.div variants={FADE_IN_LEFT}>
                  <ContactCard icon="FaMapMarkerAlt" label="Location" value={contactInfo.address} />
                </motion.div>
                <motion.div variants={FADE_IN_LEFT}>
                  <ContactCard icon="FaClock" label="Working Hours"
                    value={`${contactInfo.workingHours.days}\n${contactInfo.workingHours.hours} (${contactInfo.workingHours.timezone})`} />
                </motion.div>
              </>
            )}

            {socialLinks && (
              <motion.div variants={FADE_IN_LEFT} className={styles.socialSection}>
                <Typography variant="h5" className={styles.socialTitle}>Follow Me</Typography>
                <SocialLinks links={socialLinks} size="lg" />
              </motion.div>
            )}

            {/* Map */}
            {contactInfo && (
              <motion.div variants={FADE_IN_LEFT} className={styles.mapWrapper}>
                <iframe
                  src={contactInfo.mapLocation.embedUrl}
                  width="100%" height="200"
                  style={{ border: 0, borderRadius: '0.75rem', filter: 'grayscale(0.3) brightness(0.9)' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Right - Form */}
          <motion.div variants={FADE_IN_RIGHT} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card variant="glass" padding="lg">
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                <div className={styles.formRow}>
                  <Input label="Name" placeholder="Your name" {...register('name')} error={errors.name?.message} />
                  <Input label="Email" type="email" placeholder="your@email.com" {...register('email')} error={errors.email?.message} />
                </div>
                <div className={styles.formRow}>
                  <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" {...register('phone')} error={errors.phone?.message} />
                  <Input label="Subject" placeholder="What's this about?" {...register('subject')} error={errors.subject?.message} />
                </div>
                <Input label="Message" placeholder="Tell me about your project..." multiline rows={5} {...register('message')} error={errors.message?.message} />

                <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting}
                  leftIcon={<DynamicIcon name="FaEnvelope" size={16} />}>
                  Send Message
                </Button>

                {submitStatus === 'success' && (
                  <motion.div className={styles.successMsg} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <DynamicIcon name="FaHeart" size={16} />
                    <Typography variant="body-sm" color="accent">Thank you! Your message has been sent successfully.</Typography>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div className={styles.errorMsg} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="body-sm">Something went wrong. Please try again.</Typography>
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
