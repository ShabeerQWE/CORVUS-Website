'use client'

import { motion } from 'framer-motion'
import {
  FaRobot,
  FaChartLine,
  FaCogs,
  FaServer,
  FaShieldAlt,
  FaHeadset,
  FaChartBar,
  FaRocket,
} from 'react-icons/fa'
import { AnimatedText } from '@/components/AnimatedText'
import { AnimatedCard } from '@/components/AnimatedCard'
import { AnimatedButton } from '@/components/AnimatedButton'
import { ParallaxSection } from '@/components/ParallaxSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-black text-text-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedText delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Smarter Systems. Seamless Growth.
                </span>
              </h1>
            </AnimatedText>
            
            <AnimatedText delay={0.3} direction="up">
              <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Corvus Labs helps businesses automate and optimize their operations with cutting-edge AI, CRM, ERP, and MSP solutions.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={0.5}>
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Get Started Today
              </AnimatedButton>
            </AnimatedText>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <ParallaxSection className="relative h-full" speed={0.15} offset={0}>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </ParallaxSection>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-bg-gray">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Comprehensive solutions tailored to transform your business operations
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Automation Card */}
            <AnimatedCard
              delay={0.1}
              className="bg-bg-black border border-border-gray rounded-xl p-8 hover:border-accent-blue transition-all duration-300 group"
            >
              <div className="text-accent-blue text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaRobot />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Automation</h3>
              <p className="text-text-secondary">
                Leverage cutting-edge AI to automate repetitive tasks, enhance decision-making, and unlock new efficiencies across your organization.
              </p>
            </AnimatedCard>

            {/* CRM Systems Card */}
            <AnimatedCard
              delay={0.2}
              className="bg-bg-black border border-border-gray rounded-xl p-8 hover:border-accent-purple transition-all duration-300 group"
            >
              <div className="text-accent-purple text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaChartLine />
              </div>
              <h3 className="text-2xl font-bold mb-3">CRM Systems</h3>
              <p className="text-text-secondary">
                Build stronger customer relationships with our custom CRM solutions that streamline sales, marketing, and support processes.
              </p>
            </AnimatedCard>

            {/* ERP Solutions Card */}
            <AnimatedCard
              delay={0.3}
              className="bg-bg-black border border-border-gray rounded-xl p-8 hover:border-accent-green transition-all duration-300 group"
            >
              <div className="text-accent-green text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaCogs />
              </div>
              <h3 className="text-2xl font-bold mb-3">ERP Solutions</h3>
              <p className="text-text-secondary">
                Integrate and optimize your entire business operations with comprehensive ERP systems tailored to your industry needs.
              </p>
            </AnimatedCard>

            {/* MSP Services Card */}
            <AnimatedCard
              delay={0.4}
              className="bg-bg-black border border-border-gray rounded-xl p-8 hover:border-accent-orange transition-all duration-300 group"
            >
              <div className="text-accent-orange text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaServer />
              </div>
              <h3 className="text-2xl font-bold mb-3">MSP Services</h3>
              <p className="text-text-secondary">
                Focus on your core business while we manage your IT infrastructure with proactive monitoring, maintenance, and support.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Trust/Value Proposition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Corvus Labs?</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              We deliver measurable results that transform your business
            </p>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Value Prop 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-accent-blue text-5xl mb-4 mx-auto">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-bold mb-2">Reduce Costs by 40%</h3>
              <p className="text-text-secondary">
                Our automation solutions significantly cut operational expenses
              </p>
            </motion.div>

            {/* Value Prop 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-accent-purple text-5xl mb-4 mx-auto">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-text-secondary">
                Round-the-clock assistance to keep your systems running smoothly
              </p>
            </motion.div>

            {/* Value Prop 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-accent-green text-5xl mb-4 mx-auto">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-text-secondary">
                Bank-grade security protocols to protect your valuable data
              </p>
            </motion.div>

            {/* Value Prop 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-accent-orange text-5xl mb-4 mx-auto">
                <FaRocket />
              </div>
              <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
              <p className="text-text-secondary">
                Get up and running quickly with our streamlined implementation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center max-w-3xl mx-auto" direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Join hundreds of companies that have revolutionized their operations with Corvus Labs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Book a Consultation
              </AnimatedButton>
              <AnimatedButton href="/services" variant="secondary" size="lg">
                Learn More
              </AnimatedButton>
            </div>
          </AnimatedText>
        </div>
      </section>
    </main>
  )
}
