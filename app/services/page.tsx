'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Automation',
      icon: '🤖',
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
      ]
    },
    {
      title: 'CRM Systems',
      icon: '👥',
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
      ]
    },
    {
      title: 'ERP Solutions',
      icon: '🏢',
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
      ]
    },
    {
      title: 'MSP Services',
      icon: '🛡️',
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
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive solutions to transform and grow your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  {/* Service Details */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What we offer:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Get Started
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our services can help you achieve your goals and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/about"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}