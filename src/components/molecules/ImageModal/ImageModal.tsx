
'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { DynamicIcon } from '@/components/molecules/DynamicIcon';
import type { ImageData } from '@/shared/types';
import styles from './ImageModal.module.css';

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', handleEsc);
      return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleEsc); };
    }
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className={styles.modal} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Image viewer">
            <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
              <DynamicIcon name="FaTimes" size={24} />
            </button>

            <div className={styles.imageContainer}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width || 1200}
                height={image.height || 800}
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.info}>
              <h3 className={styles.title}>{image.alt}</h3>
              {image.description && <p className={styles.description}>{image.description}</p>}
              {image.date && <p className={styles.date}>{image.date}</p>}
              {image.category && <span className={styles.category}>{image.category}</span>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
