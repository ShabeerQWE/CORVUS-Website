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
  duration = 0.28, // faster and smoother
  scale = 0.97     // less "pop" for a more natural feel
}: AnimatedCardProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        scale: scale,
        y: 24
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : scale,
        y: isInView ? 0 : 24
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // smooth "ease out"
      }}
      whileHover={{
        scale: 1.025,
        transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}