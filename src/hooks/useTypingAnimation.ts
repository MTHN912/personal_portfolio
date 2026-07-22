

'use client';

import { useEffect, useState, useCallback } from 'react';

interface UseTypingAnimationOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypingAnimation({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseTypingAnimationOptions) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const animate = useCallback(() => {
    const currentFullText = texts[textIndex] || '';

    if (isPaused) return;

    if (!isDeleting) {

      if (displayText.length < currentFullText.length) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      } else {

        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {

      if (displayText.length > 0) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      } else {

        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, isDeleting, isPaused, textIndex, texts, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(animate, speed);
    return () => clearTimeout(timer);
  }, [animate, isDeleting, typingSpeed, deletingSpeed]);

  return { displayText, isDeleting };
}
