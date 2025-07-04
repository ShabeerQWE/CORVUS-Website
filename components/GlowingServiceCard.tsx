'use client';

import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedButton } from '@/components/AnimatedButton';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { ReactNode, useEffect, useState } from 'react';

interface ServiceCardProps {
  service: {
    title: string;
    icon: ReactNode;
    description: string;
    details: string[];
    benefits: string[];
    colorClass: string;
    hoverClass: string;
    bgClass: string;
  };
  index: number;
}

export function GlowingServiceCard({ service, index }: ServiceCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Map color classes to glow colors
  const getGlowColor = (colorClass: string) => {
    if (colorClass.includes('blue')) return '#4facfe';
    if (colorClass.includes('purple')) return '#ff6b9d';
    if (colorClass.includes('green')) return '#6bcf7f';
    if (colorClass.includes('orange')) return '#ffa500';
    return '#4facfe';
  };

  const glowColor = getGlowColor(service.colorClass);

  return (
    <AnimatedCard delay={index * 0.1}>
      <HoverBorderGradient
        gradientColor={glowColor}
        duration={3}
        containerClassName="h-full group p-1"
        className="h-full"
      >
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="relative h-full border border-border-gray rounded-xl"
        >
          <div className="p-8 h-full flex flex-col">
            {/* Service Header */}
            <div className="flex items-center mb-6">
              <motion.div
                className={`${service.colorClass} text-4xl mr-4`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </div>

            {/* Description */}
            <p className="text-text-secondary mb-6">{service.description}</p>

            {/* Service Details */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">What we offer:</h4>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span className={`${service.colorClass} mr-2`}>✓</span>
                    <span className="text-text-secondary text-sm">{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3">Key benefits:</h4>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <span className="text-accent-green mr-2">•</span>
                    <span className="text-text-secondary text-sm">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <AnimatedButton href="/contact" variant="primary">
                Get Started
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </HoverBorderGradient>
    </AnimatedCard>
  );
}