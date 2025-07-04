'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaRobot,
  FaChartLine,
  FaCogs,
  FaServer,
} from 'react-icons/fa';
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedButton } from '@/components/AnimatedButton';
import { ParallaxSection } from '@/components/ParallaxSection';
import { GlowingServiceCard } from '@/components/GlowingServiceCard';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Automation',
      icon: <FaRobot />,
      description: 'Transform your business processes with intelligent automation powered by cutting-edge AI technology.',
      details: [
        'n8n workflow automation and integration',
        'Large Language Model (LLM) integration',
        'Custom AI-powered process automation',
        'Intelligent document processing',
        'Automated decision-making systems'
      ],
      benefits: [
        'Reduce manual work by up to 80%',
        'Eliminate human errors',
        '24/7 automated operations',
        'Scale operations without adding headcount'
      ],
      colorClass: 'text-accent-blue',
      hoverClass: 'hover:border-accent-blue',
      bgClass: 'bg-accent-blue'
    },
    {
      title: 'CRM Systems',
      icon: <FaChartLine />,
      description: 'Streamline your customer relationships with world-class CRM implementations tailored to your business.',
      details: [
        'Zoho CRM implementation and customization',
        'HubSpot setup and optimization',
        'Salesforce configuration and integration',
        'GoHighLevel deployment and training',
        'Custom CRM workflow automation'
      ],
      benefits: [
        'Centralized customer data management',
        'Improved sales team productivity',
        'Enhanced customer insights',
        'Automated marketing campaigns'
      ],
      colorClass: 'text-accent-purple',
      hoverClass: 'hover:border-accent-purple',
      bgClass: 'bg-accent-purple'
    },
    {
      title: 'ERP Solutions',
      icon: <FaCogs />,
      description: 'Unify your business operations with comprehensive ERP solutions that grow with your organization.',
      details: [
        'Odoo implementation and customization',
        'Module configuration and integration',
        'Custom module development',
        'Data migration and system setup',
        'Training and ongoing support'
      ],
      benefits: [
        'Integrated business processes',
        'Real-time operational visibility',
        'Reduced operational costs',
        'Improved decision-making'
      ],
      colorClass: 'text-accent-green',
      hoverClass: 'hover:border-accent-green',
      bgClass: 'bg-accent-green'
    },
    {
      title: 'MSP Services',
      icon: <FaServer />,
      description: 'Comprehensive managed services to keep your technology infrastructure secure, compliant, and optimized.',
      details: [
        'AI compliance and governance',
        'Security audits and assessments',
        'Network management and monitoring',
        'Cloud infrastructure management',
        'Disaster recovery planning'
      ],
      benefits: [
        'Proactive issue prevention',
        'Enhanced security posture',
        'Regulatory compliance assurance',
        'Predictable IT costs'
      ],
      colorClass: 'text-accent-orange',
      hoverClass: 'hover:border-accent-orange',
      bgClass: 'bg-accent-orange'
    }
  ];

  return (
    <main className="min-h-screen bg-bg-black text-text-primary">
      {/* Hero Section */}
      <ParallaxSection className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <AnimatedText className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary">
              Comprehensive solutions to transform and grow your business
            </p>
          </AnimatedText>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 -left-4 w-72 h-72 bg-accent-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute top-0 -right-4 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          />
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section className="py-20 bg-bg-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <GlowingServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-4xl mx-auto" direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-text-secondary">
              Let's discuss how our services can help you achieve your goals and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Schedule a Consultation
              </AnimatedButton>
              <AnimatedButton href="/about" variant="secondary" size="lg">
                Learn More About Us
              </AnimatedButton>
            </div>
          </AnimatedText>
        </div>
      </section>
    </main>
  );
}