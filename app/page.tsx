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
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-black text-text-primary">
      {/* Hero Section with WavyBackground */}
      <WavyBackground className="max-w-4xl mx-auto pb-40">
<h1 className="text-2xl md:text-4xl lg:text-7xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
  Smarter Systems.<br />Seamless Growth.
</h1>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Corvus Labs helps businesses automate and optimize their operations with cutting-edge AI, CRM, ERP, and MSP solutions.
        </p>
        <div className="mt-8 flex justify-center">
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Started Today
          </AnimatedButton>
        </div>
      </WavyBackground>

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
              <div className="text-accent-blue text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
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
              <div className="text-accent-purple text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
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
              <div className="text-accent-green text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
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
              <div className="text-accent-orange text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
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