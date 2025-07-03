'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up'
}: AnimatedTextProps) {
  const { ref, isInView } = useScrollAnimation();

  const directionOffset = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{
        opacity: isInView ? 1 : 1, // Keep opacity at 1 to prevent disappearing
        x: isInView ? 0 : directionOffset[direction].x,
        y: isInView ? 0 : directionOffset[direction].y
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
      style={{ position: 'relative', minHeight: '1px' }} // Ensure minimum height
    >
      {children}
    </motion.div>
  );
}