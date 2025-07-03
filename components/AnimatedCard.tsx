'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
}

export function AnimatedCard({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  scale = 0.95
}: AnimatedCardProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        scale: scale,
        y: 20
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : scale,
        y: isInView ? 0 : 20
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}