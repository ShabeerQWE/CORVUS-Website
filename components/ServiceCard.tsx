'use client';

import { CardSpotlight } from '@/components/ui/card-spotlight';
import { ReactNode } from 'react';

interface ServiceCardProps {
  service: {
    title: string;
    icon: ReactNode;
    description: string;
    details: string[];
    benefits: string[];
    colorClass: string;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Map color classes to spotlight colors
  const getSpotlightColor = (colorClass: string) => {
    if (colorClass.includes('blue')) return '#4facfe';
    if (colorClass.includes('purple')) return '#ff6b9d';
    if (colorClass.includes('green')) return '#6bcf7f';
    if (colorClass.includes('orange')) return '#ffa500';
    return '#262626';
  };

  return (
    <CardSpotlight 
      className="h-full"
      color={getSpotlightColor(service.colorClass)}
    >
      <div className="relative z-20">
        {/* Service Header */}
        <div className="flex items-center mb-6">
          <div className={`${service.colorClass} text-4xl mr-4`}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-6">{service.description}</p>

        {/* Service Details */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-white">What we offer:</h4>
          <ul className="space-y-2">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`${service.colorClass} mr-2`}>✓</span>
                <span className="text-text-secondary text-sm">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Benefits */}
        <div className="mb-8">
          <h4 className="font-semibold mb-3 text-white">Key benefits:</h4>
          <ul className="space-y-2">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`${service.colorClass} mr-2`}>•</span>
                <span className="text-text-secondary text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a 
          href="/contact"
          className="inline-block px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors"
        >
          Get Started
        </a>
      </div>
    </CardSpotlight>
  );
}