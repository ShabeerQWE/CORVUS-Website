'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AboutParticles from '@/components/AboutParticles';
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedButton } from '@/components/AnimatedButton';
import { ParallaxSection } from '@/components/ParallaxSection';

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

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.',
      icon: '💡',
      hoverClass: 'hover:border-accent-blue'
    },
    {
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, ensuring our solutions exceed expectations.',
      icon: '⭐',
      hoverClass: 'hover:border-accent-purple'
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, working as an extension of their team.',
      icon: '🤝',
      hoverClass: 'hover:border-accent-green'
    }
  ];

  return (
    <main className="min-h-screen bg-bg-black text-text-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedText className="max-w-4xl mx-auto text-center" direction="up">
            <div className="mb-6">
              <AboutParticles />
            </div>
            <p className="text-xl md:text-2xl text-text-secondary">
              Smarter Systems. Seamless Growth.
            </p>
          </AnimatedText>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <ParallaxSection className="relative h-full" speed={0.15} offset={0}>
            <motion.div
              className="absolute top-0 -left-4 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
              className="absolute top-0 -right-4 w-72 h-72 bg-accent-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          </ParallaxSection>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-bg-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <AnimatedCard delay={0.1}>
              <div className="bg-bg-black border border-border-gray rounded-xl p-8 hover:border-accent-blue transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <motion.div
                    className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">🎯</span>
                  </motion.div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  To empower businesses through intelligent automation, transforming complex processes into streamlined,
                  efficient systems that drive growth and innovation. We believe in making advanced technology accessible
                  and practical for organizations of all sizes.
                </p>
              </div>
            </AnimatedCard>

            {/* Vision */}
            <AnimatedCard delay={0.2}>
              <div className="bg-bg-black border border-border-gray rounded-xl p-8 hover:border-accent-purple transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <motion.div
                    className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  To be the leading partner in digital transformation, recognized for our innovative solutions,
                  exceptional service, and commitment to our clients' success. We envision a future where every
                  business can harness the power of AI and automation.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedText className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Our Team
            </h2>
            <p className="text-xl text-text-secondary mb-12">
              A dedicated team of experts passionate about delivering innovative solutions
            </p>
          </AnimatedText>
          
          {/* Placeholder for team photo */}
          <AnimatedCard delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-bg-gray border border-border-gray rounded-xl p-12 mb-8 hover:border-accent-blue transition-all duration-300 max-w-4xl mx-auto"
            >
              <div className="bg-bg-black rounded-lg h-64 flex items-center justify-center">
                <motion.p
                  className="text-text-secondary text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Team Photo Coming Soon
                </motion.p>
              </div>
            </motion.div>
          </AnimatedCard>
          
          <AnimatedText className="text-center max-w-4xl mx-auto" direction="up" delay={0.3}>
            <p className="text-lg text-text-secondary">
              Our team combines deep technical expertise with business acumen to deliver solutions
              that not only work flawlessly but also drive real business value.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-bg-gray">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-text-secondary">
              The principles that guide everything we do
            </p>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`bg-bg-black border border-border-gray rounded-xl p-8 text-center ${value.hoverClass} transition-all duration-300 group h-full`}
                >
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedText className="max-w-3xl mx-auto" direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-text-secondary">
              Let's discuss how we can help you achieve your goals
            </p>
            <AnimatedButton href="/contact" variant="primary" size="lg">
              Get in Touch
            </AnimatedButton>
          </AnimatedText>
        </div>
      </section>
    </main>
  );
}