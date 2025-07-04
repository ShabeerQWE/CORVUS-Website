'use client';

import { motion } from 'framer-motion';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedButton } from '@/components/AnimatedButton';
import { GlowingEffect } from '@/components/ui/glowing-effect';
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

export function ServiceCard({ service, index }: ServiceCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Map color classes to glowing effect variants
  const getGlowVariant = (colorClass: string) => {
    if (colorClass.includes('blue')) return 'blue';
    if (colorClass.includes('purple')) return 'purple';
    if (colorClass.includes('green')) return 'green';
    if (colorClass.includes('orange')) return 'orange';
    return 'default';
  };

  return (
    <AnimatedCard delay={index * 0.1}>
      <div className="relative h-full rounded-xl">
        <GlowingEffect
          spread={30}
          blur={2}
          glow={true}
          disabled={isMobile}
          proximity={60}
          inactiveZone={0.01}
          borderWidth={2}
          variant={getGlowVariant(service.colorClass)}
          movementDuration={1.5}
        />
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className={`relative bg-bg-black border border-border-gray rounded-xl overflow-hidden ${service.hoverClass} transition-all duration-300 group h-full z-10`}
        >
          <div className="p-8">
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
            <AnimatedButton href="/contact" variant="primary">
              Get Started
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </AnimatedCard>
  );
}