'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface WordObject {
  text: string;
  color: string;
}

interface TypeWriterLoopProps {
  words: (string | WordObject)[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypeWriterLoop({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypeWriterLoopProps) {
  const prefersReducedMotion = useReducedMotion();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWordRaw = words[currentWordIndex];
    const currentWord = typeof currentWordRaw === 'string' ? currentWordRaw : currentWordRaw.text;

    if (prefersReducedMotion) {
      setCurrentText(currentWord);
      return;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion]);

  const currentWordRaw = words[currentWordIndex];
  const currentColor = typeof currentWordRaw === 'string' ? 'inherit' : currentWordRaw.color;
  const currentFullText = typeof currentWordRaw === 'string' ? currentWordRaw : currentWordRaw.text;

  if (prefersReducedMotion) {
    return <span style={{ color: currentColor }}>{currentFullText}</span>;
  }

  return (
    <span className="inline-flex items-center" style={{ color: currentColor }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="inline-block w-[3px] h-[1.2em] ml-1"
        style={{ backgroundColor: currentColor === 'inherit' ? 'var(--accent)' : currentColor }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  );
}
