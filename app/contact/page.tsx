'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/moving-border';
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedCard } from '@/components/AnimatedCard';
import { ParallaxSection } from '@/components/ParallaxSection';
import { AnimatedInput } from '@/components/AnimatedInput';

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setShowSuccess(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg-black text-text-primary">
      {/* Hero Section */}
      <ParallaxSection className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-text-secondary">
              Let's discuss how we can transform your business
            </p>
          </AnimatedText>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10">
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
        </div>
      </ParallaxSection>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-bg-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <AnimatedCard delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                
                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-accent-green/20 border border-accent-green text-accent-green px-4 py-3 rounded-lg mb-6"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <AnimatedInput
                  label="Name *"
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  error={errors.name?.message}
                />

                {/* Email Field */}
                <AnimatedInput
                  label="Email *"
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  error={errors.email?.message}
                />

                {/* Company Field */}
                <AnimatedInput
                  label="Company (optional)"
                  type="text"
                  id="company"
                  {...register('company')}
                />

                {/* Message Field */}
                <AnimatedInput
                  label="Message *"
                  textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Message is required' })}
                  error={errors.message?.message}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  containerClassName="w-full h-14 hover:scale-[1.02] transition-transform duration-200"
                  className="bg-accent-blue hover:bg-accent-purple text-white font-semibold text-base transition-all duration-300"
                  borderClassName="bg-[radial-gradient(var(--accent-blue)_40%,transparent_60%)]"
                  duration={4000}
                >
                  Send Message
                </Button>
              </form>
              </div>
            </AnimatedCard>

            {/* Right Column - Contact Information */}
            <AnimatedCard delay={0.2}>
              <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-bg-black border border-border-gray p-8 rounded-xl hover:border-accent-purple transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <motion.div 
                className="space-y-6"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                {/* Email */}
                <motion.div variants={fadeInUp}>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:info@corvuslabs.com" 
                    className="text-accent-blue hover:text-accent-purple transition-colors duration-300"
                  >
                    info@corvuslabs.com
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeInUp}>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+15551234567" 
                    className="text-accent-blue hover:text-accent-purple transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </motion.div>

                {/* Address */}
                <motion.div variants={fadeInUp}>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-text-secondary">
                    123 Innovation Drive<br />
                    Tech City, TC 12345
                  </p>
                </motion.div>

                {/* Business Hours */}
                <motion.div variants={fadeInUp}>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-text-secondary">
                    Monday-Friday<br />
                    9AM-6PM EST
                  </p>
                </motion.div>
              </motion.div>

              {/* Decorative Element */}
              <div className="mt-8 pt-8 border-t border-border-gray">
                <p className="text-text-secondary text-sm">
                  We typically respond within 24 business hours. For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedText className="max-w-4xl mx-auto text-center" direction="up">
            <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
            <p className="text-lg text-text-secondary mb-8">
              Book a 30-minute consultation with our experts
            </p>
          </AnimatedText>
          
          <AnimatedCard delay={0.2}>
            {/* Calendly Widget Placeholder */}
            <div className="bg-bg-gray border-2 border-dashed border-border-gray rounded-xl p-16 hover:border-accent-blue transition-all duration-300 max-w-4xl mx-auto">
              <motion.div
                className="text-text-secondary"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.svg
                  className="w-16 h-16 mx-auto mb-4 text-accent-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </motion.svg>
                <p className="text-xl font-medium mb-2">Calendly widget will be embedded here</p>
                <p className="text-sm">Integration coming soon</p>
              </motion.div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}