'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedCard } from '@/components/AnimatedCard';
import { ParallaxSection } from '@/components/ParallaxSection';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { StatefulButton } from '@/components/ui/stateful-button';

// Component for input field containers
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("relative flex w-full flex-col space-y-2", className)}>{children}</div>;
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
};

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Check if the response is JSON before trying to parse it
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to send message');
        } else {
          // Handle non-JSON responses (like HTML error pages)
          throw new Error(`Server error: ${response.status}`);
        }
      }

      setShowSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
      console.error('Error sending message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-black text-text-primary">
      {/* Hero Section */}
      <ParallaxSection className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4">
          <AnimatedText className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-text-secondary">
              Let&apos;s discuss how we can transform your business
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
              <div className="relative shadow-input rounded-none bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-4 md:rounded-2xl md:p-8 dark:bg-black">
                <h2 className="text-3xl font-bold mb-6 text-white">Send us a message</h2>
                
                {/* Status Messages */}
                {showSuccess && (
                  <div className="bg-accent-green/20 border border-accent-green text-accent-green px-4 py-3 rounded-lg mb-6">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </div>
                )}
                
                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <LabelInputContainer>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                        maxLength: { value: 50, message: 'Name must be less than 50 characters' }
                      })}
                      className={cn(
                        "bg-gray-800/50 border border-gray-700",
                        errors.name && "border-red-500"
                      )}
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">{errors.name.message}</span>
                    )}
                  </LabelInputContainer>

                  {/* Email Field */}
                  <LabelInputContainer>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        },
                        maxLength: { value: 100, message: 'Email must be less than 100 characters' }
                      })}
                      className={cn(
                        "bg-gray-800/50 border border-gray-700",
                        errors.email && "border-red-500"
                      )}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">{errors.email.message}</span>
                    )}
                  </LabelInputContainer>

                  {/* Company Field */}
                  <LabelInputContainer>
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your company name"
                      {...register('company', {
                        maxLength: { value: 100, message: 'Company name must be less than 100 characters' }
                      })}
                      className="bg-gray-800/50 border border-gray-700"
                    />
                    {errors.company && (
                      <span className="text-sm text-red-500">{errors.company.message}</span>
                    )}
                  </LabelInputContainer>

                  {/* Message Field */}
                  <LabelInputContainer>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Your message"
                      {...register('message', {
                        required: 'Message is required',
                        minLength: { value: 10, message: 'Message must be at least 10 characters' },
                        maxLength: { value: 1000, message: 'Message must be less than 1000 characters' }
                      })}
                      className={cn(
                        "flex w-full rounded-md border bg-gray-800/50 border-gray-700 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        errors.message && "border-red-500"
                      )}
                    />
                    {errors.message && (
                      <span className="text-sm text-red-500">{errors.message.message}</span>
                    )}
                  </LabelInputContainer>

                  {/* Submit Button */}
                  <StatefulButton
                    type="submit"
                    disabled={isLoading}
                    isLoading={isLoading}
                  >
                    Send Message
                  </StatefulButton>
                </form>
              </div>
            </AnimatedCard>

            {/* Right Column - Contact Information */}
            <AnimatedCard delay={0.2}>
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="bg-bg-black border border-border-gray p-8 rounded-xl hover:border-accent-purple transition-all duration-300"
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <motion.div
                  className="space-y-6"
                  variants={staggerChildren}
                  initial="initial"
                  animate="animate"
                  layout
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
