'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: number;
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  offset = 0
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Reduced the parallax range to prevent excessive movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset - 50 * speed, offset + 50 * speed]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}